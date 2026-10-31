
const CACHE='iotcloud-d71b1cbc2a6b1ced';
const FILES=["./","index.html","manifest.webmanifest","icons/iotcloud.svg","icons/icon-192.png","icons/icon-512.png","icons/apple-touch-icon.png","assets/index-DJo--jyd.css","assets/App-Dvvf6f0Z.css","assets/LoginPage-DwkZsze-.css","assets/LocalConnect-DHhIIlr8.css","assets/AuthShell-DJ4Pg5Xy.css","assets/AdminPage-drW-Mofc.css","assets/index-COSDhjtT.js","assets/App-CDSgRDY0.js","assets/GitHubPage-B-F0pnpG.js","assets/LoginPage-B60oJLIw.js","assets/LocalConnect-B1uZkh1t.js","assets/githubAuth-CTZj9Lu6.js","assets/RegisterPage-D5jBQlub.js","assets/AuthShell-B4YUip2R.js","assets/AdminPage-Dz9ahi08.js","assets/deviceProtocol-CxiUz5yi.js","assets/ThemeToggle-DF85SslJ.js"];
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
