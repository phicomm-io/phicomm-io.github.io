
const CACHE='iotcloud-9b199696838ae659';
const FILES=["./","index.html","manifest.webmanifest","icons/iotcloud.svg","icons/icon-192.png","icons/icon-512.png","icons/apple-touch-icon.png","assets/index-7CcyDHIe.css","assets/App-DSfA8H4c.css","assets/LoginPage-BuGrLOwH.css","assets/LocalConnect-DHhIIlr8.css","assets/AuthShell-DJ4Pg5Xy.css","assets/AdminPage-drW-Mofc.css","assets/index-B3lGPaTC.js","assets/App--zt1oIUo.js","assets/GitHubPage-DvnMIlbt.js","assets/LoginPage-BJhFcA-P.js","assets/LocalConnect-BCWYBBeB.js","assets/githubAuth-CkwKR_w6.js","assets/RegisterPage-C9p3Obj7.js","assets/AuthShell-uty20C3M.js","assets/AdminPage-CffZ5Kxj.js","assets/deviceProtocol-B-R5Ved3.js","assets/ThemeToggle-BH8NHzF1.js"];
const urls=FILES.map(file=>new URL(file,self.registration.scope).href);
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(urls))));
self.addEventListener('message',event=>{if(event.data==='ACTIVATE')self.skipWaiting();});
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('iotcloud-')&&key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{
 const request=event.request;
 const url=new URL(request.url);url.hash='';
 if(request.method!=='GET'||!urls.includes(url.href))return;
 if(request.mode==='navigate'){
  event.respondWith(fetch(request).catch(()=>caches.open(CACHE).then(cache=>cache.match(new URL('index.html',self.registration.scope).href))));return;
 }
 event.respondWith(caches.open(CACHE).then(async cache=>(await cache.match(url.href))||fetch(request)));
});
