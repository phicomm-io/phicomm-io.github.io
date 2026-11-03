
const CACHE='iotcloud-39828d5f616e418d';
const FILES=["./","index.html","manifest.webmanifest","icons/iotcloud.svg","icons/icon-192.png","icons/icon-512.png","icons/apple-touch-icon.png","assets/index-DJo--jyd.css","assets/App-Dvvf6f0Z.css","assets/LoginPage-DwkZsze-.css","assets/LocalConnect-DHhIIlr8.css","assets/AuthShell-DJ4Pg5Xy.css","assets/AdminPage-drW-Mofc.css","assets/index-D9Qg93av.js","assets/App-m4t8UvHZ.js","assets/GitHubPage-BQ__7dZL.js","assets/LoginPage-CcIUI-vd.js","assets/LocalConnect-DTHy1FSg.js","assets/githubAuth-CXsUgtYX.js","assets/RegisterPage-BLlBRUCx.js","assets/AuthShell-BH19_fa2.js","assets/AdminPage-DBp7gsXg.js","assets/deviceProtocol-Bz42NXSZ.js","assets/ThemeToggle-C04IpUKB.js"];
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
