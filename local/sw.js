
const CACHE='iotcloud-9bf73af4d3b3d302';
const FILES=["./","index.html","manifest.webmanifest","icons/iotcloud.svg","icons/icon-192.png","icons/icon-512.png","icons/apple-touch-icon.png","assets/index-DPinOil4.css","assets/App-BLA4tSRz.css","assets/LoginPage-DgSSO5I3.css","assets/LocalConnect-DHhIIlr8.css","assets/AuthShell-DJ4Pg5Xy.css","assets/AdminPage-drW-Mofc.css","assets/index-BHvrZtoT.js","assets/App-CdY1RQ2L.js","assets/GitHubPage-C14F7SpI.js","assets/LoginPage-DhKExfRL.js","assets/LocalConnect-i-NS2O03.js","assets/githubAuth-B49jz1Ja.js","assets/RegisterPage-Can9ha01.js","assets/AuthShell-C96KUhd2.js","assets/AdminPage-Cfqtjes_.js","assets/deviceProtocol-BzlXO54o.js","assets/ThemeToggle-BCwyiE2H.js"];
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
