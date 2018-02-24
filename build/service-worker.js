"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","f86dd15b66f99e657ee5bf73a093b2f8"],["/static/css/main.35b26007.css","13b1d262ca12350877987fbcfb92f992"],["/static/js/main.6586cab7.js","14c3b3b562db66e07583de61b019293b"],["/static/media/busIcon.af41a8ab.svg","af41a8ab639dfc9f294099c3c2f72711"],["/static/media/calendar.2a427519.svg","2a42751964b3715c4858efceaa902095"],["/static/media/checkIcon.f4f880fb.svg","f4f880fb08567137e17a6d8d3d4da29d"],["/static/media/clock.ac131b2a.svg","ac131b2a8541e136c13af8197529f6df"],["/static/media/clouds.911a5e91.png","911a5e91ca032117dc39d3f72e471c5c"],["/static/media/dashy-icn.515f0e63.png","515f0e636843ff66adc67e5dd0f18bff"],["/static/media/menuIcon.03143cb4.svg","03143cb452530aa9223a0dcfcffbb869"],["/static/media/moneyIcon.37e5619f.svg","37e5619fe3ee338af2002e8cf83696e8"],["/static/media/plusSign.e47e2a84.svg","e47e2a840b3b3fef9cf9de6a28f81e12"],["/static/media/rain.64abd1f5.png","64abd1f530a0f4f837ec912824df49b7"],["/static/media/singleTick.e63ecbd5.svg","e63ecbd5e9978d8458addc065c3e5402"],["/static/media/snow.59104949.png","5910494971a417781ae9a6116adeebb4"],["/static/media/sun.3968f4ef.png","3968f4efce44b2a7bfadf5dc703ed223"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),a="index.html";(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),t=urlsToCacheKeys.has(n));var r="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});