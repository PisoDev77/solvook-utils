if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let d={};const o=e=>s(e,t),l={module:{uri:t},exports:d,require:o};i[t]=Promise.all(n.map((e=>l[e]||o(e)))).then((e=>(r(...e),d)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-49a1272d.css",revision:null},{url:"assets/index-d33eb603.js",revision:null},{url:"index.html",revision:"c096b02bc863d8d79045ca7c9ddeed1a"},{url:"registerSW.js",revision:"8cade901df94f6ef59349df2bbe0605b"},{url:"helper-192.png",revision:"50c9933a9a15d27c6ae68665f3915bbc"},{url:"helper-512.png",revision:"643f05f26b38e872f41faf88d1520050"},{url:"manifest.webmanifest",revision:"d0acfcc583865adf1792f80e2dafa8a6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
