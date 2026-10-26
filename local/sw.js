
const CACHE='iotcloud-10030dba0b223eb7';
const FILES=["./","index.html","manifest.webmanifest","icons/iotcloud.svg","icons/icon-192.png","icons/icon-512.png","icons/apple-touch-icon.png","assets/index-DPinOil4.css","assets/App-BWOW4LzY.css","assets/LoginPage-BuGrLOwH.css","assets/LocalConnect-DHhIIlr8.css","assets/AuthShell-DJ4Pg5Xy.css","assets/AdminPage-drW-Mofc.css","assets/index-BM9Ci6KV.js","assets/App-WHJd2pQc.js","assets/GitHubPage-C_iLdfL8.js","assets/LoginPage-sNU1zviy.js","assets/LocalConnect-spmA62lg.js","assets/githubAuth-Cl84kO6p.js","assets/RegisterPage-D_pRmlCu.js","assets/AuthShell-7z7sVjl4.js","assets/AdminPage-Cu9pY-_m.js","assets/deviceProtocol-Ced0hCNM.js","assets/ThemeToggle-DMQ2T2q7.js"];
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
