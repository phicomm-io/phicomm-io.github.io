
const CACHE='iotcloud-49b9580bde61e7de';
const FILES=["./","index.html","manifest.webmanifest","icons/iotcloud.svg","icons/icon-192.png","icons/icon-512.png","icons/apple-touch-icon.png","assets/index-o950Fgqy.css","assets/App-D1Yw5Lw6.css","assets/LoginPage-DwkZsze-.css","assets/LocalConnect-DHhIIlr8.css","assets/AuthShell-DJ4Pg5Xy.css","assets/AdminPage-drW-Mofc.css","assets/index-dFoD9JK6.js","assets/App-CFSGALg7.js","assets/GitHubPage-BUYlfSDC.js","assets/LoginPage-BPXy_llY.js","assets/LocalConnect-ClcyArop.js","assets/githubAuth-CKqkwOBH.js","assets/RegisterPage-DfzTAr73.js","assets/AuthShell-DjylQ6bU.js","assets/AdminPage-CLTgdRGH.js","assets/deviceProtocol-BJvQceKx.js","assets/ThemeToggle-C7RkTbdb.js"];
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
