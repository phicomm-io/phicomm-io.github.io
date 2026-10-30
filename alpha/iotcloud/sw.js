
const CACHE='iotcloud-b7129cc70d7adffa';
const FILES=["./","index.html","manifest.webmanifest","icons/iotcloud.svg","icons/icon-192.png","icons/icon-512.png","icons/apple-touch-icon.png","assets/index-DNGBb-vk.css","assets/App-Bv-P-RMd.css","assets/LoginPage-BuGrLOwH.css","assets/LocalConnect-DHhIIlr8.css","assets/AuthShell-DJ4Pg5Xy.css","assets/AdminPage-drW-Mofc.css","assets/index-C2bU_0Tp.js","assets/App-BYWQ2fF8.js","assets/GitHubPage-D_YyoSIc.js","assets/LoginPage-CrrGZAfW.js","assets/LocalConnect-BFeQmepe.js","assets/githubAuth-BcsWqIqa.js","assets/RegisterPage-Cnk0H2FV.js","assets/AuthShell-ChEAv0V3.js","assets/AdminPage-BiAtF7U0.js","assets/deviceProtocol-CTemZGwz.js","assets/ThemeToggle-B8f8GLll.js"];
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
