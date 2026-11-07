
const CACHE='iotcloud-d43abef4ea6c29ae';
const FILES=["./","index.html","manifest.webmanifest","icons/iotcloud.svg","icons/icon-192.png","icons/icon-512.png","icons/apple-touch-icon.png","assets/index-wvBR9p2T.css","assets/App-D1Yw5Lw6.css","assets/LoginPage-DwkZsze-.css","assets/LocalConnect-DHhIIlr8.css","assets/AuthShell-DJ4Pg5Xy.css","assets/AdminPage-drW-Mofc.css","assets/index-BAYWCbxd.js","assets/App-CTMKf_vS.js","assets/GitHubPage-J_IeiTWY.js","assets/LoginPage-BgGA3uNz.js","assets/LocalConnect-B3ylJCxV.js","assets/githubAuth-Z-Nvn-ck.js","assets/RegisterPage-CvTAsU7h.js","assets/AuthShell-Bf33JER9.js","assets/AdminPage-l-Xs0EYJ.js","assets/deviceProtocol-C_GQwyMA.js","assets/ThemeToggle-DhOQ8lYt.js"];
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
