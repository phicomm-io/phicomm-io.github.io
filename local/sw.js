
const CACHE='iotcloud-3a184a237fd453f3';
const FILES=["./","index.html","manifest.webmanifest","icons/iotcloud.svg","icons/icon-192.png","icons/icon-512.png","icons/apple-touch-icon.png","assets/index-DPinOil4.css","assets/App-BWOW4LzY.css","assets/LoginPage-BuGrLOwH.css","assets/LocalConnect-DHhIIlr8.css","assets/AuthShell-DJ4Pg5Xy.css","assets/AdminPage-drW-Mofc.css","assets/index-2YQd_468.js","assets/App-B7peg1TR.js","assets/GitHubPage-B95eQDCh.js","assets/LoginPage-mnY0eKYA.js","assets/LocalConnect-JAQcmsQf.js","assets/githubAuth-B6TXtW8E.js","assets/RegisterPage-BEE86r_h.js","assets/AuthShell-6Xjj_FFJ.js","assets/AdminPage-Dmg7R6jp.js","assets/deviceProtocol-tbi0YQut.js","assets/ThemeToggle-BwrGNMrm.js"];
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
