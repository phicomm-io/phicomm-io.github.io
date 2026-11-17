
const CACHE='iotcloud-71bc23ca0f14f6c3';
const FILES=["./","index.html","frontend-build.json","manifest.webmanifest","icons/iotcloud.svg","icons/icon-192.png","icons/icon-512.png","icons/apple-touch-icon.png","assets/index-wvBR9p2T.css","assets/App-xwFQ4tyb.css","assets/LoginPage-DwkZsze-.css","assets/LocalConnect-DHhIIlr8.css","assets/AuthShell-DJ4Pg5Xy.css","assets/AdminPage-drW-Mofc.css","assets/index-Dq47Hryp.js","assets/App-1HVfWoto.js","assets/GitHubPage-CJ_ND2gR.js","assets/LoginPage-CHi697RL.js","assets/LocalConnect-BmgTbwAL.js","assets/githubAuth-D0jf5ZIS.js","assets/RegisterPage-DZOmwkLa.js","assets/AuthShell-BNxK7gtb.js","assets/AdminPage-BrJXvg-5.js","assets/deviceProtocol-BCzAy2KW.js","assets/ThemeToggle-Bqn1d8En.js"];
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
