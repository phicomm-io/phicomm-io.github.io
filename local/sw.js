
const CACHE='iotcloud-41f8223b889ee23d';
const FILES=["./","index.html","manifest.webmanifest","icons/iotcloud.svg","icons/icon-192.png","icons/icon-512.png","icons/apple-touch-icon.png","assets/index-DPinOil4.css","assets/App-BWOW4LzY.css","assets/LoginPage-BuGrLOwH.css","assets/LocalConnect-DHhIIlr8.css","assets/AuthShell-DJ4Pg5Xy.css","assets/AdminPage-drW-Mofc.css","assets/index-BQObtZi8.js","assets/App-DhiMHhDn.js","assets/GitHubPage-STbd_rgG.js","assets/LoginPage-Yc_MQdHu.js","assets/LocalConnect-R4NJpV5M.js","assets/githubAuth-CqDuJkTg.js","assets/RegisterPage-CT8KZpYN.js","assets/AuthShell-ciItn7c1.js","assets/AdminPage-wVlaMVpl.js","assets/deviceProtocol-BuAZs_ld.js","assets/ThemeToggle-WW1LSqxk.js"];
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
