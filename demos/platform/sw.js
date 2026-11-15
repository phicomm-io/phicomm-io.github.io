
const CACHE='iotcloud-487b785e288ca7ca';
const FILES=["./","index.html","manifest.webmanifest","icons/iotcloud.svg","icons/icon-192.png","icons/icon-512.png","icons/apple-touch-icon.png","assets/index-Dy-Ag0Yp.css","assets/App-CiwdSHgT.css","assets/LoginPage-DwkZsze-.css","assets/LocalConnect-DHhIIlr8.css","assets/AuthShell-DJ4Pg5Xy.css","assets/AdminPage-drW-Mofc.css","assets/index-B3mxFIXl.js","assets/demo-Brd3d-A-.js","assets/App-vOLc9j9f.js","assets/GitHubPage-Cgjl658r.js","assets/LoginPage-B2YOGoiz.js","assets/LocalConnect-C_vgEI0Q.js","assets/githubAuth-BsPkSZ0S.js","assets/RegisterPage-s_WXFwtM.js","assets/AuthShell-DWSm71dx.js","assets/AdminPage-CPhByxzZ.js","assets/deviceProtocol-BFM5glLH.js","assets/ThemeToggle-CdyLzRKo.js"];
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
