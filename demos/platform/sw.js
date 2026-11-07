
const CACHE='iotcloud-833be6a25b0afd96';
const FILES=["./","index.html","manifest.webmanifest","icons/iotcloud.svg","icons/icon-192.png","icons/icon-512.png","icons/apple-touch-icon.png","assets/index-COTt4sAx.css","assets/App-C3BwHGKb.css","assets/LoginPage-DwkZsze-.css","assets/LocalConnect-DHhIIlr8.css","assets/AuthShell-DJ4Pg5Xy.css","assets/AdminPage-drW-Mofc.css","assets/index-BxA05H88.js","assets/demo-OtSeTztN.js","assets/App-X5ENNO-L.js","assets/GitHubPage-vzx7lEST.js","assets/LoginPage-DSKtznvl.js","assets/LocalConnect-BroeBfhs.js","assets/githubAuth-CcvfczLS.js","assets/RegisterPage-yYdKSujC.js","assets/AuthShell-BegCpfum.js","assets/AdminPage-fEhg-Wa_.js","assets/deviceProtocol-NkJaAPIO.js","assets/ThemeToggle-BolsvPkx.js"];
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
