
const CACHE='iotcloud-af6b5e3d187061b3';
const FILES=["./","index.html","manifest.webmanifest","icons/iotcloud.svg","icons/icon-192.png","icons/icon-512.png","icons/apple-touch-icon.png","assets/index-CdJ4D_So.css","assets/App-Bd_srBE4.css","assets/LoginPage-D6yuC43U.css","assets/LocalConnect-CcxkhiXu.css","assets/AuthShell-g-oslqq2.css","assets/AdminPage-D6sQsMhK.css","assets/index-Ye55lLGo.js","assets/App-B_W8043I.js","assets/GitHubPage-BmUD3r7i.js","assets/LoginPage-_2q076Zi.js","assets/LocalConnect-Dn1zJ1D1.js","assets/githubAuth-C-3-CNdD.js","assets/RegisterPage-BaZb_wVp.js","assets/AuthShell-Db5OVFEx.js","assets/AdminPage-CtOBXLsv.js","assets/deviceProtocol-Bia9WZ0V.js","assets/ThemeToggle-CTCRG7Q_.js"];
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
