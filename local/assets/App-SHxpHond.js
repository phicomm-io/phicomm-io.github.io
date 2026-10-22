import{_ as Pt,o as Ie,c as Ce,a as E,n as Qt,t as Pe,b as Fe,F as dt,r as vn,d as We,e as He,f as Ve,g as Xe,w as et,v as ct,h as Bt,i as Ue,j as wn,k as _n,u as Ke,l as gt,m as Il,p as El,q as rn,s as hr,x as At,y as Vo,z as ze,A as Cl,B as Qo,C as Ml,D as Pl,E as fr,G as Go,N as Ol,H as Ii,I as wt,J as Nl,K as Ei,L as Rl,M as Ul,O as Ll,P as ql,Q as jl,R as Fl,S as zt,T as Tn,U as Ci,V as ar,W as Bl,X as Dl,Y as Mi}from"./index-BXWtkgDs.js";import{d as Le,l as Wl,a as lr,u as Pi,t as Oi,r as cr,b as Hl,c as Ni}from"./deviceProtocol-Bw1QiDfV.js";import{G as $l,s as zl,l as Kl,a as Vl,b as Ql,c as Ri,d as Gl,e as Yl,f as Jl,L as Xl}from"./LocalConnect-mPKFsPgH.js";import{_ as Zl}from"./ThemeToggle-CSkoBgCy.js";import"./githubAuth-CK3SSYQ2.js";var pi=Object.defineProperty,ec=Object.getOwnPropertyDescriptor,tc=Object.getOwnPropertyNames,nc=Object.prototype.hasOwnProperty,mt=(c,f)=>()=>(c&&(f=c(c=0)),f),ye=(c,f)=>()=>(f||c((f={exports:{}}).exports,f),f.exports),sn=(c,f)=>{for(var a in f)pi(c,a,{get:f[a],enumerable:!0})},rc=(c,f,a,l)=>{if(f&&typeof f=="object"||typeof f=="function")for(let d of tc(f))!nc.call(c,d)&&d!==a&&pi(c,d,{get:()=>f[d],enumerable:!(l=ec(f,d))||l.enumerable});return c},Qe=c=>rc(pi({},"__esModule",{value:!0}),c),he=mt(()=>{}),Ge={};sn(Ge,{_debugEnd:()=>Qr,_debugProcess:()=>Vr,_events:()=>cs,_eventsCount:()=>ds,_exiting:()=>Nr,_fatalExceptions:()=>$r,_getActiveHandles:()=>na,_getActiveRequests:()=>ta,_kill:()=>Lr,_linkedBinding:()=>Zo,_maxListeners:()=>ls,_preload_modules:()=>os,_rawDebug:()=>Mr,_startProfilerIdleNotifier:()=>Gr,_stopProfilerIdleNotifier:()=>Yr,_tickCallback:()=>Kr,abort:()=>es,addListener:()=>us,allowedNodeEnvironmentFlags:()=>Wr,arch:()=>gr,argv:()=>yr,argv0:()=>is,assert:()=>ra,binding:()=>Sr,browser:()=>Cr,chdir:()=>Ir,config:()=>Rr,cpuUsage:()=>pn,cwd:()=>Ar,debugPort:()=>ss,default:()=>fi,dlopen:()=>ea,domain:()=>Or,emit:()=>gs,emitWarning:()=>xr,env:()=>vr,execArgv:()=>wr,execPath:()=>rs,exit:()=>Br,features:()=>Hr,hasUncaughtExceptionCaptureCallback:()=>sa,hrtime:()=>En,kill:()=>Fr,listeners:()=>oa,memoryUsage:()=>jr,moduleLoadList:()=>Pr,nextTick:()=>Jo,off:()=>hs,on:()=>St,once:()=>ps,openStdin:()=>Dr,pid:()=>ts,platform:()=>br,ppid:()=>ns,prependListener:()=>bs,prependOnceListener:()=>vs,reallyExit:()=>Ur,release:()=>Er,removeAllListeners:()=>ms,removeListener:()=>fs,resourceUsage:()=>qr,setSourceMapsEnabled:()=>as,setUncaughtExceptionCaptureCallback:()=>zr,stderr:()=>Xr,stdin:()=>Zr,stdout:()=>Jr,title:()=>mr,umask:()=>Tr,uptime:()=>ia,version:()=>_r,versions:()=>kr});function hi(c){throw new Error("Node.js process "+c+" is not supported by JSPM core outside of Node.js")}function sc(){!Gt||!Kt||(Gt=!1,Kt.length?_t=Kt.concat(_t):gn=-1,_t.length&&Yo())}function Yo(){if(!Gt){var c=setTimeout(sc,0);Gt=!0;for(var f=_t.length;f;){for(Kt=_t,_t=[];++gn<f;)Kt&&Kt[gn].run();gn=-1,f=_t.length}Kt=null,Gt=!1,clearTimeout(c)}}function Jo(c){var f=new Array(arguments.length-1);if(arguments.length>1)for(var a=1;a<arguments.length;a++)f[a-1]=arguments[a];_t.push(new Xo(c,f)),_t.length===1&&!Gt&&setTimeout(Yo,0)}function Xo(c,f){this.fun=c,this.array=f}function ot(){}function Zo(c){hi("_linkedBinding")}function ea(c){hi("dlopen")}function ta(){return[]}function na(){return[]}function ra(c,f){if(!c)throw new Error(f||"assertion error")}function sa(){return!1}function ia(){return It.now()/1e3}function En(c){var f=Math.floor((Date.now()-It.now())*.001),a=It.now()*.001,l=Math.floor(a)+f,d=Math.floor(a%1*1e9);return c&&(l=l-c[0],d=d-c[1],d<0&&(l--,d+=Cn)),[l,d]}function St(){return fi}function oa(c){return[]}var _t,Gt,Kt,gn,mr,gr,br,vr,yr,wr,_r,kr,xr,Sr,Tr,Ar,Ir,Er,Cr,Mr,Pr,Or,Nr,Rr,Ur,Lr,pn,qr,jr,Fr,Br,Dr,Wr,Hr,$r,zr,Kr,Vr,Qr,Gr,Yr,Jr,Xr,Zr,es,ts,ns,rs,ss,is,os,as,It,dr,Cn,ls,cs,ds,us,ps,hs,fs,ms,gs,bs,vs,fi,ic=mt(()=>{he(),me(),fe(),_t=[],Gt=!1,gn=-1,Xo.prototype.run=function(){this.fun.apply(null,this.array)},mr="browser",gr="x64",br="browser",vr={PATH:"/usr/bin",LANG:typeof navigator<"u"?navigator.language+".UTF-8":void 0,PWD:"/",HOME:"/home",TMP:"/tmp"},yr=["/usr/bin/node"],wr=[],_r="v16.8.0",kr={},xr=function(c,f){console.warn((f?f+": ":"")+c)},Sr=function(c){hi("binding")},Tr=function(c){return 0},Ar=function(){return"/"},Ir=function(c){},Er={name:"node",sourceUrl:"",headersUrl:"",libUrl:""},Cr=!0,Mr=ot,Pr=[],Or={},Nr=!1,Rr={},Ur=ot,Lr=ot,pn=function(){return{}},qr=pn,jr=pn,Fr=ot,Br=ot,Dr=ot,Wr={},Hr={inspector:!1,debug:!1,uv:!1,ipv6:!1,tls_alpn:!1,tls_sni:!1,tls_ocsp:!1,tls:!1,cached_builtins:!0},$r=ot,zr=ot,Kr=ot,Vr=ot,Qr=ot,Gr=ot,Yr=ot,Jr=void 0,Xr=void 0,Zr=void 0,es=ot,ts=2,ns=1,rs="/bin/usr/node",ss=9229,is="node",os=[],as=ot,It={now:typeof performance<"u"?performance.now.bind(performance):void 0,timing:typeof performance<"u"?performance.timing:void 0},It.now===void 0&&(dr=Date.now(),It.timing&&It.timing.navigationStart&&(dr=It.timing.navigationStart),It.now=()=>Date.now()-dr),Cn=1e9,En.bigint=function(c){var f=En(c);return typeof BigInt>"u"?f[0]*Cn+f[1]:BigInt(f[0]*Cn)+BigInt(f[1])},ls=10,cs={},ds=0,us=St,ps=St,hs=St,fs=St,ms=St,gs=ot,bs=St,vs=St,fi={version:_r,versions:kr,arch:gr,platform:br,browser:Cr,release:Er,_rawDebug:Mr,moduleLoadList:Pr,binding:Sr,_linkedBinding:Zo,_events:cs,_eventsCount:ds,_maxListeners:ls,on:St,addListener:us,once:ps,off:hs,removeListener:fs,removeAllListeners:ms,emit:gs,prependListener:bs,prependOnceListener:vs,listeners:oa,domain:Or,_exiting:Nr,config:Rr,dlopen:ea,uptime:ia,_getActiveRequests:ta,_getActiveHandles:na,reallyExit:Ur,_kill:Lr,cpuUsage:pn,resourceUsage:qr,memoryUsage:jr,kill:Fr,exit:Br,openStdin:Dr,allowedNodeEnvironmentFlags:Wr,assert:ra,features:Hr,_fatalExceptions:$r,setUncaughtExceptionCaptureCallback:zr,hasUncaughtExceptionCaptureCallback:sa,emitWarning:xr,nextTick:Jo,_tickCallback:Kr,_debugProcess:Vr,_debugEnd:Qr,_startProfilerIdleNotifier:Gr,_stopProfilerIdleNotifier:Yr,stdout:Jr,stdin:Zr,stderr:Xr,abort:es,umask:Tr,chdir:Ir,cwd:Ar,env:vr,title:mr,argv:yr,execArgv:wr,pid:ts,ppid:ns,execPath:rs,debugPort:ss,hrtime:En,argv0:is,_preload_modules:os,setSourceMapsEnabled:as}}),fe=mt(()=>{ic()});function oc(){if(ys)return en;ys=!0,en.byteLength=r,en.toByteArray=s,en.fromByteArray=h;for(var c=[],f=[],a=typeof Uint8Array<"u"?Uint8Array:Array,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",d=0,t=l.length;d<t;++d)c[d]=l[d],f[l.charCodeAt(d)]=d;f[45]=62,f[95]=63;function n(b){var u=b.length;if(u%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var o=b.indexOf("=");o===-1&&(o=u);var v=o===u?0:4-o%4;return[o,v]}function r(b){var u=n(b),o=u[0],v=u[1];return(o+v)*3/4-v}function e(b,u,o){return(u+o)*3/4-o}function s(b){var u,o=n(b),v=o[0],w=o[1],g=new a(e(b,v,w)),_=0,k=w>0?v-4:v,y;for(y=0;y<k;y+=4)u=f[b.charCodeAt(y)]<<18|f[b.charCodeAt(y+1)]<<12|f[b.charCodeAt(y+2)]<<6|f[b.charCodeAt(y+3)],g[_++]=u>>16&255,g[_++]=u>>8&255,g[_++]=u&255;return w===2&&(u=f[b.charCodeAt(y)]<<2|f[b.charCodeAt(y+1)]>>4,g[_++]=u&255),w===1&&(u=f[b.charCodeAt(y)]<<10|f[b.charCodeAt(y+1)]<<4|f[b.charCodeAt(y+2)]>>2,g[_++]=u>>8&255,g[_++]=u&255),g}function i(b){return c[b>>18&63]+c[b>>12&63]+c[b>>6&63]+c[b&63]}function m(b,u,o){for(var v,w=[],g=u;g<o;g+=3)v=(b[g]<<16&16711680)+(b[g+1]<<8&65280)+(b[g+2]&255),w.push(i(v));return w.join("")}function h(b){for(var u,o=b.length,v=o%3,w=[],g=16383,_=0,k=o-v;_<k;_+=g)w.push(m(b,_,_+g>k?k:_+g));return v===1?(u=b[o-1],w.push(c[u>>2]+c[u<<4&63]+"==")):v===2&&(u=(b[o-2]<<8)+b[o-1],w.push(c[u>>10]+c[u>>4&63]+c[u<<2&63]+"=")),w.join("")}return en}function ac(){return ws?hn:(ws=!0,hn.read=function(c,f,a,l,d){var t,n,r=d*8-l-1,e=(1<<r)-1,s=e>>1,i=-7,m=a?d-1:0,h=a?-1:1,b=c[f+m];for(m+=h,t=b&(1<<-i)-1,b>>=-i,i+=r;i>0;t=t*256+c[f+m],m+=h,i-=8);for(n=t&(1<<-i)-1,t>>=-i,i+=l;i>0;n=n*256+c[f+m],m+=h,i-=8);if(t===0)t=1-s;else{if(t===e)return n?NaN:(b?-1:1)*(1/0);n=n+Math.pow(2,l),t=t-s}return(b?-1:1)*n*Math.pow(2,t-l)},hn.write=function(c,f,a,l,d,t){var n,r,e,s=t*8-d-1,i=(1<<s)-1,m=i>>1,h=d===23?Math.pow(2,-24)-Math.pow(2,-77):0,b=l?0:t-1,u=l?1:-1,o=f<0||f===0&&1/f<0?1:0;for(f=Math.abs(f),isNaN(f)||f===1/0?(r=isNaN(f)?1:0,n=i):(n=Math.floor(Math.log(f)/Math.LN2),f*(e=Math.pow(2,-n))<1&&(n--,e*=2),n+m>=1?f+=h/e:f+=h*Math.pow(2,1-m),f*e>=2&&(n++,e/=2),n+m>=i?(r=0,n=i):n+m>=1?(r=(f*e-1)*Math.pow(2,d),n=n+m):(r=f*Math.pow(2,m-1)*Math.pow(2,d),n=0));d>=8;c[a+b]=r&255,b+=u,r/=256,d-=8);for(n=n<<d|r,s+=d;s>0;c[a+b]=n&255,b+=u,n/=256,s-=8);c[a+b-u]|=o*128},hn)}function lc(){if(_s)return qt;_s=!0;let c=oc(),f=ac(),a=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;qt.Buffer=n,qt.SlowBuffer=w,qt.INSPECT_MAX_BYTES=50;let l=2147483647;qt.kMaxLength=l,n.TYPED_ARRAY_SUPPORT=d(),!n.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function d(){try{let p=new Uint8Array(1),x={foo:function(){return 42}};return Object.setPrototypeOf(x,Uint8Array.prototype),Object.setPrototypeOf(p,x),p.foo()===42}catch{return!1}}Object.defineProperty(n.prototype,"parent",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.buffer}}),Object.defineProperty(n.prototype,"offset",{enumerable:!0,get:function(){if(n.isBuffer(this))return this.byteOffset}});function t(p){if(p>l)throw new RangeError('The value "'+p+'" is invalid for option "size"');let x=new Uint8Array(p);return Object.setPrototypeOf(x,n.prototype),x}function n(p,x,A){if(typeof p=="number"){if(typeof x=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return i(p)}return r(p,x,A)}n.poolSize=8192;function r(p,x,A){if(typeof p=="string")return m(p,x);if(ArrayBuffer.isView(p))return b(p);if(p==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof p);if($(p,ArrayBuffer)||p&&$(p.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&($(p,SharedArrayBuffer)||p&&$(p.buffer,SharedArrayBuffer)))return u(p,x,A);if(typeof p=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');let B=p.valueOf&&p.valueOf();if(B!=null&&B!==p)return n.from(B,x,A);let ee=o(p);if(ee)return ee;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof p[Symbol.toPrimitive]=="function")return n.from(p[Symbol.toPrimitive]("string"),x,A);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof p)}n.from=function(p,x,A){return r(p,x,A)},Object.setPrototypeOf(n.prototype,Uint8Array.prototype),Object.setPrototypeOf(n,Uint8Array);function e(p){if(typeof p!="number")throw new TypeError('"size" argument must be of type number');if(p<0)throw new RangeError('The value "'+p+'" is invalid for option "size"')}function s(p,x,A){return e(p),p<=0?t(p):x!==void 0?typeof A=="string"?t(p).fill(x,A):t(p).fill(x):t(p)}n.alloc=function(p,x,A){return s(p,x,A)};function i(p){return e(p),t(p<0?0:v(p)|0)}n.allocUnsafe=function(p){return i(p)},n.allocUnsafeSlow=function(p){return i(p)};function m(p,x){if((typeof x!="string"||x==="")&&(x="utf8"),!n.isEncoding(x))throw new TypeError("Unknown encoding: "+x);let A=g(p,x)|0,B=t(A),ee=B.write(p,x);return ee!==A&&(B=B.slice(0,ee)),B}function h(p){let x=p.length<0?0:v(p.length)|0,A=t(x);for(let B=0;B<x;B+=1)A[B]=p[B]&255;return A}function b(p){if($(p,Uint8Array)){let x=new Uint8Array(p);return u(x.buffer,x.byteOffset,x.byteLength)}return h(p)}function u(p,x,A){if(x<0||p.byteLength<x)throw new RangeError('"offset" is outside of buffer bounds');if(p.byteLength<x+(A||0))throw new RangeError('"length" is outside of buffer bounds');let B;return x===void 0&&A===void 0?B=new Uint8Array(p):A===void 0?B=new Uint8Array(p,x):B=new Uint8Array(p,x,A),Object.setPrototypeOf(B,n.prototype),B}function o(p){if(n.isBuffer(p)){let x=v(p.length)|0,A=t(x);return A.length===0||p.copy(A,0,0,x),A}if(p.length!==void 0)return typeof p.length!="number"||ve(p.length)?t(0):h(p);if(p.type==="Buffer"&&Array.isArray(p.data))return h(p.data)}function v(p){if(p>=l)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+l.toString(16)+" bytes");return p|0}function w(p){return+p!=p&&(p=0),n.alloc(+p)}n.isBuffer=function(p){return p!=null&&p._isBuffer===!0&&p!==n.prototype},n.compare=function(p,x){if($(p,Uint8Array)&&(p=n.from(p,p.offset,p.byteLength)),$(x,Uint8Array)&&(x=n.from(x,x.offset,x.byteLength)),!n.isBuffer(p)||!n.isBuffer(x))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(p===x)return 0;let A=p.length,B=x.length;for(let ee=0,ue=Math.min(A,B);ee<ue;++ee)if(p[ee]!==x[ee]){A=p[ee],B=x[ee];break}return A<B?-1:B<A?1:0},n.isEncoding=function(p){switch(String(p).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},n.concat=function(p,x){if(!Array.isArray(p))throw new TypeError('"list" argument must be an Array of Buffers');if(p.length===0)return n.alloc(0);let A;if(x===void 0)for(x=0,A=0;A<p.length;++A)x+=p[A].length;let B=n.allocUnsafe(x),ee=0;for(A=0;A<p.length;++A){let ue=p[A];if($(ue,Uint8Array))ee+ue.length>B.length?(n.isBuffer(ue)||(ue=n.from(ue)),ue.copy(B,ee)):Uint8Array.prototype.set.call(B,ue,ee);else if(n.isBuffer(ue))ue.copy(B,ee);else throw new TypeError('"list" argument must be an Array of Buffers');ee+=ue.length}return B};function g(p,x){if(n.isBuffer(p))return p.length;if(ArrayBuffer.isView(p)||$(p,ArrayBuffer))return p.byteLength;if(typeof p!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof p);let A=p.length,B=arguments.length>2&&arguments[2]===!0;if(!B&&A===0)return 0;let ee=!1;for(;;)switch(x){case"ascii":case"latin1":case"binary":return A;case"utf8":case"utf-8":return H(p).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return A*2;case"hex":return A>>>1;case"base64":return pe(p).length;default:if(ee)return B?-1:H(p).length;x=(""+x).toLowerCase(),ee=!0}}n.byteLength=g;function _(p,x,A){let B=!1;if((x===void 0||x<0)&&(x=0),x>this.length||((A===void 0||A>this.length)&&(A=this.length),A<=0)||(A>>>=0,x>>>=0,A<=x))return"";for(p||(p="utf8");;)switch(p){case"hex":return K(this,x,A);case"utf8":case"utf-8":return W(this,x,A);case"ascii":return de(this,x,A);case"latin1":case"binary":return X(this,x,A);case"base64":return C(this,x,A);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ie(this,x,A);default:if(B)throw new TypeError("Unknown encoding: "+p);p=(p+"").toLowerCase(),B=!0}}n.prototype._isBuffer=!0;function k(p,x,A){let B=p[x];p[x]=p[A],p[A]=B}n.prototype.swap16=function(){let p=this.length;if(p%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let x=0;x<p;x+=2)k(this,x,x+1);return this},n.prototype.swap32=function(){let p=this.length;if(p%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let x=0;x<p;x+=4)k(this,x,x+3),k(this,x+1,x+2);return this},n.prototype.swap64=function(){let p=this.length;if(p%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let x=0;x<p;x+=8)k(this,x,x+7),k(this,x+1,x+6),k(this,x+2,x+5),k(this,x+3,x+4);return this},n.prototype.toString=function(){let p=this.length;return p===0?"":arguments.length===0?W(this,0,p):_.apply(this,arguments)},n.prototype.toLocaleString=n.prototype.toString,n.prototype.equals=function(p){if(!n.isBuffer(p))throw new TypeError("Argument must be a Buffer");return this===p?!0:n.compare(this,p)===0},n.prototype.inspect=function(){let p="",x=qt.INSPECT_MAX_BYTES;return p=this.toString("hex",0,x).replace(/(.{2})/g,"$1 ").trim(),this.length>x&&(p+=" ... "),"<Buffer "+p+">"},a&&(n.prototype[a]=n.prototype.inspect),n.prototype.compare=function(p,x,A,B,ee){if($(p,Uint8Array)&&(p=n.from(p,p.offset,p.byteLength)),!n.isBuffer(p))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof p);if(x===void 0&&(x=0),A===void 0&&(A=p?p.length:0),B===void 0&&(B=0),ee===void 0&&(ee=this.length),x<0||A>p.length||B<0||ee>this.length)throw new RangeError("out of range index");if(B>=ee&&x>=A)return 0;if(B>=ee)return-1;if(x>=A)return 1;if(x>>>=0,A>>>=0,B>>>=0,ee>>>=0,this===p)return 0;let ue=ee-B,Ae=A-x,G=Math.min(ue,Ae),oe=this.slice(B,ee),Ne=p.slice(x,A);for(let Re=0;Re<G;++Re)if(oe[Re]!==Ne[Re]){ue=oe[Re],Ae=Ne[Re];break}return ue<Ae?-1:Ae<ue?1:0};function y(p,x,A,B,ee){if(p.length===0)return-1;if(typeof A=="string"?(B=A,A=0):A>2147483647?A=2147483647:A<-2147483648&&(A=-2147483648),A=+A,ve(A)&&(A=ee?0:p.length-1),A<0&&(A=p.length+A),A>=p.length){if(ee)return-1;A=p.length-1}else if(A<0)if(ee)A=0;else return-1;if(typeof x=="string"&&(x=n.from(x,B)),n.isBuffer(x))return x.length===0?-1:T(p,x,A,B,ee);if(typeof x=="number")return x=x&255,typeof Uint8Array.prototype.indexOf=="function"?ee?Uint8Array.prototype.indexOf.call(p,x,A):Uint8Array.prototype.lastIndexOf.call(p,x,A):T(p,[x],A,B,ee);throw new TypeError("val must be string, number or Buffer")}function T(p,x,A,B,ee){let ue=1,Ae=p.length,G=x.length;if(B!==void 0&&(B=String(B).toLowerCase(),B==="ucs2"||B==="ucs-2"||B==="utf16le"||B==="utf-16le")){if(p.length<2||x.length<2)return-1;ue=2,Ae/=2,G/=2,A/=2}function oe(Re,se){return ue===1?Re[se]:Re.readUInt16BE(se*ue)}let Ne;if(ee){let Re=-1;for(Ne=A;Ne<Ae;Ne++)if(oe(p,Ne)===oe(x,Re===-1?0:Ne-Re)){if(Re===-1&&(Re=Ne),Ne-Re+1===G)return Re*ue}else Re!==-1&&(Ne-=Ne-Re),Re=-1}else for(A+G>Ae&&(A=Ae-G),Ne=A;Ne>=0;Ne--){let Re=!0;for(let se=0;se<G;se++)if(oe(p,Ne+se)!==oe(x,se)){Re=!1;break}if(Re)return Ne}return-1}n.prototype.includes=function(p,x,A){return this.indexOf(p,x,A)!==-1},n.prototype.indexOf=function(p,x,A){return y(this,p,x,A,!0)},n.prototype.lastIndexOf=function(p,x,A){return y(this,p,x,A,!1)};function S(p,x,A,B){A=Number(A)||0;let ee=p.length-A;B?(B=Number(B),B>ee&&(B=ee)):B=ee;let ue=x.length;B>ue/2&&(B=ue/2);let Ae;for(Ae=0;Ae<B;++Ae){let G=parseInt(x.substr(Ae*2,2),16);if(ve(G))return Ae;p[A+Ae]=G}return Ae}function I(p,x,A,B){return _e(H(x,p.length-A),p,A,B)}function P(p,x,A,B){return _e(te(x),p,A,B)}function O(p,x,A,B){return _e(pe(x),p,A,B)}function R(p,x,A,B){return _e(ge(x,p.length-A),p,A,B)}n.prototype.write=function(p,x,A,B){if(x===void 0)B="utf8",A=this.length,x=0;else if(A===void 0&&typeof x=="string")B=x,A=this.length,x=0;else if(isFinite(x))x=x>>>0,isFinite(A)?(A=A>>>0,B===void 0&&(B="utf8")):(B=A,A=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let ee=this.length-x;if((A===void 0||A>ee)&&(A=ee),p.length>0&&(A<0||x<0)||x>this.length)throw new RangeError("Attempt to write outside buffer bounds");B||(B="utf8");let ue=!1;for(;;)switch(B){case"hex":return S(this,p,x,A);case"utf8":case"utf-8":return I(this,p,x,A);case"ascii":case"latin1":case"binary":return P(this,p,x,A);case"base64":return O(this,p,x,A);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return R(this,p,x,A);default:if(ue)throw new TypeError("Unknown encoding: "+B);B=(""+B).toLowerCase(),ue=!0}},n.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function C(p,x,A){return x===0&&A===p.length?c.fromByteArray(p):c.fromByteArray(p.slice(x,A))}function W(p,x,A){A=Math.min(p.length,A);let B=[],ee=x;for(;ee<A;){let ue=p[ee],Ae=null,G=ue>239?4:ue>223?3:ue>191?2:1;if(ee+G<=A){let oe,Ne,Re,se;switch(G){case 1:ue<128&&(Ae=ue);break;case 2:oe=p[ee+1],(oe&192)===128&&(se=(ue&31)<<6|oe&63,se>127&&(Ae=se));break;case 3:oe=p[ee+1],Ne=p[ee+2],(oe&192)===128&&(Ne&192)===128&&(se=(ue&15)<<12|(oe&63)<<6|Ne&63,se>2047&&(se<55296||se>57343)&&(Ae=se));break;case 4:oe=p[ee+1],Ne=p[ee+2],Re=p[ee+3],(oe&192)===128&&(Ne&192)===128&&(Re&192)===128&&(se=(ue&15)<<18|(oe&63)<<12|(Ne&63)<<6|Re&63,se>65535&&se<1114112&&(Ae=se))}}Ae===null?(Ae=65533,G=1):Ae>65535&&(Ae-=65536,B.push(Ae>>>10&1023|55296),Ae=56320|Ae&1023),B.push(Ae),ee+=G}return j(B)}let F=4096;function j(p){let x=p.length;if(x<=F)return String.fromCharCode.apply(String,p);let A="",B=0;for(;B<x;)A+=String.fromCharCode.apply(String,p.slice(B,B+=F));return A}function de(p,x,A){let B="";A=Math.min(p.length,A);for(let ee=x;ee<A;++ee)B+=String.fromCharCode(p[ee]&127);return B}function X(p,x,A){let B="";A=Math.min(p.length,A);for(let ee=x;ee<A;++ee)B+=String.fromCharCode(p[ee]);return B}function K(p,x,A){let B=p.length;(!x||x<0)&&(x=0),(!A||A<0||A>B)&&(A=B);let ee="";for(let ue=x;ue<A;++ue)ee+=Se[p[ue]];return ee}function ie(p,x,A){let B=p.slice(x,A),ee="";for(let ue=0;ue<B.length-1;ue+=2)ee+=String.fromCharCode(B[ue]+B[ue+1]*256);return ee}n.prototype.slice=function(p,x){let A=this.length;p=~~p,x=x===void 0?A:~~x,p<0?(p+=A,p<0&&(p=0)):p>A&&(p=A),x<0?(x+=A,x<0&&(x=0)):x>A&&(x=A),x<p&&(x=p);let B=this.subarray(p,x);return Object.setPrototypeOf(B,n.prototype),B};function D(p,x,A){if(p%1!==0||p<0)throw new RangeError("offset is not uint");if(p+x>A)throw new RangeError("Trying to access beyond buffer length")}n.prototype.readUintLE=n.prototype.readUIntLE=function(p,x,A){p=p>>>0,x=x>>>0,A||D(p,x,this.length);let B=this[p],ee=1,ue=0;for(;++ue<x&&(ee*=256);)B+=this[p+ue]*ee;return B},n.prototype.readUintBE=n.prototype.readUIntBE=function(p,x,A){p=p>>>0,x=x>>>0,A||D(p,x,this.length);let B=this[p+--x],ee=1;for(;x>0&&(ee*=256);)B+=this[p+--x]*ee;return B},n.prototype.readUint8=n.prototype.readUInt8=function(p,x){return p=p>>>0,x||D(p,1,this.length),this[p]},n.prototype.readUint16LE=n.prototype.readUInt16LE=function(p,x){return p=p>>>0,x||D(p,2,this.length),this[p]|this[p+1]<<8},n.prototype.readUint16BE=n.prototype.readUInt16BE=function(p,x){return p=p>>>0,x||D(p,2,this.length),this[p]<<8|this[p+1]},n.prototype.readUint32LE=n.prototype.readUInt32LE=function(p,x){return p=p>>>0,x||D(p,4,this.length),(this[p]|this[p+1]<<8|this[p+2]<<16)+this[p+3]*16777216},n.prototype.readUint32BE=n.prototype.readUInt32BE=function(p,x){return p=p>>>0,x||D(p,4,this.length),this[p]*16777216+(this[p+1]<<16|this[p+2]<<8|this[p+3])},n.prototype.readBigUInt64LE=le(function(p){p=p>>>0,Y(p,"offset");let x=this[p],A=this[p+7];(x===void 0||A===void 0)&&we(p,this.length-8);let B=x+this[++p]*2**8+this[++p]*2**16+this[++p]*2**24,ee=this[++p]+this[++p]*2**8+this[++p]*2**16+A*2**24;return BigInt(B)+(BigInt(ee)<<BigInt(32))}),n.prototype.readBigUInt64BE=le(function(p){p=p>>>0,Y(p,"offset");let x=this[p],A=this[p+7];(x===void 0||A===void 0)&&we(p,this.length-8);let B=x*2**24+this[++p]*2**16+this[++p]*2**8+this[++p],ee=this[++p]*2**24+this[++p]*2**16+this[++p]*2**8+A;return(BigInt(B)<<BigInt(32))+BigInt(ee)}),n.prototype.readIntLE=function(p,x,A){p=p>>>0,x=x>>>0,A||D(p,x,this.length);let B=this[p],ee=1,ue=0;for(;++ue<x&&(ee*=256);)B+=this[p+ue]*ee;return ee*=128,B>=ee&&(B-=Math.pow(2,8*x)),B},n.prototype.readIntBE=function(p,x,A){p=p>>>0,x=x>>>0,A||D(p,x,this.length);let B=x,ee=1,ue=this[p+--B];for(;B>0&&(ee*=256);)ue+=this[p+--B]*ee;return ee*=128,ue>=ee&&(ue-=Math.pow(2,8*x)),ue},n.prototype.readInt8=function(p,x){return p=p>>>0,x||D(p,1,this.length),this[p]&128?(255-this[p]+1)*-1:this[p]},n.prototype.readInt16LE=function(p,x){p=p>>>0,x||D(p,2,this.length);let A=this[p]|this[p+1]<<8;return A&32768?A|4294901760:A},n.prototype.readInt16BE=function(p,x){p=p>>>0,x||D(p,2,this.length);let A=this[p+1]|this[p]<<8;return A&32768?A|4294901760:A},n.prototype.readInt32LE=function(p,x){return p=p>>>0,x||D(p,4,this.length),this[p]|this[p+1]<<8|this[p+2]<<16|this[p+3]<<24},n.prototype.readInt32BE=function(p,x){return p=p>>>0,x||D(p,4,this.length),this[p]<<24|this[p+1]<<16|this[p+2]<<8|this[p+3]},n.prototype.readBigInt64LE=le(function(p){p=p>>>0,Y(p,"offset");let x=this[p],A=this[p+7];(x===void 0||A===void 0)&&we(p,this.length-8);let B=this[p+4]+this[p+5]*2**8+this[p+6]*2**16+(A<<24);return(BigInt(B)<<BigInt(32))+BigInt(x+this[++p]*2**8+this[++p]*2**16+this[++p]*2**24)}),n.prototype.readBigInt64BE=le(function(p){p=p>>>0,Y(p,"offset");let x=this[p],A=this[p+7];(x===void 0||A===void 0)&&we(p,this.length-8);let B=(x<<24)+this[++p]*2**16+this[++p]*2**8+this[++p];return(BigInt(B)<<BigInt(32))+BigInt(this[++p]*2**24+this[++p]*2**16+this[++p]*2**8+A)}),n.prototype.readFloatLE=function(p,x){return p=p>>>0,x||D(p,4,this.length),f.read(this,p,!0,23,4)},n.prototype.readFloatBE=function(p,x){return p=p>>>0,x||D(p,4,this.length),f.read(this,p,!1,23,4)},n.prototype.readDoubleLE=function(p,x){return p=p>>>0,x||D(p,8,this.length),f.read(this,p,!0,52,8)},n.prototype.readDoubleBE=function(p,x){return p=p>>>0,x||D(p,8,this.length),f.read(this,p,!1,52,8)};function Z(p,x,A,B,ee,ue){if(!n.isBuffer(p))throw new TypeError('"buffer" argument must be a Buffer instance');if(x>ee||x<ue)throw new RangeError('"value" argument is out of bounds');if(A+B>p.length)throw new RangeError("Index out of range")}n.prototype.writeUintLE=n.prototype.writeUIntLE=function(p,x,A,B){if(p=+p,x=x>>>0,A=A>>>0,!B){let Ae=Math.pow(2,8*A)-1;Z(this,p,x,A,Ae,0)}let ee=1,ue=0;for(this[x]=p&255;++ue<A&&(ee*=256);)this[x+ue]=p/ee&255;return x+A},n.prototype.writeUintBE=n.prototype.writeUIntBE=function(p,x,A,B){if(p=+p,x=x>>>0,A=A>>>0,!B){let Ae=Math.pow(2,8*A)-1;Z(this,p,x,A,Ae,0)}let ee=A-1,ue=1;for(this[x+ee]=p&255;--ee>=0&&(ue*=256);)this[x+ee]=p/ue&255;return x+A},n.prototype.writeUint8=n.prototype.writeUInt8=function(p,x,A){return p=+p,x=x>>>0,A||Z(this,p,x,1,255,0),this[x]=p&255,x+1},n.prototype.writeUint16LE=n.prototype.writeUInt16LE=function(p,x,A){return p=+p,x=x>>>0,A||Z(this,p,x,2,65535,0),this[x]=p&255,this[x+1]=p>>>8,x+2},n.prototype.writeUint16BE=n.prototype.writeUInt16BE=function(p,x,A){return p=+p,x=x>>>0,A||Z(this,p,x,2,65535,0),this[x]=p>>>8,this[x+1]=p&255,x+2},n.prototype.writeUint32LE=n.prototype.writeUInt32LE=function(p,x,A){return p=+p,x=x>>>0,A||Z(this,p,x,4,4294967295,0),this[x+3]=p>>>24,this[x+2]=p>>>16,this[x+1]=p>>>8,this[x]=p&255,x+4},n.prototype.writeUint32BE=n.prototype.writeUInt32BE=function(p,x,A){return p=+p,x=x>>>0,A||Z(this,p,x,4,4294967295,0),this[x]=p>>>24,this[x+1]=p>>>16,this[x+2]=p>>>8,this[x+3]=p&255,x+4};function N(p,x,A,B,ee){z(x,B,ee,p,A,7);let ue=Number(x&BigInt(4294967295));p[A++]=ue,ue=ue>>8,p[A++]=ue,ue=ue>>8,p[A++]=ue,ue=ue>>8,p[A++]=ue;let Ae=Number(x>>BigInt(32)&BigInt(4294967295));return p[A++]=Ae,Ae=Ae>>8,p[A++]=Ae,Ae=Ae>>8,p[A++]=Ae,Ae=Ae>>8,p[A++]=Ae,A}function J(p,x,A,B,ee){z(x,B,ee,p,A,7);let ue=Number(x&BigInt(4294967295));p[A+7]=ue,ue=ue>>8,p[A+6]=ue,ue=ue>>8,p[A+5]=ue,ue=ue>>8,p[A+4]=ue;let Ae=Number(x>>BigInt(32)&BigInt(4294967295));return p[A+3]=Ae,Ae=Ae>>8,p[A+2]=Ae,Ae=Ae>>8,p[A+1]=Ae,Ae=Ae>>8,p[A]=Ae,A+8}n.prototype.writeBigUInt64LE=le(function(p,x=0){return N(this,p,x,BigInt(0),BigInt("0xffffffffffffffff"))}),n.prototype.writeBigUInt64BE=le(function(p,x=0){return J(this,p,x,BigInt(0),BigInt("0xffffffffffffffff"))}),n.prototype.writeIntLE=function(p,x,A,B){if(p=+p,x=x>>>0,!B){let G=Math.pow(2,8*A-1);Z(this,p,x,A,G-1,-G)}let ee=0,ue=1,Ae=0;for(this[x]=p&255;++ee<A&&(ue*=256);)p<0&&Ae===0&&this[x+ee-1]!==0&&(Ae=1),this[x+ee]=(p/ue>>0)-Ae&255;return x+A},n.prototype.writeIntBE=function(p,x,A,B){if(p=+p,x=x>>>0,!B){let G=Math.pow(2,8*A-1);Z(this,p,x,A,G-1,-G)}let ee=A-1,ue=1,Ae=0;for(this[x+ee]=p&255;--ee>=0&&(ue*=256);)p<0&&Ae===0&&this[x+ee+1]!==0&&(Ae=1),this[x+ee]=(p/ue>>0)-Ae&255;return x+A},n.prototype.writeInt8=function(p,x,A){return p=+p,x=x>>>0,A||Z(this,p,x,1,127,-128),p<0&&(p=255+p+1),this[x]=p&255,x+1},n.prototype.writeInt16LE=function(p,x,A){return p=+p,x=x>>>0,A||Z(this,p,x,2,32767,-32768),this[x]=p&255,this[x+1]=p>>>8,x+2},n.prototype.writeInt16BE=function(p,x,A){return p=+p,x=x>>>0,A||Z(this,p,x,2,32767,-32768),this[x]=p>>>8,this[x+1]=p&255,x+2},n.prototype.writeInt32LE=function(p,x,A){return p=+p,x=x>>>0,A||Z(this,p,x,4,2147483647,-2147483648),this[x]=p&255,this[x+1]=p>>>8,this[x+2]=p>>>16,this[x+3]=p>>>24,x+4},n.prototype.writeInt32BE=function(p,x,A){return p=+p,x=x>>>0,A||Z(this,p,x,4,2147483647,-2147483648),p<0&&(p=4294967295+p+1),this[x]=p>>>24,this[x+1]=p>>>16,this[x+2]=p>>>8,this[x+3]=p&255,x+4},n.prototype.writeBigInt64LE=le(function(p,x=0){return N(this,p,x,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),n.prototype.writeBigInt64BE=le(function(p,x=0){return J(this,p,x,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function be(p,x,A,B,ee,ue){if(A+B>p.length)throw new RangeError("Index out of range");if(A<0)throw new RangeError("Index out of range")}function re(p,x,A,B,ee){return x=+x,A=A>>>0,ee||be(p,x,A,4),f.write(p,x,A,B,23,4),A+4}n.prototype.writeFloatLE=function(p,x,A){return re(this,p,x,!0,A)},n.prototype.writeFloatBE=function(p,x,A){return re(this,p,x,!1,A)};function xe(p,x,A,B,ee){return x=+x,A=A>>>0,ee||be(p,x,A,8),f.write(p,x,A,B,52,8),A+8}n.prototype.writeDoubleLE=function(p,x,A){return xe(this,p,x,!0,A)},n.prototype.writeDoubleBE=function(p,x,A){return xe(this,p,x,!1,A)},n.prototype.copy=function(p,x,A,B){if(!n.isBuffer(p))throw new TypeError("argument should be a Buffer");if(A||(A=0),!B&&B!==0&&(B=this.length),x>=p.length&&(x=p.length),x||(x=0),B>0&&B<A&&(B=A),B===A||p.length===0||this.length===0)return 0;if(x<0)throw new RangeError("targetStart out of bounds");if(A<0||A>=this.length)throw new RangeError("Index out of range");if(B<0)throw new RangeError("sourceEnd out of bounds");B>this.length&&(B=this.length),p.length-x<B-A&&(B=p.length-x+A);let ee=B-A;return this===p&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(x,A,B):Uint8Array.prototype.set.call(p,this.subarray(A,B),x),ee},n.prototype.fill=function(p,x,A,B){if(typeof p=="string"){if(typeof x=="string"?(B=x,x=0,A=this.length):typeof A=="string"&&(B=A,A=this.length),B!==void 0&&typeof B!="string")throw new TypeError("encoding must be a string");if(typeof B=="string"&&!n.isEncoding(B))throw new TypeError("Unknown encoding: "+B);if(p.length===1){let ue=p.charCodeAt(0);(B==="utf8"&&ue<128||B==="latin1")&&(p=ue)}}else typeof p=="number"?p=p&255:typeof p=="boolean"&&(p=Number(p));if(x<0||this.length<x||this.length<A)throw new RangeError("Out of range index");if(A<=x)return this;x=x>>>0,A=A===void 0?this.length:A>>>0,p||(p=0);let ee;if(typeof p=="number")for(ee=x;ee<A;++ee)this[ee]=p;else{let ue=n.isBuffer(p)?p:n.from(p,B),Ae=ue.length;if(Ae===0)throw new TypeError('The value "'+p+'" is invalid for argument "value"');for(ee=0;ee<A-x;++ee)this[ee+x]=ue[ee%Ae]}return this};let Q={};function q(p,x,A){Q[p]=class extends A{constructor(){super(),Object.defineProperty(this,"message",{value:x.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${p}]`,this.stack,delete this.name}get code(){return p}set code(B){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:B,writable:!0})}toString(){return`${this.name} [${p}]: ${this.message}`}}}q("ERR_BUFFER_OUT_OF_BOUNDS",function(p){return p?`${p} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),q("ERR_INVALID_ARG_TYPE",function(p,x){return`The "${p}" argument must be of type number. Received type ${typeof x}`},TypeError),q("ERR_OUT_OF_RANGE",function(p,x,A){let B=`The value of "${p}" is out of range.`,ee=A;return Number.isInteger(A)&&Math.abs(A)>2**32?ee=ae(String(A)):typeof A=="bigint"&&(ee=String(A),(A>BigInt(2)**BigInt(32)||A<-(BigInt(2)**BigInt(32)))&&(ee=ae(ee)),ee+="n"),B+=` It must be ${x}. Received ${ee}`,B},RangeError);function ae(p){let x="",A=p.length,B=p[0]==="-"?1:0;for(;A>=B+4;A-=3)x=`_${p.slice(A-3,A)}${x}`;return`${p.slice(0,A)}${x}`}function V(p,x,A){Y(x,"offset"),(p[x]===void 0||p[x+A]===void 0)&&we(x,p.length-(A+1))}function z(p,x,A,B,ee,ue){if(p>A||p<x){let Ae=typeof x=="bigint"?"n":"",G;throw x===0||x===BigInt(0)?G=`>= 0${Ae} and < 2${Ae} ** ${(ue+1)*8}${Ae}`:G=`>= -(2${Ae} ** ${(ue+1)*8-1}${Ae}) and < 2 ** ${(ue+1)*8-1}${Ae}`,new Q.ERR_OUT_OF_RANGE("value",G,p)}V(B,ee,ue)}function Y(p,x){if(typeof p!="number")throw new Q.ERR_INVALID_ARG_TYPE(x,"number",p)}function we(p,x,A){throw Math.floor(p)!==p?(Y(p,A),new Q.ERR_OUT_OF_RANGE("offset","an integer",p)):x<0?new Q.ERR_BUFFER_OUT_OF_BOUNDS:new Q.ERR_OUT_OF_RANGE("offset",`>= 0 and <= ${x}`,p)}let ce=/[^+/0-9A-Za-z-_]/g;function U(p){if(p=p.split("=")[0],p=p.trim().replace(ce,""),p.length<2)return"";for(;p.length%4!==0;)p=p+"=";return p}function H(p,x){x=x||1/0;let A,B=p.length,ee=null,ue=[];for(let Ae=0;Ae<B;++Ae){if(A=p.charCodeAt(Ae),A>55295&&A<57344){if(!ee){if(A>56319){(x-=3)>-1&&ue.push(239,191,189);continue}else if(Ae+1===B){(x-=3)>-1&&ue.push(239,191,189);continue}ee=A;continue}if(A<56320){(x-=3)>-1&&ue.push(239,191,189),ee=A;continue}A=(ee-55296<<10|A-56320)+65536}else ee&&(x-=3)>-1&&ue.push(239,191,189);if(ee=null,A<128){if((x-=1)<0)break;ue.push(A)}else if(A<2048){if((x-=2)<0)break;ue.push(A>>6|192,A&63|128)}else if(A<65536){if((x-=3)<0)break;ue.push(A>>12|224,A>>6&63|128,A&63|128)}else if(A<1114112){if((x-=4)<0)break;ue.push(A>>18|240,A>>12&63|128,A>>6&63|128,A&63|128)}else throw new Error("Invalid code point")}return ue}function te(p){let x=[];for(let A=0;A<p.length;++A)x.push(p.charCodeAt(A)&255);return x}function ge(p,x){let A,B,ee,ue=[];for(let Ae=0;Ae<p.length&&!((x-=2)<0);++Ae)A=p.charCodeAt(Ae),B=A>>8,ee=A%256,ue.push(ee),ue.push(B);return ue}function pe(p){return c.toByteArray(U(p))}function _e(p,x,A,B){let ee;for(ee=0;ee<B&&!(ee+A>=x.length||ee>=p.length);++ee)x[ee+A]=p[ee];return ee}function $(p,x){return p instanceof x||p!=null&&p.constructor!=null&&p.constructor.name!=null&&p.constructor.name===x.name}function ve(p){return p!==p}let Se=(function(){let p="0123456789abcdef",x=new Array(256);for(let A=0;A<16;++A){let B=A*16;for(let ee=0;ee<16;++ee)x[B+ee]=p[A]+p[ee]}return x})();function le(p){return typeof BigInt>"u"?qe:p}function qe(){throw new Error("BigInt not supported")}return qt}var en,ys,hn,ws,qt,_s,cc=mt(()=>{he(),me(),fe(),en={},ys=!1,hn={},ws=!1,qt={},_s=!1}),rt={};sn(rt,{Buffer:()=>Zn,INSPECT_MAX_BYTES:()=>aa,default:()=>Tt,kMaxLength:()=>la});var Tt,Zn,aa,la,st=mt(()=>{he(),me(),fe(),cc(),Tt=lc(),Tt.Buffer,Tt.SlowBuffer,Tt.INSPECT_MAX_BYTES,Tt.kMaxLength,Zn=Tt.Buffer,aa=Tt.INSPECT_MAX_BYTES,la=Tt.kMaxLength}),me=mt(()=>{st()}),Je=ye((c,f)=>{he(),me(),fe();var a=class extends Error{constructor(l){if(!Array.isArray(l))throw new TypeError(`Expected input to be an Array, got ${typeof l}`);let d="";for(let t=0;t<l.length;t++)d+=`    ${l[t].stack}
`;super(d),this.name="AggregateError",this.errors=l}};f.exports={AggregateError:a,ArrayIsArray(l){return Array.isArray(l)},ArrayPrototypeIncludes(l,d){return l.includes(d)},ArrayPrototypeIndexOf(l,d){return l.indexOf(d)},ArrayPrototypeJoin(l,d){return l.join(d)},ArrayPrototypeMap(l,d){return l.map(d)},ArrayPrototypePop(l,d){return l.pop(d)},ArrayPrototypePush(l,d){return l.push(d)},ArrayPrototypeSlice(l,d,t){return l.slice(d,t)},Error,FunctionPrototypeCall(l,d,...t){return l.call(d,...t)},FunctionPrototypeSymbolHasInstance(l,d){return Function.prototype[Symbol.hasInstance].call(l,d)},MathFloor:Math.floor,Number,NumberIsInteger:Number.isInteger,NumberIsNaN:Number.isNaN,NumberMAX_SAFE_INTEGER:Number.MAX_SAFE_INTEGER,NumberMIN_SAFE_INTEGER:Number.MIN_SAFE_INTEGER,NumberParseInt:Number.parseInt,ObjectDefineProperties(l,d){return Object.defineProperties(l,d)},ObjectDefineProperty(l,d,t){return Object.defineProperty(l,d,t)},ObjectGetOwnPropertyDescriptor(l,d){return Object.getOwnPropertyDescriptor(l,d)},ObjectKeys(l){return Object.keys(l)},ObjectSetPrototypeOf(l,d){return Object.setPrototypeOf(l,d)},Promise,PromisePrototypeCatch(l,d){return l.catch(d)},PromisePrototypeThen(l,d,t){return l.then(d,t)},PromiseReject(l){return Promise.reject(l)},PromiseResolve(l){return Promise.resolve(l)},ReflectApply:Reflect.apply,RegExpPrototypeTest(l,d){return l.test(d)},SafeSet:Set,String,StringPrototypeSlice(l,d,t){return l.slice(d,t)},StringPrototypeToLowerCase(l){return l.toLowerCase()},StringPrototypeToUpperCase(l){return l.toUpperCase()},StringPrototypeTrim(l){return l.trim()},Symbol,SymbolFor:Symbol.for,SymbolAsyncIterator:Symbol.asyncIterator,SymbolHasInstance:Symbol.hasInstance,SymbolIterator:Symbol.iterator,SymbolDispose:Symbol.dispose||Symbol("Symbol.dispose"),SymbolAsyncDispose:Symbol.asyncDispose||Symbol("Symbol.asyncDispose"),TypedArrayPrototypeSet(l,d,t){return l.set(d,t)},Boolean,Uint8Array}}),ca=ye((c,f)=>{he(),me(),fe(),f.exports={format(a,...l){return a.replace(/%([sdifj])/g,function(...[d,t]){let n=l.shift();return t==="f"?n.toFixed(6):t==="j"?JSON.stringify(n):t==="s"&&typeof n=="object"?`${n.constructor!==Object?n.constructor.name:""} {}`.trim():n.toString()})},inspect(a){switch(typeof a){case"string":if(a.includes("'"))if(a.includes('"')){if(!a.includes("`")&&!a.includes("${"))return`\`${a}\``}else return`"${a}"`;return`'${a}'`;case"number":return isNaN(a)?"NaN":Object.is(a,-0)?String(a):a;case"bigint":return`${String(a)}n`;case"boolean":case"undefined":return String(a);case"object":return"{}"}}}}),pt=ye((c,f)=>{he(),me(),fe();var{format:a,inspect:l}=ca(),{AggregateError:d}=Je(),t=globalThis.AggregateError||d,n=Symbol("kIsNodeError"),r=["string","function","number","object","Function","Object","boolean","bigint","symbol"],e=/^([A-Z][a-z0-9]*)+$/,s="__node_internal_",i={};function m(g,_){if(!g)throw new i.ERR_INTERNAL_ASSERTION(_)}function h(g){let _="",k=g.length,y=g[0]==="-"?1:0;for(;k>=y+4;k-=3)_=`_${g.slice(k-3,k)}${_}`;return`${g.slice(0,k)}${_}`}function b(g,_,k){if(typeof _=="function")return m(_.length<=k.length,`Code: ${g}; The provided arguments length (${k.length}) does not match the required ones (${_.length}).`),_(...k);let y=(_.match(/%[dfijoOs]/g)||[]).length;return m(y===k.length,`Code: ${g}; The provided arguments length (${k.length}) does not match the required ones (${y}).`),k.length===0?_:a(_,...k)}function u(g,_,k){k||(k=Error);class y extends k{constructor(...S){super(b(g,_,S))}toString(){return`${this.name} [${g}]: ${this.message}`}}Object.defineProperties(y.prototype,{name:{value:k.name,writable:!0,enumerable:!1,configurable:!0},toString:{value(){return`${this.name} [${g}]: ${this.message}`},writable:!0,enumerable:!1,configurable:!0}}),y.prototype.code=g,y.prototype[n]=!0,i[g]=y}function o(g){let _=s+g.name;return Object.defineProperty(g,"name",{value:_}),g}function v(g,_){if(g&&_&&g!==_){if(Array.isArray(_.errors))return _.errors.push(g),_;let k=new t([_,g],_.message);return k.code=_.code,k}return g||_}var w=class extends Error{constructor(g="The operation was aborted",_=void 0){if(_!==void 0&&typeof _!="object")throw new i.ERR_INVALID_ARG_TYPE("options","Object",_);super(g,_),this.code="ABORT_ERR",this.name="AbortError"}};u("ERR_ASSERTION","%s",Error),u("ERR_INVALID_ARG_TYPE",(g,_,k)=>{m(typeof g=="string","'name' must be a string"),Array.isArray(_)||(_=[_]);let y="The ";g.endsWith(" argument")?y+=`${g} `:y+=`"${g}" ${g.includes(".")?"property":"argument"} `,y+="must be ";let T=[],S=[],I=[];for(let O of _)m(typeof O=="string","All expected entries have to be of type string"),r.includes(O)?T.push(O.toLowerCase()):e.test(O)?S.push(O):(m(O!=="object",'The value "object" should be written as "Object"'),I.push(O));if(S.length>0){let O=T.indexOf("object");O!==-1&&(T.splice(T,O,1),S.push("Object"))}if(T.length>0){switch(T.length){case 1:y+=`of type ${T[0]}`;break;case 2:y+=`one of type ${T[0]} or ${T[1]}`;break;default:{let O=T.pop();y+=`one of type ${T.join(", ")}, or ${O}`}}(S.length>0||I.length>0)&&(y+=" or ")}if(S.length>0){switch(S.length){case 1:y+=`an instance of ${S[0]}`;break;case 2:y+=`an instance of ${S[0]} or ${S[1]}`;break;default:{let O=S.pop();y+=`an instance of ${S.join(", ")}, or ${O}`}}I.length>0&&(y+=" or ")}switch(I.length){case 0:break;case 1:I[0].toLowerCase()!==I[0]&&(y+="an "),y+=`${I[0]}`;break;case 2:y+=`one of ${I[0]} or ${I[1]}`;break;default:{let O=I.pop();y+=`one of ${I.join(", ")}, or ${O}`}}if(k==null)y+=`. Received ${k}`;else if(typeof k=="function"&&k.name)y+=`. Received function ${k.name}`;else if(typeof k=="object"){var P;if((P=k.constructor)!==null&&P!==void 0&&P.name)y+=`. Received an instance of ${k.constructor.name}`;else{let O=l(k,{depth:-1});y+=`. Received ${O}`}}else{let O=l(k,{colors:!1});O.length>25&&(O=`${O.slice(0,25)}...`),y+=`. Received type ${typeof k} (${O})`}return y},TypeError),u("ERR_INVALID_ARG_VALUE",(g,_,k="is invalid")=>{let y=l(_);return y.length>128&&(y=y.slice(0,128)+"..."),`The ${g.includes(".")?"property":"argument"} '${g}' ${k}. Received ${y}`},TypeError),u("ERR_INVALID_RETURN_VALUE",(g,_,k)=>{var y;let T=k!=null&&(y=k.constructor)!==null&&y!==void 0&&y.name?`instance of ${k.constructor.name}`:`type ${typeof k}`;return`Expected ${g} to be returned from the "${_}" function but got ${T}.`},TypeError),u("ERR_MISSING_ARGS",(...g)=>{m(g.length>0,"At least one arg needs to be specified");let _,k=g.length;switch(g=(Array.isArray(g)?g:[g]).map(y=>`"${y}"`).join(" or "),k){case 1:_+=`The ${g[0]} argument`;break;case 2:_+=`The ${g[0]} and ${g[1]} arguments`;break;default:{let y=g.pop();_+=`The ${g.join(", ")}, and ${y} arguments`}break}return`${_} must be specified`},TypeError),u("ERR_OUT_OF_RANGE",(g,_,k)=>{m(_,'Missing "range" argument');let y;if(Number.isInteger(k)&&Math.abs(k)>2**32)y=h(String(k));else if(typeof k=="bigint"){y=String(k);let T=BigInt(2)**BigInt(32);(k>T||k<-T)&&(y=h(y)),y+="n"}else y=l(k);return`The value of "${g}" is out of range. It must be ${_}. Received ${y}`},RangeError),u("ERR_MULTIPLE_CALLBACK","Callback called multiple times",Error),u("ERR_METHOD_NOT_IMPLEMENTED","The %s method is not implemented",Error),u("ERR_STREAM_ALREADY_FINISHED","Cannot call %s after a stream was finished",Error),u("ERR_STREAM_CANNOT_PIPE","Cannot pipe, not readable",Error),u("ERR_STREAM_DESTROYED","Cannot call %s after a stream was destroyed",Error),u("ERR_STREAM_NULL_VALUES","May not write null values to stream",TypeError),u("ERR_STREAM_PREMATURE_CLOSE","Premature close",Error),u("ERR_STREAM_PUSH_AFTER_EOF","stream.push() after EOF",Error),u("ERR_STREAM_UNSHIFT_AFTER_END_EVENT","stream.unshift() after end event",Error),u("ERR_STREAM_WRITE_AFTER_END","write after end",Error),u("ERR_UNKNOWN_ENCODING","Unknown encoding: %s",TypeError),f.exports={AbortError:w,aggregateTwoErrors:o(v),hideStackFrames:o,codes:i}}),yn=ye((c,f)=>{he(),me(),fe();var{AbortController:a,AbortSignal:l}=typeof self<"u"?self:typeof window<"u"?window:void 0;f.exports=a,f.exports.AbortSignal=l,f.exports.default=a}),Dt={};sn(Dt,{EventEmitter:()=>da,default:()=>tn,defaultMaxListeners:()=>ua,init:()=>pa,listenerCount:()=>ha,on:()=>fa,once:()=>ma});function dc(){if(ks)return fn;ks=!0;var c=typeof Reflect=="object"?Reflect:null,f=c&&typeof c.apply=="function"?c.apply:function(k,y,T){return Function.prototype.apply.call(k,y,T)},a;c&&typeof c.ownKeys=="function"?a=c.ownKeys:Object.getOwnPropertySymbols?a=function(k){return Object.getOwnPropertyNames(k).concat(Object.getOwnPropertySymbols(k))}:a=function(k){return Object.getOwnPropertyNames(k)};function l(k){console&&console.warn&&console.warn(k)}var d=Number.isNaN||function(k){return k!==k};function t(){t.init.call(this)}fn=t,fn.once=w,t.EventEmitter=t,t.prototype._events=void 0,t.prototype._eventsCount=0,t.prototype._maxListeners=void 0;var n=10;function r(k){if(typeof k!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof k)}Object.defineProperty(t,"defaultMaxListeners",{enumerable:!0,get:function(){return n},set:function(k){if(typeof k!="number"||k<0||d(k))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+k+".");n=k}}),t.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},t.prototype.setMaxListeners=function(k){if(typeof k!="number"||k<0||d(k))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+k+".");return this._maxListeners=k,this};function e(k){return k._maxListeners===void 0?t.defaultMaxListeners:k._maxListeners}t.prototype.getMaxListeners=function(){return e(this)},t.prototype.emit=function(k){for(var y=[],T=1;T<arguments.length;T++)y.push(arguments[T]);var S=k==="error",I=this._events;if(I!==void 0)S=S&&I.error===void 0;else if(!S)return!1;if(S){var P;if(y.length>0&&(P=y[0]),P instanceof Error)throw P;var O=new Error("Unhandled error."+(P?" ("+P.message+")":""));throw O.context=P,O}var R=I[k];if(R===void 0)return!1;if(typeof R=="function")f(R,this,y);else for(var C=R.length,W=u(R,C),T=0;T<C;++T)f(W[T],this,y);return!0};function s(k,y,T,S){var I,P,O;if(r(T),P=k._events,P===void 0?(P=k._events=Object.create(null),k._eventsCount=0):(P.newListener!==void 0&&(k.emit("newListener",y,T.listener?T.listener:T),P=k._events),O=P[y]),O===void 0)O=P[y]=T,++k._eventsCount;else if(typeof O=="function"?O=P[y]=S?[T,O]:[O,T]:S?O.unshift(T):O.push(T),I=e(k),I>0&&O.length>I&&!O.warned){O.warned=!0;var R=new Error("Possible EventEmitter memory leak detected. "+O.length+" "+String(y)+" listeners added. Use emitter.setMaxListeners() to increase limit");R.name="MaxListenersExceededWarning",R.emitter=k,R.type=y,R.count=O.length,l(R)}return k}t.prototype.addListener=function(k,y){return s(this,k,y,!1)},t.prototype.on=t.prototype.addListener,t.prototype.prependListener=function(k,y){return s(this,k,y,!0)};function i(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function m(k,y,T){var S={fired:!1,wrapFn:void 0,target:k,type:y,listener:T},I=i.bind(S);return I.listener=T,S.wrapFn=I,I}t.prototype.once=function(k,y){return r(y),this.on(k,m(this,k,y)),this},t.prototype.prependOnceListener=function(k,y){return r(y),this.prependListener(k,m(this,k,y)),this},t.prototype.removeListener=function(k,y){var T,S,I,P,O;if(r(y),S=this._events,S===void 0)return this;if(T=S[k],T===void 0)return this;if(T===y||T.listener===y)--this._eventsCount===0?this._events=Object.create(null):(delete S[k],S.removeListener&&this.emit("removeListener",k,T.listener||y));else if(typeof T!="function"){for(I=-1,P=T.length-1;P>=0;P--)if(T[P]===y||T[P].listener===y){O=T[P].listener,I=P;break}if(I<0)return this;I===0?T.shift():o(T,I),T.length===1&&(S[k]=T[0]),S.removeListener!==void 0&&this.emit("removeListener",k,O||y)}return this},t.prototype.off=t.prototype.removeListener,t.prototype.removeAllListeners=function(k){var y,T,S;if(T=this._events,T===void 0)return this;if(T.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):T[k]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete T[k]),this;if(arguments.length===0){var I=Object.keys(T),P;for(S=0;S<I.length;++S)P=I[S],P!=="removeListener"&&this.removeAllListeners(P);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(y=T[k],typeof y=="function")this.removeListener(k,y);else if(y!==void 0)for(S=y.length-1;S>=0;S--)this.removeListener(k,y[S]);return this};function h(k,y,T){var S=k._events;if(S===void 0)return[];var I=S[y];return I===void 0?[]:typeof I=="function"?T?[I.listener||I]:[I]:T?v(I):u(I,I.length)}t.prototype.listeners=function(k){return h(this,k,!0)},t.prototype.rawListeners=function(k){return h(this,k,!1)},t.listenerCount=function(k,y){return typeof k.listenerCount=="function"?k.listenerCount(y):b.call(k,y)},t.prototype.listenerCount=b;function b(k){var y=this._events;if(y!==void 0){var T=y[k];if(typeof T=="function")return 1;if(T!==void 0)return T.length}return 0}t.prototype.eventNames=function(){return this._eventsCount>0?a(this._events):[]};function u(k,y){for(var T=new Array(y),S=0;S<y;++S)T[S]=k[S];return T}function o(k,y){for(;y+1<k.length;y++)k[y]=k[y+1];k.pop()}function v(k){for(var y=new Array(k.length),T=0;T<y.length;++T)y[T]=k[T].listener||k[T];return y}function w(k,y){return new Promise(function(T,S){function I(O){k.removeListener(y,P),S(O)}function P(){typeof k.removeListener=="function"&&k.removeListener("error",I),T([].slice.call(arguments))}_(k,y,P,{once:!0}),y!=="error"&&g(k,I,{once:!0})})}function g(k,y,T){typeof k.on=="function"&&_(k,"error",y,T)}function _(k,y,T,S){if(typeof k.on=="function")S.once?k.once(y,T):k.on(y,T);else if(typeof k.addEventListener=="function")k.addEventListener(y,function I(P){S.once&&k.removeEventListener(y,I),T(P)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof k)}return fn}var fn,ks,tn,da,ua,pa,ha,fa,ma,Jt=mt(()=>{he(),me(),fe(),fn={},ks=!1,tn=dc(),tn.once,tn.once=function(c,f){return new Promise((a,l)=>{function d(...n){t!==void 0&&c.removeListener("error",t),a(n)}let t;f!=="error"&&(t=n=>{c.removeListener(name,d),l(n)},c.once("error",t)),c.once(f,d)})},tn.on=function(c,f){let a=[],l=[],d=null,t=!1,n={async next(){let s=a.shift();if(s)return createIterResult(s,!1);if(d){let i=Promise.reject(d);return d=null,i}return t?createIterResult(void 0,!0):new Promise((i,m)=>l.push({resolve:i,reject:m}))},async return(){c.removeListener(f,r),c.removeListener("error",e),t=!0;for(let s of l)s.resolve(createIterResult(void 0,!0));return createIterResult(void 0,!0)},throw(s){d=s,c.removeListener(f,r),c.removeListener("error",e)},[Symbol.asyncIterator](){return this}};return c.on(f,r),c.on("error",e),n;function r(...s){let i=l.shift();i?i.resolve(createIterResult(s,!1)):a.push(s)}function e(s){t=!0;let i=l.shift();i?i.reject(s):d=s,n.return()}},{EventEmitter:da,defaultMaxListeners:ua,init:pa,listenerCount:ha,on:fa,once:ma}=tn}),ft=ye((c,f)=>{he(),me(),fe();var a=(st(),Qe(rt)),{format:l,inspect:d}=ca(),{codes:{ERR_INVALID_ARG_TYPE:t}}=pt(),{kResistStopPropagation:n,AggregateError:r,SymbolDispose:e}=Je(),s=globalThis.AbortSignal||yn().AbortSignal,i=globalThis.AbortController||yn().AbortController,m=Object.getPrototypeOf(async function(){}).constructor,h=globalThis.Blob||a.Blob,b=typeof h<"u"?function(v){return v instanceof h}:function(v){return!1},u=(v,w)=>{if(v!==void 0&&(v===null||typeof v!="object"||!("aborted"in v)))throw new t(w,"AbortSignal",v)},o=(v,w)=>{if(typeof v!="function")throw new t(w,"Function",v)};f.exports={AggregateError:r,kEmptyObject:Object.freeze({}),once(v){let w=!1;return function(...g){w||(w=!0,v.apply(this,g))}},createDeferredPromise:function(){let v,w;return{promise:new Promise((g,_)=>{v=g,w=_}),resolve:v,reject:w}},promisify(v){return new Promise((w,g)=>{v((_,...k)=>_?g(_):w(...k))})},debuglog(){return function(){}},format:l,inspect:d,types:{isAsyncFunction(v){return v instanceof m},isArrayBufferView(v){return ArrayBuffer.isView(v)}},isBlob:b,deprecate(v,w){return v},addAbortListener:(Jt(),Qe(Dt)).addAbortListener||function(v,w){if(v===void 0)throw new t("signal","AbortSignal",v);u(v,"signal"),o(w,"listener");let g;return v.aborted?queueMicrotask(()=>w()):(v.addEventListener("abort",w,{__proto__:null,once:!0,[n]:!0}),g=()=>{v.removeEventListener("abort",w)}),{__proto__:null,[e](){var _;(_=g)===null||_===void 0||_()}}},AbortSignalAny:s.any||function(v){if(v.length===1)return v[0];let w=new i,g=()=>w.abort();return v.forEach(_=>{u(_,"signals"),_.addEventListener("abort",g,{once:!0})}),w.signal.addEventListener("abort",()=>{v.forEach(_=>_.removeEventListener("abort",g))},{once:!0}),w.signal}},f.exports.promisify.custom=Symbol.for("nodejs.util.promisify.custom")}),kn=ye((c,f)=>{he(),me(),fe();var{ArrayIsArray:a,ArrayPrototypeIncludes:l,ArrayPrototypeJoin:d,ArrayPrototypeMap:t,NumberIsInteger:n,NumberIsNaN:r,NumberMAX_SAFE_INTEGER:e,NumberMIN_SAFE_INTEGER:s,NumberParseInt:i,ObjectPrototypeHasOwnProperty:m,RegExpPrototypeExec:h,String:b,StringPrototypeToUpperCase:u,StringPrototypeTrim:o}=Je(),{hideStackFrames:v,codes:{ERR_SOCKET_BAD_PORT:w,ERR_INVALID_ARG_TYPE:g,ERR_INVALID_ARG_VALUE:_,ERR_OUT_OF_RANGE:k,ERR_UNKNOWN_SIGNAL:y}}=pt(),{normalizeEncoding:T}=ft(),{isAsyncFunction:S,isArrayBufferView:I}=ft().types,P={};function O($){return $===($|0)}function R($){return $===$>>>0}var C=/^[0-7]+$/,W="must be a 32-bit unsigned integer or an octal string";function F($,ve,Se){if(typeof $>"u"&&($=Se),typeof $=="string"){if(h(C,$)===null)throw new _(ve,$,W);$=i($,8)}return X($,ve),$}var j=v(($,ve,Se=s,le=e)=>{if(typeof $!="number")throw new g(ve,"number",$);if(!n($))throw new k(ve,"an integer",$);if($<Se||$>le)throw new k(ve,`>= ${Se} && <= ${le}`,$)}),de=v(($,ve,Se=-2147483648,le=2147483647)=>{if(typeof $!="number")throw new g(ve,"number",$);if(!n($))throw new k(ve,"an integer",$);if($<Se||$>le)throw new k(ve,`>= ${Se} && <= ${le}`,$)}),X=v(($,ve,Se=!1)=>{if(typeof $!="number")throw new g(ve,"number",$);if(!n($))throw new k(ve,"an integer",$);let le=Se?1:0,qe=4294967295;if($<le||$>qe)throw new k(ve,`>= ${le} && <= ${qe}`,$)});function K($,ve){if(typeof $!="string")throw new g(ve,"string",$)}function ie($,ve,Se=void 0,le){if(typeof $!="number")throw new g(ve,"number",$);if(Se!=null&&$<Se||le!=null&&$>le||(Se!=null||le!=null)&&r($))throw new k(ve,`${Se!=null?`>= ${Se}`:""}${Se!=null&&le!=null?" && ":""}${le!=null?`<= ${le}`:""}`,$)}var D=v(($,ve,Se)=>{if(!l(Se,$)){let le="must be one of: "+d(t(Se,qe=>typeof qe=="string"?`'${qe}'`:b(qe)),", ");throw new _(ve,$,le)}});function Z($,ve){if(typeof $!="boolean")throw new g(ve,"boolean",$)}function N($,ve,Se){return $==null||!m($,ve)?Se:$[ve]}var J=v(($,ve,Se=null)=>{let le=N(Se,"allowArray",!1),qe=N(Se,"allowFunction",!1);if(!N(Se,"nullable",!1)&&$===null||!le&&a($)||typeof $!="object"&&(!qe||typeof $!="function"))throw new g(ve,"Object",$)}),be=v(($,ve)=>{if($!=null&&typeof $!="object"&&typeof $!="function")throw new g(ve,"a dictionary",$)}),re=v(($,ve,Se=0)=>{if(!a($))throw new g(ve,"Array",$);if($.length<Se){let le=`must be longer than ${Se}`;throw new _(ve,$,le)}});function xe($,ve){re($,ve);for(let Se=0;Se<$.length;Se++)K($[Se],`${ve}[${Se}]`)}function Q($,ve){re($,ve);for(let Se=0;Se<$.length;Se++)Z($[Se],`${ve}[${Se}]`)}function q($,ve){re($,ve);for(let Se=0;Se<$.length;Se++){let le=$[Se],qe=`${ve}[${Se}]`;if(le==null)throw new g(qe,"AbortSignal",le);we(le,qe)}}function ae($,ve="signal"){if(K($,ve),P[$]===void 0)throw P[u($)]!==void 0?new y($+" (signals must use all capital letters)"):new y($)}var V=v(($,ve="buffer")=>{if(!I($))throw new g(ve,["Buffer","TypedArray","DataView"],$)});function z($,ve){let Se=T(ve),le=$.length;if(Se==="hex"&&le%2!==0)throw new _("encoding",ve,`is invalid for data of length ${le}`)}function Y($,ve="Port",Se=!0){if(typeof $!="number"&&typeof $!="string"||typeof $=="string"&&o($).length===0||+$!==+$>>>0||$>65535||$===0&&!Se)throw new w(ve,$,Se);return $|0}var we=v(($,ve)=>{if($!==void 0&&($===null||typeof $!="object"||!("aborted"in $)))throw new g(ve,"AbortSignal",$)}),ce=v(($,ve)=>{if(typeof $!="function")throw new g(ve,"Function",$)}),U=v(($,ve)=>{if(typeof $!="function"||S($))throw new g(ve,"Function",$)}),H=v(($,ve)=>{if($!==void 0)throw new g(ve,"undefined",$)});function te($,ve,Se){if(!l(Se,$))throw new g(ve,`('${d(Se,"|")}')`,$)}var ge=/^(?:<[^>]*>)(?:\s*;\s*[^;"\s]+(?:=(")?[^;"\s]*\1)?)*$/;function pe($,ve){if(typeof $>"u"||!h(ge,$))throw new _(ve,$,'must be an array or string of format "</styles.css>; rel=preload; as=style"')}function _e($){if(typeof $=="string")return pe($,"hints"),$;if(a($)){let ve=$.length,Se="";if(ve===0)return Se;for(let le=0;le<ve;le++){let qe=$[le];pe(qe,"hints"),Se+=qe,le!==ve-1&&(Se+=", ")}return Se}throw new _("hints",$,'must be an array or string of format "</styles.css>; rel=preload; as=style"')}f.exports={isInt32:O,isUint32:R,parseFileMode:F,validateArray:re,validateStringArray:xe,validateBooleanArray:Q,validateAbortSignalArray:q,validateBoolean:Z,validateBuffer:V,validateDictionary:be,validateEncoding:z,validateFunction:ce,validateInt32:de,validateInteger:j,validateNumber:ie,validateObject:J,validateOneOf:D,validatePlainFunction:U,validatePort:Y,validateSignalName:ae,validateString:K,validateUint32:X,validateUndefined:H,validateUnion:te,validateAbortSignal:we,validateLinkHeaderValue:_e}}),Xt=ye((c,f)=>{he(),me(),fe();var a=f.exports={},l,d;function t(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?l=setTimeout:l=t}catch{l=t}try{typeof clearTimeout=="function"?d=clearTimeout:d=n}catch{d=n}})();function r(w){if(l===setTimeout)return setTimeout(w,0);if((l===t||!l)&&setTimeout)return l=setTimeout,setTimeout(w,0);try{return l(w,0)}catch{try{return l.call(null,w,0)}catch{return l.call(this,w,0)}}}function e(w){if(d===clearTimeout)return clearTimeout(w);if((d===n||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(w);try{return d(w)}catch{try{return d.call(null,w)}catch{return d.call(this,w)}}}var s=[],i=!1,m,h=-1;function b(){!i||!m||(i=!1,m.length?s=m.concat(s):h=-1,s.length&&u())}function u(){if(!i){var w=r(b);i=!0;for(var g=s.length;g;){for(m=s,s=[];++h<g;)m&&m[h].run();h=-1,g=s.length}m=null,i=!1,e(w)}}a.nextTick=function(w){var g=new Array(arguments.length-1);if(arguments.length>1)for(var _=1;_<arguments.length;_++)g[_-1]=arguments[_];s.push(new o(w,g)),s.length===1&&!i&&r(u)};function o(w,g){this.fun=w,this.array=g}o.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={};function v(){}a.on=v,a.addListener=v,a.once=v,a.off=v,a.removeListener=v,a.removeAllListeners=v,a.emit=v,a.prependListener=v,a.prependOnceListener=v,a.listeners=function(w){return[]},a.binding=function(w){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(w){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}}),Ot=ye((c,f)=>{he(),me(),fe();var{SymbolAsyncIterator:a,SymbolIterator:l,SymbolFor:d}=Je(),t=d("nodejs.stream.destroyed"),n=d("nodejs.stream.errored"),r=d("nodejs.stream.readable"),e=d("nodejs.stream.writable"),s=d("nodejs.stream.disturbed"),i=d("nodejs.webstream.isClosedPromise"),m=d("nodejs.webstream.controllerErrorFunction");function h(N,J=!1){var be;return!!(N&&typeof N.pipe=="function"&&typeof N.on=="function"&&(!J||typeof N.pause=="function"&&typeof N.resume=="function")&&(!N._writableState||((be=N._readableState)===null||be===void 0?void 0:be.readable)!==!1)&&(!N._writableState||N._readableState))}function b(N){var J;return!!(N&&typeof N.write=="function"&&typeof N.on=="function"&&(!N._readableState||((J=N._writableState)===null||J===void 0?void 0:J.writable)!==!1))}function u(N){return!!(N&&typeof N.pipe=="function"&&N._readableState&&typeof N.on=="function"&&typeof N.write=="function")}function o(N){return N&&(N._readableState||N._writableState||typeof N.write=="function"&&typeof N.on=="function"||typeof N.pipe=="function"&&typeof N.on=="function")}function v(N){return!!(N&&!o(N)&&typeof N.pipeThrough=="function"&&typeof N.getReader=="function"&&typeof N.cancel=="function")}function w(N){return!!(N&&!o(N)&&typeof N.getWriter=="function"&&typeof N.abort=="function")}function g(N){return!!(N&&!o(N)&&typeof N.readable=="object"&&typeof N.writable=="object")}function _(N){return v(N)||w(N)||g(N)}function k(N,J){return N==null?!1:J===!0?typeof N[a]=="function":J===!1?typeof N[l]=="function":typeof N[a]=="function"||typeof N[l]=="function"}function y(N){if(!o(N))return null;let J=N._writableState,be=N._readableState,re=J||be;return!!(N.destroyed||N[t]||re!=null&&re.destroyed)}function T(N){if(!b(N))return null;if(N.writableEnded===!0)return!0;let J=N._writableState;return J!=null&&J.errored?!1:typeof J?.ended!="boolean"?null:J.ended}function S(N,J){if(!b(N))return null;if(N.writableFinished===!0)return!0;let be=N._writableState;return be!=null&&be.errored?!1:typeof be?.finished!="boolean"?null:!!(be.finished||J===!1&&be.ended===!0&&be.length===0)}function I(N){if(!h(N))return null;if(N.readableEnded===!0)return!0;let J=N._readableState;return!J||J.errored?!1:typeof J?.ended!="boolean"?null:J.ended}function P(N,J){if(!h(N))return null;let be=N._readableState;return be!=null&&be.errored?!1:typeof be?.endEmitted!="boolean"?null:!!(be.endEmitted||J===!1&&be.ended===!0&&be.length===0)}function O(N){return N&&N[r]!=null?N[r]:typeof N?.readable!="boolean"?null:y(N)?!1:h(N)&&N.readable&&!P(N)}function R(N){return N&&N[e]!=null?N[e]:typeof N?.writable!="boolean"?null:y(N)?!1:b(N)&&N.writable&&!T(N)}function C(N,J){return o(N)?y(N)?!0:!(J?.readable!==!1&&O(N)||J?.writable!==!1&&R(N)):null}function W(N){var J,be;return o(N)?N.writableErrored?N.writableErrored:(J=(be=N._writableState)===null||be===void 0?void 0:be.errored)!==null&&J!==void 0?J:null:null}function F(N){var J,be;return o(N)?N.readableErrored?N.readableErrored:(J=(be=N._readableState)===null||be===void 0?void 0:be.errored)!==null&&J!==void 0?J:null:null}function j(N){if(!o(N))return null;if(typeof N.closed=="boolean")return N.closed;let J=N._writableState,be=N._readableState;return typeof J?.closed=="boolean"||typeof be?.closed=="boolean"?J?.closed||be?.closed:typeof N._closed=="boolean"&&de(N)?N._closed:null}function de(N){return typeof N._closed=="boolean"&&typeof N._defaultKeepAlive=="boolean"&&typeof N._removedConnection=="boolean"&&typeof N._removedContLen=="boolean"}function X(N){return typeof N._sent100=="boolean"&&de(N)}function K(N){var J;return typeof N._consuming=="boolean"&&typeof N._dumped=="boolean"&&((J=N.req)===null||J===void 0?void 0:J.upgradeOrConnect)===void 0}function ie(N){if(!o(N))return null;let J=N._writableState,be=N._readableState,re=J||be;return!re&&X(N)||!!(re&&re.autoDestroy&&re.emitClose&&re.closed===!1)}function D(N){var J;return!!(N&&((J=N[s])!==null&&J!==void 0?J:N.readableDidRead||N.readableAborted))}function Z(N){var J,be,re,xe,Q,q,ae,V,z,Y;return!!(N&&((J=(be=(re=(xe=(Q=(q=N[n])!==null&&q!==void 0?q:N.readableErrored)!==null&&Q!==void 0?Q:N.writableErrored)!==null&&xe!==void 0?xe:(ae=N._readableState)===null||ae===void 0?void 0:ae.errorEmitted)!==null&&re!==void 0?re:(V=N._writableState)===null||V===void 0?void 0:V.errorEmitted)!==null&&be!==void 0?be:(z=N._readableState)===null||z===void 0?void 0:z.errored)!==null&&J!==void 0?J:!((Y=N._writableState)===null||Y===void 0)&&Y.errored))}f.exports={isDestroyed:y,kIsDestroyed:t,isDisturbed:D,kIsDisturbed:s,isErrored:Z,kIsErrored:n,isReadable:O,kIsReadable:r,kIsClosedPromise:i,kControllerErrorFunction:m,kIsWritable:e,isClosed:j,isDuplexNodeStream:u,isFinished:C,isIterable:k,isReadableNodeStream:h,isReadableStream:v,isReadableEnded:I,isReadableFinished:P,isReadableErrored:F,isNodeStream:o,isWebStream:_,isWritable:R,isWritableNodeStream:b,isWritableStream:w,isWritableEnded:T,isWritableFinished:S,isWritableErrored:W,isServerRequest:K,isServerResponse:X,willEmitClose:ie,isTransformStream:g}}),Wt=ye((c,f)=>{he(),me(),fe();var a=Xt(),{AbortError:l,codes:d}=pt(),{ERR_INVALID_ARG_TYPE:t,ERR_STREAM_PREMATURE_CLOSE:n}=d,{kEmptyObject:r,once:e}=ft(),{validateAbortSignal:s,validateFunction:i,validateObject:m,validateBoolean:h}=kn(),{Promise:b,PromisePrototypeThen:u,SymbolDispose:o}=Je(),{isClosed:v,isReadable:w,isReadableNodeStream:g,isReadableStream:_,isReadableFinished:k,isReadableErrored:y,isWritable:T,isWritableNodeStream:S,isWritableStream:I,isWritableFinished:P,isWritableErrored:O,isNodeStream:R,willEmitClose:C,kIsClosedPromise:W}=Ot(),F;function j(D){return D.setHeader&&typeof D.abort=="function"}var de=()=>{};function X(D,Z,N){var J,be;if(arguments.length===2?(N=Z,Z=r):Z==null?Z=r:m(Z,"options"),i(N,"callback"),s(Z.signal,"options.signal"),N=e(N),_(D)||I(D))return K(D,Z,N);if(!R(D))throw new t("stream",["ReadableStream","WritableStream","Stream"],D);let re=(J=Z.readable)!==null&&J!==void 0?J:g(D),xe=(be=Z.writable)!==null&&be!==void 0?be:S(D),Q=D._writableState,q=D._readableState,ae=()=>{D.writable||Y()},V=C(D)&&g(D)===re&&S(D)===xe,z=P(D,!1),Y=()=>{z=!0,D.destroyed&&(V=!1),!(V&&(!D.readable||re))&&(!re||we)&&N.call(D)},we=k(D,!1),ce=()=>{we=!0,D.destroyed&&(V=!1),!(V&&(!D.writable||xe))&&(!xe||z)&&N.call(D)},U=$=>{N.call(D,$)},H=v(D),te=()=>{H=!0;let $=O(D)||y(D);if($&&typeof $!="boolean")return N.call(D,$);if(re&&!we&&g(D,!0)&&!k(D,!1))return N.call(D,new n);if(xe&&!z&&!P(D,!1))return N.call(D,new n);N.call(D)},ge=()=>{H=!0;let $=O(D)||y(D);if($&&typeof $!="boolean")return N.call(D,$);N.call(D)},pe=()=>{D.req.on("finish",Y)};j(D)?(D.on("complete",Y),V||D.on("abort",te),D.req?pe():D.on("request",pe)):xe&&!Q&&(D.on("end",ae),D.on("close",ae)),!V&&typeof D.aborted=="boolean"&&D.on("aborted",te),D.on("end",ce),D.on("finish",Y),Z.error!==!1&&D.on("error",U),D.on("close",te),H?a.nextTick(te):Q!=null&&Q.errorEmitted||q!=null&&q.errorEmitted?V||a.nextTick(ge):(!re&&(!V||w(D))&&(z||T(D)===!1)||!xe&&(!V||T(D))&&(we||w(D)===!1)||q&&D.req&&D.aborted)&&a.nextTick(ge);let _e=()=>{N=de,D.removeListener("aborted",te),D.removeListener("complete",Y),D.removeListener("abort",te),D.removeListener("request",pe),D.req&&D.req.removeListener("finish",Y),D.removeListener("end",ae),D.removeListener("close",ae),D.removeListener("finish",Y),D.removeListener("end",ce),D.removeListener("error",U),D.removeListener("close",te)};if(Z.signal&&!H){let $=()=>{let ve=N;_e(),ve.call(D,new l(void 0,{cause:Z.signal.reason}))};if(Z.signal.aborted)a.nextTick($);else{F=F||ft().addAbortListener;let ve=F(Z.signal,$),Se=N;N=e((...le)=>{ve[o](),Se.apply(D,le)})}}return _e}function K(D,Z,N){let J=!1,be=de;if(Z.signal)if(be=()=>{J=!0,N.call(D,new l(void 0,{cause:Z.signal.reason}))},Z.signal.aborted)a.nextTick(be);else{F=F||ft().addAbortListener;let xe=F(Z.signal,be),Q=N;N=e((...q)=>{xe[o](),Q.apply(D,q)})}let re=(...xe)=>{J||a.nextTick(()=>N.apply(D,xe))};return u(D[W].promise,re,re),de}function ie(D,Z){var N;let J=!1;return Z===null&&(Z=r),(N=Z)!==null&&N!==void 0&&N.cleanup&&(h(Z.cleanup,"cleanup"),J=Z.cleanup),new b((be,re)=>{let xe=X(D,Z,Q=>{J&&xe(),Q?re(Q):be()})})}f.exports=X,f.exports.finished=ie}),on=ye((c,f)=>{he(),me(),fe();var a=Xt(),{aggregateTwoErrors:l,codes:{ERR_MULTIPLE_CALLBACK:d},AbortError:t}=pt(),{Symbol:n}=Je(),{kIsDestroyed:r,isDestroyed:e,isFinished:s,isServerRequest:i}=Ot(),m=n("kDestroy"),h=n("kConstruct");function b(C,W,F){C&&(C.stack,W&&!W.errored&&(W.errored=C),F&&!F.errored&&(F.errored=C))}function u(C,W){let F=this._readableState,j=this._writableState,de=j||F;return j!=null&&j.destroyed||F!=null&&F.destroyed?(typeof W=="function"&&W(),this):(b(C,j,F),j&&(j.destroyed=!0),F&&(F.destroyed=!0),de.constructed?o(this,C,W):this.once(m,function(X){o(this,l(X,C),W)}),this)}function o(C,W,F){let j=!1;function de(X){if(j)return;j=!0;let K=C._readableState,ie=C._writableState;b(X,ie,K),ie&&(ie.closed=!0),K&&(K.closed=!0),typeof F=="function"&&F(X),X?a.nextTick(v,C,X):a.nextTick(w,C)}try{C._destroy(W||null,de)}catch(X){de(X)}}function v(C,W){g(C,W),w(C)}function w(C){let W=C._readableState,F=C._writableState;F&&(F.closeEmitted=!0),W&&(W.closeEmitted=!0),(F!=null&&F.emitClose||W!=null&&W.emitClose)&&C.emit("close")}function g(C,W){let F=C._readableState,j=C._writableState;j!=null&&j.errorEmitted||F!=null&&F.errorEmitted||(j&&(j.errorEmitted=!0),F&&(F.errorEmitted=!0),C.emit("error",W))}function _(){let C=this._readableState,W=this._writableState;C&&(C.constructed=!0,C.closed=!1,C.closeEmitted=!1,C.destroyed=!1,C.errored=null,C.errorEmitted=!1,C.reading=!1,C.ended=C.readable===!1,C.endEmitted=C.readable===!1),W&&(W.constructed=!0,W.destroyed=!1,W.closed=!1,W.closeEmitted=!1,W.errored=null,W.errorEmitted=!1,W.finalCalled=!1,W.prefinished=!1,W.ended=W.writable===!1,W.ending=W.writable===!1,W.finished=W.writable===!1)}function k(C,W,F){let j=C._readableState,de=C._writableState;if(de!=null&&de.destroyed||j!=null&&j.destroyed)return this;j!=null&&j.autoDestroy||de!=null&&de.autoDestroy?C.destroy(W):W&&(W.stack,de&&!de.errored&&(de.errored=W),j&&!j.errored&&(j.errored=W),F?a.nextTick(g,C,W):g(C,W))}function y(C,W){if(typeof C._construct!="function")return;let F=C._readableState,j=C._writableState;F&&(F.constructed=!1),j&&(j.constructed=!1),C.once(h,W),!(C.listenerCount(h)>1)&&a.nextTick(T,C)}function T(C){let W=!1;function F(j){if(W){k(C,j??new d);return}W=!0;let de=C._readableState,X=C._writableState,K=X||de;de&&(de.constructed=!0),X&&(X.constructed=!0),K.destroyed?C.emit(m,j):j?k(C,j,!0):a.nextTick(S,C)}try{C._construct(j=>{a.nextTick(F,j)})}catch(j){a.nextTick(F,j)}}function S(C){C.emit(h)}function I(C){return C?.setHeader&&typeof C.abort=="function"}function P(C){C.emit("close")}function O(C,W){C.emit("error",W),a.nextTick(P,C)}function R(C,W){!C||e(C)||(!W&&!s(C)&&(W=new t),i(C)?(C.socket=null,C.destroy(W)):I(C)?C.abort():I(C.req)?C.req.abort():typeof C.destroy=="function"?C.destroy(W):typeof C.close=="function"?C.close():W?a.nextTick(O,C,W):a.nextTick(P,C),C.destroyed||(C[r]=!0))}f.exports={construct:y,destroyer:R,destroy:u,undestroy:_,errorOrDestroy:k}}),mi=ye((c,f)=>{he(),me(),fe();var{ArrayIsArray:a,ObjectSetPrototypeOf:l}=Je(),{EventEmitter:d}=(Jt(),Qe(Dt));function t(r){d.call(this,r)}l(t.prototype,d.prototype),l(t,d),t.prototype.pipe=function(r,e){let s=this;function i(w){r.writable&&r.write(w)===!1&&s.pause&&s.pause()}s.on("data",i);function m(){s.readable&&s.resume&&s.resume()}r.on("drain",m),!r._isStdio&&(!e||e.end!==!1)&&(s.on("end",b),s.on("close",u));let h=!1;function b(){h||(h=!0,r.end())}function u(){h||(h=!0,typeof r.destroy=="function"&&r.destroy())}function o(w){v(),d.listenerCount(this,"error")===0&&this.emit("error",w)}n(s,"error",o),n(r,"error",o);function v(){s.removeListener("data",i),r.removeListener("drain",m),s.removeListener("end",b),s.removeListener("close",u),s.removeListener("error",o),r.removeListener("error",o),s.removeListener("end",v),s.removeListener("close",v),r.removeListener("close",v)}return s.on("end",v),s.on("close",v),r.on("close",v),r.emit("pipe",s),r};function n(r,e,s){if(typeof r.prependListener=="function")return r.prependListener(e,s);!r._events||!r._events[e]?r.on(e,s):a(r._events[e])?r._events[e].unshift(s):r._events[e]=[s,r._events[e]]}f.exports={Stream:t,prependListener:n}}),tr=ye((c,f)=>{he(),me(),fe();var{SymbolDispose:a}=Je(),{AbortError:l,codes:d}=pt(),{isNodeStream:t,isWebStream:n,kControllerErrorFunction:r}=Ot(),e=Wt(),{ERR_INVALID_ARG_TYPE:s}=d,i,m=(h,b)=>{if(typeof h!="object"||!("aborted"in h))throw new s(b,"AbortSignal",h)};f.exports.addAbortSignal=function(h,b){if(m(h,"signal"),!t(b)&&!n(b))throw new s("stream",["ReadableStream","WritableStream","Stream"],b);return f.exports.addAbortSignalNoValidate(h,b)},f.exports.addAbortSignalNoValidate=function(h,b){if(typeof h!="object"||!("aborted"in h))return b;let u=t(b)?()=>{b.destroy(new l(void 0,{cause:h.reason}))}:()=>{b[r](new l(void 0,{cause:h.reason}))};if(h.aborted)u();else{i=i||ft().addAbortListener;let o=i(h,u);e(b,o[a])}return b}}),uc=ye((c,f)=>{he(),me(),fe();var{StringPrototypeSlice:a,SymbolIterator:l,TypedArrayPrototypeSet:d,Uint8Array:t}=Je(),{Buffer:n}=(st(),Qe(rt)),{inspect:r}=ft();f.exports=class{constructor(){this.head=null,this.tail=null,this.length=0}push(e){let s={data:e,next:null};this.length>0?this.tail.next=s:this.head=s,this.tail=s,++this.length}unshift(e){let s={data:e,next:this.head};this.length===0&&(this.tail=s),this.head=s,++this.length}shift(){if(this.length===0)return;let e=this.head.data;return this.length===1?this.head=this.tail=null:this.head=this.head.next,--this.length,e}clear(){this.head=this.tail=null,this.length=0}join(e){if(this.length===0)return"";let s=this.head,i=""+s.data;for(;(s=s.next)!==null;)i+=e+s.data;return i}concat(e){if(this.length===0)return n.alloc(0);let s=n.allocUnsafe(e>>>0),i=this.head,m=0;for(;i;)d(s,i.data,m),m+=i.data.length,i=i.next;return s}consume(e,s){let i=this.head.data;if(e<i.length){let m=i.slice(0,e);return this.head.data=i.slice(e),m}return e===i.length?this.shift():s?this._getString(e):this._getBuffer(e)}first(){return this.head.data}*[l](){for(let e=this.head;e;e=e.next)yield e.data}_getString(e){let s="",i=this.head,m=0;do{let h=i.data;if(e>h.length)s+=h,e-=h.length;else{e===h.length?(s+=h,++m,i.next?this.head=i.next:this.head=this.tail=null):(s+=a(h,0,e),this.head=i,i.data=a(h,e));break}++m}while((i=i.next)!==null);return this.length-=m,s}_getBuffer(e){let s=n.allocUnsafe(e),i=e,m=this.head,h=0;do{let b=m.data;if(e>b.length)d(s,b,i-e),e-=b.length;else{e===b.length?(d(s,b,i-e),++h,m.next?this.head=m.next:this.head=this.tail=null):(d(s,new t(b.buffer,b.byteOffset,e),i-e),this.head=m,m.data=b.slice(e));break}++h}while((m=m.next)!==null);return this.length-=h,s}[Symbol.for("nodejs.util.inspect.custom")](e,s){return r(this,{...s,depth:0,customInspect:!1})}}}),nr=ye((c,f)=>{he(),me(),fe();var{MathFloor:a,NumberIsInteger:l}=Je(),{validateInteger:d}=kn(),{ERR_INVALID_ARG_VALUE:t}=pt().codes,n=16*1024,r=16;function e(h,b,u){return h.highWaterMark!=null?h.highWaterMark:b?h[u]:null}function s(h){return h?r:n}function i(h,b){d(b,"value",0),h?r=b:n=b}function m(h,b,u,o){let v=e(b,o,u);if(v!=null){if(!l(v)||v<0){let w=o?`options.${u}`:"options.highWaterMark";throw new t(w,v)}return a(v)}return s(h.objectMode)}f.exports={getHighWaterMark:m,getDefaultHighWaterMark:s,setDefaultHighWaterMark:i}}),pc=ye((c,f)=>{he(),me(),fe();var a=(st(),Qe(rt)),l=a.Buffer;function d(n,r){for(var e in n)r[e]=n[e]}l.from&&l.alloc&&l.allocUnsafe&&l.allocUnsafeSlow?f.exports=a:(d(a,c),c.Buffer=t);function t(n,r,e){return l(n,r,e)}t.prototype=Object.create(l.prototype),d(l,t),t.from=function(n,r,e){if(typeof n=="number")throw new TypeError("Argument must not be a number");return l(n,r,e)},t.alloc=function(n,r,e){if(typeof n!="number")throw new TypeError("Argument must be a number");var s=l(n);return r!==void 0?typeof e=="string"?s.fill(r,e):s.fill(r):s.fill(0),s},t.allocUnsafe=function(n){if(typeof n!="number")throw new TypeError("Argument must be a number");return l(n)},t.allocUnsafeSlow=function(n){if(typeof n!="number")throw new TypeError("Argument must be a number");return a.SlowBuffer(n)}}),hc=ye(c=>{he(),me(),fe();var f=pc().Buffer,a=f.isEncoding||function(g){switch(g=""+g,g&&g.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}};function l(g){if(!g)return"utf8";for(var _;;)switch(g){case"utf8":case"utf-8":return"utf8";case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le";case"latin1":case"binary":return"latin1";case"base64":case"ascii":case"hex":return g;default:if(_)return;g=(""+g).toLowerCase(),_=!0}}function d(g){var _=l(g);if(typeof _!="string"&&(f.isEncoding===a||!a(g)))throw new Error("Unknown encoding: "+g);return _||g}c.StringDecoder=t;function t(g){this.encoding=d(g);var _;switch(this.encoding){case"utf16le":this.text=h,this.end=b,_=4;break;case"utf8":this.fillLast=s,_=4;break;case"base64":this.text=u,this.end=o,_=3;break;default:this.write=v,this.end=w;return}this.lastNeed=0,this.lastTotal=0,this.lastChar=f.allocUnsafe(_)}t.prototype.write=function(g){if(g.length===0)return"";var _,k;if(this.lastNeed){if(_=this.fillLast(g),_===void 0)return"";k=this.lastNeed,this.lastNeed=0}else k=0;return k<g.length?_?_+this.text(g,k):this.text(g,k):_||""},t.prototype.end=m,t.prototype.text=i,t.prototype.fillLast=function(g){if(this.lastNeed<=g.length)return g.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);g.copy(this.lastChar,this.lastTotal-this.lastNeed,0,g.length),this.lastNeed-=g.length};function n(g){return g<=127?0:g>>5===6?2:g>>4===14?3:g>>3===30?4:g>>6===2?-1:-2}function r(g,_,k){var y=_.length-1;if(y<k)return 0;var T=n(_[y]);return T>=0?(T>0&&(g.lastNeed=T-1),T):--y<k||T===-2?0:(T=n(_[y]),T>=0?(T>0&&(g.lastNeed=T-2),T):--y<k||T===-2?0:(T=n(_[y]),T>=0?(T>0&&(T===2?T=0:g.lastNeed=T-3),T):0))}function e(g,_,k){if((_[0]&192)!==128)return g.lastNeed=0,"�";if(g.lastNeed>1&&_.length>1){if((_[1]&192)!==128)return g.lastNeed=1,"�";if(g.lastNeed>2&&_.length>2&&(_[2]&192)!==128)return g.lastNeed=2,"�"}}function s(g){var _=this.lastTotal-this.lastNeed,k=e(this,g);if(k!==void 0)return k;if(this.lastNeed<=g.length)return g.copy(this.lastChar,_,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);g.copy(this.lastChar,_,0,g.length),this.lastNeed-=g.length}function i(g,_){var k=r(this,g,_);if(!this.lastNeed)return g.toString("utf8",_);this.lastTotal=k;var y=g.length-(k-this.lastNeed);return g.copy(this.lastChar,0,y),g.toString("utf8",_,y)}function m(g){var _=g&&g.length?this.write(g):"";return this.lastNeed?_+"�":_}function h(g,_){if((g.length-_)%2===0){var k=g.toString("utf16le",_);if(k){var y=k.charCodeAt(k.length-1);if(y>=55296&&y<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=g[g.length-2],this.lastChar[1]=g[g.length-1],k.slice(0,-1)}return k}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=g[g.length-1],g.toString("utf16le",_,g.length-1)}function b(g){var _=g&&g.length?this.write(g):"";if(this.lastNeed){var k=this.lastTotal-this.lastNeed;return _+this.lastChar.toString("utf16le",0,k)}return _}function u(g,_){var k=(g.length-_)%3;return k===0?g.toString("base64",_):(this.lastNeed=3-k,this.lastTotal=3,k===1?this.lastChar[0]=g[g.length-1]:(this.lastChar[0]=g[g.length-2],this.lastChar[1]=g[g.length-1]),g.toString("base64",_,g.length-k))}function o(g){var _=g&&g.length?this.write(g):"";return this.lastNeed?_+this.lastChar.toString("base64",0,3-this.lastNeed):_}function v(g){return g.toString(this.encoding)}function w(g){return g&&g.length?this.write(g):""}}),ga=ye((c,f)=>{he(),me(),fe();var a=Xt(),{PromisePrototypeThen:l,SymbolAsyncIterator:d,SymbolIterator:t}=Je(),{Buffer:n}=(st(),Qe(rt)),{ERR_INVALID_ARG_TYPE:r,ERR_STREAM_NULL_VALUES:e}=pt().codes;function s(i,m,h){let b;if(typeof m=="string"||m instanceof n)return new i({objectMode:!0,...h,read(){this.push(m),this.push(null)}});let u;if(m&&m[d])u=!0,b=m[d]();else if(m&&m[t])u=!1,b=m[t]();else throw new r("iterable",["Iterable"],m);let o=new i({objectMode:!0,highWaterMark:1,...h}),v=!1;o._read=function(){v||(v=!0,g())},o._destroy=function(_,k){l(w(_),()=>a.nextTick(k,_),y=>a.nextTick(k,y||_))};async function w(_){let k=_!=null,y=typeof b.throw=="function";if(k&&y){let{value:T,done:S}=await b.throw(_);if(await T,S)return}if(typeof b.return=="function"){let{value:T}=await b.return();await T}}async function g(){for(;;){try{let{value:_,done:k}=u?await b.next():b.next();if(k)o.push(null);else{let y=_&&typeof _.then=="function"?await _:_;if(y===null)throw v=!1,new e;if(o.push(y))continue;v=!1}}catch(_){o.destroy(_)}break}}return o}f.exports=s}),rr=ye((c,f)=>{he(),me(),fe();var a=Xt(),{ArrayPrototypeIndexOf:l,NumberIsInteger:d,NumberIsNaN:t,NumberParseInt:n,ObjectDefineProperties:r,ObjectKeys:e,ObjectSetPrototypeOf:s,Promise:i,SafeSet:m,SymbolAsyncDispose:h,SymbolAsyncIterator:b,Symbol:u}=Je();f.exports=le,le.ReadableState=Se;var{EventEmitter:o}=(Jt(),Qe(Dt)),{Stream:v,prependListener:w}=mi(),{Buffer:g}=(st(),Qe(rt)),{addAbortSignal:_}=tr(),k=Wt(),y=ft().debuglog("stream",M=>{y=M}),T=uc(),S=on(),{getHighWaterMark:I,getDefaultHighWaterMark:P}=nr(),{aggregateTwoErrors:O,codes:{ERR_INVALID_ARG_TYPE:R,ERR_METHOD_NOT_IMPLEMENTED:C,ERR_OUT_OF_RANGE:W,ERR_STREAM_PUSH_AFTER_EOF:F,ERR_STREAM_UNSHIFT_AFTER_END_EVENT:j},AbortError:de}=pt(),{validateObject:X}=kn(),K=u("kPaused"),{StringDecoder:ie}=hc(),D=ga();s(le.prototype,v.prototype),s(le,v);var Z=()=>{},{errorOrDestroy:N}=S,J=1,be=2,re=4,xe=8,Q=16,q=32,ae=64,V=128,z=256,Y=512,we=1024,ce=2048,U=4096,H=8192,te=16384,ge=32768,pe=65536,_e=1<<17,$=1<<18;function ve(M){return{enumerable:!1,get(){return(this.state&M)!==0},set(L){L?this.state|=M:this.state&=~M}}}r(Se.prototype,{objectMode:ve(J),ended:ve(be),endEmitted:ve(re),reading:ve(xe),constructed:ve(Q),sync:ve(q),needReadable:ve(ae),emittedReadable:ve(V),readableListening:ve(z),resumeScheduled:ve(Y),errorEmitted:ve(we),emitClose:ve(ce),autoDestroy:ve(U),destroyed:ve(H),closed:ve(te),closeEmitted:ve(ge),multiAwaitDrain:ve(pe),readingMore:ve(_e),dataEmitted:ve($)});function Se(M,L,Te){typeof Te!="boolean"&&(Te=L instanceof Ct()),this.state=ce|U|Q|q,M&&M.objectMode&&(this.state|=J),Te&&M&&M.readableObjectMode&&(this.state|=J),this.highWaterMark=M?I(this,M,"readableHighWaterMark",Te):P(!1),this.buffer=new T,this.length=0,this.pipes=[],this.flowing=null,this[K]=null,M&&M.emitClose===!1&&(this.state&=~ce),M&&M.autoDestroy===!1&&(this.state&=~U),this.errored=null,this.defaultEncoding=M&&M.defaultEncoding||"utf8",this.awaitDrainWriters=null,this.decoder=null,this.encoding=null,M&&M.encoding&&(this.decoder=new ie(M.encoding),this.encoding=M.encoding)}function le(M){if(!(this instanceof le))return new le(M);let L=this instanceof Ct();this._readableState=new Se(M,this,L),M&&(typeof M.read=="function"&&(this._read=M.read),typeof M.destroy=="function"&&(this._destroy=M.destroy),typeof M.construct=="function"&&(this._construct=M.construct),M.signal&&!L&&_(M.signal,this)),v.call(this,M),S.construct(this,()=>{this._readableState.needReadable&&G(this,this._readableState)})}le.prototype.destroy=S.destroy,le.prototype._undestroy=S.undestroy,le.prototype._destroy=function(M,L){L(M)},le.prototype[o.captureRejectionSymbol]=function(M){this.destroy(M)},le.prototype[h]=function(){let M;return this.destroyed||(M=this.readableEnded?null:new de,this.destroy(M)),new i((L,Te)=>k(this,Ee=>Ee&&Ee!==M?Te(Ee):L(null)))},le.prototype.push=function(M,L){return qe(this,M,L,!1)},le.prototype.unshift=function(M,L){return qe(this,M,L,!0)};function qe(M,L,Te,Ee){y("readableAddChunk",L);let Me=M._readableState,tt;if((Me.state&J)===0&&(typeof L=="string"?(Te=Te||Me.defaultEncoding,Me.encoding!==Te&&(Ee&&Me.encoding?L=g.from(L,Te).toString(Me.encoding):(L=g.from(L,Te),Te=""))):L instanceof g?Te="":v._isUint8Array(L)?(L=v._uint8ArrayToBuffer(L),Te=""):L!=null&&(tt=new R("chunk",["string","Buffer","Uint8Array"],L))),tt)N(M,tt);else if(L===null)Me.state&=~xe,ee(M,Me);else if((Me.state&J)!==0||L&&L.length>0)if(Ee)if((Me.state&re)!==0)N(M,new j);else{if(Me.destroyed||Me.errored)return!1;p(M,Me,L,!0)}else if(Me.ended)N(M,new F);else{if(Me.destroyed||Me.errored)return!1;Me.state&=~xe,Me.decoder&&!Te?(L=Me.decoder.write(L),Me.objectMode||L.length!==0?p(M,Me,L,!1):G(M,Me)):p(M,Me,L,!1)}else Ee||(Me.state&=~xe,G(M,Me));return!Me.ended&&(Me.length<Me.highWaterMark||Me.length===0)}function p(M,L,Te,Ee){L.flowing&&L.length===0&&!L.sync&&M.listenerCount("data")>0?((L.state&pe)!==0?L.awaitDrainWriters.clear():L.awaitDrainWriters=null,L.dataEmitted=!0,M.emit("data",Te)):(L.length+=L.objectMode?1:Te.length,Ee?L.buffer.unshift(Te):L.buffer.push(Te),(L.state&ae)!==0&&ue(M)),G(M,L)}le.prototype.isPaused=function(){let M=this._readableState;return M[K]===!0||M.flowing===!1},le.prototype.setEncoding=function(M){let L=new ie(M);this._readableState.decoder=L,this._readableState.encoding=this._readableState.decoder.encoding;let Te=this._readableState.buffer,Ee="";for(let Me of Te)Ee+=L.write(Me);return Te.clear(),Ee!==""&&Te.push(Ee),this._readableState.length=Ee.length,this};var x=1073741824;function A(M){if(M>x)throw new W("size","<= 1GiB",M);return M--,M|=M>>>1,M|=M>>>2,M|=M>>>4,M|=M>>>8,M|=M>>>16,M++,M}function B(M,L){return M<=0||L.length===0&&L.ended?0:(L.state&J)!==0?1:t(M)?L.flowing&&L.length?L.buffer.first().length:L.length:M<=L.length?M:L.ended?L.length:0}le.prototype.read=function(M){y("read",M),M===void 0?M=NaN:d(M)||(M=n(M,10));let L=this._readableState,Te=M;if(M>L.highWaterMark&&(L.highWaterMark=A(M)),M!==0&&(L.state&=~V),M===0&&L.needReadable&&((L.highWaterMark!==0?L.length>=L.highWaterMark:L.length>0)||L.ended))return y("read: emitReadable",L.length,L.ended),L.length===0&&L.ended?De(this):ue(this),null;if(M=B(M,L),M===0&&L.ended)return L.length===0&&De(this),null;let Ee=(L.state&ae)!==0;if(y("need readable",Ee),(L.length===0||L.length-M<L.highWaterMark)&&(Ee=!0,y("length less than watermark",Ee)),L.ended||L.reading||L.destroyed||L.errored||!L.constructed)Ee=!1,y("reading, ended or constructing",Ee);else if(Ee){y("do read"),L.state|=xe|q,L.length===0&&(L.state|=ae);try{this._read(L.highWaterMark)}catch(tt){N(this,tt)}L.state&=~q,L.reading||(M=B(Te,L))}let Me;return M>0?Me=Ze(M,L):Me=null,Me===null?(L.needReadable=L.length<=L.highWaterMark,M=0):(L.length-=M,L.multiAwaitDrain?L.awaitDrainWriters.clear():L.awaitDrainWriters=null),L.length===0&&(L.ended||(L.needReadable=!0),Te!==M&&L.ended&&De(this)),Me!==null&&!L.errorEmitted&&!L.closeEmitted&&(L.dataEmitted=!0,this.emit("data",Me)),Me};function ee(M,L){if(y("onEofChunk"),!L.ended){if(L.decoder){let Te=L.decoder.end();Te&&Te.length&&(L.buffer.push(Te),L.length+=L.objectMode?1:Te.length)}L.ended=!0,L.sync?ue(M):(L.needReadable=!1,L.emittedReadable=!0,Ae(M))}}function ue(M){let L=M._readableState;y("emitReadable",L.needReadable,L.emittedReadable),L.needReadable=!1,L.emittedReadable||(y("emitReadable",L.flowing),L.emittedReadable=!0,a.nextTick(Ae,M))}function Ae(M){let L=M._readableState;y("emitReadable_",L.destroyed,L.length,L.ended),!L.destroyed&&!L.errored&&(L.length||L.ended)&&(M.emit("readable"),L.emittedReadable=!1),L.needReadable=!L.flowing&&!L.ended&&L.length<=L.highWaterMark,ke(M)}function G(M,L){!L.readingMore&&L.constructed&&(L.readingMore=!0,a.nextTick(oe,M,L))}function oe(M,L){for(;!L.reading&&!L.ended&&(L.length<L.highWaterMark||L.flowing&&L.length===0);){let Te=L.length;if(y("maybeReadMore read 0"),M.read(0),Te===L.length)break}L.readingMore=!1}le.prototype._read=function(M){throw new C("_read()")},le.prototype.pipe=function(M,L){let Te=this,Ee=this._readableState;Ee.pipes.length===1&&(Ee.multiAwaitDrain||(Ee.multiAwaitDrain=!0,Ee.awaitDrainWriters=new m(Ee.awaitDrainWriters?[Ee.awaitDrainWriters]:[]))),Ee.pipes.push(M),y("pipe count=%d opts=%j",Ee.pipes.length,L);let Me=(!L||L.end!==!1)&&M!==a.stdout&&M!==a.stderr?ut:$t;Ee.endEmitted?a.nextTick(Me):Te.once("end",Me),M.on("unpipe",tt);function tt(yt,xt){y("onunpipe"),yt===Te&&xt&&xt.hasUnpiped===!1&&(xt.hasUnpiped=!0,dn())}function ut(){y("onend"),M.end()}let bt,cn=!1;function dn(){y("cleanup"),M.removeListener("close",vt),M.removeListener("finish",Ut),bt&&M.removeListener("drain",bt),M.removeListener("error",Ht),M.removeListener("unpipe",tt),Te.removeListener("end",ut),Te.removeListener("end",$t),Te.removeListener("data",Sn),cn=!0,bt&&Ee.awaitDrainWriters&&(!M._writableState||M._writableState.needDrain)&&bt()}function un(){cn||(Ee.pipes.length===1&&Ee.pipes[0]===M?(y("false write response, pause",0),Ee.awaitDrainWriters=M,Ee.multiAwaitDrain=!1):Ee.pipes.length>1&&Ee.pipes.includes(M)&&(y("false write response, pause",Ee.awaitDrainWriters.size),Ee.awaitDrainWriters.add(M)),Te.pause()),bt||(bt=Ne(Te,M),M.on("drain",bt))}Te.on("data",Sn);function Sn(yt){y("ondata");let xt=M.write(yt);y("dest.write",xt),xt===!1&&un()}function Ht(yt){if(y("onerror",yt),$t(),M.removeListener("error",Ht),M.listenerCount("error")===0){let xt=M._writableState||M._readableState;xt&&!xt.errorEmitted?N(M,yt):M.emit("error",yt)}}w(M,"error",Ht);function vt(){M.removeListener("finish",Ut),$t()}M.once("close",vt);function Ut(){y("onfinish"),M.removeListener("close",vt),$t()}M.once("finish",Ut);function $t(){y("unpipe"),Te.unpipe(M)}return M.emit("pipe",Te),M.writableNeedDrain===!0?un():Ee.flowing||(y("pipe resume"),Te.resume()),M};function Ne(M,L){return function(){let Te=M._readableState;Te.awaitDrainWriters===L?(y("pipeOnDrain",1),Te.awaitDrainWriters=null):Te.multiAwaitDrain&&(y("pipeOnDrain",Te.awaitDrainWriters.size),Te.awaitDrainWriters.delete(L)),(!Te.awaitDrainWriters||Te.awaitDrainWriters.size===0)&&M.listenerCount("data")&&M.resume()}}le.prototype.unpipe=function(M){let L=this._readableState,Te={hasUnpiped:!1};if(L.pipes.length===0)return this;if(!M){let Me=L.pipes;L.pipes=[],this.pause();for(let tt=0;tt<Me.length;tt++)Me[tt].emit("unpipe",this,{hasUnpiped:!1});return this}let Ee=l(L.pipes,M);return Ee===-1?this:(L.pipes.splice(Ee,1),L.pipes.length===0&&this.pause(),M.emit("unpipe",this,Te),this)},le.prototype.on=function(M,L){let Te=v.prototype.on.call(this,M,L),Ee=this._readableState;return M==="data"?(Ee.readableListening=this.listenerCount("readable")>0,Ee.flowing!==!1&&this.resume()):M==="readable"&&!Ee.endEmitted&&!Ee.readableListening&&(Ee.readableListening=Ee.needReadable=!0,Ee.flowing=!1,Ee.emittedReadable=!1,y("on readable",Ee.length,Ee.reading),Ee.length?ue(this):Ee.reading||a.nextTick(se,this)),Te},le.prototype.addListener=le.prototype.on,le.prototype.removeListener=function(M,L){let Te=v.prototype.removeListener.call(this,M,L);return M==="readable"&&a.nextTick(Re,this),Te},le.prototype.off=le.prototype.removeListener,le.prototype.removeAllListeners=function(M){let L=v.prototype.removeAllListeners.apply(this,arguments);return(M==="readable"||M===void 0)&&a.nextTick(Re,this),L};function Re(M){let L=M._readableState;L.readableListening=M.listenerCount("readable")>0,L.resumeScheduled&&L[K]===!1?L.flowing=!0:M.listenerCount("data")>0?M.resume():L.readableListening||(L.flowing=null)}function se(M){y("readable nexttick read 0"),M.read(0)}le.prototype.resume=function(){let M=this._readableState;return M.flowing||(y("resume"),M.flowing=!M.readableListening,ne(this,M)),M[K]=!1,this};function ne(M,L){L.resumeScheduled||(L.resumeScheduled=!0,a.nextTick(Oe,M,L))}function Oe(M,L){y("resume",L.reading),L.reading||M.read(0),L.resumeScheduled=!1,M.emit("resume"),ke(M),L.flowing&&!L.reading&&M.read(0)}le.prototype.pause=function(){return y("call pause flowing=%j",this._readableState.flowing),this._readableState.flowing!==!1&&(y("pause"),this._readableState.flowing=!1,this.emit("pause")),this._readableState[K]=!0,this};function ke(M){let L=M._readableState;for(y("flow",L.flowing);L.flowing&&M.read()!==null;);}le.prototype.wrap=function(M){let L=!1;M.on("data",Ee=>{!this.push(Ee)&&M.pause&&(L=!0,M.pause())}),M.on("end",()=>{this.push(null)}),M.on("error",Ee=>{N(this,Ee)}),M.on("close",()=>{this.destroy()}),M.on("destroy",()=>{this.destroy()}),this._read=()=>{L&&M.resume&&(L=!1,M.resume())};let Te=e(M);for(let Ee=1;Ee<Te.length;Ee++){let Me=Te[Ee];this[Me]===void 0&&typeof M[Me]=="function"&&(this[Me]=M[Me].bind(M))}return this},le.prototype[b]=function(){return je(this)},le.prototype.iterator=function(M){return M!==void 0&&X(M,"options"),je(this,M)};function je(M,L){typeof M.read!="function"&&(M=le.wrap(M,{objectMode:!0}));let Te=Be(M,L);return Te.stream=M,Te}async function*Be(M,L){let Te=Z;function Ee(ut){this===M?(Te(),Te=Z):Te=ut}M.on("readable",Ee);let Me,tt=k(M,{writable:!1},ut=>{Me=ut?O(Me,ut):null,Te(),Te=Z});try{for(;;){let ut=M.destroyed?null:M.read();if(ut!==null)yield ut;else{if(Me)throw Me;if(Me===null)return;await new i(Ee)}}}catch(ut){throw Me=O(Me,ut),Me}finally{(Me||L?.destroyOnReturn!==!1)&&(Me===void 0||M._readableState.autoDestroy)?S.destroyer(M,null):(M.off("readable",Ee),tt())}}r(le.prototype,{readable:{__proto__:null,get(){let M=this._readableState;return!!M&&M.readable!==!1&&!M.destroyed&&!M.errorEmitted&&!M.endEmitted},set(M){this._readableState&&(this._readableState.readable=!!M)}},readableDidRead:{__proto__:null,enumerable:!1,get:function(){return this._readableState.dataEmitted}},readableAborted:{__proto__:null,enumerable:!1,get:function(){return!!(this._readableState.readable!==!1&&(this._readableState.destroyed||this._readableState.errored)&&!this._readableState.endEmitted)}},readableHighWaterMark:{__proto__:null,enumerable:!1,get:function(){return this._readableState.highWaterMark}},readableBuffer:{__proto__:null,enumerable:!1,get:function(){return this._readableState&&this._readableState.buffer}},readableFlowing:{__proto__:null,enumerable:!1,get:function(){return this._readableState.flowing},set:function(M){this._readableState&&(this._readableState.flowing=M)}},readableLength:{__proto__:null,enumerable:!1,get(){return this._readableState.length}},readableObjectMode:{__proto__:null,enumerable:!1,get(){return this._readableState?this._readableState.objectMode:!1}},readableEncoding:{__proto__:null,enumerable:!1,get(){return this._readableState?this._readableState.encoding:null}},errored:{__proto__:null,enumerable:!1,get(){return this._readableState?this._readableState.errored:null}},closed:{__proto__:null,get(){return this._readableState?this._readableState.closed:!1}},destroyed:{__proto__:null,enumerable:!1,get(){return this._readableState?this._readableState.destroyed:!1},set(M){this._readableState&&(this._readableState.destroyed=M)}},readableEnded:{__proto__:null,enumerable:!1,get(){return this._readableState?this._readableState.endEmitted:!1}}}),r(Se.prototype,{pipesCount:{__proto__:null,get(){return this.pipes.length}},paused:{__proto__:null,get(){return this[K]!==!1},set(M){this[K]=!!M}}}),le._fromList=Ze;function Ze(M,L){if(L.length===0)return null;let Te;return L.objectMode?Te=L.buffer.shift():!M||M>=L.length?(L.decoder?Te=L.buffer.join(""):L.buffer.length===1?Te=L.buffer.first():Te=L.buffer.concat(L.length),L.buffer.clear()):Te=L.buffer.consume(M,L.decoder),Te}function De(M){let L=M._readableState;y("endReadable",L.endEmitted),L.endEmitted||(L.ended=!0,a.nextTick($e,L,M))}function $e(M,L){if(y("endReadableNT",M.endEmitted,M.length),!M.errored&&!M.closeEmitted&&!M.endEmitted&&M.length===0){if(M.endEmitted=!0,L.emit("end"),L.writable&&L.allowHalfOpen===!1)a.nextTick(it,L);else if(M.autoDestroy){let Te=L._writableState;(!Te||Te.autoDestroy&&(Te.finished||Te.writable===!1))&&L.destroy()}}}function it(M){M.writable&&!M.writableEnded&&!M.destroyed&&M.end()}le.from=function(M,L){return D(le,M,L)};var nt;function ht(){return nt===void 0&&(nt={}),nt}le.fromWeb=function(M,L){return ht().newStreamReadableFromReadableStream(M,L)},le.toWeb=function(M,L){return ht().newReadableStreamFromStreamReadable(M,L)},le.wrap=function(M,L){var Te,Ee;return new le({objectMode:(Te=(Ee=M.readableObjectMode)!==null&&Ee!==void 0?Ee:M.objectMode)!==null&&Te!==void 0?Te:!0,...L,destroy(Me,tt){S.destroyer(M,Me),tt(Me)}}).wrap(M)}}),gi=ye((c,f)=>{he(),me(),fe();var a=Xt(),{ArrayPrototypeSlice:l,Error:d,FunctionPrototypeSymbolHasInstance:t,ObjectDefineProperty:n,ObjectDefineProperties:r,ObjectSetPrototypeOf:e,StringPrototypeToLowerCase:s,Symbol:i,SymbolHasInstance:m}=Je();f.exports=X,X.WritableState=j;var{EventEmitter:h}=(Jt(),Qe(Dt)),b=mi().Stream,{Buffer:u}=(st(),Qe(rt)),o=on(),{addAbortSignal:v}=tr(),{getHighWaterMark:w,getDefaultHighWaterMark:g}=nr(),{ERR_INVALID_ARG_TYPE:_,ERR_METHOD_NOT_IMPLEMENTED:k,ERR_MULTIPLE_CALLBACK:y,ERR_STREAM_CANNOT_PIPE:T,ERR_STREAM_DESTROYED:S,ERR_STREAM_ALREADY_FINISHED:I,ERR_STREAM_NULL_VALUES:P,ERR_STREAM_WRITE_AFTER_END:O,ERR_UNKNOWN_ENCODING:R}=pt().codes,{errorOrDestroy:C}=o;e(X.prototype,b.prototype),e(X,b);function W(){}var F=i("kOnFinished");function j(U,H,te){typeof te!="boolean"&&(te=H instanceof Ct()),this.objectMode=!!(U&&U.objectMode),te&&(this.objectMode=this.objectMode||!!(U&&U.writableObjectMode)),this.highWaterMark=U?w(this,U,"writableHighWaterMark",te):g(!1),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,this.destroyed=!1;let ge=!!(U&&U.decodeStrings===!1);this.decodeStrings=!ge,this.defaultEncoding=U&&U.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=N.bind(void 0,H),this.writecb=null,this.writelen=0,this.afterWriteTickInfo=null,de(this),this.pendingcb=0,this.constructed=!0,this.prefinished=!1,this.errorEmitted=!1,this.emitClose=!U||U.emitClose!==!1,this.autoDestroy=!U||U.autoDestroy!==!1,this.errored=null,this.closed=!1,this.closeEmitted=!1,this[F]=[]}function de(U){U.buffered=[],U.bufferedIndex=0,U.allBuffers=!0,U.allNoop=!0}j.prototype.getBuffer=function(){return l(this.buffered,this.bufferedIndex)},n(j.prototype,"bufferedRequestCount",{__proto__:null,get(){return this.buffered.length-this.bufferedIndex}});function X(U){let H=this instanceof Ct();if(!H&&!t(X,this))return new X(U);this._writableState=new j(U,this,H),U&&(typeof U.write=="function"&&(this._write=U.write),typeof U.writev=="function"&&(this._writev=U.writev),typeof U.destroy=="function"&&(this._destroy=U.destroy),typeof U.final=="function"&&(this._final=U.final),typeof U.construct=="function"&&(this._construct=U.construct),U.signal&&v(U.signal,this)),b.call(this,U),o.construct(this,()=>{let te=this._writableState;te.writing||xe(this,te),V(this,te)})}n(X,m,{__proto__:null,value:function(U){return t(this,U)?!0:this!==X?!1:U&&U._writableState instanceof j}}),X.prototype.pipe=function(){C(this,new T)};function K(U,H,te,ge){let pe=U._writableState;if(typeof te=="function")ge=te,te=pe.defaultEncoding;else{if(!te)te=pe.defaultEncoding;else if(te!=="buffer"&&!u.isEncoding(te))throw new R(te);typeof ge!="function"&&(ge=W)}if(H===null)throw new P;if(!pe.objectMode)if(typeof H=="string")pe.decodeStrings!==!1&&(H=u.from(H,te),te="buffer");else if(H instanceof u)te="buffer";else if(b._isUint8Array(H))H=b._uint8ArrayToBuffer(H),te="buffer";else throw new _("chunk",["string","Buffer","Uint8Array"],H);let _e;return pe.ending?_e=new O:pe.destroyed&&(_e=new S("write")),_e?(a.nextTick(ge,_e),C(U,_e,!0),_e):(pe.pendingcb++,ie(U,pe,H,te,ge))}X.prototype.write=function(U,H,te){return K(this,U,H,te)===!0},X.prototype.cork=function(){this._writableState.corked++},X.prototype.uncork=function(){let U=this._writableState;U.corked&&(U.corked--,U.writing||xe(this,U))},X.prototype.setDefaultEncoding=function(U){if(typeof U=="string"&&(U=s(U)),!u.isEncoding(U))throw new R(U);return this._writableState.defaultEncoding=U,this};function ie(U,H,te,ge,pe){let _e=H.objectMode?1:te.length;H.length+=_e;let $=H.length<H.highWaterMark;return $||(H.needDrain=!0),H.writing||H.corked||H.errored||!H.constructed?(H.buffered.push({chunk:te,encoding:ge,callback:pe}),H.allBuffers&&ge!=="buffer"&&(H.allBuffers=!1),H.allNoop&&pe!==W&&(H.allNoop=!1)):(H.writelen=_e,H.writecb=pe,H.writing=!0,H.sync=!0,U._write(te,ge,H.onwrite),H.sync=!1),$&&!H.errored&&!H.destroyed}function D(U,H,te,ge,pe,_e,$){H.writelen=ge,H.writecb=$,H.writing=!0,H.sync=!0,H.destroyed?H.onwrite(new S("write")):te?U._writev(pe,H.onwrite):U._write(pe,_e,H.onwrite),H.sync=!1}function Z(U,H,te,ge){--H.pendingcb,ge(te),re(H),C(U,te)}function N(U,H){let te=U._writableState,ge=te.sync,pe=te.writecb;if(typeof pe!="function"){C(U,new y);return}te.writing=!1,te.writecb=null,te.length-=te.writelen,te.writelen=0,H?(H.stack,te.errored||(te.errored=H),U._readableState&&!U._readableState.errored&&(U._readableState.errored=H),ge?a.nextTick(Z,U,te,H,pe):Z(U,te,H,pe)):(te.buffered.length>te.bufferedIndex&&xe(U,te),ge?te.afterWriteTickInfo!==null&&te.afterWriteTickInfo.cb===pe?te.afterWriteTickInfo.count++:(te.afterWriteTickInfo={count:1,cb:pe,stream:U,state:te},a.nextTick(J,te.afterWriteTickInfo)):be(U,te,1,pe))}function J({stream:U,state:H,count:te,cb:ge}){return H.afterWriteTickInfo=null,be(U,H,te,ge)}function be(U,H,te,ge){for(!H.ending&&!U.destroyed&&H.length===0&&H.needDrain&&(H.needDrain=!1,U.emit("drain"));te-- >0;)H.pendingcb--,ge();H.destroyed&&re(H),V(U,H)}function re(U){if(U.writing)return;for(let pe=U.bufferedIndex;pe<U.buffered.length;++pe){var H;let{chunk:_e,callback:$}=U.buffered[pe],ve=U.objectMode?1:_e.length;U.length-=ve,$((H=U.errored)!==null&&H!==void 0?H:new S("write"))}let te=U[F].splice(0);for(let pe=0;pe<te.length;pe++){var ge;te[pe]((ge=U.errored)!==null&&ge!==void 0?ge:new S("end"))}de(U)}function xe(U,H){if(H.corked||H.bufferProcessing||H.destroyed||!H.constructed)return;let{buffered:te,bufferedIndex:ge,objectMode:pe}=H,_e=te.length-ge;if(!_e)return;let $=ge;if(H.bufferProcessing=!0,_e>1&&U._writev){H.pendingcb-=_e-1;let ve=H.allNoop?W:le=>{for(let qe=$;qe<te.length;++qe)te[qe].callback(le)},Se=H.allNoop&&$===0?te:l(te,$);Se.allBuffers=H.allBuffers,D(U,H,!0,H.length,Se,"",ve),de(H)}else{do{let{chunk:ve,encoding:Se,callback:le}=te[$];te[$++]=null;let qe=pe?1:ve.length;D(U,H,!1,qe,ve,Se,le)}while($<te.length&&!H.writing);$===te.length?de(H):$>256?(te.splice(0,$),H.bufferedIndex=0):H.bufferedIndex=$}H.bufferProcessing=!1}X.prototype._write=function(U,H,te){if(this._writev)this._writev([{chunk:U,encoding:H}],te);else throw new k("_write()")},X.prototype._writev=null,X.prototype.end=function(U,H,te){let ge=this._writableState;typeof U=="function"?(te=U,U=null,H=null):typeof H=="function"&&(te=H,H=null);let pe;if(U!=null){let _e=K(this,U,H);_e instanceof d&&(pe=_e)}return ge.corked&&(ge.corked=1,this.uncork()),pe||(!ge.errored&&!ge.ending?(ge.ending=!0,V(this,ge,!0),ge.ended=!0):ge.finished?pe=new I("end"):ge.destroyed&&(pe=new S("end"))),typeof te=="function"&&(pe||ge.finished?a.nextTick(te,pe):ge[F].push(te)),this};function Q(U){return U.ending&&!U.destroyed&&U.constructed&&U.length===0&&!U.errored&&U.buffered.length===0&&!U.finished&&!U.writing&&!U.errorEmitted&&!U.closeEmitted}function q(U,H){let te=!1;function ge(pe){if(te){C(U,pe??y());return}if(te=!0,H.pendingcb--,pe){let _e=H[F].splice(0);for(let $=0;$<_e.length;$++)_e[$](pe);C(U,pe,H.sync)}else Q(H)&&(H.prefinished=!0,U.emit("prefinish"),H.pendingcb++,a.nextTick(z,U,H))}H.sync=!0,H.pendingcb++;try{U._final(ge)}catch(pe){ge(pe)}H.sync=!1}function ae(U,H){!H.prefinished&&!H.finalCalled&&(typeof U._final=="function"&&!H.destroyed?(H.finalCalled=!0,q(U,H)):(H.prefinished=!0,U.emit("prefinish")))}function V(U,H,te){Q(H)&&(ae(U,H),H.pendingcb===0&&(te?(H.pendingcb++,a.nextTick((ge,pe)=>{Q(pe)?z(ge,pe):pe.pendingcb--},U,H)):Q(H)&&(H.pendingcb++,z(U,H))))}function z(U,H){H.pendingcb--,H.finished=!0;let te=H[F].splice(0);for(let ge=0;ge<te.length;ge++)te[ge]();if(U.emit("finish"),H.autoDestroy){let ge=U._readableState;(!ge||ge.autoDestroy&&(ge.endEmitted||ge.readable===!1))&&U.destroy()}}r(X.prototype,{closed:{__proto__:null,get(){return this._writableState?this._writableState.closed:!1}},destroyed:{__proto__:null,get(){return this._writableState?this._writableState.destroyed:!1},set(U){this._writableState&&(this._writableState.destroyed=U)}},writable:{__proto__:null,get(){let U=this._writableState;return!!U&&U.writable!==!1&&!U.destroyed&&!U.errored&&!U.ending&&!U.ended},set(U){this._writableState&&(this._writableState.writable=!!U)}},writableFinished:{__proto__:null,get(){return this._writableState?this._writableState.finished:!1}},writableObjectMode:{__proto__:null,get(){return this._writableState?this._writableState.objectMode:!1}},writableBuffer:{__proto__:null,get(){return this._writableState&&this._writableState.getBuffer()}},writableEnded:{__proto__:null,get(){return this._writableState?this._writableState.ending:!1}},writableNeedDrain:{__proto__:null,get(){let U=this._writableState;return U?!U.destroyed&&!U.ending&&U.needDrain:!1}},writableHighWaterMark:{__proto__:null,get(){return this._writableState&&this._writableState.highWaterMark}},writableCorked:{__proto__:null,get(){return this._writableState?this._writableState.corked:0}},writableLength:{__proto__:null,get(){return this._writableState&&this._writableState.length}},errored:{__proto__:null,enumerable:!1,get(){return this._writableState?this._writableState.errored:null}},writableAborted:{__proto__:null,enumerable:!1,get:function(){return!!(this._writableState.writable!==!1&&(this._writableState.destroyed||this._writableState.errored)&&!this._writableState.finished)}}});var Y=o.destroy;X.prototype.destroy=function(U,H){let te=this._writableState;return!te.destroyed&&(te.bufferedIndex<te.buffered.length||te[F].length)&&a.nextTick(re,te),Y.call(this,U,H),this},X.prototype._undestroy=o.undestroy,X.prototype._destroy=function(U,H){H(U)},X.prototype[h.captureRejectionSymbol]=function(U){this.destroy(U)};var we;function ce(){return we===void 0&&(we={}),we}X.fromWeb=function(U,H){return ce().newStreamWritableFromWritableStream(U,H)},X.toWeb=function(U){return ce().newWritableStreamFromStreamWritable(U)}}),fc=ye((c,f)=>{he(),me(),fe();var a=Xt(),l=(st(),Qe(rt)),{isReadable:d,isWritable:t,isIterable:n,isNodeStream:r,isReadableNodeStream:e,isWritableNodeStream:s,isDuplexNodeStream:i,isReadableStream:m,isWritableStream:h}=Ot(),b=Wt(),{AbortError:u,codes:{ERR_INVALID_ARG_TYPE:o,ERR_INVALID_RETURN_VALUE:v}}=pt(),{destroyer:w}=on(),g=Ct(),_=rr(),k=gi(),{createDeferredPromise:y}=ft(),T=ga(),S=globalThis.Blob||l.Blob,I=typeof S<"u"?function(F){return F instanceof S}:function(F){return!1},P=globalThis.AbortController||yn().AbortController,{FunctionPrototypeCall:O}=Je(),R=class extends g{constructor(F){super(F),F?.readable===!1&&(this._readableState.readable=!1,this._readableState.ended=!0,this._readableState.endEmitted=!0),F?.writable===!1&&(this._writableState.writable=!1,this._writableState.ending=!0,this._writableState.ended=!0,this._writableState.finished=!0)}};f.exports=function F(j,de){if(i(j))return j;if(e(j))return W({readable:j});if(s(j))return W({writable:j});if(r(j))return W({writable:!1,readable:!1});if(m(j))return W({readable:_.fromWeb(j)});if(h(j))return W({writable:k.fromWeb(j)});if(typeof j=="function"){let{value:K,write:ie,final:D,destroy:Z}=C(j);if(n(K))return T(R,K,{objectMode:!0,write:ie,final:D,destroy:Z});let N=K?.then;if(typeof N=="function"){let J,be=O(N,K,re=>{if(re!=null)throw new v("nully","body",re)},re=>{w(J,re)});return J=new R({objectMode:!0,readable:!1,write:ie,final(re){D(async()=>{try{await be,a.nextTick(re,null)}catch(xe){a.nextTick(re,xe)}})},destroy:Z})}throw new v("Iterable, AsyncIterable or AsyncFunction",de,K)}if(I(j))return F(j.arrayBuffer());if(n(j))return T(R,j,{objectMode:!0,writable:!1});if(m(j?.readable)&&h(j?.writable))return R.fromWeb(j);if(typeof j?.writable=="object"||typeof j?.readable=="object"){let K=j!=null&&j.readable?e(j?.readable)?j?.readable:F(j.readable):void 0,ie=j!=null&&j.writable?s(j?.writable)?j?.writable:F(j.writable):void 0;return W({readable:K,writable:ie})}let X=j?.then;if(typeof X=="function"){let K;return O(X,j,ie=>{ie!=null&&K.push(ie),K.push(null)},ie=>{w(K,ie)}),K=new R({objectMode:!0,writable:!1,read(){}})}throw new o(de,["Blob","ReadableStream","WritableStream","Stream","Iterable","AsyncIterable","Function","{ readable, writable } pair","Promise"],j)};function C(F){let{promise:j,resolve:de}=y(),X=new P,K=X.signal;return{value:F((async function*(){for(;;){let ie=j;j=null;let{chunk:D,done:Z,cb:N}=await ie;if(a.nextTick(N),Z)return;if(K.aborted)throw new u(void 0,{cause:K.reason});({promise:j,resolve:de}=y()),yield D}})(),{signal:K}),write(ie,D,Z){let N=de;de=null,N({chunk:ie,done:!1,cb:Z})},final(ie){let D=de;de=null,D({done:!0,cb:ie})},destroy(ie,D){X.abort(),D(ie)}}}function W(F){let j=F.readable&&typeof F.readable.read!="function"?_.wrap(F.readable):F.readable,de=F.writable,X=!!d(j),K=!!t(de),ie,D,Z,N,J;function be(re){let xe=N;N=null,xe?xe(re):re&&J.destroy(re)}return J=new R({readableObjectMode:!!(j!=null&&j.readableObjectMode),writableObjectMode:!!(de!=null&&de.writableObjectMode),readable:X,writable:K}),K&&(b(de,re=>{K=!1,re&&w(j,re),be(re)}),J._write=function(re,xe,Q){de.write(re,xe)?Q():ie=Q},J._final=function(re){de.end(),D=re},de.on("drain",function(){if(ie){let re=ie;ie=null,re()}}),de.on("finish",function(){if(D){let re=D;D=null,re()}})),X&&(b(j,re=>{X=!1,re&&w(j,re),be(re)}),j.on("readable",function(){if(Z){let re=Z;Z=null,re()}}),j.on("end",function(){J.push(null)}),J._read=function(){for(;;){let re=j.read();if(re===null){Z=J._read;return}if(!J.push(re))return}}),J._destroy=function(re,xe){!re&&N!==null&&(re=new u),Z=null,ie=null,D=null,N===null?xe(re):(N=xe,w(de,re),w(j,re))},J}}),Ct=ye((c,f)=>{he(),me(),fe();var{ObjectDefineProperties:a,ObjectGetOwnPropertyDescriptor:l,ObjectKeys:d,ObjectSetPrototypeOf:t}=Je();f.exports=e;var n=rr(),r=gi();t(e.prototype,n.prototype),t(e,n);{let h=d(r.prototype);for(let b=0;b<h.length;b++){let u=h[b];e.prototype[u]||(e.prototype[u]=r.prototype[u])}}function e(h){if(!(this instanceof e))return new e(h);n.call(this,h),r.call(this,h),h?(this.allowHalfOpen=h.allowHalfOpen!==!1,h.readable===!1&&(this._readableState.readable=!1,this._readableState.ended=!0,this._readableState.endEmitted=!0),h.writable===!1&&(this._writableState.writable=!1,this._writableState.ending=!0,this._writableState.ended=!0,this._writableState.finished=!0)):this.allowHalfOpen=!0}a(e.prototype,{writable:{__proto__:null,...l(r.prototype,"writable")},writableHighWaterMark:{__proto__:null,...l(r.prototype,"writableHighWaterMark")},writableObjectMode:{__proto__:null,...l(r.prototype,"writableObjectMode")},writableBuffer:{__proto__:null,...l(r.prototype,"writableBuffer")},writableLength:{__proto__:null,...l(r.prototype,"writableLength")},writableFinished:{__proto__:null,...l(r.prototype,"writableFinished")},writableCorked:{__proto__:null,...l(r.prototype,"writableCorked")},writableEnded:{__proto__:null,...l(r.prototype,"writableEnded")},writableNeedDrain:{__proto__:null,...l(r.prototype,"writableNeedDrain")},destroyed:{__proto__:null,get(){return this._readableState===void 0||this._writableState===void 0?!1:this._readableState.destroyed&&this._writableState.destroyed},set(h){this._readableState&&this._writableState&&(this._readableState.destroyed=h,this._writableState.destroyed=h)}}});var s;function i(){return s===void 0&&(s={}),s}e.fromWeb=function(h,b){return i().newStreamDuplexFromReadableWritablePair(h,b)},e.toWeb=function(h){return i().newReadableWritablePairFromDuplex(h)};var m;e.from=function(h){return m||(m=fc()),m(h,"body")}}),ba=ye((c,f)=>{he(),me(),fe();var{ObjectSetPrototypeOf:a,Symbol:l}=Je();f.exports=e;var{ERR_METHOD_NOT_IMPLEMENTED:d}=pt().codes,t=Ct(),{getHighWaterMark:n}=nr();a(e.prototype,t.prototype),a(e,t);var r=l("kCallback");function e(m){if(!(this instanceof e))return new e(m);let h=m?n(this,m,"readableHighWaterMark",!0):null;h===0&&(m={...m,highWaterMark:null,readableHighWaterMark:h,writableHighWaterMark:m.writableHighWaterMark||0}),t.call(this,m),this._readableState.sync=!1,this[r]=null,m&&(typeof m.transform=="function"&&(this._transform=m.transform),typeof m.flush=="function"&&(this._flush=m.flush)),this.on("prefinish",i)}function s(m){typeof this._flush=="function"&&!this.destroyed?this._flush((h,b)=>{if(h){m?m(h):this.destroy(h);return}b!=null&&this.push(b),this.push(null),m&&m()}):(this.push(null),m&&m())}function i(){this._final!==s&&s.call(this)}e.prototype._final=s,e.prototype._transform=function(m,h,b){throw new d("_transform()")},e.prototype._write=function(m,h,b){let u=this._readableState,o=this._writableState,v=u.length;this._transform(m,h,(w,g)=>{if(w){b(w);return}g!=null&&this.push(g),o.ended||v===u.length||u.length<u.highWaterMark?b():this[r]=b})},e.prototype._read=function(){if(this[r]){let m=this[r];this[r]=null,m()}}}),va=ye((c,f)=>{he(),me(),fe();var{ObjectSetPrototypeOf:a}=Je();f.exports=d;var l=ba();a(d.prototype,l.prototype),a(d,l);function d(t){if(!(this instanceof d))return new d(t);l.call(this,t)}d.prototype._transform=function(t,n,r){r(null,t)}}),bi=ye((c,f)=>{he(),me(),fe();var a=Xt(),{ArrayIsArray:l,Promise:d,SymbolAsyncIterator:t,SymbolDispose:n}=Je(),r=Wt(),{once:e}=ft(),s=on(),i=Ct(),{aggregateTwoErrors:m,codes:{ERR_INVALID_ARG_TYPE:h,ERR_INVALID_RETURN_VALUE:b,ERR_MISSING_ARGS:u,ERR_STREAM_DESTROYED:o,ERR_STREAM_PREMATURE_CLOSE:v},AbortError:w}=pt(),{validateFunction:g,validateAbortSignal:_}=kn(),{isIterable:k,isReadable:y,isReadableNodeStream:T,isNodeStream:S,isTransformStream:I,isWebStream:P,isReadableStream:O,isReadableFinished:R}=Ot(),C=globalThis.AbortController||yn().AbortController,W,F,j;function de(re,xe,Q){let q=!1;re.on("close",()=>{q=!0});let ae=r(re,{readable:xe,writable:Q},V=>{q=!V});return{destroy:V=>{q||(q=!0,s.destroyer(re,V||new o("pipe")))},cleanup:ae}}function X(re){return g(re[re.length-1],"streams[stream.length - 1]"),re.pop()}function K(re){if(k(re))return re;if(T(re))return ie(re);throw new h("val",["Readable","Iterable","AsyncIterable"],re)}async function*ie(re){F||(F=rr()),yield*F.prototype[t].call(re)}async function D(re,xe,Q,{end:q}){let ae,V=null,z=ce=>{if(ce&&(ae=ce),V){let U=V;V=null,U()}},Y=()=>new d((ce,U)=>{ae?U(ae):V=()=>{ae?U(ae):ce()}});xe.on("drain",z);let we=r(xe,{readable:!1},z);try{xe.writableNeedDrain&&await Y();for await(let ce of re)xe.write(ce)||await Y();q&&(xe.end(),await Y()),Q()}catch(ce){Q(ae!==ce?m(ae,ce):ce)}finally{we(),xe.off("drain",z)}}async function Z(re,xe,Q,{end:q}){I(xe)&&(xe=xe.writable);let ae=xe.getWriter();try{for await(let V of re)await ae.ready,ae.write(V).catch(()=>{});await ae.ready,q&&await ae.close(),Q()}catch(V){try{await ae.abort(V),Q(V)}catch(z){Q(z)}}}function N(...re){return J(re,e(X(re)))}function J(re,xe,Q){if(re.length===1&&l(re[0])&&(re=re[0]),re.length<2)throw new u("streams");let q=new C,ae=q.signal,V=Q?.signal,z=[];_(V,"options.signal");function Y(){pe(new w)}j=j||ft().addAbortListener;let we;V&&(we=j(V,Y));let ce,U,H=[],te=0;function ge(Se){pe(Se,--te===0)}function pe(Se,le){var qe;if(Se&&(!ce||ce.code==="ERR_STREAM_PREMATURE_CLOSE")&&(ce=Se),!(!ce&&!le)){for(;H.length;)H.shift()(ce);(qe=we)===null||qe===void 0||qe[n](),q.abort(),le&&(ce||z.forEach(p=>p()),a.nextTick(xe,ce,U))}}let _e;for(let Se=0;Se<re.length;Se++){let le=re[Se],qe=Se<re.length-1,p=Se>0,x=qe||Q?.end!==!1,A=Se===re.length-1;if(S(le)){let B=function(ee){ee&&ee.name!=="AbortError"&&ee.code!=="ERR_STREAM_PREMATURE_CLOSE"&&ge(ee)};if(x){let{destroy:ee,cleanup:ue}=de(le,qe,p);H.push(ee),y(le)&&A&&z.push(ue)}le.on("error",B),y(le)&&A&&z.push(()=>{le.removeListener("error",B)})}if(Se===0)if(typeof le=="function"){if(_e=le({signal:ae}),!k(_e))throw new b("Iterable, AsyncIterable or Stream","source",_e)}else k(le)||T(le)||I(le)?_e=le:_e=i.from(le);else if(typeof le=="function"){if(I(_e)){var $;_e=K(($=_e)===null||$===void 0?void 0:$.readable)}else _e=K(_e);if(_e=le(_e,{signal:ae}),qe){if(!k(_e,!0))throw new b("AsyncIterable",`transform[${Se-1}]`,_e)}else{var ve;W||(W=va());let B=new W({objectMode:!0}),ee=(ve=_e)===null||ve===void 0?void 0:ve.then;if(typeof ee=="function")te++,ee.call(_e,G=>{U=G,G!=null&&B.write(G),x&&B.end(),a.nextTick(ge)},G=>{B.destroy(G),a.nextTick(ge,G)});else if(k(_e,!0))te++,D(_e,B,ge,{end:x});else if(O(_e)||I(_e)){let G=_e.readable||_e;te++,D(G,B,ge,{end:x})}else throw new b("AsyncIterable or Promise","destination",_e);_e=B;let{destroy:ue,cleanup:Ae}=de(_e,!1,!0);H.push(ue),A&&z.push(Ae)}}else if(S(le)){if(T(_e)){te+=2;let B=be(_e,le,ge,{end:x});y(le)&&A&&z.push(B)}else if(I(_e)||O(_e)){let B=_e.readable||_e;te++,D(B,le,ge,{end:x})}else if(k(_e))te++,D(_e,le,ge,{end:x});else throw new h("val",["Readable","Iterable","AsyncIterable","ReadableStream","TransformStream"],_e);_e=le}else if(P(le)){if(T(_e))te++,Z(K(_e),le,ge,{end:x});else if(O(_e)||k(_e))te++,Z(_e,le,ge,{end:x});else if(I(_e))te++,Z(_e.readable,le,ge,{end:x});else throw new h("val",["Readable","Iterable","AsyncIterable","ReadableStream","TransformStream"],_e);_e=le}else _e=i.from(le)}return(ae!=null&&ae.aborted||V!=null&&V.aborted)&&a.nextTick(Y),_e}function be(re,xe,Q,{end:q}){let ae=!1;if(xe.on("close",()=>{ae||Q(new v)}),re.pipe(xe,{end:!1}),q){let V=function(){ae=!0,xe.end()};R(re)?a.nextTick(V):re.once("end",V)}else Q();return r(re,{readable:!0,writable:!1},V=>{let z=re._readableState;V&&V.code==="ERR_STREAM_PREMATURE_CLOSE"&&z&&z.ended&&!z.errored&&!z.errorEmitted?re.once("end",Q).once("error",Q):Q(V)}),r(xe,{readable:!1,writable:!0},Q)}f.exports={pipelineImpl:J,pipeline:N}}),ya=ye((c,f)=>{he(),me(),fe();var{pipeline:a}=bi(),l=Ct(),{destroyer:d}=on(),{isNodeStream:t,isReadable:n,isWritable:r,isWebStream:e,isTransformStream:s,isWritableStream:i,isReadableStream:m}=Ot(),{AbortError:h,codes:{ERR_INVALID_ARG_VALUE:b,ERR_MISSING_ARGS:u}}=pt(),o=Wt();f.exports=function(...v){if(v.length===0)throw new u("streams");if(v.length===1)return l.from(v[0]);let w=[...v];if(typeof v[0]=="function"&&(v[0]=l.from(v[0])),typeof v[v.length-1]=="function"){let C=v.length-1;v[C]=l.from(v[C])}for(let C=0;C<v.length;++C)if(!(!t(v[C])&&!e(v[C]))){if(C<v.length-1&&!(n(v[C])||m(v[C])||s(v[C])))throw new b(`streams[${C}]`,w[C],"must be readable");if(C>0&&!(r(v[C])||i(v[C])||s(v[C])))throw new b(`streams[${C}]`,w[C],"must be writable")}let g,_,k,y,T;function S(C){let W=y;y=null,W?W(C):C?T.destroy(C):!R&&!O&&T.destroy()}let I=v[0],P=a(v,S),O=!!(r(I)||i(I)||s(I)),R=!!(n(P)||m(P)||s(P));if(T=new l({writableObjectMode:!!(I!=null&&I.writableObjectMode),readableObjectMode:!!(P!=null&&P.readableObjectMode),writable:O,readable:R}),O){if(t(I))T._write=function(W,F,j){I.write(W,F)?j():g=j},T._final=function(W){I.end(),_=W},I.on("drain",function(){if(g){let W=g;g=null,W()}});else if(e(I)){let W=(s(I)?I.writable:I).getWriter();T._write=async function(F,j,de){try{await W.ready,W.write(F).catch(()=>{}),de()}catch(X){de(X)}},T._final=async function(F){try{await W.ready,W.close().catch(()=>{}),_=F}catch(j){F(j)}}}let C=s(P)?P.readable:P;o(C,()=>{if(_){let W=_;_=null,W()}})}if(R){if(t(P))P.on("readable",function(){if(k){let C=k;k=null,C()}}),P.on("end",function(){T.push(null)}),T._read=function(){for(;;){let C=P.read();if(C===null){k=T._read;return}if(!T.push(C))return}};else if(e(P)){let C=(s(P)?P.readable:P).getReader();T._read=async function(){for(;;)try{let{value:W,done:F}=await C.read();if(!T.push(W))return;if(F){T.push(null);return}}catch{return}}}}return T._destroy=function(C,W){!C&&y!==null&&(C=new h),k=null,g=null,_=null,y===null?W(C):(y=W,t(P)&&d(P,C))},T}}),mc=ye((c,f)=>{he(),me(),fe();var a=globalThis.AbortController||yn().AbortController,{codes:{ERR_INVALID_ARG_VALUE:l,ERR_INVALID_ARG_TYPE:d,ERR_MISSING_ARGS:t,ERR_OUT_OF_RANGE:n},AbortError:r}=pt(),{validateAbortSignal:e,validateInteger:s,validateObject:i}=kn(),m=Je().Symbol("kWeak"),h=Je().Symbol("kResistStopPropagation"),{finished:b}=Wt(),u=ya(),{addAbortSignalNoValidate:o}=tr(),{isWritable:v,isNodeStream:w}=Ot(),{deprecate:g}=ft(),{ArrayPrototypePush:_,Boolean:k,MathFloor:y,Number:T,NumberIsNaN:S,Promise:I,PromiseReject:P,PromiseResolve:O,PromisePrototypeThen:R,Symbol:C}=Je(),W=C("kEmpty"),F=C("kEof");function j(V,z){if(z!=null&&i(z,"options"),z?.signal!=null&&e(z.signal,"options.signal"),w(V)&&!v(V))throw new l("stream",V,"must be writable");let Y=u(this,V);return z!=null&&z.signal&&o(z.signal,Y),Y}function de(V,z){if(typeof V!="function")throw new d("fn",["Function","AsyncFunction"],V);z!=null&&i(z,"options"),z?.signal!=null&&e(z.signal,"options.signal");let Y=1;z?.concurrency!=null&&(Y=y(z.concurrency));let we=Y-1;return z?.highWaterMark!=null&&(we=y(z.highWaterMark)),s(Y,"options.concurrency",1),s(we,"options.highWaterMark",0),we+=Y,(async function*(){let ce=ft().AbortSignalAny([z?.signal].filter(k)),U=this,H=[],te={signal:ce},ge,pe,_e=!1,$=0;function ve(){_e=!0,Se()}function Se(){$-=1,le()}function le(){pe&&!_e&&$<Y&&H.length<we&&(pe(),pe=null)}async function qe(){try{for await(let p of U){if(_e)return;if(ce.aborted)throw new r;try{if(p=V(p,te),p===W)continue;p=O(p)}catch(x){p=P(x)}$+=1,R(p,Se,ve),H.push(p),ge&&(ge(),ge=null),!_e&&(H.length>=we||$>=Y)&&await new I(x=>{pe=x})}H.push(F)}catch(p){let x=P(p);R(x,Se,ve),H.push(x)}finally{_e=!0,ge&&(ge(),ge=null)}}qe();try{for(;;){for(;H.length>0;){let p=await H[0];if(p===F)return;if(ce.aborted)throw new r;p!==W&&(yield p),H.shift(),le()}await new I(p=>{ge=p})}}finally{_e=!0,pe&&(pe(),pe=null)}}).call(this)}function X(V=void 0){return V!=null&&i(V,"options"),V?.signal!=null&&e(V.signal,"options.signal"),(async function*(){let z=0;for await(let we of this){var Y;if(V!=null&&(Y=V.signal)!==null&&Y!==void 0&&Y.aborted)throw new r({cause:V.signal.reason});yield[z++,we]}}).call(this)}async function K(V,z=void 0){for await(let Y of N.call(this,V,z))return!0;return!1}async function ie(V,z=void 0){if(typeof V!="function")throw new d("fn",["Function","AsyncFunction"],V);return!await K.call(this,async(...Y)=>!await V(...Y),z)}async function D(V,z){for await(let Y of N.call(this,V,z))return Y}async function Z(V,z){if(typeof V!="function")throw new d("fn",["Function","AsyncFunction"],V);async function Y(we,ce){return await V(we,ce),W}for await(let we of de.call(this,Y,z));}function N(V,z){if(typeof V!="function")throw new d("fn",["Function","AsyncFunction"],V);async function Y(we,ce){return await V(we,ce)?we:W}return de.call(this,Y,z)}var J=class extends t{constructor(){super("reduce"),this.message="Reduce of an empty stream requires an initial value"}};async function be(V,z,Y){var we;if(typeof V!="function")throw new d("reducer",["Function","AsyncFunction"],V);Y!=null&&i(Y,"options"),Y?.signal!=null&&e(Y.signal,"options.signal");let ce=arguments.length>1;if(Y!=null&&(we=Y.signal)!==null&&we!==void 0&&we.aborted){let pe=new r(void 0,{cause:Y.signal.reason});throw this.once("error",()=>{}),await b(this.destroy(pe)),pe}let U=new a,H=U.signal;if(Y!=null&&Y.signal){let pe={once:!0,[m]:this,[h]:!0};Y.signal.addEventListener("abort",()=>U.abort(),pe)}let te=!1;try{for await(let pe of this){var ge;if(te=!0,Y!=null&&(ge=Y.signal)!==null&&ge!==void 0&&ge.aborted)throw new r;ce?z=await V(z,pe,{signal:H}):(z=pe,ce=!0)}if(!te&&!ce)throw new J}finally{U.abort()}return z}async function re(V){V!=null&&i(V,"options"),V?.signal!=null&&e(V.signal,"options.signal");let z=[];for await(let we of this){var Y;if(V!=null&&(Y=V.signal)!==null&&Y!==void 0&&Y.aborted)throw new r(void 0,{cause:V.signal.reason});_(z,we)}return z}function xe(V,z){let Y=de.call(this,V,z);return(async function*(){for await(let we of Y)yield*we}).call(this)}function Q(V){if(V=T(V),S(V))return 0;if(V<0)throw new n("number",">= 0",V);return V}function q(V,z=void 0){return z!=null&&i(z,"options"),z?.signal!=null&&e(z.signal,"options.signal"),V=Q(V),(async function*(){var Y;if(z!=null&&(Y=z.signal)!==null&&Y!==void 0&&Y.aborted)throw new r;for await(let ce of this){var we;if(z!=null&&(we=z.signal)!==null&&we!==void 0&&we.aborted)throw new r;V--<=0&&(yield ce)}}).call(this)}function ae(V,z=void 0){return z!=null&&i(z,"options"),z?.signal!=null&&e(z.signal,"options.signal"),V=Q(V),(async function*(){var Y;if(z!=null&&(Y=z.signal)!==null&&Y!==void 0&&Y.aborted)throw new r;for await(let ce of this){var we;if(z!=null&&(we=z.signal)!==null&&we!==void 0&&we.aborted)throw new r;if(V-- >0&&(yield ce),V<=0)return}}).call(this)}f.exports.streamReturningOperators={asIndexedPairs:g(X,"readable.asIndexedPairs will be removed in a future version."),drop:q,filter:N,flatMap:xe,map:de,take:ae,compose:j},f.exports.promiseReturningOperators={every:ie,forEach:Z,reduce:be,toArray:re,some:K,find:D}}),wa=ye((c,f)=>{he(),me(),fe();var{ArrayPrototypePop:a,Promise:l}=Je(),{isIterable:d,isNodeStream:t,isWebStream:n}=Ot(),{pipelineImpl:r}=bi(),{finished:e}=Wt();_a();function s(...i){return new l((m,h)=>{let b,u,o=i[i.length-1];if(o&&typeof o=="object"&&!t(o)&&!d(o)&&!n(o)){let v=a(i);b=v.signal,u=v.end}r(i,(v,w)=>{v?h(v):m(w)},{signal:b,end:u})})}f.exports={finished:e,pipeline:s}}),_a=ye((c,f)=>{he(),me(),fe();var{Buffer:a}=(st(),Qe(rt)),{ObjectDefineProperty:l,ObjectKeys:d,ReflectApply:t}=Je(),{promisify:{custom:n}}=ft(),{streamReturningOperators:r,promiseReturningOperators:e}=mc(),{codes:{ERR_ILLEGAL_CONSTRUCTOR:s}}=pt(),i=ya(),{setDefaultHighWaterMark:m,getDefaultHighWaterMark:h}=nr(),{pipeline:b}=bi(),{destroyer:u}=on(),o=Wt(),v=wa(),w=Ot(),g=f.exports=mi().Stream;g.isDestroyed=w.isDestroyed,g.isDisturbed=w.isDisturbed,g.isErrored=w.isErrored,g.isReadable=w.isReadable,g.isWritable=w.isWritable,g.Readable=rr();for(let k of d(r)){let y=function(...S){if(new.target)throw s();return g.Readable.from(t(T,this,S))},T=r[k];l(y,"name",{__proto__:null,value:T.name}),l(y,"length",{__proto__:null,value:T.length}),l(g.Readable.prototype,k,{__proto__:null,value:y,enumerable:!1,configurable:!0,writable:!0})}for(let k of d(e)){let y=function(...S){if(new.target)throw s();return t(T,this,S)},T=e[k];l(y,"name",{__proto__:null,value:T.name}),l(y,"length",{__proto__:null,value:T.length}),l(g.Readable.prototype,k,{__proto__:null,value:y,enumerable:!1,configurable:!0,writable:!0})}g.Writable=gi(),g.Duplex=Ct(),g.Transform=ba(),g.PassThrough=va(),g.pipeline=b;var{addAbortSignal:_}=tr();g.addAbortSignal=_,g.finished=o,g.destroy=u,g.compose=i,g.setDefaultHighWaterMark=m,g.getDefaultHighWaterMark=h,l(g,"promises",{__proto__:null,configurable:!0,enumerable:!0,get(){return v}}),l(b,n,{__proto__:null,enumerable:!0,get(){return v.pipeline}}),l(o,n,{__proto__:null,enumerable:!0,get(){return v.finished}}),g.Stream=g,g._isUint8Array=function(k){return k instanceof Uint8Array},g._uint8ArrayToBuffer=function(k){return a.from(k.buffer,k.byteOffset,k.byteLength)}}),Zt=ye((c,f)=>{he(),me(),fe();var a=_a(),l=wa(),d=a.Readable.destroy;f.exports=a.Readable,f.exports._uint8ArrayToBuffer=a._uint8ArrayToBuffer,f.exports._isUint8Array=a._isUint8Array,f.exports.isDisturbed=a.isDisturbed,f.exports.isErrored=a.isErrored,f.exports.isReadable=a.isReadable,f.exports.Readable=a.Readable,f.exports.Writable=a.Writable,f.exports.Duplex=a.Duplex,f.exports.Transform=a.Transform,f.exports.PassThrough=a.PassThrough,f.exports.addAbortSignal=a.addAbortSignal,f.exports.finished=a.finished,f.exports.destroy=a.destroy,f.exports.destroy=d,f.exports.pipeline=a.pipeline,f.exports.compose=a.compose,Object.defineProperty(a,"promises",{configurable:!0,enumerable:!0,get(){return l}}),f.exports.Stream=a.Stream,f.exports.default=f.exports}),gc=ye((c,f)=>{he(),me(),fe(),typeof Object.create=="function"?f.exports=function(a,l){l&&(a.super_=l,a.prototype=Object.create(l.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}))}:f.exports=function(a,l){if(l){a.super_=l;var d=function(){};d.prototype=l.prototype,a.prototype=new d,a.prototype.constructor=a}}}),bc=ye((c,f)=>{he(),me(),fe();var{Buffer:a}=(st(),Qe(rt)),l=Symbol.for("BufferList");function d(t){if(!(this instanceof d))return new d(t);d._init.call(this,t)}d._init=function(t){Object.defineProperty(this,l,{value:!0}),this._bufs=[],this.length=0,t&&this.append(t)},d.prototype._new=function(t){return new d(t)},d.prototype._offset=function(t){if(t===0)return[0,0];let n=0;for(let r=0;r<this._bufs.length;r++){let e=n+this._bufs[r].length;if(t<e||r===this._bufs.length-1)return[r,t-n];n=e}},d.prototype._reverseOffset=function(t){let n=t[0],r=t[1];for(let e=0;e<n;e++)r+=this._bufs[e].length;return r},d.prototype.getBuffers=function(){return this._bufs},d.prototype.get=function(t){if(t>this.length||t<0)return;let n=this._offset(t);return this._bufs[n[0]][n[1]]},d.prototype.slice=function(t,n){return typeof t=="number"&&t<0&&(t+=this.length),typeof n=="number"&&n<0&&(n+=this.length),this.copy(null,0,t,n)},d.prototype.copy=function(t,n,r,e){if((typeof r!="number"||r<0)&&(r=0),(typeof e!="number"||e>this.length)&&(e=this.length),r>=this.length||e<=0)return t||a.alloc(0);let s=!!t,i=this._offset(r),m=e-r,h=m,b=s&&n||0,u=i[1];if(r===0&&e===this.length){if(!s)return this._bufs.length===1?this._bufs[0]:a.concat(this._bufs,this.length);for(let o=0;o<this._bufs.length;o++)this._bufs[o].copy(t,b),b+=this._bufs[o].length;return t}if(h<=this._bufs[i[0]].length-u)return s?this._bufs[i[0]].copy(t,n,u,u+h):this._bufs[i[0]].slice(u,u+h);s||(t=a.allocUnsafe(m));for(let o=i[0];o<this._bufs.length;o++){let v=this._bufs[o].length-u;if(h>v)this._bufs[o].copy(t,b,u),b+=v;else{this._bufs[o].copy(t,b,u,u+h),b+=v;break}h-=v,u&&(u=0)}return t.length>b?t.slice(0,b):t},d.prototype.shallowSlice=function(t,n){if(t=t||0,n=typeof n!="number"?this.length:n,t<0&&(t+=this.length),n<0&&(n+=this.length),t===n)return this._new();let r=this._offset(t),e=this._offset(n),s=this._bufs.slice(r[0],e[0]+1);return e[1]===0?s.pop():s[s.length-1]=s[s.length-1].slice(0,e[1]),r[1]!==0&&(s[0]=s[0].slice(r[1])),this._new(s)},d.prototype.toString=function(t,n,r){return this.slice(n,r).toString(t)},d.prototype.consume=function(t){if(t=Math.trunc(t),Number.isNaN(t)||t<=0)return this;for(;this._bufs.length;)if(t>=this._bufs[0].length)t-=this._bufs[0].length,this.length-=this._bufs[0].length,this._bufs.shift();else{this._bufs[0]=this._bufs[0].slice(t),this.length-=t;break}return this},d.prototype.duplicate=function(){let t=this._new();for(let n=0;n<this._bufs.length;n++)t.append(this._bufs[n]);return t},d.prototype.append=function(t){return this._attach(t,d.prototype._appendBuffer)},d.prototype.prepend=function(t){return this._attach(t,d.prototype._prependBuffer,!0)},d.prototype._attach=function(t,n,r){if(t==null)return this;if(t.buffer)n.call(this,a.from(t.buffer,t.byteOffset,t.byteLength));else if(Array.isArray(t)){let[e,s]=r?[t.length-1,-1]:[0,1];for(let i=e;i>=0&&i<t.length;i+=s)this._attach(t[i],n,r)}else if(this._isBufferList(t)){let[e,s]=r?[t._bufs.length-1,-1]:[0,1];for(let i=e;i>=0&&i<t._bufs.length;i+=s)this._attach(t._bufs[i],n,r)}else typeof t=="number"&&(t=t.toString()),n.call(this,a.from(t));return this},d.prototype._appendBuffer=function(t){this._bufs.push(t),this.length+=t.length},d.prototype._prependBuffer=function(t){this._bufs.unshift(t),this.length+=t.length},d.prototype.indexOf=function(t,n,r){if(r===void 0&&typeof n=="string"&&(r=n,n=void 0),typeof t=="function"||Array.isArray(t))throw new TypeError('The "value" argument must be one of type string, Buffer, BufferList, or Uint8Array.');if(typeof t=="number"?t=a.from([t]):typeof t=="string"?t=a.from(t,r):this._isBufferList(t)?t=t.slice():Array.isArray(t.buffer)?t=a.from(t.buffer,t.byteOffset,t.byteLength):a.isBuffer(t)||(t=a.from(t)),n=Number(n||0),isNaN(n)&&(n=0),n<0&&(n=this.length+n),n<0&&(n=0),t.length===0)return n>this.length?this.length:n;let e=this._offset(n),s=e[0],i=e[1];for(;s<this._bufs.length;s++){let m=this._bufs[s];for(;i<m.length;)if(m.length-i>=t.length){let h=m.indexOf(t,i);if(h!==-1)return this._reverseOffset([s,h]);i=m.length-t.length+1}else{let h=this._reverseOffset([s,i]);if(this._match(h,t))return h;i++}i=0}return-1},d.prototype._match=function(t,n){if(this.length-t<n.length)return!1;for(let r=0;r<n.length;r++)if(this.get(t+r)!==n[r])return!1;return!0},(function(){let t={readDoubleBE:8,readDoubleLE:8,readFloatBE:4,readFloatLE:4,readBigInt64BE:8,readBigInt64LE:8,readBigUInt64BE:8,readBigUInt64LE:8,readInt32BE:4,readInt32LE:4,readUInt32BE:4,readUInt32LE:4,readInt16BE:2,readInt16LE:2,readUInt16BE:2,readUInt16LE:2,readInt8:1,readUInt8:1,readIntBE:null,readIntLE:null,readUIntBE:null,readUIntLE:null};for(let n in t)(function(r){t[r]===null?d.prototype[r]=function(e,s){return this.slice(e,e+s)[r](0,s)}:d.prototype[r]=function(e=0){return this.slice(e,e+t[r])[r](0)}})(n)})(),d.prototype._isBufferList=function(t){return t instanceof d||d.isBufferList(t)},d.isBufferList=function(t){return t!=null&&t[l]},f.exports=d}),vc=ye((c,f)=>{he(),me(),fe();var a=Zt().Duplex,l=gc(),d=bc();function t(n){if(!(this instanceof t))return new t(n);if(typeof n=="function"){this._callback=n;let r=(function(e){this._callback&&(this._callback(e),this._callback=null)}).bind(this);this.on("pipe",function(e){e.on("error",r)}),this.on("unpipe",function(e){e.removeListener("error",r)}),n=null}d._init.call(this,n),a.call(this)}l(t,a),Object.assign(t.prototype,d.prototype),t.prototype._new=function(n){return new t(n)},t.prototype._write=function(n,r,e){this._appendBuffer(n),typeof e=="function"&&e()},t.prototype._read=function(n){if(!this.length)return this.push(null);n=Math.min(n,this.length),this.push(this.slice(0,n)),this.consume(n)},t.prototype.end=function(n){a.prototype.end.call(this,n),this._callback&&(this._callback(null,this.slice()),this._callback=null)},t.prototype._destroy=function(n,r){this._bufs.length=0,this.length=0,r(n)},t.prototype._isBufferList=function(n){return n instanceof t||n instanceof d||t.isBufferList(n)},t.isBufferList=d.isBufferList,f.exports=t,f.exports.BufferListStream=t,f.exports.BufferList=d}),yc=ye((c,f)=>{he(),me(),fe();var a=class{constructor(){this.cmd=null,this.retain=!1,this.qos=0,this.dup=!1,this.length=-1,this.topic=null,this.payload=null}};f.exports=a}),ka=ye((c,f)=>{he(),me(),fe();var a=f.exports,{Buffer:l}=(st(),Qe(rt));a.types={0:"reserved",1:"connect",2:"connack",3:"publish",4:"puback",5:"pubrec",6:"pubrel",7:"pubcomp",8:"subscribe",9:"suback",10:"unsubscribe",11:"unsuback",12:"pingreq",13:"pingresp",14:"disconnect",15:"auth"},a.requiredHeaderFlags={1:0,2:0,4:0,5:0,6:2,7:0,8:2,9:0,10:2,11:0,12:0,13:0,14:0,15:0},a.requiredHeaderFlagsErrors={};for(let t in a.requiredHeaderFlags){let n=a.requiredHeaderFlags[t];a.requiredHeaderFlagsErrors[t]="Invalid header flag bits, must be 0x"+n.toString(16)+" for "+a.types[t]+" packet"}a.codes={};for(let t in a.types){let n=a.types[t];a.codes[n]=t}a.CMD_SHIFT=4,a.CMD_MASK=240,a.DUP_MASK=8,a.QOS_MASK=3,a.QOS_SHIFT=1,a.RETAIN_MASK=1,a.VARBYTEINT_MASK=127,a.VARBYTEINT_FIN_MASK=128,a.VARBYTEINT_MAX=268435455,a.SESSIONPRESENT_MASK=1,a.SESSIONPRESENT_HEADER=l.from([a.SESSIONPRESENT_MASK]),a.CONNACK_HEADER=l.from([a.codes.connack<<a.CMD_SHIFT]),a.USERNAME_MASK=128,a.PASSWORD_MASK=64,a.WILL_RETAIN_MASK=32,a.WILL_QOS_MASK=24,a.WILL_QOS_SHIFT=3,a.WILL_FLAG_MASK=4,a.CLEAN_SESSION_MASK=2,a.CONNECT_HEADER=l.from([a.codes.connect<<a.CMD_SHIFT]),a.properties={sessionExpiryInterval:17,willDelayInterval:24,receiveMaximum:33,maximumPacketSize:39,topicAliasMaximum:34,requestResponseInformation:25,requestProblemInformation:23,userProperties:38,authenticationMethod:21,authenticationData:22,payloadFormatIndicator:1,messageExpiryInterval:2,contentType:3,responseTopic:8,correlationData:9,maximumQoS:36,retainAvailable:37,assignedClientIdentifier:18,reasonString:31,wildcardSubscriptionAvailable:40,subscriptionIdentifiersAvailable:41,sharedSubscriptionAvailable:42,serverKeepAlive:19,responseInformation:26,serverReference:28,topicAlias:35,subscriptionIdentifier:11},a.propertiesCodes={};for(let t in a.properties){let n=a.properties[t];a.propertiesCodes[n]=t}a.propertiesTypes={sessionExpiryInterval:"int32",willDelayInterval:"int32",receiveMaximum:"int16",maximumPacketSize:"int32",topicAliasMaximum:"int16",requestResponseInformation:"byte",requestProblemInformation:"byte",userProperties:"pair",authenticationMethod:"string",authenticationData:"binary",payloadFormatIndicator:"byte",messageExpiryInterval:"int32",contentType:"string",responseTopic:"string",correlationData:"binary",maximumQoS:"int8",retainAvailable:"byte",assignedClientIdentifier:"string",reasonString:"string",wildcardSubscriptionAvailable:"byte",subscriptionIdentifiersAvailable:"byte",sharedSubscriptionAvailable:"byte",serverKeepAlive:"int16",responseInformation:"string",serverReference:"string",topicAlias:"int16",subscriptionIdentifier:"var"};function d(t){return[0,1,2].map(n=>[0,1].map(r=>[0,1].map(e=>{let s=l.alloc(1);return s.writeUInt8(a.codes[t]<<a.CMD_SHIFT|(r?a.DUP_MASK:0)|n<<a.QOS_SHIFT|e,0,!0),s})))}a.PUBLISH_HEADER=d("publish"),a.SUBSCRIBE_HEADER=d("subscribe"),a.SUBSCRIBE_OPTIONS_QOS_MASK=3,a.SUBSCRIBE_OPTIONS_NL_MASK=1,a.SUBSCRIBE_OPTIONS_NL_SHIFT=2,a.SUBSCRIBE_OPTIONS_RAP_MASK=1,a.SUBSCRIBE_OPTIONS_RAP_SHIFT=3,a.SUBSCRIBE_OPTIONS_RH_MASK=3,a.SUBSCRIBE_OPTIONS_RH_SHIFT=4,a.SUBSCRIBE_OPTIONS_RH=[0,16,32],a.SUBSCRIBE_OPTIONS_NL=4,a.SUBSCRIBE_OPTIONS_RAP=8,a.SUBSCRIBE_OPTIONS_QOS=[0,1,2],a.UNSUBSCRIBE_HEADER=d("unsubscribe"),a.ACKS={unsuback:d("unsuback"),puback:d("puback"),pubcomp:d("pubcomp"),pubrel:d("pubrel"),pubrec:d("pubrec")},a.SUBACK_HEADER=l.from([a.codes.suback<<a.CMD_SHIFT]),a.VERSION3=l.from([3]),a.VERSION4=l.from([4]),a.VERSION5=l.from([5]),a.VERSION131=l.from([131]),a.VERSION132=l.from([132]),a.QOS=[0,1,2].map(t=>l.from([t])),a.EMPTY={pingreq:l.from([a.codes.pingreq<<4,0]),pingresp:l.from([a.codes.pingresp<<4,0]),disconnect:l.from([a.codes.disconnect<<4,0])},a.MQTT5_PUBACK_PUBREC_CODES={0:"Success",16:"No matching subscribers",128:"Unspecified error",131:"Implementation specific error",135:"Not authorized",144:"Topic Name invalid",145:"Packet identifier in use",151:"Quota exceeded",153:"Payload format invalid"},a.MQTT5_PUBREL_PUBCOMP_CODES={0:"Success",146:"Packet Identifier not found"},a.MQTT5_SUBACK_CODES={0:"Granted QoS 0",1:"Granted QoS 1",2:"Granted QoS 2",128:"Unspecified error",131:"Implementation specific error",135:"Not authorized",143:"Topic Filter invalid",145:"Packet Identifier in use",151:"Quota exceeded",158:"Shared Subscriptions not supported",161:"Subscription Identifiers not supported",162:"Wildcard Subscriptions not supported"},a.MQTT5_UNSUBACK_CODES={0:"Success",17:"No subscription existed",128:"Unspecified error",131:"Implementation specific error",135:"Not authorized",143:"Topic Filter invalid",145:"Packet Identifier in use"},a.MQTT5_DISCONNECT_CODES={0:"Normal disconnection",4:"Disconnect with Will Message",128:"Unspecified error",129:"Malformed Packet",130:"Protocol Error",131:"Implementation specific error",135:"Not authorized",137:"Server busy",139:"Server shutting down",141:"Keep Alive timeout",142:"Session taken over",143:"Topic Filter invalid",144:"Topic Name invalid",147:"Receive Maximum exceeded",148:"Topic Alias invalid",149:"Packet too large",150:"Message rate too high",151:"Quota exceeded",152:"Administrative action",153:"Payload format invalid",154:"Retain not supported",155:"QoS not supported",156:"Use another server",157:"Server moved",158:"Shared Subscriptions not supported",159:"Connection rate exceeded",160:"Maximum connect time",161:"Subscription Identifiers not supported",162:"Wildcard Subscriptions not supported"},a.MQTT5_AUTH_CODES={0:"Success",24:"Continue authentication",25:"Re-authenticate"}}),wc=ye((c,f)=>{he(),me(),fe();var a=1e3,l=a*60,d=l*60,t=d*24,n=t*7,r=t*365.25;f.exports=function(h,b){b=b||{};var u=typeof h;if(u==="string"&&h.length>0)return e(h);if(u==="number"&&isFinite(h))return b.long?i(h):s(h);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(h))};function e(h){if(h=String(h),!(h.length>100)){var b=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(h);if(b){var u=parseFloat(b[1]),o=(b[2]||"ms").toLowerCase();switch(o){case"years":case"year":case"yrs":case"yr":case"y":return u*r;case"weeks":case"week":case"w":return u*n;case"days":case"day":case"d":return u*t;case"hours":case"hour":case"hrs":case"hr":case"h":return u*d;case"minutes":case"minute":case"mins":case"min":case"m":return u*l;case"seconds":case"second":case"secs":case"sec":case"s":return u*a;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return u;default:return}}}}function s(h){var b=Math.abs(h);return b>=t?Math.round(h/t)+"d":b>=d?Math.round(h/d)+"h":b>=l?Math.round(h/l)+"m":b>=a?Math.round(h/a)+"s":h+"ms"}function i(h){var b=Math.abs(h);return b>=t?m(h,b,t,"day"):b>=d?m(h,b,d,"hour"):b>=l?m(h,b,l,"minute"):b>=a?m(h,b,a,"second"):h+" ms"}function m(h,b,u,o){var v=b>=u*1.5;return Math.round(h/u)+" "+o+(v?"s":"")}}),_c=ye((c,f)=>{he(),me(),fe();function a(l){t.debug=t,t.default=t,t.coerce=m,t.disable=s,t.enable=r,t.enabled=i,t.humanize=wc(),t.destroy=h,Object.keys(l).forEach(b=>{t[b]=l[b]}),t.names=[],t.skips=[],t.formatters={};function d(b){let u=0;for(let o=0;o<b.length;o++)u=(u<<5)-u+b.charCodeAt(o),u|=0;return t.colors[Math.abs(u)%t.colors.length]}t.selectColor=d;function t(b){let u,o=null,v,w;function g(..._){if(!g.enabled)return;let k=g,y=Number(new Date),T=y-(u||y);k.diff=T,k.prev=u,k.curr=y,u=y,_[0]=t.coerce(_[0]),typeof _[0]!="string"&&_.unshift("%O");let S=0;_[0]=_[0].replace(/%([a-zA-Z%])/g,(I,P)=>{if(I==="%%")return"%";S++;let O=t.formatters[P];if(typeof O=="function"){let R=_[S];I=O.call(k,R),_.splice(S,1),S--}return I}),t.formatArgs.call(k,_),(k.log||t.log).apply(k,_)}return g.namespace=b,g.useColors=t.useColors(),g.color=t.selectColor(b),g.extend=n,g.destroy=t.destroy,Object.defineProperty(g,"enabled",{enumerable:!0,configurable:!1,get:()=>o!==null?o:(v!==t.namespaces&&(v=t.namespaces,w=t.enabled(b)),w),set:_=>{o=_}}),typeof t.init=="function"&&t.init(g),g}function n(b,u){let o=t(this.namespace+(typeof u>"u"?":":u)+b);return o.log=this.log,o}function r(b){t.save(b),t.namespaces=b,t.names=[],t.skips=[];let u=(typeof b=="string"?b:"").trim().replace(/\s+/g,",").split(",").filter(Boolean);for(let o of u)o[0]==="-"?t.skips.push(o.slice(1)):t.names.push(o)}function e(b,u){let o=0,v=0,w=-1,g=0;for(;o<b.length;)if(v<u.length&&(u[v]===b[o]||u[v]==="*"))u[v]==="*"?(w=v,g=o,v++):(o++,v++);else if(w!==-1)v=w+1,g++,o=g;else return!1;for(;v<u.length&&u[v]==="*";)v++;return v===u.length}function s(){let b=[...t.names,...t.skips.map(u=>"-"+u)].join(",");return t.enable(""),b}function i(b){for(let u of t.skips)if(e(b,u))return!1;for(let u of t.names)if(e(b,u))return!0;return!1}function m(b){return b instanceof Error?b.stack||b.message:b}function h(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return t.enable(t.load()),t}f.exports=a}),Mt=ye((c,f)=>{he(),me(),fe(),c.formatArgs=l,c.save=d,c.load=t,c.useColors=a,c.storage=n(),c.destroy=(()=>{let e=!1;return()=>{e||(e=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),c.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function a(){if(typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs))return!0;if(typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;let e;return typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&(e=navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/))&&parseInt(e[1],10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function l(e){if(e[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+e[0]+(this.useColors?"%c ":" ")+"+"+f.exports.humanize(this.diff),!this.useColors)return;let s="color: "+this.color;e.splice(1,0,s,"color: inherit");let i=0,m=0;e[0].replace(/%[a-zA-Z%]/g,h=>{h!=="%%"&&(i++,h==="%c"&&(m=i))}),e.splice(m,0,s)}c.log=console.debug||console.log||(()=>{});function d(e){try{e?c.storage.setItem("debug",e):c.storage.removeItem("debug")}catch{}}function t(){let e;try{e=c.storage.getItem("debug")||c.storage.getItem("DEBUG")}catch{}return!e&&typeof Ge<"u"&&"env"in Ge&&(e=Ge.env.DEBUG),e}function n(){try{return localStorage}catch{}}f.exports=_c()(c);var{formatters:r}=f.exports;r.j=function(e){try{return JSON.stringify(e)}catch(s){return"[UnexpectedJSONParseError]: "+s.message}}}),kc=ye((c,f)=>{he(),me(),fe();var a=vc(),{EventEmitter:l}=(Jt(),Qe(Dt)),d=yc(),t=ka(),n=Mt()("mqtt-packet:parser"),r=class xs extends l{constructor(){super(),this.parser=this.constructor.parser}static parser(s){return this instanceof xs?(this.settings=s||{},this._states=["_parseHeader","_parseLength","_parsePayload","_newPacket"],this._resetState(),this):new xs().parser(s)}_resetState(){n("_resetState: resetting packet, error, _list, and _stateCounter"),this.packet=new d,this.error=null,this._list=a(),this._stateCounter=0}parse(s){for(this.error&&this._resetState(),this._list.append(s),n("parse: current state: %s",this._states[this._stateCounter]);(this.packet.length!==-1||this._list.length>0)&&this[this._states[this._stateCounter]]()&&!this.error;)this._stateCounter++,n("parse: state complete. _stateCounter is now: %d",this._stateCounter),n("parse: packet.length: %d, buffer list length: %d",this.packet.length,this._list.length),this._stateCounter>=this._states.length&&(this._stateCounter=0);return n("parse: exited while loop. packet: %d, buffer list length: %d",this.packet.length,this._list.length),this._list.length}_parseHeader(){let s=this._list.readUInt8(0),i=s>>t.CMD_SHIFT;this.packet.cmd=t.types[i];let m=s&15,h=t.requiredHeaderFlags[i];return h!=null&&m!==h?this._emitError(new Error(t.requiredHeaderFlagsErrors[i])):(this.packet.retain=(s&t.RETAIN_MASK)!==0,this.packet.qos=s>>t.QOS_SHIFT&t.QOS_MASK,this.packet.qos>2?this._emitError(new Error("Packet must not have both QoS bits set to 1")):(this.packet.dup=(s&t.DUP_MASK)!==0,n("_parseHeader: packet: %o",this.packet),this._list.consume(1),!0))}_parseLength(){let s=this._parseVarByteNum(!0);return s&&(this.packet.length=s.value,this._list.consume(s.bytes)),n("_parseLength %d",s.value),!!s}_parsePayload(){n("_parsePayload: payload %O",this._list);let s=!1;if(this.packet.length===0||this._list.length>=this.packet.length){switch(this._pos=0,this.packet.cmd){case"connect":this._parseConnect();break;case"connack":this._parseConnack();break;case"publish":this._parsePublish();break;case"puback":case"pubrec":case"pubrel":case"pubcomp":this._parseConfirmation();break;case"subscribe":this._parseSubscribe();break;case"suback":this._parseSuback();break;case"unsubscribe":this._parseUnsubscribe();break;case"unsuback":this._parseUnsuback();break;case"pingreq":case"pingresp":break;case"disconnect":this._parseDisconnect();break;case"auth":this._parseAuth();break;default:this._emitError(new Error("Not supported"))}s=!0}return n("_parsePayload complete result: %s",s),s}_parseConnect(){n("_parseConnect");let s,i,m,h,b={},u=this.packet,o=this._parseString();if(o===null)return this._emitError(new Error("Cannot parse protocolId"));if(o!=="MQTT"&&o!=="MQIsdp")return this._emitError(new Error("Invalid protocolId"));if(u.protocolId=o,this._pos>=this._list.length)return this._emitError(new Error("Packet too short"));if(u.protocolVersion=this._list.readUInt8(this._pos),u.protocolVersion>=128&&(u.bridgeMode=!0,u.protocolVersion=u.protocolVersion-128),u.protocolVersion!==3&&u.protocolVersion!==4&&u.protocolVersion!==5)return this._emitError(new Error("Invalid protocol version"));if(this._pos++,this._pos>=this._list.length)return this._emitError(new Error("Packet too short"));if(this._list.readUInt8(this._pos)&1)return this._emitError(new Error("Connect flag bit 0 must be 0, but got 1"));b.username=this._list.readUInt8(this._pos)&t.USERNAME_MASK,b.password=this._list.readUInt8(this._pos)&t.PASSWORD_MASK,b.will=this._list.readUInt8(this._pos)&t.WILL_FLAG_MASK;let v=!!(this._list.readUInt8(this._pos)&t.WILL_RETAIN_MASK),w=(this._list.readUInt8(this._pos)&t.WILL_QOS_MASK)>>t.WILL_QOS_SHIFT;if(b.will)u.will={},u.will.retain=v,u.will.qos=w;else{if(v)return this._emitError(new Error("Will Retain Flag must be set to zero when Will Flag is set to 0"));if(w)return this._emitError(new Error("Will QoS must be set to zero when Will Flag is set to 0"))}if(u.clean=(this._list.readUInt8(this._pos)&t.CLEAN_SESSION_MASK)!==0,this._pos++,u.keepalive=this._parseNum(),u.keepalive===-1)return this._emitError(new Error("Packet too short"));if(u.protocolVersion===5){let _=this._parseProperties();Object.getOwnPropertyNames(_).length&&(u.properties=_)}let g=this._parseString();if(g===null)return this._emitError(new Error("Packet too short"));if(u.clientId=g,n("_parseConnect: packet.clientId: %s",u.clientId),b.will){if(u.protocolVersion===5){let _=this._parseProperties();Object.getOwnPropertyNames(_).length&&(u.will.properties=_)}if(s=this._parseString(),s===null)return this._emitError(new Error("Cannot parse will topic"));if(u.will.topic=s,n("_parseConnect: packet.will.topic: %s",u.will.topic),i=this._parseBuffer(),i===null)return this._emitError(new Error("Cannot parse will payload"));u.will.payload=i,n("_parseConnect: packet.will.paylaod: %s",u.will.payload)}if(b.username){if(h=this._parseString(),h===null)return this._emitError(new Error("Cannot parse username"));u.username=h,n("_parseConnect: packet.username: %s",u.username)}if(b.password){if(m=this._parseBuffer(),m===null)return this._emitError(new Error("Cannot parse password"));u.password=m}return this.settings=u,n("_parseConnect: complete"),u}_parseConnack(){n("_parseConnack");let s=this.packet;if(this._list.length<1)return null;let i=this._list.readUInt8(this._pos++);if(i>1)return this._emitError(new Error("Invalid connack flags, bits 7-1 must be set to 0"));if(s.sessionPresent=!!(i&t.SESSIONPRESENT_MASK),this.settings.protocolVersion===5)this._list.length>=2?s.reasonCode=this._list.readUInt8(this._pos++):s.reasonCode=0;else{if(this._list.length<2)return null;s.returnCode=this._list.readUInt8(this._pos++)}if(s.returnCode===-1||s.reasonCode===-1)return this._emitError(new Error("Cannot parse return code"));if(this.settings.protocolVersion===5){let m=this._parseProperties();Object.getOwnPropertyNames(m).length&&(s.properties=m)}n("_parseConnack: complete")}_parsePublish(){n("_parsePublish");let s=this.packet;if(s.topic=this._parseString(),s.topic===null)return this._emitError(new Error("Cannot parse topic"));if(!(s.qos>0&&!this._parseMessageId())){if(this.settings.protocolVersion===5){let i=this._parseProperties();Object.getOwnPropertyNames(i).length&&(s.properties=i)}s.payload=this._list.slice(this._pos,s.length),n("_parsePublish: payload from buffer list: %o",s.payload)}}_parseSubscribe(){n("_parseSubscribe");let s=this.packet,i,m,h,b,u,o,v;if(s.subscriptions=[],!!this._parseMessageId()){if(this.settings.protocolVersion===5){let w=this._parseProperties();Object.getOwnPropertyNames(w).length&&(s.properties=w)}if(s.length<=0)return this._emitError(new Error("Malformed subscribe, no payload specified"));for(;this._pos<s.length;){if(i=this._parseString(),i===null)return this._emitError(new Error("Cannot parse topic"));if(this._pos>=s.length)return this._emitError(new Error("Malformed Subscribe Payload"));if(m=this._parseByte(),this.settings.protocolVersion===5){if(m&192)return this._emitError(new Error("Invalid subscribe topic flag bits, bits 7-6 must be 0"))}else if(m&252)return this._emitError(new Error("Invalid subscribe topic flag bits, bits 7-2 must be 0"));if(h=m&t.SUBSCRIBE_OPTIONS_QOS_MASK,h>2)return this._emitError(new Error("Invalid subscribe QoS, must be <= 2"));if(o=(m>>t.SUBSCRIBE_OPTIONS_NL_SHIFT&t.SUBSCRIBE_OPTIONS_NL_MASK)!==0,u=(m>>t.SUBSCRIBE_OPTIONS_RAP_SHIFT&t.SUBSCRIBE_OPTIONS_RAP_MASK)!==0,b=m>>t.SUBSCRIBE_OPTIONS_RH_SHIFT&t.SUBSCRIBE_OPTIONS_RH_MASK,b>2)return this._emitError(new Error("Invalid retain handling, must be <= 2"));v={topic:i,qos:h},this.settings.protocolVersion===5?(v.nl=o,v.rap=u,v.rh=b):this.settings.bridgeMode&&(v.rh=0,v.rap=!0,v.nl=!0),n("_parseSubscribe: push subscription `%s` to subscription",v),s.subscriptions.push(v)}}}_parseSuback(){n("_parseSuback");let s=this.packet;if(this.packet.granted=[],!!this._parseMessageId()){if(this.settings.protocolVersion===5){let i=this._parseProperties();Object.getOwnPropertyNames(i).length&&(s.properties=i)}if(s.length<=0)return this._emitError(new Error("Malformed suback, no payload specified"));for(;this._pos<this.packet.length;){let i=this._list.readUInt8(this._pos++);if(this.settings.protocolVersion===5){if(!t.MQTT5_SUBACK_CODES[i])return this._emitError(new Error("Invalid suback code"))}else if(i>2&&i!==128)return this._emitError(new Error("Invalid suback QoS, must be 0, 1, 2 or 128"));this.packet.granted.push(i)}}}_parseUnsubscribe(){n("_parseUnsubscribe");let s=this.packet;if(s.unsubscriptions=[],!!this._parseMessageId()){if(this.settings.protocolVersion===5){let i=this._parseProperties();Object.getOwnPropertyNames(i).length&&(s.properties=i)}if(s.length<=0)return this._emitError(new Error("Malformed unsubscribe, no payload specified"));for(;this._pos<s.length;){let i=this._parseString();if(i===null)return this._emitError(new Error("Cannot parse topic"));n("_parseUnsubscribe: push topic `%s` to unsubscriptions",i),s.unsubscriptions.push(i)}}}_parseUnsuback(){n("_parseUnsuback");let s=this.packet;if(!this._parseMessageId())return this._emitError(new Error("Cannot parse messageId"));if((this.settings.protocolVersion===3||this.settings.protocolVersion===4)&&s.length!==2)return this._emitError(new Error("Malformed unsuback, payload length must be 2"));if(s.length<=0)return this._emitError(new Error("Malformed unsuback, no payload specified"));if(this.settings.protocolVersion===5){let i=this._parseProperties();for(Object.getOwnPropertyNames(i).length&&(s.properties=i),s.granted=[];this._pos<this.packet.length;){let m=this._list.readUInt8(this._pos++);if(!t.MQTT5_UNSUBACK_CODES[m])return this._emitError(new Error("Invalid unsuback code"));this.packet.granted.push(m)}}}_parseConfirmation(){n("_parseConfirmation: packet.cmd: `%s`",this.packet.cmd);let s=this.packet;if(this._parseMessageId(),this.settings.protocolVersion===5){if(s.length>2){switch(s.reasonCode=this._parseByte(),this.packet.cmd){case"puback":case"pubrec":if(!t.MQTT5_PUBACK_PUBREC_CODES[s.reasonCode])return this._emitError(new Error("Invalid "+this.packet.cmd+" reason code"));break;case"pubrel":case"pubcomp":if(!t.MQTT5_PUBREL_PUBCOMP_CODES[s.reasonCode])return this._emitError(new Error("Invalid "+this.packet.cmd+" reason code"));break}n("_parseConfirmation: packet.reasonCode `%d`",s.reasonCode)}else s.reasonCode=0;if(s.length>3){let i=this._parseProperties();Object.getOwnPropertyNames(i).length&&(s.properties=i)}}return!0}_parseDisconnect(){let s=this.packet;if(n("_parseDisconnect"),this.settings.protocolVersion===5){this._list.length>0?(s.reasonCode=this._parseByte(),t.MQTT5_DISCONNECT_CODES[s.reasonCode]||this._emitError(new Error("Invalid disconnect reason code"))):s.reasonCode=0;let i=this._parseProperties();Object.getOwnPropertyNames(i).length&&(s.properties=i)}return n("_parseDisconnect result: true"),!0}_parseAuth(){n("_parseAuth");let s=this.packet;if(this.settings.protocolVersion!==5)return this._emitError(new Error("Not supported auth packet for this version MQTT"));if(s.reasonCode=this._parseByte(),!t.MQTT5_AUTH_CODES[s.reasonCode])return this._emitError(new Error("Invalid auth reason code"));let i=this._parseProperties();return Object.getOwnPropertyNames(i).length&&(s.properties=i),n("_parseAuth: result: true"),!0}_parseMessageId(){let s=this.packet;return s.messageId=this._parseNum(),s.messageId===null?(this._emitError(new Error("Cannot parse messageId")),!1):(n("_parseMessageId: packet.messageId %d",s.messageId),!0)}_parseString(s){let i=this._parseNum(),m=i+this._pos;if(i===-1||m>this._list.length||m>this.packet.length)return null;let h=this._list.toString("utf8",this._pos,m);return this._pos+=i,n("_parseString: result: %s",h),h}_parseStringPair(){return n("_parseStringPair"),{name:this._parseString(),value:this._parseString()}}_parseBuffer(){let s=this._parseNum(),i=s+this._pos;if(s===-1||i>this._list.length||i>this.packet.length)return null;let m=this._list.slice(this._pos,i);return this._pos+=s,n("_parseBuffer: result: %o",m),m}_parseNum(){if(this._list.length-this._pos<2)return-1;let s=this._list.readUInt16BE(this._pos);return this._pos+=2,n("_parseNum: result: %s",s),s}_parse4ByteNum(){if(this._list.length-this._pos<4)return-1;let s=this._list.readUInt32BE(this._pos);return this._pos+=4,n("_parse4ByteNum: result: %s",s),s}_parseVarByteNum(s){n("_parseVarByteNum");let i=4,m=0,h=1,b=0,u=!1,o,v=this._pos?this._pos:0;for(;m<i&&v+m<this._list.length;){if(o=this._list.readUInt8(v+m++),b+=h*(o&t.VARBYTEINT_MASK),h*=128,(o&t.VARBYTEINT_FIN_MASK)===0){u=!0;break}if(this._list.length<=m)break}return!u&&m===i&&this._list.length>=m&&this._emitError(new Error("Invalid variable byte integer")),v&&(this._pos+=m),u?s?u={bytes:m,value:b}:u=b:u=!1,n("_parseVarByteNum: result: %o",u),u}_parseByte(){let s;return this._pos<this._list.length&&(s=this._list.readUInt8(this._pos),this._pos++),n("_parseByte: result: %o",s),s}_parseByType(s){switch(n("_parseByType: type: %s",s),s){case"byte":return this._parseByte()!==0;case"int8":return this._parseByte();case"int16":return this._parseNum();case"int32":return this._parse4ByteNum();case"var":return this._parseVarByteNum();case"string":return this._parseString();case"pair":return this._parseStringPair();case"binary":return this._parseBuffer()}}_parseProperties(){n("_parseProperties");let s=this._parseVarByteNum(),i=this._pos+s,m={};for(;this._pos<i;){let h=this._parseByte();if(!h)return this._emitError(new Error("Cannot parse property code type")),!1;let b=t.propertiesCodes[h];if(!b)return this._emitError(new Error("Unknown property")),!1;if(b==="userProperties"){m[b]||(m[b]=Object.create(null));let u=this._parseByType(t.propertiesTypes[b]);if(m[b][u.name])if(Array.isArray(m[b][u.name]))m[b][u.name].push(u.value);else{let o=m[b][u.name];m[b][u.name]=[o],m[b][u.name].push(u.value)}else m[b][u.name]=u.value;continue}m[b]?Array.isArray(m[b])?m[b].push(this._parseByType(t.propertiesTypes[b])):(m[b]=[m[b]],m[b].push(this._parseByType(t.propertiesTypes[b]))):m[b]=this._parseByType(t.propertiesTypes[b])}return m}_newPacket(){return n("_newPacket"),this.packet&&(this._list.consume(this.packet.length),n("_newPacket: parser emit packet: packet.cmd: %s, packet.payload: %s, packet.length: %d",this.packet.cmd,this.packet.payload,this.packet.length),this.emit("packet",this.packet)),n("_newPacket: new packet"),this.packet=new d,this._pos=0,!0}_emitError(s){n("_emitError",s),this.error=s,this.emit("error",s)}};f.exports=r}),xc=ye((c,f)=>{he(),me(),fe();var{Buffer:a}=(st(),Qe(rt)),l=65536,d={},t=a.isBuffer(a.from([1,2]).subarray(0,1));function n(i){let m=a.allocUnsafe(2);return m.writeUInt8(i>>8,0),m.writeUInt8(i&255,1),m}function r(){for(let i=0;i<l;i++)d[i]=n(i)}function e(i){let m=0,h=0,b=a.allocUnsafe(4);do m=i%128|0,i=i/128|0,i>0&&(m=m|128),b.writeUInt8(m,h++);while(i>0&&h<4);return i>0&&(h=0),t?b.subarray(0,h):b.slice(0,h)}function s(i){let m=a.allocUnsafe(4);return m.writeUInt32BE(i,0),m}f.exports={cache:d,generateCache:r,generateNumber:n,genBufVariableByteInt:e,generate4ByteBuffer:s}}),Sc=ye((c,f)=>{he(),me(),fe(),typeof Ge>"u"||!Ge.version||Ge.version.indexOf("v0.")===0||Ge.version.indexOf("v1.")===0&&Ge.version.indexOf("v1.8.")!==0?f.exports={nextTick:a}:f.exports=Ge;function a(l,d,t,n){if(typeof l!="function")throw new TypeError('"callback" argument must be a function');var r=arguments.length,e,s;switch(r){case 0:case 1:return Ge.nextTick(l);case 2:return Ge.nextTick(function(){l.call(null,d)});case 3:return Ge.nextTick(function(){l.call(null,d,t)});case 4:return Ge.nextTick(function(){l.call(null,d,t,n)});default:for(e=new Array(r-1),s=0;s<e.length;)e[s++]=arguments[s];return Ge.nextTick(function(){l.apply(null,e)})}}}),xa=ye((c,f)=>{he(),me(),fe();var a=ka(),{Buffer:l}=(st(),Qe(rt)),d=l.allocUnsafe(0),t=l.from([0]),n=xc(),r=Sc().nextTick,e=Mt()("mqtt-packet:writeToStream"),s=n.cache,i=n.generateNumber,m=n.generateCache,h=n.genBufVariableByteInt,b=n.generate4ByteBuffer,u=X,o=!0;function v(Q,q,ae){switch(e("generate called"),q.cork&&(q.cork(),r(w,q)),o&&(o=!1,m()),e("generate: packet.cmd: %s",Q.cmd),Q.cmd){case"connect":return g(Q,q);case"connack":return _(Q,q,ae);case"publish":return k(Q,q,ae);case"puback":case"pubrec":case"pubrel":case"pubcomp":return y(Q,q,ae);case"subscribe":return T(Q,q,ae);case"suback":return S(Q,q,ae);case"unsubscribe":return I(Q,q,ae);case"unsuback":return P(Q,q,ae);case"pingreq":case"pingresp":return O(Q,q);case"disconnect":return R(Q,q,ae);case"auth":return C(Q,q,ae);default:return q.destroy(new Error("Unknown command")),!1}}Object.defineProperty(v,"cacheNumbers",{get(){return u===X},set(Q){Q?((!s||Object.keys(s).length===0)&&(o=!0),u=X):(o=!1,u=K)}});function w(Q){Q.uncork()}function g(Q,q,ae){let V=Q||{},z=V.protocolId||"MQTT",Y=V.protocolVersion||4,we=V.will,ce=V.clean,U=V.keepalive||0,H=V.clientId||"",te=V.username,ge=V.password,pe=V.properties;ce===void 0&&(ce=!0);let _e=0;if(typeof z!="string"&&!l.isBuffer(z))return q.destroy(new Error("Invalid protocolId")),!1;if(_e+=z.length+2,Y!==3&&Y!==4&&Y!==5)return q.destroy(new Error("Invalid protocol version")),!1;if(_e+=1,(typeof H=="string"||l.isBuffer(H))&&(H||Y>=4)&&(H||ce))_e+=l.byteLength(H)+2;else{if(Y<4)return q.destroy(new Error("clientId must be supplied before 3.1.1")),!1;if(ce*1===0)return q.destroy(new Error("clientId must be given if cleanSession set to 0")),!1}if(typeof U!="number"||U<0||U>65535||U%1!==0)return q.destroy(new Error("Invalid keepalive")),!1;_e+=2,_e+=1;let $,ve;if(Y===5){if($=Z(q,pe),!$)return!1;_e+=$.length}if(we){if(typeof we!="object")return q.destroy(new Error("Invalid will")),!1;if(!we.topic||typeof we.topic!="string")return q.destroy(new Error("Invalid will topic")),!1;if(_e+=l.byteLength(we.topic)+2,_e+=2,we.payload)if(we.payload.length>=0)typeof we.payload=="string"?_e+=l.byteLength(we.payload):_e+=we.payload.length;else return q.destroy(new Error("Invalid will payload")),!1;if(ve={},Y===5){if(ve=Z(q,we.properties),!ve)return!1;_e+=ve.length}}let Se=!1;if(te!=null)if(xe(te))Se=!0,_e+=l.byteLength(te)+2;else return q.destroy(new Error("Invalid username")),!1;if(ge!=null){if(!Se)return q.destroy(new Error("Username is required to use password")),!1;if(xe(ge))_e+=re(ge)+2;else return q.destroy(new Error("Invalid password")),!1}q.write(a.CONNECT_HEADER),F(q,_e),D(q,z),V.bridgeMode&&(Y+=128),q.write(Y===131?a.VERSION131:Y===132?a.VERSION132:Y===4?a.VERSION4:Y===5?a.VERSION5:a.VERSION3);let le=0;return le|=te!=null?a.USERNAME_MASK:0,le|=ge!=null?a.PASSWORD_MASK:0,le|=we&&we.retain?a.WILL_RETAIN_MASK:0,le|=we&&we.qos?we.qos<<a.WILL_QOS_SHIFT:0,le|=we?a.WILL_FLAG_MASK:0,le|=ce?a.CLEAN_SESSION_MASK:0,q.write(l.from([le])),u(q,U),Y===5&&$.write(),D(q,H),we&&(Y===5&&ve.write(),j(q,we.topic),D(q,we.payload)),te!=null&&D(q,te),ge!=null&&D(q,ge),!0}function _(Q,q,ae){let V=ae?ae.protocolVersion:4,z=Q||{},Y=V===5?z.reasonCode:z.returnCode,we=z.properties,ce=2;if(typeof Y!="number")return q.destroy(new Error("Invalid return code")),!1;let U=null;if(V===5){if(U=Z(q,we),!U)return!1;ce+=U.length}return q.write(a.CONNACK_HEADER),F(q,ce),q.write(z.sessionPresent?a.SESSIONPRESENT_HEADER:t),q.write(l.from([Y])),U?.write(),!0}function k(Q,q,ae){e("publish: packet: %o",Q);let V=ae?ae.protocolVersion:4,z=Q||{},Y=z.qos||0,we=z.retain?a.RETAIN_MASK:0,ce=z.topic,U=z.payload||d,H=z.messageId,te=z.properties,ge=0;if(typeof ce=="string")ge+=l.byteLength(ce)+2;else if(l.isBuffer(ce))ge+=ce.length+2;else return q.destroy(new Error("Invalid topic")),!1;if(l.isBuffer(U)?ge+=U.length:ge+=l.byteLength(U),Y&&typeof H!="number")return q.destroy(new Error("Invalid messageId")),!1;Y&&(ge+=2);let pe=null;if(V===5){if(pe=Z(q,te),!pe)return!1;ge+=pe.length}return q.write(a.PUBLISH_HEADER[Y][z.dup?1:0][we?1:0]),F(q,ge),u(q,re(ce)),q.write(ce),Y>0&&u(q,H),pe?.write(),e("publish: payload: %o",U),q.write(U)}function y(Q,q,ae){let V=ae?ae.protocolVersion:4,z=Q||{},Y=z.cmd||"puback",we=z.messageId,ce=z.dup&&Y==="pubrel"?a.DUP_MASK:0,U=0,H=z.reasonCode,te=z.properties,ge=V===5?3:2;if(Y==="pubrel"&&(U=1),typeof we!="number")return q.destroy(new Error("Invalid messageId")),!1;let pe=null;if(V===5&&typeof te=="object"){if(pe=N(q,te,ae,ge),!pe)return!1;ge+=pe.length}return q.write(a.ACKS[Y][U][ce][0]),ge===3&&(ge+=H!==0?1:-1),F(q,ge),u(q,we),V===5&&ge!==2&&q.write(l.from([H])),pe!==null?pe.write():ge===4&&q.write(l.from([0])),!0}function T(Q,q,ae){e("subscribe: packet: ");let V=ae?ae.protocolVersion:4,z=Q||{},Y=z.dup?a.DUP_MASK:0,we=z.messageId,ce=z.subscriptions,U=z.properties,H=0;if(typeof we!="number")return q.destroy(new Error("Invalid messageId")),!1;H+=2;let te=null;if(V===5){if(te=Z(q,U),!te)return!1;H+=te.length}if(typeof ce=="object"&&ce.length)for(let pe=0;pe<ce.length;pe+=1){let _e=ce[pe].topic,$=ce[pe].qos;if(typeof _e!="string")return q.destroy(new Error("Invalid subscriptions - invalid topic")),!1;if(typeof $!="number")return q.destroy(new Error("Invalid subscriptions - invalid qos")),!1;if(V===5){if(typeof(ce[pe].nl||!1)!="boolean")return q.destroy(new Error("Invalid subscriptions - invalid No Local")),!1;if(typeof(ce[pe].rap||!1)!="boolean")return q.destroy(new Error("Invalid subscriptions - invalid Retain as Published")),!1;let ve=ce[pe].rh||0;if(typeof ve!="number"||ve>2)return q.destroy(new Error("Invalid subscriptions - invalid Retain Handling")),!1}H+=l.byteLength(_e)+2+1}else return q.destroy(new Error("Invalid subscriptions")),!1;e("subscribe: writing to stream: %o",a.SUBSCRIBE_HEADER),q.write(a.SUBSCRIBE_HEADER[1][Y?1:0][0]),F(q,H),u(q,we),te!==null&&te.write();let ge=!0;for(let pe of ce){let _e=pe.topic,$=pe.qos,ve=+pe.nl,Se=+pe.rap,le=pe.rh,qe;j(q,_e),qe=a.SUBSCRIBE_OPTIONS_QOS[$],V===5&&(qe|=ve?a.SUBSCRIBE_OPTIONS_NL:0,qe|=Se?a.SUBSCRIBE_OPTIONS_RAP:0,qe|=le?a.SUBSCRIBE_OPTIONS_RH[le]:0),ge=q.write(l.from([qe]))}return ge}function S(Q,q,ae){let V=ae?ae.protocolVersion:4,z=Q||{},Y=z.messageId,we=z.granted,ce=z.properties,U=0;if(typeof Y!="number")return q.destroy(new Error("Invalid messageId")),!1;if(U+=2,typeof we=="object"&&we.length)for(let te=0;te<we.length;te+=1){if(typeof we[te]!="number")return q.destroy(new Error("Invalid qos vector")),!1;U+=1}else return q.destroy(new Error("Invalid qos vector")),!1;let H=null;if(V===5){if(H=N(q,ce,ae,U),!H)return!1;U+=H.length}return q.write(a.SUBACK_HEADER),F(q,U),u(q,Y),H!==null&&H.write(),q.write(l.from(we))}function I(Q,q,ae){let V=ae?ae.protocolVersion:4,z=Q||{},Y=z.messageId,we=z.dup?a.DUP_MASK:0,ce=z.unsubscriptions,U=z.properties,H=0;if(typeof Y!="number")return q.destroy(new Error("Invalid messageId")),!1;if(H+=2,typeof ce=="object"&&ce.length)for(let pe=0;pe<ce.length;pe+=1){if(typeof ce[pe]!="string")return q.destroy(new Error("Invalid unsubscriptions")),!1;H+=l.byteLength(ce[pe])+2}else return q.destroy(new Error("Invalid unsubscriptions")),!1;let te=null;if(V===5){if(te=Z(q,U),!te)return!1;H+=te.length}q.write(a.UNSUBSCRIBE_HEADER[1][we?1:0][0]),F(q,H),u(q,Y),te!==null&&te.write();let ge=!0;for(let pe=0;pe<ce.length;pe++)ge=j(q,ce[pe]);return ge}function P(Q,q,ae){let V=ae?ae.protocolVersion:4,z=Q||{},Y=z.messageId,we=z.dup?a.DUP_MASK:0,ce=z.granted,U=z.properties,H=z.cmd,te=0,ge=2;if(typeof Y!="number")return q.destroy(new Error("Invalid messageId")),!1;if(V===5)if(typeof ce=="object"&&ce.length)for(let _e=0;_e<ce.length;_e+=1){if(typeof ce[_e]!="number")return q.destroy(new Error("Invalid qos vector")),!1;ge+=1}else return q.destroy(new Error("Invalid qos vector")),!1;let pe=null;if(V===5){if(pe=N(q,U,ae,ge),!pe)return!1;ge+=pe.length}return q.write(a.ACKS[H][te][we][0]),F(q,ge),u(q,Y),pe!==null&&pe.write(),V===5&&q.write(l.from(ce)),!0}function O(Q,q,ae){return q.write(a.EMPTY[Q.cmd])}function R(Q,q,ae){let V=ae?ae.protocolVersion:4,z=Q||{},Y=z.reasonCode,we=z.properties,ce=V===5?1:0,U=null;if(V===5){if(U=N(q,we,ae,ce),!U)return!1;ce+=U.length}return q.write(l.from([a.codes.disconnect<<4])),F(q,ce),V===5&&q.write(l.from([Y])),U!==null&&U.write(),!0}function C(Q,q,ae){let V=ae?ae.protocolVersion:4,z=Q||{},Y=z.reasonCode,we=z.properties,ce=V===5?1:0;V!==5&&q.destroy(new Error("Invalid mqtt version for auth packet"));let U=N(q,we,ae,ce);return U?(ce+=U.length,q.write(l.from([a.codes.auth<<4])),F(q,ce),q.write(l.from([Y])),U!==null&&U.write(),!0):!1}var W={};function F(Q,q){if(q>a.VARBYTEINT_MAX)return Q.destroy(new Error(`Invalid variable byte integer: ${q}`)),!1;let ae=W[q];return ae||(ae=h(q),q<16384&&(W[q]=ae)),e("writeVarByteInt: writing to stream: %o",ae),Q.write(ae)}function j(Q,q){let ae=l.byteLength(q);return u(Q,ae),e("writeString: %s",q),Q.write(q,"utf8")}function de(Q,q,ae){j(Q,q),j(Q,ae)}function X(Q,q){return e("writeNumberCached: number: %d",q),e("writeNumberCached: %o",s[q]),Q.write(s[q])}function K(Q,q){let ae=i(q);return e("writeNumberGenerated: %o",ae),Q.write(ae)}function ie(Q,q){let ae=b(q);return e("write4ByteNumber: %o",ae),Q.write(ae)}function D(Q,q){typeof q=="string"?j(Q,q):q?(u(Q,q.length),Q.write(q)):u(Q,0)}function Z(Q,q){if(typeof q!="object"||q.length!=null)return{length:1,write(){be(Q,{},0)}};let ae=0;function V(z,Y){let we=a.propertiesTypes[z],ce=0;switch(we){case"byte":{if(typeof Y!="boolean")return Q.destroy(new Error(`Invalid ${z}: ${Y}`)),!1;ce+=2;break}case"int8":{if(typeof Y!="number"||Y<0||Y>255)return Q.destroy(new Error(`Invalid ${z}: ${Y}`)),!1;ce+=2;break}case"binary":{if(Y&&Y===null)return Q.destroy(new Error(`Invalid ${z}: ${Y}`)),!1;ce+=1+l.byteLength(Y)+2;break}case"int16":{if(typeof Y!="number"||Y<0||Y>65535)return Q.destroy(new Error(`Invalid ${z}: ${Y}`)),!1;ce+=3;break}case"int32":{if(typeof Y!="number"||Y<0||Y>4294967295)return Q.destroy(new Error(`Invalid ${z}: ${Y}`)),!1;ce+=5;break}case"var":{if(typeof Y!="number"||Y<0||Y>268435455)return Q.destroy(new Error(`Invalid ${z}: ${Y}`)),!1;ce+=1+l.byteLength(h(Y));break}case"string":{if(typeof Y!="string")return Q.destroy(new Error(`Invalid ${z}: ${Y}`)),!1;ce+=3+l.byteLength(Y.toString());break}case"pair":{if(typeof Y!="object")return Q.destroy(new Error(`Invalid ${z}: ${Y}`)),!1;ce+=Object.getOwnPropertyNames(Y).reduce((U,H)=>{let te=Y[H];return Array.isArray(te)?U+=te.reduce((ge,pe)=>(ge+=3+l.byteLength(H.toString())+2+l.byteLength(pe.toString()),ge),0):U+=3+l.byteLength(H.toString())+2+l.byteLength(Y[H].toString()),U},0);break}default:return Q.destroy(new Error(`Invalid property ${z}: ${Y}`)),!1}return ce}if(q)for(let z in q){let Y=0,we=0,ce=q[z];if(ce!==void 0){if(Array.isArray(ce))for(let U=0;U<ce.length;U++){if(we=V(z,ce[U]),!we)return!1;Y+=we}else{if(we=V(z,ce),!we)return!1;Y=we}if(!Y)return!1;ae+=Y}}return{length:l.byteLength(h(ae))+ae,write(){be(Q,q,ae)}}}function N(Q,q,ae,V){let z=["reasonString","userProperties"],Y=ae&&ae.properties&&ae.properties.maximumPacketSize?ae.properties.maximumPacketSize:0,we=Z(Q,q);if(Y)for(;V+we.length>Y;){let ce=z.shift();if(ce&&q[ce])delete q[ce],we=Z(Q,q);else return!1}return we}function J(Q,q,ae){switch(a.propertiesTypes[q]){case"byte":{Q.write(l.from([a.properties[q]])),Q.write(l.from([+ae]));break}case"int8":{Q.write(l.from([a.properties[q]])),Q.write(l.from([ae]));break}case"binary":{Q.write(l.from([a.properties[q]])),D(Q,ae);break}case"int16":{Q.write(l.from([a.properties[q]])),u(Q,ae);break}case"int32":{Q.write(l.from([a.properties[q]])),ie(Q,ae);break}case"var":{Q.write(l.from([a.properties[q]])),F(Q,ae);break}case"string":{Q.write(l.from([a.properties[q]])),j(Q,ae);break}case"pair":{Object.getOwnPropertyNames(ae).forEach(V=>{let z=ae[V];Array.isArray(z)?z.forEach(Y=>{Q.write(l.from([a.properties[q]])),de(Q,V.toString(),Y.toString())}):(Q.write(l.from([a.properties[q]])),de(Q,V.toString(),z.toString()))});break}default:return Q.destroy(new Error(`Invalid property ${q} value: ${ae}`)),!1}}function be(Q,q,ae){F(Q,ae);for(let V in q)if(Object.prototype.hasOwnProperty.call(q,V)&&q[V]!=null){let z=q[V];if(Array.isArray(z))for(let Y=0;Y<z.length;Y++)J(Q,V,z[Y]);else J(Q,V,z)}}function re(Q){return Q?Q instanceof l?Q.length:l.byteLength(Q):0}function xe(Q){return typeof Q=="string"||Q instanceof l}f.exports=v}),Tc=ye((c,f)=>{he(),me(),fe();var a=xa(),{EventEmitter:l}=(Jt(),Qe(Dt)),{Buffer:d}=(st(),Qe(rt));function t(r,e){let s=new n;return a(r,s,e),s.concat()}var n=class extends l{constructor(){super(),this._array=new Array(20),this._i=0}write(r){return this._array[this._i++]=r,!0}concat(){let r=0,e=new Array(this._array.length),s=this._array,i=0,m;for(m=0;m<s.length&&s[m]!==void 0;m++)typeof s[m]!="string"?e[m]=s[m].length:e[m]=d.byteLength(s[m]),r+=e[m];let h=d.allocUnsafe(r);for(m=0;m<s.length&&s[m]!==void 0;m++)typeof s[m]!="string"?(s[m].copy(h,i),i+=e[m]):(h.write(s[m],i),i+=e[m]);return h}destroy(r){r&&this.emit("error",r)}};f.exports=t}),Ac=ye(c=>{he(),me(),fe(),c.parser=kc().parser,c.generate=Tc(),c.writeToStream=xa()}),Ic=ye((c,f)=>{he(),me(),fe(),f.exports=l;function a(t){return t instanceof Zn?Zn.from(t):new t.constructor(t.buffer.slice(),t.byteOffset,t.length)}function l(t){if(t=t||{},t.circles)return d(t);let n=new Map;if(n.set(Date,m=>new Date(m)),n.set(Map,(m,h)=>new Map(e(Array.from(m),h))),n.set(Set,(m,h)=>new Set(e(Array.from(m),h))),t.constructorHandlers)for(let m of t.constructorHandlers)n.set(m[0],m[1]);let r=null;return t.proto?i:s;function e(m,h){let b=Object.keys(m),u=new Array(b.length);for(let o=0;o<b.length;o++){let v=b[o],w=m[v];typeof w!="object"||w===null?u[v]=w:w.constructor!==Object&&(r=n.get(w.constructor))?u[v]=r(w,h):ArrayBuffer.isView(w)?u[v]=a(w):u[v]=h(w)}return u}function s(m){if(typeof m!="object"||m===null)return m;if(Array.isArray(m))return e(m,s);if(m.constructor!==Object&&(r=n.get(m.constructor)))return r(m,s);let h={};for(let b in m){if(Object.hasOwnProperty.call(m,b)===!1)continue;let u=m[b];typeof u!="object"||u===null?h[b]=u:u.constructor!==Object&&(r=n.get(u.constructor))?h[b]=r(u,s):ArrayBuffer.isView(u)?h[b]=a(u):h[b]=s(u)}return h}function i(m){if(typeof m!="object"||m===null)return m;if(Array.isArray(m))return e(m,i);if(m.constructor!==Object&&(r=n.get(m.constructor)))return r(m,i);let h={};for(let b in m){let u=m[b];typeof u!="object"||u===null?h[b]=u:u.constructor!==Object&&(r=n.get(u.constructor))?h[b]=r(u,i):ArrayBuffer.isView(u)?h[b]=a(u):h[b]=i(u)}return h}}function d(t){let n=[],r=[],e=new Map;if(e.set(Date,b=>new Date(b)),e.set(Map,(b,u)=>new Map(i(Array.from(b),u))),e.set(Set,(b,u)=>new Set(i(Array.from(b),u))),t.constructorHandlers)for(let b of t.constructorHandlers)e.set(b[0],b[1]);let s=null;return t.proto?h:m;function i(b,u){let o=Object.keys(b),v=new Array(o.length);for(let w=0;w<o.length;w++){let g=o[w],_=b[g];if(typeof _!="object"||_===null)v[g]=_;else if(_.constructor!==Object&&(s=e.get(_.constructor)))v[g]=s(_,u);else if(ArrayBuffer.isView(_))v[g]=a(_);else{let k=n.indexOf(_);k!==-1?v[g]=r[k]:v[g]=u(_)}}return v}function m(b){if(typeof b!="object"||b===null)return b;if(Array.isArray(b))return i(b,m);if(b.constructor!==Object&&(s=e.get(b.constructor)))return s(b,m);let u={};n.push(b),r.push(u);for(let o in b){if(Object.hasOwnProperty.call(b,o)===!1)continue;let v=b[o];if(typeof v!="object"||v===null)u[o]=v;else if(v.constructor!==Object&&(s=e.get(v.constructor)))u[o]=s(v,m);else if(ArrayBuffer.isView(v))u[o]=a(v);else{let w=n.indexOf(v);w!==-1?u[o]=r[w]:u[o]=m(v)}}return n.pop(),r.pop(),u}function h(b){if(typeof b!="object"||b===null)return b;if(Array.isArray(b))return i(b,h);if(b.constructor!==Object&&(s=e.get(b.constructor)))return s(b,h);let u={};n.push(b),r.push(u);for(let o in b){let v=b[o];if(typeof v!="object"||v===null)u[o]=v;else if(v.constructor!==Object&&(s=e.get(v.constructor)))u[o]=s(v,h);else if(ArrayBuffer.isView(v))u[o]=a(v);else{let w=n.indexOf(v);w!==-1?u[o]=r[w]:u[o]=h(v)}}return n.pop(),r.pop(),u}}}),Ec=ye((c,f)=>{he(),me(),fe(),f.exports=Ic()()}),Sa=ye(c=>{he(),me(),fe(),Object.defineProperty(c,"__esModule",{value:!0}),c.validateTopic=f,c.validateTopics=a;function f(l){let d=l.split("/");for(let t=0;t<d.length;t++)if(d[t]!=="+"){if(d[t]==="#")return t===d.length-1;if(d[t].indexOf("+")!==-1||d[t].indexOf("#")!==-1)return!1}return!0}function a(l){if(l.length===0)return"empty_topic_list";for(let d=0;d<l.length;d++)if(!f(l[d]))return l[d];return null}}),Ta=ye(c=>{he(),me(),fe(),Object.defineProperty(c,"__esModule",{value:!0});var f=Zt(),a={objectMode:!0},l={clean:!0},d=class{options;_inflights;constructor(t){this.options=t||{},this.options={...l,...t},this._inflights=new Map}put(t,n){return this._inflights.set(t.messageId,t),n&&n(),this}createStream(){let t=new f.Readable(a),n=[],r=!1,e=0;return this._inflights.forEach((s,i)=>{n.push(s)}),t._read=()=>{!r&&e<n.length?t.push(n[e++]):t.push(null)},t.destroy=s=>{if(!r)return r=!0,setTimeout(()=>{t.emit("close")},0),t},t}del(t,n){let r=this._inflights.get(t.messageId);return r?(this._inflights.delete(t.messageId),n(null,r)):n&&n(new Error("missing packet")),this}get(t,n){let r=this._inflights.get(t.messageId);return r?n(null,r):n&&n(new Error("missing packet")),this}close(t){this.options.clean&&(this._inflights=null),t&&t()}};c.default=d}),Cc=ye(c=>{he(),me(),fe(),Object.defineProperty(c,"__esModule",{value:!0});var f=[0,16,128,131,135,144,145,151,153],a=(l,d,t)=>{l.log("handlePublish: packet %o",d),t=typeof t<"u"?t:l.noop;let n=d.topic.toString(),r=d.payload,{qos:e}=d,{messageId:s}=d,{options:i}=l;if(l.options.protocolVersion===5){let m;if(d.properties&&(m=d.properties.topicAlias),typeof m<"u")if(n.length===0)if(m>0&&m<=65535){let h=l.topicAliasRecv.getTopicByAlias(m);if(h)n=h,l.log("handlePublish :: topic complemented by alias. topic: %s - alias: %d",n,m);else{l.log("handlePublish :: unregistered topic alias. alias: %d",m),l.emit("error",new Error("Received unregistered Topic Alias"));return}}else{l.log("handlePublish :: topic alias out of range. alias: %d",m),l.emit("error",new Error("Received Topic Alias is out of range"));return}else if(l.topicAliasRecv.put(n,m))l.log("handlePublish :: registered topic: %s - alias: %d",n,m);else{l.log("handlePublish :: topic alias out of range. alias: %d",m),l.emit("error",new Error("Received Topic Alias is out of range"));return}}switch(l.log("handlePublish: qos %d",e),e){case 2:{i.customHandleAcks(n,r,d,(m,h)=>{if(typeof m=="number"&&(h=m,m=null),m)return l.emit("error",m);if(f.indexOf(h)===-1)return l.emit("error",new Error("Wrong reason code for pubrec"));h?l._sendPacket({cmd:"pubrec",messageId:s,reasonCode:h},t):l.incomingStore.put(d,()=>{l._sendPacket({cmd:"pubrec",messageId:s},t)})});break}case 1:{i.customHandleAcks(n,r,d,(m,h)=>{if(typeof m=="number"&&(h=m,m=null),m)return l.emit("error",m);if(f.indexOf(h)===-1)return l.emit("error",new Error("Wrong reason code for puback"));h||l.emit("message",n,r,d),l.handleMessage(d,b=>{if(b)return t&&t(b);l._sendPacket({cmd:"puback",messageId:s,reasonCode:h},t)})});break}case 0:l.emit("message",n,r,d),l.handleMessage(d,t);break;default:l.log("handlePublish: unknown QoS. Doing nothing.");break}};c.default=a}),Mc=ye((c,f)=>{f.exports={version:"5.15.0"}}),an=ye(c=>{he(),me(),fe(),Object.defineProperty(c,"__esModule",{value:!0}),c.MQTTJS_VERSION=c.nextTick=c.ErrorWithSubackPacket=c.ErrorWithReasonCode=void 0,c.applyMixin=l;var f=class Aa extends Error{code;constructor(t,n){super(t),this.code=n,Object.setPrototypeOf(this,Aa.prototype),Object.getPrototypeOf(this).name="ErrorWithReasonCode"}};c.ErrorWithReasonCode=f;var a=class Ia extends Error{packet;constructor(t,n){super(t),this.packet=n,Object.setPrototypeOf(this,Ia.prototype),Object.getPrototypeOf(this).name="ErrorWithSubackPacket"}};c.ErrorWithSubackPacket=a;function l(d,t,n=!1){let r=[t];for(;;){let e=r[0],s=Object.getPrototypeOf(e);if(s?.prototype)r.unshift(s);else break}for(let e of r)for(let s of Object.getOwnPropertyNames(e.prototype))(n||s!=="constructor")&&Object.defineProperty(d.prototype,s,Object.getOwnPropertyDescriptor(e.prototype,s)??Object.create(null))}c.nextTick=typeof Ge?.nextTick=="function"?Ge.nextTick:d=>{setTimeout(d,0)},c.MQTTJS_VERSION=Mc().version}),sr=ye(c=>{he(),me(),fe(),Object.defineProperty(c,"__esModule",{value:!0}),c.ReasonCodes=void 0;var f=an();c.ReasonCodes={0:"",1:"Unacceptable protocol version",2:"Identifier rejected",3:"Server unavailable",4:"Bad username or password",5:"Not authorized",16:"No matching subscribers",17:"No subscription existed",128:"Unspecified error",129:"Malformed Packet",130:"Protocol Error",131:"Implementation specific error",132:"Unsupported Protocol Version",133:"Client Identifier not valid",134:"Bad User Name or Password",135:"Not authorized",136:"Server unavailable",137:"Server busy",138:"Banned",139:"Server shutting down",140:"Bad authentication method",141:"Keep Alive timeout",142:"Session taken over",143:"Topic Filter invalid",144:"Topic Name invalid",145:"Packet identifier in use",146:"Packet Identifier not found",147:"Receive Maximum exceeded",148:"Topic Alias invalid",149:"Packet too large",150:"Message rate too high",151:"Quota exceeded",152:"Administrative action",153:"Payload format invalid",154:"Retain not supported",155:"QoS not supported",156:"Use another server",157:"Server moved",158:"Shared Subscriptions not supported",159:"Connection rate exceeded",160:"Maximum connect time",161:"Subscription Identifiers not supported",162:"Wildcard Subscriptions not supported"};var a=(l,d)=>{let{messageId:t}=d,n=d.cmd,r=null,e=l.outgoing[t]?l.outgoing[t].cb:null,s=null;if(!e){l.log("_handleAck :: Server sent an ack in error. Ignoring.");return}switch(l.log("_handleAck :: packet type",n),n){case"pubcomp":case"puback":{let i=d.reasonCode;i&&i>0&&i!==16?(s=new f.ErrorWithReasonCode(`Publish error: ${c.ReasonCodes[i]}`,i),l._removeOutgoingAndStoreMessage(t,()=>{e(s,d)})):l._removeOutgoingAndStoreMessage(t,e);break}case"pubrec":{r={cmd:"pubrel",qos:2,messageId:t};let i=d.reasonCode;i&&i>0&&i!==16?(s=new f.ErrorWithReasonCode(`Publish error: ${c.ReasonCodes[i]}`,i),l._removeOutgoingAndStoreMessage(t,()=>{e(s,d)})):l._sendPacket(r);break}case"suback":{delete l.outgoing[t],l.messageIdProvider.deallocate(t);let i=d.granted;for(let m=0;m<i.length;m++){let h=i[m];if((h&128)!==0){s=new Error(`Subscribe error: ${c.ReasonCodes[h]}`),s.code=h;let b=l.messageIdToTopic[t];b&&b.forEach(u=>{delete l._resubscribeTopics[u]})}}delete l.messageIdToTopic[t],l._invokeStoreProcessingQueue(),e(s,d);break}case"unsuback":{delete l.outgoing[t],l.messageIdProvider.deallocate(t),l._invokeStoreProcessingQueue(),e(null,d);break}default:l.emit("error",new Error("unrecognized packet type"))}l.disconnecting&&Object.keys(l.outgoing).length===0&&l.emit("outgoingEmpty")};c.default=a}),Pc=ye(c=>{he(),me(),fe(),Object.defineProperty(c,"__esModule",{value:!0});var f=an(),a=sr(),l=(d,t)=>{let{options:n}=d,r=n.protocolVersion,e=r===5?t.reasonCode:t.returnCode;if(r!==5){let s=new f.ErrorWithReasonCode(`Protocol error: Auth packets are only supported in MQTT 5. Your version:${r}`,e);d.emit("error",s);return}d.handleAuth(t,(s,i)=>{if(s){d.emit("error",s);return}if(e===24)d.reconnecting=!1,d._sendPacket(i);else{let m=new f.ErrorWithReasonCode(`Connection refused: ${a.ReasonCodes[e]}`,e);d.emit("error",m)}})};c.default=l}),Oc=ye(c=>{he(),me(),fe(),Object.defineProperty(c,"__esModule",{value:!0}),c.LRUCache=void 0;var f=typeof performance=="object"&&performance&&typeof performance.now=="function"?performance:Date,a=new Set,l=typeof Ge=="object"&&Ge?Ge:{},d=(b,u,o,v)=>{typeof l.emitWarning=="function"?l.emitWarning(b,u,o,v):console.error(`[${o}] ${u}: ${b}`)},t=globalThis.AbortController,n=globalThis.AbortSignal;if(typeof t>"u"){n=class{onabort;_onabort=[];reason;aborted=!1;addEventListener(o,v){this._onabort.push(v)}},t=class{constructor(){u()}signal=new n;abort(o){if(!this.signal.aborted){this.signal.reason=o,this.signal.aborted=!0;for(let v of this.signal._onabort)v(o);this.signal.onabort?.(o)}}};let b=l.env?.LRU_CACHE_IGNORE_AC_WARNING!=="1",u=()=>{b&&(b=!1,d("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.","NO_ABORT_CONTROLLER","ENOTSUP",u))}}var r=b=>!a.has(b),e=b=>b&&b===Math.floor(b)&&b>0&&isFinite(b),s=b=>e(b)?b<=Math.pow(2,8)?Uint8Array:b<=Math.pow(2,16)?Uint16Array:b<=Math.pow(2,32)?Uint32Array:b<=Number.MAX_SAFE_INTEGER?i:null:null,i=class extends Array{constructor(b){super(b),this.fill(0)}},m=class mn{heap;length;static#l=!1;static create(u){let o=s(u);if(!o)return[];mn.#l=!0;let v=new mn(u,o);return mn.#l=!1,v}constructor(u,o){if(!mn.#l)throw new TypeError("instantiate Stack using Stack.create(n)");this.heap=new o(u),this.length=0}push(u){this.heap[this.length++]=u}pop(){return this.heap[--this.length]}},h=class Ea{#l;#u;#m;#g;#M;#P;ttl;ttlResolution;ttlAutopurge;updateAgeOnGet;updateAgeOnHas;allowStale;noDisposeOnSet;noUpdateTTL;maxEntrySize;sizeCalculation;noDeleteOnFetchRejection;noDeleteOnStaleGet;allowStaleOnFetchAbort;allowStaleOnFetchRejection;ignoreFetchAbort;#s;#b;#r;#n;#e;#c;#p;#a;#i;#v;#o;#y;#w;#h;#_;#A;#d;static unsafeExposeInternals(u){return{starts:u.#w,ttls:u.#h,sizes:u.#y,keyMap:u.#r,keyList:u.#n,valList:u.#e,next:u.#c,prev:u.#p,get head(){return u.#a},get tail(){return u.#i},free:u.#v,isBackgroundFetch:o=>u.#t(o),backgroundFetch:(o,v,w,g)=>u.#R(o,v,w,g),moveToTail:o=>u.#C(o),indexes:o=>u.#k(o),rindexes:o=>u.#x(o),isStale:o=>u.#f(o)}}get max(){return this.#l}get maxSize(){return this.#u}get calculatedSize(){return this.#b}get size(){return this.#s}get fetchMethod(){return this.#M}get memoMethod(){return this.#P}get dispose(){return this.#m}get disposeAfter(){return this.#g}constructor(u){let{max:o=0,ttl:v,ttlResolution:w=1,ttlAutopurge:g,updateAgeOnGet:_,updateAgeOnHas:k,allowStale:y,dispose:T,disposeAfter:S,noDisposeOnSet:I,noUpdateTTL:P,maxSize:O=0,maxEntrySize:R=0,sizeCalculation:C,fetchMethod:W,memoMethod:F,noDeleteOnFetchRejection:j,noDeleteOnStaleGet:de,allowStaleOnFetchRejection:X,allowStaleOnFetchAbort:K,ignoreFetchAbort:ie}=u;if(o!==0&&!e(o))throw new TypeError("max option must be a nonnegative integer");let D=o?s(o):Array;if(!D)throw new Error("invalid max value: "+o);if(this.#l=o,this.#u=O,this.maxEntrySize=R||this.#u,this.sizeCalculation=C,this.sizeCalculation){if(!this.#u&&!this.maxEntrySize)throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");if(typeof this.sizeCalculation!="function")throw new TypeError("sizeCalculation set to non-function")}if(F!==void 0&&typeof F!="function")throw new TypeError("memoMethod must be a function if defined");if(this.#P=F,W!==void 0&&typeof W!="function")throw new TypeError("fetchMethod must be a function if specified");if(this.#M=W,this.#A=!!W,this.#r=new Map,this.#n=new Array(o).fill(void 0),this.#e=new Array(o).fill(void 0),this.#c=new D(o),this.#p=new D(o),this.#a=0,this.#i=0,this.#v=m.create(o),this.#s=0,this.#b=0,typeof T=="function"&&(this.#m=T),typeof S=="function"?(this.#g=S,this.#o=[]):(this.#g=void 0,this.#o=void 0),this.#_=!!this.#m,this.#d=!!this.#g,this.noDisposeOnSet=!!I,this.noUpdateTTL=!!P,this.noDeleteOnFetchRejection=!!j,this.allowStaleOnFetchRejection=!!X,this.allowStaleOnFetchAbort=!!K,this.ignoreFetchAbort=!!ie,this.maxEntrySize!==0){if(this.#u!==0&&!e(this.#u))throw new TypeError("maxSize must be a positive integer if specified");if(!e(this.maxEntrySize))throw new TypeError("maxEntrySize must be a positive integer if specified");this.#D()}if(this.allowStale=!!y,this.noDeleteOnStaleGet=!!de,this.updateAgeOnGet=!!_,this.updateAgeOnHas=!!k,this.ttlResolution=e(w)||w===0?w:1,this.ttlAutopurge=!!g,this.ttl=v||0,this.ttl){if(!e(this.ttl))throw new TypeError("ttl must be a positive integer if specified");this.#U()}if(this.#l===0&&this.ttl===0&&this.#u===0)throw new TypeError("At least one of max, maxSize, or ttl is required");if(!this.ttlAutopurge&&!this.#l&&!this.#u){let Z="LRU_CACHE_UNBOUNDED";r(Z)&&(a.add(Z),d("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.","UnboundedCacheWarning",Z,Ea))}}getRemainingTTL(u){return this.#r.has(u)?1/0:0}#U(){let u=new i(this.#l),o=new i(this.#l);this.#h=u,this.#w=o,this.#L=(g,_,k=f.now())=>{if(o[g]=_!==0?k:0,u[g]=_,_!==0&&this.ttlAutopurge){let y=setTimeout(()=>{this.#f(g)&&this.#S(this.#n[g],"expire")},_+1);y.unref&&y.unref()}},this.#I=g=>{o[g]=u[g]!==0?f.now():0},this.#T=(g,_)=>{if(u[_]){let k=u[_],y=o[_];if(!k||!y)return;g.ttl=k,g.start=y,g.now=v||w();let T=g.now-y;g.remainingTTL=k-T}};let v=0,w=()=>{let g=f.now();if(this.ttlResolution>0){v=g;let _=setTimeout(()=>v=0,this.ttlResolution);_.unref&&_.unref()}return g};this.getRemainingTTL=g=>{let _=this.#r.get(g);if(_===void 0)return 0;let k=u[_],y=o[_];if(!k||!y)return 1/0;let T=(v||w())-y;return k-T},this.#f=g=>{let _=o[g],k=u[g];return!!k&&!!_&&(v||w())-_>k}}#I=()=>{};#T=()=>{};#L=()=>{};#f=()=>!1;#D(){let u=new i(this.#l);this.#b=0,this.#y=u,this.#E=o=>{this.#b-=u[o],u[o]=0},this.#q=(o,v,w,g)=>{if(this.#t(v))return 0;if(!e(w))if(g){if(typeof g!="function")throw new TypeError("sizeCalculation must be a function");if(w=g(v,o),!e(w))throw new TypeError("sizeCalculation return invalid (expect positive integer)")}else throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");return w},this.#O=(o,v,w)=>{if(u[o]=v,this.#u){let g=this.#u-u[o];for(;this.#b>g;)this.#N(!0)}this.#b+=u[o],w&&(w.entrySize=v,w.totalCalculatedSize=this.#b)}}#E=u=>{};#O=(u,o,v)=>{};#q=(u,o,v,w)=>{if(v||w)throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");return 0};*#k({allowStale:u=this.allowStale}={}){if(this.#s)for(let o=this.#i;!(!this.#j(o)||((u||!this.#f(o))&&(yield o),o===this.#a));)o=this.#p[o]}*#x({allowStale:u=this.allowStale}={}){if(this.#s)for(let o=this.#a;!(!this.#j(o)||((u||!this.#f(o))&&(yield o),o===this.#i));)o=this.#c[o]}#j(u){return u!==void 0&&this.#r.get(this.#n[u])===u}*entries(){for(let u of this.#k())this.#e[u]!==void 0&&this.#n[u]!==void 0&&!this.#t(this.#e[u])&&(yield[this.#n[u],this.#e[u]])}*rentries(){for(let u of this.#x())this.#e[u]!==void 0&&this.#n[u]!==void 0&&!this.#t(this.#e[u])&&(yield[this.#n[u],this.#e[u]])}*keys(){for(let u of this.#k()){let o=this.#n[u];o!==void 0&&!this.#t(this.#e[u])&&(yield o)}}*rkeys(){for(let u of this.#x()){let o=this.#n[u];o!==void 0&&!this.#t(this.#e[u])&&(yield o)}}*values(){for(let u of this.#k())this.#e[u]!==void 0&&!this.#t(this.#e[u])&&(yield this.#e[u])}*rvalues(){for(let u of this.#x())this.#e[u]!==void 0&&!this.#t(this.#e[u])&&(yield this.#e[u])}[Symbol.iterator](){return this.entries()}[Symbol.toStringTag]="LRUCache";find(u,o={}){for(let v of this.#k()){let w=this.#e[v],g=this.#t(w)?w.__staleWhileFetching:w;if(g!==void 0&&u(g,this.#n[v],this))return this.get(this.#n[v],o)}}forEach(u,o=this){for(let v of this.#k()){let w=this.#e[v],g=this.#t(w)?w.__staleWhileFetching:w;g!==void 0&&u.call(o,g,this.#n[v],this)}}rforEach(u,o=this){for(let v of this.#x()){let w=this.#e[v],g=this.#t(w)?w.__staleWhileFetching:w;g!==void 0&&u.call(o,g,this.#n[v],this)}}purgeStale(){let u=!1;for(let o of this.#x({allowStale:!0}))this.#f(o)&&(this.#S(this.#n[o],"expire"),u=!0);return u}info(u){let o=this.#r.get(u);if(o===void 0)return;let v=this.#e[o],w=this.#t(v)?v.__staleWhileFetching:v;if(w===void 0)return;let g={value:w};if(this.#h&&this.#w){let _=this.#h[o],k=this.#w[o];if(_&&k){let y=_-(f.now()-k);g.ttl=y,g.start=Date.now()}}return this.#y&&(g.size=this.#y[o]),g}dump(){let u=[];for(let o of this.#k({allowStale:!0})){let v=this.#n[o],w=this.#e[o],g=this.#t(w)?w.__staleWhileFetching:w;if(g===void 0||v===void 0)continue;let _={value:g};if(this.#h&&this.#w){_.ttl=this.#h[o];let k=f.now()-this.#w[o];_.start=Math.floor(Date.now()-k)}this.#y&&(_.size=this.#y[o]),u.unshift([v,_])}return u}load(u){this.clear();for(let[o,v]of u){if(v.start){let w=Date.now()-v.start;v.start=f.now()-w}this.set(o,v.value,v)}}set(u,o,v={}){if(o===void 0)return this.delete(u),this;let{ttl:w=this.ttl,start:g,noDisposeOnSet:_=this.noDisposeOnSet,sizeCalculation:k=this.sizeCalculation,status:y}=v,{noUpdateTTL:T=this.noUpdateTTL}=v,S=this.#q(u,o,v.size||0,k);if(this.maxEntrySize&&S>this.maxEntrySize)return y&&(y.set="miss",y.maxEntrySizeExceeded=!0),this.#S(u,"set"),this;let I=this.#s===0?void 0:this.#r.get(u);if(I===void 0)I=this.#s===0?this.#i:this.#v.length!==0?this.#v.pop():this.#s===this.#l?this.#N(!1):this.#s,this.#n[I]=u,this.#e[I]=o,this.#r.set(u,I),this.#c[this.#i]=I,this.#p[I]=this.#i,this.#i=I,this.#s++,this.#O(I,S,y),y&&(y.set="add"),T=!1;else{this.#C(I);let P=this.#e[I];if(o!==P){if(this.#A&&this.#t(P)){P.__abortController.abort(new Error("replaced"));let{__staleWhileFetching:O}=P;O!==void 0&&!_&&(this.#_&&this.#m?.(O,u,"set"),this.#d&&this.#o?.push([O,u,"set"]))}else _||(this.#_&&this.#m?.(P,u,"set"),this.#d&&this.#o?.push([P,u,"set"]));if(this.#E(I),this.#O(I,S,y),this.#e[I]=o,y){y.set="replace";let O=P&&this.#t(P)?P.__staleWhileFetching:P;O!==void 0&&(y.oldValue=O)}}else y&&(y.set="update")}if(w!==0&&!this.#h&&this.#U(),this.#h&&(T||this.#L(I,w,g),y&&this.#T(y,I)),!_&&this.#d&&this.#o){let P=this.#o,O;for(;O=P?.shift();)this.#g?.(...O)}return this}pop(){try{for(;this.#s;){let u=this.#e[this.#a];if(this.#N(!0),this.#t(u)){if(u.__staleWhileFetching)return u.__staleWhileFetching}else if(u!==void 0)return u}}finally{if(this.#d&&this.#o){let u=this.#o,o;for(;o=u?.shift();)this.#g?.(...o)}}}#N(u){let o=this.#a,v=this.#n[o],w=this.#e[o];return this.#A&&this.#t(w)?w.__abortController.abort(new Error("evicted")):(this.#_||this.#d)&&(this.#_&&this.#m?.(w,v,"evict"),this.#d&&this.#o?.push([w,v,"evict"])),this.#E(o),u&&(this.#n[o]=void 0,this.#e[o]=void 0,this.#v.push(o)),this.#s===1?(this.#a=this.#i=0,this.#v.length=0):this.#a=this.#c[o],this.#r.delete(v),this.#s--,o}has(u,o={}){let{updateAgeOnHas:v=this.updateAgeOnHas,status:w}=o,g=this.#r.get(u);if(g!==void 0){let _=this.#e[g];if(this.#t(_)&&_.__staleWhileFetching===void 0)return!1;if(this.#f(g))w&&(w.has="stale",this.#T(w,g));else return v&&this.#I(g),w&&(w.has="hit",this.#T(w,g)),!0}else w&&(w.has="miss");return!1}peek(u,o={}){let{allowStale:v=this.allowStale}=o,w=this.#r.get(u);if(w===void 0||!v&&this.#f(w))return;let g=this.#e[w];return this.#t(g)?g.__staleWhileFetching:g}#R(u,o,v,w){let g=o===void 0?void 0:this.#e[o];if(this.#t(g))return g;let _=new t,{signal:k}=v;k?.addEventListener("abort",()=>_.abort(k.reason),{signal:_.signal});let y={signal:_.signal,options:v,context:w},T=(C,W=!1)=>{let{aborted:F}=_.signal,j=v.ignoreFetchAbort&&C!==void 0;if(v.status&&(F&&!W?(v.status.fetchAborted=!0,v.status.fetchError=_.signal.reason,j&&(v.status.fetchAbortIgnored=!0)):v.status.fetchResolved=!0),F&&!j&&!W)return I(_.signal.reason);let de=O;return this.#e[o]===O&&(C===void 0?de.__staleWhileFetching?this.#e[o]=de.__staleWhileFetching:this.#S(u,"fetch"):(v.status&&(v.status.fetchUpdated=!0),this.set(u,C,y.options))),C},S=C=>(v.status&&(v.status.fetchRejected=!0,v.status.fetchError=C),I(C)),I=C=>{let{aborted:W}=_.signal,F=W&&v.allowStaleOnFetchAbort,j=F||v.allowStaleOnFetchRejection,de=j||v.noDeleteOnFetchRejection,X=O;if(this.#e[o]===O&&(!de||X.__staleWhileFetching===void 0?this.#S(u,"fetch"):F||(this.#e[o]=X.__staleWhileFetching)),j)return v.status&&X.__staleWhileFetching!==void 0&&(v.status.returnedStale=!0),X.__staleWhileFetching;if(X.__returned===X)throw C},P=(C,W)=>{let F=this.#M?.(u,g,y);F&&F instanceof Promise&&F.then(j=>C(j===void 0?void 0:j),W),_.signal.addEventListener("abort",()=>{(!v.ignoreFetchAbort||v.allowStaleOnFetchAbort)&&(C(void 0),v.allowStaleOnFetchAbort&&(C=j=>T(j,!0)))})};v.status&&(v.status.fetchDispatched=!0);let O=new Promise(P).then(T,S),R=Object.assign(O,{__abortController:_,__staleWhileFetching:g,__returned:void 0});return o===void 0?(this.set(u,R,{...y.options,status:void 0}),o=this.#r.get(u)):this.#e[o]=R,R}#t(u){if(!this.#A)return!1;let o=u;return!!o&&o instanceof Promise&&o.hasOwnProperty("__staleWhileFetching")&&o.__abortController instanceof t}async fetch(u,o={}){let{allowStale:v=this.allowStale,updateAgeOnGet:w=this.updateAgeOnGet,noDeleteOnStaleGet:g=this.noDeleteOnStaleGet,ttl:_=this.ttl,noDisposeOnSet:k=this.noDisposeOnSet,size:y=0,sizeCalculation:T=this.sizeCalculation,noUpdateTTL:S=this.noUpdateTTL,noDeleteOnFetchRejection:I=this.noDeleteOnFetchRejection,allowStaleOnFetchRejection:P=this.allowStaleOnFetchRejection,ignoreFetchAbort:O=this.ignoreFetchAbort,allowStaleOnFetchAbort:R=this.allowStaleOnFetchAbort,context:C,forceRefresh:W=!1,status:F,signal:j}=o;if(!this.#A)return F&&(F.fetch="get"),this.get(u,{allowStale:v,updateAgeOnGet:w,noDeleteOnStaleGet:g,status:F});let de={allowStale:v,updateAgeOnGet:w,noDeleteOnStaleGet:g,ttl:_,noDisposeOnSet:k,size:y,sizeCalculation:T,noUpdateTTL:S,noDeleteOnFetchRejection:I,allowStaleOnFetchRejection:P,allowStaleOnFetchAbort:R,ignoreFetchAbort:O,status:F,signal:j},X=this.#r.get(u);if(X===void 0){F&&(F.fetch="miss");let K=this.#R(u,X,de,C);return K.__returned=K}else{let K=this.#e[X];if(this.#t(K)){let N=v&&K.__staleWhileFetching!==void 0;return F&&(F.fetch="inflight",N&&(F.returnedStale=!0)),N?K.__staleWhileFetching:K.__returned=K}let ie=this.#f(X);if(!W&&!ie)return F&&(F.fetch="hit"),this.#C(X),w&&this.#I(X),F&&this.#T(F,X),K;let D=this.#R(u,X,de,C),Z=D.__staleWhileFetching!==void 0&&v;return F&&(F.fetch=ie?"stale":"refresh",Z&&ie&&(F.returnedStale=!0)),Z?D.__staleWhileFetching:D.__returned=D}}async forceFetch(u,o={}){let v=await this.fetch(u,o);if(v===void 0)throw new Error("fetch() returned undefined");return v}memo(u,o={}){let v=this.#P;if(!v)throw new Error("no memoMethod provided to constructor");let{context:w,forceRefresh:g,..._}=o,k=this.get(u,_);if(!g&&k!==void 0)return k;let y=v(u,k,{options:_,context:w});return this.set(u,y,_),y}get(u,o={}){let{allowStale:v=this.allowStale,updateAgeOnGet:w=this.updateAgeOnGet,noDeleteOnStaleGet:g=this.noDeleteOnStaleGet,status:_}=o,k=this.#r.get(u);if(k!==void 0){let y=this.#e[k],T=this.#t(y);return _&&this.#T(_,k),this.#f(k)?(_&&(_.get="stale"),T?(_&&v&&y.__staleWhileFetching!==void 0&&(_.returnedStale=!0),v?y.__staleWhileFetching:void 0):(g||this.#S(u,"expire"),_&&v&&(_.returnedStale=!0),v?y:void 0)):(_&&(_.get="hit"),T?y.__staleWhileFetching:(this.#C(k),w&&this.#I(k),y))}else _&&(_.get="miss")}#F(u,o){this.#p[o]=u,this.#c[u]=o}#C(u){u!==this.#i&&(u===this.#a?this.#a=this.#c[u]:this.#F(this.#p[u],this.#c[u]),this.#F(this.#i,u),this.#i=u)}delete(u){return this.#S(u,"delete")}#S(u,o){let v=!1;if(this.#s!==0){let w=this.#r.get(u);if(w!==void 0)if(v=!0,this.#s===1)this.#B(o);else{this.#E(w);let g=this.#e[w];if(this.#t(g)?g.__abortController.abort(new Error("deleted")):(this.#_||this.#d)&&(this.#_&&this.#m?.(g,u,o),this.#d&&this.#o?.push([g,u,o])),this.#r.delete(u),this.#n[w]=void 0,this.#e[w]=void 0,w===this.#i)this.#i=this.#p[w];else if(w===this.#a)this.#a=this.#c[w];else{let _=this.#p[w];this.#c[_]=this.#c[w];let k=this.#c[w];this.#p[k]=this.#p[w]}this.#s--,this.#v.push(w)}}if(this.#d&&this.#o?.length){let w=this.#o,g;for(;g=w?.shift();)this.#g?.(...g)}return v}clear(){return this.#B("delete")}#B(u){for(let o of this.#x({allowStale:!0})){let v=this.#e[o];if(this.#t(v))v.__abortController.abort(new Error("deleted"));else{let w=this.#n[o];this.#_&&this.#m?.(v,w,u),this.#d&&this.#o?.push([v,w,u])}}if(this.#r.clear(),this.#e.fill(void 0),this.#n.fill(void 0),this.#h&&this.#w&&(this.#h.fill(0),this.#w.fill(0)),this.#y&&this.#y.fill(0),this.#a=0,this.#i=0,this.#v.length=0,this.#b=0,this.#s=0,this.#d&&this.#o){let o=this.#o,v;for(;v=o?.shift();)this.#g?.(...v)}}};c.LRUCache=h}),Nt=ye(c=>{he(),me(),fe(),Object.defineProperty(c,"t",{value:!0}),c.ContainerIterator=c.Container=c.Base=void 0;var f=class{constructor(d=0){this.iteratorType=d}equals(d){return this.o===d.o}};c.ContainerIterator=f;var a=class{constructor(){this.i=0}get length(){return this.i}size(){return this.i}empty(){return this.i===0}};c.Base=a;var l=class extends a{};c.Container=l}),Nc=ye(c=>{he(),me(),fe(),Object.defineProperty(c,"t",{value:!0}),c.default=void 0;var f=Nt(),a=class extends f.Base{constructor(d=[]){super(),this.S=[];let t=this;d.forEach(function(n){t.push(n)})}clear(){this.i=0,this.S=[]}push(d){return this.S.push(d),this.i+=1,this.i}pop(){if(this.i!==0)return this.i-=1,this.S.pop()}top(){return this.S[this.i-1]}},l=a;c.default=l}),Rc=ye(c=>{he(),me(),fe(),Object.defineProperty(c,"t",{value:!0}),c.default=void 0;var f=Nt(),a=class extends f.Base{constructor(d=[]){super(),this.j=0,this.q=[];let t=this;d.forEach(function(n){t.push(n)})}clear(){this.q=[],this.i=this.j=0}push(d){let t=this.q.length;if(this.j/t>.5&&this.j+this.i>=t&&t>4096){let n=this.i;for(let r=0;r<n;++r)this.q[r]=this.q[this.j+r];this.j=0,this.q[this.i]=d}else this.q[this.j+this.i]=d;return++this.i}pop(){if(this.i===0)return;let d=this.q[this.j++];return this.i-=1,d}front(){if(this.i!==0)return this.q[this.j]}},l=a;c.default=l}),Uc=ye(c=>{he(),me(),fe(),Object.defineProperty(c,"t",{value:!0}),c.default=void 0;var f=Nt(),a=class extends f.Base{constructor(d=[],t=function(r,e){return r>e?-1:r<e?1:0},n=!0){if(super(),this.v=t,Array.isArray(d))this.C=n?[...d]:d;else{this.C=[];let e=this;d.forEach(function(s){e.C.push(s)})}this.i=this.C.length;let r=this.i>>1;for(let e=this.i-1>>1;e>=0;--e)this.k(e,r)}m(d){let t=this.C[d];for(;d>0;){let n=d-1>>1,r=this.C[n];if(this.v(r,t)<=0)break;this.C[d]=r,d=n}this.C[d]=t}k(d,t){let n=this.C[d];for(;d<t;){let r=d<<1|1,e=r+1,s=this.C[r];if(e<this.i&&this.v(s,this.C[e])>0&&(r=e,s=this.C[e]),this.v(s,n)>=0)break;this.C[d]=s,d=r}this.C[d]=n}clear(){this.i=0,this.C.length=0}push(d){this.C.push(d),this.m(this.i),this.i+=1}pop(){if(this.i===0)return;let d=this.C[0],t=this.C.pop();return this.i-=1,this.i&&(this.C[0]=t,this.k(0,this.i>>1)),d}top(){return this.C[0]}find(d){return this.C.indexOf(d)>=0}remove(d){let t=this.C.indexOf(d);return t<0?!1:(t===0?this.pop():t===this.i-1?(this.C.pop(),this.i-=1):(this.C.splice(t,1,this.C.pop()),this.i-=1,this.m(t),this.k(t,this.i>>1)),!0)}updateItem(d){let t=this.C.indexOf(d);return t<0?!1:(this.m(t),this.k(t,this.i>>1),!0)}toArray(){return[...this.C]}},l=a;c.default=l}),vi=ye(c=>{he(),me(),fe(),Object.defineProperty(c,"t",{value:!0}),c.default=void 0;var f=Nt(),a=class extends f.Container{},l=a;c.default=l}),Rt=ye(c=>{he(),me(),fe(),Object.defineProperty(c,"t",{value:!0}),c.throwIteratorAccessError=f;function f(){throw new RangeError("Iterator access denied!")}}),Ca=ye(c=>{he(),me(),fe(),Object.defineProperty(c,"t",{value:!0}),c.RandomIterator=void 0;var f=Nt(),a=Rt(),l=class extends f.ContainerIterator{constructor(d,t){super(t),this.o=d,this.iteratorType===0?(this.pre=function(){return this.o===0&&(0,a.throwIteratorAccessError)(),this.o-=1,this},this.next=function(){return this.o===this.container.size()&&(0,a.throwIteratorAccessError)(),this.o+=1,this}):(this.pre=function(){return this.o===this.container.size()-1&&(0,a.throwIteratorAccessError)(),this.o+=1,this},this.next=function(){return this.o===-1&&(0,a.throwIteratorAccessError)(),this.o-=1,this})}get pointer(){return this.container.getElementByPos(this.o)}set pointer(d){this.container.setElementByPos(this.o,d)}};c.RandomIterator=l}),Lc=ye(c=>{he(),me(),fe(),Object.defineProperty(c,"t",{value:!0}),c.default=void 0;var f=l(vi()),a=Ca();function l(r){return r&&r.t?r:{default:r}}var d=class Ma extends a.RandomIterator{constructor(e,s,i){super(e,i),this.container=s}copy(){return new Ma(this.o,this.container,this.iteratorType)}},t=class extends f.default{constructor(r=[],e=!0){if(super(),Array.isArray(r))this.J=e?[...r]:r,this.i=r.length;else{this.J=[];let s=this;r.forEach(function(i){s.pushBack(i)})}}clear(){this.i=0,this.J.length=0}begin(){return new d(0,this)}end(){return new d(this.i,this)}rBegin(){return new d(this.i-1,this,1)}rEnd(){return new d(-1,this,1)}front(){return this.J[0]}back(){return this.J[this.i-1]}getElementByPos(r){if(r<0||r>this.i-1)throw new RangeError;return this.J[r]}eraseElementByPos(r){if(r<0||r>this.i-1)throw new RangeError;return this.J.splice(r,1),this.i-=1,this.i}eraseElementByValue(r){let e=0;for(let s=0;s<this.i;++s)this.J[s]!==r&&(this.J[e++]=this.J[s]);return this.i=this.J.length=e,this.i}eraseElementByIterator(r){let e=r.o;return r=r.next(),this.eraseElementByPos(e),r}pushBack(r){return this.J.push(r),this.i+=1,this.i}popBack(){if(this.i!==0)return this.i-=1,this.J.pop()}setElementByPos(r,e){if(r<0||r>this.i-1)throw new RangeError;this.J[r]=e}insert(r,e,s=1){if(r<0||r>this.i)throw new RangeError;return this.J.splice(r,0,...new Array(s).fill(e)),this.i+=s,this.i}find(r){for(let e=0;e<this.i;++e)if(this.J[e]===r)return new d(e,this);return this.end()}reverse(){this.J.reverse()}unique(){let r=1;for(let e=1;e<this.i;++e)this.J[e]!==this.J[e-1]&&(this.J[r++]=this.J[e]);return this.i=this.J.length=r,this.i}sort(r){this.J.sort(r)}forEach(r){for(let e=0;e<this.i;++e)r(this.J[e],e,this)}[Symbol.iterator](){return(function*(){yield*this.J}).bind(this)()}},n=t;c.default=n}),qc=ye(c=>{he(),me(),fe(),Object.defineProperty(c,"t",{value:!0}),c.default=void 0;var f=d(vi()),a=Nt(),l=Rt();function d(e){return e&&e.t?e:{default:e}}var t=class Pa extends a.ContainerIterator{constructor(s,i,m,h){super(h),this.o=s,this.h=i,this.container=m,this.iteratorType===0?(this.pre=function(){return this.o.L===this.h&&(0,l.throwIteratorAccessError)(),this.o=this.o.L,this},this.next=function(){return this.o===this.h&&(0,l.throwIteratorAccessError)(),this.o=this.o.B,this}):(this.pre=function(){return this.o.B===this.h&&(0,l.throwIteratorAccessError)(),this.o=this.o.B,this},this.next=function(){return this.o===this.h&&(0,l.throwIteratorAccessError)(),this.o=this.o.L,this})}get pointer(){return this.o===this.h&&(0,l.throwIteratorAccessError)(),this.o.l}set pointer(s){this.o===this.h&&(0,l.throwIteratorAccessError)(),this.o.l=s}copy(){return new Pa(this.o,this.h,this.container,this.iteratorType)}},n=class extends f.default{constructor(e=[]){super(),this.h={},this.p=this._=this.h.L=this.h.B=this.h;let s=this;e.forEach(function(i){s.pushBack(i)})}V(e){let{L:s,B:i}=e;s.B=i,i.L=s,e===this.p&&(this.p=i),e===this._&&(this._=s),this.i-=1}G(e,s){let i=s.B,m={l:e,L:s,B:i};s.B=m,i.L=m,s===this.h&&(this.p=m),i===this.h&&(this._=m),this.i+=1}clear(){this.i=0,this.p=this._=this.h.L=this.h.B=this.h}begin(){return new t(this.p,this.h,this)}end(){return new t(this.h,this.h,this)}rBegin(){return new t(this._,this.h,this,1)}rEnd(){return new t(this.h,this.h,this,1)}front(){return this.p.l}back(){return this._.l}getElementByPos(e){if(e<0||e>this.i-1)throw new RangeError;let s=this.p;for(;e--;)s=s.B;return s.l}eraseElementByPos(e){if(e<0||e>this.i-1)throw new RangeError;let s=this.p;for(;e--;)s=s.B;return this.V(s),this.i}eraseElementByValue(e){let s=this.p;for(;s!==this.h;)s.l===e&&this.V(s),s=s.B;return this.i}eraseElementByIterator(e){let s=e.o;return s===this.h&&(0,l.throwIteratorAccessError)(),e=e.next(),this.V(s),e}pushBack(e){return this.G(e,this._),this.i}popBack(){if(this.i===0)return;let e=this._.l;return this.V(this._),e}pushFront(e){return this.G(e,this.h),this.i}popFront(){if(this.i===0)return;let e=this.p.l;return this.V(this.p),e}setElementByPos(e,s){if(e<0||e>this.i-1)throw new RangeError;let i=this.p;for(;e--;)i=i.B;i.l=s}insert(e,s,i=1){if(e<0||e>this.i)throw new RangeError;if(i<=0)return this.i;if(e===0)for(;i--;)this.pushFront(s);else if(e===this.i)for(;i--;)this.pushBack(s);else{let m=this.p;for(let b=1;b<e;++b)m=m.B;let h=m.B;for(this.i+=i;i--;)m.B={l:s,L:m},m.B.L=m,m=m.B;m.B=h,h.L=m}return this.i}find(e){let s=this.p;for(;s!==this.h;){if(s.l===e)return new t(s,this.h,this);s=s.B}return this.end()}reverse(){if(this.i<=1)return;let e=this.p,s=this._,i=0;for(;i<<1<this.i;){let m=e.l;e.l=s.l,s.l=m,e=e.B,s=s.L,i+=1}}unique(){if(this.i<=1)return this.i;let e=this.p;for(;e!==this.h;){let s=e;for(;s.B!==this.h&&s.l===s.B.l;)s=s.B,this.i-=1;e.B=s.B,e.B.L=e,e=e.B}return this.i}sort(e){if(this.i<=1)return;let s=[];this.forEach(function(m){s.push(m)}),s.sort(e);let i=this.p;s.forEach(function(m){i.l=m,i=i.B})}merge(e){let s=this;if(this.i===0)e.forEach(function(i){s.pushBack(i)});else{let i=this.p;e.forEach(function(m){for(;i!==s.h&&i.l<=m;)i=i.B;s.G(m,i.L)})}return this.i}forEach(e){let s=this.p,i=0;for(;s!==this.h;)e(s.l,i++,this),s=s.B}[Symbol.iterator](){return(function*(){if(this.i===0)return;let e=this.p;for(;e!==this.h;)yield e.l,e=e.B}).bind(this)()}},r=n;c.default=r}),jc=ye(c=>{he(),me(),fe(),Object.defineProperty(c,"t",{value:!0}),c.default=void 0;var f=l(vi()),a=Ca();function l(r){return r&&r.t?r:{default:r}}var d=class Oa extends a.RandomIterator{constructor(e,s,i){super(e,i),this.container=s}copy(){return new Oa(this.o,this.container,this.iteratorType)}},t=class extends f.default{constructor(r=[],e=4096){super(),this.j=0,this.D=0,this.R=0,this.N=0,this.P=0,this.A=[];let s=(()=>{if(typeof r.length=="number")return r.length;if(typeof r.size=="number")return r.size;if(typeof r.size=="function")return r.size();throw new TypeError("Cannot get the length or size of the container")})();this.F=e,this.P=Math.max(Math.ceil(s/this.F),1);for(let h=0;h<this.P;++h)this.A.push(new Array(this.F));let i=Math.ceil(s/this.F);this.j=this.R=(this.P>>1)-(i>>1),this.D=this.N=this.F-s%this.F>>1;let m=this;r.forEach(function(h){m.pushBack(h)})}T(){let r=[],e=Math.max(this.P>>1,1);for(let s=0;s<e;++s)r[s]=new Array(this.F);for(let s=this.j;s<this.P;++s)r[r.length]=this.A[s];for(let s=0;s<this.R;++s)r[r.length]=this.A[s];r[r.length]=[...this.A[this.R]],this.j=e,this.R=r.length-1;for(let s=0;s<e;++s)r[r.length]=new Array(this.F);this.A=r,this.P=r.length}O(r){let e=this.D+r+1,s=e%this.F,i=s-1,m=this.j+(e-s)/this.F;return s===0&&(m-=1),m%=this.P,i<0&&(i+=this.F),{curNodeBucketIndex:m,curNodePointerIndex:i}}clear(){this.A=[new Array(this.F)],this.P=1,this.j=this.R=this.i=0,this.D=this.N=this.F>>1}begin(){return new d(0,this)}end(){return new d(this.i,this)}rBegin(){return new d(this.i-1,this,1)}rEnd(){return new d(-1,this,1)}front(){if(this.i!==0)return this.A[this.j][this.D]}back(){if(this.i!==0)return this.A[this.R][this.N]}pushBack(r){return this.i&&(this.N<this.F-1?this.N+=1:this.R<this.P-1?(this.R+=1,this.N=0):(this.R=0,this.N=0),this.R===this.j&&this.N===this.D&&this.T()),this.i+=1,this.A[this.R][this.N]=r,this.i}popBack(){if(this.i===0)return;let r=this.A[this.R][this.N];return this.i!==1&&(this.N>0?this.N-=1:this.R>0?(this.R-=1,this.N=this.F-1):(this.R=this.P-1,this.N=this.F-1)),this.i-=1,r}pushFront(r){return this.i&&(this.D>0?this.D-=1:this.j>0?(this.j-=1,this.D=this.F-1):(this.j=this.P-1,this.D=this.F-1),this.j===this.R&&this.D===this.N&&this.T()),this.i+=1,this.A[this.j][this.D]=r,this.i}popFront(){if(this.i===0)return;let r=this.A[this.j][this.D];return this.i!==1&&(this.D<this.F-1?this.D+=1:this.j<this.P-1?(this.j+=1,this.D=0):(this.j=0,this.D=0)),this.i-=1,r}getElementByPos(r){if(r<0||r>this.i-1)throw new RangeError;let{curNodeBucketIndex:e,curNodePointerIndex:s}=this.O(r);return this.A[e][s]}setElementByPos(r,e){if(r<0||r>this.i-1)throw new RangeError;let{curNodeBucketIndex:s,curNodePointerIndex:i}=this.O(r);this.A[s][i]=e}insert(r,e,s=1){if(r<0||r>this.i)throw new RangeError;if(r===0)for(;s--;)this.pushFront(e);else if(r===this.i)for(;s--;)this.pushBack(e);else{let i=[];for(let m=r;m<this.i;++m)i.push(this.getElementByPos(m));this.cut(r-1);for(let m=0;m<s;++m)this.pushBack(e);for(let m=0;m<i.length;++m)this.pushBack(i[m])}return this.i}cut(r){if(r<0)return this.clear(),0;let{curNodeBucketIndex:e,curNodePointerIndex:s}=this.O(r);return this.R=e,this.N=s,this.i=r+1,this.i}eraseElementByPos(r){if(r<0||r>this.i-1)throw new RangeError;if(r===0)this.popFront();else if(r===this.i-1)this.popBack();else{let e=[];for(let i=r+1;i<this.i;++i)e.push(this.getElementByPos(i));this.cut(r),this.popBack();let s=this;e.forEach(function(i){s.pushBack(i)})}return this.i}eraseElementByValue(r){if(this.i===0)return 0;let e=[];for(let i=0;i<this.i;++i){let m=this.getElementByPos(i);m!==r&&e.push(m)}let s=e.length;for(let i=0;i<s;++i)this.setElementByPos(i,e[i]);return this.cut(s-1)}eraseElementByIterator(r){let e=r.o;return this.eraseElementByPos(e),r=r.next(),r}find(r){for(let e=0;e<this.i;++e)if(this.getElementByPos(e)===r)return new d(e,this);return this.end()}reverse(){let r=0,e=this.i-1;for(;r<e;){let s=this.getElementByPos(r);this.setElementByPos(r,this.getElementByPos(e)),this.setElementByPos(e,s),r+=1,e-=1}}unique(){if(this.i<=1)return this.i;let r=1,e=this.getElementByPos(0);for(let s=1;s<this.i;++s){let i=this.getElementByPos(s);i!==e&&(e=i,this.setElementByPos(r++,i))}for(;this.i>r;)this.popBack();return this.i}sort(r){let e=[];for(let s=0;s<this.i;++s)e.push(this.getElementByPos(s));e.sort(r);for(let s=0;s<this.i;++s)this.setElementByPos(s,e[s])}shrinkToFit(){if(this.i===0)return;let r=[];this.forEach(function(e){r.push(e)}),this.P=Math.max(Math.ceil(this.i/this.F),1),this.i=this.j=this.R=this.D=this.N=0,this.A=[];for(let e=0;e<this.P;++e)this.A.push(new Array(this.F));for(let e=0;e<r.length;++e)this.pushBack(r[e])}forEach(r){for(let e=0;e<this.i;++e)r(this.getElementByPos(e),e,this)}[Symbol.iterator](){return(function*(){for(let r=0;r<this.i;++r)yield this.getElementByPos(r)}).bind(this)()}},n=t;c.default=n}),Fc=ye(c=>{he(),me(),fe(),Object.defineProperty(c,"t",{value:!0}),c.TreeNodeEnableIndex=c.TreeNode=void 0;var f=class{constructor(l,d){this.ee=1,this.u=void 0,this.l=void 0,this.U=void 0,this.W=void 0,this.tt=void 0,this.u=l,this.l=d}L(){let l=this;if(l.ee===1&&l.tt.tt===l)l=l.W;else if(l.U)for(l=l.U;l.W;)l=l.W;else{let d=l.tt;for(;d.U===l;)l=d,d=l.tt;l=d}return l}B(){let l=this;if(l.W){for(l=l.W;l.U;)l=l.U;return l}else{let d=l.tt;for(;d.W===l;)l=d,d=l.tt;return l.W!==d?d:l}}te(){let l=this.tt,d=this.W,t=d.U;return l.tt===this?l.tt=d:l.U===this?l.U=d:l.W=d,d.tt=l,d.U=this,this.tt=d,this.W=t,t&&(t.tt=this),d}se(){let l=this.tt,d=this.U,t=d.W;return l.tt===this?l.tt=d:l.U===this?l.U=d:l.W=d,d.tt=l,d.W=this,this.tt=d,this.U=t,t&&(t.tt=this),d}};c.TreeNode=f;var a=class extends f{constructor(){super(...arguments),this.rt=1}te(){let l=super.te();return this.ie(),l.ie(),l}se(){let l=super.se();return this.ie(),l.ie(),l}ie(){this.rt=1,this.U&&(this.rt+=this.U.rt),this.W&&(this.rt+=this.W.rt)}};c.TreeNodeEnableIndex=a}),Na=ye(c=>{he(),me(),fe(),Object.defineProperty(c,"t",{value:!0}),c.default=void 0;var f=Fc(),a=Nt(),l=Rt(),d=class extends a.Container{constructor(n=function(e,s){return e<s?-1:e>s?1:0},r=!1){super(),this.Y=void 0,this.v=n,r?(this.re=f.TreeNodeEnableIndex,this.M=function(e,s,i){let m=this.ne(e,s,i);if(m){let h=m.tt;for(;h!==this.h;)h.rt+=1,h=h.tt;let b=this.he(m);if(b){let{parentNode:u,grandParent:o,curNode:v}=b;u.ie(),o.ie(),v.ie()}}return this.i},this.V=function(e){let s=this.fe(e);for(;s!==this.h;)s.rt-=1,s=s.tt}):(this.re=f.TreeNode,this.M=function(e,s,i){let m=this.ne(e,s,i);return m&&this.he(m),this.i},this.V=this.fe),this.h=new this.re}X(n,r){let e=this.h;for(;n;){let s=this.v(n.u,r);if(s<0)n=n.W;else if(s>0)e=n,n=n.U;else return n}return e}Z(n,r){let e=this.h;for(;n;)this.v(n.u,r)<=0?n=n.W:(e=n,n=n.U);return e}$(n,r){let e=this.h;for(;n;){let s=this.v(n.u,r);if(s<0)e=n,n=n.W;else if(s>0)n=n.U;else return n}return e}rr(n,r){let e=this.h;for(;n;)this.v(n.u,r)<0?(e=n,n=n.W):n=n.U;return e}ue(n){for(;;){let r=n.tt;if(r===this.h)return;if(n.ee===1){n.ee=0;return}if(n===r.U){let e=r.W;if(e.ee===1)e.ee=0,r.ee=1,r===this.Y?this.Y=r.te():r.te();else if(e.W&&e.W.ee===1){e.ee=r.ee,r.ee=0,e.W.ee=0,r===this.Y?this.Y=r.te():r.te();return}else e.U&&e.U.ee===1?(e.ee=1,e.U.ee=0,e.se()):(e.ee=1,n=r)}else{let e=r.U;if(e.ee===1)e.ee=0,r.ee=1,r===this.Y?this.Y=r.se():r.se();else if(e.U&&e.U.ee===1){e.ee=r.ee,r.ee=0,e.U.ee=0,r===this.Y?this.Y=r.se():r.se();return}else e.W&&e.W.ee===1?(e.ee=1,e.W.ee=0,e.te()):(e.ee=1,n=r)}}}fe(n){if(this.i===1)return this.clear(),this.h;let r=n;for(;r.U||r.W;){if(r.W)for(r=r.W;r.U;)r=r.U;else r=r.U;[n.u,r.u]=[r.u,n.u],[n.l,r.l]=[r.l,n.l],n=r}this.h.U===r?this.h.U=r.tt:this.h.W===r&&(this.h.W=r.tt),this.ue(r);let e=r.tt;return r===e.U?e.U=void 0:e.W=void 0,this.i-=1,this.Y.ee=0,e}oe(n,r){return n===void 0?!1:this.oe(n.U,r)||r(n)?!0:this.oe(n.W,r)}he(n){for(;;){let r=n.tt;if(r.ee===0)return;let e=r.tt;if(r===e.U){let s=e.W;if(s&&s.ee===1){if(s.ee=r.ee=0,e===this.Y)return;e.ee=1,n=e;continue}else if(n===r.W){if(n.ee=0,n.U&&(n.U.tt=r),n.W&&(n.W.tt=e),r.W=n.U,e.U=n.W,n.U=r,n.W=e,e===this.Y)this.Y=n,this.h.tt=n;else{let i=e.tt;i.U===e?i.U=n:i.W=n}return n.tt=e.tt,r.tt=n,e.tt=n,e.ee=1,{parentNode:r,grandParent:e,curNode:n}}else r.ee=0,e===this.Y?this.Y=e.se():e.se(),e.ee=1}else{let s=e.U;if(s&&s.ee===1){if(s.ee=r.ee=0,e===this.Y)return;e.ee=1,n=e;continue}else if(n===r.U){if(n.ee=0,n.U&&(n.U.tt=e),n.W&&(n.W.tt=r),e.W=n.U,r.U=n.W,n.U=e,n.W=r,e===this.Y)this.Y=n,this.h.tt=n;else{let i=e.tt;i.U===e?i.U=n:i.W=n}return n.tt=e.tt,r.tt=n,e.tt=n,e.ee=1,{parentNode:r,grandParent:e,curNode:n}}else r.ee=0,e===this.Y?this.Y=e.te():e.te(),e.ee=1}return}}ne(n,r,e){if(this.Y===void 0){this.i+=1,this.Y=new this.re(n,r),this.Y.ee=0,this.Y.tt=this.h,this.h.tt=this.Y,this.h.U=this.Y,this.h.W=this.Y;return}let s,i=this.h.U,m=this.v(i.u,n);if(m===0){i.l=r;return}else if(m>0)i.U=new this.re(n,r),i.U.tt=i,s=i.U,this.h.U=s;else{let h=this.h.W,b=this.v(h.u,n);if(b===0){h.l=r;return}else if(b<0)h.W=new this.re(n,r),h.W.tt=h,s=h.W,this.h.W=s;else{if(e!==void 0){let u=e.o;if(u!==this.h){let o=this.v(u.u,n);if(o===0){u.l=r;return}else if(o>0){let v=u.L(),w=this.v(v.u,n);if(w===0){v.l=r;return}else w<0&&(s=new this.re(n,r),v.W===void 0?(v.W=s,s.tt=v):(u.U=s,s.tt=u))}}}if(s===void 0)for(s=this.Y;;){let u=this.v(s.u,n);if(u>0){if(s.U===void 0){s.U=new this.re(n,r),s.U.tt=s,s=s.U;break}s=s.U}else if(u<0){if(s.W===void 0){s.W=new this.re(n,r),s.W.tt=s,s=s.W;break}s=s.W}else{s.l=r;return}}}}return this.i+=1,s}I(n,r){for(;n;){let e=this.v(n.u,r);if(e<0)n=n.W;else if(e>0)n=n.U;else return n}return n||this.h}clear(){this.i=0,this.Y=void 0,this.h.tt=void 0,this.h.U=this.h.W=void 0}updateKeyByIterator(n,r){let e=n.o;if(e===this.h&&(0,l.throwIteratorAccessError)(),this.i===1)return e.u=r,!0;if(e===this.h.U)return this.v(e.B().u,r)>0?(e.u=r,!0):!1;if(e===this.h.W)return this.v(e.L().u,r)<0?(e.u=r,!0):!1;let s=e.L().u;if(this.v(s,r)>=0)return!1;let i=e.B().u;return this.v(i,r)<=0?!1:(e.u=r,!0)}eraseElementByPos(n){if(n<0||n>this.i-1)throw new RangeError;let r=0,e=this;return this.oe(this.Y,function(s){return n===r?(e.V(s),!0):(r+=1,!1)}),this.i}eraseElementByKey(n){if(this.i===0)return!1;let r=this.I(this.Y,n);return r===this.h?!1:(this.V(r),!0)}eraseElementByIterator(n){let r=n.o;r===this.h&&(0,l.throwIteratorAccessError)();let e=r.W===void 0;return n.iteratorType===0?e&&n.next():(!e||r.U===void 0)&&n.next(),this.V(r),n}forEach(n){let r=0;for(let e of this)n(e,r++,this)}getElementByPos(n){if(n<0||n>this.i-1)throw new RangeError;let r,e=0;for(let s of this){if(e===n){r=s;break}e+=1}return r}getHeight(){if(this.i===0)return 0;let n=function(r){return r?Math.max(n(r.U),n(r.W))+1:0};return n(this.Y)}},t=d;c.default=t}),Ra=ye(c=>{he(),me(),fe(),Object.defineProperty(c,"t",{value:!0}),c.default=void 0;var f=Nt(),a=Rt(),l=class extends f.ContainerIterator{constructor(t,n,r){super(r),this.o=t,this.h=n,this.iteratorType===0?(this.pre=function(){return this.o===this.h.U&&(0,a.throwIteratorAccessError)(),this.o=this.o.L(),this},this.next=function(){return this.o===this.h&&(0,a.throwIteratorAccessError)(),this.o=this.o.B(),this}):(this.pre=function(){return this.o===this.h.W&&(0,a.throwIteratorAccessError)(),this.o=this.o.B(),this},this.next=function(){return this.o===this.h&&(0,a.throwIteratorAccessError)(),this.o=this.o.L(),this})}get index(){let t=this.o,n=this.h.tt;if(t===this.h)return n?n.rt-1:0;let r=0;for(t.U&&(r+=t.U.rt);t!==n;){let e=t.tt;t===e.W&&(r+=1,e.U&&(r+=e.U.rt)),t=e}return r}},d=l;c.default=d}),Bc=ye(c=>{he(),me(),fe(),Object.defineProperty(c,"t",{value:!0}),c.default=void 0;var f=d(Na()),a=d(Ra()),l=Rt();function d(e){return e&&e.t?e:{default:e}}var t=class Ua extends a.default{constructor(s,i,m,h){super(s,i,h),this.container=m}get pointer(){return this.o===this.h&&(0,l.throwIteratorAccessError)(),this.o.u}copy(){return new Ua(this.o,this.h,this.container,this.iteratorType)}},n=class extends f.default{constructor(e=[],s,i){super(s,i);let m=this;e.forEach(function(h){m.insert(h)})}*K(e){e!==void 0&&(yield*this.K(e.U),yield e.u,yield*this.K(e.W))}begin(){return new t(this.h.U||this.h,this.h,this)}end(){return new t(this.h,this.h,this)}rBegin(){return new t(this.h.W||this.h,this.h,this,1)}rEnd(){return new t(this.h,this.h,this,1)}front(){return this.h.U?this.h.U.u:void 0}back(){return this.h.W?this.h.W.u:void 0}insert(e,s){return this.M(e,void 0,s)}find(e){let s=this.I(this.Y,e);return new t(s,this.h,this)}lowerBound(e){let s=this.X(this.Y,e);return new t(s,this.h,this)}upperBound(e){let s=this.Z(this.Y,e);return new t(s,this.h,this)}reverseLowerBound(e){let s=this.$(this.Y,e);return new t(s,this.h,this)}reverseUpperBound(e){let s=this.rr(this.Y,e);return new t(s,this.h,this)}union(e){let s=this;return e.forEach(function(i){s.insert(i)}),this.i}[Symbol.iterator](){return this.K(this.Y)}},r=n;c.default=r}),Dc=ye(c=>{he(),me(),fe(),Object.defineProperty(c,"t",{value:!0}),c.default=void 0;var f=d(Na()),a=d(Ra()),l=Rt();function d(e){return e&&e.t?e:{default:e}}var t=class La extends a.default{constructor(s,i,m,h){super(s,i,h),this.container=m}get pointer(){this.o===this.h&&(0,l.throwIteratorAccessError)();let s=this;return new Proxy([],{get(i,m){if(m==="0")return s.o.u;if(m==="1")return s.o.l},set(i,m,h){if(m!=="1")throw new TypeError("props must be 1");return s.o.l=h,!0}})}copy(){return new La(this.o,this.h,this.container,this.iteratorType)}},n=class extends f.default{constructor(e=[],s,i){super(s,i);let m=this;e.forEach(function(h){m.setElement(h[0],h[1])})}*K(e){e!==void 0&&(yield*this.K(e.U),yield[e.u,e.l],yield*this.K(e.W))}begin(){return new t(this.h.U||this.h,this.h,this)}end(){return new t(this.h,this.h,this)}rBegin(){return new t(this.h.W||this.h,this.h,this,1)}rEnd(){return new t(this.h,this.h,this,1)}front(){if(this.i===0)return;let e=this.h.U;return[e.u,e.l]}back(){if(this.i===0)return;let e=this.h.W;return[e.u,e.l]}lowerBound(e){let s=this.X(this.Y,e);return new t(s,this.h,this)}upperBound(e){let s=this.Z(this.Y,e);return new t(s,this.h,this)}reverseLowerBound(e){let s=this.$(this.Y,e);return new t(s,this.h,this)}reverseUpperBound(e){let s=this.rr(this.Y,e);return new t(s,this.h,this)}setElement(e,s,i){return this.M(e,s,i)}find(e){let s=this.I(this.Y,e);return new t(s,this.h,this)}getElementByKey(e){return this.I(this.Y,e).l}union(e){let s=this;return e.forEach(function(i){s.setElement(i[0],i[1])}),this.i}[Symbol.iterator](){return this.K(this.Y)}},r=n;c.default=r}),qa=ye(c=>{he(),me(),fe(),Object.defineProperty(c,"t",{value:!0}),c.default=f;function f(a){let l=typeof a;return l==="object"&&a!==null||l==="function"}}),ja=ye(c=>{he(),me(),fe(),Object.defineProperty(c,"t",{value:!0}),c.HashContainerIterator=c.HashContainer=void 0;var f=Nt(),a=d(qa()),l=Rt();function d(r){return r&&r.t?r:{default:r}}var t=class extends f.ContainerIterator{constructor(r,e,s){super(s),this.o=r,this.h=e,this.iteratorType===0?(this.pre=function(){return this.o.L===this.h&&(0,l.throwIteratorAccessError)(),this.o=this.o.L,this},this.next=function(){return this.o===this.h&&(0,l.throwIteratorAccessError)(),this.o=this.o.B,this}):(this.pre=function(){return this.o.B===this.h&&(0,l.throwIteratorAccessError)(),this.o=this.o.B,this},this.next=function(){return this.o===this.h&&(0,l.throwIteratorAccessError)(),this.o=this.o.L,this})}};c.HashContainerIterator=t;var n=class extends f.Container{constructor(){super(),this.H=[],this.g={},this.HASH_TAG=Symbol("@@HASH_TAG"),Object.setPrototypeOf(this.g,null),this.h={},this.h.L=this.h.B=this.p=this._=this.h}V(r){let{L:e,B:s}=r;e.B=s,s.L=e,r===this.p&&(this.p=s),r===this._&&(this._=e),this.i-=1}M(r,e,s){s===void 0&&(s=(0,a.default)(r));let i;if(s){let m=r[this.HASH_TAG];if(m!==void 0)return this.H[m].l=e,this.i;Object.defineProperty(r,this.HASH_TAG,{value:this.H.length,configurable:!0}),i={u:r,l:e,L:this._,B:this.h},this.H.push(i)}else{let m=this.g[r];if(m)return m.l=e,this.i;i={u:r,l:e,L:this._,B:this.h},this.g[r]=i}return this.i===0?(this.p=i,this.h.B=i):this._.B=i,this._=i,this.h.L=i,++this.i}I(r,e){if(e===void 0&&(e=(0,a.default)(r)),e){let s=r[this.HASH_TAG];return s===void 0?this.h:this.H[s]}else return this.g[r]||this.h}clear(){let r=this.HASH_TAG;this.H.forEach(function(e){delete e.u[r]}),this.H=[],this.g={},Object.setPrototypeOf(this.g,null),this.i=0,this.p=this._=this.h.L=this.h.B=this.h}eraseElementByKey(r,e){let s;if(e===void 0&&(e=(0,a.default)(r)),e){let i=r[this.HASH_TAG];if(i===void 0)return!1;delete r[this.HASH_TAG],s=this.H[i],delete this.H[i]}else{if(s=this.g[r],s===void 0)return!1;delete this.g[r]}return this.V(s),!0}eraseElementByIterator(r){let e=r.o;return e===this.h&&(0,l.throwIteratorAccessError)(),this.V(e),r.next()}eraseElementByPos(r){if(r<0||r>this.i-1)throw new RangeError;let e=this.p;for(;r--;)e=e.B;return this.V(e),this.i}};c.HashContainer=n}),Wc=ye(c=>{he(),me(),fe(),Object.defineProperty(c,"t",{value:!0}),c.default=void 0;var f=ja(),a=Rt(),l=class Fa extends f.HashContainerIterator{constructor(r,e,s,i){super(r,e,i),this.container=s}get pointer(){return this.o===this.h&&(0,a.throwIteratorAccessError)(),this.o.u}copy(){return new Fa(this.o,this.h,this.container,this.iteratorType)}},d=class extends f.HashContainer{constructor(n=[]){super();let r=this;n.forEach(function(e){r.insert(e)})}begin(){return new l(this.p,this.h,this)}end(){return new l(this.h,this.h,this)}rBegin(){return new l(this._,this.h,this,1)}rEnd(){return new l(this.h,this.h,this,1)}front(){return this.p.u}back(){return this._.u}insert(n,r){return this.M(n,void 0,r)}getElementByPos(n){if(n<0||n>this.i-1)throw new RangeError;let r=this.p;for(;n--;)r=r.B;return r.u}find(n,r){let e=this.I(n,r);return new l(e,this.h,this)}forEach(n){let r=0,e=this.p;for(;e!==this.h;)n(e.u,r++,this),e=e.B}[Symbol.iterator](){return(function*(){let n=this.p;for(;n!==this.h;)yield n.u,n=n.B}).bind(this)()}},t=d;c.default=t}),Hc=ye(c=>{he(),me(),fe(),Object.defineProperty(c,"t",{value:!0}),c.default=void 0;var f=ja(),a=d(qa()),l=Rt();function d(e){return e&&e.t?e:{default:e}}var t=class Ba extends f.HashContainerIterator{constructor(s,i,m,h){super(s,i,h),this.container=m}get pointer(){this.o===this.h&&(0,l.throwIteratorAccessError)();let s=this;return new Proxy([],{get(i,m){if(m==="0")return s.o.u;if(m==="1")return s.o.l},set(i,m,h){if(m!=="1")throw new TypeError("props must be 1");return s.o.l=h,!0}})}copy(){return new Ba(this.o,this.h,this.container,this.iteratorType)}},n=class extends f.HashContainer{constructor(e=[]){super();let s=this;e.forEach(function(i){s.setElement(i[0],i[1])})}begin(){return new t(this.p,this.h,this)}end(){return new t(this.h,this.h,this)}rBegin(){return new t(this._,this.h,this,1)}rEnd(){return new t(this.h,this.h,this,1)}front(){if(this.i!==0)return[this.p.u,this.p.l]}back(){if(this.i!==0)return[this._.u,this._.l]}setElement(e,s,i){return this.M(e,s,i)}getElementByKey(e,s){if(s===void 0&&(s=(0,a.default)(e)),s){let m=e[this.HASH_TAG];return m!==void 0?this.H[m].l:void 0}let i=this.g[e];return i?i.l:void 0}getElementByPos(e){if(e<0||e>this.i-1)throw new RangeError;let s=this.p;for(;e--;)s=s.B;return[s.u,s.l]}find(e,s){let i=this.I(e,s);return new t(i,this.h,this)}forEach(e){let s=0,i=this.p;for(;i!==this.h;)e([i.u,i.l],s++,this),i=i.B}[Symbol.iterator](){return(function*(){let e=this.p;for(;e!==this.h;)yield[e.u,e.l],e=e.B}).bind(this)()}},r=n;c.default=r}),$c=ye(c=>{he(),me(),fe(),Object.defineProperty(c,"t",{value:!0}),Object.defineProperty(c,"Deque",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(c,"HashMap",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(c,"HashSet",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(c,"LinkList",{enumerable:!0,get:function(){return t.default}}),Object.defineProperty(c,"OrderedMap",{enumerable:!0,get:function(){return e.default}}),Object.defineProperty(c,"OrderedSet",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(c,"PriorityQueue",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(c,"Queue",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(c,"Stack",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(c,"Vector",{enumerable:!0,get:function(){return d.default}});var f=m(Nc()),a=m(Rc()),l=m(Uc()),d=m(Lc()),t=m(qc()),n=m(jc()),r=m(Bc()),e=m(Dc()),s=m(Wc()),i=m(Hc());function m(h){return h&&h.t?h:{default:h}}}),zc=ye((c,f)=>{he(),me(),fe();var a=$c().OrderedSet,l=Mt()("number-allocator:trace"),d=Mt()("number-allocator:error");function t(r,e){this.low=r,this.high=e}t.prototype.equals=function(r){return this.low===r.low&&this.high===r.high},t.prototype.compare=function(r){return this.low<r.low&&this.high<r.low?-1:r.low<this.low&&r.high<this.low?1:0};function n(r,e){if(!(this instanceof n))return new n(r,e);this.min=r,this.max=e,this.ss=new a([],(s,i)=>s.compare(i)),l("Create"),this.clear()}n.prototype.firstVacant=function(){return this.ss.size()===0?null:this.ss.front().low},n.prototype.alloc=function(){if(this.ss.size()===0)return l("alloc():empty"),null;let r=this.ss.begin(),e=r.pointer.low,s=r.pointer.high,i=e;return i+1<=s?this.ss.updateKeyByIterator(r,new t(e+1,s)):this.ss.eraseElementByPos(0),l("alloc():"+i),i},n.prototype.use=function(r){let e=new t(r,r),s=this.ss.lowerBound(e);if(!s.equals(this.ss.end())){let i=s.pointer.low,m=s.pointer.high;return s.pointer.equals(e)?(this.ss.eraseElementByIterator(s),l("use():"+r),!0):i>r?!1:i===r?(this.ss.updateKeyByIterator(s,new t(i+1,m)),l("use():"+r),!0):m===r?(this.ss.updateKeyByIterator(s,new t(i,m-1)),l("use():"+r),!0):(this.ss.updateKeyByIterator(s,new t(r+1,m)),this.ss.insert(new t(i,r-1)),l("use():"+r),!0)}return l("use():failed"),!1},n.prototype.free=function(r){if(r<this.min||r>this.max){d("free():"+r+" is out of range");return}let e=new t(r,r),s=this.ss.upperBound(e);if(s.equals(this.ss.end())){if(s.equals(this.ss.begin())){this.ss.insert(e);return}s.pre();let i=s.pointer.high;s.pointer.high+1===r?this.ss.updateKeyByIterator(s,new t(i,r)):this.ss.insert(e)}else if(s.equals(this.ss.begin()))if(r+1===s.pointer.low){let i=s.pointer.high;this.ss.updateKeyByIterator(s,new t(r,i))}else this.ss.insert(e);else{let i=s.pointer.low,m=s.pointer.high;s.pre();let h=s.pointer.low;s.pointer.high+1===r?r+1===i?(this.ss.eraseElementByIterator(s),this.ss.updateKeyByIterator(s,new t(h,m))):this.ss.updateKeyByIterator(s,new t(h,r)):r+1===i?(this.ss.eraseElementByIterator(s.next()),this.ss.insert(new t(r,m))):this.ss.insert(e)}l("free():"+r)},n.prototype.clear=function(){l("clear()"),this.ss.clear(),this.ss.insert(new t(this.min,this.max))},n.prototype.intervalCount=function(){return this.ss.size()},n.prototype.dump=function(){console.log("length:"+this.ss.size());for(let r of this.ss)console.log(r)},f.exports=n}),Da=ye((c,f)=>{he(),me(),fe();var a=zc();f.exports.NumberAllocator=a}),Kc=ye(c=>{he(),me(),fe(),Object.defineProperty(c,"__esModule",{value:!0});var f=Oc(),a=Da(),l=class{aliasToTopic;topicToAlias;max;numberAllocator;length;constructor(d){d>0&&(this.aliasToTopic=new f.LRUCache({max:d}),this.topicToAlias={},this.numberAllocator=new a.NumberAllocator(1,d),this.max=d,this.length=0)}put(d,t){if(t===0||t>this.max)return!1;let n=this.aliasToTopic.get(t);return n&&delete this.topicToAlias[n],this.aliasToTopic.set(t,d),this.topicToAlias[d]=t,this.numberAllocator.use(t),this.length=this.aliasToTopic.size,!0}getTopicByAlias(d){return this.aliasToTopic.get(d)}getAliasByTopic(d){let t=this.topicToAlias[d];return typeof t<"u"&&this.aliasToTopic.get(t),t}clear(){this.aliasToTopic.clear(),this.topicToAlias={},this.numberAllocator.clear(),this.length=0}getLruAlias(){return this.numberAllocator.firstVacant()||[...this.aliasToTopic.keys()][this.aliasToTopic.size-1]}};c.default=l}),Vc=ye(c=>{he(),me(),fe();var f=c&&c.__importDefault||function(n){return n&&n.__esModule?n:{default:n}};Object.defineProperty(c,"__esModule",{value:!0});var a=sr(),l=f(Kc()),d=an(),t=(n,r)=>{n.log("_handleConnack");let{options:e}=n,s=e.protocolVersion===5?r.reasonCode:r.returnCode;if(clearTimeout(n.connackTimer),delete n.topicAliasSend,r.properties){if(r.properties.topicAliasMaximum){if(r.properties.topicAliasMaximum>65535){n.emit("error",new Error("topicAliasMaximum from broker is out of range"));return}r.properties.topicAliasMaximum>0&&(n.topicAliasSend=new l.default(r.properties.topicAliasMaximum))}r.properties.serverKeepAlive&&e.keepalive&&(e.keepalive=r.properties.serverKeepAlive),r.properties.maximumPacketSize&&(e.properties||(e.properties={}),e.properties.maximumPacketSize=r.properties.maximumPacketSize)}if(s===0)n.reconnecting=!1,n._onConnect(r);else if(s>0){let i=new d.ErrorWithReasonCode(`Connection refused: ${a.ReasonCodes[s]}`,s);n.emit("error",i),n.options.reconnectOnConnackError&&n._cleanUp(!0)}};c.default=t}),Qc=ye(c=>{he(),me(),fe(),Object.defineProperty(c,"__esModule",{value:!0});var f=(a,l,d)=>{a.log("handling pubrel packet");let t=typeof d<"u"?d:a.noop,{messageId:n}=l,r={cmd:"pubcomp",messageId:n};a.incomingStore.get(l,(e,s)=>{e?a._sendPacket(r,t):(a.emit("message",s.topic,s.payload,s),a.handleMessage(s,i=>{if(i)return t(i);a.incomingStore.del(s,a.noop),a._sendPacket(r,t)}))})};c.default=f}),Gc=ye(c=>{he(),me(),fe();var f=c&&c.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(c,"__esModule",{value:!0});var a=f(Cc()),l=f(Pc()),d=f(Vc()),t=f(sr()),n=f(Qc()),r=(e,s,i)=>{let{options:m}=e;if(m.protocolVersion===5&&m.properties&&m.properties.maximumPacketSize&&m.properties.maximumPacketSize<s.length)return e.emit("error",new Error(`exceeding packets size ${s.cmd}`)),e.end({reasonCode:149,properties:{reasonString:"Maximum packet size was exceeded"}}),e;switch(e.log("_handlePacket :: emitting packetreceive"),e.emit("packetreceive",s),s.cmd){case"publish":(0,a.default)(e,s,i);break;case"puback":case"pubrec":case"pubcomp":case"suback":case"unsuback":e.reschedulePing(),(0,t.default)(e,s),i();break;case"pubrel":e.reschedulePing(),(0,n.default)(e,s,i);break;case"connack":(0,d.default)(e,s),i();break;case"auth":e.reschedulePing(),(0,l.default)(e,s),i();break;case"pingresp":e.log("_handlePacket :: received pingresp"),e.reschedulePing(!0),i();break;case"disconnect":e.emit("disconnect",s),i();break;default:e.log("_handlePacket :: unknown command"),i();break}};c.default=r}),Wa=ye(c=>{he(),me(),fe(),Object.defineProperty(c,"__esModule",{value:!0});var f=class{nextId;constructor(){this.nextId=Math.max(1,Math.floor(Math.random()*65535))}allocate(){let a=this.nextId++;return this.nextId===65536&&(this.nextId=1),a}getLastAllocated(){return this.nextId===1?65535:this.nextId-1}register(a){return!0}deallocate(a){}clear(){}};c.default=f}),Yc=ye(c=>{he(),me(),fe(),Object.defineProperty(c,"__esModule",{value:!0});var f=class{aliasToTopic;max;length;constructor(a){this.aliasToTopic={},this.max=a}put(a,l){return l===0||l>this.max?!1:(this.aliasToTopic[l]=a,this.length=Object.keys(this.aliasToTopic).length,!0)}getTopicByAlias(a){return this.aliasToTopic[a]}clear(){this.aliasToTopic={}}};c.default=f}),Jc=ye(c=>{he(),me(),fe();var f=c&&c.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(c,"__esModule",{value:!0}),c.TypedEventEmitter=void 0;var a=f((Jt(),Qe(Dt))),l=an(),d=class{};c.TypedEventEmitter=d,(0,l.applyMixin)(d,a.default)}),ir=ye((c,f)=>{he(),me(),fe();function a(l){"@babel/helpers - typeof";return f.exports=a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d},f.exports.__esModule=!0,f.exports.default=f.exports,a(l)}f.exports=a,f.exports.__esModule=!0,f.exports.default=f.exports}),Xc=ye((c,f)=>{he(),me(),fe();var a=ir().default;function l(d,t){if(a(d)!="object"||!d)return d;var n=d[Symbol.toPrimitive];if(n!==void 0){var r=n.call(d,t||"default");if(a(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(d)}f.exports=l,f.exports.__esModule=!0,f.exports.default=f.exports}),Zc=ye((c,f)=>{he(),me(),fe();var a=ir().default,l=Xc();function d(t){var n=l(t,"string");return a(n)=="symbol"?n:n+""}f.exports=d,f.exports.__esModule=!0,f.exports.default=f.exports}),ed=ye((c,f)=>{he(),me(),fe();var a=Zc();function l(d,t,n){return(t=a(t))in d?Object.defineProperty(d,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):d[t]=n,d}f.exports=l,f.exports.__esModule=!0,f.exports.default=f.exports}),td=ye((c,f)=>{he(),me(),fe();function a(l){if(Array.isArray(l))return l}f.exports=a,f.exports.__esModule=!0,f.exports.default=f.exports}),nd=ye((c,f)=>{he(),me(),fe();function a(l,d){var t=l==null?null:typeof Symbol<"u"&&l[Symbol.iterator]||l["@@iterator"];if(t!=null){var n,r,e,s,i=[],m=!0,h=!1;try{if(e=(t=t.call(l)).next,d===0){if(Object(t)!==t)return;m=!1}else for(;!(m=(n=e.call(t)).done)&&(i.push(n.value),i.length!==d);m=!0);}catch(b){h=!0,r=b}finally{try{if(!m&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(h)throw r}}return i}}f.exports=a,f.exports.__esModule=!0,f.exports.default=f.exports}),rd=ye((c,f)=>{he(),me(),fe();function a(l,d){(d==null||d>l.length)&&(d=l.length);for(var t=0,n=Array(d);t<d;t++)n[t]=l[t];return n}f.exports=a,f.exports.__esModule=!0,f.exports.default=f.exports}),sd=ye((c,f)=>{he(),me(),fe();var a=rd();function l(d,t){if(d){if(typeof d=="string")return a(d,t);var n={}.toString.call(d).slice(8,-1);return n==="Object"&&d.constructor&&(n=d.constructor.name),n==="Map"||n==="Set"?Array.from(d):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(d,t):void 0}}f.exports=l,f.exports.__esModule=!0,f.exports.default=f.exports}),id=ye((c,f)=>{he(),me(),fe();function a(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}f.exports=a,f.exports.__esModule=!0,f.exports.default=f.exports}),od=ye((c,f)=>{he(),me(),fe();var a=td(),l=nd(),d=sd(),t=id();function n(r,e){return a(r)||l(r,e)||d(r,e)||t()}f.exports=n,f.exports.__esModule=!0,f.exports.default=f.exports}),Ha=ye((c,f)=>{he(),me(),fe(),(function(a,l){typeof c=="object"&&typeof f<"u"?l(c):typeof define=="function"&&define.amd?define(["exports"],l):(a=typeof globalThis<"u"?globalThis:a||self,l(a.fastUniqueNumbers={}))})(c,function(a){var l=function(b){return function(u){var o=b(u);return u.add(o),o}},d=function(b){return function(u,o){return b.set(u,o),o}},t=Number.MAX_SAFE_INTEGER===void 0?9007199254740991:Number.MAX_SAFE_INTEGER,n=536870912,r=n*2,e=function(b,u){return function(o){var v=u.get(o),w=v===void 0?o.size:v<r?v+1:0;if(!o.has(w))return b(o,w);if(o.size<n){for(;o.has(w);)w=Math.floor(Math.random()*r);return b(o,w)}if(o.size>t)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;o.has(w);)w=Math.floor(Math.random()*t);return b(o,w)}},s=new WeakMap,i=d(s),m=e(i,s),h=l(m);a.addUniqueNumber=h,a.generateUniqueNumber=m})}),ad=ye((c,f)=>{he(),me(),fe();function a(d,t,n,r,e,s,i){try{var m=d[s](i),h=m.value}catch(b){return void n(b)}m.done?t(h):Promise.resolve(h).then(r,e)}function l(d){return function(){var t=this,n=arguments;return new Promise(function(r,e){var s=d.apply(t,n);function i(h){a(s,r,e,i,m,"next",h)}function m(h){a(s,r,e,i,m,"throw",h)}i(void 0)})}}f.exports=l,f.exports.__esModule=!0,f.exports.default=f.exports}),$a=ye((c,f)=>{he(),me(),fe();function a(l,d){this.v=l,this.k=d}f.exports=a,f.exports.__esModule=!0,f.exports.default=f.exports}),za=ye((c,f)=>{he(),me(),fe();function a(l,d,t,n){var r=Object.defineProperty;try{r({},"",{})}catch{r=0}f.exports=a=function(e,s,i,m){function h(b,u){a(e,b,function(o){return this._invoke(b,u,o)})}s?r?r(e,s,{value:i,enumerable:!m,configurable:!m,writable:!m}):e[s]=i:(h("next",0),h("throw",1),h("return",2))},f.exports.__esModule=!0,f.exports.default=f.exports,a(l,d,t,n)}f.exports=a,f.exports.__esModule=!0,f.exports.default=f.exports}),Ka=ye((c,f)=>{he(),me(),fe();var a=za();function l(){var d,t,n=typeof Symbol=="function"?Symbol:{},r=n.iterator||"@@iterator",e=n.toStringTag||"@@toStringTag";function s(w,g,_,k){var y=g&&g.prototype instanceof m?g:m,T=Object.create(y.prototype);return a(T,"_invoke",(function(S,I,P){var O,R,C,W=0,F=P||[],j=!1,de={p:0,n:0,v:d,a:X,f:X.bind(d,4),d:function(K,ie){return O=K,R=0,C=d,de.n=ie,i}};function X(K,ie){for(R=K,C=ie,t=0;!j&&W&&!D&&t<F.length;t++){var D,Z=F[t],N=de.p,J=Z[2];K>3?(D=J===ie)&&(C=Z[(R=Z[4])?5:(R=3,3)],Z[4]=Z[5]=d):Z[0]<=N&&((D=K<2&&N<Z[1])?(R=0,de.v=ie,de.n=Z[1]):N<J&&(D=K<3||Z[0]>ie||ie>J)&&(Z[4]=K,Z[5]=ie,de.n=J,R=0))}if(D||K>1)return i;throw j=!0,ie}return function(K,ie,D){if(W>1)throw TypeError("Generator is already running");for(j&&ie===1&&X(ie,D),R=ie,C=D;(t=R<2?d:C)||!j;){O||(R?R<3?(R>1&&(de.n=-1),X(R,C)):de.n=C:de.v=C);try{if(W=2,O){if(R||(K="next"),t=O[K]){if(!(t=t.call(O,C)))throw TypeError("iterator result is not an object");if(!t.done)return t;C=t.value,R<2&&(R=0)}else R===1&&(t=O.return)&&t.call(O),R<2&&(C=TypeError("The iterator does not provide a '"+K+"' method"),R=1);O=d}else if((t=(j=de.n<0)?C:S.call(I,de))!==i)break}catch(Z){O=d,R=1,C=Z}finally{W=1}}return{value:t,done:j}}})(w,_,k),!0),T}var i={};function m(){}function h(){}function b(){}t=Object.getPrototypeOf;var u=[][r]?t(t([][r]())):(a(t={},r,function(){return this}),t),o=b.prototype=m.prototype=Object.create(u);function v(w){return Object.setPrototypeOf?Object.setPrototypeOf(w,b):(w.__proto__=b,a(w,e,"GeneratorFunction")),w.prototype=Object.create(o),w}return h.prototype=b,a(o,"constructor",b),a(b,"constructor",h),h.displayName="GeneratorFunction",a(b,e,"GeneratorFunction"),a(o),a(o,e,"Generator"),a(o,r,function(){return this}),a(o,"toString",function(){return"[object Generator]"}),(f.exports=l=function(){return{w:s,m:v}},f.exports.__esModule=!0,f.exports.default=f.exports)()}f.exports=l,f.exports.__esModule=!0,f.exports.default=f.exports}),Va=ye((c,f)=>{he(),me(),fe();var a=$a(),l=za();function d(t,n){function r(s,i,m,h){try{var b=t[s](i),u=b.value;return u instanceof a?n.resolve(u.v).then(function(o){r("next",o,m,h)},function(o){r("throw",o,m,h)}):n.resolve(u).then(function(o){b.value=o,m(b)},function(o){return r("throw",o,m,h)})}catch(o){h(o)}}var e;this.next||(l(d.prototype),l(d.prototype,typeof Symbol=="function"&&Symbol.asyncIterator||"@asyncIterator",function(){return this})),l(this,"_invoke",function(s,i,m){function h(){return new n(function(b,u){r(s,m,b,u)})}return e=e?e.then(h,h):h()},!0)}f.exports=d,f.exports.__esModule=!0,f.exports.default=f.exports}),Qa=ye((c,f)=>{he(),me(),fe();var a=Ka(),l=Va();function d(t,n,r,e,s){return new l(a().w(t,n,r,e),s||Promise)}f.exports=d,f.exports.__esModule=!0,f.exports.default=f.exports}),ld=ye((c,f)=>{he(),me(),fe();var a=Qa();function l(d,t,n,r,e){var s=a(d,t,n,r,e);return s.next().then(function(i){return i.done?i.value:s.next()})}f.exports=l,f.exports.__esModule=!0,f.exports.default=f.exports}),cd=ye((c,f)=>{he(),me(),fe();function a(l){var d=Object(l),t=[];for(var n in d)t.unshift(n);return function r(){for(;t.length;)if((n=t.pop())in d)return r.value=n,r.done=!1,r;return r.done=!0,r}}f.exports=a,f.exports.__esModule=!0,f.exports.default=f.exports}),dd=ye((c,f)=>{he(),me(),fe();var a=ir().default;function l(d){if(d!=null){var t=d[typeof Symbol=="function"&&Symbol.iterator||"@@iterator"],n=0;if(t)return t.call(d);if(typeof d.next=="function")return d;if(!isNaN(d.length))return{next:function(){return d&&n>=d.length&&(d=void 0),{value:d&&d[n++],done:!d}}}}throw new TypeError(a(d)+" is not iterable")}f.exports=l,f.exports.__esModule=!0,f.exports.default=f.exports}),ud=ye((c,f)=>{he(),me(),fe();var a=$a(),l=Ka(),d=ld(),t=Qa(),n=Va(),r=cd(),e=dd();function s(){var i=l(),m=i.m(s),h=(Object.getPrototypeOf?Object.getPrototypeOf(m):m.__proto__).constructor;function b(v){var w=typeof v=="function"&&v.constructor;return!!w&&(w===h||(w.displayName||w.name)==="GeneratorFunction")}var u={throw:1,return:2,break:3,continue:3};function o(v){var w,g;return function(_){w||(w={stop:function(){return g(_.a,2)},catch:function(){return _.v},abrupt:function(k,y){return g(_.a,u[k],y)},delegateYield:function(k,y,T){return w.resultName=y,g(_.d,e(k),T)},finish:function(k){return g(_.f,k)}},g=function(k,y,T){_.p=w.prev,_.n=w.next;try{return k(y,T)}finally{w.next=_.n}}),w.resultName&&(w[w.resultName]=_.v,w.resultName=void 0),w.sent=_.v,w.next=_.n;try{return v.call(this,w)}finally{_.p=w.prev,_.n=w.next}}}return(f.exports=s=function(){return{wrap:function(v,w,g,_){return i.w(o(v),w,g,_&&_.reverse())},isGeneratorFunction:b,mark:i.m,awrap:function(v,w){return new a(v,w)},AsyncIterator:n,async:function(v,w,g,_,k){return(b(w)?t:d)(o(v),w,g,_,k)},keys:r,values:e}},f.exports.__esModule=!0,f.exports.default=f.exports)()}f.exports=s,f.exports.__esModule=!0,f.exports.default=f.exports}),pd=ye((c,f)=>{he(),me(),fe();var a=ud()();f.exports=a;try{regeneratorRuntime=a}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=a:Function("r","regeneratorRuntime = r")(a)}}),hd=ye((c,f)=>{he(),me(),fe(),(function(a,l){typeof c=="object"&&typeof f<"u"?l(c,ed(),od(),Ha(),ad(),pd()):typeof define=="function"&&define.amd?define(["exports","@babel/runtime/helpers/defineProperty","@babel/runtime/helpers/slicedToArray","fast-unique-numbers","@babel/runtime/helpers/asyncToGenerator","@babel/runtime/regenerator"],l):(a=typeof globalThis<"u"?globalThis:a||self,l(a.brokerFactory={},a._defineProperty,a._slicedToArray,a.fastUniqueNumbers,a._asyncToGenerator,a._regeneratorRuntime))})(c,function(a,l,d,t,n,r){var e=function(g){return typeof g.start=="function"},s=new WeakMap;function i(g,_){var k=Object.keys(g);if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(g);_&&(y=y.filter(function(T){return Object.getOwnPropertyDescriptor(g,T).enumerable})),k.push.apply(k,y)}return k}function m(g){for(var _=1;_<arguments.length;_++){var k=arguments[_]!=null?arguments[_]:{};_%2?i(Object(k),!0).forEach(function(y){l(g,y,k[y])}):Object.getOwnPropertyDescriptors?Object.defineProperties(g,Object.getOwnPropertyDescriptors(k)):i(Object(k)).forEach(function(y){Object.defineProperty(g,y,Object.getOwnPropertyDescriptor(k,y))})}return g}var h=function(g){return m(m({},g),{},{connect:function(_){var k=_.call;return n(r.mark(function y(){var T,S,I,P;return r.wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return T=new MessageChannel,S=T.port1,I=T.port2,O.next=1,k("connect",{port:S},[S]);case 1:return P=O.sent,s.set(I,P),O.abrupt("return",I);case 2:case"end":return O.stop()}},y)}))},disconnect:function(_){var k=_.call;return(function(){var y=n(r.mark(function T(S){var I;return r.wrap(function(P){for(;;)switch(P.prev=P.next){case 0:if(I=s.get(S),I!==void 0){P.next=1;break}throw new Error("The given port is not connected.");case 1:return P.next=2,k("disconnect",{portId:I});case 2:case"end":return P.stop()}},T)}));return function(T){return y.apply(this,arguments)}})()},isSupported:function(_){var k=_.call;return function(){return k("isSupported")}}})};function b(g,_){var k=Object.keys(g);if(Object.getOwnPropertySymbols){var y=Object.getOwnPropertySymbols(g);_&&(y=y.filter(function(T){return Object.getOwnPropertyDescriptor(g,T).enumerable})),k.push.apply(k,y)}return k}function u(g){for(var _=1;_<arguments.length;_++){var k=arguments[_]!=null?arguments[_]:{};_%2?b(Object(k),!0).forEach(function(y){l(g,y,k[y])}):Object.getOwnPropertyDescriptors?Object.defineProperties(g,Object.getOwnPropertyDescriptors(k)):b(Object(k)).forEach(function(y){Object.defineProperty(g,y,Object.getOwnPropertyDescriptor(k,y))})}return g}var o=new WeakMap,v=function(g){if(o.has(g))return o.get(g);var _=new Map;return o.set(g,_),_},w=function(g){var _=h(g);return function(k){var y=v(k);k.addEventListener("message",function(F){var j=F.data,de=j.id;if(de!==null&&y.has(de)){var X=y.get(de),K=X.reject,ie=X.resolve;y.delete(de),j.error===void 0?ie(j.result):K(new Error(j.error.message))}}),e(k)&&k.start();for(var T=function(F){var j=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,de=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];return new Promise(function(X,K){var ie=t.generateUniqueNumber(y);y.set(ie,{reject:K,resolve:X}),j===null?k.postMessage({id:ie,method:F},de):k.postMessage({id:ie,method:F,params:j},de)})},S=function(F,j){var de=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];k.postMessage({id:null,method:F,params:j},de)},I={},P=0,O=Object.entries(_);P<O.length;P++){var R=d(O[P],2),C=R[0],W=R[1];I=u(u({},I),{},l({},C,W({call:T,notify:S})))}return u({},I)}};a.createBroker=w})}),fd=ye((c,f)=>{he(),me(),fe(),(function(a,l){typeof c=="object"&&typeof f<"u"?l(c,ir(),hd(),Ha()):typeof define=="function"&&define.amd?define(["exports","@babel/runtime/helpers/typeof","broker-factory","fast-unique-numbers"],l):(a=typeof globalThis<"u"?globalThis:a||self,l(a.workerTimersBroker={},a._typeof,a.brokerFactory,a.fastUniqueNumbers))})(c,function(a,l,d,t){var n=new Map([[0,null]]),r=new Map([[0,null]]),e=d.createBroker({clearInterval:function(i){var m=i.call;return function(h){l(n.get(h))==="symbol"&&(n.set(h,null),m("clear",{timerId:h,timerType:"interval"}).then(function(){n.delete(h)}))}},clearTimeout:function(i){var m=i.call;return function(h){l(r.get(h))==="symbol"&&(r.set(h,null),m("clear",{timerId:h,timerType:"timeout"}).then(function(){r.delete(h)}))}},setInterval:function(i){var m=i.call;return function(h){for(var b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,u=arguments.length,o=new Array(u>2?u-2:0),v=2;v<u;v++)o[v-2]=arguments[v];var w=Symbol(),g=t.generateUniqueNumber(n);n.set(g,w);var _=function(){return m("set",{delay:b,now:performance.timeOrigin+performance.now(),timerId:g,timerType:"interval"}).then(function(){var k=n.get(g);if(k===void 0)throw new Error("The timer is in an undefined state.");k===w&&(h.apply(void 0,o),n.get(g)===w&&_())})};return _(),g}},setTimeout:function(i){var m=i.call;return function(h){for(var b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,u=arguments.length,o=new Array(u>2?u-2:0),v=2;v<u;v++)o[v-2]=arguments[v];var w=Symbol(),g=t.generateUniqueNumber(r);return r.set(g,w),m("set",{delay:b,now:performance.timeOrigin+performance.now(),timerId:g,timerType:"timeout"}).then(function(){var _=r.get(g);if(_===void 0)throw new Error("The timer is in an undefined state.");_===w&&(r.delete(g),h.apply(void 0,o))}),g}}}),s=function(i){var m=new Worker(i);return e(m)};a.load=s,a.wrap=e})}),md=ye((c,f)=>{he(),me(),fe(),(function(a,l){typeof c=="object"&&typeof f<"u"?l(c,fd()):typeof define=="function"&&define.amd?define(["exports","worker-timers-broker"],l):(a=typeof globalThis<"u"?globalThis:a||self,l(a.workerTimers={},a.workerTimersBroker))})(c,function(a,l){var d=function(m,h){var b=null;return function(){if(b!==null)return b;var u=new Blob([h],{type:"application/javascript; charset=utf-8"}),o=URL.createObjectURL(u);return b=m(o),setTimeout(function(){return URL.revokeObjectURL(o)}),b}},t=`(()=>{var e={45:(e,t,r)=>{var n=r(738).default;e.exports=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)},e.exports.__esModule=!0,e.exports.default=e.exports},79:e=>{e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},122:(e,t,r)=>{var n=r(79);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},156:e=>{e.exports=function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,u,a,i=[],s=!0,c=!1;try{if(u=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=u.call(r)).done)&&(i.push(n.value),i.length!==t);s=!0);}catch(e){c=!0,o=e}finally{try{if(!s&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(c)throw o}}return i}},e.exports.__esModule=!0,e.exports.default=e.exports},172:e=>{e.exports=function(e,t){this.v=e,this.k=t},e.exports.__esModule=!0,e.exports.default=e.exports},293:e=>{function t(e,t,r,n,o,u,a){try{var i=e[u](a),s=i.value}catch(e){return void r(e)}i.done?t(s):Promise.resolve(s).then(n,o)}e.exports=function(e){return function(){var r=this,n=arguments;return new Promise((function(o,u){var a=e.apply(r,n);function i(e){t(a,o,u,i,s,"next",e)}function s(e){t(a,o,u,i,s,"throw",e)}i(void 0)}))}},e.exports.__esModule=!0,e.exports.default=e.exports},373:e=>{e.exports=function(e){var t=Object(e),r=[];for(var n in t)r.unshift(n);return function e(){for(;r.length;)if((n=r.pop())in t)return e.value=n,e.done=!1,e;return e.done=!0,e}},e.exports.__esModule=!0,e.exports.default=e.exports},389:function(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,u=2*o,a=function(e,t){return function(r){var a=t.get(r),i=void 0===a?r.size:a<u?a+1:0;if(!r.has(i))return e(r,i);if(r.size<o){for(;r.has(i);)i=Math.floor(Math.random()*u);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,s=r(i),c=a(s,i),f=t(c);e.addUniqueNumber=f,e.generateUniqueNumber=c}(t)},472:function(e,t,r){!function(e,t,r,n){"use strict";var o=function(e,t){return function(r){var o=t.get(r);if(void 0===o)return Promise.resolve(!1);var u=n(o,2),a=u[0],i=u[1];return e(a),t.delete(r),i(!1),Promise.resolve(!0)}},u=function(e,t){var r=function(n,o,u,a){var i=n-e.now();i>0?o.set(a,[t(r,i,n,o,u,a),u]):(o.delete(a),u(!0))};return r},a=function(e,t,r,n){return function(o,u,a){var i=o+u-t.timeOrigin,s=i-t.now();return new Promise((function(t){e.set(a,[r(n,s,i,e,t,a),t])}))}},i=new Map,s=o(globalThis.clearTimeout,i),c=new Map,f=o(globalThis.clearTimeout,c),l=u(performance,globalThis.setTimeout),p=a(i,performance,globalThis.setTimeout,l),d=a(c,performance,globalThis.setTimeout,l);r.createWorker(self,{clear:function(){var r=e(t.mark((function e(r){var n,o,u;return t.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.timerId,o=r.timerType,e.next=1,"interval"===o?s(n):f(n);case 1:return u=e.sent,e.abrupt("return",{result:u});case 2:case"end":return e.stop()}}),e)})));function n(e){return r.apply(this,arguments)}return n}(),set:function(){var r=e(t.mark((function e(r){var n,o,u,a,i;return t.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.delay,o=r.now,u=r.timerId,a=r.timerType,e.next=1,("interval"===a?p:d)(n,o,u);case 1:return i=e.sent,e.abrupt("return",{result:i});case 2:case"end":return e.stop()}}),e)})));function n(e){return r.apply(this,arguments)}return n}()})}(r(293),r(756),r(623),r(715))},546:e=>{function t(r,n,o,u){var a=Object.defineProperty;try{a({},"",{})}catch(r){a=0}e.exports=t=function(e,r,n,o){if(r)a?a(e,r,{value:n,enumerable:!o,configurable:!o,writable:!o}):e[r]=n;else{var u=function(r,n){t(e,r,(function(e){return this._invoke(r,n,e)}))};u("next",0),u("throw",1),u("return",2)}},e.exports.__esModule=!0,e.exports.default=e.exports,t(r,n,o,u)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},579:(e,t,r)=>{var n=r(738).default;e.exports=function(e){if(null!=e){var t=e["function"==typeof Symbol&&Symbol.iterator||"@@iterator"],r=0;if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length))return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}}}throw new TypeError(n(e)+" is not iterable")},e.exports.__esModule=!0,e.exports.default=e.exports},623:function(e,t,r){!function(e,t,r,n,o){"use strict";var u={INTERNAL_ERROR:-32603,INVALID_PARAMS:-32602,METHOD_NOT_FOUND:-32601},a=function(e,t){return Object.assign(new Error(e),{status:t})},i=function(e){return a('The requested method called "'.concat(e,'" is not supported.'),u.METHOD_NOT_FOUND)},s=function(e){return a('The handler of the method called "'.concat(e,'" returned no required result.'),u.INTERNAL_ERROR)},c=function(e){return a('The handler of the method called "'.concat(e,'" returned an unexpected result.'),u.INTERNAL_ERROR)},f=function(e){return a('The specified parameter called "portId" with the given value "'.concat(e,'" does not identify a port connected to this worker.'),u.INVALID_PARAMS)},l=function(e,n){return function(){var o=t(r.mark((function t(o){var u,a,f,l,p,d,v,x,y,b,h,m,_,g,w;return r.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(u=o.data,a=u.id,f=u.method,l=u.params,p=n[f],t.prev=1,void 0!==p){t.next=2;break}throw i(f);case 2:if(void 0!==(d=void 0===l?p():p(l))){t.next=3;break}throw s(f);case 3:if(!(d instanceof Promise)){t.next=5;break}return t.next=4,d;case 4:g=t.sent,t.next=6;break;case 5:g=d;case 6:if(v=g,null!==a){t.next=8;break}if(void 0===v.result){t.next=7;break}throw c(f);case 7:t.next=10;break;case 8:if(void 0!==v.result){t.next=9;break}throw c(f);case 9:x=v.result,y=v.transferables,b=void 0===y?[]:y,e.postMessage({id:a,result:x},b);case 10:t.next=12;break;case 11:t.prev=11,w=t.catch(1),h=w.message,m=w.status,_=void 0===m?-32603:m,e.postMessage({error:{code:_,message:h},id:a});case 12:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return o.apply(this,arguments)}}()},p=function(){return new Promise((function(e){var t=new ArrayBuffer(0),r=new MessageChannel,n=r.port1,o=r.port2;n.onmessage=function(t){var r=t.data;return e(null!==r)},o.postMessage(t,[t])}))};function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x=new Map,y=function(e,n,u){return v(v({},n),{},{connect:function(t){var r=t.port;r.start();var u=e(r,n),a=o.generateUniqueNumber(x);return x.set(a,(function(){u(),r.close(),x.delete(a)})),{result:a}},disconnect:function(e){var t=e.portId,r=x.get(t);if(void 0===r)throw f(t);return r(),{result:null}},isSupported:function(){var e=t(r.mark((function e(){var t,n,o;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=1,p();case 1:if(!e.sent){e.next=5;break}if(!((t=u())instanceof Promise)){e.next=3;break}return e.next=2,t;case 2:o=e.sent,e.next=4;break;case 3:o=t;case 4:return n=o,e.abrupt("return",{result:n});case 5:return e.abrupt("return",{result:!1});case 6:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()})},b=function(e,t){var r=y(b,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){return!0}),n=l(e,r);return e.addEventListener("message",n),function(){return e.removeEventListener("message",n)}};e.createWorker=b,e.isSupported=p}(t,r(293),r(756),r(693),r(389))},633:(e,t,r)=>{var n=r(172),o=r(993),u=r(869),a=r(887),i=r(791),s=r(373),c=r(579);function f(){"use strict";var t=o(),r=t.m(f),l=(Object.getPrototypeOf?Object.getPrototypeOf(r):r.__proto__).constructor;function p(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===l||"GeneratorFunction"===(t.displayName||t.name))}var d={throw:1,return:2,break:3,continue:3};function v(e){var t,r;return function(n){t||(t={stop:function(){return r(n.a,2)},catch:function(){return n.v},abrupt:function(e,t){return r(n.a,d[e],t)},delegateYield:function(e,o,u){return t.resultName=o,r(n.d,c(e),u)},finish:function(e){return r(n.f,e)}},r=function(e,r,o){n.p=t.prev,n.n=t.next;try{return e(r,o)}finally{t.next=n.n}}),t.resultName&&(t[t.resultName]=n.v,t.resultName=void 0),t.sent=n.v,t.next=n.n;try{return e.call(this,t)}finally{n.p=t.prev,n.n=t.next}}}return(e.exports=f=function(){return{wrap:function(e,r,n,o){return t.w(v(e),r,n,o&&o.reverse())},isGeneratorFunction:p,mark:t.m,awrap:function(e,t){return new n(e,t)},AsyncIterator:i,async:function(e,t,r,n,o){return(p(t)?a:u)(v(e),t,r,n,o)},keys:s,values:c}},e.exports.__esModule=!0,e.exports.default=e.exports)()}e.exports=f,e.exports.__esModule=!0,e.exports.default=e.exports},693:(e,t,r)=>{var n=r(736);e.exports=function(e,t,r){return(t=n(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},715:(e,t,r)=>{var n=r(987),o=r(156),u=r(122),a=r(752);e.exports=function(e,t){return n(e)||o(e,t)||u(e,t)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},736:(e,t,r)=>{var n=r(738).default,o=r(45);e.exports=function(e){var t=o(e,"string");return"symbol"==n(t)?t:t+""},e.exports.__esModule=!0,e.exports.default=e.exports},738:e=>{function t(r){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(r)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports},752:e=>{e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},756:(e,t,r)=>{var n=r(633)();e.exports=n;try{regeneratorRuntime=n}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},791:(e,t,r)=>{var n=r(172),o=r(546);e.exports=function e(t,r){function u(e,o,a,i){try{var s=t[e](o),c=s.value;return c instanceof n?r.resolve(c.v).then((function(e){u("next",e,a,i)}),(function(e){u("throw",e,a,i)})):r.resolve(c).then((function(e){s.value=e,a(s)}),(function(e){return u("throw",e,a,i)}))}catch(e){i(e)}}var a;this.next||(o(e.prototype),o(e.prototype,"function"==typeof Symbol&&Symbol.asyncIterator||"@asyncIterator",(function(){return this}))),o(this,"_invoke",(function(e,t,n){function o(){return new r((function(t,r){u(e,n,t,r)}))}return a=a?a.then(o,o):o()}),!0)},e.exports.__esModule=!0,e.exports.default=e.exports},869:(e,t,r)=>{var n=r(887);e.exports=function(e,t,r,o,u){var a=n(e,t,r,o,u);return a.next().then((function(e){return e.done?e.value:a.next()}))},e.exports.__esModule=!0,e.exports.default=e.exports},887:(e,t,r)=>{var n=r(993),o=r(791);e.exports=function(e,t,r,u,a){return new o(n().w(e,t,r,u),a||Promise)},e.exports.__esModule=!0,e.exports.default=e.exports},987:e=>{e.exports=function(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},993:(e,t,r)=>{var n=r(546);function o(){var t,r,u="function"==typeof Symbol?Symbol:{},a=u.iterator||"@@iterator",i=u.toStringTag||"@@toStringTag";function s(e,o,u,a){var i=o&&o.prototype instanceof f?o:f,s=Object.create(i.prototype);return n(s,"_invoke",function(e,n,o){var u,a,i,s=0,f=o||[],l=!1,p={p:0,n:0,v:t,a:d,f:d.bind(t,4),d:function(e,r){return u=e,a=0,i=t,p.n=r,c}};function d(e,n){for(a=e,i=n,r=0;!l&&s&&!o&&r<f.length;r++){var o,u=f[r],d=p.p,v=u[2];e>3?(o=v===n)&&(i=u[(a=u[4])?5:(a=3,3)],u[4]=u[5]=t):u[0]<=d&&((o=e<2&&d<u[1])?(a=0,p.v=n,p.n=u[1]):d<v&&(o=e<3||u[0]>n||n>v)&&(u[4]=e,u[5]=n,p.n=v,a=0))}if(o||e>1)return c;throw l=!0,n}return function(o,f,v){if(s>1)throw TypeError("Generator is already running");for(l&&1===f&&d(f,v),a=f,i=v;(r=a<2?t:i)||!l;){u||(a?a<3?(a>1&&(p.n=-1),d(a,i)):p.n=i:p.v=i);try{if(s=2,u){if(a||(o="next"),r=u[o]){if(!(r=r.call(u,i)))throw TypeError("iterator result is not an object");if(!r.done)return r;i=r.value,a<2&&(a=0)}else 1===a&&(r=u.return)&&r.call(u),a<2&&(i=TypeError("The iterator does not provide a '"+o+"' method"),a=1);u=t}else if((r=(l=p.n<0)?i:e.call(n,p))!==c)break}catch(e){u=t,a=1,i=e}finally{s=1}}return{value:r,done:l}}}(e,u,a),!0),s}var c={};function f(){}function l(){}function p(){}r=Object.getPrototypeOf;var d=[][a]?r(r([][a]())):(n(r={},a,(function(){return this})),r),v=p.prototype=f.prototype=Object.create(d);function x(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,n(e,i,"GeneratorFunction")),e.prototype=Object.create(v),e}return l.prototype=p,n(v,"constructor",p),n(p,"constructor",l),l.displayName="GeneratorFunction",n(p,i,"GeneratorFunction"),n(v),n(v,i,"Generator"),n(v,a,(function(){return this})),n(v,"toString",(function(){return"[object Generator]"})),(e.exports=o=function(){return{w:s,m:x}},e.exports.__esModule=!0,e.exports.default=e.exports)()}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var u=t[n]={exports:{}};return e[n].call(u.exports,u,u.exports,r),u.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";r(472)})()})();`,n=d(l.load,t),r=function(m){return n().clearInterval(m)},e=function(m){return n().clearTimeout(m)},s=function(){var m;return(m=n()).setInterval.apply(m,arguments)},i=function(){var m;return(m=n()).setTimeout.apply(m,arguments)};a.clearInterval=r,a.clearTimeout=e,a.setInterval=s,a.setTimeout=i})}),or=ye(c=>{he(),me(),fe(),Object.defineProperty(c,"__esModule",{value:!0}),c.isReactNativeBrowser=c.isWebWorker=void 0;var f=()=>typeof window<"u"?typeof navigator<"u"&&navigator.userAgent?.toLowerCase().indexOf(" electron/")>-1&&Ge?.versions?!Object.prototype.hasOwnProperty.call(Ge.versions,"electron"):typeof window.document<"u":!1,a=()=>!!(typeof self=="object"&&self?.constructor?.name?.includes("WorkerGlobalScope")&&typeof Deno>"u"),l=()=>typeof navigator<"u"&&navigator.product==="ReactNative",d=f()||a()||l();c.isWebWorker=a(),c.isReactNativeBrowser=l(),c.default=d}),gd=ye(c=>{he(),me(),fe();var f=c&&c.__createBinding||(Object.create?function(s,i,m,h){h===void 0&&(h=m);var b=Object.getOwnPropertyDescriptor(i,m);(!b||("get"in b?!i.__esModule:b.writable||b.configurable))&&(b={enumerable:!0,get:function(){return i[m]}}),Object.defineProperty(s,h,b)}:function(s,i,m,h){h===void 0&&(h=m),s[h]=i[m]}),a=c&&c.__setModuleDefault||(Object.create?function(s,i){Object.defineProperty(s,"default",{enumerable:!0,value:i})}:function(s,i){s.default=i}),l=c&&c.__importStar||(function(){var s=function(i){return s=Object.getOwnPropertyNames||function(m){var h=[];for(var b in m)Object.prototype.hasOwnProperty.call(m,b)&&(h[h.length]=b);return h},s(i)};return function(i){if(i&&i.__esModule)return i;var m={};if(i!=null)for(var h=s(i),b=0;b<h.length;b++)h[b]!=="default"&&f(m,i,h[b]);return a(m,i),m}})();Object.defineProperty(c,"__esModule",{value:!0});var d=md(),t=l(or()),n={set:d.setInterval,clear:d.clearInterval},r={set:(s,i)=>setInterval(s,i),clear:s=>clearInterval(s)},e=s=>{switch(s){case"native":return r;case"worker":return n;default:return t.default&&!t.isWebWorker&&!t.isReactNativeBrowser?n:r}};c.default=e}),Ga=ye(c=>{he(),me(),fe();var f=c&&c.__importDefault||function(d){return d&&d.__esModule?d:{default:d}};Object.defineProperty(c,"__esModule",{value:!0});var a=f(gd()),l=class{_keepalive;timerId;timer;destroyed=!1;counter;client;_keepaliveTimeoutTimestamp;_intervalEvery;get keepaliveTimeoutTimestamp(){return this._keepaliveTimeoutTimestamp}get intervalEvery(){return this._intervalEvery}get keepalive(){return this._keepalive}constructor(d,t){this.client=d,this.timer=typeof t=="object"&&"set"in t&&"clear"in t?t:(0,a.default)(t),this.setKeepalive(d.options.keepalive)}clear(){this.timerId&&(this.timer.clear(this.timerId),this.timerId=null)}setKeepalive(d){if(d*=1e3,isNaN(d)||d<=0||d>2147483647)throw new Error(`Keepalive value must be an integer between 0 and 2147483647. Provided value is ${d}`);this._keepalive=d,this.reschedule(),this.client.log(`KeepaliveManager: set keepalive to ${d}ms`)}destroy(){this.clear(),this.destroyed=!0}reschedule(){if(this.destroyed)return;this.clear(),this.counter=0;let d=Math.ceil(this._keepalive*1.5);this._keepaliveTimeoutTimestamp=Date.now()+d,this._intervalEvery=Math.ceil(this._keepalive/2),this.timerId=this.timer.set(()=>{this.destroyed||(this.counter+=1,this.counter===2?this.client.sendPing():this.counter>2&&this.client.onKeepaliveTimeout())},this._intervalEvery)}};c.default=l}),Ss=ye(c=>{he(),me(),fe();var f=c&&c.__createBinding||(Object.create?function(y,T,S,I){I===void 0&&(I=S);var P=Object.getOwnPropertyDescriptor(T,S);(!P||("get"in P?!T.__esModule:P.writable||P.configurable))&&(P={enumerable:!0,get:function(){return T[S]}}),Object.defineProperty(y,I,P)}:function(y,T,S,I){I===void 0&&(I=S),y[I]=T[S]}),a=c&&c.__setModuleDefault||(Object.create?function(y,T){Object.defineProperty(y,"default",{enumerable:!0,value:T})}:function(y,T){y.default=T}),l=c&&c.__importStar||(function(){var y=function(T){return y=Object.getOwnPropertyNames||function(S){var I=[];for(var P in S)Object.prototype.hasOwnProperty.call(S,P)&&(I[I.length]=P);return I},y(T)};return function(T){if(T&&T.__esModule)return T;var S={};if(T!=null)for(var I=y(T),P=0;P<I.length;P++)I[P]!=="default"&&f(S,T,I[P]);return a(S,T),S}})(),d=c&&c.__importDefault||function(y){return y&&y.__esModule?y:{default:y}};Object.defineProperty(c,"__esModule",{value:!0});var t=d(Ac()),n=Zt(),r=d(Ec()),e=d(Mt()),s=l(Sa()),i=d(Ta()),m=d(Gc()),h=d(Wa()),b=d(Yc()),u=an(),o=Jc(),v=d(Ga()),w=l(or()),g=globalThis.setImmediate||((...y)=>{let T=y.shift();(0,u.nextTick)(()=>{T(...y)})}),_={keepalive:60,reschedulePings:!0,protocolId:"MQTT",protocolVersion:4,reconnectPeriod:1e3,connectTimeout:30*1e3,clean:!0,resubscribe:!0,subscribeBatchSize:null,writeCache:!0,timerVariant:"auto"},k=class Ts extends o.TypedEventEmitter{static VERSION=u.MQTTJS_VERSION;connected;disconnecting;disconnected;reconnecting;incomingStore;outgoingStore;options;queueQoSZero;_reconnectCount;log;messageIdProvider;outgoing;messageIdToTopic;noop;keepaliveManager;stream;queue;streamBuilder;_resubscribeTopics;connackTimer;reconnectTimer;_storeProcessing;_packetIdsDuringStoreProcessing;_storeProcessingQueue;_firstConnection;topicAliasRecv;topicAliasSend;_deferredReconnect;connackPacket;static defaultId(){return`mqttjs_${Math.random().toString(16).substr(2,8)}`}constructor(T,S){super(),this.options=S||{};for(let I in _)typeof this.options[I]>"u"?this.options[I]=_[I]:this.options[I]=S[I];this.log=this.options.log||(0,e.default)("mqttjs:client"),this.noop=this._noop.bind(this),this.log("MqttClient :: version:",Ts.VERSION),w.isWebWorker?this.log("MqttClient :: environment","webworker"):this.log("MqttClient :: environment",w.default?"browser":"node"),this.log("MqttClient :: options.protocol",S.protocol),this.log("MqttClient :: options.protocolVersion",S.protocolVersion),this.log("MqttClient :: options.username",S.username),this.log("MqttClient :: options.keepalive",S.keepalive),this.log("MqttClient :: options.reconnectPeriod",S.reconnectPeriod),this.log("MqttClient :: options.rejectUnauthorized",S.rejectUnauthorized),this.log("MqttClient :: options.properties.topicAliasMaximum",S.properties?S.properties.topicAliasMaximum:void 0),this.options.clientId=typeof S.clientId=="string"?S.clientId:Ts.defaultId(),this.log("MqttClient :: clientId",this.options.clientId),this.options.customHandleAcks=S.protocolVersion===5&&S.customHandleAcks?S.customHandleAcks:(...I)=>{I[3](null,0)},this.options.writeCache||(t.default.writeToStream.cacheNumbers=!1),this.streamBuilder=T,this.messageIdProvider=typeof this.options.messageIdProvider>"u"?new h.default:this.options.messageIdProvider,this.outgoingStore=S.outgoingStore||new i.default,this.incomingStore=S.incomingStore||new i.default,this.queueQoSZero=S.queueQoSZero===void 0?!0:S.queueQoSZero,this._resubscribeTopics={},this.messageIdToTopic={},this.keepaliveManager=null,this.connected=!1,this.disconnecting=!1,this.reconnecting=!1,this.queue=[],this.connackTimer=null,this.reconnectTimer=null,this._storeProcessing=!1,this._packetIdsDuringStoreProcessing={},this._storeProcessingQueue=[],this.outgoing={},this._firstConnection=!0,S.properties&&S.properties.topicAliasMaximum>0&&(S.properties.topicAliasMaximum>65535?this.log("MqttClient :: options.properties.topicAliasMaximum is out of range"):this.topicAliasRecv=new b.default(S.properties.topicAliasMaximum)),this.on("connect",()=>{let{queue:I}=this,P=()=>{let O=I.shift();this.log("deliver :: entry %o",O);let R=null;if(!O){this._resubscribe();return}R=O.packet,this.log("deliver :: call _sendPacket for %o",R);let C=!0;R.messageId&&R.messageId!==0&&(this.messageIdProvider.register(R.messageId)||(C=!1)),C?this._sendPacket(R,W=>{O.cb&&O.cb(W),P()}):(this.log("messageId: %d has already used. The message is skipped and removed.",R.messageId),P())};this.log("connect :: sending queued packets"),P()}),this.on("close",()=>{this.log("close :: connected set to `false`"),this.connected=!1,this.log("close :: clearing connackTimer"),clearTimeout(this.connackTimer),this._destroyKeepaliveManager(),this.topicAliasRecv&&this.topicAliasRecv.clear(),this.log("close :: calling _setupReconnect"),this._setupReconnect()}),this.options.manualConnect||(this.log("MqttClient :: setting up stream"),this.connect())}handleAuth(T,S){S()}handleMessage(T,S){S()}_nextId(){return this.messageIdProvider.allocate()}getLastMessageId(){return this.messageIdProvider.getLastAllocated()}connect(){let T=new n.Writable,S=t.default.parser(this.options),I=null,P=[];this.log("connect :: calling method to clear reconnect"),this._clearReconnect(),this.disconnected&&!this.reconnecting&&(this.incomingStore=this.options.incomingStore||new i.default,this.outgoingStore=this.options.outgoingStore||new i.default,this.disconnecting=!1,this.disconnected=!1),this.log("connect :: using streamBuilder provided to client to create stream"),this.stream=this.streamBuilder(this),S.on("packet",F=>{this.log("parser :: on packet push to packets array."),P.push(F)});let O=()=>{this.log("work :: getting next packet in queue");let F=P.shift();if(F)this.log("work :: packet pulled from queue"),(0,m.default)(this,F,R);else{this.log("work :: no packets in queue");let j=I;I=null,this.log("work :: done flag is %s",!!j),j&&j()}},R=()=>{if(P.length)(0,u.nextTick)(O);else{let F=I;I=null,F()}};T._write=(F,j,de)=>{I=de,this.log("writable stream :: parsing buffer"),S.parse(F),O()};let C=F=>{this.log("streamErrorHandler :: error",F.message),F.code?(this.log("streamErrorHandler :: emitting error"),this.emit("error",F)):this.noop(F)};this.log("connect :: pipe stream to writable stream"),this.stream.pipe(T),this.stream.on("error",C),this.stream.on("close",()=>{this.log("(%s)stream :: on close",this.options.clientId),this._flushVolatile(),this.log("stream: emit close to MqttClient"),this.emit("close")}),this.log("connect: sending packet `connect`");let W={cmd:"connect",protocolId:this.options.protocolId,protocolVersion:this.options.protocolVersion,clean:this.options.clean,clientId:this.options.clientId,keepalive:this.options.keepalive,username:this.options.username,password:this.options.password,properties:this.options.properties};if(this.options.will&&(W.will={...this.options.will,payload:this.options.will?.payload}),this.topicAliasRecv&&(W.properties||(W.properties={}),this.topicAliasRecv&&(W.properties.topicAliasMaximum=this.topicAliasRecv.max)),this._writePacket(W),S.on("error",this.emit.bind(this,"error")),this.options.properties){if(!this.options.properties.authenticationMethod&&this.options.properties.authenticationData)return this.end(()=>this.emit("error",new Error("Packet has no Authentication Method"))),this;if(this.options.properties.authenticationMethod&&this.options.authPacket&&typeof this.options.authPacket=="object"){let F={cmd:"auth",reasonCode:0,...this.options.authPacket};this._writePacket(F)}}return this.stream.setMaxListeners(1e3),clearTimeout(this.connackTimer),this.connackTimer=setTimeout(()=>{this.log("!!connectTimeout hit!! Calling _cleanUp with force `true`"),this.emit("error",new Error("connack timeout")),this._cleanUp(!0)},this.options.connectTimeout),this}publish(T,S,I,P){this.log("publish :: message `%s` to topic `%s`",S,T);let{options:O}=this;typeof I=="function"&&(P=I,I=null),I=I||{},I={qos:0,retain:!1,dup:!1,...I};let{qos:R,retain:C,dup:W,properties:F,cbStorePut:j}=I;if(this._checkDisconnecting(P))return this;let de=()=>{let X=0;if((R===1||R===2)&&(X=this._nextId(),X===null))return this.log("No messageId left"),!1;let K={cmd:"publish",topic:T,payload:S,qos:R,retain:C,messageId:X,dup:W};switch(O.protocolVersion===5&&(K.properties=F),this.log("publish :: qos",R),R){case 1:case 2:this.outgoing[K.messageId]={volatile:!1,cb:P||this.noop},this.log("MqttClient:publish: packet cmd: %s",K.cmd),this._sendPacket(K,void 0,j);break;default:this.log("MqttClient:publish: packet cmd: %s",K.cmd),this._sendPacket(K,P,j);break}return!0};return(this._storeProcessing||this._storeProcessingQueue.length>0||!de())&&this._storeProcessingQueue.push({invoke:de,cbStorePut:I.cbStorePut,callback:P}),this}publishAsync(T,S,I){return new Promise((P,O)=>{this.publish(T,S,I,(R,C)=>{R?O(R):P(C)})})}subscribe(T,S,I){let P=this.options.protocolVersion;typeof S=="function"&&(I=S),I=I||this.noop;let O=!1,R=[];typeof T=="string"?(T=[T],R=T):Array.isArray(T)?R=T:typeof T=="object"&&(O=T.resubscribe,delete T.resubscribe,R=Object.keys(T));let C=s.validateTopics(R);if(C!==null)return g(I,new Error(`Invalid topic ${C}`)),this;if(this._checkDisconnecting(I))return this.log("subscribe: discconecting true"),this;let W={qos:0};P===5&&(W.nl=!1,W.rap=!1,W.rh=0),S={...W,...S};let{properties:F}=S,j=[],de=(ie,D)=>{if(D=D||S,!Object.prototype.hasOwnProperty.call(this._resubscribeTopics,ie)||this._resubscribeTopics[ie].qos<D.qos||O){let Z={topic:ie,qos:D.qos};P===5&&(Z.nl=D.nl,Z.rap=D.rap,Z.rh=D.rh,Z.properties=F),this.log("subscribe: pushing topic `%s` and qos `%s` to subs list",Z.topic,Z.qos),j.push(Z)}};if(Array.isArray(T)?T.forEach(ie=>{this.log("subscribe: array topic %s",ie),de(ie)}):Object.keys(T).forEach(ie=>{this.log("subscribe: object topic %s, %o",ie,T[ie]),de(ie,T[ie])}),!j.length)return I(null,[]),this;let X=(ie,D)=>{let Z={cmd:"subscribe",subscriptions:ie,messageId:D};if(F&&(Z.properties=F),this.options.resubscribe){this.log("subscribe :: resubscribe true");let J=[];ie.forEach(be=>{if(this.options.reconnectPeriod>0){let re={qos:be.qos};P===5&&(re.nl=be.nl||!1,re.rap=be.rap||!1,re.rh=be.rh||0,re.properties=be.properties),this._resubscribeTopics[be.topic]=re,J.push(be.topic)}}),this.messageIdToTopic[Z.messageId]=J}let N=new Promise((J,be)=>{this.outgoing[Z.messageId]={volatile:!0,cb(re,xe){if(!re){let{granted:Q}=xe;for(let q=0;q<Q.length;q+=1)ie[q].qos=Q[q]}re?be(new u.ErrorWithSubackPacket(re.message,xe)):J(xe)}}});return this.log("subscribe :: call _sendPacket"),this._sendPacket(Z),N},K=()=>{let ie=this.options.subscribeBatchSize??j.length,D=[];for(let Z=0;Z<j.length;Z+=ie){let N=j.slice(Z,Z+ie),J=this._nextId();if(J===null)return this.log("No messageId left"),!1;D.push(X(N,J))}return Promise.all(D).then(Z=>{I(null,j,Z.at(-1))}).catch(Z=>{I(Z,j,Z.packet)}),!0};return(this._storeProcessing||this._storeProcessingQueue.length>0||!K())&&this._storeProcessingQueue.push({invoke:K,callback:I}),this}subscribeAsync(T,S){return new Promise((I,P)=>{this.subscribe(T,S,(O,R)=>{O?P(O):I(R)})})}unsubscribe(T,S,I){typeof T=="string"&&(T=[T]),typeof S=="function"&&(I=S),I=I||this.noop;let P=s.validateTopics(T);if(P!==null)return g(I,new Error(`Invalid topic ${P}`)),this;if(this._checkDisconnecting(I))return this;let O=()=>{let R=this._nextId();if(R===null)return this.log("No messageId left"),!1;let C={cmd:"unsubscribe",messageId:R,unsubscriptions:[]};return typeof T=="string"?C.unsubscriptions=[T]:Array.isArray(T)&&(C.unsubscriptions=T),this.options.resubscribe&&C.unsubscriptions.forEach(W=>{delete this._resubscribeTopics[W]}),typeof S=="object"&&S.properties&&(C.properties=S.properties),this.outgoing[C.messageId]={volatile:!0,cb:I},this.log("unsubscribe: call _sendPacket"),this._sendPacket(C),!0};return(this._storeProcessing||this._storeProcessingQueue.length>0||!O())&&this._storeProcessingQueue.push({invoke:O,callback:I}),this}unsubscribeAsync(T,S){return new Promise((I,P)=>{this.unsubscribe(T,S,(O,R)=>{O?P(O):I(R)})})}end(T,S,I){this.log("end :: (%s)",this.options.clientId),(T==null||typeof T!="boolean")&&(I=I||S,S=T,T=!1),typeof S!="object"&&(I=I||S,S=null),this.log("end :: cb? %s",!!I),(!I||typeof I!="function")&&(I=this.noop);let P=()=>{this.log("end :: closeStores: closing incoming and outgoing stores"),this.disconnected=!0,this.incomingStore.close(R=>{this.outgoingStore.close(C=>{if(this.log("end :: closeStores: emitting end"),this.emit("end"),I){let W=R||C;this.log("end :: closeStores: invoking callback with args"),I(W)}})}),this._deferredReconnect?this._deferredReconnect():(this.options.reconnectPeriod===0||this.options.manualConnect)&&(this.disconnecting=!1)},O=()=>{this.log("end :: (%s) :: finish :: calling _cleanUp with force %s",this.options.clientId,T),this._cleanUp(T,()=>{this.log("end :: finish :: calling process.nextTick on closeStores"),(0,u.nextTick)(P)},S)};return this.disconnecting?(I(),this):(this._clearReconnect(),this.disconnecting=!0,!T&&Object.keys(this.outgoing).length>0?(this.log("end :: (%s) :: calling finish in 10ms once outgoing is empty",this.options.clientId),this.once("outgoingEmpty",setTimeout.bind(null,O,10))):(this.log("end :: (%s) :: immediately calling finish",this.options.clientId),O()),this)}endAsync(T,S){return new Promise((I,P)=>{this.end(T,S,O=>{O?P(O):I()})})}removeOutgoingMessage(T){if(this.outgoing[T]){let{cb:S}=this.outgoing[T];this._removeOutgoingAndStoreMessage(T,()=>{S(new Error("Message removed"))})}return this}reconnect(T){this.log("client reconnect");let S=()=>{T?(this.options.incomingStore=T.incomingStore,this.options.outgoingStore=T.outgoingStore):(this.options.incomingStore=null,this.options.outgoingStore=null),this.incomingStore=this.options.incomingStore||new i.default,this.outgoingStore=this.options.outgoingStore||new i.default,this.disconnecting=!1,this.disconnected=!1,this._deferredReconnect=null,this._reconnect()};return this.disconnecting&&!this.disconnected?this._deferredReconnect=S:S(),this}_flushVolatile(){this.outgoing&&(this.log("_flushVolatile :: deleting volatile messages from the queue and setting their callbacks as error function"),Object.keys(this.outgoing).forEach(T=>{this.outgoing[T].volatile&&typeof this.outgoing[T].cb=="function"&&(this.outgoing[T].cb(new Error("Connection closed")),delete this.outgoing[T])}))}_flush(){this.outgoing&&(this.log("_flush: queue exists? %b",!!this.outgoing),Object.keys(this.outgoing).forEach(T=>{typeof this.outgoing[T].cb=="function"&&(this.outgoing[T].cb(new Error("Connection closed")),delete this.outgoing[T])}))}_removeTopicAliasAndRecoverTopicName(T){let S;T.properties&&(S=T.properties.topicAlias);let I=T.topic.toString();if(this.log("_removeTopicAliasAndRecoverTopicName :: alias %d, topic %o",S,I),I.length===0){if(typeof S>"u")return new Error("Unregistered Topic Alias");if(I=this.topicAliasSend.getTopicByAlias(S),typeof I>"u")return new Error("Unregistered Topic Alias");T.topic=I}S&&delete T.properties.topicAlias}_checkDisconnecting(T){return this.disconnecting&&(T&&T!==this.noop?T(new Error("client disconnecting")):this.emit("error",new Error("client disconnecting"))),this.disconnecting}_reconnect(){this.log("_reconnect: emitting reconnect to client"),this.emit("reconnect"),this.connected?(this.end(()=>{this.connect()}),this.log("client already connected. disconnecting first.")):(this.log("_reconnect: calling connect"),this.connect())}_setupReconnect(){!this.disconnecting&&!this.reconnectTimer&&this.options.reconnectPeriod>0?(this.reconnecting||(this.log("_setupReconnect :: emit `offline` state"),this.emit("offline"),this.log("_setupReconnect :: set `reconnecting` to `true`"),this.reconnecting=!0),this.log("_setupReconnect :: setting reconnectTimer for %d ms",this.options.reconnectPeriod),this.reconnectTimer=setInterval(()=>{this.log("reconnectTimer :: reconnect triggered!"),this._reconnect()},this.options.reconnectPeriod)):this.log("_setupReconnect :: doing nothing...")}_clearReconnect(){this.log("_clearReconnect : clearing reconnect timer"),this.reconnectTimer&&(clearInterval(this.reconnectTimer),this.reconnectTimer=null)}_cleanUp(T,S,I={}){if(S&&(this.log("_cleanUp :: done callback provided for on stream close"),this.stream.on("close",S)),this.log("_cleanUp :: forced? %s",T),T)this.options.reconnectPeriod===0&&this.options.clean&&this._flush(),this.log("_cleanUp :: (%s) :: destroying stream",this.options.clientId),this.stream.destroy();else{let P={cmd:"disconnect",...I};this.log("_cleanUp :: (%s) :: call _sendPacket with disconnect packet",this.options.clientId),this._sendPacket(P,()=>{this.log("_cleanUp :: (%s) :: destroying stream",this.options.clientId),g(()=>{this.stream.end(()=>{this.log("_cleanUp :: (%s) :: stream destroyed",this.options.clientId)})})})}!this.disconnecting&&!this.reconnecting&&(this.log("_cleanUp :: client not disconnecting/reconnecting. Clearing and resetting reconnect."),this._clearReconnect(),this._setupReconnect()),this._destroyKeepaliveManager(),S&&!this.connected&&(this.log("_cleanUp :: (%s) :: removing stream `done` callback `close` listener",this.options.clientId),this.stream.removeListener("close",S),S())}_storeAndSend(T,S,I){this.log("storeAndSend :: store packet with cmd %s to outgoingStore",T.cmd);let P=T,O;if(P.cmd==="publish"&&(P=(0,r.default)(T),O=this._removeTopicAliasAndRecoverTopicName(P),O))return S&&S(O);this.outgoingStore.put(P,R=>{if(R)return S&&S(R);I(),this._writePacket(T,S)})}_applyTopicAlias(T){if(this.options.protocolVersion===5&&T.cmd==="publish"){let S;T.properties&&(S=T.properties.topicAlias);let I=T.topic.toString();if(this.topicAliasSend)if(S){if(I.length!==0&&(this.log("applyTopicAlias :: register topic: %s - alias: %d",I,S),!this.topicAliasSend.put(I,S)))return this.log("applyTopicAlias :: error out of range. topic: %s - alias: %d",I,S),new Error("Sending Topic Alias out of range")}else I.length!==0&&(this.options.autoAssignTopicAlias?(S=this.topicAliasSend.getAliasByTopic(I),S?(T.topic="",T.properties={...T.properties,topicAlias:S},this.log("applyTopicAlias :: auto assign(use) topic: %s - alias: %d",I,S)):(S=this.topicAliasSend.getLruAlias(),this.topicAliasSend.put(I,S),T.properties={...T.properties,topicAlias:S},this.log("applyTopicAlias :: auto assign topic: %s - alias: %d",I,S))):this.options.autoUseTopicAlias&&(S=this.topicAliasSend.getAliasByTopic(I),S&&(T.topic="",T.properties={...T.properties,topicAlias:S},this.log("applyTopicAlias :: auto use topic: %s - alias: %d",I,S))));else if(S)return this.log("applyTopicAlias :: error out of range. topic: %s - alias: %d",I,S),new Error("Sending Topic Alias out of range")}}_noop(T){this.log("noop ::",T)}_writePacket(T,S){this.log("_writePacket :: packet: %O",T),this.log("_writePacket :: emitting `packetsend`"),this.emit("packetsend",T),this.log("_writePacket :: writing to stream");let I=t.default.writeToStream(T,this.stream,this.options);this.log("_writePacket :: writeToStream result %s",I),!I&&S&&S!==this.noop?(this.log("_writePacket :: handle events on `drain` once through callback."),this.stream.once("drain",S)):S&&(this.log("_writePacket :: invoking cb"),S())}_sendPacket(T,S,I,P){this.log("_sendPacket :: (%s) ::  start",this.options.clientId),I=I||this.noop,S=S||this.noop;let O=this._applyTopicAlias(T);if(O){S(O);return}if(!this.connected){if(T.cmd==="auth"){this._writePacket(T,S);return}this.log("_sendPacket :: client not connected. Storing packet offline."),this._storePacket(T,S,I);return}if(P){this._writePacket(T,S);return}switch(T.cmd){case"publish":break;case"pubrel":this._storeAndSend(T,S,I);return;default:this._writePacket(T,S);return}switch(T.qos){case 2:case 1:this._storeAndSend(T,S,I);break;default:this._writePacket(T,S);break}this.log("_sendPacket :: (%s) ::  end",this.options.clientId)}_storePacket(T,S,I){this.log("_storePacket :: packet: %o",T),this.log("_storePacket :: cb? %s",!!S),I=I||this.noop;let P=T;if(P.cmd==="publish"){P=(0,r.default)(T);let R=this._removeTopicAliasAndRecoverTopicName(P);if(R)return S&&S(R)}let O=P.qos||0;O===0&&this.queueQoSZero||P.cmd!=="publish"?this.queue.push({packet:P,cb:S}):O>0?(S=this.outgoing[P.messageId]?this.outgoing[P.messageId].cb:null,this.outgoingStore.put(P,R=>{if(R)return S&&S(R);I()})):S&&S(new Error("No connection to broker"))}_setupKeepaliveManager(){this.log("_setupKeepaliveManager :: keepalive %d (seconds)",this.options.keepalive),!this.keepaliveManager&&this.options.keepalive&&(this.keepaliveManager=new v.default(this,this.options.timerVariant))}_destroyKeepaliveManager(){this.keepaliveManager&&(this.log("_destroyKeepaliveManager :: destroying keepalive manager"),this.keepaliveManager.destroy(),this.keepaliveManager=null)}reschedulePing(T=!1){this.keepaliveManager&&this.options.keepalive&&(T||this.options.reschedulePings)&&this._reschedulePing()}_reschedulePing(){this.log("_reschedulePing :: rescheduling ping"),this.keepaliveManager.reschedule()}sendPing(){this.log("_sendPing :: sending pingreq"),this._sendPacket({cmd:"pingreq"})}onKeepaliveTimeout(){this.emit("error",new Error("Keepalive timeout")),this.log("onKeepaliveTimeout :: calling _cleanUp with force true"),this._cleanUp(!0)}_resubscribe(){this.log("_resubscribe");let T=Object.keys(this._resubscribeTopics);if(!this._firstConnection&&(this.options.clean||this.options.protocolVersion>=4&&!this.connackPacket.sessionPresent)&&T.length>0)if(this.options.resubscribe)if(this.options.protocolVersion===5){this.log("_resubscribe: protocolVersion 5");for(let S=0;S<T.length;S++){let I={};I[T[S]]=this._resubscribeTopics[T[S]],I.resubscribe=!0,this.subscribe(I,{properties:I[T[S]].properties})}}else this._resubscribeTopics.resubscribe=!0,this.subscribe(this._resubscribeTopics);else this._resubscribeTopics={};this._firstConnection=!1}_onConnect(T){if(this.disconnected){this.emit("connect",T);return}this.connackPacket=T,this.messageIdProvider.clear(),this._setupKeepaliveManager(),this.connected=!0;let S=()=>{let I=this.outgoingStore.createStream(),P=()=>{I.destroy(),I=null,this._flushStoreProcessingQueue(),O()},O=()=>{this._storeProcessing=!1,this._packetIdsDuringStoreProcessing={}};this.once("close",P),I.on("error",C=>{O(),this._flushStoreProcessingQueue(),this.removeListener("close",P),this.emit("error",C)});let R=()=>{if(!I)return;let C=I.read(1),W;if(!C){I.once("readable",R);return}if(this._storeProcessing=!0,this._packetIdsDuringStoreProcessing[C.messageId]){R();return}!this.disconnecting&&!this.reconnectTimer?(W=this.outgoing[C.messageId]?this.outgoing[C.messageId].cb:null,this.outgoing[C.messageId]={volatile:!1,cb(F,j){W&&W(F,j),R()}},this._packetIdsDuringStoreProcessing[C.messageId]=!0,this.messageIdProvider.register(C.messageId)?this._sendPacket(C,void 0,void 0,!0):this.log("messageId: %d has already used.",C.messageId)):I.destroy&&I.destroy()};I.on("end",()=>{let C=!0;for(let W in this._packetIdsDuringStoreProcessing)if(!this._packetIdsDuringStoreProcessing[W]){C=!1;break}this.removeListener("close",P),C?(O(),this._invokeAllStoreProcessingQueue(),this.emit("connect",T)):S()}),R()};S()}_invokeStoreProcessingQueue(){if(!this._storeProcessing&&this._storeProcessingQueue.length>0){let T=this._storeProcessingQueue[0];if(T&&T.invoke())return this._storeProcessingQueue.shift(),!0}return!1}_invokeAllStoreProcessingQueue(){for(;this._invokeStoreProcessingQueue(););}_flushStoreProcessingQueue(){for(let T of this._storeProcessingQueue)T.cbStorePut&&T.cbStorePut(new Error("Connection closed")),T.callback&&T.callback(new Error("Connection closed"));this._storeProcessingQueue.splice(0)}_removeOutgoingAndStoreMessage(T,S){delete this.outgoing[T],this.outgoingStore.del({messageId:T},(I,P)=>{S(I,P),this.messageIdProvider.deallocate(T),this._invokeStoreProcessingQueue()})}};c.default=k}),bd=ye(c=>{he(),me(),fe(),Object.defineProperty(c,"__esModule",{value:!0});var f=Da(),a=class{numberAllocator;lastId;constructor(){this.numberAllocator=new f.NumberAllocator(1,65535)}allocate(){return this.lastId=this.numberAllocator.alloc(),this.lastId}getLastAllocated(){return this.lastId}register(l){return this.numberAllocator.use(l)}deallocate(l){this.numberAllocator.free(l)}clear(){this.numberAllocator.clear()}};c.default=a});function vd(){if(As)return Mn;As=!0;let c=2147483647,f=36,a=1,l=26,d=38,t=700,n=72,r=128,e="-",s=/^xn--/,i=/[^\0-\x7F]/,m=/[\x2E\u3002\uFF0E\uFF61]/g,h={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},b=f-a,u=Math.floor,o=String.fromCharCode;function v(O){throw new RangeError(h[O])}function w(O,R){let C=[],W=O.length;for(;W--;)C[W]=R(O[W]);return C}function g(O,R){let C=O.split("@"),W="";C.length>1&&(W=C[0]+"@",O=C[1]),O=O.replace(m,".");let F=O.split("."),j=w(F,R).join(".");return W+j}function _(O){let R=[],C=0,W=O.length;for(;C<W;){let F=O.charCodeAt(C++);if(F>=55296&&F<=56319&&C<W){let j=O.charCodeAt(C++);(j&64512)==56320?R.push(((F&1023)<<10)+(j&1023)+65536):(R.push(F),C--)}else R.push(F)}return R}let k=O=>String.fromCodePoint(...O),y=function(O){return O>=48&&O<58?26+(O-48):O>=65&&O<91?O-65:O>=97&&O<123?O-97:f},T=function(O,R){return O+22+75*(O<26)-((R!=0)<<5)},S=function(O,R,C){let W=0;for(O=C?u(O/t):O>>1,O+=u(O/R);O>b*l>>1;W+=f)O=u(O/b);return u(W+(b+1)*O/(O+d))},I=function(O){let R=[],C=O.length,W=0,F=r,j=n,de=O.lastIndexOf(e);de<0&&(de=0);for(let X=0;X<de;++X)O.charCodeAt(X)>=128&&v("not-basic"),R.push(O.charCodeAt(X));for(let X=de>0?de+1:0;X<C;){let K=W;for(let D=1,Z=f;;Z+=f){X>=C&&v("invalid-input");let N=y(O.charCodeAt(X++));N>=f&&v("invalid-input"),N>u((c-W)/D)&&v("overflow"),W+=N*D;let J=Z<=j?a:Z>=j+l?l:Z-j;if(N<J)break;let be=f-J;D>u(c/be)&&v("overflow"),D*=be}let ie=R.length+1;j=S(W-K,ie,K==0),u(W/ie)>c-F&&v("overflow"),F+=u(W/ie),W%=ie,R.splice(W++,0,F)}return String.fromCodePoint(...R)},P=function(O){let R=[];O=_(O);let C=O.length,W=r,F=0,j=n;for(let K of O)K<128&&R.push(o(K));let de=R.length,X=de;for(de&&R.push(e);X<C;){let K=c;for(let D of O)D>=W&&D<K&&(K=D);let ie=X+1;K-W>u((c-F)/ie)&&v("overflow"),F+=(K-W)*ie,W=K;for(let D of O)if(D<W&&++F>c&&v("overflow"),D===W){let Z=F;for(let N=f;;N+=f){let J=N<=j?a:N>=j+l?l:N-j;if(Z<J)break;let be=Z-J,re=f-J;R.push(o(T(J+be%re,0))),Z=u(be/re)}R.push(o(T(Z,0))),j=S(F,ie,X===de),F=0,++X}++F,++W}return R.join("")};return Mn={version:"2.3.1",ucs2:{decode:_,encode:k},decode:I,encode:P,toASCII:function(O){return g(O,function(R){return i.test(R)?"xn--"+P(R):R})},toUnicode:function(O){return g(O,function(R){return s.test(R)?I(R.slice(4).toLowerCase()):R})}},Mn}var Mn,As,jt,yd=mt(()=>{he(),me(),fe(),Mn={},As=!1,jt=vd(),jt.decode,jt.encode,jt.toASCII,jt.toUnicode,jt.ucs2,jt.version});function wd(){return Es||(Es=!0,Is=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var c={},f=Symbol("test"),a=Object(f);if(typeof f=="string"||Object.prototype.toString.call(f)!=="[object Symbol]"||Object.prototype.toString.call(a)!=="[object Symbol]")return!1;var l=42;c[f]=l;for(f in c)return!1;if(typeof Object.keys=="function"&&Object.keys(c).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(c).length!==0)return!1;var d=Object.getOwnPropertySymbols(c);if(d.length!==1||d[0]!==f||!Object.prototype.propertyIsEnumerable.call(c,f))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var t=Object.getOwnPropertyDescriptor(c,f);if(t.value!==l||t.enumerable!==!0)return!1}return!0}),Is}function _d(){return Ms||(Ms=!0,Cs=Error),Cs}function kd(){return Os||(Os=!0,Ps=EvalError),Ps}function xd(){return Rs||(Rs=!0,Ns=RangeError),Ns}function Sd(){return Ls||(Ls=!0,Us=ReferenceError),Us}function Ya(){return js||(js=!0,qs=SyntaxError),qs}function xn(){return Bs||(Bs=!0,Fs=TypeError),Fs}function Td(){return Ws||(Ws=!0,Ds=URIError),Ds}function Ad(){if(Hs)return Pn;Hs=!0;var c=typeof Symbol<"u"&&Symbol,f=wd();return Pn=function(){return typeof c!="function"||typeof Symbol!="function"||typeof c("foo")!="symbol"||typeof Symbol("bar")!="symbol"?!1:f()},Pn}function Id(){if($s)return On;$s=!0;var c={__proto__:null,foo:{}},f=Object;return On=function(){return{__proto__:c}.foo===c.foo&&!(c instanceof f)},On}function Ed(){if(zs)return Nn;zs=!0;var c="Function.prototype.bind called on incompatible ",f=Object.prototype.toString,a=Math.max,l="[object Function]",d=function(r,e){for(var s=[],i=0;i<r.length;i+=1)s[i]=r[i];for(var m=0;m<e.length;m+=1)s[m+r.length]=e[m];return s},t=function(r,e){for(var s=[],i=e,m=0;i<r.length;i+=1,m+=1)s[m]=r[i];return s},n=function(r,e){for(var s="",i=0;i<r.length;i+=1)s+=r[i],i+1<r.length&&(s+=e);return s};return Nn=function(r){var e=this;if(typeof e!="function"||f.apply(e)!==l)throw new TypeError(c+e);for(var s=t(arguments,1),i,m=function(){if(this instanceof i){var v=e.apply(this,d(s,arguments));return Object(v)===v?v:this}return e.apply(r,d(s,arguments))},h=a(0,e.length-s.length),b=[],u=0;u<h;u++)b[u]="$"+u;if(i=Function("binder","return function ("+n(b,",")+"){ return binder.apply(this,arguments); }")(m),e.prototype){var o=function(){};o.prototype=e.prototype,i.prototype=new o,o.prototype=null}return i},Nn}function yi(){if(Ks)return Rn;Ks=!0;var c=Ed();return Rn=Function.prototype.bind||c,Rn}function Cd(){if(Vs)return Un;Vs=!0;var c=Function.prototype.call,f=Object.prototype.hasOwnProperty,a=yi();return Un=a.call(c,f),Un}function ln(){if(Qs)return Ln;Qs=!0;var c,f=_d(),a=kd(),l=xd(),d=Sd(),t=Ya(),n=xn(),r=Td(),e=Function,s=function(X){try{return e('"use strict"; return ('+X+").constructor;")()}catch{}},i=Object.getOwnPropertyDescriptor;if(i)try{i({},"")}catch{i=null}var m=function(){throw new n},h=i?(function(){try{return arguments.callee,m}catch{try{return i(arguments,"callee").get}catch{return m}}})():m,b=Ad()(),u=Id()(),o=Object.getPrototypeOf||(u?function(X){return X.__proto__}:null),v={},w=typeof Uint8Array>"u"||!o?c:o(Uint8Array),g={__proto__:null,"%AggregateError%":typeof AggregateError>"u"?c:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer>"u"?c:ArrayBuffer,"%ArrayIteratorPrototype%":b&&o?o([][Symbol.iterator]()):c,"%AsyncFromSyncIteratorPrototype%":c,"%AsyncFunction%":v,"%AsyncGenerator%":v,"%AsyncGeneratorFunction%":v,"%AsyncIteratorPrototype%":v,"%Atomics%":typeof Atomics>"u"?c:Atomics,"%BigInt%":typeof BigInt>"u"?c:BigInt,"%BigInt64Array%":typeof BigInt64Array>"u"?c:BigInt64Array,"%BigUint64Array%":typeof BigUint64Array>"u"?c:BigUint64Array,"%Boolean%":Boolean,"%DataView%":typeof DataView>"u"?c:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":f,"%eval%":eval,"%EvalError%":a,"%Float32Array%":typeof Float32Array>"u"?c:Float32Array,"%Float64Array%":typeof Float64Array>"u"?c:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry>"u"?c:FinalizationRegistry,"%Function%":e,"%GeneratorFunction%":v,"%Int8Array%":typeof Int8Array>"u"?c:Int8Array,"%Int16Array%":typeof Int16Array>"u"?c:Int16Array,"%Int32Array%":typeof Int32Array>"u"?c:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":b&&o?o(o([][Symbol.iterator]())):c,"%JSON%":typeof JSON=="object"?JSON:c,"%Map%":typeof Map>"u"?c:Map,"%MapIteratorPrototype%":typeof Map>"u"||!b||!o?c:o(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise>"u"?c:Promise,"%Proxy%":typeof Proxy>"u"?c:Proxy,"%RangeError%":l,"%ReferenceError%":d,"%Reflect%":typeof Reflect>"u"?c:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set>"u"?c:Set,"%SetIteratorPrototype%":typeof Set>"u"||!b||!o?c:o(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer>"u"?c:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":b&&o?o(""[Symbol.iterator]()):c,"%Symbol%":b?Symbol:c,"%SyntaxError%":t,"%ThrowTypeError%":h,"%TypedArray%":w,"%TypeError%":n,"%Uint8Array%":typeof Uint8Array>"u"?c:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray>"u"?c:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array>"u"?c:Uint16Array,"%Uint32Array%":typeof Uint32Array>"u"?c:Uint32Array,"%URIError%":r,"%WeakMap%":typeof WeakMap>"u"?c:WeakMap,"%WeakRef%":typeof WeakRef>"u"?c:WeakRef,"%WeakSet%":typeof WeakSet>"u"?c:WeakSet};if(o)try{null.error}catch(X){var _=o(o(X));g["%Error.prototype%"]=_}var k=function X(K){var ie;if(K==="%AsyncFunction%")ie=s("async function () {}");else if(K==="%GeneratorFunction%")ie=s("function* () {}");else if(K==="%AsyncGeneratorFunction%")ie=s("async function* () {}");else if(K==="%AsyncGenerator%"){var D=X("%AsyncGeneratorFunction%");D&&(ie=D.prototype)}else if(K==="%AsyncIteratorPrototype%"){var Z=X("%AsyncGenerator%");Z&&o&&(ie=o(Z.prototype))}return g[K]=ie,ie},y={__proto__:null,"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},T=yi(),S=Cd(),I=T.call(Function.call,Array.prototype.concat),P=T.call(Function.apply,Array.prototype.splice),O=T.call(Function.call,String.prototype.replace),R=T.call(Function.call,String.prototype.slice),C=T.call(Function.call,RegExp.prototype.exec),W=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,F=/\\(\\)?/g,j=function(X){var K=R(X,0,1),ie=R(X,-1);if(K==="%"&&ie!=="%")throw new t("invalid intrinsic syntax, expected closing `%`");if(ie==="%"&&K!=="%")throw new t("invalid intrinsic syntax, expected opening `%`");var D=[];return O(X,W,function(Z,N,J,be){D[D.length]=J?O(be,F,"$1"):N||Z}),D},de=function(X,K){var ie=X,D;if(S(y,ie)&&(D=y[ie],ie="%"+D[0]+"%"),S(g,ie)){var Z=g[ie];if(Z===v&&(Z=k(ie)),typeof Z>"u"&&!K)throw new n("intrinsic "+X+" exists, but is not available. Please file an issue!");return{alias:D,name:ie,value:Z}}throw new t("intrinsic "+X+" does not exist!")};return Ln=function(X,K){if(typeof X!="string"||X.length===0)throw new n("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof K!="boolean")throw new n('"allowMissing" argument must be a boolean');if(C(/^%?[^%]*%?$/,X)===null)throw new t("`%` may not be present anywhere but at the beginning and end of the intrinsic name");var ie=j(X),D=ie.length>0?ie[0]:"",Z=de("%"+D+"%",K),N=Z.name,J=Z.value,be=!1,re=Z.alias;re&&(D=re[0],P(ie,I([0,1],re)));for(var xe=1,Q=!0;xe<ie.length;xe+=1){var q=ie[xe],ae=R(q,0,1),V=R(q,-1);if((ae==='"'||ae==="'"||ae==="`"||V==='"'||V==="'"||V==="`")&&ae!==V)throw new t("property names with quotes must have matching quotes");if((q==="constructor"||!Q)&&(be=!0),D+="."+q,N="%"+D+"%",S(g,N))J=g[N];else if(J!=null){if(!(q in J)){if(!K)throw new n("base intrinsic for "+X+" exists, but the property is not available.");return}if(i&&xe+1>=ie.length){var z=i(J,q);Q=!!z,Q&&"get"in z&&!("originalValue"in z.get)?J=z.get:J=J[q]}else Q=S(J,q),J=J[q];Q&&!be&&(g[N]=J)}}return J},Ln}function wi(){if(Gs)return qn;Gs=!0;var c=ln(),f=c("%Object.defineProperty%",!0)||!1;if(f)try{f({},"a",{value:1})}catch{f=!1}return qn=f,qn}function Ja(){if(Ys)return jn;Ys=!0;var c=ln(),f=c("%Object.getOwnPropertyDescriptor%",!0);if(f)try{f([],"length")}catch{f=null}return jn=f,jn}function Md(){if(Js)return Fn;Js=!0;var c=wi(),f=Ya(),a=xn(),l=Ja();return Fn=function(d,t,n){if(!d||typeof d!="object"&&typeof d!="function")throw new a("`obj` must be an object or a function`");if(typeof t!="string"&&typeof t!="symbol")throw new a("`property` must be a string or a symbol`");if(arguments.length>3&&typeof arguments[3]!="boolean"&&arguments[3]!==null)throw new a("`nonEnumerable`, if provided, must be a boolean or null");if(arguments.length>4&&typeof arguments[4]!="boolean"&&arguments[4]!==null)throw new a("`nonWritable`, if provided, must be a boolean or null");if(arguments.length>5&&typeof arguments[5]!="boolean"&&arguments[5]!==null)throw new a("`nonConfigurable`, if provided, must be a boolean or null");if(arguments.length>6&&typeof arguments[6]!="boolean")throw new a("`loose`, if provided, must be a boolean");var r=arguments.length>3?arguments[3]:null,e=arguments.length>4?arguments[4]:null,s=arguments.length>5?arguments[5]:null,i=arguments.length>6?arguments[6]:!1,m=!!l&&l(d,t);if(c)c(d,t,{configurable:s===null&&m?m.configurable:!s,enumerable:r===null&&m?m.enumerable:!r,value:n,writable:e===null&&m?m.writable:!e});else if(i||!r&&!e&&!s)d[t]=n;else throw new f("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.")},Fn}function Pd(){if(Xs)return Bn;Xs=!0;var c=wi(),f=function(){return!!c};return f.hasArrayLengthDefineBug=function(){if(!c)return null;try{return c([],"length",{value:1}).length!==1}catch{return!0}},Bn=f,Bn}function Od(){if(Zs)return Dn;Zs=!0;var c=ln(),f=Md(),a=Pd()(),l=Ja(),d=xn(),t=c("%Math.floor%");return Dn=function(n,r){if(typeof n!="function")throw new d("`fn` is not a function");if(typeof r!="number"||r<0||r>4294967295||t(r)!==r)throw new d("`length` must be a positive 32-bit integer");var e=arguments.length>2&&!!arguments[2],s=!0,i=!0;if("length"in n&&l){var m=l(n,"length");m&&!m.configurable&&(s=!1),m&&!m.writable&&(i=!1)}return(s||i||!e)&&(a?f(n,"length",r,!0,!0):f(n,"length",r)),n},Dn}function Nd(){if(ei)return nn;ei=!0;var c=yi(),f=ln(),a=Od(),l=xn(),d=f("%Function.prototype.apply%"),t=f("%Function.prototype.call%"),n=f("%Reflect.apply%",!0)||c.call(t,d),r=wi(),e=f("%Math.max%");nn=function(i){if(typeof i!="function")throw new l("a function is required");var m=n(c,t,arguments);return a(m,1+e(0,i.length-(arguments.length-1)),!0)};var s=function(){return n(c,d,arguments)};return r?r(nn,"apply",{value:s}):nn.apply=s,nn}function Rd(){if(ti)return Wn;ti=!0;var c=ln(),f=Nd(),a=f(c("String.prototype.indexOf"));return Wn=function(l,d){var t=c(l,!!d);return typeof t=="function"&&a(l,".prototype.")>-1?f(t):t},Wn}var Is,Es,Cs,Ms,Ps,Os,Ns,Rs,Us,Ls,qs,js,Fs,Bs,Ds,Ws,Pn,Hs,On,$s,Nn,zs,Rn,Ks,Un,Vs,Ln,Qs,qn,Gs,jn,Ys,Fn,Js,Bn,Xs,Dn,Zs,nn,ei,Wn,ti,Ud=mt(()=>{he(),me(),fe(),Is={},Es=!1,Cs={},Ms=!1,Ps={},Os=!1,Ns={},Rs=!1,Us={},Ls=!1,qs={},js=!1,Fs={},Bs=!1,Ds={},Ws=!1,Pn={},Hs=!1,On={},$s=!1,Nn={},zs=!1,Rn={},Ks=!1,Un={},Vs=!1,Ln={},Qs=!1,qn={},Gs=!1,jn={},Ys=!1,Fn={},Js=!1,Bn={},Xs=!1,Dn={},Zs=!1,nn={},ei=!1,Wn={},ti=!1});function _i(c){throw new Error("Node.js process "+c+" is not supported by JSPM core outside of Node.js")}function Ld(){!Yt||!Vt||(Yt=!1,Vt.length?kt=Vt.concat(kt):bn=-1,kt.length&&Xa())}function Xa(){if(!Yt){var c=setTimeout(Ld,0);Yt=!0;for(var f=kt.length;f;){for(Vt=kt,kt=[];++bn<f;)Vt&&Vt[bn].run();bn=-1,f=kt.length}Vt=null,Yt=!1,clearTimeout(c)}}function qd(c){var f=new Array(arguments.length-1);if(arguments.length>1)for(var a=1;a<arguments.length;a++)f[a-1]=arguments[a];kt.push(new Za(c,f)),kt.length===1&&!Yt&&setTimeout(Xa,0)}function Za(c,f){this.fun=c,this.array=f}function at(){}function jd(c){_i("_linkedBinding")}function Fd(c){_i("dlopen")}function Bd(){return[]}function Dd(){return[]}function Wd(c,f){if(!c)throw new Error(f||"assertion error")}function Hd(){return!1}function $d(){return Et.now()/1e3}function ur(c){var f=Math.floor((Date.now()-Et.now())*.001),a=Et.now()*.001,l=Math.floor(a)+f,d=Math.floor(a%1*1e9);return c&&(l=l-c[0],d=d-c[1],d<0&&(l--,d+=Hn)),[l,d]}function Lt(){return ki}function zd(c){return[]}var kt,Yt,Vt,bn,Ui,Li,qi,ji,Fi,Bi,Di,Wi,Hi,$i,zi,Ki,Vi,Qi,Gi,Yi,Ji,Xi,Zi,eo,to,An,no,ro,so,io,oo,ao,lo,co,uo,po,ho,fo,mo,go,bo,vo,yo,wo,_o,ko,xo,So,To,Ao,Io,Et,pr,Hn,Eo,Co,Mo,Po,Oo,No,Ro,Uo,Lo,qo,jo,ki,el=mt(()=>{he(),me(),fe(),kt=[],Yt=!1,bn=-1,Za.prototype.run=function(){this.fun.apply(null,this.array)},Ui="browser",Li="x64",qi="browser",ji={PATH:"/usr/bin",LANG:navigator.language+".UTF-8",PWD:"/",HOME:"/home",TMP:"/tmp"},Fi=["/usr/bin/node"],Bi=[],Di="v16.8.0",Wi={},Hi=function(c,f){console.warn((f?f+": ":"")+c)},$i=function(c){_i("binding")},zi=function(c){return 0},Ki=function(){return"/"},Vi=function(c){},Qi={name:"node",sourceUrl:"",headersUrl:"",libUrl:""},Gi=at,Yi=[],Ji={},Xi=!1,Zi={},eo=at,to=at,An=function(){return{}},no=An,ro=An,so=at,io=at,oo=at,ao={},lo={inspector:!1,debug:!1,uv:!1,ipv6:!1,tls_alpn:!1,tls_sni:!1,tls_ocsp:!1,tls:!1,cached_builtins:!0},co=at,uo=at,po=at,ho=at,fo=at,mo=at,go=at,bo=void 0,vo=void 0,yo=void 0,wo=at,_o=2,ko=1,xo="/bin/usr/node",So=9229,To="node",Ao=[],Io=at,Et={now:typeof performance<"u"?performance.now.bind(performance):void 0,timing:typeof performance<"u"?performance.timing:void 0},Et.now===void 0&&(pr=Date.now(),Et.timing&&Et.timing.navigationStart&&(pr=Et.timing.navigationStart),Et.now=()=>Date.now()-pr),Hn=1e9,ur.bigint=function(c){var f=ur(c);return typeof BigInt>"u"?f[0]*Hn+f[1]:BigInt(f[0]*Hn)+BigInt(f[1])},Eo=10,Co={},Mo=0,Po=Lt,Oo=Lt,No=Lt,Ro=Lt,Uo=Lt,Lo=at,qo=Lt,jo=Lt,ki={version:Di,versions:Wi,arch:Li,platform:qi,release:Qi,_rawDebug:Gi,moduleLoadList:Yi,binding:$i,_linkedBinding:jd,_events:Co,_eventsCount:Mo,_maxListeners:Eo,on:Lt,addListener:Po,once:Oo,off:No,removeListener:Ro,removeAllListeners:Uo,emit:Lo,prependListener:qo,prependOnceListener:jo,listeners:zd,domain:Ji,_exiting:Xi,config:Zi,dlopen:Fd,uptime:$d,_getActiveRequests:Bd,_getActiveHandles:Dd,reallyExit:eo,_kill:to,cpuUsage:An,resourceUsage:no,memoryUsage:ro,kill:so,exit:io,openStdin:oo,allowedNodeEnvironmentFlags:ao,assert:Wd,features:lo,_fatalExceptions:co,setUncaughtExceptionCaptureCallback:uo,hasUncaughtExceptionCaptureCallback:Hd,emitWarning:Hi,nextTick:qd,_tickCallback:po,_debugProcess:ho,_debugEnd:fo,_startProfilerIdleNotifier:mo,_stopProfilerIdleNotifier:go,stdout:bo,stdin:yo,stderr:vo,abort:wo,umask:zi,chdir:Vi,cwd:Ki,env:ji,title:Ui,argv:Fi,execArgv:Bi,pid:_o,ppid:ko,execPath:xo,debugPort:So,hrtime:ur,argv0:To,_preload_modules:Ao,setSourceMapsEnabled:Io}});function Kd(){if(ni)return $n;ni=!0;var c=ki;function f(t){if(typeof t!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}function a(t,n){for(var r="",e=0,s=-1,i=0,m,h=0;h<=t.length;++h){if(h<t.length)m=t.charCodeAt(h);else{if(m===47)break;m=47}if(m===47){if(!(s===h-1||i===1))if(s!==h-1&&i===2){if(r.length<2||e!==2||r.charCodeAt(r.length-1)!==46||r.charCodeAt(r.length-2)!==46){if(r.length>2){var b=r.lastIndexOf("/");if(b!==r.length-1){b===-1?(r="",e=0):(r=r.slice(0,b),e=r.length-1-r.lastIndexOf("/")),s=h,i=0;continue}}else if(r.length===2||r.length===1){r="",e=0,s=h,i=0;continue}}n&&(r.length>0?r+="/..":r="..",e=2)}else r.length>0?r+="/"+t.slice(s+1,h):r=t.slice(s+1,h),e=h-s-1;s=h,i=0}else m===46&&i!==-1?++i:i=-1}return r}function l(t,n){var r=n.dir||n.root,e=n.base||(n.name||"")+(n.ext||"");return r?r===n.root?r+e:r+t+e:e}var d={resolve:function(){for(var t="",n=!1,r,e=arguments.length-1;e>=-1&&!n;e--){var s;e>=0?s=arguments[e]:(r===void 0&&(r=c.cwd()),s=r),f(s),s.length!==0&&(t=s+"/"+t,n=s.charCodeAt(0)===47)}return t=a(t,!n),n?t.length>0?"/"+t:"/":t.length>0?t:"."},normalize:function(t){if(f(t),t.length===0)return".";var n=t.charCodeAt(0)===47,r=t.charCodeAt(t.length-1)===47;return t=a(t,!n),t.length===0&&!n&&(t="."),t.length>0&&r&&(t+="/"),n?"/"+t:t},isAbsolute:function(t){return f(t),t.length>0&&t.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var t,n=0;n<arguments.length;++n){var r=arguments[n];f(r),r.length>0&&(t===void 0?t=r:t+="/"+r)}return t===void 0?".":d.normalize(t)},relative:function(t,n){if(f(t),f(n),t===n||(t=d.resolve(t),n=d.resolve(n),t===n))return"";for(var r=1;r<t.length&&t.charCodeAt(r)===47;++r);for(var e=t.length,s=e-r,i=1;i<n.length&&n.charCodeAt(i)===47;++i);for(var m=n.length,h=m-i,b=s<h?s:h,u=-1,o=0;o<=b;++o){if(o===b){if(h>b){if(n.charCodeAt(i+o)===47)return n.slice(i+o+1);if(o===0)return n.slice(i+o)}else s>b&&(t.charCodeAt(r+o)===47?u=o:o===0&&(u=0));break}var v=t.charCodeAt(r+o),w=n.charCodeAt(i+o);if(v!==w)break;v===47&&(u=o)}var g="";for(o=r+u+1;o<=e;++o)(o===e||t.charCodeAt(o)===47)&&(g.length===0?g+="..":g+="/..");return g.length>0?g+n.slice(i+u):(i+=u,n.charCodeAt(i)===47&&++i,n.slice(i))},_makeLong:function(t){return t},dirname:function(t){if(f(t),t.length===0)return".";for(var n=t.charCodeAt(0),r=n===47,e=-1,s=!0,i=t.length-1;i>=1;--i)if(n=t.charCodeAt(i),n===47){if(!s){e=i;break}}else s=!1;return e===-1?r?"/":".":r&&e===1?"//":t.slice(0,e)},basename:function(t,n){if(n!==void 0&&typeof n!="string")throw new TypeError('"ext" argument must be a string');f(t);var r=0,e=-1,s=!0,i;if(n!==void 0&&n.length>0&&n.length<=t.length){if(n.length===t.length&&n===t)return"";var m=n.length-1,h=-1;for(i=t.length-1;i>=0;--i){var b=t.charCodeAt(i);if(b===47){if(!s){r=i+1;break}}else h===-1&&(s=!1,h=i+1),m>=0&&(b===n.charCodeAt(m)?--m===-1&&(e=i):(m=-1,e=h))}return r===e?e=h:e===-1&&(e=t.length),t.slice(r,e)}else{for(i=t.length-1;i>=0;--i)if(t.charCodeAt(i)===47){if(!s){r=i+1;break}}else e===-1&&(s=!1,e=i+1);return e===-1?"":t.slice(r,e)}},extname:function(t){f(t);for(var n=-1,r=0,e=-1,s=!0,i=0,m=t.length-1;m>=0;--m){var h=t.charCodeAt(m);if(h===47){if(!s){r=m+1;break}continue}e===-1&&(s=!1,e=m+1),h===46?n===-1?n=m:i!==1&&(i=1):n!==-1&&(i=-1)}return n===-1||e===-1||i===0||i===1&&n===e-1&&n===r+1?"":t.slice(n,e)},format:function(t){if(t===null||typeof t!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof t);return l("/",t)},parse:function(t){f(t);var n={root:"",dir:"",base:"",ext:"",name:""};if(t.length===0)return n;var r=t.charCodeAt(0),e=r===47,s;e?(n.root="/",s=1):s=0;for(var i=-1,m=0,h=-1,b=!0,u=t.length-1,o=0;u>=s;--u){if(r=t.charCodeAt(u),r===47){if(!b){m=u+1;break}continue}h===-1&&(b=!1,h=u+1),r===46?i===-1?i=u:o!==1&&(o=1):i!==-1&&(o=-1)}return i===-1||h===-1||o===0||o===1&&i===h-1&&i===m+1?h!==-1&&(m===0&&e?n.base=n.name=t.slice(1,h):n.base=n.name=t.slice(m,h)):(m===0&&e?(n.name=t.slice(1,i),n.base=t.slice(1,h)):(n.name=t.slice(m,i),n.base=t.slice(m,h)),n.ext=t.slice(i,h)),m>0?n.dir=t.slice(0,m-1):e&&(n.dir="/"),n},sep:"/",delimiter:":",win32:null,posix:null};return d.posix=d,$n=d,$n}var $n,ni,ri,Vd=mt(()=>{he(),me(),fe(),el(),$n={},ni=!1,ri=Kd()}),tl={};sn(tl,{URL:()=>ul,Url:()=>ol,default:()=>lt,fileURLToPath:()=>rl,format:()=>al,parse:()=>dl,pathToFileURL:()=>sl,resolve:()=>ll,resolveObject:()=>cl});function Qd(){if(si)return zn;si=!0;var c=typeof Map=="function"&&Map.prototype,f=Object.getOwnPropertyDescriptor&&c?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,a=c&&f&&typeof f.get=="function"?f.get:null,l=c&&Map.prototype.forEach,d=typeof Set=="function"&&Set.prototype,t=Object.getOwnPropertyDescriptor&&d?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,n=d&&t&&typeof t.get=="function"?t.get:null,r=d&&Set.prototype.forEach,e=typeof WeakMap=="function"&&WeakMap.prototype,s=e?WeakMap.prototype.has:null,i=typeof WeakSet=="function"&&WeakSet.prototype,m=i?WeakSet.prototype.has:null,h=typeof WeakRef=="function"&&WeakRef.prototype,b=h?WeakRef.prototype.deref:null,u=Boolean.prototype.valueOf,o=Object.prototype.toString,v=Function.prototype.toString,w=String.prototype.match,g=String.prototype.slice,_=String.prototype.replace,k=String.prototype.toUpperCase,y=String.prototype.toLowerCase,T=RegExp.prototype.test,S=Array.prototype.concat,I=Array.prototype.join,P=Array.prototype.slice,O=Math.floor,R=typeof BigInt=="function"?BigInt.prototype.valueOf:null,C=Object.getOwnPropertySymbols,W=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Symbol.prototype.toString:null,F=typeof Symbol=="function"&&typeof Symbol.iterator=="object",j=typeof Symbol=="function"&&Symbol.toStringTag&&(typeof Symbol.toStringTag===F||!0)?Symbol.toStringTag:null,de=Object.prototype.propertyIsEnumerable,X=(typeof Reflect=="function"?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(G){return G.__proto__}:null);function K(G,oe){if(G===1/0||G===-1/0||G!==G||G&&G>-1e3&&G<1e3||T.call(/e/,oe))return oe;var Ne=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if(typeof G=="number"){var Re=G<0?-O(-G):O(G);if(Re!==G){var se=String(Re),ne=g.call(oe,se.length+1);return _.call(se,Ne,"$&_")+"."+_.call(_.call(ne,/([0-9]{3})/g,"$&_"),/_$/,"")}}return _.call(oe,Ne,"$&_")}var ie=il,D=ie.custom,Z=z(D)?D:null;zn=function G(oe,Ne,Re,se){var ne=Ne||{};if(ce(ne,"quoteStyle")&&ne.quoteStyle!=="single"&&ne.quoteStyle!=="double")throw new TypeError('option "quoteStyle" must be "single" or "double"');if(ce(ne,"maxStringLength")&&(typeof ne.maxStringLength=="number"?ne.maxStringLength<0&&ne.maxStringLength!==1/0:ne.maxStringLength!==null))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var Oe=ce(ne,"customInspect")?ne.customInspect:!0;if(typeof Oe!="boolean"&&Oe!=="symbol")throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(ce(ne,"indent")&&ne.indent!==null&&ne.indent!=="	"&&!(parseInt(ne.indent,10)===ne.indent&&ne.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(ce(ne,"numericSeparator")&&typeof ne.numericSeparator!="boolean")throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var ke=ne.numericSeparator;if(typeof oe>"u")return"undefined";if(oe===null)return"null";if(typeof oe=="boolean")return oe?"true":"false";if(typeof oe=="string")return le(oe,ne);if(typeof oe=="number"){if(oe===0)return 1/0/oe>0?"0":"-0";var je=String(oe);return ke?K(oe,je):je}if(typeof oe=="bigint"){var Be=String(oe)+"n";return ke?K(oe,Be):Be}var Ze=typeof ne.depth>"u"?5:ne.depth;if(typeof Re>"u"&&(Re=0),Re>=Ze&&Ze>0&&typeof oe=="object")return be(oe)?"[Array]":"[Object]";var De=ee(ne,Re);if(typeof se>"u")se=[];else if(te(se,oe)>=0)return"[Circular]";function $e(vt,Ut,$t){if(Ut&&(se=P.call(se),se.push(Ut)),$t){var yt={depth:ne.depth};return ce(ne,"quoteStyle")&&(yt.quoteStyle=ne.quoteStyle),G(vt,yt,Re+1,se)}return G(vt,ne,Re+1,se)}if(typeof oe=="function"&&!xe(oe)){var it=H(oe),nt=Ae(oe,$e);return"[Function"+(it?": "+it:" (anonymous)")+"]"+(nt.length>0?" { "+I.call(nt,", ")+" }":"")}if(z(oe)){var ht=F?_.call(String(oe),/^(Symbol\(.*\))_[^)]*$/,"$1"):W.call(oe);return typeof oe=="object"&&!F?p(ht):ht}if(Se(oe)){for(var M="<"+y.call(String(oe.nodeName)),L=oe.attributes||[],Te=0;Te<L.length;Te++)M+=" "+L[Te].name+"="+N(J(L[Te].value),"double",ne);return M+=">",oe.childNodes&&oe.childNodes.length&&(M+="..."),M+="</"+y.call(String(oe.nodeName))+">",M}if(be(oe)){if(oe.length===0)return"[]";var Ee=Ae(oe,$e);return De&&!B(Ee)?"["+ue(Ee,De)+"]":"[ "+I.call(Ee,", ")+" ]"}if(Q(oe)){var Me=Ae(oe,$e);return!("cause"in Error.prototype)&&"cause"in oe&&!de.call(oe,"cause")?"{ ["+String(oe)+"] "+I.call(S.call("[cause]: "+$e(oe.cause),Me),", ")+" }":Me.length===0?"["+String(oe)+"]":"{ ["+String(oe)+"] "+I.call(Me,", ")+" }"}if(typeof oe=="object"&&Oe){if(Z&&typeof oe[Z]=="function"&&ie)return ie(oe,{depth:Ze-Re});if(Oe!=="symbol"&&typeof oe.inspect=="function")return oe.inspect()}if(ge(oe)){var tt=[];return l&&l.call(oe,function(vt,Ut){tt.push($e(Ut,oe,!0)+" => "+$e(vt,oe))}),A("Map",a.call(oe),tt,De)}if($(oe)){var ut=[];return r&&r.call(oe,function(vt){ut.push($e(vt,oe))}),A("Set",n.call(oe),ut,De)}if(pe(oe))return x("WeakMap");if(ve(oe))return x("WeakSet");if(_e(oe))return x("WeakRef");if(ae(oe))return p($e(Number(oe)));if(Y(oe))return p($e(R.call(oe)));if(V(oe))return p(u.call(oe));if(q(oe))return p($e(String(oe)));if(typeof window<"u"&&oe===window)return"{ [object Window] }";if(typeof globalThis<"u"&&oe===globalThis||typeof Kn<"u"&&oe===Kn)return"{ [object globalThis] }";if(!re(oe)&&!xe(oe)){var bt=Ae(oe,$e),cn=X?X(oe)===Object.prototype:oe instanceof Object||oe.constructor===Object,dn=oe instanceof Object?"":"null prototype",un=!cn&&j&&Object(oe)===oe&&j in oe?g.call(U(oe),8,-1):dn?"Object":"",Sn=cn||typeof oe.constructor!="function"?"":oe.constructor.name?oe.constructor.name+" ":"",Ht=Sn+(un||dn?"["+I.call(S.call([],un||[],dn||[]),": ")+"] ":"");return bt.length===0?Ht+"{}":De?Ht+"{"+ue(bt,De)+"}":Ht+"{ "+I.call(bt,", ")+" }"}return String(oe)};function N(G,oe,Ne){var Re=(Ne.quoteStyle||oe)==="double"?'"':"'";return Re+G+Re}function J(G){return _.call(String(G),/"/g,"&quot;")}function be(G){return U(G)==="[object Array]"&&(!j||!(typeof G=="object"&&j in G))}function re(G){return U(G)==="[object Date]"&&(!j||!(typeof G=="object"&&j in G))}function xe(G){return U(G)==="[object RegExp]"&&(!j||!(typeof G=="object"&&j in G))}function Q(G){return U(G)==="[object Error]"&&(!j||!(typeof G=="object"&&j in G))}function q(G){return U(G)==="[object String]"&&(!j||!(typeof G=="object"&&j in G))}function ae(G){return U(G)==="[object Number]"&&(!j||!(typeof G=="object"&&j in G))}function V(G){return U(G)==="[object Boolean]"&&(!j||!(typeof G=="object"&&j in G))}function z(G){if(F)return G&&typeof G=="object"&&G instanceof Symbol;if(typeof G=="symbol")return!0;if(!G||typeof G!="object"||!W)return!1;try{return W.call(G),!0}catch{}return!1}function Y(G){if(!G||typeof G!="object"||!R)return!1;try{return R.call(G),!0}catch{}return!1}var we=Object.prototype.hasOwnProperty||function(G){return G in(this||Kn)};function ce(G,oe){return we.call(G,oe)}function U(G){return o.call(G)}function H(G){if(G.name)return G.name;var oe=w.call(v.call(G),/^function\s*([\w$]+)/);return oe?oe[1]:null}function te(G,oe){if(G.indexOf)return G.indexOf(oe);for(var Ne=0,Re=G.length;Ne<Re;Ne++)if(G[Ne]===oe)return Ne;return-1}function ge(G){if(!a||!G||typeof G!="object")return!1;try{a.call(G);try{n.call(G)}catch{return!0}return G instanceof Map}catch{}return!1}function pe(G){if(!s||!G||typeof G!="object")return!1;try{s.call(G,s);try{m.call(G,m)}catch{return!0}return G instanceof WeakMap}catch{}return!1}function _e(G){if(!b||!G||typeof G!="object")return!1;try{return b.call(G),!0}catch{}return!1}function $(G){if(!n||!G||typeof G!="object")return!1;try{n.call(G);try{a.call(G)}catch{return!0}return G instanceof Set}catch{}return!1}function ve(G){if(!m||!G||typeof G!="object")return!1;try{m.call(G,m);try{s.call(G,s)}catch{return!0}return G instanceof WeakSet}catch{}return!1}function Se(G){return!G||typeof G!="object"?!1:typeof HTMLElement<"u"&&G instanceof HTMLElement?!0:typeof G.nodeName=="string"&&typeof G.getAttribute=="function"}function le(G,oe){if(G.length>oe.maxStringLength){var Ne=G.length-oe.maxStringLength,Re="... "+Ne+" more character"+(Ne>1?"s":"");return le(g.call(G,0,oe.maxStringLength),oe)+Re}var se=_.call(_.call(G,/(['\\])/g,"\\$1"),/[\x00-\x1f]/g,qe);return N(se,"single",oe)}function qe(G){var oe=G.charCodeAt(0),Ne={8:"b",9:"t",10:"n",12:"f",13:"r"}[oe];return Ne?"\\"+Ne:"\\x"+(oe<16?"0":"")+k.call(oe.toString(16))}function p(G){return"Object("+G+")"}function x(G){return G+" { ? }"}function A(G,oe,Ne,Re){var se=Re?ue(Ne,Re):I.call(Ne,", ");return G+" ("+oe+") {"+se+"}"}function B(G){for(var oe=0;oe<G.length;oe++)if(te(G[oe],`
`)>=0)return!1;return!0}function ee(G,oe){var Ne;if(G.indent==="	")Ne="	";else if(typeof G.indent=="number"&&G.indent>0)Ne=I.call(Array(G.indent+1)," ");else return null;return{base:Ne,prev:I.call(Array(oe+1),Ne)}}function ue(G,oe){if(G.length===0)return"";var Ne=`
`+oe.prev+oe.base;return Ne+I.call(G,","+Ne)+`
`+oe.prev}function Ae(G,oe){var Ne=be(G),Re=[];if(Ne){Re.length=G.length;for(var se=0;se<G.length;se++)Re[se]=ce(G,se)?oe(G[se],G):""}var ne=typeof C=="function"?C(G):[],Oe;if(F){Oe={};for(var ke=0;ke<ne.length;ke++)Oe["$"+ne[ke]]=ne[ke]}for(var je in G)ce(G,je)&&(Ne&&String(Number(je))===je&&je<G.length||F&&Oe["$"+je]instanceof Symbol||(T.call(/[^\w$]/,je)?Re.push(oe(je,G)+": "+oe(G[je],G)):Re.push(je+": "+oe(G[je],G))));if(typeof C=="function")for(var Be=0;Be<ne.length;Be++)de.call(G,ne[Be])&&Re.push("["+oe(ne[Be])+"]: "+oe(G[ne[Be]],G));return Re}return zn}function Gd(){if(ii)return Vn;ii=!0;var c=ln(),f=Rd(),a=Qd(),l=xn(),d=c("%WeakMap%",!0),t=c("%Map%",!0),n=f("WeakMap.prototype.get",!0),r=f("WeakMap.prototype.set",!0),e=f("WeakMap.prototype.has",!0),s=f("Map.prototype.get",!0),i=f("Map.prototype.set",!0),m=f("Map.prototype.has",!0),h=function(v,w){for(var g=v,_;(_=g.next)!==null;g=_)if(_.key===w)return g.next=_.next,_.next=v.next,v.next=_,_},b=function(v,w){var g=h(v,w);return g&&g.value},u=function(v,w,g){var _=h(v,w);_?_.value=g:v.next={key:w,next:v.next,value:g}},o=function(v,w){return!!h(v,w)};return Vn=function(){var v,w,g,_={assert:function(k){if(!_.has(k))throw new l("Side channel does not contain "+a(k))},get:function(k){if(d&&k&&(typeof k=="object"||typeof k=="function")){if(v)return n(v,k)}else if(t){if(w)return s(w,k)}else if(g)return b(g,k)},has:function(k){if(d&&k&&(typeof k=="object"||typeof k=="function")){if(v)return e(v,k)}else if(t){if(w)return m(w,k)}else if(g)return o(g,k);return!1},set:function(k,y){d&&k&&(typeof k=="object"||typeof k=="function")?(v||(v=new d),r(v,k,y)):t?(w||(w=new t),i(w,k,y)):(g||(g={key:{},next:null}),u(g,k,y))}};return _},Vn}function xi(){if(oi)return Qn;oi=!0;var c=String.prototype.replace,f=/%20/g,a={RFC1738:"RFC1738",RFC3986:"RFC3986"};return Qn={default:a.RFC3986,formatters:{RFC1738:function(l){return c.call(l,f,"+")},RFC3986:function(l){return String(l)}},RFC1738:a.RFC1738,RFC3986:a.RFC3986},Qn}function nl(){if(ai)return Gn;ai=!0;var c=xi(),f=Object.prototype.hasOwnProperty,a=Array.isArray,l=(function(){for(var v=[],w=0;w<256;++w)v.push("%"+((w<16?"0":"")+w.toString(16)).toUpperCase());return v})(),d=function(v){for(;v.length>1;){var w=v.pop(),g=w.obj[w.prop];if(a(g)){for(var _=[],k=0;k<g.length;++k)typeof g[k]<"u"&&_.push(g[k]);w.obj[w.prop]=_}}},t=function(v,w){for(var g=w&&w.plainObjects?Object.create(null):{},_=0;_<v.length;++_)typeof v[_]<"u"&&(g[_]=v[_]);return g},n=function v(w,g,_){if(!g)return w;if(typeof g!="object"){if(a(w))w.push(g);else if(w&&typeof w=="object")(_&&(_.plainObjects||_.allowPrototypes)||!f.call(Object.prototype,g))&&(w[g]=!0);else return[w,g];return w}if(!w||typeof w!="object")return[w].concat(g);var k=w;return a(w)&&!a(g)&&(k=t(w,_)),a(w)&&a(g)?(g.forEach(function(y,T){if(f.call(w,T)){var S=w[T];S&&typeof S=="object"&&y&&typeof y=="object"?w[T]=v(S,y,_):w.push(y)}else w[T]=y}),w):Object.keys(g).reduce(function(y,T){var S=g[T];return f.call(y,T)?y[T]=v(y[T],S,_):y[T]=S,y},k)},r=function(v,w){return Object.keys(w).reduce(function(g,_){return g[_]=w[_],g},v)},e=function(v,w,g){var _=v.replace(/\+/g," ");if(g==="iso-8859-1")return _.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(_)}catch{return _}},s=1024,i=function(v,w,g,_,k){if(v.length===0)return v;var y=v;if(typeof v=="symbol"?y=Symbol.prototype.toString.call(v):typeof v!="string"&&(y=String(v)),g==="iso-8859-1")return escape(y).replace(/%u[0-9a-f]{4}/gi,function(C){return"%26%23"+parseInt(C.slice(2),16)+"%3B"});for(var T="",S=0;S<y.length;S+=s){for(var I=y.length>=s?y.slice(S,S+s):y,P=[],O=0;O<I.length;++O){var R=I.charCodeAt(O);if(R===45||R===46||R===95||R===126||R>=48&&R<=57||R>=65&&R<=90||R>=97&&R<=122||k===c.RFC1738&&(R===40||R===41)){P[P.length]=I.charAt(O);continue}if(R<128){P[P.length]=l[R];continue}if(R<2048){P[P.length]=l[192|R>>6]+l[128|R&63];continue}if(R<55296||R>=57344){P[P.length]=l[224|R>>12]+l[128|R>>6&63]+l[128|R&63];continue}O+=1,R=65536+((R&1023)<<10|I.charCodeAt(O)&1023),P[P.length]=l[240|R>>18]+l[128|R>>12&63]+l[128|R>>6&63]+l[128|R&63]}T+=P.join("")}return T},m=function(v){for(var w=[{obj:{o:v},prop:"o"}],g=[],_=0;_<w.length;++_)for(var k=w[_],y=k.obj[k.prop],T=Object.keys(y),S=0;S<T.length;++S){var I=T[S],P=y[I];typeof P=="object"&&P!==null&&g.indexOf(P)===-1&&(w.push({obj:y,prop:I}),g.push(P))}return d(w),v},h=function(v){return Object.prototype.toString.call(v)==="[object RegExp]"},b=function(v){return!v||typeof v!="object"?!1:!!(v.constructor&&v.constructor.isBuffer&&v.constructor.isBuffer(v))},u=function(v,w){return[].concat(v,w)},o=function(v,w){if(a(v)){for(var g=[],_=0;_<v.length;_+=1)g.push(w(v[_]));return g}return w(v)};return Gn={arrayToObject:t,assign:r,combine:u,compact:m,decode:e,encode:i,isBuffer:b,isRegExp:h,maybeMap:o,merge:n},Gn}function Yd(){if(li)return Yn;li=!0;var c=Gd(),f=nl(),a=xi(),l=Object.prototype.hasOwnProperty,d={brackets:function(o){return o+"[]"},comma:"comma",indices:function(o,v){return o+"["+v+"]"},repeat:function(o){return o}},t=Array.isArray,n=Array.prototype.push,r=function(o,v){n.apply(o,t(v)?v:[v])},e=Date.prototype.toISOString,s=a.default,i={addQueryPrefix:!1,allowDots:!1,allowEmptyArrays:!1,arrayFormat:"indices",charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encodeDotInKeys:!1,encoder:f.encode,encodeValuesOnly:!1,format:s,formatter:a.formatters[s],indices:!1,serializeDate:function(o){return e.call(o)},skipNulls:!1,strictNullHandling:!1},m=function(o){return typeof o=="string"||typeof o=="number"||typeof o=="boolean"||typeof o=="symbol"||typeof o=="bigint"},h={},b=function o(v,w,g,_,k,y,T,S,I,P,O,R,C,W,F,j,de,X){for(var K=v,ie=X,D=0,Z=!1;(ie=ie.get(h))!==void 0&&!Z;){var N=ie.get(v);if(D+=1,typeof N<"u"){if(N===D)throw new RangeError("Cyclic object value");Z=!0}typeof ie.get(h)>"u"&&(D=0)}if(typeof P=="function"?K=P(w,K):K instanceof Date?K=C(K):g==="comma"&&t(K)&&(K=f.maybeMap(K,function(U){return U instanceof Date?C(U):U})),K===null){if(y)return I&&!j?I(w,i.encoder,de,"key",W):w;K=""}if(m(K)||f.isBuffer(K)){if(I){var J=j?w:I(w,i.encoder,de,"key",W);return[F(J)+"="+F(I(K,i.encoder,de,"value",W))]}return[F(w)+"="+F(String(K))]}var be=[];if(typeof K>"u")return be;var re;if(g==="comma"&&t(K))j&&I&&(K=f.maybeMap(K,I)),re=[{value:K.length>0?K.join(",")||null:void 0}];else if(t(P))re=P;else{var xe=Object.keys(K);re=O?xe.sort(O):xe}var Q=S?w.replace(/\./g,"%2E"):w,q=_&&t(K)&&K.length===1?Q+"[]":Q;if(k&&t(K)&&K.length===0)return q+"[]";for(var ae=0;ae<re.length;++ae){var V=re[ae],z=typeof V=="object"&&typeof V.value<"u"?V.value:K[V];if(!(T&&z===null)){var Y=R&&S?V.replace(/\./g,"%2E"):V,we=t(K)?typeof g=="function"?g(q,Y):q:q+(R?"."+Y:"["+Y+"]");X.set(v,D);var ce=c();ce.set(h,X),r(be,o(z,we,g,_,k,y,T,S,g==="comma"&&j&&t(K)?null:I,P,O,R,C,W,F,j,de,ce))}}return be},u=function(o){if(!o)return i;if(typeof o.allowEmptyArrays<"u"&&typeof o.allowEmptyArrays!="boolean")throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(typeof o.encodeDotInKeys<"u"&&typeof o.encodeDotInKeys!="boolean")throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");if(o.encoder!==null&&typeof o.encoder<"u"&&typeof o.encoder!="function")throw new TypeError("Encoder has to be a function.");var v=o.charset||i.charset;if(typeof o.charset<"u"&&o.charset!=="utf-8"&&o.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var w=a.default;if(typeof o.format<"u"){if(!l.call(a.formatters,o.format))throw new TypeError("Unknown format option provided.");w=o.format}var g=a.formatters[w],_=i.filter;(typeof o.filter=="function"||t(o.filter))&&(_=o.filter);var k;if(o.arrayFormat in d?k=o.arrayFormat:"indices"in o?k=o.indices?"indices":"repeat":k=i.arrayFormat,"commaRoundTrip"in o&&typeof o.commaRoundTrip!="boolean")throw new TypeError("`commaRoundTrip` must be a boolean, or absent");var y=typeof o.allowDots>"u"?o.encodeDotInKeys===!0?!0:i.allowDots:!!o.allowDots;return{addQueryPrefix:typeof o.addQueryPrefix=="boolean"?o.addQueryPrefix:i.addQueryPrefix,allowDots:y,allowEmptyArrays:typeof o.allowEmptyArrays=="boolean"?!!o.allowEmptyArrays:i.allowEmptyArrays,arrayFormat:k,charset:v,charsetSentinel:typeof o.charsetSentinel=="boolean"?o.charsetSentinel:i.charsetSentinel,commaRoundTrip:o.commaRoundTrip,delimiter:typeof o.delimiter>"u"?i.delimiter:o.delimiter,encode:typeof o.encode=="boolean"?o.encode:i.encode,encodeDotInKeys:typeof o.encodeDotInKeys=="boolean"?o.encodeDotInKeys:i.encodeDotInKeys,encoder:typeof o.encoder=="function"?o.encoder:i.encoder,encodeValuesOnly:typeof o.encodeValuesOnly=="boolean"?o.encodeValuesOnly:i.encodeValuesOnly,filter:_,format:w,formatter:g,serializeDate:typeof o.serializeDate=="function"?o.serializeDate:i.serializeDate,skipNulls:typeof o.skipNulls=="boolean"?o.skipNulls:i.skipNulls,sort:typeof o.sort=="function"?o.sort:null,strictNullHandling:typeof o.strictNullHandling=="boolean"?o.strictNullHandling:i.strictNullHandling}};return Yn=function(o,v){var w=o,g=u(v),_,k;typeof g.filter=="function"?(k=g.filter,w=k("",w)):t(g.filter)&&(k=g.filter,_=k);var y=[];if(typeof w!="object"||w===null)return"";var T=d[g.arrayFormat],S=T==="comma"&&g.commaRoundTrip;_||(_=Object.keys(w)),g.sort&&_.sort(g.sort);for(var I=c(),P=0;P<_.length;++P){var O=_[P];g.skipNulls&&w[O]===null||r(y,b(w[O],O,T,S,g.allowEmptyArrays,g.strictNullHandling,g.skipNulls,g.encodeDotInKeys,g.encode?g.encoder:null,g.filter,g.sort,g.allowDots,g.serializeDate,g.format,g.formatter,g.encodeValuesOnly,g.charset,I))}var R=y.join(g.delimiter),C=g.addQueryPrefix===!0?"?":"";return g.charsetSentinel&&(g.charset==="iso-8859-1"?C+="utf8=%26%2310003%3B&":C+="utf8=%E2%9C%93&"),R.length>0?C+R:""},Yn}function Jd(){if(ci)return Jn;ci=!0;var c=nl(),f=Object.prototype.hasOwnProperty,a=Array.isArray,l={allowDots:!1,allowEmptyArrays:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decodeDotInKeys:!1,decoder:c.decode,delimiter:"&",depth:5,duplicates:"combine",ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictDepth:!1,strictNullHandling:!1},d=function(h){return h.replace(/&#(\d+);/g,function(b,u){return String.fromCharCode(parseInt(u,10))})},t=function(h,b){return h&&typeof h=="string"&&b.comma&&h.indexOf(",")>-1?h.split(","):h},n="utf8=%26%2310003%3B",r="utf8=%E2%9C%93",e=function(h,b){var u={__proto__:null},o=b.ignoreQueryPrefix?h.replace(/^\?/,""):h;o=o.replace(/%5B/gi,"[").replace(/%5D/gi,"]");var v=b.parameterLimit===1/0?void 0:b.parameterLimit,w=o.split(b.delimiter,v),g=-1,_,k=b.charset;if(b.charsetSentinel)for(_=0;_<w.length;++_)w[_].indexOf("utf8=")===0&&(w[_]===r?k="utf-8":w[_]===n&&(k="iso-8859-1"),g=_,_=w.length);for(_=0;_<w.length;++_)if(_!==g){var y=w[_],T=y.indexOf("]="),S=T===-1?y.indexOf("="):T+1,I,P;S===-1?(I=b.decoder(y,l.decoder,k,"key"),P=b.strictNullHandling?null:""):(I=b.decoder(y.slice(0,S),l.decoder,k,"key"),P=c.maybeMap(t(y.slice(S+1),b),function(R){return b.decoder(R,l.decoder,k,"value")})),P&&b.interpretNumericEntities&&k==="iso-8859-1"&&(P=d(P)),y.indexOf("[]=")>-1&&(P=a(P)?[P]:P);var O=f.call(u,I);O&&b.duplicates==="combine"?u[I]=c.combine(u[I],P):(!O||b.duplicates==="last")&&(u[I]=P)}return u},s=function(h,b,u,o){for(var v=o?b:t(b,u),w=h.length-1;w>=0;--w){var g,_=h[w];if(_==="[]"&&u.parseArrays)g=u.allowEmptyArrays&&(v===""||u.strictNullHandling&&v===null)?[]:[].concat(v);else{g=u.plainObjects?Object.create(null):{};var k=_.charAt(0)==="["&&_.charAt(_.length-1)==="]"?_.slice(1,-1):_,y=u.decodeDotInKeys?k.replace(/%2E/g,"."):k,T=parseInt(y,10);!u.parseArrays&&y===""?g={0:v}:!isNaN(T)&&_!==y&&String(T)===y&&T>=0&&u.parseArrays&&T<=u.arrayLimit?(g=[],g[T]=v):y!=="__proto__"&&(g[y]=v)}v=g}return v},i=function(h,b,u,o){if(h){var v=u.allowDots?h.replace(/\.([^.[]+)/g,"[$1]"):h,w=/(\[[^[\]]*])/,g=/(\[[^[\]]*])/g,_=u.depth>0&&w.exec(v),k=_?v.slice(0,_.index):v,y=[];if(k){if(!u.plainObjects&&f.call(Object.prototype,k)&&!u.allowPrototypes)return;y.push(k)}for(var T=0;u.depth>0&&(_=g.exec(v))!==null&&T<u.depth;){if(T+=1,!u.plainObjects&&f.call(Object.prototype,_[1].slice(1,-1))&&!u.allowPrototypes)return;y.push(_[1])}if(_){if(u.strictDepth===!0)throw new RangeError("Input depth exceeded depth option of "+u.depth+" and strictDepth is true");y.push("["+v.slice(_.index)+"]")}return s(y,b,u,o)}},m=function(h){if(!h)return l;if(typeof h.allowEmptyArrays<"u"&&typeof h.allowEmptyArrays!="boolean")throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");if(typeof h.decodeDotInKeys<"u"&&typeof h.decodeDotInKeys!="boolean")throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");if(h.decoder!==null&&typeof h.decoder<"u"&&typeof h.decoder!="function")throw new TypeError("Decoder has to be a function.");if(typeof h.charset<"u"&&h.charset!=="utf-8"&&h.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var b=typeof h.charset>"u"?l.charset:h.charset,u=typeof h.duplicates>"u"?l.duplicates:h.duplicates;if(u!=="combine"&&u!=="first"&&u!=="last")throw new TypeError("The duplicates option must be either combine, first, or last");var o=typeof h.allowDots>"u"?h.decodeDotInKeys===!0?!0:l.allowDots:!!h.allowDots;return{allowDots:o,allowEmptyArrays:typeof h.allowEmptyArrays=="boolean"?!!h.allowEmptyArrays:l.allowEmptyArrays,allowPrototypes:typeof h.allowPrototypes=="boolean"?h.allowPrototypes:l.allowPrototypes,allowSparse:typeof h.allowSparse=="boolean"?h.allowSparse:l.allowSparse,arrayLimit:typeof h.arrayLimit=="number"?h.arrayLimit:l.arrayLimit,charset:b,charsetSentinel:typeof h.charsetSentinel=="boolean"?h.charsetSentinel:l.charsetSentinel,comma:typeof h.comma=="boolean"?h.comma:l.comma,decodeDotInKeys:typeof h.decodeDotInKeys=="boolean"?h.decodeDotInKeys:l.decodeDotInKeys,decoder:typeof h.decoder=="function"?h.decoder:l.decoder,delimiter:typeof h.delimiter=="string"||c.isRegExp(h.delimiter)?h.delimiter:l.delimiter,depth:typeof h.depth=="number"||h.depth===!1?+h.depth:l.depth,duplicates:u,ignoreQueryPrefix:h.ignoreQueryPrefix===!0,interpretNumericEntities:typeof h.interpretNumericEntities=="boolean"?h.interpretNumericEntities:l.interpretNumericEntities,parameterLimit:typeof h.parameterLimit=="number"?h.parameterLimit:l.parameterLimit,parseArrays:h.parseArrays!==!1,plainObjects:typeof h.plainObjects=="boolean"?h.plainObjects:l.plainObjects,strictDepth:typeof h.strictDepth=="boolean"?!!h.strictDepth:l.strictDepth,strictNullHandling:typeof h.strictNullHandling=="boolean"?h.strictNullHandling:l.strictNullHandling}};return Jn=function(h,b){var u=m(b);if(h===""||h===null||typeof h>"u")return u.plainObjects?Object.create(null):{};for(var o=typeof h=="string"?e(h,u):h,v=u.plainObjects?Object.create(null):{},w=Object.keys(o),g=0;g<w.length;++g){var _=w[g],k=i(_,o[_],u,typeof h=="string");v=c.merge(v,k,u)}return u.allowSparse===!0?v:c.compact(v)},Jn}function Xd(){if(di)return Xn;di=!0;var c=Yd(),f=Jd(),a=xi();return Xn={formats:a,parse:f,stringify:c},Xn}function Zd(){if(ui)return Ft;ui=!0;var c=jt;function f(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}var a=/^([a-z0-9.+-]+:)/i,l=/:[0-9]*$/,d=/^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,t=["<",">",'"',"`"," ","\r",`
`,"	"],n=["{","}","|","\\","^","`"].concat(t),r=["'"].concat(n),e=["%","/","?",";","#"].concat(r),s=["/","?","#"],i=255,m=/^[+a-z0-9A-Z_-]{0,63}$/,h=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,b={javascript:!0,"javascript:":!0},u={javascript:!0,"javascript:":!0},o={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},v=Xd();function w(y,T,S){if(y&&typeof y=="object"&&y instanceof f)return y;var I=new f;return I.parse(y,T,S),I}f.prototype.parse=function(y,T,S){if(typeof y!="string")throw new TypeError("Parameter 'url' must be a string, not "+typeof y);var I=y.indexOf("?"),P=I!==-1&&I<y.indexOf("#")?"?":"#",O=y.split(P),R=/\\/g;O[0]=O[0].replace(R,"/"),y=O.join(P);var C=y;if(C=C.trim(),!S&&y.split("#").length===1){var W=d.exec(C);if(W)return this.path=C,this.href=C,this.pathname=W[1],W[2]?(this.search=W[2],T?this.query=v.parse(this.search.substr(1)):this.query=this.search.substr(1)):T&&(this.search="",this.query={}),this}var F=a.exec(C);if(F){F=F[0];var j=F.toLowerCase();this.protocol=j,C=C.substr(F.length)}if(S||F||C.match(/^\/\/[^@/]+@[^@/]+/)){var de=C.substr(0,2)==="//";de&&!(F&&u[F])&&(C=C.substr(2),this.slashes=!0)}if(!u[F]&&(de||F&&!o[F])){for(var X=-1,K=0;K<s.length;K++){var ie=C.indexOf(s[K]);ie!==-1&&(X===-1||ie<X)&&(X=ie)}var D,Z;X===-1?Z=C.lastIndexOf("@"):Z=C.lastIndexOf("@",X),Z!==-1&&(D=C.slice(0,Z),C=C.slice(Z+1),this.auth=decodeURIComponent(D)),X=-1;for(var K=0;K<e.length;K++){var ie=C.indexOf(e[K]);ie!==-1&&(X===-1||ie<X)&&(X=ie)}X===-1&&(X=C.length),this.host=C.slice(0,X),C=C.slice(X),this.parseHost(),this.hostname=this.hostname||"";var N=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!N)for(var J=this.hostname.split(/\./),K=0,be=J.length;K<be;K++){var re=J[K];if(re&&!re.match(m)){for(var xe="",Q=0,q=re.length;Q<q;Q++)re.charCodeAt(Q)>127?xe+="x":xe+=re[Q];if(!xe.match(m)){var ae=J.slice(0,K),V=J.slice(K+1),z=re.match(h);z&&(ae.push(z[1]),V.unshift(z[2])),V.length&&(C="/"+V.join(".")+C),this.hostname=ae.join(".");break}}}this.hostname.length>i?this.hostname="":this.hostname=this.hostname.toLowerCase(),N||(this.hostname=c.toASCII(this.hostname));var Y=this.port?":"+this.port:"",we=this.hostname||"";this.host=we+Y,this.href+=this.host,N&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),C[0]!=="/"&&(C="/"+C))}if(!b[j])for(var K=0,be=r.length;K<be;K++){var ce=r[K];if(C.indexOf(ce)!==-1){var U=encodeURIComponent(ce);U===ce&&(U=escape(ce)),C=C.split(ce).join(U)}}var H=C.indexOf("#");H!==-1&&(this.hash=C.substr(H),C=C.slice(0,H));var te=C.indexOf("?");if(te!==-1?(this.search=C.substr(te),this.query=C.substr(te+1),T&&(this.query=v.parse(this.query)),C=C.slice(0,te)):T&&(this.search="",this.query={}),C&&(this.pathname=C),o[j]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var Y=this.pathname||"",ge=this.search||"";this.path=Y+ge}return this.href=this.format(),this};function g(y){return typeof y=="string"&&(y=w(y)),y instanceof f?y.format():f.prototype.format.call(y)}f.prototype.format=function(){var y=this.auth||"";y&&(y=encodeURIComponent(y),y=y.replace(/%3A/i,":"),y+="@");var T=this.protocol||"",S=this.pathname||"",I=this.hash||"",P=!1,O="";this.host?P=y+this.host:this.hostname&&(P=y+(this.hostname.indexOf(":")===-1?this.hostname:"["+this.hostname+"]"),this.port&&(P+=":"+this.port)),this.query&&typeof this.query=="object"&&Object.keys(this.query).length&&(O=v.stringify(this.query,{arrayFormat:"repeat",addQueryPrefix:!1}));var R=this.search||O&&"?"+O||"";return T&&T.substr(-1)!==":"&&(T+=":"),this.slashes||(!T||o[T])&&P!==!1?(P="//"+(P||""),S&&S.charAt(0)!=="/"&&(S="/"+S)):P||(P=""),I&&I.charAt(0)!=="#"&&(I="#"+I),R&&R.charAt(0)!=="?"&&(R="?"+R),S=S.replace(/[?#]/g,function(C){return encodeURIComponent(C)}),R=R.replace("#","%23"),T+P+S+R+I};function _(y,T){return w(y,!1,!0).resolve(T)}f.prototype.resolve=function(y){return this.resolveObject(w(y,!1,!0)).format()};function k(y,T){return y?w(y,!1,!0).resolveObject(T):T}return f.prototype.resolveObject=function(y){if(typeof y=="string"){var T=new f;T.parse(y,!1,!0),y=T}for(var S=new f,I=Object.keys(this),P=0;P<I.length;P++){var O=I[P];S[O]=this[O]}if(S.hash=y.hash,y.href==="")return S.href=S.format(),S;if(y.slashes&&!y.protocol){for(var R=Object.keys(y),C=0;C<R.length;C++){var W=R[C];W!=="protocol"&&(S[W]=y[W])}return o[S.protocol]&&S.hostname&&!S.pathname&&(S.pathname="/",S.path=S.pathname),S.href=S.format(),S}if(y.protocol&&y.protocol!==S.protocol){if(!o[y.protocol]){for(var F=Object.keys(y),j=0;j<F.length;j++){var de=F[j];S[de]=y[de]}return S.href=S.format(),S}if(S.protocol=y.protocol,!y.host&&!u[y.protocol]){for(var be=(y.pathname||"").split("/");be.length&&!(y.host=be.shift()););y.host||(y.host=""),y.hostname||(y.hostname=""),be[0]!==""&&be.unshift(""),be.length<2&&be.unshift(""),S.pathname=be.join("/")}else S.pathname=y.pathname;if(S.search=y.search,S.query=y.query,S.host=y.host||"",S.auth=y.auth,S.hostname=y.hostname||y.host,S.port=y.port,S.pathname||S.search){var X=S.pathname||"",K=S.search||"";S.path=X+K}return S.slashes=S.slashes||y.slashes,S.href=S.format(),S}var ie=S.pathname&&S.pathname.charAt(0)==="/",D=y.host||y.pathname&&y.pathname.charAt(0)==="/",Z=D||ie||S.host&&y.pathname,N=Z,J=S.pathname&&S.pathname.split("/")||[],be=y.pathname&&y.pathname.split("/")||[],re=S.protocol&&!o[S.protocol];if(re&&(S.hostname="",S.port=null,S.host&&(J[0]===""?J[0]=S.host:J.unshift(S.host)),S.host="",y.protocol&&(y.hostname=null,y.port=null,y.host&&(be[0]===""?be[0]=y.host:be.unshift(y.host)),y.host=null),Z=Z&&(be[0]===""||J[0]==="")),D)S.host=y.host||y.host===""?y.host:S.host,S.hostname=y.hostname||y.hostname===""?y.hostname:S.hostname,S.search=y.search,S.query=y.query,J=be;else if(be.length)J||(J=[]),J.pop(),J=J.concat(be),S.search=y.search,S.query=y.query;else if(y.search!=null){if(re){S.host=J.shift(),S.hostname=S.host;var xe=S.host&&S.host.indexOf("@")>0?S.host.split("@"):!1;xe&&(S.auth=xe.shift(),S.hostname=xe.shift(),S.host=S.hostname)}return S.search=y.search,S.query=y.query,(S.pathname!==null||S.search!==null)&&(S.path=(S.pathname?S.pathname:"")+(S.search?S.search:"")),S.href=S.format(),S}if(!J.length)return S.pathname=null,S.search?S.path="/"+S.search:S.path=null,S.href=S.format(),S;for(var Q=J.slice(-1)[0],q=(S.host||y.host||J.length>1)&&(Q==="."||Q==="..")||Q==="",ae=0,V=J.length;V>=0;V--)Q=J[V],Q==="."?J.splice(V,1):Q===".."?(J.splice(V,1),ae++):ae&&(J.splice(V,1),ae--);if(!Z&&!N)for(;ae--;ae)J.unshift("..");Z&&J[0]!==""&&(!J[0]||J[0].charAt(0)!=="/")&&J.unshift(""),q&&J.join("/").substr(-1)!=="/"&&J.push("");var z=J[0]===""||J[0]&&J[0].charAt(0)==="/";if(re){S.hostname=z?"":J.length?J.shift():"",S.host=S.hostname;var xe=S.host&&S.host.indexOf("@")>0?S.host.split("@"):!1;xe&&(S.auth=xe.shift(),S.hostname=xe.shift(),S.host=S.hostname)}return Z=Z||S.host&&J.length,Z&&!z&&J.unshift(""),J.length>0?S.pathname=J.join("/"):(S.pathname=null,S.path=null),(S.pathname!==null||S.search!==null)&&(S.path=(S.pathname?S.pathname:"")+(S.search?S.search:"")),S.auth=y.auth||S.auth,S.slashes=S.slashes||y.slashes,S.href=S.format(),S},f.prototype.parseHost=function(){var y=this.host,T=l.exec(y);T&&(T=T[0],T!==":"&&(this.port=T.substr(1)),y=y.substr(0,y.length-T.length)),y&&(this.hostname=y)},Ft.parse=w,Ft.resolve=_,Ft.resolveObject=k,Ft.format=g,Ft.Url=f,Ft}function rl(c){if(typeof c=="string")c=new URL(c);else if(!(c instanceof URL))throw new Deno.errors.InvalidData("invalid argument path , must be a string or URL");if(c.protocol!=="file:")throw new Deno.errors.InvalidData("invalid url scheme");return er?eu(c):tu(c)}function eu(c){let f=c.hostname,a=c.pathname;for(let l=0;l<a.length;l++)if(a[l]==="%"){let d=a.codePointAt(l+2)||32;if(a[l+1]==="2"&&d===102||a[l+1]==="5"&&d===99)throw new Deno.errors.InvalidData("must not include encoded \\ or / characters")}if(a=a.replace(gl,"\\"),a=decodeURIComponent(a),f!=="")return`\\\\${f}${a}`;{let l=a.codePointAt(1)|32,d=a[2];if(l<fl||l>ml||d!==":")throw new Deno.errors.InvalidData("file url path must be absolute");return a.slice(1)}}function tu(c){if(c.hostname!=="")throw new Deno.errors.InvalidData("invalid file url hostname");let f=c.pathname;for(let a=0;a<f.length;a++)if(f[a]==="%"){let l=f.codePointAt(a+2)||32;if(f[a+1]==="2"&&l===102)throw new Deno.errors.InvalidData("must not include encoded / characters")}return decodeURIComponent(f)}function sl(c){let f=ri.resolve(c),a=c.charCodeAt(c.length-1);(a===hl||er&&a===pl)&&f[f.length-1]!==ri.sep&&(f+="/");let l=new URL("file://");return f.includes("%")&&(f=f.replace(bl,"%25")),!er&&f.includes("\\")&&(f=f.replace(vl,"%5C")),f.includes(`
`)&&(f=f.replace(yl,"%0A")),f.includes("\r")&&(f=f.replace(wl,"%0D")),f.includes("	")&&(f=f.replace(_l,"%09")),l.pathname=f,l}var il,zn,si,Kn,Vn,ii,Qn,oi,Gn,ai,Yn,li,Jn,ci,Xn,di,Ft,ui,lt,Fo,ol,al,ll,cl,dl,ul,pl,hl,fl,ml,er,gl,bl,vl,yl,wl,_l,nu=mt(()=>{he(),me(),fe(),yd(),Ud(),Vd(),el(),il=Object.freeze(Object.create(null)),zn={},si=!1,Kn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:global,Vn={},ii=!1,Qn={},oi=!1,Gn={},ai=!1,Yn={},li=!1,Jn={},ci=!1,Xn={},di=!1,Ft={},ui=!1,lt=Zd(),lt.parse,lt.resolve,lt.resolveObject,lt.format,lt.Url,Fo=typeof Deno<"u"?Deno.build.os==="windows"?"win32":Deno.build.os:void 0,lt.URL=typeof URL<"u"?URL:null,lt.pathToFileURL=sl,lt.fileURLToPath=rl,ol=lt.Url,al=lt.format,ll=lt.resolve,cl=lt.resolveObject,dl=lt.parse,ul=lt.URL,pl=92,hl=47,fl=97,ml=122,er=Fo==="win32",gl=/\//g,bl=/%/g,vl=/\\/g,yl=/\n/g,wl=/\r/g,_l=/\t/g}),ru=ye((c,f)=>{he(),me(),fe(),f.exports=function(){throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")}}),Si=ye(c=>{he(),me(),fe(),Object.defineProperty(c,"__esModule",{value:!0}),c.BufferedDuplex=void 0,c.writev=l;var f=Zt(),a=(st(),Qe(rt));function l(t,n){let r=new Array(t.length);for(let e=0;e<t.length;e++)typeof t[e].chunk=="string"?r[e]=a.Buffer.from(t[e].chunk,"utf8"):r[e]=t[e].chunk;this._write(a.Buffer.concat(r),"binary",n)}var d=class extends f.Duplex{socket;proxy;isSocketOpen;writeQueue;constructor(t,n,r){super({objectMode:!0}),this.proxy=n,this.socket=r,this.writeQueue=[],t.objectMode||(this._writev=l.bind(this)),this.isSocketOpen=!1,this.proxy.on("data",e=>{!this.destroyed&&this.readable&&this.push(e)})}_read(t){this.proxy.read(t)}_write(t,n,r){this.isSocketOpen?this.writeToProxy(t,n,r):this.writeQueue.push({chunk:t,encoding:n,cb:r})}_final(t){this.writeQueue=[],this.proxy.end(t)}_destroy(t,n){this.writeQueue=[],this.proxy.destroy(),n(t)}socketReady(){this.emit("connect"),this.isSocketOpen=!0,this.processWriteQueue()}writeToProxy(t,n,r){this.proxy.write(t,n)===!1?this.proxy.once("drain",r):r()}processWriteQueue(){for(;this.writeQueue.length>0;){let{chunk:t,encoding:n,cb:r}=this.writeQueue.shift();this.writeToProxy(t,n,r)}}};c.BufferedDuplex=d}),In=ye(c=>{he(),me(),fe();var f=c&&c.__importDefault||function(w){return w&&w.__esModule?w:{default:w}};Object.defineProperty(c,"__esModule",{value:!0}),c.streamBuilder=c.browserStreamBuilder=void 0;var a=(st(),Qe(rt)),l=f(ru()),d=f(Mt()),t=Zt(),n=f(or()),r=Si(),e=(0,d.default)("mqttjs:ws"),s=["rejectUnauthorized","ca","cert","key","pfx","passphrase"];function i(w,g){let _=`${w.protocol}://${w.hostname}:${w.port}${w.path}`;return typeof w.transformWsUrl=="function"&&(_=w.transformWsUrl(_,w,g)),_}function m(w){let g=w;return w.port||(w.protocol==="wss"?g.port=443:g.port=80),w.path||(g.path="/"),w.wsOptions||(g.wsOptions={}),!n.default&&!w.forceNativeWebSocket&&w.protocol==="wss"&&s.forEach(_=>{Object.prototype.hasOwnProperty.call(w,_)&&!Object.prototype.hasOwnProperty.call(w.wsOptions,_)&&(g.wsOptions[_]=w[_])}),g}function h(w){let g=m(w);if(g.hostname||(g.hostname=g.host),!g.hostname){if(typeof document>"u")throw new Error("Could not determine host. Specify host manually.");let _=new URL(document.URL);g.hostname=_.hostname,g.port||(g.port=Number(_.port))}return g.objectMode===void 0&&(g.objectMode=!(g.binary===!0||g.binary===void 0)),g}function b(w,g,_){e("createWebSocket"),e(`protocol: ${_.protocolId} ${_.protocolVersion}`);let k=_.protocolId==="MQIsdp"&&_.protocolVersion===3?"mqttv3.1":"mqtt";e(`creating new Websocket for url: ${g} and protocol: ${k}`);let y;return _.createWebsocket?y=_.createWebsocket(g,[k],_):y=new l.default(g,[k],_.wsOptions),y}function u(w,g){let _=g.protocolId==="MQIsdp"&&g.protocolVersion===3?"mqttv3.1":"mqtt",k=i(g,w),y;return g.createWebsocket?y=g.createWebsocket(k,[_],g):y=new WebSocket(k,[_]),y.binaryType="arraybuffer",y}var o=(w,g)=>{e("streamBuilder");let _=m(g);_.hostname=_.hostname||_.host||"localhost";let k=i(_,w),y=b(w,k,_),T=l.default.createWebSocketStream(y,_.wsOptions);return T.url=k,y.on("close",()=>{T.destroy()}),T};c.streamBuilder=o;var v=(w,g)=>{e("browserStreamBuilder");let _,k=h(g).browserBufferSize||1024*512,y=g.browserBufferTimeout||1e3,T=!g.objectMode,S=u(w,g),I=O(g,j,de);g.objectMode||(I._writev=r.writev.bind(I)),I.on("close",()=>{S.close()});let P=typeof S.addEventListener<"u";S.readyState===S.OPEN?(_=I,_.socket=S):(_=new r.BufferedDuplex(g,I,S),P?S.addEventListener("open",R):S.onopen=R),P?(S.addEventListener("close",C),S.addEventListener("error",W),S.addEventListener("message",F)):(S.onclose=C,S.onerror=W,S.onmessage=F);function O(X,K,ie){let D=new t.Transform({objectMode:X.objectMode});return D._write=K,D._flush=ie,D}function R(){e("WebSocket onOpen"),_ instanceof r.BufferedDuplex&&_.socketReady()}function C(X){e("WebSocket onClose",X),_.end(),_.destroy()}function W(X){e("WebSocket onError",X);let K=new Error("WebSocket error");K.event=X,_.destroy(K)}async function F(X){if(!I||!I.readable||!I.writable)return;let{data:K}=X;K instanceof ArrayBuffer?K=a.Buffer.from(K):K instanceof Blob?K=a.Buffer.from(await new Response(K).arrayBuffer()):K=a.Buffer.from(K,"utf8"),I.push(K)}function j(X,K,ie){if(S.bufferedAmount>k){setTimeout(j,y,X,K,ie);return}T&&typeof X=="string"&&(X=a.Buffer.from(X,"utf8"));try{S.send(X)}catch(D){return ie(D)}ie()}function de(X){S.close(),X()}return _};c.browserStreamBuilder=v}),Ti={};sn(Ti,{Server:()=>Ye,Socket:()=>Ye,Stream:()=>Ye,_createServerHandle:()=>Ye,_normalizeArgs:()=>Ye,_setSimultaneousAccepts:()=>Ye,connect:()=>Ye,createConnection:()=>Ye,createServer:()=>Ye,default:()=>kl,isIP:()=>Ye,isIPv4:()=>Ye,isIPv6:()=>Ye});function Ye(){throw new Error("Node.js net module is not supported by JSPM core outside of Node.js")}var kl,xl=mt(()=>{he(),me(),fe(),kl={_createServerHandle:Ye,_normalizeArgs:Ye,_setSimultaneousAccepts:Ye,connect:Ye,createConnection:Ye,createServer:Ye,isIP:Ye,isIPv4:Ye,isIPv6:Ye,Server:Ye,Socket:Ye,Stream:Ye}}),Sl=ye((c,f)=>{he(),me(),fe(),f.exports={}}),Bo=ye(c=>{he(),me(),fe();var f=c&&c.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(c,"__esModule",{value:!0});var a=f((xl(),Qe(Ti))),l=f(Mt()),d=f(Sl()),t=(0,l.default)("mqttjs:tcp"),n=(r,e)=>{if(e.port=e.port||1883,e.hostname=e.hostname||e.host||"localhost",e.socksProxy)return(0,d.default)(e.hostname,e.port,e.socksProxy,{timeout:e.socksTimeout});let{port:s,path:i}=e,m=e.hostname;return t("port %d and host %s",s,m),a.default.createConnection({port:s,host:m,path:i})};c.default=n}),Tl={};sn(Tl,{default:()=>Al});var Al,su=mt(()=>{he(),me(),fe(),Al={}}),Do=ye(c=>{he(),me(),fe();var f=c&&c.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(c,"__esModule",{value:!0});var a=(su(),Qe(Tl)),l=f((xl(),Qe(Ti))),d=f(Mt()),t=f(Sl()),n=(0,d.default)("mqttjs:tls");function r(s){let{host:i,port:m,socksProxy:h,...b}=s;if(h!==void 0){let u=(0,t.default)(i,m,h,{timeout:s.socksTimeout});return(0,a.connect)({...b,socket:u})}return(0,a.connect)(s)}var e=(s,i)=>{i.port=i.port||8883,i.host=i.hostname||i.host||"localhost",l.default.isIP(i.host)===0&&(i.servername=i.host),i.rejectUnauthorized=i.rejectUnauthorized!==!1,delete i.path,n("port %d host %s rejectUnauthorized %b",i.port,i.host,i.rejectUnauthorized);let m=r(i);m.on("secureConnect",()=>{i.rejectUnauthorized&&!m.authorized?m.emit("error",new Error("TLS not authorized")):m.removeListener("error",h)});function h(b){i.rejectUnauthorized&&s.emit("error",b),m.end()}return m.on("error",h),m};c.default=e}),Wo=ye(c=>{he(),me(),fe(),Object.defineProperty(c,"__esModule",{value:!0});var f=(st(),Qe(rt)),a=Zt(),l=Si(),d,t,n;function r(){let h=new a.Transform;return h._write=(b,u,o)=>{d.send({data:b.buffer,success(){o()},fail(v){o(new Error(v))}})},h._flush=b=>{d.close({success(){b()}})},h}function e(h){h.hostname||(h.hostname="localhost"),h.path||(h.path="/"),h.wsOptions||(h.wsOptions={})}function s(h,b){let u=h.protocol==="wxs"?"wss":"ws",o=`${u}://${h.hostname}${h.path}`;return h.port&&h.port!==80&&h.port!==443&&(o=`${u}://${h.hostname}:${h.port}${h.path}`),typeof h.transformWsUrl=="function"&&(o=h.transformWsUrl(o,h,b)),o}function i(){d.onOpen(()=>{n.socketReady()}),d.onMessage(h=>{let{data:b}=h;b instanceof ArrayBuffer?b=f.Buffer.from(b):b=f.Buffer.from(b,"utf8"),t.push(b)}),d.onClose(()=>{n.emit("close"),n.end(),n.destroy()}),d.onError(h=>{let b=new Error(h.errMsg);n.destroy(b)})}var m=(h,b)=>{if(b.hostname=b.hostname||b.host,!b.hostname)throw new Error("Could not determine host. Specify host manually.");let u=b.protocolId==="MQIsdp"&&b.protocolVersion===3?"mqttv3.1":"mqtt";e(b);let o=s(b,h);d=wx.connectSocket({url:o,protocols:[u]}),t=r(),n=new l.BufferedDuplex(b,t,d),n._destroy=(w,g)=>{d.close({success(){g&&g(w)}})};let v=n.destroy;return n.destroy=(w,g)=>(n.destroy=v,setTimeout(()=>{d.close({fail(){n._destroy(w,g)}})},0),n),i(),n};c.default=m}),Ho=ye(c=>{he(),me(),fe(),Object.defineProperty(c,"__esModule",{value:!0});var f=(st(),Qe(rt)),a=Zt(),l=Si(),d,t,n,r=!1;function e(){let b=new a.Transform;return b._write=(u,o,v)=>{d.sendSocketMessage({data:u.buffer,success(){v()},fail(){v(new Error)}})},b._flush=u=>{d.closeSocket({success(){u()}})},b}function s(b){b.hostname||(b.hostname="localhost"),b.path||(b.path="/"),b.wsOptions||(b.wsOptions={})}function i(b,u){let o=b.protocol==="alis"?"wss":"ws",v=`${o}://${b.hostname}${b.path}`;return b.port&&b.port!==80&&b.port!==443&&(v=`${o}://${b.hostname}:${b.port}${b.path}`),typeof b.transformWsUrl=="function"&&(v=b.transformWsUrl(v,b,u)),v}function m(){r||(r=!0,d.onSocketOpen(()=>{n.socketReady()}),d.onSocketMessage(b=>{if(typeof b.data=="string"){let u=f.Buffer.from(b.data,"base64");t.push(u)}else{let u=new FileReader;u.addEventListener("load",()=>{if(u.result instanceof ArrayBuffer){t.push(f.Buffer.from(u.result));return}t.push(f.Buffer.from(u.result,"utf-8"))}),u.readAsArrayBuffer(b.data)}}),d.onSocketClose(()=>{n.end(),n.destroy()}),d.onSocketError(b=>{n.destroy(b)}))}var h=(b,u)=>{if(u.hostname=u.hostname||u.host,!u.hostname)throw new Error("Could not determine host. Specify host manually.");let o=u.protocolId==="MQIsdp"&&u.protocolVersion===3?"mqttv3.1":"mqtt";s(u);let v=i(u,b);return d=u.my,d.connectSocket({url:v,protocols:o}),t=e(),n=new l.BufferedDuplex(u,t,d),m(),n};c.default=h}),iu=ye(c=>{he(),me(),fe();var f=c&&c.__importDefault||function(m){return m&&m.__esModule?m:{default:m}};Object.defineProperty(c,"__esModule",{value:!0}),c.connectAsync=i;var a=f(Mt()),l=f((nu(),Qe(tl))),d=f(Ss()),t=f(or());typeof Ge?.nextTick!="function"&&(Ge.nextTick=setImmediate);var n=(0,a.default)("mqttjs"),r=null;function e(m){let h;if(m.auth)if(h=m.auth.match(/^(.+):(.+)$/),h){let[,b,u]=h;m.username=b,m.password=u}else m.username=m.auth}function s(m,h){if(n("connecting to an MQTT broker..."),typeof m=="object"&&!h&&(h=m,m=""),h=h||{},m&&typeof m=="string"){let o=l.default.parse(m,!0),v={};if(o.port!=null&&(v.port=Number(o.port)),v.host=o.hostname,v.query=o.query,v.auth=o.auth,v.protocol=o.protocol,v.path=o.path,h={...v,...h},!h.protocol)throw new Error("Missing protocol");h.protocol=h.protocol.replace(/:$/,"")}if(h.unixSocket=h.unixSocket||h.protocol?.includes("+unix"),h.unixSocket?h.protocol=h.protocol.replace("+unix",""):!h.protocol?.startsWith("ws")&&!h.protocol?.startsWith("wx")&&delete h.path,e(h),h.query&&typeof h.query.clientId=="string"&&(h.clientId=h.query.clientId),t.default||h.unixSocket?h.socksProxy=void 0:h.socksProxy===void 0&&typeof Ge<"u"&&(h.socksProxy=Ge.env.MQTTJS_SOCKS_PROXY),h.cert&&h.key)if(h.protocol){if(["mqtts","wss","wxs","alis"].indexOf(h.protocol)===-1)switch(h.protocol){case"mqtt":h.protocol="mqtts";break;case"ws":h.protocol="wss";break;case"wx":h.protocol="wxs";break;case"ali":h.protocol="alis";break;default:throw new Error(`Unknown protocol for secure connection: "${h.protocol}"!`)}}else throw new Error("Missing secure protocol key");if(r||(r={},!t.default&&!h.forceNativeWebSocket?(r.ws=In().streamBuilder,r.wss=In().streamBuilder,r.mqtt=Bo().default,r.tcp=Bo().default,r.ssl=Do().default,r.tls=r.ssl,r.mqtts=Do().default):(r.ws=In().browserStreamBuilder,r.wss=In().browserStreamBuilder,r.wx=Wo().default,r.wxs=Wo().default,r.ali=Ho().default,r.alis=Ho().default)),!r[h.protocol]){let o=["mqtts","wss"].indexOf(h.protocol)!==-1;h.protocol=["mqtt","mqtts","ws","wss","wx","wxs","ali","alis"].filter((v,w)=>o&&w%2===0?!1:typeof r[v]=="function")[0]}if(h.clean===!1&&!h.clientId)throw new Error("Missing clientId for unclean clients");h.protocol&&(h.defaultProtocol=h.protocol);function b(o){return h.servers&&((!o._reconnectCount||o._reconnectCount===h.servers.length)&&(o._reconnectCount=0),h.host=h.servers[o._reconnectCount].host,h.port=h.servers[o._reconnectCount].port,h.protocol=h.servers[o._reconnectCount].protocol?h.servers[o._reconnectCount].protocol:h.defaultProtocol,h.hostname=h.host,o._reconnectCount++),n("calling streambuilder for",h.protocol),r[h.protocol](o,h)}let u=new d.default(b,h);return u.on("error",()=>{}),u}function i(m,h,b=!0){return new Promise((u,o)=>{let v=s(m,h),w={connect:_=>{g(),u(v)},end:()=>{g(),u(v)},error:_=>{g(),v.end(),o(_)}};b===!1&&(w.close=()=>{w.error(new Error("Couldn't connect to server"))});function g(){Object.keys(w).forEach(_=>{v.off(_,w[_])})}Object.keys(w).forEach(_=>{v.on(_,w[_])})})}c.default=s}),$o=ye(c=>{he(),me(),fe();var f=c&&c.__createBinding||(Object.create?function(b,u,o,v){v===void 0&&(v=o);var w=Object.getOwnPropertyDescriptor(u,o);(!w||("get"in w?!u.__esModule:w.writable||w.configurable))&&(w={enumerable:!0,get:function(){return u[o]}}),Object.defineProperty(b,v,w)}:function(b,u,o,v){v===void 0&&(v=o),b[v]=u[o]}),a=c&&c.__setModuleDefault||(Object.create?function(b,u){Object.defineProperty(b,"default",{enumerable:!0,value:u})}:function(b,u){b.default=u}),l=c&&c.__importStar||(function(){var b=function(u){return b=Object.getOwnPropertyNames||function(o){var v=[];for(var w in o)Object.prototype.hasOwnProperty.call(o,w)&&(v[v.length]=w);return v},b(u)};return function(u){if(u&&u.__esModule)return u;var o={};if(u!=null)for(var v=b(u),w=0;w<v.length;w++)v[w]!=="default"&&f(o,u,v[w]);return a(o,u),o}})(),d=c&&c.__exportStar||function(b,u){for(var o in b)o!=="default"&&!Object.prototype.hasOwnProperty.call(u,o)&&f(u,b,o)},t=c&&c.__importDefault||function(b){return b&&b.__esModule?b:{default:b}};Object.defineProperty(c,"__esModule",{value:!0}),c.ReasonCodes=c.KeepaliveManager=c.UniqueMessageIdProvider=c.DefaultMessageIdProvider=c.Store=c.MqttClient=c.connectAsync=c.connect=c.Client=void 0;var n=t(Ss());c.MqttClient=n.default;var r=t(Wa());c.DefaultMessageIdProvider=r.default;var e=t(bd());c.UniqueMessageIdProvider=e.default;var s=t(Ta());c.Store=s.default;var i=l(iu());c.connect=i.default,Object.defineProperty(c,"connectAsync",{enumerable:!0,get:function(){return i.connectAsync}});var m=t(Ga());c.KeepaliveManager=m.default,c.Client=n.default,d(Ss(),c),d(an(),c),d(Sa(),c);var h=sr();Object.defineProperty(c,"ReasonCodes",{enumerable:!0,get:function(){return h.ReasonCodes}})}),ou=ye(c=>{he(),me(),fe();var f=c&&c.__createBinding||(Object.create?function(n,r,e,s){s===void 0&&(s=e);var i=Object.getOwnPropertyDescriptor(r,e);(!i||("get"in i?!r.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return r[e]}}),Object.defineProperty(n,s,i)}:function(n,r,e,s){s===void 0&&(s=e),n[s]=r[e]}),a=c&&c.__setModuleDefault||(Object.create?function(n,r){Object.defineProperty(n,"default",{enumerable:!0,value:r})}:function(n,r){n.default=r}),l=c&&c.__importStar||(function(){var n=function(r){return n=Object.getOwnPropertyNames||function(e){var s=[];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(s[s.length]=i);return s},n(r)};return function(r){if(r&&r.__esModule)return r;var e={};if(r!=null)for(var s=n(r),i=0;i<s.length;i++)s[i]!=="default"&&f(e,r,s[i]);return a(e,r),e}})(),d=c&&c.__exportStar||function(n,r){for(var e in n)e!=="default"&&!Object.prototype.hasOwnProperty.call(r,e)&&f(r,n,e)};Object.defineProperty(c,"__esModule",{value:!0});var t=l($o());c.default=t,d($o(),c)});const au=ou();function lu(c={}){const f=Array.isArray(c.socket_states)?c.socket_states:Array.from({length:6},(a,l)=>c[`plug_${l}`]?.on);return Array.from({length:6},(a,l)=>{const d=f[l];return d===!0||d===1||d==="1"?!0:d===!1||d===0||d==="0"?!1:void 0})}const zo=c=>({tc1:"TC1 智能插排",m1:"M1 空气质量检测器",a1:"A1 空气净化器"})[c.model]||"设备";function cu(c={},f=Date.now()){const a=c.barometer,l=f-c.sensorAt;return a?.ready===!0&&a.valid===!0&&["BMP388","BMP390"].includes(a.model)&&typeof a.pressure_hpa=="number"&&Number.isFinite(a.pressure_hpa)&&a.pressure_hpa>=300&&a.pressure_hpa<=1250&&typeof a.age_ms=="number"&&Number.isFinite(a.age_ms)&&a.age_ms>=0&&Number.isFinite(l)&&l>=0&&a.age_ms+l<1e4?a.pressure_hpa:null}function du(c,f,a,l,{schedule:d=setTimeout,cancel:t=clearTimeout}={}){let n=!1,r;const e=a||(["a1","m1"].includes(f.model)?`${f.model.toUpperCase()}-${f.mac.slice(-4).toUpperCase()}`:null);function s(m){n||(n=!0,t(r),l(m))}function i(){n||c({action:"config.get",params:{}},m=>{if(!n){if(m.code==="ok"&&e!==null&&m.data?.name===e){s({code:"ok",data:{name:e}});return}r=d(i,1500)}},f,{timeoutMs:3e3})}r=d(i,1500),c({action:"config.set",params:{section:"device",values:{name:a}}},s,f)}const uu={class:"device-summary"},pu={class:"rack-head"},hu=["title"],fu={key:0,class:"rack-body tc1-body"},mu={class:"stat"},gu={class:"socket-info"},bu=["aria-label"],vu={key:1,class:"rack-body"},yu={class:"ring-mini"},wu={class:"sensor-copy"},_u={class:"stat"},ku={class:"rack-detail sensor-details"},xu={key:0},Su=["title"],Tu={key:2,class:"rack-body"},Au={class:"stat"},Iu={class:"sensor-copy"},Eu={key:0,class:"rack-detail"},Cu={__name:"DeviceSummary",props:{device:Object,state:Object,name:String,connected:Boolean,now:Number},setup(c){const f=c,a=Xe(()=>(f.connected||f.state?.lan_connected)&&f.state?.available!==!1),l=Xe(()=>lu(f.state)),d=Xe(()=>a.value&&l.value.length===6&&l.value.every(b=>typeof b=="boolean")),t=Xe(()=>a.value&&f.state?.sensor_valid&&f.state?.sensorAt&&f.now-f.state.sensorAt<=6e4&&m(f.state.pm25)),n=Xe(()=>{const b=f.state?.scd40;return a.value&&b?.ready&&b.valid&&b.age_ms<2e4&&f.state?.sensorAt&&f.now-f.state.sensorAt<2e4&&typeof b.co2_ppm=="number"?Math.round(b.co2_ppm):null}),r=Xe(()=>a.value?cu(f.state,f.now):null),e=Xe(()=>t.value?Number(f.state.pm25)>75||Number(f.state.formaldehyde)>.1?"较差":Number(f.state.pm25)>35||Number(f.state.formaldehyde)>.08?"一般":"良好":"—"),s=Xe(()=>!f.connected&&!f.state?.lan_connected?{label:"未连接",tone:"muted"}:f.state?.available===!1?{label:"离线",tone:"muted"}:(f.device.model==="m1"?t.value:f.device.model==="tc1"?d.value:f.state?.fan_on!==void 0)?{label:"在线",tone:"online"}:{label:"等待数据",tone:"waiting"}),i=Xe(()=>f.state?.applied_speed??f.state?.percentage??f.state?.speed);function m(b){return b!=null&&b!==""&&Number.isFinite(Number(b))}function h(b,u=0){return a.value&&m(b)?Number(b).toFixed(u):"—"}return(b,u)=>(Ie(),Ce("span",uu,[E("span",pu,[E("span",{class:Qt(["presence-pill",s.value.tone]),role:"status"},Pe(s.value.label),3),E("b",{title:c.name},Pe(c.name),9,hu)]),c.device.model==="tc1"?(Ie(),Ce("span",fu,[E("span",mu,[Fe(Pe(h(c.state?.power_watts??c.state?.power,1)),1),u[0]||(u[0]=E("small",null,"W",-1))]),E("span",gu,[E("span",{class:"sockets",role:"img","aria-label":l.value.map((o,v)=>`插座 ${v+1}：${!a.value||o===void 0?"未知":o?"开启":"关闭"}`).join("，")},[(Ie(),Ce(dt,null,vn(6,o=>E("i",{key:o,class:Qt({on:a.value&&l.value[o-1]===!0,unknown:!a.value||l.value[o-1]===void 0})},null,2)),64))],8,bu)])])):c.device.model==="m1"?(Ie(),Ce("span",vu,[E("span",yu,[E("span",null,Pe(e.value),1)]),E("span",wu,[E("span",_u,[Fe(Pe(t.value?Math.round(Number(c.state.pm25)):"—"),1),u[1]||(u[1]=E("small",null,"μg/m³",-1))]),E("small",ku,[u[2]||(u[2]=E("span",null,"PM2.5",-1)),n.value!==null?(Ie(),Ce("span",xu," · CO₂ "+Pe(n.value)+" ppm",1)):We("",!0),r.value!==null?(Ie(),Ce("span",{key:1,title:c.state.barometer.model}," · "+Pe(r.value.toFixed(1))+" hPa",9,Su)):We("",!0)])])])):c.device.model==="a1"?(Ie(),Ce("span",Tu,[E("span",Au,[Fe(Pe(a.value&&c.state?.fan_on!==void 0?c.state.fan_on?h(i.value):"0":"—"),1),u[3]||(u[3]=E("small",null,"%",-1))]),E("span",Iu,[He(Ve,{name:"fan",size:28}),a.value&&c.state?.fan_mode?(Ie(),Ce("small",Eu,Pe(c.state.fan_mode==="auto"?"自动":"手动")+" · "+Pe(c.state.fan_on?c.state.fan_state==="idle"?"待机":"运行":"关机"),1)):We("",!0)])])):We("",!0)]))}},Ai=Pt(Cu,[["__scopeId","data-v-76a84df5"]]),Mu=["disabled"],Pu={key:0,class:"help"},Ou={key:1,role:"alert",class:"error"},Nu=["disabled"],Ru=["disabled"],Uu=["disabled"],Lu={__name:"DeviceNameDialog",emits:["save"],setup(c,{expose:f,emit:a}){const l=a,d=Ue(),t=Ue(),n=Ue(""),r=Ue(""),e=Ue(!1);function s(m,h){t.value=m,n.value=h,r.value="",d.value.showModal()}function i(m=n.value.trim()){if(r.value="",m&&new TextEncoder().encode(m).length>63){r.value="名称不能超过 63 字节。";return}e.value=!0,l("save",t.value,m,h=>{e.value=!1,h?r.value=h:d.value.close()})}return f({open:s}),(m,h)=>(Ie(),Ce("dialog",{ref_key:"dialog",ref:d,class:"rename-dialog",onCancel:h[4]||(h[4]=b=>e.value&&b.preventDefault())},[E("form",{onSubmit:h[3]||(h[3]=Bt(b=>i(),["prevent"]))},[h[6]||(h[6]=E("h2",null,"修改设备名称",-1)),h[7]||(h[7]=E("p",{class:"help"},"使用容易辨认的名称，例如“客厅净化器”。",-1)),E("label",null,[h[5]||(h[5]=Fe("设备名称",-1)),et(E("input",{"onUpdate:modelValue":h[0]||(h[0]=b=>n.value=b),maxlength:"63",disabled:e.value,autofocus:""},null,8,Mu),[[ct,n.value]])]),t.value?.version==="v1"?(Ie(),Ce("p",Pu,"旧版设备的名称保存在当前浏览器中。")):We("",!0),r.value?(Ie(),Ce("p",Ou,Pe(r.value),1)):We("",!0),E("footer",null,[E("button",{class:"btn ghost",type:"button",disabled:e.value,onClick:h[1]||(h[1]=b=>i(""))},"恢复默认名称",8,Nu),E("button",{class:"btn",type:"button",disabled:e.value,onClick:h[2]||(h[2]=b=>d.value.close())},"取消",8,Ru),E("button",{class:"btn primary",disabled:e.value},Pe(e.value?"保存中…":"保存名称"),9,Uu)])],32)],544))}},qu=Pt(Lu,[["__scopeId","data-v-ee85dc5f"]]),ju={id:"device-picker-title"},Fu=["aria-pressed","onClick"],Bu={key:0,class:"help"},Du={__name:"DevicePicker",props:{devices:Array,selected:String,states:Object,deviceName:Function,connected:Boolean,now:Number},emits:["select","refresh","add"],setup(c,{expose:f,emit:a}){const l=a,d=Ue(),t=Ue();let n,r,e;function s(){r&&(document.documentElement.style.overflow=r.html,document.body.style.overflow=r.body,r=null)}function i(){d.value?.open||(s(),e?.getClientRects().length&&e.focus({preventScroll:!0}))}function m(){d.value?.close(),s()}async function h(){if(d.value.open)return;e=document.activeElement,d.value.showModal(),r={html:document.documentElement.style.overflow,body:document.body.style.overflow},document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden",await Il();const g=t.value.querySelector("[aria-pressed=true]");g&&(t.value.scrollTop+=g.getBoundingClientRect().top-t.value.getBoundingClientRect().top)}function b(){m(),l("add")}function u(g){l("select",Le(g)),m()}function o(g){if(g.key!=="Tab")return;const _=[...d.value.querySelectorAll("button:not(:disabled)")],k=_[0],y=_.at(-1);g.shiftKey&&document.activeElement===k?(g.preventDefault(),y.focus()):!g.shiftKey&&document.activeElement===y&&(g.preventDefault(),k.focus())}function v(g){if(g.target!==d.value)return;const _=d.value.getBoundingClientRect();(g.clientX<_.left||g.clientX>_.right||g.clientY<_.top||g.clientY>_.bottom)&&m()}function w(){n.matches||m()}return wn(()=>{n=matchMedia("(max-width:800px)"),n.addEventListener("change",w)}),_n(()=>{n?.removeEventListener("change",w),m()}),f({open:h}),(g,_)=>(Ie(),Ce("dialog",{ref_key:"dialog",ref:d,class:"device-picker","aria-labelledby":"device-picker-title",onCancel:s,onClose:i,onClick:v,onKeydown:o},[E("header",null,[E("h2",ju,[_[1]||(_[1]=Fe("切换设备 ",-1)),E("small",null,Pe(c.devices.length)+" 台",1)]),E("button",{type:"button","aria-label":"关闭设备列表",autofocus:"",onClick:m},[He(Ve,{name:"close"})])]),E("button",{class:"add-device-entry",type:"button",onClick:b},[He(Ve,{name:"plus",size:17}),_[2]||(_[2]=Fe("添加设备",-1))]),E("ul",{ref_key:"list",ref:t,class:"picker-list"},[(Ie(!0),Ce(dt,null,vn(c.devices,k=>(Ie(),Ce("li",{key:Ke(Le)(k)},[E("button",{type:"button","aria-pressed":c.selected===Ke(Le)(k),onClick:y=>u(k)},[He(Ai,{device:k,state:c.states[Ke(Le)(k)]||{},name:c.deviceName(k),connected:c.connected,now:c.now},null,8,["device","state","name","connected","now"]),c.selected===Ke(Le)(k)?(Ie(),gt(Ve,{key:0,name:"check"})):We("",!0)],8,Fu)]))),128)),c.devices.length?We("",!0):(Ie(),Ce("li",Bu,"暂无设备，可在设置中添加。"))],512),E("footer",null,[E("button",{type:"button",onClick:_[0]||(_[0]=k=>l("refresh"))},"刷新设备列表"),E("button",{type:"button",onClick:m},"完成")])],544))}},Wu=Pt(Du,[["__scopeId","data-v-1d7e7db6"]]),Hu={tc1:`<!doctype html>
<html lang="zh-CN">
<head>
<meta name="referrer" content="no-referrer"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>TC1 智能插座</title>
<style>/* Unified WebUI design language for TC1, A1 and M1.
 * One stylesheet for all three offline pages; no CDN, no web fonts.
 * Tokens, then layout, then components, then per-product pages. */
:root{color-scheme:light dark;-webkit-tap-highlight-color:transparent;
 --bg:#f4f6f9;--surface:#fff;--surface-muted:#eef1f5;--text:#1d2430;--muted:#5f6b7c;--border:#dbe0e8;
 --accent:#305ed4;--accent-text:#fff;--accent-soft:#e6edfc;
 --danger:#b8353c;--danger-soft:#fbe9ea;--success:#26734c;--success-soft:#e3f3ea;--warn:#9a5b00;--warn-soft:#fdf1dc;
 --focus:#7a9cf5;--radius:12px;--radius-s:8px;--shadow:0 1px 2px rgba(20,30,50,.06),0 4px 16px rgba(20,30,50,.04);
 font-family:Inter,system-ui,-apple-system,"Segoe UI","PingFang SC","Microsoft YaHei",sans-serif;color:var(--text);background:var(--bg)}
:root[data-theme=dark]{--bg:#0f131a;--surface:#181e28;--surface-muted:#222a37;--text:#e8edf5;--muted:#a1adbf;--border:#323c4e;
 --accent:#91afff;--accent-text:#111d37;--accent-soft:#1f2b48;--danger:#ff9da4;--danger-soft:#3a1f24;--success:#80d3a5;--success-soft:#173226;
 --warn:#f2c46b;--warn-soft:#3a2e16;--focus:#91afff;--shadow:none}
@media(prefers-color-scheme:dark){:root:not([data-theme=light]){--bg:#0f131a;--surface:#181e28;--surface-muted:#222a37;--text:#e8edf5;--muted:#a1adbf;--border:#323c4e;
 --accent:#91afff;--accent-text:#111d37;--accent-soft:#1f2b48;--danger:#ff9da4;--danger-soft:#3a1f24;--success:#80d3a5;--success-soft:#173226;
 --warn:#f2c46b;--warn-soft:#3a2e16;--focus:#91afff;--shadow:none}}
*{box-sizing:border-box}
body{max-width:1080px;margin:0 auto;padding:20px 32px 96px;line-height:1.5;font-size:15px}
h1{font-size:20px;margin:0;letter-spacing:-.3px}h2{font-size:16px;margin:0;font-weight:650}h3{font-size:14px;margin:0 0 8px;font-weight:650}
p{margin:0}a{color:var(--accent)}[hidden]{display:none!important}
.muted,.help{color:var(--muted)}.help{font-size:13px}.small{font-size:13px}.num{font-variant-numeric:tabular-nums}
:focus-visible{outline:3px solid var(--focus);outline-offset:2px}
svg.i{width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;flex:none}

/* Header */
.topbar{display:flex;flex-wrap:wrap;align-items:center;gap:12px 20px;padding:4px 0 16px}
.brand{display:flex;align-items:center;gap:12px;min-width:0;flex:1}
.brand .logo{width:40px;height:40px;border-radius:10px;background:var(--accent-soft);color:var(--accent);display:grid;place-items:center}
.brand .kind{font-size:12px;color:var(--muted)}
.prefs{display:flex;gap:6px}.prefs select{font:inherit;font-size:12px;padding:4px 6px;border:1px solid var(--border);border-radius:6px;background:var(--surface);color:var(--text)}
.chips{display:flex;flex-wrap:wrap;gap:8px;width:100%}
.chip{display:inline-flex;align-items:center;gap:6px;padding:4px 10px;border-radius:999px;background:var(--surface);border:1px solid var(--border);font-size:13px;color:var(--muted);max-width:100%}
.chip b{color:var(--text);font-weight:600}
.dot{width:8px;height:8px;border-radius:50%;background:var(--muted);flex:none}
.dot.ok{background:var(--success)}.dot.warn{background:var(--warn)}.dot.bad{background:var(--danger)}
.dot.live{animation:pulse 2s infinite}
@keyframes pulse{50%{opacity:.35}}
.banner{display:flex;gap:10px;align-items:center;padding:10px 14px;border-radius:var(--radius-s);margin:0 0 16px;font-size:14px}
.banner.bad{background:var(--danger-soft);color:var(--danger)}.banner.warn{background:var(--warn-soft);color:var(--warn)}.banner.ok{background:var(--success-soft);color:var(--success)}.banner.info{background:var(--accent-soft);color:var(--accent)}

/* Tabs */
.tabs{display:flex;gap:4px;border-bottom:1px solid var(--border);margin:0 0 20px}
.tabs a{display:flex;align-items:center;gap:8px;padding:10px 14px;color:var(--muted);text-decoration:none;border-bottom:2px solid transparent;margin-bottom:-1px;font-weight:550}
.tabs a[aria-current=page]{color:var(--accent);border-bottom-color:var(--accent)}

/* Cards and grids */
.grid{display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(300px,1fr))}
.card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:20px;box-shadow:var(--shadow);min-width:0}
.card-head{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:16px}
.broker-card-head{flex-wrap:wrap}
.broker-platform-link{flex-shrink:0;color:var(--accent);background:var(--surface-muted)}
.stack>*+*{margin-top:16px}
.row{display:flex;align-items:center;gap:12px;flex-wrap:wrap}.row.between{justify-content:space-between}.grow{flex:1;min-width:0}
.home{display:grid;gap:16px}

/* Buttons */
.btn{position:relative;font:inherit;font-size:14px;font-weight:600;display:inline-flex;align-items:center;justify-content:center;gap:6px;min-height:40px;padding:8px 16px;border-radius:var(--radius-s);border:1px solid var(--border);background:var(--surface);color:var(--text);cursor:pointer;text-decoration:none;width:auto}
.btn:hover{background:var(--surface-muted)}
.btn.primary{background:var(--accent);color:var(--accent-text);border-color:transparent}.btn.primary:hover{filter:brightness(1.08)}
.btn.danger{color:var(--danger);border-color:var(--danger)}.btn.danger:hover{background:var(--danger-soft)}
.btn.ghost{border-color:transparent;background:transparent;color:var(--muted)}.btn.ghost:hover{background:var(--surface-muted);color:var(--text)}
.btn.icon{padding:6px;min-height:32px;width:32px}
.btn:disabled,.btn[aria-busy=true]{opacity:.55;cursor:not-allowed}
/* Keep pending feedback out of flex flow so buttons and wrapped rows stay put. */
.btn[aria-busy=true]::before{content:"";position:absolute;left:25%;bottom:3px;width:50%;height:2px;border-radius:1px;background:currentColor;animation:pulse 1s linear infinite;pointer-events:none}

/* Segmented control */
.seg{display:inline-flex;background:var(--surface-muted);border-radius:var(--radius-s);padding:3px;gap:2px;flex-wrap:wrap}
.seg button{font:inherit;font-size:14px;border:0;background:transparent;color:var(--muted);padding:7px 14px;border-radius:6px;cursor:pointer;min-height:36px;font-weight:550;width:auto;margin:0}
.seg button[aria-pressed=true]{background:var(--surface);color:var(--text);box-shadow:0 1px 3px rgba(0,0,0,.12)}
.seg.full{display:flex}.seg.full button{flex:1}
.seg button:disabled{cursor:not-allowed;opacity:.5}

/* Switch */
.switch{display:flex;align-items:center;justify-content:space-between;gap:16px;cursor:pointer;min-height:44px}
.switch .text{min-width:0}.switch .text b{display:block;font-weight:600}.switch .text span{font-size:13px;color:var(--muted)}
.switch input{appearance:none;flex:none;width:44px;height:26px;min-height:26px;border-radius:13px;background:var(--border);position:relative;cursor:pointer;margin:0;transition:background .15s}
.switch input::after{content:"";position:absolute;top:3px;left:3px;width:20px;height:20px;border-radius:50%;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
.switch input:checked{background:var(--accent)}.switch input:checked::after{transform:translateX(18px)}
.switch input:disabled{opacity:.5}
.switch+.switch{border-top:1px solid var(--border);padding-top:8px;margin-top:8px}

/* Fields */
.field{display:block}.field>span{display:block;font-size:13px;font-weight:600;margin-bottom:6px}
.field .help{margin-top:6px}
input[type=text],input[type=password],input[type=number],input[type=url],input[type=time],input[type=date],input[type=datetime-local],input:not([type]),select,textarea{font:inherit;width:100%;min-height:40px;padding:8px 12px;border:1px solid var(--border);border-radius:var(--radius-s);background:var(--surface);color:var(--text)}
textarea{min-height:120px;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:13px}
input[type=range]{width:100%;min-height:28px;accent-color:var(--accent);margin:0;padding:0;border:0;background:transparent}
input[type=color]{width:40px;height:40px;min-height:40px;padding:2px;border:1px solid var(--border);border-radius:var(--radius-s);background:var(--surface);cursor:pointer}
input[type=file]{padding:8px}
.fields{display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(220px,1fr))}
.form-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:20px}
.input-unit{display:flex;align-items:center;gap:8px}.input-unit input{flex:1}.input-unit em{font-style:normal;color:var(--muted);font-size:13px;white-space:nowrap}
.sentence{display:flex;flex-wrap:wrap;align-items:center;gap:8px;font-size:14px}
.sentence input{width:90px;min-height:36px;padding:6px 8px}
details.more{border-top:1px solid var(--border);margin-top:20px;padding-top:12px}
details.more>summary{cursor:pointer;color:var(--muted);font-size:14px;font-weight:600;list-style:none;display:flex;align-items:center;gap:6px}
details.more>summary::before{content:"\\203A";display:inline-block;transition:transform .15s;font-size:18px;line-height:1}
details.more[open]>summary::before{transform:rotate(90deg)}
details.more>*:not(summary){margin-top:16px}
details.info{font-size:13px;color:var(--muted);margin-top:20px}
details.info>summary{cursor:pointer;display:inline-flex;align-items:center;gap:4px;list-style:none}
details.info>summary svg.i{width:15px;height:15px}
details.info>summary::-webkit-details-marker{display:none}
details.info>p{margin-top:6px;padding:10px 12px;background:var(--surface-muted);border-radius:var(--radius-s)}
summary::-webkit-details-marker{display:none}

/* Read-only display summary */
.summary{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px 20px;background:var(--surface-muted);border-radius:var(--radius-s);padding:14px 16px;margin:0}
.summary dt{font-size:12px;color:var(--muted)}.summary dd{margin:2px 0 0;font-weight:600;overflow-wrap:anywhere;display:flex;align-items:center;gap:6px}

/* Settings layout */
.settings{display:grid;grid-template-columns:200px minmax(0,1fr);gap:24px;align-items:start}
.side{position:sticky;top:12px;display:flex;flex-direction:column;gap:2px}
.side .group{font-size:11px;text-transform:uppercase;letter-spacing:.6px;color:var(--muted);margin:14px 10px 4px;font-weight:700}
.side .group:first-child{margin-top:0}
.side a{padding:8px 10px;border-radius:var(--radius-s);color:var(--text);text-decoration:none;font-size:14px}
.side a:hover{background:var(--surface-muted)}.side a[aria-current=page]{background:var(--accent-soft);color:var(--accent);font-weight:600}
.page-title{margin:0 0 4px;font-size:18px}.page-lead{margin:0 0 16px;color:var(--muted);font-size:14px}
.section-label{font-size:12px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin:0 0 10px}

/* Lists */
.list{display:flex;flex-direction:column;gap:8px}
.item{display:flex;align-items:center;gap:12px;padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius-s);background:var(--surface);min-width:0}
.item .grow b{display:block}.item .grow span{font-size:13px;color:var(--muted)}
.item .time{font-size:20px;min-width:64px}
.empty{padding:20px;text-align:center;color:var(--muted);border:1px dashed var(--border);border-radius:var(--radius-s);font-size:14px}
.badge{display:inline-flex;align-items:center;gap:4px;font-size:12px;font-weight:600;padding:2px 8px;border-radius:999px;background:var(--surface-muted);color:var(--muted);white-space:nowrap}
.badge.ok{background:var(--success-soft);color:var(--success)}.badge.warn{background:var(--warn-soft);color:var(--warn)}.badge.bad{background:var(--danger-soft);color:var(--danger)}.badge.info{background:var(--accent-soft);color:var(--accent)}
.subcard{border:1px solid var(--border);border-radius:var(--radius-s);padding:16px;background:var(--surface)}
.subcard h3{margin-bottom:12px}
fieldset{border:1px solid var(--border);border-radius:var(--radius-s);padding:16px;margin:16px 0;min-width:0}
fieldset.bare{border:0;padding:0;margin-left:0;margin-right:0;margin-bottom:0;min-width:0}
fieldset.bare:disabled{opacity:.5}
legend{padding:0 8px;font-size:14px}
.table{width:100%;border-collapse:collapse;font-size:14px}
.table th{text-align:left;font-size:12px;color:var(--muted);font-weight:600;padding:6px 8px;border-bottom:1px solid var(--border)}
.table td{padding:8px 8px;border-bottom:1px solid var(--border);vertical-align:middle}
.table tr:last-child td{border-bottom:0}

/* Weekday chips */
.days{display:flex;gap:6px;flex-wrap:wrap}
.days label{position:relative;margin:0}
.days input{position:absolute;opacity:0;inset:0;margin:0;cursor:pointer;width:100%;min-height:100%}
.days span{display:grid;place-items:center;min-width:40px;height:36px;padding:0 8px;border-radius:999px;border:1px solid var(--border);font-size:13px;font-weight:600;color:var(--muted)}
.days input:checked+span{background:var(--accent);border-color:var(--accent);color:var(--accent-text)}
.days input:focus-visible+span{outline:3px solid var(--focus);outline-offset:2px}

/* Option cards */
.options{display:grid;gap:10px;grid-template-columns:repeat(auto-fit,minmax(150px,1fr))}
.option{position:relative;border:1px solid var(--border);border-radius:var(--radius-s);padding:12px 14px;cursor:pointer;background:var(--surface);display:block;margin:0}
.option input{position:absolute;opacity:0}
.option b{display:block;font-size:14px}.option span{font-size:12px;color:var(--muted)}
.option:has(input:checked){border-color:var(--accent);background:var(--accent-soft);box-shadow:inset 0 0 0 1px var(--accent)}
.option:has(input:focus-visible){outline:3px solid var(--focus);outline-offset:2px}

/* Toasts and dialogs */
.toasts{position:fixed;left:50%;bottom:20px;transform:translateX(-50%);display:flex;flex-direction:column;gap:8px;z-index:20;width:min(420px,calc(100% - 32px))}
.toast{padding:12px 16px;border-radius:var(--radius-s);background:var(--text);color:var(--bg);font-size:14px;box-shadow:0 6px 24px rgba(0,0,0,.2);animation:rise .2s}
.toast.bad{background:var(--danger);color:#fff}
@keyframes rise{from{transform:translateY(8px);opacity:0}}
dialog{border:1px solid var(--border);border-radius:var(--radius);background:var(--surface);color:var(--text);padding:24px;max-width:420px;width:calc(100% - 32px)}
dialog::backdrop{background:rgba(10,15,25,.45)}
dialog h2{margin-bottom:8px}dialog p{color:var(--muted);font-size:14px}

/* Stats and bars */
.stat{font-size:40px;font-weight:650;letter-spacing:-1px;line-height:1.1;font-variant-numeric:tabular-nums}
.stat small{font-size:15px;font-weight:500;color:var(--muted);letter-spacing:0;margin-left:4px}
.bar{height:8px;border-radius:4px;background:var(--surface-muted);overflow:hidden;position:relative}
.bar i{position:absolute;inset:0 auto 0 0;background:var(--accent);border-radius:4px;transition:width .6s}
.bar i.target{background:transparent;border-right:2px solid var(--text);border-radius:0}
.eyebrow{font-size:12px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.5px}
.label{font-size:13px;font-weight:600}
progress{width:100%;height:8px;accent-color:var(--accent)}
pre{overflow:auto;white-space:pre-wrap;overflow-wrap:anywhere;font-size:12px;background:var(--surface-muted);padding:14px;border-radius:var(--radius-s);max-height:360px}

/* Diagnostics */
.health{display:grid;gap:8px;grid-template-columns:repeat(auto-fit,minmax(230px,1fr))}
.health .item{padding:10px 12px}
.diag{display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(240px,1fr))}
.diag details{border:1px solid var(--border);border-radius:var(--radius-s);padding:12px 14px;background:var(--surface)}
.diag summary{cursor:pointer;font-weight:600;display:flex;justify-content:space-between;gap:8px}
.diag dl{margin:8px 0 0;display:grid;grid-template-columns:auto 1fr;gap:4px 12px;font-size:13px}
.diag dt{color:var(--muted)}.diag dd{margin:0;text-align:right;overflow-wrap:anywhere}

/* ---------- A1 ---------- */
.a1-home{grid-template-columns:minmax(0,1.35fr) minmax(0,1fr);grid-template-areas:"fan panel" "fan auto" "filter filter" "light light"}
.fan-hero{display:flex;align-items:center;gap:20px}
.power{flex:none;width:96px;height:96px;border-radius:50%;border:0;display:grid;place-items:center;cursor:pointer;background:var(--surface-muted);color:var(--muted);box-shadow:inset 0 0 0 1px var(--border);transition:background .2s,box-shadow .2s,color .2s;width:96px}
.power svg{width:38px;height:38px}
.power[aria-pressed=true]{background:var(--accent);color:var(--accent-text);box-shadow:0 0 0 8px var(--accent-soft)}
.power:disabled{opacity:.5;cursor:not-allowed}
.mini-metrics{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
.mini-metrics>div{display:flex;flex-direction:column;gap:2px;padding:10px 12px;background:var(--surface-muted);border-radius:var(--radius-s)}
.mini-metrics b{font-size:18px}.mini-metrics small{font-size:12px;color:var(--muted);font-weight:500}
.mini-metrics .badge{align-self:flex-start}
.light-layout{display:flex;gap:28px;align-items:center}
.ring{width:180px;height:180px;flex:none}
.ring-effect-preview{display:flex;justify-content:center;align-items:center;gap:24px;min-height:196px}
.ring-preview-controls{width:min(280px,100%)}
.ring .ring-v{font-size:26px;font-weight:650;fill:var(--text)}.ring .ring-l{font-size:12px;fill:var(--muted)}
.ring .ring-anchor{font-size:7px;font-weight:700;fill:var(--muted)}
.ring .ring-guide{fill:none;stroke:var(--surface-muted);stroke-width:15}
.ring .ring-edge{fill:none;stroke:var(--muted);stroke-width:1;opacity:.45}
.ring .ring-light-segment{fill:none;stroke-width:12;stroke-linecap:butt;transition:stroke-opacity .12s linear}
.swatches{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px;align-items:center}
.swatch{width:32px;height:32px;min-height:32px;border-radius:50%;border:2px solid var(--surface);background:var(--c);box-shadow:0 0 0 1px var(--border);cursor:pointer;padding:0}
.swatch[aria-pressed=true]{box-shadow:0 0 0 2px var(--accent)}
.swatch:disabled,.swatches input:disabled{opacity:.35;cursor:not-allowed}
.swatches input[type=color]{width:32px;height:32px;min-height:32px;border-radius:50%;padding:3px;border:0;background:conic-gradient(red,yellow,lime,cyan,blue,magenta,red)}
.swatches input[type=color]::-webkit-color-swatch-wrapper{padding:0}
.swatches input[type=color]::-webkit-color-swatch{border:2px solid var(--surface);border-radius:50%}
.swatches input[type=color]::-moz-color-swatch{border:2px solid var(--surface);border-radius:50%}

/* ---------- M1 ---------- */
.verdict{display:flex;align-items:center;gap:16px;border-left:6px solid var(--border)}
.verdict[data-level=ok]{border-left-color:var(--success)}.verdict[data-level=warn]{border-left-color:var(--warn)}.verdict[data-level=bad]{border-left-color:var(--danger)}
.verdict[data-level=ok] .stat{color:var(--success)}.verdict[data-level=warn] .stat{color:var(--warn)}.verdict[data-level=bad] .stat{color:var(--danger)}
.fresh{display:flex;align-items:center;gap:8px;white-space:nowrap}
.metrics{display:grid;gap:16px;grid-template-columns:repeat(4,minmax(0,1fr))}
.metric .stat{margin:12px 0 14px}
.scale{position:relative;display:flex;gap:2px;height:6px}
.scale i{border-radius:3px;opacity:.55}.scale i.ok{background:var(--success)}.scale i.warn{background:var(--warn)}.scale i.bad{background:var(--danger)}
.scale b{position:absolute;top:-4px;width:4px;height:14px;margin-left:-2px;border-radius:2px;background:var(--text);box-shadow:0 0 0 2px var(--surface)}

/* ---------- TC1 ---------- */
.tc1-home{grid-template-columns:minmax(0,1.6fr) minmax(0,1fr);grid-template-areas:"sockets power" "sockets panel"}
.tiles{display:grid;gap:10px;grid-template-columns:repeat(3,minmax(0,1fr))}
.tile-wrap{position:relative}
.tile{width:100%;font:inherit;text-align:left;display:flex;flex-direction:column;gap:4px;padding:14px;min-height:110px;border-radius:var(--radius);border:1px solid var(--border);background:var(--surface-muted);color:var(--muted);cursor:pointer;transition:background .15s,border-color .15s;margin:0}
.tile .tile-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:auto}
.tile .idx{font-size:12px;font-weight:700;padding-right:26px}
.tile .name{color:var(--text);font-size:15px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.tile .state{font-size:13px;font-weight:600}
.tile[aria-pressed=true]{background:var(--accent-soft);border-color:var(--accent);color:var(--accent)}
.tile:disabled{cursor:progress;opacity:.7}
.tile-edit{position:absolute;top:8px;right:8px}
.spark{width:100%;height:64px;margin:12px 0 4px;display:block}
.spark .line{fill:none;stroke:var(--accent);stroke-width:2;vector-effect:non-scaling-stroke}
.spark .area{fill:var(--accent-soft);stroke:none}

@media(max-width:860px){.metrics{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:760px){
 body{padding:12px 14px 96px}
 .settings{grid-template-columns:1fr;gap:12px}
 .side{position:static;flex-direction:row;overflow-x:auto;gap:4px;padding-bottom:6px;scrollbar-width:none}
 .side .group{display:none}.side a{white-space:nowrap;border:1px solid var(--border)}
 .a1-home,.tc1-home{grid-template-columns:1fr;grid-template-areas:none}
 .a1-home>*,.tc1-home>*{grid-area:auto!important}
 .light-layout{flex-direction:column;align-items:stretch}.ring{align-self:center;width:150px;height:150px}.ring-effect-preview{flex-direction:column;gap:8px}
 .tiles{grid-template-columns:repeat(2,minmax(0,1fr))}
 .power{width:80px;height:80px}
 .verdict{flex-direction:column;align-items:flex-start}
 .card{padding:16px}.stat{font-size:34px}
 .brand h1{font-size:18px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
 .prefs select{max-width:84px}
}
@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}

/* Button mappings: gesture, concrete result, then row actions. */
.button-group{display:grid;gap:8px}.button-mapping{display:grid;grid-template-columns:minmax(110px,1fr) minmax(0,2fr) auto;gap:12px;align-items:center;padding:12px 0;border-bottom:1px solid var(--border)}
.button-result{overflow-wrap:anywhere}.button-range{border:1px solid var(--border);border-radius:var(--radius-s);padding:12px}.button-range summary{cursor:pointer;display:list-item}.button-range summary span{display:block;margin:6px 0 0 18px}.button-range summary .help{color:var(--accent)}
.button-preview{padding:14px;border-radius:var(--radius-s);background:var(--accent-soft);color:var(--accent);overflow-wrap:anywhere}
@media(max-width:600px){.button-mapping{grid-template-columns:1fr auto}.button-gesture{grid-column:1/-1}.button-mapping .row{justify-content:flex-end}.button-range .button-mapping{gap:6px}}

.copyright{margin-top:24px;padding:16px 0;border-top:1px solid var(--border);color:var(--muted);font-size:12px;line-height:1.8;text-align:center;overflow-wrap:anywhere}.copyright a{color:var(--accent);text-underline-offset:3px}

/* Fit the optional fifth M1 reading into the existing metric area. */
.metrics.with-co2{grid-template-columns:repeat(5,minmax(0,1fr))}
@media(max-width:860px){
 .metrics.with-co2{grid-template-columns:repeat(6,minmax(0,1fr));gap:10px}
 .metrics.with-co2>.metric{grid-column:span 2;min-width:0;padding:12px}
 .metrics.with-co2>.metric:nth-child(-n+2){grid-column:span 3}
 .metrics.with-co2 .stat{font-size:clamp(20px,5vw,32px)}
 .metrics.with-co2 .stat small{font-size:11px}
 .metrics.with-co2 .row.between{flex-wrap:wrap;gap:4px}
}

.co2-stale .scale i,.co2-stale .scale b{background:var(--muted)}
.co2-empty .scale b{display:none}
.metrics.with-co2 .label{min-width:0;overflow-wrap:anywhere}
.metrics.with-co2 .badge{max-width:100%;white-space:normal;overflow-wrap:anywhere}

/* Consistent title and badge rows regardless of label length or language. */
.metrics .metric-head{display:grid;grid-template-rows:auto auto;justify-items:start;align-content:start;gap:6px;min-height:66px}
.metrics .metric-head .label{line-height:20px;min-width:0;overflow-wrap:anywhere}
.metrics .metric-head .badge{justify-self:start;max-width:100%;white-space:normal;overflow-wrap:anywhere}
.metrics .metric{display:flex;flex-direction:column;min-width:0}
.metrics .metric .stat{margin-top:auto;padding-top:12px}
.metrics .metric-head{grid-template-rows:40px auto;min-height:72px}
.metrics .metric-head .label{align-self:start}

/* Schedule rows keep the duration, action and controls readable on phones. */
.schedule-task{display:grid;grid-template-columns:auto minmax(0,1fr) auto auto}
.schedule-task .grow{overflow-wrap:anywhere}
@media(max-width:600px){
 .schedule-task{grid-template-columns:minmax(0,1fr) auto}
 .schedule-task .time{grid-column:1;grid-row:1}
 .schedule-task>.badge{grid-column:2;grid-row:1}
 .schedule-task .grow{grid-column:1/-1;grid-row:2}
 .schedule-task>.row{grid-column:1/-1;justify-content:flex-end}
}

.binding-peer .grow{overflow-wrap:anywhere}
@media(max-width:600px){
 .binding-peer{flex-wrap:wrap}
 .binding-peer>.grow{flex-basis:calc(100% - 52px)}
}
</style>
<script>/* Apply the saved theme before first paint so the page does not flash light on
 * a dark display. The control itself lives in the shared header (ui.js). */
(()=>{
'use strict';
 const key='phicomm.appearance',choices=['system','light','dark'];
 let selected='system';try{const saved=localStorage.getItem(key);if(choices.includes(saved))selected=saved;}catch{}
 if(selected==='system')document.documentElement.removeAttribute('data-theme');
 else document.documentElement.dataset.theme=selected;
})();
<\/script></head>
<body>
<main id="homePage" class="home tc1-home">
 <section class="card" style="grid-area:sockets">
  <div class="card-head">
   <div><h2 data-i18n="tc1.sockets"></h2><p class="help" id="onCount"></p></div>
   <div class="row" style="gap:8px"><button id="allOn" class="btn" type="button" data-i18n="tc1.all_on"></button><button id="allOff" class="btn" type="button" data-i18n="tc1.all_off"></button></div>
  </div>
  <div class="tiles" id="tiles"></div>
  <p class="help" style="margin-top:12px" data-i18n="tc1.output_hint"></p>
 </section>
 <section class="card" style="grid-area:power">
  <div class="card-head"><h2 data-i18n="tc1.power"></h2><span class="dot ok live"></span></div>
  <div class="stat" id="watts">—<small>W</small></div>
  <svg id="spark" class="spark" viewBox="0 0 300 64" preserveAspectRatio="none" aria-hidden="true"></svg>
  <div class="row between help"><span id="sparkRange"></span><span data-i18n="tc1.recent"></span></div>
  <dl class="summary" style="margin-top:14px">
   <div><dt data-i18n="tc1.energy"></dt><dd class="num" id="energy">—</dd></div>
   <div><dt data-i18n="tc1.peak"></dt><dd class="num" id="peak">—</dd></div>
  </dl>
 </section>
 <section class="card" style="grid-area:panel">
  <div class="card-head"><h2 data-i18n="a1.panel"></h2></div>
  <label class="switch"><span class="text"><b data-i18n="a1.child_lock"></b><span data-i18n="tc1.lock_desc"></span></span><input type="checkbox" role="switch" id="childLock"></label>
  <label class="switch"><span class="text"><b data-i18n="tc1.led"></b><span data-i18n="tc1.led_desc"></span></span><input type="checkbox" role="switch" id="ledEnabled"></label>
 </section>
</main>

<div id="settingsPage" class="settings" hidden>
 <nav class="side" id="side" aria-label="Settings"></nav>
 <div id="pages">
  <div data-settings-page="device" class="stack">
   <div><h2 class="page-title" data-i18n="nav.general"></h2><p class="page-lead" data-i18n="gen.lead"></p></div>
   <div data-slot="name"></div>
   <section class="card">
    <div class="card-head"><div><h2 data-i18n="tc1.names"></h2><p class="help" data-i18n="tc1.names_desc"></p></div></div>
    <form id="socketNamesForm"><div class="fields" id="nameFields"></div>
     <div class="form-actions"><button class="btn primary" type="submit" data-i18n="common.save"></button></div></form>
   </section>
   <section class="card">
    <div class="card-head"><h2 data-i18n="a1.panel"></h2></div>
    <label class="switch"><span class="text"><b data-i18n="a1.child_lock"></b><span data-i18n="tc1.lock_desc"></span></span><input type="checkbox" role="switch" id="childLockDevice"></label>
    <label class="switch"><span class="text"><b data-i18n="tc1.led"></b><span data-i18n="tc1.led_desc"></span></span><input type="checkbox" role="switch" id="ledEnabledDevice"></label>
   </section>
   <section class="card">
    <div class="card-head"><h2 data-i18n="tc1.metering"></h2></div>
    <form id="reportForm" class="field"><span data-i18n="tc1.report"></span>
     <div class="row"><span class="input-unit grow"><input id="reportSeconds" type="number" min="1" max="3600" required><em data-i18n="unit.s"></em></span>
      <button class="btn primary" type="submit" data-i18n="common.save"></button></div>
     <p class="help" data-i18n="tc1.report_help"></p></form>
    <details class="more"><summary data-i18n="tc1.calibration"></summary>
     <div class="banner warn"><span data-i18n="tc1.coef_warn"></span></div>
     <form id="coefForm" class="field"><span data-i18n="tc1.coef"></span>
      <div class="row"><span class="input-unit grow"><input id="coef" type="number" min="100" max="10000" required><em>×0.01</em></span>
       <button class="btn" type="submit" data-i18n="common.save"></button></div></form>
    </details>
   </section>
   <div data-slot="auth"></div>
  </div>
  <div data-settings-page="schedule" class="stack"></div>
  <div data-settings-page="buttons" class="stack"></div>
 </div>
</div>

<footer class="copyright">Copyright &copy; Phicomm Community · <a href="https://github.com/phicomm-io/phicomm-community-firmware" target="_blank" rel="noopener noreferrer">固件仓库</a> · <a href="https://phicomm-io.github.io" target="_blank" rel="noopener noreferrer">项目网站</a></footer>
<script>/* EN / zh-CN strings, one [English, 简体中文] pair per key so the two stay in
 * step. The language follows the browser unless the user picks one in the
 * header (kept in localStorage, never sent to the device). */
(()=>{
'use strict';
const D={
'auto.mode':['Operating mode','运行模式'],'auto.auto':['Auto','自动'],'auto.manual':['Manual','手动'],
'auto.toggle':['Toggle auto/manual','切换自动／手动模式'],'auto.idle':['Idle','待机'],
'auto.minimum':['Minimum speed','最低风速'],'auto.maximum':['Maximum speed','最高风速'],
'auto.fallback':['Sensor offline speed','传感器离线风速'],
'auto.help':['Adjusts speed while powered on. Switching mode does not turn power on.','开机时按空气质量调速，切换模式不会自动开机。'],
'auto.mode_help':['Auto adjusts speed; manual restores your last manual speed.','自动模式按空气质量调速；手动模式恢复上次手动风速。'],
'auto.range_help':['A minimum of 0 allows idle. Offline speed is limited to this range. Night windows override this range. The ring and slider adjust the current maximum in auto mode.','最低风速设为 0 可停转待机。离线风速受上下限约束，夜间时段可单独设置。自动模式下滑环和滑块调整当前时段的风速上限。'],
 'auto.hysteresis_title':['Start and idle','启动与待机'],
'auto.hysteresis':['Enable start/idle hysteresis','启用启停回差'],
'auto.hysteresis_help':['Starts at the start threshold and idles at the target. Between them, keeps its current state.','达到启动阈值开始运行，降到目标值后停转待机，两者之间保持原运行状态。'],
'auto.hysteresis_detail':['Start must exceed target. Any selected pollutant can start the fan; all must meet target to idle. The chosen algorithm adjusts speed while running, with at least 1%. Condition duration and minimum interval apply. Offline speed takes over if sensors are unavailable. Switching off prevents restart.','启动阈值必须高于目标值。任一所选指标达到阈值即启动，全部达标后待机。运行时按所选算法调速，最低为 1%。条件持续时间和最短启停间隔同时生效。传感器离线时改用离线风速；手动关机后不主动启动。'],
'auto.target_pm':['PM2.5 target / idle at','PM2.5 目标值（待机）'],
'auto.start_pm':['PM2.5 start threshold','PM2.5 启动阈值'],
'auto.target_hcho':['Formaldehyde target / idle at','甲醛目标值（待机）'],
'auto.start_hcho':['Formaldehyde start threshold','甲醛启动阈值'],
'auto.hysteresis_invalid':['Start threshold must be greater than target for each selected pollutant.','所选指标的启动阈值必须高于目标值。'],
'auto.no_sensor':['No sensor available. The configured offline speed applies while powered on.','暂无可用传感器，开机时使用设定的离线风速。'],
'auto.low_pm':['PM2.5 at minimum speed','最低风速对应 PM2.5'],'auto.high_pm':['PM2.5 at maximum speed','最高风速对应 PM2.5'],
'auto.low_hcho':['Formaldehyde at minimum speed','最低风速对应甲醛'],'auto.high_hcho':['Formaldehyde at maximum speed','最高风速对应甲醛'],
'filter.title':['Estimated filter life','滤芯寿命预估'],
'filter.hint':['Counts fan running time only. Default: 4320 h (180 days continuously). Adjust to your filter specification; air quality and filter condition also affect replacement.','仅累计风机开启时间，默认 4320 小时（连续运行 180 天）。可按滤芯规格调整；更换时间还需结合空气质量和滤芯状态。'],
'filter.usage':['Used {used} / {total} h','已用 {used} / {total} 小时'],
'filter.normal':['In service','使用中'],'filter.due':['Replace filter soon','建议更换滤芯'],'filter.expired':['Replacement due','请更换滤芯'],
'filter.settings':['Adjust rated lifetime','调整额定寿命'],'filter.lifetime':['Rated lifetime (hours, 1–20000)','额定寿命（小时，1–20000）'],
'filter.reset':['Reset after replacing filter','更换滤芯后重置'],
'filter.confirm':['Reset accumulated usage to zero? Only reset after installing a new filter.','将累计使用时间清零并恢复至 100%？请在更换新滤芯后执行。'],
'filter.reset_done':['Filter usage reset','滤芯使用时间已重置'],
'import.platform':['Open IotCloud','打开 IotCloud'],
'import.title':['Import MQTT configuration','导入 MQTT 配置'],
'import.preview':['Broker: {host}:{port} · Username: {user}','Broker：{host}:{port} · 用户名：{user}'],
'import.source':['Configuration source: {origin}','配置来源：{origin}'],
'import.accept':['Receive and prefill','接收并预填'],
'import.help':['Only accept a transfer you started from a trusted platform. Review the fields and save to apply. The device never exports its saved password.','仅接收你从可信平台发起的配置。接收后请检查下方表单，点击保存才会生效。设备不会导出已保存的密码。'],
'import.http':['HTTP cannot protect against LAN interception or tampering. Use only on a trusted network.','HTTP 无法防止局域网窃听或篡改，请仅在可信网络使用。'],
'import.invalid':['Invalid import request. Start again from the platform.','导入请求无效，请从平台重新发起。'],
'import.expired':['Transfer cancelled or expired. Start again from the platform.','传递已取消或过期，请从平台重新发起。'],
'import.waiting':['Waiting for configuration…','正在等待配置…'],
'import.received':['Configuration prefilled. Review the MQTT Host, port and account below, then save.','配置已预填。请核对下方 MQTT Host、端口与账号，再点击保存。'],
'import.no_opener':['The platform window is unavailable. Keep it open and restart the transfer.','无法连接平台窗口，请保持平台页面打开并重新发起传递。'],
'fw.cancel':['Cancel download','终止下载'],'fw.cancelling':['Cancelling; services will resume shortly.','正在终止，稍后恢复正常服务。'],'fw.online':['Online updates','在线更新'],'fw.check':['Check for updates','检查更新'],'fw.install_online':['Download and install','下载并安装'],'fw.notes':['Release notes','发布说明'],
'fw.sources_help':['Choose a source to check its latest version.','选择更新来源，检查最新版本。'],'fw.source_github':['GitHub Pages (HTTPS)','GitHub Pages（HTTPS）'],'fw.source_cn':['China mirror (HTTP)','境内镜像（HTTP）'],'fw.source_global':['Global mirror (HTTP)','境外镜像（HTTP）'],
'fw.check_idle':['Choose a source and check','选择来源后检查更新'],'fw.check_checking':['Checking…','正在检查…'],'fw.check_available':['Update available','发现新版本'],'fw.check_up_to_date':['Already up to date','当前已是最新版本'],'fw.check_failed':['Update check failed; try another source','检查失败，请重试或切换来源'],'fw.confirm_online':['Install this signed update and restart the device?','安装此签名更新并重启设备？'],
/* Application watchdog diagnostics (A1/M1). */
'diag.g_watchdog':['Restart & watchdog','复位与看门狗'],
'diag.c_watchdog':['Watchdog','看门狗'],
'diag.watchdog_reboot':['Last restart was caused by watchdog timeout','上次因看门狗超时重启'],
'd.reset_reason':['Last reset reason','上次复位原因'],
'd.reset_reason_raw':['Raw reset reason','原始复位原因码'],
'd.watchdog_enabled':['Watchdog enabled','看门狗已启用'],
'd.watchdog_state':['Watchdog state','看门狗状态'],
'd.watchdog_fault':['Unresponsive worker','无响应的处理线程'],
's.watchdog':['Watchdog timeout','看门狗超时'],
's.lockup':['CPU lockup','CPU 锁死'],
's.software':['Software reset','软件复位'],
's.power_on':['Power-related reset','电源相关复位'],
's.unknown':['Unknown','未知'],
's.healthy':['Healthy','正常'],
's.starting':['Starting','启动中'],
's.fault':['Heartbeat timeout or watchdog error','心跳超时或看门狗错误'],
'average.co2':['Mean CO₂','平均 CO₂'],
'auto.target_co2':['CO₂ target / idle at','CO₂ 目标值（待机）'],'auto.start_co2':['CO₂ start threshold','CO₂ 启动阈值'],
'auto.low_co2':['CO₂ at minimum speed','最低风速对应 CO₂'],'auto.high_co2':['CO₂ at maximum speed','最高风速对应 CO₂'],
'link.all':['All three','三者'],'link.co2_help':['CO₂ requires a linked M1 with a CO₂ sensor. Missing or expired readings use the offline fan speed.','CO₂ 需要绑定已安装 CO₂ 传感器的 M1；读数缺失或过期时使用离线风速。'],
'average.temperature':['Mean temperature','平均温度'],'average.humidity':['Mean humidity','平均湿度'],'average.pm25':['Mean PM2.5','平均 PM2.5'],'average.formaldehyde':['Mean formaldehyde','平均甲醛'],
/* common */
'btn.key_both':['Wi-Fi + power keys','Wi-Fi + 电源组合键'],
'btn.reset_note_a1':['Only the Wi-Fi key alone uses the fixed 5/10-second recovery gestures. Combination gestures cancel individual key actions.','仅单独长按 Wi-Fi 键 5／10 秒触发固定恢复操作；组合键会取消本轮单键动作。'],
'op.effect_next':['Cycle light effect','切换到下一灯效'],'op.effect_select':['Select light effect','设置灯效'],
'op.filter_reset':['Reset filter usage','重置滤芯寿命'],'op.light_always':['Light always on','灯环常亮'],
'op.set_brightness':['Also set brightness','同时设置亮度'],
'filter.status':['Used {used} hours · {remaining}% remaining','已使用 {used} 小时 · 剩余 {remaining}%'],
'filter.reset_hint':['Use this gesture after replacing the filter to clear its accumulated runtime.','更换滤芯后使用此手势，将累计运行时间清零。'],
'filter.reset_confirm':['Clear the filter runtime after replacing the filter?','确认已更换滤芯并清零累计使用时间？'],
'btn.key':['Key','按键'],'btn.key_fn':['Function key','功能键'],'btn.key_power':['Power key','电源键'],'btn.key_wifi':['Wi-Fi key','Wi-Fi 键'],'btn.pick_action':['Choose an action','请选择动作'],
'op.on':['On','开启'],'op.off':['Off','关闭'],'op.toggle':['Toggle','切换'],'op.all':['All sockets','全部插座'],'op.target':['Target','对象'],'op.state':['New state','目标状态'],'op.brightness':['Brightness','亮度'],'op.speed':['Fan speed','风速'],
'op.outlet':['Sockets','插座'],'op.fan':['Fan','风机'],'op.light':['Light ring','灯环'],'op.child_lock':['Child lock','童锁'],'op.indicator':['Indicator light','指示灯'],'op.display':['Screen brightness','屏幕亮度'],'op.reboot':['Restart device','重启设备'],
'clock.uptime':['Running for','已运行'],'clock.memory':['Free memory','可用内存'],
'night.hint':['Periods use the device time zone; an end earlier than the start crosses midnight.','时段按设备时区生效；结束早于开始表示跨午夜。'],'night.period':['Period {n}','时段 {n}'],'night.screen':['Limit screen brightness','限制屏幕亮度'],
'sch.new':['New schedule','新建定时'],'sch.edit':['Edit','编辑'],'sch.enable':['Enable','启用'],'sch.disable':['Disable','停用'],'sch.enabled':['Enabled','已启用'],'sch.disabled':['Disabled','已停用'],'sch.enabled_row':['Enabled','启用'],'sch.pick_action':['Choose an action for the schedule','请为定时任务选择动作'],'sch.pick_when':['Pick a date and time','请选择日期与时间'],'sch.save_btn':['Save schedule','保存任务'],
'fw.verify_ok':['Verified; the device is restarting','校验通过，设备正在重启'],'fw.failed':['Update failed: {e}','升级失败：{e}'],'fw.upload_lost':['Upload interrupted; reconnect to check the update state','连接中断，请重新连接设备查看升级状态'],'fw.upload_timeout':['Upload timed out','上传超时'],'fw.url_started':['Download started','已开始下载'],
'diag.g_ota_img':['Update image','升级镜像'],
'op.fan_panel':['Power on / show current mode and airflow','开机／查看当前模式与风量'],
'common.save':['Save','保存'],'common.cancel':['Cancel','取消'],'common.add':['Add','添加'],'common.delete':['Delete','删除'],'common.deleted':['Deleted','已删除'],
'common.copy':['Copy','复制'],'common.copied':['Copied','已复制'],'common.advanced':['Advanced','高级'],'common.more_info':['Details','说明'],
'common.prev':['Previous','上一页'],'common.next':['Next','下一页'],'common.yes':['Yes','是'],'common.no':['No','否'],'common.saving':['Saving…','保存中…'],'common.saved':['Saved','已保存'],'common.max':['Up to {n} items','最多 {n} 项'],
'unit.s':['s','秒'],'time.dh':['{d} d {h} h','{d} 天 {h} 小时'],'time.hm':['{h} h {m} min','{h} 小时 {m} 分'],'time.m':['{m} min','{m} 分钟'],
'toast.accepted':['Request accepted','设备已接受请求'],'toast.rebooting':['Restarting… reconnect in about 20 s','正在重启，约 20 秒后重新连接'],'toast.resetting':['Settings cleared. The device is restarting.','配置已清除，设备正在重启'],
'pref.lang_auto':['Auto','自动'],'pref.theme_system':['System','跟随系统'],'pref.theme_light':['Light','浅色'],'pref.theme_dark':['Dark','深色'],

/* kinds and navigation */
'kind.a1':['A1 Air Purifier','A1 空气净化器'],'kind.m1':['M1 Air Monitor','M1 空气质量检测器'],'kind.tc1':['TC1 Power Strip','TC1 智能插座'],
'nav.home':['Home','首页'],'nav.settings':['Settings','设置'],
'grp.network':['Network','网络'],'grp.device':['Device','设备'],'grp.auto':['Automation','自动化'],'grp.system':['System','系统'],
'nav.wifi':['Wi-Fi','Wi-Fi'],'nav.mqtt':['MQTT / Home Assistant','MQTT / Home Assistant'],'nav.general':['General','通用'],'nav.light':['Light effects','灯效'],
'nav.binding':['Linked M1','绑定 M1'],'nav.linkage':['Auto control','自动调速'],'auto.settings':['Automatic control settings','自动调速设置'],'nav.schedule':['Schedules','定时任务'],'nav.sleep':['Night mode','夜间模式'],
'nav.buttons':['Button events','按键事件'],'nav.permission':["A1 sessions", "A1 会话"],
'nav.firmware':['Firmware','固件升级'],'nav.diagnostics':['Diagnostics','诊断'],'nav.logs':['Logs','日志'],'nav.maintenance':['Restart & reset','重启与恢复'],
/* header */
'chip.wifi':['Wi-Fi','Wi-Fi'],'chip.hotspot':['Setup hotspot','配网热点'],'chip.mqtt':['MQTT','MQTT'],'chip.firmware':['Firmware','固件'],'chip.clock':['Clock not synced','时钟未校准'],
'state.connected':['Connected','已连接'],'state.connecting':['Connecting…','连接中…'],'state.disconnected':['Disconnected','未连接'],'state.hotspot':['Setup hotspot on','配网热点已开启'],
'state.off':['Off','关闭'],'state.ready':['Ready','就绪'],'state.ok':['Normal','正常'],
'banner.lost':['Lost connection to the device. If it is updating, wait for it to restart.','与设备的连接已中断。如正在升级，请等待设备重启。'],
'banner.ota':['Firmware update in progress ({p}%). Controls are paused.','正在升级固件（{p}%），控制暂不可用。'],
'banner.rebooting':['The device is restarting.','设备正在重启。'],
'banner.cleanup':['Old Home Assistant entities could not be removed. Delete them on the previous broker.','旧 HA 实体清理失败，请在原 Broker 上手动删除。'],
'banner.save_error':['Settings could not be saved: {e}','设置保存失败：{e}'],
'banner.hotspot':['Not connected to Wi-Fi. Setup hotspot "{n}" is on.','尚未连接 Wi-Fi，配网热点「{n}」已开启。'],
/* Wi-Fi */
'wifi.lead':['The device keeps its old network until the new one is verified.','新网络验证成功前，设备保持原有连接。'],
'wifi.status':['Status','状态'],'wifi.ssid':['Network name','网络名称'],'wifi.ip':['IP address','IP 地址'],'wifi.ap':['Hotspot','热点名称'],'wifi.saved_password':['Password saved','已保存密码'],
'wifi.change':['Change network','更换网络'],'wifi.scan':['Scan','扫描'],'wifi.password':['Password','密码'],'wifi.pass_ph':['Leave empty to keep the saved password','同一网络留空则保留原密码'],
'wifi.open':['This network has no password','此网络没有密码'],'wifi.open_badge':['Open','开放'],'wifi.save':['Verify and save','验证并保存'],
'wifi.verifying':['Verifying… the device saves only after it gets an IP','验证中…取得 IP 后才会保存'],
'wifi.hint':['The new network is saved only after the device joins it and gets an IP address. If that does not happen within 30 s, it returns to the previous network.','设备连上新网络并取得 IP 后才保存；30 秒内失败则恢复之前的网络。'],
'wifi.none':['No networks found. Type the name instead.','未发现网络，可手动填写名称'],'wifi.scan_timeout':['Scan timed out','扫描超时'],
'wifi.signal.0':['Very weak','信号很弱'],'wifi.signal.1':['Weak','信号弱'],'wifi.signal.2':['Good','信号良好'],'wifi.signal.3':['Strong','信号强'],
/* MQTT */
'mqtt.lead':['Connect a broker to use Home Assistant or the TMCP cloud.','连接 Broker 后可接入 Home Assistant 或 TMCP 云平台。'],
'mqtt.status':['Status','状态'],'mqtt.broker':['Broker','Broker'],'mqtt.host':['Broker address','Broker 地址'],'mqtt.host_ph':['IP or domain — empty disables MQTT','IP 或域名；留空则停用'],
'mqtt.port':['Port','端口'],'mqtt.user':['Username','用户名'],'mqtt.password':['Password','密码'],'mqtt.pass_ph':['Leave empty to keep','留空保留原密码'],
'mqtt.mode':['Topic mode','主题模式'],'mqtt.mode_legacy':['Legacy','Legacy'],
'mqtt.mode_tmcp':['TMCP','TMCP'],'mqtt.mode_tmcp_desc':['TMCP — joins your cloud list automatically','TMCP — 上线后自动加入云端列表'],
'mqtt.mode_hint':['Changing the account tries to remove the old Home Assistant entities. If that fails, delete them on the old broker.','切换账户会尝试清理旧 HA 实体，失败时需在旧 Broker 手动清理。'],
'mqtt.clear':['Clear saved password','清除已保存的密码'],'mqtt.clear_desc':['Connect without a password','以无密码方式连接'],
'mqtt.too_long':['Username max 63 bytes, password max 256 bytes','用户名最多 63 字节，密码最多 256 字节'],
'mqtt.ha_a1':['Home Assistant creates the purifier, RGB light ring, child lock and always-on switches automatically.','Home Assistant 会自动创建净化器、RGB 灯环、童锁和常亮开关。'],
'mqtt.ha_m1':['Home Assistant creates four sensors and a screen brightness control automatically.','Home Assistant 会自动创建四项传感器和屏幕亮度控制。'],
'mqtt.ha_tc1':['Home Assistant creates six sockets, power, indicator and child lock entities automatically.','Home Assistant 会自动创建六路插座、功率、指示灯和童锁。'],
/* General */
'gen.lead':['Name, panel and access settings.','名称、面板与访问设置。'],'gen.identity':['Device','设备'],'gen.name':['Device name','设备名称'],'gen.default_name':['Restore default name','恢复默认名称'],
'gen.name_long':['Name is limited to 63 bytes','名称最多 63 字节'],'gen.device_id':['MAC','MAC 地址'],'gen.uptime':['Running for','已运行'],
'auth.title':['Web access','访问认证'],'auth.lead':['Protect this page with a password (username: admin).','为本页面设置密码（用户名 admin）。'],
'auth.password':['Web password','网页密码'],'auth.ph':['8–32 characters; empty turns it off','8–32 个字符；留空关闭认证'],
'auth.help':['Your browser will ask you to sign in again after it changes.','修改后浏览器会要求重新登录。'],'auth.set':['Set password','设置密码'],
'auth.on':['Protected','已启用'],'auth.off':['Not protected','未启用'],'auth.invalid':['Use 8–32 printable ASCII characters','请使用 8–32 个可打印 ASCII 字符'],
'clock.title':['Clock','时钟'],'clock.tz':['Time zone','时区'],'clock.ntp':['NTP server','NTP 服务器'],'clock.synced':['Clock','校时状态'],'clock.last':['Last sync','最近校时'],
'clock.hint':['Domain or IPv4 only, without protocol or port. If it fails the device tries Aliyun, Tencent and public NTP pools; it re-syncs hourly and retries after 60 s on failure.','只填域名或 IPv4，不含协议和端口。失败后自动尝试阿里、腾讯及公共 NTP 池；每小时校时，失败 60 秒后重试。'],
'tz.cn':['Beijing','北京'],
/* Firmware */
'fw.lead':['Updates keep Wi-Fi, MQTT and device settings.','升级会保留 Wi-Fi、MQTT 和设备设置。'],'fw.version':['Installed version','当前版本'],'fw.state':['Update status','升级状态'],'fw.error':['Last error','最近错误'],
'fw.install':['Install update','安装更新'],'fw.tab_file':['Upload file','上传文件'],'fw.tab_url':['From URL','从网址下载'],
'fw.file':['Signed {m} OTA file','{m} 签名 OTA 文件'],'fw.url':['Direct link (HTTP)','更新文件直链（HTTP）'],'fw.upload':['Upload and install','上传并升级'],'fw.download':['Download and install','下载并升级'],
'fw.unsigned':['Allow unsigned firmware','允许未签名的固件'],'fw.unsigned_desc':['Rescue only. The image is still checked for this device.','仅用于救援；仍会检查是否适用于本设备。'],
'fw.unsigned_confirm':['Unsigned firmware is not verified. Only continue if you trust the file.','未签名的固件不会校验来源，请确认文件可信后再继续。'],
'fw.uploading':['Uploading {p}%','正在上传 {p}%'],'fw.progress':['Installing {p}%','正在安装 {p}%'],'fw.preview_done':['Preview only: no file was sent.','预览模式：未实际发送文件。'],
'fw.hint_a1':['Choose an A1 OTA package from this project. The device restarts after verification.','请选择本项目的 A1 OTA 包，校验成功后自动重启。'],
'fw.hint_m1':['Choose an M1 OTA package from this project. The device restarts after verification.','请选择本项目的 M1 OTA 包，校验成功后自动重启。'],
'fw.hint_tc1':['Choose a TC1 OTA package from this project. The device restarts after verification.','请选择本项目的 TC1 OTA 包，校验成功后自动重启。'],
/* Diagnostics */
'diag.lead':['A health summary first; raw values below for troubleshooting.','先看健康摘要，下方为排障用的原始数值。'],'diag.health':['Health','健康状态'],'diag.details':['Details','详细状态'],
'diag.raw':['Raw JSON','原始 JSON'],'diag.updated':['Last read {t}','最近读取 {t}'],'diag.errors':['{n} errors','{n} 次错误'],'diag.logs':['System log','系统日志'],'logs.lead':['Device log records the last events of this run.','设备日志记录本次运行的最近事件。'],'logs.hint':['Only the most recent events from this run are kept; they are cleared on restart.','仅保留本次运行的最近事件，重启后清空。'],'logs.load_all':['Load all','读取全部'],'logs.download':['Download','下载'],'logs.empty':['No events yet','暂无事件'],'logs.overwritten':['Older entries were overwritten','较早的日志已被覆盖'],'diag.log_refresh':['Refresh','刷新'],
'diag.c_wifi':['Wi-Fi','Wi-Fi'],'diag.c_mqtt':['MQTT','MQTT'],'diag.c_ota':['Firmware update','固件升级'],'diag.c_panel':['Control panel','控制面板'],'diag.c_fan':['Fan driver','风机驱动'],
'diag.c_storage':['Settings storage','配置存储'],'diag.c_sensor':['Sensor','传感器'],'diag.c_clock':['Clock','时钟'],'diag.c_memory':['Free memory','可用内存'],
'diag.g_device':['Device','设备'],'diag.g_network':['Network','网络连接'],'diag.g_mqtt':['MQTT','MQTT'],'diag.g_ota':['Firmware update','固件升级'],'diag.g_fan':['Fan & panel','风机与面板'],
'diag.g_light':['Light ring','灯环'],'diag.g_sensor':['Sensor','传感器'],'diag.g_clock':['Clock','时钟'],'diag.g_screen':['Screen','屏幕'],'diag.g_sockets':['Sockets','插座'],
'diag.g_power':['Metering','计量'],'diag.g_time':['Clock','时钟'],'diag.g_lan':['LAN','局域网'],'diag.g_other':['Other','其他'],
/* Maintenance */
'sys.lead':['Restart the device or return it to defaults.','重启设备或恢复默认配置。'],'sys.reboot':['Restart','重启设备'],'sys.reboot_desc':['Settings are kept.','设置保留不变。'],
'sys.reboot_q':['Restart {m}?','重启 {m}？'],'sys.reboot_body':['The page reconnects when the device is back.','设备恢复后页面会自动重新连接。'],
'sys.reset':['Reset to defaults','恢复默认配置'],'sys.reset_desc':['Clears Wi-Fi, MQTT, password and all settings.','清除 Wi-Fi、MQTT、网页密码及全部设置。'],
'sys.reset_q':['Erase all settings?','清除全部配置？'],'sys.reset_body':['The device restarts with the setup hotspot. This cannot be undone.','设备将重启并开启配网热点，此操作无法撤销。'],
'sys.hint_a1':['On the device: hold the function key 5–10 s to clear Wi-Fi and the web password, over 10 s to clear everything. Works even with child lock on.','设备上：功能键按住 5–10 秒清除 Wi-Fi 和网页密码，超过 10 秒清除全部配置；童锁期间同样有效。'],
'sys.hint_m1':['On the device: a long press of the panel key clears Wi-Fi and the web password.','设备上：长按面板按键可清除 Wi-Fi 和网页密码。'],
'sys.hint_tc1':['On the device: hold the key 5–10 s to clear Wi-Fi and the web password, over 10 s to clear everything (all sockets default to on).','设备上：按键按住 5–10 秒清除 Wi-Fi 和网页密码，超过 10 秒清除全部配置（六路默认开启）。'],
/* Air quality */
'air.co2.comfort':['Comfortable','舒适'],'air.co2.elevated':['Elevated','偏高'],'air.co2.ventilate':['Ventilate','建议通风'],'m.co2_range':['Ventilation reference: ≤1000 ppm comfortable; 1001–1500 elevated; >1500 ventilate.','通风参考：≤1000 ppm 舒适；1001–1500 偏高；>1500 建议通风。'],'m.co2_stale':['Outdated','已过期'],'m.co2':['Carbon dioxide (CO₂)','二氧化碳（CO₂）'],'m.pm25':['PM2.5','PM2.5'],'m.formaldehyde':['Formaldehyde','甲醛'],'m.temperature':['Temperature','温度'],'m.humidity':['Humidity','湿度'],
'air.pm25.excellent':['Excellent','优'],'air.pm25.good':['Good','良'],'air.pm25.light':['Light pollution','轻度污染'],'air.pm25.moderate':['Moderate pollution','中度污染'],'air.pm25.heavy':['Heavy pollution','重度污染'],'air.pm25.severe':['Severe pollution','严重污染'],
'air.formaldehyde.pass':['Within limit','达标'],'air.formaldehyde.slight':['Slightly high','略高'],'air.formaldehyde.exceed':['Over limit','超标'],
'air.temperature.cool':['Cool','偏冷'],'air.temperature.comfort':['Comfortable','舒适'],'air.temperature.warm':['Warm','偏热'],
'air.humidity.dry':['Dry','偏干'],'air.humidity.comfort':['Comfortable','舒适'],'air.humidity.humid':['Humid','偏湿'],
/* A1 home */
'a1.fan':['Purifier','净化器'],'a1.power':['Power','电源'],'a1.running':['Running','运行中'],'a1.off':['Off','已关闭'],
'a1.sub_manual':['{p}% · manual','{p}% · 手动'],'a1.sub_auto':['{p}% · following M1','{p}% · 跟随 M1 自动调节'],'a1.sub_off':['Starts at {p}% when turned on','开启后以 {p}% 运行'],
'a1.locked_ota':['Controls paused during update or restart','升级或重启期间暂停控制'],
'a1.speed':['Fan speed','风速'],'a1.feedback_target':['Target speed','目标速度'],'a1.feedback_pwm':['Current output','当前输出'],'a1.resume':['{p}% when on','开启后 {p}%'],'a1.p_quiet':['Quiet','静音'],'a1.p_low':['Low','低'],'a1.p_mid':['Medium','中'],'a1.p_max':['Max','强'],
'a1.out_stopped':['Fan stopped','风机已停止'],'a1.out_ramp':['Output {a}% → ramping to {p}%','实际输出 {a}%，正在调整到 {p}%'],'a1.out_steady':['Output {a}%','实际输出 {a}%'],
'a1.fan_hint':['Output is the PWM level the firmware applies; the fan ramps gradually and has no speed sensor. Choosing a speed also turns the purifier on.','“实际输出”为软件 PWM 设定，风机逐步调整，设备没有转速回读。选择风速会同时开启净化器。'],
'a1.panel':['Panel','面板'],'a1.panel_ok':['Panel connected','面板通信正常'],'a1.panel_bad':['Panel not responding','面板无响应'],
'a1.child_lock':['Child lock','童锁'],'a1.child_lock_desc':['Locks power and speed keys on the device','锁定机身电源和调速按键'],'a1.lock_on':['Child lock on','童锁已开启'],'a1.lock_off':['Child lock off','童锁已关闭'],
'a1.button_hint':['Hold the Wi-Fi key for 2.5 s to open the setup hotspot; this works with child lock on.','长按 Wi-Fi 键 2.5 秒可开启配网热点，童锁期间仍可使用。'],
'a1.auto':['Auto control','自动调速'],'a1.auto_lead':['Adjusts the fan from linked M1 readings','根据绑定的 M1 读数调节风速'],
'a1.auto_empty':['No M1 is linked yet. Link one to run the purifier automatically.','尚未绑定 M1，绑定后可按空气质量自动运行。'],'a1.auto_link':['Link an M1','绑定 M1'],
'a1.auto_enable':['Turn on auto control','开启自动调速'],'a1.auto_peers':['{n} M1 · {f} reporting','{n} 台 M1 · {f} 台有数据'],
'a1.auto_failed':['No fresh M1 data. The configured offline speed applies while powered on.','暂无有效的 M1 数据，开机时使用设定的离线风速。'],'a1.auto_speed':['Auto speed {p}%','自动风速 {p}%'],
's.link_disabled':['Off','未开启'],'s.link_active':['Active','运行中'],'s.link_sensor_failed':['No data','无数据'],
'a1.ring':['Light ring','灯环'],'a1.ring_on':['Light ring','启用灯环'],'a1.always_on':['Always on','常亮'],'a1.always_on_desc':['Otherwise it lights for 2 s after each change','否则仅在操作后亮 2 秒'],
'a1.color':['Colour','颜色'],'a1.brightness':['Brightness','亮度'],'a1.effect_note':['Effect: {e}.','当前灯效：{e}。'],'a1.effect_change':['Change','更改'],
'a1.effect.0':['Speed bar','风速条'],'a1.effect.1':['Solid colour','固定颜色'],'a1.effect.2':['Breathing','呼吸'],'a1.effect.3':['Rainbow','彩虹'],'a1.effect.4':['Data segments','分段数据'],
'a1.effect_desc.0':['Ring length follows fan speed','灯环长度跟随风速'],'a1.effect_desc.1':['Whole ring in one colour','整圈单色'],'a1.effect_desc.2':['Slow fade in and out','缓慢明暗变化'],
'a1.effect_desc.3':['Cycling colours','循环彩色'],'a1.effect_desc.4':['Each segment shows a reading','每段显示一项读数'],
/* A1 light effects page */
'fx.lead':['How the ring looks. Colour and brightness are set on the home page.','设置灯环的显示方式；颜色和亮度在首页调整。'],'fx.effect':['Effect','灯效'],
'fx.follow':['Brightness follows fan speed','亮度随风速变化'],'fx.follow_desc':['Dimmer at low speed','低风速时更暗'],'fx.count':['Segments','分段数量'],'fx.segment':['Segment {n}','第 {n} 段'],
'fx.source':['Shows','显示内容'],'fx.display':['Style','显示方式'],'fx.range':['Range','数值范围'],'fx.comfort':['comfortable','适宜区间'],
'fx.low':['Low','偏低'],'fx.ok':['Comfortable','适宜'],'fx.high':['High','偏高'],
'fx.src.0':['Temperature','温度'],'fx.src.1':['Humidity','湿度'],'fx.src.2':['PM2.5','PM2.5'],'fx.src.3':['Formaldehyde','甲醛'],'fx.src.4':['Overall air quality','综合空气质量'],'fx.src.5':['Fan speed','风速'],
'fx.disp.0':['Fixed colour, brightness by value','固定颜色 + 数值亮度'],'fx.disp.1':['Comfort colour, fixed brightness','适宜程度颜色 + 固定亮度'],'fx.disp.2':['Comfort colour, brightness by value','适宜程度颜色 + 数值亮度'],
'fx.quality_hint':['Baselines used to compute "overall air quality".','用于计算“综合空气质量”的基准值。'],'fx.quality_pm':['PM2.5 baseline','PM2.5 基准'],'fx.quality_hcho':['Formaldehyde baseline','甲醛基准'],
/* A1 binding */
'bind.lead':['Link M1 monitors so the purifier can react to their readings.','绑定 M1 后，净化器可根据其读数自动运行。'],'bind.sensors':['Linked M1 monitors','已绑定的 M1'],
'bind.empty':['No M1 linked','尚未绑定 M1'],'bind.add':['Add an M1','添加 M1'],'bind.mac':['M1 MAC address','M1 的 MAC 地址'],'bind.ip':['LAN IP (optional)','局域网 IP（可选）'],'bind.ip_ph':["Discover on the LAN if empty", "留空则在局域网内自动查找"],
'bind.ip_auto':['IP found via MQTT','IP 通过 MQTT 获取'],'bind.add_btn':['Add M1','添加'],'bind.added':['Added','已添加'],'bind.bad_mac':['Enter a 12-digit MAC address','请输入 12 位 MAC 地址'],'bind.dup':['Already in the list','已在列表中'],
'bind.pending':['Handshaking','握手中'],'bind.fresh':['Receiving data','数据正常'],'bind.stale':['No data','无数据'],'bind.probe':['Probe LAN','探测局域网'],'bind.probe_sent':['Probe sent','已发送探测'],
'bind.remove_q':['Remove this device?','移除此设备？'],'bind.remove_body':['{m} will no longer be linked.','{m} 将解除关联。'],
'bind.ids_title':['Next: allow this A1 on the M1','下一步：在 M1 上允许本机'],'bind.ids_body':['Copy the pairing ID to the M1 page → Settings → Linkage access.','复制以下配对 ID，粘贴到 M1 页面 → 设置 → 联动许可。'],
'bind.force':['Always use MQTT','强制使用 MQTT'],'bind.force_desc':['Skip the LAN connection','不使用局域网直连'],'bind.recovery':['Retry LAN automatically','自动检查局域网恢复'],'bind.recovery_desc':['Switch back to LAN when it recovers','恢复后切回局域网'],
'bind.timeout':['LAN timeout','局域网超时'],'bind.recovery_s':['Retry interval','恢复检查间隔'],
'bind.hint':["Configure this M1 here; no setup is needed on the M1. MQTT authorizes the session, then readings use the LAN. A LAN failure pauses sensor-based control.", "只需在此添加 M1，无需在 M1 上配对。MQTT 用于建立会话，读数通过局域网获取；局域网失联后按数据失效规则处理。"],
'bind.group':['Purifier group','净化器组'],'bind.group_lead':['Run several A1 units as one. Enter the same name and member list on every A1.','多台 A1 作为一组运行；每台 A1 需填写相同的组名称和成员列表。'],
'bind.group_name':['Group name','组名称'],'bind.group_ph':['Empty = standalone','留空为独立设备'],'bind.member_add':['Add member','添加成员'],
/* A1 linkage */
'link.lead':['Rules that turn the purifier on, off and set its speed from M1 readings.','根据 M1 读数开关净化器并调节风速的规则。'],
'link.enable':['Automatic control','自动调速'],'link.enable_desc':['Manual control still works at any time','随时仍可手动控制'],
'link.no_peer':['Link an M1 first.','请先绑定 M1。'],'link.speed':['Fan speed','风速调节'],'link.metric':['Based on','依据指标'],'link.both':['Both','两者'],
'link.mode.0':['Fixed','固定风速'],'link.mode.1':['Proportional','线性调节'],'link.mode.2':['Target (PID)','目标值（PID）'],
'link.mode_desc.0':['Always the same speed','始终同一风速'],'link.mode_desc.1':['Faster as air gets worse','空气越差风速越高'],'link.mode_desc.2':['Hold a target level','维持在目标值'],
'link.fixed':['Speed','风速'],'link.lin_pm_a':['PM2.5 at','PM2.5 为'],'link.lin_hcho_a':['Formaldehyde at','甲醛为'],'link.lin_b':['→','时风速'],'link.lin_c':[', at',' ；为'],
'link.pid_pm':['Keep PM2.5 at','PM2.5 保持在'],'link.pid_hcho':['Keep formaldehyde at','甲醛保持在'],'link.range':['Speed between','风速范围'],'link.pid_tune':['PID tuning','PID 参数'],
'link.onoff':['Start and stop','自动启停'],'link.onoff_lead':['Keep the stop level below the start level to avoid rapid switching.','关闭阈值应低于启动阈值，避免频繁开关。'],
'link.on_rule':['Start automatically','自动开启'],'link.on_desc':['Turn on when air gets worse','空气变差时开启'],'link.off_rule':['Stop automatically','自动关闭'],'link.off_desc':['Turn off when air is clean','空气变好时关闭'],
'link.watch':['Watch','监测'],'link.any':['Any','任一满足'],'link.all':['All','全部满足'],'link.above':['above','高于'],'link.below':['below','低于'],
'link.hyst_warn':['The stop level should be lower than the start level.','关闭阈值应低于启动阈值。'],
'link.statistic':['With several M1','多台 M1 时取'],'link.debounce':['Condition must last','条件持续'],'link.min_switch':['Minimum run/idle time','最短运行／待机时间'],
'link.stat.0':['Average','平均值'],'link.stat.1':['Highest','最高值'],'link.stat.2':['Lowest','最低值'],'link.stat.3':['Median (more than 3)','中位数（多于 3 台）'],'link.stat.4':['Average without extremes','去掉最高最低后平均'],'link.stat.5':['First available in list','按列表顺序故障切换'],
/* Schedules / night */
'fx.speed':['Animation speed','变化速度'],'fx.slow':['Slow','慢'],'fx.fast':['Fast','快'],
'sch.countdown':['Shutdown countdown','倒计时关闭'],'sch.hours':['Hours','小时'],'sch.minutes':['Minutes','分钟'],'sch.cancel':['Cancel','取消倒计时'],'sch.restart':['Restart','重新计时'],
'sch.countdown_hint':['Turn the purifier off after 1 minute to 24 hours. Works without clock sync. A restart cancels the countdown; enabling it starts the full duration again.','在 1 分钟至 24 小时后关闭净化器，无需校时。设备重启会取消倒计时；重新启用会从完整时长重新计时。'],
'sch.duration_invalid':['Choose a duration from 1 minute to 24 hours','请设置 1 分钟至 24 小时的时长'],'sch.state.cancelled':['Cancelled after restart','设备重启，已取消'],
'sch.lead_a1':['Turn the purifier on or off at set times.','在设定时间开启或关闭净化器。'],'sch.lead_tc1':['Switch sockets at set times (Beijing time).','在设定时间开关插座（北京时间）。'],
'sch.list':['Schedules','定时任务'],'sch.empty':['No schedules yet','暂无定时任务'],'sch.used':['{a} of {b} used','已使用 {a} / {b}'],'sch.off':['off','已停用'],'sch.hint':['Weekly events run in the device time zone and are not replayed after a missed window; a restart runs last.','每周任务按设备时区执行，错过的时段不补执行；重启类操作最后执行。'],'sch.add':['New schedule','新建定时'],'sch.time':['Time','时间'],'sch.date':['Date','日期'],
'sch.repeat':['Repeat','重复'],'sch.action':['Action','动作'],'sch.target':['Target','对象'],'sch.turn_on':['Turn on','开启'],'sch.turn_off':['Turn off','关闭'],'sch.weekly':['Weekly','每周'],
'sch.add_btn':['Add schedule','添加'],'sch.added':['Saved','已保存'],'sch.reset':['Clear form','清空表单'],'sch.when':['Date and time (device time zone)','执行日期与时间（设备时区）'],'sch.pick_day':['Pick at least one day','请至少选择一天'],'sch.future':['Pick a time in the future','请选择未来的时间'],
'sch.fan_on':['Turn on at {p}%','开启，风速 {p}%'],'sch.fan_off':['Turn off','关闭'],'sch.no_clock':['The clock is not synced yet; weekly and dated schedules will not run until it is.','时钟尚未校准，校准前每周及指定日期的任务不会执行。'],
'day.short.0':['Mon','一'],'day.short.1':['Tue','二'],'day.short.2':['Wed','三'],'day.short.3':['Thu','四'],'day.short.4':['Fri','五'],'day.short.5':['Sat','六'],'day.short.6':['Sun','日'],
'day.every':['Every day','每天'],'day.weekdays':['Weekdays','工作日'],'day.weekends':['Weekends','周末'],'day.once':['Once','仅一次'],
'night.lead':['Quieter fan and dimmer light during set hours.','在设定时段降低风速与灯光。'],'night.list':['Night periods','夜间时段'],'night.empty':['No night periods','暂无夜间时段'],
'night.add':['New night period','新建夜间时段'],'night.start':['From','开始'],'night.end':['Until','结束'],'night.next_day':['(next day)','（次日）'],
'night.fan':['Limit fan speed','限制风速'],'night.fan_desc':['Cap the speed during this period','时段内限制最高风速'],'night.fan_max':['Max speed','最高风速'],
'night.light':['Dim the light ring','调暗灯环'],'night.light_desc':['Cap brightness, 0 turns it off','限制亮度，0 为关闭'],'night.light_max':['Max brightness','亮度上限'],
'night.block_t':['Don’t auto-start','禁止自动开启'],'night.block_desc':['Auto control cannot turn the purifier on','自动调速不会开启净化器'],
'night.fan_cap':['Fan ≤ {p}%','风速 ≤ {p}%'],'night.light_cap':['Light ≤ {p}%','灯光 ≤ {p}%'],'night.light_off':['Light off','灯光关闭'],'night.block':['No auto-start','禁止自动开启'],'night.add_btn':['Add period','添加'],
/* M1 */
'm1.pressure':['Pressure','气压'],'m1.overall':['Air quality','空气质量'],'m1.v_excellent':['Excellent','优'],'m1.v_good':['Good','良好'],'m1.v_fair':['Fair','一般'],'m1.v_poor':['Poor','较差'],
'm1.all_ok':['All readings are in range','各项读数均在适宜范围'],'m1.no_data':['No data','暂无数据'],'m1.stale':['Data is out of date','数据已过期'],
'm1.stale_hint':['The sensor has not reported recently. Check Diagnostics.','传感器近期未上报，请查看诊断。'],'m1.updated':['Updated {n} s ago','{n} 秒前更新'],
'm1.screen':['Screen brightness','屏幕亮度'],'m1.screen_desc':['Shows the last level sent; the screen does not report it back','显示最近发送的档位，屏幕不回报实际亮度'],
'm1.linked':['Linked purifiers','联动的净化器'],'m1.linked_desc':["A1 units with an active reading session", "已建立读取会话的 A1"],'m1.linked_empty':["No active A1 session. Add this M1 on the A1 settings page.", "暂无 A1 会话，请在 A1 设置页面添加本机。"],
'm1.allow_btn':['Allow an A1','添加许可'],'m1.session_ok':['Connected','已连接'],'m1.session_wait':['Waiting for A1','等待 A1 连接'],
'm1.perm_lead':["Configure this M1 on the A1. Reading sessions are established automatically through MQTT.", "在 A1 上添加本机后，将通过 MQTT 自动建立读取会话。"],
'm1.allowed':['Allowed A1 units','已允许的 A1'],'m1.allowed_empty':['None yet','暂无'],'m1.allow_add':['Allow an A1','添加许可'],'m1.pair_id':['Pairing ID from the A1','A1 生成的配对 ID'],
'm1.pair_help':['On the A1: Settings → Linked M1 → add this M1, then copy the ID shown.','在 A1：设置 → 绑定 M1 → 添加本机后复制显示的配对 ID。'],
'm1.pair_bad':['Format: a1mac:m1mac (12 hex digits each)','格式：A1 的 MAC:M1 的 MAC（各 12 位十六进制）'],'m1.pair_other':['This ID is for a different M1','该配对 ID 属于另一台 M1'],
'm1.perm_hint':["Both devices need MQTT command access to establish a session and LAN connectivity to read sensors. Inactive sessions expire after 30 minutes.", "建立会话需要 MQTT 命令访问权限，读取数据需要局域网连通。连续 30 分钟无有效读取后，会话自动释放。"],
/* TC1 */
'control.pending':['Waiting for device confirmation','等待设备确认中'],'control.unconfirmed':['Operation not confirmed; showing the latest device state','操作尚未确认，已恢复最近设备状态'],'control.syncing':['Confirming…','确认中…'],
 'tc1.sockets':['Sockets','插座'],'tc1.on_count':['{n} of 6 on','6 路中 {n} 路通电'],'tc1.all_on':['All on','全部开启'],'tc1.all_off':['All off','全部关闭'],
'tc1.on':['On','通电'],'tc1.off':['Off','断开'],'tc1.rename':['Rename','重命名'],'tc1.socket_n':['Socket {n}','插座 {n}'],
'tc1.output_hint':['Shows the output the strip has set; check the load to confirm power.','显示设备的输出设定，实际供电请以负载为准。'],
'tc1.power':['Power','功率'],'tc1.recent':['Recent samples','最近采样'],'tc1.energy':['Energy since start','累计电量'],'tc1.peak':['Recent peak','近期峰值'],
'tc1.lock_desc':['Disables the key on the strip','锁定机身按键'],'tc1.led':['Indicator light','指示灯'],'tc1.led_desc':['Status light on the strip','机身状态指示灯'],
'tc1.names':['Socket names','插座名称'],'tc1.names_desc':['Shown here and in Home Assistant','在本页和 Home Assistant 中显示'],
'tc1.metering':['Reporting & metering','上报与计量'],'tc1.report':['MQTT report interval','MQTT 上报间隔'],'tc1.report_help':['How often power is published to MQTT (1–3600 s).','功率发布到 MQTT 的频率（1–3600 秒）。'],
'tc1.calibration':['Calibration','计量校准'],'tc1.coef':['Power coefficient','功率系数'],'tc1.coef_warn':['Only change this with a known calibration value. An idle reading cannot verify accuracy.','仅在已知校准值时修改；空载读数无法验证计量精度。'],
'btn.lead':['See each gesture and its action. Expand a range to edit individual gestures.','按手势查看实际动作；相同动作合并显示，展开后可逐条编辑。'],'btn.current':['What each gesture does','按下后会发生什么'],
'btn.click_count':['Number of presses','连按次数'],'btn.hold_count':['Hold duration (seconds)','按住时长（秒）'],
'btn.single':['Single press','单击'],'btn.click_full':['Press {n} times','连按 {n} 次'],'btn.hold_full':['Hold {n} seconds','长按 {n} 秒'],
'btn.click_range':['Press {a}–{b} times','连按 {a}～{b} 次'],'btn.hold_range':['Hold {a}–{b} seconds','长按 {a}～{b} 秒'],
'btn.expand':['Expand to edit','展开编辑'],'btn.recovery':['Recovery gestures · fixed','恢复操作 · 固定功能'],'btn.reset_wifi':['Reset network settings','重置网络配置'],
'btn.n':['#','序号'],'btn.click':['Click','连击'],'btn.hold':['Hold','长按'],'btn.click_n':['×{n}','{n} 次'],'btn.hold_n':['{n} s','{n} 秒'],'btn.empty':['No custom events','暂无自定义事件'],
'btn.edit':['Set an event','设置事件'],'btn.kind':['Gesture','手势'],'btn.count':['Clicks / seconds','次数 / 秒数'],'btn.action':['Action','动作'],
'btn.reset_note':['Holding 5–10 s or over 10 s always triggers the recovery reset, regardless of mapping.','按住 5–10 秒或 10 秒以上固定触发恢复操作，不受映射影响。'],
'op.none':['Not set','未配置'],'op.g_switch':['Switch','开关'],'op.g_system':['System','系统'],'op.0':['All sockets','全部插座'],'op.7':['Indicator light','指示灯'],'op.8':['Restart device','重启设备'],
'op.9':['Open setup hotspot','开启配网热点'],'op.10':['Factory reset','恢复出厂设置'],'op.11':['Child lock','童锁'],'op.12':['Restart web service','重启网页服务'],'op.13':['Soft restart','软件重启'],
/* status values (from the shared diagnostics vocabulary) */
'sch.state.waiting':['Waiting','等待执行'],'sch.state.executed':['Executed','已执行'],'sch.state.missed':['Missed','已错过'],'sch.state.busy':['Skipped (busy)','设备忙，已跳过'],'sch.state.migration_disabled':['Disabled (old config)','旧配置不支持，已停用'],'s.ready':['Ready','就绪'],'s.disconnected':['Disconnected','未连接'],'s.connecting':['Connecting','连接中'],'s.synced':['Synced','校时成功'],'s.syncing':['Syncing','正在校时'],
's.waiting_network':['Waiting for network','等待网络'],'s.failed':['Failed','校时失败'],'s.screen_queue_failed':['Synced; screen update failed','网络校时成功，屏幕入队失败'],
's.idle':['Idle','空闲'],'s.pending':['Pending','等待验证'],'s.success':['Verified and saved','验证成功并已保存'],'s.storage_failure':['Save failed, rolled back','保存失败，已回滚'],
's.timeout_rollback':['Timed out, rolled back','连接超时，已回滚'],'s.legacy':['legacy','legacy'],'s.account':['TMCP','TMCP'],'s.downloading':['Downloading','下载中'],
/* diagnostic labels */
'd.wifi_trial_status':['Wi-Fi trial','Wi-Fi 试连状态'],'d.wifi_trial_active':['Verifying Wi-Fi','正在验证 Wi-Fi'],'d.uptime_seconds':['Uptime','运行时间'],'d.free_memory':['Free memory','可用内存'],
'd.child_lock':['Child lock','童锁'],'d.led_enabled':['Light enabled','启用指示灯'],'d.socket_names':['Socket names','插座名称'],'d.socket_states':['Socket outputs','插座输出'],
'd.time_synced':['Clock synced','时钟已校准'],'d.utc_time':['Device time','设备时间'],'d.fan_on':['Fan on','风机开启'],'d.speed':['Saved speed','风速'],'d.percentage':['Target speed','目标风速'],
'd.applied_speed':['Output speed','实际输出'],'d.requested_fan_on':['Requested on','请求开启'],'d.requested_speed':['Requested speed','请求风速'],'d.fan_ready':['Fan driver ready','风机驱动就绪'],
'd.panel_ready':['Panel OK','面板通信正常'],'d.panel_errors':['Panel errors','面板通信错误数'],'d.hardware_errors':['Hardware errors','硬件错误数'],'d.panel_raw':['Panel raw','面板原始数据'],
'd.version':['Firmware','固件版本'],'d.device_id':['Device ID','设备 ID'],'d.name':['Name','设备名称'],'d.ssid':['Network','网络名称'],'d.ip':['IP address','IP 地址'],
'd.wifi_connected':['Wi-Fi connected','Wi-Fi 已连接'],'d.ap_active':['Hotspot on','配网热点已开启'],'d.ap_name':['Hotspot name','热点名称'],'d.mqtt_connected':['MQTT connected','MQTT 已连接'],
'd.mqtt_status':['MQTT status','MQTT 状态'],'d.mqtt_host':['Broker','Broker 地址'],'d.mqtt_port':['Port','MQTT 端口'],'d.mqtt_user':['Username','MQTT 用户名'],'d.mqtt_topic_mode':['Topic mode','主题模式'],
'd.mqtt_errors':['MQTT errors','MQTT 错误次数'],'d.mqtt_last_error':['Last MQTT error','最近 MQTT 错误'],'d.mqtt_cleanup_warning':['HA cleanup failed','旧 HA 实体清理异常'],
'd.sensor_valid':['Sensor data valid','传感器数据有效'],'d.sensor_received':['Sensor data received','已收到传感器数据'],'d.age_ms':['Data age','数据距今'],
'd.temperature':['Temperature (℃)','温度（℃）'],'d.humidity':['Humidity (%)','湿度（%）'],'d.formaldehyde':['Formaldehyde (mg/m³)','甲醛（mg/m³）'],'d.pm25':['PM2.5 (µg/m³)','PM2.5（µg/m³）'],
'd.uart_ready':['UART ready','串口已就绪'],'d.rx_frames':['Frames received','接收帧数'],'d.unknown_frames':['Unknown frames','未知帧数'],'d.uart_errors':['UART errors','串口错误数'],
'd.discarded_bytes':['Discarded bytes','丢弃字节数'],'d.last_frame':['Last frame (hex)','最近串口帧（HEX）'],'d.brightness_requested':['Requested brightness','请求亮度档位'],
'd.ota_active':['Updating','正在升级'],'d.ota_state':['Update state','升级状态'],'d.ota_error':['Update error','升级错误'],'d.ota_progress':['Update progress (%)','升级进度（%）'],
'd.scan_busy':['Scanning Wi-Fi','正在扫描 Wi-Fi'],'d.web_password_set':['Web password set','已设置网页密码'],'d.mqtt_password_set':['MQTT password set','已设置 MQTT 密码'],'d.wifi_password_set':['Wi-Fi password set','已保存 Wi-Fi 密码'],
'd.ntp_host':['Preferred NTP','首选 NTP 服务器'],'d.ntp_server':['Last NTP tried','最近尝试的校时源'],'d.ntp_status':['Sync status','校时状态'],'d.ntp_synced':['Synced this boot','本次启动已完成校时'],
'd.ntp_screen_queued':['Screen time queued','屏幕时间已入队'],'d.ntp_last_success':['Last sync','最近成功校时'],'d.ntp_next_seconds':['Next sync in (s)','下次校时（秒后）'],'d.timezone_minutes':['UTC offset (min)','时区（UTC 分钟差）'],
'd.led_visible':['Light showing','灯环显示中'],'d.led_always_on':['Always on','常亮'],'d.brightness':['Brightness','亮度'],'d.red':['Red','红'],'d.green':['Green','绿'],'d.blue':['Blue','蓝'],
'd.config_dirty':['Saving settings','设置保存中'],'d.save_error':['Save error','保存错误'],'d.reboot_pending':['Restart pending','等待重启'],
'd.report_seconds':['Report interval (s)','上报间隔（秒）'],'d.powerCoefficientX100':['Power coefficient (×100)','功率系数（×100）'],'d.mask':['Subnet mask','子网掩码'],'d.gateway':['Gateway','网关']
};
const KEY='phicomm.language';
let preference='auto';try{preference=localStorage.getItem(KEY)||'auto';}catch{}
const detect=()=>{for(const l of navigator.languages||[navigator.language||'en']){const s=l.toLowerCase();if(s.startsWith('zh'))return 'zh-CN';if(s.startsWith('en'))return 'en';}return 'en';};
const listeners=[];
const I18N={
 lang:preference==='auto'?detect():preference,preference,
 has:k=>Object.hasOwn(D,k),
 t(k,vars){const e=D[k];let s=e?e[I18N.lang==='zh-CN'?1:0]:k;if(!e)console.warn('i18n missing',k);
  if(vars)s=s.replace(/\\{(\\w+)\\}/g,(_,n)=>vars[n]??'');return s;},
 apply(root=document){
  document.documentElement.lang=I18N.lang;
  root.querySelectorAll('[data-i18n]').forEach(el=>{if(el.dataset.i18n)el.textContent=I18N.t(el.dataset.i18n);});
  root.querySelectorAll('[data-i18n-ph]').forEach(el=>el.placeholder=I18N.t(el.dataset.i18nPh));
  root.querySelectorAll('[data-i18n-aria]').forEach(el=>el.setAttribute('aria-label',I18N.t(el.dataset.i18nAria)));
 },
 set(p){I18N.preference=p;try{localStorage.setItem(KEY,p);}catch{}I18N.lang=p==='auto'?detect():p;I18N.apply();listeners.forEach(f=>f());},
 onChange:f=>listeners.push(f),
 keys:()=>Object.keys(D),
 extend:o=>Object.assign(D,o)
};
document.documentElement.lang=I18N.lang;
window.addEventListener('languagechange',()=>{if(I18N.preference==='auto')I18N.set('auto');});
window.I18N=I18N;
})();
<\/script>
<script>// Device service.js retains its HTTP-shaped API; transport is supplied by host.
(()=>{
 const pending=new Map();
 let activeRead=null;
 function send(id,entry){entry.sent=true;if(entry.read)activeRead=id;parent.postMessage({type:'device-command',id,request:entry.request},parent.location.origin);}
 function nextRead(){
  if(activeRead)return;
  const waiting=[...pending].filter(([,entry])=>entry.read&&!entry.sent);
  const next=waiting.find(([,entry])=>entry.request.action==='status.get')||waiting[0];
  if(next)send(...next);
 }
 function remove(id){const entry=pending.get(id);if(!entry)return;pending.delete(id);clearTimeout(entry.timer);entry.cleanup();if(activeRead===id)activeRead=null;}

 window.addEventListener('message',event=>{
  if(event.source!==parent||event.data?.type!=='device-result')return;
  const entry=pending.get(event.data.id);if(!entry)return;
  remove(event.data.id);
  entry.resolve(new Response(JSON.stringify(event.data.reply),{status:200,headers:{'Content-Type':'application/json'}}));nextRead();
 });
 window.fetch=(url,options={})=>{
  if(url!=='/api/v1/command')return Promise.reject(Error('不支持的操作'));
  return new Promise((resolve,reject)=>{
   const id=Array.from(crypto.getRandomValues(new Uint8Array(16)),b=>b.toString(16).padStart(2,'0')).join('');
   const abort=()=>{remove(id);clearTimeout(timer);cleanup();reject(Error('暂未收到操作回执，请等待状态更新'));nextRead();};
   const cleanup=()=>options.signal?.removeEventListener('abort',abort);
   const timer=setTimeout(abort,24000);
   if(options.signal?.aborted){abort();return;}
   options.signal?.addEventListener('abort',abort,{once:true});
   const request=JSON.parse(options.body),entry={resolve,timer,cleanup,request,read:request.action.endsWith('.get'),sent:false};
   pending.set(id,entry);
   if(entry.read)nextRead();else send(id,entry);
  });
 };
})();
window.addEventListener('storage',event=>{
 if(event.key!=='phicomm.appearance')return;
 if(event.newValue==='system'||!event.newValue)delete document.documentElement.dataset.theme;
 else document.documentElement.dataset.theme=event.newValue;
});
// Only the host can choose the authenticated device URL. Never upload to cloud.
(()=>{
 const uploads=new Map();
 window.createDeviceUpload=()=>{
  const id=crypto.randomUUID(),xhr={upload:{},status:0,responseText:'',timeout:310000,setRequestHeader(){},open(method,path){if(method!=='POST'||!['/api/v1/ota/upload','/api/v1/ota/upload-unsigned'].includes(path))throw Error('不支持的上传');this.rescue=path.endsWith('-unsigned');},send(file){uploads.set(id,this);parent.postMessage({type:'device-upload',id,file,rescue:!!this.rescue},parent.location.origin);},abort(){parent.postMessage({type:'device-upload-abort',id},parent.location.origin);uploads.delete(id);this.onabort?.();this.onloadend?.();}};return xhr;
 };
 window.addEventListener('message',event=>{
  if(event.source!==parent||event.origin!==parent.location.origin)return;
  const xhr=uploads.get(event.data?.id);if(!xhr)return;
  if(event.data.type==='device-upload-progress'){xhr.upload.onprogress?.({lengthComputable:true,loaded:event.data.loaded,total:event.data.total});}
  else if(event.data.type==='device-upload-result'){uploads.delete(event.data.id);xhr.status=event.data.result.status;xhr.responseText=event.data.result.text;xhr.onload?.();xhr.onloadend?.();}
 });
 window.addEventListener('pagehide',()=>{for(const xhr of uploads.values())xhr.abort();});
})();
<\/script><script>async function command(action,params={}){
 const request={action,params};
 if(!action.endsWith('.get'))request.request_id=globalThis.crypto?.randomUUID?crypto.randomUUID():Date.now().toString(36)+'-'+Math.random().toString(36).slice(2);
 const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),20000);
 try{
 const response=await fetch('/api/v1/command',{method:'POST',signal:controller.signal,headers:{'Content-Type':'application/json'},body:JSON.stringify(request),cache:'no-store'});
 const reply=await response.json();
 if(!response.ok||!['ok','accepted'].includes(reply.code)){const error=Error(reply.message||reply.code||('HTTP '+response.status));error.code=reply.code;throw error;}
 if(!action.endsWith('.get'))globalThis.UI?.invalidateStatus?.();
 return reply.data||{};
 }finally{clearTimeout(timer);}
}
async function api(path,data){
 if(path==='/status')return command('status.get');
 if(path==='/sensors/average')return command('sensors.average.get');
 if(path==='/power')return command('power.get');
 if(path==='/wifi/scan')return command(data===undefined?'wifi.scan.get':'wifi.scan');
 const domains={'/binding/config':'binding','/binding/status':'binding.status','/binding/probe':'binding.probe','/linkage/config':'linkage','/light/advanced':'light_effect','/sleep/config':'night','/time/config':'time'};
 if(domains[path])return command(domains[path]+(path==='/binding/probe'?'':data===undefined?'.get':'.set'),data||{});
 const direct={'/reboot':'system.reboot','/device/reset':'system.reset','/ota':'ota.start','/childLock':'child_lock.set','/child_lock':'child_lock.set','/led':'indicator.set','/outlet':'outlet.set','/fan':'fan.set','/fan/config':'fan.set','/light':'light.set','/light/config':'light.set'};
 if(direct[path]){if(['/light','/light/config'].includes(path)&&data.brightness!==undefined)data={...data,brightness:Math.round(data.brightness*100/255)};return command(direct[path],data);}
 if(path==='/display/brightness')return command('display.set',{brightness:data.level*25});
 if(path==='/socket'){for(let index=0;index<data.states.length;index++)await command('outlet.set',{index,on:!!data.states[index]});return {};}
 const sections={'/wifi/config':'wifi','/mqtt/config':'mqtt','/deviceName':'device','/auth/password':'auth','/socketNames':'socket','/mqtt/report/freq':'report','/power/coefficient':'meter','/ntp/config':'ntp'};
 if(sections[path]){
  let values={...data};
  if(path==='/power/coefficient')values={coefficient_x100:Number(data)};
  if(path==='/mqtt/config'){delete values.topic_mode;delete values.clear_password;if(data.clear_password)values.password='';else if(!values.password)delete values.password;}
  if(path==='/wifi/config'){delete values.open_network;if(data.open_network)values.password='';else if(!values.password)delete values.password;}
  return command('config.set',{section:sections[path],values});
 }
 throw Error('不支持的操作');
}
<\/script>
<script>/* Public provisioning contract. Passwords and session tokens are never encoded into a URL. */
(()=>{
'use strict';
const VERSION=1,TTL=120000;
const bytes=s=>new TextEncoder().encode(s).length;
function localHost(host){
 const h=host.toLowerCase().replace(/^\\[|\\]$/g,'');
 if(h==='localhost'||h==='::1')return true;
 if(h.includes(':'))return /^(fc|fd)[0-9a-f]{2}:|^fe[89ab][0-9a-f]:/.test(h);
 if(!/^\\d+\\.\\d+\\.\\d+\\.\\d+$/.test(h))return false;
 const p=h.split('.').map(Number);if(p.some(n=>n>255))return false;
 return p[0]===10||p[0]===127||(p[0]===172&&p[1]>=16&&p[1]<=31)||(p[0]===192&&p[1]===168)||(p[0]===169&&p[1]===254);
}
function deviceURL(raw){
 if(typeof raw!=='string'||!raw.trim()||raw.length>256)throw Error('device');
 const value=raw.trim(),url=new URL(value.includes('://')?value:'http://'+value);
 if(!['http:','https:'].includes(url.protocol)||!localHost(url.hostname)||url.username||url.password||url.search||url.hash||url.pathname!=='/')throw Error('device');
 return url;
}
function platformOrigin(raw){
 const u=new URL(raw);
 if(raw!==u.origin||!(u.protocol==='https:'||(u.protocol==='http:'&&['localhost','127.0.0.1','[::1]'].includes(u.hostname))))throw Error('origin');
 return u.origin;
}
function nonce(){const a=new Uint8Array(32);crypto.getRandomValues(a);return Array.from(a,n=>n.toString(16).padStart(2,'0')).join('');}
function readTicket(hash,now=Date.now()){
 if(!hash.startsWith('#iotcloud-import='))return null;
 if(hash.length>2048)throw Error('ticket');
 const p=new URLSearchParams(hash.slice(1));
 if([...p.keys()].sort().join(',')!=='expires,host,iotcloud-import,origin,port,user')throw Error('ticket');
 const id=p.get('iotcloud-import'),expires=Number(p.get('expires')),origin=platformOrigin(p.get('origin'));
 if(!/^[a-f0-9]{64}$/.test(id)||!Number.isSafeInteger(expires)||expires<=now||expires>now+TTL)throw Error('ticket');
 const visible=config({v:VERSION,host:p.get('host'),port:Number(p.get('port')),user:p.get('user'),password:'',protocol:'tmcp',expires},now);
 return {id,expires,origin,host:visible.host,port:visible.port,user:visible.user};
}
function config(value,now=Date.now()){
 if(!value||typeof value!=='object'||Array.isArray(value)||Object.keys(value).sort().join(',')!=='expires,host,password,port,protocol,user,v')throw Error('config');
 const {v,host,port,user,password,protocol,expires}=value;
 if(v!==VERSION||protocol!=='tmcp'||typeof host!=='string'||!host||bytes(host)>127||!/^([a-zA-Z0-9.-]+|\\[[a-fA-F0-9:]+\\])$/.test(host)||host.startsWith('.')||host.endsWith('.')||typeof user!=='string'||bytes(user)>63||/[\\x00-\\x1f\\x7f]/.test(user)||typeof password!=='string'||bytes(password)>256||/[\\x00-\\x1f\\x7f]/.test(password)||!Number.isInteger(port)||port<1||port>65535||!Number.isSafeInteger(expires)||expires<=now||expires>now+TTL)throw Error('config');
 return {v,host,port,user,password,protocol,expires};
}
function packet(e,{source,origin,id,expires},type){
 const d=e.data;return Date.now()<expires&&e.source===source&&e.origin===origin&&!!d&&typeof d==='object'&&d.type===type&&d.id===id;
}
globalThis.IotProvision=Object.freeze({VERSION,TTL,deviceURL,platformOrigin,nonce,readTicket,config,packet});
})();
<\/script>
<script>/* Shared WebUI framework: header, routing, feedback, reusable controls and the
 * settings pages every product has. Loaded after service.js (protocol) and
 * i18n.js (strings); each product page calls UI.start() with its own layout.
 * All requests go through command() in service.js; nothing here talks to a URL
 * directly except the OTA upload. */
(()=>{
'use strict';
const {t}=I18N;
const $=id=>document.getElementById(id);
// Remove the non-secret handshake fragment before any async device requests.
let importTicket=null,importInvalid=false;
if(location.hash.startsWith('#iotcloud-import=')){
 try{importTicket=IotProvision.readTicket(location.hash);}catch{importInvalid=true;}
 history.replaceState(null,'',location.pathname+location.search+'#settings/mqtt');
}

function h(tag,props,...kids){
 const el=document.createElement(tag);
 for(const [k,v] of Object.entries(props||{})){
  if(v==null||v===false)continue;
  if(k==='class')el.className=v;
  else if(k==='i18n'){el.dataset.i18n=v;el.textContent=t(v);}
  else if(k.startsWith('on')&&typeof v==='function')el.addEventListener(k.slice(2),v);
  else if(k in el&&!k.includes('-'))el[k]=v;
  else el.setAttribute(k,v===true?'':v);
 }
 for(const c of kids.flat(Infinity)){if(c==null||c===false)continue;el.append(c.nodeType?c:document.createTextNode(String(c)));}
 return el;
}
const ICONS={
 power:'<path d="M12 2v10"/><path d="M18.4 6.6a9 9 0 1 1-12.8 0"/>',
 fan:'<path d="M10.8 9.1C9 6.4 9.6 3 12.6 2.2c3-.8 4.5 2.4 2.6 6.4M14.9 10.8c2.7-1.8 6.1-1.2 6.9 1.8.8 3-2.4 4.5-6.4 2.6M13.2 14.9c1.8 2.7 1.2 6.1-1.8 6.9-3 .8-4.5-2.4-2.6-6.4M9.1 13.2C6.4 15 3 14.4 2.2 11.4c-.8-3 2.4-4.5 6.4-2.6"/><circle cx="12" cy="12" r="2"/>',
 plug:'<path d="M12 22v-5M9 8V2M15 8V2M18 8v5a6 6 0 0 1-12 0V8z"/>',
 air:'<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2M9.6 4.6A2 2 0 1 1 11 8H2M12.6 19.4A2 2 0 1 0 14 16H2"/>',
 lock:'<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
 wifi:'<path d="M5 12.6a10 10 0 0 1 14 0M8.5 16.1a5 5 0 0 1 7 0M2 8.8a15 15 0 0 1 20 0M12 20h.01"/>',
 home:'<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
 sliders:'<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',
 edit:'<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
 trash:'<path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',
 link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',
 external:'<path d="M14 3h7v7M10 14 21 3M21 14v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6"/>',
 copy:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
 info:'<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
 alert:'<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0zM12 9v4M12 17h.01"/>',
 moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
 clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
 auto:'<path d="M21 12a9 9 0 0 1-15 6.7L3 16M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M3 21v-5h5"/>'
};
function icon(name,cls='i'){const s=document.createElementNS('http://www.w3.org/2000/svg','svg');s.setAttribute('viewBox','0 0 24 24');s.setAttribute('class',cls);s.setAttribute('aria-hidden','true');s.innerHTML=ICONS[name]||'';return s;}

/* ---------- Feedback ---------- */
function toast(text,bad=false){
 let box=$('toasts');if(!box){box=h('div',{id:'toasts',class:'toasts',role:'status','aria-live':'polite'});document.body.append(box);}
 const el=h('div',{class:'toast'+(bad?' bad':'')},text);box.append(el);setTimeout(()=>el.remove(),bad?6000:2600);
}
async function run(button,fn,okKey='toast.accepted'){
 if(button){button.disabled=true;button.setAttribute('aria-busy','true');}
 try{const r=await fn();if(okKey)toast(t(okKey));return r;}
 catch(e){toast(e.message||String(e),true);}
 finally{if(button){button.disabled=false;button.removeAttribute('aria-busy');}}
}
function onSubmit(form,fn,okKey){form.addEventListener('submit',e=>{e.preventDefault();run(form.querySelector('button[type=submit],button:not([type])'),fn,okKey);});}
function confirmDialog({title,body,ok,danger}){
 if(typeof document.body.append!=='function'||!document.createElement('dialog').showModal)return Promise.resolve(window.confirm(title+'\\n'+body));
 return new Promise(resolve=>{
  const d=h('dialog',{},h('h2',{},title),h('p',{},body),
   h('div',{class:'form-actions'},
    h('button',{class:'btn '+(danger?'danger':'primary'),type:'button',onclick:()=>{d.close();resolve(true);}},ok),
    h('button',{class:'btn ghost',type:'button',onclick:()=>d.close()},t('common.cancel'))));
  d.addEventListener('close',()=>{d.remove();resolve(false);});
  document.body.append(d);d.showModal();
 });
}

/* ---------- Controls ---------- */
function switchRow(id,titleKey,descKey){
 return h('label',{class:'switch'},h('span',{class:'text'},h('b',{i18n:titleKey}),descKey&&h('span',{i18n:descKey})),h('input',{type:'checkbox',role:'switch',id}));
}
function seg(options,onPick,{full=false,aria}={}){
 const label=k=>typeof k==='function'?k():I18N.has(k)?t(k):k;
 const box=h('div',{class:'seg'+(full?' full':''),role:'group','aria-label':aria||null});
 for(const [value,key] of options)box.append(h('button',{type:'button','data-value':String(value),'aria-pressed':'false',onclick:()=>{box.set(value);onPick(value);}},label(key)));
 box.set=v=>{for(const b of box.children)b.setAttribute('aria-pressed',String(b.dataset.value===String(v)));box.value=v;};
 box.relabel=()=>options.forEach(([,key],i)=>{box.children[i].textContent=label(key);});
 I18N.onChange(box.relabel);
 return box;
}
const DAY_BITS=[1,2,4,8,16,32,64];
function daysPicker(name,mask=127){
 const box=h('div',{class:'days',role:'group'});
 DAY_BITS.forEach((bit,i)=>box.append(h('label',{},h('input',{type:'checkbox',name,value:bit,checked:!!(mask&bit)}),h('span',{'data-i18n':'day.short.'+i},t('day.short.'+i)))));
 box.mask=()=>[...box.querySelectorAll('input')].reduce((m,i)=>m|(i.checked?Number(i.value):0),0);
 box.setMask=m=>box.querySelectorAll('input').forEach(i=>{i.checked=!!(m&Number(i.value));});
 return box;
}
function presetDays(picker){
 return h('div',{class:'row small'},[[127,'day.every'],[31,'day.weekdays'],[96,'day.weekends']].map(([m,k])=>h('button',{type:'button',class:'btn ghost',style:'min-height:28px;padding:2px 8px',onclick:()=>picker.setMask(m)},h('span',{i18n:k}))));
}
function daysText(mask){
 if(!mask)return t('day.once');if(mask===127)return t('day.every');if(mask===31)return t('day.weekdays');if(mask===96)return t('day.weekends');
 return DAY_BITS.map((b,i)=>mask&b?t('day.short.'+i):null).filter(Boolean).join(I18N.lang==='zh-CN'?'、':', ');
}
const hhmm=m=>String(Math.floor(m/60)%24).padStart(2,'0')+':'+String(m%60).padStart(2,'0');
const toMinutes=v=>{const [a,b]=v.split(':').map(Number);return a*60+b;};
function duration(sec){const d=Math.floor(sec/86400),hr=Math.floor(sec%86400/3600),m=Math.floor(sec%3600/60);return d?t('time.dh',{d,h:hr}):hr?t('time.hm',{h:hr,m}):t('time.m',{m});}
function summary(items){return h('dl',{class:'summary'},items.filter(Boolean).map(([k,v,dot])=>h('div',{},h('dt',{i18n:k}),h('dd',{},dot?h('span',{class:'dot '+dot}):null,v))));}
function card(titleKey,leadKey,...body){return h('section',{class:'card'},h('div',{class:'card-head'},h('div',{},h('h2',{i18n:titleKey}),leadKey&&h('p',{class:'help',i18n:leadKey}))),...body);}
function info(key){return h('details',{class:'info'},h('summary',{},icon('info'),h('span',{i18n:'common.more_info'})),h('p',{i18n:key}));}
function pageHead(titleKey,leadKey){return h('div',{},h('h2',{class:'page-title',i18n:titleKey}),h('p',{class:'page-lead',i18n:leadKey}));}
function saveBar(fn,label='common.save'){const b=h('button',{type:'button',class:'btn primary'},h('span',{i18n:label}));b.onclick=()=>run(b,fn);return h('div',{class:'form-actions'},b);}
function num(model,key,{min,max,step='any',unit,width}={}){
 const input=h('input',{type:'number',value:model[key],min,max,step,style:width?'width:'+width:null,oninput:e=>{if(e.target.value!==''&&Number.isFinite(+e.target.value))model[key]=+e.target.value;}});
 return unit?h('span',{class:'input-unit'},input,h('em',{},unit)):input;
}
function flag(model,key,titleKey,descKey){const r=switchRow(null,titleKey,descKey);const i=r.querySelector('input');i.checked=!!model[key];i.onchange=()=>{model[key]=typeof model[key]==='boolean'?i.checked:Number(i.checked);};return r;}
function slider(model,key,{min=0,max=100,fmt=v=>v+'%'}={}){
 const out=h('b',{class:'num'},fmt(model[key]));
 const r=h('input',{type:'range',min,max,value:model[key],oninput:e=>{model[key]=+e.target.value;out.textContent=fmt(model[key]);}});
 return [out,r];
}
function normalizeMac(v){const m=(v||'').replace(/[^0-9a-f]/gi,'').toLowerCase();return m.length===12?m:null;}
function prettyMac(m){return (m||'').toUpperCase().replace(/(..)(?!$)/g,'$1:');}
const clone=o=>JSON.parse(JSON.stringify(o));

/* Air quality bands: PM2.5 per GB 3095, formaldehyde limit per GB/T 18883-2022,
 * temperature and humidity comfort per the A1 light-segment defaults. */
// CO2 ventilation reference: HSE using-co2-monitors (1000 / 1500 ppm).
const AIR={
 co2:{unit:'ppm',max:2500,bands:[[1000,'comfort','ok'],[1500,'elevated','warn'],[Infinity,'ventilate','bad']]},
 pm25:{unit:'µg/m³',max:250,bands:[[35,'excellent','ok'],[75,'good','ok'],[115,'light','warn'],[150,'moderate','warn'],[250,'heavy','bad'],[Infinity,'severe','bad']]},
 formaldehyde:{unit:'mg/m³',max:0.2,bands:[[0.08,'pass','ok'],[0.1,'slight','warn'],[Infinity,'exceed','bad']]},
 temperature:{unit:'℃',min:0,max:40,bands:[[18,'cool','warn'],[26,'comfort','ok'],[Infinity,'warm','warn']]},
 humidity:{unit:'%',max:100,bands:[[40,'dry','warn'],[60,'comfort','ok'],[Infinity,'humid','warn']]}
};
function grade(metric,v){const b=AIR[metric].bands.find(([lim])=>v<=lim);return {key:'air.'+metric+'.'+b[1],cls:b[2]};}
function airScale(metric,v){
 const m=AIR[metric],lo=m.min||0,span=m.max-lo;let prev=lo;
 const strip=h('div',{class:'scale'});
 for(const [lim,,cls] of m.bands){const end=Math.min(lim,m.max);if(end<=prev)continue;strip.append(h('i',{class:cls,style:'flex:'+((end-prev)/span*100).toFixed(2)}));prev=end;}
 strip.append(h('b',{style:'left:'+Math.max(0,Math.min(100,(v-lo)/span*100))+'%'}));
 return strip;
}
const TZ=[-720,-660,-600,-540,-480,-420,-360,-300,-240,-210,-180,-120,-60,0,60,120,180,210,240,270,300,330,345,360,390,420,480,540,570,600,630,660,720,780,840];
function tzLabel(m){const sg=m<0?'−':'+',a=Math.abs(m);return 'UTC'+sg+String(Math.floor(a/60)).padStart(2,'0')+':'+String(a%60).padStart(2,'0')+(m===480?' · '+t('tz.cn'):'');}

/* ---------- Header, navigation, banners ---------- */
const UI=window.UI={$,h,icon,toast,run,onSubmit,confirm:confirmDialog,switchRow,seg,daysPicker,presetDays,daysText,hhmm,toMinutes,duration,summary,card,info,pageHead,saveBar,num,flag,slider,normalizeMac,prettyMac,clone,AIR,grade,airScale,tzLabel,state:null,caps:null,pages:{},device:null,clockCard,maintenancePage,scanNetworks};
// Keep requested output visible until a fresh read confirms it. Polls may still
// contain the pre-write state while the device applies an accepted command.
let pendingControl=null;
// Partial reads retain slow fields; null explicitly invalidates a measurement.
UI.acceptStatus=(s,partial=false)=>{
 const merged=partial?{...UI.confirmed,...s}:s;
 if(partial&&s.scd40&&UI.confirmed?.scd40)merged.scd40={...UI.confirmed.scd40,...s.scd40};
 UI.confirmed=merged;UI.state=pendingControl?{...merged,...pendingControl}:merged;return UI.state;
};
let fullGeneration=1,loadedGeneration=0,lastFullAt=0;
UI.invalidateStatus=()=>{fullGeneration++;};
UI.activePage=()=>/^settings\\/([a-z]+)$/.exec(UI.embeddedRoute??location.hash.slice(1))?.[1]||null;
UI.statusParams=()=>{
 const page=UI.activePage(),ttl=page==='diagnostics'?5000:['network','mqtt','device','firmware'].includes(page)?10000:30000;
 return UI.caps?.status_views?.includes('live')&&loadedGeneration===fullGeneration&&Date.now()-lastFullAt<ttl?{view:'live'}:{};
};
UI.control=async(action,params,patch)=>{
 if(pendingControl){UI.device.onStatus?.(UI.state);throw Error(t('control.pending'));}
 pendingControl=patch;UI.controlBusy=true;
 const render=()=>{if(UI.device.onStatus)UI.device.onStatus(UI.state);};
 UI.state={...UI.state,...patch};render();
 let sendError,last;
 const matches=s=>s&&Object.entries(patch).every(([k,v])=>Object.hasOwn(s,k)&&(Array.isArray(v)?Array.isArray(s[k])&&v.length===s[k].length&&v.every((x,i)=>!!x===!!s[k][i]):typeof v==='boolean'?!!s[k]===v:s[k]===v));
 try{
  try{await command(action,params);}catch(e){sendError=e;if(e.code&&!['timeout','offline'].includes(e.code))throw e;}
  const until=Date.now()+20000;
  do{
   last=await UI.reload();
   if(matches(last))return last;
   await new Promise(resolve=>setTimeout(resolve,750));
  }while(Date.now()<until);
  throw Error(t('control.unconfirmed')+(sendError?' · '+sendError.message:''));
 }finally{
  pendingControl=null;UI.controlBusy=false;UI.state=UI.confirmed||UI.state;render();
 }
};
function header(dev){
 const lang=h('select',{id:'langPick','aria-label':'Language'},
  h('option',{value:'auto','data-i18n':'pref.lang_auto'},t('pref.lang_auto')),h('option',{value:'en'},'English'),h('option',{value:'zh-CN'},'简体中文'));
 lang.value=I18N.preference;lang.onchange=()=>I18N.set(lang.value);
 const theme=h('select',{id:'themePick','aria-label':'Theme'},['system','light','dark'].map(v=>h('option',{value:v,'data-i18n':'pref.theme_'+v},t('pref.theme_'+v))));
 let saved='system';try{saved=localStorage.getItem('phicomm.appearance')||'system';}catch{}
 const apply=v=>{if(v==='system')document.documentElement.removeAttribute('data-theme');else document.documentElement.dataset.theme=v;};
 theme.value=saved;apply(saved);theme.onchange=()=>{apply(theme.value);try{localStorage.setItem('phicomm.appearance',theme.value);}catch{}};
 return h('header',{class:'topbar'},
  h('div',{class:'brand'},h('div',{class:'logo'},icon(dev.icon)),h('div',{class:'grow'},h('div',{class:'kind','data-i18n':dev.kindKey},t(dev.kindKey)),h('h1',{id:'title'},dev.model))),
  h('div',{class:'prefs'},lang,theme),
  h('div',{class:'chips',id:'chips'}));
}
function chip(dotCls,labelKey,value){return h('span',{class:'chip'},h('span',{class:'dot '+dotCls}),h('span',{i18n:labelKey}),value!=null&&h('b',{},value));}
function renderChips(s){
 const c=$('chips');if(!c)return;
 const wifi=s.wifi_connected?chip('ok','chip.wifi',s.ssid+' · '+s.ip):s.ap_active?chip('warn','chip.hotspot',s.ap_name):chip('bad','chip.wifi',t('state.connecting'));
 const mq=!s.mqtt_host?chip('','chip.mqtt',t('state.off')):s.mqtt_connected?chip('ok','chip.mqtt',t('state.ready')):chip('warn','chip.mqtt',t('s.'+(s.mqtt_status||'connecting')));
 c.replaceChildren(wifi,mq,h('span',{class:'chip'},h('span',{i18n:'chip.firmware'}),h('b',{class:'num'},s.version||'—')),...(UI.device.chips?UI.device.chips(s):[]));
}
function renderBanners(s,lost){
 const b=$('banners');if(!b)return;b.replaceChildren();
 const add=(cls,ic,text)=>b.append(h('div',{class:'banner '+cls,role:cls==='bad'?'alert':null},icon(ic),h('span',{},text)));
 if(lost){add('bad','alert',t('banner.lost'));return;}
 if(s.ota_active)add('info','auto',t('banner.ota',{p:s.ota_progress}));
 if(s.reboot_pending)add('info','auto',t('banner.rebooting'));
 if(s.mqtt_cleanup_warning)add('warn','alert',t('banner.cleanup'));
 if(s.save_error)add('bad','alert',t('banner.save_error',{e:s.save_error}));
 if(s.ap_active&&!s.wifi_connected)add('warn','wifi',t('banner.hotspot',{n:s.ap_name}));
}
function buildNav(dev){
 const side=$('side');side.replaceChildren();
 for(const [groupKey,keys] of dev.groups){
  const links=keys.filter(k=>UI.pages[k]).map(k=>h('a',{href:'#settings/'+k,'data-i18n':dev.nav[k]},t(dev.nav[k])));
  if(!links.length)continue;
  side.append(h('div',{class:'group','data-i18n':groupKey},t(groupKey)));
  for(const a of links)side.append(a);
 }
}
function showRoute(){
 const m=/^settings\\/([a-z]+)$/.exec(UI.embeddedRoute??location.hash.slice(1));
 const page=m&&document.querySelector('[data-settings-page="'+m[1]+'"]')?m[1]:m?(UI.device.groups.flatMap(g=>g[1]).find(k=>UI.pages[k])||null):null;
 $('homePage').hidden=!!page;$('settingsPage').hidden=!page;
 document.querySelectorAll('[data-settings-page]').forEach(p=>{p.hidden=p.dataset.settingsPage!==page;});
 document.querySelectorAll('.tabs a').forEach(a=>{const on=a.dataset.tab===(page?'settings':'home');if(on)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
 document.querySelectorAll('.side a').forEach(a=>{if(a.hash==='#settings/'+page)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
 if(page)UI.reload({full:true}).then(()=>afterShow(page));else afterShow(page);
}
const showingPages=new Set();
async function afterShow(page){
 if(!page)return;
 const active=document.querySelector('.side a[aria-current]'),side=$('side');
 // Reveal mobile menu items without scrollIntoView scrolling the whole page.
 if(active&&side&&side.scrollWidth>side.clientWidth){
  const item=active.getBoundingClientRect(),menu=side.getBoundingClientRect();
  if(item.left<menu.left)side.scrollLeft+=item.left-menu.left;
  else if(item.right>menu.right)side.scrollLeft+=item.right-menu.right;
 }
 const p=UI.pages[page];if(!p?.show||showingPages.has(page))return;
 const box=document.querySelector('[data-settings-page="'+page+'"]');
 box?.querySelector('.page-load-error')?.remove();showingPages.add(page);
 try{await p.show();}catch(e){const retry=h('button',{class:'btn',type:'button',onclick:()=>afterShow(page)},'重试');box?.prepend(h('div',{class:'banner warn page-load-error',role:'alert'},h('span',{},e.message),retry));}finally{showingPages.delete(page);}
}
/* Wi-Fi scan is shared: start, poll, and hand the sorted list to a callback. */
async function scanNetworks(onList){
 await command('wifi.scan');
 for(let i=0;i<25;i++){const r=await command('wifi.scan.get');if(r.scanning){await new Promise(res=>setTimeout(res,700));continue;}onList(r.networks||[]);return;}
 throw Error(t('wifi.scan_timeout'));
}

/* ---------- Shared settings pages ---------- */
function wifiPage(){
 const sum=h('div'),list=h('div',{class:'list',hidden:true});
 const ssid=h('input',{id:'ssid',maxLength:32,required:true,autocomplete:'off'});
 const pass=h('input',{id:'wifiPassword',type:'password',maxLength:63,autocomplete:'new-password',placeholder:t('wifi.pass_ph')});
 const open=switchRow('openNetwork','wifi.open');
 const scanBtn=h('button',{type:'button',class:'btn',id:'scan'},icon('auto'),h('span',{i18n:'wifi.scan'}));
 const form=h('form',{id:'wifiForm',class:'stack'},
  h('label',{class:'field'},h('span',{i18n:'wifi.ssid'}),h('div',{class:'row'},h('div',{class:'grow'},ssid),scanBtn)),list,
  h('label',{class:'field'},h('span',{i18n:'wifi.password'}),pass),open,
  h('div',{class:'form-actions'},h('button',{class:'btn primary',type:'submit'},h('span',{i18n:'wifi.save'}))),info('wifi.hint'));
 open.querySelector('input').onchange=e=>{pass.disabled=e.target.checked;};
 scanBtn.onclick=()=>run(scanBtn,()=>scanNetworks(net=>{
  list.replaceChildren(...net.slice().sort((a,b)=>b.rssi-a.rssi).map(n=>h('button',{type:'button',class:'item',style:'cursor:pointer;text-align:left;font:inherit;color:inherit;width:100%',
   onclick:()=>{ssid.value=n.ssid;open.querySelector('input').checked=n.security===0;pass.disabled=n.security===0;list.hidden=true;pass.focus();}},
   icon('wifi'),h('span',{class:'grow'},h('b',{},n.ssid),h('span',{},t('wifi.signal.'+(n.rssi>-55?3:n.rssi>-70?2:1))+' · '+n.rssi+' dBm')),n.security===0?h('span',{class:'badge',i18n:'wifi.open_badge'}):icon('lock'))));
  list.hidden=false;
  if(!net.length)throw Error(t('wifi.none'));
 }),null);
 onSubmit(form,()=>api('/wifi/config',{ssid:ssid.value,password:pass.value,open_network:open.querySelector('input').checked}),'wifi.verifying');
 return {el:h('div',{class:'stack'},pageHead('nav.wifi','wifi.lead'),sum,card('wifi.change',null,form)),
  status(s){sum.replaceChildren(summary([['wifi.status',s.wifi_connected?t('state.connected'):s.ap_active?t('state.hotspot'):t('state.connecting'),s.wifi_connected?'ok':s.ap_active?'warn':'bad'],
   ['wifi.ssid',s.ssid||'—'],['wifi.ip',s.ip||'—'],s.ap_active?['wifi.ap',s.ap_name]:['wifi.saved_password',t(s.wifi_password_set?'common.yes':'common.no')]]));},
  init(s){ssid.value=s.ssid||'';}};
}
function mqttImportPanel(dev,fields){
 const box=h('section',{class:'card stack',id:'mqttImport',hidden:!importTicket&&!importInvalid});
 if(importInvalid){box.append(h('p',{role:'alert'},t('import.invalid')));return box;}
 if(!importTicket)return box;
 const ticket=importTicket;importTicket=null;
 const source=window.opener;
 const status=h('p',{role:'status'}),accept=h('button',{type:'button',class:'btn primary',disabled:true},t('import.accept')),
 cancel=h('button',{type:'button',class:'btn'},t('common.cancel'));
 box.append(h('h2',{},t('import.title')),h('p',{},t('import.source',{origin:ticket.origin})),h('p',{},t('import.preview',{host:ticket.host,port:ticket.port,user:ticket.user||'—'})),
  h('p',{class:'help'},t('import.help')),h('p',{class:'help'},t('import.http')),
  h('div',{class:'form-actions'},accept,cancel),status);
 let waiting=false,done=false,timer,original=null;
 box.activate=()=>{if(!done&&source&&Date.now()<ticket.expires)accept.disabled=false;};
 const detach=()=>{window.removeEventListener('message',receive);clearTimeout(timer);try{window.opener=null;}catch{}};
 const clear=()=>{fields.pass.value='';if(original){fields.host.value=original.host;fields.port.value=original.port;fields.user.value=original.user;if(fields.protocol)fields.protocol.value=original.protocol;fields.clear.checked=original.clear;original=null;}waiting=false;done=true;detach();accept.disabled=true;};
 box.saved=()=>{original=null;fields.pass.value='';clearTimeout(timer);};
 box.guard=()=>{if(waiting)throw Error(t('import.waiting'));};
 const finish=()=>{clear();status.textContent=t('import.expired');};
 const receive=e=>{
  if(!waiting||done||!IotProvision.packet(e,{source,origin:ticket.origin,id:ticket.id,expires:ticket.expires},'iotcloud.provision.config'))return;
  let data;
  try{if(Object.keys(e.data).sort().join(',')!=='id,password,type')throw Error();data=IotProvision.config({v:1,host:ticket.host,port:ticket.port,user:ticket.user,password:e.data.password,protocol:'tmcp',expires:ticket.expires});}catch{finish();status.textContent=t('import.invalid');return;}
  // Only front-end fields are touched. config.set remains the normal save flow.
  fields.host.value=data.host;fields.port.value=String(data.port);fields.user.value=data.user;fields.pass.value=data.password;
  if(fields.protocol)fields.protocol.value='tmcp';fields.clear.checked=data.password==='';
  waiting=false;done=true;detach();accept.hidden=true;status.textContent=t('import.received');
  source.postMessage({type:'iotcloud.provision.received',id:ticket.id},ticket.origin);
  // Never leave an unsaved imported host paired with the device's old password.
  timer=setTimeout(()=>{clear();status.textContent=t('import.expired');},Math.max(0,ticket.expires-Date.now()));
 };
 cancel.onclick=()=>{clear();box.hidden=true;};
 accept.onclick=()=>{
  if(done||Date.now()>=ticket.expires||!source){finish();return;}
  original={host:fields.host.value,port:fields.port.value,user:fields.user.value,protocol:fields.protocol?.value,clear:fields.clear.checked};
  fields.host.value=ticket.host;fields.port.value=String(ticket.port);fields.user.value=ticket.user;fields.pass.value='';if(fields.protocol)fields.protocol.value='tmcp';fields.clear.checked=false;
  waiting=true;accept.disabled=true;status.textContent=t('import.waiting');
  source.postMessage({type:'iotcloud.provision.ready',id:ticket.id},ticket.origin);
 };
 if(!source){accept.disabled=true;status.textContent=t('import.no_opener');return box;}
 window.addEventListener('message',receive);
 timer=setTimeout(finish,Math.max(0,ticket.expires-Date.now()));
 window.addEventListener('pagehide',clear,{once:true});
 window.addEventListener('hashchange',()=>{if(location.hash!=='#settings/mqtt')clear();});
 return box;
}
function mqttPage(dev){
 const sum=h('div');
 const host=h('input',{id:'mqttHost',maxLength:dev.mqttHostMax||127,placeholder:t('mqtt.host_ph')});
 const port=h('input',{id:'mqttPort',type:'number',min:1,max:65535,required:true,value:'1883'});
 const user=h('input',{id:'mqttUser',maxLength:63,autocomplete:'off'});
 const pass=h('input',{id:'mqttPassword',type:'password',maxLength:256,autocomplete:'new-password',placeholder:t('mqtt.pass_ph')});
 const protocol=dev.model==='TC1'?h('select',{id:'mqttMode'},h('option',{value:'tmcp'},'TMCP (v2)'),h('option',{value:'legacy'},'Legacy (v1)')):null;
 const clear=switchRow('clearMqttPassword','mqtt.clear','mqtt.clear_desc');
 const imported=mqttImportPanel(dev,{host,port,user,pass,protocol,clear:clear.querySelector('input')});
 const form=h('form',{id:'mqttForm',class:'stack'},
  h('div',{class:'fields',style:'grid-template-columns:minmax(0,3fr) minmax(90px,1fr)'},
   h('label',{class:'field'},h('span',{i18n:'mqtt.host'}),host),h('label',{class:'field'},h('span',{i18n:'mqtt.port'}),port)),
  h('div',{class:'fields'},h('label',{class:'field'},h('span',{i18n:'mqtt.user'}),user),h('label',{class:'field'},h('span',{i18n:'mqtt.password'}),pass)),
  h('details',{class:'more'},h('summary',{i18n:'common.advanced'}),...(protocol?[h('label',{class:'field'},h('span',{i18n:'mqtt.mode'}),protocol)]:[]),clear),info(dev.haHintKey),
  h('div',{class:'form-actions'},h('button',{class:'btn primary',type:'submit'},h('span',{i18n:'common.save'}))));
 onSubmit(form,()=>{
  imported.guard?.();
  const enc=new TextEncoder();if(enc.encode(user.value).length>63||enc.encode(pass.value).length>256)throw Error(t('mqtt.too_long'));
  return api('/mqtt/config',{host:host.value.trim(),port:Number(port.value),user:user.value,password:pass.value,clear_password:clear.querySelector('input').checked,...(protocol?{protocol:protocol.value}:{})}).then(result=>{pass.value='';imported.saved?.();return result;});
 });
 const broker=card('mqtt.broker',null,form);
 const heading=broker.querySelector('.card-head');heading.classList.add('broker-card-head');
 heading.append(h('a',{class:'btn broker-platform-link',href:'https://phicomm-io.github.io/iotcloud/#/',target:'_blank',rel:'noopener noreferrer'},h('span',{i18n:'import.platform'}),icon('external')));
 return {el:h('div',{class:'stack'},pageHead('nav.mqtt','mqtt.lead'),sum,imported,broker),
  status(s){sum.replaceChildren(summary([['mqtt.status',!s.mqtt_host?t('state.off'):s.mqtt_connected?t('state.ready'):t('s.'+(s.mqtt_status||'connecting')),!s.mqtt_host?'':s.mqtt_connected?'ok':'warn'],
   ['mqtt.host',s.mqtt_host?s.mqtt_host+':'+s.mqtt_port:'—'],['mqtt.mode',t(s.mqtt_topic_mode==='legacy'?'mqtt.mode_legacy':'mqtt.mode_tmcp')],['mqtt.user',s.mqtt_user||'—']]));},
  init(s){if(protocol)protocol.value=s.mqtt_protocol||s.mqtt_topic_mode||'tmcp';host.value=s.mqtt_host||'';port.value=s.mqtt_port||1883;user.value=s.mqtt_user||'';imported.activate?.();}};
}
function firmwarePage(dev){
 const online=h('section',{class:'card stack',hidden:!UI.caps?.actions?.includes('ota.sources.get')});
 if(!online.hidden){
  const sources=h('div',{class:'row',id:'otaSources'}),latest=h('p',{class:'help'});
  const notes=h('button',{class:'btn',type:'button',hidden:true},t('fw.notes'));
  const notesText=h('pre',{class:'help',hidden:true,style:'white-space:pre-wrap;max-height:24rem;overflow:auto'});
  const install=h('button',{class:'btn primary',type:'button',hidden:true},t('fw.install_online'));
  let timer=null,last=null;
  const buttons=[];
  function busy(value){for(const button of buttons)button.disabled=value;}
  function translate(){install.textContent=t('fw.install_online');notes.textContent=t('fw.notes');for(const button of buttons)button.textContent=t('fw.source_'+button.dataset.source);if(last)latest.textContent=t('fw.check_'+last.state)+(last.version?' · '+last.version:'');}
  I18N.onChange(translate);
  async function poll(){
   const data=await command('ota.check.get');last=data;
   latest.textContent=t('fw.check_'+data.state)+(data.version?' · '+data.version:'')+(data.error?' · '+data.error:'');
   install.hidden=!data.version||data.state==='failed';notes.hidden=!data.release_log;
   if(data.busy||data.state==='checking')timer=setTimeout(()=>poll().catch(e=>{latest.textContent=e.message;busy(false);}),1000);
   else busy(false);
  }
  async function check(source){
   if(timer)clearTimeout(timer);busy(true);install.hidden=notes.hidden=notesText.hidden=true;
   try{await command('ota.check',{source});latest.textContent=t('fw.check_checking');timer=setTimeout(()=>poll().catch(e=>{latest.textContent=e.message;busy(false);}),500);}
   catch(e){busy(false);throw e;}
  }
  notes.onclick=()=>run(notes,async()=>{
   let offset=0,text='';notesText.hidden=false;
   do{
    await command('ota.notes',{offset});
    let data;
    do{await new Promise(resolve=>setTimeout(resolve,500));data=await command('ota.notes.get');}while(data.busy);
    if(data.state!=='ready')throw Error(data.error||t('fw.check_failed'));
    text+=data.text;notesText.textContent=text;
    if(data.next<=offset&&data.next<data.total)throw Error(t('fw.check_failed'));
    offset=data.next;if(offset>=data.total)break;
   }while(offset<16384);
  });
  install.onclick=()=>run(install,async()=>{if(!window.confirm(t('fw.confirm_online')))return;await command('ota.install');toast(t('fw.url_started'));});
  command('ota.sources.get').then(data=>{for(const id of data.sources){const button=h('button',{class:'btn',type:'button','data-source':id},t('fw.source_'+id));button.onclick=()=>run(button,()=>check(id));buttons.push(button);sources.append(button);}}).catch(()=>{online.hidden=true;});
  online.append(h('h2',{i18n:'fw.online'}),h('p',{class:'help',i18n:'fw.sources_help'}),sources,latest,h('div',{class:'row'},install,notes),notesText);
 }
 const cancel=h('button',{class:'btn',type:'button',hidden:true,i18n:'fw.cancel'});
 cancel.onclick=()=>run(cancel,async()=>{await command('ota.cancel');toast(t('fw.cancelling'));});
 const sum=h('div'),prog=h('progress',{max:100,value:0}),state=h('p',{class:'help'});
 const file=h('input',{id:'firmware',type:'file',accept:'.bin,.raw,.signed',required:true});
 const unsigned=switchRow('unsignedRescue','fw.unsigned','fw.unsigned_desc');
 const url=h('input',{id:'otaUrl',type:'url',maxLength:499,required:true,placeholder:'https://…/'+dev.otaName});
 const fileForm=h('form',{id:'fileForm',class:'stack'},h('label',{class:'field'},h('span',{},t('fw.file',{m:dev.model})),file),
  h('details',{class:'more'},h('summary',{i18n:'common.advanced'}),unsigned),
  h('div',{class:'form-actions'},h('button',{class:'btn primary',type:'submit'},h('span',{i18n:'fw.upload'}))));
 const urlForm=h('form',{id:'urlForm',class:'stack',hidden:true},h('label',{class:'field'},h('span',{i18n:'fw.url'}),url),
  h('div',{class:'form-actions'},h('button',{class:'btn primary',type:'submit'},h('span',{i18n:'fw.download'}))));
 const picker=seg([['file','fw.tab_file'],['url','fw.tab_url']],v=>{fileForm.hidden=v!=='file';urlForm.hidden=v!=='url';});picker.set('file');
 // Upload streams raw bytes; the request is synchronous up to send(), like the old page.
 let uploading=false;
 fileForm.addEventListener('submit',e=>{
  e.preventDefault();const f=file.files&&file.files[0];if(!f||uploading)return;
  const rescue=unsigned.querySelector('input').checked;
  if(rescue&&!window.confirm(t('fw.unsigned_confirm')))return;
  uploading=true;prog.value=0;
  const xhr=window.createDeviceUpload?window.createDeviceUpload():new XMLHttpRequest();xhr.open('POST',rescue?'/api/v1/ota/upload-unsigned':'/api/v1/ota/upload');
  xhr.setRequestHeader('Content-Type','application/octet-stream');xhr.timeout=310000;
  xhr.upload.onprogress=ev=>{if(ev.lengthComputable){prog.value=ev.loaded/ev.total*100;state.textContent=t('fw.uploading',{p:Math.round(ev.loaded/ev.total*100)});}};
  xhr.onload=()=>{const ok=xhr.status===202;state.textContent=ok?t('fw.verify_ok'):t('fw.failed',{e:xhr.responseText});toast(state.textContent,!ok);};
  xhr.onerror=()=>toast(t('fw.upload_lost'),true);
  xhr.ontimeout=()=>toast(t('fw.upload_timeout'),true);
  xhr.onloadend=()=>{uploading=false;};
  xhr.send(f);
 });
 onSubmit(urlForm,()=>api('/ota',{url:url.value}),'fw.url_started');
 const fileLabel=fileForm.querySelector('.field>span');I18N.onChange(()=>{fileLabel.textContent=t('fw.file',{m:dev.model});});
 return {el:h('div',{class:'stack'},pageHead('nav.firmware','fw.lead'),sum,online,
  card('fw.install',null,picker,h('div',{style:'margin-top:16px'},fileForm,urlForm),h('div',{class:'stack',style:'margin-top:20px'},prog,state,cancel),info(dev.otaHintKey))),
  status(s){sum.replaceChildren(summary([['fw.version',h('span',{class:'num'},s.version||'—')],['fw.state',t('s.'+(s.ota_state||'idle'))],s.ota_error?['fw.error',h('span',{class:'badge bad'},s.ota_error)]:null]));
   cancel.hidden=!s.ota_active||s.ota_mode==='committing';
   if(s.ota_active){prog.value=s.ota_progress;state.textContent=t('fw.progress',{p:s.ota_progress});}}};
}
function diagValue(k,v){
 if(v===null||v===undefined||v==='')return '—';
 if(typeof v==='boolean')return t(v?'common.yes':'common.no');
 if(k==='uptime_seconds')return duration(v);
 if(k==='free_memory')return (v/1024).toFixed(1)+' KB';
 if(k==='age_ms')return (v/1000).toFixed(1)+' s';
 if(k==='ntp_last_success'||k==='utc_time')return new Date(v*1000).toLocaleString(I18N.lang);
 if(Array.isArray(v))return v.join(', ');
 if(typeof v==='string'&&I18N.has('s.'+v))return t('s.'+v);
 return String(v);
}
function diagnosticsPage(dev){
 const health=h('div',{class:'health'}),groups=h('div',{class:'diag'}),raw=h('pre'),updated=h('p',{class:'help'});
 const extra=dev.diagExtra?dev.diagExtra():null;
 return {el:h('div',{class:'stack'},pageHead('nav.diagnostics','diag.lead'),card('diag.health',null,health),
   h('section',{},h('div',{class:'section-label',i18n:'diag.details'}),groups),extra,
   h('details',{class:'more'},h('summary',{i18n:'diag.raw'}),raw),updated),
  status(s){
   if(!UI.pages.diagnostics||$('settingsPage').hidden)return;
   const checks=[['diag.c_wifi',s.wifi_connected?'ok':'bad',s.wifi_connected?s.ssid:t('state.disconnected')],
    ['diag.c_mqtt',!s.mqtt_host?'':s.mqtt_connected?'ok':'warn',!s.mqtt_host?t('state.off'):t('s.'+(s.mqtt_status||'connecting'))+(s.mqtt_errors?' · '+t('diag.errors',{n:s.mqtt_errors}):'')],
    ...(Object.hasOwn(s,'watchdog_state')?[['diag.c_watchdog',!s.watchdog_enabled||s.watchdog_state==='fault'?'bad':s.reset_reason==='watchdog'?'warn':'ok',s.reset_reason==='watchdog'?t('diag.watchdog_reboot'):t('s.'+s.watchdog_state)]]:[]),
    ...(dev.healthChecks?dev.healthChecks(s):[]),['diag.c_ota',s.ota_error?'bad':'ok',s.ota_error||t('s.'+(s.ota_state||'idle'))]];
   health.replaceChildren(...checks.map(([k,cls,text])=>h('div',{class:'item'},h('span',{class:'dot '+cls}),h('span',{class:'grow'},h('b',{i18n:k})),h('span',{class:'help'},text))));
   const seen=new Set();
   const all=[['diag.g_device',['name','device_id','version','uptime_seconds','free_memory','web_password_set']],
    ['diag.g_watchdog',['reset_reason','reset_reason_raw','watchdog_enabled','watchdog_state','watchdog_fault']],
    ['diag.g_network',['wifi_connected','ssid','ip','ap_active','ap_name','scan_busy','wifi_password_set','wifi_trial_status','wifi_trial_active']],
    ['diag.g_mqtt',['mqtt_connected','mqtt_status','mqtt_host','mqtt_port','mqtt_user','mqtt_topic_mode','mqtt_password_set','mqtt_errors','mqtt_last_error','mqtt_cleanup_warning']],
    ...(dev.diagGroups||[]),['diag.g_ota',['ota_active','ota_state','ota_progress','ota_error']]];
   const open=new Set([...groups.querySelectorAll('details')].filter(d=>d.open).map(d=>d.dataset.key));
   groups.replaceChildren(...all.map(([key,keys],i)=>{const rows=keys.filter(k=>Object.hasOwn(s,k)).map(k=>{seen.add(k);return [k,s[k]];});if(!rows.length)return null;
    return h('details',{'data-key':key,open:open.size?open.has(key):i<2},h('summary',{},h('span',{i18n:key}),h('span',{class:'badge'},rows.length)),
     h('dl',{},rows.map(([k,v])=>[h('dt',{},I18N.has('d.'+k)?t('d.'+k):k),h('dd',{class:'num'},diagValue(k,v))])));}).filter(Boolean));
   const rest=Object.keys(s).filter(k=>!seen.has(k)&&!(Array.isArray(s[k])&&typeof s[k][0]==='object'));
   if(rest.length)groups.append(h('details',{'data-key':'diag.g_other'},h('summary',{},h('span',{i18n:'diag.g_other'}),h('span',{class:'badge'},rest.length)),
    h('dl',{},rest.map(k=>[h('dt',{},I18N.has('d.'+k)?t('d.'+k):k),h('dd',{class:'num'},diagValue(k,s[k]))]))));
   raw.textContent=JSON.stringify(s,null,2);updated.textContent=t('diag.updated',{t:new Date().toLocaleTimeString(I18N.lang)});
  }};
}
function logsPage(){
 const out=h('pre',{},''),rows=[],state=h('p',{class:'help'});
 let cursor=0;
 async function read(){
  const d=await command('logs.get',{after:cursor,limit:8});
  if(d.overwritten)rows.push(t('logs.overwritten'));
  for(const r of d.records)rows.push(JSON.stringify(r.module==='system'&&r.event==='watchdog'?{...r,message:t('diag.watchdog_reboot')}:r));
  cursor=d.next;out.textContent=rows.join('\\n')||t('logs.empty');return d;
 }
 const refresh=h('button',{type:'button',class:'btn'},icon('auto'),h('span',{i18n:'diag.log_refresh'}));
 refresh.onclick=()=>run(refresh,read,null);
 const all=h('button',{type:'button',class:'btn'},h('span',{i18n:'logs.load_all'}));
 all.onclick=()=>run(all,async()=>{for(let i=0;i<8;i++){const d=await read();if(cursor>=d.latest)break;}},null);
 const dl=h('button',{type:'button',class:'btn'},h('span',{i18n:'logs.download'}));
 dl.onclick=()=>run(dl,async()=>{
  for(let i=0;i<8;i++){const d=await read();if(cursor>=d.latest)break;}
  const url=URL.createObjectURL(new Blob([rows.join('\\n')],{type:'text/plain;charset=utf-8'})),a=h('a',{href:url,download:'device-log.txt'});
  document.body.append(a);a.click();a.remove();URL.revokeObjectURL(url);
 },null);
 return {el:h('div',{class:'stack'},pageHead('nav.logs','logs.lead'),
  card('diag.logs',null,h('p',{class:'help',i18n:'logs.hint'}),h('div',{class:'form-actions'},refresh,all,dl),out,state))};
}
function maintenancePage(dev){
 const reboot=h('button',{type:'button',class:'btn'},h('span',{i18n:'sys.reboot'}));
 reboot.onclick=async()=>{if(await confirmDialog({title:t('sys.reboot_q',{m:dev.model}),body:t('sys.reboot_body'),ok:t('sys.reboot')}))run(reboot,()=>api('/reboot',{}),'toast.rebooting');};
 const items=[h('div',{class:'item'},h('div',{class:'grow'},h('b',{i18n:'sys.reboot'}),h('span',{i18n:'sys.reboot_desc'})),reboot)];
 if(dev.factoryReset){
  const reset=h('button',{type:'button',class:'btn danger'},h('span',{i18n:'sys.reset'}));
  reset.onclick=async()=>{if(await confirmDialog({title:t('sys.reset_q'),body:t('sys.reset_body'),ok:t('sys.reset'),danger:true}))run(reset,()=>api('/device/reset',{full:true}),'toast.resetting');};
  items.push(h('div',{class:'item'},h('div',{class:'grow'},h('b',{i18n:'sys.reset'}),h('span',{i18n:'sys.reset_desc'})),reset));
 }
 return h('div',{class:'stack'},pageHead('nav.maintenance','sys.lead'),
  h('section',{class:'card danger-zone'},h('div',{class:'list'},items),
   h('p',{class:'help',style:'margin-top:12px',i18n:dev.buttonHintKey},t(dev.buttonHintKey))));
}
/* Slots shared by every "General" page. */
function nameCard(){
 const input=h('input',{id:'deviceName',maxLength:63}),meta=h('div');
 const form=h('form',{id:'nameForm',class:'stack'},h('label',{class:'field'},h('span',{i18n:'gen.name'}),
  h('div',{class:'row'},h('div',{class:'grow'},input),h('button',{class:'btn primary',type:'submit'},h('span',{i18n:'common.save'}))),
  h('button',{class:'btn ghost',type:'button',onclick:e=>run(e.currentTarget,async()=>{await api('/deviceName',{name:''});await UI.reload();input.value=UI.state?.name||'';},'common.saved')},h('span',{i18n:'gen.default_name'}))),meta);
 onSubmit(form,()=>{if(new TextEncoder().encode(input.value).length>63)throw Error(t('gen.name_long'));return api('/deviceName',{name:input.value});});
 return {el:card('gen.identity',null,form),init(s){input.value=s.name||'';},status(s){meta.replaceChildren(summary([['gen.device_id',h('span',{class:'num'},prettyMac(s.device_id))],['gen.uptime',duration(s.uptime_seconds||0)]]));}};
}
function authCard(){
 const input=h('input',{id:'webPassword',type:'password',maxLength:32,autocomplete:'new-password',placeholder:t('auth.ph')});
 const state=h('span',{class:'badge'});
 const form=h('form',{id:'authForm',class:'stack'},h('label',{class:'field'},h('span',{i18n:'auth.password'}),input,h('p',{class:'help',i18n:'auth.help'})),
  h('div',{class:'form-actions'},h('button',{class:'btn primary',type:'submit'},h('span',{i18n:'auth.set'}))));
 onSubmit(form,()=>{if(input.value&&!/^[\\x20-\\x7e]{8,32}$/.test(input.value))throw Error(t('auth.invalid'));return api('/auth/password',{password:input.value});});
 const c=card('auth.title','auth.lead',form);c.querySelector('.card-head').append(state);
 return {el:c,status(s){state.className='badge '+(s.web_password_set?'ok':'');state.textContent=t(s.web_password_set?'auth.on':'auth.off');}};
}
function clockCard({load,save,status}){
 const sum=h('div'),tz=h('select'),ntp=h('input',{maxLength:63,required:true,placeholder:'ntp1.aliyun.com'});
 const fill=()=>{const v=tz.value;tz.replaceChildren(...TZ.map(m=>h('option',{value:m},tzLabel(m))));tz.value=v;};fill();I18N.onChange(fill);
 const form=h('form',{class:'stack'},h('div',{class:'fields'},
   h('label',{class:'field'},h('span',{i18n:'clock.tz'}),tz),h('label',{class:'field'},h('span',{i18n:'clock.ntp'}),ntp)),
  info('clock.hint'),h('div',{class:'form-actions'},h('button',{class:'btn primary',type:'submit'},h('span',{i18n:'common.save'}))));
 onSubmit(form,()=>save({timezone_minutes:Number(tz.value),ntp_host:ntp.value.trim()}));
 return {el:card('clock.title',null,sum,h('div',{style:'margin-top:16px'},form)),
  async show(){const c=await load();if(!c)return;tz.value=String(c.timezone_minutes||480);ntp.value=c.ntp_host||'';},
  status(s){sum.replaceChildren(summary(status(s)));}};
}

/* ---------- Boot ---------- */
let initialized=false,failures=0,lastSuccess=0,loading=null;
let stopped=false,pollingStarted=false,pollTimer=null,pollGeneration=0;
const lockedControls=new Map();
function lockHome(){if(!UI.embedded)return;for(const el of document.querySelectorAll('#homePage button,#homePage input,#homePage select')){if(!lockedControls.has(el))lockedControls.set(el,el.disabled);el.disabled=true;}}
function unlockHome(){for(const [el,disabled] of lockedControls)el.disabled=disabled;lockedControls.clear();}
async function load(){
 const lifecycle=pollGeneration;
 try{
  const params=UI.statusParams(),generation=fullGeneration;
  const raw=await command('status.get',params);
  if(stopped||lifecycle!==pollGeneration)return null;
  failures=0;lastSuccess=Date.now();unlockHome();
  if(!params.view&&!raw.ota_mode){lastFullAt=Date.now();loadedGeneration=generation;}
  if(raw.ota_active&&raw.ota_mode){UI.pages.firmware?.status(raw);return raw;}
  const s=UI.acceptStatus(raw,params.view==='live');
  $('title').textContent=UI.device.model+' '+(s.name||'');
  renderChips(s);renderBanners(s,false);
  if(!initialized){for(const p of Object.values(UI.pages))if(p.init)p.init(s);initialized=true;}
  for(const [key,p] of Object.entries(UI.pages))if(p.status&&(key===UI.activePage()||key.startsWith('slot_')&&UI.activePage()==='device'))p.status(s);
  if(UI.device.onStatus)UI.device.onStatus(s);
  return raw;
 }catch(e){if(!stopped&&lifecycle===pollGeneration&&++failures>=3&&(!lastSuccess||Date.now()-lastSuccess>=30000)){lockHome();renderBanners(null,true);}return null;}
}
function pollLoad(){if(stopped)return Promise.resolve(null);if(!loading)loading=load().finally(()=>{loading=null;});return loading;}
window.addEventListener('pagehide',()=>{stopped=true;pollGeneration++;clearTimeout(pollTimer);pollTimer=null;});
async function refreshStatus(generation=pollGeneration,resuming=false){
 if(stopped||generation!==pollGeneration)return;
 if(!document.hidden||!initialized){
  // An old request may settle after cache restoration. Retire it before the
  // required full read; its former loop cannot schedule another timer.
  if(resuming&&loading)await loading;
  if(stopped||generation!==pollGeneration)return;
  await pollLoad();
 }
 if(!stopped&&generation===pollGeneration)pollTimer=setTimeout(function refresh(){
  if(generation===pollGeneration)pollTimer=null;
  return refreshStatus(generation);
 },UI.activePage()?(UI.activePage()==='diagnostics'?5000:10000):(UI.device.interval||2000));
}
window.addEventListener('pageshow',()=>{
 if(!stopped)return;
 stopped=false;UI.invalidateStatus();
 if(pollingStarted)refreshStatus(pollGeneration,true);
});
UI.reload=async({full=false}={})=>{if(full)UI.invalidateStatus();if(loading)await loading;return pollLoad();};
document.addEventListener('visibilitychange',()=>{if(UI.device&&!document.hidden&&!stopped)UI.reload({full:true});});
UI.showRoute=showRoute;
UI.start=async dev=>{
 UI.device=dev;lockHome();
 const first=dev.groups.flatMap(g=>g[1])[0];
 document.body.prepend(header(dev),
  h('nav',{class:'tabs','aria-label':'Main'},
   h('a',{href:'#home','data-tab':'home'},icon('home'),h('span',{i18n:'nav.home'})),
   h('a',{href:'#settings/'+first,'data-tab':'settings'},icon('sliders'),h('span',{i18n:'nav.settings'}))),
  h('div',{id:'banners'}));
 UI.caps=await command('capabilities.get').catch(()=>({actions:[]}));
 const pages=$('pages');
 // Pages the framework builds for every product.
 const builders={network:wifiPage,mqtt:mqttPage,firmware:firmwarePage,diagnostics:diagnosticsPage,maintenance:maintenancePage,logs:logsPage};
 for(const [key,build] of Object.entries(builders)){const p=build(dev);UI.pages[key]=p;pages.append(h('div',{'data-settings-page':key,hidden:true},p.el));}
 // Automation pages, when the device advertises the capability.
 Object.assign(UI.pages,window.automationPages(dev));
 // Product pages: the product supplies show()/status(); the markup is either
 // already in the document or appended below.
 for(const [key,p] of Object.entries(dev.pages))UI.pages[key]=Object.assign(UI.pages[key]||{},p);
 for(const [key,p] of Object.entries(UI.pages)){
  let box=document.querySelector('[data-settings-page="'+key+'"]');
  if(!box){box=h('div',{'data-settings-page':key,hidden:true});pages.append(box);}
  if(p.el)box.append(p.el);
 }
 for(const slot of document.querySelectorAll('[data-slot]')){const p=slot.dataset.slot==='name'?nameCard():authCard();UI.pages['slot_'+slot.dataset.slot]=p;slot.replaceWith(p.el);}
 buildNav(dev);
 window.addEventListener('hashchange',showRoute);showRoute();
 I18N.apply();
 I18N.onChange(()=>{if(UI.state){renderChips(UI.state);renderBanners(UI.state,false);for(const p of Object.values(UI.pages))if(p.status)p.status(UI.state);}});
 pollingStarted=true;refreshStatus();
};
})();
<\/script>
<script>/* Automation pages shared by the three products: schedules, custom button
 * events and night mode. Installed by ui.js when the device reports the
 * matching capability. All traffic goes through command() from service.js. */
(()=>{
'use strict';
const {t}=I18N;
const {h,icon,toast,run,switchRow,seg,daysPicker,presetDays,daysText,hhmm,toMinutes,info,card,pageHead,slider,clone}=UI;

/* Action kinds a schedule or button event can run, keyed by action name. */
const ACTIONS={
 'fan.panel':'op.fan_panel','fan.mode.set':'auto.mode','fan.mode.toggle':'auto.toggle','outlet.set':'op.outlet','fan.set':'op.fan','light.set':'op.light',
 'child_lock.set':'op.child_lock','indicator.set':'op.indicator',
 'display.set':'op.display','system.reboot':'op.reboot',
 'light_effect.next':'op.effect_next','light_effect.select':'op.effect_select',
 'filter.reset':'op.filter_reset','light_always.set':'op.light_always'};
const actKey=a=>ACTIONS[a]||'op.none';
const sel=(parent,labelKey,options)=>{const s=h('select',{},options.map(([v,k])=>h('option',{value:v},typeof k==='function'?k():t(k))));parent.append(h('label',{class:'field'},h('span',{i18n:labelKey}),s));return s;};

/* Shared action editor: one control group per supported action. */
function actionEditor(host,{keys=false}={}){
 const caps=UI.caps||{},available=Object.keys(ACTIONS).filter(a=>(caps.actions||[]).includes(a)&&(keys||!['light_effect.next','light_effect.select','filter.reset','fan.mode.toggle','fan.panel'].includes(a)));
 const box=h('div',{class:'stack'}),fields=h('div',{class:'stack'});
 const options=[...(keys?[['none','op.none']]:[]),...available.map(a=>[a,actKey(a)])];
 const pick=keys?sel(host,'btn.action',options):seg(options,v=>draw(v),{full:true});
 if(keys){pick.set=v=>{pick.value=v;};pick.addEventListener('change',()=>draw(pick.value));host.append(box);}
 else host.append(pick,box);
 box.append(fields);
 let read=()=>({}),current=keys?'none':(available[0]||'none');
 function draw(a,params={}){
  current=a;fields.replaceChildren();read=()=>({});
  if(a==='none'||!a)return;
  const parts=[];
  if(a==='outlet.set'){
   const index=sel(fields,'op.target',[['all','op.all'],...[0,1,2,3,4,5].map(i=>[String(i),()=>t('tc1.socket_n',{n:i+1})])]);
   if(params.index!=null)index.value=String(params.index);
   parts.push(()=>index.value==='all'?{}:{index:Number(index.value)});
  }
  if(a==='fan.mode.set'){const mode=sel(fields,'auto.mode',[['manual','auto.manual'],['auto','auto.auto']]);mode.value=params.mode||'manual';parts.push(()=>({mode:mode.value}));}
  const switchable=['outlet.set','fan.set','light.set','child_lock.set','indicator.set','light_always.set'].includes(a);
  if(switchable){
   const values=keys&&(['outlet.set','fan.set'].includes(a)||caps.model==='a1')?['on','off','toggle']:['on','off'];
   const on=sel(fields,'op.state',values.map(v=>[v,'op.'+v]));
   on.value=params.toggle?'toggle':(params.on===false||params.enabled===false)?'off':'on';
   const field=['outlet.set','fan.set'].includes(a)?'on':'enabled';
   parts.push(()=>on.value==='toggle'?{toggle:true}:{[field]:on.value==='on'});
  }
  if(a==='light_effect.select'){
   const effect=sel(fields,'op.effect_select',Array.from({length:5},(_,i)=>[String(i),'a1.effect.'+i]));
   effect.value=String(params.effect||0);parts.push(()=>({effect:Number(effect.value)}));
  }
  if(a==='filter.reset')fields.append(info('filter.reset_hint'));
  if(a==='fan.set'){
   const m={speed:params.speed||60},[out,range]=slider(m,'speed',{min:1});
   fields.append(h('div',{class:null},h('div',{class:'row between'},h('span',{class:'label',i18n:'op.speed'}),out)),range);
   parts.push(()=>({speed:Number(m.speed)}));
  }
  if(a==='light.set'||a==='display.set'){
   const step=a==='display.set'?25:1,m={brightness:params.brightness!=null?params.brightness:100};
   const [out,range]=slider(m,'brightness',{min:0,max:100,step,fmt:v=>v+'%'});
   fields.append(h('div',{class:null},h('div',{class:'row between'},h('span',{class:'label',i18n:'op.brightness'}),out)),range);
   if(a==='light.set'&&keys){
    const setBrightness=switchRow(null,'op.set_brightness');setBrightness.querySelector('input').checked=params.brightness!=null;
    fields.append(setBrightness);parts.push(()=>setBrightness.querySelector('input').checked?{brightness:Number(m.brightness)}:{});
   }else parts.push(()=>({brightness:Number(m.brightness)}));
  }
  read=()=>Object.assign({},...parts.map(f=>f()));
  current=a;
 }
 draw(keys?'none':(available[0]||'none'));
 return {
  get(){return {action:current,params:read()};},
  set(a,p){current=a;pick.set(a);draw(a,p||{});}
 };
}

/* ---------- Schedules ---------- */
function schedulePage(dev){
 const box=h('div',{class:'stack'}),listBox=h('div',{class:'stack'});
 let offset=0,editing=0,tasks=[];
 const tz=()=>((UI.state&&UI.state.timezone_minutes)||480)*60;
 const atText=sec=>new Date((sec+tz())*1000).toISOString().slice(0,16).replace('T',' ');
 const duration=sec=>{sec=Math.max(0,Math.ceil(sec));return String(Math.floor(sec/3600)).padStart(2,'0')+':'+String(Math.floor(sec/60)%60).padStart(2,'0')+':'+String(sec%60).padStart(2,'0');};
 const when=x=>x.trigger==='countdown'?duration(x.enabled?Math.max(0,x.remaining_seconds-(performance.now()-x.received)/1000):x.seconds):x.trigger==='once'?atText(x.at):hhmm(x.minute);
 const timeValue=()=>{const d=new Date(Date.now()+tz()*1000+86400000);return d.toISOString().slice(0,16);};

 const enabled=switchRow(null,'sch.enabled_row');
 const trigger=seg([['weekly','sch.weekly'],['once','day.once'],...(UI.caps.schedule_countdown?[['countdown','sch.countdown']]:[])],v=>syncTrigger(),{full:true});
 const days=daysPicker('sdays',127),time=h('input',{type:'time',value:'08:00'}),at=h('input',{type:'datetime-local',value:timeValue()});
 const weekly=h('div',{class:'field'},h('div',{class:'row between'},h('span',{class:'label',i18n:'sch.repeat'}),presetDays(days)),days);
 const once=h('label',{class:'field',hidden:true},h('span',{i18n:'sch.when'}),at);
 const minute=h('label',{class:'field'},h('span',{i18n:'sch.time'}),time);
 const editorHost=h('div',{class:'stack'});
 const hours=h('input',{type:'number',min:0,max:24,step:1,value:0,'aria-label':t('sch.hours')}),minutes=h('input',{type:'number',min:0,max:59,step:1,value:30,'aria-label':t('sch.minutes')});
 const countdown=h('div',{class:'stack',hidden:true},h('div',{class:'fields'},h('label',{class:'field'},h('span',{i18n:'sch.hours'}),hours),h('label',{class:'field'},h('span',{i18n:'sch.minutes'}),minutes)),info('sch.countdown_hint'));
 function syncTrigger(){const mode=trigger.value;weekly.hidden=mode!=='weekly';once.hidden=mode!=='once';minute.hidden=mode!=='weekly';countdown.hidden=mode!=='countdown';hours.disabled=minutes.disabled=mode!=='countdown';editorHost.hidden=mode==='countdown';}

 const editor=actionEditor(editorHost);
 const save=h('button',{type:'submit',class:'btn primary'});
 const labelSave=()=>save.replaceChildren(icon('plus'),h('span',{},t(editing?'sch.save_btn':'sch.add_btn')));
 labelSave();
 function row(x){
  return h('div',{class:'item schedule-task'},h('b',{class:'time num','data-countdown-id':x.trigger==='countdown'?x.id:null},when(x)),
   h('div',{class:'grow'},h('b',{},t(actKey(x.action))+(x.trigger==='weekly'?' · '+daysText(x.days):' · '+t(x.trigger==='countdown'?'sch.countdown':'day.once'))),
    h('span',{},t('sch.state.'+(x.state||'waiting'))+(x.enabled?'':' · '+t('sch.off')))),
   h('span',{class:'badge '+(x.enabled?'ok':'')},t(x.enabled?'sch.enabled':'sch.disabled')),
   h('div',{class:'row',style:'gap:4px'},
    h('button',{type:'button',class:'btn ghost',onclick:()=>edit(x)},h('span',{i18n:'sch.edit'})),
    h('button',{type:'button',class:'btn ghost',onclick:ev=>run(ev.currentTarget,()=>command('schedules.enable',{id:x.id,enabled:!x.enabled}).then(load),null)},h('span',{i18n:x.trigger==='countdown'?(x.enabled?'sch.cancel':'sch.restart'):(x.enabled?'sch.disable':'sch.enable')})),
    h('button',{type:'button',class:'btn ghost icon','aria-label':t('common.delete'),onclick:ev=>run(ev.currentTarget,()=>command('schedules.delete',{id:x.id}).then(load),'common.deleted')},icon('trash'))));
 }
 async function load(){
  const d=await command('schedules.get',{offset,limit:8});tasks=d.items.map(x=>({...x,received:performance.now()}));
  listBox.replaceChildren(
   tasks.length?h('div',{class:'list'},tasks.map(row)):h('div',{class:'empty'},t('sch.empty')),
   h('div',{class:'row between'},h('span',{class:'help'},t('sch.used',{a:d.count,b:d.capacity})),
    h('div',{class:'row',style:'gap:4px'},
     h('button',{type:'button',class:'btn ghost',onclick:()=>run(null,()=>{offset=Math.max(0,offset-8);return load();},null)},h('span',{i18n:'common.prev'})),
     h('button',{type:'button',class:'btn ghost',onclick:()=>run(null,()=>{offset=d.next;return load();},null),disabled:offset+8>=d.count},h('span',{i18n:'common.next'})))));
  banner.hidden=!(UI.state&&UI.state.time_synced===false);
 }
 function reset(){editing=0;enabled.querySelector('input').checked=true;trigger.set('weekly');syncTrigger();days.setMask(127);time.value='08:00';editor.set('none');hours.value=0;minutes.value=30;labelSave();}
 function edit(x){
  editing=x.id;enabled.querySelector('input').checked=!!x.enabled;trigger.set(x.trigger);syncTrigger();
  days.setMask(x.days);time.value=hhmm(x.minute);at.value=x.trigger==='countdown'?timeValue():atText(x.at);hours.value=Math.floor((x.seconds||0)/3600);minutes.value=Math.floor((x.seconds||0)%3600/60);editor.set(x.action,x.params);labelSave();
  box.scrollIntoView({block:'start'});
 }
 const banner=h('div',{class:'banner warn',hidden:true},icon('clock'),h('span',{i18n:'sch.no_clock'}));
 const form=h('form',{class:'subcard stack'},h('h3',{i18n:'sch.new'}),trigger,weekly,once,minute,countdown,editorHost,enabled,
  h('div',{class:'form-actions'},save,
   h('button',{type:'button',class:'btn ghost',onclick:reset},h('span',{i18n:'sch.reset'}))));
 form.addEventListener('submit',e=>{e.preventDefault();run(save,async()=>{
  const a=trigger.value==='countdown'?{action:'fan.set',params:{on:false}}:editor.get();
  if(a.action==='none')throw Error(t('sch.pick_action'));
  const task={enabled:enabled.querySelector('input').checked,trigger:trigger.value,...a};
  if(editing)task.id=editing;
  if(trigger.value==='countdown'){const h=Number(hours.value),m=Number(minutes.value);task.seconds=h*3600+m*60;if(!Number.isInteger(h)||!Number.isInteger(m)||h<0||m<0||m>59||task.seconds<60||task.seconds>86400)throw Error(t('sch.duration_invalid'));}
  else if(trigger.value==='weekly'){const d=days.mask();if(!d)throw Error(t('sch.pick_day'));task.days=d;task.minute=toMinutes(time.value);}
  else{const parsed=Date.parse(at.value);if(!Number.isFinite(parsed))throw Error(t('sch.pick_when'));
   task.at=Math.floor(parsed/1000)-tz();if(task.at<=Math.floor(Date.now()/1000))throw Error(t('sch.future'));}
  await command('schedules.put',task);reset();await load();toast(t('sch.added'));
 },null);});
 enabled.querySelector('input').checked=true;trigger.set('weekly');syncTrigger();
 box.append(form,info('sch.hint'));
 return {el:h('div',{class:'stack'},pageHead('nav.schedule',dev.scheduleLead),banner,card('sch.list',null,listBox,box)),
  async show(){if(!UI.state)await UI.reload();await load();},
  status(){if(!box.isConnected||box.closest('[data-settings-page]')?.hidden)return;
   for(const x of tasks.filter(x=>x.trigger==='countdown')){const label=listBox.querySelector('[data-countdown-id="'+x.id+'"]');if(label)label.textContent=when(x);}
   if(tasks.some(x=>x.trigger==='countdown'&&x.enabled))run(null,load,null);
  }};
}

/* ---------- Custom button events ---------- */
function buttonsPage(dev){
 const listBox=h('div',{class:'stack'}),keyHost=h('div',{class:'fields'});
 const keyIds=dev.model==='A1'?(UI.caps.button_keys?.includes('combination')?[0,1,2]:[0,1]):[0];
 const keyName=k=>t(dev.model==='A1'?['btn.key_power','btn.key_wifi','btn.key_both'][Number(k)]:'btn.key_fn');
 const key=sel(keyHost,'btn.key',keyIds.map(k=>[String(k),()=>keyName(k)]));
 const count=h('input',{type:'number',min:1,max:30,value:1,required:true});
 const countLabel=h('span',{},t('btn.click_count'));
 const kind=seg([['clicks','btn.click'],['seconds','btn.hold']],v=>{
  count.max=v==='seconds'?4:30;count.value=Math.min(Number(count.value)||1,Number(count.max));
  countLabel.textContent=t(v==='seconds'?'btn.hold_count':'btn.click_count');preview();
 },{full:true});kind.set('clicks');
 keyHost.append(h('div',{class:'field'},h('span',{i18n:'btn.kind'}),kind),h('label',{class:'field'},countLabel,count));
 const editorHost=h('div',{class:'stack'}),editor=actionEditor(editorHost,{keys:true});
 const gesture=v=>v.seconds?t('btn.hold_full',{n:v.seconds}):t(v.clicks===1?'btn.single':'btn.click_full',{n:v.clicks});
 function actionText(v){
  if(v.action==='none')return t('op.none');
  const p=v.params||{},state=t(p.toggle?'op.toggle':p.on===false||p.enabled===false?'op.off':'op.on');
  const target=v.action==='outlet.set'?(p.index==null?t('op.all'):(UI.state?.socket_names?.[p.index]||t('tc1.socket_n',{n:p.index+1}))):t(actKey(v.action));
  if(['system.reboot','light_effect.next','filter.reset','fan.panel','fan.mode.toggle'].includes(v.action))return target;
  if(v.action==='light_effect.select')return target+' · '+t('a1.effect.'+p.effect);
  let text=v.action==='display.set'?target:state+' · '+target;
  if(p.speed!=null)text+=' · '+p.speed+'%';
  if(p.brightness!=null)text+=' · '+p.brightness+'%';
  return text;
 }
 const previewBox=h('div',{class:'button-preview','aria-live':'polite'});
 function preview(){
  const v={key:Number(key.value),[kind.value]:Number(count.value),...editor.get()};
  previewBox.textContent=keyName(v.key)+' · '+gesture(v)+' → '+actionText(v);
 }
 const editorCard=h('form',{class:'card stack','data-button-editor':''});
 const selected=()=>({key:Number(key.value),[kind.value]:Number(count.value)});
 function edit(v){
  key.value=String(v.key);kind.set(v.seconds?'seconds':'clicks');count.max=v.seconds?4:30;
  countLabel.textContent=t(v.seconds?'btn.hold_count':'btn.click_count');count.value=v.seconds||v.clicks;
  editor.set(v.action,v.params);preview();editorCard.scrollIntoView({block:'nearest',behavior:'smooth'});count.focus();
 }
 function row(v){
  return h('div',{class:'button-mapping'},h('b',{class:'button-gesture'},gesture(v)),
   h('span',{class:'button-result'},actionText(v)),h('div',{class:'row'},
    h('button',{type:'button',class:'btn ghost',onclick:()=>edit(v)},t('sch.edit')),
    h('button',{type:'button',class:'btn ghost','aria-label':t('common.delete')+' '+gesture(v),onclick:e=>run(e.currentTarget,async()=>{
     await command('buttons.set',{key:v.key,...(v.seconds?{seconds:v.seconds}:{clicks:v.clicks}),action:'none',params:{}});await load();
    },'common.deleted')},t('common.delete'))));
 }
 async function load(){
  const items=[];let offset=0,capacity=68;
  do{const page=await command('buttons.get',{offset,limit:8});items.push(...page.items);capacity=page.capacity||capacity;if(page.next==null||page.next<=offset)break;offset=page.next;}while(offset<capacity);
  listBox.replaceChildren();
  for(const k of keyIds){
   const groups=[];
   for(const type of ['clicks','seconds']){
    const values=items.filter(v=>Number(v.key)===k&&v[type]>0).sort((a,b)=>a[type]-b[type]);
    const runs=[];
    for(const v of values){const last=runs[runs.length-1];
     if(last&&v[type]===last[last.length-1][type]+1&&JSON.stringify([v.action,v.params])===JSON.stringify([last[0].action,last[0].params]))last.push(v);
     else runs.push([v]);
    }
    if(runs.length)groups.push(h('section',{class:'button-group'},h('h3',{},t(type==='clicks'?'btn.click':'btn.hold')),runs.map(run=>run.length===1?row(run[0]):
     h('details',{class:'button-range'},h('summary',{},h('b',{},t(type==='clicks'?'btn.click_range':'btn.hold_range',{a:run[0][type],b:run[run.length-1][type]})),h('span',{},actionText(run[0])),h('span',{class:'help'},t('btn.expand'))),run.map(row)))));
   }
   listBox.append(h('section',{class:'stack'},h('h3',{},keyName(k)),groups.length?groups:h('div',{class:'empty'},t('btn.empty'))));
  }
 }
 const save=h('button',{type:'submit',class:'btn primary'},t('common.save'));
 editorCard.append(h('h2',{i18n:'btn.edit'}),keyHost,editorHost,previewBox,h('div',{class:'form-actions'},save));
 editorCard.addEventListener('input',preview);editorCard.addEventListener('change',preview);editorCard.addEventListener('click',()=>preview());
 editorCard.addEventListener('submit',e=>{e.preventDefault();if(!editorCard.reportValidity())return;
  run(save,async()=>{const a=editor.get();if(a.action==='none')throw Error(t('btn.pick_action'));
   await command('buttons.set',{...selected(),...a});await load();},'common.saved');
 });
 let filterStatus,filterHours;
 function filterCards(){
  if(dev.model!=='A1'||!UI.caps.actions.includes('filter.get'))return [];
  filterStatus=h('p',{'data-filter-status':''});filterHours=h('input',{type:'number',min:1,max:20000,required:true,'data-filter-hours':''});
  const form=h('form',{class:'stack'},filterStatus,info('filter.hint'),h('label',{class:'field'},h('span',{i18n:'filter.lifetime'}),filterHours),
   h('div',{class:'form-actions'},h('button',{type:'submit',class:'btn primary'},t('common.save')),
    h('button',{type:'button',class:'btn ghost',onclick:e=>run(e.currentTarget,async()=>{if(!window.confirm(t('filter.reset_confirm')))return;await command('filter.reset',{});await loadFilter();},null)},t('op.filter_reset'))));
  form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;run(null,async()=>{await command('filter.set',{lifetime_hours:Number(filterHours.value)});await loadFilter();},'common.saved');});
  return [card('filter.title',null,form)];
 }
 async function loadFilter(){if(!filterStatus)return;const f=await command('filter.get');filterHours.value=f.lifetime_hours;filterStatus.textContent=t('filter.status',{used:(f.used_seconds/3600).toFixed(1),remaining:f.remaining_percent});}
 preview();
 return {el:h('div',{class:'stack'},pageHead('nav.buttons','btn.lead'),card('btn.current',null,listBox),
  card('btn.recovery',null,h('div',{class:'button-mapping'},h('b',{},t('btn.hold_full',{n:5})),h('span',{},t('btn.reset_wifi'))),
   h('div',{class:'button-mapping'},h('b',{},t('btn.hold_full',{n:10})),h('span',{},t('op.10'))),info(dev.model==='A1'?'btn.reset_note_a1':'btn.reset_note')),editorCard,...filterCards()),
  async show(){await load();await loadFilter();preview();}};
}

/* ---------- Night mode ---------- */
function nightPage(dev){
 const modern=UI.caps?.actions?.includes('fan.mode.set');
 const isM1=dev.model==='M1',list=h('div',{class:'stack'});
 let model=[];
 function window(cfg,i){
  const days=daysPicker('ndays'+i,cfg.days),start=h('input',{type:'time',value:hhmm(cfg.start)}),end=h('input',{type:'time',value:hhmm(cfg.end)});
  const dim=switchRow(null,isM1?'night.screen':'night.light','night.light_desc');dim.querySelector('input').checked=!!cfg.light;
  const bright={brightness:Math.round(cfg.brightness*100/255)};
  const [bOut,bRange]=slider(bright,'brightness',{min:0,max:100,step:isM1?25:1,fmt:v=>v?v+'%':t('state.off')});
  const speed={max_speed:cfg.max_speed,min_speed:cfg.min_speed??0,fallback_speed:cfg.fallback_speed??30};
  const [fOut,fRange]=slider(speed,'max_speed',{min:1});
  const fan=switchRow(null,'night.fan','night.fan_desc'),block=switchRow(null,'night.block_t','night.block_desc');
  fan.querySelector('input').checked=!!cfg.fan;block.querySelector('input').checked=!!cfg.block_start;
  const automatic=[];
  if(modern)for(const key of ['min_speed','fallback_speed']){const [out,range]=slider(speed,key,{min:0,max:100});automatic.push(h('div',{class:'row between'},h('span',{i18n:key==='min_speed'?'auto.minimum':'auto.fallback'}),out),range);}
  const extra=isM1?[]:[fan,h('div',{class:'field'},h('div',{class:'row between'},h('span',{class:'label',i18n:'night.fan_max'}),fOut)),fRange,...(modern?automatic:[block])];
  const field=h('fieldset',{},h('legend',{},t('night.period',{n:i+1})),
   h('div',{class:'field'},h('div',{class:'row between'},h('span',{class:'label',i18n:'sch.repeat'}),presetDays(days)),days),
   h('div',{class:'fields'},h('label',{class:'field'},h('span',{i18n:'night.start'}),start),h('label',{class:'field'},h('span',{i18n:'night.end'}),end)),
   dim,h('div',{class:'field'},h('div',{class:'row between'},h('span',{class:'label',i18n:'night.light_max'}),bOut)),bRange,...extra,
   h('div',{class:'form-actions'},h('button',{type:'button',class:'btn ghost',onclick:()=>{model.splice(i,1);draw();}},icon('trash'),h('span',{i18n:'common.delete'}))));
  // One listener writes the whole window back, so no control can drift.
  const collect=()=>{
   cfg.days=days.mask();cfg.start=toMinutes(start.value);cfg.end=toMinutes(end.value);
   cfg.light=Number(dim.querySelector('input').checked);cfg.brightness=Math.round(bright.brightness*255/100);
   if(!isM1){cfg.fan=Number(fan.querySelector('input').checked);cfg.block_start=Number(block.querySelector('input').checked);cfg.max_speed=Number(speed.max_speed);if(modern){cfg.min_speed=Number(speed.min_speed);cfg.fallback_speed=Number(speed.fallback_speed);}}
  };
  field.addEventListener('input',collect);field.addEventListener('change',collect);
  return field;
 }
 function draw(){
  list.replaceChildren(...(model.length?model.map(window):[h('div',{class:'empty'},t('night.empty'))]));
 }
 const add=h('button',{type:'button',class:'btn'},icon('plus'),h('span',{i18n:'night.add_btn'}));
 add.onclick=()=>run(add,async()=>{if(model.length>=4)throw Error(t('common.max',{n:4}));
  model.push({days:127,fan:isM1?0:1,light:1,max_speed:30,min_speed:0,fallback_speed:30,brightness:0,block_start:0,start:1320,end:420});draw();},null);
 const save=h('button',{type:'button',class:'btn primary'},h('span',{i18n:'common.save'}));
 save.onclick=()=>run(save,async()=>{await command('night.set',{windows:model});toast(t('common.saved'));});
 return {el:h('div',{class:'stack'},pageHead('nav.sleep','night.lead'),card('night.list',null,list,
  info('night.hint'),h('div',{class:'form-actions'},add,save))),
  async show(){model=clone((await command('night.get')).windows||[]);draw();}};
}

window.automationPages=dev=>{
 const caps=(UI.caps&&UI.caps.actions)||[];
 const pages={};
 if(!caps.length||caps.includes('schedules.get'))pages.schedule=schedulePage(dev);
 if(caps.includes('buttons.set')&&dev.hasButtons)pages.buttons=buttonsPage(dev);
 if(caps.includes('night.get'))pages.night=nightPage(dev);
 return pages;
};
})();
<\/script>
<script>// Embedded pages use the complete shared settings initialization and product UI.
(()=>{
 UI.embedded=true;UI.embeddedRoute='home';
 document.addEventListener('click',event=>{
  const link=event.target.closest('a[href^="#"]');if(!link)return;
  const route=link.getAttribute('href').slice(1);
  if(route!=='home'&&!/^settings\\/[a-z]+$/.test(route))return;
  event.preventDefault();UI.embeddedRoute=route;UI.showRoute();
 });
 const start=UI.start;
 UI.start=async dev=>{
  I18N.set('zh-CN');
  await start(dev);
  const header=document.querySelector('.topbar');if(header)header.hidden=true;
 };
 window.addEventListener('storage',event=>{
  if(event.key!=='phicomm.appearance')return;
  if(event.newValue==='system'||!event.newValue)delete document.documentElement.dataset.theme;
  else document.documentElement.dataset.theme=event.newValue;
 });
 const style=document.createElement('style');style.textContent='body{max-width:none;margin:0;padding:0 0 8px}.banner{margin-top:0}@media(max-width:600px){.grid{grid-template-columns:minmax(0,1fr)}.metric .stat{display:flex;flex-wrap:wrap;align-items:baseline;column-gap:4px}.metric .stat small{margin-left:0}}';document.head.append(style);
 new ResizeObserver(()=>parent.postMessage({type:'device-height',height:Math.ceil(document.body.getBoundingClientRect().height)+8},parent.location.origin)).observe(document.body);
})();

/* TC1 smart power strip page: six socket tiles, power trend and the metering
 * settings the strip alone has. */
(()=>{
'use strict';
const {t}=I18N;
const {$,h,icon,toast,run,onSubmit,switchRow,summary,card,pageHead,seg}=UI;
const pendingSockets=new Map();
const names=()=>(UI.state&&UI.state.socket_names)||Array.from({length:6},(_,i)=>t('tc1.socket_n',{n:i+1}));

/* ---------- Home: sockets ---------- */
const tiles=[];
for(let i=0;i<6;i++){
 const name=h('b',{class:'name'}),state=h('span',{class:'state'});
 const tile=h('button',{type:'button',class:'tile',id:'socket'+i,'aria-pressed':'false'},
  h('span',{class:'tile-top'},icon('plug'),h('span',{class:'idx num'},String(i+1))),name,state);
 tile.onclick=()=>toggle(i);
 const edit=h('button',{type:'button',class:'btn ghost icon tile-edit','aria-label':t('tc1.rename')},icon('edit'));
 edit.onclick=e=>{e.stopPropagation();rename(i);};
 tiles.push({tile,name,state});
 $('tiles').append(h('div',{class:'tile-wrap'},tile,edit));
}
function lock(){for(let i=0;i<tiles.length;i++){const pending=pendingSockets.has(i)||pendingSockets.has('all');tiles[i].tile.disabled=pending;tiles[i].tile.setAttribute('aria-busy',String(pending));}$('allOn').disabled=pendingSockets.size>0;$('allOff').disabled=pendingSockets.size>0;}
async function setStates(params){
 const key=params.index===undefined?'all':params.index;if(pendingSockets.has(key)||(key==='all'&&pendingSockets.size)||pendingSockets.has('all'))return;
 pendingSockets.set(key,params.on);lock();
 const states=Array.from(UI.state.socket_states||[],Boolean);if(params.index===undefined)states.fill(params.on);else states[params.index]=params.on;
 UI.state={...UI.state,socket_states:states};renderSockets(UI.state);
 try{await api('/outlet',params);}
 catch(e){toast(e.message,true);}
 finally{pendingSockets.delete(key);lock();UI.reload().catch(()=>{});}
}
function toggle(i){setStates({index:i,on:!UI.state.socket_states[i]});}
$('allOn').onclick=()=>setStates({on:true});
$('allOff').onclick=()=>setStates({on:false});
async function rename(i){
 const input=h('input',{value:names()[i],maxLength:63,required:true});
 const d=h('dialog',{},h('form',{method:'dialog',class:'stack'},h('h2',{},t('tc1.rename')),
  h('label',{class:'field'},h('span',{},t('tc1.socket_n',{n:i+1})),input),
  h('div',{class:'form-actions'},h('button',{class:'btn primary',value:'ok'},t('common.save')),
   h('button',{class:'btn ghost',value:'cancel',formnovalidate:true},t('common.cancel')))));
 document.body.append(d);d.showModal();input.select();
 d.addEventListener('close',()=>{if(d.returnValue==='ok'&&input.value.trim())run(null,()=>api('/socketNames',{index:i,name:input.value.trim()}).then(UI.reload),'common.saved');d.remove();});
}
function renderSockets(s){
 lock();
 const states=Array.from(s.socket_states||[0,0,0,0,0,0]);
 for(const [key,on] of pendingSockets){if(key==='all')states.fill(on);else states[key]=on;}
 UI.state={...s,socket_states:states};
 $('onCount').textContent=t('tc1.on_count',{n:states.filter(Boolean).length});
 states.forEach((v,i)=>{const x=tiles[i];x.tile.setAttribute('aria-pressed',String(!!v));
  x.name.textContent=(s.socket_names||[])[i]||t('tc1.socket_n',{n:i+1});x.state.textContent=t(v?'tc1.on':'tc1.off')+(pendingSockets.has(i)||pendingSockets.has('all')?' · '+t('control.syncing'):'');});
 for(const id of ['childLock','childLockDevice'])$(id).checked=!!s.child_lock;
 for(const id of ['ledEnabled','ledEnabledDevice'])$(id).checked=!!s.led_enabled;
}
for(const id of ['childLock','childLockDevice'])$(id).onchange=e=>run(null,()=>UI.control('child_lock.set',{enabled:e.target.checked},{child_lock:e.target.checked}));
for(const id of ['ledEnabled','ledEnabledDevice'])$(id).onchange=e=>run(null,()=>UI.control('indicator.set',{enabled:e.target.checked},{led_enabled:e.target.checked}));

/* ---------- Home: power trend ---------- */
const powerHistory=[];
async function pollPower(){
 try{
  if(document.hidden||$('homePage').hidden)return;
  const p=await api('/power');
  $('watts').firstChild.textContent=Number(p.power_watts||0).toFixed(1);
  $('energy').textContent=(p.energy_kwh<1?(p.energy_kwh*1000).toFixed(1)+' Wh':p.energy_kwh.toFixed(3)+' kWh');
  powerHistory.push(Number(p.power_watts)||0);if(powerHistory.length>60)powerHistory.shift();
  const values=powerHistory;
  const max=Math.max(...values,1),min=Math.min(...values),top=max*1.25;
  $('peak').textContent=max+' W';$('sparkRange').textContent=min+'–'+max+' W';
  const points=values.map((y,i)=>(i/Math.max(values.length-1,1)*300).toFixed(1)+','+(62-(y/top)*58).toFixed(1)).join(' ');
  $('spark').innerHTML='<polyline points="0,64 '+points+' 300,64" class="area"/><polyline points="'+points+'" class="line"/>';
 }catch{}
 finally{setTimeout(pollPower,2000);}
}

/* ---------- Settings: general ---------- */
const nameInputs=Array.from({length:6},(_,i)=>h('input',{maxLength:63,required:true}));
$('nameFields').append(...nameInputs.map((input,i)=>h('label',{class:'field'},h('span',{},t('tc1.socket_n',{n:i+1})),input)));
UI.onSubmit($('socketNamesForm'),async()=>{
 const s=UI.state;
 for(let i=0;i<6;i++)if(nameInputs[i].value!==s.socket_names[i])await api('/socketNames',{index:i,name:nameInputs[i].value});
},'common.saved');
UI.onSubmit($('reportForm'),()=>api('/mqtt/report/freq',{seconds:Number($('reportSeconds').value)}));
UI.onSubmit($('coefForm'),()=>api('/power/coefficient',String($('coef').value)));
let initialized=false;

UI.start({
 model:'TC1',kindKey:'kind.tc1',icon:'plug',mqttHostMax:127,factoryReset:false,
 otaName:'phicomm_tc1_a1.ota.bin.signed',haHintKey:'mqtt.ha_tc1',otaHintKey:'fw.hint_tc1',buttonHintKey:'sys.hint_tc1',
 scheduleLead:'sch.lead_tc1',interval:3000,hasButtons:true,
 groups:[['grp.network',['network','mqtt']],['grp.device',['device']],['grp.auto',['schedule','buttons']],['grp.system',['firmware','diagnostics','logs','maintenance']]],
 nav:{network:'nav.wifi',mqtt:'nav.mqtt',device:'nav.general',schedule:'nav.schedule',buttons:'nav.buttons',firmware:'nav.firmware',diagnostics:'nav.diagnostics',logs:'nav.logs',maintenance:'nav.maintenance'},
 pages:{device:{}},
 diagGroups:[['diag.g_sockets',['socket_names','socket_states','child_lock','led_enabled']],
  ['diag.g_power',['report_seconds','powerCoefficientX100']],
  ['diag.g_time',['time_synced','utc_time']],['diag.g_lan',['mask','gateway']]],
 healthChecks:s=>[['diag.c_clock',s.time_synced?'ok':'warn',t(s.time_synced?'s.synced':'s.syncing')],
  ['diag.c_memory',s.free_memory>16384?'ok':'warn',(Math.round((s.free_memory||0)/1024))+' KB']],
 chips:s=>s.time_synced?[]:[h('span',{class:'chip'},h('span',{class:'dot warn'}),h('span',{i18n:'chip.clock'}))],
 onStatus:s=>{
  renderSockets(s);
  if(!initialized){nameInputs.forEach((x,i)=>x.value=(s.socket_names||[])[i]||'');
   $('reportSeconds').value=s.report_seconds;$('coef').value=s.powerCoefficientX100;initialized=true;}
 }
});
I18N.onChange(()=>{
 nameInputs.forEach((x,i)=>{x.previousSibling.textContent=t('tc1.socket_n',{n:i+1});});
 tiles.forEach((x,i)=>{x.tile.nextSibling.setAttribute('aria-label',t('tc1.rename'));
  if(UI.state)x.name.textContent=(UI.state.socket_names||[])[i]||t('tc1.socket_n',{n:i+1});});
});
pollPower();
})();
<\/script>
</body>
</html>
`,a1:`<!doctype html>
<html lang="zh-CN">
<head>
<meta name="referrer" content="no-referrer"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>A1 空气净化器</title>
<style>/* Unified WebUI design language for TC1, A1 and M1.
 * One stylesheet for all three offline pages; no CDN, no web fonts.
 * Tokens, then layout, then components, then per-product pages. */
:root{color-scheme:light dark;-webkit-tap-highlight-color:transparent;
 --bg:#f4f6f9;--surface:#fff;--surface-muted:#eef1f5;--text:#1d2430;--muted:#5f6b7c;--border:#dbe0e8;
 --accent:#305ed4;--accent-text:#fff;--accent-soft:#e6edfc;
 --danger:#b8353c;--danger-soft:#fbe9ea;--success:#26734c;--success-soft:#e3f3ea;--warn:#9a5b00;--warn-soft:#fdf1dc;
 --focus:#7a9cf5;--radius:12px;--radius-s:8px;--shadow:0 1px 2px rgba(20,30,50,.06),0 4px 16px rgba(20,30,50,.04);
 font-family:Inter,system-ui,-apple-system,"Segoe UI","PingFang SC","Microsoft YaHei",sans-serif;color:var(--text);background:var(--bg)}
:root[data-theme=dark]{--bg:#0f131a;--surface:#181e28;--surface-muted:#222a37;--text:#e8edf5;--muted:#a1adbf;--border:#323c4e;
 --accent:#91afff;--accent-text:#111d37;--accent-soft:#1f2b48;--danger:#ff9da4;--danger-soft:#3a1f24;--success:#80d3a5;--success-soft:#173226;
 --warn:#f2c46b;--warn-soft:#3a2e16;--focus:#91afff;--shadow:none}
@media(prefers-color-scheme:dark){:root:not([data-theme=light]){--bg:#0f131a;--surface:#181e28;--surface-muted:#222a37;--text:#e8edf5;--muted:#a1adbf;--border:#323c4e;
 --accent:#91afff;--accent-text:#111d37;--accent-soft:#1f2b48;--danger:#ff9da4;--danger-soft:#3a1f24;--success:#80d3a5;--success-soft:#173226;
 --warn:#f2c46b;--warn-soft:#3a2e16;--focus:#91afff;--shadow:none}}
*{box-sizing:border-box}
body{max-width:1080px;margin:0 auto;padding:20px 32px 96px;line-height:1.5;font-size:15px}
h1{font-size:20px;margin:0;letter-spacing:-.3px}h2{font-size:16px;margin:0;font-weight:650}h3{font-size:14px;margin:0 0 8px;font-weight:650}
p{margin:0}a{color:var(--accent)}[hidden]{display:none!important}
.muted,.help{color:var(--muted)}.help{font-size:13px}.small{font-size:13px}.num{font-variant-numeric:tabular-nums}
:focus-visible{outline:3px solid var(--focus);outline-offset:2px}
svg.i{width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;flex:none}

/* Header */
.topbar{display:flex;flex-wrap:wrap;align-items:center;gap:12px 20px;padding:4px 0 16px}
.brand{display:flex;align-items:center;gap:12px;min-width:0;flex:1}
.brand .logo{width:40px;height:40px;border-radius:10px;background:var(--accent-soft);color:var(--accent);display:grid;place-items:center}
.brand .kind{font-size:12px;color:var(--muted)}
.prefs{display:flex;gap:6px}.prefs select{font:inherit;font-size:12px;padding:4px 6px;border:1px solid var(--border);border-radius:6px;background:var(--surface);color:var(--text)}
.chips{display:flex;flex-wrap:wrap;gap:8px;width:100%}
.chip{display:inline-flex;align-items:center;gap:6px;padding:4px 10px;border-radius:999px;background:var(--surface);border:1px solid var(--border);font-size:13px;color:var(--muted);max-width:100%}
.chip b{color:var(--text);font-weight:600}
.dot{width:8px;height:8px;border-radius:50%;background:var(--muted);flex:none}
.dot.ok{background:var(--success)}.dot.warn{background:var(--warn)}.dot.bad{background:var(--danger)}
.dot.live{animation:pulse 2s infinite}
@keyframes pulse{50%{opacity:.35}}
.banner{display:flex;gap:10px;align-items:center;padding:10px 14px;border-radius:var(--radius-s);margin:0 0 16px;font-size:14px}
.banner.bad{background:var(--danger-soft);color:var(--danger)}.banner.warn{background:var(--warn-soft);color:var(--warn)}.banner.ok{background:var(--success-soft);color:var(--success)}.banner.info{background:var(--accent-soft);color:var(--accent)}

/* Tabs */
.tabs{display:flex;gap:4px;border-bottom:1px solid var(--border);margin:0 0 20px}
.tabs a{display:flex;align-items:center;gap:8px;padding:10px 14px;color:var(--muted);text-decoration:none;border-bottom:2px solid transparent;margin-bottom:-1px;font-weight:550}
.tabs a[aria-current=page]{color:var(--accent);border-bottom-color:var(--accent)}

/* Cards and grids */
.grid{display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(300px,1fr))}
.card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:20px;box-shadow:var(--shadow);min-width:0}
.card-head{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:16px}
.broker-card-head{flex-wrap:wrap}
.broker-platform-link{flex-shrink:0;color:var(--accent);background:var(--surface-muted)}
.stack>*+*{margin-top:16px}
.row{display:flex;align-items:center;gap:12px;flex-wrap:wrap}.row.between{justify-content:space-between}.grow{flex:1;min-width:0}
.home{display:grid;gap:16px}

/* Buttons */
.btn{position:relative;font:inherit;font-size:14px;font-weight:600;display:inline-flex;align-items:center;justify-content:center;gap:6px;min-height:40px;padding:8px 16px;border-radius:var(--radius-s);border:1px solid var(--border);background:var(--surface);color:var(--text);cursor:pointer;text-decoration:none;width:auto}
.btn:hover{background:var(--surface-muted)}
.btn.primary{background:var(--accent);color:var(--accent-text);border-color:transparent}.btn.primary:hover{filter:brightness(1.08)}
.btn.danger{color:var(--danger);border-color:var(--danger)}.btn.danger:hover{background:var(--danger-soft)}
.btn.ghost{border-color:transparent;background:transparent;color:var(--muted)}.btn.ghost:hover{background:var(--surface-muted);color:var(--text)}
.btn.icon{padding:6px;min-height:32px;width:32px}
.btn:disabled,.btn[aria-busy=true]{opacity:.55;cursor:not-allowed}
/* Keep pending feedback out of flex flow so buttons and wrapped rows stay put. */
.btn[aria-busy=true]::before{content:"";position:absolute;left:25%;bottom:3px;width:50%;height:2px;border-radius:1px;background:currentColor;animation:pulse 1s linear infinite;pointer-events:none}

/* Segmented control */
.seg{display:inline-flex;background:var(--surface-muted);border-radius:var(--radius-s);padding:3px;gap:2px;flex-wrap:wrap}
.seg button{font:inherit;font-size:14px;border:0;background:transparent;color:var(--muted);padding:7px 14px;border-radius:6px;cursor:pointer;min-height:36px;font-weight:550;width:auto;margin:0}
.seg button[aria-pressed=true]{background:var(--surface);color:var(--text);box-shadow:0 1px 3px rgba(0,0,0,.12)}
.seg.full{display:flex}.seg.full button{flex:1}
.seg button:disabled{cursor:not-allowed;opacity:.5}

/* Switch */
.switch{display:flex;align-items:center;justify-content:space-between;gap:16px;cursor:pointer;min-height:44px}
.switch .text{min-width:0}.switch .text b{display:block;font-weight:600}.switch .text span{font-size:13px;color:var(--muted)}
.switch input{appearance:none;flex:none;width:44px;height:26px;min-height:26px;border-radius:13px;background:var(--border);position:relative;cursor:pointer;margin:0;transition:background .15s}
.switch input::after{content:"";position:absolute;top:3px;left:3px;width:20px;height:20px;border-radius:50%;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
.switch input:checked{background:var(--accent)}.switch input:checked::after{transform:translateX(18px)}
.switch input:disabled{opacity:.5}
.switch+.switch{border-top:1px solid var(--border);padding-top:8px;margin-top:8px}

/* Fields */
.field{display:block}.field>span{display:block;font-size:13px;font-weight:600;margin-bottom:6px}
.field .help{margin-top:6px}
input[type=text],input[type=password],input[type=number],input[type=url],input[type=time],input[type=date],input[type=datetime-local],input:not([type]),select,textarea{font:inherit;width:100%;min-height:40px;padding:8px 12px;border:1px solid var(--border);border-radius:var(--radius-s);background:var(--surface);color:var(--text)}
textarea{min-height:120px;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:13px}
input[type=range]{width:100%;min-height:28px;accent-color:var(--accent);margin:0;padding:0;border:0;background:transparent}
input[type=color]{width:40px;height:40px;min-height:40px;padding:2px;border:1px solid var(--border);border-radius:var(--radius-s);background:var(--surface);cursor:pointer}
input[type=file]{padding:8px}
.fields{display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(220px,1fr))}
.form-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:20px}
.input-unit{display:flex;align-items:center;gap:8px}.input-unit input{flex:1}.input-unit em{font-style:normal;color:var(--muted);font-size:13px;white-space:nowrap}
.sentence{display:flex;flex-wrap:wrap;align-items:center;gap:8px;font-size:14px}
.sentence input{width:90px;min-height:36px;padding:6px 8px}
details.more{border-top:1px solid var(--border);margin-top:20px;padding-top:12px}
details.more>summary{cursor:pointer;color:var(--muted);font-size:14px;font-weight:600;list-style:none;display:flex;align-items:center;gap:6px}
details.more>summary::before{content:"\\203A";display:inline-block;transition:transform .15s;font-size:18px;line-height:1}
details.more[open]>summary::before{transform:rotate(90deg)}
details.more>*:not(summary){margin-top:16px}
details.info{font-size:13px;color:var(--muted);margin-top:20px}
details.info>summary{cursor:pointer;display:inline-flex;align-items:center;gap:4px;list-style:none}
details.info>summary svg.i{width:15px;height:15px}
details.info>summary::-webkit-details-marker{display:none}
details.info>p{margin-top:6px;padding:10px 12px;background:var(--surface-muted);border-radius:var(--radius-s)}
summary::-webkit-details-marker{display:none}

/* Read-only display summary */
.summary{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px 20px;background:var(--surface-muted);border-radius:var(--radius-s);padding:14px 16px;margin:0}
.summary dt{font-size:12px;color:var(--muted)}.summary dd{margin:2px 0 0;font-weight:600;overflow-wrap:anywhere;display:flex;align-items:center;gap:6px}

/* Settings layout */
.settings{display:grid;grid-template-columns:200px minmax(0,1fr);gap:24px;align-items:start}
.side{position:sticky;top:12px;display:flex;flex-direction:column;gap:2px}
.side .group{font-size:11px;text-transform:uppercase;letter-spacing:.6px;color:var(--muted);margin:14px 10px 4px;font-weight:700}
.side .group:first-child{margin-top:0}
.side a{padding:8px 10px;border-radius:var(--radius-s);color:var(--text);text-decoration:none;font-size:14px}
.side a:hover{background:var(--surface-muted)}.side a[aria-current=page]{background:var(--accent-soft);color:var(--accent);font-weight:600}
.page-title{margin:0 0 4px;font-size:18px}.page-lead{margin:0 0 16px;color:var(--muted);font-size:14px}
.section-label{font-size:12px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin:0 0 10px}

/* Lists */
.list{display:flex;flex-direction:column;gap:8px}
.item{display:flex;align-items:center;gap:12px;padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius-s);background:var(--surface);min-width:0}
.item .grow b{display:block}.item .grow span{font-size:13px;color:var(--muted)}
.item .time{font-size:20px;min-width:64px}
.empty{padding:20px;text-align:center;color:var(--muted);border:1px dashed var(--border);border-radius:var(--radius-s);font-size:14px}
.badge{display:inline-flex;align-items:center;gap:4px;font-size:12px;font-weight:600;padding:2px 8px;border-radius:999px;background:var(--surface-muted);color:var(--muted);white-space:nowrap}
.badge.ok{background:var(--success-soft);color:var(--success)}.badge.warn{background:var(--warn-soft);color:var(--warn)}.badge.bad{background:var(--danger-soft);color:var(--danger)}.badge.info{background:var(--accent-soft);color:var(--accent)}
.subcard{border:1px solid var(--border);border-radius:var(--radius-s);padding:16px;background:var(--surface)}
.subcard h3{margin-bottom:12px}
fieldset{border:1px solid var(--border);border-radius:var(--radius-s);padding:16px;margin:16px 0;min-width:0}
fieldset.bare{border:0;padding:0;margin-left:0;margin-right:0;margin-bottom:0;min-width:0}
fieldset.bare:disabled{opacity:.5}
legend{padding:0 8px;font-size:14px}
.table{width:100%;border-collapse:collapse;font-size:14px}
.table th{text-align:left;font-size:12px;color:var(--muted);font-weight:600;padding:6px 8px;border-bottom:1px solid var(--border)}
.table td{padding:8px 8px;border-bottom:1px solid var(--border);vertical-align:middle}
.table tr:last-child td{border-bottom:0}

/* Weekday chips */
.days{display:flex;gap:6px;flex-wrap:wrap}
.days label{position:relative;margin:0}
.days input{position:absolute;opacity:0;inset:0;margin:0;cursor:pointer;width:100%;min-height:100%}
.days span{display:grid;place-items:center;min-width:40px;height:36px;padding:0 8px;border-radius:999px;border:1px solid var(--border);font-size:13px;font-weight:600;color:var(--muted)}
.days input:checked+span{background:var(--accent);border-color:var(--accent);color:var(--accent-text)}
.days input:focus-visible+span{outline:3px solid var(--focus);outline-offset:2px}

/* Option cards */
.options{display:grid;gap:10px;grid-template-columns:repeat(auto-fit,minmax(150px,1fr))}
.option{position:relative;border:1px solid var(--border);border-radius:var(--radius-s);padding:12px 14px;cursor:pointer;background:var(--surface);display:block;margin:0}
.option input{position:absolute;opacity:0}
.option b{display:block;font-size:14px}.option span{font-size:12px;color:var(--muted)}
.option:has(input:checked){border-color:var(--accent);background:var(--accent-soft);box-shadow:inset 0 0 0 1px var(--accent)}
.option:has(input:focus-visible){outline:3px solid var(--focus);outline-offset:2px}

/* Toasts and dialogs */
.toasts{position:fixed;left:50%;bottom:20px;transform:translateX(-50%);display:flex;flex-direction:column;gap:8px;z-index:20;width:min(420px,calc(100% - 32px))}
.toast{padding:12px 16px;border-radius:var(--radius-s);background:var(--text);color:var(--bg);font-size:14px;box-shadow:0 6px 24px rgba(0,0,0,.2);animation:rise .2s}
.toast.bad{background:var(--danger);color:#fff}
@keyframes rise{from{transform:translateY(8px);opacity:0}}
dialog{border:1px solid var(--border);border-radius:var(--radius);background:var(--surface);color:var(--text);padding:24px;max-width:420px;width:calc(100% - 32px)}
dialog::backdrop{background:rgba(10,15,25,.45)}
dialog h2{margin-bottom:8px}dialog p{color:var(--muted);font-size:14px}

/* Stats and bars */
.stat{font-size:40px;font-weight:650;letter-spacing:-1px;line-height:1.1;font-variant-numeric:tabular-nums}
.stat small{font-size:15px;font-weight:500;color:var(--muted);letter-spacing:0;margin-left:4px}
.bar{height:8px;border-radius:4px;background:var(--surface-muted);overflow:hidden;position:relative}
.bar i{position:absolute;inset:0 auto 0 0;background:var(--accent);border-radius:4px;transition:width .6s}
.bar i.target{background:transparent;border-right:2px solid var(--text);border-radius:0}
.eyebrow{font-size:12px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.5px}
.label{font-size:13px;font-weight:600}
progress{width:100%;height:8px;accent-color:var(--accent)}
pre{overflow:auto;white-space:pre-wrap;overflow-wrap:anywhere;font-size:12px;background:var(--surface-muted);padding:14px;border-radius:var(--radius-s);max-height:360px}

/* Diagnostics */
.health{display:grid;gap:8px;grid-template-columns:repeat(auto-fit,minmax(230px,1fr))}
.health .item{padding:10px 12px}
.diag{display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(240px,1fr))}
.diag details{border:1px solid var(--border);border-radius:var(--radius-s);padding:12px 14px;background:var(--surface)}
.diag summary{cursor:pointer;font-weight:600;display:flex;justify-content:space-between;gap:8px}
.diag dl{margin:8px 0 0;display:grid;grid-template-columns:auto 1fr;gap:4px 12px;font-size:13px}
.diag dt{color:var(--muted)}.diag dd{margin:0;text-align:right;overflow-wrap:anywhere}

/* ---------- A1 ---------- */
.a1-home{grid-template-columns:minmax(0,1.35fr) minmax(0,1fr);grid-template-areas:"fan panel" "fan auto" "filter filter" "light light"}
.fan-hero{display:flex;align-items:center;gap:20px}
.power{flex:none;width:96px;height:96px;border-radius:50%;border:0;display:grid;place-items:center;cursor:pointer;background:var(--surface-muted);color:var(--muted);box-shadow:inset 0 0 0 1px var(--border);transition:background .2s,box-shadow .2s,color .2s;width:96px}
.power svg{width:38px;height:38px}
.power[aria-pressed=true]{background:var(--accent);color:var(--accent-text);box-shadow:0 0 0 8px var(--accent-soft)}
.power:disabled{opacity:.5;cursor:not-allowed}
.mini-metrics{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
.mini-metrics>div{display:flex;flex-direction:column;gap:2px;padding:10px 12px;background:var(--surface-muted);border-radius:var(--radius-s)}
.mini-metrics b{font-size:18px}.mini-metrics small{font-size:12px;color:var(--muted);font-weight:500}
.mini-metrics .badge{align-self:flex-start}
.light-layout{display:flex;gap:28px;align-items:center}
.ring{width:180px;height:180px;flex:none}
.ring-effect-preview{display:flex;justify-content:center;align-items:center;gap:24px;min-height:196px}
.ring-preview-controls{width:min(280px,100%)}
.ring .ring-v{font-size:26px;font-weight:650;fill:var(--text)}.ring .ring-l{font-size:12px;fill:var(--muted)}
.ring .ring-anchor{font-size:7px;font-weight:700;fill:var(--muted)}
.ring .ring-guide{fill:none;stroke:var(--surface-muted);stroke-width:15}
.ring .ring-edge{fill:none;stroke:var(--muted);stroke-width:1;opacity:.45}
.ring .ring-light-segment{fill:none;stroke-width:12;stroke-linecap:butt;transition:stroke-opacity .12s linear}
.swatches{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px;align-items:center}
.swatch{width:32px;height:32px;min-height:32px;border-radius:50%;border:2px solid var(--surface);background:var(--c);box-shadow:0 0 0 1px var(--border);cursor:pointer;padding:0}
.swatch[aria-pressed=true]{box-shadow:0 0 0 2px var(--accent)}
.swatch:disabled,.swatches input:disabled{opacity:.35;cursor:not-allowed}
.swatches input[type=color]{width:32px;height:32px;min-height:32px;border-radius:50%;padding:3px;border:0;background:conic-gradient(red,yellow,lime,cyan,blue,magenta,red)}
.swatches input[type=color]::-webkit-color-swatch-wrapper{padding:0}
.swatches input[type=color]::-webkit-color-swatch{border:2px solid var(--surface);border-radius:50%}
.swatches input[type=color]::-moz-color-swatch{border:2px solid var(--surface);border-radius:50%}

/* ---------- M1 ---------- */
.verdict{display:flex;align-items:center;gap:16px;border-left:6px solid var(--border)}
.verdict[data-level=ok]{border-left-color:var(--success)}.verdict[data-level=warn]{border-left-color:var(--warn)}.verdict[data-level=bad]{border-left-color:var(--danger)}
.verdict[data-level=ok] .stat{color:var(--success)}.verdict[data-level=warn] .stat{color:var(--warn)}.verdict[data-level=bad] .stat{color:var(--danger)}
.fresh{display:flex;align-items:center;gap:8px;white-space:nowrap}
.metrics{display:grid;gap:16px;grid-template-columns:repeat(4,minmax(0,1fr))}
.metric .stat{margin:12px 0 14px}
.scale{position:relative;display:flex;gap:2px;height:6px}
.scale i{border-radius:3px;opacity:.55}.scale i.ok{background:var(--success)}.scale i.warn{background:var(--warn)}.scale i.bad{background:var(--danger)}
.scale b{position:absolute;top:-4px;width:4px;height:14px;margin-left:-2px;border-radius:2px;background:var(--text);box-shadow:0 0 0 2px var(--surface)}

/* ---------- TC1 ---------- */
.tc1-home{grid-template-columns:minmax(0,1.6fr) minmax(0,1fr);grid-template-areas:"sockets power" "sockets panel"}
.tiles{display:grid;gap:10px;grid-template-columns:repeat(3,minmax(0,1fr))}
.tile-wrap{position:relative}
.tile{width:100%;font:inherit;text-align:left;display:flex;flex-direction:column;gap:4px;padding:14px;min-height:110px;border-radius:var(--radius);border:1px solid var(--border);background:var(--surface-muted);color:var(--muted);cursor:pointer;transition:background .15s,border-color .15s;margin:0}
.tile .tile-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:auto}
.tile .idx{font-size:12px;font-weight:700;padding-right:26px}
.tile .name{color:var(--text);font-size:15px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.tile .state{font-size:13px;font-weight:600}
.tile[aria-pressed=true]{background:var(--accent-soft);border-color:var(--accent);color:var(--accent)}
.tile:disabled{cursor:progress;opacity:.7}
.tile-edit{position:absolute;top:8px;right:8px}
.spark{width:100%;height:64px;margin:12px 0 4px;display:block}
.spark .line{fill:none;stroke:var(--accent);stroke-width:2;vector-effect:non-scaling-stroke}
.spark .area{fill:var(--accent-soft);stroke:none}

@media(max-width:860px){.metrics{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:760px){
 body{padding:12px 14px 96px}
 .settings{grid-template-columns:1fr;gap:12px}
 .side{position:static;flex-direction:row;overflow-x:auto;gap:4px;padding-bottom:6px;scrollbar-width:none}
 .side .group{display:none}.side a{white-space:nowrap;border:1px solid var(--border)}
 .a1-home,.tc1-home{grid-template-columns:1fr;grid-template-areas:none}
 .a1-home>*,.tc1-home>*{grid-area:auto!important}
 .light-layout{flex-direction:column;align-items:stretch}.ring{align-self:center;width:150px;height:150px}.ring-effect-preview{flex-direction:column;gap:8px}
 .tiles{grid-template-columns:repeat(2,minmax(0,1fr))}
 .power{width:80px;height:80px}
 .verdict{flex-direction:column;align-items:flex-start}
 .card{padding:16px}.stat{font-size:34px}
 .brand h1{font-size:18px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
 .prefs select{max-width:84px}
}
@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}

/* Button mappings: gesture, concrete result, then row actions. */
.button-group{display:grid;gap:8px}.button-mapping{display:grid;grid-template-columns:minmax(110px,1fr) minmax(0,2fr) auto;gap:12px;align-items:center;padding:12px 0;border-bottom:1px solid var(--border)}
.button-result{overflow-wrap:anywhere}.button-range{border:1px solid var(--border);border-radius:var(--radius-s);padding:12px}.button-range summary{cursor:pointer;display:list-item}.button-range summary span{display:block;margin:6px 0 0 18px}.button-range summary .help{color:var(--accent)}
.button-preview{padding:14px;border-radius:var(--radius-s);background:var(--accent-soft);color:var(--accent);overflow-wrap:anywhere}
@media(max-width:600px){.button-mapping{grid-template-columns:1fr auto}.button-gesture{grid-column:1/-1}.button-mapping .row{justify-content:flex-end}.button-range .button-mapping{gap:6px}}

.copyright{margin-top:24px;padding:16px 0;border-top:1px solid var(--border);color:var(--muted);font-size:12px;line-height:1.8;text-align:center;overflow-wrap:anywhere}.copyright a{color:var(--accent);text-underline-offset:3px}

/* Fit the optional fifth M1 reading into the existing metric area. */
.metrics.with-co2{grid-template-columns:repeat(5,minmax(0,1fr))}
@media(max-width:860px){
 .metrics.with-co2{grid-template-columns:repeat(6,minmax(0,1fr));gap:10px}
 .metrics.with-co2>.metric{grid-column:span 2;min-width:0;padding:12px}
 .metrics.with-co2>.metric:nth-child(-n+2){grid-column:span 3}
 .metrics.with-co2 .stat{font-size:clamp(20px,5vw,32px)}
 .metrics.with-co2 .stat small{font-size:11px}
 .metrics.with-co2 .row.between{flex-wrap:wrap;gap:4px}
}

.co2-stale .scale i,.co2-stale .scale b{background:var(--muted)}
.co2-empty .scale b{display:none}
.metrics.with-co2 .label{min-width:0;overflow-wrap:anywhere}
.metrics.with-co2 .badge{max-width:100%;white-space:normal;overflow-wrap:anywhere}

/* Consistent title and badge rows regardless of label length or language. */
.metrics .metric-head{display:grid;grid-template-rows:auto auto;justify-items:start;align-content:start;gap:6px;min-height:66px}
.metrics .metric-head .label{line-height:20px;min-width:0;overflow-wrap:anywhere}
.metrics .metric-head .badge{justify-self:start;max-width:100%;white-space:normal;overflow-wrap:anywhere}
.metrics .metric{display:flex;flex-direction:column;min-width:0}
.metrics .metric .stat{margin-top:auto;padding-top:12px}
.metrics .metric-head{grid-template-rows:40px auto;min-height:72px}
.metrics .metric-head .label{align-self:start}

/* Schedule rows keep the duration, action and controls readable on phones. */
.schedule-task{display:grid;grid-template-columns:auto minmax(0,1fr) auto auto}
.schedule-task .grow{overflow-wrap:anywhere}
@media(max-width:600px){
 .schedule-task{grid-template-columns:minmax(0,1fr) auto}
 .schedule-task .time{grid-column:1;grid-row:1}
 .schedule-task>.badge{grid-column:2;grid-row:1}
 .schedule-task .grow{grid-column:1/-1;grid-row:2}
 .schedule-task>.row{grid-column:1/-1;justify-content:flex-end}
}

.binding-peer .grow{overflow-wrap:anywhere}
@media(max-width:600px){
 .binding-peer{flex-wrap:wrap}
 .binding-peer>.grow{flex-basis:calc(100% - 52px)}
}
</style>
<script>/* Apply the saved theme before first paint so the page does not flash light on
 * a dark display. The control itself lives in the shared header (ui.js). */
(()=>{
'use strict';
 const key='phicomm.appearance',choices=['system','light','dark'];
 let selected='system';try{const saved=localStorage.getItem(key);if(choices.includes(saved))selected=saved;}catch{}
 if(selected==='system')document.documentElement.removeAttribute('data-theme');
 else document.documentElement.dataset.theme=selected;
})();
<\/script></head>
<body>
<main id="homePage" class="home a1-home">
 <section class="card" style="grid-area:fan">
  <div class="fan-hero">
   <button id="power" class="power" type="button" aria-pressed="false" data-i18n-aria="a1.power"></button>
   <div class="grow">
    <div class="eyebrow" data-i18n="a1.fan"></div>
    <div class="stat" id="fanState">—</div>
    <p class="help" id="fanSub"></p>
   </div>
  </div>
  <div class="stack" style="margin-top:20px">
   <div class="row between"><span class="label" id="speedLabel" data-i18n="a1.speed"></span><b class="num" id="speedValue">—</b></div>
   <div id="fanMode" hidden></div>
   <div id="presets"></div>
   <input id="speed" type="range" min="1" max="100" step="1" data-i18n-aria="a1.speed">
   <div>
    <div class="bar"><i id="outBar" style="width:0"></i><i id="targetBar" class="target" style="width:0"></i></div>
    <p class="help" id="outText" style="margin-top:6px"></p>
   </div>
   <a id="autoSettings" class="btn" href="#settings/linkage" data-i18n="nav.linkage"></a>
   <details class="info"><summary><span data-i18n="common.more_info"></span></summary><p data-i18n="a1.fan_hint"></p></details>
  </div>
 </section>

 <section class="card" style="grid-area:panel">
  <div class="card-head"><h2 data-i18n="a1.panel"></h2><span id="panelBadge" class="badge"></span></div>
  <label class="switch"><span class="text"><b data-i18n="a1.child_lock"></b><span data-i18n="a1.child_lock_desc"></span></span><input type="checkbox" role="switch" id="childLock"></label>
 </section>

 <section class="card" id="autoCard" style="grid-area:auto"></section>

 <section class="card stack" id="filterCard" style="grid-area:filter" hidden>
  <div class="card-head"><h2 data-i18n="filter.title"></h2><span class="badge" id="filterBadge"></span></div>
  <div class="row between"><b class="stat num" id="filterRemaining">—</b><span class="help" id="filterUsage"></span></div>
  <div class="bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" data-i18n-aria="filter.title" id="filterProgress"><i id="filterBar"></i></div>
  <p class="help" data-i18n="filter.hint"></p>
  <details class="more"><summary data-i18n="filter.settings"></summary>
   <form id="filterForm" class="stack">
    <label class="field"><span data-i18n="filter.lifetime"></span><input id="filterLifetime" type="number" min="1" max="20000" step="1" required></label>
    <div class="form-actions"><button type="submit" class="btn" id="filterSave" data-i18n="common.save"></button></div>
   </form>
  </details>
  <div class="form-actions"><button class="btn" type="button" id="filterReset" data-i18n="filter.reset"></button></div>
 </section>

 <section class="card" style="grid-area:light">
  <div class="card-head"><div><h2 data-i18n="a1.ring"></h2><p class="help" id="effectNote"></p></div><span id="lightSave" class="help"></span></div>
  <div class="light-layout">
   <svg id="ring" class="ring ring-preview-svg" viewBox="0 0 200 200" aria-hidden="true"></svg>
   <div class="stack grow">
    <label class="switch"><span class="text"><b data-i18n="a1.ring_on"></b></span><input type="checkbox" role="switch" id="ledEnabled"></label>
    <label class="switch"><span class="text"><b data-i18n="a1.always_on"></b><span data-i18n="a1.always_on_desc"></span></span><input type="checkbox" role="switch" id="ledAlways"></label>
    <div><span class="label" data-i18n="a1.color"></span><div class="swatches" id="swatches"></div></div>
    <div><div class="row between"><span class="label" data-i18n="a1.brightness"></span><b class="num" id="brightValue"></b></div><input id="bright" type="range" min="0" max="255" step="1" data-i18n-aria="a1.brightness"></div>
   </div>
  </div>
 </section>
</main>

<div id="settingsPage" class="settings" hidden>
 <nav class="side" id="side" aria-label="Settings"></nav>
 <div id="pages">
  <div data-settings-page="device" class="stack">
   <div><h2 class="page-title" data-i18n="nav.general"></h2><p class="page-lead" data-i18n="gen.lead"></p></div>
   <div data-slot="name"></div>
   <section class="card">
    <div class="card-head"><h2 data-i18n="a1.panel"></h2><span id="panelBadge2" class="badge"></span></div>
    <label class="switch"><span class="text"><b data-i18n="a1.child_lock"></b><span data-i18n="a1.child_lock_desc"></span></span><input type="checkbox" role="switch" id="childLockDevice"></label>
    <p class="help" style="margin-top:8px" data-i18n="a1.button_hint"></p>
   </section>
   <section class="card" id="clockCard"></section>
   <div data-slot="auth"></div>
  </div>
  <div data-settings-page="light" class="stack"></div>
  <div data-settings-page="binding" class="stack"></div>
  <div data-settings-page="linkage" class="stack"></div>
 </div>
</div>

<footer class="copyright">Copyright &copy; Phicomm Community · <a href="https://github.com/phicomm-io/phicomm-community-firmware" target="_blank" rel="noopener noreferrer">固件仓库</a> · <a href="https://phicomm-io.github.io" target="_blank" rel="noopener noreferrer">项目网站</a></footer>
<script>/* EN / zh-CN strings, one [English, 简体中文] pair per key so the two stay in
 * step. The language follows the browser unless the user picks one in the
 * header (kept in localStorage, never sent to the device). */
(()=>{
'use strict';
const D={
'auto.mode':['Operating mode','运行模式'],'auto.auto':['Auto','自动'],'auto.manual':['Manual','手动'],
'auto.toggle':['Toggle auto/manual','切换自动／手动模式'],'auto.idle':['Idle','待机'],
'auto.minimum':['Minimum speed','最低风速'],'auto.maximum':['Maximum speed','最高风速'],
'auto.fallback':['Sensor offline speed','传感器离线风速'],
'auto.help':['Adjusts speed while powered on. Switching mode does not turn power on.','开机时按空气质量调速，切换模式不会自动开机。'],
'auto.mode_help':['Auto adjusts speed; manual restores your last manual speed.','自动模式按空气质量调速；手动模式恢复上次手动风速。'],
'auto.range_help':['A minimum of 0 allows idle. Offline speed is limited to this range. Night windows override this range. The ring and slider adjust the current maximum in auto mode.','最低风速设为 0 可停转待机。离线风速受上下限约束，夜间时段可单独设置。自动模式下滑环和滑块调整当前时段的风速上限。'],
 'auto.hysteresis_title':['Start and idle','启动与待机'],
'auto.hysteresis':['Enable start/idle hysteresis','启用启停回差'],
'auto.hysteresis_help':['Starts at the start threshold and idles at the target. Between them, keeps its current state.','达到启动阈值开始运行，降到目标值后停转待机，两者之间保持原运行状态。'],
'auto.hysteresis_detail':['Start must exceed target. Any selected pollutant can start the fan; all must meet target to idle. The chosen algorithm adjusts speed while running, with at least 1%. Condition duration and minimum interval apply. Offline speed takes over if sensors are unavailable. Switching off prevents restart.','启动阈值必须高于目标值。任一所选指标达到阈值即启动，全部达标后待机。运行时按所选算法调速，最低为 1%。条件持续时间和最短启停间隔同时生效。传感器离线时改用离线风速；手动关机后不主动启动。'],
'auto.target_pm':['PM2.5 target / idle at','PM2.5 目标值（待机）'],
'auto.start_pm':['PM2.5 start threshold','PM2.5 启动阈值'],
'auto.target_hcho':['Formaldehyde target / idle at','甲醛目标值（待机）'],
'auto.start_hcho':['Formaldehyde start threshold','甲醛启动阈值'],
'auto.hysteresis_invalid':['Start threshold must be greater than target for each selected pollutant.','所选指标的启动阈值必须高于目标值。'],
'auto.no_sensor':['No sensor available. The configured offline speed applies while powered on.','暂无可用传感器，开机时使用设定的离线风速。'],
'auto.low_pm':['PM2.5 at minimum speed','最低风速对应 PM2.5'],'auto.high_pm':['PM2.5 at maximum speed','最高风速对应 PM2.5'],
'auto.low_hcho':['Formaldehyde at minimum speed','最低风速对应甲醛'],'auto.high_hcho':['Formaldehyde at maximum speed','最高风速对应甲醛'],
'filter.title':['Estimated filter life','滤芯寿命预估'],
'filter.hint':['Counts fan running time only. Default: 4320 h (180 days continuously). Adjust to your filter specification; air quality and filter condition also affect replacement.','仅累计风机开启时间，默认 4320 小时（连续运行 180 天）。可按滤芯规格调整；更换时间还需结合空气质量和滤芯状态。'],
'filter.usage':['Used {used} / {total} h','已用 {used} / {total} 小时'],
'filter.normal':['In service','使用中'],'filter.due':['Replace filter soon','建议更换滤芯'],'filter.expired':['Replacement due','请更换滤芯'],
'filter.settings':['Adjust rated lifetime','调整额定寿命'],'filter.lifetime':['Rated lifetime (hours, 1–20000)','额定寿命（小时，1–20000）'],
'filter.reset':['Reset after replacing filter','更换滤芯后重置'],
'filter.confirm':['Reset accumulated usage to zero? Only reset after installing a new filter.','将累计使用时间清零并恢复至 100%？请在更换新滤芯后执行。'],
'filter.reset_done':['Filter usage reset','滤芯使用时间已重置'],
'import.platform':['Open IotCloud','打开 IotCloud'],
'import.title':['Import MQTT configuration','导入 MQTT 配置'],
'import.preview':['Broker: {host}:{port} · Username: {user}','Broker：{host}:{port} · 用户名：{user}'],
'import.source':['Configuration source: {origin}','配置来源：{origin}'],
'import.accept':['Receive and prefill','接收并预填'],
'import.help':['Only accept a transfer you started from a trusted platform. Review the fields and save to apply. The device never exports its saved password.','仅接收你从可信平台发起的配置。接收后请检查下方表单，点击保存才会生效。设备不会导出已保存的密码。'],
'import.http':['HTTP cannot protect against LAN interception or tampering. Use only on a trusted network.','HTTP 无法防止局域网窃听或篡改，请仅在可信网络使用。'],
'import.invalid':['Invalid import request. Start again from the platform.','导入请求无效，请从平台重新发起。'],
'import.expired':['Transfer cancelled or expired. Start again from the platform.','传递已取消或过期，请从平台重新发起。'],
'import.waiting':['Waiting for configuration…','正在等待配置…'],
'import.received':['Configuration prefilled. Review the MQTT Host, port and account below, then save.','配置已预填。请核对下方 MQTT Host、端口与账号，再点击保存。'],
'import.no_opener':['The platform window is unavailable. Keep it open and restart the transfer.','无法连接平台窗口，请保持平台页面打开并重新发起传递。'],
'fw.cancel':['Cancel download','终止下载'],'fw.cancelling':['Cancelling; services will resume shortly.','正在终止，稍后恢复正常服务。'],'fw.online':['Online updates','在线更新'],'fw.check':['Check for updates','检查更新'],'fw.install_online':['Download and install','下载并安装'],'fw.notes':['Release notes','发布说明'],
'fw.sources_help':['Choose a source to check its latest version.','选择更新来源，检查最新版本。'],'fw.source_github':['GitHub Pages (HTTPS)','GitHub Pages（HTTPS）'],'fw.source_cn':['China mirror (HTTP)','境内镜像（HTTP）'],'fw.source_global':['Global mirror (HTTP)','境外镜像（HTTP）'],
'fw.check_idle':['Choose a source and check','选择来源后检查更新'],'fw.check_checking':['Checking…','正在检查…'],'fw.check_available':['Update available','发现新版本'],'fw.check_up_to_date':['Already up to date','当前已是最新版本'],'fw.check_failed':['Update check failed; try another source','检查失败，请重试或切换来源'],'fw.confirm_online':['Install this signed update and restart the device?','安装此签名更新并重启设备？'],
/* Application watchdog diagnostics (A1/M1). */
'diag.g_watchdog':['Restart & watchdog','复位与看门狗'],
'diag.c_watchdog':['Watchdog','看门狗'],
'diag.watchdog_reboot':['Last restart was caused by watchdog timeout','上次因看门狗超时重启'],
'd.reset_reason':['Last reset reason','上次复位原因'],
'd.reset_reason_raw':['Raw reset reason','原始复位原因码'],
'd.watchdog_enabled':['Watchdog enabled','看门狗已启用'],
'd.watchdog_state':['Watchdog state','看门狗状态'],
'd.watchdog_fault':['Unresponsive worker','无响应的处理线程'],
's.watchdog':['Watchdog timeout','看门狗超时'],
's.lockup':['CPU lockup','CPU 锁死'],
's.software':['Software reset','软件复位'],
's.power_on':['Power-related reset','电源相关复位'],
's.unknown':['Unknown','未知'],
's.healthy':['Healthy','正常'],
's.starting':['Starting','启动中'],
's.fault':['Heartbeat timeout or watchdog error','心跳超时或看门狗错误'],
'average.co2':['Mean CO₂','平均 CO₂'],
'auto.target_co2':['CO₂ target / idle at','CO₂ 目标值（待机）'],'auto.start_co2':['CO₂ start threshold','CO₂ 启动阈值'],
'auto.low_co2':['CO₂ at minimum speed','最低风速对应 CO₂'],'auto.high_co2':['CO₂ at maximum speed','最高风速对应 CO₂'],
'link.all':['All three','三者'],'link.co2_help':['CO₂ requires a linked M1 with a CO₂ sensor. Missing or expired readings use the offline fan speed.','CO₂ 需要绑定已安装 CO₂ 传感器的 M1；读数缺失或过期时使用离线风速。'],
'average.temperature':['Mean temperature','平均温度'],'average.humidity':['Mean humidity','平均湿度'],'average.pm25':['Mean PM2.5','平均 PM2.5'],'average.formaldehyde':['Mean formaldehyde','平均甲醛'],
/* common */
'btn.key_both':['Wi-Fi + power keys','Wi-Fi + 电源组合键'],
'btn.reset_note_a1':['Only the Wi-Fi key alone uses the fixed 5/10-second recovery gestures. Combination gestures cancel individual key actions.','仅单独长按 Wi-Fi 键 5／10 秒触发固定恢复操作；组合键会取消本轮单键动作。'],
'op.effect_next':['Cycle light effect','切换到下一灯效'],'op.effect_select':['Select light effect','设置灯效'],
'op.filter_reset':['Reset filter usage','重置滤芯寿命'],'op.light_always':['Light always on','灯环常亮'],
'op.set_brightness':['Also set brightness','同时设置亮度'],
'filter.status':['Used {used} hours · {remaining}% remaining','已使用 {used} 小时 · 剩余 {remaining}%'],
'filter.reset_hint':['Use this gesture after replacing the filter to clear its accumulated runtime.','更换滤芯后使用此手势，将累计运行时间清零。'],
'filter.reset_confirm':['Clear the filter runtime after replacing the filter?','确认已更换滤芯并清零累计使用时间？'],
'btn.key':['Key','按键'],'btn.key_fn':['Function key','功能键'],'btn.key_power':['Power key','电源键'],'btn.key_wifi':['Wi-Fi key','Wi-Fi 键'],'btn.pick_action':['Choose an action','请选择动作'],
'op.on':['On','开启'],'op.off':['Off','关闭'],'op.toggle':['Toggle','切换'],'op.all':['All sockets','全部插座'],'op.target':['Target','对象'],'op.state':['New state','目标状态'],'op.brightness':['Brightness','亮度'],'op.speed':['Fan speed','风速'],
'op.outlet':['Sockets','插座'],'op.fan':['Fan','风机'],'op.light':['Light ring','灯环'],'op.child_lock':['Child lock','童锁'],'op.indicator':['Indicator light','指示灯'],'op.display':['Screen brightness','屏幕亮度'],'op.reboot':['Restart device','重启设备'],
'clock.uptime':['Running for','已运行'],'clock.memory':['Free memory','可用内存'],
'night.hint':['Periods use the device time zone; an end earlier than the start crosses midnight.','时段按设备时区生效；结束早于开始表示跨午夜。'],'night.period':['Period {n}','时段 {n}'],'night.screen':['Limit screen brightness','限制屏幕亮度'],
'sch.new':['New schedule','新建定时'],'sch.edit':['Edit','编辑'],'sch.enable':['Enable','启用'],'sch.disable':['Disable','停用'],'sch.enabled':['Enabled','已启用'],'sch.disabled':['Disabled','已停用'],'sch.enabled_row':['Enabled','启用'],'sch.pick_action':['Choose an action for the schedule','请为定时任务选择动作'],'sch.pick_when':['Pick a date and time','请选择日期与时间'],'sch.save_btn':['Save schedule','保存任务'],
'fw.verify_ok':['Verified; the device is restarting','校验通过，设备正在重启'],'fw.failed':['Update failed: {e}','升级失败：{e}'],'fw.upload_lost':['Upload interrupted; reconnect to check the update state','连接中断，请重新连接设备查看升级状态'],'fw.upload_timeout':['Upload timed out','上传超时'],'fw.url_started':['Download started','已开始下载'],
'diag.g_ota_img':['Update image','升级镜像'],
'op.fan_panel':['Power on / show current mode and airflow','开机／查看当前模式与风量'],
'common.save':['Save','保存'],'common.cancel':['Cancel','取消'],'common.add':['Add','添加'],'common.delete':['Delete','删除'],'common.deleted':['Deleted','已删除'],
'common.copy':['Copy','复制'],'common.copied':['Copied','已复制'],'common.advanced':['Advanced','高级'],'common.more_info':['Details','说明'],
'common.prev':['Previous','上一页'],'common.next':['Next','下一页'],'common.yes':['Yes','是'],'common.no':['No','否'],'common.saving':['Saving…','保存中…'],'common.saved':['Saved','已保存'],'common.max':['Up to {n} items','最多 {n} 项'],
'unit.s':['s','秒'],'time.dh':['{d} d {h} h','{d} 天 {h} 小时'],'time.hm':['{h} h {m} min','{h} 小时 {m} 分'],'time.m':['{m} min','{m} 分钟'],
'toast.accepted':['Request accepted','设备已接受请求'],'toast.rebooting':['Restarting… reconnect in about 20 s','正在重启，约 20 秒后重新连接'],'toast.resetting':['Settings cleared. The device is restarting.','配置已清除，设备正在重启'],
'pref.lang_auto':['Auto','自动'],'pref.theme_system':['System','跟随系统'],'pref.theme_light':['Light','浅色'],'pref.theme_dark':['Dark','深色'],

/* kinds and navigation */
'kind.a1':['A1 Air Purifier','A1 空气净化器'],'kind.m1':['M1 Air Monitor','M1 空气质量检测器'],'kind.tc1':['TC1 Power Strip','TC1 智能插座'],
'nav.home':['Home','首页'],'nav.settings':['Settings','设置'],
'grp.network':['Network','网络'],'grp.device':['Device','设备'],'grp.auto':['Automation','自动化'],'grp.system':['System','系统'],
'nav.wifi':['Wi-Fi','Wi-Fi'],'nav.mqtt':['MQTT / Home Assistant','MQTT / Home Assistant'],'nav.general':['General','通用'],'nav.light':['Light effects','灯效'],
'nav.binding':['Linked M1','绑定 M1'],'nav.linkage':['Auto control','自动调速'],'auto.settings':['Automatic control settings','自动调速设置'],'nav.schedule':['Schedules','定时任务'],'nav.sleep':['Night mode','夜间模式'],
'nav.buttons':['Button events','按键事件'],'nav.permission':["A1 sessions", "A1 会话"],
'nav.firmware':['Firmware','固件升级'],'nav.diagnostics':['Diagnostics','诊断'],'nav.logs':['Logs','日志'],'nav.maintenance':['Restart & reset','重启与恢复'],
/* header */
'chip.wifi':['Wi-Fi','Wi-Fi'],'chip.hotspot':['Setup hotspot','配网热点'],'chip.mqtt':['MQTT','MQTT'],'chip.firmware':['Firmware','固件'],'chip.clock':['Clock not synced','时钟未校准'],
'state.connected':['Connected','已连接'],'state.connecting':['Connecting…','连接中…'],'state.disconnected':['Disconnected','未连接'],'state.hotspot':['Setup hotspot on','配网热点已开启'],
'state.off':['Off','关闭'],'state.ready':['Ready','就绪'],'state.ok':['Normal','正常'],
'banner.lost':['Lost connection to the device. If it is updating, wait for it to restart.','与设备的连接已中断。如正在升级，请等待设备重启。'],
'banner.ota':['Firmware update in progress ({p}%). Controls are paused.','正在升级固件（{p}%），控制暂不可用。'],
'banner.rebooting':['The device is restarting.','设备正在重启。'],
'banner.cleanup':['Old Home Assistant entities could not be removed. Delete them on the previous broker.','旧 HA 实体清理失败，请在原 Broker 上手动删除。'],
'banner.save_error':['Settings could not be saved: {e}','设置保存失败：{e}'],
'banner.hotspot':['Not connected to Wi-Fi. Setup hotspot "{n}" is on.','尚未连接 Wi-Fi，配网热点「{n}」已开启。'],
/* Wi-Fi */
'wifi.lead':['The device keeps its old network until the new one is verified.','新网络验证成功前，设备保持原有连接。'],
'wifi.status':['Status','状态'],'wifi.ssid':['Network name','网络名称'],'wifi.ip':['IP address','IP 地址'],'wifi.ap':['Hotspot','热点名称'],'wifi.saved_password':['Password saved','已保存密码'],
'wifi.change':['Change network','更换网络'],'wifi.scan':['Scan','扫描'],'wifi.password':['Password','密码'],'wifi.pass_ph':['Leave empty to keep the saved password','同一网络留空则保留原密码'],
'wifi.open':['This network has no password','此网络没有密码'],'wifi.open_badge':['Open','开放'],'wifi.save':['Verify and save','验证并保存'],
'wifi.verifying':['Verifying… the device saves only after it gets an IP','验证中…取得 IP 后才会保存'],
'wifi.hint':['The new network is saved only after the device joins it and gets an IP address. If that does not happen within 30 s, it returns to the previous network.','设备连上新网络并取得 IP 后才保存；30 秒内失败则恢复之前的网络。'],
'wifi.none':['No networks found. Type the name instead.','未发现网络，可手动填写名称'],'wifi.scan_timeout':['Scan timed out','扫描超时'],
'wifi.signal.0':['Very weak','信号很弱'],'wifi.signal.1':['Weak','信号弱'],'wifi.signal.2':['Good','信号良好'],'wifi.signal.3':['Strong','信号强'],
/* MQTT */
'mqtt.lead':['Connect a broker to use Home Assistant or the TMCP cloud.','连接 Broker 后可接入 Home Assistant 或 TMCP 云平台。'],
'mqtt.status':['Status','状态'],'mqtt.broker':['Broker','Broker'],'mqtt.host':['Broker address','Broker 地址'],'mqtt.host_ph':['IP or domain — empty disables MQTT','IP 或域名；留空则停用'],
'mqtt.port':['Port','端口'],'mqtt.user':['Username','用户名'],'mqtt.password':['Password','密码'],'mqtt.pass_ph':['Leave empty to keep','留空保留原密码'],
'mqtt.mode':['Topic mode','主题模式'],'mqtt.mode_legacy':['Legacy','Legacy'],
'mqtt.mode_tmcp':['TMCP','TMCP'],'mqtt.mode_tmcp_desc':['TMCP — joins your cloud list automatically','TMCP — 上线后自动加入云端列表'],
'mqtt.mode_hint':['Changing the account tries to remove the old Home Assistant entities. If that fails, delete them on the old broker.','切换账户会尝试清理旧 HA 实体，失败时需在旧 Broker 手动清理。'],
'mqtt.clear':['Clear saved password','清除已保存的密码'],'mqtt.clear_desc':['Connect without a password','以无密码方式连接'],
'mqtt.too_long':['Username max 63 bytes, password max 256 bytes','用户名最多 63 字节，密码最多 256 字节'],
'mqtt.ha_a1':['Home Assistant creates the purifier, RGB light ring, child lock and always-on switches automatically.','Home Assistant 会自动创建净化器、RGB 灯环、童锁和常亮开关。'],
'mqtt.ha_m1':['Home Assistant creates four sensors and a screen brightness control automatically.','Home Assistant 会自动创建四项传感器和屏幕亮度控制。'],
'mqtt.ha_tc1':['Home Assistant creates six sockets, power, indicator and child lock entities automatically.','Home Assistant 会自动创建六路插座、功率、指示灯和童锁。'],
/* General */
'gen.lead':['Name, panel and access settings.','名称、面板与访问设置。'],'gen.identity':['Device','设备'],'gen.name':['Device name','设备名称'],'gen.default_name':['Restore default name','恢复默认名称'],
'gen.name_long':['Name is limited to 63 bytes','名称最多 63 字节'],'gen.device_id':['MAC','MAC 地址'],'gen.uptime':['Running for','已运行'],
'auth.title':['Web access','访问认证'],'auth.lead':['Protect this page with a password (username: admin).','为本页面设置密码（用户名 admin）。'],
'auth.password':['Web password','网页密码'],'auth.ph':['8–32 characters; empty turns it off','8–32 个字符；留空关闭认证'],
'auth.help':['Your browser will ask you to sign in again after it changes.','修改后浏览器会要求重新登录。'],'auth.set':['Set password','设置密码'],
'auth.on':['Protected','已启用'],'auth.off':['Not protected','未启用'],'auth.invalid':['Use 8–32 printable ASCII characters','请使用 8–32 个可打印 ASCII 字符'],
'clock.title':['Clock','时钟'],'clock.tz':['Time zone','时区'],'clock.ntp':['NTP server','NTP 服务器'],'clock.synced':['Clock','校时状态'],'clock.last':['Last sync','最近校时'],
'clock.hint':['Domain or IPv4 only, without protocol or port. If it fails the device tries Aliyun, Tencent and public NTP pools; it re-syncs hourly and retries after 60 s on failure.','只填域名或 IPv4，不含协议和端口。失败后自动尝试阿里、腾讯及公共 NTP 池；每小时校时，失败 60 秒后重试。'],
'tz.cn':['Beijing','北京'],
/* Firmware */
'fw.lead':['Updates keep Wi-Fi, MQTT and device settings.','升级会保留 Wi-Fi、MQTT 和设备设置。'],'fw.version':['Installed version','当前版本'],'fw.state':['Update status','升级状态'],'fw.error':['Last error','最近错误'],
'fw.install':['Install update','安装更新'],'fw.tab_file':['Upload file','上传文件'],'fw.tab_url':['From URL','从网址下载'],
'fw.file':['Signed {m} OTA file','{m} 签名 OTA 文件'],'fw.url':['Direct link (HTTP)','更新文件直链（HTTP）'],'fw.upload':['Upload and install','上传并升级'],'fw.download':['Download and install','下载并升级'],
'fw.unsigned':['Allow unsigned firmware','允许未签名的固件'],'fw.unsigned_desc':['Rescue only. The image is still checked for this device.','仅用于救援；仍会检查是否适用于本设备。'],
'fw.unsigned_confirm':['Unsigned firmware is not verified. Only continue if you trust the file.','未签名的固件不会校验来源，请确认文件可信后再继续。'],
'fw.uploading':['Uploading {p}%','正在上传 {p}%'],'fw.progress':['Installing {p}%','正在安装 {p}%'],'fw.preview_done':['Preview only: no file was sent.','预览模式：未实际发送文件。'],
'fw.hint_a1':['Choose an A1 OTA package from this project. The device restarts after verification.','请选择本项目的 A1 OTA 包，校验成功后自动重启。'],
'fw.hint_m1':['Choose an M1 OTA package from this project. The device restarts after verification.','请选择本项目的 M1 OTA 包，校验成功后自动重启。'],
'fw.hint_tc1':['Choose a TC1 OTA package from this project. The device restarts after verification.','请选择本项目的 TC1 OTA 包，校验成功后自动重启。'],
/* Diagnostics */
'diag.lead':['A health summary first; raw values below for troubleshooting.','先看健康摘要，下方为排障用的原始数值。'],'diag.health':['Health','健康状态'],'diag.details':['Details','详细状态'],
'diag.raw':['Raw JSON','原始 JSON'],'diag.updated':['Last read {t}','最近读取 {t}'],'diag.errors':['{n} errors','{n} 次错误'],'diag.logs':['System log','系统日志'],'logs.lead':['Device log records the last events of this run.','设备日志记录本次运行的最近事件。'],'logs.hint':['Only the most recent events from this run are kept; they are cleared on restart.','仅保留本次运行的最近事件，重启后清空。'],'logs.load_all':['Load all','读取全部'],'logs.download':['Download','下载'],'logs.empty':['No events yet','暂无事件'],'logs.overwritten':['Older entries were overwritten','较早的日志已被覆盖'],'diag.log_refresh':['Refresh','刷新'],
'diag.c_wifi':['Wi-Fi','Wi-Fi'],'diag.c_mqtt':['MQTT','MQTT'],'diag.c_ota':['Firmware update','固件升级'],'diag.c_panel':['Control panel','控制面板'],'diag.c_fan':['Fan driver','风机驱动'],
'diag.c_storage':['Settings storage','配置存储'],'diag.c_sensor':['Sensor','传感器'],'diag.c_clock':['Clock','时钟'],'diag.c_memory':['Free memory','可用内存'],
'diag.g_device':['Device','设备'],'diag.g_network':['Network','网络连接'],'diag.g_mqtt':['MQTT','MQTT'],'diag.g_ota':['Firmware update','固件升级'],'diag.g_fan':['Fan & panel','风机与面板'],
'diag.g_light':['Light ring','灯环'],'diag.g_sensor':['Sensor','传感器'],'diag.g_clock':['Clock','时钟'],'diag.g_screen':['Screen','屏幕'],'diag.g_sockets':['Sockets','插座'],
'diag.g_power':['Metering','计量'],'diag.g_time':['Clock','时钟'],'diag.g_lan':['LAN','局域网'],'diag.g_other':['Other','其他'],
/* Maintenance */
'sys.lead':['Restart the device or return it to defaults.','重启设备或恢复默认配置。'],'sys.reboot':['Restart','重启设备'],'sys.reboot_desc':['Settings are kept.','设置保留不变。'],
'sys.reboot_q':['Restart {m}?','重启 {m}？'],'sys.reboot_body':['The page reconnects when the device is back.','设备恢复后页面会自动重新连接。'],
'sys.reset':['Reset to defaults','恢复默认配置'],'sys.reset_desc':['Clears Wi-Fi, MQTT, password and all settings.','清除 Wi-Fi、MQTT、网页密码及全部设置。'],
'sys.reset_q':['Erase all settings?','清除全部配置？'],'sys.reset_body':['The device restarts with the setup hotspot. This cannot be undone.','设备将重启并开启配网热点，此操作无法撤销。'],
'sys.hint_a1':['On the device: hold the function key 5–10 s to clear Wi-Fi and the web password, over 10 s to clear everything. Works even with child lock on.','设备上：功能键按住 5–10 秒清除 Wi-Fi 和网页密码，超过 10 秒清除全部配置；童锁期间同样有效。'],
'sys.hint_m1':['On the device: a long press of the panel key clears Wi-Fi and the web password.','设备上：长按面板按键可清除 Wi-Fi 和网页密码。'],
'sys.hint_tc1':['On the device: hold the key 5–10 s to clear Wi-Fi and the web password, over 10 s to clear everything (all sockets default to on).','设备上：按键按住 5–10 秒清除 Wi-Fi 和网页密码，超过 10 秒清除全部配置（六路默认开启）。'],
/* Air quality */
'air.co2.comfort':['Comfortable','舒适'],'air.co2.elevated':['Elevated','偏高'],'air.co2.ventilate':['Ventilate','建议通风'],'m.co2_range':['Ventilation reference: ≤1000 ppm comfortable; 1001–1500 elevated; >1500 ventilate.','通风参考：≤1000 ppm 舒适；1001–1500 偏高；>1500 建议通风。'],'m.co2_stale':['Outdated','已过期'],'m.co2':['Carbon dioxide (CO₂)','二氧化碳（CO₂）'],'m.pm25':['PM2.5','PM2.5'],'m.formaldehyde':['Formaldehyde','甲醛'],'m.temperature':['Temperature','温度'],'m.humidity':['Humidity','湿度'],
'air.pm25.excellent':['Excellent','优'],'air.pm25.good':['Good','良'],'air.pm25.light':['Light pollution','轻度污染'],'air.pm25.moderate':['Moderate pollution','中度污染'],'air.pm25.heavy':['Heavy pollution','重度污染'],'air.pm25.severe':['Severe pollution','严重污染'],
'air.formaldehyde.pass':['Within limit','达标'],'air.formaldehyde.slight':['Slightly high','略高'],'air.formaldehyde.exceed':['Over limit','超标'],
'air.temperature.cool':['Cool','偏冷'],'air.temperature.comfort':['Comfortable','舒适'],'air.temperature.warm':['Warm','偏热'],
'air.humidity.dry':['Dry','偏干'],'air.humidity.comfort':['Comfortable','舒适'],'air.humidity.humid':['Humid','偏湿'],
/* A1 home */
'a1.fan':['Purifier','净化器'],'a1.power':['Power','电源'],'a1.running':['Running','运行中'],'a1.off':['Off','已关闭'],
'a1.sub_manual':['{p}% · manual','{p}% · 手动'],'a1.sub_auto':['{p}% · following M1','{p}% · 跟随 M1 自动调节'],'a1.sub_off':['Starts at {p}% when turned on','开启后以 {p}% 运行'],
'a1.locked_ota':['Controls paused during update or restart','升级或重启期间暂停控制'],
'a1.speed':['Fan speed','风速'],'a1.feedback_target':['Target speed','目标速度'],'a1.feedback_pwm':['Current output','当前输出'],'a1.resume':['{p}% when on','开启后 {p}%'],'a1.p_quiet':['Quiet','静音'],'a1.p_low':['Low','低'],'a1.p_mid':['Medium','中'],'a1.p_max':['Max','强'],
'a1.out_stopped':['Fan stopped','风机已停止'],'a1.out_ramp':['Output {a}% → ramping to {p}%','实际输出 {a}%，正在调整到 {p}%'],'a1.out_steady':['Output {a}%','实际输出 {a}%'],
'a1.fan_hint':['Output is the PWM level the firmware applies; the fan ramps gradually and has no speed sensor. Choosing a speed also turns the purifier on.','“实际输出”为软件 PWM 设定，风机逐步调整，设备没有转速回读。选择风速会同时开启净化器。'],
'a1.panel':['Panel','面板'],'a1.panel_ok':['Panel connected','面板通信正常'],'a1.panel_bad':['Panel not responding','面板无响应'],
'a1.child_lock':['Child lock','童锁'],'a1.child_lock_desc':['Locks power and speed keys on the device','锁定机身电源和调速按键'],'a1.lock_on':['Child lock on','童锁已开启'],'a1.lock_off':['Child lock off','童锁已关闭'],
'a1.button_hint':['Hold the Wi-Fi key for 2.5 s to open the setup hotspot; this works with child lock on.','长按 Wi-Fi 键 2.5 秒可开启配网热点，童锁期间仍可使用。'],
'a1.auto':['Auto control','自动调速'],'a1.auto_lead':['Adjusts the fan from linked M1 readings','根据绑定的 M1 读数调节风速'],
'a1.auto_empty':['No M1 is linked yet. Link one to run the purifier automatically.','尚未绑定 M1，绑定后可按空气质量自动运行。'],'a1.auto_link':['Link an M1','绑定 M1'],
'a1.auto_enable':['Turn on auto control','开启自动调速'],'a1.auto_peers':['{n} M1 · {f} reporting','{n} 台 M1 · {f} 台有数据'],
'a1.auto_failed':['No fresh M1 data. The configured offline speed applies while powered on.','暂无有效的 M1 数据，开机时使用设定的离线风速。'],'a1.auto_speed':['Auto speed {p}%','自动风速 {p}%'],
's.link_disabled':['Off','未开启'],'s.link_active':['Active','运行中'],'s.link_sensor_failed':['No data','无数据'],
'a1.ring':['Light ring','灯环'],'a1.ring_on':['Light ring','启用灯环'],'a1.always_on':['Always on','常亮'],'a1.always_on_desc':['Otherwise it lights for 2 s after each change','否则仅在操作后亮 2 秒'],
'a1.color':['Colour','颜色'],'a1.brightness':['Brightness','亮度'],'a1.effect_note':['Effect: {e}.','当前灯效：{e}。'],'a1.effect_change':['Change','更改'],
'a1.effect.0':['Speed bar','风速条'],'a1.effect.1':['Solid colour','固定颜色'],'a1.effect.2':['Breathing','呼吸'],'a1.effect.3':['Rainbow','彩虹'],'a1.effect.4':['Data segments','分段数据'],
'a1.effect_desc.0':['Ring length follows fan speed','灯环长度跟随风速'],'a1.effect_desc.1':['Whole ring in one colour','整圈单色'],'a1.effect_desc.2':['Slow fade in and out','缓慢明暗变化'],
'a1.effect_desc.3':['Cycling colours','循环彩色'],'a1.effect_desc.4':['Each segment shows a reading','每段显示一项读数'],
/* A1 light effects page */
'fx.lead':['How the ring looks. Colour and brightness are set on the home page.','设置灯环的显示方式；颜色和亮度在首页调整。'],'fx.effect':['Effect','灯效'],
'fx.follow':['Brightness follows fan speed','亮度随风速变化'],'fx.follow_desc':['Dimmer at low speed','低风速时更暗'],'fx.count':['Segments','分段数量'],'fx.segment':['Segment {n}','第 {n} 段'],
'fx.source':['Shows','显示内容'],'fx.display':['Style','显示方式'],'fx.range':['Range','数值范围'],'fx.comfort':['comfortable','适宜区间'],
'fx.low':['Low','偏低'],'fx.ok':['Comfortable','适宜'],'fx.high':['High','偏高'],
'fx.src.0':['Temperature','温度'],'fx.src.1':['Humidity','湿度'],'fx.src.2':['PM2.5','PM2.5'],'fx.src.3':['Formaldehyde','甲醛'],'fx.src.4':['Overall air quality','综合空气质量'],'fx.src.5':['Fan speed','风速'],
'fx.disp.0':['Fixed colour, brightness by value','固定颜色 + 数值亮度'],'fx.disp.1':['Comfort colour, fixed brightness','适宜程度颜色 + 固定亮度'],'fx.disp.2':['Comfort colour, brightness by value','适宜程度颜色 + 数值亮度'],
'fx.quality_hint':['Baselines used to compute "overall air quality".','用于计算“综合空气质量”的基准值。'],'fx.quality_pm':['PM2.5 baseline','PM2.5 基准'],'fx.quality_hcho':['Formaldehyde baseline','甲醛基准'],
/* A1 binding */
'bind.lead':['Link M1 monitors so the purifier can react to their readings.','绑定 M1 后，净化器可根据其读数自动运行。'],'bind.sensors':['Linked M1 monitors','已绑定的 M1'],
'bind.empty':['No M1 linked','尚未绑定 M1'],'bind.add':['Add an M1','添加 M1'],'bind.mac':['M1 MAC address','M1 的 MAC 地址'],'bind.ip':['LAN IP (optional)','局域网 IP（可选）'],'bind.ip_ph':["Discover on the LAN if empty", "留空则在局域网内自动查找"],
'bind.ip_auto':['IP found via MQTT','IP 通过 MQTT 获取'],'bind.add_btn':['Add M1','添加'],'bind.added':['Added','已添加'],'bind.bad_mac':['Enter a 12-digit MAC address','请输入 12 位 MAC 地址'],'bind.dup':['Already in the list','已在列表中'],
'bind.pending':['Handshaking','握手中'],'bind.fresh':['Receiving data','数据正常'],'bind.stale':['No data','无数据'],'bind.probe':['Probe LAN','探测局域网'],'bind.probe_sent':['Probe sent','已发送探测'],
'bind.remove_q':['Remove this device?','移除此设备？'],'bind.remove_body':['{m} will no longer be linked.','{m} 将解除关联。'],
'bind.ids_title':['Next: allow this A1 on the M1','下一步：在 M1 上允许本机'],'bind.ids_body':['Copy the pairing ID to the M1 page → Settings → Linkage access.','复制以下配对 ID，粘贴到 M1 页面 → 设置 → 联动许可。'],
'bind.force':['Always use MQTT','强制使用 MQTT'],'bind.force_desc':['Skip the LAN connection','不使用局域网直连'],'bind.recovery':['Retry LAN automatically','自动检查局域网恢复'],'bind.recovery_desc':['Switch back to LAN when it recovers','恢复后切回局域网'],
'bind.timeout':['LAN timeout','局域网超时'],'bind.recovery_s':['Retry interval','恢复检查间隔'],
'bind.hint':["Configure this M1 here; no setup is needed on the M1. MQTT authorizes the session, then readings use the LAN. A LAN failure pauses sensor-based control.", "只需在此添加 M1，无需在 M1 上配对。MQTT 用于建立会话，读数通过局域网获取；局域网失联后按数据失效规则处理。"],
'bind.group':['Purifier group','净化器组'],'bind.group_lead':['Run several A1 units as one. Enter the same name and member list on every A1.','多台 A1 作为一组运行；每台 A1 需填写相同的组名称和成员列表。'],
'bind.group_name':['Group name','组名称'],'bind.group_ph':['Empty = standalone','留空为独立设备'],'bind.member_add':['Add member','添加成员'],
/* A1 linkage */
'link.lead':['Rules that turn the purifier on, off and set its speed from M1 readings.','根据 M1 读数开关净化器并调节风速的规则。'],
'link.enable':['Automatic control','自动调速'],'link.enable_desc':['Manual control still works at any time','随时仍可手动控制'],
'link.no_peer':['Link an M1 first.','请先绑定 M1。'],'link.speed':['Fan speed','风速调节'],'link.metric':['Based on','依据指标'],'link.both':['Both','两者'],
'link.mode.0':['Fixed','固定风速'],'link.mode.1':['Proportional','线性调节'],'link.mode.2':['Target (PID)','目标值（PID）'],
'link.mode_desc.0':['Always the same speed','始终同一风速'],'link.mode_desc.1':['Faster as air gets worse','空气越差风速越高'],'link.mode_desc.2':['Hold a target level','维持在目标值'],
'link.fixed':['Speed','风速'],'link.lin_pm_a':['PM2.5 at','PM2.5 为'],'link.lin_hcho_a':['Formaldehyde at','甲醛为'],'link.lin_b':['→','时风速'],'link.lin_c':[', at',' ；为'],
'link.pid_pm':['Keep PM2.5 at','PM2.5 保持在'],'link.pid_hcho':['Keep formaldehyde at','甲醛保持在'],'link.range':['Speed between','风速范围'],'link.pid_tune':['PID tuning','PID 参数'],
'link.onoff':['Start and stop','自动启停'],'link.onoff_lead':['Keep the stop level below the start level to avoid rapid switching.','关闭阈值应低于启动阈值，避免频繁开关。'],
'link.on_rule':['Start automatically','自动开启'],'link.on_desc':['Turn on when air gets worse','空气变差时开启'],'link.off_rule':['Stop automatically','自动关闭'],'link.off_desc':['Turn off when air is clean','空气变好时关闭'],
'link.watch':['Watch','监测'],'link.any':['Any','任一满足'],'link.all':['All','全部满足'],'link.above':['above','高于'],'link.below':['below','低于'],
'link.hyst_warn':['The stop level should be lower than the start level.','关闭阈值应低于启动阈值。'],
'link.statistic':['With several M1','多台 M1 时取'],'link.debounce':['Condition must last','条件持续'],'link.min_switch':['Minimum run/idle time','最短运行／待机时间'],
'link.stat.0':['Average','平均值'],'link.stat.1':['Highest','最高值'],'link.stat.2':['Lowest','最低值'],'link.stat.3':['Median (more than 3)','中位数（多于 3 台）'],'link.stat.4':['Average without extremes','去掉最高最低后平均'],'link.stat.5':['First available in list','按列表顺序故障切换'],
/* Schedules / night */
'fx.speed':['Animation speed','变化速度'],'fx.slow':['Slow','慢'],'fx.fast':['Fast','快'],
'sch.countdown':['Shutdown countdown','倒计时关闭'],'sch.hours':['Hours','小时'],'sch.minutes':['Minutes','分钟'],'sch.cancel':['Cancel','取消倒计时'],'sch.restart':['Restart','重新计时'],
'sch.countdown_hint':['Turn the purifier off after 1 minute to 24 hours. Works without clock sync. A restart cancels the countdown; enabling it starts the full duration again.','在 1 分钟至 24 小时后关闭净化器，无需校时。设备重启会取消倒计时；重新启用会从完整时长重新计时。'],
'sch.duration_invalid':['Choose a duration from 1 minute to 24 hours','请设置 1 分钟至 24 小时的时长'],'sch.state.cancelled':['Cancelled after restart','设备重启，已取消'],
'sch.lead_a1':['Turn the purifier on or off at set times.','在设定时间开启或关闭净化器。'],'sch.lead_tc1':['Switch sockets at set times (Beijing time).','在设定时间开关插座（北京时间）。'],
'sch.list':['Schedules','定时任务'],'sch.empty':['No schedules yet','暂无定时任务'],'sch.used':['{a} of {b} used','已使用 {a} / {b}'],'sch.off':['off','已停用'],'sch.hint':['Weekly events run in the device time zone and are not replayed after a missed window; a restart runs last.','每周任务按设备时区执行，错过的时段不补执行；重启类操作最后执行。'],'sch.add':['New schedule','新建定时'],'sch.time':['Time','时间'],'sch.date':['Date','日期'],
'sch.repeat':['Repeat','重复'],'sch.action':['Action','动作'],'sch.target':['Target','对象'],'sch.turn_on':['Turn on','开启'],'sch.turn_off':['Turn off','关闭'],'sch.weekly':['Weekly','每周'],
'sch.add_btn':['Add schedule','添加'],'sch.added':['Saved','已保存'],'sch.reset':['Clear form','清空表单'],'sch.when':['Date and time (device time zone)','执行日期与时间（设备时区）'],'sch.pick_day':['Pick at least one day','请至少选择一天'],'sch.future':['Pick a time in the future','请选择未来的时间'],
'sch.fan_on':['Turn on at {p}%','开启，风速 {p}%'],'sch.fan_off':['Turn off','关闭'],'sch.no_clock':['The clock is not synced yet; weekly and dated schedules will not run until it is.','时钟尚未校准，校准前每周及指定日期的任务不会执行。'],
'day.short.0':['Mon','一'],'day.short.1':['Tue','二'],'day.short.2':['Wed','三'],'day.short.3':['Thu','四'],'day.short.4':['Fri','五'],'day.short.5':['Sat','六'],'day.short.6':['Sun','日'],
'day.every':['Every day','每天'],'day.weekdays':['Weekdays','工作日'],'day.weekends':['Weekends','周末'],'day.once':['Once','仅一次'],
'night.lead':['Quieter fan and dimmer light during set hours.','在设定时段降低风速与灯光。'],'night.list':['Night periods','夜间时段'],'night.empty':['No night periods','暂无夜间时段'],
'night.add':['New night period','新建夜间时段'],'night.start':['From','开始'],'night.end':['Until','结束'],'night.next_day':['(next day)','（次日）'],
'night.fan':['Limit fan speed','限制风速'],'night.fan_desc':['Cap the speed during this period','时段内限制最高风速'],'night.fan_max':['Max speed','最高风速'],
'night.light':['Dim the light ring','调暗灯环'],'night.light_desc':['Cap brightness, 0 turns it off','限制亮度，0 为关闭'],'night.light_max':['Max brightness','亮度上限'],
'night.block_t':['Don’t auto-start','禁止自动开启'],'night.block_desc':['Auto control cannot turn the purifier on','自动调速不会开启净化器'],
'night.fan_cap':['Fan ≤ {p}%','风速 ≤ {p}%'],'night.light_cap':['Light ≤ {p}%','灯光 ≤ {p}%'],'night.light_off':['Light off','灯光关闭'],'night.block':['No auto-start','禁止自动开启'],'night.add_btn':['Add period','添加'],
/* M1 */
'm1.pressure':['Pressure','气压'],'m1.overall':['Air quality','空气质量'],'m1.v_excellent':['Excellent','优'],'m1.v_good':['Good','良好'],'m1.v_fair':['Fair','一般'],'m1.v_poor':['Poor','较差'],
'm1.all_ok':['All readings are in range','各项读数均在适宜范围'],'m1.no_data':['No data','暂无数据'],'m1.stale':['Data is out of date','数据已过期'],
'm1.stale_hint':['The sensor has not reported recently. Check Diagnostics.','传感器近期未上报，请查看诊断。'],'m1.updated':['Updated {n} s ago','{n} 秒前更新'],
'm1.screen':['Screen brightness','屏幕亮度'],'m1.screen_desc':['Shows the last level sent; the screen does not report it back','显示最近发送的档位，屏幕不回报实际亮度'],
'm1.linked':['Linked purifiers','联动的净化器'],'m1.linked_desc':["A1 units with an active reading session", "已建立读取会话的 A1"],'m1.linked_empty':["No active A1 session. Add this M1 on the A1 settings page.", "暂无 A1 会话，请在 A1 设置页面添加本机。"],
'm1.allow_btn':['Allow an A1','添加许可'],'m1.session_ok':['Connected','已连接'],'m1.session_wait':['Waiting for A1','等待 A1 连接'],
'm1.perm_lead':["Configure this M1 on the A1. Reading sessions are established automatically through MQTT.", "在 A1 上添加本机后，将通过 MQTT 自动建立读取会话。"],
'm1.allowed':['Allowed A1 units','已允许的 A1'],'m1.allowed_empty':['None yet','暂无'],'m1.allow_add':['Allow an A1','添加许可'],'m1.pair_id':['Pairing ID from the A1','A1 生成的配对 ID'],
'm1.pair_help':['On the A1: Settings → Linked M1 → add this M1, then copy the ID shown.','在 A1：设置 → 绑定 M1 → 添加本机后复制显示的配对 ID。'],
'm1.pair_bad':['Format: a1mac:m1mac (12 hex digits each)','格式：A1 的 MAC:M1 的 MAC（各 12 位十六进制）'],'m1.pair_other':['This ID is for a different M1','该配对 ID 属于另一台 M1'],
'm1.perm_hint':["Both devices need MQTT command access to establish a session and LAN connectivity to read sensors. Inactive sessions expire after 30 minutes.", "建立会话需要 MQTT 命令访问权限，读取数据需要局域网连通。连续 30 分钟无有效读取后，会话自动释放。"],
/* TC1 */
'control.pending':['Waiting for device confirmation','等待设备确认中'],'control.unconfirmed':['Operation not confirmed; showing the latest device state','操作尚未确认，已恢复最近设备状态'],'control.syncing':['Confirming…','确认中…'],
 'tc1.sockets':['Sockets','插座'],'tc1.on_count':['{n} of 6 on','6 路中 {n} 路通电'],'tc1.all_on':['All on','全部开启'],'tc1.all_off':['All off','全部关闭'],
'tc1.on':['On','通电'],'tc1.off':['Off','断开'],'tc1.rename':['Rename','重命名'],'tc1.socket_n':['Socket {n}','插座 {n}'],
'tc1.output_hint':['Shows the output the strip has set; check the load to confirm power.','显示设备的输出设定，实际供电请以负载为准。'],
'tc1.power':['Power','功率'],'tc1.recent':['Recent samples','最近采样'],'tc1.energy':['Energy since start','累计电量'],'tc1.peak':['Recent peak','近期峰值'],
'tc1.lock_desc':['Disables the key on the strip','锁定机身按键'],'tc1.led':['Indicator light','指示灯'],'tc1.led_desc':['Status light on the strip','机身状态指示灯'],
'tc1.names':['Socket names','插座名称'],'tc1.names_desc':['Shown here and in Home Assistant','在本页和 Home Assistant 中显示'],
'tc1.metering':['Reporting & metering','上报与计量'],'tc1.report':['MQTT report interval','MQTT 上报间隔'],'tc1.report_help':['How often power is published to MQTT (1–3600 s).','功率发布到 MQTT 的频率（1–3600 秒）。'],
'tc1.calibration':['Calibration','计量校准'],'tc1.coef':['Power coefficient','功率系数'],'tc1.coef_warn':['Only change this with a known calibration value. An idle reading cannot verify accuracy.','仅在已知校准值时修改；空载读数无法验证计量精度。'],
'btn.lead':['See each gesture and its action. Expand a range to edit individual gestures.','按手势查看实际动作；相同动作合并显示，展开后可逐条编辑。'],'btn.current':['What each gesture does','按下后会发生什么'],
'btn.click_count':['Number of presses','连按次数'],'btn.hold_count':['Hold duration (seconds)','按住时长（秒）'],
'btn.single':['Single press','单击'],'btn.click_full':['Press {n} times','连按 {n} 次'],'btn.hold_full':['Hold {n} seconds','长按 {n} 秒'],
'btn.click_range':['Press {a}–{b} times','连按 {a}～{b} 次'],'btn.hold_range':['Hold {a}–{b} seconds','长按 {a}～{b} 秒'],
'btn.expand':['Expand to edit','展开编辑'],'btn.recovery':['Recovery gestures · fixed','恢复操作 · 固定功能'],'btn.reset_wifi':['Reset network settings','重置网络配置'],
'btn.n':['#','序号'],'btn.click':['Click','连击'],'btn.hold':['Hold','长按'],'btn.click_n':['×{n}','{n} 次'],'btn.hold_n':['{n} s','{n} 秒'],'btn.empty':['No custom events','暂无自定义事件'],
'btn.edit':['Set an event','设置事件'],'btn.kind':['Gesture','手势'],'btn.count':['Clicks / seconds','次数 / 秒数'],'btn.action':['Action','动作'],
'btn.reset_note':['Holding 5–10 s or over 10 s always triggers the recovery reset, regardless of mapping.','按住 5–10 秒或 10 秒以上固定触发恢复操作，不受映射影响。'],
'op.none':['Not set','未配置'],'op.g_switch':['Switch','开关'],'op.g_system':['System','系统'],'op.0':['All sockets','全部插座'],'op.7':['Indicator light','指示灯'],'op.8':['Restart device','重启设备'],
'op.9':['Open setup hotspot','开启配网热点'],'op.10':['Factory reset','恢复出厂设置'],'op.11':['Child lock','童锁'],'op.12':['Restart web service','重启网页服务'],'op.13':['Soft restart','软件重启'],
/* status values (from the shared diagnostics vocabulary) */
'sch.state.waiting':['Waiting','等待执行'],'sch.state.executed':['Executed','已执行'],'sch.state.missed':['Missed','已错过'],'sch.state.busy':['Skipped (busy)','设备忙，已跳过'],'sch.state.migration_disabled':['Disabled (old config)','旧配置不支持，已停用'],'s.ready':['Ready','就绪'],'s.disconnected':['Disconnected','未连接'],'s.connecting':['Connecting','连接中'],'s.synced':['Synced','校时成功'],'s.syncing':['Syncing','正在校时'],
's.waiting_network':['Waiting for network','等待网络'],'s.failed':['Failed','校时失败'],'s.screen_queue_failed':['Synced; screen update failed','网络校时成功，屏幕入队失败'],
's.idle':['Idle','空闲'],'s.pending':['Pending','等待验证'],'s.success':['Verified and saved','验证成功并已保存'],'s.storage_failure':['Save failed, rolled back','保存失败，已回滚'],
's.timeout_rollback':['Timed out, rolled back','连接超时，已回滚'],'s.legacy':['legacy','legacy'],'s.account':['TMCP','TMCP'],'s.downloading':['Downloading','下载中'],
/* diagnostic labels */
'd.wifi_trial_status':['Wi-Fi trial','Wi-Fi 试连状态'],'d.wifi_trial_active':['Verifying Wi-Fi','正在验证 Wi-Fi'],'d.uptime_seconds':['Uptime','运行时间'],'d.free_memory':['Free memory','可用内存'],
'd.child_lock':['Child lock','童锁'],'d.led_enabled':['Light enabled','启用指示灯'],'d.socket_names':['Socket names','插座名称'],'d.socket_states':['Socket outputs','插座输出'],
'd.time_synced':['Clock synced','时钟已校准'],'d.utc_time':['Device time','设备时间'],'d.fan_on':['Fan on','风机开启'],'d.speed':['Saved speed','风速'],'d.percentage':['Target speed','目标风速'],
'd.applied_speed':['Output speed','实际输出'],'d.requested_fan_on':['Requested on','请求开启'],'d.requested_speed':['Requested speed','请求风速'],'d.fan_ready':['Fan driver ready','风机驱动就绪'],
'd.panel_ready':['Panel OK','面板通信正常'],'d.panel_errors':['Panel errors','面板通信错误数'],'d.hardware_errors':['Hardware errors','硬件错误数'],'d.panel_raw':['Panel raw','面板原始数据'],
'd.version':['Firmware','固件版本'],'d.device_id':['Device ID','设备 ID'],'d.name':['Name','设备名称'],'d.ssid':['Network','网络名称'],'d.ip':['IP address','IP 地址'],
'd.wifi_connected':['Wi-Fi connected','Wi-Fi 已连接'],'d.ap_active':['Hotspot on','配网热点已开启'],'d.ap_name':['Hotspot name','热点名称'],'d.mqtt_connected':['MQTT connected','MQTT 已连接'],
'd.mqtt_status':['MQTT status','MQTT 状态'],'d.mqtt_host':['Broker','Broker 地址'],'d.mqtt_port':['Port','MQTT 端口'],'d.mqtt_user':['Username','MQTT 用户名'],'d.mqtt_topic_mode':['Topic mode','主题模式'],
'd.mqtt_errors':['MQTT errors','MQTT 错误次数'],'d.mqtt_last_error':['Last MQTT error','最近 MQTT 错误'],'d.mqtt_cleanup_warning':['HA cleanup failed','旧 HA 实体清理异常'],
'd.sensor_valid':['Sensor data valid','传感器数据有效'],'d.sensor_received':['Sensor data received','已收到传感器数据'],'d.age_ms':['Data age','数据距今'],
'd.temperature':['Temperature (℃)','温度（℃）'],'d.humidity':['Humidity (%)','湿度（%）'],'d.formaldehyde':['Formaldehyde (mg/m³)','甲醛（mg/m³）'],'d.pm25':['PM2.5 (µg/m³)','PM2.5（µg/m³）'],
'd.uart_ready':['UART ready','串口已就绪'],'d.rx_frames':['Frames received','接收帧数'],'d.unknown_frames':['Unknown frames','未知帧数'],'d.uart_errors':['UART errors','串口错误数'],
'd.discarded_bytes':['Discarded bytes','丢弃字节数'],'d.last_frame':['Last frame (hex)','最近串口帧（HEX）'],'d.brightness_requested':['Requested brightness','请求亮度档位'],
'd.ota_active':['Updating','正在升级'],'d.ota_state':['Update state','升级状态'],'d.ota_error':['Update error','升级错误'],'d.ota_progress':['Update progress (%)','升级进度（%）'],
'd.scan_busy':['Scanning Wi-Fi','正在扫描 Wi-Fi'],'d.web_password_set':['Web password set','已设置网页密码'],'d.mqtt_password_set':['MQTT password set','已设置 MQTT 密码'],'d.wifi_password_set':['Wi-Fi password set','已保存 Wi-Fi 密码'],
'd.ntp_host':['Preferred NTP','首选 NTP 服务器'],'d.ntp_server':['Last NTP tried','最近尝试的校时源'],'d.ntp_status':['Sync status','校时状态'],'d.ntp_synced':['Synced this boot','本次启动已完成校时'],
'd.ntp_screen_queued':['Screen time queued','屏幕时间已入队'],'d.ntp_last_success':['Last sync','最近成功校时'],'d.ntp_next_seconds':['Next sync in (s)','下次校时（秒后）'],'d.timezone_minutes':['UTC offset (min)','时区（UTC 分钟差）'],
'd.led_visible':['Light showing','灯环显示中'],'d.led_always_on':['Always on','常亮'],'d.brightness':['Brightness','亮度'],'d.red':['Red','红'],'d.green':['Green','绿'],'d.blue':['Blue','蓝'],
'd.config_dirty':['Saving settings','设置保存中'],'d.save_error':['Save error','保存错误'],'d.reboot_pending':['Restart pending','等待重启'],
'd.report_seconds':['Report interval (s)','上报间隔（秒）'],'d.powerCoefficientX100':['Power coefficient (×100)','功率系数（×100）'],'d.mask':['Subnet mask','子网掩码'],'d.gateway':['Gateway','网关']
};
const KEY='phicomm.language';
let preference='auto';try{preference=localStorage.getItem(KEY)||'auto';}catch{}
const detect=()=>{for(const l of navigator.languages||[navigator.language||'en']){const s=l.toLowerCase();if(s.startsWith('zh'))return 'zh-CN';if(s.startsWith('en'))return 'en';}return 'en';};
const listeners=[];
const I18N={
 lang:preference==='auto'?detect():preference,preference,
 has:k=>Object.hasOwn(D,k),
 t(k,vars){const e=D[k];let s=e?e[I18N.lang==='zh-CN'?1:0]:k;if(!e)console.warn('i18n missing',k);
  if(vars)s=s.replace(/\\{(\\w+)\\}/g,(_,n)=>vars[n]??'');return s;},
 apply(root=document){
  document.documentElement.lang=I18N.lang;
  root.querySelectorAll('[data-i18n]').forEach(el=>{if(el.dataset.i18n)el.textContent=I18N.t(el.dataset.i18n);});
  root.querySelectorAll('[data-i18n-ph]').forEach(el=>el.placeholder=I18N.t(el.dataset.i18nPh));
  root.querySelectorAll('[data-i18n-aria]').forEach(el=>el.setAttribute('aria-label',I18N.t(el.dataset.i18nAria)));
 },
 set(p){I18N.preference=p;try{localStorage.setItem(KEY,p);}catch{}I18N.lang=p==='auto'?detect():p;I18N.apply();listeners.forEach(f=>f());},
 onChange:f=>listeners.push(f),
 keys:()=>Object.keys(D),
 extend:o=>Object.assign(D,o)
};
document.documentElement.lang=I18N.lang;
window.addEventListener('languagechange',()=>{if(I18N.preference==='auto')I18N.set('auto');});
window.I18N=I18N;
})();
<\/script>
<script>// Device service.js retains its HTTP-shaped API; transport is supplied by host.
(()=>{
 const pending=new Map();
 let activeRead=null;
 function send(id,entry){entry.sent=true;if(entry.read)activeRead=id;parent.postMessage({type:'device-command',id,request:entry.request},parent.location.origin);}
 function nextRead(){
  if(activeRead)return;
  const waiting=[...pending].filter(([,entry])=>entry.read&&!entry.sent);
  const next=waiting.find(([,entry])=>entry.request.action==='status.get')||waiting[0];
  if(next)send(...next);
 }
 function remove(id){const entry=pending.get(id);if(!entry)return;pending.delete(id);clearTimeout(entry.timer);entry.cleanup();if(activeRead===id)activeRead=null;}

 window.addEventListener('message',event=>{
  if(event.source!==parent||event.data?.type!=='device-result')return;
  const entry=pending.get(event.data.id);if(!entry)return;
  remove(event.data.id);
  entry.resolve(new Response(JSON.stringify(event.data.reply),{status:200,headers:{'Content-Type':'application/json'}}));nextRead();
 });
 window.fetch=(url,options={})=>{
  if(url!=='/api/v1/command')return Promise.reject(Error('不支持的操作'));
  return new Promise((resolve,reject)=>{
   const id=Array.from(crypto.getRandomValues(new Uint8Array(16)),b=>b.toString(16).padStart(2,'0')).join('');
   const abort=()=>{remove(id);clearTimeout(timer);cleanup();reject(Error('暂未收到操作回执，请等待状态更新'));nextRead();};
   const cleanup=()=>options.signal?.removeEventListener('abort',abort);
   const timer=setTimeout(abort,24000);
   if(options.signal?.aborted){abort();return;}
   options.signal?.addEventListener('abort',abort,{once:true});
   const request=JSON.parse(options.body),entry={resolve,timer,cleanup,request,read:request.action.endsWith('.get'),sent:false};
   pending.set(id,entry);
   if(entry.read)nextRead();else send(id,entry);
  });
 };
})();
window.addEventListener('storage',event=>{
 if(event.key!=='phicomm.appearance')return;
 if(event.newValue==='system'||!event.newValue)delete document.documentElement.dataset.theme;
 else document.documentElement.dataset.theme=event.newValue;
});
// Only the host can choose the authenticated device URL. Never upload to cloud.
(()=>{
 const uploads=new Map();
 window.createDeviceUpload=()=>{
  const id=crypto.randomUUID(),xhr={upload:{},status:0,responseText:'',timeout:310000,setRequestHeader(){},open(method,path){if(method!=='POST'||!['/api/v1/ota/upload','/api/v1/ota/upload-unsigned'].includes(path))throw Error('不支持的上传');this.rescue=path.endsWith('-unsigned');},send(file){uploads.set(id,this);parent.postMessage({type:'device-upload',id,file,rescue:!!this.rescue},parent.location.origin);},abort(){parent.postMessage({type:'device-upload-abort',id},parent.location.origin);uploads.delete(id);this.onabort?.();this.onloadend?.();}};return xhr;
 };
 window.addEventListener('message',event=>{
  if(event.source!==parent||event.origin!==parent.location.origin)return;
  const xhr=uploads.get(event.data?.id);if(!xhr)return;
  if(event.data.type==='device-upload-progress'){xhr.upload.onprogress?.({lengthComputable:true,loaded:event.data.loaded,total:event.data.total});}
  else if(event.data.type==='device-upload-result'){uploads.delete(event.data.id);xhr.status=event.data.result.status;xhr.responseText=event.data.result.text;xhr.onload?.();xhr.onloadend?.();}
 });
 window.addEventListener('pagehide',()=>{for(const xhr of uploads.values())xhr.abort();});
})();
<\/script><script>async function command(action,params={}){
 const request={action,params};
 if(!action.endsWith('.get'))request.request_id=globalThis.crypto?.randomUUID?crypto.randomUUID():Date.now().toString(36)+'-'+Math.random().toString(36).slice(2);
 const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),20000);
 try{
 const response=await fetch('/api/v1/command',{method:'POST',signal:controller.signal,headers:{'Content-Type':'application/json'},body:JSON.stringify(request),cache:'no-store'});
 const reply=await response.json();
 if(!response.ok||!['ok','accepted'].includes(reply.code)){const error=Error(reply.message||reply.code||('HTTP '+response.status));error.code=reply.code;throw error;}
 if(!action.endsWith('.get'))globalThis.UI?.invalidateStatus?.();
 return reply.data||{};
 }finally{clearTimeout(timer);}
}
async function api(path,data){
 if(path==='/status')return command('status.get');
 if(path==='/sensors/average')return command('sensors.average.get');
 if(path==='/power')return command('power.get');
 if(path==='/wifi/scan')return command(data===undefined?'wifi.scan.get':'wifi.scan');
 const domains={'/binding/config':'binding','/binding/status':'binding.status','/binding/probe':'binding.probe','/linkage/config':'linkage','/light/advanced':'light_effect','/sleep/config':'night','/time/config':'time'};
 if(domains[path])return command(domains[path]+(path==='/binding/probe'?'':data===undefined?'.get':'.set'),data||{});
 const direct={'/reboot':'system.reboot','/device/reset':'system.reset','/ota':'ota.start','/childLock':'child_lock.set','/child_lock':'child_lock.set','/led':'indicator.set','/outlet':'outlet.set','/fan':'fan.set','/fan/config':'fan.set','/light':'light.set','/light/config':'light.set'};
 if(direct[path]){if(['/light','/light/config'].includes(path)&&data.brightness!==undefined)data={...data,brightness:Math.round(data.brightness*100/255)};return command(direct[path],data);}
 if(path==='/display/brightness')return command('display.set',{brightness:data.level*25});
 if(path==='/socket'){for(let index=0;index<data.states.length;index++)await command('outlet.set',{index,on:!!data.states[index]});return {};}
 const sections={'/wifi/config':'wifi','/mqtt/config':'mqtt','/deviceName':'device','/auth/password':'auth','/socketNames':'socket','/mqtt/report/freq':'report','/power/coefficient':'meter','/ntp/config':'ntp'};
 if(sections[path]){
  let values={...data};
  if(path==='/power/coefficient')values={coefficient_x100:Number(data)};
  if(path==='/mqtt/config'){delete values.topic_mode;delete values.clear_password;if(data.clear_password)values.password='';else if(!values.password)delete values.password;}
  if(path==='/wifi/config'){delete values.open_network;if(data.open_network)values.password='';else if(!values.password)delete values.password;}
  return command('config.set',{section:sections[path],values});
 }
 throw Error('不支持的操作');
}
<\/script>
<script>/* Public provisioning contract. Passwords and session tokens are never encoded into a URL. */
(()=>{
'use strict';
const VERSION=1,TTL=120000;
const bytes=s=>new TextEncoder().encode(s).length;
function localHost(host){
 const h=host.toLowerCase().replace(/^\\[|\\]$/g,'');
 if(h==='localhost'||h==='::1')return true;
 if(h.includes(':'))return /^(fc|fd)[0-9a-f]{2}:|^fe[89ab][0-9a-f]:/.test(h);
 if(!/^\\d+\\.\\d+\\.\\d+\\.\\d+$/.test(h))return false;
 const p=h.split('.').map(Number);if(p.some(n=>n>255))return false;
 return p[0]===10||p[0]===127||(p[0]===172&&p[1]>=16&&p[1]<=31)||(p[0]===192&&p[1]===168)||(p[0]===169&&p[1]===254);
}
function deviceURL(raw){
 if(typeof raw!=='string'||!raw.trim()||raw.length>256)throw Error('device');
 const value=raw.trim(),url=new URL(value.includes('://')?value:'http://'+value);
 if(!['http:','https:'].includes(url.protocol)||!localHost(url.hostname)||url.username||url.password||url.search||url.hash||url.pathname!=='/')throw Error('device');
 return url;
}
function platformOrigin(raw){
 const u=new URL(raw);
 if(raw!==u.origin||!(u.protocol==='https:'||(u.protocol==='http:'&&['localhost','127.0.0.1','[::1]'].includes(u.hostname))))throw Error('origin');
 return u.origin;
}
function nonce(){const a=new Uint8Array(32);crypto.getRandomValues(a);return Array.from(a,n=>n.toString(16).padStart(2,'0')).join('');}
function readTicket(hash,now=Date.now()){
 if(!hash.startsWith('#iotcloud-import='))return null;
 if(hash.length>2048)throw Error('ticket');
 const p=new URLSearchParams(hash.slice(1));
 if([...p.keys()].sort().join(',')!=='expires,host,iotcloud-import,origin,port,user')throw Error('ticket');
 const id=p.get('iotcloud-import'),expires=Number(p.get('expires')),origin=platformOrigin(p.get('origin'));
 if(!/^[a-f0-9]{64}$/.test(id)||!Number.isSafeInteger(expires)||expires<=now||expires>now+TTL)throw Error('ticket');
 const visible=config({v:VERSION,host:p.get('host'),port:Number(p.get('port')),user:p.get('user'),password:'',protocol:'tmcp',expires},now);
 return {id,expires,origin,host:visible.host,port:visible.port,user:visible.user};
}
function config(value,now=Date.now()){
 if(!value||typeof value!=='object'||Array.isArray(value)||Object.keys(value).sort().join(',')!=='expires,host,password,port,protocol,user,v')throw Error('config');
 const {v,host,port,user,password,protocol,expires}=value;
 if(v!==VERSION||protocol!=='tmcp'||typeof host!=='string'||!host||bytes(host)>127||!/^([a-zA-Z0-9.-]+|\\[[a-fA-F0-9:]+\\])$/.test(host)||host.startsWith('.')||host.endsWith('.')||typeof user!=='string'||bytes(user)>63||/[\\x00-\\x1f\\x7f]/.test(user)||typeof password!=='string'||bytes(password)>256||/[\\x00-\\x1f\\x7f]/.test(password)||!Number.isInteger(port)||port<1||port>65535||!Number.isSafeInteger(expires)||expires<=now||expires>now+TTL)throw Error('config');
 return {v,host,port,user,password,protocol,expires};
}
function packet(e,{source,origin,id,expires},type){
 const d=e.data;return Date.now()<expires&&e.source===source&&e.origin===origin&&!!d&&typeof d==='object'&&d.type===type&&d.id===id;
}
globalThis.IotProvision=Object.freeze({VERSION,TTL,deviceURL,platformOrigin,nonce,readTicket,config,packet});
})();
<\/script>
<script>/* Shared WebUI framework: header, routing, feedback, reusable controls and the
 * settings pages every product has. Loaded after service.js (protocol) and
 * i18n.js (strings); each product page calls UI.start() with its own layout.
 * All requests go through command() in service.js; nothing here talks to a URL
 * directly except the OTA upload. */
(()=>{
'use strict';
const {t}=I18N;
const $=id=>document.getElementById(id);
// Remove the non-secret handshake fragment before any async device requests.
let importTicket=null,importInvalid=false;
if(location.hash.startsWith('#iotcloud-import=')){
 try{importTicket=IotProvision.readTicket(location.hash);}catch{importInvalid=true;}
 history.replaceState(null,'',location.pathname+location.search+'#settings/mqtt');
}

function h(tag,props,...kids){
 const el=document.createElement(tag);
 for(const [k,v] of Object.entries(props||{})){
  if(v==null||v===false)continue;
  if(k==='class')el.className=v;
  else if(k==='i18n'){el.dataset.i18n=v;el.textContent=t(v);}
  else if(k.startsWith('on')&&typeof v==='function')el.addEventListener(k.slice(2),v);
  else if(k in el&&!k.includes('-'))el[k]=v;
  else el.setAttribute(k,v===true?'':v);
 }
 for(const c of kids.flat(Infinity)){if(c==null||c===false)continue;el.append(c.nodeType?c:document.createTextNode(String(c)));}
 return el;
}
const ICONS={
 power:'<path d="M12 2v10"/><path d="M18.4 6.6a9 9 0 1 1-12.8 0"/>',
 fan:'<path d="M10.8 9.1C9 6.4 9.6 3 12.6 2.2c3-.8 4.5 2.4 2.6 6.4M14.9 10.8c2.7-1.8 6.1-1.2 6.9 1.8.8 3-2.4 4.5-6.4 2.6M13.2 14.9c1.8 2.7 1.2 6.1-1.8 6.9-3 .8-4.5-2.4-2.6-6.4M9.1 13.2C6.4 15 3 14.4 2.2 11.4c-.8-3 2.4-4.5 6.4-2.6"/><circle cx="12" cy="12" r="2"/>',
 plug:'<path d="M12 22v-5M9 8V2M15 8V2M18 8v5a6 6 0 0 1-12 0V8z"/>',
 air:'<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2M9.6 4.6A2 2 0 1 1 11 8H2M12.6 19.4A2 2 0 1 0 14 16H2"/>',
 lock:'<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
 wifi:'<path d="M5 12.6a10 10 0 0 1 14 0M8.5 16.1a5 5 0 0 1 7 0M2 8.8a15 15 0 0 1 20 0M12 20h.01"/>',
 home:'<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
 sliders:'<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',
 edit:'<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
 trash:'<path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',
 link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',
 external:'<path d="M14 3h7v7M10 14 21 3M21 14v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6"/>',
 copy:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
 info:'<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
 alert:'<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0zM12 9v4M12 17h.01"/>',
 moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
 clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
 auto:'<path d="M21 12a9 9 0 0 1-15 6.7L3 16M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M3 21v-5h5"/>'
};
function icon(name,cls='i'){const s=document.createElementNS('http://www.w3.org/2000/svg','svg');s.setAttribute('viewBox','0 0 24 24');s.setAttribute('class',cls);s.setAttribute('aria-hidden','true');s.innerHTML=ICONS[name]||'';return s;}

/* ---------- Feedback ---------- */
function toast(text,bad=false){
 let box=$('toasts');if(!box){box=h('div',{id:'toasts',class:'toasts',role:'status','aria-live':'polite'});document.body.append(box);}
 const el=h('div',{class:'toast'+(bad?' bad':'')},text);box.append(el);setTimeout(()=>el.remove(),bad?6000:2600);
}
async function run(button,fn,okKey='toast.accepted'){
 if(button){button.disabled=true;button.setAttribute('aria-busy','true');}
 try{const r=await fn();if(okKey)toast(t(okKey));return r;}
 catch(e){toast(e.message||String(e),true);}
 finally{if(button){button.disabled=false;button.removeAttribute('aria-busy');}}
}
function onSubmit(form,fn,okKey){form.addEventListener('submit',e=>{e.preventDefault();run(form.querySelector('button[type=submit],button:not([type])'),fn,okKey);});}
function confirmDialog({title,body,ok,danger}){
 if(typeof document.body.append!=='function'||!document.createElement('dialog').showModal)return Promise.resolve(window.confirm(title+'\\n'+body));
 return new Promise(resolve=>{
  const d=h('dialog',{},h('h2',{},title),h('p',{},body),
   h('div',{class:'form-actions'},
    h('button',{class:'btn '+(danger?'danger':'primary'),type:'button',onclick:()=>{d.close();resolve(true);}},ok),
    h('button',{class:'btn ghost',type:'button',onclick:()=>d.close()},t('common.cancel'))));
  d.addEventListener('close',()=>{d.remove();resolve(false);});
  document.body.append(d);d.showModal();
 });
}

/* ---------- Controls ---------- */
function switchRow(id,titleKey,descKey){
 return h('label',{class:'switch'},h('span',{class:'text'},h('b',{i18n:titleKey}),descKey&&h('span',{i18n:descKey})),h('input',{type:'checkbox',role:'switch',id}));
}
function seg(options,onPick,{full=false,aria}={}){
 const label=k=>typeof k==='function'?k():I18N.has(k)?t(k):k;
 const box=h('div',{class:'seg'+(full?' full':''),role:'group','aria-label':aria||null});
 for(const [value,key] of options)box.append(h('button',{type:'button','data-value':String(value),'aria-pressed':'false',onclick:()=>{box.set(value);onPick(value);}},label(key)));
 box.set=v=>{for(const b of box.children)b.setAttribute('aria-pressed',String(b.dataset.value===String(v)));box.value=v;};
 box.relabel=()=>options.forEach(([,key],i)=>{box.children[i].textContent=label(key);});
 I18N.onChange(box.relabel);
 return box;
}
const DAY_BITS=[1,2,4,8,16,32,64];
function daysPicker(name,mask=127){
 const box=h('div',{class:'days',role:'group'});
 DAY_BITS.forEach((bit,i)=>box.append(h('label',{},h('input',{type:'checkbox',name,value:bit,checked:!!(mask&bit)}),h('span',{'data-i18n':'day.short.'+i},t('day.short.'+i)))));
 box.mask=()=>[...box.querySelectorAll('input')].reduce((m,i)=>m|(i.checked?Number(i.value):0),0);
 box.setMask=m=>box.querySelectorAll('input').forEach(i=>{i.checked=!!(m&Number(i.value));});
 return box;
}
function presetDays(picker){
 return h('div',{class:'row small'},[[127,'day.every'],[31,'day.weekdays'],[96,'day.weekends']].map(([m,k])=>h('button',{type:'button',class:'btn ghost',style:'min-height:28px;padding:2px 8px',onclick:()=>picker.setMask(m)},h('span',{i18n:k}))));
}
function daysText(mask){
 if(!mask)return t('day.once');if(mask===127)return t('day.every');if(mask===31)return t('day.weekdays');if(mask===96)return t('day.weekends');
 return DAY_BITS.map((b,i)=>mask&b?t('day.short.'+i):null).filter(Boolean).join(I18N.lang==='zh-CN'?'、':', ');
}
const hhmm=m=>String(Math.floor(m/60)%24).padStart(2,'0')+':'+String(m%60).padStart(2,'0');
const toMinutes=v=>{const [a,b]=v.split(':').map(Number);return a*60+b;};
function duration(sec){const d=Math.floor(sec/86400),hr=Math.floor(sec%86400/3600),m=Math.floor(sec%3600/60);return d?t('time.dh',{d,h:hr}):hr?t('time.hm',{h:hr,m}):t('time.m',{m});}
function summary(items){return h('dl',{class:'summary'},items.filter(Boolean).map(([k,v,dot])=>h('div',{},h('dt',{i18n:k}),h('dd',{},dot?h('span',{class:'dot '+dot}):null,v))));}
function card(titleKey,leadKey,...body){return h('section',{class:'card'},h('div',{class:'card-head'},h('div',{},h('h2',{i18n:titleKey}),leadKey&&h('p',{class:'help',i18n:leadKey}))),...body);}
function info(key){return h('details',{class:'info'},h('summary',{},icon('info'),h('span',{i18n:'common.more_info'})),h('p',{i18n:key}));}
function pageHead(titleKey,leadKey){return h('div',{},h('h2',{class:'page-title',i18n:titleKey}),h('p',{class:'page-lead',i18n:leadKey}));}
function saveBar(fn,label='common.save'){const b=h('button',{type:'button',class:'btn primary'},h('span',{i18n:label}));b.onclick=()=>run(b,fn);return h('div',{class:'form-actions'},b);}
function num(model,key,{min,max,step='any',unit,width}={}){
 const input=h('input',{type:'number',value:model[key],min,max,step,style:width?'width:'+width:null,oninput:e=>{if(e.target.value!==''&&Number.isFinite(+e.target.value))model[key]=+e.target.value;}});
 return unit?h('span',{class:'input-unit'},input,h('em',{},unit)):input;
}
function flag(model,key,titleKey,descKey){const r=switchRow(null,titleKey,descKey);const i=r.querySelector('input');i.checked=!!model[key];i.onchange=()=>{model[key]=typeof model[key]==='boolean'?i.checked:Number(i.checked);};return r;}
function slider(model,key,{min=0,max=100,fmt=v=>v+'%'}={}){
 const out=h('b',{class:'num'},fmt(model[key]));
 const r=h('input',{type:'range',min,max,value:model[key],oninput:e=>{model[key]=+e.target.value;out.textContent=fmt(model[key]);}});
 return [out,r];
}
function normalizeMac(v){const m=(v||'').replace(/[^0-9a-f]/gi,'').toLowerCase();return m.length===12?m:null;}
function prettyMac(m){return (m||'').toUpperCase().replace(/(..)(?!$)/g,'$1:');}
const clone=o=>JSON.parse(JSON.stringify(o));

/* Air quality bands: PM2.5 per GB 3095, formaldehyde limit per GB/T 18883-2022,
 * temperature and humidity comfort per the A1 light-segment defaults. */
// CO2 ventilation reference: HSE using-co2-monitors (1000 / 1500 ppm).
const AIR={
 co2:{unit:'ppm',max:2500,bands:[[1000,'comfort','ok'],[1500,'elevated','warn'],[Infinity,'ventilate','bad']]},
 pm25:{unit:'µg/m³',max:250,bands:[[35,'excellent','ok'],[75,'good','ok'],[115,'light','warn'],[150,'moderate','warn'],[250,'heavy','bad'],[Infinity,'severe','bad']]},
 formaldehyde:{unit:'mg/m³',max:0.2,bands:[[0.08,'pass','ok'],[0.1,'slight','warn'],[Infinity,'exceed','bad']]},
 temperature:{unit:'℃',min:0,max:40,bands:[[18,'cool','warn'],[26,'comfort','ok'],[Infinity,'warm','warn']]},
 humidity:{unit:'%',max:100,bands:[[40,'dry','warn'],[60,'comfort','ok'],[Infinity,'humid','warn']]}
};
function grade(metric,v){const b=AIR[metric].bands.find(([lim])=>v<=lim);return {key:'air.'+metric+'.'+b[1],cls:b[2]};}
function airScale(metric,v){
 const m=AIR[metric],lo=m.min||0,span=m.max-lo;let prev=lo;
 const strip=h('div',{class:'scale'});
 for(const [lim,,cls] of m.bands){const end=Math.min(lim,m.max);if(end<=prev)continue;strip.append(h('i',{class:cls,style:'flex:'+((end-prev)/span*100).toFixed(2)}));prev=end;}
 strip.append(h('b',{style:'left:'+Math.max(0,Math.min(100,(v-lo)/span*100))+'%'}));
 return strip;
}
const TZ=[-720,-660,-600,-540,-480,-420,-360,-300,-240,-210,-180,-120,-60,0,60,120,180,210,240,270,300,330,345,360,390,420,480,540,570,600,630,660,720,780,840];
function tzLabel(m){const sg=m<0?'−':'+',a=Math.abs(m);return 'UTC'+sg+String(Math.floor(a/60)).padStart(2,'0')+':'+String(a%60).padStart(2,'0')+(m===480?' · '+t('tz.cn'):'');}

/* ---------- Header, navigation, banners ---------- */
const UI=window.UI={$,h,icon,toast,run,onSubmit,confirm:confirmDialog,switchRow,seg,daysPicker,presetDays,daysText,hhmm,toMinutes,duration,summary,card,info,pageHead,saveBar,num,flag,slider,normalizeMac,prettyMac,clone,AIR,grade,airScale,tzLabel,state:null,caps:null,pages:{},device:null,clockCard,maintenancePage,scanNetworks};
// Keep requested output visible until a fresh read confirms it. Polls may still
// contain the pre-write state while the device applies an accepted command.
let pendingControl=null;
// Partial reads retain slow fields; null explicitly invalidates a measurement.
UI.acceptStatus=(s,partial=false)=>{
 const merged=partial?{...UI.confirmed,...s}:s;
 if(partial&&s.scd40&&UI.confirmed?.scd40)merged.scd40={...UI.confirmed.scd40,...s.scd40};
 UI.confirmed=merged;UI.state=pendingControl?{...merged,...pendingControl}:merged;return UI.state;
};
let fullGeneration=1,loadedGeneration=0,lastFullAt=0;
UI.invalidateStatus=()=>{fullGeneration++;};
UI.activePage=()=>/^settings\\/([a-z]+)$/.exec(UI.embeddedRoute??location.hash.slice(1))?.[1]||null;
UI.statusParams=()=>{
 const page=UI.activePage(),ttl=page==='diagnostics'?5000:['network','mqtt','device','firmware'].includes(page)?10000:30000;
 return UI.caps?.status_views?.includes('live')&&loadedGeneration===fullGeneration&&Date.now()-lastFullAt<ttl?{view:'live'}:{};
};
UI.control=async(action,params,patch)=>{
 if(pendingControl){UI.device.onStatus?.(UI.state);throw Error(t('control.pending'));}
 pendingControl=patch;UI.controlBusy=true;
 const render=()=>{if(UI.device.onStatus)UI.device.onStatus(UI.state);};
 UI.state={...UI.state,...patch};render();
 let sendError,last;
 const matches=s=>s&&Object.entries(patch).every(([k,v])=>Object.hasOwn(s,k)&&(Array.isArray(v)?Array.isArray(s[k])&&v.length===s[k].length&&v.every((x,i)=>!!x===!!s[k][i]):typeof v==='boolean'?!!s[k]===v:s[k]===v));
 try{
  try{await command(action,params);}catch(e){sendError=e;if(e.code&&!['timeout','offline'].includes(e.code))throw e;}
  const until=Date.now()+20000;
  do{
   last=await UI.reload();
   if(matches(last))return last;
   await new Promise(resolve=>setTimeout(resolve,750));
  }while(Date.now()<until);
  throw Error(t('control.unconfirmed')+(sendError?' · '+sendError.message:''));
 }finally{
  pendingControl=null;UI.controlBusy=false;UI.state=UI.confirmed||UI.state;render();
 }
};
function header(dev){
 const lang=h('select',{id:'langPick','aria-label':'Language'},
  h('option',{value:'auto','data-i18n':'pref.lang_auto'},t('pref.lang_auto')),h('option',{value:'en'},'English'),h('option',{value:'zh-CN'},'简体中文'));
 lang.value=I18N.preference;lang.onchange=()=>I18N.set(lang.value);
 const theme=h('select',{id:'themePick','aria-label':'Theme'},['system','light','dark'].map(v=>h('option',{value:v,'data-i18n':'pref.theme_'+v},t('pref.theme_'+v))));
 let saved='system';try{saved=localStorage.getItem('phicomm.appearance')||'system';}catch{}
 const apply=v=>{if(v==='system')document.documentElement.removeAttribute('data-theme');else document.documentElement.dataset.theme=v;};
 theme.value=saved;apply(saved);theme.onchange=()=>{apply(theme.value);try{localStorage.setItem('phicomm.appearance',theme.value);}catch{}};
 return h('header',{class:'topbar'},
  h('div',{class:'brand'},h('div',{class:'logo'},icon(dev.icon)),h('div',{class:'grow'},h('div',{class:'kind','data-i18n':dev.kindKey},t(dev.kindKey)),h('h1',{id:'title'},dev.model))),
  h('div',{class:'prefs'},lang,theme),
  h('div',{class:'chips',id:'chips'}));
}
function chip(dotCls,labelKey,value){return h('span',{class:'chip'},h('span',{class:'dot '+dotCls}),h('span',{i18n:labelKey}),value!=null&&h('b',{},value));}
function renderChips(s){
 const c=$('chips');if(!c)return;
 const wifi=s.wifi_connected?chip('ok','chip.wifi',s.ssid+' · '+s.ip):s.ap_active?chip('warn','chip.hotspot',s.ap_name):chip('bad','chip.wifi',t('state.connecting'));
 const mq=!s.mqtt_host?chip('','chip.mqtt',t('state.off')):s.mqtt_connected?chip('ok','chip.mqtt',t('state.ready')):chip('warn','chip.mqtt',t('s.'+(s.mqtt_status||'connecting')));
 c.replaceChildren(wifi,mq,h('span',{class:'chip'},h('span',{i18n:'chip.firmware'}),h('b',{class:'num'},s.version||'—')),...(UI.device.chips?UI.device.chips(s):[]));
}
function renderBanners(s,lost){
 const b=$('banners');if(!b)return;b.replaceChildren();
 const add=(cls,ic,text)=>b.append(h('div',{class:'banner '+cls,role:cls==='bad'?'alert':null},icon(ic),h('span',{},text)));
 if(lost){add('bad','alert',t('banner.lost'));return;}
 if(s.ota_active)add('info','auto',t('banner.ota',{p:s.ota_progress}));
 if(s.reboot_pending)add('info','auto',t('banner.rebooting'));
 if(s.mqtt_cleanup_warning)add('warn','alert',t('banner.cleanup'));
 if(s.save_error)add('bad','alert',t('banner.save_error',{e:s.save_error}));
 if(s.ap_active&&!s.wifi_connected)add('warn','wifi',t('banner.hotspot',{n:s.ap_name}));
}
function buildNav(dev){
 const side=$('side');side.replaceChildren();
 for(const [groupKey,keys] of dev.groups){
  const links=keys.filter(k=>UI.pages[k]).map(k=>h('a',{href:'#settings/'+k,'data-i18n':dev.nav[k]},t(dev.nav[k])));
  if(!links.length)continue;
  side.append(h('div',{class:'group','data-i18n':groupKey},t(groupKey)));
  for(const a of links)side.append(a);
 }
}
function showRoute(){
 const m=/^settings\\/([a-z]+)$/.exec(UI.embeddedRoute??location.hash.slice(1));
 const page=m&&document.querySelector('[data-settings-page="'+m[1]+'"]')?m[1]:m?(UI.device.groups.flatMap(g=>g[1]).find(k=>UI.pages[k])||null):null;
 $('homePage').hidden=!!page;$('settingsPage').hidden=!page;
 document.querySelectorAll('[data-settings-page]').forEach(p=>{p.hidden=p.dataset.settingsPage!==page;});
 document.querySelectorAll('.tabs a').forEach(a=>{const on=a.dataset.tab===(page?'settings':'home');if(on)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
 document.querySelectorAll('.side a').forEach(a=>{if(a.hash==='#settings/'+page)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
 if(page)UI.reload({full:true}).then(()=>afterShow(page));else afterShow(page);
}
const showingPages=new Set();
async function afterShow(page){
 if(!page)return;
 const active=document.querySelector('.side a[aria-current]'),side=$('side');
 // Reveal mobile menu items without scrollIntoView scrolling the whole page.
 if(active&&side&&side.scrollWidth>side.clientWidth){
  const item=active.getBoundingClientRect(),menu=side.getBoundingClientRect();
  if(item.left<menu.left)side.scrollLeft+=item.left-menu.left;
  else if(item.right>menu.right)side.scrollLeft+=item.right-menu.right;
 }
 const p=UI.pages[page];if(!p?.show||showingPages.has(page))return;
 const box=document.querySelector('[data-settings-page="'+page+'"]');
 box?.querySelector('.page-load-error')?.remove();showingPages.add(page);
 try{await p.show();}catch(e){const retry=h('button',{class:'btn',type:'button',onclick:()=>afterShow(page)},'重试');box?.prepend(h('div',{class:'banner warn page-load-error',role:'alert'},h('span',{},e.message),retry));}finally{showingPages.delete(page);}
}
/* Wi-Fi scan is shared: start, poll, and hand the sorted list to a callback. */
async function scanNetworks(onList){
 await command('wifi.scan');
 for(let i=0;i<25;i++){const r=await command('wifi.scan.get');if(r.scanning){await new Promise(res=>setTimeout(res,700));continue;}onList(r.networks||[]);return;}
 throw Error(t('wifi.scan_timeout'));
}

/* ---------- Shared settings pages ---------- */
function wifiPage(){
 const sum=h('div'),list=h('div',{class:'list',hidden:true});
 const ssid=h('input',{id:'ssid',maxLength:32,required:true,autocomplete:'off'});
 const pass=h('input',{id:'wifiPassword',type:'password',maxLength:63,autocomplete:'new-password',placeholder:t('wifi.pass_ph')});
 const open=switchRow('openNetwork','wifi.open');
 const scanBtn=h('button',{type:'button',class:'btn',id:'scan'},icon('auto'),h('span',{i18n:'wifi.scan'}));
 const form=h('form',{id:'wifiForm',class:'stack'},
  h('label',{class:'field'},h('span',{i18n:'wifi.ssid'}),h('div',{class:'row'},h('div',{class:'grow'},ssid),scanBtn)),list,
  h('label',{class:'field'},h('span',{i18n:'wifi.password'}),pass),open,
  h('div',{class:'form-actions'},h('button',{class:'btn primary',type:'submit'},h('span',{i18n:'wifi.save'}))),info('wifi.hint'));
 open.querySelector('input').onchange=e=>{pass.disabled=e.target.checked;};
 scanBtn.onclick=()=>run(scanBtn,()=>scanNetworks(net=>{
  list.replaceChildren(...net.slice().sort((a,b)=>b.rssi-a.rssi).map(n=>h('button',{type:'button',class:'item',style:'cursor:pointer;text-align:left;font:inherit;color:inherit;width:100%',
   onclick:()=>{ssid.value=n.ssid;open.querySelector('input').checked=n.security===0;pass.disabled=n.security===0;list.hidden=true;pass.focus();}},
   icon('wifi'),h('span',{class:'grow'},h('b',{},n.ssid),h('span',{},t('wifi.signal.'+(n.rssi>-55?3:n.rssi>-70?2:1))+' · '+n.rssi+' dBm')),n.security===0?h('span',{class:'badge',i18n:'wifi.open_badge'}):icon('lock'))));
  list.hidden=false;
  if(!net.length)throw Error(t('wifi.none'));
 }),null);
 onSubmit(form,()=>api('/wifi/config',{ssid:ssid.value,password:pass.value,open_network:open.querySelector('input').checked}),'wifi.verifying');
 return {el:h('div',{class:'stack'},pageHead('nav.wifi','wifi.lead'),sum,card('wifi.change',null,form)),
  status(s){sum.replaceChildren(summary([['wifi.status',s.wifi_connected?t('state.connected'):s.ap_active?t('state.hotspot'):t('state.connecting'),s.wifi_connected?'ok':s.ap_active?'warn':'bad'],
   ['wifi.ssid',s.ssid||'—'],['wifi.ip',s.ip||'—'],s.ap_active?['wifi.ap',s.ap_name]:['wifi.saved_password',t(s.wifi_password_set?'common.yes':'common.no')]]));},
  init(s){ssid.value=s.ssid||'';}};
}
function mqttImportPanel(dev,fields){
 const box=h('section',{class:'card stack',id:'mqttImport',hidden:!importTicket&&!importInvalid});
 if(importInvalid){box.append(h('p',{role:'alert'},t('import.invalid')));return box;}
 if(!importTicket)return box;
 const ticket=importTicket;importTicket=null;
 const source=window.opener;
 const status=h('p',{role:'status'}),accept=h('button',{type:'button',class:'btn primary',disabled:true},t('import.accept')),
 cancel=h('button',{type:'button',class:'btn'},t('common.cancel'));
 box.append(h('h2',{},t('import.title')),h('p',{},t('import.source',{origin:ticket.origin})),h('p',{},t('import.preview',{host:ticket.host,port:ticket.port,user:ticket.user||'—'})),
  h('p',{class:'help'},t('import.help')),h('p',{class:'help'},t('import.http')),
  h('div',{class:'form-actions'},accept,cancel),status);
 let waiting=false,done=false,timer,original=null;
 box.activate=()=>{if(!done&&source&&Date.now()<ticket.expires)accept.disabled=false;};
 const detach=()=>{window.removeEventListener('message',receive);clearTimeout(timer);try{window.opener=null;}catch{}};
 const clear=()=>{fields.pass.value='';if(original){fields.host.value=original.host;fields.port.value=original.port;fields.user.value=original.user;if(fields.protocol)fields.protocol.value=original.protocol;fields.clear.checked=original.clear;original=null;}waiting=false;done=true;detach();accept.disabled=true;};
 box.saved=()=>{original=null;fields.pass.value='';clearTimeout(timer);};
 box.guard=()=>{if(waiting)throw Error(t('import.waiting'));};
 const finish=()=>{clear();status.textContent=t('import.expired');};
 const receive=e=>{
  if(!waiting||done||!IotProvision.packet(e,{source,origin:ticket.origin,id:ticket.id,expires:ticket.expires},'iotcloud.provision.config'))return;
  let data;
  try{if(Object.keys(e.data).sort().join(',')!=='id,password,type')throw Error();data=IotProvision.config({v:1,host:ticket.host,port:ticket.port,user:ticket.user,password:e.data.password,protocol:'tmcp',expires:ticket.expires});}catch{finish();status.textContent=t('import.invalid');return;}
  // Only front-end fields are touched. config.set remains the normal save flow.
  fields.host.value=data.host;fields.port.value=String(data.port);fields.user.value=data.user;fields.pass.value=data.password;
  if(fields.protocol)fields.protocol.value='tmcp';fields.clear.checked=data.password==='';
  waiting=false;done=true;detach();accept.hidden=true;status.textContent=t('import.received');
  source.postMessage({type:'iotcloud.provision.received',id:ticket.id},ticket.origin);
  // Never leave an unsaved imported host paired with the device's old password.
  timer=setTimeout(()=>{clear();status.textContent=t('import.expired');},Math.max(0,ticket.expires-Date.now()));
 };
 cancel.onclick=()=>{clear();box.hidden=true;};
 accept.onclick=()=>{
  if(done||Date.now()>=ticket.expires||!source){finish();return;}
  original={host:fields.host.value,port:fields.port.value,user:fields.user.value,protocol:fields.protocol?.value,clear:fields.clear.checked};
  fields.host.value=ticket.host;fields.port.value=String(ticket.port);fields.user.value=ticket.user;fields.pass.value='';if(fields.protocol)fields.protocol.value='tmcp';fields.clear.checked=false;
  waiting=true;accept.disabled=true;status.textContent=t('import.waiting');
  source.postMessage({type:'iotcloud.provision.ready',id:ticket.id},ticket.origin);
 };
 if(!source){accept.disabled=true;status.textContent=t('import.no_opener');return box;}
 window.addEventListener('message',receive);
 timer=setTimeout(finish,Math.max(0,ticket.expires-Date.now()));
 window.addEventListener('pagehide',clear,{once:true});
 window.addEventListener('hashchange',()=>{if(location.hash!=='#settings/mqtt')clear();});
 return box;
}
function mqttPage(dev){
 const sum=h('div');
 const host=h('input',{id:'mqttHost',maxLength:dev.mqttHostMax||127,placeholder:t('mqtt.host_ph')});
 const port=h('input',{id:'mqttPort',type:'number',min:1,max:65535,required:true,value:'1883'});
 const user=h('input',{id:'mqttUser',maxLength:63,autocomplete:'off'});
 const pass=h('input',{id:'mqttPassword',type:'password',maxLength:256,autocomplete:'new-password',placeholder:t('mqtt.pass_ph')});
 const protocol=dev.model==='TC1'?h('select',{id:'mqttMode'},h('option',{value:'tmcp'},'TMCP (v2)'),h('option',{value:'legacy'},'Legacy (v1)')):null;
 const clear=switchRow('clearMqttPassword','mqtt.clear','mqtt.clear_desc');
 const imported=mqttImportPanel(dev,{host,port,user,pass,protocol,clear:clear.querySelector('input')});
 const form=h('form',{id:'mqttForm',class:'stack'},
  h('div',{class:'fields',style:'grid-template-columns:minmax(0,3fr) minmax(90px,1fr)'},
   h('label',{class:'field'},h('span',{i18n:'mqtt.host'}),host),h('label',{class:'field'},h('span',{i18n:'mqtt.port'}),port)),
  h('div',{class:'fields'},h('label',{class:'field'},h('span',{i18n:'mqtt.user'}),user),h('label',{class:'field'},h('span',{i18n:'mqtt.password'}),pass)),
  h('details',{class:'more'},h('summary',{i18n:'common.advanced'}),...(protocol?[h('label',{class:'field'},h('span',{i18n:'mqtt.mode'}),protocol)]:[]),clear),info(dev.haHintKey),
  h('div',{class:'form-actions'},h('button',{class:'btn primary',type:'submit'},h('span',{i18n:'common.save'}))));
 onSubmit(form,()=>{
  imported.guard?.();
  const enc=new TextEncoder();if(enc.encode(user.value).length>63||enc.encode(pass.value).length>256)throw Error(t('mqtt.too_long'));
  return api('/mqtt/config',{host:host.value.trim(),port:Number(port.value),user:user.value,password:pass.value,clear_password:clear.querySelector('input').checked,...(protocol?{protocol:protocol.value}:{})}).then(result=>{pass.value='';imported.saved?.();return result;});
 });
 const broker=card('mqtt.broker',null,form);
 const heading=broker.querySelector('.card-head');heading.classList.add('broker-card-head');
 heading.append(h('a',{class:'btn broker-platform-link',href:'https://phicomm-io.github.io/iotcloud/#/',target:'_blank',rel:'noopener noreferrer'},h('span',{i18n:'import.platform'}),icon('external')));
 return {el:h('div',{class:'stack'},pageHead('nav.mqtt','mqtt.lead'),sum,imported,broker),
  status(s){sum.replaceChildren(summary([['mqtt.status',!s.mqtt_host?t('state.off'):s.mqtt_connected?t('state.ready'):t('s.'+(s.mqtt_status||'connecting')),!s.mqtt_host?'':s.mqtt_connected?'ok':'warn'],
   ['mqtt.host',s.mqtt_host?s.mqtt_host+':'+s.mqtt_port:'—'],['mqtt.mode',t(s.mqtt_topic_mode==='legacy'?'mqtt.mode_legacy':'mqtt.mode_tmcp')],['mqtt.user',s.mqtt_user||'—']]));},
  init(s){if(protocol)protocol.value=s.mqtt_protocol||s.mqtt_topic_mode||'tmcp';host.value=s.mqtt_host||'';port.value=s.mqtt_port||1883;user.value=s.mqtt_user||'';imported.activate?.();}};
}
function firmwarePage(dev){
 const online=h('section',{class:'card stack',hidden:!UI.caps?.actions?.includes('ota.sources.get')});
 if(!online.hidden){
  const sources=h('div',{class:'row',id:'otaSources'}),latest=h('p',{class:'help'});
  const notes=h('button',{class:'btn',type:'button',hidden:true},t('fw.notes'));
  const notesText=h('pre',{class:'help',hidden:true,style:'white-space:pre-wrap;max-height:24rem;overflow:auto'});
  const install=h('button',{class:'btn primary',type:'button',hidden:true},t('fw.install_online'));
  let timer=null,last=null;
  const buttons=[];
  function busy(value){for(const button of buttons)button.disabled=value;}
  function translate(){install.textContent=t('fw.install_online');notes.textContent=t('fw.notes');for(const button of buttons)button.textContent=t('fw.source_'+button.dataset.source);if(last)latest.textContent=t('fw.check_'+last.state)+(last.version?' · '+last.version:'');}
  I18N.onChange(translate);
  async function poll(){
   const data=await command('ota.check.get');last=data;
   latest.textContent=t('fw.check_'+data.state)+(data.version?' · '+data.version:'')+(data.error?' · '+data.error:'');
   install.hidden=!data.version||data.state==='failed';notes.hidden=!data.release_log;
   if(data.busy||data.state==='checking')timer=setTimeout(()=>poll().catch(e=>{latest.textContent=e.message;busy(false);}),1000);
   else busy(false);
  }
  async function check(source){
   if(timer)clearTimeout(timer);busy(true);install.hidden=notes.hidden=notesText.hidden=true;
   try{await command('ota.check',{source});latest.textContent=t('fw.check_checking');timer=setTimeout(()=>poll().catch(e=>{latest.textContent=e.message;busy(false);}),500);}
   catch(e){busy(false);throw e;}
  }
  notes.onclick=()=>run(notes,async()=>{
   let offset=0,text='';notesText.hidden=false;
   do{
    await command('ota.notes',{offset});
    let data;
    do{await new Promise(resolve=>setTimeout(resolve,500));data=await command('ota.notes.get');}while(data.busy);
    if(data.state!=='ready')throw Error(data.error||t('fw.check_failed'));
    text+=data.text;notesText.textContent=text;
    if(data.next<=offset&&data.next<data.total)throw Error(t('fw.check_failed'));
    offset=data.next;if(offset>=data.total)break;
   }while(offset<16384);
  });
  install.onclick=()=>run(install,async()=>{if(!window.confirm(t('fw.confirm_online')))return;await command('ota.install');toast(t('fw.url_started'));});
  command('ota.sources.get').then(data=>{for(const id of data.sources){const button=h('button',{class:'btn',type:'button','data-source':id},t('fw.source_'+id));button.onclick=()=>run(button,()=>check(id));buttons.push(button);sources.append(button);}}).catch(()=>{online.hidden=true;});
  online.append(h('h2',{i18n:'fw.online'}),h('p',{class:'help',i18n:'fw.sources_help'}),sources,latest,h('div',{class:'row'},install,notes),notesText);
 }
 const cancel=h('button',{class:'btn',type:'button',hidden:true,i18n:'fw.cancel'});
 cancel.onclick=()=>run(cancel,async()=>{await command('ota.cancel');toast(t('fw.cancelling'));});
 const sum=h('div'),prog=h('progress',{max:100,value:0}),state=h('p',{class:'help'});
 const file=h('input',{id:'firmware',type:'file',accept:'.bin,.raw,.signed',required:true});
 const unsigned=switchRow('unsignedRescue','fw.unsigned','fw.unsigned_desc');
 const url=h('input',{id:'otaUrl',type:'url',maxLength:499,required:true,placeholder:'https://…/'+dev.otaName});
 const fileForm=h('form',{id:'fileForm',class:'stack'},h('label',{class:'field'},h('span',{},t('fw.file',{m:dev.model})),file),
  h('details',{class:'more'},h('summary',{i18n:'common.advanced'}),unsigned),
  h('div',{class:'form-actions'},h('button',{class:'btn primary',type:'submit'},h('span',{i18n:'fw.upload'}))));
 const urlForm=h('form',{id:'urlForm',class:'stack',hidden:true},h('label',{class:'field'},h('span',{i18n:'fw.url'}),url),
  h('div',{class:'form-actions'},h('button',{class:'btn primary',type:'submit'},h('span',{i18n:'fw.download'}))));
 const picker=seg([['file','fw.tab_file'],['url','fw.tab_url']],v=>{fileForm.hidden=v!=='file';urlForm.hidden=v!=='url';});picker.set('file');
 // Upload streams raw bytes; the request is synchronous up to send(), like the old page.
 let uploading=false;
 fileForm.addEventListener('submit',e=>{
  e.preventDefault();const f=file.files&&file.files[0];if(!f||uploading)return;
  const rescue=unsigned.querySelector('input').checked;
  if(rescue&&!window.confirm(t('fw.unsigned_confirm')))return;
  uploading=true;prog.value=0;
  const xhr=window.createDeviceUpload?window.createDeviceUpload():new XMLHttpRequest();xhr.open('POST',rescue?'/api/v1/ota/upload-unsigned':'/api/v1/ota/upload');
  xhr.setRequestHeader('Content-Type','application/octet-stream');xhr.timeout=310000;
  xhr.upload.onprogress=ev=>{if(ev.lengthComputable){prog.value=ev.loaded/ev.total*100;state.textContent=t('fw.uploading',{p:Math.round(ev.loaded/ev.total*100)});}};
  xhr.onload=()=>{const ok=xhr.status===202;state.textContent=ok?t('fw.verify_ok'):t('fw.failed',{e:xhr.responseText});toast(state.textContent,!ok);};
  xhr.onerror=()=>toast(t('fw.upload_lost'),true);
  xhr.ontimeout=()=>toast(t('fw.upload_timeout'),true);
  xhr.onloadend=()=>{uploading=false;};
  xhr.send(f);
 });
 onSubmit(urlForm,()=>api('/ota',{url:url.value}),'fw.url_started');
 const fileLabel=fileForm.querySelector('.field>span');I18N.onChange(()=>{fileLabel.textContent=t('fw.file',{m:dev.model});});
 return {el:h('div',{class:'stack'},pageHead('nav.firmware','fw.lead'),sum,online,
  card('fw.install',null,picker,h('div',{style:'margin-top:16px'},fileForm,urlForm),h('div',{class:'stack',style:'margin-top:20px'},prog,state,cancel),info(dev.otaHintKey))),
  status(s){sum.replaceChildren(summary([['fw.version',h('span',{class:'num'},s.version||'—')],['fw.state',t('s.'+(s.ota_state||'idle'))],s.ota_error?['fw.error',h('span',{class:'badge bad'},s.ota_error)]:null]));
   cancel.hidden=!s.ota_active||s.ota_mode==='committing';
   if(s.ota_active){prog.value=s.ota_progress;state.textContent=t('fw.progress',{p:s.ota_progress});}}};
}
function diagValue(k,v){
 if(v===null||v===undefined||v==='')return '—';
 if(typeof v==='boolean')return t(v?'common.yes':'common.no');
 if(k==='uptime_seconds')return duration(v);
 if(k==='free_memory')return (v/1024).toFixed(1)+' KB';
 if(k==='age_ms')return (v/1000).toFixed(1)+' s';
 if(k==='ntp_last_success'||k==='utc_time')return new Date(v*1000).toLocaleString(I18N.lang);
 if(Array.isArray(v))return v.join(', ');
 if(typeof v==='string'&&I18N.has('s.'+v))return t('s.'+v);
 return String(v);
}
function diagnosticsPage(dev){
 const health=h('div',{class:'health'}),groups=h('div',{class:'diag'}),raw=h('pre'),updated=h('p',{class:'help'});
 const extra=dev.diagExtra?dev.diagExtra():null;
 return {el:h('div',{class:'stack'},pageHead('nav.diagnostics','diag.lead'),card('diag.health',null,health),
   h('section',{},h('div',{class:'section-label',i18n:'diag.details'}),groups),extra,
   h('details',{class:'more'},h('summary',{i18n:'diag.raw'}),raw),updated),
  status(s){
   if(!UI.pages.diagnostics||$('settingsPage').hidden)return;
   const checks=[['diag.c_wifi',s.wifi_connected?'ok':'bad',s.wifi_connected?s.ssid:t('state.disconnected')],
    ['diag.c_mqtt',!s.mqtt_host?'':s.mqtt_connected?'ok':'warn',!s.mqtt_host?t('state.off'):t('s.'+(s.mqtt_status||'connecting'))+(s.mqtt_errors?' · '+t('diag.errors',{n:s.mqtt_errors}):'')],
    ...(Object.hasOwn(s,'watchdog_state')?[['diag.c_watchdog',!s.watchdog_enabled||s.watchdog_state==='fault'?'bad':s.reset_reason==='watchdog'?'warn':'ok',s.reset_reason==='watchdog'?t('diag.watchdog_reboot'):t('s.'+s.watchdog_state)]]:[]),
    ...(dev.healthChecks?dev.healthChecks(s):[]),['diag.c_ota',s.ota_error?'bad':'ok',s.ota_error||t('s.'+(s.ota_state||'idle'))]];
   health.replaceChildren(...checks.map(([k,cls,text])=>h('div',{class:'item'},h('span',{class:'dot '+cls}),h('span',{class:'grow'},h('b',{i18n:k})),h('span',{class:'help'},text))));
   const seen=new Set();
   const all=[['diag.g_device',['name','device_id','version','uptime_seconds','free_memory','web_password_set']],
    ['diag.g_watchdog',['reset_reason','reset_reason_raw','watchdog_enabled','watchdog_state','watchdog_fault']],
    ['diag.g_network',['wifi_connected','ssid','ip','ap_active','ap_name','scan_busy','wifi_password_set','wifi_trial_status','wifi_trial_active']],
    ['diag.g_mqtt',['mqtt_connected','mqtt_status','mqtt_host','mqtt_port','mqtt_user','mqtt_topic_mode','mqtt_password_set','mqtt_errors','mqtt_last_error','mqtt_cleanup_warning']],
    ...(dev.diagGroups||[]),['diag.g_ota',['ota_active','ota_state','ota_progress','ota_error']]];
   const open=new Set([...groups.querySelectorAll('details')].filter(d=>d.open).map(d=>d.dataset.key));
   groups.replaceChildren(...all.map(([key,keys],i)=>{const rows=keys.filter(k=>Object.hasOwn(s,k)).map(k=>{seen.add(k);return [k,s[k]];});if(!rows.length)return null;
    return h('details',{'data-key':key,open:open.size?open.has(key):i<2},h('summary',{},h('span',{i18n:key}),h('span',{class:'badge'},rows.length)),
     h('dl',{},rows.map(([k,v])=>[h('dt',{},I18N.has('d.'+k)?t('d.'+k):k),h('dd',{class:'num'},diagValue(k,v))])));}).filter(Boolean));
   const rest=Object.keys(s).filter(k=>!seen.has(k)&&!(Array.isArray(s[k])&&typeof s[k][0]==='object'));
   if(rest.length)groups.append(h('details',{'data-key':'diag.g_other'},h('summary',{},h('span',{i18n:'diag.g_other'}),h('span',{class:'badge'},rest.length)),
    h('dl',{},rest.map(k=>[h('dt',{},I18N.has('d.'+k)?t('d.'+k):k),h('dd',{class:'num'},diagValue(k,s[k]))]))));
   raw.textContent=JSON.stringify(s,null,2);updated.textContent=t('diag.updated',{t:new Date().toLocaleTimeString(I18N.lang)});
  }};
}
function logsPage(){
 const out=h('pre',{},''),rows=[],state=h('p',{class:'help'});
 let cursor=0;
 async function read(){
  const d=await command('logs.get',{after:cursor,limit:8});
  if(d.overwritten)rows.push(t('logs.overwritten'));
  for(const r of d.records)rows.push(JSON.stringify(r.module==='system'&&r.event==='watchdog'?{...r,message:t('diag.watchdog_reboot')}:r));
  cursor=d.next;out.textContent=rows.join('\\n')||t('logs.empty');return d;
 }
 const refresh=h('button',{type:'button',class:'btn'},icon('auto'),h('span',{i18n:'diag.log_refresh'}));
 refresh.onclick=()=>run(refresh,read,null);
 const all=h('button',{type:'button',class:'btn'},h('span',{i18n:'logs.load_all'}));
 all.onclick=()=>run(all,async()=>{for(let i=0;i<8;i++){const d=await read();if(cursor>=d.latest)break;}},null);
 const dl=h('button',{type:'button',class:'btn'},h('span',{i18n:'logs.download'}));
 dl.onclick=()=>run(dl,async()=>{
  for(let i=0;i<8;i++){const d=await read();if(cursor>=d.latest)break;}
  const url=URL.createObjectURL(new Blob([rows.join('\\n')],{type:'text/plain;charset=utf-8'})),a=h('a',{href:url,download:'device-log.txt'});
  document.body.append(a);a.click();a.remove();URL.revokeObjectURL(url);
 },null);
 return {el:h('div',{class:'stack'},pageHead('nav.logs','logs.lead'),
  card('diag.logs',null,h('p',{class:'help',i18n:'logs.hint'}),h('div',{class:'form-actions'},refresh,all,dl),out,state))};
}
function maintenancePage(dev){
 const reboot=h('button',{type:'button',class:'btn'},h('span',{i18n:'sys.reboot'}));
 reboot.onclick=async()=>{if(await confirmDialog({title:t('sys.reboot_q',{m:dev.model}),body:t('sys.reboot_body'),ok:t('sys.reboot')}))run(reboot,()=>api('/reboot',{}),'toast.rebooting');};
 const items=[h('div',{class:'item'},h('div',{class:'grow'},h('b',{i18n:'sys.reboot'}),h('span',{i18n:'sys.reboot_desc'})),reboot)];
 if(dev.factoryReset){
  const reset=h('button',{type:'button',class:'btn danger'},h('span',{i18n:'sys.reset'}));
  reset.onclick=async()=>{if(await confirmDialog({title:t('sys.reset_q'),body:t('sys.reset_body'),ok:t('sys.reset'),danger:true}))run(reset,()=>api('/device/reset',{full:true}),'toast.resetting');};
  items.push(h('div',{class:'item'},h('div',{class:'grow'},h('b',{i18n:'sys.reset'}),h('span',{i18n:'sys.reset_desc'})),reset));
 }
 return h('div',{class:'stack'},pageHead('nav.maintenance','sys.lead'),
  h('section',{class:'card danger-zone'},h('div',{class:'list'},items),
   h('p',{class:'help',style:'margin-top:12px',i18n:dev.buttonHintKey},t(dev.buttonHintKey))));
}
/* Slots shared by every "General" page. */
function nameCard(){
 const input=h('input',{id:'deviceName',maxLength:63}),meta=h('div');
 const form=h('form',{id:'nameForm',class:'stack'},h('label',{class:'field'},h('span',{i18n:'gen.name'}),
  h('div',{class:'row'},h('div',{class:'grow'},input),h('button',{class:'btn primary',type:'submit'},h('span',{i18n:'common.save'}))),
  h('button',{class:'btn ghost',type:'button',onclick:e=>run(e.currentTarget,async()=>{await api('/deviceName',{name:''});await UI.reload();input.value=UI.state?.name||'';},'common.saved')},h('span',{i18n:'gen.default_name'}))),meta);
 onSubmit(form,()=>{if(new TextEncoder().encode(input.value).length>63)throw Error(t('gen.name_long'));return api('/deviceName',{name:input.value});});
 return {el:card('gen.identity',null,form),init(s){input.value=s.name||'';},status(s){meta.replaceChildren(summary([['gen.device_id',h('span',{class:'num'},prettyMac(s.device_id))],['gen.uptime',duration(s.uptime_seconds||0)]]));}};
}
function authCard(){
 const input=h('input',{id:'webPassword',type:'password',maxLength:32,autocomplete:'new-password',placeholder:t('auth.ph')});
 const state=h('span',{class:'badge'});
 const form=h('form',{id:'authForm',class:'stack'},h('label',{class:'field'},h('span',{i18n:'auth.password'}),input,h('p',{class:'help',i18n:'auth.help'})),
  h('div',{class:'form-actions'},h('button',{class:'btn primary',type:'submit'},h('span',{i18n:'auth.set'}))));
 onSubmit(form,()=>{if(input.value&&!/^[\\x20-\\x7e]{8,32}$/.test(input.value))throw Error(t('auth.invalid'));return api('/auth/password',{password:input.value});});
 const c=card('auth.title','auth.lead',form);c.querySelector('.card-head').append(state);
 return {el:c,status(s){state.className='badge '+(s.web_password_set?'ok':'');state.textContent=t(s.web_password_set?'auth.on':'auth.off');}};
}
function clockCard({load,save,status}){
 const sum=h('div'),tz=h('select'),ntp=h('input',{maxLength:63,required:true,placeholder:'ntp1.aliyun.com'});
 const fill=()=>{const v=tz.value;tz.replaceChildren(...TZ.map(m=>h('option',{value:m},tzLabel(m))));tz.value=v;};fill();I18N.onChange(fill);
 const form=h('form',{class:'stack'},h('div',{class:'fields'},
   h('label',{class:'field'},h('span',{i18n:'clock.tz'}),tz),h('label',{class:'field'},h('span',{i18n:'clock.ntp'}),ntp)),
  info('clock.hint'),h('div',{class:'form-actions'},h('button',{class:'btn primary',type:'submit'},h('span',{i18n:'common.save'}))));
 onSubmit(form,()=>save({timezone_minutes:Number(tz.value),ntp_host:ntp.value.trim()}));
 return {el:card('clock.title',null,sum,h('div',{style:'margin-top:16px'},form)),
  async show(){const c=await load();if(!c)return;tz.value=String(c.timezone_minutes||480);ntp.value=c.ntp_host||'';},
  status(s){sum.replaceChildren(summary(status(s)));}};
}

/* ---------- Boot ---------- */
let initialized=false,failures=0,lastSuccess=0,loading=null;
let stopped=false,pollingStarted=false,pollTimer=null,pollGeneration=0;
const lockedControls=new Map();
function lockHome(){if(!UI.embedded)return;for(const el of document.querySelectorAll('#homePage button,#homePage input,#homePage select')){if(!lockedControls.has(el))lockedControls.set(el,el.disabled);el.disabled=true;}}
function unlockHome(){for(const [el,disabled] of lockedControls)el.disabled=disabled;lockedControls.clear();}
async function load(){
 const lifecycle=pollGeneration;
 try{
  const params=UI.statusParams(),generation=fullGeneration;
  const raw=await command('status.get',params);
  if(stopped||lifecycle!==pollGeneration)return null;
  failures=0;lastSuccess=Date.now();unlockHome();
  if(!params.view&&!raw.ota_mode){lastFullAt=Date.now();loadedGeneration=generation;}
  if(raw.ota_active&&raw.ota_mode){UI.pages.firmware?.status(raw);return raw;}
  const s=UI.acceptStatus(raw,params.view==='live');
  $('title').textContent=UI.device.model+' '+(s.name||'');
  renderChips(s);renderBanners(s,false);
  if(!initialized){for(const p of Object.values(UI.pages))if(p.init)p.init(s);initialized=true;}
  for(const [key,p] of Object.entries(UI.pages))if(p.status&&(key===UI.activePage()||key.startsWith('slot_')&&UI.activePage()==='device'))p.status(s);
  if(UI.device.onStatus)UI.device.onStatus(s);
  return raw;
 }catch(e){if(!stopped&&lifecycle===pollGeneration&&++failures>=3&&(!lastSuccess||Date.now()-lastSuccess>=30000)){lockHome();renderBanners(null,true);}return null;}
}
function pollLoad(){if(stopped)return Promise.resolve(null);if(!loading)loading=load().finally(()=>{loading=null;});return loading;}
window.addEventListener('pagehide',()=>{stopped=true;pollGeneration++;clearTimeout(pollTimer);pollTimer=null;});
async function refreshStatus(generation=pollGeneration,resuming=false){
 if(stopped||generation!==pollGeneration)return;
 if(!document.hidden||!initialized){
  // An old request may settle after cache restoration. Retire it before the
  // required full read; its former loop cannot schedule another timer.
  if(resuming&&loading)await loading;
  if(stopped||generation!==pollGeneration)return;
  await pollLoad();
 }
 if(!stopped&&generation===pollGeneration)pollTimer=setTimeout(function refresh(){
  if(generation===pollGeneration)pollTimer=null;
  return refreshStatus(generation);
 },UI.activePage()?(UI.activePage()==='diagnostics'?5000:10000):(UI.device.interval||2000));
}
window.addEventListener('pageshow',()=>{
 if(!stopped)return;
 stopped=false;UI.invalidateStatus();
 if(pollingStarted)refreshStatus(pollGeneration,true);
});
UI.reload=async({full=false}={})=>{if(full)UI.invalidateStatus();if(loading)await loading;return pollLoad();};
document.addEventListener('visibilitychange',()=>{if(UI.device&&!document.hidden&&!stopped)UI.reload({full:true});});
UI.showRoute=showRoute;
UI.start=async dev=>{
 UI.device=dev;lockHome();
 const first=dev.groups.flatMap(g=>g[1])[0];
 document.body.prepend(header(dev),
  h('nav',{class:'tabs','aria-label':'Main'},
   h('a',{href:'#home','data-tab':'home'},icon('home'),h('span',{i18n:'nav.home'})),
   h('a',{href:'#settings/'+first,'data-tab':'settings'},icon('sliders'),h('span',{i18n:'nav.settings'}))),
  h('div',{id:'banners'}));
 UI.caps=await command('capabilities.get').catch(()=>({actions:[]}));
 const pages=$('pages');
 // Pages the framework builds for every product.
 const builders={network:wifiPage,mqtt:mqttPage,firmware:firmwarePage,diagnostics:diagnosticsPage,maintenance:maintenancePage,logs:logsPage};
 for(const [key,build] of Object.entries(builders)){const p=build(dev);UI.pages[key]=p;pages.append(h('div',{'data-settings-page':key,hidden:true},p.el));}
 // Automation pages, when the device advertises the capability.
 Object.assign(UI.pages,window.automationPages(dev));
 // Product pages: the product supplies show()/status(); the markup is either
 // already in the document or appended below.
 for(const [key,p] of Object.entries(dev.pages))UI.pages[key]=Object.assign(UI.pages[key]||{},p);
 for(const [key,p] of Object.entries(UI.pages)){
  let box=document.querySelector('[data-settings-page="'+key+'"]');
  if(!box){box=h('div',{'data-settings-page':key,hidden:true});pages.append(box);}
  if(p.el)box.append(p.el);
 }
 for(const slot of document.querySelectorAll('[data-slot]')){const p=slot.dataset.slot==='name'?nameCard():authCard();UI.pages['slot_'+slot.dataset.slot]=p;slot.replaceWith(p.el);}
 buildNav(dev);
 window.addEventListener('hashchange',showRoute);showRoute();
 I18N.apply();
 I18N.onChange(()=>{if(UI.state){renderChips(UI.state);renderBanners(UI.state,false);for(const p of Object.values(UI.pages))if(p.status)p.status(UI.state);}});
 pollingStarted=true;refreshStatus();
};
})();
<\/script>
<script>/* Automation pages shared by the three products: schedules, custom button
 * events and night mode. Installed by ui.js when the device reports the
 * matching capability. All traffic goes through command() from service.js. */
(()=>{
'use strict';
const {t}=I18N;
const {h,icon,toast,run,switchRow,seg,daysPicker,presetDays,daysText,hhmm,toMinutes,info,card,pageHead,slider,clone}=UI;

/* Action kinds a schedule or button event can run, keyed by action name. */
const ACTIONS={
 'fan.panel':'op.fan_panel','fan.mode.set':'auto.mode','fan.mode.toggle':'auto.toggle','outlet.set':'op.outlet','fan.set':'op.fan','light.set':'op.light',
 'child_lock.set':'op.child_lock','indicator.set':'op.indicator',
 'display.set':'op.display','system.reboot':'op.reboot',
 'light_effect.next':'op.effect_next','light_effect.select':'op.effect_select',
 'filter.reset':'op.filter_reset','light_always.set':'op.light_always'};
const actKey=a=>ACTIONS[a]||'op.none';
const sel=(parent,labelKey,options)=>{const s=h('select',{},options.map(([v,k])=>h('option',{value:v},typeof k==='function'?k():t(k))));parent.append(h('label',{class:'field'},h('span',{i18n:labelKey}),s));return s;};

/* Shared action editor: one control group per supported action. */
function actionEditor(host,{keys=false}={}){
 const caps=UI.caps||{},available=Object.keys(ACTIONS).filter(a=>(caps.actions||[]).includes(a)&&(keys||!['light_effect.next','light_effect.select','filter.reset','fan.mode.toggle','fan.panel'].includes(a)));
 const box=h('div',{class:'stack'}),fields=h('div',{class:'stack'});
 const options=[...(keys?[['none','op.none']]:[]),...available.map(a=>[a,actKey(a)])];
 const pick=keys?sel(host,'btn.action',options):seg(options,v=>draw(v),{full:true});
 if(keys){pick.set=v=>{pick.value=v;};pick.addEventListener('change',()=>draw(pick.value));host.append(box);}
 else host.append(pick,box);
 box.append(fields);
 let read=()=>({}),current=keys?'none':(available[0]||'none');
 function draw(a,params={}){
  current=a;fields.replaceChildren();read=()=>({});
  if(a==='none'||!a)return;
  const parts=[];
  if(a==='outlet.set'){
   const index=sel(fields,'op.target',[['all','op.all'],...[0,1,2,3,4,5].map(i=>[String(i),()=>t('tc1.socket_n',{n:i+1})])]);
   if(params.index!=null)index.value=String(params.index);
   parts.push(()=>index.value==='all'?{}:{index:Number(index.value)});
  }
  if(a==='fan.mode.set'){const mode=sel(fields,'auto.mode',[['manual','auto.manual'],['auto','auto.auto']]);mode.value=params.mode||'manual';parts.push(()=>({mode:mode.value}));}
  const switchable=['outlet.set','fan.set','light.set','child_lock.set','indicator.set','light_always.set'].includes(a);
  if(switchable){
   const values=keys&&(['outlet.set','fan.set'].includes(a)||caps.model==='a1')?['on','off','toggle']:['on','off'];
   const on=sel(fields,'op.state',values.map(v=>[v,'op.'+v]));
   on.value=params.toggle?'toggle':(params.on===false||params.enabled===false)?'off':'on';
   const field=['outlet.set','fan.set'].includes(a)?'on':'enabled';
   parts.push(()=>on.value==='toggle'?{toggle:true}:{[field]:on.value==='on'});
  }
  if(a==='light_effect.select'){
   const effect=sel(fields,'op.effect_select',Array.from({length:5},(_,i)=>[String(i),'a1.effect.'+i]));
   effect.value=String(params.effect||0);parts.push(()=>({effect:Number(effect.value)}));
  }
  if(a==='filter.reset')fields.append(info('filter.reset_hint'));
  if(a==='fan.set'){
   const m={speed:params.speed||60},[out,range]=slider(m,'speed',{min:1});
   fields.append(h('div',{class:null},h('div',{class:'row between'},h('span',{class:'label',i18n:'op.speed'}),out)),range);
   parts.push(()=>({speed:Number(m.speed)}));
  }
  if(a==='light.set'||a==='display.set'){
   const step=a==='display.set'?25:1,m={brightness:params.brightness!=null?params.brightness:100};
   const [out,range]=slider(m,'brightness',{min:0,max:100,step,fmt:v=>v+'%'});
   fields.append(h('div',{class:null},h('div',{class:'row between'},h('span',{class:'label',i18n:'op.brightness'}),out)),range);
   if(a==='light.set'&&keys){
    const setBrightness=switchRow(null,'op.set_brightness');setBrightness.querySelector('input').checked=params.brightness!=null;
    fields.append(setBrightness);parts.push(()=>setBrightness.querySelector('input').checked?{brightness:Number(m.brightness)}:{});
   }else parts.push(()=>({brightness:Number(m.brightness)}));
  }
  read=()=>Object.assign({},...parts.map(f=>f()));
  current=a;
 }
 draw(keys?'none':(available[0]||'none'));
 return {
  get(){return {action:current,params:read()};},
  set(a,p){current=a;pick.set(a);draw(a,p||{});}
 };
}

/* ---------- Schedules ---------- */
function schedulePage(dev){
 const box=h('div',{class:'stack'}),listBox=h('div',{class:'stack'});
 let offset=0,editing=0,tasks=[];
 const tz=()=>((UI.state&&UI.state.timezone_minutes)||480)*60;
 const atText=sec=>new Date((sec+tz())*1000).toISOString().slice(0,16).replace('T',' ');
 const duration=sec=>{sec=Math.max(0,Math.ceil(sec));return String(Math.floor(sec/3600)).padStart(2,'0')+':'+String(Math.floor(sec/60)%60).padStart(2,'0')+':'+String(sec%60).padStart(2,'0');};
 const when=x=>x.trigger==='countdown'?duration(x.enabled?Math.max(0,x.remaining_seconds-(performance.now()-x.received)/1000):x.seconds):x.trigger==='once'?atText(x.at):hhmm(x.minute);
 const timeValue=()=>{const d=new Date(Date.now()+tz()*1000+86400000);return d.toISOString().slice(0,16);};

 const enabled=switchRow(null,'sch.enabled_row');
 const trigger=seg([['weekly','sch.weekly'],['once','day.once'],...(UI.caps.schedule_countdown?[['countdown','sch.countdown']]:[])],v=>syncTrigger(),{full:true});
 const days=daysPicker('sdays',127),time=h('input',{type:'time',value:'08:00'}),at=h('input',{type:'datetime-local',value:timeValue()});
 const weekly=h('div',{class:'field'},h('div',{class:'row between'},h('span',{class:'label',i18n:'sch.repeat'}),presetDays(days)),days);
 const once=h('label',{class:'field',hidden:true},h('span',{i18n:'sch.when'}),at);
 const minute=h('label',{class:'field'},h('span',{i18n:'sch.time'}),time);
 const editorHost=h('div',{class:'stack'});
 const hours=h('input',{type:'number',min:0,max:24,step:1,value:0,'aria-label':t('sch.hours')}),minutes=h('input',{type:'number',min:0,max:59,step:1,value:30,'aria-label':t('sch.minutes')});
 const countdown=h('div',{class:'stack',hidden:true},h('div',{class:'fields'},h('label',{class:'field'},h('span',{i18n:'sch.hours'}),hours),h('label',{class:'field'},h('span',{i18n:'sch.minutes'}),minutes)),info('sch.countdown_hint'));
 function syncTrigger(){const mode=trigger.value;weekly.hidden=mode!=='weekly';once.hidden=mode!=='once';minute.hidden=mode!=='weekly';countdown.hidden=mode!=='countdown';hours.disabled=minutes.disabled=mode!=='countdown';editorHost.hidden=mode==='countdown';}

 const editor=actionEditor(editorHost);
 const save=h('button',{type:'submit',class:'btn primary'});
 const labelSave=()=>save.replaceChildren(icon('plus'),h('span',{},t(editing?'sch.save_btn':'sch.add_btn')));
 labelSave();
 function row(x){
  return h('div',{class:'item schedule-task'},h('b',{class:'time num','data-countdown-id':x.trigger==='countdown'?x.id:null},when(x)),
   h('div',{class:'grow'},h('b',{},t(actKey(x.action))+(x.trigger==='weekly'?' · '+daysText(x.days):' · '+t(x.trigger==='countdown'?'sch.countdown':'day.once'))),
    h('span',{},t('sch.state.'+(x.state||'waiting'))+(x.enabled?'':' · '+t('sch.off')))),
   h('span',{class:'badge '+(x.enabled?'ok':'')},t(x.enabled?'sch.enabled':'sch.disabled')),
   h('div',{class:'row',style:'gap:4px'},
    h('button',{type:'button',class:'btn ghost',onclick:()=>edit(x)},h('span',{i18n:'sch.edit'})),
    h('button',{type:'button',class:'btn ghost',onclick:ev=>run(ev.currentTarget,()=>command('schedules.enable',{id:x.id,enabled:!x.enabled}).then(load),null)},h('span',{i18n:x.trigger==='countdown'?(x.enabled?'sch.cancel':'sch.restart'):(x.enabled?'sch.disable':'sch.enable')})),
    h('button',{type:'button',class:'btn ghost icon','aria-label':t('common.delete'),onclick:ev=>run(ev.currentTarget,()=>command('schedules.delete',{id:x.id}).then(load),'common.deleted')},icon('trash'))));
 }
 async function load(){
  const d=await command('schedules.get',{offset,limit:8});tasks=d.items.map(x=>({...x,received:performance.now()}));
  listBox.replaceChildren(
   tasks.length?h('div',{class:'list'},tasks.map(row)):h('div',{class:'empty'},t('sch.empty')),
   h('div',{class:'row between'},h('span',{class:'help'},t('sch.used',{a:d.count,b:d.capacity})),
    h('div',{class:'row',style:'gap:4px'},
     h('button',{type:'button',class:'btn ghost',onclick:()=>run(null,()=>{offset=Math.max(0,offset-8);return load();},null)},h('span',{i18n:'common.prev'})),
     h('button',{type:'button',class:'btn ghost',onclick:()=>run(null,()=>{offset=d.next;return load();},null),disabled:offset+8>=d.count},h('span',{i18n:'common.next'})))));
  banner.hidden=!(UI.state&&UI.state.time_synced===false);
 }
 function reset(){editing=0;enabled.querySelector('input').checked=true;trigger.set('weekly');syncTrigger();days.setMask(127);time.value='08:00';editor.set('none');hours.value=0;minutes.value=30;labelSave();}
 function edit(x){
  editing=x.id;enabled.querySelector('input').checked=!!x.enabled;trigger.set(x.trigger);syncTrigger();
  days.setMask(x.days);time.value=hhmm(x.minute);at.value=x.trigger==='countdown'?timeValue():atText(x.at);hours.value=Math.floor((x.seconds||0)/3600);minutes.value=Math.floor((x.seconds||0)%3600/60);editor.set(x.action,x.params);labelSave();
  box.scrollIntoView({block:'start'});
 }
 const banner=h('div',{class:'banner warn',hidden:true},icon('clock'),h('span',{i18n:'sch.no_clock'}));
 const form=h('form',{class:'subcard stack'},h('h3',{i18n:'sch.new'}),trigger,weekly,once,minute,countdown,editorHost,enabled,
  h('div',{class:'form-actions'},save,
   h('button',{type:'button',class:'btn ghost',onclick:reset},h('span',{i18n:'sch.reset'}))));
 form.addEventListener('submit',e=>{e.preventDefault();run(save,async()=>{
  const a=trigger.value==='countdown'?{action:'fan.set',params:{on:false}}:editor.get();
  if(a.action==='none')throw Error(t('sch.pick_action'));
  const task={enabled:enabled.querySelector('input').checked,trigger:trigger.value,...a};
  if(editing)task.id=editing;
  if(trigger.value==='countdown'){const h=Number(hours.value),m=Number(minutes.value);task.seconds=h*3600+m*60;if(!Number.isInteger(h)||!Number.isInteger(m)||h<0||m<0||m>59||task.seconds<60||task.seconds>86400)throw Error(t('sch.duration_invalid'));}
  else if(trigger.value==='weekly'){const d=days.mask();if(!d)throw Error(t('sch.pick_day'));task.days=d;task.minute=toMinutes(time.value);}
  else{const parsed=Date.parse(at.value);if(!Number.isFinite(parsed))throw Error(t('sch.pick_when'));
   task.at=Math.floor(parsed/1000)-tz();if(task.at<=Math.floor(Date.now()/1000))throw Error(t('sch.future'));}
  await command('schedules.put',task);reset();await load();toast(t('sch.added'));
 },null);});
 enabled.querySelector('input').checked=true;trigger.set('weekly');syncTrigger();
 box.append(form,info('sch.hint'));
 return {el:h('div',{class:'stack'},pageHead('nav.schedule',dev.scheduleLead),banner,card('sch.list',null,listBox,box)),
  async show(){if(!UI.state)await UI.reload();await load();},
  status(){if(!box.isConnected||box.closest('[data-settings-page]')?.hidden)return;
   for(const x of tasks.filter(x=>x.trigger==='countdown')){const label=listBox.querySelector('[data-countdown-id="'+x.id+'"]');if(label)label.textContent=when(x);}
   if(tasks.some(x=>x.trigger==='countdown'&&x.enabled))run(null,load,null);
  }};
}

/* ---------- Custom button events ---------- */
function buttonsPage(dev){
 const listBox=h('div',{class:'stack'}),keyHost=h('div',{class:'fields'});
 const keyIds=dev.model==='A1'?(UI.caps.button_keys?.includes('combination')?[0,1,2]:[0,1]):[0];
 const keyName=k=>t(dev.model==='A1'?['btn.key_power','btn.key_wifi','btn.key_both'][Number(k)]:'btn.key_fn');
 const key=sel(keyHost,'btn.key',keyIds.map(k=>[String(k),()=>keyName(k)]));
 const count=h('input',{type:'number',min:1,max:30,value:1,required:true});
 const countLabel=h('span',{},t('btn.click_count'));
 const kind=seg([['clicks','btn.click'],['seconds','btn.hold']],v=>{
  count.max=v==='seconds'?4:30;count.value=Math.min(Number(count.value)||1,Number(count.max));
  countLabel.textContent=t(v==='seconds'?'btn.hold_count':'btn.click_count');preview();
 },{full:true});kind.set('clicks');
 keyHost.append(h('div',{class:'field'},h('span',{i18n:'btn.kind'}),kind),h('label',{class:'field'},countLabel,count));
 const editorHost=h('div',{class:'stack'}),editor=actionEditor(editorHost,{keys:true});
 const gesture=v=>v.seconds?t('btn.hold_full',{n:v.seconds}):t(v.clicks===1?'btn.single':'btn.click_full',{n:v.clicks});
 function actionText(v){
  if(v.action==='none')return t('op.none');
  const p=v.params||{},state=t(p.toggle?'op.toggle':p.on===false||p.enabled===false?'op.off':'op.on');
  const target=v.action==='outlet.set'?(p.index==null?t('op.all'):(UI.state?.socket_names?.[p.index]||t('tc1.socket_n',{n:p.index+1}))):t(actKey(v.action));
  if(['system.reboot','light_effect.next','filter.reset','fan.panel','fan.mode.toggle'].includes(v.action))return target;
  if(v.action==='light_effect.select')return target+' · '+t('a1.effect.'+p.effect);
  let text=v.action==='display.set'?target:state+' · '+target;
  if(p.speed!=null)text+=' · '+p.speed+'%';
  if(p.brightness!=null)text+=' · '+p.brightness+'%';
  return text;
 }
 const previewBox=h('div',{class:'button-preview','aria-live':'polite'});
 function preview(){
  const v={key:Number(key.value),[kind.value]:Number(count.value),...editor.get()};
  previewBox.textContent=keyName(v.key)+' · '+gesture(v)+' → '+actionText(v);
 }
 const editorCard=h('form',{class:'card stack','data-button-editor':''});
 const selected=()=>({key:Number(key.value),[kind.value]:Number(count.value)});
 function edit(v){
  key.value=String(v.key);kind.set(v.seconds?'seconds':'clicks');count.max=v.seconds?4:30;
  countLabel.textContent=t(v.seconds?'btn.hold_count':'btn.click_count');count.value=v.seconds||v.clicks;
  editor.set(v.action,v.params);preview();editorCard.scrollIntoView({block:'nearest',behavior:'smooth'});count.focus();
 }
 function row(v){
  return h('div',{class:'button-mapping'},h('b',{class:'button-gesture'},gesture(v)),
   h('span',{class:'button-result'},actionText(v)),h('div',{class:'row'},
    h('button',{type:'button',class:'btn ghost',onclick:()=>edit(v)},t('sch.edit')),
    h('button',{type:'button',class:'btn ghost','aria-label':t('common.delete')+' '+gesture(v),onclick:e=>run(e.currentTarget,async()=>{
     await command('buttons.set',{key:v.key,...(v.seconds?{seconds:v.seconds}:{clicks:v.clicks}),action:'none',params:{}});await load();
    },'common.deleted')},t('common.delete'))));
 }
 async function load(){
  const items=[];let offset=0,capacity=68;
  do{const page=await command('buttons.get',{offset,limit:8});items.push(...page.items);capacity=page.capacity||capacity;if(page.next==null||page.next<=offset)break;offset=page.next;}while(offset<capacity);
  listBox.replaceChildren();
  for(const k of keyIds){
   const groups=[];
   for(const type of ['clicks','seconds']){
    const values=items.filter(v=>Number(v.key)===k&&v[type]>0).sort((a,b)=>a[type]-b[type]);
    const runs=[];
    for(const v of values){const last=runs[runs.length-1];
     if(last&&v[type]===last[last.length-1][type]+1&&JSON.stringify([v.action,v.params])===JSON.stringify([last[0].action,last[0].params]))last.push(v);
     else runs.push([v]);
    }
    if(runs.length)groups.push(h('section',{class:'button-group'},h('h3',{},t(type==='clicks'?'btn.click':'btn.hold')),runs.map(run=>run.length===1?row(run[0]):
     h('details',{class:'button-range'},h('summary',{},h('b',{},t(type==='clicks'?'btn.click_range':'btn.hold_range',{a:run[0][type],b:run[run.length-1][type]})),h('span',{},actionText(run[0])),h('span',{class:'help'},t('btn.expand'))),run.map(row)))));
   }
   listBox.append(h('section',{class:'stack'},h('h3',{},keyName(k)),groups.length?groups:h('div',{class:'empty'},t('btn.empty'))));
  }
 }
 const save=h('button',{type:'submit',class:'btn primary'},t('common.save'));
 editorCard.append(h('h2',{i18n:'btn.edit'}),keyHost,editorHost,previewBox,h('div',{class:'form-actions'},save));
 editorCard.addEventListener('input',preview);editorCard.addEventListener('change',preview);editorCard.addEventListener('click',()=>preview());
 editorCard.addEventListener('submit',e=>{e.preventDefault();if(!editorCard.reportValidity())return;
  run(save,async()=>{const a=editor.get();if(a.action==='none')throw Error(t('btn.pick_action'));
   await command('buttons.set',{...selected(),...a});await load();},'common.saved');
 });
 let filterStatus,filterHours;
 function filterCards(){
  if(dev.model!=='A1'||!UI.caps.actions.includes('filter.get'))return [];
  filterStatus=h('p',{'data-filter-status':''});filterHours=h('input',{type:'number',min:1,max:20000,required:true,'data-filter-hours':''});
  const form=h('form',{class:'stack'},filterStatus,info('filter.hint'),h('label',{class:'field'},h('span',{i18n:'filter.lifetime'}),filterHours),
   h('div',{class:'form-actions'},h('button',{type:'submit',class:'btn primary'},t('common.save')),
    h('button',{type:'button',class:'btn ghost',onclick:e=>run(e.currentTarget,async()=>{if(!window.confirm(t('filter.reset_confirm')))return;await command('filter.reset',{});await loadFilter();},null)},t('op.filter_reset'))));
  form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;run(null,async()=>{await command('filter.set',{lifetime_hours:Number(filterHours.value)});await loadFilter();},'common.saved');});
  return [card('filter.title',null,form)];
 }
 async function loadFilter(){if(!filterStatus)return;const f=await command('filter.get');filterHours.value=f.lifetime_hours;filterStatus.textContent=t('filter.status',{used:(f.used_seconds/3600).toFixed(1),remaining:f.remaining_percent});}
 preview();
 return {el:h('div',{class:'stack'},pageHead('nav.buttons','btn.lead'),card('btn.current',null,listBox),
  card('btn.recovery',null,h('div',{class:'button-mapping'},h('b',{},t('btn.hold_full',{n:5})),h('span',{},t('btn.reset_wifi'))),
   h('div',{class:'button-mapping'},h('b',{},t('btn.hold_full',{n:10})),h('span',{},t('op.10'))),info(dev.model==='A1'?'btn.reset_note_a1':'btn.reset_note')),editorCard,...filterCards()),
  async show(){await load();await loadFilter();preview();}};
}

/* ---------- Night mode ---------- */
function nightPage(dev){
 const modern=UI.caps?.actions?.includes('fan.mode.set');
 const isM1=dev.model==='M1',list=h('div',{class:'stack'});
 let model=[];
 function window(cfg,i){
  const days=daysPicker('ndays'+i,cfg.days),start=h('input',{type:'time',value:hhmm(cfg.start)}),end=h('input',{type:'time',value:hhmm(cfg.end)});
  const dim=switchRow(null,isM1?'night.screen':'night.light','night.light_desc');dim.querySelector('input').checked=!!cfg.light;
  const bright={brightness:Math.round(cfg.brightness*100/255)};
  const [bOut,bRange]=slider(bright,'brightness',{min:0,max:100,step:isM1?25:1,fmt:v=>v?v+'%':t('state.off')});
  const speed={max_speed:cfg.max_speed,min_speed:cfg.min_speed??0,fallback_speed:cfg.fallback_speed??30};
  const [fOut,fRange]=slider(speed,'max_speed',{min:1});
  const fan=switchRow(null,'night.fan','night.fan_desc'),block=switchRow(null,'night.block_t','night.block_desc');
  fan.querySelector('input').checked=!!cfg.fan;block.querySelector('input').checked=!!cfg.block_start;
  const automatic=[];
  if(modern)for(const key of ['min_speed','fallback_speed']){const [out,range]=slider(speed,key,{min:0,max:100});automatic.push(h('div',{class:'row between'},h('span',{i18n:key==='min_speed'?'auto.minimum':'auto.fallback'}),out),range);}
  const extra=isM1?[]:[fan,h('div',{class:'field'},h('div',{class:'row between'},h('span',{class:'label',i18n:'night.fan_max'}),fOut)),fRange,...(modern?automatic:[block])];
  const field=h('fieldset',{},h('legend',{},t('night.period',{n:i+1})),
   h('div',{class:'field'},h('div',{class:'row between'},h('span',{class:'label',i18n:'sch.repeat'}),presetDays(days)),days),
   h('div',{class:'fields'},h('label',{class:'field'},h('span',{i18n:'night.start'}),start),h('label',{class:'field'},h('span',{i18n:'night.end'}),end)),
   dim,h('div',{class:'field'},h('div',{class:'row between'},h('span',{class:'label',i18n:'night.light_max'}),bOut)),bRange,...extra,
   h('div',{class:'form-actions'},h('button',{type:'button',class:'btn ghost',onclick:()=>{model.splice(i,1);draw();}},icon('trash'),h('span',{i18n:'common.delete'}))));
  // One listener writes the whole window back, so no control can drift.
  const collect=()=>{
   cfg.days=days.mask();cfg.start=toMinutes(start.value);cfg.end=toMinutes(end.value);
   cfg.light=Number(dim.querySelector('input').checked);cfg.brightness=Math.round(bright.brightness*255/100);
   if(!isM1){cfg.fan=Number(fan.querySelector('input').checked);cfg.block_start=Number(block.querySelector('input').checked);cfg.max_speed=Number(speed.max_speed);if(modern){cfg.min_speed=Number(speed.min_speed);cfg.fallback_speed=Number(speed.fallback_speed);}}
  };
  field.addEventListener('input',collect);field.addEventListener('change',collect);
  return field;
 }
 function draw(){
  list.replaceChildren(...(model.length?model.map(window):[h('div',{class:'empty'},t('night.empty'))]));
 }
 const add=h('button',{type:'button',class:'btn'},icon('plus'),h('span',{i18n:'night.add_btn'}));
 add.onclick=()=>run(add,async()=>{if(model.length>=4)throw Error(t('common.max',{n:4}));
  model.push({days:127,fan:isM1?0:1,light:1,max_speed:30,min_speed:0,fallback_speed:30,brightness:0,block_start:0,start:1320,end:420});draw();},null);
 const save=h('button',{type:'button',class:'btn primary'},h('span',{i18n:'common.save'}));
 save.onclick=()=>run(save,async()=>{await command('night.set',{windows:model});toast(t('common.saved'));});
 return {el:h('div',{class:'stack'},pageHead('nav.sleep','night.lead'),card('night.list',null,list,
  info('night.hint'),h('div',{class:'form-actions'},add,save))),
  async show(){model=clone((await command('night.get')).windows||[]);draw();}};
}

window.automationPages=dev=>{
 const caps=(UI.caps&&UI.caps.actions)||[];
 const pages={};
 if(!caps.length||caps.includes('schedules.get'))pages.schedule=schedulePage(dev);
 if(caps.includes('buttons.set')&&dev.hasButtons)pages.buttons=buttonsPage(dev);
 if(caps.includes('night.get'))pages.night=nightPage(dev);
 return pages;
};
})();
<\/script>
<script>// Embedded pages use the complete shared settings initialization and product UI.
(()=>{
 UI.embedded=true;UI.embeddedRoute='home';
 document.addEventListener('click',event=>{
  const link=event.target.closest('a[href^="#"]');if(!link)return;
  const route=link.getAttribute('href').slice(1);
  if(route!=='home'&&!/^settings\\/[a-z]+$/.test(route))return;
  event.preventDefault();UI.embeddedRoute=route;UI.showRoute();
 });
 const start=UI.start;
 UI.start=async dev=>{
  I18N.set('zh-CN');
  await start(dev);
  const header=document.querySelector('.topbar');if(header)header.hidden=true;
 };
 window.addEventListener('storage',event=>{
  if(event.key!=='phicomm.appearance')return;
  if(event.newValue==='system'||!event.newValue)delete document.documentElement.dataset.theme;
  else document.documentElement.dataset.theme=event.newValue;
 });
 const style=document.createElement('style');style.textContent='body{max-width:none;margin:0;padding:0 0 8px}.banner{margin-top:0}@media(max-width:600px){.grid{grid-template-columns:minmax(0,1fr)}.metric .stat{display:flex;flex-wrap:wrap;align-items:baseline;column-gap:4px}.metric .stat small{margin-left:0}}';document.head.append(style);
 new ResizeObserver(()=>parent.postMessage({type:'device-height',height:Math.ceil(document.body.getBoundingClientRect().height)+8},parent.location.origin)).observe(document.body);
})();

/* A1 air purifier page. Product-specific pages: light effects, M1 binding and
 * automatic control. Shared pages come from ui.js and automation.js. */
(()=>{
'use strict';
const {t}=I18N;
const {$,h,icon,toast,run,onSubmit,confirm,switchRow,seg,summary,card,info,pageHead,saveBar,num,flag,slider,hhmm,toMinutes,normalizeMac,prettyMac,clone}=UI;

let advanced={effect:0,segments:3,segment:[]},bindingStatus={peers:[],members:[],linkage_status:'disabled'};
const refresh=()=>UI.reload();

/* ---------- Home: fan ---------- */
const power=$('power');power.append(icon('power'));
const speed=$('speed');let dragging=false;
const presets=seg([[20,()=>t('a1.p_quiet')+' 20%'],[40,()=>t('a1.p_low')+' 40%'],[60,()=>t('a1.p_mid')+' 60%'],[100,()=>t('a1.p_max')+' 100%']],v=>setSpeed(v),{full:true});
$('presets').replaceWith(presets);
const fanModes=seg([['manual','auto.manual'],['auto','auto.auto']],mode=>run(null,()=>UI.control('fan.mode.set',{mode},{fan_mode:mode}).then(refresh),null),{full:true});
$('fanMode').append(fanModes);
function setSpeed(v){speed.value=v;$('speedValue').textContent=v+'%';return run(null,()=>api('/fan/config',{speed:Number(v)}).then(refresh),null);}
speed.addEventListener('input',()=>{dragging=true;$('speedValue').textContent=speed.value+'%';presets.set(Number(speed.value));});
speed.addEventListener('change',()=>{dragging=false;setSpeed(speed.value);});
power.onclick=()=>{const on=!UI.state.fan_on;power.setAttribute('aria-pressed',String(on));run(power,()=>UI.control('fan.set',{on},{fan_on:on}),null);};
for(const id of ['childLock','childLockDevice'])$(id).onchange=e=>run(null,()=>UI.control('child_lock.set',{enabled:e.target.checked},{child_lock:e.target.checked}),e.target.checked?'a1.lock_on':'a1.lock_off');
function renderFan(s){
 const locked=s.ota_active||s.reboot_pending||UI.controlBusy;
 power.setAttribute('aria-pressed',String(s.fan_on));power.disabled=locked;speed.disabled=locked;
 presets.querySelectorAll('button').forEach(b=>b.disabled=locked);
 const auto=s.fan_mode==='auto';
 $('fanMode').hidden=!UI.caps?.actions?.includes('fan.mode.set');fanModes.set(s.fan_mode||'manual');
 fanModes.querySelectorAll('button').forEach(b=>b.disabled=locked);
 $('speedLabel').textContent=t(auto?'auto.maximum':'a1.speed');
 $('fanState').textContent=s.fan_on?t(s.fan_state==='idle'?'auto.idle':'a1.running'):t('a1.off');
 $('fanSub').textContent=locked?t('a1.locked_ota'):s.fan_on?t(auto?'a1.sub_auto':'a1.sub_manual',{p:s.percentage}):t('a1.sub_off',{p:s.requested_speed});
 const previewSpeed=$('previewSpeed');
 if(previewSpeed&&document.activeElement!==previewSpeed){const value=auto?s.auto_max_speed:s.requested_speed;previewSpeed.value=value;$('previewSpeedValue').textContent=value+'%';}
 if(!dragging&&document.activeElement!==speed){const v=auto?s.auto_max_speed:s.requested_speed;speed.value=v;$('speedValue').textContent=v+'%';presets.set(v);}
 $('outBar').style.width=s.applied_speed+'%';$('targetBar').style.width=s.percentage+'%';$('targetBar').hidden=!s.percentage;
 $('outText').textContent=!s.fan_on&&!s.applied_speed?t('a1.out_stopped'):s.applied_speed!==s.percentage?t('a1.out_ramp',{a:s.applied_speed,p:s.percentage}):t('a1.out_steady',{a:s.applied_speed});
 for(const [id,badge] of [['panelBadge',$('panelBadge')],['panelBadge2',$('panelBadge2')]]){badge.className='badge '+(s.panel_ready?'ok':'bad');badge.textContent=t(s.panel_ready?'a1.panel_ok':'a1.panel_bad');}
 for(const id of ['childLock','childLockDevice'])$(id).checked=s.child_lock;
}

/* Filter usage is owned by the device, including across browser sessions. */
let filterBusy=false,filterDirty=false;
function renderFilter(s){
 const f=s.filter,card=$('filterCard');card.hidden=!f||!Number.isFinite(f.remaining_percent);
 if(card.hidden)return;
 const remaining=Math.max(0,Math.min(100,f.remaining_percent));
 $('filterRemaining').textContent=remaining+'%';
 $('filterUsage').textContent=t('filter.usage',{used:(f.used_seconds/3600).toFixed(1),total:f.lifetime_hours});
 $('filterBar').style.width=remaining+'%';$('filterProgress').setAttribute('aria-valuenow',String(remaining));
 const badge=$('filterBadge');badge.className='badge '+(f.replacement_due?'warn':'ok');
 badge.textContent=t(remaining===0?'filter.expired':f.replacement_due?'filter.due':'filter.normal');
 if(!filterDirty&&document.activeElement!==$('filterLifetime'))$('filterLifetime').value=f.lifetime_hours;
 const locked=filterBusy||s.ota_active||s.reboot_pending||s.wifi_trial_active;
 for(const id of ['filterSave','filterReset','filterLifetime'])$(id).disabled=!!locked;
}
$('filterLifetime').oninput=()=>{filterDirty=true;};
async function changeFilter(action,params){
 if(filterBusy)return;filterBusy=true;if(UI.state)renderFilter(UI.state);
 try{const saved=await command(action,params);filterDirty=false;UI.state.filter=saved;renderFilter(UI.state);await refresh();}
 finally{filterBusy=false;if(UI.state)renderFilter(UI.state);}
}
onSubmit($('filterForm'),()=>changeFilter('filter.set',{lifetime_hours:Number($('filterLifetime').value)}));
$('filterReset').onclick=()=>run(null,async()=>{
 if(!await confirm({title:t('filter.reset'),body:t('filter.confirm'),ok:t('filter.reset'),danger:true}))return;
 await changeFilter('filter.reset',{});toast(t('filter.reset_done'));
},null);

/* ---------- Home: automatic control summary ---------- */
function renderAuto(){
 const c=$('autoCard'),st=bindingStatus.linkage_status,peers=bindingStatus.peers||[];
 const head=h('div',{class:'card-head'},h('div',{},h('h2',{},h('a',{href:'#settings/linkage',i18n:'a1.auto'})),h('p',{class:'help',i18n:'a1.auto_lead'})),
  h('div',{class:'row'},h('span',{class:'badge '+(st==='active'?'ok':st==='sensor_failed'?'warn':'')},t('s.link_'+st)),
   h('a',{class:'btn',href:'#settings/linkage'},h('span',{},t('auto.settings')))));
 if(!peers.length){c.replaceChildren(head,h('div',{class:'empty'},h('p',{},t(UI.state?.fan_mode==='auto'?'auto.no_sensor':'a1.auto_empty')),
  h('a',{class:'btn',href:'#settings/binding',style:'margin-top:12px'},icon('link'),h('span',{},t('a1.auto_link')))));return;}
 const fresh=peers.filter(p=>p.fresh).length;
 const meta=h('p',{class:'help'},t('a1.auto_peers',{n:peers.length,f:fresh})+' · '+peers.map(p=>String(p.transport||'mqtt').toUpperCase()).join('/'));
 const avg=bindingStatus.average||{};
 const readings=h('div',{class:'fields'},...[["temperature","°C"],["humidity","%"],["pm25","µg/m³"],["formaldehyde","mg/m³"],...(avg.co2_supported?[["co2","ppm"]]:[])].map(([key,unit])=>h('div',{class:'field'},h('span',{},t('average.'+key)),h('b',{},(key==='co2'?avg.co2_valid:avg.valid)&&Number.isFinite(avg[key])?Number(avg[key]).toFixed(key==='co2'?0:key==='formaldehyde'?3:1)+' '+unit:'—'))));
 if(st==='disabled'){c.replaceChildren(head,meta,readings,h('a',{class:'btn',href:'#settings/linkage',style:'margin-top:12px'},h('span',{},t('a1.auto_enable'))));return;}
 // replaceChildren() stringifies null, so build the list explicitly.
 const rows=[head,readings];
 if(st==='sensor_failed')rows.push(h('div',{class:'banner warn'},icon('alert'),h('span',{},t('a1.auto_failed'))));
 rows.push(h('div',{class:'row between'},meta,h('span',{class:'badge info'},t('a1.auto_speed',{p:bindingStatus.automatic_speed}))));
 c.replaceChildren(...rows);
}

/* ---------- Home: light ring ---------- */
const SWATCHES=[[217,80,0],[255,255,255],[255,170,60],[0,90,255],[0,200,120],[170,60,255],[255,30,60]];
let lightDirty=false,lightTimer=null,ringAnimationTimer=null,previewTarget=null,ringPolling=false,ringPolledAt=0,color=[0,0,255];
const hex=c=>'#'+c.map(n=>n.toString(16).padStart(2,'0')).join('');
const custom=h('input',{type:'color','aria-label':'custom'});
$('swatches').append(...SWATCHES.map(c=>h('button',{type:'button',class:'swatch',style:'--c:'+hex(c),'aria-label':hex(c),onclick:()=>{color=c;lightChanged();}})),custom);
custom.oninput=()=>{const v=custom.value;color=[1,3,5].map(i=>parseInt(v.slice(i,i+2),16));lightChanged();};
for(const id of ['ledEnabled','ledAlways'])$(id).onchange=lightChanged;
$('bright').oninput=lightChanged;
function lightChanged(){
 lightDirty=true;renderLightControls();if(UI.state)renderRing(UI.state);
 $('lightSave').textContent=t('common.saving');clearTimeout(lightTimer);
 // Debounced auto-save replaces the old "Apply" button.
 lightTimer=setTimeout(async()=>{try{
  await api('/light/config',{enabled:$('ledEnabled').checked,always_on:$('ledAlways').checked,brightness:Number($('bright').value),color:{r:color[0],g:color[1],b:color[2]}});
  $('lightSave').textContent=t('common.saved');lightDirty=false;}catch(e){$('lightSave').textContent='';toast(e.message,true);}},600);
}
function renderLightControls(){
 const on=$('ledEnabled').checked;
 $('brightValue').textContent=Math.round($('bright').value/255*100)+'%';
 document.querySelectorAll('.swatch').forEach((b,i)=>b.setAttribute('aria-pressed',String(hex(SWATCHES[i])===hex(color))));
 custom.value=hex(color);
 for(const el of [$('ledAlways'),$('bright'),custom,...document.querySelectorAll('.swatch')])el.disabled=!on;
}
function renderRing(s){
 if(!s)return;const N=31,svgs=document.querySelectorAll('.ring-preview-svg'),enabled=$('ledEnabled').checked,brightness=Number($('bright').value)/255;
 const touching=previewTarget!==null||!!s.touch_active,eff=touching?0:advanced.effect,now=performance.now(),speed=Number(s.percentage??s.speed??s.requested_speed??0),sources=Array.from({length:N},()=>[0,0,0]);
 const feedbackSpeed=Math.max(0,Math.min(100,Number(touching?(previewTarget??s.requested_speed??s.speed??0):(s.applied_speed??0))));
 const followSpeed=s.fan_on?speed:0;
 // Physical LEDs 1..31 occupy output slots 18..31,1..17; slot 0 is not on the ring.
 const slotForLed=index=>((index+17)%N)+1;
 const slotColors=Array.from({length:32},()=>[0,0,0]);
 const clip=v=>Math.max(0,Math.min(1,v));
 if(enabled&&brightness&&eff===0){
  for(let i=0;i<N;i++){
   const delta=Math.abs(i-9),distance=Math.min(delta,N-delta);
   const x=Math.max(0,Math.min(200,16*feedbackSpeed-100*(distance-1)));
   const level=!feedbackSpeed?0:!distance?255:Math.floor((255*x*x*(600-2*x)+4000000)/8000000);
   sources[i]=color.map(v=>Math.floor(Math.floor(v*brightness)*level/255)/255*(advanced.follow_fan&&!touching?followSpeed/100:1));
  }
 }else if(enabled&&brightness&&eff===4){
  const cfg=advanced,n=Math.max(1,Math.min(4,Number(cfg.segments)||1)),avg=bindingStatus.average||{};let at=0;
  for(let part=0;part<n;part++){
   const length=Math.floor(32/n)+(part<32%n?1:0),lit=length-(n>1?1:0),segment=cfg.segment?.[part];
   if(segment){
    let value=0,valid=true;
    if(segment.source<4){const key=['temperature','humidity','pm25','formaldehyde'][segment.source];value=Number(avg[key]??s[key]??0);valid=avg.valid===true||s.sensor_valid===true;}
    else if(segment.source===5)value=followSpeed;
    else{valid=avg.valid===true||s.sensor_valid===true;value=Math.max((Number(avg.pm25??s.pm25??0)/Math.max(Number(cfg.quality_pm)||1,0.01)),(Number(avg.formaldehyde??s.formaldehyde??0)/Math.max(Number(cfg.quality_hcho)||1,0.001)));}
    if(valid){
     let colorIndex=value<segment.suitable_low?0:value>segment.suitable_high?2:1;if(segment.display===0)colorIndex=1;
     const range=Number(segment.maximum)-Number(segment.minimum),level=segment.display===1?1:range>0?clip((value-Number(segment.minimum))/range):0;
     const levelBrightness=brightness*level*(cfg.follow_fan?followSpeed/100:1),rgb=(segment.colors?.[colorIndex]||[0,0,0]).map(v=>Number(v)*levelBrightness/255);
     for(let i=0;i<lit;i++)slotColors[at+i]=rgb;
    }
   }
   at+=length;
  }
  for(let i=0;i<N;i++)sources[i]=slotColors[slotForLed(i)];
 }else if(enabled&&brightness){
  let level=brightness*(advanced.follow_fan?followSpeed/100:1);
  const animationMs=now*(advanced.speed||5)/5;
  if(eff===2)level*=((1+Math.sin(animationMs/2000))/2);
  for(let i=0;i<N;i++){
   let rgb=color;
   if(eff===3){const p=(Math.floor(slotForLed(i)*768/32)+Math.floor(animationMs/30))%768;rgb=[p<256?255-p:p>512?p-512:0,p<256?p:p<512?511-p:0,p<256?0:p<512?p-256:767-p];}
   sources[i]=rgb.map(v=>v/255*level);
  }
 }
 const step=Math.PI*2/N,base=Math.PI/2-9*step,radius=77,samples=24,parts=[
  '<circle class="ring-guide" cx="100" cy="100" r="77"></circle>',
  '<circle class="ring-edge" cx="100" cy="100" r="85"></circle>',
  '<circle class="ring-edge" cx="100" cy="100" r="69"></circle>',
  '<text class="ring-anchor" x="100" y="198" text-anchor="middle">10</text>'
 ];
 // Wendland C2 gives a smooth, compact light spread that reaches zero at two LED pitches.
 const falloff=d=>{const r=d/2;if(r>=1)return 0;const q=1-r;return q*q*q*q*(4*r+1);};
 const point=a=>[100+radius*Math.cos(a),100+radius*Math.sin(a)];
 for(let sample=0;sample<N*samples;sample++){
  const position=(sample+0.5)/samples,a0=base+sample/samples*step,a1=base+(sample+1)/samples*step,[x0,y0]=point(a0),[x1,y1]=point(a1),mix=[0,0,0];
  for(let i=0;i<N;i++){
   if(!sources[i].some(v=>v>0))continue;
   const raw=Math.abs(position-i),distance=Math.min(raw,N-raw),weight=falloff(distance);
   if(!weight)continue;
   for(let c=0;c<3;c++)mix[c]=Math.min(1,mix[c]+sources[i][c]*weight);
  }
  const strength=Math.max(...mix);
  if(strength>0.00001){
   const rgb=mix.map(v=>Math.round(v/strength*255));
   parts.push('<path class="ring-light-segment" d="M'+x0.toFixed(3)+' '+y0.toFixed(3)+' A'+radius+' '+radius+' 0 0 1 '+x1.toFixed(3)+' '+y1.toFixed(3)+'" stroke="rgb('+rgb.join(',')+')" stroke-opacity="'+strength.toFixed(4)+'"></path>');
  }
 }
 for(const svg of svgs){
  svg.dataset.feedbackSpeed=String(feedbackSpeed);svg.dataset.feedbackSource=touching?'target':'pwm';
  svg.setAttribute('role','img');svg.removeAttribute('aria-hidden');svg.setAttribute('aria-label','A1 圆环导光预览：31 颗光源均匀分布，10 号在 6 点，25 和 26 号分列 12 点两侧');
  svg.innerHTML=parts.join('')+'<text x="100" y="98" text-anchor="middle" class="ring-v">'+(enabled?(eff===0?feedbackSpeed:Math.round(brightness*100))+'%':t('state.off'))+'</text><text x="100" y="122" text-anchor="middle" class="ring-l">'+(eff===0?t(touching?'a1.feedback_target':'a1.feedback_pwm'):t('a1.effect.'+eff))+'</text>';
 }
}
function updateRingAnimation(){
 clearInterval(ringAnimationTimer);
 ringAnimationTimer=setInterval(()=>{
  if(!UI.state)return;
  const lightPage=document.querySelector('[data-settings-page="light"]'),ramping=UI.state.applied_speed!==UI.state.percentage;
  if(!document.hidden&&(ramping||lightPage&&!lightPage.hidden)&&!ringPolling&&performance.now()-ringPolledAt>=(ramping?200:500)){
   ringPolling=true;ringPolledAt=performance.now();UI.reload().finally(()=>{ringPolling=false;});
  }
  if(advanced.effect===2||advanced.effect===3||previewTarget!==null)renderRing(UI.state);
 },50);
}
function renderLight(s){
 if(!lightDirty){$('ledEnabled').checked=s.led_enabled;$('ledAlways').checked=s.led_always_on;$('bright').value=s.brightness;color=[s.red,s.green,s.blue];renderLightControls();}
 $('effectNote').replaceChildren(t('a1.effect_note',{e:t('a1.effect.'+advanced.effect)})+' ',h('a',{href:'#settings/light'},t('a1.effect_change')));
 renderRing(s);
}

/* ---------- Settings: light effects ---------- */
const EFFECTS=[0,1,2,3,4];
async function showLight(){
 const page=document.querySelector('[data-settings-page="light"]');
 const m=clone(advanced=await api('/light/advanced')),hasSpeed=Number.isInteger(m.speed);updateRingAnimation();
 const refreshDraft=()=>{advanced=clone(m);updateRingAnimation();if(UI.state)renderRing(UI.state);};
 page.oninput=refreshDraft;page.onchange=refreshDraft;
 const draw=()=>{
  const opts=h('div',{class:'options',role:'radiogroup'},EFFECTS.map(e=>h('label',{class:'option'},h('input',{type:'radio',name:'effect',value:e,checked:m.effect===e,onchange:()=>{m.effect=e;refreshDraft();draw();}}),
   h('b',{},t('a1.effect.'+e)),h('span',{},t('a1.effect_desc.'+e)))));
  const segs=m.effect===4?h('div',{class:'stack'},
   h('div',{class:'row between'},h('span',{class:'label',i18n:'fx.count'}),seg([1,2,3,4].map(n=>[n,String(n)]),n=>{m.segments=n;draw();})),
   ...m.segment.slice(0,m.segments).map((sg,i)=>h('div',{class:'subcard stack'},h('h3',{},t('fx.segment',{n:i+1})),
    h('div',{class:'fields'},
     h('label',{class:'field'},h('span',{i18n:'fx.source'}),h('select',{onchange:e=>sg.source=+e.target.value},[0,1,2,3,4,5].map(v=>h('option',{value:v,selected:sg.source===v},t('fx.src.'+v))))),
     h('label',{class:'field'},h('span',{i18n:'fx.display'}),h('select',{onchange:e=>sg.display=+e.target.value},[0,1,2].map(v=>h('option',{value:v,selected:sg.display===v},t('fx.disp.'+v)))))),
    h('div',{class:'sentence',style:'margin-top:12px'},t('fx.range'),num(sg,'minimum'),'–',num(sg,'maximum'),h('span',{class:'help'},t('fx.comfort')),num(sg,'suitable_low'),'–',num(sg,'suitable_high')),
    h('div',{class:'row',style:'margin-top:12px'},['fx.low','fx.ok','fx.high'].map((k,j)=>h('label',{class:'row small'},h('input',{type:'color',value:hex(sg.colors[j]),oninput:e=>{const v=e.target.value;sg.colors[j]=[1,3,5].map(x=>parseInt(v.slice(x,x+2),16));}}),t(k)))))))
   :null;
  if(segs)segs.querySelector('.seg').set(m.segments);
  const speedControls=[];
  if(hasSpeed&&[2,3].includes(m.effect)){const [out,range]=slider(m,'speed',{min:1,max:10,fmt:v=>(v/5).toFixed(1)+'×'});range.setAttribute('aria-label',t('fx.speed'));speedControls.push(h('div',{class:'stack',style:'margin-top:16px'},h('div',{class:'row between'},h('span',{class:'label',i18n:'fx.speed'}),out),range,h('div',{class:'row between help'},t('fx.slow'),t('fx.fast'))));}
  const previewSpeed=h('input',{id:'previewSpeed',type:'range',min:1,max:100,step:1,value:UI.state?.fan_on?UI.state.percentage:UI.state?.requested_speed||60,'aria-label':t('a1.speed'),
   oninput:e=>{previewTarget=Number(e.target.value);$('previewSpeedValue').textContent=e.target.value+'%';renderRing(UI.state);},
   onchange:()=>run(previewSpeed,async()=>{try{await setSpeed(previewSpeed.value);}finally{previewTarget=null;renderRing(UI.state);}},null),
   onblur:()=>{previewTarget=null;if(UI.state)renderRing(UI.state);}});
  const previewRing=document.createElementNS('http://www.w3.org/2000/svg','svg');
  previewRing.setAttribute('class','ring ring-preview-svg');previewRing.setAttribute('viewBox','0 0 200 200');
  page.replaceChildren(pageHead('nav.light','fx.lead'),
   h('div',{class:'ring-effect-preview'},previewRing,
    h('div',{class:'ring-preview-controls'},h('div',{class:'row between'},h('span',{class:'label',i18n:'a1.speed'}),h('b',{class:'num',id:'previewSpeedValue'},previewSpeed.value+'%')),previewSpeed)),
   h('section',{class:'card'},h('div',{class:'card-head'},h('h2',{i18n:'fx.effect'})),opts,...speedControls,
    h('div',{style:'margin-top:16px'},flag(m,'follow_fan','fx.follow','fx.follow_desc')),segs,
    h('details',{class:'more'},h('summary',{i18n:'common.advanced'}),h('p',{class:'help',i18n:'fx.quality_hint'}),
     h('div',{class:'fields'},h('label',{class:'field'},h('span',{i18n:'fx.quality_pm'}),num(m,'quality_pm',{unit:'µg/m³',step:0.01})),
      h('label',{class:'field'},h('span',{i18n:'fx.quality_hcho'}),num(m,'quality_hcho',{unit:'mg/m³',step:0.001})))),
   saveBar(async()=>{const saved=await api('/light/advanced',m);m.revision=saved.revision;advanced=clone(m);updateRingAnimation();if(UI.state)renderLight(UI.state);})));
  if(UI.state)renderRing(UI.state);
 };
 draw();
}

/* ---------- Settings: M1 binding ---------- */
async function showBinding(){
 bindingStatus=await api('/binding/status').catch(()=>bindingStatus);
 const m=await api('/binding/config');const page=document.querySelector('[data-settings-page="binding"]');
 const capacity=Number(m.max_peers)||4;
 const save=()=>api('/binding/config',m).then(showBinding);
 const st=mac=>(bindingStatus.peers||[]).find(p=>p.mac===mac)||{};
 const peerItems=m.peers.map((p,i)=>{const s=st(p.mac);
  const probe=h('button',{type:'button',class:'btn ghost icon',title:t('bind.probe'),'aria-label':t('bind.probe')},icon('auto'));
  probe.onclick=()=>run(probe,()=>api('/binding/probe',{mac:p.mac}),'bind.probe_sent');
  const del=h('button',{type:'button',class:'btn ghost icon','aria-label':t('common.delete')},icon('trash'));
  del.onclick=async()=>{if(await confirm({title:t('bind.remove_q'),body:t('bind.remove_body',{m:prettyMac(p.mac)}),ok:t('common.delete'),danger:true})){m.peers.splice(i,1);run(del,save);}};
  return h('div',{class:'item binding-peer'},icon('air'),h('div',{class:'grow'},h('b',{class:'num'},'M1 · '+prettyMac(p.mac)),h('span',{},s.ip||p.ip||t('bind.ip_auto'))),
   h('span',{class:'badge'},String(s.transport||'offline').toUpperCase()),
   h('span',{class:'badge '+(s.pending?'warn':s.fresh?'ok':'bad')},t(s.pending?'bind.pending':s.fresh?'bind.fresh':'bind.stale')),probe,del);});
 const mac=h('input',{placeholder:'B0:F8:93:28:64:B6',maxLength:17,required:true,autocomplete:'off'});
 const ip=h('input',{placeholder:t('bind.ip_ph'),maxLength:15});
 const opts={force_mqtt:false,recovery:true,timeout_ms:1000,recovery_seconds:60};
 const add=h('form',{class:'subcard stack'},h('h3',{i18n:'bind.add'}),
  h('div',{class:'fields'},h('label',{class:'field'},h('span',{i18n:'bind.mac'}),mac),h('label',{class:'field'},h('span',{i18n:'bind.ip'}),ip)),
  h('details',{class:'more'},h('summary',{i18n:'common.advanced'}),flag(opts,'recovery','bind.recovery','bind.recovery_desc'),
   h('div',{class:'fields'},h('label',{class:'field'},h('span',{i18n:'bind.timeout'}),num(opts,'timeout_ms',{unit:'ms',min:100})),
    h('label',{class:'field'},h('span',{i18n:'bind.recovery_s'}),num(opts,'recovery_seconds',{unit:t('unit.s'),min:5})))),
  h('div',{class:'form-actions'},h('button',{class:'btn primary',type:'submit',disabled:m.peers.length>=capacity},icon('plus'),h('span',{},t('bind.add_btn')))));
 onSubmit(add,()=>{const id=normalizeMac(mac.value);if(!id)throw Error(t('bind.bad_mac'));
  if(m.peers.some(p=>p.mac===id))throw Error(t('bind.dup'));if(m.peers.length>=capacity)throw Error(t('common.max',{n:capacity}));
  m.peers.push({mac:id,ip:ip.value.trim(),kind:1,...opts});return save();},'bind.added');
 // Purifier group stays collapsed: it is only used with several A1 units.
 const members=h('div',{class:'list'},m.members.map((mb,i)=>h('div',{class:'item'},icon('fan'),
  h('div',{class:'grow'},h('b',{class:'num'},'A1 · '+prettyMac(mb.mac)),h('span',{},mb.ip||t('bind.ip_auto'))),
  h('button',{type:'button',class:'btn ghost icon','aria-label':t('common.delete'),onclick:()=>{m.members.splice(i,1);save();}},icon('trash')))));
 const gmac=h('input',{placeholder:'B0:F8:93:30:31:34',maxLength:17});
 const group=h('details',{class:'card more'},h('summary',{i18n:'bind.group'}),h('p',{class:'help',i18n:'bind.group_lead'}),
  h('label',{class:'field'},h('span',{i18n:'bind.group_name'}),h('input',{value:m.group,maxLength:32,placeholder:t('bind.group_ph'),oninput:e=>m.group=e.target.value})),
  members,h('div',{class:'row'},h('div',{class:'grow'},gmac),
   h('button',{type:'button',class:'btn',onclick:()=>{const id=normalizeMac(gmac.value);if(!id){toast(t('bind.bad_mac'),true);return;}m.members.push({mac:id,ip:''});save();}},icon('plus'),h('span',{},t('bind.member_add')))),
  flag(m,'group_force_mqtt','bind.force','bind.force_desc'),flag(m,'group_recovery','bind.recovery','bind.recovery_desc'),
  h('div',{class:'fields'},h('label',{class:'field'},h('span',{i18n:'bind.timeout'}),num(m,'group_timeout_ms',{unit:'ms'})),
   h('label',{class:'field'},h('span',{i18n:'bind.recovery_s'}),num(m,'group_recovery_seconds',{unit:t('unit.s')}))),
  saveBar(save));
 page.replaceChildren(pageHead('nav.binding','bind.lead'),
  h('section',{class:'card'},h('div',{class:'card-head'},h('h2',{i18n:'bind.sensors'}),h('span',{class:'badge'},m.peers.length+' / '+capacity)),
   peerItems.length?h('div',{class:'list'},peerItems):h('div',{class:'empty'},t('bind.empty')),add,info('bind.hint')),group);
}

/* ---------- Settings: automatic control rules ---------- */
async function showLinkage(){
 const m=await api('/linkage/config'),page=document.querySelector('[data-settings-page="linkage"]');
 const modern=UI.caps?.actions?.includes('fan.mode.set');
 try{if(document.hidden||($('homePage').hidden&&UI.activePage()!=='binding'&&UI.activePage()!=='linkage'))return;bindingStatus=await api('/binding/status');}catch{}
 const supportsCO2=Object.hasOwn(m,'target_co2')&&(bindingStatus.average?.co2_supported||(m.metrics&4));
 const draw=()=>{
  const choose=seg([[1,'PM2.5'],[2,()=>t('m.formaldehyde')],[3,'link.both'],...(supportsCO2?[[4,()=> 'CO₂'],[5,()=> 'PM2.5 + CO₂'],[6,()=>t('m.formaldehyde')+' + CO₂'],[7,'link.all']]:[])],v=>{m.metrics=v;draw();});choose.set(m.metrics);
  const modes=seg([[0,'link.mode.0'],[1,'link.mode.1'],[2,'link.mode.2']],v=>{m.mode=v;draw();});modes.set(m.mode);
  const detail=[],gate=[];
  const supportsGate=Object.hasOwn(m,'hysteresis_enabled');
  const field=(key,label,options={})=>h('label',{class:'field'},h('span',{},t(label)),num(m,key,options));
  if(m.mode===0)detail.push(field('fixed_speed','link.fixed',{min:1,max:100,unit:'%'}));
  if(m.mode===1){
   if(m.metrics&1)detail.push(field('low_pm','auto.low_pm',{min:0,unit:'µg/m³'}),field('high_pm','auto.high_pm',{min:0,unit:'µg/m³'}));
   if(m.metrics&2)detail.push(field('low_hcho','auto.low_hcho',{min:0,step:.001,unit:'mg/m³'}),field('high_hcho','auto.high_hcho',{min:0,step:.001,unit:'mg/m³'}));
  }
  if(m.mode===1&&(m.metrics&4))detail.push(field('low_co2','auto.low_co2',{min:0,max:65535,unit:'ppm'}),field('high_co2','auto.high_co2',{min:1,max:65535,unit:'ppm'}));
  if(supportsCO2)detail.push(info('link.co2_help'));
  if(supportsGate){
   const toggle=flag(m,'hysteresis_enabled','auto.hysteresis','auto.hysteresis_help');
   toggle.querySelector('input').addEventListener('change',draw);
   gate.push(toggle);
   if(m.hysteresis_enabled){
    if(m.metrics&1)gate.push(field('target_pm','auto.target_pm',{min:.01,max:5000,unit:'µg/m³'}),field('on_pm','auto.start_pm',{min:0,max:5000,unit:'µg/m³'}));
    if(m.metrics&2)gate.push(field('target_hcho','auto.target_hcho',{min:.001,max:10,step:.001,unit:'mg/m³'}),field('on_hcho','auto.start_hcho',{min:0,max:10,step:.001,unit:'mg/m³'}));
    if(m.metrics&4)gate.push(field('target_co2','auto.target_co2',{min:1,max:65535,unit:'ppm'}),field('on_co2','auto.start_co2',{min:1,max:65535,unit:'ppm'}));
    gate.push(info('auto.hysteresis_detail'));
   }
  }
  if(m.mode===2){
   if(!m.hysteresis_enabled&&(m.metrics&1))detail.push(field('target_pm','link.pid_pm',{min:.01,unit:'µg/m³'}));
   if(!m.hysteresis_enabled&&(m.metrics&2))detail.push(field('target_hcho','link.pid_hcho',{min:.001,step:.001,unit:'mg/m³'}));
   if(!m.hysteresis_enabled&&(m.metrics&4))detail.push(field('target_co2','auto.target_co2',{min:1,max:65535,unit:'ppm'}));
   detail.push(h('details',{class:'more'},h('summary',{i18n:'link.pid_tune'}),h('div',{class:'fields'},['kp','ki','kd'].map(k=>h('label',{class:'field'},h('span',{},k.toUpperCase()),num(m,k,{min:0,step:.01}))))));
  }
  const range=[field('min_speed','auto.minimum',{min:modern?0:1,max:100,unit:'%'}),field('max_speed','auto.maximum',{min:1,max:100,unit:'%'})];
  if(modern)range.push(field('fallback_speed','auto.fallback',{min:0,max:100,unit:'%'}));
  page.replaceChildren(pageHead('nav.linkage',modern?'auto.help':'link.lead'),
   h('section',{class:'card stack'},flag(m,'enabled','link.enable','auto.mode_help'),
    h('div',{class:'fields'},range),modern?info('auto.range_help'):null),
   h('section',{class:'card stack'},h('h2',{i18n:'link.speed'}),choose,modes,h('div',{class:'fields'},detail)),
   supportsGate?h('section',{class:'card stack'},h('h2',{i18n:'auto.hysteresis_title'}),h('div',{class:'fields'},gate)):null,
   h('section',{class:'card stack'},h('h2',{i18n:'common.advanced'}),
    h('label',{class:'field'},h('span',{i18n:'link.statistic'}),h('select',{onchange:e=>m.statistic=+e.target.value},[0,1,2,3,4,5].map(v=>h('option',{value:v,selected:m.statistic===v},t('link.stat.'+v))))),
    h('div',{class:'fields'},field('debounce_seconds','link.debounce',{min:0,max:3600,unit:t('unit.s')}),field('min_switch_seconds','link.min_switch',{min:0,max:3600,unit:t('unit.s')}))),
   saveBar(()=>{
    if(m.hysteresis_enabled&&(((m.metrics&1)&&m.on_pm<=m.target_pm)||((m.metrics&2)&&m.on_hcho<=m.target_hcho)||((m.metrics&4)&&m.on_co2<=m.target_co2)))throw new Error(t('auto.hysteresis_invalid'));
    return api('/linkage/config',m).then(saved=>{m.revision=saved.revision;return refresh();});
   }));
 };
 draw();
}

/* ---------- Boot ---------- */
const clock=UI.clockCard({
 load:()=>api('/time/config'),
 save:v=>api('/time/config',v),
 status:s=>[['clock.synced',t((bindingStatus&&bindingStatus.clock_valid)?'s.synced':'s.syncing'),(bindingStatus&&bindingStatus.clock_valid)?'ok':'warn'],
  ['clock.uptime',UI.duration(s.uptime_seconds||0)],['clock.memory',(Math.round((s.free_memory||0)/1024))+' KB']]});
$('clockCard').replaceWith(clock.el);

UI.start({
 model:'A1',kindKey:'kind.a1',icon:'fan',mqttHostMax:127,factoryReset:true,
 otaName:'phicomm_a1.ota.bin.signed',haHintKey:'mqtt.ha_a1',otaHintKey:'fw.hint_a1',buttonHintKey:'sys.hint_a1',
 scheduleLead:'sch.lead_a1',interval:2000,hasButtons:true,
 groups:[['grp.network',['network','mqtt']],['grp.device',['device','light']],['grp.auto',['binding','linkage','schedule','buttons','night']],['grp.system',['firmware','diagnostics','logs','maintenance']]],
 nav:{network:'nav.wifi',mqtt:'nav.mqtt',device:'nav.general',light:'nav.light',binding:'nav.binding',linkage:'nav.linkage',schedule:'nav.schedule',buttons:'nav.buttons',night:'nav.sleep',firmware:'nav.firmware',diagnostics:'nav.diagnostics',logs:'nav.logs',maintenance:'nav.maintenance'},
 pages:{device:{show:clock.show,status:clock.status},light:{show:showLight},binding:{show:showBinding},linkage:{show:showLinkage}},
 diagGroups:[['diag.g_fan',['fan_on','requested_fan_on','requested_speed','speed','percentage','applied_speed','fan_ready','child_lock','panel_ready','panel_errors','hardware_errors','panel_raw']],
  ['diag.g_light',['led_enabled','led_visible','led_always_on','brightness','red','green','blue','config_dirty','save_error']],
  ['diag.g_ota_img',['ota_signature_verified','ota_image_verified','ota_key_id','ota_image_length','ota_release_counter','ota_version']]],
 healthChecks:s=>[['diag.c_panel',s.panel_ready?'ok':'bad',s.panel_ready?t('state.ok'):t('diag.errors',{n:s.panel_errors})],
  ['diag.c_fan',s.fan_ready&&!s.hardware_errors?'ok':'bad',s.hardware_errors?t('diag.errors',{n:s.hardware_errors}):t('state.ok')],
  ['diag.c_storage',s.save_error?'bad':'ok',s.save_error||t('state.ok')]],
 chips:s=>s.child_lock?[h('span',{class:'chip'},icon('lock'),h('b',{},t('a1.child_lock')))]:[],
 onStatus:s=>{renderFan(s);renderLight(s);renderFilter(s);}
});
I18N.onChange(()=>{if(UI.state){renderAuto();for(const key of ['device','light','binding','linkage'])if(!document.querySelector('[data-settings-page="'+key+'"]').hidden&&UI.pages[key].show)UI.pages[key].show();}});
// Keep the automatic-control summary fresh even while the home page is idle.
(async function poll(){try{if(document.hidden||($('homePage').hidden&&UI.activePage()!=='binding'&&UI.activePage()!=='linkage'))return;bindingStatus=await api('/binding/status');if(UI.state)renderFan(UI.state);renderAuto();}catch{}finally{setTimeout(poll,3000);}})();
api('/light/advanced').then(a=>{advanced=a;updateRingAnimation();if(UI.state)renderLight(UI.state);}).catch(e=>toast(e.message,true));
})();
<\/script>
</body>
</html>
`,m1:`<!doctype html>
<html lang="zh-CN">
<head>
<meta name="referrer" content="no-referrer"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>M1 空气质量检测器</title>
<style>/* Unified WebUI design language for TC1, A1 and M1.
 * One stylesheet for all three offline pages; no CDN, no web fonts.
 * Tokens, then layout, then components, then per-product pages. */
:root{color-scheme:light dark;-webkit-tap-highlight-color:transparent;
 --bg:#f4f6f9;--surface:#fff;--surface-muted:#eef1f5;--text:#1d2430;--muted:#5f6b7c;--border:#dbe0e8;
 --accent:#305ed4;--accent-text:#fff;--accent-soft:#e6edfc;
 --danger:#b8353c;--danger-soft:#fbe9ea;--success:#26734c;--success-soft:#e3f3ea;--warn:#9a5b00;--warn-soft:#fdf1dc;
 --focus:#7a9cf5;--radius:12px;--radius-s:8px;--shadow:0 1px 2px rgba(20,30,50,.06),0 4px 16px rgba(20,30,50,.04);
 font-family:Inter,system-ui,-apple-system,"Segoe UI","PingFang SC","Microsoft YaHei",sans-serif;color:var(--text);background:var(--bg)}
:root[data-theme=dark]{--bg:#0f131a;--surface:#181e28;--surface-muted:#222a37;--text:#e8edf5;--muted:#a1adbf;--border:#323c4e;
 --accent:#91afff;--accent-text:#111d37;--accent-soft:#1f2b48;--danger:#ff9da4;--danger-soft:#3a1f24;--success:#80d3a5;--success-soft:#173226;
 --warn:#f2c46b;--warn-soft:#3a2e16;--focus:#91afff;--shadow:none}
@media(prefers-color-scheme:dark){:root:not([data-theme=light]){--bg:#0f131a;--surface:#181e28;--surface-muted:#222a37;--text:#e8edf5;--muted:#a1adbf;--border:#323c4e;
 --accent:#91afff;--accent-text:#111d37;--accent-soft:#1f2b48;--danger:#ff9da4;--danger-soft:#3a1f24;--success:#80d3a5;--success-soft:#173226;
 --warn:#f2c46b;--warn-soft:#3a2e16;--focus:#91afff;--shadow:none}}
*{box-sizing:border-box}
body{max-width:1080px;margin:0 auto;padding:20px 32px 96px;line-height:1.5;font-size:15px}
h1{font-size:20px;margin:0;letter-spacing:-.3px}h2{font-size:16px;margin:0;font-weight:650}h3{font-size:14px;margin:0 0 8px;font-weight:650}
p{margin:0}a{color:var(--accent)}[hidden]{display:none!important}
.muted,.help{color:var(--muted)}.help{font-size:13px}.small{font-size:13px}.num{font-variant-numeric:tabular-nums}
:focus-visible{outline:3px solid var(--focus);outline-offset:2px}
svg.i{width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;flex:none}

/* Header */
.topbar{display:flex;flex-wrap:wrap;align-items:center;gap:12px 20px;padding:4px 0 16px}
.brand{display:flex;align-items:center;gap:12px;min-width:0;flex:1}
.brand .logo{width:40px;height:40px;border-radius:10px;background:var(--accent-soft);color:var(--accent);display:grid;place-items:center}
.brand .kind{font-size:12px;color:var(--muted)}
.prefs{display:flex;gap:6px}.prefs select{font:inherit;font-size:12px;padding:4px 6px;border:1px solid var(--border);border-radius:6px;background:var(--surface);color:var(--text)}
.chips{display:flex;flex-wrap:wrap;gap:8px;width:100%}
.chip{display:inline-flex;align-items:center;gap:6px;padding:4px 10px;border-radius:999px;background:var(--surface);border:1px solid var(--border);font-size:13px;color:var(--muted);max-width:100%}
.chip b{color:var(--text);font-weight:600}
.dot{width:8px;height:8px;border-radius:50%;background:var(--muted);flex:none}
.dot.ok{background:var(--success)}.dot.warn{background:var(--warn)}.dot.bad{background:var(--danger)}
.dot.live{animation:pulse 2s infinite}
@keyframes pulse{50%{opacity:.35}}
.banner{display:flex;gap:10px;align-items:center;padding:10px 14px;border-radius:var(--radius-s);margin:0 0 16px;font-size:14px}
.banner.bad{background:var(--danger-soft);color:var(--danger)}.banner.warn{background:var(--warn-soft);color:var(--warn)}.banner.ok{background:var(--success-soft);color:var(--success)}.banner.info{background:var(--accent-soft);color:var(--accent)}

/* Tabs */
.tabs{display:flex;gap:4px;border-bottom:1px solid var(--border);margin:0 0 20px}
.tabs a{display:flex;align-items:center;gap:8px;padding:10px 14px;color:var(--muted);text-decoration:none;border-bottom:2px solid transparent;margin-bottom:-1px;font-weight:550}
.tabs a[aria-current=page]{color:var(--accent);border-bottom-color:var(--accent)}

/* Cards and grids */
.grid{display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(300px,1fr))}
.card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:20px;box-shadow:var(--shadow);min-width:0}
.card-head{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:16px}
.broker-card-head{flex-wrap:wrap}
.broker-platform-link{flex-shrink:0;color:var(--accent);background:var(--surface-muted)}
.stack>*+*{margin-top:16px}
.row{display:flex;align-items:center;gap:12px;flex-wrap:wrap}.row.between{justify-content:space-between}.grow{flex:1;min-width:0}
.home{display:grid;gap:16px}

/* Buttons */
.btn{position:relative;font:inherit;font-size:14px;font-weight:600;display:inline-flex;align-items:center;justify-content:center;gap:6px;min-height:40px;padding:8px 16px;border-radius:var(--radius-s);border:1px solid var(--border);background:var(--surface);color:var(--text);cursor:pointer;text-decoration:none;width:auto}
.btn:hover{background:var(--surface-muted)}
.btn.primary{background:var(--accent);color:var(--accent-text);border-color:transparent}.btn.primary:hover{filter:brightness(1.08)}
.btn.danger{color:var(--danger);border-color:var(--danger)}.btn.danger:hover{background:var(--danger-soft)}
.btn.ghost{border-color:transparent;background:transparent;color:var(--muted)}.btn.ghost:hover{background:var(--surface-muted);color:var(--text)}
.btn.icon{padding:6px;min-height:32px;width:32px}
.btn:disabled,.btn[aria-busy=true]{opacity:.55;cursor:not-allowed}
/* Keep pending feedback out of flex flow so buttons and wrapped rows stay put. */
.btn[aria-busy=true]::before{content:"";position:absolute;left:25%;bottom:3px;width:50%;height:2px;border-radius:1px;background:currentColor;animation:pulse 1s linear infinite;pointer-events:none}

/* Segmented control */
.seg{display:inline-flex;background:var(--surface-muted);border-radius:var(--radius-s);padding:3px;gap:2px;flex-wrap:wrap}
.seg button{font:inherit;font-size:14px;border:0;background:transparent;color:var(--muted);padding:7px 14px;border-radius:6px;cursor:pointer;min-height:36px;font-weight:550;width:auto;margin:0}
.seg button[aria-pressed=true]{background:var(--surface);color:var(--text);box-shadow:0 1px 3px rgba(0,0,0,.12)}
.seg.full{display:flex}.seg.full button{flex:1}
.seg button:disabled{cursor:not-allowed;opacity:.5}

/* Switch */
.switch{display:flex;align-items:center;justify-content:space-between;gap:16px;cursor:pointer;min-height:44px}
.switch .text{min-width:0}.switch .text b{display:block;font-weight:600}.switch .text span{font-size:13px;color:var(--muted)}
.switch input{appearance:none;flex:none;width:44px;height:26px;min-height:26px;border-radius:13px;background:var(--border);position:relative;cursor:pointer;margin:0;transition:background .15s}
.switch input::after{content:"";position:absolute;top:3px;left:3px;width:20px;height:20px;border-radius:50%;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
.switch input:checked{background:var(--accent)}.switch input:checked::after{transform:translateX(18px)}
.switch input:disabled{opacity:.5}
.switch+.switch{border-top:1px solid var(--border);padding-top:8px;margin-top:8px}

/* Fields */
.field{display:block}.field>span{display:block;font-size:13px;font-weight:600;margin-bottom:6px}
.field .help{margin-top:6px}
input[type=text],input[type=password],input[type=number],input[type=url],input[type=time],input[type=date],input[type=datetime-local],input:not([type]),select,textarea{font:inherit;width:100%;min-height:40px;padding:8px 12px;border:1px solid var(--border);border-radius:var(--radius-s);background:var(--surface);color:var(--text)}
textarea{min-height:120px;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:13px}
input[type=range]{width:100%;min-height:28px;accent-color:var(--accent);margin:0;padding:0;border:0;background:transparent}
input[type=color]{width:40px;height:40px;min-height:40px;padding:2px;border:1px solid var(--border);border-radius:var(--radius-s);background:var(--surface);cursor:pointer}
input[type=file]{padding:8px}
.fields{display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(220px,1fr))}
.form-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:20px}
.input-unit{display:flex;align-items:center;gap:8px}.input-unit input{flex:1}.input-unit em{font-style:normal;color:var(--muted);font-size:13px;white-space:nowrap}
.sentence{display:flex;flex-wrap:wrap;align-items:center;gap:8px;font-size:14px}
.sentence input{width:90px;min-height:36px;padding:6px 8px}
details.more{border-top:1px solid var(--border);margin-top:20px;padding-top:12px}
details.more>summary{cursor:pointer;color:var(--muted);font-size:14px;font-weight:600;list-style:none;display:flex;align-items:center;gap:6px}
details.more>summary::before{content:"\\203A";display:inline-block;transition:transform .15s;font-size:18px;line-height:1}
details.more[open]>summary::before{transform:rotate(90deg)}
details.more>*:not(summary){margin-top:16px}
details.info{font-size:13px;color:var(--muted);margin-top:20px}
details.info>summary{cursor:pointer;display:inline-flex;align-items:center;gap:4px;list-style:none}
details.info>summary svg.i{width:15px;height:15px}
details.info>summary::-webkit-details-marker{display:none}
details.info>p{margin-top:6px;padding:10px 12px;background:var(--surface-muted);border-radius:var(--radius-s)}
summary::-webkit-details-marker{display:none}

/* Read-only display summary */
.summary{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px 20px;background:var(--surface-muted);border-radius:var(--radius-s);padding:14px 16px;margin:0}
.summary dt{font-size:12px;color:var(--muted)}.summary dd{margin:2px 0 0;font-weight:600;overflow-wrap:anywhere;display:flex;align-items:center;gap:6px}

/* Settings layout */
.settings{display:grid;grid-template-columns:200px minmax(0,1fr);gap:24px;align-items:start}
.side{position:sticky;top:12px;display:flex;flex-direction:column;gap:2px}
.side .group{font-size:11px;text-transform:uppercase;letter-spacing:.6px;color:var(--muted);margin:14px 10px 4px;font-weight:700}
.side .group:first-child{margin-top:0}
.side a{padding:8px 10px;border-radius:var(--radius-s);color:var(--text);text-decoration:none;font-size:14px}
.side a:hover{background:var(--surface-muted)}.side a[aria-current=page]{background:var(--accent-soft);color:var(--accent);font-weight:600}
.page-title{margin:0 0 4px;font-size:18px}.page-lead{margin:0 0 16px;color:var(--muted);font-size:14px}
.section-label{font-size:12px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin:0 0 10px}

/* Lists */
.list{display:flex;flex-direction:column;gap:8px}
.item{display:flex;align-items:center;gap:12px;padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius-s);background:var(--surface);min-width:0}
.item .grow b{display:block}.item .grow span{font-size:13px;color:var(--muted)}
.item .time{font-size:20px;min-width:64px}
.empty{padding:20px;text-align:center;color:var(--muted);border:1px dashed var(--border);border-radius:var(--radius-s);font-size:14px}
.badge{display:inline-flex;align-items:center;gap:4px;font-size:12px;font-weight:600;padding:2px 8px;border-radius:999px;background:var(--surface-muted);color:var(--muted);white-space:nowrap}
.badge.ok{background:var(--success-soft);color:var(--success)}.badge.warn{background:var(--warn-soft);color:var(--warn)}.badge.bad{background:var(--danger-soft);color:var(--danger)}.badge.info{background:var(--accent-soft);color:var(--accent)}
.subcard{border:1px solid var(--border);border-radius:var(--radius-s);padding:16px;background:var(--surface)}
.subcard h3{margin-bottom:12px}
fieldset{border:1px solid var(--border);border-radius:var(--radius-s);padding:16px;margin:16px 0;min-width:0}
fieldset.bare{border:0;padding:0;margin-left:0;margin-right:0;margin-bottom:0;min-width:0}
fieldset.bare:disabled{opacity:.5}
legend{padding:0 8px;font-size:14px}
.table{width:100%;border-collapse:collapse;font-size:14px}
.table th{text-align:left;font-size:12px;color:var(--muted);font-weight:600;padding:6px 8px;border-bottom:1px solid var(--border)}
.table td{padding:8px 8px;border-bottom:1px solid var(--border);vertical-align:middle}
.table tr:last-child td{border-bottom:0}

/* Weekday chips */
.days{display:flex;gap:6px;flex-wrap:wrap}
.days label{position:relative;margin:0}
.days input{position:absolute;opacity:0;inset:0;margin:0;cursor:pointer;width:100%;min-height:100%}
.days span{display:grid;place-items:center;min-width:40px;height:36px;padding:0 8px;border-radius:999px;border:1px solid var(--border);font-size:13px;font-weight:600;color:var(--muted)}
.days input:checked+span{background:var(--accent);border-color:var(--accent);color:var(--accent-text)}
.days input:focus-visible+span{outline:3px solid var(--focus);outline-offset:2px}

/* Option cards */
.options{display:grid;gap:10px;grid-template-columns:repeat(auto-fit,minmax(150px,1fr))}
.option{position:relative;border:1px solid var(--border);border-radius:var(--radius-s);padding:12px 14px;cursor:pointer;background:var(--surface);display:block;margin:0}
.option input{position:absolute;opacity:0}
.option b{display:block;font-size:14px}.option span{font-size:12px;color:var(--muted)}
.option:has(input:checked){border-color:var(--accent);background:var(--accent-soft);box-shadow:inset 0 0 0 1px var(--accent)}
.option:has(input:focus-visible){outline:3px solid var(--focus);outline-offset:2px}

/* Toasts and dialogs */
.toasts{position:fixed;left:50%;bottom:20px;transform:translateX(-50%);display:flex;flex-direction:column;gap:8px;z-index:20;width:min(420px,calc(100% - 32px))}
.toast{padding:12px 16px;border-radius:var(--radius-s);background:var(--text);color:var(--bg);font-size:14px;box-shadow:0 6px 24px rgba(0,0,0,.2);animation:rise .2s}
.toast.bad{background:var(--danger);color:#fff}
@keyframes rise{from{transform:translateY(8px);opacity:0}}
dialog{border:1px solid var(--border);border-radius:var(--radius);background:var(--surface);color:var(--text);padding:24px;max-width:420px;width:calc(100% - 32px)}
dialog::backdrop{background:rgba(10,15,25,.45)}
dialog h2{margin-bottom:8px}dialog p{color:var(--muted);font-size:14px}

/* Stats and bars */
.stat{font-size:40px;font-weight:650;letter-spacing:-1px;line-height:1.1;font-variant-numeric:tabular-nums}
.stat small{font-size:15px;font-weight:500;color:var(--muted);letter-spacing:0;margin-left:4px}
.bar{height:8px;border-radius:4px;background:var(--surface-muted);overflow:hidden;position:relative}
.bar i{position:absolute;inset:0 auto 0 0;background:var(--accent);border-radius:4px;transition:width .6s}
.bar i.target{background:transparent;border-right:2px solid var(--text);border-radius:0}
.eyebrow{font-size:12px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.5px}
.label{font-size:13px;font-weight:600}
progress{width:100%;height:8px;accent-color:var(--accent)}
pre{overflow:auto;white-space:pre-wrap;overflow-wrap:anywhere;font-size:12px;background:var(--surface-muted);padding:14px;border-radius:var(--radius-s);max-height:360px}

/* Diagnostics */
.health{display:grid;gap:8px;grid-template-columns:repeat(auto-fit,minmax(230px,1fr))}
.health .item{padding:10px 12px}
.diag{display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(240px,1fr))}
.diag details{border:1px solid var(--border);border-radius:var(--radius-s);padding:12px 14px;background:var(--surface)}
.diag summary{cursor:pointer;font-weight:600;display:flex;justify-content:space-between;gap:8px}
.diag dl{margin:8px 0 0;display:grid;grid-template-columns:auto 1fr;gap:4px 12px;font-size:13px}
.diag dt{color:var(--muted)}.diag dd{margin:0;text-align:right;overflow-wrap:anywhere}

/* ---------- A1 ---------- */
.a1-home{grid-template-columns:minmax(0,1.35fr) minmax(0,1fr);grid-template-areas:"fan panel" "fan auto" "filter filter" "light light"}
.fan-hero{display:flex;align-items:center;gap:20px}
.power{flex:none;width:96px;height:96px;border-radius:50%;border:0;display:grid;place-items:center;cursor:pointer;background:var(--surface-muted);color:var(--muted);box-shadow:inset 0 0 0 1px var(--border);transition:background .2s,box-shadow .2s,color .2s;width:96px}
.power svg{width:38px;height:38px}
.power[aria-pressed=true]{background:var(--accent);color:var(--accent-text);box-shadow:0 0 0 8px var(--accent-soft)}
.power:disabled{opacity:.5;cursor:not-allowed}
.mini-metrics{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
.mini-metrics>div{display:flex;flex-direction:column;gap:2px;padding:10px 12px;background:var(--surface-muted);border-radius:var(--radius-s)}
.mini-metrics b{font-size:18px}.mini-metrics small{font-size:12px;color:var(--muted);font-weight:500}
.mini-metrics .badge{align-self:flex-start}
.light-layout{display:flex;gap:28px;align-items:center}
.ring{width:180px;height:180px;flex:none}
.ring-effect-preview{display:flex;justify-content:center;align-items:center;gap:24px;min-height:196px}
.ring-preview-controls{width:min(280px,100%)}
.ring .ring-v{font-size:26px;font-weight:650;fill:var(--text)}.ring .ring-l{font-size:12px;fill:var(--muted)}
.ring .ring-anchor{font-size:7px;font-weight:700;fill:var(--muted)}
.ring .ring-guide{fill:none;stroke:var(--surface-muted);stroke-width:15}
.ring .ring-edge{fill:none;stroke:var(--muted);stroke-width:1;opacity:.45}
.ring .ring-light-segment{fill:none;stroke-width:12;stroke-linecap:butt;transition:stroke-opacity .12s linear}
.swatches{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px;align-items:center}
.swatch{width:32px;height:32px;min-height:32px;border-radius:50%;border:2px solid var(--surface);background:var(--c);box-shadow:0 0 0 1px var(--border);cursor:pointer;padding:0}
.swatch[aria-pressed=true]{box-shadow:0 0 0 2px var(--accent)}
.swatch:disabled,.swatches input:disabled{opacity:.35;cursor:not-allowed}
.swatches input[type=color]{width:32px;height:32px;min-height:32px;border-radius:50%;padding:3px;border:0;background:conic-gradient(red,yellow,lime,cyan,blue,magenta,red)}
.swatches input[type=color]::-webkit-color-swatch-wrapper{padding:0}
.swatches input[type=color]::-webkit-color-swatch{border:2px solid var(--surface);border-radius:50%}
.swatches input[type=color]::-moz-color-swatch{border:2px solid var(--surface);border-radius:50%}

/* ---------- M1 ---------- */
.verdict{display:flex;align-items:center;gap:16px;border-left:6px solid var(--border)}
.verdict[data-level=ok]{border-left-color:var(--success)}.verdict[data-level=warn]{border-left-color:var(--warn)}.verdict[data-level=bad]{border-left-color:var(--danger)}
.verdict[data-level=ok] .stat{color:var(--success)}.verdict[data-level=warn] .stat{color:var(--warn)}.verdict[data-level=bad] .stat{color:var(--danger)}
.fresh{display:flex;align-items:center;gap:8px;white-space:nowrap}
.metrics{display:grid;gap:16px;grid-template-columns:repeat(4,minmax(0,1fr))}
.metric .stat{margin:12px 0 14px}
.scale{position:relative;display:flex;gap:2px;height:6px}
.scale i{border-radius:3px;opacity:.55}.scale i.ok{background:var(--success)}.scale i.warn{background:var(--warn)}.scale i.bad{background:var(--danger)}
.scale b{position:absolute;top:-4px;width:4px;height:14px;margin-left:-2px;border-radius:2px;background:var(--text);box-shadow:0 0 0 2px var(--surface)}

/* ---------- TC1 ---------- */
.tc1-home{grid-template-columns:minmax(0,1.6fr) minmax(0,1fr);grid-template-areas:"sockets power" "sockets panel"}
.tiles{display:grid;gap:10px;grid-template-columns:repeat(3,minmax(0,1fr))}
.tile-wrap{position:relative}
.tile{width:100%;font:inherit;text-align:left;display:flex;flex-direction:column;gap:4px;padding:14px;min-height:110px;border-radius:var(--radius);border:1px solid var(--border);background:var(--surface-muted);color:var(--muted);cursor:pointer;transition:background .15s,border-color .15s;margin:0}
.tile .tile-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:auto}
.tile .idx{font-size:12px;font-weight:700;padding-right:26px}
.tile .name{color:var(--text);font-size:15px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.tile .state{font-size:13px;font-weight:600}
.tile[aria-pressed=true]{background:var(--accent-soft);border-color:var(--accent);color:var(--accent)}
.tile:disabled{cursor:progress;opacity:.7}
.tile-edit{position:absolute;top:8px;right:8px}
.spark{width:100%;height:64px;margin:12px 0 4px;display:block}
.spark .line{fill:none;stroke:var(--accent);stroke-width:2;vector-effect:non-scaling-stroke}
.spark .area{fill:var(--accent-soft);stroke:none}

@media(max-width:860px){.metrics{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:760px){
 body{padding:12px 14px 96px}
 .settings{grid-template-columns:1fr;gap:12px}
 .side{position:static;flex-direction:row;overflow-x:auto;gap:4px;padding-bottom:6px;scrollbar-width:none}
 .side .group{display:none}.side a{white-space:nowrap;border:1px solid var(--border)}
 .a1-home,.tc1-home{grid-template-columns:1fr;grid-template-areas:none}
 .a1-home>*,.tc1-home>*{grid-area:auto!important}
 .light-layout{flex-direction:column;align-items:stretch}.ring{align-self:center;width:150px;height:150px}.ring-effect-preview{flex-direction:column;gap:8px}
 .tiles{grid-template-columns:repeat(2,minmax(0,1fr))}
 .power{width:80px;height:80px}
 .verdict{flex-direction:column;align-items:flex-start}
 .card{padding:16px}.stat{font-size:34px}
 .brand h1{font-size:18px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
 .prefs select{max-width:84px}
}
@media(prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}

/* Button mappings: gesture, concrete result, then row actions. */
.button-group{display:grid;gap:8px}.button-mapping{display:grid;grid-template-columns:minmax(110px,1fr) minmax(0,2fr) auto;gap:12px;align-items:center;padding:12px 0;border-bottom:1px solid var(--border)}
.button-result{overflow-wrap:anywhere}.button-range{border:1px solid var(--border);border-radius:var(--radius-s);padding:12px}.button-range summary{cursor:pointer;display:list-item}.button-range summary span{display:block;margin:6px 0 0 18px}.button-range summary .help{color:var(--accent)}
.button-preview{padding:14px;border-radius:var(--radius-s);background:var(--accent-soft);color:var(--accent);overflow-wrap:anywhere}
@media(max-width:600px){.button-mapping{grid-template-columns:1fr auto}.button-gesture{grid-column:1/-1}.button-mapping .row{justify-content:flex-end}.button-range .button-mapping{gap:6px}}

.copyright{margin-top:24px;padding:16px 0;border-top:1px solid var(--border);color:var(--muted);font-size:12px;line-height:1.8;text-align:center;overflow-wrap:anywhere}.copyright a{color:var(--accent);text-underline-offset:3px}

/* Fit the optional fifth M1 reading into the existing metric area. */
.metrics.with-co2{grid-template-columns:repeat(5,minmax(0,1fr))}
@media(max-width:860px){
 .metrics.with-co2{grid-template-columns:repeat(6,minmax(0,1fr));gap:10px}
 .metrics.with-co2>.metric{grid-column:span 2;min-width:0;padding:12px}
 .metrics.with-co2>.metric:nth-child(-n+2){grid-column:span 3}
 .metrics.with-co2 .stat{font-size:clamp(20px,5vw,32px)}
 .metrics.with-co2 .stat small{font-size:11px}
 .metrics.with-co2 .row.between{flex-wrap:wrap;gap:4px}
}

.co2-stale .scale i,.co2-stale .scale b{background:var(--muted)}
.co2-empty .scale b{display:none}
.metrics.with-co2 .label{min-width:0;overflow-wrap:anywhere}
.metrics.with-co2 .badge{max-width:100%;white-space:normal;overflow-wrap:anywhere}

/* Consistent title and badge rows regardless of label length or language. */
.metrics .metric-head{display:grid;grid-template-rows:auto auto;justify-items:start;align-content:start;gap:6px;min-height:66px}
.metrics .metric-head .label{line-height:20px;min-width:0;overflow-wrap:anywhere}
.metrics .metric-head .badge{justify-self:start;max-width:100%;white-space:normal;overflow-wrap:anywhere}
.metrics .metric{display:flex;flex-direction:column;min-width:0}
.metrics .metric .stat{margin-top:auto;padding-top:12px}
.metrics .metric-head{grid-template-rows:40px auto;min-height:72px}
.metrics .metric-head .label{align-self:start}

/* Schedule rows keep the duration, action and controls readable on phones. */
.schedule-task{display:grid;grid-template-columns:auto minmax(0,1fr) auto auto}
.schedule-task .grow{overflow-wrap:anywhere}
@media(max-width:600px){
 .schedule-task{grid-template-columns:minmax(0,1fr) auto}
 .schedule-task .time{grid-column:1;grid-row:1}
 .schedule-task>.badge{grid-column:2;grid-row:1}
 .schedule-task .grow{grid-column:1/-1;grid-row:2}
 .schedule-task>.row{grid-column:1/-1;justify-content:flex-end}
}

.binding-peer .grow{overflow-wrap:anywhere}
@media(max-width:600px){
 .binding-peer{flex-wrap:wrap}
 .binding-peer>.grow{flex-basis:calc(100% - 52px)}
}
</style>
<script>/* Apply the saved theme before first paint so the page does not flash light on
 * a dark display. The control itself lives in the shared header (ui.js). */
(()=>{
'use strict';
 const key='phicomm.appearance',choices=['system','light','dark'];
 let selected='system';try{const saved=localStorage.getItem(key);if(choices.includes(saved))selected=saved;}catch{}
 if(selected==='system')document.documentElement.removeAttribute('data-theme');
 else document.documentElement.dataset.theme=selected;
})();
<\/script></head>
<body>
<main id="homePage" class="home">
 <!-- Verdict first, then the four readings, then the one control. -->
 <section class="card verdict" id="verdict">
  <div class="grow"><div class="eyebrow" data-i18n="m1.overall"></div><div class="stat" id="overall">—</div><p class="help" id="overallWhy"></p><p class="help" id="pressureReading" hidden><span data-i18n="m1.pressure"></span> <span class="num" id="pressureValue"></span> hPa · <span id="pressureModel"></span></p></div>
  <div class="fresh"><span class="dot live" id="freshDot"></span><span id="freshText" class="help"></span></div>
 </section>
 <div class="metrics" id="metrics"></div>
 <div class="grid">
  <section class="card">
   <div class="card-head"><div><h2 data-i18n="m1.screen"></h2><p class="help" data-i18n="m1.screen_desc"></p></div></div>
   <div id="screenSeg"></div>
  </section>
  <section class="card" id="peerCard"></section>
 </div>
</main>

<div id="settingsPage" class="settings" hidden>
 <nav class="side" id="side" aria-label="Settings"></nav>
 <div id="pages">
  <div data-settings-page="device" class="stack">
   <div><h2 class="page-title" data-i18n="nav.general"></h2><p class="page-lead" data-i18n="gen.lead"></p></div>
   <div data-slot="name"></div>
   <section class="card" id="clockCard"></section>
   <div data-slot="auth"></div>
  </div>
  <div data-settings-page="binding" class="stack"></div>
 </div>
</div>

<footer class="copyright">Copyright &copy; Phicomm Community · <a href="https://github.com/phicomm-io/phicomm-community-firmware" target="_blank" rel="noopener noreferrer">固件仓库</a> · <a href="https://phicomm-io.github.io" target="_blank" rel="noopener noreferrer">项目网站</a></footer>
<script>/* EN / zh-CN strings, one [English, 简体中文] pair per key so the two stay in
 * step. The language follows the browser unless the user picks one in the
 * header (kept in localStorage, never sent to the device). */
(()=>{
'use strict';
const D={
'auto.mode':['Operating mode','运行模式'],'auto.auto':['Auto','自动'],'auto.manual':['Manual','手动'],
'auto.toggle':['Toggle auto/manual','切换自动／手动模式'],'auto.idle':['Idle','待机'],
'auto.minimum':['Minimum speed','最低风速'],'auto.maximum':['Maximum speed','最高风速'],
'auto.fallback':['Sensor offline speed','传感器离线风速'],
'auto.help':['Adjusts speed while powered on. Switching mode does not turn power on.','开机时按空气质量调速，切换模式不会自动开机。'],
'auto.mode_help':['Auto adjusts speed; manual restores your last manual speed.','自动模式按空气质量调速；手动模式恢复上次手动风速。'],
'auto.range_help':['A minimum of 0 allows idle. Offline speed is limited to this range. Night windows override this range. The ring and slider adjust the current maximum in auto mode.','最低风速设为 0 可停转待机。离线风速受上下限约束，夜间时段可单独设置。自动模式下滑环和滑块调整当前时段的风速上限。'],
 'auto.hysteresis_title':['Start and idle','启动与待机'],
'auto.hysteresis':['Enable start/idle hysteresis','启用启停回差'],
'auto.hysteresis_help':['Starts at the start threshold and idles at the target. Between them, keeps its current state.','达到启动阈值开始运行，降到目标值后停转待机，两者之间保持原运行状态。'],
'auto.hysteresis_detail':['Start must exceed target. Any selected pollutant can start the fan; all must meet target to idle. The chosen algorithm adjusts speed while running, with at least 1%. Condition duration and minimum interval apply. Offline speed takes over if sensors are unavailable. Switching off prevents restart.','启动阈值必须高于目标值。任一所选指标达到阈值即启动，全部达标后待机。运行时按所选算法调速，最低为 1%。条件持续时间和最短启停间隔同时生效。传感器离线时改用离线风速；手动关机后不主动启动。'],
'auto.target_pm':['PM2.5 target / idle at','PM2.5 目标值（待机）'],
'auto.start_pm':['PM2.5 start threshold','PM2.5 启动阈值'],
'auto.target_hcho':['Formaldehyde target / idle at','甲醛目标值（待机）'],
'auto.start_hcho':['Formaldehyde start threshold','甲醛启动阈值'],
'auto.hysteresis_invalid':['Start threshold must be greater than target for each selected pollutant.','所选指标的启动阈值必须高于目标值。'],
'auto.no_sensor':['No sensor available. The configured offline speed applies while powered on.','暂无可用传感器，开机时使用设定的离线风速。'],
'auto.low_pm':['PM2.5 at minimum speed','最低风速对应 PM2.5'],'auto.high_pm':['PM2.5 at maximum speed','最高风速对应 PM2.5'],
'auto.low_hcho':['Formaldehyde at minimum speed','最低风速对应甲醛'],'auto.high_hcho':['Formaldehyde at maximum speed','最高风速对应甲醛'],
'filter.title':['Estimated filter life','滤芯寿命预估'],
'filter.hint':['Counts fan running time only. Default: 4320 h (180 days continuously). Adjust to your filter specification; air quality and filter condition also affect replacement.','仅累计风机开启时间，默认 4320 小时（连续运行 180 天）。可按滤芯规格调整；更换时间还需结合空气质量和滤芯状态。'],
'filter.usage':['Used {used} / {total} h','已用 {used} / {total} 小时'],
'filter.normal':['In service','使用中'],'filter.due':['Replace filter soon','建议更换滤芯'],'filter.expired':['Replacement due','请更换滤芯'],
'filter.settings':['Adjust rated lifetime','调整额定寿命'],'filter.lifetime':['Rated lifetime (hours, 1–20000)','额定寿命（小时，1–20000）'],
'filter.reset':['Reset after replacing filter','更换滤芯后重置'],
'filter.confirm':['Reset accumulated usage to zero? Only reset after installing a new filter.','将累计使用时间清零并恢复至 100%？请在更换新滤芯后执行。'],
'filter.reset_done':['Filter usage reset','滤芯使用时间已重置'],
'import.platform':['Open IotCloud','打开 IotCloud'],
'import.title':['Import MQTT configuration','导入 MQTT 配置'],
'import.preview':['Broker: {host}:{port} · Username: {user}','Broker：{host}:{port} · 用户名：{user}'],
'import.source':['Configuration source: {origin}','配置来源：{origin}'],
'import.accept':['Receive and prefill','接收并预填'],
'import.help':['Only accept a transfer you started from a trusted platform. Review the fields and save to apply. The device never exports its saved password.','仅接收你从可信平台发起的配置。接收后请检查下方表单，点击保存才会生效。设备不会导出已保存的密码。'],
'import.http':['HTTP cannot protect against LAN interception or tampering. Use only on a trusted network.','HTTP 无法防止局域网窃听或篡改，请仅在可信网络使用。'],
'import.invalid':['Invalid import request. Start again from the platform.','导入请求无效，请从平台重新发起。'],
'import.expired':['Transfer cancelled or expired. Start again from the platform.','传递已取消或过期，请从平台重新发起。'],
'import.waiting':['Waiting for configuration…','正在等待配置…'],
'import.received':['Configuration prefilled. Review the MQTT Host, port and account below, then save.','配置已预填。请核对下方 MQTT Host、端口与账号，再点击保存。'],
'import.no_opener':['The platform window is unavailable. Keep it open and restart the transfer.','无法连接平台窗口，请保持平台页面打开并重新发起传递。'],
'fw.cancel':['Cancel download','终止下载'],'fw.cancelling':['Cancelling; services will resume shortly.','正在终止，稍后恢复正常服务。'],'fw.online':['Online updates','在线更新'],'fw.check':['Check for updates','检查更新'],'fw.install_online':['Download and install','下载并安装'],'fw.notes':['Release notes','发布说明'],
'fw.sources_help':['Choose a source to check its latest version.','选择更新来源，检查最新版本。'],'fw.source_github':['GitHub Pages (HTTPS)','GitHub Pages（HTTPS）'],'fw.source_cn':['China mirror (HTTP)','境内镜像（HTTP）'],'fw.source_global':['Global mirror (HTTP)','境外镜像（HTTP）'],
'fw.check_idle':['Choose a source and check','选择来源后检查更新'],'fw.check_checking':['Checking…','正在检查…'],'fw.check_available':['Update available','发现新版本'],'fw.check_up_to_date':['Already up to date','当前已是最新版本'],'fw.check_failed':['Update check failed; try another source','检查失败，请重试或切换来源'],'fw.confirm_online':['Install this signed update and restart the device?','安装此签名更新并重启设备？'],
/* Application watchdog diagnostics (A1/M1). */
'diag.g_watchdog':['Restart & watchdog','复位与看门狗'],
'diag.c_watchdog':['Watchdog','看门狗'],
'diag.watchdog_reboot':['Last restart was caused by watchdog timeout','上次因看门狗超时重启'],
'd.reset_reason':['Last reset reason','上次复位原因'],
'd.reset_reason_raw':['Raw reset reason','原始复位原因码'],
'd.watchdog_enabled':['Watchdog enabled','看门狗已启用'],
'd.watchdog_state':['Watchdog state','看门狗状态'],
'd.watchdog_fault':['Unresponsive worker','无响应的处理线程'],
's.watchdog':['Watchdog timeout','看门狗超时'],
's.lockup':['CPU lockup','CPU 锁死'],
's.software':['Software reset','软件复位'],
's.power_on':['Power-related reset','电源相关复位'],
's.unknown':['Unknown','未知'],
's.healthy':['Healthy','正常'],
's.starting':['Starting','启动中'],
's.fault':['Heartbeat timeout or watchdog error','心跳超时或看门狗错误'],
'average.co2':['Mean CO₂','平均 CO₂'],
'auto.target_co2':['CO₂ target / idle at','CO₂ 目标值（待机）'],'auto.start_co2':['CO₂ start threshold','CO₂ 启动阈值'],
'auto.low_co2':['CO₂ at minimum speed','最低风速对应 CO₂'],'auto.high_co2':['CO₂ at maximum speed','最高风速对应 CO₂'],
'link.all':['All three','三者'],'link.co2_help':['CO₂ requires a linked M1 with a CO₂ sensor. Missing or expired readings use the offline fan speed.','CO₂ 需要绑定已安装 CO₂ 传感器的 M1；读数缺失或过期时使用离线风速。'],
'average.temperature':['Mean temperature','平均温度'],'average.humidity':['Mean humidity','平均湿度'],'average.pm25':['Mean PM2.5','平均 PM2.5'],'average.formaldehyde':['Mean formaldehyde','平均甲醛'],
/* common */
'btn.key_both':['Wi-Fi + power keys','Wi-Fi + 电源组合键'],
'btn.reset_note_a1':['Only the Wi-Fi key alone uses the fixed 5/10-second recovery gestures. Combination gestures cancel individual key actions.','仅单独长按 Wi-Fi 键 5／10 秒触发固定恢复操作；组合键会取消本轮单键动作。'],
'op.effect_next':['Cycle light effect','切换到下一灯效'],'op.effect_select':['Select light effect','设置灯效'],
'op.filter_reset':['Reset filter usage','重置滤芯寿命'],'op.light_always':['Light always on','灯环常亮'],
'op.set_brightness':['Also set brightness','同时设置亮度'],
'filter.status':['Used {used} hours · {remaining}% remaining','已使用 {used} 小时 · 剩余 {remaining}%'],
'filter.reset_hint':['Use this gesture after replacing the filter to clear its accumulated runtime.','更换滤芯后使用此手势，将累计运行时间清零。'],
'filter.reset_confirm':['Clear the filter runtime after replacing the filter?','确认已更换滤芯并清零累计使用时间？'],
'btn.key':['Key','按键'],'btn.key_fn':['Function key','功能键'],'btn.key_power':['Power key','电源键'],'btn.key_wifi':['Wi-Fi key','Wi-Fi 键'],'btn.pick_action':['Choose an action','请选择动作'],
'op.on':['On','开启'],'op.off':['Off','关闭'],'op.toggle':['Toggle','切换'],'op.all':['All sockets','全部插座'],'op.target':['Target','对象'],'op.state':['New state','目标状态'],'op.brightness':['Brightness','亮度'],'op.speed':['Fan speed','风速'],
'op.outlet':['Sockets','插座'],'op.fan':['Fan','风机'],'op.light':['Light ring','灯环'],'op.child_lock':['Child lock','童锁'],'op.indicator':['Indicator light','指示灯'],'op.display':['Screen brightness','屏幕亮度'],'op.reboot':['Restart device','重启设备'],
'clock.uptime':['Running for','已运行'],'clock.memory':['Free memory','可用内存'],
'night.hint':['Periods use the device time zone; an end earlier than the start crosses midnight.','时段按设备时区生效；结束早于开始表示跨午夜。'],'night.period':['Period {n}','时段 {n}'],'night.screen':['Limit screen brightness','限制屏幕亮度'],
'sch.new':['New schedule','新建定时'],'sch.edit':['Edit','编辑'],'sch.enable':['Enable','启用'],'sch.disable':['Disable','停用'],'sch.enabled':['Enabled','已启用'],'sch.disabled':['Disabled','已停用'],'sch.enabled_row':['Enabled','启用'],'sch.pick_action':['Choose an action for the schedule','请为定时任务选择动作'],'sch.pick_when':['Pick a date and time','请选择日期与时间'],'sch.save_btn':['Save schedule','保存任务'],
'fw.verify_ok':['Verified; the device is restarting','校验通过，设备正在重启'],'fw.failed':['Update failed: {e}','升级失败：{e}'],'fw.upload_lost':['Upload interrupted; reconnect to check the update state','连接中断，请重新连接设备查看升级状态'],'fw.upload_timeout':['Upload timed out','上传超时'],'fw.url_started':['Download started','已开始下载'],
'diag.g_ota_img':['Update image','升级镜像'],
'op.fan_panel':['Power on / show current mode and airflow','开机／查看当前模式与风量'],
'common.save':['Save','保存'],'common.cancel':['Cancel','取消'],'common.add':['Add','添加'],'common.delete':['Delete','删除'],'common.deleted':['Deleted','已删除'],
'common.copy':['Copy','复制'],'common.copied':['Copied','已复制'],'common.advanced':['Advanced','高级'],'common.more_info':['Details','说明'],
'common.prev':['Previous','上一页'],'common.next':['Next','下一页'],'common.yes':['Yes','是'],'common.no':['No','否'],'common.saving':['Saving…','保存中…'],'common.saved':['Saved','已保存'],'common.max':['Up to {n} items','最多 {n} 项'],
'unit.s':['s','秒'],'time.dh':['{d} d {h} h','{d} 天 {h} 小时'],'time.hm':['{h} h {m} min','{h} 小时 {m} 分'],'time.m':['{m} min','{m} 分钟'],
'toast.accepted':['Request accepted','设备已接受请求'],'toast.rebooting':['Restarting… reconnect in about 20 s','正在重启，约 20 秒后重新连接'],'toast.resetting':['Settings cleared. The device is restarting.','配置已清除，设备正在重启'],
'pref.lang_auto':['Auto','自动'],'pref.theme_system':['System','跟随系统'],'pref.theme_light':['Light','浅色'],'pref.theme_dark':['Dark','深色'],

/* kinds and navigation */
'kind.a1':['A1 Air Purifier','A1 空气净化器'],'kind.m1':['M1 Air Monitor','M1 空气质量检测器'],'kind.tc1':['TC1 Power Strip','TC1 智能插座'],
'nav.home':['Home','首页'],'nav.settings':['Settings','设置'],
'grp.network':['Network','网络'],'grp.device':['Device','设备'],'grp.auto':['Automation','自动化'],'grp.system':['System','系统'],
'nav.wifi':['Wi-Fi','Wi-Fi'],'nav.mqtt':['MQTT / Home Assistant','MQTT / Home Assistant'],'nav.general':['General','通用'],'nav.light':['Light effects','灯效'],
'nav.binding':['Linked M1','绑定 M1'],'nav.linkage':['Auto control','自动调速'],'auto.settings':['Automatic control settings','自动调速设置'],'nav.schedule':['Schedules','定时任务'],'nav.sleep':['Night mode','夜间模式'],
'nav.buttons':['Button events','按键事件'],'nav.permission':["A1 sessions", "A1 会话"],
'nav.firmware':['Firmware','固件升级'],'nav.diagnostics':['Diagnostics','诊断'],'nav.logs':['Logs','日志'],'nav.maintenance':['Restart & reset','重启与恢复'],
/* header */
'chip.wifi':['Wi-Fi','Wi-Fi'],'chip.hotspot':['Setup hotspot','配网热点'],'chip.mqtt':['MQTT','MQTT'],'chip.firmware':['Firmware','固件'],'chip.clock':['Clock not synced','时钟未校准'],
'state.connected':['Connected','已连接'],'state.connecting':['Connecting…','连接中…'],'state.disconnected':['Disconnected','未连接'],'state.hotspot':['Setup hotspot on','配网热点已开启'],
'state.off':['Off','关闭'],'state.ready':['Ready','就绪'],'state.ok':['Normal','正常'],
'banner.lost':['Lost connection to the device. If it is updating, wait for it to restart.','与设备的连接已中断。如正在升级，请等待设备重启。'],
'banner.ota':['Firmware update in progress ({p}%). Controls are paused.','正在升级固件（{p}%），控制暂不可用。'],
'banner.rebooting':['The device is restarting.','设备正在重启。'],
'banner.cleanup':['Old Home Assistant entities could not be removed. Delete them on the previous broker.','旧 HA 实体清理失败，请在原 Broker 上手动删除。'],
'banner.save_error':['Settings could not be saved: {e}','设置保存失败：{e}'],
'banner.hotspot':['Not connected to Wi-Fi. Setup hotspot "{n}" is on.','尚未连接 Wi-Fi，配网热点「{n}」已开启。'],
/* Wi-Fi */
'wifi.lead':['The device keeps its old network until the new one is verified.','新网络验证成功前，设备保持原有连接。'],
'wifi.status':['Status','状态'],'wifi.ssid':['Network name','网络名称'],'wifi.ip':['IP address','IP 地址'],'wifi.ap':['Hotspot','热点名称'],'wifi.saved_password':['Password saved','已保存密码'],
'wifi.change':['Change network','更换网络'],'wifi.scan':['Scan','扫描'],'wifi.password':['Password','密码'],'wifi.pass_ph':['Leave empty to keep the saved password','同一网络留空则保留原密码'],
'wifi.open':['This network has no password','此网络没有密码'],'wifi.open_badge':['Open','开放'],'wifi.save':['Verify and save','验证并保存'],
'wifi.verifying':['Verifying… the device saves only after it gets an IP','验证中…取得 IP 后才会保存'],
'wifi.hint':['The new network is saved only after the device joins it and gets an IP address. If that does not happen within 30 s, it returns to the previous network.','设备连上新网络并取得 IP 后才保存；30 秒内失败则恢复之前的网络。'],
'wifi.none':['No networks found. Type the name instead.','未发现网络，可手动填写名称'],'wifi.scan_timeout':['Scan timed out','扫描超时'],
'wifi.signal.0':['Very weak','信号很弱'],'wifi.signal.1':['Weak','信号弱'],'wifi.signal.2':['Good','信号良好'],'wifi.signal.3':['Strong','信号强'],
/* MQTT */
'mqtt.lead':['Connect a broker to use Home Assistant or the TMCP cloud.','连接 Broker 后可接入 Home Assistant 或 TMCP 云平台。'],
'mqtt.status':['Status','状态'],'mqtt.broker':['Broker','Broker'],'mqtt.host':['Broker address','Broker 地址'],'mqtt.host_ph':['IP or domain — empty disables MQTT','IP 或域名；留空则停用'],
'mqtt.port':['Port','端口'],'mqtt.user':['Username','用户名'],'mqtt.password':['Password','密码'],'mqtt.pass_ph':['Leave empty to keep','留空保留原密码'],
'mqtt.mode':['Topic mode','主题模式'],'mqtt.mode_legacy':['Legacy','Legacy'],
'mqtt.mode_tmcp':['TMCP','TMCP'],'mqtt.mode_tmcp_desc':['TMCP — joins your cloud list automatically','TMCP — 上线后自动加入云端列表'],
'mqtt.mode_hint':['Changing the account tries to remove the old Home Assistant entities. If that fails, delete them on the old broker.','切换账户会尝试清理旧 HA 实体，失败时需在旧 Broker 手动清理。'],
'mqtt.clear':['Clear saved password','清除已保存的密码'],'mqtt.clear_desc':['Connect without a password','以无密码方式连接'],
'mqtt.too_long':['Username max 63 bytes, password max 256 bytes','用户名最多 63 字节，密码最多 256 字节'],
'mqtt.ha_a1':['Home Assistant creates the purifier, RGB light ring, child lock and always-on switches automatically.','Home Assistant 会自动创建净化器、RGB 灯环、童锁和常亮开关。'],
'mqtt.ha_m1':['Home Assistant creates four sensors and a screen brightness control automatically.','Home Assistant 会自动创建四项传感器和屏幕亮度控制。'],
'mqtt.ha_tc1':['Home Assistant creates six sockets, power, indicator and child lock entities automatically.','Home Assistant 会自动创建六路插座、功率、指示灯和童锁。'],
/* General */
'gen.lead':['Name, panel and access settings.','名称、面板与访问设置。'],'gen.identity':['Device','设备'],'gen.name':['Device name','设备名称'],'gen.default_name':['Restore default name','恢复默认名称'],
'gen.name_long':['Name is limited to 63 bytes','名称最多 63 字节'],'gen.device_id':['MAC','MAC 地址'],'gen.uptime':['Running for','已运行'],
'auth.title':['Web access','访问认证'],'auth.lead':['Protect this page with a password (username: admin).','为本页面设置密码（用户名 admin）。'],
'auth.password':['Web password','网页密码'],'auth.ph':['8–32 characters; empty turns it off','8–32 个字符；留空关闭认证'],
'auth.help':['Your browser will ask you to sign in again after it changes.','修改后浏览器会要求重新登录。'],'auth.set':['Set password','设置密码'],
'auth.on':['Protected','已启用'],'auth.off':['Not protected','未启用'],'auth.invalid':['Use 8–32 printable ASCII characters','请使用 8–32 个可打印 ASCII 字符'],
'clock.title':['Clock','时钟'],'clock.tz':['Time zone','时区'],'clock.ntp':['NTP server','NTP 服务器'],'clock.synced':['Clock','校时状态'],'clock.last':['Last sync','最近校时'],
'clock.hint':['Domain or IPv4 only, without protocol or port. If it fails the device tries Aliyun, Tencent and public NTP pools; it re-syncs hourly and retries after 60 s on failure.','只填域名或 IPv4，不含协议和端口。失败后自动尝试阿里、腾讯及公共 NTP 池；每小时校时，失败 60 秒后重试。'],
'tz.cn':['Beijing','北京'],
/* Firmware */
'fw.lead':['Updates keep Wi-Fi, MQTT and device settings.','升级会保留 Wi-Fi、MQTT 和设备设置。'],'fw.version':['Installed version','当前版本'],'fw.state':['Update status','升级状态'],'fw.error':['Last error','最近错误'],
'fw.install':['Install update','安装更新'],'fw.tab_file':['Upload file','上传文件'],'fw.tab_url':['From URL','从网址下载'],
'fw.file':['Signed {m} OTA file','{m} 签名 OTA 文件'],'fw.url':['Direct link (HTTP)','更新文件直链（HTTP）'],'fw.upload':['Upload and install','上传并升级'],'fw.download':['Download and install','下载并升级'],
'fw.unsigned':['Allow unsigned firmware','允许未签名的固件'],'fw.unsigned_desc':['Rescue only. The image is still checked for this device.','仅用于救援；仍会检查是否适用于本设备。'],
'fw.unsigned_confirm':['Unsigned firmware is not verified. Only continue if you trust the file.','未签名的固件不会校验来源，请确认文件可信后再继续。'],
'fw.uploading':['Uploading {p}%','正在上传 {p}%'],'fw.progress':['Installing {p}%','正在安装 {p}%'],'fw.preview_done':['Preview only: no file was sent.','预览模式：未实际发送文件。'],
'fw.hint_a1':['Choose an A1 OTA package from this project. The device restarts after verification.','请选择本项目的 A1 OTA 包，校验成功后自动重启。'],
'fw.hint_m1':['Choose an M1 OTA package from this project. The device restarts after verification.','请选择本项目的 M1 OTA 包，校验成功后自动重启。'],
'fw.hint_tc1':['Choose a TC1 OTA package from this project. The device restarts after verification.','请选择本项目的 TC1 OTA 包，校验成功后自动重启。'],
/* Diagnostics */
'diag.lead':['A health summary first; raw values below for troubleshooting.','先看健康摘要，下方为排障用的原始数值。'],'diag.health':['Health','健康状态'],'diag.details':['Details','详细状态'],
'diag.raw':['Raw JSON','原始 JSON'],'diag.updated':['Last read {t}','最近读取 {t}'],'diag.errors':['{n} errors','{n} 次错误'],'diag.logs':['System log','系统日志'],'logs.lead':['Device log records the last events of this run.','设备日志记录本次运行的最近事件。'],'logs.hint':['Only the most recent events from this run are kept; they are cleared on restart.','仅保留本次运行的最近事件，重启后清空。'],'logs.load_all':['Load all','读取全部'],'logs.download':['Download','下载'],'logs.empty':['No events yet','暂无事件'],'logs.overwritten':['Older entries were overwritten','较早的日志已被覆盖'],'diag.log_refresh':['Refresh','刷新'],
'diag.c_wifi':['Wi-Fi','Wi-Fi'],'diag.c_mqtt':['MQTT','MQTT'],'diag.c_ota':['Firmware update','固件升级'],'diag.c_panel':['Control panel','控制面板'],'diag.c_fan':['Fan driver','风机驱动'],
'diag.c_storage':['Settings storage','配置存储'],'diag.c_sensor':['Sensor','传感器'],'diag.c_clock':['Clock','时钟'],'diag.c_memory':['Free memory','可用内存'],
'diag.g_device':['Device','设备'],'diag.g_network':['Network','网络连接'],'diag.g_mqtt':['MQTT','MQTT'],'diag.g_ota':['Firmware update','固件升级'],'diag.g_fan':['Fan & panel','风机与面板'],
'diag.g_light':['Light ring','灯环'],'diag.g_sensor':['Sensor','传感器'],'diag.g_clock':['Clock','时钟'],'diag.g_screen':['Screen','屏幕'],'diag.g_sockets':['Sockets','插座'],
'diag.g_power':['Metering','计量'],'diag.g_time':['Clock','时钟'],'diag.g_lan':['LAN','局域网'],'diag.g_other':['Other','其他'],
/* Maintenance */
'sys.lead':['Restart the device or return it to defaults.','重启设备或恢复默认配置。'],'sys.reboot':['Restart','重启设备'],'sys.reboot_desc':['Settings are kept.','设置保留不变。'],
'sys.reboot_q':['Restart {m}?','重启 {m}？'],'sys.reboot_body':['The page reconnects when the device is back.','设备恢复后页面会自动重新连接。'],
'sys.reset':['Reset to defaults','恢复默认配置'],'sys.reset_desc':['Clears Wi-Fi, MQTT, password and all settings.','清除 Wi-Fi、MQTT、网页密码及全部设置。'],
'sys.reset_q':['Erase all settings?','清除全部配置？'],'sys.reset_body':['The device restarts with the setup hotspot. This cannot be undone.','设备将重启并开启配网热点，此操作无法撤销。'],
'sys.hint_a1':['On the device: hold the function key 5–10 s to clear Wi-Fi and the web password, over 10 s to clear everything. Works even with child lock on.','设备上：功能键按住 5–10 秒清除 Wi-Fi 和网页密码，超过 10 秒清除全部配置；童锁期间同样有效。'],
'sys.hint_m1':['On the device: a long press of the panel key clears Wi-Fi and the web password.','设备上：长按面板按键可清除 Wi-Fi 和网页密码。'],
'sys.hint_tc1':['On the device: hold the key 5–10 s to clear Wi-Fi and the web password, over 10 s to clear everything (all sockets default to on).','设备上：按键按住 5–10 秒清除 Wi-Fi 和网页密码，超过 10 秒清除全部配置（六路默认开启）。'],
/* Air quality */
'air.co2.comfort':['Comfortable','舒适'],'air.co2.elevated':['Elevated','偏高'],'air.co2.ventilate':['Ventilate','建议通风'],'m.co2_range':['Ventilation reference: ≤1000 ppm comfortable; 1001–1500 elevated; >1500 ventilate.','通风参考：≤1000 ppm 舒适；1001–1500 偏高；>1500 建议通风。'],'m.co2_stale':['Outdated','已过期'],'m.co2':['Carbon dioxide (CO₂)','二氧化碳（CO₂）'],'m.pm25':['PM2.5','PM2.5'],'m.formaldehyde':['Formaldehyde','甲醛'],'m.temperature':['Temperature','温度'],'m.humidity':['Humidity','湿度'],
'air.pm25.excellent':['Excellent','优'],'air.pm25.good':['Good','良'],'air.pm25.light':['Light pollution','轻度污染'],'air.pm25.moderate':['Moderate pollution','中度污染'],'air.pm25.heavy':['Heavy pollution','重度污染'],'air.pm25.severe':['Severe pollution','严重污染'],
'air.formaldehyde.pass':['Within limit','达标'],'air.formaldehyde.slight':['Slightly high','略高'],'air.formaldehyde.exceed':['Over limit','超标'],
'air.temperature.cool':['Cool','偏冷'],'air.temperature.comfort':['Comfortable','舒适'],'air.temperature.warm':['Warm','偏热'],
'air.humidity.dry':['Dry','偏干'],'air.humidity.comfort':['Comfortable','舒适'],'air.humidity.humid':['Humid','偏湿'],
/* A1 home */
'a1.fan':['Purifier','净化器'],'a1.power':['Power','电源'],'a1.running':['Running','运行中'],'a1.off':['Off','已关闭'],
'a1.sub_manual':['{p}% · manual','{p}% · 手动'],'a1.sub_auto':['{p}% · following M1','{p}% · 跟随 M1 自动调节'],'a1.sub_off':['Starts at {p}% when turned on','开启后以 {p}% 运行'],
'a1.locked_ota':['Controls paused during update or restart','升级或重启期间暂停控制'],
'a1.speed':['Fan speed','风速'],'a1.feedback_target':['Target speed','目标速度'],'a1.feedback_pwm':['Current output','当前输出'],'a1.resume':['{p}% when on','开启后 {p}%'],'a1.p_quiet':['Quiet','静音'],'a1.p_low':['Low','低'],'a1.p_mid':['Medium','中'],'a1.p_max':['Max','强'],
'a1.out_stopped':['Fan stopped','风机已停止'],'a1.out_ramp':['Output {a}% → ramping to {p}%','实际输出 {a}%，正在调整到 {p}%'],'a1.out_steady':['Output {a}%','实际输出 {a}%'],
'a1.fan_hint':['Output is the PWM level the firmware applies; the fan ramps gradually and has no speed sensor. Choosing a speed also turns the purifier on.','“实际输出”为软件 PWM 设定，风机逐步调整，设备没有转速回读。选择风速会同时开启净化器。'],
'a1.panel':['Panel','面板'],'a1.panel_ok':['Panel connected','面板通信正常'],'a1.panel_bad':['Panel not responding','面板无响应'],
'a1.child_lock':['Child lock','童锁'],'a1.child_lock_desc':['Locks power and speed keys on the device','锁定机身电源和调速按键'],'a1.lock_on':['Child lock on','童锁已开启'],'a1.lock_off':['Child lock off','童锁已关闭'],
'a1.button_hint':['Hold the Wi-Fi key for 2.5 s to open the setup hotspot; this works with child lock on.','长按 Wi-Fi 键 2.5 秒可开启配网热点，童锁期间仍可使用。'],
'a1.auto':['Auto control','自动调速'],'a1.auto_lead':['Adjusts the fan from linked M1 readings','根据绑定的 M1 读数调节风速'],
'a1.auto_empty':['No M1 is linked yet. Link one to run the purifier automatically.','尚未绑定 M1，绑定后可按空气质量自动运行。'],'a1.auto_link':['Link an M1','绑定 M1'],
'a1.auto_enable':['Turn on auto control','开启自动调速'],'a1.auto_peers':['{n} M1 · {f} reporting','{n} 台 M1 · {f} 台有数据'],
'a1.auto_failed':['No fresh M1 data. The configured offline speed applies while powered on.','暂无有效的 M1 数据，开机时使用设定的离线风速。'],'a1.auto_speed':['Auto speed {p}%','自动风速 {p}%'],
's.link_disabled':['Off','未开启'],'s.link_active':['Active','运行中'],'s.link_sensor_failed':['No data','无数据'],
'a1.ring':['Light ring','灯环'],'a1.ring_on':['Light ring','启用灯环'],'a1.always_on':['Always on','常亮'],'a1.always_on_desc':['Otherwise it lights for 2 s after each change','否则仅在操作后亮 2 秒'],
'a1.color':['Colour','颜色'],'a1.brightness':['Brightness','亮度'],'a1.effect_note':['Effect: {e}.','当前灯效：{e}。'],'a1.effect_change':['Change','更改'],
'a1.effect.0':['Speed bar','风速条'],'a1.effect.1':['Solid colour','固定颜色'],'a1.effect.2':['Breathing','呼吸'],'a1.effect.3':['Rainbow','彩虹'],'a1.effect.4':['Data segments','分段数据'],
'a1.effect_desc.0':['Ring length follows fan speed','灯环长度跟随风速'],'a1.effect_desc.1':['Whole ring in one colour','整圈单色'],'a1.effect_desc.2':['Slow fade in and out','缓慢明暗变化'],
'a1.effect_desc.3':['Cycling colours','循环彩色'],'a1.effect_desc.4':['Each segment shows a reading','每段显示一项读数'],
/* A1 light effects page */
'fx.lead':['How the ring looks. Colour and brightness are set on the home page.','设置灯环的显示方式；颜色和亮度在首页调整。'],'fx.effect':['Effect','灯效'],
'fx.follow':['Brightness follows fan speed','亮度随风速变化'],'fx.follow_desc':['Dimmer at low speed','低风速时更暗'],'fx.count':['Segments','分段数量'],'fx.segment':['Segment {n}','第 {n} 段'],
'fx.source':['Shows','显示内容'],'fx.display':['Style','显示方式'],'fx.range':['Range','数值范围'],'fx.comfort':['comfortable','适宜区间'],
'fx.low':['Low','偏低'],'fx.ok':['Comfortable','适宜'],'fx.high':['High','偏高'],
'fx.src.0':['Temperature','温度'],'fx.src.1':['Humidity','湿度'],'fx.src.2':['PM2.5','PM2.5'],'fx.src.3':['Formaldehyde','甲醛'],'fx.src.4':['Overall air quality','综合空气质量'],'fx.src.5':['Fan speed','风速'],
'fx.disp.0':['Fixed colour, brightness by value','固定颜色 + 数值亮度'],'fx.disp.1':['Comfort colour, fixed brightness','适宜程度颜色 + 固定亮度'],'fx.disp.2':['Comfort colour, brightness by value','适宜程度颜色 + 数值亮度'],
'fx.quality_hint':['Baselines used to compute "overall air quality".','用于计算“综合空气质量”的基准值。'],'fx.quality_pm':['PM2.5 baseline','PM2.5 基准'],'fx.quality_hcho':['Formaldehyde baseline','甲醛基准'],
/* A1 binding */
'bind.lead':['Link M1 monitors so the purifier can react to their readings.','绑定 M1 后，净化器可根据其读数自动运行。'],'bind.sensors':['Linked M1 monitors','已绑定的 M1'],
'bind.empty':['No M1 linked','尚未绑定 M1'],'bind.add':['Add an M1','添加 M1'],'bind.mac':['M1 MAC address','M1 的 MAC 地址'],'bind.ip':['LAN IP (optional)','局域网 IP（可选）'],'bind.ip_ph':["Discover on the LAN if empty", "留空则在局域网内自动查找"],
'bind.ip_auto':['IP found via MQTT','IP 通过 MQTT 获取'],'bind.add_btn':['Add M1','添加'],'bind.added':['Added','已添加'],'bind.bad_mac':['Enter a 12-digit MAC address','请输入 12 位 MAC 地址'],'bind.dup':['Already in the list','已在列表中'],
'bind.pending':['Handshaking','握手中'],'bind.fresh':['Receiving data','数据正常'],'bind.stale':['No data','无数据'],'bind.probe':['Probe LAN','探测局域网'],'bind.probe_sent':['Probe sent','已发送探测'],
'bind.remove_q':['Remove this device?','移除此设备？'],'bind.remove_body':['{m} will no longer be linked.','{m} 将解除关联。'],
'bind.ids_title':['Next: allow this A1 on the M1','下一步：在 M1 上允许本机'],'bind.ids_body':['Copy the pairing ID to the M1 page → Settings → Linkage access.','复制以下配对 ID，粘贴到 M1 页面 → 设置 → 联动许可。'],
'bind.force':['Always use MQTT','强制使用 MQTT'],'bind.force_desc':['Skip the LAN connection','不使用局域网直连'],'bind.recovery':['Retry LAN automatically','自动检查局域网恢复'],'bind.recovery_desc':['Switch back to LAN when it recovers','恢复后切回局域网'],
'bind.timeout':['LAN timeout','局域网超时'],'bind.recovery_s':['Retry interval','恢复检查间隔'],
'bind.hint':["Configure this M1 here; no setup is needed on the M1. MQTT authorizes the session, then readings use the LAN. A LAN failure pauses sensor-based control.", "只需在此添加 M1，无需在 M1 上配对。MQTT 用于建立会话，读数通过局域网获取；局域网失联后按数据失效规则处理。"],
'bind.group':['Purifier group','净化器组'],'bind.group_lead':['Run several A1 units as one. Enter the same name and member list on every A1.','多台 A1 作为一组运行；每台 A1 需填写相同的组名称和成员列表。'],
'bind.group_name':['Group name','组名称'],'bind.group_ph':['Empty = standalone','留空为独立设备'],'bind.member_add':['Add member','添加成员'],
/* A1 linkage */
'link.lead':['Rules that turn the purifier on, off and set its speed from M1 readings.','根据 M1 读数开关净化器并调节风速的规则。'],
'link.enable':['Automatic control','自动调速'],'link.enable_desc':['Manual control still works at any time','随时仍可手动控制'],
'link.no_peer':['Link an M1 first.','请先绑定 M1。'],'link.speed':['Fan speed','风速调节'],'link.metric':['Based on','依据指标'],'link.both':['Both','两者'],
'link.mode.0':['Fixed','固定风速'],'link.mode.1':['Proportional','线性调节'],'link.mode.2':['Target (PID)','目标值（PID）'],
'link.mode_desc.0':['Always the same speed','始终同一风速'],'link.mode_desc.1':['Faster as air gets worse','空气越差风速越高'],'link.mode_desc.2':['Hold a target level','维持在目标值'],
'link.fixed':['Speed','风速'],'link.lin_pm_a':['PM2.5 at','PM2.5 为'],'link.lin_hcho_a':['Formaldehyde at','甲醛为'],'link.lin_b':['→','时风速'],'link.lin_c':[', at',' ；为'],
'link.pid_pm':['Keep PM2.5 at','PM2.5 保持在'],'link.pid_hcho':['Keep formaldehyde at','甲醛保持在'],'link.range':['Speed between','风速范围'],'link.pid_tune':['PID tuning','PID 参数'],
'link.onoff':['Start and stop','自动启停'],'link.onoff_lead':['Keep the stop level below the start level to avoid rapid switching.','关闭阈值应低于启动阈值，避免频繁开关。'],
'link.on_rule':['Start automatically','自动开启'],'link.on_desc':['Turn on when air gets worse','空气变差时开启'],'link.off_rule':['Stop automatically','自动关闭'],'link.off_desc':['Turn off when air is clean','空气变好时关闭'],
'link.watch':['Watch','监测'],'link.any':['Any','任一满足'],'link.all':['All','全部满足'],'link.above':['above','高于'],'link.below':['below','低于'],
'link.hyst_warn':['The stop level should be lower than the start level.','关闭阈值应低于启动阈值。'],
'link.statistic':['With several M1','多台 M1 时取'],'link.debounce':['Condition must last','条件持续'],'link.min_switch':['Minimum run/idle time','最短运行／待机时间'],
'link.stat.0':['Average','平均值'],'link.stat.1':['Highest','最高值'],'link.stat.2':['Lowest','最低值'],'link.stat.3':['Median (more than 3)','中位数（多于 3 台）'],'link.stat.4':['Average without extremes','去掉最高最低后平均'],'link.stat.5':['First available in list','按列表顺序故障切换'],
/* Schedules / night */
'fx.speed':['Animation speed','变化速度'],'fx.slow':['Slow','慢'],'fx.fast':['Fast','快'],
'sch.countdown':['Shutdown countdown','倒计时关闭'],'sch.hours':['Hours','小时'],'sch.minutes':['Minutes','分钟'],'sch.cancel':['Cancel','取消倒计时'],'sch.restart':['Restart','重新计时'],
'sch.countdown_hint':['Turn the purifier off after 1 minute to 24 hours. Works without clock sync. A restart cancels the countdown; enabling it starts the full duration again.','在 1 分钟至 24 小时后关闭净化器，无需校时。设备重启会取消倒计时；重新启用会从完整时长重新计时。'],
'sch.duration_invalid':['Choose a duration from 1 minute to 24 hours','请设置 1 分钟至 24 小时的时长'],'sch.state.cancelled':['Cancelled after restart','设备重启，已取消'],
'sch.lead_a1':['Turn the purifier on or off at set times.','在设定时间开启或关闭净化器。'],'sch.lead_tc1':['Switch sockets at set times (Beijing time).','在设定时间开关插座（北京时间）。'],
'sch.list':['Schedules','定时任务'],'sch.empty':['No schedules yet','暂无定时任务'],'sch.used':['{a} of {b} used','已使用 {a} / {b}'],'sch.off':['off','已停用'],'sch.hint':['Weekly events run in the device time zone and are not replayed after a missed window; a restart runs last.','每周任务按设备时区执行，错过的时段不补执行；重启类操作最后执行。'],'sch.add':['New schedule','新建定时'],'sch.time':['Time','时间'],'sch.date':['Date','日期'],
'sch.repeat':['Repeat','重复'],'sch.action':['Action','动作'],'sch.target':['Target','对象'],'sch.turn_on':['Turn on','开启'],'sch.turn_off':['Turn off','关闭'],'sch.weekly':['Weekly','每周'],
'sch.add_btn':['Add schedule','添加'],'sch.added':['Saved','已保存'],'sch.reset':['Clear form','清空表单'],'sch.when':['Date and time (device time zone)','执行日期与时间（设备时区）'],'sch.pick_day':['Pick at least one day','请至少选择一天'],'sch.future':['Pick a time in the future','请选择未来的时间'],
'sch.fan_on':['Turn on at {p}%','开启，风速 {p}%'],'sch.fan_off':['Turn off','关闭'],'sch.no_clock':['The clock is not synced yet; weekly and dated schedules will not run until it is.','时钟尚未校准，校准前每周及指定日期的任务不会执行。'],
'day.short.0':['Mon','一'],'day.short.1':['Tue','二'],'day.short.2':['Wed','三'],'day.short.3':['Thu','四'],'day.short.4':['Fri','五'],'day.short.5':['Sat','六'],'day.short.6':['Sun','日'],
'day.every':['Every day','每天'],'day.weekdays':['Weekdays','工作日'],'day.weekends':['Weekends','周末'],'day.once':['Once','仅一次'],
'night.lead':['Quieter fan and dimmer light during set hours.','在设定时段降低风速与灯光。'],'night.list':['Night periods','夜间时段'],'night.empty':['No night periods','暂无夜间时段'],
'night.add':['New night period','新建夜间时段'],'night.start':['From','开始'],'night.end':['Until','结束'],'night.next_day':['(next day)','（次日）'],
'night.fan':['Limit fan speed','限制风速'],'night.fan_desc':['Cap the speed during this period','时段内限制最高风速'],'night.fan_max':['Max speed','最高风速'],
'night.light':['Dim the light ring','调暗灯环'],'night.light_desc':['Cap brightness, 0 turns it off','限制亮度，0 为关闭'],'night.light_max':['Max brightness','亮度上限'],
'night.block_t':['Don’t auto-start','禁止自动开启'],'night.block_desc':['Auto control cannot turn the purifier on','自动调速不会开启净化器'],
'night.fan_cap':['Fan ≤ {p}%','风速 ≤ {p}%'],'night.light_cap':['Light ≤ {p}%','灯光 ≤ {p}%'],'night.light_off':['Light off','灯光关闭'],'night.block':['No auto-start','禁止自动开启'],'night.add_btn':['Add period','添加'],
/* M1 */
'm1.pressure':['Pressure','气压'],'m1.overall':['Air quality','空气质量'],'m1.v_excellent':['Excellent','优'],'m1.v_good':['Good','良好'],'m1.v_fair':['Fair','一般'],'m1.v_poor':['Poor','较差'],
'm1.all_ok':['All readings are in range','各项读数均在适宜范围'],'m1.no_data':['No data','暂无数据'],'m1.stale':['Data is out of date','数据已过期'],
'm1.stale_hint':['The sensor has not reported recently. Check Diagnostics.','传感器近期未上报，请查看诊断。'],'m1.updated':['Updated {n} s ago','{n} 秒前更新'],
'm1.screen':['Screen brightness','屏幕亮度'],'m1.screen_desc':['Shows the last level sent; the screen does not report it back','显示最近发送的档位，屏幕不回报实际亮度'],
'm1.linked':['Linked purifiers','联动的净化器'],'m1.linked_desc':["A1 units with an active reading session", "已建立读取会话的 A1"],'m1.linked_empty':["No active A1 session. Add this M1 on the A1 settings page.", "暂无 A1 会话，请在 A1 设置页面添加本机。"],
'm1.allow_btn':['Allow an A1','添加许可'],'m1.session_ok':['Connected','已连接'],'m1.session_wait':['Waiting for A1','等待 A1 连接'],
'm1.perm_lead':["Configure this M1 on the A1. Reading sessions are established automatically through MQTT.", "在 A1 上添加本机后，将通过 MQTT 自动建立读取会话。"],
'm1.allowed':['Allowed A1 units','已允许的 A1'],'m1.allowed_empty':['None yet','暂无'],'m1.allow_add':['Allow an A1','添加许可'],'m1.pair_id':['Pairing ID from the A1','A1 生成的配对 ID'],
'm1.pair_help':['On the A1: Settings → Linked M1 → add this M1, then copy the ID shown.','在 A1：设置 → 绑定 M1 → 添加本机后复制显示的配对 ID。'],
'm1.pair_bad':['Format: a1mac:m1mac (12 hex digits each)','格式：A1 的 MAC:M1 的 MAC（各 12 位十六进制）'],'m1.pair_other':['This ID is for a different M1','该配对 ID 属于另一台 M1'],
'm1.perm_hint':["Both devices need MQTT command access to establish a session and LAN connectivity to read sensors. Inactive sessions expire after 30 minutes.", "建立会话需要 MQTT 命令访问权限，读取数据需要局域网连通。连续 30 分钟无有效读取后，会话自动释放。"],
/* TC1 */
'control.pending':['Waiting for device confirmation','等待设备确认中'],'control.unconfirmed':['Operation not confirmed; showing the latest device state','操作尚未确认，已恢复最近设备状态'],'control.syncing':['Confirming…','确认中…'],
 'tc1.sockets':['Sockets','插座'],'tc1.on_count':['{n} of 6 on','6 路中 {n} 路通电'],'tc1.all_on':['All on','全部开启'],'tc1.all_off':['All off','全部关闭'],
'tc1.on':['On','通电'],'tc1.off':['Off','断开'],'tc1.rename':['Rename','重命名'],'tc1.socket_n':['Socket {n}','插座 {n}'],
'tc1.output_hint':['Shows the output the strip has set; check the load to confirm power.','显示设备的输出设定，实际供电请以负载为准。'],
'tc1.power':['Power','功率'],'tc1.recent':['Recent samples','最近采样'],'tc1.energy':['Energy since start','累计电量'],'tc1.peak':['Recent peak','近期峰值'],
'tc1.lock_desc':['Disables the key on the strip','锁定机身按键'],'tc1.led':['Indicator light','指示灯'],'tc1.led_desc':['Status light on the strip','机身状态指示灯'],
'tc1.names':['Socket names','插座名称'],'tc1.names_desc':['Shown here and in Home Assistant','在本页和 Home Assistant 中显示'],
'tc1.metering':['Reporting & metering','上报与计量'],'tc1.report':['MQTT report interval','MQTT 上报间隔'],'tc1.report_help':['How often power is published to MQTT (1–3600 s).','功率发布到 MQTT 的频率（1–3600 秒）。'],
'tc1.calibration':['Calibration','计量校准'],'tc1.coef':['Power coefficient','功率系数'],'tc1.coef_warn':['Only change this with a known calibration value. An idle reading cannot verify accuracy.','仅在已知校准值时修改；空载读数无法验证计量精度。'],
'btn.lead':['See each gesture and its action. Expand a range to edit individual gestures.','按手势查看实际动作；相同动作合并显示，展开后可逐条编辑。'],'btn.current':['What each gesture does','按下后会发生什么'],
'btn.click_count':['Number of presses','连按次数'],'btn.hold_count':['Hold duration (seconds)','按住时长（秒）'],
'btn.single':['Single press','单击'],'btn.click_full':['Press {n} times','连按 {n} 次'],'btn.hold_full':['Hold {n} seconds','长按 {n} 秒'],
'btn.click_range':['Press {a}–{b} times','连按 {a}～{b} 次'],'btn.hold_range':['Hold {a}–{b} seconds','长按 {a}～{b} 秒'],
'btn.expand':['Expand to edit','展开编辑'],'btn.recovery':['Recovery gestures · fixed','恢复操作 · 固定功能'],'btn.reset_wifi':['Reset network settings','重置网络配置'],
'btn.n':['#','序号'],'btn.click':['Click','连击'],'btn.hold':['Hold','长按'],'btn.click_n':['×{n}','{n} 次'],'btn.hold_n':['{n} s','{n} 秒'],'btn.empty':['No custom events','暂无自定义事件'],
'btn.edit':['Set an event','设置事件'],'btn.kind':['Gesture','手势'],'btn.count':['Clicks / seconds','次数 / 秒数'],'btn.action':['Action','动作'],
'btn.reset_note':['Holding 5–10 s or over 10 s always triggers the recovery reset, regardless of mapping.','按住 5–10 秒或 10 秒以上固定触发恢复操作，不受映射影响。'],
'op.none':['Not set','未配置'],'op.g_switch':['Switch','开关'],'op.g_system':['System','系统'],'op.0':['All sockets','全部插座'],'op.7':['Indicator light','指示灯'],'op.8':['Restart device','重启设备'],
'op.9':['Open setup hotspot','开启配网热点'],'op.10':['Factory reset','恢复出厂设置'],'op.11':['Child lock','童锁'],'op.12':['Restart web service','重启网页服务'],'op.13':['Soft restart','软件重启'],
/* status values (from the shared diagnostics vocabulary) */
'sch.state.waiting':['Waiting','等待执行'],'sch.state.executed':['Executed','已执行'],'sch.state.missed':['Missed','已错过'],'sch.state.busy':['Skipped (busy)','设备忙，已跳过'],'sch.state.migration_disabled':['Disabled (old config)','旧配置不支持，已停用'],'s.ready':['Ready','就绪'],'s.disconnected':['Disconnected','未连接'],'s.connecting':['Connecting','连接中'],'s.synced':['Synced','校时成功'],'s.syncing':['Syncing','正在校时'],
's.waiting_network':['Waiting for network','等待网络'],'s.failed':['Failed','校时失败'],'s.screen_queue_failed':['Synced; screen update failed','网络校时成功，屏幕入队失败'],
's.idle':['Idle','空闲'],'s.pending':['Pending','等待验证'],'s.success':['Verified and saved','验证成功并已保存'],'s.storage_failure':['Save failed, rolled back','保存失败，已回滚'],
's.timeout_rollback':['Timed out, rolled back','连接超时，已回滚'],'s.legacy':['legacy','legacy'],'s.account':['TMCP','TMCP'],'s.downloading':['Downloading','下载中'],
/* diagnostic labels */
'd.wifi_trial_status':['Wi-Fi trial','Wi-Fi 试连状态'],'d.wifi_trial_active':['Verifying Wi-Fi','正在验证 Wi-Fi'],'d.uptime_seconds':['Uptime','运行时间'],'d.free_memory':['Free memory','可用内存'],
'd.child_lock':['Child lock','童锁'],'d.led_enabled':['Light enabled','启用指示灯'],'d.socket_names':['Socket names','插座名称'],'d.socket_states':['Socket outputs','插座输出'],
'd.time_synced':['Clock synced','时钟已校准'],'d.utc_time':['Device time','设备时间'],'d.fan_on':['Fan on','风机开启'],'d.speed':['Saved speed','风速'],'d.percentage':['Target speed','目标风速'],
'd.applied_speed':['Output speed','实际输出'],'d.requested_fan_on':['Requested on','请求开启'],'d.requested_speed':['Requested speed','请求风速'],'d.fan_ready':['Fan driver ready','风机驱动就绪'],
'd.panel_ready':['Panel OK','面板通信正常'],'d.panel_errors':['Panel errors','面板通信错误数'],'d.hardware_errors':['Hardware errors','硬件错误数'],'d.panel_raw':['Panel raw','面板原始数据'],
'd.version':['Firmware','固件版本'],'d.device_id':['Device ID','设备 ID'],'d.name':['Name','设备名称'],'d.ssid':['Network','网络名称'],'d.ip':['IP address','IP 地址'],
'd.wifi_connected':['Wi-Fi connected','Wi-Fi 已连接'],'d.ap_active':['Hotspot on','配网热点已开启'],'d.ap_name':['Hotspot name','热点名称'],'d.mqtt_connected':['MQTT connected','MQTT 已连接'],
'd.mqtt_status':['MQTT status','MQTT 状态'],'d.mqtt_host':['Broker','Broker 地址'],'d.mqtt_port':['Port','MQTT 端口'],'d.mqtt_user':['Username','MQTT 用户名'],'d.mqtt_topic_mode':['Topic mode','主题模式'],
'd.mqtt_errors':['MQTT errors','MQTT 错误次数'],'d.mqtt_last_error':['Last MQTT error','最近 MQTT 错误'],'d.mqtt_cleanup_warning':['HA cleanup failed','旧 HA 实体清理异常'],
'd.sensor_valid':['Sensor data valid','传感器数据有效'],'d.sensor_received':['Sensor data received','已收到传感器数据'],'d.age_ms':['Data age','数据距今'],
'd.temperature':['Temperature (℃)','温度（℃）'],'d.humidity':['Humidity (%)','湿度（%）'],'d.formaldehyde':['Formaldehyde (mg/m³)','甲醛（mg/m³）'],'d.pm25':['PM2.5 (µg/m³)','PM2.5（µg/m³）'],
'd.uart_ready':['UART ready','串口已就绪'],'d.rx_frames':['Frames received','接收帧数'],'d.unknown_frames':['Unknown frames','未知帧数'],'d.uart_errors':['UART errors','串口错误数'],
'd.discarded_bytes':['Discarded bytes','丢弃字节数'],'d.last_frame':['Last frame (hex)','最近串口帧（HEX）'],'d.brightness_requested':['Requested brightness','请求亮度档位'],
'd.ota_active':['Updating','正在升级'],'d.ota_state':['Update state','升级状态'],'d.ota_error':['Update error','升级错误'],'d.ota_progress':['Update progress (%)','升级进度（%）'],
'd.scan_busy':['Scanning Wi-Fi','正在扫描 Wi-Fi'],'d.web_password_set':['Web password set','已设置网页密码'],'d.mqtt_password_set':['MQTT password set','已设置 MQTT 密码'],'d.wifi_password_set':['Wi-Fi password set','已保存 Wi-Fi 密码'],
'd.ntp_host':['Preferred NTP','首选 NTP 服务器'],'d.ntp_server':['Last NTP tried','最近尝试的校时源'],'d.ntp_status':['Sync status','校时状态'],'d.ntp_synced':['Synced this boot','本次启动已完成校时'],
'd.ntp_screen_queued':['Screen time queued','屏幕时间已入队'],'d.ntp_last_success':['Last sync','最近成功校时'],'d.ntp_next_seconds':['Next sync in (s)','下次校时（秒后）'],'d.timezone_minutes':['UTC offset (min)','时区（UTC 分钟差）'],
'd.led_visible':['Light showing','灯环显示中'],'d.led_always_on':['Always on','常亮'],'d.brightness':['Brightness','亮度'],'d.red':['Red','红'],'d.green':['Green','绿'],'d.blue':['Blue','蓝'],
'd.config_dirty':['Saving settings','设置保存中'],'d.save_error':['Save error','保存错误'],'d.reboot_pending':['Restart pending','等待重启'],
'd.report_seconds':['Report interval (s)','上报间隔（秒）'],'d.powerCoefficientX100':['Power coefficient (×100)','功率系数（×100）'],'d.mask':['Subnet mask','子网掩码'],'d.gateway':['Gateway','网关']
};
const KEY='phicomm.language';
let preference='auto';try{preference=localStorage.getItem(KEY)||'auto';}catch{}
const detect=()=>{for(const l of navigator.languages||[navigator.language||'en']){const s=l.toLowerCase();if(s.startsWith('zh'))return 'zh-CN';if(s.startsWith('en'))return 'en';}return 'en';};
const listeners=[];
const I18N={
 lang:preference==='auto'?detect():preference,preference,
 has:k=>Object.hasOwn(D,k),
 t(k,vars){const e=D[k];let s=e?e[I18N.lang==='zh-CN'?1:0]:k;if(!e)console.warn('i18n missing',k);
  if(vars)s=s.replace(/\\{(\\w+)\\}/g,(_,n)=>vars[n]??'');return s;},
 apply(root=document){
  document.documentElement.lang=I18N.lang;
  root.querySelectorAll('[data-i18n]').forEach(el=>{if(el.dataset.i18n)el.textContent=I18N.t(el.dataset.i18n);});
  root.querySelectorAll('[data-i18n-ph]').forEach(el=>el.placeholder=I18N.t(el.dataset.i18nPh));
  root.querySelectorAll('[data-i18n-aria]').forEach(el=>el.setAttribute('aria-label',I18N.t(el.dataset.i18nAria)));
 },
 set(p){I18N.preference=p;try{localStorage.setItem(KEY,p);}catch{}I18N.lang=p==='auto'?detect():p;I18N.apply();listeners.forEach(f=>f());},
 onChange:f=>listeners.push(f),
 keys:()=>Object.keys(D),
 extend:o=>Object.assign(D,o)
};
document.documentElement.lang=I18N.lang;
window.addEventListener('languagechange',()=>{if(I18N.preference==='auto')I18N.set('auto');});
window.I18N=I18N;
})();
<\/script>
<script>// Device service.js retains its HTTP-shaped API; transport is supplied by host.
(()=>{
 const pending=new Map();
 let activeRead=null;
 function send(id,entry){entry.sent=true;if(entry.read)activeRead=id;parent.postMessage({type:'device-command',id,request:entry.request},parent.location.origin);}
 function nextRead(){
  if(activeRead)return;
  const waiting=[...pending].filter(([,entry])=>entry.read&&!entry.sent);
  const next=waiting.find(([,entry])=>entry.request.action==='status.get')||waiting[0];
  if(next)send(...next);
 }
 function remove(id){const entry=pending.get(id);if(!entry)return;pending.delete(id);clearTimeout(entry.timer);entry.cleanup();if(activeRead===id)activeRead=null;}

 window.addEventListener('message',event=>{
  if(event.source!==parent||event.data?.type!=='device-result')return;
  const entry=pending.get(event.data.id);if(!entry)return;
  remove(event.data.id);
  entry.resolve(new Response(JSON.stringify(event.data.reply),{status:200,headers:{'Content-Type':'application/json'}}));nextRead();
 });
 window.fetch=(url,options={})=>{
  if(url!=='/api/v1/command')return Promise.reject(Error('不支持的操作'));
  return new Promise((resolve,reject)=>{
   const id=Array.from(crypto.getRandomValues(new Uint8Array(16)),b=>b.toString(16).padStart(2,'0')).join('');
   const abort=()=>{remove(id);clearTimeout(timer);cleanup();reject(Error('暂未收到操作回执，请等待状态更新'));nextRead();};
   const cleanup=()=>options.signal?.removeEventListener('abort',abort);
   const timer=setTimeout(abort,24000);
   if(options.signal?.aborted){abort();return;}
   options.signal?.addEventListener('abort',abort,{once:true});
   const request=JSON.parse(options.body),entry={resolve,timer,cleanup,request,read:request.action.endsWith('.get'),sent:false};
   pending.set(id,entry);
   if(entry.read)nextRead();else send(id,entry);
  });
 };
})();
window.addEventListener('storage',event=>{
 if(event.key!=='phicomm.appearance')return;
 if(event.newValue==='system'||!event.newValue)delete document.documentElement.dataset.theme;
 else document.documentElement.dataset.theme=event.newValue;
});
// Only the host can choose the authenticated device URL. Never upload to cloud.
(()=>{
 const uploads=new Map();
 window.createDeviceUpload=()=>{
  const id=crypto.randomUUID(),xhr={upload:{},status:0,responseText:'',timeout:310000,setRequestHeader(){},open(method,path){if(method!=='POST'||!['/api/v1/ota/upload','/api/v1/ota/upload-unsigned'].includes(path))throw Error('不支持的上传');this.rescue=path.endsWith('-unsigned');},send(file){uploads.set(id,this);parent.postMessage({type:'device-upload',id,file,rescue:!!this.rescue},parent.location.origin);},abort(){parent.postMessage({type:'device-upload-abort',id},parent.location.origin);uploads.delete(id);this.onabort?.();this.onloadend?.();}};return xhr;
 };
 window.addEventListener('message',event=>{
  if(event.source!==parent||event.origin!==parent.location.origin)return;
  const xhr=uploads.get(event.data?.id);if(!xhr)return;
  if(event.data.type==='device-upload-progress'){xhr.upload.onprogress?.({lengthComputable:true,loaded:event.data.loaded,total:event.data.total});}
  else if(event.data.type==='device-upload-result'){uploads.delete(event.data.id);xhr.status=event.data.result.status;xhr.responseText=event.data.result.text;xhr.onload?.();xhr.onloadend?.();}
 });
 window.addEventListener('pagehide',()=>{for(const xhr of uploads.values())xhr.abort();});
})();
<\/script><script>async function command(action,params={}){
 const request={action,params};
 if(!action.endsWith('.get'))request.request_id=globalThis.crypto?.randomUUID?crypto.randomUUID():Date.now().toString(36)+'-'+Math.random().toString(36).slice(2);
 const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),20000);
 try{
 const response=await fetch('/api/v1/command',{method:'POST',signal:controller.signal,headers:{'Content-Type':'application/json'},body:JSON.stringify(request),cache:'no-store'});
 const reply=await response.json();
 if(!response.ok||!['ok','accepted'].includes(reply.code)){const error=Error(reply.message||reply.code||('HTTP '+response.status));error.code=reply.code;throw error;}
 if(!action.endsWith('.get'))globalThis.UI?.invalidateStatus?.();
 return reply.data||{};
 }finally{clearTimeout(timer);}
}
async function api(path,data){
 if(path==='/status')return command('status.get');
 if(path==='/sensors/average')return command('sensors.average.get');
 if(path==='/power')return command('power.get');
 if(path==='/wifi/scan')return command(data===undefined?'wifi.scan.get':'wifi.scan');
 const domains={'/binding/config':'binding','/binding/status':'binding.status','/binding/probe':'binding.probe','/linkage/config':'linkage','/light/advanced':'light_effect','/sleep/config':'night','/time/config':'time'};
 if(domains[path])return command(domains[path]+(path==='/binding/probe'?'':data===undefined?'.get':'.set'),data||{});
 const direct={'/reboot':'system.reboot','/device/reset':'system.reset','/ota':'ota.start','/childLock':'child_lock.set','/child_lock':'child_lock.set','/led':'indicator.set','/outlet':'outlet.set','/fan':'fan.set','/fan/config':'fan.set','/light':'light.set','/light/config':'light.set'};
 if(direct[path]){if(['/light','/light/config'].includes(path)&&data.brightness!==undefined)data={...data,brightness:Math.round(data.brightness*100/255)};return command(direct[path],data);}
 if(path==='/display/brightness')return command('display.set',{brightness:data.level*25});
 if(path==='/socket'){for(let index=0;index<data.states.length;index++)await command('outlet.set',{index,on:!!data.states[index]});return {};}
 const sections={'/wifi/config':'wifi','/mqtt/config':'mqtt','/deviceName':'device','/auth/password':'auth','/socketNames':'socket','/mqtt/report/freq':'report','/power/coefficient':'meter','/ntp/config':'ntp'};
 if(sections[path]){
  let values={...data};
  if(path==='/power/coefficient')values={coefficient_x100:Number(data)};
  if(path==='/mqtt/config'){delete values.topic_mode;delete values.clear_password;if(data.clear_password)values.password='';else if(!values.password)delete values.password;}
  if(path==='/wifi/config'){delete values.open_network;if(data.open_network)values.password='';else if(!values.password)delete values.password;}
  return command('config.set',{section:sections[path],values});
 }
 throw Error('不支持的操作');
}
<\/script>
<script>/* Public provisioning contract. Passwords and session tokens are never encoded into a URL. */
(()=>{
'use strict';
const VERSION=1,TTL=120000;
const bytes=s=>new TextEncoder().encode(s).length;
function localHost(host){
 const h=host.toLowerCase().replace(/^\\[|\\]$/g,'');
 if(h==='localhost'||h==='::1')return true;
 if(h.includes(':'))return /^(fc|fd)[0-9a-f]{2}:|^fe[89ab][0-9a-f]:/.test(h);
 if(!/^\\d+\\.\\d+\\.\\d+\\.\\d+$/.test(h))return false;
 const p=h.split('.').map(Number);if(p.some(n=>n>255))return false;
 return p[0]===10||p[0]===127||(p[0]===172&&p[1]>=16&&p[1]<=31)||(p[0]===192&&p[1]===168)||(p[0]===169&&p[1]===254);
}
function deviceURL(raw){
 if(typeof raw!=='string'||!raw.trim()||raw.length>256)throw Error('device');
 const value=raw.trim(),url=new URL(value.includes('://')?value:'http://'+value);
 if(!['http:','https:'].includes(url.protocol)||!localHost(url.hostname)||url.username||url.password||url.search||url.hash||url.pathname!=='/')throw Error('device');
 return url;
}
function platformOrigin(raw){
 const u=new URL(raw);
 if(raw!==u.origin||!(u.protocol==='https:'||(u.protocol==='http:'&&['localhost','127.0.0.1','[::1]'].includes(u.hostname))))throw Error('origin');
 return u.origin;
}
function nonce(){const a=new Uint8Array(32);crypto.getRandomValues(a);return Array.from(a,n=>n.toString(16).padStart(2,'0')).join('');}
function readTicket(hash,now=Date.now()){
 if(!hash.startsWith('#iotcloud-import='))return null;
 if(hash.length>2048)throw Error('ticket');
 const p=new URLSearchParams(hash.slice(1));
 if([...p.keys()].sort().join(',')!=='expires,host,iotcloud-import,origin,port,user')throw Error('ticket');
 const id=p.get('iotcloud-import'),expires=Number(p.get('expires')),origin=platformOrigin(p.get('origin'));
 if(!/^[a-f0-9]{64}$/.test(id)||!Number.isSafeInteger(expires)||expires<=now||expires>now+TTL)throw Error('ticket');
 const visible=config({v:VERSION,host:p.get('host'),port:Number(p.get('port')),user:p.get('user'),password:'',protocol:'tmcp',expires},now);
 return {id,expires,origin,host:visible.host,port:visible.port,user:visible.user};
}
function config(value,now=Date.now()){
 if(!value||typeof value!=='object'||Array.isArray(value)||Object.keys(value).sort().join(',')!=='expires,host,password,port,protocol,user,v')throw Error('config');
 const {v,host,port,user,password,protocol,expires}=value;
 if(v!==VERSION||protocol!=='tmcp'||typeof host!=='string'||!host||bytes(host)>127||!/^([a-zA-Z0-9.-]+|\\[[a-fA-F0-9:]+\\])$/.test(host)||host.startsWith('.')||host.endsWith('.')||typeof user!=='string'||bytes(user)>63||/[\\x00-\\x1f\\x7f]/.test(user)||typeof password!=='string'||bytes(password)>256||/[\\x00-\\x1f\\x7f]/.test(password)||!Number.isInteger(port)||port<1||port>65535||!Number.isSafeInteger(expires)||expires<=now||expires>now+TTL)throw Error('config');
 return {v,host,port,user,password,protocol,expires};
}
function packet(e,{source,origin,id,expires},type){
 const d=e.data;return Date.now()<expires&&e.source===source&&e.origin===origin&&!!d&&typeof d==='object'&&d.type===type&&d.id===id;
}
globalThis.IotProvision=Object.freeze({VERSION,TTL,deviceURL,platformOrigin,nonce,readTicket,config,packet});
})();
<\/script>
<script>/* Shared WebUI framework: header, routing, feedback, reusable controls and the
 * settings pages every product has. Loaded after service.js (protocol) and
 * i18n.js (strings); each product page calls UI.start() with its own layout.
 * All requests go through command() in service.js; nothing here talks to a URL
 * directly except the OTA upload. */
(()=>{
'use strict';
const {t}=I18N;
const $=id=>document.getElementById(id);
// Remove the non-secret handshake fragment before any async device requests.
let importTicket=null,importInvalid=false;
if(location.hash.startsWith('#iotcloud-import=')){
 try{importTicket=IotProvision.readTicket(location.hash);}catch{importInvalid=true;}
 history.replaceState(null,'',location.pathname+location.search+'#settings/mqtt');
}

function h(tag,props,...kids){
 const el=document.createElement(tag);
 for(const [k,v] of Object.entries(props||{})){
  if(v==null||v===false)continue;
  if(k==='class')el.className=v;
  else if(k==='i18n'){el.dataset.i18n=v;el.textContent=t(v);}
  else if(k.startsWith('on')&&typeof v==='function')el.addEventListener(k.slice(2),v);
  else if(k in el&&!k.includes('-'))el[k]=v;
  else el.setAttribute(k,v===true?'':v);
 }
 for(const c of kids.flat(Infinity)){if(c==null||c===false)continue;el.append(c.nodeType?c:document.createTextNode(String(c)));}
 return el;
}
const ICONS={
 power:'<path d="M12 2v10"/><path d="M18.4 6.6a9 9 0 1 1-12.8 0"/>',
 fan:'<path d="M10.8 9.1C9 6.4 9.6 3 12.6 2.2c3-.8 4.5 2.4 2.6 6.4M14.9 10.8c2.7-1.8 6.1-1.2 6.9 1.8.8 3-2.4 4.5-6.4 2.6M13.2 14.9c1.8 2.7 1.2 6.1-1.8 6.9-3 .8-4.5-2.4-2.6-6.4M9.1 13.2C6.4 15 3 14.4 2.2 11.4c-.8-3 2.4-4.5 6.4-2.6"/><circle cx="12" cy="12" r="2"/>',
 plug:'<path d="M12 22v-5M9 8V2M15 8V2M18 8v5a6 6 0 0 1-12 0V8z"/>',
 air:'<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2M9.6 4.6A2 2 0 1 1 11 8H2M12.6 19.4A2 2 0 1 0 14 16H2"/>',
 lock:'<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
 wifi:'<path d="M5 12.6a10 10 0 0 1 14 0M8.5 16.1a5 5 0 0 1 7 0M2 8.8a15 15 0 0 1 20 0M12 20h.01"/>',
 home:'<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
 sliders:'<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',
 edit:'<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>',
 trash:'<path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"/>',
 plus:'<path d="M12 5v14M5 12h14"/>',
 link:'<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',
 external:'<path d="M14 3h7v7M10 14 21 3M21 14v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6"/>',
 copy:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
 info:'<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
 alert:'<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0zM12 9v4M12 17h.01"/>',
 moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
 clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
 auto:'<path d="M21 12a9 9 0 0 1-15 6.7L3 16M3 12a9 9 0 0 1 15-6.7L21 8M21 3v5h-5M3 21v-5h5"/>'
};
function icon(name,cls='i'){const s=document.createElementNS('http://www.w3.org/2000/svg','svg');s.setAttribute('viewBox','0 0 24 24');s.setAttribute('class',cls);s.setAttribute('aria-hidden','true');s.innerHTML=ICONS[name]||'';return s;}

/* ---------- Feedback ---------- */
function toast(text,bad=false){
 let box=$('toasts');if(!box){box=h('div',{id:'toasts',class:'toasts',role:'status','aria-live':'polite'});document.body.append(box);}
 const el=h('div',{class:'toast'+(bad?' bad':'')},text);box.append(el);setTimeout(()=>el.remove(),bad?6000:2600);
}
async function run(button,fn,okKey='toast.accepted'){
 if(button){button.disabled=true;button.setAttribute('aria-busy','true');}
 try{const r=await fn();if(okKey)toast(t(okKey));return r;}
 catch(e){toast(e.message||String(e),true);}
 finally{if(button){button.disabled=false;button.removeAttribute('aria-busy');}}
}
function onSubmit(form,fn,okKey){form.addEventListener('submit',e=>{e.preventDefault();run(form.querySelector('button[type=submit],button:not([type])'),fn,okKey);});}
function confirmDialog({title,body,ok,danger}){
 if(typeof document.body.append!=='function'||!document.createElement('dialog').showModal)return Promise.resolve(window.confirm(title+'\\n'+body));
 return new Promise(resolve=>{
  const d=h('dialog',{},h('h2',{},title),h('p',{},body),
   h('div',{class:'form-actions'},
    h('button',{class:'btn '+(danger?'danger':'primary'),type:'button',onclick:()=>{d.close();resolve(true);}},ok),
    h('button',{class:'btn ghost',type:'button',onclick:()=>d.close()},t('common.cancel'))));
  d.addEventListener('close',()=>{d.remove();resolve(false);});
  document.body.append(d);d.showModal();
 });
}

/* ---------- Controls ---------- */
function switchRow(id,titleKey,descKey){
 return h('label',{class:'switch'},h('span',{class:'text'},h('b',{i18n:titleKey}),descKey&&h('span',{i18n:descKey})),h('input',{type:'checkbox',role:'switch',id}));
}
function seg(options,onPick,{full=false,aria}={}){
 const label=k=>typeof k==='function'?k():I18N.has(k)?t(k):k;
 const box=h('div',{class:'seg'+(full?' full':''),role:'group','aria-label':aria||null});
 for(const [value,key] of options)box.append(h('button',{type:'button','data-value':String(value),'aria-pressed':'false',onclick:()=>{box.set(value);onPick(value);}},label(key)));
 box.set=v=>{for(const b of box.children)b.setAttribute('aria-pressed',String(b.dataset.value===String(v)));box.value=v;};
 box.relabel=()=>options.forEach(([,key],i)=>{box.children[i].textContent=label(key);});
 I18N.onChange(box.relabel);
 return box;
}
const DAY_BITS=[1,2,4,8,16,32,64];
function daysPicker(name,mask=127){
 const box=h('div',{class:'days',role:'group'});
 DAY_BITS.forEach((bit,i)=>box.append(h('label',{},h('input',{type:'checkbox',name,value:bit,checked:!!(mask&bit)}),h('span',{'data-i18n':'day.short.'+i},t('day.short.'+i)))));
 box.mask=()=>[...box.querySelectorAll('input')].reduce((m,i)=>m|(i.checked?Number(i.value):0),0);
 box.setMask=m=>box.querySelectorAll('input').forEach(i=>{i.checked=!!(m&Number(i.value));});
 return box;
}
function presetDays(picker){
 return h('div',{class:'row small'},[[127,'day.every'],[31,'day.weekdays'],[96,'day.weekends']].map(([m,k])=>h('button',{type:'button',class:'btn ghost',style:'min-height:28px;padding:2px 8px',onclick:()=>picker.setMask(m)},h('span',{i18n:k}))));
}
function daysText(mask){
 if(!mask)return t('day.once');if(mask===127)return t('day.every');if(mask===31)return t('day.weekdays');if(mask===96)return t('day.weekends');
 return DAY_BITS.map((b,i)=>mask&b?t('day.short.'+i):null).filter(Boolean).join(I18N.lang==='zh-CN'?'、':', ');
}
const hhmm=m=>String(Math.floor(m/60)%24).padStart(2,'0')+':'+String(m%60).padStart(2,'0');
const toMinutes=v=>{const [a,b]=v.split(':').map(Number);return a*60+b;};
function duration(sec){const d=Math.floor(sec/86400),hr=Math.floor(sec%86400/3600),m=Math.floor(sec%3600/60);return d?t('time.dh',{d,h:hr}):hr?t('time.hm',{h:hr,m}):t('time.m',{m});}
function summary(items){return h('dl',{class:'summary'},items.filter(Boolean).map(([k,v,dot])=>h('div',{},h('dt',{i18n:k}),h('dd',{},dot?h('span',{class:'dot '+dot}):null,v))));}
function card(titleKey,leadKey,...body){return h('section',{class:'card'},h('div',{class:'card-head'},h('div',{},h('h2',{i18n:titleKey}),leadKey&&h('p',{class:'help',i18n:leadKey}))),...body);}
function info(key){return h('details',{class:'info'},h('summary',{},icon('info'),h('span',{i18n:'common.more_info'})),h('p',{i18n:key}));}
function pageHead(titleKey,leadKey){return h('div',{},h('h2',{class:'page-title',i18n:titleKey}),h('p',{class:'page-lead',i18n:leadKey}));}
function saveBar(fn,label='common.save'){const b=h('button',{type:'button',class:'btn primary'},h('span',{i18n:label}));b.onclick=()=>run(b,fn);return h('div',{class:'form-actions'},b);}
function num(model,key,{min,max,step='any',unit,width}={}){
 const input=h('input',{type:'number',value:model[key],min,max,step,style:width?'width:'+width:null,oninput:e=>{if(e.target.value!==''&&Number.isFinite(+e.target.value))model[key]=+e.target.value;}});
 return unit?h('span',{class:'input-unit'},input,h('em',{},unit)):input;
}
function flag(model,key,titleKey,descKey){const r=switchRow(null,titleKey,descKey);const i=r.querySelector('input');i.checked=!!model[key];i.onchange=()=>{model[key]=typeof model[key]==='boolean'?i.checked:Number(i.checked);};return r;}
function slider(model,key,{min=0,max=100,fmt=v=>v+'%'}={}){
 const out=h('b',{class:'num'},fmt(model[key]));
 const r=h('input',{type:'range',min,max,value:model[key],oninput:e=>{model[key]=+e.target.value;out.textContent=fmt(model[key]);}});
 return [out,r];
}
function normalizeMac(v){const m=(v||'').replace(/[^0-9a-f]/gi,'').toLowerCase();return m.length===12?m:null;}
function prettyMac(m){return (m||'').toUpperCase().replace(/(..)(?!$)/g,'$1:');}
const clone=o=>JSON.parse(JSON.stringify(o));

/* Air quality bands: PM2.5 per GB 3095, formaldehyde limit per GB/T 18883-2022,
 * temperature and humidity comfort per the A1 light-segment defaults. */
// CO2 ventilation reference: HSE using-co2-monitors (1000 / 1500 ppm).
const AIR={
 co2:{unit:'ppm',max:2500,bands:[[1000,'comfort','ok'],[1500,'elevated','warn'],[Infinity,'ventilate','bad']]},
 pm25:{unit:'µg/m³',max:250,bands:[[35,'excellent','ok'],[75,'good','ok'],[115,'light','warn'],[150,'moderate','warn'],[250,'heavy','bad'],[Infinity,'severe','bad']]},
 formaldehyde:{unit:'mg/m³',max:0.2,bands:[[0.08,'pass','ok'],[0.1,'slight','warn'],[Infinity,'exceed','bad']]},
 temperature:{unit:'℃',min:0,max:40,bands:[[18,'cool','warn'],[26,'comfort','ok'],[Infinity,'warm','warn']]},
 humidity:{unit:'%',max:100,bands:[[40,'dry','warn'],[60,'comfort','ok'],[Infinity,'humid','warn']]}
};
function grade(metric,v){const b=AIR[metric].bands.find(([lim])=>v<=lim);return {key:'air.'+metric+'.'+b[1],cls:b[2]};}
function airScale(metric,v){
 const m=AIR[metric],lo=m.min||0,span=m.max-lo;let prev=lo;
 const strip=h('div',{class:'scale'});
 for(const [lim,,cls] of m.bands){const end=Math.min(lim,m.max);if(end<=prev)continue;strip.append(h('i',{class:cls,style:'flex:'+((end-prev)/span*100).toFixed(2)}));prev=end;}
 strip.append(h('b',{style:'left:'+Math.max(0,Math.min(100,(v-lo)/span*100))+'%'}));
 return strip;
}
const TZ=[-720,-660,-600,-540,-480,-420,-360,-300,-240,-210,-180,-120,-60,0,60,120,180,210,240,270,300,330,345,360,390,420,480,540,570,600,630,660,720,780,840];
function tzLabel(m){const sg=m<0?'−':'+',a=Math.abs(m);return 'UTC'+sg+String(Math.floor(a/60)).padStart(2,'0')+':'+String(a%60).padStart(2,'0')+(m===480?' · '+t('tz.cn'):'');}

/* ---------- Header, navigation, banners ---------- */
const UI=window.UI={$,h,icon,toast,run,onSubmit,confirm:confirmDialog,switchRow,seg,daysPicker,presetDays,daysText,hhmm,toMinutes,duration,summary,card,info,pageHead,saveBar,num,flag,slider,normalizeMac,prettyMac,clone,AIR,grade,airScale,tzLabel,state:null,caps:null,pages:{},device:null,clockCard,maintenancePage,scanNetworks};
// Keep requested output visible until a fresh read confirms it. Polls may still
// contain the pre-write state while the device applies an accepted command.
let pendingControl=null;
// Partial reads retain slow fields; null explicitly invalidates a measurement.
UI.acceptStatus=(s,partial=false)=>{
 const merged=partial?{...UI.confirmed,...s}:s;
 if(partial&&s.scd40&&UI.confirmed?.scd40)merged.scd40={...UI.confirmed.scd40,...s.scd40};
 UI.confirmed=merged;UI.state=pendingControl?{...merged,...pendingControl}:merged;return UI.state;
};
let fullGeneration=1,loadedGeneration=0,lastFullAt=0;
UI.invalidateStatus=()=>{fullGeneration++;};
UI.activePage=()=>/^settings\\/([a-z]+)$/.exec(UI.embeddedRoute??location.hash.slice(1))?.[1]||null;
UI.statusParams=()=>{
 const page=UI.activePage(),ttl=page==='diagnostics'?5000:['network','mqtt','device','firmware'].includes(page)?10000:30000;
 return UI.caps?.status_views?.includes('live')&&loadedGeneration===fullGeneration&&Date.now()-lastFullAt<ttl?{view:'live'}:{};
};
UI.control=async(action,params,patch)=>{
 if(pendingControl){UI.device.onStatus?.(UI.state);throw Error(t('control.pending'));}
 pendingControl=patch;UI.controlBusy=true;
 const render=()=>{if(UI.device.onStatus)UI.device.onStatus(UI.state);};
 UI.state={...UI.state,...patch};render();
 let sendError,last;
 const matches=s=>s&&Object.entries(patch).every(([k,v])=>Object.hasOwn(s,k)&&(Array.isArray(v)?Array.isArray(s[k])&&v.length===s[k].length&&v.every((x,i)=>!!x===!!s[k][i]):typeof v==='boolean'?!!s[k]===v:s[k]===v));
 try{
  try{await command(action,params);}catch(e){sendError=e;if(e.code&&!['timeout','offline'].includes(e.code))throw e;}
  const until=Date.now()+20000;
  do{
   last=await UI.reload();
   if(matches(last))return last;
   await new Promise(resolve=>setTimeout(resolve,750));
  }while(Date.now()<until);
  throw Error(t('control.unconfirmed')+(sendError?' · '+sendError.message:''));
 }finally{
  pendingControl=null;UI.controlBusy=false;UI.state=UI.confirmed||UI.state;render();
 }
};
function header(dev){
 const lang=h('select',{id:'langPick','aria-label':'Language'},
  h('option',{value:'auto','data-i18n':'pref.lang_auto'},t('pref.lang_auto')),h('option',{value:'en'},'English'),h('option',{value:'zh-CN'},'简体中文'));
 lang.value=I18N.preference;lang.onchange=()=>I18N.set(lang.value);
 const theme=h('select',{id:'themePick','aria-label':'Theme'},['system','light','dark'].map(v=>h('option',{value:v,'data-i18n':'pref.theme_'+v},t('pref.theme_'+v))));
 let saved='system';try{saved=localStorage.getItem('phicomm.appearance')||'system';}catch{}
 const apply=v=>{if(v==='system')document.documentElement.removeAttribute('data-theme');else document.documentElement.dataset.theme=v;};
 theme.value=saved;apply(saved);theme.onchange=()=>{apply(theme.value);try{localStorage.setItem('phicomm.appearance',theme.value);}catch{}};
 return h('header',{class:'topbar'},
  h('div',{class:'brand'},h('div',{class:'logo'},icon(dev.icon)),h('div',{class:'grow'},h('div',{class:'kind','data-i18n':dev.kindKey},t(dev.kindKey)),h('h1',{id:'title'},dev.model))),
  h('div',{class:'prefs'},lang,theme),
  h('div',{class:'chips',id:'chips'}));
}
function chip(dotCls,labelKey,value){return h('span',{class:'chip'},h('span',{class:'dot '+dotCls}),h('span',{i18n:labelKey}),value!=null&&h('b',{},value));}
function renderChips(s){
 const c=$('chips');if(!c)return;
 const wifi=s.wifi_connected?chip('ok','chip.wifi',s.ssid+' · '+s.ip):s.ap_active?chip('warn','chip.hotspot',s.ap_name):chip('bad','chip.wifi',t('state.connecting'));
 const mq=!s.mqtt_host?chip('','chip.mqtt',t('state.off')):s.mqtt_connected?chip('ok','chip.mqtt',t('state.ready')):chip('warn','chip.mqtt',t('s.'+(s.mqtt_status||'connecting')));
 c.replaceChildren(wifi,mq,h('span',{class:'chip'},h('span',{i18n:'chip.firmware'}),h('b',{class:'num'},s.version||'—')),...(UI.device.chips?UI.device.chips(s):[]));
}
function renderBanners(s,lost){
 const b=$('banners');if(!b)return;b.replaceChildren();
 const add=(cls,ic,text)=>b.append(h('div',{class:'banner '+cls,role:cls==='bad'?'alert':null},icon(ic),h('span',{},text)));
 if(lost){add('bad','alert',t('banner.lost'));return;}
 if(s.ota_active)add('info','auto',t('banner.ota',{p:s.ota_progress}));
 if(s.reboot_pending)add('info','auto',t('banner.rebooting'));
 if(s.mqtt_cleanup_warning)add('warn','alert',t('banner.cleanup'));
 if(s.save_error)add('bad','alert',t('banner.save_error',{e:s.save_error}));
 if(s.ap_active&&!s.wifi_connected)add('warn','wifi',t('banner.hotspot',{n:s.ap_name}));
}
function buildNav(dev){
 const side=$('side');side.replaceChildren();
 for(const [groupKey,keys] of dev.groups){
  const links=keys.filter(k=>UI.pages[k]).map(k=>h('a',{href:'#settings/'+k,'data-i18n':dev.nav[k]},t(dev.nav[k])));
  if(!links.length)continue;
  side.append(h('div',{class:'group','data-i18n':groupKey},t(groupKey)));
  for(const a of links)side.append(a);
 }
}
function showRoute(){
 const m=/^settings\\/([a-z]+)$/.exec(UI.embeddedRoute??location.hash.slice(1));
 const page=m&&document.querySelector('[data-settings-page="'+m[1]+'"]')?m[1]:m?(UI.device.groups.flatMap(g=>g[1]).find(k=>UI.pages[k])||null):null;
 $('homePage').hidden=!!page;$('settingsPage').hidden=!page;
 document.querySelectorAll('[data-settings-page]').forEach(p=>{p.hidden=p.dataset.settingsPage!==page;});
 document.querySelectorAll('.tabs a').forEach(a=>{const on=a.dataset.tab===(page?'settings':'home');if(on)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
 document.querySelectorAll('.side a').forEach(a=>{if(a.hash==='#settings/'+page)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
 if(page)UI.reload({full:true}).then(()=>afterShow(page));else afterShow(page);
}
const showingPages=new Set();
async function afterShow(page){
 if(!page)return;
 const active=document.querySelector('.side a[aria-current]'),side=$('side');
 // Reveal mobile menu items without scrollIntoView scrolling the whole page.
 if(active&&side&&side.scrollWidth>side.clientWidth){
  const item=active.getBoundingClientRect(),menu=side.getBoundingClientRect();
  if(item.left<menu.left)side.scrollLeft+=item.left-menu.left;
  else if(item.right>menu.right)side.scrollLeft+=item.right-menu.right;
 }
 const p=UI.pages[page];if(!p?.show||showingPages.has(page))return;
 const box=document.querySelector('[data-settings-page="'+page+'"]');
 box?.querySelector('.page-load-error')?.remove();showingPages.add(page);
 try{await p.show();}catch(e){const retry=h('button',{class:'btn',type:'button',onclick:()=>afterShow(page)},'重试');box?.prepend(h('div',{class:'banner warn page-load-error',role:'alert'},h('span',{},e.message),retry));}finally{showingPages.delete(page);}
}
/* Wi-Fi scan is shared: start, poll, and hand the sorted list to a callback. */
async function scanNetworks(onList){
 await command('wifi.scan');
 for(let i=0;i<25;i++){const r=await command('wifi.scan.get');if(r.scanning){await new Promise(res=>setTimeout(res,700));continue;}onList(r.networks||[]);return;}
 throw Error(t('wifi.scan_timeout'));
}

/* ---------- Shared settings pages ---------- */
function wifiPage(){
 const sum=h('div'),list=h('div',{class:'list',hidden:true});
 const ssid=h('input',{id:'ssid',maxLength:32,required:true,autocomplete:'off'});
 const pass=h('input',{id:'wifiPassword',type:'password',maxLength:63,autocomplete:'new-password',placeholder:t('wifi.pass_ph')});
 const open=switchRow('openNetwork','wifi.open');
 const scanBtn=h('button',{type:'button',class:'btn',id:'scan'},icon('auto'),h('span',{i18n:'wifi.scan'}));
 const form=h('form',{id:'wifiForm',class:'stack'},
  h('label',{class:'field'},h('span',{i18n:'wifi.ssid'}),h('div',{class:'row'},h('div',{class:'grow'},ssid),scanBtn)),list,
  h('label',{class:'field'},h('span',{i18n:'wifi.password'}),pass),open,
  h('div',{class:'form-actions'},h('button',{class:'btn primary',type:'submit'},h('span',{i18n:'wifi.save'}))),info('wifi.hint'));
 open.querySelector('input').onchange=e=>{pass.disabled=e.target.checked;};
 scanBtn.onclick=()=>run(scanBtn,()=>scanNetworks(net=>{
  list.replaceChildren(...net.slice().sort((a,b)=>b.rssi-a.rssi).map(n=>h('button',{type:'button',class:'item',style:'cursor:pointer;text-align:left;font:inherit;color:inherit;width:100%',
   onclick:()=>{ssid.value=n.ssid;open.querySelector('input').checked=n.security===0;pass.disabled=n.security===0;list.hidden=true;pass.focus();}},
   icon('wifi'),h('span',{class:'grow'},h('b',{},n.ssid),h('span',{},t('wifi.signal.'+(n.rssi>-55?3:n.rssi>-70?2:1))+' · '+n.rssi+' dBm')),n.security===0?h('span',{class:'badge',i18n:'wifi.open_badge'}):icon('lock'))));
  list.hidden=false;
  if(!net.length)throw Error(t('wifi.none'));
 }),null);
 onSubmit(form,()=>api('/wifi/config',{ssid:ssid.value,password:pass.value,open_network:open.querySelector('input').checked}),'wifi.verifying');
 return {el:h('div',{class:'stack'},pageHead('nav.wifi','wifi.lead'),sum,card('wifi.change',null,form)),
  status(s){sum.replaceChildren(summary([['wifi.status',s.wifi_connected?t('state.connected'):s.ap_active?t('state.hotspot'):t('state.connecting'),s.wifi_connected?'ok':s.ap_active?'warn':'bad'],
   ['wifi.ssid',s.ssid||'—'],['wifi.ip',s.ip||'—'],s.ap_active?['wifi.ap',s.ap_name]:['wifi.saved_password',t(s.wifi_password_set?'common.yes':'common.no')]]));},
  init(s){ssid.value=s.ssid||'';}};
}
function mqttImportPanel(dev,fields){
 const box=h('section',{class:'card stack',id:'mqttImport',hidden:!importTicket&&!importInvalid});
 if(importInvalid){box.append(h('p',{role:'alert'},t('import.invalid')));return box;}
 if(!importTicket)return box;
 const ticket=importTicket;importTicket=null;
 const source=window.opener;
 const status=h('p',{role:'status'}),accept=h('button',{type:'button',class:'btn primary',disabled:true},t('import.accept')),
 cancel=h('button',{type:'button',class:'btn'},t('common.cancel'));
 box.append(h('h2',{},t('import.title')),h('p',{},t('import.source',{origin:ticket.origin})),h('p',{},t('import.preview',{host:ticket.host,port:ticket.port,user:ticket.user||'—'})),
  h('p',{class:'help'},t('import.help')),h('p',{class:'help'},t('import.http')),
  h('div',{class:'form-actions'},accept,cancel),status);
 let waiting=false,done=false,timer,original=null;
 box.activate=()=>{if(!done&&source&&Date.now()<ticket.expires)accept.disabled=false;};
 const detach=()=>{window.removeEventListener('message',receive);clearTimeout(timer);try{window.opener=null;}catch{}};
 const clear=()=>{fields.pass.value='';if(original){fields.host.value=original.host;fields.port.value=original.port;fields.user.value=original.user;if(fields.protocol)fields.protocol.value=original.protocol;fields.clear.checked=original.clear;original=null;}waiting=false;done=true;detach();accept.disabled=true;};
 box.saved=()=>{original=null;fields.pass.value='';clearTimeout(timer);};
 box.guard=()=>{if(waiting)throw Error(t('import.waiting'));};
 const finish=()=>{clear();status.textContent=t('import.expired');};
 const receive=e=>{
  if(!waiting||done||!IotProvision.packet(e,{source,origin:ticket.origin,id:ticket.id,expires:ticket.expires},'iotcloud.provision.config'))return;
  let data;
  try{if(Object.keys(e.data).sort().join(',')!=='id,password,type')throw Error();data=IotProvision.config({v:1,host:ticket.host,port:ticket.port,user:ticket.user,password:e.data.password,protocol:'tmcp',expires:ticket.expires});}catch{finish();status.textContent=t('import.invalid');return;}
  // Only front-end fields are touched. config.set remains the normal save flow.
  fields.host.value=data.host;fields.port.value=String(data.port);fields.user.value=data.user;fields.pass.value=data.password;
  if(fields.protocol)fields.protocol.value='tmcp';fields.clear.checked=data.password==='';
  waiting=false;done=true;detach();accept.hidden=true;status.textContent=t('import.received');
  source.postMessage({type:'iotcloud.provision.received',id:ticket.id},ticket.origin);
  // Never leave an unsaved imported host paired with the device's old password.
  timer=setTimeout(()=>{clear();status.textContent=t('import.expired');},Math.max(0,ticket.expires-Date.now()));
 };
 cancel.onclick=()=>{clear();box.hidden=true;};
 accept.onclick=()=>{
  if(done||Date.now()>=ticket.expires||!source){finish();return;}
  original={host:fields.host.value,port:fields.port.value,user:fields.user.value,protocol:fields.protocol?.value,clear:fields.clear.checked};
  fields.host.value=ticket.host;fields.port.value=String(ticket.port);fields.user.value=ticket.user;fields.pass.value='';if(fields.protocol)fields.protocol.value='tmcp';fields.clear.checked=false;
  waiting=true;accept.disabled=true;status.textContent=t('import.waiting');
  source.postMessage({type:'iotcloud.provision.ready',id:ticket.id},ticket.origin);
 };
 if(!source){accept.disabled=true;status.textContent=t('import.no_opener');return box;}
 window.addEventListener('message',receive);
 timer=setTimeout(finish,Math.max(0,ticket.expires-Date.now()));
 window.addEventListener('pagehide',clear,{once:true});
 window.addEventListener('hashchange',()=>{if(location.hash!=='#settings/mqtt')clear();});
 return box;
}
function mqttPage(dev){
 const sum=h('div');
 const host=h('input',{id:'mqttHost',maxLength:dev.mqttHostMax||127,placeholder:t('mqtt.host_ph')});
 const port=h('input',{id:'mqttPort',type:'number',min:1,max:65535,required:true,value:'1883'});
 const user=h('input',{id:'mqttUser',maxLength:63,autocomplete:'off'});
 const pass=h('input',{id:'mqttPassword',type:'password',maxLength:256,autocomplete:'new-password',placeholder:t('mqtt.pass_ph')});
 const protocol=dev.model==='TC1'?h('select',{id:'mqttMode'},h('option',{value:'tmcp'},'TMCP (v2)'),h('option',{value:'legacy'},'Legacy (v1)')):null;
 const clear=switchRow('clearMqttPassword','mqtt.clear','mqtt.clear_desc');
 const imported=mqttImportPanel(dev,{host,port,user,pass,protocol,clear:clear.querySelector('input')});
 const form=h('form',{id:'mqttForm',class:'stack'},
  h('div',{class:'fields',style:'grid-template-columns:minmax(0,3fr) minmax(90px,1fr)'},
   h('label',{class:'field'},h('span',{i18n:'mqtt.host'}),host),h('label',{class:'field'},h('span',{i18n:'mqtt.port'}),port)),
  h('div',{class:'fields'},h('label',{class:'field'},h('span',{i18n:'mqtt.user'}),user),h('label',{class:'field'},h('span',{i18n:'mqtt.password'}),pass)),
  h('details',{class:'more'},h('summary',{i18n:'common.advanced'}),...(protocol?[h('label',{class:'field'},h('span',{i18n:'mqtt.mode'}),protocol)]:[]),clear),info(dev.haHintKey),
  h('div',{class:'form-actions'},h('button',{class:'btn primary',type:'submit'},h('span',{i18n:'common.save'}))));
 onSubmit(form,()=>{
  imported.guard?.();
  const enc=new TextEncoder();if(enc.encode(user.value).length>63||enc.encode(pass.value).length>256)throw Error(t('mqtt.too_long'));
  return api('/mqtt/config',{host:host.value.trim(),port:Number(port.value),user:user.value,password:pass.value,clear_password:clear.querySelector('input').checked,...(protocol?{protocol:protocol.value}:{})}).then(result=>{pass.value='';imported.saved?.();return result;});
 });
 const broker=card('mqtt.broker',null,form);
 const heading=broker.querySelector('.card-head');heading.classList.add('broker-card-head');
 heading.append(h('a',{class:'btn broker-platform-link',href:'https://phicomm-io.github.io/iotcloud/#/',target:'_blank',rel:'noopener noreferrer'},h('span',{i18n:'import.platform'}),icon('external')));
 return {el:h('div',{class:'stack'},pageHead('nav.mqtt','mqtt.lead'),sum,imported,broker),
  status(s){sum.replaceChildren(summary([['mqtt.status',!s.mqtt_host?t('state.off'):s.mqtt_connected?t('state.ready'):t('s.'+(s.mqtt_status||'connecting')),!s.mqtt_host?'':s.mqtt_connected?'ok':'warn'],
   ['mqtt.host',s.mqtt_host?s.mqtt_host+':'+s.mqtt_port:'—'],['mqtt.mode',t(s.mqtt_topic_mode==='legacy'?'mqtt.mode_legacy':'mqtt.mode_tmcp')],['mqtt.user',s.mqtt_user||'—']]));},
  init(s){if(protocol)protocol.value=s.mqtt_protocol||s.mqtt_topic_mode||'tmcp';host.value=s.mqtt_host||'';port.value=s.mqtt_port||1883;user.value=s.mqtt_user||'';imported.activate?.();}};
}
function firmwarePage(dev){
 const online=h('section',{class:'card stack',hidden:!UI.caps?.actions?.includes('ota.sources.get')});
 if(!online.hidden){
  const sources=h('div',{class:'row',id:'otaSources'}),latest=h('p',{class:'help'});
  const notes=h('button',{class:'btn',type:'button',hidden:true},t('fw.notes'));
  const notesText=h('pre',{class:'help',hidden:true,style:'white-space:pre-wrap;max-height:24rem;overflow:auto'});
  const install=h('button',{class:'btn primary',type:'button',hidden:true},t('fw.install_online'));
  let timer=null,last=null;
  const buttons=[];
  function busy(value){for(const button of buttons)button.disabled=value;}
  function translate(){install.textContent=t('fw.install_online');notes.textContent=t('fw.notes');for(const button of buttons)button.textContent=t('fw.source_'+button.dataset.source);if(last)latest.textContent=t('fw.check_'+last.state)+(last.version?' · '+last.version:'');}
  I18N.onChange(translate);
  async function poll(){
   const data=await command('ota.check.get');last=data;
   latest.textContent=t('fw.check_'+data.state)+(data.version?' · '+data.version:'')+(data.error?' · '+data.error:'');
   install.hidden=!data.version||data.state==='failed';notes.hidden=!data.release_log;
   if(data.busy||data.state==='checking')timer=setTimeout(()=>poll().catch(e=>{latest.textContent=e.message;busy(false);}),1000);
   else busy(false);
  }
  async function check(source){
   if(timer)clearTimeout(timer);busy(true);install.hidden=notes.hidden=notesText.hidden=true;
   try{await command('ota.check',{source});latest.textContent=t('fw.check_checking');timer=setTimeout(()=>poll().catch(e=>{latest.textContent=e.message;busy(false);}),500);}
   catch(e){busy(false);throw e;}
  }
  notes.onclick=()=>run(notes,async()=>{
   let offset=0,text='';notesText.hidden=false;
   do{
    await command('ota.notes',{offset});
    let data;
    do{await new Promise(resolve=>setTimeout(resolve,500));data=await command('ota.notes.get');}while(data.busy);
    if(data.state!=='ready')throw Error(data.error||t('fw.check_failed'));
    text+=data.text;notesText.textContent=text;
    if(data.next<=offset&&data.next<data.total)throw Error(t('fw.check_failed'));
    offset=data.next;if(offset>=data.total)break;
   }while(offset<16384);
  });
  install.onclick=()=>run(install,async()=>{if(!window.confirm(t('fw.confirm_online')))return;await command('ota.install');toast(t('fw.url_started'));});
  command('ota.sources.get').then(data=>{for(const id of data.sources){const button=h('button',{class:'btn',type:'button','data-source':id},t('fw.source_'+id));button.onclick=()=>run(button,()=>check(id));buttons.push(button);sources.append(button);}}).catch(()=>{online.hidden=true;});
  online.append(h('h2',{i18n:'fw.online'}),h('p',{class:'help',i18n:'fw.sources_help'}),sources,latest,h('div',{class:'row'},install,notes),notesText);
 }
 const cancel=h('button',{class:'btn',type:'button',hidden:true,i18n:'fw.cancel'});
 cancel.onclick=()=>run(cancel,async()=>{await command('ota.cancel');toast(t('fw.cancelling'));});
 const sum=h('div'),prog=h('progress',{max:100,value:0}),state=h('p',{class:'help'});
 const file=h('input',{id:'firmware',type:'file',accept:'.bin,.raw,.signed',required:true});
 const unsigned=switchRow('unsignedRescue','fw.unsigned','fw.unsigned_desc');
 const url=h('input',{id:'otaUrl',type:'url',maxLength:499,required:true,placeholder:'https://…/'+dev.otaName});
 const fileForm=h('form',{id:'fileForm',class:'stack'},h('label',{class:'field'},h('span',{},t('fw.file',{m:dev.model})),file),
  h('details',{class:'more'},h('summary',{i18n:'common.advanced'}),unsigned),
  h('div',{class:'form-actions'},h('button',{class:'btn primary',type:'submit'},h('span',{i18n:'fw.upload'}))));
 const urlForm=h('form',{id:'urlForm',class:'stack',hidden:true},h('label',{class:'field'},h('span',{i18n:'fw.url'}),url),
  h('div',{class:'form-actions'},h('button',{class:'btn primary',type:'submit'},h('span',{i18n:'fw.download'}))));
 const picker=seg([['file','fw.tab_file'],['url','fw.tab_url']],v=>{fileForm.hidden=v!=='file';urlForm.hidden=v!=='url';});picker.set('file');
 // Upload streams raw bytes; the request is synchronous up to send(), like the old page.
 let uploading=false;
 fileForm.addEventListener('submit',e=>{
  e.preventDefault();const f=file.files&&file.files[0];if(!f||uploading)return;
  const rescue=unsigned.querySelector('input').checked;
  if(rescue&&!window.confirm(t('fw.unsigned_confirm')))return;
  uploading=true;prog.value=0;
  const xhr=window.createDeviceUpload?window.createDeviceUpload():new XMLHttpRequest();xhr.open('POST',rescue?'/api/v1/ota/upload-unsigned':'/api/v1/ota/upload');
  xhr.setRequestHeader('Content-Type','application/octet-stream');xhr.timeout=310000;
  xhr.upload.onprogress=ev=>{if(ev.lengthComputable){prog.value=ev.loaded/ev.total*100;state.textContent=t('fw.uploading',{p:Math.round(ev.loaded/ev.total*100)});}};
  xhr.onload=()=>{const ok=xhr.status===202;state.textContent=ok?t('fw.verify_ok'):t('fw.failed',{e:xhr.responseText});toast(state.textContent,!ok);};
  xhr.onerror=()=>toast(t('fw.upload_lost'),true);
  xhr.ontimeout=()=>toast(t('fw.upload_timeout'),true);
  xhr.onloadend=()=>{uploading=false;};
  xhr.send(f);
 });
 onSubmit(urlForm,()=>api('/ota',{url:url.value}),'fw.url_started');
 const fileLabel=fileForm.querySelector('.field>span');I18N.onChange(()=>{fileLabel.textContent=t('fw.file',{m:dev.model});});
 return {el:h('div',{class:'stack'},pageHead('nav.firmware','fw.lead'),sum,online,
  card('fw.install',null,picker,h('div',{style:'margin-top:16px'},fileForm,urlForm),h('div',{class:'stack',style:'margin-top:20px'},prog,state,cancel),info(dev.otaHintKey))),
  status(s){sum.replaceChildren(summary([['fw.version',h('span',{class:'num'},s.version||'—')],['fw.state',t('s.'+(s.ota_state||'idle'))],s.ota_error?['fw.error',h('span',{class:'badge bad'},s.ota_error)]:null]));
   cancel.hidden=!s.ota_active||s.ota_mode==='committing';
   if(s.ota_active){prog.value=s.ota_progress;state.textContent=t('fw.progress',{p:s.ota_progress});}}};
}
function diagValue(k,v){
 if(v===null||v===undefined||v==='')return '—';
 if(typeof v==='boolean')return t(v?'common.yes':'common.no');
 if(k==='uptime_seconds')return duration(v);
 if(k==='free_memory')return (v/1024).toFixed(1)+' KB';
 if(k==='age_ms')return (v/1000).toFixed(1)+' s';
 if(k==='ntp_last_success'||k==='utc_time')return new Date(v*1000).toLocaleString(I18N.lang);
 if(Array.isArray(v))return v.join(', ');
 if(typeof v==='string'&&I18N.has('s.'+v))return t('s.'+v);
 return String(v);
}
function diagnosticsPage(dev){
 const health=h('div',{class:'health'}),groups=h('div',{class:'diag'}),raw=h('pre'),updated=h('p',{class:'help'});
 const extra=dev.diagExtra?dev.diagExtra():null;
 return {el:h('div',{class:'stack'},pageHead('nav.diagnostics','diag.lead'),card('diag.health',null,health),
   h('section',{},h('div',{class:'section-label',i18n:'diag.details'}),groups),extra,
   h('details',{class:'more'},h('summary',{i18n:'diag.raw'}),raw),updated),
  status(s){
   if(!UI.pages.diagnostics||$('settingsPage').hidden)return;
   const checks=[['diag.c_wifi',s.wifi_connected?'ok':'bad',s.wifi_connected?s.ssid:t('state.disconnected')],
    ['diag.c_mqtt',!s.mqtt_host?'':s.mqtt_connected?'ok':'warn',!s.mqtt_host?t('state.off'):t('s.'+(s.mqtt_status||'connecting'))+(s.mqtt_errors?' · '+t('diag.errors',{n:s.mqtt_errors}):'')],
    ...(Object.hasOwn(s,'watchdog_state')?[['diag.c_watchdog',!s.watchdog_enabled||s.watchdog_state==='fault'?'bad':s.reset_reason==='watchdog'?'warn':'ok',s.reset_reason==='watchdog'?t('diag.watchdog_reboot'):t('s.'+s.watchdog_state)]]:[]),
    ...(dev.healthChecks?dev.healthChecks(s):[]),['diag.c_ota',s.ota_error?'bad':'ok',s.ota_error||t('s.'+(s.ota_state||'idle'))]];
   health.replaceChildren(...checks.map(([k,cls,text])=>h('div',{class:'item'},h('span',{class:'dot '+cls}),h('span',{class:'grow'},h('b',{i18n:k})),h('span',{class:'help'},text))));
   const seen=new Set();
   const all=[['diag.g_device',['name','device_id','version','uptime_seconds','free_memory','web_password_set']],
    ['diag.g_watchdog',['reset_reason','reset_reason_raw','watchdog_enabled','watchdog_state','watchdog_fault']],
    ['diag.g_network',['wifi_connected','ssid','ip','ap_active','ap_name','scan_busy','wifi_password_set','wifi_trial_status','wifi_trial_active']],
    ['diag.g_mqtt',['mqtt_connected','mqtt_status','mqtt_host','mqtt_port','mqtt_user','mqtt_topic_mode','mqtt_password_set','mqtt_errors','mqtt_last_error','mqtt_cleanup_warning']],
    ...(dev.diagGroups||[]),['diag.g_ota',['ota_active','ota_state','ota_progress','ota_error']]];
   const open=new Set([...groups.querySelectorAll('details')].filter(d=>d.open).map(d=>d.dataset.key));
   groups.replaceChildren(...all.map(([key,keys],i)=>{const rows=keys.filter(k=>Object.hasOwn(s,k)).map(k=>{seen.add(k);return [k,s[k]];});if(!rows.length)return null;
    return h('details',{'data-key':key,open:open.size?open.has(key):i<2},h('summary',{},h('span',{i18n:key}),h('span',{class:'badge'},rows.length)),
     h('dl',{},rows.map(([k,v])=>[h('dt',{},I18N.has('d.'+k)?t('d.'+k):k),h('dd',{class:'num'},diagValue(k,v))])));}).filter(Boolean));
   const rest=Object.keys(s).filter(k=>!seen.has(k)&&!(Array.isArray(s[k])&&typeof s[k][0]==='object'));
   if(rest.length)groups.append(h('details',{'data-key':'diag.g_other'},h('summary',{},h('span',{i18n:'diag.g_other'}),h('span',{class:'badge'},rest.length)),
    h('dl',{},rest.map(k=>[h('dt',{},I18N.has('d.'+k)?t('d.'+k):k),h('dd',{class:'num'},diagValue(k,s[k]))]))));
   raw.textContent=JSON.stringify(s,null,2);updated.textContent=t('diag.updated',{t:new Date().toLocaleTimeString(I18N.lang)});
  }};
}
function logsPage(){
 const out=h('pre',{},''),rows=[],state=h('p',{class:'help'});
 let cursor=0;
 async function read(){
  const d=await command('logs.get',{after:cursor,limit:8});
  if(d.overwritten)rows.push(t('logs.overwritten'));
  for(const r of d.records)rows.push(JSON.stringify(r.module==='system'&&r.event==='watchdog'?{...r,message:t('diag.watchdog_reboot')}:r));
  cursor=d.next;out.textContent=rows.join('\\n')||t('logs.empty');return d;
 }
 const refresh=h('button',{type:'button',class:'btn'},icon('auto'),h('span',{i18n:'diag.log_refresh'}));
 refresh.onclick=()=>run(refresh,read,null);
 const all=h('button',{type:'button',class:'btn'},h('span',{i18n:'logs.load_all'}));
 all.onclick=()=>run(all,async()=>{for(let i=0;i<8;i++){const d=await read();if(cursor>=d.latest)break;}},null);
 const dl=h('button',{type:'button',class:'btn'},h('span',{i18n:'logs.download'}));
 dl.onclick=()=>run(dl,async()=>{
  for(let i=0;i<8;i++){const d=await read();if(cursor>=d.latest)break;}
  const url=URL.createObjectURL(new Blob([rows.join('\\n')],{type:'text/plain;charset=utf-8'})),a=h('a',{href:url,download:'device-log.txt'});
  document.body.append(a);a.click();a.remove();URL.revokeObjectURL(url);
 },null);
 return {el:h('div',{class:'stack'},pageHead('nav.logs','logs.lead'),
  card('diag.logs',null,h('p',{class:'help',i18n:'logs.hint'}),h('div',{class:'form-actions'},refresh,all,dl),out,state))};
}
function maintenancePage(dev){
 const reboot=h('button',{type:'button',class:'btn'},h('span',{i18n:'sys.reboot'}));
 reboot.onclick=async()=>{if(await confirmDialog({title:t('sys.reboot_q',{m:dev.model}),body:t('sys.reboot_body'),ok:t('sys.reboot')}))run(reboot,()=>api('/reboot',{}),'toast.rebooting');};
 const items=[h('div',{class:'item'},h('div',{class:'grow'},h('b',{i18n:'sys.reboot'}),h('span',{i18n:'sys.reboot_desc'})),reboot)];
 if(dev.factoryReset){
  const reset=h('button',{type:'button',class:'btn danger'},h('span',{i18n:'sys.reset'}));
  reset.onclick=async()=>{if(await confirmDialog({title:t('sys.reset_q'),body:t('sys.reset_body'),ok:t('sys.reset'),danger:true}))run(reset,()=>api('/device/reset',{full:true}),'toast.resetting');};
  items.push(h('div',{class:'item'},h('div',{class:'grow'},h('b',{i18n:'sys.reset'}),h('span',{i18n:'sys.reset_desc'})),reset));
 }
 return h('div',{class:'stack'},pageHead('nav.maintenance','sys.lead'),
  h('section',{class:'card danger-zone'},h('div',{class:'list'},items),
   h('p',{class:'help',style:'margin-top:12px',i18n:dev.buttonHintKey},t(dev.buttonHintKey))));
}
/* Slots shared by every "General" page. */
function nameCard(){
 const input=h('input',{id:'deviceName',maxLength:63}),meta=h('div');
 const form=h('form',{id:'nameForm',class:'stack'},h('label',{class:'field'},h('span',{i18n:'gen.name'}),
  h('div',{class:'row'},h('div',{class:'grow'},input),h('button',{class:'btn primary',type:'submit'},h('span',{i18n:'common.save'}))),
  h('button',{class:'btn ghost',type:'button',onclick:e=>run(e.currentTarget,async()=>{await api('/deviceName',{name:''});await UI.reload();input.value=UI.state?.name||'';},'common.saved')},h('span',{i18n:'gen.default_name'}))),meta);
 onSubmit(form,()=>{if(new TextEncoder().encode(input.value).length>63)throw Error(t('gen.name_long'));return api('/deviceName',{name:input.value});});
 return {el:card('gen.identity',null,form),init(s){input.value=s.name||'';},status(s){meta.replaceChildren(summary([['gen.device_id',h('span',{class:'num'},prettyMac(s.device_id))],['gen.uptime',duration(s.uptime_seconds||0)]]));}};
}
function authCard(){
 const input=h('input',{id:'webPassword',type:'password',maxLength:32,autocomplete:'new-password',placeholder:t('auth.ph')});
 const state=h('span',{class:'badge'});
 const form=h('form',{id:'authForm',class:'stack'},h('label',{class:'field'},h('span',{i18n:'auth.password'}),input,h('p',{class:'help',i18n:'auth.help'})),
  h('div',{class:'form-actions'},h('button',{class:'btn primary',type:'submit'},h('span',{i18n:'auth.set'}))));
 onSubmit(form,()=>{if(input.value&&!/^[\\x20-\\x7e]{8,32}$/.test(input.value))throw Error(t('auth.invalid'));return api('/auth/password',{password:input.value});});
 const c=card('auth.title','auth.lead',form);c.querySelector('.card-head').append(state);
 return {el:c,status(s){state.className='badge '+(s.web_password_set?'ok':'');state.textContent=t(s.web_password_set?'auth.on':'auth.off');}};
}
function clockCard({load,save,status}){
 const sum=h('div'),tz=h('select'),ntp=h('input',{maxLength:63,required:true,placeholder:'ntp1.aliyun.com'});
 const fill=()=>{const v=tz.value;tz.replaceChildren(...TZ.map(m=>h('option',{value:m},tzLabel(m))));tz.value=v;};fill();I18N.onChange(fill);
 const form=h('form',{class:'stack'},h('div',{class:'fields'},
   h('label',{class:'field'},h('span',{i18n:'clock.tz'}),tz),h('label',{class:'field'},h('span',{i18n:'clock.ntp'}),ntp)),
  info('clock.hint'),h('div',{class:'form-actions'},h('button',{class:'btn primary',type:'submit'},h('span',{i18n:'common.save'}))));
 onSubmit(form,()=>save({timezone_minutes:Number(tz.value),ntp_host:ntp.value.trim()}));
 return {el:card('clock.title',null,sum,h('div',{style:'margin-top:16px'},form)),
  async show(){const c=await load();if(!c)return;tz.value=String(c.timezone_minutes||480);ntp.value=c.ntp_host||'';},
  status(s){sum.replaceChildren(summary(status(s)));}};
}

/* ---------- Boot ---------- */
let initialized=false,failures=0,lastSuccess=0,loading=null;
let stopped=false,pollingStarted=false,pollTimer=null,pollGeneration=0;
const lockedControls=new Map();
function lockHome(){if(!UI.embedded)return;for(const el of document.querySelectorAll('#homePage button,#homePage input,#homePage select')){if(!lockedControls.has(el))lockedControls.set(el,el.disabled);el.disabled=true;}}
function unlockHome(){for(const [el,disabled] of lockedControls)el.disabled=disabled;lockedControls.clear();}
async function load(){
 const lifecycle=pollGeneration;
 try{
  const params=UI.statusParams(),generation=fullGeneration;
  const raw=await command('status.get',params);
  if(stopped||lifecycle!==pollGeneration)return null;
  failures=0;lastSuccess=Date.now();unlockHome();
  if(!params.view&&!raw.ota_mode){lastFullAt=Date.now();loadedGeneration=generation;}
  if(raw.ota_active&&raw.ota_mode){UI.pages.firmware?.status(raw);return raw;}
  const s=UI.acceptStatus(raw,params.view==='live');
  $('title').textContent=UI.device.model+' '+(s.name||'');
  renderChips(s);renderBanners(s,false);
  if(!initialized){for(const p of Object.values(UI.pages))if(p.init)p.init(s);initialized=true;}
  for(const [key,p] of Object.entries(UI.pages))if(p.status&&(key===UI.activePage()||key.startsWith('slot_')&&UI.activePage()==='device'))p.status(s);
  if(UI.device.onStatus)UI.device.onStatus(s);
  return raw;
 }catch(e){if(!stopped&&lifecycle===pollGeneration&&++failures>=3&&(!lastSuccess||Date.now()-lastSuccess>=30000)){lockHome();renderBanners(null,true);}return null;}
}
function pollLoad(){if(stopped)return Promise.resolve(null);if(!loading)loading=load().finally(()=>{loading=null;});return loading;}
window.addEventListener('pagehide',()=>{stopped=true;pollGeneration++;clearTimeout(pollTimer);pollTimer=null;});
async function refreshStatus(generation=pollGeneration,resuming=false){
 if(stopped||generation!==pollGeneration)return;
 if(!document.hidden||!initialized){
  // An old request may settle after cache restoration. Retire it before the
  // required full read; its former loop cannot schedule another timer.
  if(resuming&&loading)await loading;
  if(stopped||generation!==pollGeneration)return;
  await pollLoad();
 }
 if(!stopped&&generation===pollGeneration)pollTimer=setTimeout(function refresh(){
  if(generation===pollGeneration)pollTimer=null;
  return refreshStatus(generation);
 },UI.activePage()?(UI.activePage()==='diagnostics'?5000:10000):(UI.device.interval||2000));
}
window.addEventListener('pageshow',()=>{
 if(!stopped)return;
 stopped=false;UI.invalidateStatus();
 if(pollingStarted)refreshStatus(pollGeneration,true);
});
UI.reload=async({full=false}={})=>{if(full)UI.invalidateStatus();if(loading)await loading;return pollLoad();};
document.addEventListener('visibilitychange',()=>{if(UI.device&&!document.hidden&&!stopped)UI.reload({full:true});});
UI.showRoute=showRoute;
UI.start=async dev=>{
 UI.device=dev;lockHome();
 const first=dev.groups.flatMap(g=>g[1])[0];
 document.body.prepend(header(dev),
  h('nav',{class:'tabs','aria-label':'Main'},
   h('a',{href:'#home','data-tab':'home'},icon('home'),h('span',{i18n:'nav.home'})),
   h('a',{href:'#settings/'+first,'data-tab':'settings'},icon('sliders'),h('span',{i18n:'nav.settings'}))),
  h('div',{id:'banners'}));
 UI.caps=await command('capabilities.get').catch(()=>({actions:[]}));
 const pages=$('pages');
 // Pages the framework builds for every product.
 const builders={network:wifiPage,mqtt:mqttPage,firmware:firmwarePage,diagnostics:diagnosticsPage,maintenance:maintenancePage,logs:logsPage};
 for(const [key,build] of Object.entries(builders)){const p=build(dev);UI.pages[key]=p;pages.append(h('div',{'data-settings-page':key,hidden:true},p.el));}
 // Automation pages, when the device advertises the capability.
 Object.assign(UI.pages,window.automationPages(dev));
 // Product pages: the product supplies show()/status(); the markup is either
 // already in the document or appended below.
 for(const [key,p] of Object.entries(dev.pages))UI.pages[key]=Object.assign(UI.pages[key]||{},p);
 for(const [key,p] of Object.entries(UI.pages)){
  let box=document.querySelector('[data-settings-page="'+key+'"]');
  if(!box){box=h('div',{'data-settings-page':key,hidden:true});pages.append(box);}
  if(p.el)box.append(p.el);
 }
 for(const slot of document.querySelectorAll('[data-slot]')){const p=slot.dataset.slot==='name'?nameCard():authCard();UI.pages['slot_'+slot.dataset.slot]=p;slot.replaceWith(p.el);}
 buildNav(dev);
 window.addEventListener('hashchange',showRoute);showRoute();
 I18N.apply();
 I18N.onChange(()=>{if(UI.state){renderChips(UI.state);renderBanners(UI.state,false);for(const p of Object.values(UI.pages))if(p.status)p.status(UI.state);}});
 pollingStarted=true;refreshStatus();
};
})();
<\/script>
<script>/* Automation pages shared by the three products: schedules, custom button
 * events and night mode. Installed by ui.js when the device reports the
 * matching capability. All traffic goes through command() from service.js. */
(()=>{
'use strict';
const {t}=I18N;
const {h,icon,toast,run,switchRow,seg,daysPicker,presetDays,daysText,hhmm,toMinutes,info,card,pageHead,slider,clone}=UI;

/* Action kinds a schedule or button event can run, keyed by action name. */
const ACTIONS={
 'fan.panel':'op.fan_panel','fan.mode.set':'auto.mode','fan.mode.toggle':'auto.toggle','outlet.set':'op.outlet','fan.set':'op.fan','light.set':'op.light',
 'child_lock.set':'op.child_lock','indicator.set':'op.indicator',
 'display.set':'op.display','system.reboot':'op.reboot',
 'light_effect.next':'op.effect_next','light_effect.select':'op.effect_select',
 'filter.reset':'op.filter_reset','light_always.set':'op.light_always'};
const actKey=a=>ACTIONS[a]||'op.none';
const sel=(parent,labelKey,options)=>{const s=h('select',{},options.map(([v,k])=>h('option',{value:v},typeof k==='function'?k():t(k))));parent.append(h('label',{class:'field'},h('span',{i18n:labelKey}),s));return s;};

/* Shared action editor: one control group per supported action. */
function actionEditor(host,{keys=false}={}){
 const caps=UI.caps||{},available=Object.keys(ACTIONS).filter(a=>(caps.actions||[]).includes(a)&&(keys||!['light_effect.next','light_effect.select','filter.reset','fan.mode.toggle','fan.panel'].includes(a)));
 const box=h('div',{class:'stack'}),fields=h('div',{class:'stack'});
 const options=[...(keys?[['none','op.none']]:[]),...available.map(a=>[a,actKey(a)])];
 const pick=keys?sel(host,'btn.action',options):seg(options,v=>draw(v),{full:true});
 if(keys){pick.set=v=>{pick.value=v;};pick.addEventListener('change',()=>draw(pick.value));host.append(box);}
 else host.append(pick,box);
 box.append(fields);
 let read=()=>({}),current=keys?'none':(available[0]||'none');
 function draw(a,params={}){
  current=a;fields.replaceChildren();read=()=>({});
  if(a==='none'||!a)return;
  const parts=[];
  if(a==='outlet.set'){
   const index=sel(fields,'op.target',[['all','op.all'],...[0,1,2,3,4,5].map(i=>[String(i),()=>t('tc1.socket_n',{n:i+1})])]);
   if(params.index!=null)index.value=String(params.index);
   parts.push(()=>index.value==='all'?{}:{index:Number(index.value)});
  }
  if(a==='fan.mode.set'){const mode=sel(fields,'auto.mode',[['manual','auto.manual'],['auto','auto.auto']]);mode.value=params.mode||'manual';parts.push(()=>({mode:mode.value}));}
  const switchable=['outlet.set','fan.set','light.set','child_lock.set','indicator.set','light_always.set'].includes(a);
  if(switchable){
   const values=keys&&(['outlet.set','fan.set'].includes(a)||caps.model==='a1')?['on','off','toggle']:['on','off'];
   const on=sel(fields,'op.state',values.map(v=>[v,'op.'+v]));
   on.value=params.toggle?'toggle':(params.on===false||params.enabled===false)?'off':'on';
   const field=['outlet.set','fan.set'].includes(a)?'on':'enabled';
   parts.push(()=>on.value==='toggle'?{toggle:true}:{[field]:on.value==='on'});
  }
  if(a==='light_effect.select'){
   const effect=sel(fields,'op.effect_select',Array.from({length:5},(_,i)=>[String(i),'a1.effect.'+i]));
   effect.value=String(params.effect||0);parts.push(()=>({effect:Number(effect.value)}));
  }
  if(a==='filter.reset')fields.append(info('filter.reset_hint'));
  if(a==='fan.set'){
   const m={speed:params.speed||60},[out,range]=slider(m,'speed',{min:1});
   fields.append(h('div',{class:null},h('div',{class:'row between'},h('span',{class:'label',i18n:'op.speed'}),out)),range);
   parts.push(()=>({speed:Number(m.speed)}));
  }
  if(a==='light.set'||a==='display.set'){
   const step=a==='display.set'?25:1,m={brightness:params.brightness!=null?params.brightness:100};
   const [out,range]=slider(m,'brightness',{min:0,max:100,step,fmt:v=>v+'%'});
   fields.append(h('div',{class:null},h('div',{class:'row between'},h('span',{class:'label',i18n:'op.brightness'}),out)),range);
   if(a==='light.set'&&keys){
    const setBrightness=switchRow(null,'op.set_brightness');setBrightness.querySelector('input').checked=params.brightness!=null;
    fields.append(setBrightness);parts.push(()=>setBrightness.querySelector('input').checked?{brightness:Number(m.brightness)}:{});
   }else parts.push(()=>({brightness:Number(m.brightness)}));
  }
  read=()=>Object.assign({},...parts.map(f=>f()));
  current=a;
 }
 draw(keys?'none':(available[0]||'none'));
 return {
  get(){return {action:current,params:read()};},
  set(a,p){current=a;pick.set(a);draw(a,p||{});}
 };
}

/* ---------- Schedules ---------- */
function schedulePage(dev){
 const box=h('div',{class:'stack'}),listBox=h('div',{class:'stack'});
 let offset=0,editing=0,tasks=[];
 const tz=()=>((UI.state&&UI.state.timezone_minutes)||480)*60;
 const atText=sec=>new Date((sec+tz())*1000).toISOString().slice(0,16).replace('T',' ');
 const duration=sec=>{sec=Math.max(0,Math.ceil(sec));return String(Math.floor(sec/3600)).padStart(2,'0')+':'+String(Math.floor(sec/60)%60).padStart(2,'0')+':'+String(sec%60).padStart(2,'0');};
 const when=x=>x.trigger==='countdown'?duration(x.enabled?Math.max(0,x.remaining_seconds-(performance.now()-x.received)/1000):x.seconds):x.trigger==='once'?atText(x.at):hhmm(x.minute);
 const timeValue=()=>{const d=new Date(Date.now()+tz()*1000+86400000);return d.toISOString().slice(0,16);};

 const enabled=switchRow(null,'sch.enabled_row');
 const trigger=seg([['weekly','sch.weekly'],['once','day.once'],...(UI.caps.schedule_countdown?[['countdown','sch.countdown']]:[])],v=>syncTrigger(),{full:true});
 const days=daysPicker('sdays',127),time=h('input',{type:'time',value:'08:00'}),at=h('input',{type:'datetime-local',value:timeValue()});
 const weekly=h('div',{class:'field'},h('div',{class:'row between'},h('span',{class:'label',i18n:'sch.repeat'}),presetDays(days)),days);
 const once=h('label',{class:'field',hidden:true},h('span',{i18n:'sch.when'}),at);
 const minute=h('label',{class:'field'},h('span',{i18n:'sch.time'}),time);
 const editorHost=h('div',{class:'stack'});
 const hours=h('input',{type:'number',min:0,max:24,step:1,value:0,'aria-label':t('sch.hours')}),minutes=h('input',{type:'number',min:0,max:59,step:1,value:30,'aria-label':t('sch.minutes')});
 const countdown=h('div',{class:'stack',hidden:true},h('div',{class:'fields'},h('label',{class:'field'},h('span',{i18n:'sch.hours'}),hours),h('label',{class:'field'},h('span',{i18n:'sch.minutes'}),minutes)),info('sch.countdown_hint'));
 function syncTrigger(){const mode=trigger.value;weekly.hidden=mode!=='weekly';once.hidden=mode!=='once';minute.hidden=mode!=='weekly';countdown.hidden=mode!=='countdown';hours.disabled=minutes.disabled=mode!=='countdown';editorHost.hidden=mode==='countdown';}

 const editor=actionEditor(editorHost);
 const save=h('button',{type:'submit',class:'btn primary'});
 const labelSave=()=>save.replaceChildren(icon('plus'),h('span',{},t(editing?'sch.save_btn':'sch.add_btn')));
 labelSave();
 function row(x){
  return h('div',{class:'item schedule-task'},h('b',{class:'time num','data-countdown-id':x.trigger==='countdown'?x.id:null},when(x)),
   h('div',{class:'grow'},h('b',{},t(actKey(x.action))+(x.trigger==='weekly'?' · '+daysText(x.days):' · '+t(x.trigger==='countdown'?'sch.countdown':'day.once'))),
    h('span',{},t('sch.state.'+(x.state||'waiting'))+(x.enabled?'':' · '+t('sch.off')))),
   h('span',{class:'badge '+(x.enabled?'ok':'')},t(x.enabled?'sch.enabled':'sch.disabled')),
   h('div',{class:'row',style:'gap:4px'},
    h('button',{type:'button',class:'btn ghost',onclick:()=>edit(x)},h('span',{i18n:'sch.edit'})),
    h('button',{type:'button',class:'btn ghost',onclick:ev=>run(ev.currentTarget,()=>command('schedules.enable',{id:x.id,enabled:!x.enabled}).then(load),null)},h('span',{i18n:x.trigger==='countdown'?(x.enabled?'sch.cancel':'sch.restart'):(x.enabled?'sch.disable':'sch.enable')})),
    h('button',{type:'button',class:'btn ghost icon','aria-label':t('common.delete'),onclick:ev=>run(ev.currentTarget,()=>command('schedules.delete',{id:x.id}).then(load),'common.deleted')},icon('trash'))));
 }
 async function load(){
  const d=await command('schedules.get',{offset,limit:8});tasks=d.items.map(x=>({...x,received:performance.now()}));
  listBox.replaceChildren(
   tasks.length?h('div',{class:'list'},tasks.map(row)):h('div',{class:'empty'},t('sch.empty')),
   h('div',{class:'row between'},h('span',{class:'help'},t('sch.used',{a:d.count,b:d.capacity})),
    h('div',{class:'row',style:'gap:4px'},
     h('button',{type:'button',class:'btn ghost',onclick:()=>run(null,()=>{offset=Math.max(0,offset-8);return load();},null)},h('span',{i18n:'common.prev'})),
     h('button',{type:'button',class:'btn ghost',onclick:()=>run(null,()=>{offset=d.next;return load();},null),disabled:offset+8>=d.count},h('span',{i18n:'common.next'})))));
  banner.hidden=!(UI.state&&UI.state.time_synced===false);
 }
 function reset(){editing=0;enabled.querySelector('input').checked=true;trigger.set('weekly');syncTrigger();days.setMask(127);time.value='08:00';editor.set('none');hours.value=0;minutes.value=30;labelSave();}
 function edit(x){
  editing=x.id;enabled.querySelector('input').checked=!!x.enabled;trigger.set(x.trigger);syncTrigger();
  days.setMask(x.days);time.value=hhmm(x.minute);at.value=x.trigger==='countdown'?timeValue():atText(x.at);hours.value=Math.floor((x.seconds||0)/3600);minutes.value=Math.floor((x.seconds||0)%3600/60);editor.set(x.action,x.params);labelSave();
  box.scrollIntoView({block:'start'});
 }
 const banner=h('div',{class:'banner warn',hidden:true},icon('clock'),h('span',{i18n:'sch.no_clock'}));
 const form=h('form',{class:'subcard stack'},h('h3',{i18n:'sch.new'}),trigger,weekly,once,minute,countdown,editorHost,enabled,
  h('div',{class:'form-actions'},save,
   h('button',{type:'button',class:'btn ghost',onclick:reset},h('span',{i18n:'sch.reset'}))));
 form.addEventListener('submit',e=>{e.preventDefault();run(save,async()=>{
  const a=trigger.value==='countdown'?{action:'fan.set',params:{on:false}}:editor.get();
  if(a.action==='none')throw Error(t('sch.pick_action'));
  const task={enabled:enabled.querySelector('input').checked,trigger:trigger.value,...a};
  if(editing)task.id=editing;
  if(trigger.value==='countdown'){const h=Number(hours.value),m=Number(minutes.value);task.seconds=h*3600+m*60;if(!Number.isInteger(h)||!Number.isInteger(m)||h<0||m<0||m>59||task.seconds<60||task.seconds>86400)throw Error(t('sch.duration_invalid'));}
  else if(trigger.value==='weekly'){const d=days.mask();if(!d)throw Error(t('sch.pick_day'));task.days=d;task.minute=toMinutes(time.value);}
  else{const parsed=Date.parse(at.value);if(!Number.isFinite(parsed))throw Error(t('sch.pick_when'));
   task.at=Math.floor(parsed/1000)-tz();if(task.at<=Math.floor(Date.now()/1000))throw Error(t('sch.future'));}
  await command('schedules.put',task);reset();await load();toast(t('sch.added'));
 },null);});
 enabled.querySelector('input').checked=true;trigger.set('weekly');syncTrigger();
 box.append(form,info('sch.hint'));
 return {el:h('div',{class:'stack'},pageHead('nav.schedule',dev.scheduleLead),banner,card('sch.list',null,listBox,box)),
  async show(){if(!UI.state)await UI.reload();await load();},
  status(){if(!box.isConnected||box.closest('[data-settings-page]')?.hidden)return;
   for(const x of tasks.filter(x=>x.trigger==='countdown')){const label=listBox.querySelector('[data-countdown-id="'+x.id+'"]');if(label)label.textContent=when(x);}
   if(tasks.some(x=>x.trigger==='countdown'&&x.enabled))run(null,load,null);
  }};
}

/* ---------- Custom button events ---------- */
function buttonsPage(dev){
 const listBox=h('div',{class:'stack'}),keyHost=h('div',{class:'fields'});
 const keyIds=dev.model==='A1'?(UI.caps.button_keys?.includes('combination')?[0,1,2]:[0,1]):[0];
 const keyName=k=>t(dev.model==='A1'?['btn.key_power','btn.key_wifi','btn.key_both'][Number(k)]:'btn.key_fn');
 const key=sel(keyHost,'btn.key',keyIds.map(k=>[String(k),()=>keyName(k)]));
 const count=h('input',{type:'number',min:1,max:30,value:1,required:true});
 const countLabel=h('span',{},t('btn.click_count'));
 const kind=seg([['clicks','btn.click'],['seconds','btn.hold']],v=>{
  count.max=v==='seconds'?4:30;count.value=Math.min(Number(count.value)||1,Number(count.max));
  countLabel.textContent=t(v==='seconds'?'btn.hold_count':'btn.click_count');preview();
 },{full:true});kind.set('clicks');
 keyHost.append(h('div',{class:'field'},h('span',{i18n:'btn.kind'}),kind),h('label',{class:'field'},countLabel,count));
 const editorHost=h('div',{class:'stack'}),editor=actionEditor(editorHost,{keys:true});
 const gesture=v=>v.seconds?t('btn.hold_full',{n:v.seconds}):t(v.clicks===1?'btn.single':'btn.click_full',{n:v.clicks});
 function actionText(v){
  if(v.action==='none')return t('op.none');
  const p=v.params||{},state=t(p.toggle?'op.toggle':p.on===false||p.enabled===false?'op.off':'op.on');
  const target=v.action==='outlet.set'?(p.index==null?t('op.all'):(UI.state?.socket_names?.[p.index]||t('tc1.socket_n',{n:p.index+1}))):t(actKey(v.action));
  if(['system.reboot','light_effect.next','filter.reset','fan.panel','fan.mode.toggle'].includes(v.action))return target;
  if(v.action==='light_effect.select')return target+' · '+t('a1.effect.'+p.effect);
  let text=v.action==='display.set'?target:state+' · '+target;
  if(p.speed!=null)text+=' · '+p.speed+'%';
  if(p.brightness!=null)text+=' · '+p.brightness+'%';
  return text;
 }
 const previewBox=h('div',{class:'button-preview','aria-live':'polite'});
 function preview(){
  const v={key:Number(key.value),[kind.value]:Number(count.value),...editor.get()};
  previewBox.textContent=keyName(v.key)+' · '+gesture(v)+' → '+actionText(v);
 }
 const editorCard=h('form',{class:'card stack','data-button-editor':''});
 const selected=()=>({key:Number(key.value),[kind.value]:Number(count.value)});
 function edit(v){
  key.value=String(v.key);kind.set(v.seconds?'seconds':'clicks');count.max=v.seconds?4:30;
  countLabel.textContent=t(v.seconds?'btn.hold_count':'btn.click_count');count.value=v.seconds||v.clicks;
  editor.set(v.action,v.params);preview();editorCard.scrollIntoView({block:'nearest',behavior:'smooth'});count.focus();
 }
 function row(v){
  return h('div',{class:'button-mapping'},h('b',{class:'button-gesture'},gesture(v)),
   h('span',{class:'button-result'},actionText(v)),h('div',{class:'row'},
    h('button',{type:'button',class:'btn ghost',onclick:()=>edit(v)},t('sch.edit')),
    h('button',{type:'button',class:'btn ghost','aria-label':t('common.delete')+' '+gesture(v),onclick:e=>run(e.currentTarget,async()=>{
     await command('buttons.set',{key:v.key,...(v.seconds?{seconds:v.seconds}:{clicks:v.clicks}),action:'none',params:{}});await load();
    },'common.deleted')},t('common.delete'))));
 }
 async function load(){
  const items=[];let offset=0,capacity=68;
  do{const page=await command('buttons.get',{offset,limit:8});items.push(...page.items);capacity=page.capacity||capacity;if(page.next==null||page.next<=offset)break;offset=page.next;}while(offset<capacity);
  listBox.replaceChildren();
  for(const k of keyIds){
   const groups=[];
   for(const type of ['clicks','seconds']){
    const values=items.filter(v=>Number(v.key)===k&&v[type]>0).sort((a,b)=>a[type]-b[type]);
    const runs=[];
    for(const v of values){const last=runs[runs.length-1];
     if(last&&v[type]===last[last.length-1][type]+1&&JSON.stringify([v.action,v.params])===JSON.stringify([last[0].action,last[0].params]))last.push(v);
     else runs.push([v]);
    }
    if(runs.length)groups.push(h('section',{class:'button-group'},h('h3',{},t(type==='clicks'?'btn.click':'btn.hold')),runs.map(run=>run.length===1?row(run[0]):
     h('details',{class:'button-range'},h('summary',{},h('b',{},t(type==='clicks'?'btn.click_range':'btn.hold_range',{a:run[0][type],b:run[run.length-1][type]})),h('span',{},actionText(run[0])),h('span',{class:'help'},t('btn.expand'))),run.map(row)))));
   }
   listBox.append(h('section',{class:'stack'},h('h3',{},keyName(k)),groups.length?groups:h('div',{class:'empty'},t('btn.empty'))));
  }
 }
 const save=h('button',{type:'submit',class:'btn primary'},t('common.save'));
 editorCard.append(h('h2',{i18n:'btn.edit'}),keyHost,editorHost,previewBox,h('div',{class:'form-actions'},save));
 editorCard.addEventListener('input',preview);editorCard.addEventListener('change',preview);editorCard.addEventListener('click',()=>preview());
 editorCard.addEventListener('submit',e=>{e.preventDefault();if(!editorCard.reportValidity())return;
  run(save,async()=>{const a=editor.get();if(a.action==='none')throw Error(t('btn.pick_action'));
   await command('buttons.set',{...selected(),...a});await load();},'common.saved');
 });
 let filterStatus,filterHours;
 function filterCards(){
  if(dev.model!=='A1'||!UI.caps.actions.includes('filter.get'))return [];
  filterStatus=h('p',{'data-filter-status':''});filterHours=h('input',{type:'number',min:1,max:20000,required:true,'data-filter-hours':''});
  const form=h('form',{class:'stack'},filterStatus,info('filter.hint'),h('label',{class:'field'},h('span',{i18n:'filter.lifetime'}),filterHours),
   h('div',{class:'form-actions'},h('button',{type:'submit',class:'btn primary'},t('common.save')),
    h('button',{type:'button',class:'btn ghost',onclick:e=>run(e.currentTarget,async()=>{if(!window.confirm(t('filter.reset_confirm')))return;await command('filter.reset',{});await loadFilter();},null)},t('op.filter_reset'))));
  form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;run(null,async()=>{await command('filter.set',{lifetime_hours:Number(filterHours.value)});await loadFilter();},'common.saved');});
  return [card('filter.title',null,form)];
 }
 async function loadFilter(){if(!filterStatus)return;const f=await command('filter.get');filterHours.value=f.lifetime_hours;filterStatus.textContent=t('filter.status',{used:(f.used_seconds/3600).toFixed(1),remaining:f.remaining_percent});}
 preview();
 return {el:h('div',{class:'stack'},pageHead('nav.buttons','btn.lead'),card('btn.current',null,listBox),
  card('btn.recovery',null,h('div',{class:'button-mapping'},h('b',{},t('btn.hold_full',{n:5})),h('span',{},t('btn.reset_wifi'))),
   h('div',{class:'button-mapping'},h('b',{},t('btn.hold_full',{n:10})),h('span',{},t('op.10'))),info(dev.model==='A1'?'btn.reset_note_a1':'btn.reset_note')),editorCard,...filterCards()),
  async show(){await load();await loadFilter();preview();}};
}

/* ---------- Night mode ---------- */
function nightPage(dev){
 const modern=UI.caps?.actions?.includes('fan.mode.set');
 const isM1=dev.model==='M1',list=h('div',{class:'stack'});
 let model=[];
 function window(cfg,i){
  const days=daysPicker('ndays'+i,cfg.days),start=h('input',{type:'time',value:hhmm(cfg.start)}),end=h('input',{type:'time',value:hhmm(cfg.end)});
  const dim=switchRow(null,isM1?'night.screen':'night.light','night.light_desc');dim.querySelector('input').checked=!!cfg.light;
  const bright={brightness:Math.round(cfg.brightness*100/255)};
  const [bOut,bRange]=slider(bright,'brightness',{min:0,max:100,step:isM1?25:1,fmt:v=>v?v+'%':t('state.off')});
  const speed={max_speed:cfg.max_speed,min_speed:cfg.min_speed??0,fallback_speed:cfg.fallback_speed??30};
  const [fOut,fRange]=slider(speed,'max_speed',{min:1});
  const fan=switchRow(null,'night.fan','night.fan_desc'),block=switchRow(null,'night.block_t','night.block_desc');
  fan.querySelector('input').checked=!!cfg.fan;block.querySelector('input').checked=!!cfg.block_start;
  const automatic=[];
  if(modern)for(const key of ['min_speed','fallback_speed']){const [out,range]=slider(speed,key,{min:0,max:100});automatic.push(h('div',{class:'row between'},h('span',{i18n:key==='min_speed'?'auto.minimum':'auto.fallback'}),out),range);}
  const extra=isM1?[]:[fan,h('div',{class:'field'},h('div',{class:'row between'},h('span',{class:'label',i18n:'night.fan_max'}),fOut)),fRange,...(modern?automatic:[block])];
  const field=h('fieldset',{},h('legend',{},t('night.period',{n:i+1})),
   h('div',{class:'field'},h('div',{class:'row between'},h('span',{class:'label',i18n:'sch.repeat'}),presetDays(days)),days),
   h('div',{class:'fields'},h('label',{class:'field'},h('span',{i18n:'night.start'}),start),h('label',{class:'field'},h('span',{i18n:'night.end'}),end)),
   dim,h('div',{class:'field'},h('div',{class:'row between'},h('span',{class:'label',i18n:'night.light_max'}),bOut)),bRange,...extra,
   h('div',{class:'form-actions'},h('button',{type:'button',class:'btn ghost',onclick:()=>{model.splice(i,1);draw();}},icon('trash'),h('span',{i18n:'common.delete'}))));
  // One listener writes the whole window back, so no control can drift.
  const collect=()=>{
   cfg.days=days.mask();cfg.start=toMinutes(start.value);cfg.end=toMinutes(end.value);
   cfg.light=Number(dim.querySelector('input').checked);cfg.brightness=Math.round(bright.brightness*255/100);
   if(!isM1){cfg.fan=Number(fan.querySelector('input').checked);cfg.block_start=Number(block.querySelector('input').checked);cfg.max_speed=Number(speed.max_speed);if(modern){cfg.min_speed=Number(speed.min_speed);cfg.fallback_speed=Number(speed.fallback_speed);}}
  };
  field.addEventListener('input',collect);field.addEventListener('change',collect);
  return field;
 }
 function draw(){
  list.replaceChildren(...(model.length?model.map(window):[h('div',{class:'empty'},t('night.empty'))]));
 }
 const add=h('button',{type:'button',class:'btn'},icon('plus'),h('span',{i18n:'night.add_btn'}));
 add.onclick=()=>run(add,async()=>{if(model.length>=4)throw Error(t('common.max',{n:4}));
  model.push({days:127,fan:isM1?0:1,light:1,max_speed:30,min_speed:0,fallback_speed:30,brightness:0,block_start:0,start:1320,end:420});draw();},null);
 const save=h('button',{type:'button',class:'btn primary'},h('span',{i18n:'common.save'}));
 save.onclick=()=>run(save,async()=>{await command('night.set',{windows:model});toast(t('common.saved'));});
 return {el:h('div',{class:'stack'},pageHead('nav.sleep','night.lead'),card('night.list',null,list,
  info('night.hint'),h('div',{class:'form-actions'},add,save))),
  async show(){model=clone((await command('night.get')).windows||[]);draw();}};
}

window.automationPages=dev=>{
 const caps=(UI.caps&&UI.caps.actions)||[];
 const pages={};
 if(!caps.length||caps.includes('schedules.get'))pages.schedule=schedulePage(dev);
 if(caps.includes('buttons.set')&&dev.hasButtons)pages.buttons=buttonsPage(dev);
 if(caps.includes('night.get'))pages.night=nightPage(dev);
 return pages;
};
})();
<\/script>
<script>// Embedded pages use the complete shared settings initialization and product UI.
(()=>{
 UI.embedded=true;UI.embeddedRoute='home';
 document.addEventListener('click',event=>{
  const link=event.target.closest('a[href^="#"]');if(!link)return;
  const route=link.getAttribute('href').slice(1);
  if(route!=='home'&&!/^settings\\/[a-z]+$/.test(route))return;
  event.preventDefault();UI.embeddedRoute=route;UI.showRoute();
 });
 const start=UI.start;
 UI.start=async dev=>{
  I18N.set('zh-CN');
  await start(dev);
  const header=document.querySelector('.topbar');if(header)header.hidden=true;
 };
 window.addEventListener('storage',event=>{
  if(event.key!=='phicomm.appearance')return;
  if(event.newValue==='system'||!event.newValue)delete document.documentElement.dataset.theme;
  else document.documentElement.dataset.theme=event.newValue;
 });
 const style=document.createElement('style');style.textContent='body{max-width:none;margin:0;padding:0 0 8px}.banner{margin-top:0}@media(max-width:600px){.grid{grid-template-columns:minmax(0,1fr)}.metric .stat{display:flex;flex-wrap:wrap;align-items:baseline;column-gap:4px}.metric .stat small{margin-left:0}}';document.head.append(style);
 new ResizeObserver(()=>parent.postMessage({type:'device-height',height:Math.ceil(document.body.getBoundingClientRect().height)+8},parent.location.origin)).observe(document.body);
})();

/* M1 air quality monitor page. The monitor only reports readings and answers
 * link requests from an A1; linkage rules live on the A1. */
(()=>{
'use strict';
const {t}=I18N;
const {$,h,icon,toast,run,confirm,summary,card,info,pageHead,seg,prettyMac,normalizeMac,clone}=UI;
const METRICS=['pm25','formaldehyde','temperature','humidity'];
const STALE_MS=15000;
const PRESSURE_STALE_MS=10000;
let bindingStatus={peers:[]};
let pressureSnapshot=null,pressureReceivedAt=0;

function renderPressure(){
 const b=pressureSnapshot;
 const fresh=b?.ready===true&&b.valid===true&&['BMP388','BMP390'].includes(b.model)&&
  typeof b.pressure_hpa==='number'&&Number.isFinite(b.pressure_hpa)&&b.pressure_hpa>=300&&b.pressure_hpa<=1250&&
  typeof b.age_ms==='number'&&Number.isFinite(b.age_ms)&&b.age_ms>=0&&
  b.age_ms+Math.max(0,performance.now()-pressureReceivedAt)<PRESSURE_STALE_MS;
 $('pressureReading').hidden=!fresh;
 $('pressureValue').textContent=fresh?b.pressure_hpa.toFixed(1):'';
 $('pressureModel').textContent=fresh?b.model:'';
 if(fresh)$('pressureReading').title=b.model;
 else $('pressureReading').removeAttribute('title');
}
// Expire this optional reading even if status polling stops succeeding.
// Browsers pause timers in the back/forward cache and resume them on restore.
// Keep this timer, and expire immediately on pageshow even if polling fails.
setInterval(renderPressure,1000);
window.addEventListener('pageshow',renderPressure);

/* ---------- Home: readings ---------- */
const tiles={};
$('metrics').append(...METRICS.map(k=>{
 const value=h('span',{class:'num'}),badge=h('span',{class:'badge'}),scale=h('div');
 tiles[k]={value,badge,scale};
 return h('section',{class:'card metric'},h('div',{class:'metric-head'},h('span',{class:'label','data-i18n':'m.'+k},t('m.'+k)),badge),
  h('div',{class:'stat'},value,h('small',{},UI.AIR[k].unit)),scale);
}));
// A serial number proves identification; bus initialization alone does not.
let lastCo2=null,lastCo2Serial='';
const co2Scale=h('div');
const co2Badge=h('span',{class:'badge'});
const co2Value=h('span',{class:'num',id:'co2Value'},'—');
const co2Card=h('section',{class:'card metric',id:'co2Card'},
 h('div',{class:'metric-head'},h('div',{class:'label','data-i18n':'m.co2'},t('m.co2')),co2Badge),
 h('div',{class:'stat'},co2Value,h('small',{},UI.AIR.co2.unit)),co2Scale);
co2Card.hidden=true;
$('metrics').append(co2Card);
const screen=seg([[0,'state.off'],[1,'1'],[2,'2'],[3,'3'],[4,'4']],v=>run(null,()=>UI.control('display.set',{brightness:v*25},{brightness_requested:v}),'toast.accepted'),{full:true,aria:t('m1.screen')});
screen.dataset.control='brightness';
$('screenSeg').replaceWith(screen);
const RANK={ok:0,warn:1,bad:2};
function renderHome(s){
 // Optimistic controls and their final render reuse the same measurement.
 // Only a newly decoded status object starts a new receipt-time age origin.
 if(pressureSnapshot!==s.barometer){
  pressureSnapshot=s.barometer;
  pressureReceivedAt=performance.now();
 }
 renderPressure();
 const co2=s.scd40;
 if(co2?.serial&&co2.serial!==lastCo2Serial){lastCo2=null;lastCo2Serial=co2.serial;}
 const co2Fresh=co2?.ready&&co2.valid&&Number.isFinite(co2.age_ms)&&co2.age_ms<20000&&
  typeof co2.co2_ppm==='number'&&Number.isFinite(co2.co2_ppm)&&co2.co2_ppm>0;
 if(co2Fresh)lastCo2=Math.round(co2.co2_ppm);
 co2Card.hidden=lastCo2===null;
 $('metrics').classList.toggle('with-co2',!co2Card.hidden);
 co2Value.textContent=lastCo2===null?'—':String(lastCo2);
 co2Value.style.color=co2Fresh?'':'var(--muted)';
 const co2Grade=lastCo2===null?null:UI.grade('co2',lastCo2);
 co2Badge.className='badge '+(co2Fresh?co2Grade.cls:'');
 co2Badge.textContent=co2Fresh?t(co2Grade.key):lastCo2!==null?t('m.co2_stale'):'';
 co2Scale.replaceChildren(UI.airScale('co2',lastCo2??0));
 co2Scale.classList.toggle('co2-stale',!co2Fresh);
 co2Scale.classList.toggle('co2-empty',lastCo2===null);
 co2Scale.title=t('m.co2_range');
 co2Scale.setAttribute('aria-label',t('m.co2_range'));

 const stale=!s.sensor_valid||s.age_ms>STALE_MS;
 const fmt={pm25:v=>String(Math.round(v)),formaldehyde:v=>v.toFixed(3),temperature:v=>v.toFixed(1),humidity:v=>v.toFixed(0)};
 const grades={};
 for(const k of METRICS){const g=UI.grade(k,s[k]);grades[k]=g;const el=tiles[k];
  el.value.textContent=s.sensor_received?fmt[k](s[k]):'—';
  el.badge.className='badge '+(stale?'':g.cls);el.badge.textContent=t(g.key);
  el.scale.replaceChildren(UI.airScale(k,s[k]));}
 // Overall verdict comes from the pollutants; comfort only adds a remark.
 const worst=['pm25','formaldehyde'].reduce((a,k)=>RANK[grades[k].cls]>RANK[grades[a].cls]?k:a,'pm25');
 const v=$('verdict');v.dataset.level=stale?'':grades[worst].cls;
 const both=g=>grades[g].cls==='ok';
 $('overall').textContent=stale?t('m1.no_data'):t(both('pm25')&&both('formaldehyde')?(grades.pm25.key.endsWith('excellent')?'m1.v_excellent':'m1.v_good'):grades[worst].cls==='warn'?'m1.v_fair':'m1.v_poor');
 const why=METRICS.filter(k=>grades[k].cls!=='ok').map(k=>t('m.'+k)+' '+t(grades[k].key));
 $('overallWhy').textContent=stale?t('m1.stale_hint'):why.length?why.join(' · '):t('m1.all_ok');
 $('freshDot').className='dot '+(stale?'bad':'ok live');
 $('freshText').textContent=stale?t('m1.stale'):t('m1.updated',{n:Math.max(0,Math.round(s.age_ms/1000))});
 if(document.activeElement&&document.activeElement.parentNode!==screen)screen.set(s.brightness_requested);
}
function peerSessionRows(){
 const peers=bindingStatus.peers||[];
 return peers.map(p=>h('div',{class:'item binding-peer'},icon('fan'),
  h('div',{class:'grow'},h('b',{class:'num'},'A1 · '+prettyMac(p.mac)),h('span',{},p.ip||'—')),
  h('span',{class:'badge ok'},t('m1.session_ok'))));
}
function renderPeers(){
 const rows=peerSessionRows(),capacity=Number(bindingStatus.max_sessions)||4;
 const head=h('div',{class:'card-head'},h('div',{},h('h2',{i18n:'m1.linked'}),h('p',{class:'help',i18n:'m1.linked_desc'})),
  h('span',{class:'badge '+(rows.length?'ok':'')},rows.length+' / '+capacity));
 $('peerCard').replaceChildren(head,rows.length?h('div',{class:'list'},rows):h('div',{class:'empty'},t('m1.linked_empty')));
}
/* Session status is read-only; sources are configured on each A1. */
async function showBinding(){
 bindingStatus=await api('/binding/status');renderPeers();
 const rows=peerSessionRows(),capacity=Number(bindingStatus.max_sessions)||4;
 document.querySelector('[data-settings-page="binding"]').replaceChildren(pageHead('nav.permission','m1.perm_lead'),
  h('section',{class:'card'},h('div',{class:'card-head'},h('h2',{i18n:'m1.linked'}),h('span',{class:'badge'},rows.length+' / '+capacity)),
   rows.length?h('div',{class:'list'},rows):h('div',{class:'empty'},t('m1.linked_empty')),info('m1.perm_hint')));
}

/* ---------- Boot ---------- */
const clock=UI.clockCard({
 load:async()=>UI.state||await api('/status'),
 save:async v=>{
  const s=UI.state;
  if(v.timezone_minutes!==s.timezone_minutes)await api('/time/config',{timezone_minutes:v.timezone_minutes});
  if(v.ntp_host!==s.ntp_host)await api('/ntp/config',{ntp_host:v.ntp_host});
 },
 status:s=>[['clock.synced',t('s.'+(s.ntp_status||'syncing')),s.ntp_synced?'ok':'warn'],
  ['clock.tz',UI.tzLabel(s.timezone_minutes||0)],['clock.ntp',s.ntp_host||'—'],
  ['clock.last',s.ntp_last_success?new Date(s.ntp_last_success*1000).toLocaleString(I18N.lang):'—']]});
$('clockCard').replaceWith(clock.el);

UI.start({
 model:'M1',kindKey:'kind.m1',icon:'air',mqttHostMax:127,factoryReset:true,
 otaName:'phicomm_m1.ota.bin.signed',haHintKey:'mqtt.ha_m1',otaHintKey:'fw.hint_m1',buttonHintKey:'sys.hint_m1',
 scheduleLead:'sch.lead_a1',interval:1000,
 groups:[['grp.network',['network','mqtt']],['grp.device',['device']],['grp.auto',['binding','schedule','night']],['grp.system',['firmware','diagnostics','logs','maintenance']]],
 nav:{network:'nav.wifi',mqtt:'nav.mqtt',device:'nav.general',binding:'nav.permission',schedule:'nav.schedule',night:'nav.sleep',firmware:'nav.firmware',diagnostics:'nav.diagnostics',logs:'nav.logs',maintenance:'nav.maintenance'},
 pages:{device:{show:clock.show,status:clock.status},binding:{show:showBinding}},
 diagGroups:[['diag.g_sensor',['uart_ready','sensor_valid','sensor_received','age_ms','temperature','humidity','formaldehyde','pm25','rx_frames','unknown_frames','uart_errors','discarded_bytes','last_frame']],
  ['diag.g_clock',['timezone_minutes','ntp_host','ntp_status','ntp_server','ntp_synced','ntp_screen_queued','ntp_last_success','ntp_next_seconds']],
  ['diag.g_screen',['brightness_requested']],
  ['diag.g_ota_img',['ota_signature_verified','ota_image_verified','ota_key_id','ota_image_length','ota_release_counter','ota_version']]],
 healthChecks:s=>[['diag.c_sensor',s.uart_ready&&s.sensor_valid?'ok':'bad',s.uart_errors?t('diag.errors',{n:s.uart_errors}):t(s.sensor_valid?'state.ok':'m1.no_data')],
  ['diag.c_clock',s.ntp_synced?'ok':'warn',t('s.'+(s.ntp_status||'syncing'))]],
 onStatus:renderHome
});
I18N.onChange(()=>{renderPeers();const p=document.querySelector('[data-settings-page="binding"]');if(p&&!p.hidden)showBinding();});
// The linked list is small and changes rarely; refresh it with the status.
(async function poll(){try{if(document.hidden||($('homePage').hidden&&UI.activePage()!=='binding'&&UI.activePage()!=='linkage'))return;bindingStatus=await api('/binding/status');renderPeers();}catch{}finally{setTimeout(poll,4000);}})();
renderPeers();
})();
<\/script>
</body>
</html>
`},$u=["srcdoc","title"],zu={__name:"DeviceHome",props:{device:Object},emits:["command","settings","upload"],setup(c,{expose:f,emit:a}){const l=c,d=a,t=new Map,n=Ue(),r=Ue(700);function e(s){if(s.source!==n.value?.contentWindow||s.origin!==location.origin)return;if(s.data?.type==="device-height"){r.value=Math.max(200,Math.min(12e3,Number(s.data.height)||700));return}if(s.data?.type==="device-settings"){d("settings");return}if(s.data?.type==="device-upload-abort"){t.get(s.data.id)?.(),t.delete(s.data.id);return}if(s.data?.type==="device-upload"){const{id:b,file:u,rescue:o}=s.data,v=s.source;if(typeof b!="string"||t.has(b)||t.size||!(u instanceof Blob))return;t.set(b,()=>{});const w=g=>{n.value?.contentWindow===v&&v.postMessage({id:b,...g},location.origin)};d("upload",u,!!o,(g,_)=>w({type:"device-upload-progress",loaded:g,total:_}),g=>{t.delete(b),w({type:"device-upload-result",result:g})},g=>t.set(b,g));return}if(s.data?.type!=="device-command")return;const{id:i,request:m}=s.data,h=s.source;d("command",m,b=>{n.value?.contentWindow===h&&h.postMessage({type:"device-result",id:i,reply:JSON.parse(JSON.stringify(b))},location.origin)})}return f({refresh:()=>n.value?.contentWindow?.UI?.reload()}),wn(()=>window.addEventListener("message",e)),_n(()=>{window.removeEventListener("message",e);for(const s of t.values())s();t.clear()}),(s,i)=>(Ie(),Ce("iframe",{ref_key:"frame",ref:n,class:"device-home",style:El({height:r.value+"px"}),srcdoc:Ke(Hu)[l.device.model],title:`${l.device.model.toUpperCase()} 首页`,sandbox:"allow-scripts allow-same-origin allow-modals allow-forms"},null,12,$u))}},Ku=Pt(zu,[["__scopeId","data-v-368dce80"]]),Vu={class:"help",role:"status"},Qu={key:0,role:"alert"},Gu={__name:"DeviceConnection",props:{preference:Object,connection:Object},emits:["save"],setup(c,{emit:f}){const a=c,l=f,d=Ue(""),t=Ue("auto"),n=Ue(""),r=Ue("");rn(()=>a.preference,s=>{d.value=s?.address||"",t.value=s?.mode||"auto"},{immediate:!0});function e(){r.value="",l("save",{address:d.value,mode:t.value,password:n.value},s=>{r.value=s||"",s||(n.value="")})}return(s,i)=>(Ie(),Ce("form",{class:"local-connection",onSubmit:Bt(e,["prevent"])},[i[7]||(i[7]=E("h3",null,"设备连接",-1)),E("label",null,[i[4]||(i[4]=Fe("连接方式",-1)),et(E("select",{"onUpdate:modelValue":i[0]||(i[0]=m=>t.value=m)},[...i[3]||(i[3]=[E("option",{value:"auto"},"自动，优先内网",-1),E("option",{value:"mqtt"},"始终使用 MQTT",-1)])],512),[[hr,t.value]])]),E("label",null,[i[5]||(i[5]=Fe("内网地址",-1)),et(E("input",{"onUpdate:modelValue":i[1]||(i[1]=m=>d.value=m),placeholder:"192.168.1.100:80",autocomplete:"off",spellcheck:"false"},null,512),[[ct,d.value]])]),i[8]||(i[8]=E("p",{class:"help"},"留空时尝试设备最近上报的内网地址。偏好仅保存在当前浏览器。",-1)),E("label",null,[i[6]||(i[6]=Fe("网页管理密码",-1)),et(E("input",{"onUpdate:modelValue":i[2]||(i[2]=m=>n.value=m),type:"password",autocomplete:"off",placeholder:"已填写的密码在本次会话内保留"},null,512),[[ct,n.value]])]),i[9]||(i[9]=E("p",{class:"help"},"与 MQTT 密码独立，仅发送给设备；填写空密码可重新尝试无密码连接。",-1)),E("p",Vu,Pe(c.connection?.checking?"正在探测内网…":c.connection?.reason||"未设置内网地址"),1),r.value?(Ie(),Ce("p",Qu,Pe(r.value),1)):We("",!0),i[10]||(i[10]=E("button",{class:"btn",type:"submit"},"保存并探测",-1))],32))}},Yu=Pt(Gu,[["__scopeId","data-v-393cfd54"]]),Ju={key:0,class:"card settings-card"},Xu={class:"settings-card-heading"},Zu={key:1,class:"card settings-card"},ep={class:"settings-card-heading"},tp={class:"help"},np={key:0,role:"alert",class:"form-message error"},rp=["disabled"],sp={__name:"GitHubAccount",setup(c){const f=Ue(!1);wn(async()=>{try{f.value=(await At("/auth/github/status")).enabled===!0}catch{}});const a=Ue(""),l=Ue(""),d=Ue(!1),t=Vo();async function n(){d.value=!0,l.value="";try{await At("/auth/github/unlink",{method:"POST",body:JSON.stringify({current_password:a.value})}),Cl(""),Qo(),Object.assign(ze,{username:null,mqttUsername:null,isAdmin:!1,aliases:[],githubLogin:"",password:"",loaded:!1}),await t.replace("/login")}catch(r){l.value=r.message}finally{d.value=!1}}return(r,e)=>f.value&&!Ke(ze).githubLogin?(Ie(),Ce("section",Ju,[E("header",Xu,[E("div",null,[e[1]||(e[1]=E("h2",null,"GitHub 登录",-1)),e[2]||(e[2]=E("p",{class:"help"},"绑定后可使用 GitHub 登录当前账号，设备归属与 MQTT 密码保持不变。",-1)),He($l,{link:""})])])])):Ke(ze).githubLogin?(Ie(),Ce("section",Zu,[E("header",ep,[E("div",null,[e[3]||(e[3]=E("h2",null,"GitHub 登录",-1)),E("p",tp,"已绑定 @"+Pe(Ke(ze).githubLogin)+"。解除绑定需要网站当前密码，完成后请重新登录。",1)])]),E("form",{class:"github-unlink",onSubmit:Bt(n,["prevent"])},[E("label",null,[e[4]||(e[4]=Fe("网站当前密码",-1)),et(E("input",{"onUpdate:modelValue":e[0]||(e[0]=s=>a.value=s),type:"password",autocomplete:"current-password",required:""},null,512),[[ct,a.value]])]),l.value?(Ie(),Ce("p",np,Pe(l.value),1)):We("",!0),E("button",{class:"btn",disabled:d.value},Pe(d.value?"正在解除…":"解除 GitHub 绑定并退出"),9,rp)],32)])):We("",!0)}},ip=Pt(sp,[["__scopeId","data-v-6edd137a"]]);(()=>{const a=i=>new TextEncoder().encode(i).length;function l(i){const m=i.toLowerCase().replace(/^\[|\]$/g,"");if(m==="localhost"||m==="::1")return!0;if(m.includes(":"))return/^(fc|fd)[0-9a-f]{2}:|^fe[89ab][0-9a-f]:/.test(m);if(!/^\d+\.\d+\.\d+\.\d+$/.test(m))return!1;const h=m.split(".").map(Number);return h.some(b=>b>255)?!1:h[0]===10||h[0]===127||h[0]===172&&h[1]>=16&&h[1]<=31||h[0]===192&&h[1]===168||h[0]===169&&h[1]===254}function d(i){if(typeof i!="string"||!i.trim()||i.length>256)throw Error("device");const m=i.trim(),h=new URL(m.includes("://")?m:"http://"+m);if(!["http:","https:"].includes(h.protocol)||!l(h.hostname)||h.username||h.password||h.search||h.hash||h.pathname!=="/")throw Error("device");return h}function t(i){const m=new URL(i);if(i!==m.origin||!(m.protocol==="https:"||m.protocol==="http:"&&["localhost","127.0.0.1","[::1]"].includes(m.hostname)))throw Error("origin");return m.origin}function n(){const i=new Uint8Array(32);return crypto.getRandomValues(i),Array.from(i,m=>m.toString(16).padStart(2,"0")).join("")}function r(i,m=Date.now()){if(!i.startsWith("#iotcloud-import="))return null;if(i.length>2048)throw Error("ticket");const h=new URLSearchParams(i.slice(1));if([...h.keys()].sort().join(",")!=="expires,host,iotcloud-import,origin,port,user")throw Error("ticket");const b=h.get("iotcloud-import"),u=Number(h.get("expires")),o=t(h.get("origin"));if(!/^[a-f0-9]{64}$/.test(b)||!Number.isSafeInteger(u)||u<=m||u>m+12e4)throw Error("ticket");const v=e({v:1,host:h.get("host"),port:Number(h.get("port")),user:h.get("user"),password:"",protocol:"tmcp",expires:u},m);return{id:b,expires:u,origin:o,host:v.host,port:v.port,user:v.user}}function e(i,m=Date.now()){if(!i||typeof i!="object"||Array.isArray(i)||Object.keys(i).sort().join(",")!=="expires,host,password,port,protocol,user,v")throw Error("config");const{v:h,host:b,port:u,user:o,password:v,protocol:w,expires:g}=i;if(h!==1||w!=="tmcp"||typeof b!="string"||!b||a(b)>127||!/^([a-zA-Z0-9.-]+|\[[a-fA-F0-9:]+\])$/.test(b)||b.startsWith(".")||b.endsWith(".")||typeof o!="string"||a(o)>63||/[\x00-\x1f\x7f]/.test(o)||typeof v!="string"||a(v)>256||/[\x00-\x1f\x7f]/.test(v)||!Number.isInteger(u)||u<1||u>65535||!Number.isSafeInteger(g)||g<=m||g>m+12e4)throw Error("config");return{v:h,host:b,port:u,user:o,password:v,protocol:w,expires:g}}function s(i,{source:m,origin:h,id:b,expires:u},o){const v=i.data;return Date.now()<u&&i.source===m&&i.origin===h&&!!v&&typeof v=="object"&&v.type===o&&v.id===b}globalThis.IotProvision=Object.freeze({VERSION:1,TTL:12e4,deviceURL:d,platformOrigin:t,nonce:n,readTicket:r,config:e,packet:s})})();const op={class:"card provision-device","aria-label":"配置本地 IoT 设备"},ap={key:0,class:"help"},lp={style:{"overflow-wrap":"anywhere"}},cp={key:0},dp=["aria-expanded"],up=["disabled"],pp={class:"fields"},hp=["disabled"],fp=["disabled"],mp={class:"fields"},gp=["disabled"],bp=["disabled"],vp={class:"trust-device"},yp=["disabled"],wp={class:"form-actions"},_p=["disabled"],kp={key:2,role:"status"},xp={key:3,role:"alert"},Sp={__name:"ProvisionDevice",props:{connection:Object,broker:Object},setup(c){const f=c,a=globalThis.IotProvision,l=Xe(()=>{if(f.broker?.host)return f.broker.host;try{return new URL(f.connection.host).hostname}catch{return""}}),d=Ue(!1),t=Ue(""),n=Ue(""),r=Ue(""),e=Ue(""),s=Ue(""),i=Ue(!1),m=Ue(""),h=Ue(""),b=Ue(!1);let u=null;function o(){u?.(),u=null,s.value="",b.value=!1}function v(){if(o(),d.value=!d.value,m.value="",h.value="",i.value=!1,d.value){let _="";try{_=new URL(f.connection.host).hostname}catch{}n.value=f.broker?.host||_,r.value=f.broker?.port||"",e.value=f.connection.username||"",s.value=f.connection.password||""}}rn(()=>[f.connection.host,f.connection.username,f.connection.password],o);function w(){g(),h.value="",m.value="";let _,k;try{a.platformOrigin(location.origin),_=a.deviceURL(t.value),k=a.config({v:1,host:n.value.trim(),port:Number(r.value),user:e.value,password:s.value,protocol:"tmcp",expires:Date.now()+a.TTL})}catch{h.value="请填写有效的局域网设备 IP、Broker 主机名、端口和凭据。平台需使用 HTTPS。";return}if(!i.value){h.value="请先确认设备地址和局域网可信。";return}const y=a.nonce(),T=k.expires;_.hash=new URLSearchParams({"iotcloud-import":y,origin:location.origin,expires:String(T),host:k.host,port:String(k.port),user:k.user}).toString();const S=window.open("about:blank","_blank");if(!S){h.value="浏览器阻止了新窗口，请允许后重试。";return}b.value=!0,m.value=`已打开 ${_.origin}。请在设备窗口确认来源并点击“接收并预填”。两分钟内有效。`;let I=!1;const P=()=>{window.removeEventListener("message",R),window.removeEventListener("pagehide",O),clearTimeout(C),clearInterval(W),k=null,s.value="",b.value=!1},O=()=>{P(),m.value="传递已取消，请重新发起。"},R=F=>{a.packet(F,{source:S,origin:_.origin,id:y,expires:T},"iotcloud.provision.ready")&&!I?(I=!0,S.postMessage({type:"iotcloud.provision.config",id:y,password:k.password},_.origin),k=null,m.value="已发送到指定设备窗口，等待设备前端确认接收。"):I&&a.packet(F,{source:S,origin:_.origin,id:y,expires:T},"iotcloud.provision.received")&&(P(),u=null,m.value="设备前端已预填。请在设备窗口检查并保存；此处不代表设备已保存或联网。")},C=setTimeout(()=>{O(),u=null},Math.max(0,T-Date.now())),W=setInterval(()=>{S.closed&&(O(),u=null)},1e3);u=P,window.addEventListener("message",R),window.addEventListener("pagehide",O),S.location.replace(_.href)}function g(){u?.(),u=null,b.value=!1}return _n(o),(_,k)=>(Ie(),Ce("section",op,[k[16]||(k[16]=E("h2",null,"配置本地 IoT 设备",-1)),k[17]||(k[17]=E("p",{class:"help"},"在设备本地网页的 MQTT 设置中填写 Broker 主机名和设备接入端口，不要填写本站域名或 WebSocket 地址。",-1)),l.value?(Ie(),Ce("p",ap,[k[7]||(k[7]=Fe("设备 MQTT Host：",-1)),E("strong",lp,Pe(l.value),1),c.broker?.port?(Ie(),Ce("span",cp," · TCP 端口："+Pe(c.broker.port),1)):We("",!0)])):We("",!0),E("button",{type:"button",class:"btn","aria-expanded":d.value,onClick:v},Pe(d.value?"收起":"填写到本地设备"),9,dp),d.value?(Ie(),Ce("form",{key:1,class:"stack",onSubmit:Bt(w,["prevent"])},[E("label",null,[k[8]||(k[8]=Fe("设备 IP 或本地网址",-1)),et(E("input",{"onUpdate:modelValue":k[0]||(k[0]=y=>t.value=y),required:"",placeholder:"192.168.1.100 或 http://192.168.1.100/",disabled:b.value,autocomplete:"off"},null,8,up),[[ct,t.value]])]),E("div",pp,[E("label",null,[k[9]||(k[9]=Fe("设备 MQTT Host",-1)),et(E("input",{"onUpdate:modelValue":k[1]||(k[1]=y=>n.value=y),required:"",maxlength:"127",disabled:b.value,placeholder:"mqtt.example.com"},null,8,hp),[[ct,n.value]])]),E("label",null,[k[10]||(k[10]=Fe("设备 MQTT 端口",-1)),et(E("input",{"onUpdate:modelValue":k[2]||(k[2]=y=>r.value=y),type:"number",min:"1",max:"65535",required:"",disabled:b.value,placeholder:"例如 1883（请确认）"},null,8,fp),[[ct,r.value]])])]),E("div",mp,[E("label",null,[k[11]||(k[11]=Fe("设备 MQTT 用户名",-1)),et(E("input",{"onUpdate:modelValue":k[3]||(k[3]=y=>e.value=y),maxlength:"63",disabled:b.value,autocomplete:"off"},null,8,gp),[[ct,e.value]])]),E("label",null,[k[12]||(k[12]=Fe("设备 MQTT 密码",-1)),et(E("input",{"onUpdate:modelValue":k[4]||(k[4]=y=>s.value=y),type:"password",maxlength:"256",disabled:b.value,autocomplete:"off"},null,8,bp),[[ct,s.value]])])]),k[14]||(k[14]=E("p",{class:"help"},"仅配置 TMCP。设备需要支持本功能的新版 WebUI，并可能要求设备网页密码。端口是设备使用的 MQTT TCP 端口，不是网页的 WSS 端口。",-1)),E("label",vp,[et(E("input",{"onUpdate:modelValue":k[5]||(k[5]=y=>i.value=y),type:"checkbox",required:"",disabled:b.value},null,8,yp),[[Ml,i.value]]),k[13]||(k[13]=Fe("我已核对设备 IP，仅在可信局域网内发送。HTTP 设备页面不能防止网络窃听或篡改。",-1))]),k[15]||(k[15]=E("p",{class:"help"},"链接只含 Broker 地址、端口、用户名和一次性握手信息，不含密码。接收前会再次确认来源，配置只预填到设备前端，检查并保存后才生效。",-1)),E("div",wp,[E("button",{class:"btn primary",disabled:b.value},"打开设备并填写",8,_p),b.value?(Ie(),Ce("button",{key:0,type:"button",class:"btn",onClick:k[6]||(k[6]=y=>{o(),m.value="传递已取消"})},"取消传递")):We("",!0)])],32)):We("",!0),m.value?(Ie(),Ce("p",kp,Pe(m.value),1)):We("",!0),h.value?(Ie(),Ce("p",xp,Pe(h.value),1)):We("",!0)]))}},Ko=Pt(Sp,[["__scopeId","data-v-900bafb0"]]),Tp={class:"settings-heading"},Ap={class:"settings-layout"},Ip={class:"settings-sidebar"},Ep={class:"settings-navigation","aria-label":"设置分类"},Cp=["aria-current","onClick"],Mp={class:"settings-context"},Pp={class:"settings-content"},Op={key:0,class:"card settings-card install-settings-entry"},Np={class:"settings-card-heading"},Rp={key:0,class:"card settings-card"},Up={class:"card settings-card"},Lp={class:"settings-card-heading"},qp={class:"settings-icon"},jp={key:0,class:"settings-block"},Fp={class:"broker-options",role:"radiogroup","aria-label":"连接模式"},Bp=["aria-checked","disabled"],Dp=["aria-checked","disabled"],Wp={class:"settings-block"},Hp={class:"field-title"},$p={class:"help"},zp=["disabled"],Kp={class:"settings-block"},Vp={class:"field-title"},Qp={class:"help"},Gp={class:"settings-fields"},Yp=["disabled"],Jp={class:"settings-password"},Xp=["disabled","type"],Zp=["aria-label"],eh={class:"settings-note help"},th={class:"settings-actions"},nh={class:"help"},rh=["disabled"],sh={class:"settings-tip"},ih={class:"card settings-card"},oh={class:"settings-card-heading"},ah={class:"settings-icon"},lh={class:"help"},ch={class:"badge"},dh={class:"device-toolbar"},uh={class:"help"},ph=["aria-expanded"],hh={class:"settings-fields"},fh={key:0},mh={key:1,class:"protocol-note"},gh={key:1,class:"managed-device-list"},bh={class:"device-row-actions"},vh=["aria-label","onClick"],yh={class:"device-details"},wh=["aria-label","onClick"],_h={key:2,class:"settings-empty"},kh={class:"help"},xh={class:"settings-footnote"},Sh={class:"card settings-card"},Th={class:"settings-block settings-fields"},Ah={class:"card settings-card"},Ih={class:"settings-card-heading"},Eh={class:"settings-icon"},Ch={class:"account-summary"},Mh={class:"account-avatar"},Ph={class:"help"},Oh={class:"card settings-card"},Nh={class:"settings-card-heading"},Rh={class:"settings-icon"},Uh={class:"settings-block"},Lh={class:"settings-fields"},qh={class:"settings-icon"},jh={__name:"PlatformSettings",props:{localMode:Boolean,devicePreferences:Object,lanConnections:Object,initialSection:{type:String,default:"connection"},connection:Object,deviceBroker:Object,connected:Boolean,busy:Boolean,thirdParty:Boolean,devices:Array,states:Object,addForm:Object,deviceName:Function,now:Number},emits:["device-connection","mode-change","connect","disconnect","add","remove","password","mqtt-password","install","home","refresh","rename"],setup(c,{emit:f}){const a=c,l=f,d=Ue(a.localMode?"devices":a.initialSection),t=Ue(!1),n=Ue(!1),r=Ue(""),e=Ue(""),s=Ue(""),i=Ue(""),m=Xe(()=>[...a.localMode?[]:[{id:"connection",title:"MQTT 连接",description:"服务器与连接凭据",icon:"cloud"}],{id:"devices",title:"设备管理",description:"设备列表与添加",icon:"plug"},...!a.localMode&&ze.username?[{id:"account",title:"账号安全",description:"账号信息与密码",icon:"shield"}]:[]]),h=Xe(()=>a.devices.filter(u=>(a.connected||a.states[Le(u)]?.lan_connected)&&a.states[Le(u)]?.available===!0).length);function b(u){return a.states[Le(u)]?.lan_connected?"内网已连接":a.connected?a.states[Le(u)]?.available===!0?"在线":a.states[Le(u)]?.available===!1?"离线":"状态未知":"未连接"}return(u,o)=>{const v=Go("RouterLink");return Ie(),Ce(dt,null,[E("div",Tp,[o[24]||(o[24]=E("div",null,[E("p",{class:"eyebrow"},"偏好与管理"),E("h1",null,"设置"),E("p",{class:"help"},"管理连接、设备与账号，让每一台设备保持就绪。")],-1)),E("button",{class:"btn",onClick:o[0]||(o[0]=w=>l("home"))},[o[23]||(o[23]=Fe("返回首页",-1)),He(Ve,{name:"arrow",size:16})])]),E("div",Ap,[E("aside",Ip,[E("nav",Ep,[(Ie(!0),Ce(dt,null,vn(m.value,w=>(Ie(),Ce("button",{key:w.id,"aria-current":d.value===w.id?"page":void 0,onClick:g=>d.value=w.id},[He(Ve,{name:w.icon},null,8,["name"]),E("span",null,[E("b",null,Pe(w.title),1),E("small",null,Pe(w.description),1)]),He(Ve,{class:"nav-arrow",name:"arrow",size:15})],8,Cp))),128))]),E("div",Mp,[E("span",{class:Qt(["dot",c.connected?"ok":"warn"])},null,2),E("span",null,[Fe(Pe(c.connected?"连接已就绪":"尚未连接"),1),E("small",null,Pe(c.devices.length)+" 台设备 · "+Pe(h.value)+" 台在线",1)])])]),E("div",Pp,[(Ie(),Ce("section",Op,[E("header",Np,[o[25]||(o[25]=E("div",null,[E("h2",null,"添加到桌面"),E("p",{class:"help"},"点桌面图标，快捷打开 IotCloud。随时查看安装方式。")],-1)),E("button",{class:"btn",type:"button",onClick:o[1]||(o[1]=w=>l("install"))},"添加到桌面")])])),d.value==="connection"?(Ie(),Ce(dt,{key:1},[(Ie(),Ce("section",Rp,[o[26]||(o[26]=E("header",{class:"settings-card-heading"},[E("div",null,[E("h2",null,"平台节点"),E("p",{class:"help"},"切换节点将重新加载页面，使用目标节点的登录状态。")])],-1)),He(Ol)])),c.localMode?We("",!0):(Ie(),gt(Ko,{key:1,connection:c.connection,broker:c.deviceBroker},null,8,["connection","broker"])),E("section",Up,[E("header",Lp,[E("span",qp,[He(Ve,{name:"cloud",size:23})]),o[27]||(o[27]=E("div",null,[E("h2",null,"MQTT 连接"),E("p",{class:"help"},"选择服务器，建立设备与平台之间的连接。")],-1)),E("span",{class:Qt(["badge",c.connected?"ok":""])},Pe(c.busy?"连接中":c.connected?"已连接":"未连接"),3)]),Ke(ze).username?(Ie(),Ce("div",jp,[o[32]||(o[32]=E("div",{class:"field-title"},[E("h3",null,"连接方式"),E("p",{class:"help"},"使用平台服务，或连接自己的 MQTT 服务器。")],-1)),E("div",Fp,[E("button",{type:"button",role:"radio","aria-checked":!c.thirdParty,disabled:c.busy,onClick:o[2]||(o[2]=w=>!c.thirdParty||l("mode-change",!1))},[He(Ve,{name:"cloud"}),o[28]||(o[28]=E("span",null,[E("b",null,"平台 Broker"),E("small",null,"使用当前账号连接")],-1)),o[29]||(o[29]=E("span",{class:"choice-dot"},null,-1))],8,Bp),E("button",{type:"button",role:"radio","aria-checked":c.thirdParty,disabled:c.busy,onClick:o[3]||(o[3]=w=>c.thirdParty||l("mode-change",!0))},[He(Ve,{name:"settings"}),o[30]||(o[30]=E("span",null,[E("b",null,"第三方 Broker"),E("small",null,"使用自己的服务器")],-1)),o[31]||(o[31]=E("span",{class:"choice-dot"},null,-1))],8,Dp)])])):We("",!0),E("form",{onSubmit:o[9]||(o[9]=Bt(w=>l("connect"),["prevent"]))},[E("div",Wp,[E("div",Hp,[o[33]||(o[33]=E("h3",null,"服务器",-1)),E("p",$p,Pe(c.thirdParty?"服务器需要支持 MQTT over WebSocket。":"平台地址与用户名由当前账号自动配置。"),1)]),E("label",null,[o[34]||(o[34]=Fe("WebSocket 地址",-1)),et(E("input",{"onUpdate:modelValue":o[4]||(o[4]=w=>c.connection.host=w),disabled:c.connected||!c.thirdParty,required:"",placeholder:"wss://mqtt.example.com/mqtt",spellcheck:"false"},null,8,zp),[[ct,c.connection.host]]),o[35]||(o[35]=E("small",{class:"help"},"支持 ws:// 和 wss:// 地址",-1))])]),E("div",Kp,[E("div",Vp,[o[36]||(o[36]=E("h3",null,"连接凭据",-1)),E("p",Qp,Pe(c.thirdParty?"填写服务器分配的用户名与密码。":"默认使用注册密码，可在账号安全中独立修改。"),1)]),E("div",Gp,[E("label",null,[o[37]||(o[37]=Fe("MQTT 用户名",-1)),et(E("input",{"onUpdate:modelValue":o[5]||(o[5]=w=>c.connection.username=w),disabled:c.connected||!c.thirdParty,autocomplete:"username",placeholder:"MQTT 用户名"},null,8,Yp),[[ct,c.connection.username]])]),E("label",null,[o[38]||(o[38]=Fe("MQTT 密码",-1)),E("span",Jp,[et(E("input",{"onUpdate:modelValue":o[6]||(o[6]=w=>c.connection.password=w),disabled:c.connected,type:t.value?"text":"password",autocomplete:"current-password",placeholder:"输入连接密码"},null,8,Xp),[[Pl,c.connection.password]]),E("button",{class:"btn ghost icon",type:"button","aria-label":t.value?"隐藏 MQTT 密码":"显示 MQTT 密码",onClick:o[7]||(o[7]=w=>t.value=!t.value)},[He(Ve,{name:"eye",size:18})],8,Zp)])])]),E("p",eh,[He(Ve,{name:"shield",size:16}),o[39]||(o[39]=Fe("MQTT 密码保存在当前浏览器，用于自动连接；退出登录即清除。",-1))])]),E("footer",th,[E("span",nh,[E("span",{class:Qt(["dot",c.connected?"ok":"warn"])},null,2),Fe(Pe(c.connected?"默认自动连接；手动断开后将保持断开":c.busy?"正在连接服务器…":"填写完成后连接服务器"),1)]),c.connected?(Ie(),Ce("button",{key:0,class:"btn",type:"button",onClick:o[8]||(o[8]=w=>l("disconnect"))},"断开连接")):(Ie(),Ce("button",{key:1,class:"btn primary",disabled:c.busy},[He(Ve,{name:"cloud",size:17}),Fe(Pe(c.busy?"连接中…":"连接服务器"),1)],8,rh))])],32)]),E("div",sh,[He(Ve,{name:"signal",size:20}),E("div",null,[o[41]||(o[41]=E("b",null,"连接之后",-1)),o[42]||(o[42]=E("p",null,"使用相同 MQTT 账号的 TMCP 设备会自动出现在设备列表中。也可以前往设备管理手动添加。",-1)),E("button",{class:"btn ghost",onClick:o[10]||(o[10]=w=>d.value="devices")},[o[40]||(o[40]=Fe("查看设备管理",-1)),He(Ve,{name:"arrow",size:15})])])])],64)):d.value==="devices"?(Ie(),Ce(dt,{key:2},[c.localMode?We("",!0):(Ie(),gt(Ko,{key:0,connection:c.connection,broker:c.deviceBroker},null,8,["connection","broker"])),E("section",ih,[E("header",oh,[E("span",ah,[He(Ve,{name:"plug",size:23})]),E("div",null,[o[43]||(o[43]=E("h2",null,"设备管理",-1)),E("p",lh,"在这里查看和管理当前"+Pe(c.thirdParty?"浏览器":"账号")+"的设备。",1)]),E("span",ch,Pe(c.devices.length)+" 台",1)]),E("div",dh,[E("span",uh,Pe(h.value)+" 台在线 · "+Pe(c.devices.length)+" 台设备",1),E("div",null,[E("button",{class:"btn",onClick:o[11]||(o[11]=w=>l("refresh")),"aria-label":"刷新设备列表"},"刷新"),c.localMode?We("",!0):(Ie(),Ce("button",{key:0,class:"btn primary","aria-expanded":n.value,onClick:o[12]||(o[12]=w=>n.value=!n.value)},[He(Ve,{name:n.value?"close":"plus",size:17},null,8,["name"]),Fe(Pe(n.value?"取消添加":"添加设备"),1)],8,ph))])]),n.value?(Ie(),Ce("form",{key:0,class:"add-device-panel",onSubmit:o[16]||(o[16]=Bt(w=>l("add"),["prevent"]))},[o[51]||(o[51]=E("h3",null,"添加设备",-1)),E("label",null,[o[44]||(o[44]=Fe("MAC 地址",-1)),et(E("input",{"onUpdate:modelValue":o[13]||(o[13]=w=>c.addForm.mac=w),"aria-label":"MAC 地址",required:"",placeholder:"AABBCCDDEEFF",maxlength:"17",spellcheck:"false"},null,512),[[ct,c.addForm.mac]]),o[45]||(o[45]=E("small",{class:"help"},"填写设备的 12 位 MAC 地址，也支持冒号或短横线分隔。",-1))]),E("div",hh,[E("label",null,[o[47]||(o[47]=Fe("型号",-1)),et(E("select",{"aria-label":"型号","onUpdate:modelValue":o[14]||(o[14]=w=>c.addForm.model=w)},[...o[46]||(o[46]=[E("option",{value:"tc1"},"TC1 智能插排",-1),E("option",{value:"m1"},"M1 空气质量检测器",-1),E("option",{value:"a1"},"A1 空气净化器",-1)])],512),[[hr,c.addForm.model]])]),c.addForm.model==="tc1"?(Ie(),Ce("label",fh,[o[49]||(o[49]=Fe("协议",-1)),et(E("select",{"onUpdate:modelValue":o[15]||(o[15]=w=>c.addForm.version=w)},[...o[48]||(o[48]=[E("option",{value:"v2"},"TMCP",-1),E("option",{value:"v1"},"Legacy",-1)])],512),[[hr,c.addForm.version]])])):(Ie(),Ce("div",mh,[...o[50]||(o[50]=[E("span",{class:"help"},"协议",-1),E("span",{class:"badge"},"TMCP",-1)])]))]),o[52]||(o[52]=E("div",{class:"add-device-actions"},[E("button",{class:"btn primary"},"确认添加")],-1))],32)):We("",!0),c.devices.length?(Ie(),Ce("div",gh,[(Ie(!0),Ce(dt,null,vn(c.devices,w=>(Ie(),Ce("div",{key:Ke(Le)(w),class:"managed-device"},[He(Ai,{device:w,state:c.states[Ke(Le)(w)]||{},name:c.deviceName(w),connected:c.connected,now:c.now},null,8,["device","state","name","connected","now"]),E("div",bh,[E("button",{class:"btn ghost","aria-label":`修改 ${c.deviceName(w)} 的名称`,onClick:g=>l("rename",w)},[He(Ve,{name:"edit",size:15}),o[53]||(o[53]=Fe("改名",-1))],8,vh),E("details",yh,[o[57]||(o[57]=E("summary",null,"详情",-1)),E("dl",null,[E("div",null,[o[54]||(o[54]=E("dt",null,"MAC 地址",-1)),E("dd",null,Pe(w.mac),1)]),E("div",null,[o[55]||(o[55]=E("dt",null,"连接协议",-1)),E("dd",null,Pe(w.version==="v1"?"Legacy":"TMCP"),1)]),E("div",null,[o[56]||(o[56]=E("dt",null,"状态",-1)),E("dd",null,Pe(b(w)),1)])]),w.version==="v2"?(Ie(),gt(Yu,{key:0,preference:c.devicePreferences?.[Ke(Le)(w)],connection:c.lanConnections?.[Ke(Le)(w)],onSave:(g,_)=>l("device-connection",w,g,_)},null,8,["preference","connection","onSave"])):We("",!0),E("button",{class:"btn danger","aria-label":`移除 ${c.deviceName(w)}`,onClick:g=>l("remove",w)},"移除此设备",8,wh)])])]))),128))])):(Ie(),Ce("div",_h,[He(Ve,{name:"plug",size:32}),o[58]||(o[58]=E("h3",null,"还没有设备",-1)),E("p",kh,Pe(c.localMode?"在上方填写设备 IP 添加本地设备。":"连接后等待设备自动上线，或点击上方按钮手动添加。"),1)])),E("footer",xh,[He(Ve,{name:"signal",size:17}),E("span",null,Pe(c.localMode?"设备通过填写的 IP 连接；可在详情中修改地址与网页密码。":"TMCP 设备可自动发现；Legacy 仅支持 TC1。")+"移除设备前会再次确认。",1)])])],64)):(Ie(),Ce(dt,{key:3},[(Ie(),gt(ip,{key:0})),E("section",Sh,[o[62]||(o[62]=E("header",{class:"settings-card-heading"},[E("div",null,[E("h2",null,"修改 MQTT 密码"),E("p",{class:"help"},"默认使用注册密码。修改后请更新所有设备的 MQTT 密码，网站登录密码保持不变。")])],-1)),E("form",{onSubmit:o[19]||(o[19]=Bt(w=>l("mqtt-password",{current:s.value,password:i.value}),["prevent"]))},[E("div",Th,[E("label",null,[o[59]||(o[59]=Fe("网站当前密码",-1)),et(E("input",{"onUpdate:modelValue":o[17]||(o[17]=w=>s.value=w),type:"password",autocomplete:"current-password",required:""},null,512),[[ct,s.value]])]),E("label",null,[o[60]||(o[60]=Fe("新 MQTT 密码",-1)),et(E("input",{"onUpdate:modelValue":o[18]||(o[18]=w=>i.value=w),type:"password",autocomplete:"new-password",minlength:"6",required:""},null,512),[[ct,i.value]])])]),o[61]||(o[61]=E("footer",{class:"settings-actions"},[E("button",{class:"btn primary"},"保存 MQTT 密码")],-1))],32)]),E("section",Ah,[E("header",Ih,[E("span",Eh,[He(Ve,{name:"guest",size:23})]),o[63]||(o[63]=E("div",null,[E("h2",null,"账号安全"),E("p",{class:"help"},"管理登录信息，保护你的设备访问权限。")],-1))]),E("div",Ch,[E("span",Mh,Pe(Ke(ze).username?.slice(0,1).toUpperCase()),1),E("div",null,[E("b",null,Pe(Ke(ze).username),1),E("p",Ph,Pe(Ke(ze).isAdmin?"管理员":"普通账号")+" · 网站与 MQTT 密码独立管理",1)]),o[64]||(o[64]=E("span",{class:"badge ok"},"已登录",-1))])]),E("section",Oh,[E("header",Nh,[E("span",Rh,[He(Ve,{name:"shield",size:23})]),o[65]||(o[65]=E("div",null,[E("h2",null,"修改密码"),E("p",{class:"help"},"修改成功后，使用新密码重新登录，MQTT 密码保持不变。")],-1))]),E("form",{onSubmit:o[22]||(o[22]=Bt(w=>l("password",{current:r.value,password:e.value}),["prevent"]))},[E("div",Uh,[E("div",Lh,[E("label",null,[o[66]||(o[66]=Fe("当前密码",-1)),et(E("input",{"onUpdate:modelValue":o[20]||(o[20]=w=>r.value=w),type:"password",required:"",autocomplete:"current-password"},null,512),[[ct,r.value]])]),E("label",null,[o[67]||(o[67]=Fe("新密码",-1)),et(E("input",{"onUpdate:modelValue":o[21]||(o[21]=w=>e.value=w),type:"password",required:"",minlength:"6",autocomplete:"new-password"},null,512),[[ct,e.value]]),o[68]||(o[68]=E("small",{class:"help"},"至少 6 个字符",-1))])])]),o[69]||(o[69]=E("footer",{class:"settings-actions"},[E("p",{class:"help"},"网站密码与 MQTT 密码独立，设备无需修改。"),E("button",{class:"btn primary"},"修改密码并退出")],-1))],32)]),Ke(ze).isAdmin?(Ie(),gt(v,{key:1,class:"card administration-entry",to:"/admin"},{default:fr(()=>[E("span",qh,[He(Ve,{name:"settings",size:23})]),o[70]||(o[70]=E("span",null,[E("b",null,"平台管理"),E("small",null,"管理账号、设备归属和注册方式")],-1)),He(Ve,{name:"arrow"})]),_:1})):We("",!0)],64))])])],64)}}},Fh=Pt(jh,[["__scopeId","data-v-0f8b2599"]]),Bh={key:0,class:"install-promotion","aria-labelledby":"install-promotion-title"},Dh={class:"install-promotion-actions"},Wh={class:"install-guide"},Hh={key:0,role:"status"},$h={key:1,role:"status"},zh=["disabled"],Kh={key:0,class:"install-note"},Vh={key:4,class:"install-note",role:"status"},Qh={class:"help"},Gh={__name:"InstallApp",props:{eligible:Boolean},setup(c,{expose:f}){const a=c,l=Ue(null),d=Ue(Ii()),t=Ue(!1),n=Ue(!1),r=Ue("");let e,s;const i="./icons/iotcloud.svg",m=Xe(()=>!!wt.prompt&&wt.platform!=="in-app"),h=Xe(()=>a.eligible&&!t.value&&!wt.standalone&&!wt.installed&&(m.value||wt.platform!=="desktop")&&Ul(d.value)),b=Xe(()=>wt.platform==="ios");function u(S){d.value=Ei(S),t.value=!0,w()}function o(){s&&(document.documentElement.style.overflow=s.html,document.body.style.overflow=s.body,s=null)}function v(){o();const S=document.querySelector('.platform-tabs button[aria-current="page"]');(e?.getClientRects().length?e:S)?.focus({preventScroll:!0})}function w(){l.value?.close(),o()}function g(){l.value.open||(e=document.activeElement,t.value=!0,r.value="",l.value.showModal(),s={html:document.documentElement.style.overflow,body:document.body.style.overflow},document.documentElement.style.overflow="hidden",document.body.style.overflow="hidden")}function _(){g(),m.value&&k()}async function k(){n.value=!0,r.value="";try{const S=await Rl();S==="accepted"?w():S==="dismissed"?(d.value=Ei("later"),r.value="已取消安装，7 天内不再主动提示。也可以随时从设置打开。"):r.value="请按下方说明，通过浏览器菜单添加到桌面。"}catch{r.value="未能打开安装窗口，请按下方说明操作，或稍后重试。"}finally{n.value=!1}}function y(S){if(S.target!==l.value)return;const I=l.value.getBoundingClientRect();(S.clientX<I.left||S.clientX>I.right||S.clientY<I.top||S.clientY>I.bottom)&&w()}function T(S){(!S||S.key===Ll||S.key===null)&&(d.value=Ii())}return wn(()=>{window.addEventListener("storage",T)}),_n(()=>{window.removeEventListener("storage",T),w()}),f({open:g}),(S,I)=>(Ie(),Ce(dt,null,[h.value?(Ie(),Ce("section",Bh,[E("img",{src:i,alt:"",width:"40",height:"40"}),I[4]||(I[4]=E("div",{class:"install-promotion-copy"},[E("h2",{id:"install-promotion-title"},"把 IotCloud 添加到桌面"),E("p",null,"下次点桌面图标，就能直接打开设备控制。")],-1)),E("div",Dh,[E("button",{class:"btn primary",type:"button",onClick:_},"添加到桌面"),E("button",{class:"btn ghost",type:"button",onClick:I[0]||(I[0]=P=>u("later"))},"稍后提示"),E("button",{class:"btn ghost",type:"button",onClick:I[1]||(I[1]=P=>u("never"))},"不再提示")])])):We("",!0),E("dialog",{ref_key:"dialog",ref:l,class:"install-dialog","aria-labelledby":"install-dialog-title",onClose:v,onClick:y},[E("header",null,[E("img",{src:i,alt:"",width:"40",height:"40"}),I[5]||(I[5]=E("div",null,[E("h2",{id:"install-dialog-title"},"添加到桌面"),E("p",{class:"help"},"点桌面图标，快捷打开 IotCloud。")],-1)),E("button",{class:"btn ghost",type:"button","aria-label":"关闭安装说明",autofocus:"",onClick:w},"关闭")]),E("div",Wh,[Ke(wt).standalone?(Ie(),Ce("p",Hh,"当前已在独立窗口中打开，无需重复添加。")):Ke(wt).installed?(Ie(),Ce("p",$h,"已接受安装。图标就绪后，可从桌面或应用列表打开 IotCloud。")):Ke(wt).platform==="in-app"?(Ie(),Ce(dt,{key:2},[I[6]||(I[6]=Nl('<h3 data-v-f24be4d4>先在系统浏览器中打开</h3><ol class="install-steps" data-v-f24be4d4><li data-v-f24be4d4><span class="install-step-icon" aria-hidden="true" data-v-f24be4d4>···</span><div data-v-f24be4d4><b data-v-f24be4d4>打开右上角菜单</b><p data-v-f24be4d4>在微信等应用内，点击右上角的菜单按钮。</p></div></li><li data-v-f24be4d4><span class="install-step-icon" aria-hidden="true" data-v-f24be4d4>↗</span><div data-v-f24be4d4><b data-v-f24be4d4>选择在浏览器中打开</b><p data-v-f24be4d4>iPhone 使用 Safari；Android 使用支持安装的浏览器。</p></div></li><li data-v-f24be4d4><span class="install-step-icon" aria-hidden="true" data-v-f24be4d4>＋</span><div data-v-f24be4d4><b data-v-f24be4d4>再选择添加到桌面</b><p data-v-f24be4d4>打开 IotCloud 的设置，即可再次查看安装说明。</p></div></li></ol>',2))],64)):(Ie(),Ce(dt,{key:3},[m.value?(Ie(),Ce("button",{key:0,class:"btn primary install-native",type:"button",disabled:n.value,onClick:k},Pe(n.value?"正在打开安装窗口…":"安装应用"),9,zh)):We("",!0),b.value?(Ie(),Ce(dt,{key:1},[I[7]||(I[7]=E("h3",null,"在 Safari 中添加",-1)),I[8]||(I[8]=E("ol",{class:"install-steps"},[E("li",null,[E("span",{class:"install-step-icon","aria-hidden":"true"},"1"),E("div",null,[E("b",null,"用 Safari 打开当前页面"),E("p",null,"如果正在其他浏览器中，请先用 Safari 打开此地址。")])]),E("li",null,[E("span",{class:"install-step-icon"},[E("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1.8",role:"img","aria-label":"分享图标"},[E("path",{d:"M12 15V3m-4 4 4-4 4 4M7 10H4v11h16V10h-3"})])]),E("div",null,[E("b",null,"点击分享按钮"),E("p",null,"在浏览器工具栏或菜单中找到分享图标。")])]),E("li",null,[E("span",{class:"install-step-icon","aria-hidden":"true"},"＋"),E("div",null,[E("b",null,"选择“添加到主屏幕”"),E("p",null,"如有“打开为网页 App”选项，请保持开启，再点“添加”。")])])],-1)),I[9]||(I[9]=E("p",{class:"install-note"},"首次从桌面打开时，可能需要重新登录一次。",-1))],64)):Ke(wt).platform==="android"?(Ie(),Ce(dt,{key:2},[E("h3",null,Pe(m.value?"也可以使用浏览器菜单":"通过浏览器菜单添加"),1),I[10]||(I[10]=E("ol",{class:"install-steps"},[E("li",null,[E("span",{class:"install-step-icon","aria-hidden":"true"},"⋮"),E("div",null,[E("b",null,"打开浏览器菜单"),E("p",null,"点击地址栏旁的菜单按钮。")])]),E("li",null,[E("span",{class:"install-step-icon","aria-hidden":"true"},"＋"),E("div",null,[E("b",null,"选择安装应用或添加到主屏幕"),E("p",null,"按浏览器提示确认。不同浏览器的名称可能不同。")])])],-1)),m.value?We("",!0):(Ie(),Ce("p",Kh,"如果没有该选项，可用 Chrome 或 Edge 打开当前地址后重试。"))],64)):(Ie(),Ce(dt,{key:3},[E("h3",null,Pe(m.value?"也可以使用浏览器菜单":"通过浏览器菜单添加"),1),I[11]||(I[11]=E("p",null,"在浏览器地址栏或菜单中查找“安装应用”。如果没有该选项，可用支持安装的 Chrome 或 Edge 打开当前地址。",-1))],64))],64)),r.value?(Ie(),Ce("p",Vh,Pe(r.value),1)):We("",!0)]),E("footer",null,[E("p",Qh,Pe(d.value.never?"已关闭主动提示，仍可随时从设置查看。":"稍后提示将延后 7 天；设置中始终保留入口。"),1),E("div",null,[E("button",{class:"btn ghost",type:"button",onClick:I[2]||(I[2]=P=>u("never"))},"不再提示"),E("button",{class:"btn",type:"button",onClick:I[3]||(I[3]=P=>u("later"))},"稍后提示"),E("button",{class:"btn primary",type:"button",onClick:w},"完成")])])],544)],64))}},Yh=Pt(Gh,[["__scopeId","data-v-f24be4d4"]]),Jh={class:"console-page"},Xh={class:"console-topbar topbar"},Zh={class:"brand"},ef={class:"kind"},tf={class:"console-nav"},nf={class:"platform-tabs tabs","aria-label":"主导航"},rf=["aria-current"],sf=["aria-current"],of={key:0,role:"status",class:"feedback device-host-hint"},af={key:1,role:"alert",class:"feedback error"},lf={key:2,role:"status",class:"feedback"},cf={class:"dashboard-grid"},df={class:"surface devices-panel"},uf={class:"device-list"},pf=["aria-pressed","onClick"],hf=["aria-label","onClick"],ff={key:0,class:"helper-text"},mf={key:0,class:"device-area"},gf={class:"mobile-device-heading"},bf=["aria-label"],vf={class:"current-device"},yf=["title"],wf={class:"switch-device-label"},_f=["disabled"],kf={class:"device-heading"},xf={class:"help"},Sf=["disabled"],Tf={key:1,class:"surface empty-control"},Pf={__name:"App",setup(c){const f="./icons/iotcloud.svg",l=ql(),d=Vo(),t=l.name==="Local",n=Ue(null),r=Ue(!1),e=Ue(null),s=Ue(null),i=Ue(null),m=Ue({});function h(se){const ne=m.value[Le(se)]||y[Le(se)]?.name||se.name;if(ne)return ne;const Oe=_.value.filter(ke=>ke.model===se.model);return zo(se)+(Oe.length>1?" "+(Oe.findIndex(ke=>Le(ke)===Le(se))+1):"")}function b(se,ne,Oe){if(se.version==="v1"){ne?m.value[Le(se)]=ne:delete m.value[Le(se)],localStorage.setItem("phicomm.names."+Tn()+":"+(ze.username||"guest"),JSON.stringify(m.value)),Oe();return}du(V,se,ne,ke=>{if(!["ok","accepted"].includes(ke.code)){Oe(ke.message||"保存失败");return}const je=y[Le(se)]||={};ne?je.name=ne:(delete je.name,B(se,"status.get")),Oe()})}const u=Ue(l.query.github==="linked"?"account":"connection");function o(se="connection"){u.value=se,w.value="settings",window.scrollTo({top:0})}const v=zt({host:"",port:""}),w=Ue(l.query.github==="linked"?"settings":"home"),g=Ue(t||l.name==="Guest"),_=Ue([]),k=Ue(""),y=zt({}),T=Ue(!1),S=Ue(""),I=Ue(""),P=Ue(!1),O=Ue(Date.now()),R=zt({host:`${location.protocol==="https:"?"wss":"ws"}://${location.host}/mqtt`,username:"",password:""}),C=Xe(()=>{try{return new URL(R.host).hostname}catch{return""}}),W=Xe(()=>C.value&&C.value!==location.hostname),F=Ue(""),j=Xe(()=>"iotcloud.device-host-hint."+Tn()+":"+C.value),de=Xe(()=>{if(!W.value||w.value!=="home")return!1;try{return F.value!==j.value&&localStorage.getItem(j.value)!=="1"}catch{return F.value!==j.value}});function X(){F.value=j.value;try{localStorage.setItem(j.value,"1")}catch{}}const K=zt({mac:"",model:"tc1",version:"v2"}),ie=zt({}),D=zt({}),Z=zt({}),N=new Map;let J="";const be=Yl({records:ie,onStatus:(se,ne)=>{D[se]={...ne,available:!0,lan_connected:!0,sensorAt:Date.now(),sensorFresh:ne.sensor_valid===!0}}}),re=Xe(()=>Object.fromEntries(_.value.map(se=>{const ne=Le(se);return[ne,ie[ne]?.ready?{...y[ne],...D[ne]}:y[ne]||{}]}))),xe=Xe(()=>!!z.value&&(T.value||ie[Le(z.value)]?.ready));function Q(se=!1){const ne=t?Kl():Tn()+":"+$();if(ne!==J){if(J)for(const Oe of Object.keys(y))delete y[Oe];be.retain([]),N.clear();for(const Oe of Object.keys(D))delete D[Oe];for(const Oe of Object.keys(Z))delete Z[Oe];J=ne}be.retain(_.value.map(Le));for(const Oe of _.value){const ke=Le(Oe);let je=Z[ke]||Vl(ne,ke);try{const Be=Ql(y[ke]?.ip||"");Be&&Be!==je.lastAddress&&(je=Ri(ne,ke,{...je,lastAddress:Be}))}catch{}Z[ke]=je,be.configure(ke,Oe,je,N.get(ke)||(t?Gl.get(ke):"")||""),Oe.version==="v2"&&be.probe(ke,se)}}function q(se,ne,Oe){try{const ke=Le(se);Z[ke]=Ri(J,ke,{...Z[ke],...ne}),N.set(ke,ne.password),be.configure(ke,se,Z[ke],ne.password),be.probe(ke,!0),Oe()}catch(ke){Oe(ke.message)}}function ae(se,ne,Oe,ke,je){const Be=z.value;if(!Be){ke({status:0,text:"未选择设备"});return}const Ze=be.upload(Le(Be),se,ne,Oe);je(Ze.abort),Ze.promise.then(ke)}async function V(se,ne,Oe=z.value,ke={}){if(!Oe){ne({code:"offline",message:"请先选择设备"});return}const je={...Oe},Be=Le(je),Ze=J,De={...se,request_id:se.request_id||cr()},$e=await be.dispatch(Be,De,()=>new Promise(it=>ge(De,it,je,ke)));if(Ze!==J)return ne({code:"offline",message:"账号或连接已变化，请重新读取状态"});if(["ok","accepted"].includes($e.code)&&De.action==="config.set"&&De.params?.section==="auth"){const it=De.params.values?.password;typeof it=="string"&&(N.set(Be,it),be.configure(Be,je,Z[Be],it),be.probe(Be))}ne($e)}const z=Xe(()=>{const se=_.value.find(ne=>Le(ne)===k.value);return se?{...re.value[Le(se)],...se}:null});rn(w,se=>ar("pageview",g.value?se==="settings"?"/guest/settings":"/guest":se==="settings"?"/settings":"/")),rn(()=>z.value?Le(z.value):"",se=>{se&&ar("device_view",g.value?"/guest":"/",z.value.model)});let Y,we,ce,U;function H(){document.hidden||Q(!0)}const te=new Map;async function ge(se,ne,Oe=z.value,{timeoutMs:ke=2e4}={}){if(!T.value&&P.value&&se.action.endsWith(".get")&&await new Promise(nt=>{const ht=()=>{clearTimeout(L),M(),nt()},M=rn([T,P],([Te,Ee])=>{(Te||!Ee)&&ht()}),L=setTimeout(ht,5e3)}),!T.value||!Oe){ne({code:"offline",message:"请先连接 MQTT"});return}if(Oe.version==="v1"){A(se,ne,Oe);return}const je=JSON.stringify([Le(Oe),se.action,se.params||{}]);if(se.action.endsWith(".get")){const nt=[...te.values()].find(ht=>ht.signature===je);if(nt){const ht=nt.reply;nt.reply=M=>{ht(M),ne(M)};return}}const Be=se.request_id||cr(),Ze={...Oe},De=y[Le(Ze)]||={};(De.pending||={})[Be]=se.action;const $e=setTimeout(()=>{const nt=te.get(Be);te.delete(Be),delete De.pending[Be],nt?.reply({code:"timeout",message:"暂未收到操作回执，请等待状态更新"})},ke);te.set(Be,{reply:ne,timeout:$e,key:Le(Ze),signature:je});const it=Ni(Ze,{...se,request_id:Be});Y.publish(it.topic,it.payload,{qos:1,retain:!1},nt=>{if(nt){clearTimeout($e);const ht=te.get(Be);te.delete(Be),delete De.pending[Be],ht?.reply({code:"error",message:"发送失败"})}})}const pe=()=>t?Jl:"iotcloud.devices."+encodeURIComponent(R.host)+"/"+encodeURIComponent(R.username),_e={getItem:se=>se==="phicomm_devices"?localStorage.getItem(pe()):null};rn(()=>[R.host,R.username],()=>{if(g.value){le();for(const se of Object.keys(y))delete y[se];p()}});const $=()=>g.value?"guest:"+R.host+":"+R.username:ze.username;function ve(){Mi($(),!1),le()}function Se(){Mi($(),!0),x()}function le(){P.value=!1;for(const{reply:se,timeout:ne}of te.values())clearTimeout(ne),se({code:"offline",message:"MQTT 已断开"});te.clear(),Y?.end(!0),Y=null,T.value=!1}function qe(){g.value&&Y?.subscribe(`phicomm/v2/${R.username?Pi(R.username):"local"}/discovery/+`,{qos:1});for(const se of _.value.filter(ne=>!ne.status||ne.status==="active"))Y?.subscribe(Oi(se),{qos:1},(ne,Oe)=>{(ne||Oe?.some(ke=>ke.qos===128))&&(S.value="订阅被拒绝，请检查账号与设备归属")})}async function p(){try{_.value=(t?zl():g.value?Wl(_e).map(se=>({...se,username:R.username})):await At("/devices")).map(lr),_.value.some(se=>Le(se)===k.value)||(k.value=_.value[0]?Le(_.value[0]):""),T.value&&qe(),r.value=!0,Q()}catch(se){S.value=se.message}}function x(){if(!g.value&&R.password&&Ci(ze.username,R.password),le(),S.value="",location.protocol==="https:"&&!R.host.startsWith("wss://")){S.value="HTTPS 页面需要 wss:// 地址";return}if(!/^wss?:\/\//.test(R.host)){S.value="请输入 ws:// 或 wss:// 地址";return}P.value=!0,Y=au.connect(R.host,{username:R.username,password:R.password,clientId:"web_"+cr(),connectTimeout:5e3,reconnectPeriod:3e3,clean:!0}),Y.on("connect",()=>{T.value=!0,P.value=!1,qe(),ar("mqtt_connect",g.value?"/guest":"/")}),Y.on("close",()=>{T.value=!1,P.value=!1}),Y.on("error",()=>{S.value="MQTT 连接失败，请检查地址、凭据和权限",P.value=!1}),Y.on("message",(se,ne)=>{if(g.value&&se.startsWith(`phicomm/v2/${R.username?Pi(R.username):"local"}/discovery/`)){try{const Oe=JSON.parse(ne.toString());if(Oe.protocol!=="tmcp"||Oe.protocol_version!==2||Oe.version!=="v2")return;const ke=lr({mac:se.split("/")[4],model:Oe.model,version:"v2",username:R.username});_.value.some(je=>Le(je)===Le(ke))||(_.value.push(ke),Q(),localStorage.setItem(pe(),JSON.stringify(_.value)),k.value||(k.value=Le(ke)),qe(),B(ke,"status.get"))}catch{}return}for(const Oe of _.value){const ke=y[Le(Oe)]||={};if(Hl(Oe,ke,se,ne.toString())){if(ke.ip&&Q(),se.endsWith("/result")){const je=te.get(ke.result?.request_id);je&&je.key===Le(Oe)&&(clearTimeout(je.timeout),te.delete(ke.result.request_id),je.reply(ke.result)),delete ke.pending?.[ke.result?.request_id]}break}}}),g.value&&localStorage.setItem("tmcp_broker",JSON.stringify({host:R.host,username:R.username}))}function A({action:se,params:ne={}},Oe,ke){const je=De=>Oe({code:"ok",data:De}),Be=De=>Oe({code:"unsupported",message:De});if(se==="capabilities.get"){je({actions:["outlet.set","child_lock.set","indicator.set"]});return}if(se==="status.get"){if(!Array.from({length:6},(De,$e)=>ke[`plug_${$e}`]).every(De=>De?.on!==void 0)){Be("尚未收到设备状态");return}je({name:ke.name||"TC1",socket_states:Array.from({length:6},(De,$e)=>!!ke[`plug_${$e}`]?.on),socket_names:Array.from({length:6},(De,$e)=>ke[`plug_${$e}`]?.setting?.name||`插座 ${$e+1}`),child_lock:!!(ke.child_lock?.on??ke.child_lock),led_enabled:!!(ke.led_lock?.on??ke.led_lock),mqtt_connected:!0,mqtt_host:R.host});return}if(se==="power.get"){if(ke.power_watts===void 0&&ke.power===void 0){Be("尚未收到电量数据");return}je({power_watts:ke.power_watts??Number(ke.power),energy_kwh:ke.energy_kwh??Number(ke.powerConsumption)});return}let Ze;if(se==="outlet.set"){const De=ne.index===void 0?[0,1,2,3,4,5]:[ne.index];if(De.some($e=>!Number.isInteger($e)||$e<0||$e>5)){Be("插座编号无效");return}Ze=Object.fromEntries(De.map($e=>[`plug_${$e}`,{on:ne.on?1:0}]))}else if(se==="child_lock.set")Ze={child_lock:{on:ne.enabled?1:0}};else if(se==="indicator.set")Ze={led_lock:{on:ne.enabled?1:0}};else if(se==="config.set"&&ne.section==="socket"&&!ke.legacyText)Ze={[`plug_${ne.values.index}`]:{setting:{name:ne.values.name}}};else{Be("此 Legacy 设备不支持该操作");return}try{for(const[De,$e]of Object.entries(Ze)){const it=Ni(ke,{[De]:$e});Y.publish(it.topic,it.payload,{qos:1,retain:!1},nt=>{nt&&(S.value="发送失败")})}Oe({code:"accepted",data:{}})}catch(De){Be(De.message)}}function B(se,ne,Oe={}){V({action:ne,params:Oe},ke=>{["ok","accepted"].includes(ke.code)||(S.value=ke.message||ke.code)},se)}async function ee(se){await p(),k.value=Le(se),Q(!0),w.value="home"}async function ue(){if(t){R.host="",await p();return}be.retain([]);for(const se of Object.keys(D))delete D[se];for(const se of Object.keys(y))delete y[se];if(Object.assign(v,{host:"",port:""}),le(),I.value="",S.value="",g.value)Object.assign(R,{host:`${location.protocol==="https:"?"wss":"ws"}://${location.host}/mqtt`,username:"",password:""},JSON.parse(localStorage.getItem("tmcp_broker")||"{}"));else{const se=await At("/register/status");try{const ne=new URL(se.mqtt_uri.includes("://")?se.mqtt_uri:"mqtt://"+se.mqtt_uri);ne.protocol==="mqtt:"&&ne.hostname&&!ne.username&&!ne.password&&Object.assign(v,{host:ne.hostname,port:Number(ne.port||1883)})}catch{}Object.assign(R,{host:Bl.mqttWS||se.mqtt_ws_uri||`${location.protocol==="https:"?"wss":"ws"}://${location.host}/mqtt`,username:ze.mqttUsername||ze.username,password:ze.password||jl(ze.username)})}await p(),Fl($())&&R.password&&x()}async function Ae(){try{const se=lr({...K,version:K.model==="tc1"?K.version:"v2",...g.value?{username:R.username}:{}});if(g.value){if(_.value.some(ne=>ne.mac===se.mac))throw Error("设备已存在");localStorage.setItem(pe(),JSON.stringify([..._.value,se]))}else await At("/devices",{method:"POST",body:JSON.stringify(se)});await p(),K.mac=""}catch(se){S.value=se.message}}async function G(se){if(confirm(`移除 ${se.mac}？`))try{Y?.unsubscribe(Oi(se)),g.value?localStorage.setItem(pe(),JSON.stringify(_.value.filter(ne=>Le(ne)!==Le(se)))):await At(`/devices/${se.namespace?"scoped/":""}${se.mac}${se.namespace?"?mqtt_username="+encodeURIComponent(se.mqtt_username||se.username):""}`,{method:"DELETE"}),await p()}catch(ne){S.value=ne.message}}async function oe(){try{await At("/auth/logout",{method:"POST",body:"{}"})}catch(se){S.value=se.message}ze.username=null,ze.mqttUsername=null,ze.isAdmin=!1,ze.aliases=[],ze.githubLogin="",ze.password="",Qo(),le(),await d.replace("/login")}async function Ne(se){try{await At("/auth/mqtt-password",{method:"POST",body:JSON.stringify({current_password:se.current,password:se.password})}),ze.password=se.password,Ci(ze.username,se.password),g.value||(R.password=se.password,x()),I.value="MQTT 密码已修改，请更新设备连接密码"}catch(ne){S.value=ne.message}}async function Re(se){try{await At("/auth/password",{method:"POST",body:JSON.stringify({current_password:se.current,password:se.password})}),await oe()}catch(ne){S.value=ne.message}}return wn(async()=>{!t&&l.name!=="Guest"&&await Dl();try{m.value=JSON.parse(localStorage.getItem("phicomm.names."+Tn()+":"+(ze.username||"guest"))||"{}")}catch{}await ue(),l.query.github==="linked"?I.value="GitHub 已绑定，可用它登录当前账号":l.query.github==="login"&&!R.password&&(I.value="已使用 GitHub 登录；如需连接设备，请在设置中填写 MQTT 密码"),we=setInterval(()=>O.value=Date.now(),1e3),U=setInterval(()=>{document.hidden||Q()},3e4),document.addEventListener("visibilitychange",H),ce=setInterval(()=>{!g.value&&!document.hidden&&p()},5e3)}),_n(()=>{le(),clearInterval(we),clearInterval(ce),clearInterval(U),be.stop(),N.clear(),document.removeEventListener("visibilitychange",H)}),(se,ne)=>{const Oe=Go("RouterLink");return Ie(),Ce("main",Jh,[E("header",Xh,[E("div",Zh,[E("span",ef,Pe(t?"本地设备管理 · 无需后端":"MQTT 管理平台"),1),E("h1",null,[E("img",{src:f,width:"30",height:"30",alt:"",style:{"vertical-align":"middle","margin-right":"8px"}}),ne[14]||(ne[14]=Fe("IotCloud",-1))])]),E("nav",tf,[t?We("",!0):(Ie(),Ce("span",{key:0,class:Qt(["status-pill",{online:T.value}])},Pe(T.value?"MQTT 已连接":"MQTT 未连接"),3)),!t&&Ke(ze).isAdmin?(Ie(),gt(Oe,{key:1,class:"btn console-admin",to:"/admin"},{default:fr(()=>[...ne[15]||(ne[15]=[Fe("平台管理",-1)])]),_:1})):We("",!0),He(Zl),!t&&Ke(ze).username?(Ie(),Ce("button",{key:2,onClick:oe},"退出")):t?We("",!0):(Ie(),gt(Oe,{key:3,to:"/login"},{default:fr(()=>[...ne[16]||(ne[16]=[Fe("登录",-1)])]),_:1}))])]),E("nav",nf,[E("button",{"aria-current":w.value==="home"?"page":void 0,onClick:ne[0]||(ne[0]=ke=>w.value="home")},"首页",8,rf),E("button",{"aria-current":w.value==="settings"?"page":void 0,onClick:ne[1]||(ne[1]=ke=>o())},"设置",8,sf)]),de.value?(Ie(),Ce("div",of,[E("details",null,[E("summary",null,[ne[17]||(ne[17]=Fe("设备接入地址：",-1)),E("strong",null,Pe(C.value),1)]),ne[18]||(ne[18]=E("p",null,"配置 IoT 设备时，请在设备本地网页的 MQTT 设置中将 Host 填为上述地址，端口按 Broker 的设备接入配置填写。不要填写当前网页域名或 WebSocket 地址。",-1))]),E("button",{type:"button",onClick:X},"我知道了")])):We("",!0),S.value?(Ie(),Ce("p",af,Pe(S.value),1)):We("",!0),I.value?(Ie(),Ce("p",lf,Pe(I.value),1)):We("",!0),t?(Ie(),gt(Xl,{key:3,onConnected:ee})):We("",!0),w.value==="home"?(Ie(),Ce(dt,{key:4},[E("div",cf,[E("aside",df,[ne[20]||(ne[20]=E("h2",null,"设备",-1)),E("button",{class:"add-device-entry",type:"button",onClick:ne[2]||(ne[2]=ke=>o("devices"))},[He(Ve,{name:"plus",size:17}),ne[19]||(ne[19]=Fe("添加设备",-1))]),E("ul",uf,[(Ie(!0),Ce(dt,null,vn(_.value,ke=>(Ie(),Ce("li",{key:Ke(Le)(ke),class:"device-list-item"},[E("button",{class:"device-select","aria-pressed":k.value===Ke(Le)(ke),onClick:je=>k.value=Ke(Le)(ke)},[He(Ai,{device:ke,state:re.value[Ke(Le)(ke)]||{},name:h(ke),connected:T.value,now:O.value},null,8,["device","state","name","connected","now"])],8,pf),E("button",{class:"device-rename btn ghost icon","aria-label":`修改 ${h(ke)} 的名称`,onClick:je=>i.value.open(ke,h(ke))},[He(Ve,{name:"edit",size:15})],8,hf)]))),128))]),E("button",{onClick:p},"刷新列表"),_.value.length?We("",!0):(Ie(),Ce("p",ff,"暂无设备。设备上线后将自动显示，也可在设置中添加。"))]),z.value?(Ie(),Ce("div",mf,[E("div",gf,[E("button",{class:"device-picker-trigger",type:"button","aria-haspopup":"dialog","aria-label":`切换设备，当前：${h(z.value)}`,onClick:ne[3]||(ne[3]=ke=>s.value.open())},[E("span",vf,[E("b",{title:h(z.value)},Pe(h(z.value)),9,yf),E("small",null,Pe(xe.value?z.value.lan_connected?"内网已连接":z.value.available===!1?"离线":z.value.available===!0?"在线":"等待设备状态":"设备未连接"),1)]),E("span",wf,[ne[21]||(ne[21]=Fe("切换设备",-1)),He(Ve,{name:"arrow",size:16})])],8,bf),E("button",{class:"device-refresh",type:"button","aria-label":"刷新当前设备状态",disabled:!xe.value,onClick:ne[4]||(ne[4]=ke=>e.value?.refresh())},[He(Ve,{name:"refresh"})],8,_f)]),E("div",kf,[E("div",null,[E("h2",null,Pe(h(z.value)),1),E("p",xf,Pe(Ke(zo)(z.value)),1)]),E("span",{class:Qt(["badge",z.value.available===!0&&xe.value?"ok":""])},Pe(xe.value?z.value.lan_connected?"内网已连接":z.value.available===!1?"离线":z.value.available===!0?"在线":"等待设备状态":"设备未连接"),3),E("button",{disabled:!xe.value,onClick:ne[5]||(ne[5]=ke=>e.value?.refresh())},"刷新状态",8,Sf)]),(Ie(),gt(Ku,{ref_key:"home",ref:e,key:k.value,device:z.value,onCommand:V,onUpload:ae,onSettings:ne[6]||(ne[6]=ke=>o())},null,8,["device"]))])):(Ie(),Ce("section",Tf,[ne[22]||(ne[22]=E("h2",null,"从一台设备开始",-1)),E("p",null,Pe(t?"在上方填写设备 IP，开始本地管理。":"在设置中连接 Broker 并添加设备。"),1),E("button",{onClick:ne[7]||(ne[7]=ke=>o("devices"))},"添加设备")]))]),He(Wu,{ref_key:"devicePicker",ref:s,devices:_.value,selected:k.value,states:re.value,"device-name":h,connected:T.value,now:O.value,onSelect:ne[8]||(ne[8]=ke=>k.value=ke),onRefresh:p,onAdd:ne[9]||(ne[9]=ke=>o("devices"))},null,8,["devices","selected","states","connected","now"])],64)):(Ie(),gt(Fh,{key:5,"local-mode":t,"device-preferences":Z,"lan-connections":ie,onDeviceConnection:q,"initial-section":u.value,"device-broker":v,connection:R,connected:T.value,busy:P.value,"third-party":g.value,devices:_.value,states:re.value,"add-form":K,"device-name":h,now:O.value,onInstall:ne[10]||(ne[10]=ke=>n.value?.open()),onRename:ne[11]||(ne[11]=ke=>i.value.open(ke,h(ke))),onModeChange:ne[12]||(ne[12]=ke=>{g.value=ke,ue()}),onConnect:Se,onDisconnect:ve,onAdd:Ae,onRemove:G,onPassword:Re,onMqttPassword:Ne,onHome:ne[13]||(ne[13]=ke=>w.value="home"),onRefresh:p},null,8,["device-preferences","lan-connections","initial-section","device-broker","connection","connected","busy","third-party","devices","states","add-form","now"])),(Ie(),gt(Yh,{key:6,ref_key:"installApp",ref:n,eligible:w.value==="home"&&r.value&&!!Ke(ze).username&&!g.value},null,8,["eligible"])),He(qu,{ref_key:"nameDialog",ref:i,onSave:b},null,512),ne[23]||(ne[23]=E("footer",{class:"console-footer copyright"},[Fe("Copyright © Phicomm Community · "),E("a",{href:"https://github.com/phicomm-io/phicomm-community-mqtt",target:"_blank",rel:"noopener noreferrer"},"MQTT 平台仓库"),Fe(" · "),E("a",{href:"https://phicomm-io.github.io",target:"_blank",rel:"noopener noreferrer"},"项目网站")],-1))])}}};export{Pf as default};
