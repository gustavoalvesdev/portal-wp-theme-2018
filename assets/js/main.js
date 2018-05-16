/**
 * @license almond 0.3.3 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, http://github.com/requirejs/almond/LICENSE
 */

/*!
Copyright (c) 2011, 2012 Julien Wajsberg <felash@gmail.com>
All rights reserved.

Official repository: https://github.com/julienw/jquery-trap-input
License is there: https://github.com/julienw/jquery-trap-input/blob/master/LICENSE
This is version 1.2.0.
*/

var requirejs,require,define;!function(e){function t(e,t){return E.call(e,t)}function n(e,t){var n,i,r,a,s,o,l,c,u,p,d,_,g=t&&t.split("/"),f=m.map,h=f&&f["*"]||{};if(e){for(e=e.split("/"),s=e.length-1,m.nodeIdCompat&&y.test(e[s])&&(e[s]=e[s].replace(y,"")),"."===e[0].charAt(0)&&g&&(_=g.slice(0,g.length-1),e=_.concat(e)),u=0;u<e.length;u++)if("."===(d=e[u]))e.splice(u,1),u-=1;else if(".."===d){if(0===u||1===u&&".."===e[2]||".."===e[u-1])continue;u>0&&(e.splice(u-1,2),u-=2)}e=e.join("/")}if((g||h)&&f){for(n=e.split("/"),u=n.length;u>0;u-=1){if(i=n.slice(0,u).join("/"),g)for(p=g.length;p>0;p-=1)if((r=f[g.slice(0,p).join("/")])&&(r=r[i])){a=r,o=u;break}if(a)break;!l&&h&&h[i]&&(l=h[i],c=u)}!a&&l&&(a=l,o=c),a&&(n.splice(0,o,a),e=n.join("/"))}return e}function i(t,n){return function(){var i=b.call(arguments,0);return"string"!=typeof i[0]&&1===i.length&&i.push(null),p.apply(e,i.concat([t,n]))}}function r(e){return function(t){return n(t,e)}}function a(e){return function(t){g[e]=t}}function s(n){if(t(f,n)){var i=f[n];delete f[n],h[n]=!0,u.apply(e,i)}if(!t(g,n)&&!t(h,n))throw new Error("No "+n);return g[n]}function o(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function l(e){return e?o(e):[]}function c(e){return function(){return m&&m.config&&m.config[e]||{}}}var u,p,d,_,g={},f={},m={},h={},E=Object.prototype.hasOwnProperty,b=[].slice,y=/\.js$/;d=function(e,t){var i,a=o(e),l=a[0],c=t[1];return e=a[1],l&&(l=n(l,c),i=s(l)),l?e=i&&i.normalize?i.normalize(e,r(c)):n(e,c):(e=n(e,c),a=o(e),l=a[0],e=a[1],l&&(i=s(l))),{f:l?l+"!"+e:e,n:e,pr:l,p:i}},_={require:function(e){return i(e)},exports:function(e){var t=g[e];return void 0!==t?t:g[e]={}},module:function(e){return{id:e,uri:"",exports:g[e],config:c(e)}}},u=function(n,r,o,c){var u,p,m,E,b,y,T,v=[],I=typeof o;if(c=c||n,y=l(c),"undefined"===I||"function"===I){for(r=!r.length&&o.length?["require","exports","module"]:r,b=0;b<r.length;b+=1)if(E=d(r[b],y),"require"===(p=E.f))v[b]=_.require(n);else if("exports"===p)v[b]=_.exports(n),T=!0;else if("module"===p)u=v[b]=_.module(n);else if(t(g,p)||t(f,p)||t(h,p))v[b]=s(p);else{if(!E.p)throw new Error(n+" missing "+p);E.p.load(E.n,i(c,!0),a(p),{}),v[b]=g[p]}m=o?o.apply(g[n],v):void 0,n&&(u&&u.exports!==e&&u.exports!==g[n]?g[n]=u.exports:m===e&&T||(g[n]=m))}else n&&(g[n]=o)},requirejs=require=p=function(t,n,i,r,a){if("string"==typeof t)return _[t]?_[t](n):s(d(t,l(n)).f);if(!t.splice){if(m=t,m.deps&&p(m.deps,m.callback),!n)return;n.splice?(t=n,n=i,i=null):t=e}return n=n||function(){},"function"==typeof i&&(i=r,r=a),r?u(e,t,n,i):setTimeout(function(){u(e,t,n,i)},4),p},p.config=function(e){return p(e)},requirejs._defined=g,define=function(e,n,i){if("string"!=typeof e)throw new Error("See almond README: incorrect module build, no module name");n.splice||(i=n,n=[]),t(g,e)||t(f,e)||(f[e]=[e,n,i])},define.amd={jQuery:!0}}(),define("lib/almond.js",function(){}),define("home",[],function(){"use strict";var e={},t=$("#latest-news-vine"),n=$(".highlight_button-play");e={init:function(){e.bindEvents()},bindEvents:function(){var n=t.attr("data-embed").match(/v=.*/gi)[0].replace("v=","");e.makeIframe(n)},makeIframe:function(e){n.click(function(){t.html("<iframe src=https://www.youtube.com/embed/"+e+'?autoplay=1 frameborder="0" allowfullscreen>')})},brjsReborn:function(){$("body").attr("data-vine",!0),setTimeout(function(){$("#brjs-opening-video").css({opacity:0}),$("body").attr("data-vine",!1)},1e4)}},e.init()}),define("skipLinks",[],function(){"use strict";var e={},t=$("#js-skip-links"),n=$("html, body");e={init:function(){e.bindEvents()},bindEvents:function(){t.on("click","a",function(){var t=$(this),n=t.attr("href");n=n.substring(n.indexOf("#")+1),e.goToSelectedAnchor("#"+n)})},goToSelectedAnchor:function(e){var t=$(e);n.animate({scrollTop:t.offset().top-80},300,function(){t.attr("tabindex",0),t.focus()})}},t.length&&e.init()}),function(e,t){function n(e){if(9===e.keyCode){var t=!!e.shiftKey;i(this,e.target,t)&&(e.preventDefault(),e.stopPropagation())}}function i(e,t,n){var i,r,a,s,l=o(e),c=t;do{switch(i=l.index(c),r=i+1,a=i-1,s=l.length-1,i){case-1:return!1;case 0:a=s;break;case s:r=0}n&&(r=a),c=l.get(r);try{c.focus()}catch(e){}}while(t===t.ownerDocument.activeElement&&c);return!0}function r(){return this.tabIndex>0}function a(){return!this.tabIndex}function s(e,t){return e.t-t.t||e.i-t.i}function o(t){var n=e(t),i=[],o=0;return d.enable&&d.enable(),n.find("a[href], link[href], [draggable=true], [contenteditable=true], :input:enabled, [tabindex=0]").filter(":visible").filter(a).each(function(e,t){i.push({v:t,t:0,i:o++})}),n.find("[tabindex]").filter(":visible").filter(r).each(function(e,t){i.push({v:t,t:t.tabIndex,i:o++})}),d.disable&&d.disable(),i=e.map(i.sort(s),function(e){return e.v}),e(i)}function l(){return this.keydown(n),this.data(p,!0),this}function c(){return this.unbind("keydown",n),this.removeData(p),this}function u(){return!!this.data(p)}var p="trap.isTrapping";e.fn.extend({trap:l,untrap:c,isTrapping:u});var d={};e.find.find&&e.find.attr!==e.attr&&function(){function n(e){var n=e.getAttributeNode(a);return n&&n.specified?parseInt(n.value,10):t}function i(){s[a]=s.tabIndex=n}function r(){delete s[a],delete s.tabIndex}var a="tabindex",s=e.expr.attrHandle;d={enable:i,disable:r}}()}(jQuery),define("trap",function(){}),define("navigation",["trap"],function(){"use strict";var e={},t=$("#js-body"),n=$("#js-navigation-wrapper"),i=($("#js-navigation-list"),$("#js-navigation-toogler"));i.find(".navigation-toogler__burguer:first"),$("#js-acessibility-menu");return e.options={},e.options.oppened=!1,e.methods={init:function(){e.methods.bindMobileBehaviours()},bindMobileBehaviours:function(){i.on("click",function(){e.methods.toogleNavigation()}),$(document).keyup(function(t){27===t.keyCode&&e.options.oppened&&e.methods.toogleNavigation()})},toogleNavigation:function(){e.options.oppened?(t.off("click.openMenu"),t.off("touchmove"),e.options.oppened=!1,n.untrap()):(e.options.oppened=!0,e.methods.outsideClickCloseMenu(),t.on("touchmove",function(e){e.preventDefault()}),n.trap()),n.toggleClass("is-open"),t.toggleClass("navigation-is-open")},outsideClickCloseMenu:function(){setTimeout(function(){t.on("click.openMenu",function(t){$(t.target).is(n)&&e.options.oppened&&e.methods.toogleNavigation()})},0)}},e.methods.init()}),function(e,t,n){"use strict";var i=function(e,t){var n,i={};for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&(i[n]=e[n]);for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n]);return i},r=function(e){var n=e.getBoundingClientRect();return{top:n.top+t.body.scrollTop,left:n.left+t.body.scrollLeft}},a=function(e,n){var i=t.createElement("script");i.src=e,i.async=!0,i.setAttribute("data-timestamp",+new Date),i.addEventListener("load",function(){"function"==typeof n&&n()}),(t.head||t.body).appendChild(i)},s=function(e,t){var n,i;return function(){var r=this,a=arguments,s=+new Date;n&&s<n+e?(clearTimeout(i),i=setTimeout(function(){n=s,t.apply(r,a)},e)):(n=s,t.apply(r,a))}},o=!1,l=!1,c=!1,u=!1,p="unloaded",d=!1,_=function(){if(!d||!t.body.contains(d)||"loaded"==d.disqusLoaderStatus)return!0;var n=e.pageYOffset,i=r(d).top;if(i-n>e.innerHeight*l||n-i-d.offsetHeight-e.innerHeight*l>0)return!0;var s=t.getElementById("disqus_thread");s&&s.removeAttribute("id"),d.setAttribute("id","disqus_thread"),d.disqusLoaderStatus="loaded","loaded"==p?DISQUS.reset({reload:!0,config:c}):(e.disqus_config=c,"unloaded"==p&&(p="loading",a(u,function(){p="loaded"})))};e.addEventListener("scroll",s(o,_)),e.addEventListener("resize",s(o,_)),e.disqusLoader=function(e,n){n=i({laziness:1,throttle:250,scriptUrl:!1,disqusConfig:!1},n),l=n.laziness+1,o=n.throttle,c=n.disqusConfig,u=!1===u?n.scriptUrl:u,d="string"==typeof e?t.querySelector(e):"number"==typeof e.length?e[0]:e,d.disqusLoaderStatus="unloaded",_()}}(window,document),define("disqusLoader",function(){});var _self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},Prism=function(){var e=/\blang(?:uage)?-(\w+)\b/i,t=0,n=_self.Prism={util:{encode:function(e){return e instanceof i?new i(e.type,n.util.encode(e.content),e.alias):"Array"===n.util.type(e)?e.map(n.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function(e){switch(n.util.type(e)){case"Object":var t={};for(var i in e)e.hasOwnProperty(i)&&(t[i]=n.util.clone(e[i]));return t;case"Array":return e.map&&e.map(function(e){return n.util.clone(e)})}return e}},languages:{extend:function(e,t){var i=n.util.clone(n.languages[e]);for(var r in t)i[r]=t[r];return i},insertBefore:function(e,t,i,r){r=r||n.languages;var a=r[e];if(2==arguments.length){i=arguments[1];for(var s in i)i.hasOwnProperty(s)&&(a[s]=i[s]);return a}var o={};for(var l in a)if(a.hasOwnProperty(l)){if(l==t)for(var s in i)i.hasOwnProperty(s)&&(o[s]=i[s]);o[l]=a[l]}return n.languages.DFS(n.languages,function(t,n){n===r[e]&&t!=e&&(this[t]=o)}),r[e]=o},DFS:function(e,t,i,r){r=r||{};for(var a in e)e.hasOwnProperty(a)&&(t.call(e,a,e[a],i||a),"Object"!==n.util.type(e[a])||r[n.util.objId(e[a])]?"Array"!==n.util.type(e[a])||r[n.util.objId(e[a])]||(r[n.util.objId(e[a])]=!0,n.languages.DFS(e[a],t,a,r)):(r[n.util.objId(e[a])]=!0,n.languages.DFS(e[a],t,null,r)))}},plugins:{},highlightAll:function(e,t){var i={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};n.hooks.run("before-highlightall",i);for(var r,a=i.elements||document.querySelectorAll(i.selector),s=0;r=a[s++];)n.highlightElement(r,!0===e,i.callback)},highlightElement:function(t,i,r){for(var a,s,o=t;o&&!e.test(o.className);)o=o.parentNode;o&&(a=(o.className.match(e)||[,""])[1].toLowerCase(),s=n.languages[a]),t.className=t.className.replace(e,"").replace(/\s+/g," ")+" language-"+a,o=t.parentNode,/pre/i.test(o.nodeName)&&(o.className=o.className.replace(e,"").replace(/\s+/g," ")+" language-"+a);var l=t.textContent,c={element:t,language:a,grammar:s,code:l};if(n.hooks.run("before-sanity-check",c),!c.code||!c.grammar)return void n.hooks.run("complete",c);if(n.hooks.run("before-highlight",c),i&&_self.Worker){var u=new Worker(n.filename);u.onmessage=function(e){c.highlightedCode=e.data,n.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,r&&r.call(c.element),n.hooks.run("after-highlight",c),n.hooks.run("complete",c)},u.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else c.highlightedCode=n.highlight(c.code,c.grammar,c.language),n.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,r&&r.call(t),n.hooks.run("after-highlight",c),n.hooks.run("complete",c)},highlight:function(e,t,r){var a=n.tokenize(e,t);return i.stringify(n.util.encode(a),r)},tokenize:function(e,t){var i=n.Token,r=[e],a=t.rest;if(a){for(var s in a)t[s]=a[s];delete t.rest}e:for(var s in t)if(t.hasOwnProperty(s)&&t[s]){var o=t[s];o="Array"===n.util.type(o)?o:[o];for(var l=0;l<o.length;++l){var c=o[l],u=c.inside,p=!!c.lookbehind,d=!!c.greedy,_=0,g=c.alias;if(d&&!c.pattern.global){var f=c.pattern.toString().match(/[imuy]*$/)[0];c.pattern=RegExp(c.pattern.source,f+"g")}c=c.pattern||c;for(var m=0,h=0;m<r.length;h+=(r[m].matchedStr||r[m]).length,++m){var E=r[m];if(r.length>e.length)break e;if(!(E instanceof i)){c.lastIndex=0;var b=c.exec(E),y=1;if(!b&&d&&m!=r.length-1){if(c.lastIndex=h,!(b=c.exec(e)))break;for(var T=b.index+(p?b[1].length:0),v=b.index+b[0].length,I=m,k=h,A=r.length;A>I&&v>k;++I)k+=(r[I].matchedStr||r[I]).length,T>=k&&(++m,h=k);if(r[m]instanceof i||r[I-1].greedy)continue;y=I-m,E=e.slice(h,k),b.index-=h}if(b){p&&(_=b[1].length);var T=b.index+_,b=b[0].slice(_),v=T+b.length,w=E.slice(0,T),N=E.slice(v),R=[m,y];w&&R.push(w);var S=new i(s,u?n.tokenize(b,u):b,g,b,d);R.push(S),N&&R.push(N),Array.prototype.splice.apply(r,R)}}}}}return r},hooks:{all:{},add:function(e,t){var i=n.hooks.all;i[e]=i[e]||[],i[e].push(t)},run:function(e,t){var i=n.hooks.all[e];if(i&&i.length)for(var r,a=0;r=i[a++];)r(t)}}},i=n.Token=function(e,t,n,i,r){this.type=e,this.content=t,this.alias=n,this.matchedStr=i||null,this.greedy=!!r};if(i.stringify=function(e,t,r){if("string"==typeof e)return e;if("Array"===n.util.type(e))return e.map(function(n){return i.stringify(n,t,e)}).join("");var a={type:e.type,content:i.stringify(e.content,t,r),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:r};if("comment"==a.type&&(a.attributes.spellcheck="true"),e.alias){var s="Array"===n.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(a.classes,s)}n.hooks.run("wrap",a);var o="";for(var l in a.attributes)o+=(o?" ":"")+l+'="'+(a.attributes[l]||"")+'"';return"<"+a.tag+' class="'+a.classes.join(" ")+'"'+(o?" "+o:"")+">"+a.content+"</"+a.tag+">"},!_self.document)return _self.addEventListener?(_self.addEventListener("message",function(e){var t=JSON.parse(e.data),i=t.language,r=t.code,a=t.immediateClose;_self.postMessage(n.highlight(r,n.languages[i],i)),a&&_self.close()},!1),_self.Prism):_self.Prism;var r=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return r&&(n.filename=r.src,document.addEventListener&&!r.hasAttribute("data-manual")&&("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(n.highlightAll):window.setTimeout(n.highlightAll,16):document.addEventListener("DOMContentLoaded",n.highlightAll))),_self.Prism}();"undefined"!=typeof module&&module.exports&&(module.exports=Prism),"undefined"!=typeof global&&(global.Prism=Prism),Prism.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/i,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Prism.languages.xml=Prism.languages.markup,Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:{pattern:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,greedy:!0},property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},Prism.languages.css.atrule.inside.rest=Prism.util.clone(Prism.languages.css),Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,lookbehind:!0,inside:Prism.languages.css,alias:"language-css"}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag)),Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:{pattern:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(true|false)\b/,function:/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,function:/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*\*?|\/|~|\^|%|\.{3}/}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0,greedy:!0}}),Prism.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\\\|\\?[^\\])*?`/,greedy:!0,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,lookbehind:!0,inside:Prism.languages.javascript,alias:"language-javascript"}}),Prism.languages.js=Prism.languages.javascript,function(e){var t={variable:[{pattern:/\$?\(\([\w\W]+?\)\)/,inside:{variable:[{pattern:/(^\$\(\([\w\W]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b-?(?:0x[\dA-Fa-f]+|\d*\.?\d+(?:[Ee]-?\d+)?)\b/,operator:/--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\([^)]+\)|`[^`]+`/,inside:{variable:/^\$\(|^`|\)$|`$/}},/\$(?:[a-z0-9_#\?\*!@]+|\{[^}]+\})/i]};e.languages.bash={shebang:{pattern:/^#!\s*\/bin\/bash|^#!\s*\/bin\/sh/,alias:"important"},comment:{pattern:/(^|[^"{\\])#.*/,lookbehind:!0},string:[{pattern:/((?:^|[^<])<<\s*)(?:"|')?(\w+?)(?:"|')?\s*\r?\n(?:[\s\S])*?\r?\n\2/g,lookbehind:!0,greedy:!0,inside:t},{pattern:/(["'])(?:\\\\|\\?[^\\])*?\1/g,greedy:!0,inside:t}],variable:t.variable,function:{pattern:/(^|\s|;|\||&)(?:alias|apropos|apt-get|aptitude|aspell|awk|basename|bash|bc|bg|builtin|bzip2|cal|cat|cd|cfdisk|chgrp|chmod|chown|chroot|chkconfig|cksum|clear|cmp|comm|command|cp|cron|crontab|csplit|cut|date|dc|dd|ddrescue|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|enable|env|ethtool|eval|exec|expand|expect|export|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|getopts|git|grep|groupadd|groupdel|groupmod|groups|gzip|hash|head|help|hg|history|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|jobs|join|kill|killall|less|link|ln|locate|logname|logout|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|make|man|mkdir|mkfifo|mkisofs|mknod|more|most|mount|mtools|mtr|mv|mmv|nano|netstat|nice|nl|nohup|notify-send|npm|nslookup|open|op|passwd|paste|pathchk|ping|pkill|popd|pr|printcap|printenv|printf|ps|pushd|pv|pwd|quota|quotacheck|quotactl|ram|rar|rcp|read|readarray|readonly|reboot|rename|renice|remsync|rev|rm|rmdir|rsync|screen|scp|sdiff|sed|seq|service|sftp|shift|shopt|shutdown|sleep|slocate|sort|source|split|ssh|stat|strace|su|sudo|sum|suspend|sync|tail|tar|tee|test|time|timeout|times|touch|top|traceroute|trap|tr|tsort|tty|type|ulimit|umask|umount|unalias|uname|unexpand|uniq|units|unrar|unshar|uptime|useradd|userdel|usermod|users|uuencode|uudecode|v|vdir|vi|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yes|zip)(?=$|\s|;|\||&)/,lookbehind:!0},keyword:{pattern:/(^|\s|;|\||&)(?:let|:|\.|if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)(?=$|\s|;|\||&)/,lookbehind:!0},boolean:{pattern:/(^|\s|;|\||&)(?:true|false)(?=$|\s|;|\||&)/,lookbehind:!0},operator:/&&?|\|\|?|==?|!=?|<<<?|>>|<=?|>=?|=~/,punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];]/};var n=t.variable[1].inside;n.function=e.languages.bash.function,n.keyword=e.languages.bash.keyword,n.boolean=e.languages.bash.boolean,n.operator=e.languages.bash.operator,n.punctuation=e.languages.bash.punctuation}(Prism),Prism.languages.git={comment:/^#.*/m,deleted:/^[-–].*/m,inserted:/^\+.*/m,string:/("|')(\\?.)*?\1/m,command:{pattern:/^.*\$ git .*$/m,inside:{parameter:/\s(--|-)\w+/m}},coord:/^@@.*@@$/m,commit_sha1:/^commit \w{40}$/m},Prism.languages.http={"request-line":{pattern:/^(POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b\shttps?:\/\/\S+\sHTTP\/[0-9.]+/m,inside:{property:/^(POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/,"attr-name":/:\w+/}},"response-status":{pattern:/^HTTP\/1.[01] [0-9]+.*/m,inside:{property:{pattern:/(^HTTP\/1.[01] )[0-9]+.*/i,lookbehind:!0}}},"header-name":{pattern:/^[\w-]+:(?=.)/m,alias:"keyword"}};var httpLanguages={"application/json":Prism.languages.javascript,"application/xml":Prism.languages.markup,"text/xml":Prism.languages.markup,"text/html":Prism.languages.markup};for(var contentType in httpLanguages)if(httpLanguages[contentType]){var options={};options[contentType]={pattern:new RegExp("(content-type:\\s*"+contentType+"[\\w\\W]*?)(?:\\r?\\n|\\r){2}[\\w\\W]*","i"),lookbehind:!0,inside:{rest:httpLanguages[contentType]}},Prism.languages.insertBefore("http","header-name",options)}Prism.languages.json={property:/"(?:\\.|[^|"])*"(?=\s*:)/gi,string:/"(?!:)(?:\\.|[^|"])*"(?!:)/g,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?)\b/g,punctuation:/[{}[\]);,]/g,operator:/:/g,boolean:/\b(true|false)\b/gi,null:/\bnull\b/gi},Prism.languages.jsonp=Prism.languages.json,Prism.languages.markdown=Prism.languages.extend("markup",{}),Prism.languages.insertBefore("markdown","prolog",{blockquote:{pattern:/^>(?:[\t ]*>)*/m,alias:"punctuation"},code:[{pattern:/^(?: {4}|\t).+/m,alias:"keyword"},{pattern:/``.+?``|`[^`\n]+`/,alias:"keyword"}],title:[{pattern:/\w+.*(?:\r?\n|\r)(?:==+|--+)/,alias:"important",inside:{punctuation:/==+$|--+$/}},{pattern:/(^\s*)#+.+/m,lookbehind:!0,alias:"important",inside:{punctuation:/^#+|#+$/}}],hr:{pattern:/(^\s*)([*-])([\t ]*\2){2,}(?=\s*$)/m,lookbehind:!0,alias:"punctuation"},list:{pattern:/(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,lookbehind:!0,alias:"punctuation"},"url-reference":{pattern:/!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,inside:{variable:{pattern:/^(!?\[)[^\]]+/,lookbehind:!0},string:/(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,punctuation:/^[\[\]!:]|[<>]/},alias:"url"},bold:{pattern:/(^|[^\\])(\*\*|__)(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,lookbehind:!0,inside:{punctuation:/^\*\*|^__|\*\*$|__$/}},italic:{pattern:/(^|[^\\])([*_])(?:(?:\r?\n|\r)(?!\r?\n|\r)|.)+?\2/,lookbehind:!0,inside:{punctuation:/^[*_]|[*_]$/}},url:{pattern:/!?\[[^\]]+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[[^\]\n]*\])/,inside:{variable:{pattern:/(!?\[)[^\]]+(?=\]$)/,lookbehind:!0},string:{pattern:/"(?:\\.|[^"\\])*"(?=\)$)/}}}}),Prism.languages.markdown.bold.inside.url=Prism.util.clone(Prism.languages.markdown.url),Prism.languages.markdown.italic.inside.url=Prism.util.clone(Prism.languages.markdown.url),Prism.languages.markdown.bold.inside.italic=Prism.util.clone(Prism.languages.markdown.italic),Prism.languages.markdown.italic.inside.bold=Prism.util.clone(Prism.languages.markdown.bold),Prism.languages.nginx=Prism.languages.extend("clike",{comment:{pattern:/(^|[^"{\\])#.*/,lookbehind:!0},keyword:/\b(?:CONTENT_|DOCUMENT_|GATEWAY_|HTTP_|HTTPS|if_not_empty|PATH_|QUERY_|REDIRECT_|REMOTE_|REQUEST_|SCGI|SCRIPT_|SERVER_|http|server|events|location|include|accept_mutex|accept_mutex_delay|access_log|add_after_body|add_before_body|add_header|addition_types|aio|alias|allow|ancient_browser|ancient_browser_value|auth|auth_basic|auth_basic_user_file|auth_http|auth_http_header|auth_http_timeout|autoindex|autoindex_exact_size|autoindex_localtime|break|charset|charset_map|charset_types|chunked_transfer_encoding|client_body_buffer_size|client_body_in_file_only|client_body_in_single_buffer|client_body_temp_path|client_body_timeout|client_header_buffer_size|client_header_timeout|client_max_body_size|connection_pool_size|create_full_put_path|daemon|dav_access|dav_methods|debug_connection|debug_points|default_type|deny|devpoll_changes|devpoll_events|directio|directio_alignment|disable_symlinks|empty_gif|env|epoll_events|error_log|error_page|expires|fastcgi_buffer_size|fastcgi_buffers|fastcgi_busy_buffers_size|fastcgi_cache|fastcgi_cache_bypass|fastcgi_cache_key|fastcgi_cache_lock|fastcgi_cache_lock_timeout|fastcgi_cache_methods|fastcgi_cache_min_uses|fastcgi_cache_path|fastcgi_cache_purge|fastcgi_cache_use_stale|fastcgi_cache_valid|fastcgi_connect_timeout|fastcgi_hide_header|fastcgi_ignore_client_abort|fastcgi_ignore_headers|fastcgi_index|fastcgi_intercept_errors|fastcgi_keep_conn|fastcgi_max_temp_file_size|fastcgi_next_upstream|fastcgi_no_cache|fastcgi_param|fastcgi_pass|fastcgi_pass_header|fastcgi_read_timeout|fastcgi_redirect_errors|fastcgi_send_timeout|fastcgi_split_path_info|fastcgi_store|fastcgi_store_access|fastcgi_temp_file_write_size|fastcgi_temp_path|flv|geo|geoip_city|geoip_country|google_perftools_profiles|gzip|gzip_buffers|gzip_comp_level|gzip_disable|gzip_http_version|gzip_min_length|gzip_proxied|gzip_static|gzip_types|gzip_vary|if|if_modified_since|ignore_invalid_headers|image_filter|image_filter_buffer|image_filter_jpeg_quality|image_filter_sharpen|image_filter_transparency|imap_capabilities|imap_client_buffer|include|index|internal|ip_hash|keepalive|keepalive_disable|keepalive_requests|keepalive_timeout|kqueue_changes|kqueue_events|large_client_header_buffers|limit_conn|limit_conn_log_level|limit_conn_zone|limit_except|limit_rate|limit_rate_after|limit_req|limit_req_log_level|limit_req_zone|limit_zone|lingering_close|lingering_time|lingering_timeout|listen|location|lock_file|log_format|log_format_combined|log_not_found|log_subrequest|map|map_hash_bucket_size|map_hash_max_size|master_process|max_ranges|memcached_buffer_size|memcached_connect_timeout|memcached_next_upstream|memcached_pass|memcached_read_timeout|memcached_send_timeout|merge_slashes|min_delete_depth|modern_browser|modern_browser_value|mp4|mp4_buffer_size|mp4_max_buffer_size|msie_padding|msie_refresh|multi_accept|open_file_cache|open_file_cache_errors|open_file_cache_min_uses|open_file_cache_valid|open_log_file_cache|optimize_server_names|override_charset|pcre_jit|perl|perl_modules|perl_require|perl_set|pid|pop3_auth|pop3_capabilities|port_in_redirect|post_action|postpone_output|protocol|proxy|proxy_buffer|proxy_buffer_size|proxy_buffering|proxy_buffers|proxy_busy_buffers_size|proxy_cache|proxy_cache_bypass|proxy_cache_key|proxy_cache_lock|proxy_cache_lock_timeout|proxy_cache_methods|proxy_cache_min_uses|proxy_cache_path|proxy_cache_use_stale|proxy_cache_valid|proxy_connect_timeout|proxy_cookie_domain|proxy_cookie_path|proxy_headers_hash_bucket_size|proxy_headers_hash_max_size|proxy_hide_header|proxy_http_version|proxy_ignore_client_abort|proxy_ignore_headers|proxy_intercept_errors|proxy_max_temp_file_size|proxy_method|proxy_next_upstream|proxy_no_cache|proxy_pass|proxy_pass_error_message|proxy_pass_header|proxy_pass_request_body|proxy_pass_request_headers|proxy_read_timeout|proxy_redirect|proxy_redirect_errors|proxy_send_lowat|proxy_send_timeout|proxy_set_body|proxy_set_header|proxy_ssl_session_reuse|proxy_store|proxy_store_access|proxy_temp_file_write_size|proxy_temp_path|proxy_timeout|proxy_upstream_fail_timeout|proxy_upstream_max_fails|random_index|read_ahead|real_ip_header|recursive_error_pages|request_pool_size|reset_timedout_connection|resolver|resolver_timeout|return|rewrite|root|rtsig_overflow_events|rtsig_overflow_test|rtsig_overflow_threshold|rtsig_signo|satisfy|satisfy_any|secure_link_secret|send_lowat|send_timeout|sendfile|sendfile_max_chunk|server|server_name|server_name_in_redirect|server_names_hash_bucket_size|server_names_hash_max_size|server_tokens|set|set_real_ip_from|smtp_auth|smtp_capabilities|so_keepalive|source_charset|split_clients|ssi|ssi_silent_errors|ssi_types|ssi_value_length|ssl|ssl_certificate|ssl_certificate_key|ssl_ciphers|ssl_client_certificate|ssl_crl|ssl_dhparam|ssl_engine|ssl_prefer_server_ciphers|ssl_protocols|ssl_session_cache|ssl_session_timeout|ssl_verify_client|ssl_verify_depth|starttls|stub_status|sub_filter|sub_filter_once|sub_filter_types|tcp_nodelay|tcp_nopush|timeout|timer_resolution|try_files|types|types_hash_bucket_size|types_hash_max_size|underscores_in_headers|uninitialized_variable_warn|upstream|use|user|userid|userid_domain|userid_expires|userid_name|userid_p3p|userid_path|userid_service|valid_referers|variables_hash_bucket_size|variables_hash_max_size|worker_connections|worker_cpu_affinity|worker_priority|worker_processes|worker_rlimit_core|worker_rlimit_nofile|worker_rlimit_sigpending|working_directory|xclient|xml_entities|xslt_entities|xslt_stylesheet|xslt_types)\b/i}),Prism.languages.insertBefore("nginx","keyword",{variable:/\$[a-z_]+/i}),Prism.languages.python={"triple-quoted-string":{pattern:/"""[\s\S]+?"""|'''[\s\S]+?'''/,alias:"string"},comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0},string:{pattern:/("|')(?:\\\\|\\?[^\\\r\n])*?\1/,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_][a-zA-Z0-9_]*(?=\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)[a-z0-9_]+/i,lookbehind:!0},keyword:/\b(?:as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|pass|print|raise|return|try|while|with|yield)\b/,boolean:/\b(?:True|False)\b/,number:/\b-?(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,operator:/[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not)\b/,punctuation:/[{}[\];(),.:]/},function(e){var t=e.util.clone(e.languages.javascript);e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=/<\/?[\w\.:-]+\s*(?:\s+[\w\.:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+|(\{[\w\W]*?\})))?\s*)*\/?>/i,e.languages.jsx.tag.inside["attr-value"].pattern=/=[^\{](?:('|")[\w\W]*?(\1)|[^\s>]+)/i;var n=e.util.clone(e.languages.jsx);delete n.punctuation,n=e.languages.insertBefore("jsx","operator",{punctuation:/=(?={)|[{}[\];(),.:]/},{jsx:n}),e.languages.insertBefore("inside","attr-value",{script:{pattern:/=(\{(?:\{[^}]*\}|[^}])+\})/i,inside:n,alias:"language-javascript"}},e.languages.jsx.tag)}(Prism),Prism.languages.sql={comment:{pattern:/(^|[^\\])(?:\/\*[\w\W]*?\*\/|(?:--|\/\/|#).*)/,lookbehind:!0},string:{pattern:/(^|[^@\\])("|')(?:\\?[\s\S])*?\2/,lookbehind:!0},variable:/@[\w.$]+|@("|'|`)(?:\\?[\s\S])+?\1/,function:/\b(?:COUNT|SUM|AVG|MIN|MAX|FIRST|LAST|UCASE|LCASE|MID|LEN|ROUND|NOW|FORMAT)(?=\s*\()/i,
keyword:/\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR VARYING|CHARACTER (?:SET|VARYING)|CHARSET|CHECK|CHECKPOINT|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMN|COLUMNS|COMMENT|COMMIT|COMMITTED|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS|CONTAINSTABLE|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|DATA(?:BASES?)?|DATE(?:TIME)?|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITER(?:S)?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE(?: PRECISION)?|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE KEY|ELSE|ENABLE|ENCLOSED BY|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPE(?:D BY)?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTO|INVOKER|ISOLATION LEVEL|JOIN|KEYS?|KILL|LANGUAGE SQL|LAST|LEFT|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MODIFIES SQL DATA|MODIFY|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL(?: CHAR VARYING| CHARACTER(?: VARYING)?| VARCHAR)?|NATURAL|NCHAR(?: VARCHAR)?|NEXT|NO(?: SQL|CHECK|CYCLE)?|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READ(?:S SQL DATA|TEXT)?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEATABLE|REPLICATION|REQUIRE|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE MODE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|START(?:ING BY)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED BY|TEXT(?:SIZE)?|THEN|TIMESTAMP|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNPIVOT|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?)\b/i,boolean:/\b(?:TRUE|FALSE|NULL)\b/i,number:/\b-?(?:0x)?\d*\.?[\da-f]+\b/,operator:/[-+*\/=%^~]|&&?|\|?\||!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,punctuation:/[;[\]()`,.]/},Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield|module|declare|constructor|string|Function|any|number|boolean|Array|enum)\b/}),define("prism",function(){}),define("article",["disqusLoader","prism"],function(){"use strict";var e={},t=document.getElementById("article");e={init:function(){e.loadDisqus()},loadDisqus:function(){}},t&&e.init()}),define("confSchedule",[],function(){"use strict";var e={},t=$("#js-schedule-container");e={init:function(){e.bindEvents()},bindEvents:function(){t.on("click",".schedule__title-button",function(){e.toogleDescription($(this))})},toogleDescription:function(e){e.parents(".schedule__item").toggleClass("is-open")}},t.length&&e.init()}),define("brjsAlura",[],function(){"use strict";var e={},t=$("#card-wrapper-list");e={init:function(){e.bindEvents()},bindEvents:function(){fetch("https://www.alura.com.br/api/cursos-em-destaque",{method:"GET"}).then(function(t){t.json().then(function(t){e.makeList(t.cursosEmDestaque)})}).catch(function(e){console.error("Failed retrieving information",e)})},makeList:function(e){e.forEach(function(e){t.append('<li class="article-list__item col-4-12"><div class="card"><div class="card__header"><a class="media-wrapper" role="presentation" aria-hidden="true" href="'+e.url+'"><img class="media-wrapper__thumb card__thumb card__thumb__alura" src="'+e.icone+'" style="min-width: 135px;"></a></div><div class="card__content"><h3 class="card__title"><a href="'+e.url+'">'+e.nome+"</a></h3></div></div></li>")})}},e.init()}),define("conf",[],function(){var e={},t=($("body"),$("#brjs-countdown"));e={init:function(){e.headerAnim()},headerAnim:function(){$(document).ready(function(){$.getScript(window.THEME_PATH+"/media/particle.js",function(){particlesJS.load("particles-js",window.THEME_PATH+"/media/particlesjs-config.json",function(){})})})},countDownClock:function(){var e=new Date,n=new Date(2018,7,24,0,0,0),i=parseInt((n-e)/1e3),r=parseInt(i/60),a=parseInt(r/60),s=parseInt(a/24);i-=60*r,r-=60*a,a-=24*s,day=s&&s>1?s:"",hour=toString(a).length?a<10?"0"+a:a:"",minut=toString(r).length?r<10?"0"+r:r:"",second=i<10?"0"+i:i,s+a+r+i>0&&($("#dd").html(day),$("#hh").html(hour),$("#mm").html(minut),$("#ss").html(second)),t.fadeIn("slow")},avatarCall4Paper:function(){var e=new Image,t=$("#bg-call4paper"),n=Math.floor(5*Math.random())+1;const i="https://braziljs.org/wp-content/uploads/2018/02/icon-"+n+"-opt-avatar.svg";e.onload=function(){t.css("backgroundImage","url("+i+")")},e.src=i}},e.init()}),function(){"use strict";var e={},t={};t.init=function(){require.config({paths:{home:"modules/home",skipLinks:"modules/skip-links",navigation:"modules/navigation",article:"modules/article",conf:"modules/conf",disqusLoader:"plugins/disqusloader",confSchedule:"modules/conf-schedule",prism:"plugins/prism",trap:"plugins/trap",brjsAlura:"modules/brjsAlura"}}),e.init()},e.init=function(){e.home(),e.skipLinks(),e.navigation(),e.article(),e.confSchedule(),e.brjsAlura(),e.conf()},e.home=function(){document.getElementById("home")&&require(["home"])},e.skipLinks=function(){document.getElementById("js-skip-links")&&require(["skipLinks"])},e.navigation=function(){document.getElementById("js-navigation-wrapper")&&require(["navigation"])},e.article=function(){document.getElementById("article")&&require(["article"])},e.confSchedule=function(){document.getElementById("js-schedule-container")&&require(["confSchedule"])},e.brjsAlura=function(){document.getElementById("braziljs_alura")&&require(["brjsAlura"])},e.conf=function(){document.getElementById("js-conf-page")&&require(["conf"])},t.init()}(),define("main",function(){});