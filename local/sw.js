
const CACHE='iotcloud-572d3513b2845d1e';
const FILES=["./","index.html","manifest.webmanifest","icons/iotcloud.svg","icons/icon-192.png","icons/icon-512.png","icons/apple-touch-icon.png","assets/index-DJo--jyd.css","assets/App-Dvvf6f0Z.css","assets/LoginPage-DwkZsze-.css","assets/LocalConnect-DHhIIlr8.css","assets/AuthShell-DJ4Pg5Xy.css","assets/AdminPage-drW-Mofc.css","assets/index-DdBPxVgy.js","assets/App-DEbOKMi-.js","assets/GitHubPage-58pETSEo.js","assets/LoginPage-cHFizebd.js","assets/LocalConnect-BVOrl4Sw.js","assets/githubAuth-2RNzK3VR.js","assets/RegisterPage-C8z9EsO4.js","assets/AuthShell-DlhZ4_BX.js","assets/AdminPage-BnoOmkMO.js","assets/deviceProtocol-Wo_zpOQY.js","assets/ThemeToggle-COXNdyKY.js"];
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
