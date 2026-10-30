
const CACHE='iotcloud-1701e35a3b8f9edc';
const FILES=["./","index.html","manifest.webmanifest","icons/iotcloud.svg","icons/icon-192.png","icons/icon-512.png","icons/apple-touch-icon.png","assets/index-7CcyDHIe.css","assets/App-DSfA8H4c.css","assets/LoginPage-BuGrLOwH.css","assets/LocalConnect-DHhIIlr8.css","assets/AuthShell-DJ4Pg5Xy.css","assets/AdminPage-drW-Mofc.css","assets/index-bgNK8pnF.js","assets/App-Br6f_01b.js","assets/GitHubPage-C4ZJf25g.js","assets/LoginPage-B1boT1-j.js","assets/LocalConnect-D21x8gsU.js","assets/githubAuth-ByhgxCLV.js","assets/RegisterPage-BySBshnt.js","assets/AuthShell-B_01whVd.js","assets/AdminPage-B0tvqP1J.js","assets/deviceProtocol-Dm_4RXCa.js","assets/ThemeToggle-D-JlQWlI.js"];
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
