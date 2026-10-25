
const CACHE='iotcloud-b2ed918a73a820c3';
const FILES=["./","index.html","manifest.webmanifest","icons/iotcloud.svg","icons/icon-192.png","icons/icon-512.png","icons/apple-touch-icon.png","assets/index-DpIcs4bJ.css","assets/App-BGrP9XNc.css","assets/LoginPage-R9rE9nbS.css","assets/LocalConnect-BCD1ettN.css","assets/AuthShell-DJ4Pg5Xy.css","assets/AdminPage-drW-Mofc.css","assets/index-BfmwtsE1.js","assets/App-Pq31a2qW.js","assets/GitHubPage-D1dmRLHB.js","assets/LoginPage-LgbY1THw.js","assets/LocalConnect-DJ2kEEW-.js","assets/githubAuth-BHqFhDNE.js","assets/RegisterPage-BVP5LK80.js","assets/AuthShell-Vf0ZUTkB.js","assets/AdminPage-Brph2dUZ.js","assets/deviceProtocol-Bw868fM2.js","assets/ThemeToggle-DrAVGSin.js"];
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
