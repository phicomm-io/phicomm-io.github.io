
const CACHE='iotcloud-72d55069a6fc5db2';
const FILES=["./","index.html","manifest.webmanifest","icons/iotcloud.svg","icons/icon-192.png","icons/icon-512.png","icons/apple-touch-icon.png","assets/index-BnLuw__o.css","assets/App-Bd_srBE4.css","assets/LoginPage-D6yuC43U.css","assets/LocalConnect-CcxkhiXu.css","assets/AuthShell-g-oslqq2.css","assets/AdminPage-D6sQsMhK.css","assets/index-CSeh7g8H.js","assets/App-Bhj_6Afa.js","assets/GitHubPage-QMyNsr6Q.js","assets/LoginPage-Bp6bUD4T.js","assets/LocalConnect-DHnulqmd.js","assets/githubAuth-QmK4IS5h.js","assets/RegisterPage-ifCiof4M.js","assets/AuthShell-B6wpe0-T.js","assets/AdminPage-BTzrWq99.js","assets/deviceProtocol-Bia9WZ0V.js","assets/ThemeToggle-B5VVKX0G.js"];
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
