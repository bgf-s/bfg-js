!function(t,e){for(var n in e)t[n]=e[n];e.__esModule&&Object.defineProperty(t,"__esModule",{value:!0})}(exports,(()=>{"use strict";var t={355:function(t,e){var n,r,o,i,a,u,p=this&&this.__assign||function(){return(p=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)},s=this&&this.__spreadArrays||function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var i=arguments[e],a=0,u=i.length;a<u;a++,o++)r[o]=i[a];return r};Object.defineProperty(e,"__esModule",{value:!0}),e.default=(n={},r=[],o=function(t,e,r){var o="on_"+e,i={name:t,event:e};return t in n&&o in n[t]&&n[t][o].map((function(t){var e=t(r,u,i);void 0!==e&&(r=e)})),"*"in n&&o in n["*"]&&n["*"][o].map((function(t){var e=t(r,u,i);void 0!==e&&(r=e)})),r},i=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];var i=null;if(t in n){var a=n[t];if(!("data"in a))return null;a.compute&&"function"==typeof a.data?i=a.data.apply(a,s([u],e)):a.resolve&&!a.resolved?("function"==typeof a.resolve?n[t].data=a.resolve.apply(a,s([u],e)):n[t].data=a.resolve,i=n[t].data=o(t,"resolve",n[t].data)):i=n[t].data,n[t].resolved=!0,i=o(t,"get",i)}return i},a=function(t,e){return{bind:function(t,r,i,a){void 0===i&&(i=!1),void 0===a&&(a=!1);var u={data:i?null:r,resolve:!!i&&r,resolved:!1,compute:a};return t in n?"data"in n[t]?(u.etc=n[t],n[t]=o(t,"replace",u),delete u.etc):n[t]=p(p({},u),n[t]):n[t]=o(t,"bind",u),e},singleton:function(t,n){return e.bind(t,n,!0)},compute:function(t,n){return e.bind(t,n,!1,!0)},library:function(t){return"name"in t?e.bind(t.name,new t(e)):e},inject:function(t){t.app=e,e.obj.getMethods(t).map((function(n){var r=n.split(":"),o=null,i="bind";1===r.length?(o=r[0],i="bind"):(o=r[1],i=r[0]),"bind"!==i&&"singleton"!==i&&"compute"!==i&&(i="bind"),i&&o&&e[i](o,t[n].bind(e))}))},get:function(t){void 0===t&&(t=null);for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return t?i.apply(void 0,s([t],e)):n},has:function(t){return t in n},forget:function(t){return t in n?(o(t,"forget",n[t].data),delete n[t],!0):e},resolve:function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(t in n)return n[t].resolved=!1,i.apply(void 0,s([t],e));throw new Error("Item ["+t+"] not found!")},on:function(t,r,o){return"*"===t&&(t=["bind","get","resolve","forget","replace"]),"string"==typeof r&&(r=[r]),"string"==typeof t&&(t=[t]),t.forEach((function(t){r.forEach((function(e){t="on_"+t,e in n?t in n[e]||(n[e][t]=[]):(n[e]={},n[e][t]=[]),n[e][t].push(o)}))})),e},on_bind:function(t,e){return this.on("bind",t,e)},on_get:function(t,e){return this.on("get",t,e)},on_resolve:function(t,e){return this.on("resolve",t,e)},on_forget:function(t,e){return this.on("forget",t,e)},on_replace:function(t,e){return this.on("replace",t,e)},register_collection:function(t){var n=this;return t.map((function(t){return n.register(t)})),e},register:function(t){var n=new t(e);return this.provider(n),n},provider:function(t){return t.app=e,"boot"in t&&r.push(t),"register"in t&&"function"==typeof t.register&&t.register(),t},boot:function(){return this.execute("boot")},execute:function(t){return"undefined"!=typeof Window&&document.dispatchEvent(new CustomEvent("bfg:"+t,{detail:e})),r.forEach((function(n){t in n&&"function"==typeof n[t]&&n[t](e)})),e}}},u=new Proxy((function(t){void 0===t&&(t=null);for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return t?i.apply(void 0,s([t],e)):n}),{get:function(t,e){var n=a(0,u);return e in n?n[e]:i(e)},set:function(t,e,r,o){return!(u.has(e)&&n[e].data===r||(a(0,u).bind(e,r),0))},has:function(t,e){return u.has(e)}}))},27:function(t,e){var n=this&&this.__spreadArrays||function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var i=arguments[e],a=0,u=i.length;a<u;a++,o++)r[o]=i[a];return r};Object.defineProperty(e,"__esModule",{value:!0}),e.Caller=void 0;var r=function(){function t(){}return t.prototype.call=function(t){for(var e=this,r=[],o=1;o<arguments.length;o++)r[o-1]=arguments[o];"string"==typeof t?this.obj.get(t,this).apply(void 0,r):Array.isArray(t)?this.obj.each(t,(function(t){e.call.apply(e,n([t[0]],Array.isArray(t[1])?t[1]:[t[1]]))})):"object"==typeof t&&this.obj.each(t,(function(t,r){e.call.apply(e,n([r],Array.isArray(t)?t:[t]))}))},t}();e.Caller=r},320:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Doc=void 0;var n=function(){function t(){}return t.prototype.reload=function(){window.location.reload()},t.prototype.redirect=function(t){window.location.href=t},t.prototype.set_url=function(t,e,n){void 0===e&&(e=null),void 0===n&&(n={}),window.history.pushState(n,e,t)},t}();e.Doc=n},992:function(t,e){var n=this&&this.__spreadArrays||function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var i=arguments[e],a=0,u=i.length;a<u;a++,o++)r[o]=i[a];return r};Object.defineProperty(e,"__esModule",{value:!0}),e.EventCollect=void 0;var r=function(){function t(){return this.events={},t.global=this,new Proxy((function(e){for(var r,o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return(r=t.global).fire.apply(r,n([e],o))}),{has:function(e,n){return"proxy"===n||t.global.has(n)},get:function(e,r){return r in t.global?t.global[r]:function(){for(var e,o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];return(e=t.global).fire.apply(e,n([r],o))}},set:function(e,n,r,o){return t.global.on(n,r)},deleteProperty:function(e,n){return t.global.off(n)}})}return t.prototype.fire=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return t in this.events&&this.events[t].map((function(t){if(t){var n=t.apply(void 0,e);void 0!==n&&(e[0]=n)}})),0 in e?e[0]:null},t.prototype.on=function(t,e){var n=this;Array.isArray(t)||(t=[t]),t.map((function(t){t in n.events||(n.events[t]=[]);var r=!1;n.events[t].map((function(t){r||(r=t===e)})),"function"!=typeof e||r?Array.isArray(e)&&!r&&e.map((function(e){"function"==typeof e&&n.events[t].push(e)})):n.events[t].push(e)}))},t.prototype.off=function(t,e){if(t in this.events){if("function"==typeof e){var n=!1;return this.events[t]=this.events[t].filter((function(t){return n=!0,t!==e})),n}return delete this.events[t],!0}return!1},t.prototype.has=function(t){return t in this.events},t}();e.EventCollect=r},181:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Json=void 0;var n=function(){function t(){}return t.prototype.encode=function(t,e,n){try{return JSON.stringify(t,e,n)}catch(t){return""}},t.prototype.decode=function(t,e){try{return JSON.parse(t,e)}catch(t){return{}}},t}();e.Json=n},743:function(t,e,n){var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0}),e.Kernel=void 0;var i=n(238),a=n(82),u=n(822),p=n(565),s=n(386),c=n(992),f=n(181),l=n(277),d=n(27),v=n(320),y=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.register=function(){var t=this;if(this.app.register(l.Request),this.app.bind("start",(new Date).getTime()),this.app.bind("env","production"),this.app.bind("dev",!1),this.app.bind("console",console),this.app.bind("event",new c.EventCollect),this.app.bind("system",e.sys,!0),this.app.bind("log",new s.Log(this.app)),this.app.bind("version",e.version,!0),this.app.compute("token",(function(){return t.app.server.token})),this.app.bind("os",e.os,!0),this.app.bind("str",new a.Str),this.app.bind("obj",new u.Obj(this.app)),this.app.bind("num",new p.Num),this.app.bind("doc",new v.Doc),this.app.bind("json",new f.Json),this.app.bind("is_browser","browser"===String(this.app.system)),this.app.bind("data",{}),this.app.inject(new d.Caller),this.app.is_browser){var n=document.getElementById("bfg-page-json");if(n){var r=n.innerText,o=this.app.json.decode(r);o&&this.app.bind("data",o)}window.bfg=!0,document.dispatchEvent(new CustomEvent("bfg:register",{detail:this.app}))}},e.prototype.boot=function(){},e.prototype.globalize=function(){"browser"===this.app.system?window.app=this.app:"node"===this.app.system&&(globalThis.app=this.app)},e.version=function(){return"1.0.8"},e.sys=function(){return"undefined"!=typeof Window?"browser":"node"},e.os=function(){if("node"===e.sys())return"CLI";var t=window.navigator.userAgent,n=window.navigator.platform,r=null;return-1!==["Macintosh","MacIntel","MacPPC","Mac68K"].indexOf(n)?r="MacOS":-1!==["iPhone","iPad","iPod"].indexOf(n)?r="iOS":-1!==["Win32","Win64","Windows","WinCE"].indexOf(n)?r="Windows":/Android/.test(t)?r="Android":/Linux/.test(n)&&(r="Linux"),r},e}(i.ServiceProvider);e.Kernel=y},386:function(t,e){var n=this&&this.__spreadArrays||function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var i=arguments[e],a=0,u=i.length;a<u;a++,o++)r[o]=i[a];return r};Object.defineProperty(e,"__esModule",{value:!0}),e.Log=void 0;var r=function(){function t(e){var r=this;return this.app=e,t.glob=this,t.getConsole=function(o,i){return void 0===i&&(i=!1),function(){for(var a,u=[],p=0;p<arguments.length;p++)u[p]=arguments[p];if("!"===u[0])return function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];return t.getConsole(o).apply(void 0,n)};if(i||e.dev){var s=r.app.console;if(o in s)s[o].apply(s,n([t.glob.prompt],u));else if(o in t.glob)return"function"==typeof t.glob[o]?(a=t.glob)[o].apply(a,u):t.glob[o]}}},new Proxy(t.glob.log,{get:function(e,n){return t.getConsole(n)},has:function(t,e){return"proxy"===e}})}return t.prototype.log=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];t.getConsole("log").apply(void 0,e)},t.prototype.info=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];t.getConsole("info").apply(void 0,e)},t.prototype.warn=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];t.getConsole("warn").apply(void 0,e)},t.prototype.error=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];t.getConsole("error").apply(void 0,e)},t.prototype.table=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];t.getConsole("table").apply(void 0,e)},t.prototype.clear=function(){t.getConsole("clear")()},Object.defineProperty(t.prototype,"prompt",{get:function(){return"["+(new Date).toLocaleTimeString("en-US",{hour12:!1})+"]:"},enumerable:!1,configurable:!0}),t}();e.Log=r},565:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Num=void 0;var n=function(){function t(){}return t.prototype.isNumber=function(t){return!isNaN(Number(t))},t}();e.Num=n},822:function(t,e){var n=this&&this.__spreadArrays||function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var i=arguments[e],a=0,u=i.length;a<u;a++,o++)r[o]=i[a];return r};Object.defineProperty(e,"__esModule",{value:!0}),e.Obj=void 0;var r=function(){function t(t){this.app=t}return t.prototype.getMethods=function(t){var e=[];for(var n in t)e.push(n);return e},t.prototype.getElementAttrs=function(t){var e={};return[].slice.call(t.attributes).map((function(t){e[t.name]=t.value})),e},t.prototype.observer=function(t,e,n){return void 0===n&&(n=!1),n?new Proxy(t||{},e||{}):Proxy.revocable(t||{},e||{})},t.prototype.has=function(t,e){return String(t).split(".").reduce((function(t,e){return t[e]}),e)},t.prototype.get=function(t,e){return String(t).split(".").reduce((function(t,e){return void 0!==t[e]?t[e]:void 0}),e)},t.prototype.set=function(t,e,n){var r=String(t).split("."),o=r.length-1,i=n;r.some((function(t,n){if(void 0===t)return!0;if(n===o)i[t]=e;else{var r=i[t]||{};i[t]=r,i=r}}))},t.prototype.each=function(t,e){var n=Array.isArray(t)?[]:{};return Object.keys(t).map((function(r){return n[r]=e(t[r],r)})),n},t.prototype.get_start_with=function(t,e){var n=this,r=null;return e=e.replace(/\*/g,"00110011"),Object.keys(t).map((function(o){!r&&n.app.str.start_with(t[o].replace(/\*/g,"00110011"),e)&&(r=t[o])})),r},t.prototype.get_end_with=function(t,e){var n=this,r=null;return Object.keys(t).map((function(o){!r&&n.app.str.end_with(t[o],e)&&(r=t[o])})),r},t.prototype.flip=function(t){var e,n={};for(e in t)t.hasOwnProperty(e)&&(n[t[e]]=e);return n},t.prototype.first_key=function(t){var e=Object.keys(t);return 0 in e?e[0]:null},t.prototype.last_key=function(t){var e=Object.keys(t),n=e.length-1;return n in e?e[n]:null},t.prototype.first=function(t){var e=this.first_key(t);return e?t[e]:null},t.prototype.last=function(t){var e=this.last_key(t);return e?t[e]:null},t.prototype.merge_recursive=function(t){for(var e,r,o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];if(!o.length)return t;var a=o.shift();if(this.isObject(t)&&this.isObject(a))for(var u in a)this.isObject(a[u])?(t[u]?t[u]=Object.assign({},t[u]):Object.assign(t,((e={})[u]={},e)),this.merge_recursive(t[u],a[u])):Object.assign(t,((r={})[u]=a[u],r));var p=this.merge_recursive.apply(this,n([t],o));return p},t.prototype.isClass=function(t){var e=String(t);return"[object Object]"===e&&"function"==typeof t||/^class\s.*/.test(e.trim())},t.prototype.isArray=function(t){return Array.isArray(t)},t.prototype.isEmptyObject=function(t){return 0===Object.keys(t).length},t.prototype.isObject=function(t){return"[object Object]"===Object.prototype.toString.call(t)},t.prototype.isArrayOrObject=function(t){return Object(t)===t},t.prototype.dot=function(t,e,n,r,o,i){var a=this;return void 0===e&&(e={}),void 0===n&&(n=[]),void 0===r&&(r=!1),void 0===o&&(o=!1),void 0===i&&(i="."),Object.keys(t).forEach((function(u){var p=a.isArray&&r?"["+u+"]":u;if(a.isArrayOrObject(t[u])&&(a.isObject(t[u])&&!a.isEmptyObject(t[u])||a.isArray(t[u])&&!o&&0!==t[u].length)){if(a.isArray&&r){var s=n[n.length-1]||"";return a.dot(t[u],e,n.slice(0,-1).concat(s+p))}return a.dot(t[u],e,n.concat(p))}a.isArray&&r?e[n.join(i).concat("["+u+"]")]=t[u]:e[n.concat(p).join(i)]=t[u]})),e},t}();e.Obj=r},277:function(t,e,n){var r,o=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0}),e.Request=void 0;var i=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return o(e,t),e.prototype.register=function(){var t=this;this.app.bind("form_data",(function(t){var e=new FormData,n=function(t,r){if(!t||"object"!=typeof t||t instanceof Date||t instanceof File||t instanceof Blob){var o=null===t?"":t;r&&e.append(r,o)}else Object.keys(t).forEach((function(e){n(t[e],r?r+"["+e+"]":e)}))};return n(t),e})),this.app.bind("request",(function(e){return e=e||{},new Promise((function(n,r){var o=new XMLHttpRequest;o.open(e.method||"GET",e.url||window.location.href),o.setRequestHeader("X-CSRF-TOKEN",e.token||t.app.server.token),o.setRequestHeader("X-Requested-With","XMLHttpRequest"),"object"!=typeof e.body||e.body instanceof FormData||(o.setRequestHeader("Content-Type","application/json"),e.body=t.app.json.encode(e.body)),o.send(e.body),e.headers&&Object.keys(e.headers).forEach((function(t){o.setRequestHeader(t,e.headers[t])})),o.onload=function(){o.status>=200&&o.status<300?n({data:t.app.json.decode(o.response),xhr:o,token:o.getResponseHeader("X-CSRF-TOKEN")}):r(o)},o.onerror=function(){return r(o)}}))}))},e}(n(238).ServiceProvider);e.Request=i},238:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.ServiceProvider=void 0;e.ServiceProvider=function(t){this.app=t}},82:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Str=void 0;var n=function(){function t(){}return t.prototype.to_nodes=function(t){if("string"!=typeof t)return t;var e=document.createElement("div");return e.innerHTML=t.trim(),Object.assign([],e.childNodes)},t.prototype.preg_match_all=function(t,e){for(var n,r=[];null!==(n=t.exec(e));)r.push(n);return r},t.prototype.replace_tags=function(t,e,n){return void 0===n&&(n="{*}"),n=Array.isArray(n)?n:n.split("*"),Object.keys(e).map((function(r){t=t.replace(new RegExp((""+n[0]+r+n[1]).replace(new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\#-]","g"),"\\$&"),"g"),e[r])})),t},t.prototype.end_with=function(t,e){return this.is("*"+e,t)},t.prototype.start_with=function(t,e){return this.is(e+"*",t)},t.prototype.contains=function(t,e){return this.is("*"+e+"*",t)},t.prototype.dirname=function(t){return t.replace(/\\/g,"/").replace(/\/[^/]*\/?$/,"")},t.prototype.camel=function(t,e){return void 0===e&&(e=!1),t.replace(/\-|\_/g," ").replace(/(?:^\w|[A-Z]|\b\w)/g,(function(t,n){return e?t.toUpperCase():0===n?t.toLowerCase():t.toUpperCase()})).replace(/\s+/g,"")},t.prototype.snake=function(t,e){void 0===e&&(e="_"),void 0===e&&(e="-");var n="-"===e?"_":"-";return(t=t.replace(n,e)).toLowerCase().replace(new RegExp(":","g"),e).replace(new RegExp("\\s","g"),e).replace(new RegExp("\\s\\s","g"),e).replace(new RegExp("["+e+e+"]+","g"),e).replace(new RegExp("[^a-z0-9"+e+"\\s]","g"),"")},t.prototype.translit=function(t){var e={а:"a",б:"b",в:"v",г:"g",д:"d",е:"e",ё:"e",ж:"j",з:"z",и:"i",к:"k",л:"l",м:"m",н:"n",о:"o",п:"p",р:"r",с:"s",т:"t",у:"u",ф:"f",х:"h",ц:"c",ч:"ch",ш:"sh",щ:"shch",ы:"y",э:"e",ю:"u",я:"ya"},n=[];t=t.replace(/[ъь]+/g,"").replace(/й/g,"i");for(var r=0;r<t.length;++r)n.push(e[t[r]]||void 0===e[t[r].toLowerCase()]&&t[r]||e[t[r].toLowerCase()].replace(/^(.)/,(function(t){return t.toUpperCase()})));return n.join("")},t.prototype.slug=function(t,e){return void 0===e&&(e="_"),this.snake(this.translit(t),e)},t.prototype.query_get=function(t){void 0===t&&(t=null);for(var e,n=/\+/g,r=/([^&=]+)=?([^&]*)/g,o=function(t){return decodeURIComponent(t.replace(n," "))},i=window.location.search.substring(1),a={};e=r.exec(i);)a[o(e[1])]=o(e[2]);return t?a[t]:a},t.prototype.is=function(t,e){return t=t.replace(new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\#-]","g"),"\\$&").replace(/\\\*/g,".*"),new RegExp(t+"$","u").test(e)},t.prototype.trim=function(t,e){e=e?e.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g,"$1"):" s ";var n=new RegExp("^["+e+"]+|["+e+"]+$","g");return t.replace(n,"")},t.prototype.number_format=function(t,e,n,r){var o,i;return void 0===e&&(e=0),void 0===n&&(n="."),void 0===r&&(r=","),isNaN(e=Math.abs(e))&&(e=2),void 0===n&&(n=","),void 0===r&&(r="."),(i=(o=parseInt(t=(+t||0).toFixed(e))+"").length)>3?i%=3:i=0,(i?o.substr(0,i)+r:"")+o.substr(i).replace(/(\d{3})(?=\d)/g,"$1"+r)+(e?n+Math.abs(Number(t)-parseInt(o)).toFixed(e).replace(/-/,"0").slice(2):"")},t.prototype.http_build_query=function(t,e,n){void 0===e&&(e=null),void 0===n&&(n=null);var r=[];return null!==t&&Object.keys(t).forEach((function(o){var i=o;if(e&&!isNaN(Number(i))&&(i=e+i),i=encodeURIComponent(i.replace(/[!'()*]/g,escape)),n&&(i=n+"["+i+"]"),"object"==typeof t[o])r.push(i+"="+JSON.stringify(t[o]));else{var a=encodeURIComponent(String(t[o]).replace(/[!'()*]/g,escape));r.push(i+"="+a)}})),r.join("&")},t}();e.Str=n},607:function(t,e,n){var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.ServiceProvider=void 0;var o=r(n(355)),i=n(743);o.default.has("start")||o.default.register(i.Kernel),e.app=o.default;var a=n(238);Object.defineProperty(e,"ServiceProvider",{enumerable:!0,get:function(){return a.ServiceProvider}}),e.default=o.default}},e={};return function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{}};return t[r].call(o.exports,o,o.exports,n),o.exports}(607)})());