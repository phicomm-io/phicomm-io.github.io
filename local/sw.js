
const CACHE='iotcloud-068fedee8235a551';
const FILES=["./","index.html","manifest.webmanifest","icons/iotcloud.svg","icons/icon-192.png","icons/icon-512.png","icons/apple-touch-icon.png","assets/index-CAdtzOCP.css","assets/App-cCzAF8IC.css","assets/LoginPage-D6yuC43U.css","assets/LocalConnect-CcxkhiXu.css","assets/AuthShell-g-oslqq2.css","assets/AdminPage-D6sQsMhK.css","assets/index-Bqm-5jkQ.js","assets/App-DeS9lqn7.js","assets/GitHubPage-DBIC7Nk0.js","assets/LoginPage-D5YkFkk_.js","assets/LocalConnect-qk83OlzE.js","assets/githubAuth-BIocjkxX.js","assets/RegisterPage-CIFxe_Ry.js","assets/AuthShell-CwQpG_FA.js","assets/AdminPage-DeMISpeZ.js","assets/deviceProtocol-Bw1QiDfV.js","assets/ThemeToggle-CBsSF01Y.js"];
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
