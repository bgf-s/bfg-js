(()=>{"use strict";var t,n,e,r,o,i,a,p=function(){return(p=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)},u=function(){for(var t=0,n=0,e=arguments.length;n<e;n++)t+=arguments[n].length;var r=Array(t),o=0;for(n=0;n<e;n++)for(var i=arguments[n],a=0,p=i.length;a<p;a++,o++)r[o]=i[a];return r},s=(t={},n=[],e=function(n,e,r){var o="on_"+e,a={name:n,event:e};return n in t&&o in t[n]&&t[n][o].map((function(t){var n=t(r,i,a);void 0!==n&&(r=n)})),"*"in t&&o in t["*"]&&t["*"][o].map((function(t){var n=t(r,i,a);void 0!==n&&(r=n)})),r},r=function(n){for(var r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];var a=null;if(n in t){var p=t[n];if(!("data"in p))return null;p.compute&&"function"==typeof p.data?a=p.data.apply(p,u([i],r)):p.resolve&&!p.resolved?("function"==typeof p.resolve?t[n].data=p.resolve.apply(p,u([i],r)):t[n].data=p.resolve,a=t[n].data=e(n,"resolve",t[n].data)):a=t[n].data,t[n].resolved=!0,a=e(n,"get",a)}return a},o=function(o,i){return{bind:function(n,r,o,a){void 0===o&&(o=!1),void 0===a&&(a=!1);var u={data:o?null:r,resolve:!!o&&r,resolved:!1,compute:a};return n in t?"data"in t[n]?(u.etc=t[n],t[n]=e(n,"replace",u),delete u.etc):t[n]=p(p({},u),t[n]):t[n]=e(n,"bind",u),i},compute:function(t,n){return i.bind(t,n,!1,!0)},get:function(n){void 0===n&&(n=null);for(var e=[],o=1;o<arguments.length;o++)e[o-1]=arguments[o];return n?r.apply(void 0,u([n],e)):t},has:function(n){return n in t},forget:function(n){return n in t?(e(n,"forget",t[n].data),delete t[n],!0):i},resolve:function(n){for(var e=[],o=1;o<arguments.length;o++)e[o-1]=arguments[o];if(n in t)return t[n].resolved=!1,r.apply(void 0,u([n],e));throw new Error("Item ["+n+"] not found!")},on:function(n,e,r){return"*"===n&&(n=["bind","get","resolve","forget","replace"]),"string"==typeof e&&(e=[e]),"string"==typeof n&&(n=[n]),n.forEach((function(n){e.forEach((function(e){n="on_"+n,e in t?n in t[e]||(t[e][n]=[]):(t[e]={},t[e][n]=[]),t[e][n].push(r)}))})),i},on_bind:function(t,n){return this.on("bind",t,n)},on_get:function(t,n){return this.on("get",t,n)},on_resolve:function(t,n){return this.on("resolve",t,n)},on_forget:function(t,n){return this.on("forget",t,n)},on_replace:function(t,n){return this.on("replace",t,n)},provider:function(t){return t.app=i,"boot"in t&&n.push(t),"register"in t&&t.register(),t},boot:function(){return this.provide("boot")},provide:function(t){return n.forEach((function(n){t in n&&"function"==typeof n[t]&&n[t](i)})),i}}},i=new Proxy((function(n){void 0===n&&(n=null);for(var e=[],o=1;o<arguments.length;o++)e[o-1]=arguments[o];return n?r.apply(void 0,u([n],e)):t}),{get:function(t,n){var e=o(0,i);return n in e?e[n]:r(n)},set:function(n,e,r,a){return!(i.has(e)&&t[e].data===r||(o(0,i).bind(e,r),0))}})),c=function(){function t(){}return t.prototype.replace_tags=function(t,n,e){return void 0===e&&(e="{*}"),e=Array.isArray(e)?e:e.split("*"),Object.keys(n).map((function(r){t=t.replace(new RegExp((""+e[0]+r+e[1]).replace(new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\#-]","g"),"\\$&"),"g"),n[r])})),t},t.prototype.end_with=function(t,n){return this.is("*"+n,t)},t.prototype.start_with=function(t,n){return this.is(n+"*",t)},t.prototype.contains=function(t,n){return this.is("*"+n+"*",t)},t.prototype.dirname=function(t){return t.replace(/\\/g,"/").replace(/\/[^/]*\/?$/,"")},t.prototype.camel=function(t,n){return void 0===n&&(n=!1),t.replace(/\-|\_/g," ").replace(/(?:^\w|[A-Z]|\b\w)/g,(function(t,e){return n?t.toUpperCase():0===e?t.toLowerCase():t.toUpperCase()})).replace(/\s+/g,"")},t.prototype.snake=function(t,n){void 0===n&&(n="_"),void 0===n&&(n="-");var e="-"===n?"_":"-";return(t=t.replace(e,n)).toLowerCase().replace(new RegExp(":","g"),n).replace(new RegExp("\\s","g"),n).replace(new RegExp("\\s\\s","g"),n).replace(new RegExp("["+n+n+"]+","g"),n).replace(new RegExp("[^a-z0-9"+n+"\\s]","g"),"")},t.prototype.translit=function(t){var n={а:"a",б:"b",в:"v",г:"g",д:"d",е:"e",ё:"e",ж:"j",з:"z",и:"i",к:"k",л:"l",м:"m",н:"n",о:"o",п:"p",р:"r",с:"s",т:"t",у:"u",ф:"f",х:"h",ц:"c",ч:"ch",ш:"sh",щ:"shch",ы:"y",э:"e",ю:"u",я:"ya"},e=[];t=t.replace(/[ъь]+/g,"").replace(/й/g,"i");for(var r=0;r<t.length;++r)e.push(n[t[r]]||void 0===n[t[r].toLowerCase()]&&t[r]||n[t[r].toLowerCase()].replace(/^(.)/,(function(t){return t.toUpperCase()})));return e.join("")},t.prototype.slug=function(t,n){return void 0===n&&(n="_"),this.snake(this.translit(t),n)},t.prototype.query_get=function(t){void 0===t&&(t=null);for(var n,e=/\+/g,r=/([^&=]+)=?([^&]*)/g,o=function(t){return decodeURIComponent(t.replace(e," "))},i=window.location.search.substring(1),a={};n=r.exec(i);)a[o(n[1])]=o(n[2]);return t?a[t]:a},t.prototype.is=function(t,n){return t=t.replace(new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\#-]","g"),"\\$&").replace(/\\\*/g,".*"),new RegExp(t+"$","u").test(n)},t.prototype.trim=function(t,n){n=n?n.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g,"$1"):" s ";var e=new RegExp("^["+n+"]+|["+n+"]+$","g");return t.replace(e,"")},t.prototype.number_format=function(t,n,e,r){var o,i;return void 0===n&&(n=0),void 0===e&&(e="."),void 0===r&&(r=","),isNaN(n=Math.abs(n))&&(n=2),void 0===e&&(e=","),void 0===r&&(r="."),(i=(o=parseInt(t=(+t||0).toFixed(n))+"").length)>3?i%=3:i=0,(i?o.substr(0,i)+r:"")+o.substr(i).replace(/(\d{3})(?=\d)/g,"$1"+r)+(n?e+Math.abs(Number(t)-parseInt(o)).toFixed(n).replace(/-/,"0").slice(2):"")},t.prototype.http_build_query=function(t,n,e){void 0===n&&(n=null),void 0===e&&(e=null);var r=[];return null!==t&&Object.keys(t).forEach((function(o){var i=o;if(n&&!isNaN(Number(i))&&(i=n+i),i=encodeURIComponent(i.replace(/[!'()*]/g,escape)),e&&(i=e+"["+i+"]"),"object"==typeof t[o])r.push(i+"="+JSON.stringify(t[o]));else{var a=encodeURIComponent(String(t[o]).replace(/[!'()*]/g,escape));r.push(i+"="+a)}})),r.join("&")},t}(),f=function(){for(var t=0,n=0,e=arguments.length;n<e;n++)t+=arguments[n].length;var r=Array(t),o=0;for(n=0;n<e;n++)for(var i=arguments[n],a=0,p=i.length;a<p;a++,o++)r[o]=i[a];return r},l=function(){function t(t){this.app=t}return t.prototype.get_start_with=function(t,n){var e=this,r=null;return Object.keys(t).map((function(o){!r&&e.app.str.start_with(t[o],n)&&(r=t[o])})),r},t.prototype.get_end_with=function(t,n){var e=this,r=null;return Object.keys(t).map((function(o){!r&&e.app.str.end_with(t[o],n)&&(r=t[o])})),r},t.prototype.flip=function(t){var n,e={};for(n in t)t.hasOwnProperty(n)&&(e[t[n]]=n);return e},t.prototype.first_key=function(t){var n=Object.keys(t);return 0 in n?n[0]:null},t.prototype.last_key=function(t){var n=Object.keys(t),e=n.length-1;return e in n?n[e]:null},t.prototype.first=function(t){var n=this.first_key(t);return n?t[n]:null},t.prototype.last=function(t){var n=this.last_key(t);return n?t[n]:null},t.prototype.merge_recursive=function(t){for(var n,e,r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];if(!r.length)return t;var i=r.shift();if(this.isObject(t)&&this.isObject(i))for(var a in i)this.isObject(i[a])?(t[a]?t[a]=Object.assign({},t[a]):Object.assign(t,((n={})[a]={},n)),this.merge_recursive(t[a],i[a])):Object.assign(t,((e={})[a]=i[a],e));var p=this.merge_recursive.apply(this,f([t],r));return p},t.prototype.isClass=function(t){var n=String(t);return"[object Object]"===n&&"function"==typeof t||/^class\s.*/.test(n.trim())},t.prototype.isArray=function(t){return Array.isArray(t)},t.prototype.isEmptyObject=function(t){return 0===Object.keys(t).length},t.prototype.isObject=function(t){return"[object Object]"===Object.prototype.toString.call(t)},t.prototype.isArrayOrObject=function(t){return Object(t)===t},t.prototype.dot=function(t,n,e,r,o,i){var a=this;return void 0===n&&(n={}),void 0===e&&(e=[]),void 0===r&&(r=!1),void 0===o&&(o=!1),void 0===i&&(i="."),Object.keys(t).forEach((function(p){var u=a.isArray&&r?"["+p+"]":p;if(a.isArrayOrObject(t[p])&&(a.isObject(t[p])&&!a.isEmptyObject(t[p])||a.isArray(t[p])&&!o&&0!==t[p].length)){if(a.isArray&&r){var s=e[e.length-1]||"";return a.dot(t[p],n,e.slice(0,-1).concat(s+u))}return a.dot(t[p],n,e.concat(u))}a.isArray&&r?n[e.join(i).concat("["+p+"]")]=t[p]:n[e.concat(u).join(i)]=t[p]})),n},t}(),v=function(){function t(){}return t.prototype.isNumber=function(t){return!isNaN(Number(t))},t}(),g=function(){for(var t=0,n=0,e=arguments.length;n<e;n++)t+=arguments[n].length;var r=Array(t),o=0;for(n=0;n<e;n++)for(var i=arguments[n],a=0,p=i.length;a<p;a++,o++)r[o]=i[a];return r},h=function(){function t(n){var e=this;return this.app=n,t.glob=this,t.getConsole=function(n){return function(){for(var r,o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];var a=e.app.console;if(n in a)a[n].apply(a,g([t.glob.prompt],o));else if(n in t.glob)return"function"==typeof t.glob[n]?(r=t.glob)[n].apply(r,o):t.glob[n]}},new Proxy(t.glob.log,{get:function(n,e){return t.getConsole(e)},has:function(t,n){return"proxy"===n}})}return t.prototype.log=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];t.getConsole("log").apply(void 0,n)},t.prototype.info=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];t.getConsole("info").apply(void 0,n)},t.prototype.warn=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];t.getConsole("warn").apply(void 0,n)},t.prototype.error=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];t.getConsole("error").apply(void 0,n)},t.prototype.table=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];t.getConsole("table").apply(void 0,n)},t.prototype.clear=function(){t.getConsole("clear")()},Object.defineProperty(t.prototype,"prompt",{get:function(){return"["+(new Date).toLocaleTimeString("en-US",{hour12:!1})+"]:"},enumerable:!1,configurable:!0}),t}(),y=function(){for(var t=0,n=0,e=arguments.length;n<e;n++)t+=arguments[n].length;var r=Array(t),o=0;for(n=0;n<e;n++)for(var i=arguments[n],a=0,p=i.length;a<p;a++,o++)r[o]=i[a];return r},d=function(){function t(){return this.events={},t.global=this,new Proxy((function(n){for(var e,r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];return(e=t.global).fire.apply(e,y([n],r))}),{has:function(n,e){return"proxy"===e||t.global.has(e)},get:function(n,e){return e in t.global?t.global[e]:function(){for(var n,r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];return(n=t.global).fire.apply(n,y([e],r))}},set:function(n,e,r,o){return t.global.on(e,r)},deleteProperty:function(n,e){return t.global.off(e)}})}return t.prototype.fire=function(t){for(var n=[],e=1;e<arguments.length;e++)n[e-1]=arguments[e];return t in this.events&&this.events[t].map((function(t){if(t){var e=t.apply(void 0,n);void 0!==e&&(n[0]=e)}})),0 in n?n[0]:null},t.prototype.on=function(t,n){var e=this;Array.isArray(t)||(t=[t]),t.map((function(t){t in e.events||(e.events[t]=[]),"function"==typeof n?e.events[t].push(n):Array.isArray(n)&&n.map((function(n){"function"==typeof n&&e.events[t].push(n)}))}))},t.prototype.off=function(t,n){if(t in this.events){if("function"==typeof n){var e=!1;return this.events[t]=this.events[t].filter((function(t){return e=!0,t!==n})),e}return delete this.events[t],!0}return!1},t.prototype.has=function(t){return t in this.events},t}(),b=(a=function(t,n){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])})(t,n)},function(t,n){function e(){this.constructor=t}a(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}),w=function(t){function n(n,e){void 0===e&&(e=!1);var r=t.call(this)||this;return r.start=n,r.dev=e,r}return b(n,t),n.prototype.register=function(){this.app.bind("start",this.start),this.app.bind("env","production"),this.app.bind("local",!1),this.app.bind("dev",this.dev),this.app.bind("console",console),this.app.bind("event",new d),this.app.bind("system",n.sys,!0),this.app.bind("log",new h(this.app)),this.app.bind("version",n.version,!0),this.app.bind("token",n.token),this.app.bind("os",n.os,!0),this.app.bind("str",new c),this.app.bind("obj",new l(this.app)),this.app.bind("num",new v)},n.prototype.boot=function(){},n.prototype.globalize=function(){"browser"===this.app.system?window.app=this.app:"node"===this.app.system&&(globalThis.app=this.app)},n.version=function(){return"1.0.0"},n.sys=function(){return"undefined"!=typeof Window?"browser":"node"},n.os=function(){if("node"===n.sys())return"CLI";var t=window.navigator.userAgent,e=window.navigator.platform,r=null;return-1!==["Macintosh","MacIntel","MacPPC","Mac68K"].indexOf(e)?r="MacOS":-1!==["iPhone","iPad","iPod"].indexOf(e)?r="iOS":-1!==["Win32","Win64","Windows","WinCE"].indexOf(e)?r="Windows":/Android/.test(t)?r="Android":/Linux/.test(e)&&(r="Linux"),r},n.token=function(){var t=document.querySelector('meta[name="csrf-token"]');return t?t.getAttribute("content"):null},n}((function(){})),m=(new Date).getTime();s.provider(new w(m)).globalize(),"object"==typeof exports&&(exports.app=s)})();