
const CACHE='iotcloud-32c8c645205c621b';
const FILES=["./","index.html","manifest.webmanifest","icons/iotcloud.svg","icons/icon-192.png","icons/icon-512.png","icons/apple-touch-icon.png","assets/index-7CcyDHIe.css","assets/App-Rxdgi4YB.css","assets/LoginPage-BuGrLOwH.css","assets/LocalConnect-DHhIIlr8.css","assets/AuthShell-DJ4Pg5Xy.css","assets/AdminPage-drW-Mofc.css","assets/index-CFURa4ua.js","assets/App-BQ0qCUS2.js","assets/GitHubPage-B3PFlZ-F.js","assets/LoginPage-D5JY-5AP.js","assets/LocalConnect-CPmfvjMI.js","assets/githubAuth-CzmBrxu9.js","assets/RegisterPage-C4IGlUXw.js","assets/AuthShell-2AgvQKWh.js","assets/AdminPage-BzsCwZYT.js","assets/deviceProtocol-N6fKYvlr.js","assets/ThemeToggle-Cko-psWj.js"];
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
