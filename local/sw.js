
const CACHE='iotcloud-d1e77d9587f9ffef';
const FILES=["./","index.html","manifest.webmanifest","icons/iotcloud.svg","icons/icon-192.png","icons/icon-512.png","icons/apple-touch-icon.png","assets/index-CAdtzOCP.css","assets/App-DrX-chhH.css","assets/LoginPage-D6yuC43U.css","assets/LocalConnect-CcxkhiXu.css","assets/AuthShell-g-oslqq2.css","assets/AdminPage-D6sQsMhK.css","assets/index-mC5PqDOE.js","assets/App-1vmqoQ1M.js","assets/GitHubPage-k6XzeMCN.js","assets/LoginPage-CbSz03fk.js","assets/LocalConnect-CuC2iT-K.js","assets/githubAuth-zfJwMpo2.js","assets/RegisterPage-STL4REkI.js","assets/AuthShell-C8FUJ_ky.js","assets/AdminPage-AZN1ENNR.js","assets/deviceProtocol-Bw1QiDfV.js","assets/ThemeToggle-CK-w6oEU.js"];
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
