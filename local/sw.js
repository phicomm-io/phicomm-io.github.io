
const CACHE='iotcloud-ee8cb58dd300e1a6';
const FILES=["./","index.html","manifest.webmanifest","icons/iotcloud.svg","icons/icon-192.png","icons/icon-512.png","icons/apple-touch-icon.png","assets/index-BnLuw__o.css","assets/App-Bd_srBE4.css","assets/LoginPage-D6yuC43U.css","assets/LocalConnect-CcxkhiXu.css","assets/AuthShell-g-oslqq2.css","assets/AdminPage-D6sQsMhK.css","assets/index-VVWzghOh.js","assets/App-Bo1K2yaz.js","assets/GitHubPage-jC4BNVFU.js","assets/LoginPage-MksacfWJ.js","assets/LocalConnect-B_jyKmIi.js","assets/githubAuth-C6LUPKjQ.js","assets/RegisterPage-Bix4CH3N.js","assets/AuthShell-B6GAUqx8.js","assets/AdminPage-CEdZtsXf.js","assets/deviceProtocol-Bia9WZ0V.js","assets/ThemeToggle-BC9gE1kh.js"];
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
