
const CACHE='iotcloud-61f782e398479655';
const FILES=["./","index.html","manifest.webmanifest","icons/iotcloud.svg","icons/icon-192.png","icons/icon-512.png","icons/apple-touch-icon.png","assets/index-DPinOil4.css","assets/App-BQnugqJq.css","assets/LoginPage-DgSSO5I3.css","assets/LocalConnect-BCD1ettN.css","assets/AuthShell-DJ4Pg5Xy.css","assets/AdminPage-drW-Mofc.css","assets/index-C-cgVeQf.js","assets/App-BqTtfLk7.js","assets/GitHubPage-BS1hQ8rH.js","assets/LoginPage-Dbr26Py4.js","assets/LocalConnect-CGE6AXJF.js","assets/githubAuth-UsUKMHBn.js","assets/RegisterPage-B7Q7P8Qz.js","assets/AuthShell-s4ITVEOT.js","assets/AdminPage-gOx3jt9W.js","assets/deviceProtocol-D5eMKC9q.js","assets/ThemeToggle-CPMvjmFH.js"];
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
