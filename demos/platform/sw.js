
const CACHE='iotcloud-d740b400929220fc';
const FILES=["./","index.html","manifest.webmanifest","icons/iotcloud.svg","icons/icon-192.png","icons/icon-512.png","icons/apple-touch-icon.png","assets/index-dSWPr67D.css","assets/App-BbJuTghz.css","assets/LoginPage-BuGrLOwH.css","assets/LocalConnect-DHhIIlr8.css","assets/AuthShell-DJ4Pg5Xy.css","assets/AdminPage-drW-Mofc.css","assets/index-BH6fyKKG.js","assets/demo-BsdSXLEm.js","assets/App-DcLnMhCW.js","assets/GitHubPage-BTdp-c9K.js","assets/LoginPage-7NH2CV2f.js","assets/LocalConnect-C9cyeqg5.js","assets/githubAuth-DPdIC2V4.js","assets/RegisterPage-BZVhqUu4.js","assets/AuthShell-Clg3hCvY.js","assets/AdminPage-DylQvUAH.js","assets/deviceProtocol-BDTa7B6u.js","assets/ThemeToggle-D0rFI_ua.js"];
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
