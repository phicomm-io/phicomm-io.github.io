
const CACHE='iotcloud-eb8db0d1496b21ba';
const FILES=["./","index.html","manifest.webmanifest","icons/iotcloud.svg","icons/icon-192.png","icons/icon-512.png","icons/apple-touch-icon.png","assets/index-wvBR9p2T.css","assets/App-W5dbUgEv.css","assets/LoginPage-DwkZsze-.css","assets/LocalConnect-DHhIIlr8.css","assets/AuthShell-DJ4Pg5Xy.css","assets/AdminPage-drW-Mofc.css","assets/index-BslecJka.js","assets/App-CosOpMCw.js","assets/GitHubPage-DkwwldWo.js","assets/LoginPage-WsEgFBLd.js","assets/LocalConnect-DkNYm_Mn.js","assets/githubAuth-DEa1GoFz.js","assets/RegisterPage-DIppzvM0.js","assets/AuthShell-8oO_B7WJ.js","assets/AdminPage-BXEW7V59.js","assets/deviceProtocol-SqDXniX4.js","assets/ThemeToggle-DODZePw_.js"];
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
