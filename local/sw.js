
const CACHE='iotcloud-21dcac50dd058494';
const FILES=["./","index.html","manifest.webmanifest","icons/iotcloud.svg","icons/icon-192.png","icons/icon-512.png","icons/apple-touch-icon.png","assets/index-BVPCR-Hy.css","assets/App-CAklT5ZQ.css","assets/LoginPage-D6yuC43U.css","assets/LocalConnect-CcxkhiXu.css","assets/AuthShell-g-oslqq2.css","assets/AdminPage-D6sQsMhK.css","assets/index-B8fdpdzh.js","assets/App-B8XY1xx1.js","assets/GitHubPage-Q7OLOuhz.js","assets/LoginPage-Brw67T-O.js","assets/LocalConnect-D2BmoSb2.js","assets/githubAuth-DbpxNFM_.js","assets/RegisterPage-BpboieDa.js","assets/AuthShell-Dj2Eq5bG.js","assets/AdminPage-DkPOPhg4.js","assets/deviceProtocol-Bia9WZ0V.js","assets/ThemeToggle-Cg_kjLw8.js"];
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
