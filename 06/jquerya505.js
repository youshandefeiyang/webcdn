/*! jQuery  jquery.com | jquery.org/license */
(function(e,t){function _(e){var t=M[e]={};return v.each(e.split(y),function(e,n){t[n]=!0}),t}function H(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(P,"-$1").toLowerCase();r=e.getAttribute(i);if(typeof r=="string"){try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:D.test(r)?v.parseJSON(r):r}catch(s){}v.data(e,n,r)}else r=t}return r}function B(e){var t;for(t in e){if(t==="data"&&v.isEmptyObject(e[t]))continue;if(t!=="toJSON")return!1}return!0}function et(){return!1}function tt(){return!0}function ut(e){return!e||!e.parentNode||e.parentNode.nodeType===11}function at(e,t){do e=e[t];while(e&&e.nodeType!==1);return e}function ft(e,t,n){t=t||0;if(v.isFunction(t))return v.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return v.grep(e,function(e,r){return e===t===n});if(typeof t=="string"){var r=v.grep(e,function(e){return e.nodeType===1});if(it.test(t))return v.filter(t,r,!n);t=v.filter(t,r)}return v.grep(e,function(e,r){return v.inArray(e,t)>=0===n})}function lt(e){var t=ct.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function At(e,t){if(t.nodeType!==1||!v.hasData(e))return;var n,r,i,s=v._data(e),o=v._data(t,s),u=s.events;if(u){delete o.handle,o.events={};for(n in u)for(r=0,i=u[n].length;r<i;r++)v.event.add(t,n,u[n][r])}o.data&&(o.data=v.extend({},o.data))}function Ot(e,t){var n;if(t.nodeType!==1)return;t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),n==="object"?(t.parentNode&&(t.outerHTML=e.outerHTML),v.support.html5Clone&&e.innerHTML&&!v.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):n==="input"&&Et.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):n==="option"?t.selected=e.defaultSelected:n==="input"||n==="textarea"?t.defaultValue=e.defaultValue:n==="script"&&t.text!==e.text&&(t.text=e.text),t.removeAttribute(v.expando)}function Mt(e){return typeof e.getElementsByTagName!="undefined"?e.getElementsByTagName("*"):typeof e.querySelectorAll!="undefined"?e.querySelectorAll("*"):[]}function _t(e){Et.test(e.type)&&(e.defaultChecked=e.checked)}function Qt(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Jt.length;while(i--){t=Jt[i]+n;if(t in e)return t}return r}function Gt(e,t){return e=t||e,v.css(e,"display")==="none"||!v.contains(e.ownerDocument,e)}function Yt(e,t){var n,r,i=[],s=0,o=e.length;for(;s<o;s++){n=e[s];if(!n.style)continue;i[s]=v._data(n,"olddisplay"),t?(!i[s]&&n.style.display==="none"&&(n.style.display=""),n.style.display===""&&Gt(n)&&(i[s]=v._data(n,"olddisplay",nn(n.nodeName)))):(r=Dt(n,"display"),!i[s]&&r!=="none"&&v._data(n,"olddisplay",r))}for(s=0;s<o;s++){n=e[s];if(!n.style)continue;if(!t||n.style.display==="none"||n.style.display==="")n.style.display=t?i[s]||"":"none"}return e}function Zt(e,t,n){var r=Rt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function en(e,t,n,r){var i=n===(r?"border":"content")?4:t==="width"?1:0,s=0;for(;i<4;i+=2)n==="margin"&&(s+=v.css(e,n+$t[i],!0)),r?(n==="content"&&(s-=parseFloat(Dt(e,"padding"+$t[i]))||0),n!=="margin"&&(s-=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0)):(s+=parseFloat(Dt(e,"padding"+$t[i]))||0,n!=="padding"&&(s+=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0));return s}function tn(e,t,n){var r=t==="width"?e.offsetWidth:e.offsetHeight,i=!0,s=v.support.boxSizing&&v.css(e,"boxSizing")==="border-box";if(r<=0||r==null){r=Dt(e,t);if(r<0||r==null)r=e.style[t];if(Ut.test(r))return r;i=s&&(v.support.boxSizingReliable||r===e.style[t]),r=parseFloat(r)||0}return r+en(e,t,n||(s?"border":"content"),i)+"px"}function nn(e){if(Wt[e])return Wt[e];var t=v("<"+e+">").appendTo(i.body),n=t.css("display");t.remove();if(n==="none"||n===""){Pt=i.body.appendChild(Pt||v.extend(i.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!Ht||!Pt.createElement)Ht=(Pt.contentWindow||Pt.contentDocument).document,Ht.write("<!doctype html><html><body>"),Ht.close();t=Ht.body.appendChild(Ht.createElement(e)),n=Dt(t,"display"),i.body.removeChild(Pt)}return Wt[e]=n,n}function fn(e,t,n,r){var i;if(v.isArray(t))v.each(t,function(t,i){n||sn.test(e)?r(e,i):fn(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)});else if(!n&&v.type(t)==="object")for(i in t)fn(e+"["+i+"]",t[i],n,r);else r(e,t)}function Cn(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var r,i,s,o=t.toLowerCase().split(y),u=0,a=o.length;if(v.isFunction(n))for(;u<a;u++)r=o[u],s=/^\+/.test(r),s&&(r=r.substr(1)||"*"),i=e[r]=e[r]||[],i[s?"unshift":"push"](n)}}function kn(e,n,r,i,s,o){s=s||n.dataTypes[0],o=o||{},o[s]=!0;var u,a=e[s],f=0,l=a?a.length:0,c=e===Sn;for(;f<l&&(c||!u);f++)u=a[f](n,r,i),typeof u=="string"&&(!c||o[u]?u=t:(n.dataTypes.unshift(u),u=kn(e,n,r,i,u,o)));return(c||!u)&&!o["*"]&&(u=kn(e,n,r,i,"*",o)),u}function Ln(e,n){var r,i,s=v.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((s[r]?e:i||(i={}))[r]=n[r]);i&&v.extend(!0,e,i)}function An(e,n,r){var i,s,o,u,a=e.contents,f=e.dataTypes,l=e.responseFields;for(s in l)s in r&&(n[l[s]]=r[s]);while(f[0]==="*")f.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("content-type"));if(i)for(s in a)if(a[s]&&a[s].test(i)){f.unshift(s);break}if(f[0]in r)o=f[0];else{for(s in r){if(!f[0]||e.converters[s+" "+f[0]]){o=s;break}u||(u=s)}o=o||u}if(o)return o!==f[0]&&f.unshift(o),r[o]}function On(e,t){var n,r,i,s,o=e.dataTypes.slice(),u=o[0],a={},f=0;e.dataFilter&&(t=e.dataFilter(t,e.dataType));if(o[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=o[++f];)if(i!=="*"){if(u!=="*"&&u!==i){n=a[u+" "+i]||a["* "+i];if(!n)for(r in a){s=r.split(" ");if(s[1]===i){n=a[u+" "+s[0]]||a["* "+s[0]];if(n){n===!0?n=a[r]:a[r]!==!0&&(i=s[0],o.splice(f--,0,i));break}}}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(l){return{state:"parsererror",error:n?l:"No conversion from "+u+" to "+i}}}u=i}return{state:"success",data:t}}function Fn(){try{return new e.XMLHttpRequest}catch(t){}}function In(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function $n(){return setTimeout(function(){qn=t},0),qn=v.now()}function Jn(e,t){v.each(t,function(t,n){var r=(Vn[t]||[]).concat(Vn["*"]),i=0,s=r.length;for(;i<s;i++)if(r[i].call(e,t,n))return})}function Kn(e,t,n){var r,i=0,s=0,o=Xn.length,u=v.Deferred().always(function(){delete a.elem}),a=function(){var t=qn||$n(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,i=1-r,s=0,o=f.tweens.length;for(;s<o;s++)f.tweens[s].run(i);return u.notifyWith(e,[f,i,n]),i<1&&o?n:(u.resolveWith(e,[f]),!1)},f=u.promise({elem:e,props:v.extend({},t),opts:v.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:qn||$n(),duration:n.duration,tweens:[],createTween:function(t,n,r){var i=v.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);return f.tweens.push(i),i},stop:function(t){var n=0,r=t?f.tweens.length:0;for(;n<r;n++)f.tweens[n].run(1);return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this}}),l=f.props;Qn(l,f.opts.specialEasing);for(;i<o;i++){r=Xn[i].call(f,e,l,f.opts);if(r)return r}return Jn(f,l),v.isFunction(f.opts.start)&&f.opts.start.call(e,f),v.fx.timer(v.extend(a,{anim:f,queue:f.opts.queue,elem:e})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function Qn(e,t){var n,r,i,s,o;for(n in e){r=v.camelCase(n),i=t[r],s=e[n],v.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=v.cssHooks[r];if(o&&"expand"in o){s=o.expand(s),delete e[r];for(n in s)n in e||(e[n]=s[n],t[n]=i)}else t[r]=i}}function Gn(e,t,n){var r,i,s,o,u,a,f,l,c,h=this,p=e.style,d={},m=[],g=e.nodeType&&Gt(e);n.queue||(l=v._queueHooks(e,"fx"),l.unqueued==null&&(l.unqueued=0,c=l.empty.fire,l.empty.fire=function(){l.unqueued||c()}),l.unqueued++,h.always(function(){h.always(function(){l.unqueued--,v.queue(e,"fx").length||l.empty.fire()})})),e.nodeType===1&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],v.css(e,"display")==="inline"&&v.css(e,"float")==="none"&&(!v.support.inlineBlockNeedsLayout||nn(e.nodeName)==="inline"?p.display="inline-block":p.zoom=1)),n.overflow&&(p.overflow="hidden",v.support.shrinkWrapBlocks||h.done(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t){s=t[r];if(Un.exec(s)){delete t[r],a=a||s==="toggle";if(s===(g?"hide":"show"))continue;m.push(r)}}o=m.length;if(o){u=v._data(e,"fxshow")||v._data(e,"fxshow",{}),"hidden"in u&&(g=u.hidden),a&&(u.hidden=!g),g?v(e).show():h.done(function(){v(e).hide()}),h.done(function(){var t;v.removeData(e,"fxshow",!0);for(t in d)v.style(e,t,d[t])});for(r=0;r<o;r++)i=m[r],f=h.createTween(i,g?u[i]:0),d[i]=u[i]||v.style(e,i),i in u||(u[i]=f.start,g&&(f.end=f.start,f.start=i==="width"||i==="height"?1:0))}}function Yn(e,t,n,r,i){return new Yn.prototype.init(e,t,n,r,i)}function Zn(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i<4;i+=2-t)n=$t[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function tr(e){return v.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}var n,r,i=e.document,s=e.location,o=e.navigator,u=e.jQuery,a=e.$,f=Array.prototype.push,l=Array.prototype.slice,c=Array.prototype.indexOf,h=Object.prototype.toString,p=Object.prototype.hasOwnProperty,d=String.prototype.trim,v=function(e,t){return new v.fn.init(e,t,n)},m=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,g=/\S/,y=/\s+/,b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,w=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,E=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,S=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,T=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,N=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,C=/^-ms-/,k=/-([\da-z])/gi,L=function(e,t){return(t+"").toUpperCase()},A=function(){i.addEventListener?(i.removeEventListener("DOMContentLoaded",A,!1),v.ready()):i.readyState==="complete"&&(i.detachEvent("onreadystatechange",A),v.ready())},O={};v.fn=v.prototype={constructor:v,init:function(e,n,r){var s,o,u,a;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if(typeof e=="string"){e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?s=[null,e,null]:s=w.exec(e);if(s&&(s[1]||!n)){if(s[1])return n=n instanceof v?n[0]:n,a=n&&n.nodeType?n.ownerDocument||n:i,e=v.parseHTML(s[1],a,!0),E.test(s[1])&&v.isPlainObject(n)&&this.attr.call(e,n,!0),v.merge(this,e);o=i.getElementById(s[2]);if(o&&o.parentNode){if(o.id!==s[2])return r.find(e);this.length=1,this[0]=o}return this.context=i,this.selector=e,this}return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e)}return v.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),v.makeArray(e,this))},selector:"",jquery:"",length:0,size:function(){return this.length},toArray:function(){return l.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=v.merge(this.constructor(),e);return r.prevObject=this,r.context=this.context,t==="find"?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r},each:function(e,t){return v.each(this,e,t)},ready:function(e){return v.ready.promise().done(e),this},eq:function(e){return e=+e,e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(l.apply(this,arguments),"slice",l.call(arguments).join(","))},map:function(e){return this.pushStack(v.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:[].sort,splice:[].splice},v.fn.init.prototype=v.fn,v.extend=v.fn.extend=function(){var e,n,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=!1;typeof u=="boolean"&&(l=u,u=arguments[1]||{},a=2),typeof u!="object"&&!v.isFunction(u)&&(u={}),f===a&&(u=this,--a);for(;a<f;a++)if((e=arguments[a])!=null)for(n in e){r=u[n],i=e[n];if(u===i)continue;l&&i&&(v.isPlainObject(i)||(s=v.isArray(i)))?(s?(s=!1,o=r&&v.isArray(r)?r:[]):o=r&&v.isPlainObject(r)?r:{},u[n]=v.extend(l,o,i)):i!==t&&(u[n]=i)}return u},v.extend({noConflict:function(t){return e.$===v&&(e.$=a),t&&e.jQuery===v&&(e.jQuery=u),v},isReady:!1,readyWait:1,holdReady:function(e){e?v.readyWait++:v.ready(!0)},ready:function(e){if(e===!0?--v.readyWait:v.isReady)return;if(!i.body)return setTimeout(v.ready,1);v.isReady=!0;if(e!==!0&&--v.readyWait>0)return;r.resolveWith(i,[v]),v.fn.trigger&&v(i).trigger("ready").off("ready")},isFunction:function(e){return v.type(e)==="function"},isArray:Array.isArray||function(e){return v.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):O[h.call(e)]||"object"},isPlainObject:function(e){if(!e||v.type(e)!=="object"||e.nodeType||v.isWindow(e))return!1;try{if(e.constructor&&!p.call(e,"constructor")&&!p.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||p.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){var r;return!e||typeof e!="string"?null:(typeof t=="boolean"&&(n=t,t=0),t=t||i,(r=E.exec(e))?[t.createElement(r[1])]:(r=v.buildFragment([e],t,n?null:[]),v.merge([],(r.cacheable?v.clone(r.fragment):r.fragment).childNodes)))},parseJSON:function(t){if(!t||typeof t!="string")return null;t=v.trim(t);if(e.JSON&&e.JSON.parse)return e.JSON.parse(t);if(S.test(t.replace(T,"@").replace(N,"]").replace(x,"")))return(new Function("return "+t))();v.error("Invalid JSON: "+t)},parseXML:function(n){var r,i;if(!n||typeof n!="string")return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(s){r=t}return(!r||!r.documentElement||r.getElementsByTagName("parsererror").length)&&v.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&g.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(C,"ms-").replace(k,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,n,r){var i,s=0,o=e.length,u=o===t||v.isFunction(e);if(r){if(u){for(i in e)if(n.apply(e[i],r)===!1)break}else for(;s<o;)if(n.apply(e[s++],r)===!1)break}else if(u){for(i in e)if(n.call(e[i],i,e[i])===!1)break}else for(;s<o;)if(n.call(e[s],s,e[s++])===!1)break;return e},trim:d&&!d.call("\ufeff\u00a0")?function(e){return e==null?"":d.call(e)}:function(e){return e==null?"":(e+"").replace(b,"")},makeArray:function(e,t){var n,r=t||[];return e!=null&&(n=v.type(e),e.length==null||n==="string"||n==="function"||n==="regexp"||v.isWindow(e)?f.call(r,e):v.merge(r,e)),r},inArray:function(e,t,n){var r;if(t){if(c)return c.call(t,e,n);r=t.length,n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,s=0;if(typeof r=="number")for(;s<r;s++)e[i++]=n[s];else while(n[s]!==t)e[i++]=n[s++];return e.length=i,e},grep:function(e,t,n){var r,i=[],s=0,o=e.length;n=!!n;for(;s<o;s++)r=!!t(e[s],s),n!==r&&i.push(e[s]);return i},map:function(e,n,r){var i,s,o=[],u=0,a=e.length,f=e instanceof v||a!==t&&typeof a=="number"&&(a>0&&e[0]&&e[a-1]||a===0||v.isArray(e));if(f)for(;u<a;u++)i=n(e[u],u,r),i!=null&&(o[o.length]=i);else for(s in e)i=n(e[s],s,r),i!=null&&(o[o.length]=i);return o.concat.apply([],o)},guid:1,proxy:function(e,n){var r,i,s;return typeof n=="string"&&(r=e[n],n=e,e=r),v.isFunction(e)?(i=l.call(arguments,2),s=function(){return e.apply(n,i.concat(l.call(arguments)))},s.guid=e.guid=e.guid||v.guid++,s):t},access:function(e,n,r,i,s,o,u){var a,f=r==null,l=0,c=e.length;if(r&&typeof r=="object"){for(l in r)v.access(e,n,l,r[l],1,o,i);s=1}else if(i!==t){a=u===t&&v.isFunction(i),f&&(a?(a=n,n=function(e,t,n){return a.call(v(e),n)}):(n.call(e,i),n=null));if(n)for(;l<c;l++)n(e[l],r,a?i.call(e[l],l,n(e[l],r)):i,u);s=1}return s?e:f?n.call(e):c?n(e[0],r):o},now:function(){return(new Date).getTime()}}),v.ready.promise=function(t){if(!r){r=v.Deferred();if(i.readyState==="complete")setTimeout(v.ready,1);else if(i.addEventListener)i.addEventListener("DOMContentLoaded",A,!1),e.addEventListener("load",v.ready,!1);else{i.attachEvent("onreadystatechange",A),e.attachEvent("onload",v.ready);var n=!1;try{n=e.frameElement==null&&i.documentElement}catch(s){}n&&n.doScroll&&function o(){if(!v.isReady){try{n.doScroll("left")}catch(e){return setTimeout(o,50)}v.ready()}}()}}return r.promise(t)},v.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){O["[object "+t+"]"]=t.toLowerCase()}),n=v(i);var M={};v.Callbacks=function(e){e=typeof e=="string"?M[e]||_(e):v.extend({},e);var n,r,i,s,o,u,a=[],f=!e.once&&[],l=function(t){n=e.memory&&t,r=!0,u=s||0,s=0,o=a.length,i=!0;for(;a&&u<o;u++)if(a[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}i=!1,a&&(f?f.length&&l(f.shift()):n?a=[]:c.disable())},c={add:function(){if(a){var t=a.length;(function r(t){v.each(t,function(t,n){var i=v.type(n);i==="function"?(!e.unique||!c.has(n))&&a.push(n):n&&n.length&&i!=="string"&&r(n)})})(arguments),i?o=a.length:n&&(s=t,l(n))}return this},remove:function(){return a&&v.each(arguments,function(e,t){var n;while((n=v.inArray(t,a,n))>-1)a.splice(n,1),i&&(n<=o&&o--,n<=u&&u--)}),this},has:function(e){return v.inArray(e,a)>-1},empty:function(){return a=[],this},disable:function(){return a=f=n=t,this},disabled:function(){return!a},lock:function(){return f=t,n||c.disable(),this},locked:function(){return!f},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],a&&(!r||f)&&(i?f.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},v.extend({Deferred:function(e){var t=[["resolve","done",v.Callbacks("once memory"),"resolved"],["reject","fail",v.Callbacks("once memory"),"rejected"],["notify","progress",v.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return v.Deferred(function(n){v.each(t,function(t,r){var s=r[0],o=e[t];i[r[1]](v.isFunction(o)?function(){var e=o.apply(this,arguments);e&&v.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===i?n:this,[e])}:n[s])}),e=null}).promise()},promise:function(e){return e!=null?v.extend(e,r):r}},i={};return r.pipe=r.then,v.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add,u&&o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock),i[s[0]]=o.fire,i[s[0]+"With"]=o.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=l.call(arguments),r=n.length,i=r!==1||e&&v.isFunction(e.promise)?r:0,s=i===1?e:v.Deferred(),o=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?l.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)}},u,a,f;if(r>1){u=new Array(r),a=new Array(r),f=new Array(r);for(;t<r;t++)n[t]&&v.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i}return i||s.resolveWith(f,n),s.promise()}}),v.support=function(){var t,n,r,s,o,u,a,f,l,c,h,p=i.createElement("div");p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=p.getElementsByTagName("*"),r=p.getElementsByTagName("a")[0];if(!n||!r||!n.length)return{};s=i.createElement("select"),o=s.appendChild(i.createElement("option")),u=p.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:r.getAttribute("href")==="/a",opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:u.value==="on",optSelected:o.selected,getSetAttribute:p.className!=="t",enctype:!!i.createElement("form").enctype,html5Clone:i.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:i.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},u.checked=!0,t.noCloneChecked=u.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!o.disabled;try{delete p.test}catch(d){t.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",h=function(){t.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick"),p.detachEvent("onclick",h)),u=i.createElement("input"),u.value="t",u.setAttribute("type","radio"),t.radioValue=u.value==="t",u.setAttribute("checked","checked"),u.setAttribute("name","t"),p.appendChild(u),a=i.createDocumentFragment(),a.appendChild(p.lastChild),t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=u.checked,a.removeChild(u),a.appendChild(p);if(p.attachEvent)for(l in{submit:!0,change:!0,focusin:!0})f="on"+l,c=f in p,c||(p.setAttribute(f,"return;"),c=typeof p[f]=="function"),t[l+"Bubbles"]=c;return v(function(){var n,r,s,o,u="padding:0;margin:0;border:0;display:block;overflow:hidden;",a=i.getElementsByTagName("body")[0];if(!a)return;n=i.createElement("div"),n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",a.insertBefore(n,a.firstChild),r=i.createElement("div"),n.appendChild(r),r.innerHTML="<table><tr><td></td><td>t</td></tr></table>",s=r.getElementsByTagName("td"),s[0].style.cssText="padding:0;margin:0;border:0;display:none",c=s[0].offsetHeight===0,s[0].style.display="",s[1].style.display="none",t.reliableHiddenOffsets=c&&s[0].offsetHeight===0,r.innerHTML="",r.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=r.offsetWidth===4,t.doesNotIncludeMarginInBodyOffset=a.offsetTop!==1,e.getComputedStyle&&(t.pixelPosition=(e.getComputedStyle(r,null)||{}).top!=="1%",t.boxSizingReliable=(e.getComputedStyle(r,null)||{width:"4px"}).width==="4px",o=i.createElement("div"),o.style.cssText=r.style.cssText=u,o.style.marginRight=o.style.width="0",r.style.width="1px",r.appendChild(o),t.reliableMarginRight=!parseFloat((e.getComputedStyle(o,null)||{}).marginRight)),typeof r.style.zoom!="undefined"&&(r.innerHTML="",r.style.cssText=u+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=r.offsetWidth===3,r.style.display="block",r.style.overflow="visible",r.innerHTML="<div></div>",r.firstChild.style.width="5px",t.shrinkWrapBlocks=r.offsetWidth!==3,n.style.zoom=1),a.removeChild(n),n=r=s=o=null}),a.removeChild(p),n=r=s=o=u=a=p=null,t}();var D=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;v.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(v.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?v.cache[e[v.expando]]:e[v.expando],!!e&&!B(e)},data:function(e,n,r,i){if(!v.acceptData(e))return;var s,o,u=v.expando,a=typeof n=="string",f=e.nodeType,l=f?v.cache:e,c=f?e[u]:e[u]&&u;if((!c||!l[c]||!i&&!l[c].data)&&a&&r===t)return;c||(f?e[u]=c=v.deletedIds.pop()||v.guid++:c=u),l[c]||(l[c]={},f||(l[c].toJSON=v.noop));if(typeof n=="object"||typeof n=="function")i?l[c]=v.extend(l[c],n):l[c].data=v.extend(l[c].data,n);return s=l[c],i||(s.data||(s.data={}),s=s.data),r!==t&&(s[v.camelCase(n)]=r),a?(o=s[n],o==null&&(o=s[v.camelCase(n)])):o=s,o},removeData:function(e,t,n){if(!v.acceptData(e))return;var r,i,s,o=e.nodeType,u=o?v.cache:e,a=o?e[v.expando]:v.expando;if(!u[a])return;if(t){r=n?u[a]:u[a].data;if(r){v.isArray(t)||(t in r?t=[t]:(t=v.camelCase(t),t in r?t=[t]:t=t.split(" ")));for(i=0,s=t.length;i<s;i++)delete r[t[i]];if(!(n?B:v.isEmptyObject)(r))return}}if(!n){delete u[a].data;if(!B(u[a]))return}o?v.cleanData([e],!0):v.support.deleteExpando||u!=u.window?delete u[a]:u[a]=null},_data:function(e,t,n){return v.data(e,t,n,!0)},acceptData:function(e){var t=e.nodeName&&v.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),v.fn.extend({data:function(e,n){var r,i,s,o,u,a=this[0],f=0,l=null;if(e===t){if(this.length){l=v.data(a);if(a.nodeType===1&&!v._data(a,"parsedAttrs")){s=a.attributes;for(u=s.length;f<u;f++)o=s[f].name,o.indexOf("data-")||(o=v.camelCase(o.substring(5)),H(a,o,l[o]));v._data(a,"parsedAttrs",!0)}}return l}return typeof e=="object"?this.each(function(){v.data(this,e)}):(r=e.split(".",2),r[1]=r[1]?"."+r[1]:"",i=r[1]+"!",v.access(this,function(n){if(n===t)return l=this.triggerHandler("getData"+i,[r[0]]),l===t&&a&&(l=v.data(a,e),l=H(a,e,l)),l===t&&r[1]?this.data(r[0]):l;r[1]=n,this.each(function(){var t=v(this);t.triggerHandler("setData"+i,r),v.data(this,e,n),t.triggerHandler("changeData"+i,r)})},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){v.removeData(this,e)})}}),v.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=v._data(e,t),n&&(!r||v.isArray(n)?r=v._data(e,t,v.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=v.queue(e,t),r=n.length,i=n.shift(),s=v._queueHooks(e,t),o=function(){v.dequeue(e,t)};i==="inprogress"&&(i=n.shift(),r--),i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return v._data(e,n)||v._data(e,n,{empty:v.Callbacks("once memory").add(function(){v.removeData(e,t+"queue",!0),v.removeData(e,n,!0)})})}}),v.fn.extend({queue:function(e,n){var r=2;return typeof e!="string"&&(n=e,e="fx",r--),arguments.length<r?v.queue(this[0],e):n===t?this:this.each(function(){var t=v.queue(this,e,n);v._queueHooks(this,e),e==="fx"&&t[0]!=="inprogress"&&v.dequeue(this,e)})},dequeue:function(e){return this.each(function(){v.dequeue(this,e)})},delay:function(e,t){return e=v.fx?v.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,s=v.Deferred(),o=this,u=this.length,a=function(){--i||s.resolveWith(o,[o])};typeof e!="string"&&(n=e,e=t),e=e||"fx";while(u--)r=v._data(o[u],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(a));return a(),s.promise(n)}});var j,F,I,q=/[\t\r\n]/g,R=/\r/g,U=/^(?:button|input)$/i,z=/^(?:button|input|object|select|textarea)$/i,W=/^a(?:rea|)$/i,X=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,V=v.support.getSetAttribute;v.fn.extend({attr:function(e,t){return v.access(this,v.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){v.removeAttr(this,e)})},prop:function(e,t){return v.access(this,v.prop,e,t,arguments.length>1)},removeProp:function(e){return e=v.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,s,o,u;if(v.isFunction(e))return this.each(function(t){v(this).addClass(e.call(this,t,this.className))});if(e&&typeof e=="string"){t=e.split(y);for(n=0,r=this.length;n<r;n++){i=this[n];if(i.nodeType===1)if(!i.className&&t.length===1)i.className=e;else{s=" "+i.className+" ";for(o=0,u=t.length;o<u;o++)s.indexOf(" "+t[o]+" ")<0&&(s+=t[o]+" ");i.className=v.trim(s)}}}return this},removeClass:function(e){var n,r,i,s,o,u,a;if(v.isFunction(e))return this.each(function(t){v(this).removeClass(e.call(this,t,this.className))});if(e&&typeof e=="string"||e===t){n=(e||"").split(y);for(u=0,a=this.length;u<a;u++){i=this[u];if(i.nodeType===1&&i.className){r=(" "+i.className+" ").replace(q," ");for(s=0,o=n.length;s<o;s++)while(r.indexOf(" "+n[s]+" ")>=0)r=r.replace(" "+n[s]+" "," ");i.className=e?v.trim(r):""}}}return this},toggleClass:function(e,t){var n=typeof e,r=typeof t=="boolean";return v.isFunction(e)?this.each(function(n){v(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(n==="string"){var i,s=0,o=v(this),u=t,a=e.split(y);while(i=a[s++])u=r?u:!o.hasClass(i),o[u?"addClass":"removeClass"](i)}else if(n==="undefined"||n==="boolean")this.className&&v._data(this,"__className__",this.className),this.className=this.className||e===!1?"":v._data(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(q," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,s=this[0];if(!arguments.length){if(s)return n=v.valHooks[s.type]||v.valHooks[s.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(s,"value"))!==t?r:(r=s.value,typeof r=="string"?r.replace(R,""):r==null?"":r);return}return i=v.isFunction(e),this.each(function(r){var s,o=v(this);if(this.nodeType!==1)return;i?s=e.call(this,r,o.val()):s=e,s==null?s="":typeof s=="number"?s+="":v.isArray(s)&&(s=v.map(s,function(e){return e==null?"":e+""})),n=v.valHooks[this.type]||v.valHooks[this.nodeName.toLowerCase()];if(!n||!("set"in n)||n.set(this,s,"value")===t)this.value=s})}}),v.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;for(;a<u;a++){n=r[a];if((n.selected||a===i)&&(v.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!v.nodeName(n.parentNode,"optgroup"))){t=v(n).val();if(s)return t;o.push(t)}}return o},set:function(e,t){var n=v.makeArray(t);return v(e).find("option").each(function(){this.selected=v.inArray(v(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{},attr:function(e,n,r,i){var s,o,u,a=e.nodeType;if(!e||a===3||a===8||a===2)return;if(i&&v.isFunction(v.fn[n]))return v(e)[n](r);if(typeof e.getAttribute=="undefined")return v.prop(e,n,r);u=a!==1||!v.isXMLDoc(e),u&&(n=n.toLowerCase(),o=v.attrHooks[n]||(X.test(n)?F:j));if(r!==t){if(r===null){v.removeAttr(e,n);return}return o&&"set"in o&&u&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r)}return o&&"get"in o&&u&&(s=o.get(e,n))!==null?s:(s=e.getAttribute(n),s===null?t:s)},removeAttr:function(e,t){var n,r,i,s,o=0;if(t&&e.nodeType===1){r=t.split(y);for(;o<r.length;o++)i=r[o],i&&(n=v.propFix[i]||i,s=X.test(i),s||v.attr(e,i,""),e.removeAttribute(V?i:n),s&&n in e&&(e[n]=!1))}},attrHooks:{type:{set:function(e,t){if(U.test(e.nodeName)&&e.parentNode)v.error("type property can't be changed");else if(!v.support.radioValue&&t==="radio"&&v.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return j&&v.nodeName(e,"button")?j.get(e,t):t in e?e.value:null},set:function(e,t,n){if(j&&v.nodeName(e,"button"))return j.set(e,t,n);e.value=t}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,s,o,u=e.nodeType;if(!e||u===3||u===8||u===2)return;return o=u!==1||!v.isXMLDoc(e),o&&(n=v.propFix[n]||n,s=v.propHooks[n]),r!==t?s&&"set"in s&&(i=s.set(e,r,n))!==t?i:e[n]=r:s&&"get"in s&&(i=s.get(e,n))!==null?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):z.test(e.nodeName)||W.test(e.nodeName)&&e.href?0:t}}}}),F={get:function(e,n){var r,i=v.prop(e,n);return i===!0||typeof i!="boolean"&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var r;return t===!1?v.removeAttr(e,n):(r=v.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},V||(I={name:!0,id:!0,coords:!0},j=v.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&&(I[n]?r.value!=="":r.specified)?r.value:t},set:function(e,t,n){var r=e.getAttributeNode(n);return r||(r=i.createAttribute(n),e.setAttributeNode(r)),r.value=t+""}},v.each(["width","height"],function(e,t){v.attrHooks[t]=v.extend(v.attrHooks[t],{set:function(e,n){if(n==="")return e.setAttribute(t,"auto"),n}})}),v.attrHooks.contenteditable={get:j.get,set:function(e,t,n){t===""&&(t="false"),j.set(e,t,n)}}),v.support.hrefNormalized||v.each(["href","src","width","height"],function(e,n){v.attrHooks[n]=v.extend(v.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return r===null?t:r}})}),v.support.style||(v.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=t+""}}),v.support.optSelected||(v.propHooks.selected=v.extend(v.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),v.support.enctype||(v.propFix.enctype="encoding"),v.support.checkOn||v.each(["radio","checkbox"],function(){v.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}}),v.each(["radio","checkbox"],function(){v.valHooks[this]=v.extend(v.valHooks[this],{set:function(e,t){if(v.isArray(t))return e.checked=v.inArray(v(e).val(),t)>=0}})});var $=/^(?:textarea|input|select)$/i,J=/^([^\.]*|)(?:\.(.+)|)$/,K=/(?:^|\s)hover(\.\S+|)\b/,Q=/^key/,G=/^(?:mouse|contextmenu)|click/,Y=/^(?:focusinfocus|focusoutblur)$/,Z=function(e){return v.event.special.hover?e:e.replace(K,"mouseenter$1 mouseleave$1")};v.event={add:function(e,n,r,i,s){var o,u,a,f,l,c,h,p,d,m,g;if(e.nodeType===3||e.nodeType===8||!n||!r||!(o=v._data(e)))return;r.handler&&(d=r,r=d.handler,s=d.selector),r.guid||(r.guid=v.guid++),a=o.events,a||(o.events=a={}),u=o.handle,u||(o.handle=u=function(e){return typeof v=="undefined"||!!e&&v.event.triggered===e.type?t:v.event.dispatch.apply(u.elem,arguments)},u.elem=e),n=v.trim(Z(n)).split(" ");for(f=0;f<n.length;f++){l=J.exec(n[f])||[],c=l[1],h=(l[2]||"").split(".").sort(),g=v.event.special[c]||{},c=(s?g.delegateType:g.bindType)||c,g=v.event.special[c]||{},p=v.extend({type:c,origType:l[1],data:i,handler:r,guid:r.guid,selector:s,needsContext:s&&v.expr.match.needsContext.test(s),namespace:h.join(".")},d),m=a[c];if(!m){m=a[c]=[],m.delegateCount=0;if(!g.setup||g.setup.call(e,i,h,u)===!1)e.addEventListener?e.addEventListener(c,u,!1):e.attachEvent&&e.attachEvent("on"+c,u)}g.add&&(g.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),s?m.splice(m.delegateCount++,0,p):m.push(p),v.event.global[c]=!0}e=null},global:{},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,m,g=v.hasData(e)&&v._data(e);if(!g||!(h=g.events))return;t=v.trim(Z(t||"")).split(" ");for(s=0;s<t.length;s++){o=J.exec(t[s])||[],u=a=o[1],f=o[2];if(!u){for(u in h)v.event.remove(e,u+t[s],n,r,!0);continue}p=v.event.special[u]||{},u=(r?p.delegateType:p.bindType)||u,d=h[u]||[],l=d.length,f=f?new RegExp("(^|\\.)"+f.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(c=0;c<d.length;c++)m=d[c],(i||a===m.origType)&&(!n||n.guid===m.guid)&&(!f||f.test(m.namespace))&&(!r||r===m.selector||r==="**"&&m.selector)&&(d.splice(c--,1),m.selector&&d.delegateCount--,p.remove&&p.remove.call(e,m));d.length===0&&l!==d.length&&((!p.teardown||p.teardown.call(e,f,g.handle)===!1)&&v.removeEvent(e,u,g.handle),delete h[u])}v.isEmptyObject(h)&&(delete g.handle,v.removeData(e,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,s,o){if(!s||s.nodeType!==3&&s.nodeType!==8){var u,a,f,l,c,h,p,d,m,g,y=n.type||n,b=[];if(Y.test(y+v.event.triggered))return;y.indexOf("!")>=0&&(y=y.slice(0,-1),a=!0),y.indexOf(".")>=0&&(b=y.split("."),y=b.shift(),b.sort());if((!s||v.event.customEvent[y])&&!v.event.global[y])return;n=typeof n=="object"?n[v.expando]?n:new v.Event(y,n):new v.Event(y),n.type=y,n.isTrigger=!0,n.exclusive=a,n.namespace=b.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,h=y.indexOf(":")<0?"on"+y:"";if(!s){u=v.cache;for(f in u)u[f].events&&u[f].events[y]&&v.event.trigger(n,r,u[f].handle.elem,!0);return}n.result=t,n.target||(n.target=s),r=r!=null?v.makeArray(r):[],r.unshift(n),p=v.event.special[y]||{};if(p.trigger&&p.trigger.apply(s,r)===!1)return;m=[[s,p.bindType||y]];if(!o&&!p.noBubble&&!v.isWindow(s)){g=p.delegateType||y,l=Y.test(g+y)?s:s.parentNode;for(c=s;l;l=l.parentNode)m.push([l,g]),c=l;c===(s.ownerDocument||i)&&m.push([c.defaultView||c.parentWindow||e,g])}for(f=0;f<m.length&&!n.isPropagationStopped();f++)l=m[f][0],n.type=m[f][1],d=(v._data(l,"events")||{})[n.type]&&v._data(l,"handle"),d&&d.apply(l,r),d=h&&l[h],d&&v.acceptData(l)&&d.apply&&d.apply(l,r)===!1&&n.preventDefault();return n.type=y,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(s.ownerDocument,r)===!1)&&(y!=="click"||!v.nodeName(s,"a"))&&v.acceptData(s)&&h&&s[y]&&(y!=="focus"&&y!=="blur"||n.target.offsetWidth!==0)&&!v.isWindow(s)&&(c=s[h],c&&(s[h]=null),v.event.triggered=y,s[y](),v.event.triggered=t,c&&(s[h]=c)),n.result}return},dispatch:function(n){n=v.event.fix(n||e.event);var r,i,s,o,u,a,f,c,h,p,d=(v._data(this,"events")||{})[n.type]||[],m=d.delegateCount,g=l.call(arguments),y=!n.exclusive&&!n.namespace,b=v.event.special[n.type]||{},w=[];g[0]=n,n.delegateTarget=this;if(b.preDispatch&&b.preDispatch.call(this,n)===!1)return;if(m&&(!n.button||n.type!=="click"))for(s=n.target;s!=this;s=s.parentNode||this)if(s.disabled!==!0||n.type!=="click"){u={},f=[];for(r=0;r<m;r++)c=d[r],h=c.selector,u[h]===t&&(u[h]=c.needsContext?v(h,this).index(s)>=0:v.find(h,this,null,[s]).length),u[h]&&f.push(c);f.length&&w.push({elem:s,matches:f})}d.length>m&&w.push({elem:this,matches:d.slice(m)});for(r=0;r<w.length&&!n.isPropagationStopped();r++){a=w[r],n.currentTarget=a.elem;for(i=0;i<a.matches.length&&!n.isImmediatePropagationStopped();i++){c=a.matches[i];if(y||!n.namespace&&!c.namespace||n.namespace_re&&n.namespace_re.test(c.namespace))n.data=c.data,n.handleObj=c,o=((v.event.special[c.origType]||{}).handle||c.handler).apply(a.elem,g),o!==t&&(n.result=o,o===!1&&(n.preventDefault(),n.stopPropagation()))}}return b.postDispatch&&b.postDispatch.call(this,n),n.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,s,o,u=n.button,a=n.fromElement;return e.pageX==null&&n.clientX!=null&&(r=e.target.ownerDocument||i,s=r.documentElement,o=r.body,e.pageX=n.clientX+(s&&s.scrollLeft||o&&o.scrollLeft||0)-(s&&s.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(s&&s.scrollTop||o&&o.scrollTop||0)-(s&&s.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?n.toElement:a),!e.which&&u!==t&&(e.which=u&1?1:u&2?3:u&4?2:0),e}},fix:function(e){if(e[v.expando])return e;var t,n,r=e,s=v.event.fixHooks[e.type]||{},o=s.props?this.props.concat(s.props):this.props;e=v.Event(r);for(t=o.length;t;)n=o[--t],e[n]=r[n];return e.target||(e.target=r.srcElement||i),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,r):e},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){v.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var i=v.extend(new v.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?v.event.trigger(i,null,t):v.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},v.event.handle=v.event.dispatch,v.removeEvent=i.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]=="undefined"&&(e[r]=null),e.detachEvent(r,n))},v.Event=function(e,t){if(!(this instanceof v.Event))return new v.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?tt:et):this.type=e,t&&v.extend(this,t),this.timeStamp=e&&e.timeStamp||v.now(),this[v.expando]=!0},v.Event.prototype={preventDefault:function(){this.isDefaultPrevented=tt;var e=this.originalEvent;if(!e)return;e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=tt;var e=this.originalEvent;if(!e)return;e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=tt,this.stopPropagation()},isDefaultPrevented:et,isPropagationStopped:et,isImmediatePropagationStopped:et},v.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){v.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj,o=s.selector;if(!i||i!==r&&!v.contains(r,i))e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t;return n}}}),v.support.submitBubbles||(v.event.special.submit={setup:function(){if(v.nodeName(this,"form"))return!1;v.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=v.nodeName(n,"input")||v.nodeName(n,"button")?n.form:t;r&&!v._data(r,"_submit_attached")&&(v.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),v._data(r,"_submit_attached",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&v.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(v.nodeName(this,"form"))return!1;v.event.remove(this,"._submit")}}),v.support.changeBubbles||(v.event.special.change={setup:function(){if($.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")v.event.add(this,"propertychange._change",function(e){e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),v.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),v.event.simulate("change",this,e,!0)});return!1}v.event.add(this,"beforeactivate._change",function(e){var t=e.target;$.test(t.nodeName)&&!v._data(t,"_change_attached")&&(v.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&v.event.simulate("change",this.parentNode,e,!0)}),v._data(t,"_change_attached",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)},teardown:function(){return v.event.remove(this,"._change"),!$.test(this.nodeName)}}),v.support.focusinBubbles||v.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){v.event.simulate(t,e.target,v.event.fix(e),!0)};v.event.special[t]={setup:function(){n++===0&&i.addEventListener(e,r,!0)},teardown:function(){--n===0&&i.removeEventListener(e,r,!0)}}}),v.fn.extend({on:function(e,n,r,i,s){var o,u;if(typeof e=="object"){typeof n!="string"&&(r=r||n,n=t);for(u in e)this.on(u,n,r,e[u],s);return this}r==null&&i==null?(i=n,r=n=t):i==null&&(typeof n=="string"?(i=r,r=t):(i=r,r=n,n=t));if(i===!1)i=et;else if(!i)return this;return s===1&&(o=i,i=function(e){return v().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=v.guid++)),this.each(function(){v.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,s;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,v(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if(typeof e=="object"){for(s in e)this.off(s,n,e[s]);return this}if(n===!1||typeof n=="function")r=n,n=t;return r===!1&&(r=et),this.each(function(){v.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return v(this.context).on(e,this.selector,t,n),this},die:function(e,t){return v(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){v.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return v.event.trigger(e,t,this[0],!0)},toggle:function(e){var t=arguments,n=e.guid||v.guid++,r=0,i=function(n){var i=(v._data(this,"lastToggle"+e.guid)||0)%r;return v._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};i.guid=n;while(r<t.length)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){v.fn[t]=function(e,n){return n==null&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},Q.test(t)&&(v.event.fixHooks[t]=v.event.keyHooks),G.test(t)&&(v.event.fixHooks[t]=v.event.mouseHooks)}),function(e,t){function nt(e,t,n,r){n=n||[],t=t||g;var i,s,a,f,l=t.nodeType;if(!e||typeof e!="string")return n;if(l!==1&&l!==9)return[];a=o(t);if(!a&&!r)if(i=R.exec(e))if(f=i[1]){if(l===9){s=t.getElementById(f);if(!s||!s.parentNode)return n;if(s.id===f)return n.push(s),n}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(f))&&u(t,s)&&s.id===f)return n.push(s),n}else{if(i[2])return S.apply(n,x.call(t.getElementsByTagName(e),0)),n;if((f=i[3])&&Z&&t.getElementsByClassName)return S.apply(n,x.call(t.getElementsByClassName(f),0)),n}return vt(e.replace(j,"$1"),t,n,r,a)}function rt(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function it(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function st(e){return N(function(t){return t=+t,N(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))})})}function ot(e,t,n){if(e===t)return n;var r=e.nextSibling;while(r){if(r===t)return-1;r=r.nextSibling}return 1}function ut(e,t){var n,r,s,o,u,a,f,l=L[d][e+" "];if(l)return t?0:l.slice(0);u=e,a=[],f=i.preFilter;while(u){if(!n||(r=F.exec(u)))r&&(u=u.slice(r[0].length)||u),a.push(s=[]);n=!1;if(r=I.exec(u))s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=r[0].replace(j," ");for(o in i.filter)(r=J[o].exec(u))&&(!f[o]||(r=f[o](r)))&&(s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=o,n.matches=r);if(!n)break}return t?u.length:u?nt.error(e):L(e,a).slice(0)}function at(e,t,r){var i=t.dir,s=r&&t.dir==="parentNode",o=w++;return t.first?function(t,n,r){while(t=t[i])if(s||t.nodeType===1)return e(t,n,r)}:function(t,r,u){if(!u){var a,f=b+" "+o+" ",l=f+n;while(t=t[i])if(s||t.nodeType===1){if((a=t[d])===l)return t.sizset;if(typeof a=="string"&&a.indexOf(f)===0){if(t.sizset)return t}else{t[d]=l;if(e(t,r,u))return t.sizset=!0,t;t.sizset=!1}}}else while(t=t[i])if(s||t.nodeType===1)if(e(t,r,u))return t}}function ft(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function lt(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u);return o}function ct(e,t,n,r,i,s){return r&&!r[d]&&(r=ct(r)),i&&!i[d]&&(i=ct(i,s)),N(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||dt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?lt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;n&&n(m,g,u,a);if(r){f=lt(g,p),r(f,[],u,a),l=f.length;while(l--)if(c=f[l])g[p[l]]=!(m[p[l]]=c)}if(s){if(i||e){if(i){f=[],l=g.length;while(l--)(c=g[l])&&f.push(m[l]=c);i(null,g=[],f,a)}l=g.length;while(l--)(c=g[l])&&(f=i?T.call(s,c):h[l])>-1&&(s[f]=!(o[f]=c))}}else g=lt(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):S.apply(o,g)})}function ht(e){var t,n,r,s=e.length,o=i.relative[e[0].type],u=o||i.relative[" "],a=o?1:0,f=at(function(e){return e===t},u,!0),l=at(function(e){return T.call(t,e)>-1},u,!0),h=[function(e,n,r){return!o&&(r||n!==c)||((t=n).nodeType?f(e,n,r):l(e,n,r))}];for(;a<s;a++)if(n=i.relative[e[a].type])h=[at(ft(h),n)];else{n=i.filter[e[a].type].apply(null,e[a].matches);if(n[d]){r=++a;for(;r<s;r++)if(i.relative[e[r].type])break;return ct(a>1&&ft(h),a>1&&e.slice(0,a-1).join("").replace(j,"$1"),n,a<r&&ht(e.slice(a,r)),r<s&&ht(e=e.slice(r)),r<s&&e.join(""))}h.push(n)}return ft(h)}function pt(e,t){var r=t.length>0,s=e.length>0,o=function(u,a,f,l,h){var p,d,v,m=[],y=0,w="0",x=u&&[],T=h!=null,N=c,C=u||s&&i.find.TAG("*",h&&a.parentNode||a),k=b+=N==null?1:Math.E;T&&(c=a!==g&&a,n=o.el);for(;(p=C[w])!=null;w++){if(s&&p){for(d=0;v=e[d];d++)if(v(p,a,f)){l.push(p);break}T&&(b=k,n=++o.el)}r&&((p=!v&&p)&&y--,u&&x.push(p))}y+=w;if(r&&w!==y){for(d=0;v=t[d];d++)v(x,m,a,f);if(u){if(y>0)while(w--)!x[w]&&!m[w]&&(m[w]=E.call(l));m=lt(m)}S.apply(l,m),T&&!u&&m.length>0&&y+t.length>1&&nt.uniqueSort(l)}return T&&(b=k,c=N),x};return o.el=0,r?N(o):o}function dt(e,t,n){var r=0,i=t.length;for(;r<i;r++)nt(e,t[r],n);return n}function vt(e,t,n,r,s){var o,u,f,l,c,h=ut(e),p=h.length;if(!r&&h.length===1){u=h[0]=h[0].slice(0);if(u.length>2&&(f=u[0]).type==="ID"&&t.nodeType===9&&!s&&i.relative[u[1].type]){t=i.find.ID(f.matches[0].replace($,""),t,s)[0];if(!t)return n;e=e.slice(u.shift().length)}for(o=J.POS.test(e)?-1:u.length-1;o>=0;o--){f=u[o];if(i.relative[l=f.type])break;if(c=i.find[l])if(r=c(f.matches[0].replace($,""),z.test(u[0].type)&&t.parentNode||t,s)){u.splice(o,1),e=r.length&&u.join("");if(!e)return S.apply(n,x.call(r,0)),n;break}}}return a(e,h)(r,t,s,n,z.test(e)),n}function mt(){}var n,r,i,s,o,u,a,f,l,c,h=!0,p="undefined",d=("sizcache"+Math.random()).replace(".",""),m=String,g=e.document,y=g.documentElement,b=0,w=0,E=[].pop,S=[].push,x=[].slice,T=[].indexOf||function(e){var t=0,n=this.length;for(;t<n;t++)if(this[t]===e)return t;return-1},N=function(e,t){return e[d]=t==null||t,e},C=function(){var e={},t=[];return N(function(n,r){return t.push(n)>i.cacheLength&&delete e[t.shift()],e[n+" "]=r},e)},k=C(),L=C(),A=C(),O="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",_=M.replace("w","w#"),D="([*^$|!~]?=)",P="\\["+O+"*("+M+")"+O+"*(?:"+D+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+_+")|)|)"+O+"*\\]",H=":("+M+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+P+")|[^:]|\\\\.)*|.*))\\)|)",B=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)",j=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),F=new RegExp("^"+O+"*,"+O+"*"),I=new RegExp("^"+O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*"),q=new RegExp(H),R=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,U=/^:not/,z=/[\x20\t\r\n\f]*[+~]/,W=/:not\($/,X=/h\d/i,V=/input|select|textarea|button/i,$=/\\(?!\\)/g,J={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),NAME:new RegExp("^\\[name=['\"]?("+M+")['\"]?\\]"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+H),POS:new RegExp(B,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),needsContext:new RegExp("^"+O+"*[>+~]|"+B,"i")},K=function(e){var t=g.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}},Q=K(function(e){return e.appendChild(g.createComment("")),!e.getElementsByTagName("*").length}),G=K(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==p&&e.firstChild.getAttribute("href")==="#"}),Y=K(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return t!=="boolean"&&t!=="string"}),Z=K(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!e.getElementsByClassName||!e.getElementsByClassName("e").length?!1:(e.lastChild.className="e",e.getElementsByClassName("e").length===2)}),et=K(function(e){e.id=d+0,e.innerHTML="<a name='"+d+"'></a><div name='"+d+"'></div>",y.insertBefore(e,y.firstChild);var t=g.getElementsByName&&g.getElementsByName(d).length===2+g.getElementsByName(d+0).length;return r=!g.getElementById(d),y.removeChild(e),t});try{x.call(y.childNodes,0)[0].nodeType}catch(tt){x=function(e){var t,n=[];for(;t=this[e];e++)n.push(t);return n}}nt.matches=function(e,t){return nt(e,null,null,t)},nt.matchesSelector=function(e,t){return nt(t,null,null,[e]).length>0},s=nt.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(i===1||i===9||i===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=s(e)}else if(i===3||i===4)return e.nodeValue}else for(;t=e[r];r++)n+=s(t);return n},o=nt.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":!1},u=nt.contains=y.contains?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&r.nodeType===1&&n.contains&&n.contains(r))}:y.compareDocumentPosition?function(e,t){return t&&!!(e.compareDocumentPosition(t)&16)}:function(e,t){while(t=t.parentNode)if(t===e)return!0;return!1},nt.attr=function(e,t){var n,r=o(e);return r||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):r||Y?e.getAttribute(t):(n=e.getAttributeNode(t),n?typeof e[t]=="boolean"?e[t]?t:null:n.specified?n.value:null:null)},i=nt.selectors={cacheLength:50,createPseudo:N,match:J,attrHandle:G?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},find:{ID:r?function(e,t,n){if(typeof t.getElementById!==p&&!n){var r=t.getElementById(e);return r&&r.parentNode?[r]:[]}}:function(e,n,r){if(typeof n.getElementById!==p&&!r){var i=n.getElementById(e);return i?i.id===e||typeof i.getAttributeNode!==p&&i.getAttributeNode("id").value===e?[i]:t:[]}},TAG:Q?function(e,t){if(typeof t.getElementsByTagName!==p)return t.getElementsByTagName(e)}:function(e,t){var n=t.getElementsByTagName(e);if(e==="*"){var r,i=[],s=0;for(;r=n[s];s++)r.nodeType===1&&i.push(r);return i}return n},NAME:et&&function(e,t){if(typeof t.getElementsByName!==p)return t.getElementsByName(name)},CLASS:Z&&function(e,t,n){if(typeof t.getElementsByClassName!==p&&!n)return t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace($,""),e[3]=(e[4]||e[5]||"").replace($,""),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1]==="nth"?(e[2]||nt.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd")),e[4]=+(e[6]+e[7]||e[2]==="odd")):e[2]&&nt.error(e[0]),e},PSEUDO:function(e){var t,n;if(J.CHILD.test(e[0]))return null;if(e[3])e[2]=e[3];else if(t=e[4])q.test(t)&&(n=ut(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t;return e.slice(0,3)}},filter:{ID:r?function(e){return e=e.replace($,""),function(t){return t.getAttribute("id")===e}}:function(e){return e=e.replace($,""),function(t){var n=typeof t.getAttributeNode!==p&&t.getAttributeNode("id");return n&&n.value===e}},TAG:function(e){return e==="*"?function(){return!0}:(e=e.replace($,"").toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[d][e+" "];return t||(t=new RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==p&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r,i){var s=nt.attr(r,e);return s==null?t==="!=":t?(s+="",t==="="?s===n:t==="!="?s!==n:t==="^="?n&&s.indexOf(n)===0:t==="*="?n&&s.indexOf(n)>-1:t==="$="?n&&s.substr(s.length-n.length)===n:t==="~="?(" "+s+" ").indexOf(n)>-1:t==="|="?s===n||s.substr(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r){return e==="nth"?function(e){var t,i,s=e.parentNode;if(n===1&&r===0)return!0;if(s){i=0;for(t=s.firstChild;t;t=t.nextSibling)if(t.nodeType===1){i++;if(e===t)break}}return i-=r,i===n||i%n===0&&i/n>=0}:function(t){var n=t;switch(e){case"only":case"first":while(n=n.previousSibling)if(n.nodeType===1)return!1;if(e==="first")return!0;n=t;case"last":while(n=n.nextSibling)if(n.nodeType===1)return!1;return!0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||nt.error("unsupported pseudo: "+e);return r[d]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?N(function(e,n){var i,s=r(e,t),o=s.length;while(o--)i=T.call(e,s[o]),e[i]=!(n[i]=s[o])}):function(e){return r(e,0,n)}):r}},pseudos:{not:N(function(e){var t=[],n=[],r=a(e.replace(j,"$1"));return r[d]?N(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)if(s=o[u])e[u]=!(t[u]=s)}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:N(function(e){return function(t){return nt(e,t).length>0}}),contains:N(function(e){return function(t){return(t.textContent||t.innerText||s(t)).indexOf(e)>-1}}),enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!i.pseudos.empty(e)},empty:function(e){var t;e=e.firstChild;while(e){if(e.nodeName>"@"||(t=e.nodeType)===3||t===4)return!1;e=e.nextSibling}return!0},header:function(e){return X.test(e.nodeName)},text:function(e){var t,n;return e.nodeName.toLowerCase()==="input"&&(t=e.type)==="text"&&((n=e.getAttribute("type"))==null||n.toLowerCase()===t)},radio:rt("radio"),checkbox:rt("checkbox"),file:rt("file"),password:rt("password"),image:rt("image"),submit:it("submit"),reset:it("reset"),button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},input:function(e){return V.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},active:function(e){return e===e.ownerDocument.activeElement},first:st(function(){return[0]}),last:st(function(e,t){return[t-1]}),eq:st(function(e,t,n){return[n<0?n+t:n]}),even:st(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:st(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:st(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:st(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},f=y.compareDocumentPosition?function(e,t){return e===t?(l=!0,0):(!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition:e.compareDocumentPosition(t)&4)?-1:1}:function(e,t){if(e===t)return l=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],s=[],o=e.parentNode,u=t.parentNode,a=o;if(o===u)return ot(e,t);if(!o)return-1;if(!u)return 1;while(a)i.unshift(a),a=a.parentNode;a=u;while(a)s.unshift(a),a=a.parentNode;n=i.length,r=s.length;for(var f=0;f<n&&f<r;f++)if(i[f]!==s[f])return ot(i[f],s[f]);return f===n?ot(e,s[f],-1):ot(i[f],t,1)},[0,0].sort(f),h=!l,nt.uniqueSort=function(e){var t,n=[],r=1,i=0;l=h,e.sort(f);if(l){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e},nt.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},a=nt.compile=function(e,t){var n,r=[],i=[],s=A[d][e+" "];if(!s){t||(t=ut(e)),n=t.length;while(n--)s=ht(t[n]),s[d]?r.push(s):i.push(s);s=A(e,pt(i,r))}return s},g.querySelectorAll&&function(){var e,t=vt,n=/'|\\/g,r=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,i=[":focus"],s=[":active"],u=y.matchesSelector||y.mozMatchesSelector||y.webkitMatchesSelector||y.oMatchesSelector||y.msMatchesSelector;K(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||i.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||i.push(":checked")}),K(function(e){e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&i.push("[*^$]="+O+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'/>",e.querySelectorAll(":enabled").length||i.push(":enabled",":disabled")}),i=new RegExp(i.join("|")),vt=function(e,r,s,o,u){if(!o&&!u&&!i.test(e)){var a,f,l=!0,c=d,h=r,p=r.nodeType===9&&e;if(r.nodeType===1&&r.nodeName.toLowerCase()!=="object"){a=ut(e),(l=r.getAttribute("id"))?c=l.replace(n,"\\$&"):r.setAttribute("id",c),c="[id='"+c+"'] ",f=a.length;while(f--)a[f]=c+a[f].join("");h=z.test(e)&&r.parentNode||r,p=a.join(",")}if(p)try{return S.apply(s,x.call(h.querySelectorAll(p),0)),s}catch(v){}finally{l||r.removeAttribute("id")}}return t(e,r,s,o,u)},u&&(K(function(t){e=u.call(t,"div");try{u.call(t,"[test!='']:sizzle"),s.push("!=",H)}catch(n){}}),s=new RegExp(s.join("|")),nt.matchesSelector=function(t,n){n=n.replace(r,"='$1']");if(!o(t)&&!s.test(n)&&!i.test(n))try{var a=u.call(t,n);if(a||e||t.document&&t.document.nodeType!==11)return a}catch(f){}return nt(n,null,null,[t]).length>0})}(),i.pseudos.nth=i.pseudos.eq,i.filters=mt.prototype=i.pseudos,i.setFilters=new mt,nt.attr=v.attr,v.find=nt,v.expr=nt.selectors,v.expr[":"]=v.expr.pseudos,v.unique=nt.uniqueSort,v.text=nt.getText,v.isXMLDoc=nt.isXML,v.contains=nt.contains}(e);var nt=/Until$/,rt=/^(?:parents|prev(?:Until|All))/,it=/^.[^:#\[\.,]*$/,st=v.expr.match.needsContext,ot={children:!0,contents:!0,next:!0,prev:!0};v.fn.extend({find:function(e){var t,n,r,i,s,o,u=this;if(typeof e!="string")return v(e).filter(function(){for(t=0,n=u.length;t<n;t++)if(v.contains(u[t],this))return!0});o=this.pushStack("","find",e);for(t=0,n=this.length;t<n;t++){r=o.length,v.find(e,this[t],o);if(t>0)for(i=r;i<o.length;i++)for(s=0;s<r;s++)if(o[s]===o[i]){o.splice(i--,1);break}}return o},has:function(e){var t,n=v(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(v.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1),"not",e)},filter:function(e){return this.pushStack(ft(this,e,!0),"filter",e)},is:function(e){return!!e&&(typeof e=="string"?st.test(e)?v(e,this.context).index(this[0])>=0:v.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,s=[],o=st.test(e)||typeof e!="string"?v(e,t||this.context):0;for(;r<i;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&n.nodeType!==11){if(o?o.index(n)>-1:v.find.matchesSelector(n,e)){s.push(n);break}n=n.parentNode}}return s=s.length>1?v.unique(s):s,this.pushStack(s,"closest",e)},index:function(e){return e?typeof e=="string"?v.inArray(this[0],v(e)):v.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n=typeof e=="string"?v(e,t):v.makeArray(e&&e.nodeType?[e]:e),r=v.merge(this.get(),n);return this.pushStack(ut(n[0])||ut(r[0])?r:v.unique(r))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),v.fn.andSelf=v.fn.addBack,v.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return v.dir(e,"parentNode")},parentsUntil:function(e,t,n){return v.dir(e,"parentNode",n)},next:function(e){return at(e,"nextSibling")},prev:function(e){return at(e,"previousSibling")},nextAll:function(e){return v.dir(e,"nextSibling")},prevAll:function(e){return v.dir(e,"previousSibling")},nextUntil:function(e,t,n){return v.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return v.dir(e,"previousSibling",n)},siblings:function(e){return v.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return v.sibling(e.firstChild)},contents:function(e){return v.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:v.merge([],e.childNodes)}},function(e,t){v.fn[e]=function(n,r){var i=v.map(this,t,n);return nt.test(e)||(r=n),r&&typeof r=="string"&&(i=v.filter(r,i)),i=this.length>1&&!ot[e]?v.unique(i):i,this.length>1&&rt.test(e)&&(i=i.reverse()),this.pushStack(i,e,l.call(arguments).join(","))}}),v.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),t.length===1?v.find.matchesSelector(t[0],e)?[t[0]]:[]:v.find.matches(e,t)},dir:function(e,n,r){var i=[],s=e[n];while(s&&s.nodeType!==9&&(r===t||s.nodeType!==1||!v(s).is(r)))s.nodeType===1&&i.push(s),s=s[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}});var ct="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|pageLayer|summary|time|video",ht=/ jQuery\d+="(?:null|\d+)"/g,pt=/^\s+/,dt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,vt=/<([\w:]+)/,mt=/<tbody/i,gt=/<|&#?\w+;/,yt=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,wt=new RegExp("<(?:"+ct+")[\\s/>]","i"),Et=/^(?:checkbox|radio)$/,St=/checked\s*(?:[^=]|=\s*.checked.)/i,xt=/\/(java|ecma)script/i,Tt=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Nt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Ct=lt(i),kt=Ct.appendChild(i.createElement("div"));Nt.optgroup=Nt.option,Nt.tbody=Nt.tfoot=Nt.colgroup=Nt.caption=Nt.thead,Nt.th=Nt.td,v.support.htmlSerialize||(Nt._default=[1,"X<div>","</div>"]),v.fn.extend({text:function(e){return v.access(this,function(e){return e===t?v.text(this):this.empty().append((this[0]&&this[0].ownerDocument||i).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(v.isFunction(e))return this.each(function(t){v(this).wrapAll(e.call(this,t))});if(this[0]){var t=v(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return v.isFunction(e)?this.each(function(t){v(this).wrapInner(e.call(this,t))}):this.each(function(){var t=v(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=v.isFunction(e);return this.each(function(n){v(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){v.nodeName(this,"body")||v(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(e,this.firstChild)})},before:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(e,this),"before",this.selector)}},after:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(this,e),"after",this.selector)}},remove:function(e,t){var n,r=0;for(;(n=this[r])!=null;r++)if(!e||v.filter(e,[n]).length)!t&&n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),v.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n);return this},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++){e.nodeType===1&&v.cleanData(e.getElementsByTagName("*"));while(e.firstChild)e.removeChild(e.firstChild)}return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return v.clone(this,e,t)})},html:function(e){return v.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return n.nodeType===1?n.innerHTML.replace(ht,""):t;if(typeof e=="string"&&!yt.test(e)&&(v.support.htmlSerialize||!wt.test(e))&&(v.support.leadingWhitespace||!pt.test(e))&&!Nt[(vt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(dt,"<$1></$2>");try{for(;r<i;r++)n=this[r]||{},n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(s){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return ut(this[0])?this.length?this.pushStack(v(v.isFunction(e)?e():e),"replaceWith",e):this:v.isFunction(e)?this.each(function(t){var n=v(this),r=n.html();n.replaceWith(e.call(this,t,r))}):(typeof e!="string"&&(e=v(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;v(this).remove(),t?v(t).before(e):v(n).append(e)}))},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=[].concat.apply([],e);var i,s,o,u,a=0,f=e[0],l=[],c=this.length;if(!v.support.checkClone&&c>1&&typeof f=="string"&&St.test(f))return this.each(function(){v(this).domManip(e,n,r)});if(v.isFunction(f))return this.each(function(i){var s=v(this);e[0]=f.call(this,i,n?s.html():t),s.domManip(e,n,r)});if(this[0]){i=v.buildFragment(e,this,l),o=i.fragment,s=o.firstChild,o.childNodes.length===1&&(o=s);if(s){n=n&&v.nodeName(s,"tr");for(u=i.cacheable||c-1;a<c;a++)r.call(n&&v.nodeName(this[a],"table")?Lt(this[a],"tbody"):this[a],a===u?o:v.clone(o,!0,!0))}o=s=null,l.length&&v.each(l,function(e,t){t.src?v.ajax?v.ajax({url:t.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):v.error("no ajax"):v.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Tt,"")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),v.buildFragment=function(e,n,r){var s,o,u,a=e[0];return n=n||i,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,e.length===1&&typeof a=="string"&&a.length<512&&n===i&&a.charAt(0)==="<"&&!bt.test(a)&&(v.support.checkClone||!St.test(a))&&(v.support.html5Clone||!wt.test(a))&&(o=!0,s=v.fragments[a],u=s!==t),s||(s=n.createDocumentFragment(),v.clean(e,n,s,r),o&&(v.fragments[a]=u&&s)),{fragment:s,cacheable:o}},v.fragments={},v.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){v.fn[e]=function(n){var r,i=0,s=[],o=v(n),u=o.length,a=this.length===1&&this[0].parentNode;if((a==null||a&&a.nodeType===11&&a.childNodes.length===1)&&u===1)return o[t](this[0]),this;for(;i<u;i++)r=(i>0?this.clone(!0):this).get(),v(o[i])[t](r),s=s.concat(r);return this.pushStack(s,e,o.selector)}}),v.extend({clone:function(e,t,n){var r,i,s,o;v.support.html5Clone||v.isXMLDoc(e)||!wt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(kt.innerHTML=e.outerHTML,kt.removeChild(o=kt.firstChild));if((!v.support.noCloneEvent||!v.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!v.isXMLDoc(e)){Ot(e,o),r=Mt(e),i=Mt(o);for(s=0;r[s];++s)i[s]&&Ot(r[s],i[s])}if(t){At(e,o);if(n){r=Mt(e),i=Mt(o);for(s=0;r[s];++s)At(r[s],i[s])}}return r=i=null,o},clean:function(e,t,n,r){var s,o,u,a,f,l,c,h,p,d,m,g,y=t===i&&Ct,b=[];if(!t||typeof t.createDocumentFragment=="undefined")t=i;for(s=0;(u=e[s])!=null;s++){typeof u=="number"&&(u+="");if(!u)continue;if(typeof u=="string")if(!gt.test(u))u=t.createTextNode(u);else{y=y||lt(t),c=t.createElement("div"),y.appendChild(c),u=u.replace(dt,"<$1></$2>"),a=(vt.exec(u)||["",""])[1].toLowerCase(),f=Nt[a]||Nt._default,l=f[0],c.innerHTML=f[1]+u+f[2];while(l--)c=c.lastChild;if(!v.support.tbody){h=mt.test(u),p=a==="table"&&!h?c.firstChild&&c.firstChild.childNodes:f[1]==="<table>"&&!h?c.childNodes:[];for(o=p.length-1;o>=0;--o)v.nodeName(p[o],"tbody")&&!p[o].childNodes.length&&p[o].parentNode.removeChild(p[o])}!v.support.leadingWhitespace&&pt.test(u)&&c.insertBefore(t.createTextNode(pt.exec(u)[0]),c.firstChild),u=c.childNodes,c.parentNode.removeChild(c)}u.nodeType?b.push(u):v.merge(b,u)}c&&(u=c=y=null);if(!v.support.appendChecked)for(s=0;(u=b[s])!=null;s++)v.nodeName(u,"input")?_t(u):typeof u.getElementsByTagName!="undefined"&&v.grep(u.getElementsByTagName("input"),_t);if(n){m=function(e){if(!e.type||xt.test(e.type))return r?r.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e)};for(s=0;(u=b[s])!=null;s++)if(!v.nodeName(u,"script")||!m(u))n.appendChild(u),typeof u.getElementsByTagName!="undefined"&&(g=v.grep(v.merge([],u.getElementsByTagName("script")),m),b.splice.apply(b,[s+1,0].concat(g)),s+=g.length)}return b},cleanData:function(e,t){var n,r,i,s,o=0,u=v.expando,a=v.cache,f=v.support.deleteExpando,l=v.event.special;for(;(i=e[o])!=null;o++)if(t||v.acceptData(i)){r=i[u],n=r&&a[r];if(n){if(n.events)for(s in n.events)l[s]?v.event.remove(i,s):v.removeEvent(i,s,n.handle);a[r]&&(delete a[r],f?delete i[u]:i.removeAttribute?i.removeAttribute(u):i[u]=null,v.deletedIds.push(r))}}}}),function(){var e,t;v.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e=v.uaMatch(o.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),v.browser=t,v.sub=function(){function e(t,n){return new e.fn.init(t,n)}v.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(r,i){return i&&i instanceof v&&!(i instanceof e)&&(i=e(i)),v.fn.init.call(this,r,i,t)},e.fn.init.prototype=e.fn;var t=e(i);return e}}();var Dt,Pt,Ht,Bt=/alpha\([^)]*\)/i,jt=/opacity=([^)]*)/,Ft=/^(top|right|bottom|left)$/,It=/^(none|table(?!-c[ea]).+)/,qt=/^margin/,Rt=new RegExp("^("+m+")(.*)$","i"),Ut=new RegExp("^("+m+")(?!px)[a-z%]+$","i"),zt=new RegExp("^([-+])=("+m+")","i"),Wt={BODY:"block"},Xt={position:"absolute",visibility:"hidden",display:"block"},Vt={letterSpacing:0,fontWeight:400},$t=["Top","Right","Bottom","Left"],Jt=["Webkit","O","Moz","ms"],Kt=v.fn.toggle;v.fn.extend({css:function(e,n){return v.access(this,function(e,n,r){return r!==t?v.style(e,n,r):v.css(e,n)},e,n,arguments.length>1)},show:function(){return Yt(this,!0)},hide:function(){return Yt(this)},toggle:function(e,t){var n=typeof e=="boolean";return v.isFunction(e)&&v.isFunction(t)?Kt.apply(this,arguments):this.each(function(){(n?e:Gt(this))?v(this).show():v(this).hide()})}}),v.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Dt(e,"opacity");return n===""?"1":n}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":v.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;var s,o,u,a=v.camelCase(n),f=e.style;n=v.cssProps[a]||(v.cssProps[a]=Qt(f,a)),u=v.cssHooks[n]||v.cssHooks[a];if(r===t)return u&&"get"in u&&(s=u.get(e,!1,i))!==t?s:f[n];o=typeof r,o==="string"&&(s=zt.exec(r))&&(r=(s[1]+1)*s[2]+parseFloat(v.css(e,n)),o="number");if(r==null||o==="number"&&isNaN(r))return;o==="number"&&!v.cssNumber[a]&&(r+="px");if(!u||!("set"in u)||(r=u.set(e,r,i))!==t)try{f[n]=r}catch(l){}},css:function(e,n,r,i){var s,o,u,a=v.camelCase(n);return n=v.cssProps[a]||(v.cssProps[a]=Qt(e.style,a)),u=v.cssHooks[n]||v.cssHooks[a],u&&"get"in u&&(s=u.get(e,!0,i)),s===t&&(s=Dt(e,n)),s==="normal"&&n in Vt&&(s=Vt[n]),r||i!==t?(o=parseFloat(s),r||v.isNumeric(o)?o||0:s):s},swap:function(e,t,n){var r,i,s={};for(i in t)s[i]=e.style[i],e.style[i]=t[i];r=n.call(e);for(i in t)e.style[i]=s[i];return r}}),e.getComputedStyle?Dt=function(t,n){var r,i,s,o,u=e.getComputedStyle(t,null),a=t.style;return u&&(r=u.getPropertyValue(n)||u[n],r===""&&!v.contains(t.ownerDocument,t)&&(r=v.style(t,n)),Ut.test(r)&&qt.test(n)&&(i=a.width,s=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=u.width,a.width=i,a.minWidth=s,a.maxWidth=o)),r}:i.documentElement.currentStyle&&(Dt=function(e,t){var n,r,i=e.currentStyle&&e.currentStyle[t],s=e.style;return i==null&&s&&s[t]&&(i=s[t]),Ut.test(i)&&!Ft.test(t)&&(n=s.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),s.left=t==="fontSize"?"1em":i,i=s.pixelLeft+"px",s.left=n,r&&(e.runtimeStyle.left=r)),i===""?"auto":i}),v.each(["height","width"],function(e,t){v.cssHooks[t]={get:function(e,n,r){if(n)return e.offsetWidth===0&&It.test(Dt(e,"display"))?v.swap(e,Xt,function(){return tn(e,t,r)}):tn(e,t,r)},set:function(e,n,r){return Zt(e,n,r?en(e,t,r,v.support.boxSizing&&v.css(e,"boxSizing")==="border-box"):0)}}}),v.support.opacity||(v.cssHooks.opacity={get:function(e,t){return jt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=v.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";n.zoom=1;if(t>=1&&v.trim(s.replace(Bt,""))===""&&n.removeAttribute){n.removeAttribute("filter");if(r&&!r.filter)return}n.filter=Bt.test(s)?s.replace(Bt,i):s+" "+i}}),v(function(){v.support.reliableMarginRight||(v.cssHooks.marginRight={get:function(e,t){return v.swap(e,{display:"inline-block"},function(){if(t)return Dt(e,"marginRight")})}}),!v.support.pixelPosition&&v.fn.position&&v.each(["top","left"],function(e,t){v.cssHooks[t]={get:function(e,n){if(n){var r=Dt(e,t);return Ut.test(r)?v(e).position()[t]+"px":r}}}})}),v.expr&&v.expr.filters&&(v.expr.filters.hidden=function(e){return e.offsetWidth===0&&e.offsetHeight===0||!v.support.reliableHiddenOffsets&&(e.style&&e.style.display||Dt(e,"display"))==="none"},v.expr.filters.visible=function(e){return!v.expr.filters.hidden(e)}),v.each({margin:"",padding:"",border:"Width"},function(e,t){v.cssHooks[e+t]={expand:function(n){var r,i=typeof n=="string"?n.split(" "):[n],s={};for(r=0;r<4;r++)s[e+$t[r]+t]=i[r]||i[r-2]||i[0];return s}},qt.test(e)||(v.cssHooks[e+t].set=Zt)});var rn=/%20/g,sn=/\[\]$/,on=/\r?\n/g,un=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,an=/^(?:select|textarea)/i;v.fn.extend({serialize:function(){return v.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?v.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||an.test(this.nodeName)||un.test(this.type))}).map(function(e,t){var n=v(this).val();return n==null?null:v.isArray(n)?v.map(n,function(e,n){return{name:t.name,value:e.replace(on,"\r\n")}}):{name:t.name,value:n.replace(on,"\r\n")}}).get()}}),v.param=function(e,n){var r,i=[],s=function(e,t){t=v.isFunction(t)?t():t==null?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};n===t&&(n=v.ajaxSettings&&v.ajaxSettings.traditional);if(v.isArray(e)||e.jquery&&!v.isPlainObject(e))v.each(e,function(){s(this.name,this.value)});else for(r in e)fn(r,e[r],n,s);return i.join("&").replace(rn,"+")};var ln,cn,hn=/#.*$/,pn=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,dn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,vn=/^(?:GET|HEAD)$/,mn=/^\/\//,gn=/\?/,yn=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bn=/([?&])_=[^&]*/,wn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,En=v.fn.load,Sn={},xn={},Tn=["*/"]+["*"];try{cn=s.href}catch(Nn){cn=i.createElement("a"),cn.href="",cn=cn.href}ln=wn.exec(cn.toLowerCase())||[],v.fn.load=function(e,n,r){if(typeof e!="string"&&En)return En.apply(this,arguments);if(!this.length)return this;var i,s,o,u=this,a=e.indexOf(" ");return a>=0&&(i=e.slice(a,e.length),e=e.slice(0,a)),v.isFunction(n)?(r=n,n=t):n&&typeof n=="object"&&(s="POST"),v.ajax({url:e,type:s,dataType:"html",data:n,complete:function(e,t){r&&u.each(r,o||[e.responseText,t,e])}}).done(function(e){o=arguments,u.html(i?v("<div>").append(e.replace(yn,"")).find(i):e)}),this},v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){v.fn[t]=function(e){return this.on(t,e)}}),v.each(["get","post"],function(e,n){v[n]=function(e,r,i,s){return v.isFunction(r)&&(s=s||i,i=r,r=t),v.ajax({type:n,url:e,data:r,success:i,dataType:s})}}),v.extend({getScript:function(e,n){return v.get(e,t,n,"script")},getJSON:function(e,t,n){return v.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?Ln(e,v.ajaxSettings):(t=e,e=v.ajaxSettings),Ln(e,t),e},ajaxSettings:{url:cn,isLocal:dn.test(ln[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Tn},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":v.parseJSON,"text xml":v.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:Cn(Sn),ajaxTransport:Cn(xn),ajax:function(e,n){function T(e,n,s,a){var l,y,b,w,S,T=n;if(E===2)return;E=2,u&&clearTimeout(u),o=t,i=a||"",x.readyState=e>0?4:0,s&&(w=An(c,x,s));if(e>=200&&e<300||e===304)c.ifModified&&(S=x.getResponseHeader("Last-Modified"),S&&(v.lastModified[r]=S),S=x.getResponseHeader("Etag"),S&&(v.etag[r]=S)),e===304?(T="notmodified",l=!0):(l=On(c,w),T=l.state,y=l.data,b=l.error,l=!b);else{b=T;if(!T||e)T="error",e<0&&(e=0)}x.status=e,x.statusText=(n||T)+"",l?d.resolveWith(h,[y,T,x]):d.rejectWith(h,[x,T,b]),x.statusCode(g),g=t,f&&p.trigger("ajax"+(l?"Success":"Error"),[x,c,l?y:b]),m.fireWith(h,[x,T]),f&&(p.trigger("ajaxComplete",[x,c]),--v.active||v.event.trigger("ajaxStop"))}typeof e=="object"&&(n=e,e=t),n=n||{};var r,i,s,o,u,a,f,l,c=v.ajaxSetup({},n),h=c.context||c,p=h!==c&&(h.nodeType||h instanceof v)?v(h):v.event,d=v.Deferred(),m=v.Callbacks("once memory"),g=c.statusCode||{},b={},w={},E=0,S="canceled",x={readyState:0,setRequestHeader:function(e,t){if(!E){var n=e.toLowerCase();e=w[n]=w[n]||e,b[e]=t}return this},getAllResponseHeaders:function(){return E===2?i:null},getResponseHeader:function(e){var n;if(E===2){if(!s){s={};while(n=pn.exec(i))s[n[1].toLowerCase()]=n[2]}n=s[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return E||(c.mimeType=e),this},abort:function(e){return e=e||S,o&&o.abort(e),T(0,e),this}};d.promise(x),x.success=x.done,x.error=x.fail,x.complete=m.add,x.statusCode=function(e){if(e){var t;if(E<2)for(t in e)g[t]=[g[t],e[t]];else t=e[x.status],x.always(t)}return this},c.url=((e||c.url)+"").replace(hn,"").replace(mn,ln[1]+"//"),c.dataTypes=v.trim(c.dataType||"*").toLowerCase().split(y),c.crossDomain==null&&(a=wn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===ln[1]&&a[2]===ln[2]&&(a[3]||(a[1]==="http:"?80:443))==(ln[3]||(ln[1]==="http:"?80:443)))),c.data&&c.processData&&typeof c.data!="string"&&(c.data=v.param(c.data,c.traditional)),kn(Sn,c,n,x);if(E===2)return x;f=c.global,c.type=c.type.toUpperCase(),c.hasContent=!vn.test(c.type),f&&v.active++===0&&v.event.trigger("ajaxStart");if(!c.hasContent){c.data&&(c.url+=(gn.test(c.url)?"&":"?")+c.data,delete c.data),r=c.url;if(c.cache===!1){var N=v.now(),C=c.url.replace(bn,"$1_="+N);c.url=C+(C===c.url?(gn.test(c.url)?"&":"?")+"_="+N:"")}}(c.data&&c.hasContent&&c.contentType!==!1||n.contentType)&&x.setRequestHeader("Content-Type",c.contentType),c.ifModified&&(r=r||c.url,v.lastModified[r]&&x.setRequestHeader("If-Modified-Since",v.lastModified[r]),v.etag[r]&&x.setRequestHeader("If-None-Match",v.etag[r])),x.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!=="*"?", "+Tn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)x.setRequestHeader(l,c.headers[l]);if(!c.beforeSend||c.beforeSend.call(h,x,c)!==!1&&E!==2){S="abort";for(l in{success:1,error:1,complete:1})x[l](c[l]);o=kn(xn,c,n,x);if(!o)T(-1,"No Transport");else{x.readyState=1,f&&p.trigger("ajaxSend",[x,c]),c.async&&c.timeout>0&&(u=setTimeout(function(){x.abort("timeout")},c.timeout));try{E=1,o.send(b,T)}catch(k){if(!(E<2))throw k;T(-1,k)}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var Mn=[],_n=/\?/,Dn=/(=)\?(?=&|$)|\?\?/,Pn=v.now();v.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Mn.pop()||v.expando+"_"+Pn++;return this[e]=!0,e}}),v.ajaxPrefilter("json jsonp",function(n,r,i){var s,o,u,a=n.data,f=n.url,l=n.jsonp!==!1,c=l&&Dn.test(f),h=l&&!c&&typeof a=="string"&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Dn.test(a);if(n.dataTypes[0]==="jsonp"||c||h)return s=n.jsonpCallback=v.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,o=e[s],c?n.url=f.replace(Dn,"$1"+s):h?n.data=a.replace(Dn,"$1"+s):l&&(n.url+=(_n.test(f)?"&":"?")+n.jsonp+"="+s),n.converters["script json"]=function(){return u||v.error(s+" was not called"),u[0]},n.dataTypes[0]="json",e[s]=function(){u=arguments},i.always(function(){e[s]=o,n[s]&&(n.jsonpCallback=r.jsonpCallback,Mn.push(s)),u&&v.isFunction(o)&&o(u[0]),u=o=t}),"script"}),v.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return v.globalEval(e),e}}}),v.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),v.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=i.head||i.getElementsByTagName("head")[0]||i.documentElement;return{send:function(s,o){n=i.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState))n.onload=n.onreadystatechange=null,r&&n.parentNode&&r.removeChild(n),n=t,i||o(200,"success")},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var Hn,Bn=e.ActiveXObject?function(){for(var e in Hn)Hn[e](0,1)}:!1,jn=0;v.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&Fn()||In()}:Fn,function(e){v.extend(v.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(v.ajaxSettings.xhr()),v.support.ajax&&v.ajaxTransport(function(n){if(!n.crossDomain||v.support.cors){var r;return{send:function(i,s){var o,u,a=n.xhr();n.username?a.open(n.type,n.url,n.async,n.username,n.password):a.open(n.type,n.url,n.async);if(n.xhrFields)for(u in n.xhrFields)a[u]=n.xhrFields[u];n.mimeType&&a.overrideMimeType&&a.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");try{for(u in i)a.setRequestHeader(u,i[u])}catch(f){}a.send(n.hasContent&&n.data||null),r=function(e,i){var u,f,l,c,h;try{if(r&&(i||a.readyState===4)){r=t,o&&(a.onreadystatechange=v.noop,Bn&&delete Hn[o]);if(i)a.readyState!==4&&a.abort();else{u=a.status,l=a.getAllResponseHeaders(),c={},h=a.responseXML,h&&h.documentElement&&(c.xml=h);try{c.text=a.responseText}catch(p){}try{f=a.statusText}catch(p){f=""}!u&&n.isLocal&&!n.crossDomain?u=c.text?200:404:u===1223&&(u=204)}}}catch(d){i||s(-1,d)}c&&s(u,f,c,l)},n.async?a.readyState===4?setTimeout(r,0):(o=++jn,Bn&&(Hn||(Hn={},v(e).unload(Bn)),Hn[o]=r),a.onreadystatechange=r):r()},abort:function(){r&&r(0,1)}}}});var qn,Rn,Un=/^(?:toggle|show|hide)$/,zn=new RegExp("^(?:([-+])=|)("+m+")([a-z%]*)$","i"),Wn=/queueHooks$/,Xn=[Gn],Vn={"*":[function(e,t){var n,r,i=this.createTween(e,t),s=zn.exec(t),o=i.cur(),u=+o||0,a=1,f=20;if(s){n=+s[2],r=s[3]||(v.cssNumber[e]?"":"px");if(r!=="px"&&u){u=v.css(i.elem,e,!0)||n||1;do a=a||".5",u/=a,v.style(i.elem,e,u+r);while(a!==(a=i.cur()/o)&&a!==1&&--f)}i.unit=r,i.start=u,i.end=s[1]?u+(s[1]+1)*n:n}return i}]};v.Animation=v.extend(Kn,{tweener:function(e,t){v.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;r<i;r++)n=e[r],Vn[n]=Vn[n]||[],Vn[n].unshift(t)},prefilter:function(e,t){t?Xn.unshift(e):Xn.push(e)}}),v.Tween=Yn,Yn.prototype={constructor:Yn,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(v.cssNumber[n]?"":"px")},cur:function(){var e=Yn.propHooks[this.prop];return e&&e.get?e.get(this):Yn.propHooks._default.get(this)},run:function(e){var t,n=Yn.propHooks[this.prop];return this.options.duration?this.pos=t=v.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Yn.propHooks._default.set(this),this}},Yn.prototype.init.prototype=Yn.prototype,Yn.propHooks={_default:{get:function(e){var t;return e.elem[e.prop]==null||!!e.elem.style&&e.elem.style[e.prop]!=null?(t=v.css(e.elem,e.prop,!1,""),!t||t==="auto"?0:t):e.elem[e.prop]},set:function(e){v.fx.step[e.prop]?v.fx.step[e.prop](e):e.elem.style&&(e.elem.style[v.cssProps[e.prop]]!=null||v.cssHooks[e.prop])?v.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Yn.propHooks.scrollTop=Yn.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},v.each(["toggle","show","hide"],function(e,t){var n=v.fn[t];v.fn[t]=function(r,i,s){return r==null||typeof r=="boolean"||!e&&v.isFunction(r)&&v.isFunction(i)?n.apply(this,arguments):this.animate(Zn(t,!0),r,i,s)}}),v.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Gt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=v.isEmptyObject(e),s=v.speed(t,n,r),o=function(){var t=Kn(this,v.extend({},e),s);i&&t.stop(!0)};return i||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return typeof e!="string"&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=e!=null&&e+"queueHooks",s=v.timers,o=v._data(this);if(n)o[n]&&o[n].stop&&i(o[n]);else for(n in o)o[n]&&o[n].stop&&Wn.test(n)&&i(o[n]);for(n=s.length;n--;)s[n].elem===this&&(e==null||s[n].queue===e)&&(s[n].anim.stop(r),t=!1,s.splice(n,1));(t||!r)&&v.dequeue(this,e)})}}),v.each({slideDown:Zn("show"),slideUp:Zn("hide"),slideToggle:Zn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){v.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),v.speed=function(e,t,n){var r=e&&typeof e=="object"?v.extend({},e):{complete:n||!n&&t||v.isFunction(e)&&e,duration:e,easing:n&&t||t&&!v.isFunction(t)&&t};r.duration=v.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in v.fx.speeds?v.fx.speeds[r.duration]:v.fx.speeds._default;if(r.queue==null||r.queue===!0)r.queue="fx";return r.old=r.complete,r.complete=function(){v.isFunction(r.old)&&r.old.call(this),r.queue&&v.dequeue(this,r.queue)},r},v.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},v.timers=[],v.fx=Yn.prototype.init,v.fx.tick=function(){var e,n=v.timers,r=0;qn=v.now();for(;r<n.length;r++)e=n[r],!e()&&n[r]===e&&n.splice(r--,1);n.length||v.fx.stop(),qn=t},v.fx.timer=function(e){e()&&v.timers.push(e)&&!Rn&&(Rn=setInterval(v.fx.tick,v.fx.interval))},v.fx.interval=13,v.fx.stop=function(){clearInterval(Rn),Rn=null},v.fx.speeds={slow:600,fast:200,_default:400},v.fx.step={},v.expr&&v.expr.filters&&(v.expr.filters.animated=function(e){return v.grep(v.timers,function(t){return e===t.elem}).length});var er=/^(?:body|html)$/i;v.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){v.offset.setOffset(this,e,t)});var n,r,i,s,o,u,a,f={top:0,left:0},l=this[0],c=l&&l.ownerDocument;if(!c)return;return(r=c.body)===l?v.offset.bodyOffset(l):(n=c.documentElement,v.contains(n,l)?(typeof l.getBoundingClientRect!="undefined"&&(f=l.getBoundingClientRect()),i=tr(c),s=n.clientTop||r.clientTop||0,o=n.clientLeft||r.clientLeft||0,u=i.pageYOffset||n.scrollTop,a=i.pageXOffset||n.scrollLeft,{top:f.top+u-s,left:f.left+a-o}):f)},v.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return v.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(v.css(e,"marginTop"))||0,n+=parseFloat(v.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=v.css(e,"position");r==="static"&&(e.style.position="relative");var i=v(e),s=i.offset(),o=v.css(e,"top"),u=v.css(e,"left"),a=(r==="absolute"||r==="fixed")&&v.inArray("auto",[o,u])>-1,f={},l={},c,h;a?(l=i.position(),c=l.top,h=l.left):(c=parseFloat(o)||0,h=parseFloat(u)||0),v.isFunction(t)&&(t=t.call(e,n,s)),t.top!=null&&(f.top=t.top-s.top+c),t.left!=null&&(f.left=t.left-s.left+h),"using"in t?t.using.call(e,f):i.css(f)}},v.fn.extend({position:function(){if(!this[0])return;var e=this[0],t=this.offsetParent(),n=this.offset(),r=er.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(v.css(e,"marginTop"))||0,n.left-=parseFloat(v.css(e,"marginLeft"))||0,r.top+=parseFloat(v.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(v.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||i.body;while(e&&!er.test(e.nodeName)&&v.css(e,"position")==="static")e=e.offsetParent;return e||i.body})}}),v.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);v.fn[e]=function(i){return v.access(this,function(e,i,s){var o=tr(e);if(s===t)return o?n in o?o[n]:o.document.documentElement[i]:e[i];o?o.scrollTo(r?v(o).scrollLeft():s,r?s:v(o).scrollTop()):e[i]=s},e,i,arguments.length,null)}}),v.each({Height:"height",Width:"width"},function(e,n){v.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){v.fn[i]=function(i,s){var o=arguments.length&&(r||typeof i!="boolean"),u=r||(i===!0||s===!0?"margin":"border");return v.access(this,function(n,r,i){var s;return v.isWindow(n)?n.document.documentElement["client"+e]:n.nodeType===9?(s=n.documentElement,Math.max(n.body["scroll"+e],s["scroll"+e],n.body["offset"+e],s["offset"+e],s["client"+e])):i===t?v.css(n,r,i,u):v.style(n,r,i,u)},n,o?i:t,o,null)}})}),e.jQuery=e.$=v,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return v})})(window);
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
/* jquery.nicescroll
-- version 3.7.6
-- copyright 2017-07-19 InuYaksa*2017
-- licensed under the MIT
--
-- https://nicescroll.areaaperta.com/
-- https://github.com/inuyaksa/jquery.nicescroll
--
*/

/* jshint expr: true */

(function (factory) {
    if (typeof define === 'function' && define.amd) {
      // AMD. Register as anonymous module.
      define(['jquery'], factory);
    } else if (typeof exports === 'object') {
      // Node/CommonJS.
      module.exports = factory(require('jquery'));
    } else {
      // Browser globals.
      factory(jQuery);
    }
  }(function (jQuery) {
  
    "use strict";
  
    // globals
    var domfocus = false,
      mousefocus = false,
      tabindexcounter = 0,
      ascrailcounter = 2000,
      globalmaxzindex = 0;
  
    var $ = jQuery,       // sandbox
      _doc = document,
      _win = window,
      $window = $(_win);
  
    var delegatevents = [];
  
    // http://stackoverflow.com/questions/2161159/get-script-path
    function getScriptPath() {
      var scripts = _doc.currentScript || (function () { var s = _doc.getElementsByTagName('script'); return (s.length) ? s[s.length - 1] : false; })();
      var path = scripts ? scripts.src.split('?')[0] : '';
      return (path.split('/').length > 0) ? path.split('/').slice(0, -1).join('/') + '/' : '';
    }
  
    // based on code by Paul Irish https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/  
    var setAnimationFrame = _win.requestAnimationFrame || _win.webkitRequestAnimationFrame || _win.mozRequestAnimationFrame || false;
    var clearAnimationFrame = _win.cancelAnimationFrame || _win.webkitCancelAnimationFrame || _win.mozCancelAnimationFrame || false;
  
    if (!setAnimationFrame) {
      var anilasttime = 0;
      setAnimationFrame = function (callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - anilasttime));
        var id = _win.setTimeout(function () { callback(currTime + timeToCall); },
          timeToCall);
        anilasttime = currTime + timeToCall;
        return id;
      };
      clearAnimationFrame = function (id) {
        _win.clearTimeout(id);
      };
    } else {
      if (!_win.cancelAnimationFrame) clearAnimationFrame = function (id) { };
    }
  
    var ClsMutationObserver = _win.MutationObserver || _win.WebKitMutationObserver || false;
  
    var now = Date.now || function () { return new Date().getTime(); };
  
    var _globaloptions = {
      zindex: "auto",
      cursoropacitymin: 0,
      cursoropacitymax: 1,
      cursorcolor: "#424242",
      cursorwidth: "6px",
      cursorborder: "1px solid #fff",
      cursorborderradius: "5px",
      scrollspeed: 40,
      mousescrollstep: 9 * 3,
      touchbehavior: false,   // deprecated
      emulatetouch: false,    // replacing touchbehavior
      hwacceleration: true,
      usetransition: true,
      boxzoom: false,
      dblclickzoom: true,
      gesturezoom: true,
      grabcursorenabled: true,
      autohidemode: true,
      background: "",
      iframeautoresize: true,
      cursorminheight: 32,
      preservenativescrolling: true,
      railoffset: false,
      railhoffset: false,
      bouncescroll: true,
      spacebarenabled: true,
      railpadding: {
        top: 0,
        right: 0,
        left: 0,
        bottom: 0
      },
      disableoutline: true,
      horizrailenabled: true,
      railalign: "right",
      railvalign: "bottom",
      enabletranslate3d: true,
      enablemousewheel: true,
      enablekeyboard: true,
      smoothscroll: true,
      sensitiverail: true,
      enablemouselockapi: true,
      //      cursormaxheight:false,
      cursorfixedheight: false,
      directionlockdeadzone: 6,
      hidecursordelay: 400,
      nativeparentscrolling: true,
      enablescrollonselection: true,
      overflowx: true,
      overflowy: true,
      cursordragspeed: 0.3,
      rtlmode: "auto",
      cursordragontouch: false,
      oneaxismousemode: "auto",
      scriptpath: getScriptPath(),
      preventmultitouchscrolling: true,
      disablemutationobserver: false,
      enableobserver: true,
      scrollbarid: false,
      scrollCLass: false
    };
  
    var browserdetected = false;
  
    var getBrowserDetection = function () {
  
      if (browserdetected) return browserdetected;
  
      var _el = _doc.createElement('DIV'),
        _style = _el.style,
        _agent = navigator.userAgent,
        _platform = navigator.platform,
        d = {};
  
      d.haspointerlock = "pointerLockElement" in _doc || "webkitPointerLockElement" in _doc || "mozPointerLockElement" in _doc;
  
      d.isopera = ("opera" in _win); // 12-
      d.isopera12 = (d.isopera && ("getUserMedia" in navigator));
      d.isoperamini = (Object.prototype.toString.call(_win.operamini) === "[object OperaMini]");
  
      d.isie = (("all" in _doc) && ("attachEvent" in _el) && !d.isopera); //IE10-
      d.isieold = (d.isie && !("msInterpolationMode" in _style)); // IE6 and older
      d.isie7 = d.isie && !d.isieold && (!("documentMode" in _doc) || (_doc.documentMode === 7));
      d.isie8 = d.isie && ("documentMode" in _doc) && (_doc.documentMode === 8);
      d.isie9 = d.isie && ("performance" in _win) && (_doc.documentMode === 9);
      d.isie10 = d.isie && ("performance" in _win) && (_doc.documentMode === 10);
      d.isie11 = ("msRequestFullscreen" in _el) && (_doc.documentMode >= 11); // IE11+
  
      d.ismsedge = ("msCredentials" in _win);  // MS Edge 14+
  
      d.ismozilla = ("MozAppearance" in _style);
  
      d.iswebkit = !d.ismsedge && ("WebkitAppearance" in _style);
  
      d.ischrome = d.iswebkit && ("chrome" in _win);
      d.ischrome38 = (d.ischrome && ("touchAction" in _style)); // behavior changed in touch emulation    
      d.ischrome22 = (!d.ischrome38) && (d.ischrome && d.haspointerlock);
      d.ischrome26 = (!d.ischrome38) && (d.ischrome && ("transition" in _style)); // issue with transform detection (maintain prefix)
  
      d.cantouch = ("ontouchstart" in _doc.documentElement) || ("ontouchstart" in _win); // with detection for Chrome Touch Emulation    
      d.hasw3ctouch = (_win.PointerEvent || false) && ((navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)); //IE11 pointer events, following W3C Pointer Events spec
      d.hasmstouch = (!d.hasw3ctouch) && (_win.MSPointerEvent || false); // IE10 pointer events
  
      d.ismac = /^mac$/i.test(_platform);
  
      d.isios = d.cantouch && /iphone|ipad|ipod/i.test(_platform);
      d.isios4 = d.isios && !("seal" in Object);
      d.isios7 = d.isios && ("webkitHidden" in _doc);  //iOS 7+
      d.isios8 = d.isios && ("hidden" in _doc);  //iOS 8+
      d.isios10 = d.isios && _win.Proxy;  //iOS 10+
  
      d.isandroid = (/android/i.test(_agent));
  
      d.haseventlistener = ("addEventListener" in _el);
  
      d.trstyle = false;
      d.hastransform = false;
      d.hastranslate3d = false;
      d.transitionstyle = false;
      d.hastransition = false;
      d.transitionend = false;
  
      d.trstyle = "transform";
      d.hastransform = ("transform" in _style) || (function () {
        var check = ['msTransform', 'webkitTransform', 'MozTransform', 'OTransform'];
        for (var a = 0, c = check.length; a < c; a++) {
          if (_style[check[a]] !== undefined) {
            d.trstyle = check[a];
            break;
          }
        }
        d.hastransform = (!!d.trstyle);
      })();
  
      if (d.hastransform) {
        _style[d.trstyle] = "translate3d(1px,2px,3px)";
        d.hastranslate3d = /translate3d/.test(_style[d.trstyle]);
      }
  
      d.transitionstyle = "transition";
      d.prefixstyle = '';
      d.transitionend = "transitionend";
  
      d.hastransition = ("transition" in _style) || (function () {
  
        d.transitionend = false;
        var check = ['webkitTransition', 'msTransition', 'MozTransition', 'OTransition', 'OTransition', 'KhtmlTransition'];
        var prefix = ['-webkit-', '-ms-', '-moz-', '-o-', '-o', '-khtml-'];
        var evs = ['webkitTransitionEnd', 'msTransitionEnd', 'transitionend', 'otransitionend', 'oTransitionEnd', 'KhtmlTransitionEnd'];
        for (var a = 0, c = check.length; a < c; a++) {
          if (check[a] in _style) {
            d.transitionstyle = check[a];
            d.prefixstyle = prefix[a];
            d.transitionend = evs[a];
            break;
          }
        }
        if (d.ischrome26) d.prefixstyle = prefix[1];  // always use prefix
  
        d.hastransition = (d.transitionstyle);
  
      })();
  
      function detectCursorGrab() {
        var lst = ['grab', '-webkit-grab', '-moz-grab'];
        if ((d.ischrome && !d.ischrome38) || d.isie) lst = []; // force setting for IE returns false positive and chrome cursor bug
        for (var a = 0, l = lst.length; a < l; a++) {
          var p = lst[a];
          _style.cursor = p;
          if (_style.cursor == p) return p;
        }
        return 'url(https://cdnjs.cloudflare.com/ajax/libs/slider-pro/1.3.0/css/images/openhand.cur),n-resize'; // thanks to https://cdnjs.com/ for the openhand cursor!
      }
      d.cursorgrabvalue = detectCursorGrab();
  
      d.hasmousecapture = ("setCapture" in _el);
  
      d.hasMutationObserver = (ClsMutationObserver !== false);
  
      _el = null; //memory released
  
      browserdetected = d;
  
      return d;
    };
  
    var NiceScrollClass = function (myopt, me) {
  
      var self = this;
  
      this.version = '3.7.6';
      this.name = 'nicescroll';
  
      this.me = me;
  
      var $body = $("body");
  
      var opt = this.opt = {
        doc: $body,
        win: false
      };
  
      $.extend(opt, _globaloptions);  // clone opts
  
      // Options for internal use
      opt.snapbackspeed = 80;
  
      if (myopt || false) {
        for (var a in opt) {
          if (myopt[a] !== undefined) opt[a] = myopt[a];
        }
      }
  
      if (opt.disablemutationobserver) ClsMutationObserver = false;
  
      this.doc = opt.doc;
      this.iddoc = (this.doc && this.doc[0]) ? this.doc[0].id || '' : '';
      this.ispage = /^BODY|HTML/.test((opt.win) ? opt.win[0].nodeName : this.doc[0].nodeName);
      this.haswrapper = (opt.win !== false);
      this.win = opt.win || (this.ispage ? $window : this.doc);
      this.docscroll = (this.ispage && !this.haswrapper) ? $window : this.win;
      this.body = $body;
      this.viewport = false;
  
      this.isfixed = false;
  
      this.iframe = false;
      this.isiframe = ((this.doc[0].nodeName == 'IFRAME') && (this.win[0].nodeName == 'IFRAME'));
  
      this.istextarea = (this.win[0].nodeName == 'TEXTAREA');
  
      this.forcescreen = false; //force to use screen position on events
  
      this.canshowonmouseevent = (opt.autohidemode != "scroll");
  
      // Events jump table    
      this.onmousedown = false;
      this.onmouseup = false;
      this.onmousemove = false;
      this.onmousewheel = false;
      this.onkeypress = false;
      this.ongesturezoom = false;
      this.onclick = false;
  
      // Nicescroll custom events
      this.onscrollstart = false;
      this.onscrollend = false;
      this.onscrollcancel = false;
  
      this.onzoomin = false;
      this.onzoomout = false;
  
      // Let's start!  
      this.view = false;
      this.page = false;
  
      this.scroll = {
        x: 0,
        y: 0
      };
      this.scrollratio = {
        x: 0,
        y: 0
      };
      this.cursorheight = 20;
      this.scrollvaluemax = 0;
  
      // http://dev.w3.org/csswg/css-writing-modes-3/#logical-to-physical
      // http://dev.w3.org/csswg/css-writing-modes-3/#svg-writing-mode
      if (opt.rtlmode == "auto") {
        var target = this.win[0] == _win ? this.body : this.win;
        var writingMode = target.css("writing-mode") || target.css("-webkit-writing-mode") || target.css("-ms-writing-mode") || target.css("-moz-writing-mode");
  
        if (writingMode == "horizontal-tb" || writingMode == "lr-tb" || writingMode === "") {
          this.isrtlmode = (target.css("direction") == "rtl");
          this.isvertical = false;
        } else {
          this.isrtlmode = (writingMode == "vertical-rl" || writingMode == "tb" || writingMode == "tb-rl" || writingMode == "rl-tb");
          this.isvertical = (writingMode == "vertical-rl" || writingMode == "tb" || writingMode == "tb-rl");
        }
      } else {
        this.isrtlmode = (opt.rtlmode === true);
        this.isvertical = false;
      }
      //    this.checkrtlmode = false;
  
      this.scrollrunning = false;
  
      this.scrollmom = false;
  
      this.observer = false;  // observer div changes
      this.observerremover = false;  // observer on parent for remove detection
      this.observerbody = false;  // observer on body for position change
  
      if (opt.scrollbarid !== false) {
        this.id = opt.scrollbarid;
      } else {
        do {
          this.id = "ascrail" + (ascrailcounter++);
        } while (_doc.getElementById(this.id));
      }
  
      this.rail = false;
      this.cursor = false;
      this.cursorfreezed = false;
      this.selectiondrag = false;
  
      this.zoom = false;
      this.zoomactive = false;
  
      this.hasfocus = false;
      this.hasmousefocus = false;
  
      //this.visibility = true;
      this.railslocked = false;  // locked by resize
      this.locked = false;  // prevent lost of locked status sets by user
      this.hidden = false; // rails always hidden
      this.cursoractive = true; // user can interact with cursors
  
      this.wheelprevented = false; //prevent mousewheel event
  
      this.overflowx = opt.overflowx;
      this.overflowy = opt.overflowy;
  
      this.nativescrollingarea = false;
      this.checkarea = 0;
  
      this.events = []; // event list for unbind
  
      this.saved = {};  // style saved
  
      this.delaylist = {};
      this.synclist = {};
  
      this.lastdeltax = 0;
      this.lastdeltay = 0;
  
      this.detected = getBrowserDetection();
  
      var cap = $.extend({}, this.detected);
  
      this.canhwscroll = (cap.hastransform && opt.hwacceleration);
      this.ishwscroll = (this.canhwscroll && self.haswrapper);
  
      if (!this.isrtlmode) {
        this.hasreversehr = false;
      } else if (this.isvertical) { // RTL mode with reverse horizontal axis
        this.hasreversehr = !(cap.iswebkit || cap.isie || cap.isie11);
      } else {
        this.hasreversehr = !(cap.iswebkit || (cap.isie && !cap.isie10 && !cap.isie11));
      }
  
      this.istouchcapable = false; // desktop devices with touch screen support
  
      //## Check WebKit-based desktop with touch support
      //## + Firefox 18 nightly build (desktop) false positive (or desktop with touch support)
  
      if (!cap.cantouch && (cap.hasw3ctouch || cap.hasmstouch)) {  // desktop device with multiple input
        this.istouchcapable = true;
      } else if (cap.cantouch && !cap.isios && !cap.isandroid && (cap.iswebkit || cap.ismozilla)) {
        this.istouchcapable = true;
      }
  
      //## disable MouseLock API on user request
      if (!opt.enablemouselockapi) {
        cap.hasmousecapture = false;
        cap.haspointerlock = false;
      }
  
      this.debounced = function (name, fn, tm) {
        if (!self) return;
        var dd = self.delaylist[name] || false;
        if (!dd) {
          self.delaylist[name] = {
            h: setAnimationFrame(function () {
              self.delaylist[name].fn.call(self);
              self.delaylist[name] = false;
            }, tm)
          };
          fn.call(self);
        }
        self.delaylist[name].fn = fn;
      };
  
  
      this.synched = function (name, fn) {
        if (self.synclist[name]) self.synclist[name] = fn;
        else {
          self.synclist[name] = fn;
          setAnimationFrame(function () {
            if (!self) return;
            self.synclist[name] && self.synclist[name].call(self);
            self.synclist[name] = null;
          });
        }
      };
  
      this.unsynched = function (name) {
        if (self.synclist[name]) self.synclist[name] = false;
      };
  
      this.css = function (el, pars) { // save & set
        for (var n in pars) {
          self.saved.css.push([el, n, el.css(n)]);
          el.css(n, pars[n]);
        }
      };
  
      this.scrollTop = function (val) {
        return (val === undefined) ? self.getScrollTop() : self.setScrollTop(val);
      };
  
      this.scrollLeft = function (val) {
        return (val === undefined) ? self.getScrollLeft() : self.setScrollLeft(val);
      };
  
      // derived by by Dan Pupius www.pupius.net
      var BezierClass = function (st, ed, spd, p1, p2, p3, p4) {
  
        this.st = st;
        this.ed = ed;
        this.spd = spd;
  
        this.p1 = p1 || 0;
        this.p2 = p2 || 1;
        this.p3 = p3 || 0;
        this.p4 = p4 || 1;
  
        this.ts = now();
        this.df = ed - st;
      };
      BezierClass.prototype = {
        B2: function (t) {
          return 3 * (1 - t) * (1 - t) * t;
        },
        B3: function (t) {
          return 3 * (1 - t) * t * t;
        },
        B4: function (t) {
          return t * t * t;
        },
        getPos: function () {
          return (now() - this.ts) / this.spd;
        },
        getNow: function () {
          var pc = (now() - this.ts) / this.spd;
          var bz = this.B2(pc) + this.B3(pc) + this.B4(pc);
          return (pc >= 1) ? this.ed : this.st + (this.df * bz) | 0;
        },
        update: function (ed, spd) {
          this.st = this.getNow();
          this.ed = ed;
          this.spd = spd;
          this.ts = now();
          this.df = this.ed - this.st;
          return this;
        }
      };
  
      //derived from http://stackoverflow.com/questions/11236090/
      function getMatrixValues() {
        var tr = self.doc.css(cap.trstyle);
        if (tr && (tr.substr(0, 6) == "matrix")) {
          return tr.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, '').split(/, +/);
        }
        return false;
      }
  
      if (this.ishwscroll) {    // hw accelerated scroll
  
        this.doc.translate = {
          x: 0,
          y: 0,
          tx: "0px",
          ty: "0px"
        };
  
        //this one can help to enable hw accel on ios6 http://indiegamr.com/ios6-html-hardware-acceleration-changes-and-how-to-fix-them/
        if (cap.hastranslate3d && cap.isios) this.doc.css("-webkit-backface-visibility", "hidden"); // prevent flickering http://stackoverflow.com/questions/3461441/      
  
        this.getScrollTop = function (last) {
          if (!last) {
            var mtx = getMatrixValues();
            if (mtx) return (mtx.length == 16) ? -mtx[13] : -mtx[5]; //matrix3d 16 on IE10
            if (self.timerscroll && self.timerscroll.bz) return self.timerscroll.bz.getNow();
          }
          return self.doc.translate.y;
        };
  
        this.getScrollLeft = function (last) {
          if (!last) {
            var mtx = getMatrixValues();
            if (mtx) return (mtx.length == 16) ? -mtx[12] : -mtx[4]; //matrix3d 16 on IE10
            if (self.timerscroll && self.timerscroll.bh) return self.timerscroll.bh.getNow();
          }
          return self.doc.translate.x;
        };
  
        this.notifyScrollEvent = function (el) {
          var e = _doc.createEvent("UIEvents");
          e.initUIEvent("scroll", false, false, _win, 1);
          e.niceevent = true;
          el.dispatchEvent(e);
        };
  
        var cxscrollleft = (this.isrtlmode) ? 1 : -1;
  
        if (cap.hastranslate3d && opt.enabletranslate3d) {
          this.setScrollTop = function (val, silent) {
            self.doc.translate.y = val;
            self.doc.translate.ty = (val * -1) + "px";
            self.doc.css(cap.trstyle, "translate3d(" + self.doc.translate.tx + "," + self.doc.translate.ty + ",0)");
            if (!silent) self.notifyScrollEvent(self.win[0]);
          };
          this.setScrollLeft = function (val, silent) {
            self.doc.translate.x = val;
            self.doc.translate.tx = (val * cxscrollleft) + "px";
            self.doc.css(cap.trstyle, "translate3d(" + self.doc.translate.tx + "," + self.doc.translate.ty + ",0)");
            if (!silent) self.notifyScrollEvent(self.win[0]);
          };
        } else {
          this.setScrollTop = function (val, silent) {
            self.doc.translate.y = val;
            self.doc.translate.ty = (val * -1) + "px";
            self.doc.css(cap.trstyle, "translate(" + self.doc.translate.tx + "," + self.doc.translate.ty + ")");
            if (!silent) self.notifyScrollEvent(self.win[0]);
          };
          this.setScrollLeft = function (val, silent) {
            self.doc.translate.x = val;
            self.doc.translate.tx = (val * cxscrollleft) + "px";
            self.doc.css(cap.trstyle, "translate(" + self.doc.translate.tx + "," + self.doc.translate.ty + ")");
            if (!silent) self.notifyScrollEvent(self.win[0]);
          };
        }
      } else {    // native scroll
  
        this.getScrollTop = function () {
          return self.docscroll.scrollTop();
        };
        this.setScrollTop = function (val) {
          self.docscroll.scrollTop(val);
        };
  
        this.getScrollLeft = function () {
          var val;
          if (!self.hasreversehr) {
            val = self.docscroll.scrollLeft();
          } else if (self.detected.ismozilla) {
            val = self.page.maxw - Math.abs(self.docscroll.scrollLeft());
          } else {
            val = self.page.maxw - self.docscroll.scrollLeft();
          }
          return val;
        };
        this.setScrollLeft = function (val) {
          return setTimeout(function () {
            if (!self) return;
            if (self.hasreversehr) {
              if (self.detected.ismozilla) {
                val = -(self.page.maxw - val);
              } else {
                val = self.page.maxw - val;
              }
            }
            return self.docscroll.scrollLeft(val);
          }, 1);
        };
      }
  
      this.getTarget = function (e) {
        if (!e) return false;
        if (e.target) return e.target;
        if (e.srcElement) return e.srcElement;
        return false;
      };
  
      this.hasParent = function (e, id) {
        if (!e) return false;
        var el = e.target || e.srcElement || e || false;
        while (el && el.id != id) {
          el = el.parentNode || false;
        }
        return (el !== false);
      };
  
      function getZIndex() {
        var dom = self.win;
        if ("zIndex" in dom) return dom.zIndex(); // use jQuery UI method when available
        while (dom.length > 0) {
          if (dom[0].nodeType == 9) return false;
          var zi = dom.css('zIndex');
          if (!isNaN(zi) && zi !== 0) return parseInt(zi);
          dom = dom.parent();
        }
        return false;
      }
  
      //inspired by http://forum.jquery.com/topic/width-includes-border-width-when-set-to-thin-medium-thick-in-ie
      var _convertBorderWidth = {
        "thin": 1,
        "medium": 3,
        "thick": 5
      };
  
      function getWidthToPixel(dom, prop, chkheight) {
        var wd = dom.css(prop);
        var px = parseFloat(wd);
        if (isNaN(px)) {
          px = _convertBorderWidth[wd] || 0;
          var brd = (px == 3) ? ((chkheight) ? (self.win.outerHeight() - self.win.innerHeight()) : (self.win.outerWidth() - self.win.innerWidth())) : 1; //DON'T TRUST CSS
          if (self.isie8 && px) px += 1;
          return (brd) ? px : 0;
        }
        return px;
      }
  
      this.getDocumentScrollOffset = function () {
        return {
          top: _win.pageYOffset || _doc.documentElement.scrollTop,
          left: _win.pageXOffset || _doc.documentElement.scrollLeft
        };
      };
  
      this.getOffset = function () {
        if (self.isfixed) {
          var ofs = self.win.offset();  // fix Chrome auto issue (when right/bottom props only)
          var scrl = self.getDocumentScrollOffset();
          ofs.top -= scrl.top;
          ofs.left -= scrl.left;
          return ofs;
        }
        var ww = self.win.offset();
        if (!self.viewport) return ww;
        var vp = self.viewport.offset();
        return {
          top: ww.top - vp.top,
          left: ww.left - vp.left
        };
      };
  
      this.updateScrollBar = function (len) {
        var pos, off;
        if (self.ishwscroll) {
          self.rail.css({
            height: self.win.innerHeight() - (opt.railpadding.top + opt.railpadding.bottom)
          });
          if (self.railh) self.railh.css({
            width: self.win.innerWidth() - (opt.railpadding.left + opt.railpadding.right)
          });
        } else {
          var wpos = self.getOffset();
          pos = {
            top: wpos.top,
            left: wpos.left - (opt.railpadding.left + opt.railpadding.right)
          };
          pos.top += getWidthToPixel(self.win, 'border-top-width', true);
          pos.left += (self.rail.align) ? self.win.outerWidth() - getWidthToPixel(self.win, 'border-right-width') - self.rail.width : getWidthToPixel(self.win, 'border-left-width');
  
          off = opt.railoffset;
          if (off) {
            if (off.top) pos.top += off.top;
            if (off.left) pos.left += off.left;
          }
  
          if (!self.railslocked) self.rail.css({
            top: pos.top,
            left: pos.left,
            height: ((len) ? len.h : self.win.innerHeight()) - (opt.railpadding.top + opt.railpadding.bottom)
          });
  
          if (self.zoom) {
            self.zoom.css({
              top: pos.top + 1,
              left: (self.rail.align == 1) ? pos.left - 20 : pos.left + self.rail.width + 4
            });
          }
  
          if (self.railh && !self.railslocked) {
            pos = {
              top: wpos.top,
              left: wpos.left
            };
            off = opt.railhoffset;
            if (off) {
              if (off.top) pos.top += off.top;
              if (off.left) pos.left += off.left;
            }
            var y = (self.railh.align) ? pos.top + getWidthToPixel(self.win, 'border-top-width', true) + self.win.innerHeight() - self.railh.height : pos.top + getWidthToPixel(self.win, 'border-top-width', true);
            var x = pos.left + getWidthToPixel(self.win, 'border-left-width');
            self.railh.css({
              top: y - (opt.railpadding.top + opt.railpadding.bottom),
              left: x,
              width: self.railh.width
            });
          }
  
        }
      };
  
      this.doRailClick = function (e, dbl, hr) {
        var fn, pg, cur, pos;
  
        if (self.railslocked) return;
  
        self.cancelEvent(e);
  
        if (!("pageY" in e)) {
          e.pageX = e.clientX + _doc.documentElement.scrollLeft;
          e.pageY = e.clientY + _doc.documentElement.scrollTop;
        }
  
        if (dbl) {
          fn = (hr) ? self.doScrollLeft : self.doScrollTop;
          cur = (hr) ? ((e.pageX - self.railh.offset().left - (self.cursorwidth / 2)) * self.scrollratio.x) : ((e.pageY - self.rail.offset().top - (self.cursorheight / 2)) * self.scrollratio.y);
          self.unsynched("relativexy");
          fn(cur|0);
        } else {
          fn = (hr) ? self.doScrollLeftBy : self.doScrollBy;
          cur = (hr) ? self.scroll.x : self.scroll.y;
          pos = (hr) ? e.pageX - self.railh.offset().left : e.pageY - self.rail.offset().top;
          pg = (hr) ? self.view.w : self.view.h;
          fn((cur >= pos) ? pg : -pg);
        }
  
      };
  
      self.newscrolly = self.newscrollx = 0;
  
      self.hasanimationframe = ("requestAnimationFrame" in _win);
      self.hascancelanimationframe = ("cancelAnimationFrame" in _win);
  
      self.hasborderbox = false;
  
      this.init = function () {
  
        self.saved.css = [];
  
        if (cap.isoperamini) return true; // SORRY, DO NOT WORK!
        if (cap.isandroid && !("hidden" in _doc)) return true; // Android 3- SORRY, DO NOT WORK!
  
        opt.emulatetouch = opt.emulatetouch || opt.touchbehavior;  // mantain compatibility with "touchbehavior"      
  
        self.hasborderbox = _win.getComputedStyle && (_win.getComputedStyle(_doc.body)['box-sizing'] === "border-box");
  
        var _scrollyhidden = { 'overflow-y': 'hidden' };
        if (cap.isie11 || cap.isie10) _scrollyhidden['-ms-overflow-style'] = 'none';  // IE 10 & 11 is always a world apart!
  
        if (self.ishwscroll) {
          this.doc.css(cap.transitionstyle, cap.prefixstyle + 'transform 0ms ease-out');
          if (cap.transitionend) self.bind(self.doc, cap.transitionend, self.onScrollTransitionEnd, false); //I have got to do something usefull!!
        }
  
        self.zindex = "auto";
        if (!self.ispage && opt.zindex == "auto") {
          self.zindex = getZIndex() || "auto";
        } else {
          self.zindex = opt.zindex;
        }
  
        if (!self.ispage && self.zindex != "auto" && self.zindex > globalmaxzindex) {
          globalmaxzindex = self.zindex;
        }
  
        if (self.isie && self.zindex === 0 && opt.zindex == "auto") { // fix IE auto == 0
          self.zindex = "auto";
        }
  
        if (!self.ispage || !cap.isieold) {
  
          var cont = self.docscroll;
          if (self.ispage) cont = (self.haswrapper) ? self.win : self.doc;
  
          self.css(cont, _scrollyhidden);
  
          if (self.ispage && (cap.isie11 || cap.isie)) { // IE 7-11
            self.css($("html"), _scrollyhidden);
          }
  
          if (cap.isios && !self.ispage && !self.haswrapper) self.css($body, {
            "-webkit-overflow-scrolling": "touch"
          }); //force hw acceleration
  
          var cursor = $(_doc.createElement('div'));
          cursor.css({
            position: "relative",
            top: 0,
            "float": "right",
            width: opt.cursorwidth,
            height: 0,
            'background-color': opt.cursorcolor,
            border: opt.cursorborder,
            'background-clip': 'padding-box',
            '-webkit-border-radius': opt.cursorborderradius,
            '-moz-border-radius': opt.cursorborderradius,
            'border-radius': opt.cursorborderradius
          });
  
          cursor.addClass('nicescroll-cursors');
  
          self.cursor = cursor;
  
          var rail = $(_doc.createElement('div'));
          rail.attr('id', self.id);
          rail.addClass('nicescroll-rails nicescroll-rails-vr');
  
          if (opt.scrollCLass) {
              rail.addClass(opt.scrollCLass);
          }
  
          var v, a, kp = ["left", "right", "top", "bottom"];  //**
          for (var n in kp) {
            a = kp[n];
            v = opt.railpadding[a] || 0;
            v && rail.css("padding-" + a, v + "px");
          }
  
          rail.append(cursor);
  
          rail.width = Math.max(parseFloat(opt.cursorwidth), cursor.outerWidth());
          rail.css({
            width: rail.width + "px",
            zIndex: self.zindex,
            background: opt.background,
            cursor: "default"
          });
  
          rail.visibility = true;
          rail.scrollable = true;
  
          rail.align = (opt.railalign == "left") ? 0 : 1;
  
          self.rail = rail;
  
          self.rail.drag = false;
  
          var zoom = false;
          if (opt.boxzoom && !self.ispage && !cap.isieold) {
            zoom = _doc.createElement('div');
  
            self.bind(zoom, "click", self.doZoom);
            self.bind(zoom, "mouseenter", function () {
              self.zoom.css('opacity', opt.cursoropacitymax);
            });
            self.bind(zoom, "mouseleave", function () {
              self.zoom.css('opacity', opt.cursoropacitymin);
            });
  
            self.zoom = $(zoom);
            self.zoom.css({
              cursor: "pointer",
              zIndex: self.zindex,
              backgroundImage: 'url(' + opt.scriptpath + 'zoomico.png)',
              height: 18,
              width: 18,
              backgroundPosition: '0 0'
            });
            if (opt.dblclickzoom) self.bind(self.win, "dblclick", self.doZoom);
            if (cap.cantouch && opt.gesturezoom) {
              self.ongesturezoom = function (e) {
                if (e.scale > 1.5) self.doZoomIn(e);
                if (e.scale < 0.8) self.doZoomOut(e);
                return self.cancelEvent(e);
              };
              self.bind(self.win, "gestureend", self.ongesturezoom);
            }
          }
  
          // init HORIZ
  
          self.railh = false;
          var railh;
  
          if (opt.horizrailenabled) {
  
            self.css(cont, {
              overflowX: 'hidden'
            });
  
            cursor = $(_doc.createElement('div'));
            cursor.css({
              position: "absolute",
              top: 0,
              height: opt.cursorwidth,
              width: 0,
              backgroundColor: opt.cursorcolor,
              border: opt.cursorborder,
              backgroundClip: 'padding-box',
              '-webkit-border-radius': opt.cursorborderradius,
              '-moz-border-radius': opt.cursorborderradius,
              'border-radius': opt.cursorborderradius
            });
  
            if (cap.isieold) cursor.css('overflow', 'hidden');  //IE6 horiz scrollbar issue
  
            cursor.addClass('nicescroll-cursors');
  
            self.cursorh = cursor;
  
            railh = $(_doc.createElement('div'));
            railh.attr('id', self.id + '-hr');
            railh.addClass('nicescroll-rails nicescroll-rails-hr');
            if (opt.scrollCLass) {
                railh.addClass(opt.scrollCLass);
            }
  
            railh.height = Math.max(parseFloat(opt.cursorwidth), cursor.outerHeight());
            railh.css({
              height: railh.height + "px",
              'zIndex': self.zindex,
              "background": opt.background
            });
  
            railh.append(cursor);
  
            railh.visibility = true;
            railh.scrollable = true;
  
            railh.align = (opt.railvalign == "top") ? 0 : 1;
  
            self.railh = railh;
  
            self.railh.drag = false;
  
          }
  
          if (self.ispage) {
  
            rail.css({
              position: "fixed",
              top: 0,
              height: "100%"
            });
  
            rail.css((rail.align) ? { right: 0 } : { left: 0 });
  
            self.body.append(rail);
            if (self.railh) {
              railh.css({
                position: "fixed",
                left: 0,
                width: "100%"
              });
  
              railh.css((railh.align) ? { bottom: 0 } : { top: 0 });
  
              self.body.append(railh);
            }
          } else {
            if (self.ishwscroll) {
              if (self.win.css('position') == 'static') self.css(self.win, { 'position': 'relative' });
              var bd = (self.win[0].nodeName == 'HTML') ? self.body : self.win;
              $(bd).scrollTop(0).scrollLeft(0);  // fix rail position if content already scrolled
              if (self.zoom) {
                self.zoom.css({
                  position: "absolute",
                  top: 1,
                  right: 0,
                  "margin-right": rail.width + 4
                });
                bd.append(self.zoom);
              }
              rail.css({
                position: "absolute",
                top: 0
              });
              rail.css((rail.align) ? { right: 0 } : { left: 0 });
              bd.append(rail);
              if (railh) {
                railh.css({
                  position: "absolute",
                  left: 0,
                  bottom: 0
                });
                railh.css((railh.align) ? { bottom: 0 } : { top: 0 });
                bd.append(railh);
              }
            } else {
              self.isfixed = (self.win.css("position") == "fixed");
              var rlpos = (self.isfixed) ? "fixed" : "absolute";
  
              if (!self.isfixed) self.viewport = self.getViewport(self.win[0]);
              if (self.viewport) {
                self.body = self.viewport;
                if (!(/fixed|absolute/.test(self.viewport.css("position")))) self.css(self.viewport, {
                  "position": "relative"
                });
              }
  
              rail.css({
                position: rlpos
              });
              if (self.zoom) self.zoom.css({
                position: rlpos
              });
              self.updateScrollBar();
              self.body.append(rail);
              if (self.zoom) self.body.append(self.zoom);
              if (self.railh) {
                railh.css({
                  position: rlpos
                });
                self.body.append(railh);
              }
            }
  
            if (cap.isios) self.css(self.win, {
              '-webkit-tap-highlight-color': 'rgba(0,0,0,0)',
              '-webkit-touch-callout': 'none'
            }); // prevent grey layer on click
  
            if (opt.disableoutline) {
              if (cap.isie) self.win.attr("hideFocus", "true"); // IE, prevent dotted rectangle on focused div
              if (cap.iswebkit) self.win.css('outline', 'none');  // Webkit outline
            }
  
          }
  
          if (opt.autohidemode === false) {
            self.autohidedom = false;
            self.rail.css({
              opacity: opt.cursoropacitymax
            });
            if (self.railh) self.railh.css({
              opacity: opt.cursoropacitymax
            });
          } else if ((opt.autohidemode === true) || (opt.autohidemode === "leave")) {
            self.autohidedom = $().add(self.rail);
            if (cap.isie8) self.autohidedom = self.autohidedom.add(self.cursor);
            if (self.railh) self.autohidedom = self.autohidedom.add(self.railh);
            if (self.railh && cap.isie8) self.autohidedom = self.autohidedom.add(self.cursorh);
          } else if (opt.autohidemode == "scroll") {
            self.autohidedom = $().add(self.rail);
            if (self.railh) self.autohidedom = self.autohidedom.add(self.railh);
          } else if (opt.autohidemode == "cursor") {
            self.autohidedom = $().add(self.cursor);
            if (self.railh) self.autohidedom = self.autohidedom.add(self.cursorh);
          } else if (opt.autohidemode == "hidden") {
            self.autohidedom = false;
            self.hide();
            self.railslocked = false;
          }
  
          if (cap.cantouch || self.istouchcapable || opt.emulatetouch || cap.hasmstouch) {
  
            self.scrollmom = new ScrollMomentumClass2D(self);
  
            var delayedclick = null;
  
            self.ontouchstart = function (e) {
  
              if (self.locked) return false;
  
              //if (e.pointerType && e.pointerType != 2 && e.pointerType != "touch") return false;
              if (e.pointerType && (e.pointerType === 'mouse' || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) return false;  // need test on surface!!
  
              self.hasmoving = false;
  
              if (self.scrollmom.timer) {
                self.triggerScrollEnd();
                self.scrollmom.stop();
              }
  
              if (!self.railslocked) {
                var tg = self.getTarget(e);
  
                if (tg) {
                  var skp = (/INPUT/i.test(tg.nodeName)) && (/range/i.test(tg.type));
                  if (skp) return self.stopPropagation(e);
                }
  
                var ismouse = (e.type === "mousedown");
  
                if (!("clientX" in e) && ("changedTouches" in e)) {
                  e.clientX = e.changedTouches[0].clientX;
                  e.clientY = e.changedTouches[0].clientY;
                }
  
                if (self.forcescreen) {
                  var le = e;
                  e = {
                    "original": (e.original) ? e.original : e
                  };
                  e.clientX = le.screenX;
                  e.clientY = le.screenY;
                }
  
                self.rail.drag = {
                  x: e.clientX,
                  y: e.clientY,
                  sx: self.scroll.x,
                  sy: self.scroll.y,
                  st: self.getScrollTop(),
                  sl: self.getScrollLeft(),
                  pt: 2,
                  dl: false,
                  tg: tg
                };
  
                if (self.ispage || !opt.directionlockdeadzone) {
  
                  self.rail.drag.dl = "f";
  
                } else {
  
                  var view = {
                    w: $window.width(),
                    h: $window.height()
                  };
  
                  var page = self.getContentSize();
  
                  var maxh = page.h - view.h;
                  var maxw = page.w - view.w;
  
                  if (self.rail.scrollable && !self.railh.scrollable) self.rail.drag.ck = (maxh > 0) ? "v" : false;
                  else if (!self.rail.scrollable && self.railh.scrollable) self.rail.drag.ck = (maxw > 0) ? "h" : false;
                  else self.rail.drag.ck = false;
  
                }
  
                if (opt.emulatetouch && self.isiframe && cap.isie) {
                  var wp = self.win.position();
                  self.rail.drag.x += wp.left;
                  self.rail.drag.y += wp.top;
                }
  
                self.hasmoving = false;
                self.lastmouseup = false;
                self.scrollmom.reset(e.clientX, e.clientY);
  
                if (tg&&ismouse) {
  
                  var ip = /INPUT|SELECT|BUTTON|TEXTAREA/i.test(tg.nodeName);
                  if (!ip) {
                    if (cap.hasmousecapture) tg.setCapture();
                    if (opt.emulatetouch) {
                      if (tg.onclick && !(tg._onclick || false)) { // intercept DOM0 onclick event
                        tg._onclick = tg.onclick;
                        tg.onclick = function (e) {
                          if (self.hasmoving) return false;
                          tg._onclick.call(this, e);
                        };
                      }
                      return self.cancelEvent(e);
                    }
                    return self.stopPropagation(e);
                  }
  
                  if (/SUBMIT|CANCEL|BUTTON/i.test($(tg).attr('type'))) {
                    self.preventclick = {
                      "tg": tg,
                      "click": false
                    };
                  }
  
                }
              }
  
            };
  
            self.ontouchend = function (e) {
  
              if (!self.rail.drag) return true;
  
              if (self.rail.drag.pt == 2) {
                //if (e.pointerType && e.pointerType != 2 && e.pointerType != "touch") return false;
                if (e.pointerType && (e.pointerType === 'mouse' || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) return false;
  
                self.rail.drag = false;
  
                var ismouse = (e.type === "mouseup");
  
                if (self.hasmoving) {
                  self.scrollmom.doMomentum();
                  self.lastmouseup = true;
                  self.hideCursor();
                  if (cap.hasmousecapture) _doc.releaseCapture();
                  if (ismouse) return self.cancelEvent(e);
                }
  
              }
              else if (self.rail.drag.pt == 1) {
                return self.onmouseup(e);
              }
  
            };
  
            var moveneedoffset = (opt.emulatetouch && self.isiframe && !cap.hasmousecapture);
  
            var locktollerance = opt.directionlockdeadzone * 0.3 | 0;
  
            self.ontouchmove = function (e, byiframe) {
  
              if (!self.rail.drag) return true;
  
              if (e.targetTouches && opt.preventmultitouchscrolling) {
                if (e.targetTouches.length > 1) return true; // multitouch
              }
  
              //if (e.pointerType && e.pointerType != 2 && e.pointerType != "touch") return false;
              if (e.pointerType && (e.pointerType === 'mouse' || e.pointerType === e.MSPOINTER_TYPE_MOUSE)) return true;
  
              if (self.rail.drag.pt == 2) {
  
                if (("changedTouches" in e)) {
                  e.clientX = e.changedTouches[0].clientX;
                  e.clientY = e.changedTouches[0].clientY;
                }
  
                var ofy, ofx;
                ofx = ofy = 0;
  
                if (moveneedoffset && !byiframe) {
                  var wp = self.win.position();
                  ofx = -wp.left;
                  ofy = -wp.top;
                }
  
                var fy = e.clientY + ofy;
                var my = (fy - self.rail.drag.y);
                var fx = e.clientX + ofx;
                var mx = (fx - self.rail.drag.x);
  
                var ny = self.rail.drag.st - my;
  
                if (self.ishwscroll && opt.bouncescroll) {
                  if (ny < 0) {
                    ny = Math.round(ny / 2);
                  } else if (ny > self.page.maxh) {
                    ny = self.page.maxh + Math.round((ny - self.page.maxh) / 2);
                  }
                } else {
                  if (ny < 0) {
                    ny = 0;
                    fy = 0;
                  }
                  else if (ny > self.page.maxh) {
                    ny = self.page.maxh;
                    fy = 0;
                  }
                  if (fy === 0 && !self.hasmoving) {
                    if (!self.ispage) self.rail.drag = false;
                    return true;
                  }
                }
  
                var nx = self.getScrollLeft();
  
                if (self.railh && self.railh.scrollable) {
                  nx = (self.isrtlmode) ? mx - self.rail.drag.sl : self.rail.drag.sl - mx;
  
                  if (self.ishwscroll && opt.bouncescroll) {
                    if (nx < 0) {
                      nx = Math.round(nx / 2);
                    } else if (nx > self.page.maxw) {
                      nx = self.page.maxw + Math.round((nx - self.page.maxw) / 2);
                    }
                  } else {
                    if (nx < 0) {
                      nx = 0;
                      fx = 0;
                    }
                    if (nx > self.page.maxw) {
                      nx = self.page.maxw;
                      fx = 0;
                    }
                  }
  
                }
  
  
                if (!self.hasmoving) {
  
                  if (self.rail.drag.y === e.clientY && self.rail.drag.x === e.clientX) return self.cancelEvent(e);  // prevent first useless move event 
  
                  var ay = Math.abs(my);
                  var ax = Math.abs(mx);
                  var dz = opt.directionlockdeadzone;
  
                  if (!self.rail.drag.ck) {
                    if (ay > dz && ax > dz) self.rail.drag.dl = "f";
                    else if (ay > dz) self.rail.drag.dl = (ax > locktollerance) ? "f" : "v";
                    else if (ax > dz) self.rail.drag.dl = (ay > locktollerance) ? "f" : "h";
                  }
                  else if (self.rail.drag.ck == "v") {
                    if (ax > dz && ay <= locktollerance) {
                      self.rail.drag = false;
                    }
                    else if (ay > dz) self.rail.drag.dl = "v";
  
                  }
                  else if (self.rail.drag.ck == "h") {
  
                    if (ay > dz && ax <= locktollerance) {
                      self.rail.drag = false;
                    }
                    else if (ax > dz) self.rail.drag.dl = "h";
  
                  }
  
                  if (!self.rail.drag.dl) return self.cancelEvent(e);
  
                  self.triggerScrollStart(e.clientX, e.clientY, 0, 0, 0);
                  self.hasmoving = true;
                }
  
                if (self.preventclick && !self.preventclick.click) {
                  self.preventclick.click = self.preventclick.tg.onclick || false;
                  self.preventclick.tg.onclick = self.onpreventclick;
                }
  
                if (self.rail.drag.dl) {
                  if (self.rail.drag.dl == "v") nx = self.rail.drag.sl;
                  else if (self.rail.drag.dl == "h") ny = self.rail.drag.st;
                }
  
                self.synched("touchmove", function () {
                  if (self.rail.drag && (self.rail.drag.pt == 2)) {
                    if (self.prepareTransition) self.resetTransition();
                    if (self.rail.scrollable) self.setScrollTop(ny);
                    self.scrollmom.update(fx, fy);
                    if (self.railh && self.railh.scrollable) {
                      self.setScrollLeft(nx);
                      self.showCursor(ny, nx);
                    } else {
                      self.showCursor(ny);
                    }
                    if (cap.isie10) _doc.selection.clear();
                  }
                });
  
                return self.cancelEvent(e);
  
              }
              else if (self.rail.drag.pt == 1) { // drag on cursor
                return self.onmousemove(e);
              }
  
            };
  
            self.ontouchstartCursor = function (e, hronly) {
              if (self.rail.drag && self.rail.drag.pt != 3) return;
              if (self.locked) return self.cancelEvent(e);
              self.cancelScroll();
              self.rail.drag = {
                x: e.touches[0].clientX,
                y: e.touches[0].clientY,
                sx: self.scroll.x,
                sy: self.scroll.y,
                pt: 3,
                hr: (!!hronly)
              };
              var tg = self.getTarget(e);
              if (!self.ispage && cap.hasmousecapture) tg.setCapture();
              if (self.isiframe && !cap.hasmousecapture) {
                self.saved.csspointerevents = self.doc.css("pointer-events");
                self.css(self.doc, { "pointer-events": "none" });
              }
              return self.cancelEvent(e);
            };
  
            self.ontouchendCursor = function (e) {
              if (self.rail.drag) {
                if (cap.hasmousecapture) _doc.releaseCapture();
                if (self.isiframe && !cap.hasmousecapture) self.doc.css("pointer-events", self.saved.csspointerevents);
                if (self.rail.drag.pt != 3) return;
                self.rail.drag = false;
                return self.cancelEvent(e);
              }
            };
  
            self.ontouchmoveCursor = function (e) {
              if (self.rail.drag) {
                if (self.rail.drag.pt != 3) return;
  
                self.cursorfreezed = true;
  
                if (self.rail.drag.hr) {
                  self.scroll.x = self.rail.drag.sx + (e.touches[0].clientX - self.rail.drag.x);
                  if (self.scroll.x < 0) self.scroll.x = 0;
                  var mw = self.scrollvaluemaxw;
                  if (self.scroll.x > mw) self.scroll.x = mw;
                } else {
                  self.scroll.y = self.rail.drag.sy + (e.touches[0].clientY - self.rail.drag.y);
                  if (self.scroll.y < 0) self.scroll.y = 0;
                  var my = self.scrollvaluemax;
                  if (self.scroll.y > my) self.scroll.y = my;
                }
  
                self.synched('touchmove', function () {
                  if (self.rail.drag && (self.rail.drag.pt == 3)) {
                    self.showCursor();
                    if (self.rail.drag.hr) self.doScrollLeft(Math.round(self.scroll.x * self.scrollratio.x), opt.cursordragspeed);
                    else self.doScrollTop(Math.round(self.scroll.y * self.scrollratio.y), opt.cursordragspeed);
                  }
                });
  
                return self.cancelEvent(e);
              }
  
            };
  
          }
  
          self.onmousedown = function (e, hronly) {
            if (self.rail.drag && self.rail.drag.pt != 1) return;
            if (self.railslocked) return self.cancelEvent(e);
            self.cancelScroll();
            self.rail.drag = {
              x: e.clientX,
              y: e.clientY,
              sx: self.scroll.x,
              sy: self.scroll.y,
              pt: 1,
              hr: hronly || false
            };
            var tg = self.getTarget(e);
  
            if (cap.hasmousecapture) tg.setCapture();
            if (self.isiframe && !cap.hasmousecapture) {
              self.saved.csspointerevents = self.doc.css("pointer-events");
              self.css(self.doc, {
                "pointer-events": "none"
              });
            }
            self.hasmoving = false;
            return self.cancelEvent(e);
          };
  
          self.onmouseup = function (e) {
            if (self.rail.drag) {
              if (self.rail.drag.pt != 1) return true;
  
              if (cap.hasmousecapture) _doc.releaseCapture();
              if (self.isiframe && !cap.hasmousecapture) self.doc.css("pointer-events", self.saved.csspointerevents);
              self.rail.drag = false;
              self.cursorfreezed = false;
              if (self.hasmoving) self.triggerScrollEnd();
              return self.cancelEvent(e);
            }
          };
  
          self.onmousemove = function (e) {
            if (self.rail.drag) {
              if (self.rail.drag.pt !== 1) return;
  
              if (cap.ischrome && e.which === 0) return self.onmouseup(e);
  
              self.cursorfreezed = true;
  
              if (!self.hasmoving) self.triggerScrollStart(e.clientX, e.clientY, 0, 0, 0);
  
              self.hasmoving = true;
  
              if (self.rail.drag.hr) {
                self.scroll.x = self.rail.drag.sx + (e.clientX - self.rail.drag.x);
                if (self.scroll.x < 0) self.scroll.x = 0;
                var mw = self.scrollvaluemaxw;
                if (self.scroll.x > mw) self.scroll.x = mw;
              } else {
                self.scroll.y = self.rail.drag.sy + (e.clientY - self.rail.drag.y);
                if (self.scroll.y < 0) self.scroll.y = 0;
                var my = self.scrollvaluemax;
                if (self.scroll.y > my) self.scroll.y = my;
              }
  
              self.synched('mousemove', function () {
  
                if (self.cursorfreezed) {
                  self.showCursor();
  
                  if (self.rail.drag.hr) {
                    self.scrollLeft(Math.round(self.scroll.x * self.scrollratio.x));
                  } else {
                    self.scrollTop(Math.round(self.scroll.y * self.scrollratio.y));
                  }
  
                }
              });
  
              return self.cancelEvent(e);
            }
            else {
              self.checkarea = 0;
            }
          };
  
          if (cap.cantouch || opt.emulatetouch) {
  
            self.onpreventclick = function (e) {
              if (self.preventclick) {
                self.preventclick.tg.onclick = self.preventclick.click;
                self.preventclick = false;
                return self.cancelEvent(e);
              }
            };
  
            self.onclick = (cap.isios) ? false : function (e) {  // it needs to check IE11 ???
              if (self.lastmouseup) {
                self.lastmouseup = false;
                return self.cancelEvent(e);
              } else {
                return true;
              }
            };
  
            if (opt.grabcursorenabled && cap.cursorgrabvalue) {
              self.css((self.ispage) ? self.doc : self.win, {
                'cursor': cap.cursorgrabvalue
              });
              self.css(self.rail, {
                'cursor': cap.cursorgrabvalue
              });
            }
  
          } else {
  
            var checkSelectionScroll = function (e) {
              if (!self.selectiondrag) return;
  
              if (e) {
                var ww = self.win.outerHeight();
                var df = (e.pageY - self.selectiondrag.top);
                if (df > 0 && df < ww) df = 0;
                if (df >= ww) df -= ww;
                self.selectiondrag.df = df;
              }
              if (self.selectiondrag.df === 0) return;
  
              var rt = -(self.selectiondrag.df*2/6)|0;
              self.doScrollBy(rt);
  
              self.debounced("doselectionscroll", function () {
                checkSelectionScroll();
              }, 50);
            };
  
            if ("getSelection" in _doc) { // A grade - Major browsers
              self.hasTextSelected = function () {
                return (_doc.getSelection().rangeCount > 0);
              };
            } else if ("selection" in _doc) { //IE9-
              self.hasTextSelected = function () {
                return (_doc.selection.type != "None");
              };
            } else {
              self.hasTextSelected = function () { // no support
                return false;
              };
            }
  
            self.onselectionstart = function (e) {
              //  More testing - severe chrome issues           
              /* 
                            if (!self.haswrapper&&(e.which&&e.which==2)) {  // fool browser to manage middle button scrolling
                              self.win.css({'overflow':'auto'});
                              setTimeout(function(){
                                self.win.css({'overflow':'hidden'});
                              },10);                
                              return true;
                            }            
              */
              if (self.ispage) return;
              self.selectiondrag = self.win.offset();
            };
  
            self.onselectionend = function (e) {
              self.selectiondrag = false;
            };
            self.onselectiondrag = function (e) {
              if (!self.selectiondrag) return;
              if (self.hasTextSelected()) self.debounced("selectionscroll", function () {
                checkSelectionScroll(e);
              }, 250);
            };
          }
  
          if (cap.hasw3ctouch) { //IE11+
            self.css((self.ispage) ? $("html") : self.win, { 'touch-action': 'none' });
            self.css(self.rail, {
              'touch-action': 'none'
            });
            self.css(self.cursor, {
              'touch-action': 'none'
            });
            self.bind(self.win, "pointerdown", self.ontouchstart);
            self.bind(_doc, "pointerup", self.ontouchend);
            self.delegate(_doc, "pointermove", self.ontouchmove);
          } else if (cap.hasmstouch) { //IE10
            self.css((self.ispage) ? $("html") : self.win, { '-ms-touch-action': 'none' });
            self.css(self.rail, {
              '-ms-touch-action': 'none'
            });
            self.css(self.cursor, {
              '-ms-touch-action': 'none'
            });
            self.bind(self.win, "MSPointerDown", self.ontouchstart);
            self.bind(_doc, "MSPointerUp", self.ontouchend);
            self.delegate(_doc, "MSPointerMove", self.ontouchmove);
            self.bind(self.cursor, "MSGestureHold", function (e) {
              e.preventDefault();
            });
            self.bind(self.cursor, "contextmenu", function (e) {
              e.preventDefault();
            });
          } else if (cap.cantouch) { // smartphones/touch devices
            self.bind(self.win, "touchstart", self.ontouchstart, false, true);
            self.bind(_doc, "touchend", self.ontouchend, false, true);
            self.bind(_doc, "touchcancel", self.ontouchend, false, true);
            self.delegate(_doc, "touchmove", self.ontouchmove, false, true);
          }
  
          if (opt.emulatetouch) {
            self.bind(self.win, "mousedown", self.ontouchstart, false, true);
            self.bind(_doc, "mouseup", self.ontouchend, false, true);
            self.bind(_doc, "mousemove", self.ontouchmove, false, true);
          }
  
          if (opt.cursordragontouch || (!cap.cantouch && !opt.emulatetouch)) {
  
            self.rail.css({
              cursor: "default"
            });
            self.railh && self.railh.css({
              cursor: "default"
            });
  
            self.jqbind(self.rail, "mouseenter", function () {
              if (!self.ispage && !self.win.is(":visible")) return false;
              if (self.canshowonmouseevent) self.showCursor();
              self.rail.active = true;
            });
            self.jqbind(self.rail, "mouseleave", function () {
              self.rail.active = false;
              if (!self.rail.drag) self.hideCursor();
            });
  
            if (opt.sensitiverail) {
              self.bind(self.rail, "click", function (e) {
                self.doRailClick(e, false, false);
              });
              self.bind(self.rail, "dblclick", function (e) {
                self.doRailClick(e, true, false);
              });
              self.bind(self.cursor, "click", function (e) {
                self.cancelEvent(e);
              });
              self.bind(self.cursor, "dblclick", function (e) {
                self.cancelEvent(e);
              });
            }
  
            if (self.railh) {
              self.jqbind(self.railh, "mouseenter", function () {
                if (!self.ispage && !self.win.is(":visible")) return false;
                if (self.canshowonmouseevent) self.showCursor();
                self.rail.active = true;
              });
              self.jqbind(self.railh, "mouseleave", function () {
                self.rail.active = false;
                if (!self.rail.drag) self.hideCursor();
              });
  
              if (opt.sensitiverail) {
                self.bind(self.railh, "click", function (e) {
                  self.doRailClick(e, false, true);
                });
                self.bind(self.railh, "dblclick", function (e) {
                  self.doRailClick(e, true, true);
                });
                self.bind(self.cursorh, "click", function (e) {
                  self.cancelEvent(e);
                });
                self.bind(self.cursorh, "dblclick", function (e) {
                  self.cancelEvent(e);
                });
              }
  
            }
  
          }
  
          if (opt.cursordragontouch && (this.istouchcapable || cap.cantouch)) {
            self.bind(self.cursor, "touchstart", self.ontouchstartCursor);
            self.bind(self.cursor, "touchmove", self.ontouchmoveCursor);
            self.bind(self.cursor, "touchend", self.ontouchendCursor);
            self.cursorh && self.bind(self.cursorh, "touchstart", function (e) {
              self.ontouchstartCursor(e, true);
            });
            self.cursorh && self.bind(self.cursorh, "touchmove", self.ontouchmoveCursor);
            self.cursorh && self.bind(self.cursorh, "touchend", self.ontouchendCursor);
          }
  
  //        if (!cap.cantouch && !opt.emulatetouch) {
          if (!opt.emulatetouch && !cap.isandroid && !cap.isios) {
  
            self.bind((cap.hasmousecapture) ? self.win : _doc, "mouseup", self.onmouseup);
            self.bind(_doc, "mousemove", self.onmousemove);
            if (self.onclick) self.bind(_doc, "click", self.onclick);
  
            self.bind(self.cursor, "mousedown", self.onmousedown);
            self.bind(self.cursor, "mouseup", self.onmouseup);
  
            if (self.railh) {
              self.bind(self.cursorh, "mousedown", function (e) {
                self.onmousedown(e, true);
              });
              self.bind(self.cursorh, "mouseup", self.onmouseup);
            }
  
            if (!self.ispage && opt.enablescrollonselection) {
              self.bind(self.win[0], "mousedown", self.onselectionstart);
              self.bind(_doc, "mouseup", self.onselectionend);
              self.bind(self.cursor, "mouseup", self.onselectionend);
              if (self.cursorh) self.bind(self.cursorh, "mouseup", self.onselectionend);
              self.bind(_doc, "mousemove", self.onselectiondrag);
            }
  
            if (self.zoom) {
              self.jqbind(self.zoom, "mouseenter", function () {
                if (self.canshowonmouseevent) self.showCursor();
                self.rail.active = true;
              });
              self.jqbind(self.zoom, "mouseleave", function () {
                self.rail.active = false;
                if (!self.rail.drag) self.hideCursor();
              });
            }
  
          } else {
  
            self.bind((cap.hasmousecapture) ? self.win : _doc, "mouseup", self.ontouchend);
            if (self.onclick) self.bind(_doc, "click", self.onclick);
  
            if (opt.cursordragontouch) {
              self.bind(self.cursor, "mousedown", self.onmousedown);
              self.bind(self.cursor, "mouseup", self.onmouseup);
              self.cursorh && self.bind(self.cursorh, "mousedown", function (e) {
                self.onmousedown(e, true);
              });
              self.cursorh && self.bind(self.cursorh, "mouseup", self.onmouseup);
            } else {
              self.bind(self.rail, "mousedown", function (e) { e.preventDefault(); });  // prevent text selection             
              self.railh && self.bind(self.railh, "mousedown", function (e) { e.preventDefault(); });
            }
  
          }
  
  
          if (opt.enablemousewheel) {
            if (!self.isiframe) self.mousewheel((cap.isie && self.ispage) ? _doc : self.win, self.onmousewheel);
            self.mousewheel(self.rail, self.onmousewheel);
            if (self.railh) self.mousewheel(self.railh, self.onmousewheelhr);
          }
  
          if (!self.ispage && !cap.cantouch && !(/HTML|^BODY/.test(self.win[0].nodeName))) {
            if (!self.win.attr("tabindex")) self.win.attr({
              "tabindex": ++tabindexcounter
            });
  
            self.bind(self.win, "focus", function (e) {  // better using native events
              domfocus = (self.getTarget(e)).id || self.getTarget(e) || false;
              self.hasfocus = true;
              if (self.canshowonmouseevent) self.noticeCursor();
            });
            self.bind(self.win, "blur", function (e) {  // *
              domfocus = false;
              self.hasfocus = false;
            });
  
            self.bind(self.win, "mouseenter", function (e) {   // *
              mousefocus = (self.getTarget(e)).id || self.getTarget(e) || false;
              self.hasmousefocus = true;
              if (self.canshowonmouseevent) self.noticeCursor();
            });
            self.bind(self.win, "mouseleave", function (e) {   // *       
              mousefocus = false;
              self.hasmousefocus = false;
              if (!self.rail.drag) self.hideCursor();
            });
  
          }
  
  
          //Thanks to http://www.quirksmode.org !!
          self.onkeypress = function (e) {
            if (self.railslocked && self.page.maxh === 0) return true;
  
            e = e || _win.event;
            var tg = self.getTarget(e);
            if (tg && /INPUT|TEXTAREA|SELECT|OPTION/.test(tg.nodeName)) {
              var tp = tg.getAttribute('type') || tg.type || false;
              if ((!tp) || !(/submit|button|cancel/i.tp)) return true;
            }
  
            if ($(tg).attr('contenteditable')) return true;
  
            if (self.hasfocus || (self.hasmousefocus && !domfocus) || (self.ispage && !domfocus && !mousefocus)) {
              var key = e.keyCode;
  
              if (self.railslocked && key != 27) return self.cancelEvent(e);
  
              var ctrl = e.ctrlKey || false;
              var shift = e.shiftKey || false;
  
              var ret = false;
              switch (key) {
                case 38:
                case 63233: //safari
                  self.doScrollBy(24 * 3);
                  ret = true;
                  break;
                case 40:
                case 63235: //safari
                  self.doScrollBy(-24 * 3);
                  ret = true;
                  break;
                case 37:
                case 63232: //safari
                  if (self.railh) {
                    (ctrl) ? self.doScrollLeft(0) : self.doScrollLeftBy(24 * 3);
                    ret = true;
                  }
                  break;
                case 39:
                case 63234: //safari
                  if (self.railh) {
                    (ctrl) ? self.doScrollLeft(self.page.maxw) : self.doScrollLeftBy(-24 * 3);
                    ret = true;
                  }
                  break;
                case 33:
                case 63276: // safari
                  self.doScrollBy(self.view.h);
                  ret = true;
                  break;
                case 34:
                case 63277: // safari
                  self.doScrollBy(-self.view.h);
                  ret = true;
                  break;
                case 36:
                case 63273: // safari                
                  (self.railh && ctrl) ? self.doScrollPos(0, 0) : self.doScrollTo(0);
                  ret = true;
                  break;
                case 35:
                case 63275: // safari
                  (self.railh && ctrl) ? self.doScrollPos(self.page.maxw, self.page.maxh) : self.doScrollTo(self.page.maxh);
                  ret = true;
                  break;
                case 32:
                  if (opt.spacebarenabled) {
                    (shift) ? self.doScrollBy(self.view.h) : self.doScrollBy(-self.view.h);
                    ret = true;
                  }
                  break;
                case 27: // ESC
                  if (self.zoomactive) {
                    self.doZoom();
                    ret = true;
                  }
                  break;
              }
              if (ret) return self.cancelEvent(e);
            }
          };
  
          if (opt.enablekeyboard) self.bind(_doc, (cap.isopera && !cap.isopera12) ? "keypress" : "keydown", self.onkeypress);
  
          self.bind(_doc, "keydown", function (e) {
            var ctrl = e.ctrlKey || false;
            if (ctrl) self.wheelprevented = true;
          });
          self.bind(_doc, "keyup", function (e) {
            var ctrl = e.ctrlKey || false;
            if (!ctrl) self.wheelprevented = false;
          });
          self.bind(_win, "blur", function (e) {
            self.wheelprevented = false;
          });
  
          self.bind(_win, 'resize', self.onscreenresize);
          self.bind(_win, 'orientationchange', self.onscreenresize);
  
          self.bind(_win, "load", self.lazyResize);
  
          if (cap.ischrome && !self.ispage && !self.haswrapper) { //chrome void scrollbar bug - it persists in version 26
            var tmp = self.win.attr("style");
            var ww = parseFloat(self.win.css("width")) + 1;
            self.win.css('width', ww);
            self.synched("chromefix", function () {
              self.win.attr("style", tmp);
            });
          }
  
  
          // Trying a cross-browser implementation - good luck!
  
          self.onAttributeChange = function (e) {
            self.lazyResize(self.isieold ? 250 : 30);
          };
  
          if (opt.enableobserver) {
  
            if ((!self.isie11) && (ClsMutationObserver !== false)) {  // IE11 crashes  #568
              self.observerbody = new ClsMutationObserver(function (mutations) {
                mutations.forEach(function (mut) {
                  if (mut.type == "attributes") {
                    return ($body.hasClass("modal-open") && $body.hasClass("modal-dialog") && !$.contains($('.modal-dialog')[0], self.doc[0])) ? self.hide() : self.show();  // Support for Bootstrap modal; Added check if the nice scroll element is inside a modal
                  }
                });
                if (self.me.clientWidth != self.page.width || self.me.clientHeight != self.page.height) return self.lazyResize(30);
              });
              self.observerbody.observe(_doc.body, {
                childList: true,
                subtree: true,
                characterData: false,
                attributes: true,
                attributeFilter: ['class']
              });
            }
  
            if (!self.ispage && !self.haswrapper) {
  
              var _dom = self.win[0];
  
              // redesigned MutationObserver for Chrome18+/Firefox14+/iOS6+ with support for: remove div, add/remove content
              if (ClsMutationObserver !== false) {
                self.observer = new ClsMutationObserver(function (mutations) {
                  mutations.forEach(self.onAttributeChange);
                });
                self.observer.observe(_dom, {
                  childList: true,
                  characterData: false,
                  attributes: true,
                  subtree: false
                });
                self.observerremover = new ClsMutationObserver(function (mutations) {
                  mutations.forEach(function (mo) {
                    if (mo.removedNodes.length > 0) {
                      for (var dd in mo.removedNodes) {
                        if (!!self && (mo.removedNodes[dd] === _dom)) return self.remove();
                      }
                    }
                  });
                });
                self.observerremover.observe(_dom.parentNode, {
                  childList: true,
                  characterData: false,
                  attributes: false,
                  subtree: false
                });
              } else {
                self.bind(_dom, (cap.isie && !cap.isie9) ? "propertychange" : "DOMAttrModified", self.onAttributeChange);
                if (cap.isie9) _dom.attachEvent("onpropertychange", self.onAttributeChange); //IE9 DOMAttrModified bug
                self.bind(_dom, "DOMNodeRemoved", function (e) {
                  if (e.target === _dom) self.remove();
                });
              }
            }
  
          }
  
          //
  
          if (!self.ispage && opt.boxzoom) self.bind(_win, "resize", self.resizeZoom);
          if (self.istextarea) {
            self.bind(self.win, "keydown", self.lazyResize);
            self.bind(self.win, "mouseup", self.lazyResize);
          }
  
          self.lazyResize(30);
  
        }
  
        if (this.doc[0].nodeName == 'IFRAME') {
          var oniframeload = function () {
            self.iframexd = false;
            var doc;
            try {
              doc = 'contentDocument' in this ? this.contentDocument : this.contentWindow._doc;
              var a = doc.domain;
            } catch (e) {
              self.iframexd = true;
              doc = false;
            }
  
            if (self.iframexd) {
              if ("console" in _win) console.log('NiceScroll error: policy restriced iframe');
              return true; //cross-domain - I can't manage this        
            }
  
            self.forcescreen = true;
  
            if (self.isiframe) {
              self.iframe = {
                "doc": $(doc),
                "html": self.doc.contents().find('html')[0],
                "body": self.doc.contents().find('body')[0]
              };
              self.getContentSize = function () {
                return {
                  w: Math.max(self.iframe.html.scrollWidth, self.iframe.body.scrollWidth),
                  h: Math.max(self.iframe.html.scrollHeight, self.iframe.body.scrollHeight)
                };
              };
              self.docscroll = $(self.iframe.body);
            }
  
            if (!cap.isios && opt.iframeautoresize && !self.isiframe) {
              self.win.scrollTop(0); // reset position
              self.doc.height(""); //reset height to fix browser bug
              var hh = Math.max(doc.getElementsByTagName('html')[0].scrollHeight, doc.body.scrollHeight);
              self.doc.height(hh);
            }
            self.lazyResize(30);
  
            self.css($(self.iframe.body), _scrollyhidden);
  
            if (cap.isios && self.haswrapper) {
              self.css($(doc.body), {
                '-webkit-transform': 'translate3d(0,0,0)'
              }); // avoid iFrame content clipping - thanks to http://blog.derraab.com/2012/04/02/avoid-iframe-content-clipping-with-css-transform-on-ios/
            }
  
            if ('contentWindow' in this) {
              self.bind(this.contentWindow, "scroll", self.onscroll); //IE8 & minor
            } else {
              self.bind(doc, "scroll", self.onscroll);
            }
  
            if (opt.enablemousewheel) {
              self.mousewheel(doc, self.onmousewheel);
            }
  
            if (opt.enablekeyboard) self.bind(doc, (cap.isopera) ? "keypress" : "keydown", self.onkeypress);
  
            if (cap.cantouch) {
              self.bind(doc, "touchstart", self.ontouchstart);
              self.bind(doc, "touchmove", self.ontouchmove);
            }
            else if (opt.emulatetouch) {
              self.bind(doc, "mousedown", self.ontouchstart);
              self.bind(doc, "mousemove", function (e) {
                return self.ontouchmove(e, true);
              });
              if (opt.grabcursorenabled && cap.cursorgrabvalue) self.css($(doc.body), {
                'cursor': cap.cursorgrabvalue
              });
            }
  
            self.bind(doc, "mouseup", self.ontouchend);
  
            if (self.zoom) {
              if (opt.dblclickzoom) self.bind(doc, 'dblclick', self.doZoom);
              if (self.ongesturezoom) self.bind(doc, "gestureend", self.ongesturezoom);
            }
          };
  
          if (this.doc[0].readyState && this.doc[0].readyState === "complete") {
            setTimeout(function () {
              oniframeload.call(self.doc[0], false);
            }, 500);
          }
          self.bind(this.doc, "load", oniframeload);
  
        }
  
      };
  
      this.showCursor = function (py, px) {
        if (self.cursortimeout) {
          clearTimeout(self.cursortimeout);
          self.cursortimeout = 0;
        }
        if (!self.rail) return;
        if (self.autohidedom) {
          self.autohidedom.stop().css({
            opacity: opt.cursoropacitymax
          });
          self.cursoractive = true;
        }
  
        if (!self.rail.drag || self.rail.drag.pt != 1) {
          if (py !== undefined && py !== false) {
            self.scroll.y = (py / self.scrollratio.y) | 0;
          }
          if (px !== undefined) {
            self.scroll.x = (px / self.scrollratio.x) | 0;
          }
        }
  
        self.cursor.css({
          height: self.cursorheight,
          top: self.scroll.y
        });
        if (self.cursorh) {
          var lx = (self.hasreversehr) ? self.scrollvaluemaxw - self.scroll.x : self.scroll.x;
          self.cursorh.css({
            width: self.cursorwidth,
            left: (!self.rail.align && self.rail.visibility) ? lx + self.rail.width : lx
          });
          self.cursoractive = true;
        }
  
        if (self.zoom) self.zoom.stop().css({
          opacity: opt.cursoropacitymax
        });
      };
  
      this.hideCursor = function (tm) {
        if (self.cursortimeout) return;
        if (!self.rail) return;
        if (!self.autohidedom) return;
  
        if (self.hasmousefocus && opt.autohidemode === "leave") return;
        self.cursortimeout = setTimeout(function () {
          if (!self.rail.active || !self.showonmouseevent) {
            self.autohidedom.stop().animate({
              opacity: opt.cursoropacitymin
            });
            if (self.zoom) self.zoom.stop().animate({
              opacity: opt.cursoropacitymin
            });
            self.cursoractive = false;
          }
          self.cursortimeout = 0;
        }, tm || opt.hidecursordelay);
      };
  
      this.noticeCursor = function (tm, py, px) {
        self.showCursor(py, px);
        if (!self.rail.active) self.hideCursor(tm);
      };
  
      this.getContentSize =
        (self.ispage) ?
          function () {
            return {
              w: Math.max(_doc.body.scrollWidth, _doc.documentElement.scrollWidth),
              h: Math.max(_doc.body.scrollHeight, _doc.documentElement.scrollHeight)
            };
          } : (self.haswrapper) ?
            function () {
              return {
                w: self.doc[0].offsetWidth,
                h: self.doc[0].offsetHeight
              };
            } : function () {
              return {
                w: self.docscroll[0].scrollWidth,
                h: self.docscroll[0].scrollHeight
              };
            };
  
      this.onResize = function (e, page) {
  
        if (!self || !self.win) return false;
  
        var premaxh = self.page.maxh,
            premaxw = self.page.maxw,
            previewh = self.view.h,
            previeww = self.view.w;
  
        self.view = {
          w: (self.ispage) ? self.win.width() : self.win[0].clientWidth,
          h: (self.ispage) ? self.win.height() : self.win[0].clientHeight
        };
  
        self.page = (page) ? page : self.getContentSize();
  
        self.page.maxh = Math.max(0, self.page.h - self.view.h);
        self.page.maxw = Math.max(0, self.page.w - self.view.w);
  
        if ((self.page.maxh == premaxh) && (self.page.maxw == premaxw) && (self.view.w == previeww) && (self.view.h == previewh)) {
          // test position        
          if (!self.ispage) {
            var pos = self.win.offset();
            if (self.lastposition) {
              var lst = self.lastposition;
              if ((lst.top == pos.top) && (lst.left == pos.left)) return self; //nothing to do            
            }
            self.lastposition = pos;
          } else {
            return self; //nothing to do
          }
        }
  
        if (self.page.maxh === 0) {
          self.hideRail();
          self.scrollvaluemax = 0;
          self.scroll.y = 0;
          self.scrollratio.y = 0;
          self.cursorheight = 0;
          self.setScrollTop(0);
          if (self.rail) self.rail.scrollable = false;
        } else {
          self.page.maxh -= (opt.railpadding.top + opt.railpadding.bottom);
          self.rail.scrollable = true;
        }
  
        if (self.page.maxw === 0) {
          self.hideRailHr();
          self.scrollvaluemaxw = 0;
          self.scroll.x = 0;
          self.scrollratio.x = 0;
          self.cursorwidth = 0;
          self.setScrollLeft(0);
          if (self.railh) {
            self.railh.scrollable = false;
          }
        } else {
          self.page.maxw -= (opt.railpadding.left + opt.railpadding.right);
          if (self.railh) self.railh.scrollable = (opt.horizrailenabled);
        }
  
        self.railslocked = (self.locked) || ((self.page.maxh === 0) && (self.page.maxw === 0));
        if (self.railslocked) {
          if (!self.ispage) self.updateScrollBar(self.view);
          return false;
        }
  
        if (!self.hidden) {
          if (!self.rail.visibility) self.showRail();
          if (self.railh && !self.railh.visibility) self.showRailHr();
        }
  
        if (self.istextarea && self.win.css('resize') && self.win.css('resize') != 'none') self.view.h -= 20;
  
        self.cursorheight = Math.min(self.view.h, Math.round(self.view.h * (self.view.h / self.page.h)));
        self.cursorheight = (opt.cursorfixedheight) ? opt.cursorfixedheight : Math.max(opt.cursorminheight, self.cursorheight);
  
        self.cursorwidth = Math.min(self.view.w, Math.round(self.view.w * (self.view.w / self.page.w)));
        self.cursorwidth = (opt.cursorfixedheight) ? opt.cursorfixedheight : Math.max(opt.cursorminheight, self.cursorwidth);
  
        self.scrollvaluemax = self.view.h - self.cursorheight - (opt.railpadding.top + opt.railpadding.bottom);
        if (!self.hasborderbox) self.scrollvaluemax -= self.cursor[0].offsetHeight - self.cursor[0].clientHeight;
  
        if (self.railh) {
          self.railh.width = (self.page.maxh > 0) ? (self.view.w - self.rail.width) : self.view.w;
          self.scrollvaluemaxw = self.railh.width - self.cursorwidth - (opt.railpadding.left + opt.railpadding.right);
        }
  
        if (!self.ispage) self.updateScrollBar(self.view);
  
        self.scrollratio = {
          x: (self.page.maxw / self.scrollvaluemaxw),
          y: (self.page.maxh / self.scrollvaluemax)
        };
  
        var sy = self.getScrollTop();
        if (sy > self.page.maxh) {
          self.doScrollTop(self.page.maxh);
        } else {
          self.scroll.y = (self.getScrollTop() / self.scrollratio.y) | 0;
          self.scroll.x = (self.getScrollLeft() / self.scrollratio.x) | 0;
          if (self.cursoractive) self.noticeCursor();
        }
  
        if (self.scroll.y && (self.getScrollTop() === 0)) self.doScrollTo((self.scroll.y * self.scrollratio.y)|0);
  
        return self;
      };
  
      this.resize = self.onResize;
  
      var hlazyresize = 0;
  
      this.onscreenresize = function(e) {
        clearTimeout(hlazyresize);
  
        var hiderails = (!self.ispage && !self.haswrapper);
        if (hiderails) self.hideRails();
  
        hlazyresize = setTimeout(function () {
          if (self) {
            if (hiderails) self.showRails();
            self.resize();
          }
          hlazyresize=0;
        }, 120);
      };
  
      this.lazyResize = function (tm) { // event debounce
  
        clearTimeout(hlazyresize);
  
        tm = isNaN(tm) ? 240 : tm;
  
        hlazyresize = setTimeout(function () {
          self && self.resize();
          hlazyresize=0;
        }, tm);
  
        return self;
  
      };
  
      // derived by MDN https://developer.mozilla.org/en-US/docs/DOM/Mozilla_event_reference/wheel
      function _modernWheelEvent(dom, name, fn, bubble) {
        self._bind(dom, name, function (e) {
          e = e || _win.event;
          var event = {
            original: e,
            target: e.target || e.srcElement,
            type: "wheel",
            deltaMode: e.type == "MozMousePixelScroll" ? 0 : 1,
            deltaX: 0,
            deltaZ: 0,
            preventDefault: function () {
              e.preventDefault ? e.preventDefault() : e.returnValue = false;
              return false;
            },
            stopImmediatePropagation: function () {
              (e.stopImmediatePropagation) ? e.stopImmediatePropagation() : e.cancelBubble = true;
            }
          };
  
          if (name == "mousewheel") {
            e.wheelDeltaX && (event.deltaX = -1 / 40 * e.wheelDeltaX);
            e.wheelDeltaY && (event.deltaY = -1 / 40 * e.wheelDeltaY);
            !event.deltaY && !event.deltaX && (event.deltaY = -1 / 40 * e.wheelDelta);
          } else {
            event.deltaY = e.detail;
          }
  
          return fn.call(dom, event);
        }, bubble);
      }
  
  
  
      this.jqbind = function (dom, name, fn) { // use jquery bind for non-native events (mouseenter/mouseleave)
        self.events.push({
          e: dom,
          n: name,
          f: fn,
          q: true
        });
        $(dom).on(name, fn);
      };
  
      this.mousewheel = function (dom, fn, bubble) { // bind mousewheel
        var el = ("jquery" in dom) ? dom[0] : dom;
        if ("onwheel" in _doc.createElement("div")) { // Modern browsers support "wheel"
          self._bind(el, "wheel", fn, bubble || false);
        } else {
          var wname = (_doc.onmousewheel !== undefined) ? "mousewheel" : "DOMMouseScroll"; // older Webkit+IE support or older Firefox          
          _modernWheelEvent(el, wname, fn, bubble || false);
          if (wname == "DOMMouseScroll") _modernWheelEvent(el, "MozMousePixelScroll", fn, bubble || false); // Firefox legacy
        }
      };
  
      var passiveSupported = false;
  
      if (cap.haseventlistener) {  // W3C standard event model
  
        // thanks to https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
        try { var options = Object.defineProperty({}, "passive", { get: function () { passiveSupported = !0; } }); _win.addEventListener("test", null, options); } catch (err) { }
  
        this.stopPropagation = function (e) {
          if (!e) return false;
          e = (e.original) ? e.original : e;
          e.stopPropagation();
          return false;
        };
  
        this.cancelEvent = function(e) {
          if (e.cancelable) e.preventDefault();
          e.stopImmediatePropagation();
          if (e.preventManipulation) e.preventManipulation();  // IE10+
          return false;
        };      
  
      } else {
  
        // inspired from https://gist.github.com/jonathantneal/2415137      
  
        Event.prototype.preventDefault = function () {
          this.returnValue = false;
        };
  
        Event.prototype.stopPropagation = function () {
          this.cancelBubble = true;
        };
  
        _win.constructor.prototype.addEventListener = _doc.constructor.prototype.addEventListener = Element.prototype.addEventListener = function (type, listener, useCapture) {
          this.attachEvent("on" + type, listener);
        };
        _win.constructor.prototype.removeEventListener = _doc.constructor.prototype.removeEventListener = Element.prototype.removeEventListener = function (type, listener, useCapture) {
          this.detachEvent("on" + type, listener);
        };
  
        // Thanks to http://www.switchonthecode.com !!
        this.cancelEvent = function (e) {
          e = e || _win.event;
          if (e) {          
            e.cancelBubble = true;
            e.cancel = true;
            e.returnValue = false;
          }  
          return false;
        };
  
        this.stopPropagation = function (e) {
          e = e || _win.event;
          if (e) e.cancelBubble = true;
          return false;
        };
  
      }
  
      this.delegate = function (dom, name, fn, bubble, active) {
  
        var de = delegatevents[name] || false;
  
        if (!de) {
  
          de = {
            a: [],
            l: [],
            f: function (e) {
              var lst = de.l, l = lst.length - 1;
              var r = false;
              for (var a = l; a >= 0; a--) {
                r = lst[a].call(e.target, e);
                if (r === false) return false;
              }
              return r;
            }
          };
  
          self.bind(dom, name, de.f, bubble, active);
  
          delegatevents[name] = de;
  
        }
  
        if (self.ispage) {
          de.a = [self.id].concat(de.a);
          de.l = [fn].concat(de.l);
        } else {
          de.a.push(self.id);
          de.l.push(fn);        
        }
  
      };
  
      this.undelegate = function (dom, name, fn, bubble, active) {
        var de = delegatevents[name]||false;
        if (de&&de.l) {  // quick fix #683
          for (var a=0,l=de.l.length;a<l;a++) {
            if (de.a[a] === self.id) {
              de.a.splice(a);
              de.l.splice(a);
              if (de.a.length===0) {
                self._unbind(dom,name,de.l.f);
                delegatevents[name] = null;
              }
            }
          }
        }
      };
  
      this.bind = function (dom, name, fn, bubble, active) {
        var el = ("jquery" in dom) ? dom[0] : dom;
        self._bind(el, name, fn, bubble || false, active || false);
      };
  
      this._bind = function (el, name, fn, bubble, active) { // primitive bind
  
        self.events.push({
          e: el,
          n: name,
          f: fn,
          b: bubble,
          q: false
        });
  
        (passiveSupported && (active || el == window.document || el == window.document.body || el == window)) ? el.addEventListener(name, fn, { passive: false, capture: bubble }) : el.addEventListener(name, fn, bubble || false);
      };
  
      this._unbind = function (el, name, fn, bub) { // primitive unbind
        if (delegatevents[name]) self.undelegate(el, name, fn, bub);
        else el.removeEventListener(name, fn, bub);
      };
  
      this.unbindAll = function () {
        for (var a = 0; a < self.events.length; a++) {
          var r = self.events[a];
          (r.q) ? r.e.unbind(r.n, r.f) : self._unbind(r.e, r.n, r.f, r.b);
        }
      };
  
      this.showRails = function () {
        return self.showRail().showRailHr();
      };
  
      this.showRail = function () {
        if ((self.page.maxh !== 0) && (self.ispage || self.win.css('display') != 'none')) {
          //self.visibility = true;
          self.rail.visibility = true;
          self.rail.css('display', 'block');
        }
        return self;
      };
  
      this.showRailHr = function () {
        if (self.railh) {
          if ((self.page.maxw !== 0) && (self.ispage || self.win.css('display') != 'none')) {
            self.railh.visibility = true;
            self.railh.css('display', 'block');
          }
        }
        return self;
      };
  
      this.hideRails = function () {
        return self.hideRail().hideRailHr();
      };
  
      this.hideRail = function () {
        //self.visibility = false;
        self.rail.visibility = false;
        self.rail.css('display', 'none');
        return self;
      };
  
      this.hideRailHr = function () {
        if (self.railh) {
          self.railh.visibility = false;
          self.railh.css('display', 'none');
        }
        return self;
      };
  
      this.show = function () {
        self.hidden = false;
        self.railslocked = false;
        return self.showRails();
      };
  
      this.hide = function () {
        self.hidden = true;
        self.railslocked = true;
        return self.hideRails();
      };
  
      this.toggle = function () {
        return (self.hidden) ? self.show() : self.hide();
      };
  
      this.remove = function () {
        self.stop();
        if (self.cursortimeout) clearTimeout(self.cursortimeout);
        for (var n in self.delaylist) if (self.delaylist[n]) clearAnimationFrame(self.delaylist[n].h);
        self.doZoomOut();
        self.unbindAll();
  
        if (cap.isie9) self.win[0].detachEvent("onpropertychange", self.onAttributeChange); //IE9 DOMAttrModified bug
  
        if (self.observer !== false) self.observer.disconnect();
        if (self.observerremover !== false) self.observerremover.disconnect();
        if (self.observerbody !== false) self.observerbody.disconnect();
  
        self.events = null;
  
        if (self.cursor) {
          self.cursor.remove();
        }
        if (self.cursorh) {
          self.cursorh.remove();
        }
        if (self.rail) {
          self.rail.remove();
        }
        if (self.railh) {
          self.railh.remove();
        }
        if (self.zoom) {
          self.zoom.remove();
        }
        for (var a = 0; a < self.saved.css.length; a++) {
          var d = self.saved.css[a];
          d[0].css(d[1], (d[2] === undefined) ? '' : d[2]);
        }
        self.saved = false;
        self.me.data('__nicescroll', ''); //erase all traces
  
        // memory leak fixed by GianlucaGuarini - thanks a lot!
        // remove the current nicescroll from the $.nicescroll array & normalize array
        var lst = $.nicescroll;
        lst.each(function (i) {
          if (!this) return;
          if (this.id === self.id) {
            delete lst[i];
            for (var b = ++i; b < lst.length; b++ , i++) lst[i] = lst[b];
            lst.length--;
            if (lst.length) delete lst[lst.length];
          }
        });
  
        for (var i in self) {
          self[i] = null;
          delete self[i];
        }
  
        self = null;
  
      };
  
      this.scrollstart = function (fn) {
        this.onscrollstart = fn;
        return self;
      };
      this.scrollend = function (fn) {
        this.onscrollend = fn;
        return self;
      };
      this.scrollcancel = function (fn) {
        this.onscrollcancel = fn;
        return self;
      };
  
      this.zoomin = function (fn) {
        this.onzoomin = fn;
        return self;
      };
      this.zoomout = function (fn) {
        this.onzoomout = fn;
        return self;
      };
  
      this.isScrollable = function (e) {
        var dom = (e.target) ? e.target : e;
        if (dom.nodeName == 'OPTION') return true;
        while (dom && (dom.nodeType == 1) && (dom !== this.me[0]) && !(/^BODY|HTML/.test(dom.nodeName))) {
          var dd = $(dom);
          var ov = dd.css('overflowY') || dd.css('overflowX') || dd.css('overflow') || '';
          if (/scroll|auto/.test(ov)) return (dom.clientHeight != dom.scrollHeight);
          dom = (dom.parentNode) ? dom.parentNode : false;
        }
        return false;
      };
  
      this.getViewport = function (me) {
        var dom = (me && me.parentNode) ? me.parentNode : false;
        while (dom && (dom.nodeType == 1) && !(/^BODY|HTML/.test(dom.nodeName))) {
          var dd = $(dom);
          if (/fixed|absolute/.test(dd.css("position"))) return dd;
          var ov = dd.css('overflowY') || dd.css('overflowX') || dd.css('overflow') || '';
          if ((/scroll|auto/.test(ov)) && (dom.clientHeight != dom.scrollHeight)) return dd;
          if (dd.getNiceScroll().length > 0) return dd;
          dom = (dom.parentNode) ? dom.parentNode : false;
        }
        return false;
      };
  
      this.triggerScrollStart = function (cx, cy, rx, ry, ms) {
  
        if (self.onscrollstart) {
          var info = {
            type: "scrollstart",
            current: {
              x: cx,
              y: cy
            },
            request: {
              x: rx,
              y: ry
            },
            end: {
              x: self.newscrollx,
              y: self.newscrolly
            },
            speed: ms
          };
          self.onscrollstart.call(self, info);
        }
  
      };
  
      this.triggerScrollEnd = function () {
        if (self.onscrollend) {
  
          var px = self.getScrollLeft();
          var py = self.getScrollTop();
  
          var info = {
            type: "scrollend",
            current: {
              x: px,
              y: py
            },
            end: {
              x: px,
              y: py
            }
          };
  
          self.onscrollend.call(self, info);
  
        }
  
      };
  
      var scrolldiry = 0, scrolldirx = 0, scrolltmr = 0, scrollspd = 1;
  
      function doScrollRelative(px, py, chkscroll, iswheel) {
  
        if (!self.scrollrunning) {
          self.newscrolly = self.getScrollTop();
          self.newscrollx = self.getScrollLeft();
          scrolltmr = now();
        }
  
        var gap = (now() - scrolltmr);
        scrolltmr = now();
  
        if (gap > 350) {
          scrollspd = 1;
        } else {
          scrollspd += (2 - scrollspd) / 10;
        }
  
        px = px * scrollspd | 0;
        py = py * scrollspd | 0;
  
        if (px) {
  
          if (iswheel) { // mouse-only
            if (px < 0) {  // fix apple magic mouse swipe back/forward
              if (self.getScrollLeft() >= self.page.maxw) return true;
            } else {
              if (self.getScrollLeft() <= 0) return true;
            }
          }
  
          var dx = px > 0 ? 1 : -1;
  
          if (scrolldirx !== dx) {
            if (self.scrollmom) self.scrollmom.stop();
            self.newscrollx = self.getScrollLeft();
            scrolldirx = dx;
          }
  
          self.lastdeltax -= px;
  
        }
  
        if (py) {
  
          var chk = (function () {
            var top = self.getScrollTop();
            if (py < 0) {
              if (top >= self.page.maxh) return true;
            } else {
              if (top <= 0) return true;
            }
          })();
  
          if (chk) {
            if (opt.nativeparentscrolling && chkscroll && !self.ispage && !self.zoomactive) return true;
            var ny = self.view.h >> 1;
            if (self.newscrolly < -ny) { self.newscrolly = -ny; py = -1; }
            else if (self.newscrolly > self.page.maxh + ny) { self.newscrolly = self.page.maxh + ny; py = 1; }
            else py = 0;
          }
  
          var dy = py > 0 ? 1 : -1;
  
          if (scrolldiry !== dy) {
            if (self.scrollmom) self.scrollmom.stop();
            self.newscrolly = self.getScrollTop();
            scrolldiry = dy;
          }
  
          self.lastdeltay -= py;
  
        }
  
        if (py || px) {
          self.synched("relativexy", function () {
  
            var dty = self.lastdeltay + self.newscrolly;
            self.lastdeltay = 0;
  
            var dtx = self.lastdeltax + self.newscrollx;
            self.lastdeltax = 0;
  
            if (!self.rail.drag) self.doScrollPos(dtx, dty);
  
          });
        }
  
      }
  
      var hasparentscrollingphase = false;
  
      function execScrollWheel(e, hr, chkscroll) {
        var px, py;
  
        if (!chkscroll && hasparentscrollingphase) return true;
  
        if (e.deltaMode === 0) { // PIXEL
          px = -(e.deltaX * (opt.mousescrollstep / (18 * 3))) | 0;
          py = -(e.deltaY * (opt.mousescrollstep / (18 * 3))) | 0;
        } else if (e.deltaMode === 1) { // LINE
          px = -(e.deltaX * opt.mousescrollstep * 50 / 80) | 0;
          py = -(e.deltaY * opt.mousescrollstep * 50 / 80) | 0;
        }
  
        if (hr && opt.oneaxismousemode && (px === 0) && py) { // classic vertical-only mousewheel + browser with x/y support 
          px = py;
          py = 0;
  
          if (chkscroll) {
            var hrend = (px < 0) ? (self.getScrollLeft() >= self.page.maxw) : (self.getScrollLeft() <= 0);
            if (hrend) {  // preserve vertical scrolling
              py = px;
              px = 0;
            }
          }
  
        }
  
        // invert horizontal direction for rtl mode
        if (self.isrtlmode) px = -px;
  
        var chk = doScrollRelative(px, py, chkscroll, true);
  
        if (chk) {
          if (chkscroll) hasparentscrollingphase = true;
        } else {
          hasparentscrollingphase = false;
          e.stopImmediatePropagation();
          return e.preventDefault();
        }
  
      }
  
      this.onmousewheel = function (e) {
        if (self.wheelprevented||self.locked) return false;
        if (self.railslocked) {
          self.debounced("checkunlock", self.resize, 250);
          return false;
        }
        if (self.rail.drag) return self.cancelEvent(e);
  
        if (opt.oneaxismousemode === "auto" && e.deltaX !== 0) opt.oneaxismousemode = false; // check two-axis mouse support (not very elegant)
  
        if (opt.oneaxismousemode && e.deltaX === 0) {
          if (!self.rail.scrollable) {
            if (self.railh && self.railh.scrollable) {
              return self.onmousewheelhr(e);
            } else {
              return true;
            }
          }
        }
  
        var nw = now();
        var chk = false;
        if (opt.preservenativescrolling && ((self.checkarea + 600) < nw)) {
          self.nativescrollingarea = self.isScrollable(e);
          chk = true;
        }
        self.checkarea = nw;
        if (self.nativescrollingarea) return true; // this isn't my business
        var ret = execScrollWheel(e, false, chk);
        if (ret) self.checkarea = 0;
        return ret;
      };
  
      this.onmousewheelhr = function (e) {
        if (self.wheelprevented) return;
        if (self.railslocked || !self.railh.scrollable) return true;
        if (self.rail.drag) return self.cancelEvent(e);
  
        var nw = now();
        var chk = false;
        if (opt.preservenativescrolling && ((self.checkarea + 600) < nw)) {
          self.nativescrollingarea = self.isScrollable(e);
          chk = true;
        }
        self.checkarea = nw;
        if (self.nativescrollingarea) return true; // this is not my business
        if (self.railslocked) return self.cancelEvent(e);
  
        return execScrollWheel(e, true, chk);
      };
  
      this.stop = function () {
        self.cancelScroll();
        if (self.scrollmon) self.scrollmon.stop();
        self.cursorfreezed = false;
        self.scroll.y = Math.round(self.getScrollTop() * (1 / self.scrollratio.y));
        self.noticeCursor();
        return self;
      };
  
      this.getTransitionSpeed = function (dif) {
  
        return 80 + (dif / 72) * opt.scrollspeed |0;
  
      };
  
      if (!opt.smoothscroll) {
        this.doScrollLeft = function (x, spd) { //direct
          var y = self.getScrollTop();
          self.doScrollPos(x, y, spd);
        };
        this.doScrollTop = function (y, spd) { //direct
          var x = self.getScrollLeft();
          self.doScrollPos(x, y, spd);
        };
        this.doScrollPos = function (x, y, spd) { //direct
          var nx = (x > self.page.maxw) ? self.page.maxw : x;
          if (nx < 0) nx = 0;
          var ny = (y > self.page.maxh) ? self.page.maxh : y;
          if (ny < 0) ny = 0;
          self.synched('scroll', function () {
            self.setScrollTop(ny);
            self.setScrollLeft(nx);
          });
        };
        this.cancelScroll = function () { }; // direct
  
      } else if (self.ishwscroll && cap.hastransition && opt.usetransition && !!opt.smoothscroll) {
  
        var lasttransitionstyle = '';
  
        this.resetTransition = function () {
          lasttransitionstyle = '';
          self.doc.css(cap.prefixstyle + 'transition-duration', '0ms');
        };
  
        this.prepareTransition = function (dif, istime) {
          var ex = (istime) ? dif : self.getTransitionSpeed(dif);
          var trans = ex + 'ms';
          if (lasttransitionstyle !== trans) {
            lasttransitionstyle = trans;
            self.doc.css(cap.prefixstyle + 'transition-duration', trans);
          }
          return ex;
        };
  
        this.doScrollLeft = function (x, spd) { //trans
          var y = (self.scrollrunning) ? self.newscrolly : self.getScrollTop();
          self.doScrollPos(x, y, spd);
        };
  
        this.doScrollTop = function (y, spd) { //trans
          var x = (self.scrollrunning) ? self.newscrollx : self.getScrollLeft();
          self.doScrollPos(x, y, spd);
        };
  
        this.cursorupdate = {
          running: false,
          start: function () {
            var m = this;
  
            if (m.running) return;
            m.running = true;
  
            var loop = function () {
              if (m.running) setAnimationFrame(loop);
              self.showCursor(self.getScrollTop(), self.getScrollLeft());
              self.notifyScrollEvent(self.win[0]);
            };
  
            setAnimationFrame(loop);
          },
          stop: function () {
            this.running = false;
          }
        };
  
        this.doScrollPos = function (x, y, spd) { //trans
  
          var py = self.getScrollTop();
          var px = self.getScrollLeft();
  
          if (((self.newscrolly - py) * (y - py) < 0) || ((self.newscrollx - px) * (x - px) < 0)) self.cancelScroll(); //inverted movement detection      
  
          if (!opt.bouncescroll) {
            if (y < 0) y = 0;
            else if (y > self.page.maxh) y = self.page.maxh;
            if (x < 0) x = 0;
            else if (x > self.page.maxw) x = self.page.maxw;
          } else {
            if (y < 0) y = y / 2 | 0;
            else if (y > self.page.maxh) y = self.page.maxh + (y - self.page.maxh) / 2 | 0;
            if (x < 0) x = x / 2 | 0;
            else if (x > self.page.maxw) x = self.page.maxw + (x - self.page.maxw) / 2 | 0;
          }
  
          if (self.scrollrunning && x == self.newscrollx && y == self.newscrolly) return false;
  
          self.newscrolly = y;
          self.newscrollx = x;
  
          var top = self.getScrollTop();
          var lft = self.getScrollLeft();
  
          var dst = {};
          dst.x = x - lft;
          dst.y = y - top;
  
          var dd = Math.sqrt((dst.x * dst.x) + (dst.y * dst.y)) | 0;
  
          var ms = self.prepareTransition(dd);
  
          if (!self.scrollrunning) {
            self.scrollrunning = true;
            self.triggerScrollStart(lft, top, x, y, ms);
            self.cursorupdate.start();
          }
  
          self.scrollendtrapped = true;
  
          if (!cap.transitionend) {
            if (self.scrollendtrapped) clearTimeout(self.scrollendtrapped);
            self.scrollendtrapped = setTimeout(self.onScrollTransitionEnd, ms); // simulate transitionend event
          }
  
          self.setScrollTop(self.newscrolly);
          self.setScrollLeft(self.newscrollx);
  
        };
  
        this.cancelScroll = function () {
          if (!self.scrollendtrapped) return true;
          var py = self.getScrollTop();
          var px = self.getScrollLeft();
          self.scrollrunning = false;
          if (!cap.transitionend) clearTimeout(cap.transitionend);
          self.scrollendtrapped = false;
          self.resetTransition();
          self.setScrollTop(py); // fire event onscroll
          if (self.railh) self.setScrollLeft(px);
          if (self.timerscroll && self.timerscroll.tm) clearInterval(self.timerscroll.tm);
          self.timerscroll = false;
  
          self.cursorfreezed = false;
  
          self.cursorupdate.stop();
          self.showCursor(py, px);
          return self;
        };
  
        this.onScrollTransitionEnd = function () {
  
          if (!self.scrollendtrapped) return;
  
          var py = self.getScrollTop();
          var px = self.getScrollLeft();
  
          if (py < 0) py = 0;
          else if (py > self.page.maxh) py = self.page.maxh;
          if (px < 0) px = 0;
          else if (px > self.page.maxw) px = self.page.maxw;
          if ((py != self.newscrolly) || (px != self.newscrollx)) return self.doScrollPos(px, py, opt.snapbackspeed);
  
          if (self.scrollrunning) self.triggerScrollEnd();
          self.scrollrunning = false;
  
          self.scrollendtrapped = false;
          self.resetTransition();
          self.timerscroll = false;
          self.setScrollTop(py); // fire event onscroll        
          if (self.railh) self.setScrollLeft(px); // fire event onscroll left
  
          self.cursorupdate.stop();
          self.noticeCursor(false, py, px);
  
          self.cursorfreezed = false;
  
        };
  
      } else {
  
        this.doScrollLeft = function (x, spd) { //no-trans
          var y = (self.scrollrunning) ? self.newscrolly : self.getScrollTop();
          self.doScrollPos(x, y, spd);
        };
  
        this.doScrollTop = function (y, spd) { //no-trans
          var x = (self.scrollrunning) ? self.newscrollx : self.getScrollLeft();
          self.doScrollPos(x, y, spd);
        };
  
        this.doScrollPos = function (x, y, spd) { //no-trans
  
          var py = self.getScrollTop();
          var px = self.getScrollLeft();
  
          if (((self.newscrolly - py) * (y - py) < 0) || ((self.newscrollx - px) * (x - px) < 0)) self.cancelScroll(); //inverted movement detection
  
          var clipped = false;
  
          if (!self.bouncescroll || !self.rail.visibility) {
            if (y < 0) {
              y = 0;
              clipped = true;
            } else if (y > self.page.maxh) {
              y = self.page.maxh;
              clipped = true;
            }
          }
          if (!self.bouncescroll || !self.railh.visibility) {
            if (x < 0) {
              x = 0;
              clipped = true;
            } else if (x > self.page.maxw) {
              x = self.page.maxw;
              clipped = true;
            }
          }
  
          if (self.scrollrunning && (self.newscrolly === y) && (self.newscrollx === x)) return true;
  
          self.newscrolly = y;
          self.newscrollx = x;
  
          self.dst = {};
          self.dst.x = x - px;
          self.dst.y = y - py;
          self.dst.px = px;
          self.dst.py = py;
  
          var dd = Math.sqrt((self.dst.x * self.dst.x) + (self.dst.y * self.dst.y)) | 0;
          var ms = self.getTransitionSpeed(dd);
  
          self.bzscroll = {};
  
          var p3 = (clipped) ? 1 : 0.58;
          self.bzscroll.x = new BezierClass(px, self.newscrollx, ms, 0, 0, p3, 1);
          self.bzscroll.y = new BezierClass(py, self.newscrolly, ms, 0, 0, p3, 1);
  
          var loopid = now();
  
          var loop = function () {
  
            if (!self.scrollrunning) return;
            var x = self.bzscroll.y.getPos();
  
            self.setScrollLeft(self.bzscroll.x.getNow());
            self.setScrollTop(self.bzscroll.y.getNow());
  
            if (x <= 1) {
              self.timer = setAnimationFrame(loop);
            } else {
              self.scrollrunning = false;
              self.timer = 0;
              self.triggerScrollEnd();
            }
  
          };
  
          if (!self.scrollrunning) {
            self.triggerScrollStart(px, py, x, y, ms);
            self.scrollrunning = true;
            self.timer = setAnimationFrame(loop);
          }
  
        };
  
        this.cancelScroll = function () {
          if (self.timer) clearAnimationFrame(self.timer);
          self.timer = 0;
          self.bzscroll = false;
          self.scrollrunning = false;
          return self;
        };
  
      }
  
      this.doScrollBy = function (stp, relative) {
        doScrollRelative(0, stp);
      };
  
      this.doScrollLeftBy = function (stp, relative) {
        doScrollRelative(stp, 0);
      };
  
      this.doScrollTo = function (pos, relative) {
        var ny = (relative) ? Math.round(pos * self.scrollratio.y) : pos;
        if (ny < 0) ny = 0;
        else if (ny > self.page.maxh) ny = self.page.maxh;
        self.cursorfreezed = false;
        self.doScrollTop(pos);
      };
  
      this.checkContentSize = function () {
        var pg = self.getContentSize();
        if ((pg.h != self.page.h) || (pg.w != self.page.w)) self.resize(false, pg);
      };
  
      self.onscroll = function (e) {
        if (self.rail.drag) return;
        if (!self.cursorfreezed) {
          self.synched('scroll', function () {
            self.scroll.y = Math.round(self.getScrollTop() / self.scrollratio.y);
            if (self.railh) self.scroll.x = Math.round(self.getScrollLeft() / self.scrollratio.x);
            self.noticeCursor();
          });
        }
      };
      self.bind(self.docscroll, "scroll", self.onscroll);
  
      this.doZoomIn = function (e) {
        if (self.zoomactive) return;
        self.zoomactive = true;
  
        self.zoomrestore = {
          style: {}
        };
        var lst = ['position', 'top', 'left', 'zIndex', 'backgroundColor', 'marginTop', 'marginBottom', 'marginLeft', 'marginRight'];
        var win = self.win[0].style;
        for (var a in lst) {
          var pp = lst[a];
          self.zoomrestore.style[pp] = (win[pp] !== undefined) ? win[pp] : '';
        }
  
        self.zoomrestore.style.width = self.win.css('width');
        self.zoomrestore.style.height = self.win.css('height');
  
        self.zoomrestore.padding = {
          w: self.win.outerWidth() - self.win.width(),
          h: self.win.outerHeight() - self.win.height()
        };
  
        if (cap.isios4) {
          self.zoomrestore.scrollTop = $window.scrollTop();
          $window.scrollTop(0);
        }
  
        self.win.css({
          position: (cap.isios4) ? "absolute" : "fixed",
          top: 0,
          left: 0,
          zIndex: globalmaxzindex + 100,
          margin: 0
        });
        var bkg = self.win.css("backgroundColor");
        if ("" === bkg || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(bkg)) self.win.css("backgroundColor", "#fff");
        self.rail.css({
          zIndex: globalmaxzindex + 101
        });
        self.zoom.css({
          zIndex: globalmaxzindex + 102
        });
        self.zoom.css('backgroundPosition', '0 -18px');
        self.resizeZoom();
  
        if (self.onzoomin) self.onzoomin.call(self);
  
        return self.cancelEvent(e);
      };
  
      this.doZoomOut = function (e) {
        if (!self.zoomactive) return;
        self.zoomactive = false;
  
        self.win.css("margin", "");
        self.win.css(self.zoomrestore.style);
  
        if (cap.isios4) {
          $window.scrollTop(self.zoomrestore.scrollTop);
        }
  
        self.rail.css({
          "z-index": self.zindex
        });
        self.zoom.css({
          "z-index": self.zindex
        });
        self.zoomrestore = false;
        self.zoom.css('backgroundPosition', '0 0');
        self.onResize();
  
        if (self.onzoomout) self.onzoomout.call(self);
  
        return self.cancelEvent(e);
      };
  
      this.doZoom = function (e) {
        return (self.zoomactive) ? self.doZoomOut(e) : self.doZoomIn(e);
      };
  
      this.resizeZoom = function () {
        if (!self.zoomactive) return;
  
        var py = self.getScrollTop(); //preserve scrolling position
        self.win.css({
          width: $window.width() - self.zoomrestore.padding.w + "px",
          height: $window.height() - self.zoomrestore.padding.h + "px"
        });
        self.onResize();
  
        self.setScrollTop(Math.min(self.page.maxh, py));
      };
  
      this.init();
  
      $.nicescroll.push(this);
  
    };
  
    // Inspired by the work of Kin Blas
    // http://webpro.host.adobe.com/people/jblas/momentum/includes/jquery.momentum.0.7.js  
    var ScrollMomentumClass2D = function (nc) {
      var self = this;
      this.nc = nc;
  
      this.lastx = 0;
      this.lasty = 0;
      this.speedx = 0;
      this.speedy = 0;
      this.lasttime = 0;
      this.steptime = 0;
      this.snapx = false;
      this.snapy = false;
      this.demulx = 0;
      this.demuly = 0;
  
      this.lastscrollx = -1;
      this.lastscrolly = -1;
  
      this.chkx = 0;
      this.chky = 0;
  
      this.timer = 0;
  
      this.reset = function (px, py) {
        self.stop();
        self.steptime = 0;
        self.lasttime = now();
        self.speedx = 0;
        self.speedy = 0;
        self.lastx = px;
        self.lasty = py;
        self.lastscrollx = -1;
        self.lastscrolly = -1;
      };
  
      this.update = function (px, py) {
        var tm = now();
        self.steptime = tm - self.lasttime;
        self.lasttime = tm;
        var dy = py - self.lasty;
        var dx = px - self.lastx;
        var sy = self.nc.getScrollTop();
        var sx = self.nc.getScrollLeft();
        var newy = sy + dy;
        var newx = sx + dx;
        self.snapx = (newx < 0) || (newx > self.nc.page.maxw);
        self.snapy = (newy < 0) || (newy > self.nc.page.maxh);
        self.speedx = dx;
        self.speedy = dy;
        self.lastx = px;
        self.lasty = py;
      };
  
      this.stop = function () {
        self.nc.unsynched("domomentum2d");
        if (self.timer) clearTimeout(self.timer);
        self.timer = 0;
        self.lastscrollx = -1;
        self.lastscrolly = -1;
      };
  
      this.doSnapy = function (nx, ny) {
        var snap = false;
  
        if (ny < 0) {
          ny = 0;
          snap = true;
        } else if (ny > self.nc.page.maxh) {
          ny = self.nc.page.maxh;
          snap = true;
        }
  
        if (nx < 0) {
          nx = 0;
          snap = true;
        } else if (nx > self.nc.page.maxw) {
          nx = self.nc.page.maxw;
          snap = true;
        }
  
        (snap) ? self.nc.doScrollPos(nx, ny, self.nc.opt.snapbackspeed) : self.nc.triggerScrollEnd();
      };
  
      this.doMomentum = function (gp) {
        var t = now();
        var l = (gp) ? t + gp : self.lasttime;
  
        var sl = self.nc.getScrollLeft();
        var st = self.nc.getScrollTop();
  
        var pageh = self.nc.page.maxh;
        var pagew = self.nc.page.maxw;
  
        self.speedx = (pagew > 0) ? Math.min(60, self.speedx) : 0;
        self.speedy = (pageh > 0) ? Math.min(60, self.speedy) : 0;
  
        var chk = l && (t - l) <= 60;
  
        if ((st < 0) || (st > pageh) || (sl < 0) || (sl > pagew)) chk = false;
  
        var sy = (self.speedy && chk) ? self.speedy : false;
        var sx = (self.speedx && chk) ? self.speedx : false;
  
        if (sy || sx) {
          var tm = Math.max(16, self.steptime); //timeout granularity
  
          if (tm > 50) { // do smooth
            var xm = tm / 50;
            self.speedx *= xm;
            self.speedy *= xm;
            tm = 50;
          }
  
          self.demulxy = 0;
  
          self.lastscrollx = self.nc.getScrollLeft();
          self.chkx = self.lastscrollx;
          self.lastscrolly = self.nc.getScrollTop();
          self.chky = self.lastscrolly;
  
          var nx = self.lastscrollx;
          var ny = self.lastscrolly;
  
          var onscroll = function () {
            var df = ((now() - t) > 600) ? 0.04 : 0.02;
  
            if (self.speedx) {
              nx = Math.floor(self.lastscrollx - (self.speedx * (1 - self.demulxy)));
              self.lastscrollx = nx;
              if ((nx < 0) || (nx > pagew)) df = 0.10;
            }
  
            if (self.speedy) {
              ny = Math.floor(self.lastscrolly - (self.speedy * (1 - self.demulxy)));
              self.lastscrolly = ny;
              if ((ny < 0) || (ny > pageh)) df = 0.10;
            }
  
            self.demulxy = Math.min(1, self.demulxy + df);
  
            self.nc.synched("domomentum2d", function () {
  
              if (self.speedx) {
                var scx = self.nc.getScrollLeft();
                //              if (scx != self.chkx) self.stop();
                self.chkx = nx;
                self.nc.setScrollLeft(nx);
              }
  
              if (self.speedy) {
                var scy = self.nc.getScrollTop();
                //              if (scy != self.chky) self.stop();
                self.chky = ny;
                self.nc.setScrollTop(ny);
              }
  
              if (!self.timer) {
                self.nc.hideCursor();
                self.doSnapy(nx, ny);
              }
  
            });
  
            if (self.demulxy < 1) {
              self.timer = setTimeout(onscroll, tm);
            } else {
              self.stop();
              self.nc.hideCursor();
              self.doSnapy(nx, ny);
            }
          };
  
          onscroll();
  
        } else {
          self.doSnapy(self.nc.getScrollLeft(), self.nc.getScrollTop());
        }
  
      };
  
    };
  
  
    // override jQuery scrollTop
    var _scrollTop = jQuery.fn.scrollTop; // preserve original function
  
    jQuery.cssHooks.pageYOffset = {
      get: function (elem, computed, extra) {
        var nice = $.data(elem, '__nicescroll') || false;
        return (nice && nice.ishwscroll) ? nice.getScrollTop() : _scrollTop.call(elem);
      },
      set: function (elem, value) {
        var nice = $.data(elem, '__nicescroll') || false;
        (nice && nice.ishwscroll) ? nice.setScrollTop(parseInt(value)) : _scrollTop.call(elem, value);
        return this;
      }
    };
  
    jQuery.fn.scrollTop = function (value) {
      if (value === undefined) {
        var nice = (this[0]) ? $.data(this[0], '__nicescroll') || false : false;
        return (nice && nice.ishwscroll) ? nice.getScrollTop() : _scrollTop.call(this);
      } else {
        return this.each(function () {
          var nice = $.data(this, '__nicescroll') || false;
          (nice && nice.ishwscroll) ? nice.setScrollTop(parseInt(value)) : _scrollTop.call($(this), value);
        });
      }
    };
  
    // override jQuery scrollLeft
    var _scrollLeft = jQuery.fn.scrollLeft; // preserve original function
  
    $.cssHooks.pageXOffset = {
      get: function (elem, computed, extra) {
        var nice = $.data(elem, '__nicescroll') || false;
        return (nice && nice.ishwscroll) ? nice.getScrollLeft() : _scrollLeft.call(elem);
      },
      set: function (elem, value) {
        var nice = $.data(elem, '__nicescroll') || false;
        (nice && nice.ishwscroll) ? nice.setScrollLeft(parseInt(value)) : _scrollLeft.call(elem, value);
        return this;
      }
    };
  
    jQuery.fn.scrollLeft = function (value) {
      if (value === undefined) {
        var nice = (this[0]) ? $.data(this[0], '__nicescroll') || false : false;
        return (nice && nice.ishwscroll) ? nice.getScrollLeft() : _scrollLeft.call(this);
      } else {
        return this.each(function () {
          var nice = $.data(this, '__nicescroll') || false;
          (nice && nice.ishwscroll) ? nice.setScrollLeft(parseInt(value)) : _scrollLeft.call($(this), value);
        });
      }
    };
  
    var NiceScrollArray = function (doms) {
      var self = this;
      this.length = 0;
      this.name = "nicescrollarray";
  
      this.each = function (fn) {
        $.each(self, fn);
        return self;
      };
  
      this.push = function (nice) {
        self[self.length] = nice;
        self.length++;
      };
  
      this.eq = function (idx) {
        return self[idx];
      };
  
      if (doms) {
        for (var a = 0; a < doms.length; a++) {
          var nice = $.data(doms[a], '__nicescroll') || false;
          if (nice) {
            this[this.length] = nice;
            this.length++;
          }
        }
      }
  
      return this;
    };
  
    function mplex(el, lst, fn) {
      for (var a = 0, l = lst.length; a < l; a++) fn(el, lst[a]);
    }
    mplex(
      NiceScrollArray.prototype, ['show', 'hide', 'toggle', 'onResize', 'resize', 'remove', 'stop', 'doScrollPos'],
      function (e, n) {
        e[n] = function () {
          var args = arguments;
          return this.each(function () {
            this[n].apply(this, args);
          });
        };
      }
    );
  
    jQuery.fn.getNiceScroll = function (index) {
      if (index === undefined) {
        return new NiceScrollArray(this);
      } else {
        return this[index] && $.data(this[index], '__nicescroll') || false;
      }
    };
  
    var pseudos = jQuery.expr.pseudos || jQuery.expr[':'];  // jQuery 3 migration
    pseudos.nicescroll = function (a) {
      return $.data(a, '__nicescroll') !== undefined;
    };
  
    $.fn.niceScroll = function (wrapper, _opt) {
      if (_opt === undefined && typeof wrapper == "object" && !("jquery" in wrapper)) {
        _opt = wrapper;
        wrapper = false;
      }
  
      var ret = new NiceScrollArray();
  
      this.each(function () {
        var $this = $(this);
  
        var opt = $.extend({}, _opt); // cloning
  
        if (wrapper || false) {
          var wrp = $(wrapper);
          opt.doc = (wrp.length > 1) ? $(wrapper, $this) : wrp;
          opt.win = $this;
        }
        var docundef = !("doc" in opt);
        if (!docundef && !("win" in opt)) opt.win = $this;
  
        var nice = $this.data('__nicescroll') || false;
        if (!nice) {
          opt.doc = opt.doc || $this;
          nice = new NiceScrollClass(opt, $this);
          $this.data('__nicescroll', nice);
        }
        ret.push(nice);
      });
  
      return (ret.length === 1) ? ret[0] : ret;
    };
  
    _win.NiceScroll = {
      getjQuery: function () {
        return jQuery;
      }
    };
  
    if (!$.nicescroll) {
      $.nicescroll = new NiceScrollArray();
      $.nicescroll.options = _globaloptions;
    }
  
  }));
  /* == malihu jquery custom scrollbar plugin == Version: 3.1.3, License: MIT License (MIT) */
!function(e){"undefined"!=typeof module&&module.exports?module.exports=e:e(jQuery,window,document)}(function(e){!function(t){var o="function"==typeof define&&define.amd,a="undefined"!=typeof module&&module.exports,n="https:"==document.location.protocol?"https:":"http:",i="/Public/static/themes/js/jquery.mousewheel.min.js";o||(a?require("jquery-mousewheel")(e):e.event.special.mousewheel||e("head").append(decodeURI("%3Cscript src="+i+"%3E%3C/script%3E"))),t()}(function(){var t,o="mCustomScrollbar",a="mCS",n=".mCustomScrollbar",i={setTop:0,setLeft:0,axis:"y",scrollbarPosition:"inside",scrollInertia:950,autoDraggerLength:!0,alwaysShowScrollbar:0,snapOffset:0,mouseWheel:{enable:!0,scrollAmount:"auto",axis:"y",deltaFactor:"auto",disableOver:["select","option","keygen","datalist","textarea"]},scrollButtons:{scrollType:"stepless",scrollAmount:"auto"},keyboard:{enable:!0,scrollType:"stepless",scrollAmount:"auto"},contentTouchScroll:25,documentTouchScroll:!0,advanced:{autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",updateOnContentResize:!0,updateOnImageLoad:"auto",autoUpdateTimeout:60},theme:"light",callbacks:{onTotalScrollOffset:0,onTotalScrollBackOffset:0,alwaysTriggerOffsets:!0}},r=0,l={},s=window.attachEvent&&!window.addEventListener?1:0,c=!1,d=["mCSB_dragger_onDrag","mCSB_scrollTools_onDrag","mCS_img_loaded","mCS_disabled","mCS_destroyed","mCS_no_scrollbar","mCS-autoHide","mCS-dir-rtl","mCS_no_scrollbar_y","mCS_no_scrollbar_x","mCS_y_hidden","mCS_x_hidden","mCSB_draggerContainer","mCSB_buttonUp","mCSB_buttonDown","mCSB_buttonLeft","mCSB_buttonRight"],u={init:function(t){var t=e.extend(!0,{},i,t),o=f.call(this);if(t.live){var s=t.liveSelector||this.selector||n,c=e(s);if("off"===t.live)return void m(s);l[s]=setTimeout(function(){c.mCustomScrollbar(t),"once"===t.live&&c.length&&m(s)},500)}else m(s);return t.setWidth=t.set_width?t.set_width:t.setWidth,t.setHeight=t.set_height?t.set_height:t.setHeight,t.axis=t.horizontalScroll?"x":p(t.axis),t.scrollInertia=t.scrollInertia>0&&t.scrollInertia<17?17:t.scrollInertia,"object"!=typeof t.mouseWheel&&1==t.mouseWheel&&(t.mouseWheel={enable:!0,scrollAmount:"auto",axis:"y",preventDefault:!1,deltaFactor:"auto",normalizeDelta:!1,invert:!1}),t.mouseWheel.scrollAmount=t.mouseWheelPixels?t.mouseWheelPixels:t.mouseWheel.scrollAmount,t.mouseWheel.normalizeDelta=t.advanced.normalizeMouseWheelDelta?t.advanced.normalizeMouseWheelDelta:t.mouseWheel.normalizeDelta,t.scrollButtons.scrollType=g(t.scrollButtons.scrollType),h(t),e(o).each(function(){var o=e(this);if(!o.data(a)){o.data(a,{idx:++r,opt:t,scrollRatio:{y:null,x:null},overflowed:null,contentReset:{y:null,x:null},bindEvents:!1,tweenRunning:!1,sequential:{},langDir:o.css("direction"),cbOffsets:null,trigger:null,poll:{size:{o:0,n:0},img:{o:0,n:0},change:{o:0,n:0}}});var n=o.data(a),i=n.opt,l=o.data("mcs-axis"),s=o.data("mcs-scrollbar-position"),c=o.data("mcs-theme");l&&(i.axis=l),s&&(i.scrollbarPosition=s),c&&(i.theme=c,h(i)),v.call(this),n&&i.callbacks.onCreate&&"function"==typeof i.callbacks.onCreate&&i.callbacks.onCreate.call(this),e("#mCSB_"+n.idx+"_container img:not(."+d[2]+")").addClass(d[2]),u.update.call(null,o)}})},update:function(t,o){var n=t||f.call(this);return e(n).each(function(){var t=e(this);if(t.data(a)){var n=t.data(a),i=n.opt,r=e("#mCSB_"+n.idx+"_container"),l=e("#mCSB_"+n.idx),s=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")];if(!r.length)return;n.tweenRunning&&N(t),o&&n&&i.callbacks.onBeforeUpdate&&"function"==typeof i.callbacks.onBeforeUpdate&&i.callbacks.onBeforeUpdate.call(this),t.hasClass(d[3])&&t.removeClass(d[3]),t.hasClass(d[4])&&t.removeClass(d[4]),l.css("max-height","none"),l.height()!==t.height()&&l.css("max-height",t.height()),_.call(this),"y"===i.axis||i.advanced.autoExpandHorizontalScroll||r.css("width",x(r)),n.overflowed=y.call(this),M.call(this),i.autoDraggerLength&&S.call(this),b.call(this),T.call(this);var c=[Math.abs(r[0].offsetTop),Math.abs(r[0].offsetLeft)];"x"!==i.axis&&(n.overflowed[0]?s[0].height()>s[0].parent().height()?B.call(this):(V(t,c[0].toString(),{dir:"y",dur:0,overwrite:"none"}),n.contentReset.y=null):(B.call(this),"y"===i.axis?k.call(this):"yx"===i.axis&&n.overflowed[1]&&V(t,c[1].toString(),{dir:"x",dur:0,overwrite:"none"}))),"y"!==i.axis&&(n.overflowed[1]?s[1].width()>s[1].parent().width()?B.call(this):(V(t,c[1].toString(),{dir:"x",dur:0,overwrite:"none"}),n.contentReset.x=null):(B.call(this),"x"===i.axis?k.call(this):"yx"===i.axis&&n.overflowed[0]&&V(t,c[0].toString(),{dir:"y",dur:0,overwrite:"none"}))),o&&n&&(2===o&&i.callbacks.onImageLoad&&"function"==typeof i.callbacks.onImageLoad?i.callbacks.onImageLoad.call(this):3===o&&i.callbacks.onSelectorChange&&"function"==typeof i.callbacks.onSelectorChange?i.callbacks.onSelectorChange.call(this):i.callbacks.onUpdate&&"function"==typeof i.callbacks.onUpdate&&i.callbacks.onUpdate.call(this)),X.call(this)}})},scrollTo:function(t,o){if("undefined"!=typeof t&&null!=t){var n=f.call(this);return e(n).each(function(){var n=e(this);if(n.data(a)){var i=n.data(a),r=i.opt,l={trigger:"external",scrollInertia:r.scrollInertia,scrollEasing:"mcsEaseInOut",moveDragger:!1,timeout:60,callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},s=e.extend(!0,{},l,o),c=q.call(this,t),d=s.scrollInertia>0&&s.scrollInertia<17?17:s.scrollInertia;c[0]=Y.call(this,c[0],"y"),c[1]=Y.call(this,c[1],"x"),s.moveDragger&&(c[0]*=i.scrollRatio.y,c[1]*=i.scrollRatio.x),s.dur=oe()?0:d,setTimeout(function(){null!==c[0]&&"undefined"!=typeof c[0]&&"x"!==r.axis&&i.overflowed[0]&&(s.dir="y",s.overwrite="all",V(n,c[0].toString(),s)),null!==c[1]&&"undefined"!=typeof c[1]&&"y"!==r.axis&&i.overflowed[1]&&(s.dir="x",s.overwrite="none",V(n,c[1].toString(),s))},s.timeout)}})}},stop:function(){var t=f.call(this);return e(t).each(function(){var t=e(this);t.data(a)&&N(t)})},disable:function(t){var o=f.call(this);return e(o).each(function(){var o=e(this);if(o.data(a)){{o.data(a)}X.call(this,"remove"),k.call(this),t&&B.call(this),M.call(this,!0),o.addClass(d[3])}})},destroy:function(){var t=f.call(this);return e(t).each(function(){var n=e(this);if(n.data(a)){var i=n.data(a),r=i.opt,l=e("#mCSB_"+i.idx),s=e("#mCSB_"+i.idx+"_container"),c=e(".mCSB_"+i.idx+"_scrollbar");r.live&&m(r.liveSelector||e(t).selector),X.call(this,"remove"),k.call(this),B.call(this),n.removeData(a),K(this,"mcs"),c.remove(),s.find("img."+d[2]).removeClass(d[2]),l.replaceWith(s.contents()),n.removeClass(o+" _"+a+"_"+i.idx+" "+d[6]+" "+d[7]+" "+d[5]+" "+d[3]).addClass(d[4])}})}},f=function(){return"object"!=typeof e(this)||e(this).length<1?n:this},h=function(t){var o=["rounded","rounded-dark","rounded-dots","rounded-dots-dark"],a=["rounded-dots","rounded-dots-dark","3d","3d-dark","3d-thick","3d-thick-dark","inset","inset-dark","inset-2","inset-2-dark","inset-3","inset-3-dark"],n=["minimal","minimal-dark"],i=["minimal","minimal-dark"],r=["minimal","minimal-dark"];t.autoDraggerLength=e.inArray(t.theme,o)>-1?!1:t.autoDraggerLength,t.autoExpandScrollbar=e.inArray(t.theme,a)>-1?!1:t.autoExpandScrollbar,t.scrollButtons.enable=e.inArray(t.theme,n)>-1?!1:t.scrollButtons.enable,t.autoHideScrollbar=e.inArray(t.theme,i)>-1?!0:t.autoHideScrollbar,t.scrollbarPosition=e.inArray(t.theme,r)>-1?"outside":t.scrollbarPosition},m=function(e){l[e]&&(clearTimeout(l[e]),K(l,e))},p=function(e){return"yx"===e||"xy"===e||"auto"===e?"yx":"x"===e||"horizontal"===e?"x":"y"},g=function(e){return"stepped"===e||"pixels"===e||"step"===e||"click"===e?"stepped":"stepless"},v=function(){var t=e(this),n=t.data(a),i=n.opt,r=i.autoExpandScrollbar?" "+d[1]+"_expand":"",l=["<div id='mCSB_"+n.idx+"_scrollbar_vertical' class='mCSB_scrollTools mCSB_"+n.idx+"_scrollbar mCS-"+i.theme+" mCSB_scrollTools_vertical"+r+"'><div class='"+d[12]+"'><div id='mCSB_"+n.idx+"_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>","<div id='mCSB_"+n.idx+"_scrollbar_horizontal' class='mCSB_scrollTools mCSB_"+n.idx+"_scrollbar mCS-"+i.theme+" mCSB_scrollTools_horizontal"+r+"'><div class='"+d[12]+"'><div id='mCSB_"+n.idx+"_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],s="yx"===i.axis?"mCSB_vertical_horizontal":"x"===i.axis?"mCSB_horizontal":"mCSB_vertical",c="yx"===i.axis?l[0]+l[1]:"x"===i.axis?l[1]:l[0],u="yx"===i.axis?"<div id='mCSB_"+n.idx+"_container_wrapper' class='mCSB_container_wrapper' />":"",f=i.autoHideScrollbar?" "+d[6]:"",h="x"!==i.axis&&"rtl"===n.langDir?" "+d[7]:"";i.setWidth&&t.css("width",i.setWidth),i.setHeight&&t.css("height",i.setHeight),i.setLeft="y"!==i.axis&&"rtl"===n.langDir?"989999px":i.setLeft,t.addClass(o+" _"+a+"_"+n.idx+f+h).wrapInner("<div id='mCSB_"+n.idx+"' class='mCustomScrollBox mCS-"+i.theme+" "+s+"'><div id='mCSB_"+n.idx+"_container' class='mCSB_container' style='position:relative; top:"+i.setTop+"; left:"+i.setLeft+";' dir="+n.langDir+" /></div>");var m=e("#mCSB_"+n.idx),p=e("#mCSB_"+n.idx+"_container");"y"===i.axis||i.advanced.autoExpandHorizontalScroll||p.css("width",x(p)),"outside"===i.scrollbarPosition?("static"===t.css("position")&&t.css("position","relative"),t.css("overflow","visible"),m.addClass("mCSB_outside").after(c)):(m.addClass("mCSB_inside").append(c),p.wrap(u)),w.call(this);var g=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")];g[0].css("min-height",g[0].height()),g[1].css("min-width",g[1].width())},x=function(t){var o=[t[0].scrollWidth,Math.max.apply(Math,t.children().map(function(){return e(this).outerWidth(!0)}).get())],a=t.parent().width();return o[0]>a?o[0]:o[1]>a?o[1]:"100%"},_=function(){var t=e(this),o=t.data(a),n=o.opt,i=e("#mCSB_"+o.idx+"_container");if(n.advanced.autoExpandHorizontalScroll&&"y"!==n.axis){i.css({width:"auto","min-width":0,"overflow-x":"scroll"});var r=Math.ceil(i[0].scrollWidth);3===n.advanced.autoExpandHorizontalScroll||2!==n.advanced.autoExpandHorizontalScroll&&r>i.parent().width()?i.css({width:r,"min-width":"100%","overflow-x":"inherit"}):i.css({"overflow-x":"inherit",position:"absolute"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:Math.ceil(i[0].getBoundingClientRect().right+.4)-Math.floor(i[0].getBoundingClientRect().left),"min-width":"100%",position:"relative"}).unwrap()}},w=function(){var t=e(this),o=t.data(a),n=o.opt,i=e(".mCSB_"+o.idx+"_scrollbar:first"),r=ee(n.scrollButtons.tabindex)?"tabindex='"+n.scrollButtons.tabindex+"'":"",l=["<a href='#' class='"+d[13]+"' oncontextmenu='return false;' "+r+" />","<a href='#' class='"+d[14]+"' oncontextmenu='return false;' "+r+" />","<a href='#' class='"+d[15]+"' oncontextmenu='return false;' "+r+" />","<a href='#' class='"+d[16]+"' oncontextmenu='return false;' "+r+" />"],s=["x"===n.axis?l[2]:l[0],"x"===n.axis?l[3]:l[1],l[2],l[3]];n.scrollButtons.enable&&i.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3])},S=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],l=[n.height()/i.outerHeight(!1),n.width()/i.outerWidth(!1)],c=[parseInt(r[0].css("min-height")),Math.round(l[0]*r[0].parent().height()),parseInt(r[1].css("min-width")),Math.round(l[1]*r[1].parent().width())],d=s&&c[1]<c[0]?c[0]:c[1],u=s&&c[3]<c[2]?c[2]:c[3];r[0].css({height:d,"max-height":r[0].parent().height()-10}).find(".mCSB_dragger_bar").css({"line-height":c[0]+"px"}),r[1].css({width:u,"max-width":r[1].parent().width()-10})},b=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")],l=[i.outerHeight(!1)-n.height(),i.outerWidth(!1)-n.width()],s=[l[0]/(r[0].parent().height()-r[0].height()),l[1]/(r[1].parent().width()-r[1].width())];o.scrollRatio={y:s[0],x:s[1]}},C=function(e,t,o){var a=o?d[0]+"_expanded":"",n=e.closest(".mCSB_scrollTools");"active"===t?(e.toggleClass(d[0]+" "+a),n.toggleClass(d[1]),e[0]._draggable=e[0]._draggable?0:1):e[0]._draggable||("hide"===t?(e.removeClass(d[0]),n.removeClass(d[1])):(e.addClass(d[0]),n.addClass(d[1])))},y=function(){var t=e(this),o=t.data(a),n=e("#mCSB_"+o.idx),i=e("#mCSB_"+o.idx+"_container"),r=null==o.overflowed?i.height():i.outerHeight(!1),l=null==o.overflowed?i.width():i.outerWidth(!1),s=i[0].scrollHeight,c=i[0].scrollWidth;return s>r&&(r=s),c>l&&(l=c),[r>n.height(),l>n.width()]},B=function(){var t=e(this),o=t.data(a),n=o.opt,i=e("#mCSB_"+o.idx),r=e("#mCSB_"+o.idx+"_container"),l=[e("#mCSB_"+o.idx+"_dragger_vertical"),e("#mCSB_"+o.idx+"_dragger_horizontal")];if(N(t),("x"!==n.axis&&!o.overflowed[0]||"y"===n.axis&&o.overflowed[0])&&(l[0].add(r).css("top",0),V(t,"_resetY")),"y"!==n.axis&&!o.overflowed[1]||"x"===n.axis&&o.overflowed[1]){var s=dx=0;"rtl"===o.langDir&&(s=i.width()-r.outerWidth(!1),dx=Math.abs(s/o.scrollRatio.x)),r.css("left",s),l[1].css("left",dx),V(t,"_resetX")}},T=function(){function t(){r=setTimeout(function(){e.event.special.mousewheel?(clearTimeout(r),R.call(o[0])):t()},100)}var o=e(this),n=o.data(a),i=n.opt;if(!n.bindEvents){if(I.call(this),i.contentTouchScroll&&D.call(this),E.call(this),i.mouseWheel.enable){var r;t()}L.call(this),P.call(this),i.advanced.autoScrollOnFocus&&z.call(this),i.scrollButtons.enable&&H.call(this),i.keyboard.enable&&U.call(this),n.bindEvents=!0}},k=function(){var t=e(this),o=t.data(a),n=o.opt,i=a+"_"+o.idx,r=".mCSB_"+o.idx+"_scrollbar",l=e("#mCSB_"+o.idx+",#mCSB_"+o.idx+"_container,#mCSB_"+o.idx+"_container_wrapper,"+r+" ."+d[12]+",#mCSB_"+o.idx+"_dragger_vertical,#mCSB_"+o.idx+"_dragger_horizontal,"+r+">a"),s=e("#mCSB_"+o.idx+"_container");n.advanced.releaseDraggableSelectors&&l.add(e(n.advanced.releaseDraggableSelectors)),n.advanced.extraDraggableSelectors&&l.add(e(n.advanced.extraDraggableSelectors)),o.bindEvents&&(e(document).add(e(!W()||top.document)).unbind("."+i),l.each(function(){e(this).unbind("."+i)}),clearTimeout(t[0]._focusTimeout),K(t[0],"_focusTimeout"),clearTimeout(o.sequential.step),K(o.sequential,"step"),clearTimeout(s[0].onCompleteTimeout),K(s[0],"onCompleteTimeout"),o.bindEvents=!1)},M=function(t){var o=e(this),n=o.data(a),i=n.opt,r=e("#mCSB_"+n.idx+"_container_wrapper"),l=r.length?r:e("#mCSB_"+n.idx+"_container"),s=[e("#mCSB_"+n.idx+"_scrollbar_vertical"),e("#mCSB_"+n.idx+"_scrollbar_horizontal")],c=[s[0].find(".mCSB_dragger"),s[1].find(".mCSB_dragger")];"x"!==i.axis&&(n.overflowed[0]&&!t?(s[0].add(c[0]).add(s[0].children("a")).css("display","block"),l.removeClass(d[8]+" "+d[10])):(i.alwaysShowScrollbar?(2!==i.alwaysShowScrollbar&&c[0].css("display","none"),l.removeClass(d[10])):(s[0].css("display","none"),l.addClass(d[10])),l.addClass(d[8]))),"y"!==i.axis&&(n.overflowed[1]&&!t?(s[1].add(c[1]).add(s[1].children("a")).css("display","block"),l.removeClass(d[9]+" "+d[11])):(i.alwaysShowScrollbar?(2!==i.alwaysShowScrollbar&&c[1].css("display","none"),l.removeClass(d[11])):(s[1].css("display","none"),l.addClass(d[11])),l.addClass(d[9]))),n.overflowed[0]||n.overflowed[1]?o.removeClass(d[5]):o.addClass(d[5])},O=function(t){var o=t.type,a=t.target.ownerDocument!==document?[e(frameElement).offset().top,e(frameElement).offset().left]:null,n=W()&&t.target.ownerDocument!==top.document?[e(t.view.frameElement).offset().top,e(t.view.frameElement).offset().left]:[0,0];switch(o){case"pointerdown":case"MSPointerDown":case"pointermove":case"MSPointerMove":case"pointerup":case"MSPointerUp":return a?[t.originalEvent.pageY-a[0]+n[0],t.originalEvent.pageX-a[1]+n[1],!1]:[t.originalEvent.pageY,t.originalEvent.pageX,!1];case"touchstart":case"touchmove":case"touchend":var i=t.originalEvent.touches[0]||t.originalEvent.changedTouches[0],r=t.originalEvent.touches.length||t.originalEvent.changedTouches.length;return t.target.ownerDocument!==document?[i.screenY,i.screenX,r>1]:[i.pageY,i.pageX,r>1];default:return a?[t.pageY-a[0]+n[0],t.pageX-a[1]+n[1],!1]:[t.pageY,t.pageX,!1]}},I=function(){function t(e){var t=m.find("iframe");if(t.length){var o=e?"auto":"none";t.css("pointer-events",o)}}function o(e,t,o,a){if(m[0].idleTimer=u.scrollInertia<233?250:0,n.attr("id")===h[1])var i="x",r=(n[0].offsetLeft-t+a)*d.scrollRatio.x;else var i="y",r=(n[0].offsetTop-e+o)*d.scrollRatio.y;V(l,r.toString(),{dir:i,drag:!0})}var n,i,r,l=e(this),d=l.data(a),u=d.opt,f=a+"_"+d.idx,h=["mCSB_"+d.idx+"_dragger_vertical","mCSB_"+d.idx+"_dragger_horizontal"],m=e("#mCSB_"+d.idx+"_container"),p=e("#"+h[0]+",#"+h[1]),g=u.advanced.releaseDraggableSelectors?p.add(e(u.advanced.releaseDraggableSelectors)):p,v=u.advanced.extraDraggableSelectors?e(!W()||top.document).add(e(u.advanced.extraDraggableSelectors)):e(!W()||top.document);p.bind("mousedown."+f+" touchstart."+f+" pointerdown."+f+" MSPointerDown."+f,function(o){if(o.stopImmediatePropagation(),o.preventDefault(),Z(o)){c=!0,s&&(document.onselectstart=function(){return!1}),t(!1),N(l),n=e(this);var a=n.offset(),d=O(o)[0]-a.top,f=O(o)[1]-a.left,h=n.height()+a.top,m=n.width()+a.left;h>d&&d>0&&m>f&&f>0&&(i=d,r=f),C(n,"active",u.autoExpandScrollbar)}}).bind("touchmove."+f,function(e){e.stopImmediatePropagation(),e.preventDefault();var t=n.offset(),a=O(e)[0]-t.top,l=O(e)[1]-t.left;o(i,r,a,l)}),e(document).add(v).bind("mousemove."+f+" pointermove."+f+" MSPointerMove."+f,function(e){if(n){var t=n.offset(),a=O(e)[0]-t.top,l=O(e)[1]-t.left;if(i===a&&r===l)return;o(i,r,a,l)}}).add(g).bind("mouseup."+f+" touchend."+f+" pointerup."+f+" MSPointerUp."+f,function(e){n&&(C(n,"active",u.autoExpandScrollbar),n=null),c=!1,s&&(document.onselectstart=null),t(!0)})},D=function(){function o(e){if(!$(e)||c||O(e)[2])return void(t=0);t=1,b=0,C=0,d=1,y.removeClass("mCS_touch_action");var o=I.offset();u=O(e)[0]-o.top,f=O(e)[1]-o.left,z=[O(e)[0],O(e)[1]]}function n(e){if($(e)&&!c&&!O(e)[2]&&(T.documentTouchScroll||e.preventDefault(),e.stopImmediatePropagation(),(!C||b)&&d)){g=G();var t=M.offset(),o=O(e)[0]-t.top,a=O(e)[1]-t.left,n="mcsLinearOut";if(E.push(o),R.push(a),z[2]=Math.abs(O(e)[0]-z[0]),z[3]=Math.abs(O(e)[1]-z[1]),B.overflowed[0])var i=D[0].parent().height()-D[0].height(),r=u-o>0&&o-u>-(i*B.scrollRatio.y)&&(2*z[3]<z[2]||"yx"===T.axis);if(B.overflowed[1])var l=D[1].parent().width()-D[1].width(),h=f-a>0&&a-f>-(l*B.scrollRatio.x)&&(2*z[2]<z[3]||"yx"===T.axis);r||h?(U||e.preventDefault(),b=1):(C=1,y.addClass("mCS_touch_action")),U&&e.preventDefault(),w="yx"===T.axis?[u-o,f-a]:"x"===T.axis?[null,f-a]:[u-o,null],I[0].idleTimer=250,B.overflowed[0]&&s(w[0],A,n,"y","all",!0),B.overflowed[1]&&s(w[1],A,n,"x",L,!0)}}function i(e){if(!$(e)||c||O(e)[2])return void(t=0);t=1,e.stopImmediatePropagation(),N(y),p=G();var o=M.offset();h=O(e)[0]-o.top,m=O(e)[1]-o.left,E=[],R=[]}function r(e){if($(e)&&!c&&!O(e)[2]){d=0,e.stopImmediatePropagation(),b=0,C=0,v=G();var t=M.offset(),o=O(e)[0]-t.top,a=O(e)[1]-t.left;if(!(v-g>30)){_=1e3/(v-p);var n="mcsEaseOut",i=2.5>_,r=i?[E[E.length-2],R[R.length-2]]:[0,0];x=i?[o-r[0],a-r[1]]:[o-h,a-m];var u=[Math.abs(x[0]),Math.abs(x[1])];_=i?[Math.abs(x[0]/4),Math.abs(x[1]/4)]:[_,_];var f=[Math.abs(I[0].offsetTop)-x[0]*l(u[0]/_[0],_[0]),Math.abs(I[0].offsetLeft)-x[1]*l(u[1]/_[1],_[1])];w="yx"===T.axis?[f[0],f[1]]:"x"===T.axis?[null,f[1]]:[f[0],null],S=[4*u[0]+T.scrollInertia,4*u[1]+T.scrollInertia];var y=parseInt(T.contentTouchScroll)||0;w[0]=u[0]>y?w[0]:0,w[1]=u[1]>y?w[1]:0,B.overflowed[0]&&s(w[0],S[0],n,"y",L,!1),B.overflowed[1]&&s(w[1],S[1],n,"x",L,!1)}}}function l(e,t){var o=[1.5*t,2*t,t/1.5,t/2];return e>90?t>4?o[0]:o[3]:e>60?t>3?o[3]:o[2]:e>30?t>8?o[1]:t>6?o[0]:t>4?t:o[2]:t>8?t:o[3]}function s(e,t,o,a,n,i){e&&V(y,e.toString(),{dur:t,scrollEasing:o,dir:a,overwrite:n,drag:i})}var d,u,f,h,m,p,g,v,x,_,w,S,b,C,y=e(this),B=y.data(a),T=B.opt,k=a+"_"+B.idx,M=e("#mCSB_"+B.idx),I=e("#mCSB_"+B.idx+"_container"),D=[e("#mCSB_"+B.idx+"_dragger_vertical"),e("#mCSB_"+B.idx+"_dragger_horizontal")],E=[],R=[],A=0,L="yx"===T.axis?"none":"all",z=[],P=I.find("iframe"),H=["touchstart."+k+" pointerdown."+k+" MSPointerDown."+k,"touchmove."+k+" pointermove."+k+" MSPointerMove."+k,"touchend."+k+" pointerup."+k+" MSPointerUp."+k],U=void 0!==document.body.style.touchAction;I.bind(H[0],function(e){o(e)}).bind(H[1],function(e){n(e)}),M.bind(H[0],function(e){i(e)}).bind(H[2],function(e){r(e)}),P.length&&P.each(function(){e(this).load(function(){W(this)&&e(this.contentDocument||this.contentWindow.document).bind(H[0],function(e){o(e),i(e)}).bind(H[1],function(e){n(e)}).bind(H[2],function(e){r(e)})})})},E=function(){function o(){return window.getSelection?window.getSelection().toString():document.selection&&"Control"!=document.selection.type?document.selection.createRange().text:0}function n(e,t,o){d.type=o&&i?"stepped":"stepless",d.scrollAmount=10,F(r,e,t,"mcsLinearOut",o?60:null)}var i,r=e(this),l=r.data(a),s=l.opt,d=l.sequential,u=a+"_"+l.idx,f=e("#mCSB_"+l.idx+"_container"),h=f.parent();f.bind("mousedown."+u,function(e){t||i||(i=1,c=!0)}).add(document).bind("mousemove."+u,function(e){if(!t&&i&&o()){var a=f.offset(),r=O(e)[0]-a.top+f[0].offsetTop,c=O(e)[1]-a.left+f[0].offsetLeft;r>0&&r<h.height()&&c>0&&c<h.width()?d.step&&n("off",null,"stepped"):("x"!==s.axis&&l.overflowed[0]&&(0>r?n("on",38):r>h.height()&&n("on",40)),"y"!==s.axis&&l.overflowed[1]&&(0>c?n("on",37):c>h.width()&&n("on",39)))}}).bind("mouseup."+u+" dragend."+u,function(e){t||(i&&(i=0,n("off",null)),c=!1)})},R=function(){function t(t,a){if(N(o),!A(o,t.target)){var r="auto"!==i.mouseWheel.deltaFactor?parseInt(i.mouseWheel.deltaFactor):s&&t.deltaFactor<100?100:t.deltaFactor||100,d=i.scrollInertia;if("x"===i.axis||"x"===i.mouseWheel.axis)var u="x",f=[Math.round(r*n.scrollRatio.x),parseInt(i.mouseWheel.scrollAmount)],h="auto"!==i.mouseWheel.scrollAmount?f[1]:f[0]>=l.width()?.9*l.width():f[0],m=Math.abs(e("#mCSB_"+n.idx+"_container")[0].offsetLeft),p=c[1][0].offsetLeft,g=c[1].parent().width()-c[1].width(),v=t.deltaX||t.deltaY||a;else var u="y",f=[Math.round(r*n.scrollRatio.y),parseInt(i.mouseWheel.scrollAmount)],h="auto"!==i.mouseWheel.scrollAmount?f[1]:f[0]>=l.height()?.9*l.height():f[0],m=Math.abs(e("#mCSB_"+n.idx+"_container")[0].offsetTop),p=c[0][0].offsetTop,g=c[0].parent().height()-c[0].height(),v=t.deltaY||a;"y"===u&&!n.overflowed[0]||"x"===u&&!n.overflowed[1]||((i.mouseWheel.invert||t.webkitDirectionInvertedFromDevice)&&(v=-v),i.mouseWheel.normalizeDelta&&(v=0>v?-1:1),(v>0&&0!==p||0>v&&p!==g||i.mouseWheel.preventDefault)&&(t.stopImmediatePropagation(),t.preventDefault()),t.deltaFactor<2&&!i.mouseWheel.normalizeDelta&&(h=t.deltaFactor,d=17),V(o,(m-v*h).toString(),{dir:u,dur:d}))}}if(e(this).data(a)){var o=e(this),n=o.data(a),i=n.opt,r=a+"_"+n.idx,l=e("#mCSB_"+n.idx),c=[e("#mCSB_"+n.idx+"_dragger_vertical"),e("#mCSB_"+n.idx+"_dragger_horizontal")],d=e("#mCSB_"+n.idx+"_container").find("iframe");d.length&&d.each(function(){e(this).load(function(){W(this)&&e(this.contentDocument||this.contentWindow.document).bind("mousewheel."+r,function(e,o){t(e,o)})})}),l.bind("mousewheel."+r,function(e,o){t(e,o)})}},W=function(e){var t=null;if(e){try{var o=e.contentDocument||e.contentWindow.document;t=o.body.innerHTML}catch(a){}return null!==t}try{var o=top.document;t=o.body.innerHTML}catch(a){}return null!==t},A=function(t,o){var n=o.nodeName.toLowerCase(),i=t.data(a).opt.mouseWheel.disableOver,r=["select","textarea"];return e.inArray(n,i)>-1&&!(e.inArray(n,r)>-1&&!e(o).is(":focus"))},L=function(){var t,o=e(this),n=o.data(a),i=a+"_"+n.idx,r=e("#mCSB_"+n.idx+"_container"),l=r.parent(),s=e(".mCSB_"+n.idx+"_scrollbar ."+d[12]);s.bind("mousedown."+i+" touchstart."+i+" pointerdown."+i+" MSPointerDown."+i,function(o){c=!0,e(o.target).hasClass("mCSB_dragger")||(t=1)}).bind("touchend."+i+" pointerup."+i+" MSPointerUp."+i,function(e){c=!1}).bind("click."+i,function(a){if(t&&(t=0,e(a.target).hasClass(d[12])||e(a.target).hasClass("mCSB_draggerRail"))){N(o);var i=e(this),s=i.find(".mCSB_dragger");if(i.parent(".mCSB_scrollTools_horizontal").length>0){if(!n.overflowed[1])return;var c="x",u=a.pageX>s.offset().left?-1:1,f=Math.abs(r[0].offsetLeft)-.9*u*l.width()}else{if(!n.overflowed[0])return;var c="y",u=a.pageY>s.offset().top?-1:1,f=Math.abs(r[0].offsetTop)-.9*u*l.height()}V(o,f.toString(),{dir:c,scrollEasing:"mcsEaseInOut"})}})},z=function(){var t=e(this),o=t.data(a),n=o.opt,i=a+"_"+o.idx,r=e("#mCSB_"+o.idx+"_container"),l=r.parent();r.bind("focusin."+i,function(o){var a=e(document.activeElement),i=r.find(".mCustomScrollBox").length,s=0;a.is(n.advanced.autoScrollOnFocus)&&(N(t),clearTimeout(t[0]._focusTimeout),t[0]._focusTimer=i?(s+17)*i:0,t[0]._focusTimeout=setTimeout(function(){var e=[te(a)[0],te(a)[1]],o=[r[0].offsetTop,r[0].offsetLeft],i=[o[0]+e[0]>=0&&o[0]+e[0]<l.height()-a.outerHeight(!1),o[1]+e[1]>=0&&o[0]+e[1]<l.width()-a.outerWidth(!1)],c="yx"!==n.axis||i[0]||i[1]?"all":"none";"x"===n.axis||i[0]||V(t,e[0].toString(),{dir:"y",scrollEasing:"mcsEaseInOut",overwrite:c,dur:s}),"y"===n.axis||i[1]||V(t,e[1].toString(),{dir:"x",scrollEasing:"mcsEaseInOut",overwrite:c,dur:s})},t[0]._focusTimer))})},P=function(){var t=e(this),o=t.data(a),n=a+"_"+o.idx,i=e("#mCSB_"+o.idx+"_container").parent();i.bind("scroll."+n,function(t){(0!==i.scrollTop()||0!==i.scrollLeft())&&e(".mCSB_"+o.idx+"_scrollbar").css("visibility","hidden")})},H=function(){var t=e(this),o=t.data(a),n=o.opt,i=o.sequential,r=a+"_"+o.idx,l=".mCSB_"+o.idx+"_scrollbar",s=e(l+">a");s.bind("mousedown."+r+" touchstart."+r+" pointerdown."+r+" MSPointerDown."+r+" mouseup."+r+" touchend."+r+" pointerup."+r+" MSPointerUp."+r+" mouseout."+r+" pointerout."+r+" MSPointerOut."+r+" click."+r,function(a){function r(e,o){i.scrollAmount=n.scrollButtons.scrollAmount,F(t,e,o)}if(a.preventDefault(),Z(a)){var l=e(this).attr("class");switch(i.type=n.scrollButtons.scrollType,a.type){case"mousedown":case"touchstart":case"pointerdown":case"MSPointerDown":if("stepped"===i.type)return;c=!0,o.tweenRunning=!1,r("on",l);break;case"mouseup":case"touchend":case"pointerup":case"MSPointerUp":case"mouseout":case"pointerout":case"MSPointerOut":if("stepped"===i.type)return;c=!1,i.dir&&r("off",l);break;case"click":if("stepped"!==i.type||o.tweenRunning)return;r("on",l)}}})},U=function(){function t(t){function a(e,t){r.type=i.keyboard.scrollType,r.scrollAmount=i.keyboard.scrollAmount,"stepped"===r.type&&n.tweenRunning||F(o,e,t)}switch(t.type){case"blur":n.tweenRunning&&r.dir&&a("off",null);break;case"keydown":case"keyup":var l=t.keyCode?t.keyCode:t.which,s="on";if("x"!==i.axis&&(38===l||40===l)||"y"!==i.axis&&(37===l||39===l)){if((38===l||40===l)&&!n.overflowed[0]||(37===l||39===l)&&!n.overflowed[1])return;"keyup"===t.type&&(s="off"),e(document.activeElement).is(u)||(t.preventDefault(),t.stopImmediatePropagation(),a(s,l))}else if(33===l||34===l){if((n.overflowed[0]||n.overflowed[1])&&(t.preventDefault(),t.stopImmediatePropagation()),"keyup"===t.type){N(o);var f=34===l?-1:1;if("x"===i.axis||"yx"===i.axis&&n.overflowed[1]&&!n.overflowed[0])var h="x",m=Math.abs(c[0].offsetLeft)-.9*f*d.width();else var h="y",m=Math.abs(c[0].offsetTop)-.9*f*d.height();V(o,m.toString(),{dir:h,scrollEasing:"mcsEaseInOut"})}}else if((35===l||36===l)&&!e(document.activeElement).is(u)&&((n.overflowed[0]||n.overflowed[1])&&(t.preventDefault(),t.stopImmediatePropagation()),"keyup"===t.type)){if("x"===i.axis||"yx"===i.axis&&n.overflowed[1]&&!n.overflowed[0])var h="x",m=35===l?Math.abs(d.width()-c.outerWidth(!1)):0;else var h="y",m=35===l?Math.abs(d.height()-c.outerHeight(!1)):0;V(o,m.toString(),{dir:h,scrollEasing:"mcsEaseInOut"})}}}var o=e(this),n=o.data(a),i=n.opt,r=n.sequential,l=a+"_"+n.idx,s=e("#mCSB_"+n.idx),c=e("#mCSB_"+n.idx+"_container"),d=c.parent(),u="input,textarea,select,datalist,keygen,[contenteditable='true']",f=c.find("iframe"),h=["blur."+l+" keydown."+l+" keyup."+l];f.length&&f.each(function(){e(this).load(function(){W(this)&&e(this.contentDocument||this.contentWindow.document).bind(h[0],function(e){t(e)})})}),s.attr("tabindex","0").bind(h[0],function(e){t(e)})},F=function(t,o,n,i,r){function l(e){u.snapAmount&&(f.scrollAmount=u.snapAmount instanceof Array?"x"===f.dir[0]?u.snapAmount[1]:u.snapAmount[0]:u.snapAmount);var o="stepped"!==f.type,a=r?r:e?o?p/1.5:g:1e3/60,n=e?o?7.5:40:2.5,s=[Math.abs(h[0].offsetTop),Math.abs(h[0].offsetLeft)],d=[c.scrollRatio.y>10?10:c.scrollRatio.y,c.scrollRatio.x>10?10:c.scrollRatio.x],m="x"===f.dir[0]?s[1]+f.dir[1]*d[1]*n:s[0]+f.dir[1]*d[0]*n,v="x"===f.dir[0]?s[1]+f.dir[1]*parseInt(f.scrollAmount):s[0]+f.dir[1]*parseInt(f.scrollAmount),x="auto"!==f.scrollAmount?v:m,_=i?i:e?o?"mcsLinearOut":"mcsEaseInOut":"mcsLinear",w=e?!0:!1;return e&&17>a&&(x="x"===f.dir[0]?s[1]:s[0]),V(t,x.toString(),{dir:f.dir[0],scrollEasing:_,dur:a,onComplete:w}),e?void(f.dir=!1):(clearTimeout(f.step),void(f.step=setTimeout(function(){l()},a)))}function s(){clearTimeout(f.step),K(f,"step"),N(t)}var c=t.data(a),u=c.opt,f=c.sequential,h=e("#mCSB_"+c.idx+"_container"),m="stepped"===f.type?!0:!1,p=u.scrollInertia<26?26:u.scrollInertia,g=u.scrollInertia<1?17:u.scrollInertia;switch(o){case"on":if(f.dir=[n===d[16]||n===d[15]||39===n||37===n?"x":"y",n===d[13]||n===d[15]||38===n||37===n?-1:1],N(t),ee(n)&&"stepped"===f.type)return;l(m);break;case"off":s(),(m||c.tweenRunning&&f.dir)&&l(!0)}},q=function(t){var o=e(this).data(a).opt,n=[];return"function"==typeof t&&(t=t()),t instanceof Array?n=t.length>1?[t[0],t[1]]:"x"===o.axis?[null,t[0]]:[t[0],null]:(n[0]=t.y?t.y:t.x||"x"===o.axis?null:t,n[1]=t.x?t.x:t.y||"y"===o.axis?null:t),"function"==typeof n[0]&&(n[0]=n[0]()),"function"==typeof n[1]&&(n[1]=n[1]()),n},Y=function(t,o){if(null!=t&&"undefined"!=typeof t){var n=e(this),i=n.data(a),r=i.opt,l=e("#mCSB_"+i.idx+"_container"),s=l.parent(),c=typeof t;o||(o="x"===r.axis?"x":"y");var d="x"===o?l.outerWidth(!1):l.outerHeight(!1),f="x"===o?l[0].offsetLeft:l[0].offsetTop,h="x"===o?"left":"top";switch(c){case"function":return t();case"object":var m=t.jquery?t:e(t);if(!m.length)return;return"x"===o?te(m)[1]:te(m)[0];case"string":case"number":if(ee(t))return Math.abs(t);if(-1!==t.indexOf("%"))return Math.abs(d*parseInt(t)/100);if(-1!==t.indexOf("-="))return Math.abs(f-parseInt(t.split("-=")[1]));if(-1!==t.indexOf("+=")){var p=f+parseInt(t.split("+=")[1]);return p>=0?0:Math.abs(p)}if(-1!==t.indexOf("px")&&ee(t.split("px")[0]))return Math.abs(t.split("px")[0]);if("top"===t||"left"===t)return 0;if("bottom"===t)return Math.abs(s.height()-l.outerHeight(!1));if("right"===t)return Math.abs(s.width()-l.outerWidth(!1));if("first"===t||"last"===t){var m=l.find(":"+t);return"x"===o?te(m)[1]:te(m)[0]}return e(t).length?"x"===o?te(e(t))[1]:te(e(t))[0]:(l.css(h,t),void u.update.call(null,n[0]))}}},X=function(t){function o(){return clearTimeout(f[0].autoUpdate),0===l.parents("html").length?void(l=null):void(f[0].autoUpdate=setTimeout(function(){return c.advanced.updateOnSelectorChange&&(s.poll.change.n=i(),s.poll.change.n!==s.poll.change.o)?(s.poll.change.o=s.poll.change.n,void r(3)):c.advanced.updateOnContentResize&&(s.poll.size.n=l[0].scrollHeight+l[0].scrollWidth+f[0].offsetHeight+l[0].offsetHeight+l[0].offsetWidth,s.poll.size.n!==s.poll.size.o)?(s.poll.size.o=s.poll.size.n,void r(1)):!c.advanced.updateOnImageLoad||"auto"===c.advanced.updateOnImageLoad&&"y"===c.axis||(s.poll.img.n=f.find("img").length,s.poll.img.n===s.poll.img.o)?void((c.advanced.updateOnSelectorChange||c.advanced.updateOnContentResize||c.advanced.updateOnImageLoad)&&o()):(s.poll.img.o=s.poll.img.n,void f.find("img").each(function(){n(this)}))},c.advanced.autoUpdateTimeout))}function n(t){function o(e,t){return function(){return t.apply(e,arguments)}}function a(){this.onload=null,e(t).addClass(d[2]),r(2)}if(e(t).hasClass(d[2]))return void r();var n=new Image;n.onload=o(n,a),n.src=t.src}function i(){c.advanced.updateOnSelectorChange===!0&&(c.advanced.updateOnSelectorChange="*");var e=0,t=f.find(c.advanced.updateOnSelectorChange);

return c.advanced.updateOnSelectorChange&&t.length>0&&t.each(function(){e+=this.offsetHeight+this.offsetWidth}),e}function r(e){clearTimeout(f[0].autoUpdate),u.update.call(null,l[0],e)}var l=e(this),s=l.data(a),c=s.opt,f=e("#mCSB_"+s.idx+"_container");return t?(clearTimeout(f[0].autoUpdate),void K(f[0],"autoUpdate")):void o()},j=function(e,t,o){return Math.round(e/t)*t-o},N=function(t){var o=t.data(a),n=e("#mCSB_"+o.idx+"_container,#mCSB_"+o.idx+"_container_wrapper,#mCSB_"+o.idx+"_dragger_vertical,#mCSB_"+o.idx+"_dragger_horizontal");n.each(function(){J.call(this)})},V=function(t,o,n){function i(e){return s&&c.callbacks[e]&&"function"==typeof c.callbacks[e]}function r(){return[c.callbacks.alwaysTriggerOffsets||w>=S[0]+y,c.callbacks.alwaysTriggerOffsets||-B>=w]}function l(){var e=[h[0].offsetTop,h[0].offsetLeft],o=[x[0].offsetTop,x[0].offsetLeft],a=[h.outerHeight(!1),h.outerWidth(!1)],i=[f.height(),f.width()];t[0].mcs={content:h,top:e[0],left:e[1],draggerTop:o[0],draggerLeft:o[1],topPct:Math.round(100*Math.abs(e[0])/(Math.abs(a[0])-i[0])),leftPct:Math.round(100*Math.abs(e[1])/(Math.abs(a[1])-i[1])),direction:n.dir}}var s=t.data(a),c=s.opt,d={trigger:"internal",dir:"y",scrollEasing:"mcsEaseOut",drag:!1,dur:c.scrollInertia,overwrite:"all",callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},n=e.extend(d,n),u=[n.dur,n.drag?0:n.dur],f=e("#mCSB_"+s.idx),h=e("#mCSB_"+s.idx+"_container"),m=h.parent(),p=c.callbacks.onTotalScrollOffset?q.call(t,c.callbacks.onTotalScrollOffset):[0,0],g=c.callbacks.onTotalScrollBackOffset?q.call(t,c.callbacks.onTotalScrollBackOffset):[0,0];if(s.trigger=n.trigger,(0!==m.scrollTop()||0!==m.scrollLeft())&&(e(".mCSB_"+s.idx+"_scrollbar").css("visibility","visible"),m.scrollTop(0).scrollLeft(0)),"_resetY"!==o||s.contentReset.y||(i("onOverflowYNone")&&c.callbacks.onOverflowYNone.call(t[0]),s.contentReset.y=1),"_resetX"!==o||s.contentReset.x||(i("onOverflowXNone")&&c.callbacks.onOverflowXNone.call(t[0]),s.contentReset.x=1),"_resetY"!==o&&"_resetX"!==o){if(!s.contentReset.y&&t[0].mcs||!s.overflowed[0]||(i("onOverflowY")&&c.callbacks.onOverflowY.call(t[0]),s.contentReset.x=null),!s.contentReset.x&&t[0].mcs||!s.overflowed[1]||(i("onOverflowX")&&c.callbacks.onOverflowX.call(t[0]),s.contentReset.x=null),c.snapAmount){var v=c.snapAmount instanceof Array?"x"===n.dir?c.snapAmount[1]:c.snapAmount[0]:c.snapAmount;o=j(o,v,c.snapOffset)}switch(n.dir){case"x":var x=e("#mCSB_"+s.idx+"_dragger_horizontal"),_="left",w=h[0].offsetLeft,S=[f.width()-h.outerWidth(!1),x.parent().width()-x.width()],b=[o,0===o?0:o/s.scrollRatio.x],y=p[1],B=g[1],T=y>0?y/s.scrollRatio.x:0,k=B>0?B/s.scrollRatio.x:0;break;case"y":var x=e("#mCSB_"+s.idx+"_dragger_vertical"),_="top",w=h[0].offsetTop,S=[f.height()-h.outerHeight(!1),x.parent().height()-x.height()],b=[o,0===o?0:o/s.scrollRatio.y],y=p[0],B=g[0],T=y>0?y/s.scrollRatio.y:0,k=B>0?B/s.scrollRatio.y:0}b[1]<0||0===b[0]&&0===b[1]?b=[0,0]:b[1]>=S[1]?b=[S[0],S[1]]:b[0]=-b[0],t[0].mcs||(l(),i("onInit")&&c.callbacks.onInit.call(t[0])),clearTimeout(h[0].onCompleteTimeout),Q(x[0],_,Math.round(b[1]),u[1],n.scrollEasing),(s.tweenRunning||!(0===w&&b[0]>=0||w===S[0]&&b[0]<=S[0]))&&Q(h[0],_,Math.round(b[0]),u[0],n.scrollEasing,n.overwrite,{onStart:function(){n.callbacks&&n.onStart&&!s.tweenRunning&&(i("onScrollStart")&&(l(),c.callbacks.onScrollStart.call(t[0])),s.tweenRunning=!0,C(x),s.cbOffsets=r())},onUpdate:function(){n.callbacks&&n.onUpdate&&i("whileScrolling")&&(l(),c.callbacks.whileScrolling.call(t[0]))},onComplete:function(){if(n.callbacks&&n.onComplete){"yx"===c.axis&&clearTimeout(h[0].onCompleteTimeout);var e=h[0].idleTimer||0;h[0].onCompleteTimeout=setTimeout(function(){i("onScroll")&&(l(),c.callbacks.onScroll.call(t[0])),i("onTotalScroll")&&b[1]>=S[1]-T&&s.cbOffsets[0]&&(l(),c.callbacks.onTotalScroll.call(t[0])),i("onTotalScrollBack")&&b[1]<=k&&s.cbOffsets[1]&&(l(),c.callbacks.onTotalScrollBack.call(t[0])),s.tweenRunning=!1,h[0].idleTimer=0,C(x,"hide")},e)}}})}},Q=function(e,t,o,a,n,i,r){function l(){S.stop||(x||m.call(),x=G()-v,s(),x>=S.time&&(S.time=x>S.time?x+f-(x-S.time):x+f-1,S.time<x+1&&(S.time=x+1)),S.time<a?S.id=h(l):g.call())}function s(){a>0?(S.currVal=u(S.time,_,b,a,n),w[t]=Math.round(S.currVal)+"px"):w[t]=o+"px",p.call()}function c(){f=1e3/60,S.time=x+f,h=window.requestAnimationFrame?window.requestAnimationFrame:function(e){return s(),setTimeout(e,.01)},S.id=h(l)}function d(){null!=S.id&&(window.requestAnimationFrame?window.cancelAnimationFrame(S.id):clearTimeout(S.id),S.id=null)}function u(e,t,o,a,n){switch(n){case"linear":case"mcsLinear":return o*e/a+t;case"mcsLinearOut":return e/=a,e--,o*Math.sqrt(1-e*e)+t;case"easeInOutSmooth":return e/=a/2,1>e?o/2*e*e+t:(e--,-o/2*(e*(e-2)-1)+t);case"easeInOutStrong":return e/=a/2,1>e?o/2*Math.pow(2,10*(e-1))+t:(e--,o/2*(-Math.pow(2,-10*e)+2)+t);case"easeInOut":case"mcsEaseInOut":return e/=a/2,1>e?o/2*e*e*e+t:(e-=2,o/2*(e*e*e+2)+t);case"easeOutSmooth":return e/=a,e--,-o*(e*e*e*e-1)+t;case"easeOutStrong":return o*(-Math.pow(2,-10*e/a)+1)+t;case"easeOut":case"mcsEaseOut":default:var i=(e/=a)*e,r=i*e;return t+o*(.499999999999997*r*i+-2.5*i*i+5.5*r+-6.5*i+4*e)}}e._mTween||(e._mTween={top:{},left:{}});var f,h,r=r||{},m=r.onStart||function(){},p=r.onUpdate||function(){},g=r.onComplete||function(){},v=G(),x=0,_=e.offsetTop,w=e.style,S=e._mTween[t];"left"===t&&(_=e.offsetLeft);var b=o-_;S.stop=0,"none"!==i&&d(),c()},G=function(){return window.performance&&window.performance.now?window.performance.now():window.performance&&window.performance.webkitNow?window.performance.webkitNow():Date.now?Date.now():(new Date).getTime()},J=function(){var e=this;e._mTween||(e._mTween={top:{},left:{}});for(var t=["top","left"],o=0;o<t.length;o++){var a=t[o];e._mTween[a].id&&(window.requestAnimationFrame?window.cancelAnimationFrame(e._mTween[a].id):clearTimeout(e._mTween[a].id),e._mTween[a].id=null,e._mTween[a].stop=1)}},K=function(e,t){try{delete e[t]}catch(o){e[t]=null}},Z=function(e){return!(e.which&&1!==e.which)},$=function(e){var t=e.originalEvent.pointerType;return!(t&&"touch"!==t&&2!==t)},ee=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},te=function(e){var t=e.parents(".mCSB_container");return[e.offset().top-t.offset().top,e.offset().left-t.offset().left]},oe=function(){function e(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}var t=e();return t?document[t]:!1};e.fn[o]=function(t){return u[t]?u[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):u.init.apply(this,arguments)},e[o]=function(t){return u[t]?u[t].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof t&&t?void e.error("Method "+t+" does not exist"):u.init.apply(this,arguments)},e[o].defaults=i,window[o]=!0,e(window).load(function(){e(n)[o](),e.extend(e.expr[":"],{mcsInView:e.expr[":"].mcsInView||function(t){var o,a,n=e(t),i=n.parents(".mCSB_container");if(i.length)return o=i.parent(),a=[i[0].offsetTop,i[0].offsetLeft],a[0]+te(n)[0]>=0&&a[0]+te(n)[0]<o.height()-n.outerHeight(!1)&&a[1]+te(n)[1]>=0&&a[1]+te(n)[1]<o.width()-n.outerWidth(!1)},mcsOverflow:e.expr[":"].mcsOverflow||function(t){var o=e(t).data(a);if(o)return o.overflowed[0]||o.overflowed[1]}})})})});

// JavaScript Document

//全局js
$(function () {
    setTimeout(function(){
        if ($(window).width() < 750) {
            $(".me").click(function () {
                $("video").each(function () {
                    var v = $(this).get(0);
                    if (v.paused == false) {
                        $(this).addClass("hfl");
                    }
                });
            });
            $(".navbar .close").click(function () {
                $(".hfl").removeClass("hfl");
            });
        }
    })
    $(".navbar .item").bind("click",function(){
      $(this).toggleClass("cur").siblings().removeClass("cur")
    });
    $(".pb-checkbox1").bind("click",function(e){
        e.preventDefault();
        $(this).toggleClass('ckb');
    })
    //start
    $('.header .nav_child .child p:last-child').addClass('last');
    $('#header .nav_child .child p:last-child').addClass('last');

    function autoScreen () {
				if($(window).height() > $(".header").outerHeight() + $(".body").outerHeight() + $(".footer").outerHeight()){
					if($(".body").children().size()==1){
						$(".body").children().css("min-height",$(window).height() - $(".header").outerHeight() - $(".footer").outerHeight())
					}
					else{
						$('.body').css('min-height', $(window).height() - $(".header").outerHeight() - $(".footer").outerHeight());
					}
				}
    }
    autoScreen ();
    $(window).resize(autoScreen);


    $(".header .scbtn").bind('click',function(e) {
		e.stopPropagation();
        $(".scbtn .search").fadeToggle(200);
    });

    $(".header .lang").hover(function() {
        $('.header .language').fadeIn(200);
    });

    $(".header .login").hover(function() {
        $('.header .loginbox').fadeIn(200);
    });

  /*  $(".header .scbtn").mouseleave(function() {
        $(".scbtn .search").fadeOut(200);
    });*/
	$('.header .search').bind('click',function(e){
		e.stopPropagation();
	});
	$(window).bind('click',function(){
		$('.header .search').hide();
	});
    $(".header .lang").mouseleave(function() {
        $('.header .language').fadeOut(200);
    });

    $(".header .login").mouseleave(function() {
        $('.header .loginbox').fadeOut(200);
    });
	$('.close, .overlay').on('click',function(){
		$(this).parents('.popWindow').fadeOut(100);
        
	});
    //滚动条
    /*$("html").niceScroll({
    	cursorcolor:"#111",
    	cursorborder:"none",
    	cursorwidth:"8px",
    	scrollspeed:80,
    	background:"#aaa",
    	cursoropacitymin:0,
    	cursoropacitymax:0.7,
    	enablekeyboard:false,
    	zindex:2
    });*/


    var sto_nav;
    //导航
    $(".nav_main li").hover(
        function() {
            clearTimeout(sto_nav);
            $(".nav_main li").removeClass("cur");
            $(".nav_child .child").removeClass("now");
            var child = $(".nav_child .child").eq($(this).index());
            if (child.children().size() > 0) {
                $(this).addClass("cur");
                $(".nav_child .child").stop(true, true).eq($(this).index()).addClass("now");
								child.find('.p').css({marginLeft:$(this).offset().left-$("body").offset().left-child.find('.p').width()*0.5+$(this).width()*0.5});
            }
        },
        function() {
            // console.log(1);
            sto_nav = setTimeout(function() {
                $(".nav_main li").removeClass("cur");
                $(".nav_child .child").removeClass("now");
            }, 200);
        }
    );
    $(".nav_child .child").hover(
        function() {
            clearTimeout(sto_nav);
            $(this).addClass("now");
        },
        function() {
            $(this).removeClass("now");
            $(".nav_main li").removeClass("cur");
        }
    );


    $(".filter .select").hover(
        function() {
            $(this).find("ul").show();
        },
        function() {
            $(this).find("ul").hide();
        }
    );
    $(".filter .select li").click(function() {
        $(this).parents(".select").find("input").val($(this).text());
        $(this).parent().hide();
    });


    //placeholder
    if ('placeholder' in document.createElement('input') == false) {
        $("input,textarea").each(function(index, element) {
            if ($(this).attr("placeholder") != undefined) {
                if ($(this).attr("type") != "password") {
                    $(this).val($(this).attr("placeholder"));
                    $(this).attr("onFocus", "if(this.value=='" +
                        $(this).attr("placeholder") +
                        "')this.value=''");
                    $(this).attr("onBlur",
                        "if(this.value=='')this.value='" +
                        $(this).attr("placeholder") + "'");
                }
            }
        });
    }
    $(".passwd").each(function(index, element) {
        var t = $(this);
        if ('placeholder' in document.createElement('input') ==
            false) {
            $(this).find(".b").focus(function() {
                $(this).hide();
                t.find(".a").focus();
            });
            $(this).find(".a").focus(function() {
                t.find(".b").hide();
            });
            $(this).find(".a").blur(function() {
                if ($(this).val() == "") {
                    t.find(".b").show();
                }
            });
        } else {
            t.find(".a").attr("placeholder", t.find(".b").attr(
                "placeholder"));
            t.find(".b").remove();
        }
    });


    //底部
    /* function autoScreen(){
        if ($(".header").height() + $(".body").height() + $(".footer").height() <
            $("body").height()) {
            $(".footer").addClass("fb");
            console.log($(".header").height());
            
        } else {
            $(".footer").removeClass("fb");
        }
    }
    autoScreen()
    $(window).resize(autoScreen); */

    // $(".checkbox").click(function(){
    // 	$(this).toggleClass("ckd");
    // });

    $(document).on('click', '.checkbox', function() {
        $(this).toggleClass("ckd");
    });


    /*$(".gotop").click(function(){
    	$("html").animate({scrollTop:0},400+$(window).scrollTop()*0.3);
    	if(navigator.appVersion.match("WebKit")){
    		$("body").animate({scrollTop:0},400+$(window).scrollTop()*0.3);
    	}
    	else{
    		$("html").animate({scrollTop:0},400+$(window).scrollTop()*0.3);
    	}
    });
    $(window).scroll(function(){
    	if($(window).scrollTop()>100){$(".gotop").fadeIn();}
    	else{$(".gotop").fadeOut();}
    });*/

    //浏览建议 start
    $("#footer .jy").bind("click", function() {
        $("#footer .proposal").animate({
            bottom: 0,
        });
        return false;
    });

    $("#footer .proposal").bind("mouseout", function(e) {
        $(this).animate({
            bottom: '-100px',
        });
    });
    //浏览建议	end
    //end
});



//新tab切换
function tabdiv(tab, div, event, speed) {
    speed = isNaN(speed) ? 0 : speed;
    $(div).each(function(index, element) {
        $(this).attr("idx", index);
    });
    $(tab).each(function(index, element) {
        $(this).bind(event, function() {
            $(tab).removeClass("now");
            $(this).addClass("now");
            $(div + "[idx!='" + index + "']").hide();
            $(div + "[idx='" + index + "']").fadeIn(speed,
                function() {
                    //fn();
                });
        });
    });
}

//	打开弹窗
function openAlert(ele) {
    $(ele).fadeIn(300);
    if($(window).width()<750){
        $('body').addClass('ov')
    }
};
function hideAlert(ele) {
    $(ele).fadeOut(300);
};
//	关闭弹窗
function closeAlert() {
    $('.popWindow').fadeOut(300);
};
$(function(){
    $(document).on("click", ".select-box dt a", function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).parent().toggleClass("open");
        $(this).parents(".sc_com").toggleClass("ieopen");
        $(this).parent().parent(".select-box").find("dd").toggle();
    })
    $(document).on("click", ".select-box dd a", function (e) {
        $(this).addClass("on").siblings().removeClass("on");
        $(this).parents(".select-box").find("dt b").html($(this).html());
        $(".select-box dt").toggleClass("open");
        $(".select-box dd").hide();
        var _val = $(this).data("val")
        $(this).closest(".select-box").find("dt input").val(_val)
    })
    $(document).click(function () {
        $(".select-box dt").removeClass("open");
        $(".select-box dd").hide();
        $(".sc_com").removeClass("ieopen");
    })

})

function scorllAnimate(ele){
        var _offsetAnimate = $(ele).offset().top 
        var _scroll1Animate = $(window).scrollTop() + $(window).height()/1.5;
        if(_scroll1Animate >= _offsetAnimate){$(ele).addClass("animate")}else{$(ele).removeClass("animate")}
};
/*
基于scrollLeft和scrollTop
支持自适应
根据minsize计算child尺寸和滚动距离
支持总数,当前数,标题
支持jquery.easing,jquery.mousewheel
支持导航滚动及方向设定
*/
/*
======示例=====
<style>
body{margin:20px;}
#focus{height:200px;width:500px;position:relative;margin:auto;border:5px solid #ccc;}
.frame{width:100%;height:100%;overflow:hidden;}
.frame .child{height:100%;float:left;}
.nav{position:absolute;width:60px;height:20px;overflow:hidden;left:50%;bottom:5px;margin-left:-31px;border:1px solid #aaa;}
.nav a{float:left;width:20px;height:20px;line-height:20px;font-size:12px;color:#000;text-align:center;background:#f5f5f5;}
.nav a.now{background:#aaa;color:#fff;}
.prev{right:30px;bottom:5px;width:20px;height:20px;line-height:20px;text-align:center;background:#f5f5f5;position:absolute;color:#000;font-size:12px;font-family:Arial;}
.next{right:5px;bottom:5px;width:20px;height:20px;line-height:20px;text-align:center;background:#f5f5f5;position:absolute;color:#000;font-size:12px;font-family:Arial;}
.title{height:30px;line-height:30px;float:left;}
.count{height:30px;line-height:30px;float:right;}
.count b{font-weight:normal;}
.count em{font-style:normal;}
</style>
<div id="focus"><a href="javascript:;" class="prev">&lt;</a><a href="javascript:;" class="next">&gt;</a>
  <div class="frame">
	<div class="child" style="background:#faa;" title="c1"></div>
	<div class="child" style="background:#afa;" title="c2"></div>
	<div class="child" style="background:#aaf;" title="c3"></div>
	<div class="child" style="background:#ffa;" title="c4"></div>
	<div class="child" style="background:#aff;" title="c5"></div>
  </div>
  <div class="nav">
	<a href="javascript:;">1</a>
	<a href="javascript:;">2</a>
	<a href="javascript:;">3</a>
	<a href="javascript:;">4</a>
	<a href="javascript:;">5</a>
  </div>
  <div class="title"></div>
  <div class="count"><b></b>/<em></em></div>
</div>
<script>
$('#focus .frame').mScroll({
		     auto : 1,                   //自动开始
		direction : "h",                 //滚动方向,h横向,v纵向
		    dtype : "left",              //正反方向
		  isfocus : 0,                   //是否作为焦点图
		  minsize : 1,                   //最小数量
		    speed : 500,                 //滚动速度
		   easing : "",                  //缓冲类型
			delay : 5000,                //自动滚动间隔
			  nav : "#focus .nav a",                //导航按钮
        scrollnav : 0,                   //导航滚动
    nav_direction : "h",                 //导航方向,h横向,v纵向
			 prev : "#focus .prev",      //前一个
			 next : "#focus .next",      //后一个
		    index : "#focus .index",     //当前序号
			count : "#focus .count b",   //总数
			title : "#focus .count em",  //标题
			arrow : 1,                   //是否反转
			cycle : 1,                   //是否循环
		mousestop : 1,                   //鼠标划入停止
	   mousewheel : 0                    //开启滚轮事件
});
</script>
===============
*/

(function($) {
	$.fn.mScroll = function(options) {
		var opts = $.extend({},$.fn.mScroll.defaults,options); 
		this.each(function(){
			//初始化
			var f,s,c,n,npt,np,ns,w,ww,h,hh,w1,h1,size,iv,ti,sw=1,idx=0,cm=0;
			f = $(this);
			
			if(f.children().is("ul") && f.children().size()>1 && !f.children().hasClass("child")){
				f.children().addClass("scroll");
			}
			else{
				f.children().wrapAll("<div class='scroll' style='height:100%;'></div>");
			}
			s = f.find(".scroll");
			
			size=s.children().size();
			$(opts.count).text(size);
			
			if(opts.cycle==1 && size>opts.minsize){s.append(s.html());}
			c = s.children();
			
			//初始化导航
			n = $(opts.nav);
			npt = n.parent();
			if(opts.scrollnav){
				w1 = n.width()+parseInt(n.css("margin-left"))+parseInt(n.css("margin-right"));
				h1 = n.height();
				np= $(opts.nav).parent();
				n.wrapAll("<div class='scroll' style='height:100%;'></div>");
				ns=np.find(".scroll");
				if(opts.nav_direction=="h"){
					ns.width(n.size()*w1);
					np.stop().animate({scrollLeft:0},100);
				}
				if(opts.nav_direction=="v"){
					ns.height(n.size()*h1);
					np.stop().animate({scrollTop:0},100);
				}
			}
			npt.each(function(){
				$(this).children().eq(0).addClass("now");
			})
			
			
			
			//初始化尺寸
			if(opts.direction=="h"){
				cm=parseInt(c.css("margin-left"))+parseInt(c.css("margin-right"));				
				if(cm==0){
					w = Math.ceil(f.width()/opts.minsize);
					c.css({width:w});					
				}
				else{
					w=c.width()+cm;
				}
				s.css({width:100000});
				ww=c.size()*w;
				f.stop().animate({scrollLeft:0},100);
			}
			if(opts.direction=="v"){
				cm=parseInt(c.css("margin-top"))+parseInt(c.css("margin-bottom"));
				if(cm==0){
					h = Math.ceil(f.height()/opts.minsize);
					c.css({height:h});					
				}
				else{
					h=c.height()+cm;
				}
				s.height(100000);
				hh=c.size()*h;
				f.stop().animate({scrollTop:0},100);
			}
			
			//设置title
			if(opts.cycle==0){opts.auto=0;}
			$(opts.title).text(c.eq(0).attr("title"));
			$(opts.index).text(1);
			
			//焦点图自适应
			$(window).resize(function(){rs();});
			rs();
			setTimeout(function(){rs();},300);
			
			//自适应
			function rs(){
				sw==0;
				clearTimeout(ti);
				if(opts.direction=="h"){
					if(cm==0){
						w = Math.ceil(f.width()/opts.minsize);
						c.css({width:w});							
					}
					else{
						w=c.width()+cm;
					}
				}
				if(opts.direction=="v"){
					if(cm==0){
						h = Math.ceil(f.height()/opts.minsize);
						c.css({height:h});					
					}
					else{
						h=c.height()+cm;
					}
				}
				ww=c.size()*w;
				hh=c.size()*h;
				if(opts.direction=="h"){f.stop().scrollLeft(idx*w);}
				if(opts.direction=="v"){f.stop().scrollTop(idx*h);}
				ti=setTimeout(function(){
					sw==1;
				},500);
			}
			//imgauto(f.children().find("img").attr("src"));
			function imgauto(src){
				var img = new Image(),
					width = 0,
					height = 0;
				
				img.src = src;
				
				
				img.onload = function(){
					width = img.width;
					height = img.height;
					width = width > 1000 ? 1000 : width;
					f.parent().animate({width:width},function(){
						rs();
					});
					
				}
			}
			
			if(size>opts.minsize){//判断是否满足数量
			
			//自动开始
			if(opts.auto==1){
				iv = window.setInterval(function(){move(opts.dtype);},opts.delay);
			}
			
			//-------------start-------------//
			//滚动函数
			function move(act){
				if(sw==1){
					sw=0;
					if(opts.direction=="h"){
						if(act=="left"){
							if(opts.cycle!=1){
								if(idx+opts.minsize<size){
									idx++;
									f.animate({scrollLeft:f.scrollLeft()+w},opts.speed,opts.easing,function(){sw=1;});
								}
								else{sw=1;}
								
							}
							if(opts.cycle==1){	
								if(idx==size-1){idx=0;}
								else{idx++;}
								if(f.scrollLeft()+1>=ww*0.5){f.scrollLeft(0);}								
								f.animate({scrollLeft:f.scrollLeft()+w},opts.speed,opts.easing,function(){sw=1;});
							}
						}
						if(act=="right"){
							if(opts.cycle!=1){
								if(idx>0){
									idx--;
									f.animate({scrollLeft:f.scrollLeft()-w},opts.speed,opts.easing,function(){sw=1;});
								}
								else{sw=1;}
							}
							if(opts.cycle==1){
								if(idx==0){idx=size-1;}
								else{idx--;}
								if(opts.cycle==1 && f.scrollLeft()<=0){f.scrollLeft(ww*0.5);}								
								f.animate({scrollLeft:f.scrollLeft()-w},opts.speed,opts.easing,function(){sw=1;});
							}
						}						
					}
					if(opts.direction=="v"){
						
						if(act=="left"){
							if(opts.cycle!=1){
								if(idx+opts.minsize<size){
									if(opts)idx++;
									f.animate({scrollTop:f.scrollTop()+h},opts.speed,opts.easing,function(){sw=1;});
								}
								else{sw=1;}
							}
							if(opts.cycle==1){
								if(idx==size-1){idx=0;}
								else{idx++;}
								if(f.scrollTop()+1>=hh*0.5){f.scrollTop(0);}								
								f.animate({scrollTop:f.scrollTop()+h},opts.speed,opts.easing,function(){sw=1;});
							}	
						}
						if(act=="right"){
							if(opts.cycle!=1){
								if(idx>0){
									idx--;
									f.animate({scrollTop:f.scrollTop()-h},opts.speed,opts.easing,function(){sw=1;});
								}
								else{sw=1;}
								
								
							}
							if(opts.cycle==1){
								if(idx==0){idx=size-1;}
								else{idx--;}
								if(opts.cycle==1 && f.scrollTop()<=0){f.scrollTop(hh*0.5);}								
								f.animate({scrollTop:f.scrollTop()-h},opts.speed,opts.easing,function(){sw=1;});
							}
						}
						if(idx>=size-1){
							$(opts.next).addClass("xx").siblings(".a").removeClass("xx");
						}else if(idx>0){
							$(opts.prev).removeClass('xx');
							$(opts.next).removeClass('xx');
						}else if(idx >= 0){
							$(opts.prev).addClass("xx").siblings(".a").removeClass("xx");
						}
					}
					n.removeClass("now");
					npt.each(function(){
						$(this).children().eq(idx).addClass("now");
					});
					$(opts.title).text(c.eq(idx).attr("title"));
					$(opts.index).text(idx+1);					
					if(opts.scrollnav){autonav();}
					//imgauto(f.children().children().eq(idx).find('img').attr("src"));
					//console.log(f.children().children().eq(idx).find('img').attr("src"));
					//console.log(idx);
				}
			}
			//左右按钮
			$(opts.prev).addClass("xx");
			if(opts.prev){
				$(opts.prev).hover(function(){sw=1;});
				$(opts.prev).click(function(){
					if(opts.arrow==1){
						move("right");
					}else{
						move("left");
					}
					if(opts.auto){
						clearInterval(iv);
						iv = window.setInterval(function(){move(opts.dtype);},opts.delay);
					}
				});
				
			}
			if(opts.next){
				$(opts.next).hover(function(){sw=1;});
				$(opts.next).click(function(){
					if(opts.arrow==1){move("left");}
					else{move("right");}
					if(opts.auto){
						clearInterval(iv);
						iv = window.setInterval(function(){move(opts.dtype);},opts.delay);
					}
				});
			}
			
			//导航溢出部分滑动显示
			function autonav(){
				if(opts.nav_direction=="h"){					
					if(idx*w1==np.scrollLeft()){
						np.stop().animate({scrollLeft:np.scrollLeft()-w1},opts.speed);
					}
					if((idx+1)*w1==np.scrollLeft()+np.width()){
						np.stop().animate({scrollLeft:np.scrollLeft()+w1},opts.speed);
					}
					if(idx==0){np.stop().animate({scrollLeft:0},opts.speed);}
					if(idx==size-1){np.stop().animate({scrollLeft:size*w1},opts.speed);}
				}
				if(opts.nav_direction=="v"){
					if(idx*h1==np.scrollTop()){
						np.stop().animate({scrollTop:np.scrollTop()-h1},opts.speed);
					}
					if((idx+1)*h1==np.scrollTop()+np.height()){
						np.stop().animate({scrollTop:np.scrollTop()+h1},opts.speed);
					}
					if(idx==0){np.stop().animate({scrollTop:0},opts.speed);}
					if(idx==size-1){np.stop().animate({scrollTop:size*h1},opts.speed);}
				}
			}
			//导航点击
			npt.each(function(index, element) {
				$(this).children().click(function(){
          var index = $(this).index();
					if(opts.direction=="h"){f.stop().animate({scrollLeft:index*w},opts.speed,opts.easing,function(){sw=1;});}
					if(opts.direction=="v"){f.stop().animate({scrollTop:index*h},opts.speed,opts.easing,function(){sw=1;});}
          idx=index;
					/* n.removeClass("now");
          n.eq(idx).addClass("now"); */
          npt.each(function(){
            $(this).children().removeClass("now");
            $(this).children().eq(idx).addClass("now");
          })
          console.log(idx)
					if(opts.scrollnav){autonav();}
					$(opts.title).text(c.eq(idx).attr("alt"));
					if(opts.auto){
						clearInterval(iv);
						iv = window.setInterval(function(){move(opts.dtype);},opts.delay);
					}						
				});
			});
			//鼠标滚轮
			if(opts.mousewheel){
				f.mousewheel(function(event,delta,deltaX,deltaY){
					if(delta<0){
						if(opts.arrow==1){move("left");}
						else{move("right");}
					}
					else{
						if(opts.arrow==1){move("right");}
						else{move("left");}
					}
					event.stopPropagation();
					event.preventDefault();
				});
			}
			//鼠标划入停止
			if(opts.mousestop && !opts.mousewheel){
				f.hover(function(){sw=0},function(){sw=1});
			}
			//-------------end-------------//
			}
		})
	};
	$.fn.mScroll.defaults = {
		     auto : 1,                    //自动开始
		direction : "h",                  //滚动方向,h横向,v纵向
		    dtype : "left",               //正反方向
		  isfocus : 0,                    //是否作为焦点图
		  minsize : 1,                    //最小数量
		    speed : 500,                  //滚动速度
		   easing : "",                   //缓冲类型
			delay : 5000,                 //自动滚动间隔
			  nav : null,                 //导航按钮
        scrollnav : 0,                    //导航滚动
    nav_direction : "h",                  //导航方向,h横向,v纵向
			 prev : null,                 //前一个
			 next : null,                 //后一个
		    index : null,                 //当前序号
			count : null,                 //总数
			title : null,                 //标题
			arrow : 1,                    //是否反转
			cycle : 1,                    //是否循环
		mousestop : 1,                    //鼠标划入停止
	   mousewheel : 0                     //开启滚轮事件
	}
})(jQuery);
/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.12
 *
 * Requires: jQuery 1.2.2+
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});

/*!
 * jQuery Transit - CSS3 transitions and transformations
 * (c) 2011-2012 Rico Sta. Cruz <rico@ricostacruz.com>
 * MIT Licensed.
 *
 * http://ricostacruz.com/jquery.transit
 * http://github.com/rstacruz/jquery.transit
 */
(function(d){function m(a){if(a in j.style)return a;var b=["Moz","Webkit","O","ms"],c=a.charAt(0).toUpperCase()+a.substr(1);if(a in j.style)return a;for(a=0;a<b.length;++a){var d=b[a]+c;if(d in j.style)return d}}function l(a){"string"===typeof a&&this.parse(a);return this}function q(a,b,c,e){var h=[];d.each(a,function(a){a=d.camelCase(a);a=d.transit.propertyMap[a]||d.cssProps[a]||a;a=a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()});-1===d.inArray(a,h)&&h.push(a)});d.cssEase[c]&&(c=d.cssEase[c]);
var f=""+n(b)+" "+c;0<parseInt(e,10)&&(f+=" "+n(e));var g=[];d.each(h,function(a,b){g.push(b+" "+f)});return g.join(", ")}function f(a,b){b||(d.cssNumber[a]=!0);d.transit.propertyMap[a]=e.transform;d.cssHooks[a]={get:function(b){return d(b).css("transit:transform").get(a)},set:function(b,e){var h=d(b).css("transit:transform");h.setFromString(a,e);d(b).css({"transit:transform":h})}}}function g(a,b){return"string"===typeof a&&!a.match(/^[\-0-9\.]+$/)?a:""+a+b}function n(a){d.fx.speeds[a]&&(a=d.fx.speeds[a]);
return g(a,"ms")}d.transit={version:"0.9.9",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:!0,useTransitionEnd:!1};var j=document.createElement("div"),e={},r=-1<navigator.userAgent.toLowerCase().indexOf("chrome");e.transition=m("transition");e.transitionDelay=m("transitionDelay");e.transform=m("transform");e.transformOrigin=m("transformOrigin");j.style[e.transform]=
"";j.style[e.transform]="rotateY(90deg)";e.transform3d=""!==j.style[e.transform];var p=e.transitionEnd={transition:"transitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"}[e.transition]||null,k;for(k in e)e.hasOwnProperty(k)&&"undefined"===typeof d.support[k]&&(d.support[k]=e[k]);j=null;d.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",
easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",
easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};d.cssHooks["transit:transform"]={get:function(a){return d(a).data("transform")||
new l},set:function(a,b){var c=b;c instanceof l||(c=new l(c));a.style[e.transform]="WebkitTransform"===e.transform&&!r?c.toString(!0):c.toString();d(a).data("transform",c)}};d.cssHooks.transform={set:d.cssHooks["transit:transform"].set};"1.8">d.fn.jquery&&(d.cssHooks.transformOrigin={get:function(a){return a.style[e.transformOrigin]},set:function(a,b){a.style[e.transformOrigin]=b}},d.cssHooks.transition={get:function(a){return a.style[e.transition]},set:function(a,b){a.style[e.transition]=b}});f("scale");
f("translate");f("rotate");f("rotateX");f("rotateY");f("rotate3d");f("perspective");f("skewX");f("skewY");f("x",!0);f("y",!0);l.prototype={setFromString:function(a,b){var c="string"===typeof b?b.split(","):b.constructor===Array?b:[b];c.unshift(a);l.prototype.set.apply(this,c)},set:function(a){var b=Array.prototype.slice.apply(arguments,[1]);this.setter[a]?this.setter[a].apply(this,b):this[a]=b.join(",")},get:function(a){return this.getter[a]?this.getter[a].apply(this):this[a]||0},setter:{rotate:function(a){this.rotate=
g(a,"deg")},rotateX:function(a){this.rotateX=g(a,"deg")},rotateY:function(a){this.rotateY=g(a,"deg")},scale:function(a,b){void 0===b&&(b=a);this.scale=a+","+b},skewX:function(a){this.skewX=g(a,"deg")},skewY:function(a){this.skewY=g(a,"deg")},perspective:function(a){this.perspective=g(a,"px")},x:function(a){this.set("translate",a,null)},y:function(a){this.set("translate",null,a)},translate:function(a,b){void 0===this._translateX&&(this._translateX=0);void 0===this._translateY&&(this._translateY=0);
null!==a&&void 0!==a&&(this._translateX=g(a,"px"));null!==b&&void 0!==b&&(this._translateY=g(b,"px"));this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var a=(this.scale||"1,1").split(",");a[0]&&(a[0]=parseFloat(a[0]));a[1]&&(a[1]=parseFloat(a[1]));return a[0]===a[1]?a[0]:a},rotate3d:function(){for(var a=(this.rotate3d||"0,0,0,0deg").split(","),b=0;3>=b;++b)a[b]&&(a[b]=parseFloat(a[b]));
a[3]&&(a[3]=g(a[3],"deg"));return a}},parse:function(a){var b=this;a.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(a,d,e){b.setFromString(d,e)})},toString:function(a){var b=[],c;for(c in this)if(this.hasOwnProperty(c)&&(e.transform3d||!("rotateX"===c||"rotateY"===c||"perspective"===c||"transformOrigin"===c)))"_"!==c[0]&&(a&&"scale"===c?b.push(c+"3d("+this[c]+",1)"):a&&"translate"===c?b.push(c+"3d("+this[c]+",0)"):b.push(c+"("+this[c]+")"));return b.join(" ")}};d.fn.transition=d.fn.transit=function(a,
b,c,f){var h=this,g=0,j=!0;"function"===typeof b&&(f=b,b=void 0);"function"===typeof c&&(f=c,c=void 0);"undefined"!==typeof a.easing&&(c=a.easing,delete a.easing);"undefined"!==typeof a.duration&&(b=a.duration,delete a.duration);"undefined"!==typeof a.complete&&(f=a.complete,delete a.complete);"undefined"!==typeof a.queue&&(j=a.queue,delete a.queue);"undefined"!==typeof a.delay&&(g=a.delay,delete a.delay);"undefined"===typeof b&&(b=d.fx.speeds._default);"undefined"===typeof c&&(c=d.cssEase._default);
b=n(b);var l=q(a,b,c,g),k=d.transit.enabled&&e.transition?parseInt(b,10)+parseInt(g,10):0;if(0===k)return b=j,c=function(b){h.css(a);f&&f.apply(h);b&&b()},!0===b?h.queue(c):b?h.queue(b,c):c(),h;var m={};b=j;c=function(b){this.offsetWidth;var c=!1,g=function(){c&&h.unbind(p,g);0<k&&h.each(function(){this.style[e.transition]=m[this]||null});"function"===typeof f&&f.apply(h);"function"===typeof b&&b()};0<k&&p&&d.transit.useTransitionEnd?(c=!0,h.bind(p,g)):window.setTimeout(g,k);h.each(function(){0<k&&
(this.style[e.transition]=l);d(this).css(a)})};!0===b?h.queue(c):b?h.queue(b,c):c();return this};d.transit.getTransitionValue=q})(jQuery);
function sHover(f,e){var h=this;var d=h.getByClass(document,f);for(var c=0;c<d.length;c++){var b=d[c];var g=h.getByClass(b,e)[0];b.size={width:h.getStyle(b,"width"),height:h.getStyle(b,"height")};b.style.position="relative";b.style.overflow="hidden";g.style.position="absolute";g.style.width=b.size.width+"px";g.style.height=b.size.height+"px";g.style.top=b.size.height+"px";g.style.left="0px";g.style.zIndex="0";g.style.opacity="1";this.slideSpeed=5;this.opacityChange=false;this.opacity=100;function a(j,k){h.myAddEvent(j,"mouseover",function(l){h.hoverIn(l,j,k)});h.myAddEvent(d[c],"mouseout",function(l){h.hoverOut(l,j,k)})}a(b,g)}}sHover.prototype.set=function(a){for(i in a){this[i]=a[i]}};sHover.prototype.trigger=function(d,a,c){try{if(d.contains(c.relatedTarget)){return false}else{if(!c.relatedTarget){throw new error()}}}catch(b){if(a=="in"){if(d.contains(c.fromElement)){return false}}else{if(a=="out"){if(d.contains(c.toElement)){return false}}}}return true};sHover.prototype.hoverIn=function(c,b,d){var f=c||event;if(this.trigger(b,"in",f)){var a=this.getDir(f,b);if(a==0||a==2){if(a==0){d.style.top=-b.size.height+"px"}else{d.style.top=b.size.height+"px"}d.style.left="0px";this.startMove(d,{"top":0,"left":0,"opacity":this.opacity})}else{if(a==1){d.style.left=b.size.width+"px"}else{d.style.left=-b.size.width+"px"}d.style.top="0px";this.startMove(d,{"left":0,"opacity":this.opacity})}}};sHover.prototype.hoverOut=function(d,c,f){var g=d||event;var b=100;if(this.trigger(c,"out",g)){var a=this.getDir(g,c);if(this.opacityChange){b=0}switch(a){case 0:this.startMove(f,{"top":-c.size.height,"left":0,"opacity":b});break;case 2:this.startMove(f,{"top":c.size.height,"left":0,"opacity":b});break;case 1:this.startMove(f,{"left":c.size.width,"top":0,"opacity":b});break;case 3:this.startMove(f,{"left":-c.size.width,"top":0,"opacity":b});break}}};sHover.prototype.startMove=function(f,c,d){var h;var e;var a=(11-this.slideSpeed)>0?(11-this.slideSpeed):1;var b=30;var g=this;clearInterval(f.moveTimer);f.moveTimer=setInterval(function(){var k=true;for(var j in c){var m=g.getStyle(f,j);var l=c[j];if(j=="opacity"){h=parseInt(parseFloat(m)*100,10)}else{h=parseInt(m,10)}if(h!=l){k=false}if(k){clearInterval(f.moveTimer);d&&d()}else{e=(l-h)/a;e=l>h?Math.ceil(e):Math.floor(e);if(j=="opacity"){f.style[j]=(h+e)/100;f.style.filter="alpha(opacity="+(h+e)+")"}else{f.style[j]=(h+e)+"px"}}}},b)};sHover.prototype.myAddEvent=function(c,a,b){if(c.attachEvent){c.attachEvent("on"+a,function(){b.call(this)})}else{c.addEventListener(a,b,false)}};sHover.prototype.getByClass=function(e,d){var f=[];var a=e.getElementsByTagName("*");var c=new RegExp("\\b"+d+"\\b",b);for(var b=0;b<a.length;b++){if(c.test(a[b].className)){f.push(a[b])}}return f};sHover.prototype.getStyle=function(c,a){var b;if(c.currentStyle){b=c.currentStyle[a]}else{b=getComputedStyle(c,false)[a]}if(a!="opacity"){b=parseInt(b,10)}if(isNaN(b)){b=c["offset"+a.charAt(0).toUpperCase()+a.substring(1)]}return b};sHover.prototype.getScroll=function(){var a={top:document.body.scrollTop||document.documentElement.scrollTop,left:document.body.scrollLeft||document.documentElement.scrollLeft};return a};sHover.prototype.getPos=function(a){var b={left:0,top:0};while(a){b.left+=a.offsetLeft;b.top+=a.offsetTop;a=a.offsetParent}return b};sHover.prototype.getDir=function(j,f){var j=j||event;var b=this.getStyle(f,"width"),d=this.getStyle(f,"height"),a=(j.clientX-this.getPos(f).left+this.getScroll().left-(b/2))*(b>d?(d/b):1),k=(j.clientY-this.getPos(f).top+this.getScroll().top-(d/2))*(d>b?(b/d):1),g=Math.round((((Math.atan2(k,a)*(180/Math.PI))+180)/90)+3)%4,c=j.type;return g};
/*
 * Raphael 1.5.2 - JavaScript Vector Library
 *
 * Copyright (c) 2010 Dmitry Baranovskiy (http://raphaeljs.com)
 * Licensed under the MIT (http://raphaeljs.com/license.html) license.
 */
(function(){function a(){if(a.is(arguments[0],G)){var b=arguments[0],d=bV[m](a,b.splice(0,3+a.is(b[0],E))),e=d.set();for(var g=0,h=b[w];g<h;g++){var i=b[g]||{};c[f](i.type)&&e[L](d[i.type]().attr(i))}return e}return bV[m](a,arguments)}a.version="1.5.2";var b=/[, ]+/,c={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},d=/\{(\d+)\}/g,e="prototype",f="hasOwnProperty",g=document,h=window,i={was:Object[e][f].call(h,"Raphael"),is:h.Raphael},j=function(){this.customAttributes={}},k,l="appendChild",m="apply",n="concat",o="createTouch"in g,p="",q=" ",r=String,s="split",t="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend orientationchange touchcancel gesturestart gesturechange gestureend"[s](q),u={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},v="join",w="length",x=r[e].toLowerCase,y=Math,z=y.max,A=y.min,B=y.abs,C=y.pow,D=y.PI,E="number",F="string",G="array",H="toString",I="fill",J=Object[e][H],K={},L="push",M=/^url\(['"]?([^\)]+?)['"]?\)$/i,N=/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,O={"NaN":1,Infinity:1,"-Infinity":1},P=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,Q=y.round,R="setAttribute",S=parseFloat,T=parseInt,U=" progid:DXImageTransform.Microsoft",V=r[e].toUpperCase,W={blur:0,"clip-rect":"0 0 1e9 1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:"10px \"Arial\"","font-family":"\"Arial\"","font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/",opacity:1,path:"M0,0",r:0,rotation:0,rx:0,ry:0,scale:"1 1",src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",translation:"0 0",width:0,x:0,y:0},X={along:"along",blur:E,"clip-rect":"csv",cx:E,cy:E,fill:"colour","fill-opacity":E,"font-size":E,height:E,opacity:E,path:"path",r:E,rotation:"csv",rx:E,ry:E,scale:"csv",stroke:"colour","stroke-opacity":E,"stroke-width":E,translation:"csv",width:E,x:E,y:E},Y="replace",Z=/^(from|to|\d+%?)$/,$=/\s*,\s*/,_={hs:1,rg:1},ba=/,?([achlmqrstvxz]),?/gi,bb=/([achlmqstvz])[\s,]*((-?\d*\.?\d*(?:e[-+]?\d+)?\s*,?\s*)+)/ig,bc=/(-?\d*\.?\d*(?:e[-+]?\d+)?)\s*,?\s*/ig,bd=/^r(?:\(([^,]+?)\s*,\s*([^\)]+?)\))?/,be=function(a,b){return a.key-b.key};a.type=h.SVGAngle||g.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML";if(a.type=="VML"){var bf=g.createElement("div"),bg;bf.innerHTML="<v:shape adj=\"1\"/>";bg=bf.firstChild;bg.style.behavior="url(#default#VML)";if(!(bg&&typeof bg.adj=="object"))return a.type=null;bf=null}a.svg=!(a.vml=a.type=="VML");j[e]=a[e];k=j[e];a._id=0;a._oid=0;a.fn={};a.is=function(a,b){b=x.call(b);if(b=="finite")return!O[f](+a);return b=="null"&&a===null||b==typeof a||b=="object"&&a===Object(a)||b=="array"&&Array.isArray&&Array.isArray(a)||J.call(a).slice(8,-1).toLowerCase()==b};a.angle=function(b,c,d,e,f,g){{if(f==null){var h=b-d,i=c-e;if(!h&&!i)return 0;return((h<0)*180+y.atan(-i/-h)*180/D+360)%360}return a.angle(b,c,f,g)-a.angle(d,e,f,g)}};a.rad=function(a){return a%360*D/180};a.deg=function(a){return a*180/D%360};a.snapTo=function(b,c,d){d=a.is(d,"finite")?d:10;if(a.is(b,G)){var e=b.length;while(e--)if(B(b[e]-c)<=d)return b[e]}else{b=+b;var f=c%b;if(f<d)return c-f;if(f>b-d)return c-f+b}return c};function bh(){var a=[],b=0;for(;b<32;b++)a[b]=(~(~(y.random()*16)))[H](16);a[12]=4;a[16]=(a[16]&3|8)[H](16);return"r-"+a[v]("")}a.setWindow=function(a){h=a;g=h.document};var bi=function(b){if(a.vml){var c=/^\s+|\s+$/g,d;try{var e=new ActiveXObject("htmlfile");e.write("<body>");e.close();d=e.body}catch(a){d=createPopup().document.body}var f=d.createTextRange();bi=bm(function(a){try{d.style.color=r(a)[Y](c,p);var b=f.queryCommandValue("ForeColor");b=(b&255)<<16|b&65280|(b&16711680)>>>16;return"#"+("000000"+b[H](16)).slice(-6)}catch(a){return"none"}})}else{var h=g.createElement("i");h.title="Raphaël Colour Picker";h.style.display="none";g.body[l](h);bi=bm(function(a){h.style.color=a;return g.defaultView.getComputedStyle(h,p).getPropertyValue("color")})}return bi(b)},bj=function(){return"hsb("+[this.h,this.s,this.b]+")"},bk=function(){return"hsl("+[this.h,this.s,this.l]+")"},bl=function(){return this.hex};a.hsb2rgb=function(b,c,d,e){if(a.is(b,"object")&&"h"in b&&"s"in b&&"b"in b){d=b.b;c=b.s;b=b.h;e=b.o}return a.hsl2rgb(b,c,d/2,e)};a.hsl2rgb=function(b,c,d,e){if(a.is(b,"object")&&"h"in b&&"s"in b&&"l"in b){d=b.l;c=b.s;b=b.h}if(b>1||c>1||d>1){b/=360;c/=100;d/=100}var f={},g=["r","g","b"],h,i,j,k,l,m;if(c){d<0.5?h=d*(1+c):h=d+c-d*c;i=2*d-h;for(var n=0;n<3;n++){j=b+1/3*-(n-1);j<0&&j++;j>1&&j--;j*6<1?f[g[n]]=i+(h-i)*6*j:j*2<1?f[g[n]]=h:j*3<2?f[g[n]]=i+(h-i)*(2/3-j)*6:f[g[n]]=i}}else f={r:d,g:d,b:d};f.r*=255;f.g*=255;f.b*=255;f.hex="#"+(16777216|f.b|f.g<<8|f.r<<16).toString(16).slice(1);a.is(e,"finite")&&(f.opacity=e);f.toString=bl;return f};a.rgb2hsb=function(b,c,d){if(c==null&&a.is(b,"object")&&"r"in b&&"g"in b&&"b"in b){d=b.b;c=b.g;b=b.r}if(c==null&&a.is(b,F)){var e=a.getRGB(b);b=e.r;c=e.g;d=e.b}if(b>1||c>1||d>1){b/=255;c/=255;d/=255}var f=z(b,c,d),g=A(b,c,d),h,i,j=f;{if(g==f)return{h:0,s:0,b:f,toString:bj};var k=f-g;i=k/f;b==f?h=(c-d)/k:c==f?h=2+(d-b)/k:h=4+(b-c)/k;h/=6;h<0&&h++;h>1&&h--}return{h:h,s:i,b:j,toString:bj}};a.rgb2hsl=function(b,c,d){if(c==null&&a.is(b,"object")&&"r"in b&&"g"in b&&"b"in b){d=b.b;c=b.g;b=b.r}if(c==null&&a.is(b,F)){var e=a.getRGB(b);b=e.r;c=e.g;d=e.b}if(b>1||c>1||d>1){b/=255;c/=255;d/=255}var f=z(b,c,d),g=A(b,c,d),h,i,j=(f+g)/2,k;if(g==f)k={h:0,s:0,l:j};else{var l=f-g;i=j<0.5?l/(f+g):l/(2-f-g);b==f?h=(c-d)/l:c==f?h=2+(d-b)/l:h=4+(b-c)/l;h/=6;h<0&&h++;h>1&&h--;k={h:h,s:i,l:j}}k.toString=bk;return k};a._path2string=function(){return this.join(",")[Y](ba,"$1")};function bm(a,b,c){function d(){var g=Array[e].slice.call(arguments,0),h=g[v]("►"),i=d.cache=d.cache||{},j=d.count=d.count||[];if(i[f](h))return c?c(i[h]):i[h];j[w]>=1000&&delete i[j.shift()];j[L](h);i[h]=a[m](b,g);return c?c(i[h]):i[h]}return d}a.getRGB=bm(function(b){if(!b||!(!((b=r(b)).indexOf("-")+1)))return{r:-1,g:-1,b:-1,hex:"none",error:1};if(b=="none")return{r:-1,g:-1,b:-1,hex:"none"};!(_[f](b.toLowerCase().substring(0,2))||b.charAt()=="#")&&(b=bi(b));var c,d,e,g,h,i,j,k=b.match(N);if(k){if(k[2]){g=T(k[2].substring(5),16);e=T(k[2].substring(3,5),16);d=T(k[2].substring(1,3),16)}if(k[3]){g=T((i=k[3].charAt(3))+i,16);e=T((i=k[3].charAt(2))+i,16);d=T((i=k[3].charAt(1))+i,16)}if(k[4]){j=k[4][s]($);d=S(j[0]);j[0].slice(-1)=="%"&&(d*=2.55);e=S(j[1]);j[1].slice(-1)=="%"&&(e*=2.55);g=S(j[2]);j[2].slice(-1)=="%"&&(g*=2.55);k[1].toLowerCase().slice(0,4)=="rgba"&&(h=S(j[3]));j[3]&&j[3].slice(-1)=="%"&&(h/=100)}if(k[5]){j=k[5][s]($);d=S(j[0]);j[0].slice(-1)=="%"&&(d*=2.55);e=S(j[1]);j[1].slice(-1)=="%"&&(e*=2.55);g=S(j[2]);j[2].slice(-1)=="%"&&(g*=2.55);(j[0].slice(-3)=="deg"||j[0].slice(-1)=="°")&&(d/=360);k[1].toLowerCase().slice(0,4)=="hsba"&&(h=S(j[3]));j[3]&&j[3].slice(-1)=="%"&&(h/=100);return a.hsb2rgb(d,e,g,h)}if(k[6]){j=k[6][s]($);d=S(j[0]);j[0].slice(-1)=="%"&&(d*=2.55);e=S(j[1]);j[1].slice(-1)=="%"&&(e*=2.55);g=S(j[2]);j[2].slice(-1)=="%"&&(g*=2.55);(j[0].slice(-3)=="deg"||j[0].slice(-1)=="°")&&(d/=360);k[1].toLowerCase().slice(0,4)=="hsla"&&(h=S(j[3]));j[3]&&j[3].slice(-1)=="%"&&(h/=100);return a.hsl2rgb(d,e,g,h)}k={r:d,g:e,b:g};k.hex="#"+(16777216|g|e<<8|d<<16).toString(16).slice(1);a.is(h,"finite")&&(k.opacity=h);return k}return{r:-1,g:-1,b:-1,hex:"none",error:1}},a);a.getColor=function(a){var b=this.getColor.start=this.getColor.start||{h:0,s:1,b:a||0.75},c=this.hsb2rgb(b.h,b.s,b.b);b.h+=0.075;if(b.h>1){b.h=0;b.s-=0.2;b.s<=0&&(this.getColor.start={h:0,s:1,b:b.b})}return c.hex};a.getColor.reset=function(){delete this.start};a.parsePathString=bm(function(b){if(!b)return null;var c={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},d=[];a.is(b,G)&&a.is(b[0],G)&&(d=bo(b));d[w]||r(b)[Y](bb,function(a,b,e){var f=[],g=x.call(b);e[Y](bc,function(a,b){b&&f[L](+b)});if(g=="m"&&f[w]>2){d[L]([b][n](f.splice(0,2)));g="l";b=b=="m"?"l":"L"}while(f[w]>=c[g]){d[L]([b][n](f.splice(0,c[g])));if(!c[g])break}});d[H]=a._path2string;return d});a.findDotsAtSegment=function(a,b,c,d,e,f,g,h,i){var j=1-i,k=C(j,3)*a+C(j,2)*3*i*c+j*3*i*i*e+C(i,3)*g,l=C(j,3)*b+C(j,2)*3*i*d+j*3*i*i*f+C(i,3)*h,m=a+2*i*(c-a)+i*i*(e-2*c+a),n=b+2*i*(d-b)+i*i*(f-2*d+b),o=c+2*i*(e-c)+i*i*(g-2*e+c),p=d+2*i*(f-d)+i*i*(h-2*f+d),q=(1-i)*a+i*c,r=(1-i)*b+i*d,s=(1-i)*e+i*g,t=(1-i)*f+i*h,u=90-y.atan((m-o)/(n-p))*180/D;(m>o||n<p)&&(u+=180);return{x:k,y:l,m:{x:m,y:n},n:{x:o,y:p},start:{x:q,y:r},end:{x:s,y:t},alpha:u}};var bn=bm(function(a){if(!a)return{x:0,y:0,width:0,height:0};a=bw(a);var b=0,c=0,d=[],e=[],f;for(var g=0,h=a[w];g<h;g++){f=a[g];if(f[0]=="M"){b=f[1];c=f[2];d[L](b);e[L](c)}else{var i=bv(b,c,f[1],f[2],f[3],f[4],f[5],f[6]);d=d[n](i.min.x,i.max.x);e=e[n](i.min.y,i.max.y);b=f[5];c=f[6]}}var j=A[m](0,d),k=A[m](0,e);return{x:j,y:k,width:z[m](0,d)-j,height:z[m](0,e)-k}}),bo=function(b){var c=[];if(!a.is(b,G)||!a.is(b&&b[0],G))b=a.parsePathString(b);for(var d=0,e=b[w];d<e;d++){c[d]=[];for(var f=0,g=b[d][w];f<g;f++)c[d][f]=b[d][f]}c[H]=a._path2string;return c},bp=bm(function(b){if(!a.is(b,G)||!a.is(b&&b[0],G))b=a.parsePathString(b);var c=[],d=0,e=0,f=0,g=0,h=0;if(b[0][0]=="M"){d=b[0][1];e=b[0][2];f=d;g=e;h++;c[L](["M",d,e])}for(var i=h,j=b[w];i<j;i++){var k=c[i]=[],l=b[i];if(l[0]!=x.call(l[0])){k[0]=x.call(l[0]);switch(k[0]){case"a":k[1]=l[1];k[2]=l[2];k[3]=l[3];k[4]=l[4];k[5]=l[5];k[6]=+(l[6]-d).toFixed(3);k[7]=+(l[7]-e).toFixed(3);break;case"v":k[1]=+(l[1]-e).toFixed(3);break;case"m":f=l[1];g=l[2];default:for(var m=1,n=l[w];m<n;m++)k[m]=+(l[m]-(m%2?d:e)).toFixed(3)}}else{k=c[i]=[];if(l[0]=="m"){f=l[1]+d;g=l[2]+e}for(var o=0,p=l[w];o<p;o++)c[i][o]=l[o]}var q=c[i][w];switch(c[i][0]){case"z":d=f;e=g;break;case"h":d+=+c[i][q-1];break;case"v":e+=+c[i][q-1];break;default:d+=+c[i][q-2];e+=+c[i][q-1]}}c[H]=a._path2string;return c},0,bo),bq=bm(function(b){if(!a.is(b,G)||!a.is(b&&b[0],G))b=a.parsePathString(b);var c=[],d=0,e=0,f=0,g=0,h=0;if(b[0][0]=="M"){d=+b[0][1];e=+b[0][2];f=d;g=e;h++;c[0]=["M",d,e]}for(var i=h,j=b[w];i<j;i++){var k=c[i]=[],l=b[i];if(l[0]!=V.call(l[0])){k[0]=V.call(l[0]);switch(k[0]){case"A":k[1]=l[1];k[2]=l[2];k[3]=l[3];k[4]=l[4];k[5]=l[5];k[6]=+(l[6]+d);k[7]=+(l[7]+e);break;case"V":k[1]=+l[1]+e;break;case"H":k[1]=+l[1]+d;break;case"M":f=+l[1]+d;g=+l[2]+e;default:for(var m=1,n=l[w];m<n;m++)k[m]=+l[m]+(m%2?d:e)}}else for(var o=0,p=l[w];o<p;o++)c[i][o]=l[o];switch(k[0]){case"Z":d=f;e=g;break;case"H":d=k[1];break;case"V":e=k[1];break;case"M":f=c[i][c[i][w]-2];g=c[i][c[i][w]-1];default:d=c[i][c[i][w]-2];e=c[i][c[i][w]-1]}}c[H]=a._path2string;return c},null,bo),br=function(a,b,c,d){return[a,b,c,d,c,d]},bs=function(a,b,c,d,e,f){var g=1/3,h=2/3;return[g*a+h*c,g*b+h*d,g*e+h*c,g*f+h*d,e,f]},bt=function(a,b,c,d,e,f,g,h,i,j){var k=D*120/180,l=D/180*(+e||0),m=[],o,p=bm(function(a,b,c){var d=a*y.cos(c)-b*y.sin(c),e=a*y.sin(c)+b*y.cos(c);return{x:d,y:e}});if(j){G=j[0];H=j[1];E=j[2];F=j[3]}else{o=p(a,b,-l);a=o.x;b=o.y;o=p(h,i,-l);h=o.x;i=o.y;var q=y.cos(D/180*e),r=y.sin(D/180*e),t=(a-h)/2,u=(b-i)/2,x=t*t/(c*c)+u*u/(d*d);if(x>1){x=y.sqrt(x);c=x*c;d=x*d}var z=c*c,A=d*d,C=(f==g?-1:1)*y.sqrt(B((z*A-z*u*u-A*t*t)/(z*u*u+A*t*t))),E=C*c*u/d+(a+h)/2,F=C*-d*t/c+(b+i)/2,G=y.asin(((b-F)/d).toFixed(9)),H=y.asin(((i-F)/d).toFixed(9));G=a<E?D-G:G;H=h<E?D-H:H;G<0&&(G=D*2+G);H<0&&(H=D*2+H);g&&G>H&&(G=G-D*2);!g&&H>G&&(H=H-D*2)}var I=H-G;if(B(I)>k){var J=H,K=h,L=i;H=G+k*(g&&H>G?1:-1);h=E+c*y.cos(H);i=F+d*y.sin(H);m=bt(h,i,c,d,e,0,g,K,L,[H,J,E,F])}I=H-G;var M=y.cos(G),N=y.sin(G),O=y.cos(H),P=y.sin(H),Q=y.tan(I/4),R=4/3*c*Q,S=4/3*d*Q,T=[a,b],U=[a+R*N,b-S*M],V=[h+R*P,i-S*O],W=[h,i];U[0]=2*T[0]-U[0];U[1]=2*T[1]-U[1];{if(j)return[U,V,W][n](m);m=[U,V,W][n](m)[v]()[s](",");var X=[];for(var Y=0,Z=m[w];Y<Z;Y++)X[Y]=Y%2?p(m[Y-1],m[Y],l).y:p(m[Y],m[Y+1],l).x;return X}},bu=function(a,b,c,d,e,f,g,h,i){var j=1-i;return{x:C(j,3)*a+C(j,2)*3*i*c+j*3*i*i*e+C(i,3)*g,y:C(j,3)*b+C(j,2)*3*i*d+j*3*i*i*f+C(i,3)*h}},bv=bm(function(a,b,c,d,e,f,g,h){var i=e-2*c+a-(g-2*e+c),j=2*(c-a)-2*(e-c),k=a-c,l=(-j+y.sqrt(j*j-4*i*k))/2/i,n=(-j-y.sqrt(j*j-4*i*k))/2/i,o=[b,h],p=[a,g],q;B(l)>"1e12"&&(l=0.5);B(n)>"1e12"&&(n=0.5);if(l>0&&l<1){q=bu(a,b,c,d,e,f,g,h,l);p[L](q.x);o[L](q.y)}if(n>0&&n<1){q=bu(a,b,c,d,e,f,g,h,n);p[L](q.x);o[L](q.y)}i=f-2*d+b-(h-2*f+d);j=2*(d-b)-2*(f-d);k=b-d;l=(-j+y.sqrt(j*j-4*i*k))/2/i;n=(-j-y.sqrt(j*j-4*i*k))/2/i;B(l)>"1e12"&&(l=0.5);B(n)>"1e12"&&(n=0.5);if(l>0&&l<1){q=bu(a,b,c,d,e,f,g,h,l);p[L](q.x);o[L](q.y)}if(n>0&&n<1){q=bu(a,b,c,d,e,f,g,h,n);p[L](q.x);o[L](q.y)}return{min:{x:A[m](0,p),y:A[m](0,o)},max:{x:z[m](0,p),y:z[m](0,o)}}}),bw=bm(function(a,b){var c=bq(a),d=b&&bq(b),e={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},f={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},g=function(a,b){var c,d;if(!a)return["C",b.x,b.y,b.x,b.y,b.x,b.y];!(a[0]in{T:1,Q:1})&&(b.qx=b.qy=null);switch(a[0]){case"M":b.X=a[1];b.Y=a[2];break;case"A":a=["C"][n](bt[m](0,[b.x,b.y][n](a.slice(1))));break;case"S":c=b.x+(b.x-(b.bx||b.x));d=b.y+(b.y-(b.by||b.y));a=["C",c,d][n](a.slice(1));break;case"T":b.qx=b.x+(b.x-(b.qx||b.x));b.qy=b.y+(b.y-(b.qy||b.y));a=["C"][n](bs(b.x,b.y,b.qx,b.qy,a[1],a[2]));break;case"Q":b.qx=a[1];b.qy=a[2];a=["C"][n](bs(b.x,b.y,a[1],a[2],a[3],a[4]));break;case"L":a=["C"][n](br(b.x,b.y,a[1],a[2]));break;case"H":a=["C"][n](br(b.x,b.y,a[1],b.y));break;case"V":a=["C"][n](br(b.x,b.y,b.x,a[1]));break;case"Z":a=["C"][n](br(b.x,b.y,b.X,b.Y));break}return a},h=function(a,b){if(a[b][w]>7){a[b].shift();var e=a[b];while(e[w])a.splice(b++,0,["C"][n](e.splice(0,6)));a.splice(b,1);k=z(c[w],d&&d[w]||0)}},i=function(a,b,e,f,g){if(a&&b&&a[g][0]=="M"&&b[g][0]!="M"){b.splice(g,0,["M",f.x,f.y]);e.bx=0;e.by=0;e.x=a[g][1];e.y=a[g][2];k=z(c[w],d&&d[w]||0)}};for(var j=0,k=z(c[w],d&&d[w]||0);j<k;j++){c[j]=g(c[j],e);h(c,j);d&&(d[j]=g(d[j],f));d&&h(d,j);i(c,d,e,f,j);i(d,c,f,e,j);var l=c[j],o=d&&d[j],p=l[w],q=d&&o[w];e.x=l[p-2];e.y=l[p-1];e.bx=S(l[p-4])||e.x;e.by=S(l[p-3])||e.y;f.bx=d&&(S(o[q-4])||f.x);f.by=d&&(S(o[q-3])||f.y);f.x=d&&o[q-2];f.y=d&&o[q-1]}return d?[c,d]:c},null,bo),bx=bm(function(b){var c=[];for(var d=0,e=b[w];d<e;d++){var f={},g=b[d].match(/^([^:]*):?([\d\.]*)/);f.color=a.getRGB(g[1]);if(f.color.error)return null;f.color=f.color.hex;g[2]&&(f.offset=g[2]+"%");c[L](f)}for(d=1,e=c[w]-1;d<e;d++){if(!c[d].offset){var h=S(c[d-1].offset||0),i=0;for(var j=d+1;j<e;j++){if(c[j].offset){i=c[j].offset;break}}if(!i){i=100;j=e}i=S(i);var k=(i-h)/(j-d+1);for(;d<j;d++){h+=k;c[d].offset=h+"%"}}}return c}),by=function(b,c,d,e){var f;if(a.is(b,F)||a.is(b,"object")){f=a.is(b,F)?g.getElementById(b):b;if(f.tagName)return c==null?{container:f,width:f.style.pixelWidth||f.offsetWidth,height:f.style.pixelHeight||f.offsetHeight}:{container:f,width:c,height:d}}else return{container:1,x:b,y:c,width:d,height:e}},bz=function(a,b){var c=this;for(var d in b){if(b[f](d)&&!(d in a))switch(typeof b[d]){case"function":(function(b){a[d]=a===c?b:function(){return b[m](c,arguments)}})(b[d]);break;case"object":a[d]=a[d]||{};bz.call(this,a[d],b[d]);break;default:a[d]=b[d];break}}},bA=function(a,b){a==b.top&&(b.top=a.prev);a==b.bottom&&(b.bottom=a.next);a.next&&(a.next.prev=a.prev);a.prev&&(a.prev.next=a.next)},bB=function(a,b){if(b.top===a)return;bA(a,b);a.next=null;a.prev=b.top;b.top.next=a;b.top=a},bC=function(a,b){if(b.bottom===a)return;bA(a,b);a.next=b.bottom;a.prev=null;b.bottom.prev=a;b.bottom=a},bD=function(a,b,c){bA(a,c);b==c.top&&(c.top=a);b.next&&(b.next.prev=a);a.next=b.next;a.prev=b;b.next=a},bE=function(a,b,c){bA(a,c);b==c.bottom&&(c.bottom=a);b.prev&&(b.prev.next=a);a.prev=b.prev;b.prev=a;a.next=b},bF=function(a){return function(){throw new Error("Raphaël: you are calling to method “"+a+"” of removed object")}};a.pathToRelative=bp;if(a.svg){k.svgns="http://www.w3.org/2000/svg";k.xlink="http://www.w3.org/1999/xlink";Q=function(a){return+a+(~(~a)===a)*0.5};var bG=function(a,b){if(b)for(var c in b)b[f](c)&&a[R](c,r(b[c]));else{a=g.createElementNS(k.svgns,a);a.style.webkitTapHighlightColor="rgba(0,0,0,0)";return a}};a[H]=function(){return"Your browser supports SVG.\nYou are running Raphaël "+this.version};var bH=function(a,b){var c=bG("path");b.canvas&&b.canvas[l](c);var d=new bN(c,b);d.type="path";bK(d,{fill:"none",stroke:"#000",path:a});return d},bI=function(a,b,c){var d="linear",e=0.5,f=0.5,h=a.style;b=r(b)[Y](bd,function(a,b,c){d="radial";if(b&&c){e=S(b);f=S(c);var g=(f>0.5)*2-1;C(e-0.5,2)+C(f-0.5,2)>0.25&&(f=y.sqrt(0.25-C(e-0.5,2))*g+0.5)&&f!=0.5&&(f=f.toFixed(5)-0.00001*g)}return p});b=b[s](/\s*\-\s*/);if(d=="linear"){var i=b.shift();i=-S(i);if(isNaN(i))return null;var j=[0,0,y.cos(i*D/180),y.sin(i*D/180)],k=1/(z(B(j[2]),B(j[3]))||1);j[2]*=k;j[3]*=k;if(j[2]<0){j[0]=-j[2];j[2]=0}if(j[3]<0){j[1]=-j[3];j[3]=0}}var m=bx(b);if(!m)return null;var n=a.getAttribute(I);n=n.match(/^url\(#(.*)\)$/);n&&c.defs.removeChild(g.getElementById(n[1]));var o=bG(d+"Gradient");o.id=bh();bG(o,d=="radial"?{fx:e,fy:f}:{x1:j[0],y1:j[1],x2:j[2],y2:j[3]});c.defs[l](o);for(var q=0,t=m[w];q<t;q++){var u=bG("stop");bG(u,{offset:m[q].offset?m[q].offset:q?"100%":"0%","stop-color":m[q].color||"#fff"});o[l](u)}bG(a,{fill:"url(#"+o.id+")",opacity:1,"fill-opacity":1});h.fill=p;h.opacity=1;h.fillOpacity=1;return 1},bJ=function(b){var c=b.getBBox();bG(b.pattern,{patternTransform:a.format("translate({0},{1})",c.x,c.y)})},bK=function(c,d){var e={"":[0],none:[0],"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},h=c.node,i=c.attrs,j=c.rotate(),k=function(a,b){b=e[x.call(b)];if(b){var c=a.attrs["stroke-width"]||"1",f=({round:c,square:c,butt:0})[a.attrs["stroke-linecap"]||d["stroke-linecap"]]||0,g=[],i=b[w];while(i--)g[i]=b[i]*c+(i%2?1:-1)*f;bG(h,{"stroke-dasharray":g[v](",")})}};d[f]("rotation")&&(j=d.rotation);var m=r(j)[s](b);if(m.length-1){m[1]=+m[1];m[2]=+m[2]}else m=null;S(j)&&c.rotate(0,true);for(var n in d){if(d[f](n)){if(!W[f](n))continue;var o=d[n];i[n]=o;switch(n){case"blur":c.blur(o);break;case"rotation":c.rotate(o,true);break;case"href":case"title":case"target":var t=h.parentNode;if(x.call(t.tagName)!="a"){var u=bG("a");t.insertBefore(u,h);u[l](h);t=u}n=="target"&&o=="blank"?t.setAttributeNS(c.paper.xlink,"show","new"):t.setAttributeNS(c.paper.xlink,n,o);break;case"cursor":h.style.cursor=o;break;case"clip-rect":var y=r(o)[s](b);if(y[w]==4){c.clip&&c.clip.parentNode.parentNode.removeChild(c.clip.parentNode);var z=bG("clipPath"),A=bG("rect");z.id=bh();bG(A,{x:y[0],y:y[1],width:y[2],height:y[3]});z[l](A);c.paper.defs[l](z);bG(h,{"clip-path":"url(#"+z.id+")"});c.clip=A}if(!o){var B=g.getElementById(h.getAttribute("clip-path")[Y](/(^url\(#|\)$)/g,p));B&&B.parentNode.removeChild(B);bG(h,{"clip-path":p});delete c.clip}break;case"path":c.type=="path"&&bG(h,{d:o?i.path=bq(o):"M0,0"});break;case"width":h[R](n,o);if(i.fx){n="x";o=i.x}else break;case"x":i.fx&&(o=-i.x-(i.width||0));case"rx":if(n=="rx"&&c.type=="rect")break;case"cx":m&&(n=="x"||n=="cx")&&(m[1]+=o-i[n]);h[R](n,o);c.pattern&&bJ(c);break;case"height":h[R](n,o);if(i.fy){n="y";o=i.y}else break;case"y":i.fy&&(o=-i.y-(i.height||0));case"ry":if(n=="ry"&&c.type=="rect")break;case"cy":m&&(n=="y"||n=="cy")&&(m[2]+=o-i[n]);h[R](n,o);c.pattern&&bJ(c);break;case"r":c.type=="rect"?bG(h,{rx:o,ry:o}):h[R](n,o);break;case"src":c.type=="image"&&h.setAttributeNS(c.paper.xlink,"href",o);break;case"stroke-width":h.style.strokeWidth=o;h[R](n,o);i["stroke-dasharray"]&&k(c,i["stroke-dasharray"]);break;case"stroke-dasharray":k(c,o);break;case"translation":var C=r(o)[s](b);C[0]=+C[0]||0;C[1]=+C[1]||0;if(m){m[1]+=C[0];m[2]+=C[1]}cz.call(c,C[0],C[1]);break;case"scale":C=r(o)[s](b);c.scale(+C[0]||1,+C[1]||+C[0]||1,isNaN(S(C[2]))?null:+C[2],isNaN(S(C[3]))?null:+C[3]);break;case I:var D=r(o).match(M);if(D){z=bG("pattern");var E=bG("image");z.id=bh();bG(z,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1});bG(E,{x:0,y:0});E.setAttributeNS(c.paper.xlink,"href",D[1]);z[l](E);var F=g.createElement("img");F.style.cssText="position:absolute;left:-9999em;top-9999em";F.onload=function(){bG(z,{width:this.offsetWidth,height:this.offsetHeight});bG(E,{width:this.offsetWidth,height:this.offsetHeight});g.body.removeChild(this);c.paper.safari()};g.body[l](F);F.src=D[1];c.paper.defs[l](z);h.style.fill="url(#"+z.id+")";bG(h,{fill:"url(#"+z.id+")"});c.pattern=z;c.pattern&&bJ(c);break}var G=a.getRGB(o);if(G.error)if((({circle:1,ellipse:1})[f](c.type)||r(o).charAt()!="r")&&bI(h,o,c.paper)){i.gradient=o;i.fill="none";break}else{delete d.gradient;delete i.gradient;!a.is(i.opacity,"undefined")&&a.is(d.opacity,"undefined")&&bG(h,{opacity:i.opacity});!a.is(i["fill-opacity"],"undefined")&&a.is(d["fill-opacity"],"undefined")&&bG(h,{"fill-opacity":i["fill-opacity"]})}G[f]("opacity")&&bG(h,{"fill-opacity":G.opacity>1?G.opacity/100:G.opacity});case"stroke":G=a.getRGB(o);h[R](n,G.hex);n=="stroke"&&G[f]("opacity")&&bG(h,{"stroke-opacity":G.opacity>1?G.opacity/100:G.opacity});break;case"gradient":(({circle:1,ellipse:1})[f](c.type)||r(o).charAt()!="r")&&bI(h,o,c.paper);break;case"opacity":i.gradient&&!i[f]("stroke-opacity")&&bG(h,{"stroke-opacity":o>1?o/100:o});case"fill-opacity":if(i.gradient){var H=g.getElementById(h.getAttribute(I)[Y](/^url\(#|\)$/g,p));if(H){var J=H.getElementsByTagName("stop");J[J[w]-1][R]("stop-opacity",o)}break}default:n=="font-size"&&(o=T(o,10)+"px");var K=n[Y](/(\-.)/g,function(a){return V.call(a.substring(1))});h.style[K]=o;h[R](n,o);break}}}bM(c,d);m?c.rotate(m.join(q)):S(j)&&c.rotate(j,true)},bL=1.2,bM=function(b,c){if(b.type!="text"||!(c[f]("text")||c[f]("font")||c[f]("font-size")||c[f]("x")||c[f]("y")))return;var d=b.attrs,e=b.node,h=e.firstChild?T(g.defaultView.getComputedStyle(e.firstChild,p).getPropertyValue("font-size"),10):10;if(c[f]("text")){d.text=c.text;while(e.firstChild)e.removeChild(e.firstChild);var i=r(c.text)[s]("\n");for(var j=0,k=i[w];j<k;j++)if(i[j]){var m=bG("tspan");j&&bG(m,{dy:h*bL,x:d.x});m[l](g.createTextNode(i[j]));e[l](m)}}else{i=e.getElementsByTagName("tspan");for(j=0,k=i[w];j<k;j++)j&&bG(i[j],{dy:h*bL,x:d.x})}bG(e,{y:d.y});var n=b.getBBox(),o=d.y-(n.y+n.height/2);o&&a.is(o,"finite")&&bG(e,{y:d.y+o})},bN=function(b,c){var d=0,e=0;this[0]=b;this.id=a._oid++;this.node=b;b.raphael=this;this.paper=c;this.attrs=this.attrs||{};this.transformations=[];this._={tx:0,ty:0,rt:{deg:0,cx:0,cy:0},sx:1,sy:1};!c.bottom&&(c.bottom=this);this.prev=c.top;c.top&&(c.top.next=this);c.top=this;this.next=null},bO=bN[e];bN[e].rotate=function(c,d,e){if(this.removed)return this;if(c==null){if(this._.rt.cx)return[this._.rt.deg,this._.rt.cx,this._.rt.cy][v](q);return this._.rt.deg}var f=this.getBBox();c=r(c)[s](b);if(c[w]-1){d=S(c[1]);e=S(c[2])}c=S(c[0]);d!=null&&d!==false?this._.rt.deg=c:this._.rt.deg+=c;e==null&&(d=null);this._.rt.cx=d;this._.rt.cy=e;d=d==null?f.x+f.width/2:d;e=e==null?f.y+f.height/2:e;if(this._.rt.deg){this.transformations[0]=a.format("rotate({0} {1} {2})",this._.rt.deg,d,e);this.clip&&bG(this.clip,{transform:a.format("rotate({0} {1} {2})",-this._.rt.deg,d,e)})}else{this.transformations[0]=p;this.clip&&bG(this.clip,{transform:p})}bG(this.node,{transform:this.transformations[v](q)});return this};bN[e].hide=function(){!this.removed&&(this.node.style.display="none");return this};bN[e].show=function(){!this.removed&&(this.node.style.display="");return this};bN[e].remove=function(){if(this.removed)return;bA(this,this.paper);this.node.parentNode.removeChild(this.node);for(var a in this)delete this[a];this.removed=true};bN[e].getBBox=function(){if(this.removed)return this;if(this.type=="path")return bn(this.attrs.path);if(this.node.style.display=="none"){this.show();var a=true}var b={};try{b=this.node.getBBox()}catch(a){}finally{b=b||{}}if(this.type=="text"){b={x:b.x,y:Infinity,width:0,height:0};for(var c=0,d=this.node.getNumberOfChars();c<d;c++){var e=this.node.getExtentOfChar(c);e.y<b.y&&(b.y=e.y);e.y+e.height-b.y>b.height&&(b.height=e.y+e.height-b.y);e.x+e.width-b.x>b.width&&(b.width=e.x+e.width-b.x)}}a&&this.hide();return b};bN[e].attr=function(b,c){if(this.removed)return this;if(b==null){var d={};for(var e in this.attrs)this.attrs[f](e)&&(d[e]=this.attrs[e]);this._.rt.deg&&(d.rotation=this.rotate());(this._.sx!=1||this._.sy!=1)&&(d.scale=this.scale());d.gradient&&d.fill=="none"&&(d.fill=d.gradient)&&delete d.gradient;return d}if(c==null&&a.is(b,F)){if(b=="translation")return cz.call(this);if(b=="rotation")return this.rotate();if(b=="scale")return this.scale();if(b==I&&this.attrs.fill=="none"&&this.attrs.gradient)return this.attrs.gradient;return this.attrs[b]}if(c==null&&a.is(b,G)){var g={};for(var h=0,i=b.length;h<i;h++)g[b[h]]=this.attr(b[h]);return g}if(c!=null){var j={};j[b]=c}else b!=null&&a.is(b,"object")&&(j=b);for(var k in this.paper.customAttributes)if(this.paper.customAttributes[f](k)&&j[f](k)&&a.is(this.paper.customAttributes[k],"function")){var l=this.paper.customAttributes[k].apply(this,[][n](j[k]));this.attrs[k]=j[k];for(var m in l)l[f](m)&&(j[m]=l[m])}bK(this,j);return this};bN[e].toFront=function(){if(this.removed)return this;this.node.parentNode[l](this.node);var a=this.paper;a.top!=this&&bB(this,a);return this};bN[e].toBack=function(){if(this.removed)return this;if(this.node.parentNode.firstChild!=this.node){this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild);bC(this,this.paper);var a=this.paper}return this};bN[e].insertAfter=function(a){if(this.removed)return this;var b=a.node||a[a.length-1].node;b.nextSibling?b.parentNode.insertBefore(this.node,b.nextSibling):b.parentNode[l](this.node);bD(this,a,this.paper);return this};bN[e].insertBefore=function(a){if(this.removed)return this;var b=a.node||a[0].node;b.parentNode.insertBefore(this.node,b);bE(this,a,this.paper);return this};bN[e].blur=function(a){var b=this;if(+a!==0){var c=bG("filter"),d=bG("feGaussianBlur");b.attrs.blur=a;c.id=bh();bG(d,{stdDeviation:+a||1.5});c.appendChild(d);b.paper.defs.appendChild(c);b._blur=c;bG(b.node,{filter:"url(#"+c.id+")"})}else{if(b._blur){b._blur.parentNode.removeChild(b._blur);delete b._blur;delete b.attrs.blur}b.node.removeAttribute("filter")}};var bP=function(a,b,c,d){var e=bG("circle");a.canvas&&a.canvas[l](e);var f=new bN(e,a);f.attrs={cx:b,cy:c,r:d,fill:"none",stroke:"#000"};f.type="circle";bG(e,f.attrs);return f},bQ=function(a,b,c,d,e,f){var g=bG("rect");a.canvas&&a.canvas[l](g);var h=new bN(g,a);h.attrs={x:b,y:c,width:d,height:e,r:f||0,rx:f||0,ry:f||0,fill:"none",stroke:"#000"};h.type="rect";bG(g,h.attrs);return h},bR=function(a,b,c,d,e){var f=bG("ellipse");a.canvas&&a.canvas[l](f);var g=new bN(f,a);g.attrs={cx:b,cy:c,rx:d,ry:e,fill:"none",stroke:"#000"};g.type="ellipse";bG(f,g.attrs);return g},bS=function(a,b,c,d,e,f){var g=bG("image");bG(g,{x:c,y:d,width:e,height:f,preserveAspectRatio:"none"});g.setAttributeNS(a.xlink,"href",b);a.canvas&&a.canvas[l](g);var h=new bN(g,a);h.attrs={x:c,y:d,width:e,height:f,src:b};h.type="image";return h},bT=function(a,b,c,d){var e=bG("text");bG(e,{x:b,y:c,"text-anchor":"middle"});a.canvas&&a.canvas[l](e);var f=new bN(e,a);f.attrs={x:b,y:c,"text-anchor":"middle",text:d,font:W.font,stroke:"none",fill:"#000"};f.type="text";bK(f,f.attrs);return f},bU=function(a,b){this.width=a||this.width;this.height=b||this.height;this.canvas[R]("width",this.width);this.canvas[R]("height",this.height);return this},bV=function(){var b=by[m](0,arguments),c=b&&b.container,d=b.x,e=b.y,f=b.width,h=b.height;if(!c)throw new Error("SVG container not found.");var i=bG("svg");d=d||0;e=e||0;f=f||512;h=h||342;bG(i,{xmlns:"http://www.w3.org/2000/svg",version:1.1,width:f,height:h});if(c==1){i.style.cssText="position:absolute;left:"+d+"px;top:"+e+"px";g.body[l](i)}else c.firstChild?c.insertBefore(i,c.firstChild):c[l](i);c=new j;c.width=f;c.height=h;c.canvas=i;bz.call(c,c,a.fn);c.clear();return c};k.clear=function(){var a=this.canvas;while(a.firstChild)a.removeChild(a.firstChild);this.bottom=this.top=null;(this.desc=bG("desc"))[l](g.createTextNode("Created with Raphaël"));a[l](this.desc);a[l](this.defs=bG("defs"))};k.remove=function(){this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);for(var a in this)this[a]=bF(a)}}if(a.vml){var bW={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},bX=/([clmz]),?([^clmz]*)/gi,bY=/ progid:\S+Blur\([^\)]+\)/g,bZ=/-?[^,\s-]+/g,b$=1000+q+1000,b_=10,ca={path:1,rect:1},cb=function(a){var b=/[ahqstv]/ig,c=bq;r(a).match(b)&&(c=bw);b=/[clmz]/g;if(c==bq&&!r(a).match(b)){var d=r(a)[Y](bX,function(a,b,c){var d=[],e=x.call(b)=="m",f=bW[b];c[Y](bZ,function(a){if(e&&d[w]==2){f+=d+bW[b=="m"?"l":"L"];d=[]}d[L](Q(a*b_))});return f+d});return d}var e=c(a),f,g;d=[];for(var h=0,i=e[w];h<i;h++){f=e[h];g=x.call(e[h][0]);g=="z"&&(g="x");for(var j=1,k=f[w];j<k;j++)g+=Q(f[j]*b_)+(j!=k-1?",":p);d[L](g)}return d[v](q)};a[H]=function(){return"Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël "+this.version};bH=function(a,b){var c=cd("group");c.style.cssText="position:absolute;left:0;top:0;width:"+b.width+"px;height:"+b.height+"px";c.coordsize=b.coordsize;c.coordorigin=b.coordorigin;var d=cd("shape"),e=d.style;e.width=b.width+"px";e.height=b.height+"px";d.coordsize=b$;d.coordorigin=b.coordorigin;c[l](d);var f=new bN(d,c,b),g={fill:"none",stroke:"#000"};a&&(g.path=a);f.type="path";f.path=[];f.Path=p;bK(f,g);b.canvas[l](c);return f};bK=function(c,d){c.attrs=c.attrs||{};var e=c.node,h=c.attrs,i=e.style,j,k=(d.x!=h.x||d.y!=h.y||d.width!=h.width||d.height!=h.height||d.r!=h.r)&&c.type=="rect",m=c;for(var n in d)d[f](n)&&(h[n]=d[n]);if(k){h.path=cc(h.x,h.y,h.width,h.height,h.r);c.X=h.x;c.Y=h.y;c.W=h.width;c.H=h.height}d.href&&(e.href=d.href);d.title&&(e.title=d.title);d.target&&(e.target=d.target);d.cursor&&(i.cursor=d.cursor);"blur"in d&&c.blur(d.blur);if(d.path&&c.type=="path"||k)e.path=cb(h.path);d.rotation!=null&&c.rotate(d.rotation,true);if(d.translation){j=r(d.translation)[s](b);cz.call(c,j[0],j[1]);if(c._.rt.cx!=null){c._.rt.cx+=+j[0];c._.rt.cy+=+j[1];c.setBox(c.attrs,j[0],j[1])}}if(d.scale){j=r(d.scale)[s](b);c.scale(+j[0]||1,+j[1]||+j[0]||1,+j[2]||null,+j[3]||null)}if("clip-rect"in d){var o=r(d["clip-rect"])[s](b);if(o[w]==4){o[2]=+o[2]+ +o[0];o[3]=+o[3]+ +o[1];var q=e.clipRect||g.createElement("div"),t=q.style,u=e.parentNode;t.clip=a.format("rect({1}px {2}px {3}px {0}px)",o);if(!e.clipRect){t.position="absolute";t.top=0;t.left=0;t.width=c.paper.width+"px";t.height=c.paper.height+"px";u.parentNode.insertBefore(q,u);q[l](u);e.clipRect=q}}d["clip-rect"]||e.clipRect&&(e.clipRect.style.clip=p)}c.type=="image"&&d.src&&(e.src=d.src);if(c.type=="image"&&d.opacity){e.filterOpacity=U+".Alpha(opacity="+d.opacity*100+")";i.filter=(e.filterMatrix||p)+(e.filterOpacity||p)}d.font&&(i.font=d.font);d["font-family"]&&(i.fontFamily="\""+d["font-family"][s](",")[0][Y](/^['"]+|['"]+$/g,p)+"\"");d["font-size"]&&(i.fontSize=d["font-size"]);d["font-weight"]&&(i.fontWeight=d["font-weight"]);d["font-style"]&&(i.fontStyle=d["font-style"]);if(d.opacity!=null||d["stroke-width"]!=null||d.fill!=null||d.stroke!=null||d["stroke-width"]!=null||d["stroke-opacity"]!=null||d["fill-opacity"]!=null||d["stroke-dasharray"]!=null||d["stroke-miterlimit"]!=null||d["stroke-linejoin"]!=null||d["stroke-linecap"]!=null){e=c.shape||e;var v=e.getElementsByTagName(I)&&e.getElementsByTagName(I)[0],x=false;!v&&(x=v=cd(I));if("fill-opacity"in d||"opacity"in d){var y=((+h["fill-opacity"]+1||2)-1)*((+h.opacity+1||2)-1)*((+a.getRGB(d.fill).o+1||2)-1);y=A(z(y,0),1);v.opacity=y}d.fill&&(v.on=true);if(v.on==null||d.fill=="none")v.on=false;if(v.on&&d.fill){var B=d.fill.match(M);if(B){v.src=B[1];v.type="tile"}else{v.color=a.getRGB(d.fill).hex;v.src=p;v.type="solid";if(a.getRGB(d.fill).error&&(m.type in{circle:1,ellipse:1}||r(d.fill).charAt()!="r")&&bI(m,d.fill)){h.fill="none";h.gradient=d.fill}}}x&&e[l](v);var C=e.getElementsByTagName("stroke")&&e.getElementsByTagName("stroke")[0],D=false;!C&&(D=C=cd("stroke"));if(d.stroke&&d.stroke!="none"||d["stroke-width"]||d["stroke-opacity"]!=null||d["stroke-dasharray"]||d["stroke-miterlimit"]||d["stroke-linejoin"]||d["stroke-linecap"])C.on=true;(d.stroke=="none"||C.on==null||d.stroke==0||d["stroke-width"]==0)&&(C.on=false);var E=a.getRGB(d.stroke);C.on&&d.stroke&&(C.color=E.hex);y=((+h["stroke-opacity"]+1||2)-1)*((+h.opacity+1||2)-1)*((+E.o+1||2)-1);var F=(S(d["stroke-width"])||1)*0.75;y=A(z(y,0),1);d["stroke-width"]==null&&(F=h["stroke-width"]);d["stroke-width"]&&(C.weight=F);F&&F<1&&(y*=F)&&(C.weight=1);C.opacity=y;d["stroke-linejoin"]&&(C.joinstyle=d["stroke-linejoin"]||"miter");C.miterlimit=d["stroke-miterlimit"]||8;d["stroke-linecap"]&&(C.endcap=d["stroke-linecap"]=="butt"?"flat":d["stroke-linecap"]=="square"?"square":"round");if(d["stroke-dasharray"]){var G={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};C.dashstyle=G[f](d["stroke-dasharray"])?G[d["stroke-dasharray"]]:p}D&&e[l](C)}if(m.type=="text"){i=m.paper.span.style;h.font&&(i.font=h.font);h["font-family"]&&(i.fontFamily=h["font-family"]);h["font-size"]&&(i.fontSize=h["font-size"]);h["font-weight"]&&(i.fontWeight=h["font-weight"]);h["font-style"]&&(i.fontStyle=h["font-style"]);m.node.string&&(m.paper.span.innerHTML=r(m.node.string)[Y](/</g,"&#60;")[Y](/&/g,"&#38;")[Y](/\n/g,"<br>"));m.W=h.w=m.paper.span.offsetWidth;m.H=h.h=m.paper.span.offsetHeight;m.X=h.x;m.Y=h.y+Q(m.H/2);switch(h["text-anchor"]){case"start":m.node.style["v-text-align"]="left";m.bbx=Q(m.W/2);break;case"end":m.node.style["v-text-align"]="right";m.bbx=-Q(m.W/2);break;default:m.node.style["v-text-align"]="center";break}}};bI=function(a,b){a.attrs=a.attrs||{};var c=a.attrs,d,e="linear",f=".5 .5";a.attrs.gradient=b;b=r(b)[Y](bd,function(a,b,c){e="radial";if(b&&c){b=S(b);c=S(c);C(b-0.5,2)+C(c-0.5,2)>0.25&&(c=y.sqrt(0.25-C(b-0.5,2))*((c>0.5)*2-1)+0.5);f=b+q+c}return p});b=b[s](/\s*\-\s*/);if(e=="linear"){var g=b.shift();g=-S(g);if(isNaN(g))return null}var h=bx(b);if(!h)return null;a=a.shape||a.node;d=a.getElementsByTagName(I)[0]||cd(I);!d.parentNode&&a.appendChild(d);if(h[w]){d.on=true;d.method="none";d.color=h[0].color;d.color2=h[h[w]-1].color;var i=[];for(var j=0,k=h[w];j<k;j++)h[j].offset&&i[L](h[j].offset+q+h[j].color);d.colors&&(d.colors.value=i[w]?i[v]():"0% "+d.color);if(e=="radial"){d.type="gradientradial";d.focus="100%";d.focussize=f;d.focusposition=f}else{d.type="gradient";d.angle=(270-g)%360}}return 1};bN=function(b,c,d){var e=0,f=0,g=0,h=1;this[0]=b;this.id=a._oid++;this.node=b;b.raphael=this;this.X=0;this.Y=0;this.attrs={};this.Group=c;this.paper=d;this._={tx:0,ty:0,rt:{deg:0},sx:1,sy:1};!d.bottom&&(d.bottom=this);this.prev=d.top;d.top&&(d.top.next=this);d.top=this;this.next=null};bO=bN[e];bO.rotate=function(a,c,d){if(this.removed)return this;if(a==null){if(this._.rt.cx)return[this._.rt.deg,this._.rt.cx,this._.rt.cy][v](q);return this._.rt.deg}a=r(a)[s](b);if(a[w]-1){c=S(a[1]);d=S(a[2])}a=S(a[0]);c!=null?this._.rt.deg=a:this._.rt.deg+=a;d==null&&(c=null);this._.rt.cx=c;this._.rt.cy=d;this.setBox(this.attrs,c,d);this.Group.style.rotation=this._.rt.deg;return this};bO.setBox=function(a,b,c){if(this.removed)return this;var d=this.Group.style,e=this.shape&&this.shape.style||this.node.style;a=a||{};for(var g in a)a[f](g)&&(this.attrs[g]=a[g]);b=b||this._.rt.cx;c=c||this._.rt.cy;var h=this.attrs,i,j,k,l;switch(this.type){case"circle":i=h.cx-h.r;j=h.cy-h.r;k=l=h.r*2;break;case"ellipse":i=h.cx-h.rx;j=h.cy-h.ry;k=h.rx*2;l=h.ry*2;break;case"image":i=+h.x;j=+h.y;k=h.width||0;l=h.height||0;break;case"text":this.textpath.v=["m",Q(h.x),", ",Q(h.y-2),"l",Q(h.x)+1,", ",Q(h.y-2)][v](p);i=h.x-Q(this.W/2);j=h.y-this.H/2;k=this.W;l=this.H;break;case"rect":case"path":if(this.attrs.path){var m=bn(this.attrs.path);i=m.x;j=m.y;k=m.width;l=m.height}else{i=0;j=0;k=this.paper.width;l=this.paper.height}break;default:i=0;j=0;k=this.paper.width;l=this.paper.height;break}b=b==null?i+k/2:b;c=c==null?j+l/2:c;var n=b-this.paper.width/2,o=c-this.paper.height/2,q;d.left!=(q=n+"px")&&(d.left=q);d.top!=(q=o+"px")&&(d.top=q);this.X=ca[f](this.type)?-n:i;this.Y=ca[f](this.type)?-o:j;this.W=k;this.H=l;if(ca[f](this.type)){e.left!=(q=-n*b_+"px")&&(e.left=q);e.top!=(q=-o*b_+"px")&&(e.top=q)}else if(this.type=="text"){e.left!=(q=-n+"px")&&(e.left=q);e.top!=(q=-o+"px")&&(e.top=q)}else{d.width!=(q=this.paper.width+"px")&&(d.width=q);d.height!=(q=this.paper.height+"px")&&(d.height=q);e.left!=(q=i-n+"px")&&(e.left=q);e.top!=(q=j-o+"px")&&(e.top=q);e.width!=(q=k+"px")&&(e.width=q);e.height!=(q=l+"px")&&(e.height=q)}};bO.hide=function(){!this.removed&&(this.Group.style.display="none");return this};bO.show=function(){!this.removed&&(this.Group.style.display="block");return this};bO.getBBox=function(){if(this.removed)return this;if(ca[f](this.type))return bn(this.attrs.path);return{x:this.X+(this.bbx||0),y:this.Y,width:this.W,height:this.H}};bO.remove=function(){if(this.removed)return;bA(this,this.paper);this.node.parentNode.removeChild(this.node);this.Group.parentNode.removeChild(this.Group);this.shape&&this.shape.parentNode.removeChild(this.shape);for(var a in this)delete this[a];this.removed=true};bO.attr=function(b,c){if(this.removed)return this;if(b==null){var d={};for(var e in this.attrs)this.attrs[f](e)&&(d[e]=this.attrs[e]);this._.rt.deg&&(d.rotation=this.rotate());(this._.sx!=1||this._.sy!=1)&&(d.scale=this.scale());d.gradient&&d.fill=="none"&&(d.fill=d.gradient)&&delete d.gradient;return d}if(c==null&&a.is(b,"string")){if(b=="translation")return cz.call(this);if(b=="rotation")return this.rotate();if(b=="scale")return this.scale();if(b==I&&this.attrs.fill=="none"&&this.attrs.gradient)return this.attrs.gradient;return this.attrs[b]}if(this.attrs&&c==null&&a.is(b,G)){var g,h={};for(e=0,g=b[w];e<g;e++)h[b[e]]=this.attr(b[e]);return h}var i;if(c!=null){i={};i[b]=c}c==null&&a.is(b,"object")&&(i=b);if(i){for(var j in this.paper.customAttributes)if(this.paper.customAttributes[f](j)&&i[f](j)&&a.is(this.paper.customAttributes[j],"function")){var k=this.paper.customAttributes[j].apply(this,[][n](i[j]));this.attrs[j]=i[j];for(var l in k)k[f](l)&&(i[l]=k[l])}i.text&&this.type=="text"&&(this.node.string=i.text);bK(this,i);i.gradient&&(({circle:1,ellipse:1})[f](this.type)||r(i.gradient).charAt()!="r")&&bI(this,i.gradient);(!ca[f](this.type)||this._.rt.deg)&&this.setBox(this.attrs)}return this};bO.toFront=function(){!this.removed&&this.Group.parentNode[l](this.Group);this.paper.top!=this&&bB(this,this.paper);return this};bO.toBack=function(){if(this.removed)return this;if(this.Group.parentNode.firstChild!=this.Group){this.Group.parentNode.insertBefore(this.Group,this.Group.parentNode.firstChild);bC(this,this.paper)}return this};bO.insertAfter=function(a){if(this.removed)return this;a.constructor==cC&&(a=a[a.length-1]);a.Group.nextSibling?a.Group.parentNode.insertBefore(this.Group,a.Group.nextSibling):a.Group.parentNode[l](this.Group);bD(this,a,this.paper);return this};bO.insertBefore=function(a){if(this.removed)return this;a.constructor==cC&&(a=a[0]);a.Group.parentNode.insertBefore(this.Group,a.Group);bE(this,a,this.paper);return this};bO.blur=function(b){var c=this.node.runtimeStyle,d=c.filter;d=d.replace(bY,p);if(+b!==0){this.attrs.blur=b;c.filter=d+q+U+".Blur(pixelradius="+(+b||1.5)+")";c.margin=a.format("-{0}px 0 0 -{0}px",Q(+b||1.5))}else{c.filter=d;c.margin=0;delete this.attrs.blur}};bP=function(a,b,c,d){var e=cd("group"),f=cd("oval"),g=f.style;e.style.cssText="position:absolute;left:0;top:0;width:"+a.width+"px;height:"+a.height+"px";e.coordsize=b$;e.coordorigin=a.coordorigin;e[l](f);var h=new bN(f,e,a);h.type="circle";bK(h,{stroke:"#000",fill:"none"});h.attrs.cx=b;h.attrs.cy=c;h.attrs.r=d;h.setBox({x:b-d,y:c-d,width:d*2,height:d*2});a.canvas[l](e);return h};function cc(b,c,d,e,f){return f?a.format("M{0},{1}l{2},0a{3},{3},0,0,1,{3},{3}l0,{5}a{3},{3},0,0,1,{4},{3}l{6},0a{3},{3},0,0,1,{4},{4}l0,{7}a{3},{3},0,0,1,{3},{4}z",b+f,c,d-f*2,f,-f,e-f*2,f*2-d,f*2-e):a.format("M{0},{1}l{2},0,0,{3},{4},0z",b,c,d,e,-d)}bQ=function(a,b,c,d,e,f){var g=cc(b,c,d,e,f),h=a.path(g),i=h.attrs;h.X=i.x=b;h.Y=i.y=c;h.W=i.width=d;h.H=i.height=e;i.r=f;i.path=g;h.type="rect";return h};bR=function(a,b,c,d,e){var f=cd("group"),g=cd("oval"),h=g.style;f.style.cssText="position:absolute;left:0;top:0;width:"+a.width+"px;height:"+a.height+"px";f.coordsize=b$;f.coordorigin=a.coordorigin;f[l](g);var i=new bN(g,f,a);i.type="ellipse";bK(i,{stroke:"#000"});i.attrs.cx=b;i.attrs.cy=c;i.attrs.rx=d;i.attrs.ry=e;i.setBox({x:b-d,y:c-e,width:d*2,height:e*2});a.canvas[l](f);return i};bS=function(a,b,c,d,e,f){var g=cd("group"),h=cd("image");g.style.cssText="position:absolute;left:0;top:0;width:"+a.width+"px;height:"+a.height+"px";g.coordsize=b$;g.coordorigin=a.coordorigin;h.src=b;g[l](h);var i=new bN(h,g,a);i.type="image";i.attrs.src=b;i.attrs.x=c;i.attrs.y=d;i.attrs.w=e;i.attrs.h=f;i.setBox({x:c,y:d,width:e,height:f});a.canvas[l](g);return i};bT=function(b,c,d,e){var f=cd("group"),g=cd("shape"),h=g.style,i=cd("path"),j=i.style,k=cd("textpath");f.style.cssText="position:absolute;left:0;top:0;width:"+b.width+"px;height:"+b.height+"px";f.coordsize=b$;f.coordorigin=b.coordorigin;i.v=a.format("m{0},{1}l{2},{1}",Q(c*10),Q(d*10),Q(c*10)+1);i.textpathok=true;h.width=b.width;h.height=b.height;k.string=r(e);k.on=true;g[l](k);g[l](i);f[l](g);var m=new bN(k,f,b);m.shape=g;m.textpath=i;m.type="text";m.attrs.text=e;m.attrs.x=c;m.attrs.y=d;m.attrs.w=1;m.attrs.h=1;bK(m,{font:W.font,stroke:"none",fill:"#000"});m.setBox();b.canvas[l](f);return m};bU=function(a,b){var c=this.canvas.style;a==+a&&(a+="px");b==+b&&(b+="px");c.width=a;c.height=b;c.clip="rect(0 "+a+" "+b+" 0)";return this};var cd;g.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");try{!g.namespaces.rvml&&g.namespaces.add("rvml","urn:schemas-microsoft-com:vml");cd=function(a){return g.createElement("<rvml:"+a+" class=\"rvml\">")}}catch(a){cd=function(a){return g.createElement("<"+a+" xmlns=\"urn:schemas-microsoft.com:vml\" class=\"rvml\">")}}bV=function(){var b=by[m](0,arguments),c=b.container,d=b.height,e,f=b.width,h=b.x,i=b.y;if(!c)throw new Error("VML container not found.");var k=new j,n=k.canvas=g.createElement("div"),o=n.style;h=h||0;i=i||0;f=f||512;d=d||342;f==+f&&(f+="px");d==+d&&(d+="px");k.width=1000;k.height=1000;k.coordsize=b_*1000+q+b_*1000;k.coordorigin="0 0";k.span=g.createElement("span");k.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;";n[l](k.span);o.cssText=a.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",f,d);if(c==1){g.body[l](n);o.left=h+"px";o.top=i+"px";o.position="absolute"}else c.firstChild?c.insertBefore(n,c.firstChild):c[l](n);bz.call(k,k,a.fn);return k};k.clear=function(){this.canvas.innerHTML=p;this.span=g.createElement("span");this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;";this.canvas[l](this.span);this.bottom=this.top=null};k.remove=function(){this.canvas.parentNode.removeChild(this.canvas);for(var a in this)this[a]=bF(a);return true}}var ce=navigator.userAgent.match(/Version\\x2f(.*?)\s/);navigator.vendor=="Apple Computer, Inc."&&(ce&&ce[1]<4||navigator.platform.slice(0,2)=="iP")?k.safari=function(){var a=this.rect(-99,-99,this.width+99,this.height+99).attr({stroke:"none"});h.setTimeout(function(){a.remove()})}:k.safari=function(){};var cf=function(){this.returnValue=false},cg=function(){return this.originalEvent.preventDefault()},ch=function(){this.cancelBubble=true},ci=function(){return this.originalEvent.stopPropagation()},cj=(function(){{if(g.addEventListener)return function(a,b,c,d){var e=o&&u[b]?u[b]:b,g=function(e){if(o&&u[f](b))for(var g=0,h=e.targetTouches&&e.targetTouches.length;g<h;g++){if(e.targetTouches[g].target==a){var i=e;e=e.targetTouches[g];e.originalEvent=i;e.preventDefault=cg;e.stopPropagation=ci;break}}return c.call(d,e)};a.addEventListener(e,g,false);return function(){a.removeEventListener(e,g,false);return true}};if(g.attachEvent)return function(a,b,c,d){var e=function(a){a=a||h.event;a.preventDefault=a.preventDefault||cf;a.stopPropagation=a.stopPropagation||ch;return c.call(d,a)};a.attachEvent("on"+b,e);var f=function(){a.detachEvent("on"+b,e);return true};return f}}})(),ck=[],cl=function(a){var b=a.clientX,c=a.clientY,d=g.documentElement.scrollTop||g.body.scrollTop,e=g.documentElement.scrollLeft||g.body.scrollLeft,f,h=ck.length;while(h--){f=ck[h];if(o){var i=a.touches.length,j;while(i--){j=a.touches[i];if(j.identifier==f.el._drag.id){b=j.clientX;c=j.clientY;(a.originalEvent?a.originalEvent:a).preventDefault();break}}}else a.preventDefault();b+=e;c+=d;f.move&&f.move.call(f.move_scope||f.el,b-f.el._drag.x,c-f.el._drag.y,b,c,a)}},cm=function(b){a.unmousemove(cl).unmouseup(cm);var c=ck.length,d;while(c--){d=ck[c];d.el._drag={};d.end&&d.end.call(d.end_scope||d.start_scope||d.move_scope||d.el,b)}ck=[]};for(var cn=t[w];cn--;)(function(b){a[b]=bN[e][b]=function(c,d){if(a.is(c,"function")){this.events=this.events||[];this.events.push({name:b,f:c,unbind:cj(this.shape||this.node||g,b,c,d||this)})}return this};a["un"+b]=bN[e]["un"+b]=function(a){var c=this.events,d=c[w];while(d--)if(c[d].name==b&&c[d].f==a){c[d].unbind();c.splice(d,1);!c.length&&delete this.events;return this}return this}})(t[cn]);bO.hover=function(a,b,c,d){return this.mouseover(a,c).mouseout(b,d||c)};bO.unhover=function(a,b){return this.unmouseover(a).unmouseout(b)};bO.drag=function(b,c,d,e,f,h){this._drag={};this.mousedown(function(i){(i.originalEvent||i).preventDefault();var j=g.documentElement.scrollTop||g.body.scrollTop,k=g.documentElement.scrollLeft||g.body.scrollLeft;this._drag.x=i.clientX+k;this._drag.y=i.clientY+j;this._drag.id=i.identifier;c&&c.call(f||e||this,i.clientX+k,i.clientY+j,i);!ck.length&&a.mousemove(cl).mouseup(cm);ck.push({el:this,move:b,end:d,move_scope:e,start_scope:f,end_scope:h})});return this};bO.undrag=function(b,c,d){var e=ck.length;while(e--)ck[e].el==this&&(ck[e].move==b&&ck[e].end==d)&&ck.splice(e++,1);!ck.length&&a.unmousemove(cl).unmouseup(cm)};k.circle=function(a,b,c){return bP(this,a||0,b||0,c||0)};k.rect=function(a,b,c,d,e){return bQ(this,a||0,b||0,c||0,d||0,e||0)};k.ellipse=function(a,b,c,d){return bR(this,a||0,b||0,c||0,d||0)};k.path=function(b){b&&!a.is(b,F)&&!a.is(b[0],G)&&(b+=p);return bH(a.format[m](a,arguments),this)};k.image=function(a,b,c,d,e){return bS(this,a||"about:blank",b||0,c||0,d||0,e||0)};k.text=function(a,b,c){return bT(this,a||0,b||0,r(c))};k.set=function(a){arguments[w]>1&&(a=Array[e].splice.call(arguments,0,arguments[w]));return new cC(a)};k.setSize=bU;k.top=k.bottom=null;k.raphael=a;function co(){return this.x+q+this.y}bO.resetScale=function(){if(this.removed)return this;this._.sx=1;this._.sy=1;this.attrs.scale="1 1"};bO.scale=function(a,b,c,d){if(this.removed)return this;if(a==null&&b==null)return{x:this._.sx,y:this._.sy,toString:co};b=b||a;!(+b)&&(b=a);var e,f,g,h,i=this.attrs;if(a!=0){var j=this.getBBox(),k=j.x+j.width/2,l=j.y+j.height/2,m=B(a/this._.sx),o=B(b/this._.sy);c=+c||c==0?c:k;d=+d||d==0?d:l;var r=this._.sx>0,s=this._.sy>0,t=~(~(a/B(a))),u=~(~(b/B(b))),x=m*t,y=o*u,z=this.node.style,A=c+B(k-c)*x*(k>c==r?1:-1),C=d+B(l-d)*y*(l>d==s?1:-1),D=a*t>b*u?o:m;switch(this.type){case"rect":case"image":var E=i.width*m,F=i.height*o;this.attr({height:F,r:i.r*D,width:E,x:A-E/2,y:C-F/2});break;case"circle":case"ellipse":this.attr({rx:i.rx*m,ry:i.ry*o,r:i.r*D,cx:A,cy:C});break;case"text":this.attr({x:A,y:C});break;case"path":var G=bp(i.path),H=true,I=r?x:m,J=s?y:o;for(var K=0,L=G[w];K<L;K++){var M=G[K],N=V.call(M[0]);{if(N=="M"&&H)continue;H=false}if(N=="A"){M[G[K][w]-2]*=I;M[G[K][w]-1]*=J;M[1]*=m;M[2]*=o;M[5]=+(t+u?!(!(+M[5])):!(+M[5]))}else if(N=="H")for(var O=1,P=M[w];O<P;O++)M[O]*=I;else if(N=="V")for(O=1,P=M[w];O<P;O++)M[O]*=J;else for(O=1,P=M[w];O<P;O++)M[O]*=O%2?I:J}var Q=bn(G);e=A-Q.x-Q.width/2;f=C-Q.y-Q.height/2;G[0][1]+=e;G[0][2]+=f;this.attr({path:G});break}if(this.type in{text:1,image:1}&&(t!=1||u!=1))if(this.transformations){this.transformations[2]="scale("[n](t,",",u,")");this.node[R]("transform",this.transformations[v](q));e=t==-1?-i.x-(E||0):i.x;f=u==-1?-i.y-(F||0):i.y;this.attr({x:e,y:f});i.fx=t-1;i.fy=u-1}else{this.node.filterMatrix=U+".Matrix(M11="[n](t,", M12=0, M21=0, M22=",u,", Dx=0, Dy=0, sizingmethod='auto expand', filtertype='bilinear')");z.filter=(this.node.filterMatrix||p)+(this.node.filterOpacity||p)}else if(this.transformations){this.transformations[2]=p;this.node[R]("transform",this.transformations[v](q));i.fx=0;i.fy=0}else{this.node.filterMatrix=p;z.filter=(this.node.filterMatrix||p)+(this.node.filterOpacity||p)}i.scale=[a,b,c,d][v](q);this._.sx=a;this._.sy=b}return this};bO.clone=function(){if(this.removed)return null;var a=this.attr();delete a.scale;delete a.translation;return this.paper[this.type]().attr(a)};var cp={},cq=function(b,c,d,e,f,g,h,i,j){var k=0,l=100,m=[b,c,d,e,f,g,h,i].join(),n=cp[m],o,p;!n&&(cp[m]=n={data:[]});n.timer&&clearTimeout(n.timer);n.timer=setTimeout(function(){delete cp[m]},2000);if(j!=null){var q=cq(b,c,d,e,f,g,h,i);l=~(~q)*10}for(var r=0;r<l+1;r++){if(n.data[j]>r)p=n.data[r*l];else{p=a.findDotsAtSegment(b,c,d,e,f,g,h,i,r/l);n.data[r]=p}r&&(k+=C(C(o.x-p.x,2)+C(o.y-p.y,2),0.5));if(j!=null&&k>=j)return p;o=p}if(j==null)return k},cr=function(b,c){return function(d,e,f){d=bw(d);var g,h,i,j,k="",l={},m,n=0;for(var o=0,p=d.length;o<p;o++){i=d[o];if(i[0]=="M"){g=+i[1];h=+i[2]}else{j=cq(g,h,i[1],i[2],i[3],i[4],i[5],i[6]);if(n+j>e){if(c&&!l.start){m=cq(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n);k+=["C",m.start.x,m.start.y,m.m.x,m.m.y,m.x,m.y];if(f)return k;l.start=k;k=["M",m.x,m.y+"C",m.n.x,m.n.y,m.end.x,m.end.y,i[5],i[6]][v]();n+=j;g=+i[5];h=+i[6];continue}if(!b&&!c){m=cq(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n);return{x:m.x,y:m.y,alpha:m.alpha}}}n+=j;g=+i[5];h=+i[6]}k+=i}l.end=k;m=b?n:c?l:a.findDotsAtSegment(g,h,i[1],i[2],i[3],i[4],i[5],i[6],1);m.alpha&&(m={x:m.x,y:m.y,alpha:m.alpha});return m}},cs=cr(1),ct=cr(),cu=cr(0,1);bO.getTotalLength=function(){if(this.type!="path")return;if(this.node.getTotalLength)return this.node.getTotalLength();return cs(this.attrs.path)};bO.getPointAtLength=function(a){if(this.type!="path")return;return ct(this.attrs.path,a)};bO.getSubpath=function(a,b){if(this.type!="path")return;if(B(this.getTotalLength()-b)<"1e-6")return cu(this.attrs.path,a).end;var c=cu(this.attrs.path,b,1);return a?cu(c,a).end:c};a.easing_formulas={linear:function(a){return a},"<":function(a){return C(a,3)},">":function(a){return C(a-1,3)+1},"<>":function(a){a=a*2;if(a<1)return C(a,3)/2;a-=2;return(C(a,3)+2)/2},backIn:function(a){var b=1.70158;return a*a*((b+1)*a-b)},backOut:function(a){a=a-1;var b=1.70158;return a*a*((b+1)*a+b)+1},elastic:function(a){if(a==0||a==1)return a;var b=0.3,c=b/4;return C(2,-10*a)*y.sin((a-c)*(2*D)/b)+1},bounce:function(a){var b=7.5625,c=2.75,d;if(a<1/c)d=b*a*a;else if(a<2/c){a-=1.5/c;d=b*a*a+0.75}else if(a<2.5/c){a-=2.25/c;d=b*a*a+0.9375}else{a-=2.625/c;d=b*a*a+0.984375}return d}};var cv=[],cw=function(){var b=+(new Date);for(var c=0;c<cv[w];c++){var d=cv[c];if(d.stop||d.el.removed)continue;var e=b-d.start,g=d.ms,h=d.easing,i=d.from,j=d.diff,k=d.to,l=d.t,m=d.el,n={},o;if(e<g){var r=h(e/g);for(var s in i)if(i[f](s)){switch(X[s]){case"along":o=r*g*j[s];k.back&&(o=k.len-o);var t=ct(k[s],o);m.translate(j.sx-j.x||0,j.sy-j.y||0);j.x=t.x;j.y=t.y;m.translate(t.x-j.sx,t.y-j.sy);k.rot&&m.rotate(j.r+t.alpha,t.x,t.y);break;case E:o=+i[s]+r*g*j[s];break;case"colour":o="rgb("+[cy(Q(i[s].r+r*g*j[s].r)),cy(Q(i[s].g+r*g*j[s].g)),cy(Q(i[s].b+r*g*j[s].b))][v](",")+")";break;case"path":o=[];for(var u=0,x=i[s][w];u<x;u++){o[u]=[i[s][u][0]];for(var y=1,z=i[s][u][w];y<z;y++)o[u][y]=+i[s][u][y]+r*g*j[s][u][y];o[u]=o[u][v](q)}o=o[v](q);break;case"csv":switch(s){case"translation":var A=r*g*j[s][0]-l.x,B=r*g*j[s][1]-l.y;l.x+=A;l.y+=B;o=A+q+B;break;case"rotation":o=+i[s][0]+r*g*j[s][0];i[s][1]&&(o+=","+i[s][1]+","+i[s][2]);break;case"scale":o=[+i[s][0]+r*g*j[s][0],+i[s][1]+r*g*j[s][1],2 in k[s]?k[s][2]:p,3 in k[s]?k[s][3]:p][v](q);break;case"clip-rect":o=[];u=4;while(u--)o[u]=+i[s][u]+r*g*j[s][u];break}break;default:var C=[].concat(i[s]);o=[];u=m.paper.customAttributes[s].length;while(u--)o[u]=+C[u]+r*g*j[s][u];break}n[s]=o}m.attr(n);m._run&&m._run.call(m)}else{if(k.along){t=ct(k.along,k.len*!k.back);m.translate(j.sx-(j.x||0)+t.x-j.sx,j.sy-(j.y||0)+t.y-j.sy);k.rot&&m.rotate(j.r+t.alpha,t.x,t.y)}(l.x||l.y)&&m.translate(-l.x,-l.y);k.scale&&(k.scale+=p);m.attr(k);cv.splice(c--,1)}}a.svg&&m&&m.paper&&m.paper.safari();cv[w]&&setTimeout(cw)},cx=function(b,c,d,e,f){var g=d-e;c.timeouts.push(setTimeout(function(){a.is(f,"function")&&f.call(c);c.animate(b,g,b.easing)},e))},cy=function(a){return z(A(a,255),0)},cz=function(a,b){if(a==null)return{x:this._.tx,y:this._.ty,toString:co};this._.tx+=+a;this._.ty+=+b;switch(this.type){case"circle":case"ellipse":this.attr({cx:+a+this.attrs.cx,cy:+b+this.attrs.cy});break;case"rect":case"image":case"text":this.attr({x:+a+this.attrs.x,y:+b+this.attrs.y});break;case"path":var c=bp(this.attrs.path);c[0][1]+=+a;c[0][2]+=+b;this.attr({path:c});break}return this};bO.animateWith=function(a,b,c,d,e){for(var f=0,g=cv.length;f<g;f++)cv[f].el.id==a.id&&(b.start=cv[f].start);return this.animate(b,c,d,e)};bO.animateAlong=cA();bO.animateAlongBack=cA(1);function cA(b){return function(c,d,e,f){var g={back:b};a.is(e,"function")?f=e:g.rot=e;c&&c.constructor==bN&&(c=c.attrs.path);c&&(g.along=c);return this.animate(g,d,f)}}function cB(a,b,c,d,e,f){var g=3*b,h=3*(d-b)-g,i=1-g-h,j=3*c,k=3*(e-c)-j,l=1-j-k;function m(a){return((i*a+h)*a+g)*a}function n(a,b){var c=o(a,b);return((l*c+k)*c+j)*c}function o(a,b){var c,d,e,f,j,k;for(e=a,k=0;k<8;k++){f=m(e)-a;if(B(f)<b)return e;j=(3*i*e+2*h)*e+g;if(B(j)<0.000001)break;e=e-f/j}c=0;d=1;e=a;if(e<c)return c;if(e>d)return d;while(c<d){f=m(e);if(B(f-a)<b)return e;a>f?c=e:d=e;e=(d-c)/2+c}return e}return n(a,1/(200*f))}bO.onAnimation=function(a){this._run=a||0;return this};bO.animate=function(c,d,e,g){var h=this;h.timeouts=h.timeouts||[];if(a.is(e,"function")||!e)g=e||null;if(h.removed){g&&g.call(h);return h}var i={},j={},k=false,l={};for(var m in c)if(c[f](m)){if(X[f](m)||h.paper.customAttributes[f](m)){k=true;i[m]=h.attr(m);i[m]==null&&(i[m]=W[m]);j[m]=c[m];switch(X[m]){case"along":var n=cs(c[m]),o=ct(c[m],n*!(!c.back)),p=h.getBBox();l[m]=n/d;l.tx=p.x;l.ty=p.y;l.sx=o.x;l.sy=o.y;j.rot=c.rot;j.back=c.back;j.len=n;c.rot&&(l.r=S(h.rotate())||0);break;case E:l[m]=(j[m]-i[m])/d;break;case"colour":i[m]=a.getRGB(i[m]);var q=a.getRGB(j[m]);l[m]={r:(q.r-i[m].r)/d,g:(q.g-i[m].g)/d,b:(q.b-i[m].b)/d};break;case"path":var t=bw(i[m],j[m]);i[m]=t[0];var u=t[1];l[m]=[];for(var v=0,x=i[m][w];v<x;v++){l[m][v]=[0];for(var y=1,z=i[m][v][w];y<z;y++)l[m][v][y]=(u[v][y]-i[m][v][y])/d}break;case"csv":var A=r(c[m])[s](b),B=r(i[m])[s](b);switch(m){case"translation":i[m]=[0,0];l[m]=[A[0]/d,A[1]/d];break;case"rotation":i[m]=B[1]==A[1]&&B[2]==A[2]?B:[0,A[1],A[2]];l[m]=[(A[0]-i[m][0])/d,0,0];break;case"scale":c[m]=A;i[m]=r(i[m])[s](b);l[m]=[(A[0]-i[m][0])/d,(A[1]-i[m][1])/d,0,0];break;case"clip-rect":i[m]=r(i[m])[s](b);l[m]=[];v=4;while(v--)l[m][v]=(A[v]-i[m][v])/d;break}j[m]=A;break;default:A=[].concat(c[m]);B=[].concat(i[m]);l[m]=[];v=h.paper.customAttributes[m][w];while(v--)l[m][v]=((A[v]||0)-(B[v]||0))/d;break}}}if(k){var G=a.easing_formulas[e];if(!G){G=r(e).match(P);if(G&&G[w]==5){var H=G;G=function(a){return cB(a,+H[1],+H[2],+H[3],+H[4],d)}}else G=function(a){return a}}cv.push({start:c.start||+(new Date),ms:d,easing:G,from:i,diff:l,to:j,el:h,t:{x:0,y:0}});a.is(g,"function")&&(h._ac=setTimeout(function(){g.call(h)},d));cv[w]==1&&setTimeout(cw)}else{var C=[],D;for(var F in c)if(c[f](F)&&Z.test(F)){m={value:c[F]};F=="from"&&(F=0);F=="to"&&(F=100);m.key=T(F,10);C.push(m)}C.sort(be);C[0].key&&C.unshift({key:0,value:h.attrs});for(v=0,x=C[w];v<x;v++)cx(C[v].value,h,d/100*C[v].key,d/100*(C[v-1]&&C[v-1].key||0),C[v-1]&&C[v-1].value.callback);D=C[C[w]-1].value.callback;D&&h.timeouts.push(setTimeout(function(){D.call(h)},d))}return this};bO.stop=function(){for(var a=0;a<cv.length;a++)cv[a].el.id==this.id&&cv.splice(a--,1);for(a=0,ii=this.timeouts&&this.timeouts.length;a<ii;a++)clearTimeout(this.timeouts[a]);this.timeouts=[];clearTimeout(this._ac);delete this._ac;return this};bO.translate=function(a,b){return this.attr({translation:a+" "+b})};bO[H]=function(){return"Raphaël’s object"};a.ae=cv;var cC=function(a){this.items=[];this[w]=0;this.type="set";if(a)for(var b=0,c=a[w];b<c;b++){if(a[b]&&(a[b].constructor==bN||a[b].constructor==cC)){this[this.items[w]]=this.items[this.items[w]]=a[b];this[w]++}}};cC[e][L]=function(){var a,b;for(var c=0,d=arguments[w];c<d;c++){a=arguments[c];if(a&&(a.constructor==bN||a.constructor==cC)){b=this.items[w];this[b]=this.items[b]=a;this[w]++}}return this};cC[e].pop=function(){delete this[this[w]--];return this.items.pop()};for(var cD in bO)bO[f](cD)&&(cC[e][cD]=(function(a){return function(){for(var b=0,c=this.items[w];b<c;b++)this.items[b][a][m](this.items[b],arguments);return this}})(cD));cC[e].attr=function(b,c){if(b&&a.is(b,G)&&a.is(b[0],"object"))for(var d=0,e=b[w];d<e;d++)this.items[d].attr(b[d]);else for(var f=0,g=this.items[w];f<g;f++)this.items[f].attr(b,c);return this};cC[e].animate=function(b,c,d,e){(a.is(d,"function")||!d)&&(e=d||null);var f=this.items[w],g=f,h,i=this,j;e&&(j=function(){!(--f)&&e.call(i)});d=a.is(d,F)?d:j;h=this.items[--g].animate(b,c,d,j);while(g--)this.items[g]&&!this.items[g].removed&&this.items[g].animateWith(h,b,c,d,j);return this};cC[e].insertAfter=function(a){var b=this.items[w];while(b--)this.items[b].insertAfter(a);return this};cC[e].getBBox=function(){var a=[],b=[],c=[],d=[];for(var e=this.items[w];e--;){var f=this.items[e].getBBox();a[L](f.x);b[L](f.y);c[L](f.x+f.width);d[L](f.y+f.height)}a=A[m](0,a);b=A[m](0,b);return{x:a,y:b,width:z[m](0,c)-a,height:z[m](0,d)-b}};cC[e].clone=function(a){a=new cC;for(var b=0,c=this.items[w];b<c;b++)a[L](this.items[b].clone());return a};a.registerFont=function(a){if(!a.face)return a;this.fonts=this.fonts||{};var b={w:a.w,face:{},glyphs:{}},c=a.face["font-family"];for(var d in a.face)a.face[f](d)&&(b.face[d]=a.face[d]);this.fonts[c]?this.fonts[c][L](b):this.fonts[c]=[b];if(!a.svg){b.face["units-per-em"]=T(a.face["units-per-em"],10);for(var e in a.glyphs)if(a.glyphs[f](e)){var g=a.glyphs[e];b.glyphs[e]={w:g.w,k:{},d:g.d&&"M"+g.d[Y](/[mlcxtrv]/g,function(a){return({l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"})[a]||"M"})+"z"};if(g.k)for(var h in g.k)g[f](h)&&(b.glyphs[e].k[h]=g.k[h])}}return a};k.getFont=function(b,c,d,e){e=e||"normal";d=d||"normal";c=+c||({normal:400,bold:700,lighter:300,bolder:800})[c]||400;if(!a.fonts)return;var g=a.fonts[b];if(!g){var h=new RegExp("(^|\\s)"+b[Y](/[^\w\d\s+!~.:_-]/g,p)+"(\\s|$)","i");for(var i in a.fonts)if(a.fonts[f](i)){if(h.test(i)){g=a.fonts[i];break}}}var j;if(g)for(var k=0,l=g[w];k<l;k++){j=g[k];if(j.face["font-weight"]==c&&(j.face["font-style"]==d||!j.face["font-style"])&&j.face["font-stretch"]==e)break}return j};k.print=function(c,d,e,f,g,h,i){h=h||"middle";i=z(A(i||0,1),-1);var j=this.set(),k=r(e)[s](p),l=0,m=p,n;a.is(f,e)&&(f=this.getFont(f));if(f){n=(g||16)/f.face["units-per-em"];var o=f.face.bbox.split(b),q=+o[0],t=+o[1]+(h=="baseline"?o[3]-o[1]+ +f.face.descent:(o[3]-o[1])/2);for(var u=0,v=k[w];u<v;u++){var x=u&&f.glyphs[k[u-1]]||{},y=f.glyphs[k[u]];l+=u?(x.w||f.w)+(x.k&&x.k[k[u]]||0)+f.w*i:0;y&&y.d&&j[L](this.path(y.d).attr({fill:"#000",stroke:"none",translation:[l,0]}))}j.scale(n,n,q,t).translate(c-q,d-t)}return j};a.format=function(b,c){var e=a.is(c,G)?[0][n](c):arguments;b&&a.is(b,F)&&e[w]-1&&(b=b[Y](d,function(a,b){return e[++b]==null?p:e[b]}));return b||p};a.ninja=function(){i.was?h.Raphael=i.is:delete Raphael;return a};a.el=bO;a.st=cC[e];i.was?h.Raphael=a:Raphael=a})();
Hilite = {
    /**
     * Element ID to be highlighted. If set, then only content inside this DOM
     * element will be highlighted, otherwise everything inside document.body
     * will be searched.
     */
    elementid: 'hl_content',
    
    /**
     * Whether we are matching an exact word. For example, searching for
     * "highlight" will only match "highlight" but not "highlighting" if exact
     * is set to true.
     */
    exact: false,

    /**
     * Maximum number of DOM nodes to test, before handing the control back to
     * the GUI thread. This prevents locking up the UI when parsing and
     * replacing inside a large document.
     */
    max_nodes: 1000,

    /**
     * Whether to automatically hilite a section of the HTML document, by
     * binding the "Hilite.hilite()" to window.onload() event. If this
     * attribute is set to false, you can still manually trigger the hilite by
     * calling Hilite.hilite() in Javascript after document has been fully
     * loaded.
     */
    onload: true,

    // 搜索参数
    searchKey: 'hl',

    /**
     * Name of the style to be used. Default to 'hilite'.
     */
    style_name: 'hilite',
    
    /**
     * Whether to use different style names for different search keywords by
     * appending a number starting from 1, i.e. hilite1, hilite2, etc.
     */
    style_name_suffix: true,

    /**
     * Set it to override the document.referrer string. Used for debugging
     * only.
     */
    debug_referrer: ''
};

Hilite.decodeReferrer = function(referrer){
    if(!referrer)return [];
    try{
        referrer = decodeURIComponent(referrer);
    }catch(e){}
    // referrer = referrer.split("=")[1];
    return referrer.split(" ");
};

Hilite.randomColor=function(){
    // var str = "123456789abcdef";
    // var t = "#ff";
    // for(j=0;j<4;j++){
    //     t = t+ str.charAt(Math.random()*str.length); 
    // }
    // return t;
    return '#d5c6b4';
};
Hilite.colors=[
    // "#fcc",
    // "#ff0",
    // "#f0f",
    // "#0ff",
    // "#A0FFFF",
    // "#FF9999"
    "#d5c6b4",
    "#d5c6b4",
    "#d5c6b4",
    "#d5c6b4",
    "#d5c6b4",
    "#d5c6b4"
];
Hilite.hiliteElement = function(elm, query) {
    if (!query || elm.childNodes.length == 0)
    return;

    var qre = new Array();
    for (var i = 0; i < query.length; i ++) {
        query[i] = query[i].toLowerCase();
        if (Hilite.exact)
            qre.push('\\b'+query[i]+'\\b');
        else
            qre.push(query[i]);
    }

    qre = new RegExp(qre.join("|"), "i");

    var stylemapper = {};
    for (var i = 0; i < query.length+1; i ++) {
        if (Hilite.style_name_suffix)
            if(i<4){
                stylemapper[query[i]] = Hilite.colors[i+1];//Hilite.style_name+(i+1);
            }else{
                stylemapper[query[i]] = Hilite.randomColor();
            }
        else
            stylemapper[query[i]] = Hilite.colors[0];//Hilite.style_name;
    }

    var textproc = function(node) {
        var match = qre.exec(node.data);
        if (match) {
            var val = match[0];
            var k = '';
            var node2 = node.splitText(match.index);
            var node3 = node2.splitText(val.length);
            var span = node.ownerDocument.createElement('i');
            node.parentNode.replaceChild(span, node2);
            //span.className = stylemapper[val.toLowerCase()];
            span.style.backgroundColor=stylemapper[val.toLowerCase()];
            span.appendChild(node2);
            return span;
        } else {
            return node;
        }
    };
    Hilite.walkElements(elm.childNodes[0], 1, textproc);
};
/**
 * Highlight a HTML document using keywords extracted from document.referrer.
 * This is the main function to be called to perform search engine highlight
 * on a document.
 *
 * Currently it would check for DOM element 'content', element 'container' and
 * then document.body in that order, so it only highlights appropriate section
 * on WordPress and Movable Type pages.
 */
Hilite.hilite = function() {
    // If 'debug_referrer' then we will use that as our referrer string
    // instead.
    
    // var q = location.search.substr(1).split("&")[0];//Hilite.debug_referrer ? Hilite.debug_referrer : document.referrer;
    var q = Hilite.get[Hilite.searchKey];
    if(q=="" || !q || q == "undefined" )return false;
    var e = null;
    q = Hilite.decodeReferrer(q);
    // if (q && ((Hilite.elementid && 
    //            (e = document.getElementById(Hilite.elementid))) || 
    //           (e = document.body)))
    // {
    // Hilite.hiliteElement(e, q);
    // }
    if (q && ((Hilite.elementid && 
        (e = document.getElementById(Hilite.elementid))))) {
        Hilite.hiliteElement(e, q);
    }
};

Hilite.get = (function(){
    var url = window.document.location.href.toString();
    var u = url.split("?");
    if(typeof(u[1]) == "string"){
        u = u[1].split("&");
        var get = {};
        for(var i in u){
            var j = u[i].split("=");
            get[j[0]] = j[1];
        }
        return get;
    } else {
        return {};
    }
})();

Hilite.walkElements = function(node, depth, textproc) {
    var skipre = /^(script|style|textarea)/i;
    var count = 0;
    while (node && depth > 0) {
        count ++;
        if (count >= Hilite.max_nodes) {
            var handler = function() {
                Hilite.walkElements(node, depth, textproc);
            };
            setTimeout(handler, 50);
            return;
        }
        if (node.nodeType == 1) { // ELEMENT_NODE
            if (!skipre.test(node.tagName) && node.childNodes.length > 0) {
                node = node.childNodes[0];
                depth ++;
                continue;
            }
        } else if (node.nodeType == 3) { // TEXT_NODE
            node = textproc(node);
        }

        if (node.nextSibling) {
            node = node.nextSibling;
        } else {
            while (depth > 0) {
                node = node.parentNode;
                depth --;
                if (node.nextSibling) {
                    node = node.nextSibling;
                    break;
                }
            }
        }
    }
};

// Trigger the highlight using the onload handler.
if (Hilite.onload) {
    if (window.attachEvent) {
        window.attachEvent('onload', Hilite.hilite);
    } else if (window.addEventListener) {
        window.addEventListener('load', Hilite.hilite, false);
    } else {

        var __onload = window.onload;
        window.onload = function() {
            Hilite.hilite();
            __onload();
        };
    }
};
/*! lazysizes - v4.0.0-rc1 */
!function(a,b){var c=b(a,a.document);a.lazySizes=c,"object"==typeof module&&module.exports&&(module.exports=c)}(window,function(a,b){"use strict";if(b.getElementsByClassName){var c,d,e=b.documentElement,f=a.Date,g=a.HTMLPictureElement,h="addEventListener",i="getAttribute",j=a[h],k=a.setTimeout,l=a.requestAnimationFrame||k,m=a.requestIdleCallback,n=/^picture$/i,o=["load","error","lazyincluded","_lazyloaded"],p={},q=Array.prototype.forEach,r=function(a,b){return p[b]||(p[b]=new RegExp("(\\s|^)"+b+"(\\s|$)")),p[b].test(a[i]("class")||"")&&p[b]},s=function(a,b){r(a,b)||a.setAttribute("class",(a[i]("class")||"").trim()+" "+b)},t=function(a,b){var c;(c=r(a,b))&&a.setAttribute("class",(a[i]("class")||"").replace(c," "))},u=function(a,b,c){var d=c?h:"removeEventListener";c&&u(a,b),o.forEach(function(c){a[d](c,b)})},v=function(a,d,e,f,g){var h=b.createEvent("CustomEvent");return e||(e={}),e.instance=c,h.initCustomEvent(d,!f,!g,e),a.dispatchEvent(h),h},w=function(b,c){var e;!g&&(e=a.picturefill||d.pf)?e({reevaluate:!0,elements:[b]}):c&&c.src&&(b.src=c.src)},x=function(a,b){return(getComputedStyle(a,null)||{})[b]},y=function(a,b,c){for(c=c||a.offsetWidth;c<d.minSize&&b&&!a._lazysizesWidth;)c=b.offsetWidth,b=b.parentNode;return c},z=function(){var a,c,d=[],e=[],f=d,g=function(){var b=f;for(f=d.length?e:d,a=!0,c=!1;b.length;)b.shift()();a=!1},h=function(d,e){a&&!e?d.apply(this,arguments):(f.push(d),c||(c=!0,(b.hidden?k:l)(g)))};return h._lsFlush=g,h}(),A=function(a,b){return b?function(){z(a)}:function(){var b=this,c=arguments;z(function(){a.apply(b,c)})}},B=function(a){var b,c=0,d=125,e=666,g=e,h=function(){b=!1,c=f.now(),a()},i=m?function(){m(h,{timeout:g}),g!==e&&(g=e)}:A(function(){k(h)},!0);return function(a){var e;(a=a===!0)&&(g=44),b||(b=!0,e=d-(f.now()-c),0>e&&(e=0),a||9>e&&m?i():k(i,e))}},C=function(a){var b,c,d=99,e=function(){b=null,a()},g=function(){var a=f.now()-c;d>a?k(g,d-a):(m||e)(e)};return function(){c=f.now(),b||(b=k(g,d))}},D=function(){var c,g,l,m,o,p,y,D,F,G,H,I,J,K,L,M=/^img$/i,N=/^iframe$/i,O="onscroll"in a&&!/glebot/.test(navigator.userAgent),P=0,Q=0,R=0,S=-1,T=function(a){R--,a&&a.target&&u(a.target,T),(!a||0>R||!a.target)&&(R=0)},U=function(a,c){var d,f=a,g="hidden"==x(b.body,"visibility")||"hidden"!=x(a,"visibility");for(F-=c,I+=c,G-=c,H+=c;g&&(f=f.offsetParent)&&f!=b.body&&f!=e;)g=(x(f,"opacity")||1)>0,g&&"visible"!=x(f,"overflow")&&(d=f.getBoundingClientRect(),g=H>d.left&&G<d.right&&I>d.top-1&&F<d.bottom+1);return g},V=function(){var a,f,h,j,k,m,n,p,q;if((o=d.loadMode)&&8>R&&(a=c.length)){f=0,S++,null==K&&("expand"in d||(d.expand=e.clientHeight>500&&e.clientWidth>500?500:370),J=d.expand,K=J*d.expFactor),K>Q&&1>R&&S>2&&o>2&&!b.hidden?(Q=K,S=0):Q=o>1&&S>1&&6>R?J:P;for(;a>f;f++)if(c[f]&&!c[f]._lazyRace)if(O)if((p=c[f][i]("data-expand"))&&(m=1*p)||(m=Q),q!==m&&(y=innerWidth+m*L,D=innerHeight+m,n=-1*m,q=m),h=c[f].getBoundingClientRect(),(I=h.bottom)>=n&&(F=h.top)<=D&&(H=h.right)>=n*L&&(G=h.left)<=y&&(I||H||G||F)&&(d.loadHidden||"hidden"!=x(c[f],"visibility"))&&(l&&3>R&&!p&&(3>o||4>S)||U(c[f],m))){if(ba(c[f]),k=!0,R>9)break}else!k&&l&&!j&&4>R&&4>S&&o>2&&(g[0]||d.preloadAfterLoad)&&(g[0]||!p&&(I||H||G||F||"auto"!=c[f][i](d.sizesAttr)))&&(j=g[0]||c[f]);else ba(c[f]);j&&!k&&ba(j)}},W=B(V),X=function(a){s(a.target,d.loadedClass),t(a.target,d.loadingClass),u(a.target,Z)},Y=A(X),Z=function(a){Y({target:a.target})},$=function(a,b){try{a.contentWindow.location.replace(b)}catch(c){a.src=b}},_=function(a){var b,c=a[i](d.srcsetAttr);(b=d.customMedia[a[i]("data-media")||a[i]("media")])&&a.setAttribute("media",b),c&&a.setAttribute("srcset",c)},aa=A(function(a,b,c,e,f){var g,h,j,l,o,p;(o=v(a,"lazybeforeunveil",b)).defaultPrevented||(e&&(c?s(a,d.autosizesClass):a.setAttribute("sizes",e)),h=a[i](d.srcsetAttr),g=a[i](d.srcAttr),f&&(j=a.parentNode,l=j&&n.test(j.nodeName||"")),p=b.firesLoad||"src"in a&&(h||g||l),o={target:a},p&&(u(a,T,!0),clearTimeout(m),m=k(T,2500),s(a,d.loadingClass),u(a,Z,!0)),l&&q.call(j.getElementsByTagName("source"),_),h?a.setAttribute("srcset",h):g&&!l&&(N.test(a.nodeName)?$(a,g):a.src=g),f&&(h||l)&&w(a,{src:g})),a._lazyRace&&delete a._lazyRace,t(a,d.lazyClass),z(function(){(!p||a.complete&&a.naturalWidth>1)&&(p?T(o):R--,X(o))},!0)}),ba=function(a){var b,c=M.test(a.nodeName),e=c&&(a[i](d.sizesAttr)||a[i]("sizes")),f="auto"==e;(!f&&l||!c||!a.src&&!a.srcset||a.complete||r(a,d.errorClass))&&(b=v(a,"lazyunveilread").detail,f&&E.updateElem(a,!0,a.offsetWidth),a._lazyRace=!0,R++,aa(a,b,f,e,c))},ca=function(){if(!l){if(f.now()-p<999)return void k(ca,999);var a=C(function(){d.loadMode=3,W()});l=!0,d.loadMode=3,W(),j("scroll",function(){3==d.loadMode&&(d.loadMode=2),a()},!0)}};return{_:function(){p=f.now(),c=b.getElementsByClassName(d.lazyClass),g=b.getElementsByClassName(d.lazyClass+" "+d.preloadClass),L=d.hFac,j("scroll",W,!0),j("resize",W,!0),a.MutationObserver?new MutationObserver(W).observe(e,{childList:!0,subtree:!0,attributes:!0}):(e[h]("DOMNodeInserted",W,!0),e[h]("DOMAttrModified",W,!0),setInterval(W,999)),j("hashchange",W,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(a){b[h](a,W,!0)}),/d$|^c/.test(b.readyState)?ca():(j("load",ca),b[h]("DOMContentLoaded",W),k(ca,2e4)),c.length?(V(),z._lsFlush()):W()},checkElems:W,unveil:ba}}(),E=function(){var a,c=A(function(a,b,c,d){var e,f,g;if(a._lazysizesWidth=d,d+="px",a.setAttribute("sizes",d),n.test(b.nodeName||""))for(e=b.getElementsByTagName("source"),f=0,g=e.length;g>f;f++)e[f].setAttribute("sizes",d);c.detail.dataAttr||w(a,c.detail)}),e=function(a,b,d){var e,f=a.parentNode;f&&(d=y(a,f,d),e=v(a,"lazybeforesizes",{width:d,dataAttr:!!b}),e.defaultPrevented||(d=e.detail.width,d&&d!==a._lazysizesWidth&&c(a,f,e,d)))},f=function(){var b,c=a.length;if(c)for(b=0;c>b;b++)e(a[b])},g=C(f);return{_:function(){a=b.getElementsByClassName(d.autosizesClass),j("resize",g)},checkElems:g,updateElem:e}}(),F=function(){F.i||(F.i=!0,E._(),D._())};return function(){var b,c={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0};d=a.lazySizesConfig||a.lazysizesConfig||{};for(b in c)b in d||(d[b]=c[b]);a.lazySizesConfig=d,k(function(){d.init&&F()})}(),c={cfg:d,autoSizer:E,loader:D,init:F,uP:w,aC:s,rC:t,hC:r,fire:v,gW:y,rAF:z}}});
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD (Register as an anonymous module)
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var pluses = /\+/g;

    function encode(s) {
        return config.raw ? s : encodeURIComponent(s);
    }

    function decode(s) {
        return config.raw ? s : decodeURIComponent(s);
    }

    function stringifyCookieValue(value) {
        return encode(config.json ? JSON.stringify(value) : String(value));
    }

    function parseCookieValue(s) {
        if (s.indexOf('"') === 0) {
            // This is a quoted cookie as according to RFC2068, unescape...
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }

        try {
            // Replace server-side written pluses with spaces.
            // If we can't decode the cookie, ignore it, it's unusable.
            // If we can't parse the cookie, ignore it, it's unusable.
            s = decodeURIComponent(s.replace(pluses, ' '));
            return config.json ? JSON.parse(s) : s;
        } catch(e) {}
    }

    function read(s, converter) {
        var value = config.raw ? s : parseCookieValue(s);
        return $.isFunction(converter) ? converter(value) : value;
    }

    var config = $.cookie = function (key, value, options) {

        // Write

        if (arguments.length > 1 && !$.isFunction(value)) {
            options = $.extend({}, config.defaults, options);

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
            }

            return (document.cookie = [
                encode(key), '=', stringifyCookieValue(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path    ? '; path=' + options.path : '',
                options.domain  ? '; domain=' + options.domain : '',
                options.secure  ? '; secure' : ''
            ].join(''));
        }

        // Read

        var result = key ? undefined : {},
            // To prevent the for loop in the first place assign an empty array
            // in case there are no cookies at all. Also prevents odd result when
            // calling $.cookie().
            cookies = document.cookie ? document.cookie.split('; ') : [],
            i = 0,
            l = cookies.length;

        for (; i < l; i++) {
            var parts = cookies[i].split('='),
                name = decode(parts.shift()),
                cookie = parts.join('=');

            if (key === name) {
                // If second argument (value) is a function it's a converter...
                result = read(cookie, value);
                break;
            }

            // Prevent storing a cookie that we couldn't decode.
            if (!key && (cookie = read(cookie)) !== undefined) {
                result[name] = cookie;
            }
        }

        return result;
    };

    config.defaults = {};

    $.removeCookie = function (key, options) {
        // Must not alter options, thus extending a fresh object...
        $.cookie(key, '', $.extend({}, options, { expires: -1 }));
        return !$.cookie(key);
    };

}));

var QRCode;!function(){function a(a){this.mode=c.MODE_8BIT_BYTE,this.data=a,this.parsedData=[];for(var b=[],d=0,e=this.data.length;e>d;d++){var f=this.data.charCodeAt(d);f>65536?(b[0]=240|(1835008&f)>>>18,b[1]=128|(258048&f)>>>12,b[2]=128|(4032&f)>>>6,b[3]=128|63&f):f>2048?(b[0]=224|(61440&f)>>>12,b[1]=128|(4032&f)>>>6,b[2]=128|63&f):f>128?(b[0]=192|(1984&f)>>>6,b[1]=128|63&f):b[0]=f,this.parsedData=this.parsedData.concat(b)}this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function b(a,b){this.typeNumber=a,this.errorCorrectLevel=b,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}function i(a,b){if(void 0==a.length)throw new Error(a.length+"/"+b);for(var c=0;c<a.length&&0==a[c];)c++;this.num=new Array(a.length-c+b);for(var d=0;d<a.length-c;d++)this.num[d]=a[d+c]}function j(a,b){this.totalCount=a,this.dataCount=b}function k(){this.buffer=[],this.length=0}function m(){return"undefined"!=typeof CanvasRenderingContext2D}function n(){var a=!1,b=navigator.userAgent;return/android/i.test(b)&&(a=!0,aMat=b.toString().match(/android ([0-9]\.[0-9])/i),aMat&&aMat[1]&&(a=parseFloat(aMat[1]))),a}function r(a,b){for(var c=1,e=s(a),f=0,g=l.length;g>=f;f++){var h=0;switch(b){case d.L:h=l[f][0];break;case d.M:h=l[f][1];break;case d.Q:h=l[f][2];break;case d.H:h=l[f][3]}if(h>=e)break;c++}if(c>l.length)throw new Error("Too long data");return c}function s(a){var b=encodeURI(a).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return b.length+(b.length!=a?3:0)}a.prototype={getLength:function(){return this.parsedData.length},write:function(a){for(var b=0,c=this.parsedData.length;c>b;b++)a.put(this.parsedData[b],8)}},b.prototype={addData:function(b){var c=new a(b);this.dataList.push(c),this.dataCache=null},isDark:function(a,b){if(0>a||this.moduleCount<=a||0>b||this.moduleCount<=b)throw new Error(a+","+b);return this.modules[a][b]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(a,c){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var d=0;d<this.moduleCount;d++){this.modules[d]=new Array(this.moduleCount);for(var e=0;e<this.moduleCount;e++)this.modules[d][e]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(a,c),this.typeNumber>=7&&this.setupTypeNumber(a),null==this.dataCache&&(this.dataCache=b.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,c)},setupPositionProbePattern:function(a,b){for(var c=-1;7>=c;c++)if(!(-1>=a+c||this.moduleCount<=a+c))for(var d=-1;7>=d;d++)-1>=b+d||this.moduleCount<=b+d||(this.modules[a+c][b+d]=c>=0&&6>=c&&(0==d||6==d)||d>=0&&6>=d&&(0==c||6==c)||c>=2&&4>=c&&d>=2&&4>=d?!0:!1)},getBestMaskPattern:function(){for(var a=0,b=0,c=0;8>c;c++){this.makeImpl(!0,c);var d=f.getLostPoint(this);(0==c||a>d)&&(a=d,b=c)}return b},createMovieClip:function(a,b,c){var d=a.createEmptyMovieClip(b,c),e=1;this.make();for(var f=0;f<this.modules.length;f++)for(var g=f*e,h=0;h<this.modules[f].length;h++){var i=h*e,j=this.modules[f][h];j&&(d.beginFill(0,100),d.moveTo(i,g),d.lineTo(i+e,g),d.lineTo(i+e,g+e),d.lineTo(i,g+e),d.endFill())}return d},setupTimingPattern:function(){for(var a=8;a<this.moduleCount-8;a++)null==this.modules[a][6]&&(this.modules[a][6]=0==a%2);for(var b=8;b<this.moduleCount-8;b++)null==this.modules[6][b]&&(this.modules[6][b]=0==b%2)},setupPositionAdjustPattern:function(){for(var a=f.getPatternPosition(this.typeNumber),b=0;b<a.length;b++)for(var c=0;c<a.length;c++){var d=a[b],e=a[c];if(null==this.modules[d][e])for(var g=-2;2>=g;g++)for(var h=-2;2>=h;h++)this.modules[d+g][e+h]=-2==g||2==g||-2==h||2==h||0==g&&0==h?!0:!1}},setupTypeNumber:function(a){for(var b=f.getBCHTypeNumber(this.typeNumber),c=0;18>c;c++){var d=!a&&1==(1&b>>c);this.modules[Math.floor(c/3)][c%3+this.moduleCount-8-3]=d}for(var c=0;18>c;c++){var d=!a&&1==(1&b>>c);this.modules[c%3+this.moduleCount-8-3][Math.floor(c/3)]=d}},setupTypeInfo:function(a,b){for(var c=this.errorCorrectLevel<<3|b,d=f.getBCHTypeInfo(c),e=0;15>e;e++){var g=!a&&1==(1&d>>e);6>e?this.modules[e][8]=g:8>e?this.modules[e+1][8]=g:this.modules[this.moduleCount-15+e][8]=g}for(var e=0;15>e;e++){var g=!a&&1==(1&d>>e);8>e?this.modules[8][this.moduleCount-e-1]=g:9>e?this.modules[8][15-e-1+1]=g:this.modules[8][15-e-1]=g}this.modules[this.moduleCount-8][8]=!a},mapData:function(a,b){for(var c=-1,d=this.moduleCount-1,e=7,g=0,h=this.moduleCount-1;h>0;h-=2)for(6==h&&h--;;){for(var i=0;2>i;i++)if(null==this.modules[d][h-i]){var j=!1;g<a.length&&(j=1==(1&a[g]>>>e));var k=f.getMask(b,d,h-i);k&&(j=!j),this.modules[d][h-i]=j,e--,-1==e&&(g++,e=7)}if(d+=c,0>d||this.moduleCount<=d){d-=c,c=-c;break}}}},b.PAD0=236,b.PAD1=17,b.createData=function(a,c,d){for(var e=j.getRSBlocks(a,c),g=new k,h=0;h<d.length;h++){var i=d[h];g.put(i.mode,4),g.put(i.getLength(),f.getLengthInBits(i.mode,a)),i.write(g)}for(var l=0,h=0;h<e.length;h++)l+=e[h].dataCount;if(g.getLengthInBits()>8*l)throw new Error("code length overflow. ("+g.getLengthInBits()+">"+8*l+")");for(g.getLengthInBits()+4<=8*l&&g.put(0,4);0!=g.getLengthInBits()%8;)g.putBit(!1);for(;;){if(g.getLengthInBits()>=8*l)break;if(g.put(b.PAD0,8),g.getLengthInBits()>=8*l)break;g.put(b.PAD1,8)}return b.createBytes(g,e)},b.createBytes=function(a,b){for(var c=0,d=0,e=0,g=new Array(b.length),h=new Array(b.length),j=0;j<b.length;j++){var k=b[j].dataCount,l=b[j].totalCount-k;d=Math.max(d,k),e=Math.max(e,l),g[j]=new Array(k);for(var m=0;m<g[j].length;m++)g[j][m]=255&a.buffer[m+c];c+=k;var n=f.getErrorCorrectPolynomial(l),o=new i(g[j],n.getLength()-1),p=o.mod(n);h[j]=new Array(n.getLength()-1);for(var m=0;m<h[j].length;m++){var q=m+p.getLength()-h[j].length;h[j][m]=q>=0?p.get(q):0}}for(var r=0,m=0;m<b.length;m++)r+=b[m].totalCount;for(var s=new Array(r),t=0,m=0;d>m;m++)for(var j=0;j<b.length;j++)m<g[j].length&&(s[t++]=g[j][m]);for(var m=0;e>m;m++)for(var j=0;j<b.length;j++)m<h[j].length&&(s[t++]=h[j][m]);return s};for(var c={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},d={L:1,M:0,Q:3,H:2},e={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},f={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(a){for(var b=a<<10;f.getBCHDigit(b)-f.getBCHDigit(f.G15)>=0;)b^=f.G15<<f.getBCHDigit(b)-f.getBCHDigit(f.G15);return(a<<10|b)^f.G15_MASK},getBCHTypeNumber:function(a){for(var b=a<<12;f.getBCHDigit(b)-f.getBCHDigit(f.G18)>=0;)b^=f.G18<<f.getBCHDigit(b)-f.getBCHDigit(f.G18);return a<<12|b},getBCHDigit:function(a){for(var b=0;0!=a;)b++,a>>>=1;return b},getPatternPosition:function(a){return f.PATTERN_POSITION_TABLE[a-1]},getMask:function(a,b,c){switch(a){case e.PATTERN000:return 0==(b+c)%2;case e.PATTERN001:return 0==b%2;case e.PATTERN010:return 0==c%3;case e.PATTERN011:return 0==(b+c)%3;case e.PATTERN100:return 0==(Math.floor(b/2)+Math.floor(c/3))%2;case e.PATTERN101:return 0==b*c%2+b*c%3;case e.PATTERN110:return 0==(b*c%2+b*c%3)%2;case e.PATTERN111:return 0==(b*c%3+(b+c)%2)%2;default:throw new Error("bad maskPattern:"+a)}},getErrorCorrectPolynomial:function(a){for(var b=new i([1],0),c=0;a>c;c++)b=b.multiply(new i([1,g.gexp(c)],0));return b},getLengthInBits:function(a,b){if(b>=1&&10>b)switch(a){case c.MODE_NUMBER:return 10;case c.MODE_ALPHA_NUM:return 9;case c.MODE_8BIT_BYTE:return 8;case c.MODE_KANJI:return 8;default:throw new Error("mode:"+a)}else if(27>b)switch(a){case c.MODE_NUMBER:return 12;case c.MODE_ALPHA_NUM:return 11;case c.MODE_8BIT_BYTE:return 16;case c.MODE_KANJI:return 10;default:throw new Error("mode:"+a)}else{if(!(41>b))throw new Error("type:"+b);switch(a){case c.MODE_NUMBER:return 14;case c.MODE_ALPHA_NUM:return 13;case c.MODE_8BIT_BYTE:return 16;case c.MODE_KANJI:return 12;default:throw new Error("mode:"+a)}}},getLostPoint:function(a){for(var b=a.getModuleCount(),c=0,d=0;b>d;d++)for(var e=0;b>e;e++){for(var f=0,g=a.isDark(d,e),h=-1;1>=h;h++)if(!(0>d+h||d+h>=b))for(var i=-1;1>=i;i++)0>e+i||e+i>=b||(0!=h||0!=i)&&g==a.isDark(d+h,e+i)&&f++;f>5&&(c+=3+f-5)}for(var d=0;b-1>d;d++)for(var e=0;b-1>e;e++){var j=0;a.isDark(d,e)&&j++,a.isDark(d+1,e)&&j++,a.isDark(d,e+1)&&j++,a.isDark(d+1,e+1)&&j++,(0==j||4==j)&&(c+=3)}for(var d=0;b>d;d++)for(var e=0;b-6>e;e++)a.isDark(d,e)&&!a.isDark(d,e+1)&&a.isDark(d,e+2)&&a.isDark(d,e+3)&&a.isDark(d,e+4)&&!a.isDark(d,e+5)&&a.isDark(d,e+6)&&(c+=40);for(var e=0;b>e;e++)for(var d=0;b-6>d;d++)a.isDark(d,e)&&!a.isDark(d+1,e)&&a.isDark(d+2,e)&&a.isDark(d+3,e)&&a.isDark(d+4,e)&&!a.isDark(d+5,e)&&a.isDark(d+6,e)&&(c+=40);for(var k=0,e=0;b>e;e++)for(var d=0;b>d;d++)a.isDark(d,e)&&k++;var l=Math.abs(100*k/b/b-50)/5;return c+=10*l}},g={glog:function(a){if(1>a)throw new Error("glog("+a+")");return g.LOG_TABLE[a]},gexp:function(a){for(;0>a;)a+=255;for(;a>=256;)a-=255;return g.EXP_TABLE[a]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},h=0;8>h;h++)g.EXP_TABLE[h]=1<<h;for(var h=8;256>h;h++)g.EXP_TABLE[h]=g.EXP_TABLE[h-4]^g.EXP_TABLE[h-5]^g.EXP_TABLE[h-6]^g.EXP_TABLE[h-8];for(var h=0;255>h;h++)g.LOG_TABLE[g.EXP_TABLE[h]]=h;i.prototype={get:function(a){return this.num[a]},getLength:function(){return this.num.length},multiply:function(a){for(var b=new Array(this.getLength()+a.getLength()-1),c=0;c<this.getLength();c++)for(var d=0;d<a.getLength();d++)b[c+d]^=g.gexp(g.glog(this.get(c))+g.glog(a.get(d)));return new i(b,0)},mod:function(a){if(this.getLength()-a.getLength()<0)return this;for(var b=g.glog(this.get(0))-g.glog(a.get(0)),c=new Array(this.getLength()),d=0;d<this.getLength();d++)c[d]=this.get(d);for(var d=0;d<a.getLength();d++)c[d]^=g.gexp(g.glog(a.get(d))+b);return new i(c,0).mod(a)}},j.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],j.getRSBlocks=function(a,b){var c=j.getRsBlockTable(a,b);if(void 0==c)throw new Error("bad rs block @ typeNumber:"+a+"/errorCorrectLevel:"+b);for(var d=c.length/3,e=[],f=0;d>f;f++)for(var g=c[3*f+0],h=c[3*f+1],i=c[3*f+2],k=0;g>k;k++)e.push(new j(h,i));return e},j.getRsBlockTable=function(a,b){switch(b){case d.L:return j.RS_BLOCK_TABLE[4*(a-1)+0];case d.M:return j.RS_BLOCK_TABLE[4*(a-1)+1];case d.Q:return j.RS_BLOCK_TABLE[4*(a-1)+2];case d.H:return j.RS_BLOCK_TABLE[4*(a-1)+3];default:return void 0}},k.prototype={get:function(a){var b=Math.floor(a/8);return 1==(1&this.buffer[b]>>>7-a%8)},put:function(a,b){for(var c=0;b>c;c++)this.putBit(1==(1&a>>>b-c-1))},getLengthInBits:function(){return this.length},putBit:function(a){var b=Math.floor(this.length/8);this.buffer.length<=b&&this.buffer.push(0),a&&(this.buffer[b]|=128>>>this.length%8),this.length++}};var l=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]],o=function(){var a=function(a,b){this._el=a,this._htOption=b};return a.prototype.draw=function(a){function g(a,b){var c=document.createElementNS("http://www.w3.org/2000/svg",a);for(var d in b)b.hasOwnProperty(d)&&c.setAttribute(d,b[d]);return c}var b=this._htOption,c=this._el,d=a.getModuleCount();Math.floor(b.width/d),Math.floor(b.height/d),this.clear();var h=g("svg",{viewBox:"0 0 "+String(d)+" "+String(d),width:"100%",height:"100%",fill:b.colorLight});h.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),c.appendChild(h),h.appendChild(g("rect",{fill:b.colorDark,width:"1",height:"1",id:"template"}));for(var i=0;d>i;i++)for(var j=0;d>j;j++)if(a.isDark(i,j)){var k=g("use",{x:String(i),y:String(j)});k.setAttributeNS("http://www.w3.org/1999/xlink","href","#template"),h.appendChild(k)}},a.prototype.clear=function(){for(;this._el.hasChildNodes();)this._el.removeChild(this._el.lastChild)},a}(),p="svg"===document.documentElement.tagName.toLowerCase(),q=p?o:m()?function(){function a(){this._elImage.src=this._elCanvas.toDataURL("image/png"),this._elImage.style.display="block",this._elCanvas.style.display="none"}function d(a,b){var c=this;if(c._fFail=b,c._fSuccess=a,null===c._bSupportDataURI){var d=document.createElement("img"),e=function(){c._bSupportDataURI=!1,c._fFail&&_fFail.call(c)},f=function(){c._bSupportDataURI=!0,c._fSuccess&&c._fSuccess.call(c)};return d.onabort=e,d.onerror=e,d.onload=f,d.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",void 0}c._bSupportDataURI===!0&&c._fSuccess?c._fSuccess.call(c):c._bSupportDataURI===!1&&c._fFail&&c._fFail.call(c)}if(this._android&&this._android<=2.1){var b=1/window.devicePixelRatio,c=CanvasRenderingContext2D.prototype.drawImage;CanvasRenderingContext2D.prototype.drawImage=function(a,d,e,f,g,h,i,j){if("nodeName"in a&&/img/i.test(a.nodeName))for(var l=arguments.length-1;l>=1;l--)arguments[l]=arguments[l]*b;else"undefined"==typeof j&&(arguments[1]*=b,arguments[2]*=b,arguments[3]*=b,arguments[4]*=b);c.apply(this,arguments)}}var e=function(a,b){this._bIsPainted=!1,this._android=n(),this._htOption=b,this._elCanvas=document.createElement("canvas"),this._elCanvas.width=b.width,this._elCanvas.height=b.height,a.appendChild(this._elCanvas),this._el=a,this._oContext=this._elCanvas.getContext("2d"),this._bIsPainted=!1,this._elImage=document.createElement("img"),this._elImage.style.display="none",this._el.appendChild(this._elImage),this._bSupportDataURI=null};return e.prototype.draw=function(a){var b=this._elImage,c=this._oContext,d=this._htOption,e=a.getModuleCount(),f=d.width/e,g=d.height/e,h=Math.round(f),i=Math.round(g);b.style.display="none",this.clear();for(var j=0;e>j;j++)for(var k=0;e>k;k++){var l=a.isDark(j,k),m=k*f,n=j*g;c.strokeStyle=l?d.colorDark:d.colorLight,c.lineWidth=1,c.fillStyle=l?d.colorDark:d.colorLight,c.fillRect(m,n,f,g),c.strokeRect(Math.floor(m)+.5,Math.floor(n)+.5,h,i),c.strokeRect(Math.ceil(m)-.5,Math.ceil(n)-.5,h,i)}this._bIsPainted=!0},e.prototype.makeImage=function(){this._bIsPainted&&d.call(this,a)},e.prototype.isPainted=function(){return this._bIsPainted},e.prototype.clear=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height),this._bIsPainted=!1},e.prototype.round=function(a){return a?Math.floor(1e3*a)/1e3:a},e}():function(){var a=function(a,b){this._el=a,this._htOption=b};return a.prototype.draw=function(a){for(var b=this._htOption,c=this._el,d=a.getModuleCount(),e=Math.floor(b.width/d),f=Math.floor(b.height/d),g=['<table style="border:0;border-collapse:collapse;">'],h=0;d>h;h++){g.push("<tr>");for(var i=0;d>i;i++)g.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'+e+"px;height:"+f+"px;background-color:"+(a.isDark(h,i)?b.colorDark:b.colorLight)+';"></td>');g.push("</tr>")}g.push("</table>"),c.innerHTML=g.join("");var j=c.childNodes[0],k=(b.width-j.offsetWidth)/2,l=(b.height-j.offsetHeight)/2;k>0&&l>0&&(j.style.margin=l+"px "+k+"px")},a.prototype.clear=function(){this._el.innerHTML=""},a}();QRCode=function(a,b){if(this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:d.H},"string"==typeof b&&(b={text:b}),b)for(var c in b)this._htOption[c]=b[c];"string"==typeof a&&(a=document.getElementById(a)),this._android=n(),this._el=a,this._oQRCode=null,this._oDrawing=new q(this._el,this._htOption),this._htOption.text&&this.makeCode(this._htOption.text)},QRCode.prototype.makeCode=function(a){this._oQRCode=new b(r(a,this._htOption.correctLevel),this._htOption.correctLevel),this._oQRCode.addData(a),this._oQRCode.make(),this._oDrawing.draw(this._oQRCode),this.makeImage()},QRCode.prototype.makeImage=function(){"function"==typeof this._oDrawing.makeImage&&(!this._android||this._android>=3)&&this._oDrawing.makeImage()},QRCode.prototype.clear=function(){this._oDrawing.clear()},QRCode.CorrectLevel=d}();
/**
 * 分享
 * 依赖: qrcode.min.js
 * @desc 针对 '.share-box' 下 a[href="#"] 的元素启用
 * 支持平台
 * 国内：微信-wx, 新浪微博-wb, QQ好友-qq, QQ空间-qz
 * 国外：Linkedin-linkedin, facebook-facebook, twitter-twitter, googleplus-googleplus, tumblr-tumblr, pinterest-pinterest
 * @param {String} <data-url> 分享的链接，默认当前页
 * @param {String} <data-title> 分享的标题，默认页面title
 * @param {String} <data-image> 分享的图片，默认检索到当前页面第一张图片
 * @param {String} <data-desc> 分享的描述，默认为空
 */

 $(function(){
    var firstImg = $('img').length > 0 ? $('img')[0].src : '';
    
    $('.share-box').each(function () {
      var $this = $(this),
        intface = {
          wb: 'http://service.weibo.com/share/share.php?url={{URL}}&title={{TITLE}}&pic={{IMAGE}}',
          qq: 'http://connect.qq.com/widget/shareqq/index.html?url={{URL}}&title={{TITLE}}&desc={{DESCRIPTION}}&summary=&pics={{IMAGE}}',
          qz: 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={{URL}}&title={{TITLE}}&summary={{DESCRIPTION}}&pics={{IMAGE}}&desc=&site=',
          tumblr: 'https://www.tumblr.com/widgets/share/tool?shareSource=legacy&canonicalUrl=&url={{URL}}&title={{TITLE}}',
          twitter: 'https://twitter.com/intent/tweet?text={{TITLE}}&url={{URL}}',
          linkedin: 'http://www.linkedin.com/shareArticle?mini=true&ro=true&title={{TITLE}}&url={{URL}}&summary={{DESCRIPTION}}&armin=armin',
          facebook: 'https://www.facebook.com/sharer/sharer.php?s=100&p[title]={{TITLE}}p[summary]={{DESCRIPTION}}&p[url]={{URL}}&p[images]={{IMAGE}}',
          pinterest: 'https://www.pinterest.com/pin/create/button/?url={{URL}}&description={{DESCRIPTION}}&media={{IMAGE}}',
          googleplus: 'https://plus.google.com/share?url={{URL}}&t={{TITLE}}'
        },
        def = {
          url: $this.data('url') || location.href,
          title: $this.data('title') || document.title,
          image: $this.data('image') || firstImg,
          description: $this.data('desc') || $('meta[name="description"]').attr('content'),
        },
        temp = {};
      
      for (var key in intface){
        temp[key] = intface[key].replace(/{{([A-Z]*)}}/g, function (match, parm) {
          var _key = parm.toLowerCase();
          
          if (def[_key]) {
            return encodeURIComponent(def[_key]);
          } else {
            return '';
          }
        });          
      }
      
      $this.find('a[href="#"]').each(function () {
        var _this = $(this);
  
        if (_this.hasClass('icon-wx')) {
          _this.attr('href', 'javascript:void(0);');
          new QRCode(_this.find('.code')[0], { text: def.url });
        } else {
          for (var k in temp) { 
            if (_this.hasClass('icon-' + k)) {
              _this.attr('href', temp[k]);
              _this.attr('target', '_blank');
              continue;
            }
          }
        }
      });
    });
    
  });
!function(a,b){if(!b.__SV){var c,d,e,f;window.dplus=b,b._i=[],b.init=function(a,c,d){function g(a,b){var c=b.split(".");2==c.length&&(a=a[c[0]],b=c[1]),a[b]=function(){a.push([b].concat(Array.prototype.slice.call(arguments,0)))}}var h=b;for("undefined"!=typeof d?h=b[d]=[]:d="dplus",h.people=h.people||[],h.toString=function(a){var b="dplus";return"dplus"!==d&&(b+="."+d),a||(b+=" (stub)"),b},h.people.toString=function(){return h.toString(1)+".people (stub)"},e="disable track track_links track_forms register unregister get_property identify clear set_config get_config get_distinct_id track_pageview register_once track_with_tag time_event people.set people.unset people.delete_user".split(" "),f=0;f<e.length;f++)g(h,e[f]);b._i.push([a,c,d])},b.__SV=1.1,c=a.createElement("script"),c.type="text/javascript",c.charset="utf-8",c.async=!0,c.src="http://w.cnzz.com/dplus.php?id=1261553859",d=a.getElementsByTagName("script")[0],d.parentNode.insertBefore(c,d)}}(document,window.dplus||[]),dplus.init("1261553859");
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    /**
     * default settings
     *
     * @author Zongmin Lei<leizongmin@gmail.com>
     */
    
    var FilterCSS = require("cssfilter").FilterCSS;
    var getDefaultCSSWhiteList = require("cssfilter").getDefaultWhiteList;
    var _ = require("./util");
    
    function getDefaultWhiteList() {
      return {
        a: ["target", "href", "title"],
        abbr: ["title"],
        address: [],
        area: ["shape", "coords", "href", "alt"],
        article: [],
        aside: [],
        audio: [
          "autoplay",
          "controls",
          "crossorigin",
          "loop",
          "muted",
          "preload",
          "src",
        ],
        b: [],
        bdi: ["dir"],
        bdo: ["dir"],
        big: [],
        blockquote: ["cite"],
        br: [],
        caption: [],
        center: [],
        cite: [],
        code: [],
        col: ["align", "valign", "span", "width"],
        colgroup: ["align", "valign", "span", "width"],
        dd: [],
        del: ["datetime"],
        details: ["open"],
        div: [],
        dl: [],
        dt: [],
        em: [],
        figcaption: [],
        figure: [],
        font: ["color", "size", "face"],
        footer: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        header: [],
        hr: [],
        i: [],
        img: ["src", "alt", "title", "width", "height"],
        ins: ["datetime"],
        li: [],
        mark: [],
        nav: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        section: [],
        small: [],
        span: [],
        sub: [],
        summary: [],
        sup: [],
        strong: [],
        strike: [],
        table: ["width", "border", "align", "valign"],
        tbody: ["align", "valign"],
        td: ["width", "rowspan", "colspan", "align", "valign"],
        tfoot: ["align", "valign"],
        th: ["width", "rowspan", "colspan", "align", "valign"],
        thead: ["align", "valign"],
        tr: ["rowspan", "align", "valign"],
        tt: [],
        u: [],
        ul: [],
        video: [
          "autoplay",
          "controls",
          "crossorigin",
          "loop",
          "muted",
          "playsinline",
          "poster",
          "preload",
          "src",
          "height",
          "width",
        ],
      };
    }
    
    var defaultCSSFilter = new FilterCSS();
    
    /**
     * default onTag function
     *
     * @param {String} tag
     * @param {String} html
     * @param {Object} options
     * @return {String}
     */
    function onTag(tag, html, options) {
      // do nothing
    }
    
    /**
     * default onIgnoreTag function
     *
     * @param {String} tag
     * @param {String} html
     * @param {Object} options
     * @return {String}
     */
    function onIgnoreTag(tag, html, options) {
      // do nothing
    }
    
    /**
     * default onTagAttr function
     *
     * @param {String} tag
     * @param {String} name
     * @param {String} value
     * @return {String}
     */
    function onTagAttr(tag, name, value) {
      // do nothing
    }
    
    /**
     * default onIgnoreTagAttr function
     *
     * @param {String} tag
     * @param {String} name
     * @param {String} value
     * @return {String}
     */
    function onIgnoreTagAttr(tag, name, value) {
      // do nothing
    }
    
    /**
     * default escapeHtml function
     *
     * @param {String} html
     */
    function escapeHtml(html) {
      return html.replace(REGEXP_LT, "&lt;").replace(REGEXP_GT, "&gt;");
    }
    
    /**
     * default safeAttrValue function
     *
     * @param {String} tag
     * @param {String} name
     * @param {String} value
     * @param {Object} cssFilter
     * @return {String}
     */
    function safeAttrValue(tag, name, value, cssFilter) {
      // unescape attribute value firstly
      value = friendlyAttrValue(value);
    
      if (name === "href" || name === "src") {
        // filter `href` and `src` attribute
        // only allow the value that starts with `http://` | `https://` | `mailto:` | `/` | `#`
        value = _.trim(value);
        if (value === "#") return "#";
        if (
          !(
            value.substr(0, 7) === "http://" ||
            value.substr(0, 8) === "https://" ||
            value.substr(0, 7) === "mailto:" ||
            value.substr(0, 4) === "tel:" ||
            value.substr(0, 11) === "data:image/" ||
            value.substr(0, 6) === "ftp://" ||
            value.substr(0, 2) === "./" ||
            value.substr(0, 3) === "../" ||
            value[0] === "#" ||
            value[0] === "/"
          )
        ) {
          return "";
        }
      } else if (name === "background") {
        // filter `background` attribute (maybe no use)
        // `javascript:`
        REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
        if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
          return "";
        }
      } else if (name === "style") {
        // `expression()`
        REGEXP_DEFAULT_ON_TAG_ATTR_7.lastIndex = 0;
        if (REGEXP_DEFAULT_ON_TAG_ATTR_7.test(value)) {
          return "";
        }
        // `url()`
        REGEXP_DEFAULT_ON_TAG_ATTR_8.lastIndex = 0;
        if (REGEXP_DEFAULT_ON_TAG_ATTR_8.test(value)) {
          REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
          if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
            return "";
          }
        }
        if (cssFilter !== false) {
          cssFilter = cssFilter || defaultCSSFilter;
          value = cssFilter.process(value);
        }
      }
    
      // escape `<>"` before returns
      value = escapeAttrValue(value);
      return value;
    }
    
    // RegExp list
    var REGEXP_LT = /</g;
    var REGEXP_GT = />/g;
    var REGEXP_QUOTE = /"/g;
    var REGEXP_QUOTE_2 = /&quot;/g;
    var REGEXP_ATTR_VALUE_1 = /&#([a-zA-Z0-9]*);?/gim;
    var REGEXP_ATTR_VALUE_COLON = /&colon;?/gim;
    var REGEXP_ATTR_VALUE_NEWLINE = /&newline;?/gim;
    var REGEXP_DEFAULT_ON_TAG_ATTR_3 = /\/\*|\*\//gm;
    var REGEXP_DEFAULT_ON_TAG_ATTR_4 =
      /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi;
    var REGEXP_DEFAULT_ON_TAG_ATTR_5 = /^[\s"'`]*(d\s*a\s*t\s*a\s*)\:/gi;
    var REGEXP_DEFAULT_ON_TAG_ATTR_6 = /^[\s"'`]*(d\s*a\s*t\s*a\s*)\:\s*image\//gi;
    var REGEXP_DEFAULT_ON_TAG_ATTR_7 =
      /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi;
    var REGEXP_DEFAULT_ON_TAG_ATTR_8 = /u\s*r\s*l\s*\(.*/gi;
    
    /**
     * escape double quote
     *
     * @param {String} str
     * @return {String} str
     */
    function escapeQuote(str) {
      return str.replace(REGEXP_QUOTE, "&quot;");
    }
    
    /**
     * unescape double quote
     *
     * @param {String} str
     * @return {String} str
     */
    function unescapeQuote(str) {
      return str.replace(REGEXP_QUOTE_2, '"');
    }
    
    /**
     * escape html entities
     *
     * @param {String} str
     * @return {String}
     */
    function escapeHtmlEntities(str) {
      return str.replace(REGEXP_ATTR_VALUE_1, function replaceUnicode(str, code) {
        return code[0] === "x" || code[0] === "X"
          ? String.fromCharCode(parseInt(code.substr(1), 16))
          : String.fromCharCode(parseInt(code, 10));
      });
    }
    
    /**
     * escape html5 new danger entities
     *
     * @param {String} str
     * @return {String}
     */
    function escapeDangerHtml5Entities(str) {
      return str
        .replace(REGEXP_ATTR_VALUE_COLON, ":")
        .replace(REGEXP_ATTR_VALUE_NEWLINE, " ");
    }
    
    /**
     * clear nonprintable characters
     *
     * @param {String} str
     * @return {String}
     */
    function clearNonPrintableCharacter(str) {
      var str2 = "";
      for (var i = 0, len = str.length; i < len; i++) {
        str2 += str.charCodeAt(i) < 32 ? " " : str.charAt(i);
      }
      return _.trim(str2);
    }
    
    /**
     * get friendly attribute value
     *
     * @param {String} str
     * @return {String}
     */
    function friendlyAttrValue(str) {
      str = unescapeQuote(str);
      str = escapeHtmlEntities(str);
      str = escapeDangerHtml5Entities(str);
      str = clearNonPrintableCharacter(str);
      return str;
    }
    
    /**
     * unescape attribute value
     *
     * @param {String} str
     * @return {String}
     */
    function escapeAttrValue(str) {
      str = escapeQuote(str);
      str = escapeHtml(str);
      return str;
    }
    
    /**
     * `onIgnoreTag` function for removing all the tags that are not in whitelist
     */
    function onIgnoreTagStripAll() {
      return "";
    }
    
    /**
     * remove tag body
     * specify a `tags` list, if the tag is not in the `tags` list then process by the specify function (optional)
     *
     * @param {array} tags
     * @param {function} next
     */
    function StripTagBody(tags, next) {
      if (typeof next !== "function") {
        next = function () {};
      }
    
      var isRemoveAllTag = !Array.isArray(tags);
      function isRemoveTag(tag) {
        if (isRemoveAllTag) return true;
        return _.indexOf(tags, tag) !== -1;
      }
    
      var removeList = [];
      var posStart = false;
    
      return {
        onIgnoreTag: function (tag, html, options) {
          if (isRemoveTag(tag)) {
            if (options.isClosing) {
              var ret = "[/removed]";
              var end = options.position + ret.length;
              removeList.push([
                posStart !== false ? posStart : options.position,
                end,
              ]);
              posStart = false;
              return ret;
            } else {
              if (!posStart) {
                posStart = options.position;
              }
              return "[removed]";
            }
          } else {
            return next(tag, html, options);
          }
        },
        remove: function (html) {
          var rethtml = "";
          var lastPos = 0;
          _.forEach(removeList, function (pos) {
            rethtml += html.slice(lastPos, pos[0]);
            lastPos = pos[1];
          });
          rethtml += html.slice(lastPos);
          return rethtml;
        },
      };
    }
    
    /**
     * remove html comments
     *
     * @param {String} html
     * @return {String}
     */
    function stripCommentTag(html) {
      var retHtml = "";
      var lastPos = 0;
      while (lastPos < html.length) {
        var i = html.indexOf("<!--", lastPos);
        if (i === -1) {
          retHtml += html.slice(lastPos);
          break;
        }
        retHtml += html.slice(lastPos, i);
        var j = html.indexOf("-->", i);
        if (j === -1) {
          break;
        }
        lastPos = j + 3;
      }
      return retHtml;
    }
    
    /**
     * remove invisible characters
     *
     * @param {String} html
     * @return {String}
     */
    function stripBlankChar(html) {
      var chars = html.split("");
      chars = chars.filter(function (char) {
        var c = char.charCodeAt(0);
        if (c === 127) return false;
        if (c <= 31) {
          if (c === 10 || c === 13) return true;
          return false;
        }
        return true;
      });
      return chars.join("");
    }
    
    exports.whiteList = getDefaultWhiteList();
    exports.getDefaultWhiteList = getDefaultWhiteList;
    exports.onTag = onTag;
    exports.onIgnoreTag = onIgnoreTag;
    exports.onTagAttr = onTagAttr;
    exports.onIgnoreTagAttr = onIgnoreTagAttr;
    exports.safeAttrValue = safeAttrValue;
    exports.escapeHtml = escapeHtml;
    exports.escapeQuote = escapeQuote;
    exports.unescapeQuote = unescapeQuote;
    exports.escapeHtmlEntities = escapeHtmlEntities;
    exports.escapeDangerHtml5Entities = escapeDangerHtml5Entities;
    exports.clearNonPrintableCharacter = clearNonPrintableCharacter;
    exports.friendlyAttrValue = friendlyAttrValue;
    exports.escapeAttrValue = escapeAttrValue;
    exports.onIgnoreTagStripAll = onIgnoreTagStripAll;
    exports.StripTagBody = StripTagBody;
    exports.stripCommentTag = stripCommentTag;
    exports.stripBlankChar = stripBlankChar;
    exports.cssFilter = defaultCSSFilter;
    exports.getDefaultCSSWhiteList = getDefaultCSSWhiteList;
    
    },{"./util":4,"cssfilter":8}],2:[function(require,module,exports){
    /**
     * xss
     *
     * @author Zongmin Lei<leizongmin@gmail.com>
     */
    
    var DEFAULT = require("./default");
    var parser = require("./parser");
    var FilterXSS = require("./xss");
    
    /**
     * filter xss function
     *
     * @param {String} html
     * @param {Object} options { whiteList, onTag, onTagAttr, onIgnoreTag, onIgnoreTagAttr, safeAttrValue, escapeHtml }
     * @return {String}
     */
    function filterXSS(html, options) {
      var xss = new FilterXSS(options);
      return xss.process(html);
    }
    
    exports = module.exports = filterXSS;
    exports.filterXSS = filterXSS;
    exports.FilterXSS = FilterXSS;
    for (var i in DEFAULT) exports[i] = DEFAULT[i];
    for (var i in parser) exports[i] = parser[i];
    
    // using `xss` on the browser, output `filterXSS` to the globals
    if (typeof window !== "undefined") {
      window.filterXSS = module.exports;
    }
    
    // using `xss` on the WebWorker, output `filterXSS` to the globals
    function isWorkerEnv() {
      return (
        typeof self !== "undefined" &&
        typeof DedicatedWorkerGlobalScope !== "undefined" &&
        self instanceof DedicatedWorkerGlobalScope
      );
    }
    if (isWorkerEnv()) {
      self.filterXSS = module.exports;
    }
    
    },{"./default":1,"./parser":3,"./xss":5}],3:[function(require,module,exports){
    /**
     * Simple HTML Parser
     *
     * @author Zongmin Lei<leizongmin@gmail.com>
     */
    
    var _ = require("./util");
    
    /**
     * get tag name
     *
     * @param {String} html e.g. '<a hef="#">'
     * @return {String}
     */
    function getTagName(html) {
      var i = _.spaceIndex(html);
      if (i === -1) {
        var tagName = html.slice(1, -1);
      } else {
        var tagName = html.slice(1, i + 1);
      }
      tagName = _.trim(tagName).toLowerCase();
      if (tagName.slice(0, 1) === "/") tagName = tagName.slice(1);
      if (tagName.slice(-1) === "/") tagName = tagName.slice(0, -1);
      return tagName;
    }
    
    /**
     * is close tag?
     *
     * @param {String} html 如：'<a hef="#">'
     * @return {Boolean}
     */
    function isClosing(html) {
      return html.slice(0, 2) === "</";
    }
    
    /**
     * parse input html and returns processed html
     *
     * @param {String} html
     * @param {Function} onTag e.g. function (sourcePosition, position, tag, html, isClosing)
     * @param {Function} escapeHtml
     * @return {String}
     */
    function parseTag(html, onTag, escapeHtml) {
      "use strict";
    
      var rethtml = "";
      var lastPos = 0;
      var tagStart = false;
      var quoteStart = false;
      var currentPos = 0;
      var len = html.length;
      var currentTagName = "";
      var currentHtml = "";
    
      chariterator: for (currentPos = 0; currentPos < len; currentPos++) {
        var c = html.charAt(currentPos);
        if (tagStart === false) {
          if (c === "<") {
            tagStart = currentPos;
            continue;
          }
        } else {
          if (quoteStart === false) {
            if (c === "<") {
              rethtml += escapeHtml(html.slice(lastPos, currentPos));
              tagStart = currentPos;
              lastPos = currentPos;
              continue;
            }
            if (c === ">") {
              rethtml += escapeHtml(html.slice(lastPos, tagStart));
              currentHtml = html.slice(tagStart, currentPos + 1);
              currentTagName = getTagName(currentHtml);
              rethtml += onTag(
                tagStart,
                rethtml.length,
                currentTagName,
                currentHtml,
                isClosing(currentHtml)
              );
              lastPos = currentPos + 1;
              tagStart = false;
              continue;
            }
            if (c === '"' || c === "'") {
              var i = 1;
              var ic = html.charAt(currentPos - i);
    
              while (ic.trim() === "" || ic === "=") {
                if (ic === "=") {
                  quoteStart = c;
                  continue chariterator;
                }
                ic = html.charAt(currentPos - ++i);
              }
            }
          } else {
            if (c === quoteStart) {
              quoteStart = false;
              continue;
            }
          }
        }
      }
      if (lastPos < html.length) {
        rethtml += escapeHtml(html.substr(lastPos));
      }
    
      return rethtml;
    }
    
    var REGEXP_ILLEGAL_ATTR_NAME = /[^a-zA-Z0-9_:\.\-]/gim;
    
    /**
     * parse input attributes and returns processed attributes
     *
     * @param {String} html e.g. `href="#" target="_blank"`
     * @param {Function} onAttr e.g. `function (name, value)`
     * @return {String}
     */
    function parseAttr(html, onAttr) {
      "use strict";
    
      var lastPos = 0;
      var retAttrs = [];
      var tmpName = false;
      var len = html.length;
    
      function addAttr(name, value) {
        name = _.trim(name);
        name = name.replace(REGEXP_ILLEGAL_ATTR_NAME, "").toLowerCase();
        if (name.length < 1) return;
        var ret = onAttr(name, value || "");
        if (ret) retAttrs.push(ret);
      }
    
      // 逐个分析字符
      for (var i = 0; i < len; i++) {
        var c = html.charAt(i);
        var v, j;
        if (tmpName === false && c === "=") {
          tmpName = html.slice(lastPos, i);
          lastPos = i + 1;
          continue;
        }
        if (tmpName !== false) {
          if (
            i === lastPos &&
            (c === '"' || c === "'") &&
            html.charAt(i - 1) === "="
          ) {
            j = html.indexOf(c, i + 1);
            if (j === -1) {
              break;
            } else {
              v = _.trim(html.slice(lastPos + 1, j));
              addAttr(tmpName, v);
              tmpName = false;
              i = j;
              lastPos = i + 1;
              continue;
            }
          }
        }
        if (/\s|\n|\t/.test(c)) {
          html = html.replace(/\s|\n|\t/g, " ");
          if (tmpName === false) {
            j = findNextEqual(html, i);
            if (j === -1) {
              v = _.trim(html.slice(lastPos, i));
              addAttr(v);
              tmpName = false;
              lastPos = i + 1;
              continue;
            } else {
              i = j - 1;
              continue;
            }
          } else {
            j = findBeforeEqual(html, i - 1);
            if (j === -1) {
              v = _.trim(html.slice(lastPos, i));
              v = stripQuoteWrap(v);
              addAttr(tmpName, v);
              tmpName = false;
              lastPos = i + 1;
              continue;
            } else {
              continue;
            }
          }
        }
      }
    
      if (lastPos < html.length) {
        if (tmpName === false) {
          addAttr(html.slice(lastPos));
        } else {
          addAttr(tmpName, stripQuoteWrap(_.trim(html.slice(lastPos))));
        }
      }
    
      return _.trim(retAttrs.join(" "));
    }
    
    function findNextEqual(str, i) {
      for (; i < str.length; i++) {
        var c = str[i];
        if (c === " ") continue;
        if (c === "=") return i;
        return -1;
      }
    }
    
    function findBeforeEqual(str, i) {
      for (; i > 0; i--) {
        var c = str[i];
        if (c === " ") continue;
        if (c === "=") return i;
        return -1;
      }
    }
    
    function isQuoteWrapString(text) {
      if (
        (text[0] === '"' && text[text.length - 1] === '"') ||
        (text[0] === "'" && text[text.length - 1] === "'")
      ) {
        return true;
      } else {
        return false;
      }
    }
    
    function stripQuoteWrap(text) {
      if (isQuoteWrapString(text)) {
        return text.substr(1, text.length - 2);
      } else {
        return text;
      }
    }
    
    exports.parseTag = parseTag;
    exports.parseAttr = parseAttr;
    
    },{"./util":4}],4:[function(require,module,exports){
    module.exports = {
      indexOf: function (arr, item) {
        var i, j;
        if (Array.prototype.indexOf) {
          return arr.indexOf(item);
        }
        for (i = 0, j = arr.length; i < j; i++) {
          if (arr[i] === item) {
            return i;
          }
        }
        return -1;
      },
      forEach: function (arr, fn, scope) {
        var i, j;
        if (Array.prototype.forEach) {
          return arr.forEach(fn, scope);
        }
        for (i = 0, j = arr.length; i < j; i++) {
          fn.call(scope, arr[i], i, arr);
        }
      },
      trim: function (str) {
        if (String.prototype.trim) {
          return str.trim();
        }
        return str.replace(/(^\s*)|(\s*$)/g, "");
      },
      spaceIndex: function (str) {
        var reg = /\s|\n|\t/;
        var match = reg.exec(str);
        return match ? match.index : -1;
      },
    };
    
    },{}],5:[function(require,module,exports){
    /**
     * filter xss
     *
     * @author Zongmin Lei<leizongmin@gmail.com>
     */
    
    var FilterCSS = require("cssfilter").FilterCSS;
    var DEFAULT = require("./default");
    var parser = require("./parser");
    var parseTag = parser.parseTag;
    var parseAttr = parser.parseAttr;
    var _ = require("./util");
    
    /**
     * returns `true` if the input value is `undefined` or `null`
     *
     * @param {Object} obj
     * @return {Boolean}
     */
    function isNull(obj) {
      return obj === undefined || obj === null;
    }
    
    /**
     * get attributes for a tag
     *
     * @param {String} html
     * @return {Object}
     *   - {String} html
     *   - {Boolean} closing
     */
    function getAttrs(html) {
      var i = _.spaceIndex(html);
      if (i === -1) {
        return {
          html: "",
          closing: html[html.length - 2] === "/",
        };
      }
      html = _.trim(html.slice(i + 1, -1));
      var isClosing = html[html.length - 1] === "/";
      if (isClosing) html = _.trim(html.slice(0, -1));
      return {
        html: html,
        closing: isClosing,
      };
    }
    
    /**
     * shallow copy
     *
     * @param {Object} obj
     * @return {Object}
     */
    function shallowCopyObject(obj) {
      var ret = {};
      for (var i in obj) {
        ret[i] = obj[i];
      }
      return ret;
    }
    
    /**
     * FilterXSS class
     *
     * @param {Object} options
     *        whiteList, onTag, onTagAttr, onIgnoreTag,
     *        onIgnoreTagAttr, safeAttrValue, escapeHtml
     *        stripIgnoreTagBody, allowCommentTag, stripBlankChar
     *        css{whiteList, onAttr, onIgnoreAttr} `css=false` means don't use `cssfilter`
     */
    function FilterXSS(options) {
      options = shallowCopyObject(options || {});
    
      if (options.stripIgnoreTag) {
        if (options.onIgnoreTag) {
          console.error(
            'Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'
          );
        }
        options.onIgnoreTag = DEFAULT.onIgnoreTagStripAll;
      }
    
      options.whiteList = options.whiteList || DEFAULT.whiteList;
      options.onTag = options.onTag || DEFAULT.onTag;
      options.onTagAttr = options.onTagAttr || DEFAULT.onTagAttr;
      options.onIgnoreTag = options.onIgnoreTag || DEFAULT.onIgnoreTag;
      options.onIgnoreTagAttr = options.onIgnoreTagAttr || DEFAULT.onIgnoreTagAttr;
      options.safeAttrValue = options.safeAttrValue || DEFAULT.safeAttrValue;
      options.escapeHtml = options.escapeHtml || DEFAULT.escapeHtml;
      this.options = options;
    
      if (options.css === false) {
        this.cssFilter = false;
      } else {
        options.css = options.css || {};
        this.cssFilter = new FilterCSS(options.css);
      }
    }
    
    /**
     * start process and returns result
     *
     * @param {String} html
     * @return {String}
     */
    FilterXSS.prototype.process = function (html) {
      // compatible with the input
      html = html || "";
      html = html.toString();
      if (!html) return "";
    
      var me = this;
      var options = me.options;
      var whiteList = options.whiteList;
      var onTag = options.onTag;
      var onIgnoreTag = options.onIgnoreTag;
      var onTagAttr = options.onTagAttr;
      var onIgnoreTagAttr = options.onIgnoreTagAttr;
      var safeAttrValue = options.safeAttrValue;
      var escapeHtml = options.escapeHtml;
      var cssFilter = me.cssFilter;
    
      // remove invisible characters
      if (options.stripBlankChar) {
        html = DEFAULT.stripBlankChar(html);
      }
    
      // remove html comments
      if (!options.allowCommentTag) {
        html = DEFAULT.stripCommentTag(html);
      }
    
      // if enable stripIgnoreTagBody
      var stripIgnoreTagBody = false;
      if (options.stripIgnoreTagBody) {
        var stripIgnoreTagBody = DEFAULT.StripTagBody(
          options.stripIgnoreTagBody,
          onIgnoreTag
        );
        onIgnoreTag = stripIgnoreTagBody.onIgnoreTag;
      }
    
      var retHtml = parseTag(
        html,
        function (sourcePosition, position, tag, html, isClosing) {
          var info = {
            sourcePosition: sourcePosition,
            position: position,
            isClosing: isClosing,
            isWhite: whiteList.hasOwnProperty(tag),
          };
    
          // call `onTag()`
          var ret = onTag(tag, html, info);
          if (!isNull(ret)) return ret;
    
          if (info.isWhite) {
            if (info.isClosing) {
              return "</" + tag + ">";
            }
    
            var attrs = getAttrs(html);
            var whiteAttrList = whiteList[tag];
            var attrsHtml = parseAttr(attrs.html, function (name, value) {
              // call `onTagAttr()`
              var isWhiteAttr = _.indexOf(whiteAttrList, name) !== -1;
              var ret = onTagAttr(tag, name, value, isWhiteAttr);
              if (!isNull(ret)) return ret;
    
              if (isWhiteAttr) {
                // call `safeAttrValue()`
                value = safeAttrValue(tag, name, value, cssFilter);
                if (value) {
                  return name + '="' + value + '"';
                } else {
                  return name;
                }
              } else {
                // call `onIgnoreTagAttr()`
                var ret = onIgnoreTagAttr(tag, name, value, isWhiteAttr);
                if (!isNull(ret)) return ret;
                return;
              }
            });
    
            // build new tag html
            var html = "<" + tag;
            if (attrsHtml) html += " " + attrsHtml;
            if (attrs.closing) html += " /";
            html += ">";
            return html;
          } else {
            // call `onIgnoreTag()`
            var ret = onIgnoreTag(tag, html, info);
            if (!isNull(ret)) return ret;
            return escapeHtml(html);
          }
        },
        escapeHtml
      );
    
      // if enable stripIgnoreTagBody
      if (stripIgnoreTagBody) {
        retHtml = stripIgnoreTagBody.remove(retHtml);
      }
    
      return retHtml;
    };
    
    module.exports = FilterXSS;
    
    },{"./default":1,"./parser":3,"./util":4,"cssfilter":8}],6:[function(require,module,exports){
    /**
     * cssfilter
     *
     * @author 老雷<leizongmin@gmail.com>
     */
    
    var DEFAULT = require('./default');
    var parseStyle = require('./parser');
    var _ = require('./util');
    
    
    /**
     * 返回值是否为空
     *
     * @param {Object} obj
     * @return {Boolean}
     */
    function isNull (obj) {
      return (obj === undefined || obj === null);
    }
    
    /**
     * 浅拷贝对象
     *
     * @param {Object} obj
     * @return {Object}
     */
    function shallowCopyObject (obj) {
      var ret = {};
      for (var i in obj) {
        ret[i] = obj[i];
      }
      return ret;
    }
    
    /**
     * 创建CSS过滤器
     *
     * @param {Object} options
     *   - {Object} whiteList
     *   - {Function} onAttr
     *   - {Function} onIgnoreAttr
     *   - {Function} safeAttrValue
     */
    function FilterCSS (options) {
      options = shallowCopyObject(options || {});
      options.whiteList = options.whiteList || DEFAULT.whiteList;
      options.onAttr = options.onAttr || DEFAULT.onAttr;
      options.onIgnoreAttr = options.onIgnoreAttr || DEFAULT.onIgnoreAttr;
      options.safeAttrValue = options.safeAttrValue || DEFAULT.safeAttrValue;
      this.options = options;
    }
    
    FilterCSS.prototype.process = function (css) {
      // 兼容各种奇葩输入
      css = css || '';
      css = css.toString();
      if (!css) return '';
    
      var me = this;
      var options = me.options;
      var whiteList = options.whiteList;
      var onAttr = options.onAttr;
      var onIgnoreAttr = options.onIgnoreAttr;
      var safeAttrValue = options.safeAttrValue;
    
      var retCSS = parseStyle(css, function (sourcePosition, position, name, value, source) {
    
        var check = whiteList[name];
        var isWhite = false;
        if (check === true) isWhite = check;
        else if (typeof check === 'function') isWhite = check(value);
        else if (check instanceof RegExp) isWhite = check.test(value);
        if (isWhite !== true) isWhite = false;
    
        // 如果过滤后 value 为空则直接忽略
        value = safeAttrValue(name, value);
        if (!value) return;
    
        var opts = {
          position: position,
          sourcePosition: sourcePosition,
          source: source,
          isWhite: isWhite
        };
    
        if (isWhite) {
    
          var ret = onAttr(name, value, opts);
          if (isNull(ret)) {
            return name + ':' + value;
          } else {
            return ret;
          }
    
        } else {
    
          var ret = onIgnoreAttr(name, value, opts);
          if (!isNull(ret)) {
            return ret;
          }
    
        }
      });
    
      return retCSS;
    };
    
    
    module.exports = FilterCSS;
    
    },{"./default":7,"./parser":9,"./util":10}],7:[function(require,module,exports){
    /**
     * cssfilter
     *
     * @author 老雷<leizongmin@gmail.com>
     */
    
    function getDefaultWhiteList () {
      // 白名单值说明：
      // true: 允许该属性
      // Function: function (val) { } 返回true表示允许该属性，其他值均表示不允许
      // RegExp: regexp.test(val) 返回true表示允许该属性，其他值均表示不允许
      // 除上面列出的值外均表示不允许
      var whiteList = {};
    
      whiteList['align-content'] = false; // default: auto
      whiteList['align-items'] = false; // default: auto
      whiteList['align-self'] = false; // default: auto
      whiteList['alignment-adjust'] = false; // default: auto
      whiteList['alignment-baseline'] = false; // default: baseline
      whiteList['all'] = false; // default: depending on individual properties
      whiteList['anchor-point'] = false; // default: none
      whiteList['animation'] = false; // default: depending on individual properties
      whiteList['animation-delay'] = false; // default: 0
      whiteList['animation-direction'] = false; // default: normal
      whiteList['animation-duration'] = false; // default: 0
      whiteList['animation-fill-mode'] = false; // default: none
      whiteList['animation-iteration-count'] = false; // default: 1
      whiteList['animation-name'] = false; // default: none
      whiteList['animation-play-state'] = false; // default: running
      whiteList['animation-timing-function'] = false; // default: ease
      whiteList['azimuth'] = false; // default: center
      whiteList['backface-visibility'] = false; // default: visible
      whiteList['background'] = true; // default: depending on individual properties
      whiteList['background-attachment'] = true; // default: scroll
      whiteList['background-clip'] = true; // default: border-box
      whiteList['background-color'] = true; // default: transparent
      whiteList['background-image'] = true; // default: none
      whiteList['background-origin'] = true; // default: padding-box
      whiteList['background-position'] = true; // default: 0% 0%
      whiteList['background-repeat'] = true; // default: repeat
      whiteList['background-size'] = true; // default: auto
      whiteList['baseline-shift'] = false; // default: baseline
      whiteList['binding'] = false; // default: none
      whiteList['bleed'] = false; // default: 6pt
      whiteList['bookmark-label'] = false; // default: content()
      whiteList['bookmark-level'] = false; // default: none
      whiteList['bookmark-state'] = false; // default: open
      whiteList['border'] = true; // default: depending on individual properties
      whiteList['border-bottom'] = true; // default: depending on individual properties
      whiteList['border-bottom-color'] = true; // default: current color
      whiteList['border-bottom-left-radius'] = true; // default: 0
      whiteList['border-bottom-right-radius'] = true; // default: 0
      whiteList['border-bottom-style'] = true; // default: none
      whiteList['border-bottom-width'] = true; // default: medium
      whiteList['border-collapse'] = true; // default: separate
      whiteList['border-color'] = true; // default: depending on individual properties
      whiteList['border-image'] = true; // default: none
      whiteList['border-image-outset'] = true; // default: 0
      whiteList['border-image-repeat'] = true; // default: stretch
      whiteList['border-image-slice'] = true; // default: 100%
      whiteList['border-image-source'] = true; // default: none
      whiteList['border-image-width'] = true; // default: 1
      whiteList['border-left'] = true; // default: depending on individual properties
      whiteList['border-left-color'] = true; // default: current color
      whiteList['border-left-style'] = true; // default: none
      whiteList['border-left-width'] = true; // default: medium
      whiteList['border-radius'] = true; // default: 0
      whiteList['border-right'] = true; // default: depending on individual properties
      whiteList['border-right-color'] = true; // default: current color
      whiteList['border-right-style'] = true; // default: none
      whiteList['border-right-width'] = true; // default: medium
      whiteList['border-spacing'] = true; // default: 0
      whiteList['border-style'] = true; // default: depending on individual properties
      whiteList['border-top'] = true; // default: depending on individual properties
      whiteList['border-top-color'] = true; // default: current color
      whiteList['border-top-left-radius'] = true; // default: 0
      whiteList['border-top-right-radius'] = true; // default: 0
      whiteList['border-top-style'] = true; // default: none
      whiteList['border-top-width'] = true; // default: medium
      whiteList['border-width'] = true; // default: depending on individual properties
      whiteList['bottom'] = false; // default: auto
      whiteList['box-decoration-break'] = true; // default: slice
      whiteList['box-shadow'] = true; // default: none
      whiteList['box-sizing'] = true; // default: content-box
      whiteList['box-snap'] = true; // default: none
      whiteList['box-suppress'] = true; // default: show
      whiteList['break-after'] = true; // default: auto
      whiteList['break-before'] = true; // default: auto
      whiteList['break-inside'] = true; // default: auto
      whiteList['caption-side'] = false; // default: top
      whiteList['chains'] = false; // default: none
      whiteList['clear'] = true; // default: none
      whiteList['clip'] = false; // default: auto
      whiteList['clip-path'] = false; // default: none
      whiteList['clip-rule'] = false; // default: nonzero
      whiteList['color'] = true; // default: implementation dependent
      whiteList['color-interpolation-filters'] = true; // default: auto
      whiteList['column-count'] = false; // default: auto
      whiteList['column-fill'] = false; // default: balance
      whiteList['column-gap'] = false; // default: normal
      whiteList['column-rule'] = false; // default: depending on individual properties
      whiteList['column-rule-color'] = false; // default: current color
      whiteList['column-rule-style'] = false; // default: medium
      whiteList['column-rule-width'] = false; // default: medium
      whiteList['column-span'] = false; // default: none
      whiteList['column-width'] = false; // default: auto
      whiteList['columns'] = false; // default: depending on individual properties
      whiteList['contain'] = false; // default: none
      whiteList['content'] = false; // default: normal
      whiteList['counter-increment'] = false; // default: none
      whiteList['counter-reset'] = false; // default: none
      whiteList['counter-set'] = false; // default: none
      whiteList['crop'] = false; // default: auto
      whiteList['cue'] = false; // default: depending on individual properties
      whiteList['cue-after'] = false; // default: none
      whiteList['cue-before'] = false; // default: none
      whiteList['cursor'] = false; // default: auto
      whiteList['direction'] = false; // default: ltr
      whiteList['display'] = true; // default: depending on individual properties
      whiteList['display-inside'] = true; // default: auto
      whiteList['display-list'] = true; // default: none
      whiteList['display-outside'] = true; // default: inline-level
      whiteList['dominant-baseline'] = false; // default: auto
      whiteList['elevation'] = false; // default: level
      whiteList['empty-cells'] = false; // default: show
      whiteList['filter'] = false; // default: none
      whiteList['flex'] = false; // default: depending on individual properties
      whiteList['flex-basis'] = false; // default: auto
      whiteList['flex-direction'] = false; // default: row
      whiteList['flex-flow'] = false; // default: depending on individual properties
      whiteList['flex-grow'] = false; // default: 0
      whiteList['flex-shrink'] = false; // default: 1
      whiteList['flex-wrap'] = false; // default: nowrap
      whiteList['float'] = false; // default: none
      whiteList['float-offset'] = false; // default: 0 0
      whiteList['flood-color'] = false; // default: black
      whiteList['flood-opacity'] = false; // default: 1
      whiteList['flow-from'] = false; // default: none
      whiteList['flow-into'] = false; // default: none
      whiteList['font'] = true; // default: depending on individual properties
      whiteList['font-family'] = true; // default: implementation dependent
      whiteList['font-feature-settings'] = true; // default: normal
      whiteList['font-kerning'] = true; // default: auto
      whiteList['font-language-override'] = true; // default: normal
      whiteList['font-size'] = true; // default: medium
      whiteList['font-size-adjust'] = true; // default: none
      whiteList['font-stretch'] = true; // default: normal
      whiteList['font-style'] = true; // default: normal
      whiteList['font-synthesis'] = true; // default: weight style
      whiteList['font-variant'] = true; // default: normal
      whiteList['font-variant-alternates'] = true; // default: normal
      whiteList['font-variant-caps'] = true; // default: normal
      whiteList['font-variant-east-asian'] = true; // default: normal
      whiteList['font-variant-ligatures'] = true; // default: normal
      whiteList['font-variant-numeric'] = true; // default: normal
      whiteList['font-variant-position'] = true; // default: normal
      whiteList['font-weight'] = true; // default: normal
      whiteList['grid'] = false; // default: depending on individual properties
      whiteList['grid-area'] = false; // default: depending on individual properties
      whiteList['grid-auto-columns'] = false; // default: auto
      whiteList['grid-auto-flow'] = false; // default: none
      whiteList['grid-auto-rows'] = false; // default: auto
      whiteList['grid-column'] = false; // default: depending on individual properties
      whiteList['grid-column-end'] = false; // default: auto
      whiteList['grid-column-start'] = false; // default: auto
      whiteList['grid-row'] = false; // default: depending on individual properties
      whiteList['grid-row-end'] = false; // default: auto
      whiteList['grid-row-start'] = false; // default: auto
      whiteList['grid-template'] = false; // default: depending on individual properties
      whiteList['grid-template-areas'] = false; // default: none
      whiteList['grid-template-columns'] = false; // default: none
      whiteList['grid-template-rows'] = false; // default: none
      whiteList['hanging-punctuation'] = false; // default: none
      whiteList['height'] = true; // default: auto
      whiteList['hyphens'] = false; // default: manual
      whiteList['icon'] = false; // default: auto
      whiteList['image-orientation'] = false; // default: auto
      whiteList['image-resolution'] = false; // default: normal
      whiteList['ime-mode'] = false; // default: auto
      whiteList['initial-letters'] = false; // default: normal
      whiteList['inline-box-align'] = false; // default: last
      whiteList['justify-content'] = false; // default: auto
      whiteList['justify-items'] = false; // default: auto
      whiteList['justify-self'] = false; // default: auto
      whiteList['left'] = false; // default: auto
      whiteList['letter-spacing'] = true; // default: normal
      whiteList['lighting-color'] = true; // default: white
      whiteList['line-box-contain'] = false; // default: block inline replaced
      whiteList['line-break'] = false; // default: auto
      whiteList['line-grid'] = false; // default: match-parent
      whiteList['line-height'] = false; // default: normal
      whiteList['line-snap'] = false; // default: none
      whiteList['line-stacking'] = false; // default: depending on individual properties
      whiteList['line-stacking-ruby'] = false; // default: exclude-ruby
      whiteList['line-stacking-shift'] = false; // default: consider-shifts
      whiteList['line-stacking-strategy'] = false; // default: inline-line-height
      whiteList['list-style'] = true; // default: depending on individual properties
      whiteList['list-style-image'] = true; // default: none
      whiteList['list-style-position'] = true; // default: outside
      whiteList['list-style-type'] = true; // default: disc
      whiteList['margin'] = true; // default: depending on individual properties
      whiteList['margin-bottom'] = true; // default: 0
      whiteList['margin-left'] = true; // default: 0
      whiteList['margin-right'] = true; // default: 0
      whiteList['margin-top'] = true; // default: 0
      whiteList['marker-offset'] = false; // default: auto
      whiteList['marker-side'] = false; // default: list-item
      whiteList['marks'] = false; // default: none
      whiteList['mask'] = false; // default: border-box
      whiteList['mask-box'] = false; // default: see individual properties
      whiteList['mask-box-outset'] = false; // default: 0
      whiteList['mask-box-repeat'] = false; // default: stretch
      whiteList['mask-box-slice'] = false; // default: 0 fill
      whiteList['mask-box-source'] = false; // default: none
      whiteList['mask-box-width'] = false; // default: auto
      whiteList['mask-clip'] = false; // default: border-box
      whiteList['mask-image'] = false; // default: none
      whiteList['mask-origin'] = false; // default: border-box
      whiteList['mask-position'] = false; // default: center
      whiteList['mask-repeat'] = false; // default: no-repeat
      whiteList['mask-size'] = false; // default: border-box
      whiteList['mask-source-type'] = false; // default: auto
      whiteList['mask-type'] = false; // default: luminance
      whiteList['max-height'] = true; // default: none
      whiteList['max-lines'] = false; // default: none
      whiteList['max-width'] = true; // default: none
      whiteList['min-height'] = true; // default: 0
      whiteList['min-width'] = true; // default: 0
      whiteList['move-to'] = false; // default: normal
      whiteList['nav-down'] = false; // default: auto
      whiteList['nav-index'] = false; // default: auto
      whiteList['nav-left'] = false; // default: auto
      whiteList['nav-right'] = false; // default: auto
      whiteList['nav-up'] = false; // default: auto
      whiteList['object-fit'] = false; // default: fill
      whiteList['object-position'] = false; // default: 50% 50%
      whiteList['opacity'] = false; // default: 1
      whiteList['order'] = false; // default: 0
      whiteList['orphans'] = false; // default: 2
      whiteList['outline'] = false; // default: depending on individual properties
      whiteList['outline-color'] = false; // default: invert
      whiteList['outline-offset'] = false; // default: 0
      whiteList['outline-style'] = false; // default: none
      whiteList['outline-width'] = false; // default: medium
      whiteList['overflow'] = false; // default: depending on individual properties
      whiteList['overflow-wrap'] = false; // default: normal
      whiteList['overflow-x'] = false; // default: visible
      whiteList['overflow-y'] = false; // default: visible
      whiteList['padding'] = true; // default: depending on individual properties
      whiteList['padding-bottom'] = true; // default: 0
      whiteList['padding-left'] = true; // default: 0
      whiteList['padding-right'] = true; // default: 0
      whiteList['padding-top'] = true; // default: 0
      whiteList['page'] = false; // default: auto
      whiteList['page-break-after'] = false; // default: auto
      whiteList['page-break-before'] = false; // default: auto
      whiteList['page-break-inside'] = false; // default: auto
      whiteList['page-policy'] = false; // default: start
      whiteList['pause'] = false; // default: implementation dependent
      whiteList['pause-after'] = false; // default: implementation dependent
      whiteList['pause-before'] = false; // default: implementation dependent
      whiteList['perspective'] = false; // default: none
      whiteList['perspective-origin'] = false; // default: 50% 50%
      whiteList['pitch'] = false; // default: medium
      whiteList['pitch-range'] = false; // default: 50
      whiteList['play-during'] = false; // default: auto
      whiteList['position'] = false; // default: static
      whiteList['presentation-level'] = false; // default: 0
      whiteList['quotes'] = false; // default: text
      whiteList['region-fragment'] = false; // default: auto
      whiteList['resize'] = false; // default: none
      whiteList['rest'] = false; // default: depending on individual properties
      whiteList['rest-after'] = false; // default: none
      whiteList['rest-before'] = false; // default: none
      whiteList['richness'] = false; // default: 50
      whiteList['right'] = false; // default: auto
      whiteList['rotation'] = false; // default: 0
      whiteList['rotation-point'] = false; // default: 50% 50%
      whiteList['ruby-align'] = false; // default: auto
      whiteList['ruby-merge'] = false; // default: separate
      whiteList['ruby-position'] = false; // default: before
      whiteList['shape-image-threshold'] = false; // default: 0.0
      whiteList['shape-outside'] = false; // default: none
      whiteList['shape-margin'] = false; // default: 0
      whiteList['size'] = false; // default: auto
      whiteList['speak'] = false; // default: auto
      whiteList['speak-as'] = false; // default: normal
      whiteList['speak-header'] = false; // default: once
      whiteList['speak-numeral'] = false; // default: continuous
      whiteList['speak-punctuation'] = false; // default: none
      whiteList['speech-rate'] = false; // default: medium
      whiteList['stress'] = false; // default: 50
      whiteList['string-set'] = false; // default: none
      whiteList['tab-size'] = false; // default: 8
      whiteList['table-layout'] = false; // default: auto
      whiteList['text-align'] = true; // default: start
      whiteList['text-align-last'] = true; // default: auto
      whiteList['text-combine-upright'] = true; // default: none
      whiteList['text-decoration'] = true; // default: none
      whiteList['text-decoration-color'] = true; // default: currentColor
      whiteList['text-decoration-line'] = true; // default: none
      whiteList['text-decoration-skip'] = true; // default: objects
      whiteList['text-decoration-style'] = true; // default: solid
      whiteList['text-emphasis'] = true; // default: depending on individual properties
      whiteList['text-emphasis-color'] = true; // default: currentColor
      whiteList['text-emphasis-position'] = true; // default: over right
      whiteList['text-emphasis-style'] = true; // default: none
      whiteList['text-height'] = true; // default: auto
      whiteList['text-indent'] = true; // default: 0
      whiteList['text-justify'] = true; // default: auto
      whiteList['text-orientation'] = true; // default: mixed
      whiteList['text-overflow'] = true; // default: clip
      whiteList['text-shadow'] = true; // default: none
      whiteList['text-space-collapse'] = true; // default: collapse
      whiteList['text-transform'] = true; // default: none
      whiteList['text-underline-position'] = true; // default: auto
      whiteList['text-wrap'] = true; // default: normal
      whiteList['top'] = false; // default: auto
      whiteList['transform'] = false; // default: none
      whiteList['transform-origin'] = false; // default: 50% 50% 0
      whiteList['transform-style'] = false; // default: flat
      whiteList['transition'] = false; // default: depending on individual properties
      whiteList['transition-delay'] = false; // default: 0s
      whiteList['transition-duration'] = false; // default: 0s
      whiteList['transition-property'] = false; // default: all
      whiteList['transition-timing-function'] = false; // default: ease
      whiteList['unicode-bidi'] = false; // default: normal
      whiteList['vertical-align'] = false; // default: baseline
      whiteList['visibility'] = false; // default: visible
      whiteList['voice-balance'] = false; // default: center
      whiteList['voice-duration'] = false; // default: auto
      whiteList['voice-family'] = false; // default: implementation dependent
      whiteList['voice-pitch'] = false; // default: medium
      whiteList['voice-range'] = false; // default: medium
      whiteList['voice-rate'] = false; // default: normal
      whiteList['voice-stress'] = false; // default: normal
      whiteList['voice-volume'] = false; // default: medium
      whiteList['volume'] = false; // default: medium
      whiteList['white-space'] = false; // default: normal
      whiteList['widows'] = false; // default: 2
      whiteList['width'] = true; // default: auto
      whiteList['will-change'] = false; // default: auto
      whiteList['word-break'] = true; // default: normal
      whiteList['word-spacing'] = true; // default: normal
      whiteList['word-wrap'] = true; // default: normal
      whiteList['wrap-flow'] = false; // default: auto
      whiteList['wrap-through'] = false; // default: wrap
      whiteList['writing-mode'] = false; // default: horizontal-tb
      whiteList['z-index'] = false; // default: auto
    
      return whiteList;
    }
    
    
    /**
     * 匹配到白名单上的一个属性时
     *
     * @param {String} name
     * @param {String} value
     * @param {Object} options
     * @return {String}
     */
    function onAttr (name, value, options) {
      // do nothing
    }
    
    /**
     * 匹配到不在白名单上的一个属性时
     *
     * @param {String} name
     * @param {String} value
     * @param {Object} options
     * @return {String}
     */
    function onIgnoreAttr (name, value, options) {
      // do nothing
    }
    
    var REGEXP_URL_JAVASCRIPT = /javascript\s*\:/img;
    
    /**
     * 过滤属性值
     *
     * @param {String} name
     * @param {String} value
     * @return {String}
     */
    function safeAttrValue(name, value) {
      if (REGEXP_URL_JAVASCRIPT.test(value)) return '';
      return value;
    }
    
    
    exports.whiteList = getDefaultWhiteList();
    exports.getDefaultWhiteList = getDefaultWhiteList;
    exports.onAttr = onAttr;
    exports.onIgnoreAttr = onIgnoreAttr;
    exports.safeAttrValue = safeAttrValue;
    
    },{}],8:[function(require,module,exports){
    /**
     * cssfilter
     *
     * @author 老雷<leizongmin@gmail.com>
     */
    
    var DEFAULT = require('./default');
    var FilterCSS = require('./css');
    
    
    /**
     * XSS过滤
     *
     * @param {String} css 要过滤的CSS代码
     * @param {Object} options 选项：whiteList, onAttr, onIgnoreAttr
     * @return {String}
     */
    function filterCSS (html, options) {
      var xss = new FilterCSS(options);
      return xss.process(html);
    }
    
    
    // 输出
    exports = module.exports = filterCSS;
    exports.FilterCSS = FilterCSS;
    for (var i in DEFAULT) exports[i] = DEFAULT[i];
    
    // 在浏览器端使用
    if (typeof window !== 'undefined') {
      window.filterCSS = module.exports;
    }
    
    },{"./css":6,"./default":7}],9:[function(require,module,exports){
    /**
     * cssfilter
     *
     * @author 老雷<leizongmin@gmail.com>
     */
    
    var _ = require('./util');
    
    
    /**
     * 解析style
     *
     * @param {String} css
     * @param {Function} onAttr 处理属性的函数
     *   参数格式： function (sourcePosition, position, name, value, source)
     * @return {String}
     */
    function parseStyle (css, onAttr) {
      css = _.trimRight(css);
      if (css[css.length - 1] !== ';') css += ';';
      var cssLength = css.length;
      var isParenthesisOpen = false;
      var lastPos = 0;
      var i = 0;
      var retCSS = '';
    
      function addNewAttr () {
        // 如果没有正常的闭合圆括号，则直接忽略当前属性
        if (!isParenthesisOpen) {
          var source = _.trim(css.slice(lastPos, i));
          var j = source.indexOf(':');
          if (j !== -1) {
            var name = _.trim(source.slice(0, j));
            var value = _.trim(source.slice(j + 1));
            // 必须有属性名称
            if (name) {
              var ret = onAttr(lastPos, retCSS.length, name, value, source);
              if (ret) retCSS += ret + '; ';
            }
          }
        }
        lastPos = i + 1;
      }
    
      for (; i < cssLength; i++) {
        var c = css[i];
        if (c === '/' && css[i + 1] === '*') {
          // 备注开始
          var j = css.indexOf('*/', i + 2);
          // 如果没有正常的备注结束，则后面的部分全部跳过
          if (j === -1) break;
          // 直接将当前位置调到备注结尾，并且初始化状态
          i = j + 1;
          lastPos = i + 1;
          isParenthesisOpen = false;
        } else if (c === '(') {
          isParenthesisOpen = true;
        } else if (c === ')') {
          isParenthesisOpen = false;
        } else if (c === ';') {
          if (isParenthesisOpen) {
            // 在圆括号里面，忽略
          } else {
            addNewAttr();
          }
        } else if (c === '\n') {
          addNewAttr();
        }
      }
    
      return _.trim(retCSS);
    }
    
    module.exports = parseStyle;
    
    },{"./util":10}],10:[function(require,module,exports){
    module.exports = {
      indexOf: function (arr, item) {
        var i, j;
        if (Array.prototype.indexOf) {
          return arr.indexOf(item);
        }
        for (i = 0, j = arr.length; i < j; i++) {
          if (arr[i] === item) {
            return i;
          }
        }
        return -1;
      },
      forEach: function (arr, fn, scope) {
        var i, j;
        if (Array.prototype.forEach) {
          return arr.forEach(fn, scope);
        }
        for (i = 0, j = arr.length; i < j; i++) {
          fn.call(scope, arr[i], i, arr);
        }
      },
      trim: function (str) {
        if (String.prototype.trim) {
          return str.trim();
        }
        return str.replace(/(^\s*)|(\s*$)/g, '');
      },
      trimRight: function (str) {
        if (String.prototype.trimRight) {
          return str.trimRight();
        }
        return str.replace(/(\s*$)/g, '');
      }
    };
    
    },{}]},{},[2]);
    $(function(){
        var dplus_title = $('title').html();
        var dplus_channel = $('.position').find('.wrap').children('a:last').text();
        var dplus_type = "";
        if ( '' ) {dplus_type = "首页";}
        if ( 'Array' ) {dplus_type = "列表页";}
        if ( '' ) {dplus_type = "内容页";}
        dplus.track("浏览行为",{"页面title": dplus_title,"频道名称":dplus_channel,"页面类型":dplus_type,"内容形式":"" });
    })
    (function(w, d, s, q, i) {
        w[q] = w[q] || [];
        var f = d.getElementsByTagName(s)[0],j = d.createElement(s);
        j.async = true;
        j.id = 'beacon-aplus';
        j.src = 'https://d.alicdn.com/alilog/mlog/aplus/' + i + '.js';
        f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'aplus_queue', '203561150');
    
    //集成应用的appKey
    aplus_queue.push({
       action: 'aplus.setMetaInfo',
       arguments: ['appKey', '5ee1mpd5pc79dewivehwcsnb']
    })
    aplus_queue.push({
       action: 'aplus.setMetaInfo',
       arguments: ['aplus-rhost-v', 'quickaplus-he-api-cn-shanghai.aliyuncs.com']
    });
    aplus_queue.push({
       action: 'aplus.setMetaInfo',
       arguments: ['aplus-waiting', 'MAN']
    });
    var CONFIG = {
    UID: -1,
    UID_STATUS: false,
    THEME: 'https://img.dpm.org.cn/Public/static/themes/',
    BASE_URL: '',
    timestamp: function() {
        return Date.parse(new Date())/1000;
    },
    checkLogin: function(callback) {
        var c = this;
    
        if (c.UID === -1) {
            $.cookie.path = 'index.html';
            c.UID = $.cookie("saw_user_auth");
    
            var check_time = $.cookie("saw_user_check_time");
    
            if ( c.UID && (! check_time || (c.timestamp() - check_time > 60 * 5)) ) {
                $.post("passport/get_uid.html", function(data) {
                    if (! data || ! data.uid || data.uid != c.UID) {
                        $.removeCookie("saw_user_auth");
                    }
                    else if (data && data.uid) {
                        c.UID = data.uid;
                        localStorage.setItem("get_sso", data.uid);
                        get_sso_dplus_aplus();
                    }
    
                    $.cookie("saw_user_check_time", c.timestamp());
                    c.checkLogin(callback);
                });
                return;
            }
        }
    
        if (c.UID) {
            if (typeof(callback) == 'function') {
                callback(c.UID, c);
            }
            c.UID_STATUS = sessionStorage.getItem("saw_user_auth_status") ? true : false;
            if(c.UID_STATUS == false){
                localStorage.setItem("get_sso", c.UID);
                get_sso_dplus_aplus();
            }
            sessionStorage.setItem("saw_user_auth_status",1)
            return true;
        }else{
            c.UID_STATUS = false;
            sessionStorage.removeItem("saw_user_auth_status");
        }
    
        return false;
    },
    getSeasonal: function(callback) {
        //获取季节
        $.cookie.path = 'index.html';
        var SEASONAL = $.cookie("saw_seasonal");
    
        if ( ! SEASONAL) {
            $.post("404.html.html", function(data) {
                if (data && data.info) {
                    return data.info;
                }
            });
        }
    
        if (SEASONAL) {
            return SEASONAL;
        }
    },
    setSeasonal: function(seasonal) {
        $.post("set_seasonal.html", {seasonal:seasonal}, function(data) {
    
        });
    }
    };
    if(CONFIG.UID == undefined || CONFIG.UID == -1){
    CONFIG.checkLogin();
    }
    
    function get_sso_dplus_aplus(){
    var get_sso = localStorage.getItem('get_sso');
    $.post("getThirdKey.html",{uid:get_sso}, function(data1) {
        var memberLoginSource = '';
        if(data1.status == 1){
            if(data1['source'] ==  'qq'){
                memberLoginSource = 'QQ';
            }else if(data1['source'] ==  'wechat'){
                memberLoginSource = '微信';
            }else if(data1['source'] ==  'sina'){
                memberLoginSource = '微博';
            }
        }else{
            memberLoginSource = '正常';
        }
        CONFIG.UID_STATUS = true;
        $.get("passport/get_sso.json",{uid:get_sso}, function(data) {
            if (data.status) {
                $.each(data.urls, function(i, p) {
                    $.ajax({
                        url: p,
                        type: "GET",
                        data:data.user,
                        dataType: "jsonp", //指定服务器返回的数据类型
                        success: function(data) {
                        }
                    });
                });
                localStorage.removeItem('get_sso');
                if(localStorage.getItem('get_login')){
                    // 20211013以前的统计
                    dplus.track("UM_Event_LoginSuc", {
                        "nickname" : data['user']['username'],
                        "user_id" : CONFIG.UID,
                    });
                    // 20211013以后的统计 阿里云统计
                    // const {aplus_queue} = window;
                    aplus_queue.push({
                        action: 'aplus.record',
                        arguments: ['Um_Event_Login', 'OTHER', {
                            Um_Key_AccountNumber	: data['user']['username'],
                            Um_Key_LoginMode		: memberLoginSource,
                            page_name				: "LoginPage"
                        }]
                    });
                    localStorage.removeItem('get_login');
                }
            }
        })
    })
    }
    function btn_new_start() {
    $('.search-btn-new,.btn-new').each(function(index, element) {
        //console.log( $(this).find('svg').length);
        if($(this).is(":hidden") || $(this).find('svg').length){return;}
    
        if( $(this).find('.lines-btn').size() == 0 ) {
            var lineWrap='<div id="line'+index+'" class="lines-btn"></div>';
            $(this).append(lineWrap);
            $(this).children('div').css({'position':'absolute','left':0,'top':0,'right':0,'bottom':0});
            cline('line'+index);
        } else {
            var lineWrap='<div id="line'+index+'" class="lines-btn"></div>';
            $(this).find('.lines-btn').html(lineWrap);
            $(this).children('div').css({'position':'absolute','left':0,'top':0,'right':0,'bottom':0});
            cline('line'+index);
        }
    });
    
    
    function cline(obj){
        var elm= document.getElementById(obj);
        var paper = Raphael(elm);
        var lw=$(elm).width()-10;
        var lh=$(elm).height()-10;
        var line = paper.path("M0, 5L5, 5L5, 0L"+(lw+5)+",0L"+(lw+5)+",5L"+(lw+10)+",5L"+(lw+10)+","+(lh+5)+"L"+(lw+5)+","+(lh+5)+"L"+(lw+5)+","+(lh+10)+"L5,"+(lh+10)+"L5,"+(lh+5)+"L0,"+(lh+5)+"L0, 5").attr({
            stroke: '#dcdcdc',
            'stroke-width': 2
        });
    
        $(elm).find('svg').css('left',0);
        $('path').attr('stroke-dasharray','1000,1000');
        $(elm).hover(function(){
            $(this).find('path').stop(true,true).transition({'stroke-dashoffset':-1000,'stroke-dasharray':'500,500'},500);
        },function(){
            $(this).find('path').transition({'stroke-dashoffset':0},500);
        });
    };
    }
    
    $(function(){
    btn_new_start();
    })
    function getQueryVariable(variable)
    {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] == variable){return pair[1];}
    }
    return(false);
    }
    $(document).ready(function() { 
    //页面手动 手动pv    sendPV 
    // const {aplus_queue} = window;
    // 一个简单的demo
    aplus_queue.push({
        'action':'aplus.sendPV',
        'arguments':[{
            is_auto: false
        }, {
            //必传参数
            ts: new Date().getTime(), //当前时间戳
            path: window.location.href, //当前page的url
            page_name				: "ggzw_CreativePage",
            duration: '1', // 手动pv,duration信息需要您自己计算
            // 自定义PV参数key-value键值对
            utmsource: filterXSS(getQueryVariable('utmsource'),{   
                    stripIgnoreTagBody :['script','iframe'],
                    stripIgnoreTag  :true
                }),
            utmsign: filterXSS(getQueryVariable('utmsource'),{   
                    stripIgnoreTagBody :['script','iframe'],
                    stripIgnoreTag  :true
                })
        }]
    });
    }); 