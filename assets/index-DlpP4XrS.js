(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();function Ji(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Mp(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.15.1
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var oi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ua={duration:.5,overwrite:!1,delay:0},Mh,fn,Lt,xi=1e8,Tt=1/xi,au=Math.PI*2,U_=au/4,F_=0,Sp=Math.sqrt,O_=Math.cos,B_=Math.sin,cn=function(e){return typeof e=="string"},Ht=function(e){return typeof e=="function"},ar=function(e){return typeof e=="number"},Sh=function(e){return typeof e>"u"},zi=function(e){return typeof e=="object"},Vn=function(e){return e!==!1},Th=function(){return typeof window<"u"},Ra=function(e){return Ht(e)||cn(e)},Tp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},vn=Array.isArray,k_=/random\([^)]+\)/g,z_=/,\s*/g,mf=/(?:-?\.?\d|\.)+/gi,Ep=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Gs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,cc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,bp=/[+-]=-?[.\d]+/,H_=/[^,'"\[\]\s]+/gi,V_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ut,Li,lu,Eh,ai={},Dl={},Ap,wp=function(e){return(Dl=ro(e,ai))&&Yn},bh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ha=function(e,t){return!t&&console.warn(e)},Rp=function(e,t){return e&&(ai[e]=t)&&Dl&&(Dl[e]=t)||ai},fa=function(){return 0},G_={suppressEvents:!0,isStart:!0,kill:!1},pl={suppressEvents:!0,kill:!1},W_={suppressEvents:!0},Ah={},wr=[],cu={},Cp,Qn={},uc={},_f=30,ml=[],wh="",Rh=function(e){var t=e[0],n,i;if(zi(t)||Ht(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=ml.length;i--&&!ml[i].targetTest(t););n=ml[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Zp(e[i],n)))||e.splice(i,1);return e},ss=function(e){return e._gsap||Rh(vi(e))[0]._gsap},Pp=function(e,t,n){return(n=e[t])&&Ht(n)?e[t]():Sh(n)&&e.getAttribute&&e.getAttribute(t)||n},Gn=function(e,t){return(e=e.split(",")).forEach(t)||e},Gt=function(e){return Math.round(e*1e5)/1e5||0},Nt=function(e){return Math.round(e*1e7)/1e7||0},qs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},X_=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Ll=function(){var e=wr.length,t=wr.slice(0),n,i;for(cu={},wr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Ch=function(e){return!!(e._initted||e._startAt||e.add)},Dp=function(e,t,n,i){wr.length&&!fn&&Ll(),e.render(t,n,!!(fn&&t<0&&Ch(e))),wr.length&&!fn&&Ll()},Lp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(H_).length<2?t:cn(e)?e.trim():e},Ip=function(e){return e},li=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Y_=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},ro=function(e,t){for(var n in t)e[n]=t[n];return e},gf=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=zi(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},Il=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},$o=function(e){var t=e.parent||Ut,n=e.keyframes?Y_(vn(e.keyframes)):li;if(Vn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},q_=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Np=function(e,t,n,i,r){var o=e[i],a;if(r)for(a=t[r];o&&o[r]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Jl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,o=t._next;r?r._next=o:e[n]===t&&(e[n]=o),o?o._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Ir=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},os=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},K_=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},uu=function(e,t,n,i){return e._startAt&&(fn?e._startAt.revert(pl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},j_=function s(e){return!e||e._ts&&s(e.parent)},xf=function(e){return e._repeat?so(e._tTime,e=e.duration()+e._rDelay)*e:0},so=function(e,t){var n=Math.floor(e=Nt(e/t));return e&&n===e?n-1:n},Nl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ql=function(e){return e._end=Nt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Tt)||0))},ec=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Nt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ql(e),n._dirty||os(n,e)),e},Up=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Nl(e.rawTime(),t),(!t._dur||ba(0,t.totalDuration(),n)-t._tTime>Tt)&&t.render(n,!0)),os(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Tt}},Ui=function(e,t,n,i){return t.parent&&Ir(t),t._start=Nt((ar(n)?n:!n&&Ul(t)&&(!e._last||e._last._start>=e._time)?e._last?e._last._start:e._time:n||e!==Ut?di(e,n,t):e._time)+t._delay),t._end=Nt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Np(e,t,"_first","_last",e._sort?"_start":0),Ul(t)||(e._recent=t),i||Up(e,t),e._ts<0&&ec(e,e._tTime),e},Fp=function(e,t){return(ai.ScrollTrigger||bh("scrollTrigger",t))&&ai.ScrollTrigger.create(t,e)},Op=function(e,t,n,i,r){if(Dh(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!fn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Cp!==ti.frame)return wr.push(e),e._lazy=[r,i],1},$_=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},Ul=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Z_=function(e,t,n,i){var r=e.ratio,o=t<0||!t&&(!e._start&&$_(e)&&!(!e._initted&&Ul(e))||(e._ts<0||e._dp._ts<0)&&!Ul(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=ba(0,e._tDur,t),u=so(l,a),e._yoyo&&u&1&&(o=1-o),u!==so(e._tTime,a)&&(r=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==r||fn||i||e._zTime===Tt||!t&&e._zTime){if(!e._initted&&Op(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?Tt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&uu(e,t,n,!0),e._onUpdate&&!n&&ni(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ni(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Ir(e,1),!n&&!fn&&(ni(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},J_=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},oo=function(e,t,n,i){var r=e._repeat,o=Nt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=r?r<0?1e10:Nt(o*(r+1)+e._rDelay*r):o,a>0&&!i&&ec(e,e._tTime=e._tDur*a),e.parent&&Ql(e),n||os(e.parent,e),e},vf=function(e){return e instanceof zn?os(e):oo(e,e._dur)},Q_={_start:0,endTime:fa,totalDuration:fa},di=function s(e,t,n){var i=e.labels,r=e._recent||Q_,o=e.duration()>=xi?r.endTime(!1):e._dur,a,l,c;return cn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(vn(n)?n[0]:n).totalDuration()),a>1?s(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Zo=function(e,t,n){var i=ar(t[1]),r=(i?2:1)+(e<2?0:1),o=t[r],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Vn(l.vars.inherit)&&l.parent;o.immediateRender=Vn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[r-1]}return new jt(t[0],o,t[r+1])},Br=function(e,t){return e||e===0?t(e):t},ba=function(e,t,n){return n<e?e:n>t?t:n},gn=function(e,t){return!cn(e)||!(t=V_.exec(e))?"":t[1]},eg=function(e,t,n){return Br(n,function(i){return ba(e,t,i)})},hu=[].slice,Bp=function(e,t){return e&&zi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&zi(e[0]))&&!e.nodeType&&e!==Li},tg=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return cn(i)&&!t||Bp(i,1)?(r=n).push.apply(r,vi(i)):n.push(i)})||n},vi=function(e,t,n){return Lt&&!t&&Lt.selector?Lt.selector(e):cn(e)&&!n&&(lu||!ao())?hu.call((t||Eh).querySelectorAll(e),0):vn(e)?tg(e,n):Bp(e)?hu.call(e,0):e?[e]:[]},fu=function(e){return e=vi(e)[0]||ha("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return vi(t,n.querySelectorAll?n:n===e?ha("Invalid scope")||Eh.createElement("div"):e)}},kp=function(e){return e.sort(function(){return .5-Math.random()})},zp=function(e){if(Ht(e))return e;var t=zi(e)?e:{each:e},n=as(t.ease),i=t.from||0,r=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,u=i,h=i;return cn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,_){var g=(_||t).length,m=o[g],p,M,S,x,w,A,T,R,v;if(!m){if(v=t.grid==="auto"?0:(t.grid||[1,xi])[1],!v){for(T=-xi;T<(T=_[v++].getBoundingClientRect().left)&&v<g;);v<g&&v--}for(m=o[g]=[],p=l?Math.min(v,g)*u-.5:i%v,M=v===xi?0:l?g*h/v-.5:i/v|0,T=0,R=xi,A=0;A<g;A++)S=A%v-p,x=M-(A/v|0),m[A]=w=c?Math.abs(c==="y"?x:S):Sp(S*S+x*x),w>T&&(T=w),w<R&&(R=w);i==="random"&&kp(m),m.max=T-R,m.min=R,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(v>g?g-1:c?c==="y"?g/v:v:Math.max(v,g/v))||0)*(i==="edges"?-1:1),m.b=g<0?r-g:r,m.u=gn(t.amount||t.each)||0,n=n&&g<0?pg(n):n}return g=(m[f]-m.min)/m.max||0,Nt(m.b+(n?n(g):g)*m.v)+m.u}},du=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Nt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(ar(n)?0:gn(n))}},Hp=function(e,t){var n=vn(e),i,r;return!n&&zi(e)&&(i=n=e.radius||xi,e.values?(e=vi(e.values),(r=!ar(e[0]))&&(i*=i)):e=du(e.increment)),Br(t,n?Ht(e)?function(o){return r=e(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=xi,u=0,h=e.length,f,d;h--;)r?(f=e[h].x-a,d=e[h].y-l,f=f*f+d*d):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:o,r||u===o||ar(o)?u:u+gn(o)}:du(e))},Vp=function(e,t,n,i){return Br(vn(e)?!t:n===!0?!!(n=0):!i,function(){return vn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},ng=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,o){return o(r)},i)}},ig=function(e,t){return function(n){return e(parseFloat(n))+(t||gn(n))}},rg=function(e,t,n){return Wp(e,t,0,1,n)},Gp=function(e,t,n){return Br(n,function(i){return e[~~t(i)]})},sg=function s(e,t,n){var i=t-e;return vn(e)?Gp(e,s(0,e.length),t):Br(n,function(r){return(i+(r-e)%i)%i+e})},og=function s(e,t,n){var i=t-e,r=i*2;return vn(e)?Gp(e,s(0,e.length-1),t):Br(n,function(o){return o=(r+(o-e)%r)%r||0,e+(o>i?r-o:o)})},da=function(e){return e.replace(k_,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(z_);return Vp(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Wp=function(e,t,n,i,r){var o=t-e,a=i-n;return Br(r,function(l){return n+((l-e)/o*a||0)})},ag=function s(e,t,n,i){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var o=cn(e),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(vn(e)&&!vn(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(s(e[c-1],e[c]));h--,r=function(_){_*=h;var g=Math.min(f,~~_);return u[g](_-g)},n=t}else i||(e=ro(vn(e)?[]:{},e));if(!u){for(l in t)Ph.call(a,e,l,"get",t[l]);r=function(_){return Nh(_,a)||(o?e.p:e)}}}return Br(n,r)},yf=function(e,t,n){var i=e.labels,r=xi,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},ni=function(e,t,n){var i=e.vars,r=i[t],o=Lt,a=e._ctx,l,c,u;if(r)return l=i[t+"Params"],c=i.callbackScope||e,n&&wr.length&&Ll(),a&&(Lt=a),u=l?r.apply(c,l):r.call(c),Lt=o,u},Ho=function(e){return Ir(e),e.scrollTrigger&&e.scrollTrigger.kill(!!fn),e.progress()<1&&ni(e,"onInterrupt"),e},Ws,Xp=[],Yp=function(e){if(e)if(e=!e.name&&e.default||e,Th()||e.headless){var t=e.name,n=Ht(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:fa,render:Nh,add:Ph,kill:Eg,modifier:Tg,rawVars:0},o={targetTest:0,get:0,getSetter:Ih,aliases:{},register:0};if(ao(),e!==i){if(Qn[t])return;li(i,li(Il(e,r),o)),ro(i.prototype,ro(r,Il(e,o))),Qn[i.prop=t]=i,e.targetTest&&(ml.push(i),Ah[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Rp(t,i),e.register&&e.register(Yn,i,Wn)}else Xp.push(e)},wt=255,Vo={aqua:[0,wt,wt],lime:[0,wt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,wt],navy:[0,0,128],white:[wt,wt,wt],olive:[128,128,0],yellow:[wt,wt,0],orange:[wt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[wt,0,0],pink:[wt,192,203],cyan:[0,wt,wt],transparent:[wt,wt,wt,0]},hc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*wt+.5|0},qp=function(e,t,n){var i=e?ar(e)?[e>>16,e>>8&wt,e&wt]:0:Vo.black,r,o,a,l,c,u,h,f,d,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Vo[e])i=Vo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+r+r+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&wt,i&wt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&wt,e&wt]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(mf),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,r=u*2-o,i.length>3&&(i[3]*=1),i[0]=hc(l+1/3,r,o),i[1]=hc(l,r,o),i[2]=hc(l-1/3,r,o);else if(~e.indexOf("="))return i=e.match(Ep),n&&i.length<4&&(i[3]=1),i}else i=e.match(mf)||Vo.transparent;i=i.map(Number)}return t&&!_&&(r=i[0]/wt,o=i[1]/wt,a=i[2]/wt,h=Math.max(r,o,a),f=Math.min(r,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===r?(o-a)/d+(o<a?6:0):h===o?(a-r)/d+2:(r-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Kp=function(e){var t=[],n=[],i=-1;return e.split(Rr).forEach(function(r){var o=r.match(Gs)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Mf=function(e,t,n){var i="",r=(e+i).match(Rr),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!r)return e;if(r=r.map(function(f){return(f=qp(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Kp(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(Rr,"1").split(Gs),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=e.split(Rr),h=c.length-1;a<h;a++)i+=c[a]+r[a];return i+c[h]},Rr=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Vo)s+="|"+e+"\\b";return new RegExp(s+")","gi")})(),lg=/hsl[a]?\(/,jp=function(e){var t=e.join(" "),n;if(Rr.lastIndex=0,Rr.test(t))return n=lg.test(t),e[1]=Mf(e[1],n),e[0]=Mf(e[0],n,Kp(e[1])),!0},pa,ti=(function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,u,h,f,d,_=function g(m){var p=s()-i,M=m===!0,S,x,w,A;if((p>e||p<0)&&(n+=p-t),i+=p,w=i-n,S=w-o,(S>0||M)&&(A=++h.frame,f=w-h.time*1e3,h.time=w=w/1e3,o+=S+(S>=r?0:r-S),x=1),M||(l=c(g)),x)for(d=0;d<a.length;d++)a[d](w,f,A,m)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Ap&&(!lu&&Th()&&(Li=lu=window,Eh=Li.document||{},ai.gsap=Yn,(Li.gsapVersions||(Li.gsapVersions=[])).push(Yn.version),wp(Dl||Li.GreenSockGlobals||!Li.gsap&&Li||{}),Xp.forEach(Yp)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},pa=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),pa=0,c=fa},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){r=1e3/(m||240),o=h.time*1e3+r},add:function(m,p,M){var S=p?function(x,w,A,T){m(x,w,A,T),h.remove(S)}:m;return h.remove(m),a[M?"unshift":"push"](S),ao(),S},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},h})(),ao=function(){return!pa&&ti.wake()},lt={},cg=/^[\d.\-M][\d.\-,\s]/,ug=/["']/g,hg=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(ug,"").trim():+c,i=l.substr(a+1).trim();return t},fg=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},dg=function(e){var t=(e+"").split("("),n=lt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[hg(t[1])]:fg(e).split(",").map(Lp)):lt._CE&&cg.test(e)?lt._CE("",e):n},pg=function(e){return function(t){return 1-e(1-t)}},as=function(e,t){return e&&(Ht(e)?e:lt[e]||dg(e))||t},gs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},o;return Gn(e,function(a){lt[a]=ai[a]=r,lt[o=a.toLowerCase()]=n;for(var l in r)lt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=lt[a+"."+l]=r[l]}),r},$p=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},fc=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),o=r/au*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*B_((u-o)*r)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:$p(a);return r=au/r,l.config=function(c,u){return s(e,c,u)},l},dc=function s(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:$p(n);return i.config=function(r){return s(e,r)},i};Gn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;gs(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});lt.Linear.easeNone=lt.none=lt.Linear.easeIn;gs("Elastic",fc("in"),fc("out"),fc());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(a){return a<t?s*a*a:a<n?s*Math.pow(a-1.5/e,2)+.75:a<i?s*(a-=2.25/e)*a+.9375:s*Math.pow(a-2.625/e,2)+.984375};gs("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);gs("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});gs("Circ",function(s){return-(Sp(1-s*s)-1)});gs("Sine",function(s){return s===1?1:-O_(s*U_)+1});gs("Back",dc("in"),dc("out"),dc());lt.SteppedEase=lt.steps=ai.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,o=1-Tt;return function(a){return((i*ba(0,o,a)|0)+r)*n}}};ua.ease=lt["quad.out"];Gn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return wh+=s+","+s+"Params,"});var Zp=function(e,t){this.id=F_++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Pp,this.set=t?t.getSetter:Ih},ma=(function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,oo(this,+t.duration,1,1),this.data=t.data,Lt&&(this._ctx=Lt,Lt.data.push(this)),pa||ti.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,oo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ao(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(ec(this,n),!r._dp||r.parent||Up(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ui(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Tt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Dp(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+xf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+xf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?so(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Tt?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Nl(this.parent._time,this):this._tTime,o=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-Tt?0:this._rts;var a=this.totalDuration();return(o!==this._rts<0||r>0&&r<a)&&this.totalTime(ba(-Math.abs(this._delay),a,r),i!==!1),Ql(this),K_(this)},e.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{ao(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,r=this.progress()===1&&Math.abs(this._zTime)!==Tt,o;if(r)for(this._tTime-=Tt,o=this._first;o;){if(!o._dur&&o._zTime<0&&o._ts&&o._start<=i+Tt){r=!1;break}o=o._next}this.totalTime(i,r)}return this},e.startTime=function(n){if(arguments.length){this._start=Nt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ui(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Vn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Nl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=W_);var i=fn;return fn=n,Ch(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),fn=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,vf(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,vf(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(di(this,n),Vn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Vn(i)),this._dur||(this._zTime=-Tt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Tt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Tt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Tt)},e.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,r=i._prom;return new Promise(function(o){var a=Ht(n)?n:Ip,l=function(){var u=i.then;i.then=null,r&&r(),Ht(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Ho(this)},s})();li(ma.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Tt,_prom:0,_ps:!1,_rts:1});var zn=(function(s){Mp(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Vn(n.sortChildren),Ut&&Ui(n.parent||Ut,Ji(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Fp(Ji(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,o){return Zo(0,arguments,this),this},t.from=function(i,r,o){return Zo(1,arguments,this),this},t.fromTo=function(i,r,o,a){return Zo(2,arguments,this),this},t.set=function(i,r,o){return r.duration=0,r.parent=this,$o(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new jt(i,r,di(this,o),1),this},t.call=function(i,r,o){return Ui(this,jt.delayedCall(0,i,r),o)},t.staggerTo=function(i,r,o,a,l,c,u){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new jt(i,o,di(this,l)),this},t.staggerFrom=function(i,r,o,a,l,c,u){return o.runBackwards=1,$o(o).immediateRender=Vn(o.immediateRender),this.staggerTo(i,r,o,a,l,c,u)},t.staggerFromTo=function(i,r,o,a,l,c,u,h){return a.startAt=o,$o(a).immediateRender=Vn(a.immediateRender),this.staggerTo(i,r,a,l,c,u,h)},t.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Nt(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,_,g,m,p,M,S,x,w,A,T;if(this!==Ut&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,x=this._start,S=this._ts,p=!S,h&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(f=Nt(u%m),u===l?(g=this._repeat,f=c):(w=Nt(u/m),g=~~w,g&&g===w&&(f=c,g--),f>c&&(f=c)),w=so(this._tTime,m),!a&&this._tTime&&w!==g&&this._tTime-w*m-this._dur<=0&&(w=g),A&&g&1&&(f=c-f,T=1),g!==w&&!this._lock){var R=A&&w&1,v=R===(A&&g&1);if(g<w&&(R=!R),a=R?0:u%c?c:u,this._lock=1,this.render(a||(T?0:Nt(g*m)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&ni(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,w=g),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,a=R?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=J_(this,Nt(a),Nt(f)),M&&(u-=f-(f=M._start))),this._tTime=u,this._time=f,this._act=!!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!r&&!w&&(ni(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,r,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,o),f!==this._time||!this._ts&&!p){M=0,_&&(u+=this._zTime=-Tt);break}}d=_}else{d=this._last;for(var y=i<0?i:f;d;){if(_=d._prev,(d._act||y<=d._end)&&d._ts&&M!==d){if(d.parent!==this)return this.render(i,r,o);if(d.render(d._ts>0?(y-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(y-d._start)*d._ts,r,o||fn&&Ch(d)),f!==this._time||!this._ts&&!p){M=0,_&&(u+=this._zTime=y?-Tt:Tt);break}}d=_}}if(M&&!r&&(this.pause(),M.render(f>=a?0:-Tt)._zTime=f>=a?1:-1,this._ts))return this._start=x,Ql(this),this.render(i,r,o);this._onUpdate&&!r&&ni(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(x===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Ir(this,1),!r&&!(i<0&&!a)&&(u||a||!l)&&(ni(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var o=this;if(ar(r)||(r=di(this,r,i)),!(i instanceof ma)){if(vn(i))return i.forEach(function(a){return o.add(a,r)}),this;if(cn(i))return this.addLabel(i,r);if(Ht(i))i=jt.delayedCall(0,i);else return this}return this!==i?Ui(this,i,r):this},t.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-xi);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof jt?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},t.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},t.remove=function(i){return cn(i)?this.removeLabel(i):Ht(i)?this.killTweensOf(i):(i.parent===this&&Jl(this,i),i===this._recent&&(this._recent=this._last),os(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Nt(ti.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=di(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,o){var a=jt.delayedCall(0,r||fa,o);return a.data="isPause",this._hasPause=1,Ui(this,a,di(this,i))},t.removePause=function(i){var r=this._first;for(i=di(this,i);r;)r._start===i&&r.data==="isPause"&&Ir(r),r=r._next},t.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)yr!==a[l]&&a[l].kill(i,r);return this},t.getTweensOf=function(i,r){for(var o=[],a=vi(i),l=this._first,c=ar(r),u;l;)l instanceof jt?X_(l._targets,a)&&(c?(!yr||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(u=l.getTweensOf(a,r)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(i,r){r=r||{};var o=this,a=di(o,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,_=jt.to(o,li({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Tt,onStart:function(){if(o.pause(),!d){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==m&&oo(_,m,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,h||[])}},r));return f?_.render(0):_},t.tweenFromTo=function(i,r,o){return this.tweenTo(r,li({startAt:{time:di(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),yf(this,di(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),yf(this,di(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Tt)},t.shiftChildren=function(i,r,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Nt(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return os(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),os(this)},t.totalDuration=function(i){var r=0,o=this,a=o._last,l=xi,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ui(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(r-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=Nt(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;oo(o,o===Ut&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Ut._ts&&(Dp(Ut,Nl(i,Ut)),Cp=ti.frame),ti.frame>=_f){_f+=oi.autoSleep||120;var r=Ut._first;if((!r||!r._ts)&&oi.autoSleep&&ti._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||ti.sleep()}}},e})(ma);li(zn.prototype,{_lock:0,_hasPause:0,_forcing:0});var mg=function(e,t,n,i,r,o,a){var l=new Wn(this._pt,e,t,0,1,nm,null,r),c=0,u=0,h,f,d,_,g,m,p,M;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=da(i)),o&&(M=[n,i],o(M,e,t),n=M[0],i=M[1]),f=n.match(cc)||[];h=cc.exec(i);)_=h[0],g=i.substring(c,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?qs(m,_)-m:parseFloat(_)-m,m:d&&d<4?Math.round:0},c=cc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(bp.test(i)||p)&&(l.e=0),this._pt=l,l},Ph=function(e,t,n,i,r,o,a,l,c,u){Ht(i)&&(i=i(r||0,e,o));var h=e[t],f=n!=="get"?n:Ht(h)?c?e[t.indexOf("set")||!Ht(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,d=Ht(h)?c?yg:em:Lh,_;if(cn(i)&&(~i.indexOf("random(")&&(i=da(i)),i.charAt(1)==="="&&(_=qs(f,i)+(gn(f)||0),(_||_===0)&&(i=_))),!u||f!==i||pu)return!isNaN(f*i)&&i!==""?(_=new Wn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?Sg:tm,0,d),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!h&&!(t in e)&&bh(t,i),mg.call(this,e,t,f,i,d,l||oi.stringFilter,c))},_g=function(e,t,n,i,r){if(Ht(e)&&(e=Jo(e,r,t,n,i)),!zi(e)||e.style&&e.nodeType||vn(e)||Tp(e))return cn(e)?Jo(e,r,t,n,i):e;var o={},a;for(a in e)o[a]=Jo(e[a],r,t,n,i);return o},Jp=function(e,t,n,i,r,o){var a,l,c,u;if(Qn[e]&&(a=new Qn[e]).init(r,a.rawVars?t[e]:_g(t[e],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new Wn(n._pt,r,e,0,1,a.render,a,0,a.priority),n!==Ws))for(c=n._ptLookup[n._targets.indexOf(r)],u=a._props.length;u--;)c[a._props[u]]=l;return a},yr,pu,Dh=function s(e,t,n){var i=e.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,_=e._dur,g=e._startAt,m=e._targets,p=e.parent,M=p&&p.data==="nested"?p.vars.targets:m,S=e._overwrite==="auto"&&!Mh,x=e.timeline,w=i.easeReverse||h,A,T,R,v,y,P,U,O,W,Y,q,z,N;if(x&&(!f||!r)&&(r="none"),e._ease=as(r,ua.ease),e._rEase=w&&(as(w)||e._ease),e._from=!x&&!!i.runBackwards,e._from&&(e.ratio=1),!x||f&&!i.stagger){if(O=m[0]?ss(m[0]).harness:0,z=O&&i[O.prop],A=Il(i,Ah),g&&(g._zTime<0&&g.progress(1),t<0&&u&&a&&!d?g.render(-1,!0):g.revert(u&&_?pl:G_),g._lazy=0),o){if(Ir(e._startAt=jt.set(m,li({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&Vn(l),startAt:null,delay:0,onUpdate:c&&function(){return ni(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(fn||!a&&!d)&&e._startAt.revert(pl),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(a=!1),R=li({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Vn(l),immediateRender:a,stagger:0,parent:p},A),z&&(R[O.prop]=z),Ir(e._startAt=jt.set(m,R)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(fn?e._startAt.revert(pl):e._startAt.render(-1,!0)),e._zTime=t,!a)s(e._startAt,Tt,Tt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&Vn(l)||l&&!_,T=0;T<m.length;T++){if(y=m[T],U=y._gsap||Rh(m)[T]._gsap,e._ptLookup[T]=Y={},cu[U.id]&&wr.length&&Ll(),q=M===m?T:M.indexOf(y),O&&(W=new O).init(y,z||A,e,q,M)!==!1&&(e._pt=v=new Wn(e._pt,y,W.name,0,1,W.render,W,0,W.priority),W._props.forEach(function($){Y[$]=v}),W.priority&&(P=1)),!O||z)for(R in A)Qn[R]&&(W=Jp(R,A,e,q,y,M))?W.priority&&(P=1):Y[R]=v=Ph.call(e,y,R,"get",A[R],q,M,0,i.stringFilter);e._op&&e._op[T]&&e.kill(y,e._op[T]),S&&e._pt&&(yr=e,Ut.killTweensOf(y,Y,e.globalTime(t)),N=!e.parent,yr=0),e._pt&&l&&(cu[U.id]=1)}P&&im(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!N,f&&t<=0&&x.render(xi,!0,!0)},gg=function(e,t,n,i,r,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return pu=1,e.vars[t]="+=0",Dh(e,a),pu=0,l?ha(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!r?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Gt(n)+gn(h.e)),h.b&&(h.b=u.s+gn(h.b))},xg=function(e,t){var n=e[0]?ss(e[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return t;r=ro({},t);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},vg=function(e,t,n,i){var r=t.ease||i||"power1.inOut",o,a;if(vn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:r})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:r})},Jo=function(e,t,n,i,r){return Ht(e)?e.call(t,n,i,r):cn(e)&&~e.indexOf("random(")?da(e):e},Fl=wh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Qp={};Gn(Fl+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Qp[s]=1});Fl=Fl.split(",");var jt=(function(s){Mp(e,s);function e(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:$o(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=i.parent||Ut,M=(vn(n)||Tp(n)?ar(n[0]):"length"in i)?[n]:vi(n),S,x,w,A,T,R,v,y;if(a._targets=M.length?Rh(M):ha("GSAP target "+n+" not found. https://gsap.com",!oi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,_||f||Ra(c)||Ra(u)){i=a.vars;var P=i.easeReverse||i.yoyoEase;if(S=a.timeline=new zn({data:"nested",defaults:g||{},targets:p&&p.data==="nested"?p.vars.targets:M}),S.kill(),S.parent=S._dp=Ji(a),S._start=0,f||Ra(c)||Ra(u)){if(A=M.length,v=f&&zp(f),zi(f))for(T in f)~Fl.indexOf(T)&&(y||(y={}),y[T]=f[T]);for(x=0;x<A;x++)w=Il(i,Qp),w.stagger=0,P&&(w.easeReverse=P),y&&ro(w,y),R=M[x],w.duration=+Jo(c,Ji(a),x,R,M),w.delay=(+Jo(u,Ji(a),x,R,M)||0)-a._delay,!f&&A===1&&w.delay&&(a._delay=u=w.delay,a._start+=u,w.delay=0),S.to(R,w,v?v(x,R,M):0),S._ease=lt.none;S.duration()?c=u=0:a.timeline=0}else if(_){$o(li(S.vars.defaults,{ease:"none"})),S._ease=as(_.ease||i.ease||"none");var U=0,O,W,Y;if(vn(_))_.forEach(function(q){return S.to(M,q,">")}),S.duration();else{w={};for(T in _)T==="ease"||T==="easeEach"||vg(T,_[T],w,_.easeEach);for(T in w)for(O=w[T].sort(function(q,z){return q.t-z.t}),U=0,x=0;x<O.length;x++)W=O[x],Y={ease:W.e,duration:(W.t-(x?O[x-1].t:0))/100*c},Y[T]=W.v,S.to(M,Y,U),U+=Y.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return d===!0&&!Mh&&(yr=Ji(a),Ut.killTweensOf(M),yr=0),Ui(p,Ji(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!_&&a._start===Nt(p._time)&&Vn(h)&&j_(Ji(a))&&p.data!=="nested")&&(a._tTime=-Tt,a.render(Math.max(0,-u)||0)),m&&Fp(Ji(a),m),a}var t=e.prototype;return t.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Tt&&!u?l:i<Tt?0:i,f,d,_,g,m,p,M,S;if(!c)Z_(this,i,r,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,S=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,r,o);if(f=Nt(h%g),h===l?(_=this._repeat,f=c):(m=Nt(h/g),_=~~m,_&&_===m?(f=c,_--):f>c&&(f=c)),p=this._yoyo&&_&1,p&&(f=c-f),m=so(this._tTime,g),f===a&&!o&&this._initted&&_===m)return this._tTime=h,this;_!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&f!==g&&this._initted&&(this._lock=o=1,this.render(Nt(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(Op(this,u?i:f,o,r,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._rEase){var x=f<a;if(x!==this._inv){var w=x?a:c-a;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=w?(x?-1:1)/w:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=M=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=M=this._ease(f/c);if(this._from&&(this.ratio=M=1-M),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&h&&!r&&!m&&(ni(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(M,d.d),d=d._next;S&&S.render(i<0?i:S._dur*S._ease(f/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&uu(this,i,r,o),ni(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!r&&this.parent&&ni(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&uu(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Ir(this,1),!r&&!(u&&!a)&&(h||a||p)&&(ni(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,o,a,l){pa||ti.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Dh(this,c),u=this._ease(c/this._dur),gg(this,i,r,o,a,u,c,l)?this.resetTo(i,r,o,a,1):(ec(this,0),this.parent||Np(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Ho(this):this.scrollTrigger&&this.scrollTrigger.kill(!!fn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,yr&&yr.vars.overwrite!==!0)._first||Ho(this),this.parent&&o!==this.timeline.totalDuration()&&oo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?vi(i):a,c=this._ptLookup,u=this._pt,h,f,d,_,g,m,p;if((!r||r==="all")&&q_(a,l))return r==="all"&&(this._pt=0),Ho(this);for(h=this._op=this._op||[],r!=="all"&&(cn(r)&&(g={},Gn(r,function(M){return g[M]=1}),r=g),r=xg(a,r)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],r==="all"?(h[p]=r,_=f,d={}):(d=h[p]=h[p]||{},_=r);for(g in _)m=f&&f[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Jl(this,m,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&Ho(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return Zo(1,arguments)},e.delayedCall=function(i,r,o,a){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,r,o){return Zo(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,o){return Ut.killTweensOf(i,r,o)},e})(ma);li(jt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Gn("staggerTo,staggerFrom,staggerFromTo",function(s){jt[s]=function(){var e=new zn,t=hu.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var Lh=function(e,t,n){return e[t]=n},em=function(e,t,n){return e[t](n)},yg=function(e,t,n,i){return e[t](i.fp,n)},Mg=function(e,t,n){return e.setAttribute(t,n)},Ih=function(e,t){return Ht(e[t])?em:Sh(e[t])&&e.setAttribute?Mg:Lh},tm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Sg=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},nm=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Nh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Tg=function(e,t,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(e,t,n),r=o},Eg=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Jl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},bg=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},im=function(e){for(var t=e._pt,n,i,r,o;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=r},Wn=(function(){function s(t,n,i,r,o,a,l,c,u){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||tm,this.d=l||this,this.set=c||Lh,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=bg,this.m=n,this.mt=r,this.tween=i},s})();Gn(wh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return Ah[s]=1});ai.TweenMax=ai.TweenLite=jt;ai.TimelineLite=ai.TimelineMax=zn;Ut=new zn({sortChildren:!1,defaults:ua,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});oi.stringFilter=jp;var ls=[],_l={},Ag=[],Sf=0,wg=0,pc=function(e){return(_l[e]||Ag).map(function(t){return t()})},_a=function(){var e=Date.now(),t=[];e-Sf>2&&(pc("matchMediaInit"),ls.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=Li.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),pc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Sf=e,pc("matchMedia"))},rm=(function(){function s(t,n){this.selector=n&&fu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=wg++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){Ht(n)&&(r=i,i=n,n=Ht);var o=this,a=function(){var c=Lt,u=o.selector,h;return c&&c!==o&&c.data.push(o),r&&(o.selector=fu(r)),Lt=o,h=i.apply(o,arguments),Ht(h)&&o._r.push(h),Lt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Ht?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Lt;Lt=null,n(this),Lt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof jt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?(function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof zn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof jt)&&c.revert&&c.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i){for(var o=ls.length;o--;)ls[o].id===this.id&&ls.splice(o,1);this._mqs&&this._mqs.forEach(function(a){return a.removeListener?a.removeListener(_a):a.removeEventListener("change",_a)}),this._mqs=null}},e.revert=function(n){this.kill(n||{})},s})(),Rg=(function(){function s(t){this.contexts=[],this.scope=t,Lt&&Lt.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){zi(n)||(n={matches:n});var o=new rm(0,r||this.scope),a=o.conditions={},l,c,u;Lt&&!o.selector&&(o.selector=Lt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=Li.matchMedia(n[c]),l&&(ls.indexOf(o)<0&&ls.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(_a):l.addEventListener("change",_a),(o._mqs||(o._mqs=[])).push(l)));return u&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),Ol={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Yp(i)})},timeline:function(e){return new zn(e)},getTweensOf:function(e,t){return Ut.getTweensOf(e,t)},getProperty:function(e,t,n,i){cn(e)&&(e=vi(e)[0]);var r=ss(e||{}).get,o=n?Ip:Lp;return n==="native"&&(n=""),e&&(t?o((Qn[t]&&Qn[t].get||r)(e,t,n,i)):function(a,l,c){return o((Qn[a]&&Qn[a].get||r)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=vi(e),e.length>1){var i=e.map(function(u){return Yn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var o=Qn[t],a=ss(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;Ws._pt=0,h.init(e,n?u+n:u,Ws,0,[e]),h.render(1,h),Ws._pt&&Nh(1,Ws)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var i,r=Yn.to(e,li((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return r.resetTo(t,l,c,u)};return o.tween=r,o},isTweening:function(e){return Ut.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=as(e.ease,ua.ease)),gf(ua,e||{})},config:function(e){return gf(oi,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Qn[a]&&!ai[a]&&ha(t+" effect requires "+a+" plugin.")}),uc[t]=function(a,l,c){return n(vi(a),li(l||{},r),c)},o&&(zn.prototype[t]=function(a,l,c){return this.add(uc[t](a,zi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){lt[e]=as(t)},parseEase:function(e,t){return arguments.length?as(e,t):lt},getById:function(e){return Ut.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new zn(e),i,r;for(n.smoothChildTiming=Vn(e.smoothChildTiming),Ut.remove(n),n._dp=0,n._time=n._tTime=Ut._time,i=Ut._first;i;)r=i._next,(t||!(!i._dur&&i instanceof jt&&i.vars.onComplete===i._targets[0]))&&Ui(n,i,i._start-i._delay),i=r;return Ui(Ut,n,0),n},context:function(e,t){return e?new rm(e,t):Lt},matchMedia:function(e){return new Rg(e)},matchMediaRefresh:function(){return ls.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||_a()},addEventListener:function(e,t){var n=_l[e]||(_l[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=_l[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:sg,wrapYoyo:og,distribute:zp,random:Vp,snap:Hp,normalize:rg,getUnit:gn,clamp:eg,splitColor:qp,toArray:vi,selector:fu,mapRange:Wp,pipe:ng,unitize:ig,interpolate:ag,shuffle:kp},install:wp,effects:uc,ticker:ti,updateRoot:zn.updateRoot,plugins:Qn,globalTimeline:Ut,core:{PropTween:Wn,globals:Rp,Tween:jt,Timeline:zn,Animation:ma,getCache:ss,_removeLinkedListItem:Jl,reverting:function(){return fn},context:function(e){return e&&Lt&&(Lt.data.push(e),e._ctx=Lt),Lt},suppressOverwrites:function(e){return Mh=e}}};Gn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Ol[s]=jt[s]});ti.add(zn.updateRoot);Ws=Ol.to({},{duration:0});var Cg=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Pg=function(e,t){var n=e._targets,i,r,o;for(i in t)for(r=n.length;r--;)o=e._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=Cg(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[r],i))},mc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(cn(r)&&(l={},Gn(r,function(u){return l[u]=1}),r=l),t){l={};for(c in r)l[c]=t(r[c]);r=l}Pg(a,r)}}}},Yn=Ol.registerPlugin({name:"attr",init:function(e,t,n,i,r){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)fn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},mc("roundProps",du),mc("modifiers"),mc("snap",Hp))||Ol;jt.version=zn.version=Yn.version="3.15.1";Ap=1;Th()&&ao();lt.Power0;lt.Power1;lt.Power2;lt.Power3;lt.Power4;lt.Linear;lt.Quad;lt.Cubic;lt.Quart;lt.Quint;lt.Strong;lt.Elastic;lt.Back;lt.SteppedEase;lt.Bounce;lt.Sine;lt.Expo;lt.Circ;/*!
 * CSSPlugin 3.15.1
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Tf,Mr,Ks,Uh,is,Ef,Fh,Dg=function(){return typeof window<"u"},lr={},$r=180/Math.PI,js=Math.PI/180,ys=Math.atan2,bf=1e8,Oh=/([A-Z])/g,Lg=/(left|right|width|margin|padding|x)/i,Ig=/[\s,\(]\S/,Fi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},mu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Ng=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Ug=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Fg=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Og=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},sm=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},om=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Bg=function(e,t,n){return e.style[t]=n},kg=function(e,t,n){return e.style.setProperty(t,n)},zg=function(e,t,n){return e._gsap[t]=n},Hg=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Vg=function(e,t,n,i,r){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},Gg=function(e,t,n,i,r){var o=e._gsap;o[t]=n,o.renderTransform(r,o)},Ot="transform",Xn=Ot+"Origin",Wg=function s(e,t){var n=this,i=this.target,r=i.style,o=i._gsap;if(e in lr&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Fi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=er(i,a)}):this.tfm[e]=o.x?o[e]:er(i,e),e===Xn&&(this.tfm.zOrigin=o.zOrigin);else return Fi.transform.split(",").forEach(function(a){return s.call(n,a,t)});if(this.props.indexOf(Ot)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Xn,t,"")),e=Ot}(r||t)&&this.props.push(e,t,r[e])},am=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Xg=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,o;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Oh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=Fh(),(!r||!r.isStart)&&!n[Ot]&&(am(n),i.zOrigin&&n[Xn]&&(n[Xn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},lm=function(e,t){var n={target:e,props:[],revert:Xg,save:Wg};return e._gsap||Yn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},cm,_u=function(e,t){var n=Mr.createElementNS?Mr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Mr.createElement(e);return n&&n.style?n:Mr.createElement(e)},ii=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Oh,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,lo(t)||t,1)||""},Af="O,Moz,ms,Ms,Webkit".split(","),lo=function(e,t,n){var i=t||is,r=i.style,o=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Af[o]+e in r););return o<0?null:(o===3?"ms":o>=0?Af[o]:"")+e},gu=function(){Dg()&&window.document&&(Tf=window,Mr=Tf.document,Ks=Mr.documentElement,is=_u("div")||{style:{}},_u("div"),Ot=lo(Ot),Xn=Ot+"Origin",is.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",cm=!!lo("perspective"),Fh=Yn.core.reverting,Uh=1)},wf=function(e){var t=e.ownerSVGElement,n=_u("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),Ks.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),Ks.removeChild(n),r},Rf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},um=function(e){var t,n;try{t=e.getBBox()}catch{t=wf(e),n=1}return t&&(t.width||t.height)||n||(t=wf(e)),t&&!t.width&&!t.x&&!t.y?{x:+Rf(e,["x","cx","x1"])||0,y:+Rf(e,["y","cy","y1"])||0,width:0,height:0}:t},hm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&um(e))},Nr=function(e,t){if(t){var n=e.style,i;t in lr&&t!==Xn&&(t=Ot),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Oh,"-$1").toLowerCase())):n.removeAttribute(t)}},Sr=function(e,t,n,i,r,o){var a=new Wn(e._pt,t,n,0,1,o?om:sm);return e._pt=a,a.b=i,a.e=r,e._props.push(n),a},Cf={deg:1,rad:1,turn:1},Yg={grid:1,flex:1},Ur=function s(e,t,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=is.style,l=Lg.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",_,g,m,p;if(i===o||!r||Cf[i]||Cf[o])return r;if(o!=="px"&&!f&&(r=s(e,t,n,"px")),p=e.getCTM&&hm(e),(d||o==="%")&&(lr[t]||~t.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[u],Gt(d?r/_*h:r/100*_);if(a[l?"width":"height"]=h+(f?o:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Mr||!g.appendChild)&&(g=Mr.body),m=g._gsap,m&&d&&m.width&&l&&m.time===ti.time&&!m.uncache)return Gt(r/m.width*h);if(d&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=h+i,_=e[u],M?e.style[t]=M:Nr(e,t)}else(d||o==="%")&&!Yg[ii(g,"display")]&&(a.position=ii(e,"position")),g===e&&(a.position="static"),g.appendChild(is),_=is[u],g.removeChild(is),a.position="absolute";return l&&d&&(m=ss(g),m.time=ti.time,m.width=g[u]),Gt(f?_*r/h:_&&r?h/_*r:0)},er=function(e,t,n,i){var r;return Uh||gu(),t in Fi&&t!=="transform"&&(t=Fi[t],~t.indexOf(",")&&(t=t.split(",")[0])),lr[t]&&t!=="transform"?(r=xa(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:kl(ii(e,Xn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Bl[t]&&Bl[t](e,t,n)||ii(e,t)||Pp(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Ur(e,t,r,n)+n:r},qg=function(e,t,n,i){if(!n||n==="none"){var r=lo(t,e,1),o=r&&ii(e,r,1);o&&o!==n?(t=r,n=o):t==="borderColor"&&(n=ii(e,"borderTopColor"))}var a=new Wn(this._pt,e.style,t,0,1,nm),l=0,c=0,u,h,f,d,_,g,m,p,M,S,x,w;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ii(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=ii(e,t)||i,g?e.style[t]=g:Nr(e,t)),u=[n,i],jp(u),n=u[0],i=u[1],f=n.match(Gs)||[],w=i.match(Gs)||[],w.length){for(;h=Gs.exec(i);)m=h[0],M=i.substring(l,h.index),_?_=(_+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(_=1),m!==(g=f[c++]||"")&&(d=parseFloat(g)||0,x=g.substr((d+"").length),m.charAt(1)==="="&&(m=qs(d,m)+x),p=parseFloat(m),S=m.substr((p+"").length),l=Gs.lastIndex-S.length,S||(S=S||oi.units[t]||x,l===i.length&&(i+=S,a.e+=S)),x!==S&&(d=Ur(e,t,g,S)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:d,c:p-d,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?om:sm;return bp.test(i)&&(a.e=0),this._pt=a,a},Pf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Kg=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Pf[n]||n,t[1]=Pf[i]||i,t.join(" ")},jg=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],lr[a]&&(l=1,a=a==="transformOrigin"?Xn:Ot),Nr(n,a);l&&(Nr(n,Ot),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",xa(n,1),o.uncache=1,am(i)))}},Bl={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var o=e._pt=new Wn(e._pt,t,n,0,0,jg);return o.u=i,o.pr=-10,o.tween=r,e._props.push(n),1}}},ga=[1,0,0,1,0,0],fm={},dm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Df=function(e){var t=ii(e,Ot);return dm(t)?ga:t.substr(7).match(Ep).map(Gt)},Bh=function(e,t){var n=e._gsap||ss(e),i=e.style,r=Df(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?ga:r):(r===ga&&!e.offsetParent&&e!==Ks&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Ks.appendChild(e)),r=Df(e),l?i.display=l:Nr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Ks.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},xu=function(e,t,n,i,r,o){var a=e._gsap,l=r||Bh(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],_=l[1],g=l[2],m=l[3],p=l[4],M=l[5],S=t.split(" "),x=parseFloat(S[0])||0,w=parseFloat(S[1])||0,A,T,R,v;n?l!==ga&&(T=d*m-_*g)&&(R=x*(m/T)+w*(-g/T)+(g*M-m*p)/T,v=x*(-_/T)+w*(d/T)-(d*M-_*p)/T,x=R,w=v):(A=um(e),x=A.x+(~S[0].indexOf("%")?x/100*A.width:x),w=A.y+(~(S[1]||S[0]).indexOf("%")?w/100*A.height:w)),i||i!==!1&&a.smooth?(p=x-c,M=w-u,a.xOffset=h+(p*d+M*g)-p,a.yOffset=f+(p*_+M*m)-M):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=w,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Xn]="0px 0px",o&&(Sr(o,a,"xOrigin",c,x),Sr(o,a,"yOrigin",u,w),Sr(o,a,"xOffset",h,a.xOffset),Sr(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",x+" "+w)},xa=function(e,t){var n=e._gsap||new Zp(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=ii(e,Xn)||"0",u,h,f,d,_,g,m,p,M,S,x,w,A,T,R,v,y,P,U,O,W,Y,q,z,N,$,D,ae,Ce,Qe,j,ne;return u=h=f=g=m=p=M=S=x=0,d=_=1,n.svg=!!(e.getCTM&&hm(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ot]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ot]!=="none"?l[Ot]:"")),i.scale=i.rotate=i.translate="none"),T=Bh(e,n.svg),n.svg&&(n.uncache?(N=e.getBBox(),c=n.xOrigin-N.x+"px "+(n.yOrigin-N.y)+"px",z=""):z=!t&&e.getAttribute("data-svg-origin"),xu(e,z||c,!!z||n.originIsAbsolute,n.smooth!==!1,T)),w=n.xOrigin||0,A=n.yOrigin||0,T!==ga&&(P=T[0],U=T[1],O=T[2],W=T[3],u=Y=T[4],h=q=T[5],T.length===6?(d=Math.sqrt(P*P+U*U),_=Math.sqrt(W*W+O*O),g=P||U?ys(U,P)*$r:0,M=O||W?ys(O,W)*$r+g:0,M&&(_*=Math.abs(Math.cos(M*js))),n.svg&&(u-=w-(w*P+A*O),h-=A-(w*U+A*W))):(ne=T[6],Qe=T[7],D=T[8],ae=T[9],Ce=T[10],j=T[11],u=T[12],h=T[13],f=T[14],R=ys(ne,Ce),m=R*$r,R&&(v=Math.cos(-R),y=Math.sin(-R),z=Y*v+D*y,N=q*v+ae*y,$=ne*v+Ce*y,D=Y*-y+D*v,ae=q*-y+ae*v,Ce=ne*-y+Ce*v,j=Qe*-y+j*v,Y=z,q=N,ne=$),R=ys(-O,Ce),p=R*$r,R&&(v=Math.cos(-R),y=Math.sin(-R),z=P*v-D*y,N=U*v-ae*y,$=O*v-Ce*y,j=W*y+j*v,P=z,U=N,O=$),R=ys(U,P),g=R*$r,R&&(v=Math.cos(R),y=Math.sin(R),z=P*v+U*y,N=Y*v+q*y,U=U*v-P*y,q=q*v-Y*y,P=z,Y=N),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),d=Gt(Math.sqrt(P*P+U*U+O*O)),_=Gt(Math.sqrt(q*q+ne*ne)),R=ys(Y,q),M=Math.abs(R)>2e-4?R*$r:0,x=j?1/(j<0?-j:j):0),n.svg&&(z=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!dm(ii(e,Ot)),z&&e.setAttribute("transform",z))),Math.abs(M)>90&&Math.abs(M)<270&&(r?(d*=-1,M+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Gt(d),n.scaleY=Gt(_),n.rotation=Gt(g)+a,n.rotationX=Gt(m)+a,n.rotationY=Gt(p)+a,n.skewX=M+a,n.skewY=S+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Xn]=kl(c)),n.xOffset=n.yOffset=0,n.force3D=oi.force3D,n.renderTransform=n.svg?Zg:cm?pm:$g,n.uncache=0,n},kl=function(e){return(e=e.split(" "))[0]+" "+e[1]},_c=function(e,t,n){var i=gn(t);return Gt(parseFloat(t)+parseFloat(Ur(e,"x",n+"px",i)))+i},$g=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,pm(e,t)},Hr="0deg",Co="0px",Vr=") ",pm=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,M=n.target,S=n.zOrigin,x="",w=p==="auto"&&e&&e!==1||p===!0;if(S&&(h!==Hr||u!==Hr)){var A=parseFloat(u)*js,T=Math.sin(A),R=Math.cos(A),v;A=parseFloat(h)*js,v=Math.cos(A),o=_c(M,o,T*v*-S),a=_c(M,a,-Math.sin(A)*-S),l=_c(M,l,R*v*-S+S)}m!==Co&&(x+="perspective("+m+Vr),(i||r)&&(x+="translate("+i+"%, "+r+"%) "),(w||o!==Co||a!==Co||l!==Co)&&(x+=l!==Co||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Vr),c!==Hr&&(x+="rotate("+c+Vr),u!==Hr&&(x+="rotateY("+u+Vr),h!==Hr&&(x+="rotateX("+h+Vr),(f!==Hr||d!==Hr)&&(x+="skew("+f+", "+d+Vr),(_!==1||g!==1)&&(x+="scale("+_+", "+g+Vr),M.style[Ot]=x||"translate(0, 0)"},Zg=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,M=n.forceCSS,S=parseFloat(o),x=parseFloat(a),w,A,T,R,v;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=js,c*=js,w=Math.cos(l)*h,A=Math.sin(l)*h,T=Math.sin(l-c)*-f,R=Math.cos(l-c)*f,c&&(u*=js,v=Math.tan(c-u),v=Math.sqrt(1+v*v),T*=v,R*=v,u&&(v=Math.tan(u),v=Math.sqrt(1+v*v),w*=v,A*=v)),w=Gt(w),A=Gt(A),T=Gt(T),R=Gt(R)):(w=h,R=f,A=T=0),(S&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(S=Ur(d,"x",o,"px"),x=Ur(d,"y",a,"px")),(_||g||m||p)&&(S=Gt(S+_-(_*w+g*T)+m),x=Gt(x+g-(_*A+g*R)+p)),(i||r)&&(v=d.getBBox(),S=Gt(S+i/100*v.width),x=Gt(x+r/100*v.height)),v="matrix("+w+","+A+","+T+","+R+","+S+","+x+")",d.setAttribute("transform",v),M&&(d.style[Ot]=v)},Jg=function(e,t,n,i,r){var o=360,a=cn(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?$r:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=r.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*bf)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*bf)%o-~~(c/o)*o)),e._pt=f=new Wn(e._pt,t,n,i,c,Ng),f.e=u,f.u="deg",e._props.push(n),f},Lf=function(e,t){for(var n in t)e[n]=t[n];return e},Qg=function(e,t,n){var i=Lf({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ot]=t,a=xa(n,1),Nr(n,Ot),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ot],o[Ot]=t,a=xa(n,1),o[Ot]=c);for(l in lr)c=i[l],u=a[l],c!==u&&r.indexOf(l)<0&&(d=gn(c),_=gn(u),h=d!==_?Ur(n,l,c,_):parseFloat(c),f=parseFloat(u),e._pt=new Wn(e._pt,a,l,h,f-h,mu),e._pt.u=_||0,e._props.push(l));Lf(a,i)};Gn("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",o=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(a){return e<2?s+a:"border"+a+s});Bl[e>1?"border"+s:s]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(_){return er(a,_,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(_,g){return d[_]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,d,h)}});var mm={name:"css",register:gu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,d,_,g,m,p,M,S,x,w,A,T,R,v;Uh||gu(),this.styles=this.styles||lm(e),R=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(Qn[g]&&Jp(g,t,n,i,e,r)))){if(d=typeof u,_=Bl[g],d==="function"&&(u=u.call(n,i,e,r),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=da(u)),_)_(this,e,g,u,n)&&(T=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",Rr.lastIndex=0,Rr.test(c)||(m=gn(c),p=gn(u),p?m!==p&&(c=Ur(e,g,c,p)+p):m&&(u+=m)),this.add(a,"setProperty",c,u,i,r,0,0,g),o.push(g),R.push(g,0,a[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,r):l[g],cn(c)&&~c.indexOf("random(")&&(c=da(c)),gn(c+"")||c==="auto"||(c+=oi.units[g]||gn(er(e,g))||""),(c+"").charAt(1)==="="&&(c=er(e,g))):c=er(e,g),f=parseFloat(c),M=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),h=parseFloat(u),g in Fi&&(g==="autoAlpha"&&(f===1&&er(e,"visibility")==="hidden"&&h&&(f=0),R.push("visibility",0,a.visibility),Sr(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=Fi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),S=g in lr,S){if(this.styles.save(g),v=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=ii(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var y=e.style.perspective;e.style.perspective=u,u=ii(e,"perspective"),y?e.style.perspective=y:Nr(e,"perspective")}h=parseFloat(u)}if(x||(w=e._gsap,w.renderTransform&&!t.parseTransform||xa(e,t.parseTransform),A=t.smoothOrigin!==!1&&w.smooth,x=this._pt=new Wn(this._pt,a,Ot,0,1,w.renderTransform,w,0,-1),x.dep=1),g==="scale")this._pt=new Wn(this._pt,w,"scaleY",w.scaleY,(M?qs(w.scaleY,M+h):h)-w.scaleY||0,mu),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){R.push(Xn,0,a[Xn]),u=Kg(u),w.svg?xu(e,u,0,A,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==w.zOrigin&&Sr(this,w,"zOrigin",w.zOrigin,p),Sr(this,a,g,kl(c),kl(u)));continue}else if(g==="svgOrigin"){xu(e,u,1,A,0,this);continue}else if(g in fm){Jg(this,w,g,f,M?qs(f,M+u):u);continue}else if(g==="smoothOrigin"){Sr(this,w,"smooth",w.smooth,u);continue}else if(g==="force3D"){w[g]=u;continue}else if(g==="transform"){Qg(this,u,e);continue}}else g in a||(g=lo(g)||g);if(S||(h||h===0)&&(f||f===0)&&!Ig.test(u)&&g in a)m=(c+"").substr((f+"").length),h||(h=0),p=gn(u)||(g in oi.units?oi.units[g]:m),m!==p&&(f=Ur(e,g,c,p)),this._pt=new Wn(this._pt,S?w:a,g,f,(M?qs(f,M+h):h)-f,!S&&(p==="px"||g==="zIndex")&&t.autoRound!==!1?Og:mu),this._pt.u=p||0,S&&v!==u?(this._pt.b=c,this._pt.e=v,this._pt.r=Fg):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Ug);else if(g in a)qg.call(this,e,g,c,M?M+u:u);else if(g in e)this.add(e,g,c||e[g],M?M+u:u,i,r);else if(g!=="parseTransform"){bh(g,u);continue}S||(g in a?R.push(g,0,a[g]):typeof e[g]=="function"?R.push(g,2,e[g]()):R.push(g,1,c||e[g])),o.push(g)}}T&&im(this)},render:function(e,t){if(t.tween._time||!Fh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:er,aliases:Fi,getSetter:function(e,t,n){var i=Fi[t];return i&&i.indexOf(",")<0&&(t=i),t in lr&&t!==Xn&&(e._gsap.x||er(e,"x"))?n&&Ef===n?t==="scale"?Hg:zg:(Ef=n||{})&&(t==="scale"?Vg:Gg):e.style&&!Sh(e.style[t])?Bg:~t.indexOf("-")?kg:Ih(e,t)},core:{_removeProperty:Nr,_getMatrix:Bh}};Yn.utils.checkPrefix=lo;Yn.core.getStyleSaver=lm;(function(s,e,t,n){var i=Gn(s+","+e+","+t,function(r){lr[r]=1});Gn(e,function(r){oi.units[r]="deg",fm[r]=1}),Fi[i[13]]=s+","+e,Gn(n,function(r){var o=r.split(":");Fi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Gn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){oi.units[s]="px"});Yn.registerPlugin(mm);var Pt=Yn.registerPlugin(mm)||Yn;Pt.core.Tween;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kh="172",e0=0,If=1,t0=2,_m=1,gm=2,Zi=3,cr=0,yn=1,Ln=2,Cr=0,$s=1,zl=2,Nf=3,vu=4,n0=5,ts=100,i0=101,r0=102,s0=103,o0=104,a0=200,l0=201,c0=202,u0=203,yu=204,Mu=205,h0=206,f0=207,d0=208,p0=209,m0=210,_0=211,g0=212,x0=213,v0=214,Su=0,Tu=1,Eu=2,co=3,bu=4,Au=5,wu=6,Ru=7,xm=0,y0=1,M0=2,Pr=0,S0=1,T0=2,E0=3,b0=4,A0=5,w0=6,vm=7,Uf="attached",R0="detached",ym=300,uo=301,ho=302,Cu=303,Pu=304,tc=306,fo=1e3,Tr=1001,Hl=1002,Un=1003,Mm=1004,Go=1005,ri=1006,gl=1007,nr=1008,ur=1009,Sm=1010,Tm=1011,va=1012,zh=1013,fs=1014,Pi=1015,Aa=1016,Hh=1017,Vh=1018,po=1020,Em=35902,bm=1021,Am=1022,yi=1023,wm=1024,Rm=1025,Zs=1026,mo=1027,Gh=1028,Wh=1029,Cm=1030,Xh=1031,Yh=1033,xl=33776,vl=33777,yl=33778,Ml=33779,Du=35840,Lu=35841,Iu=35842,Nu=35843,Uu=36196,Fu=37492,Ou=37496,Bu=37808,ku=37809,zu=37810,Hu=37811,Vu=37812,Gu=37813,Wu=37814,Xu=37815,Yu=37816,qu=37817,Ku=37818,ju=37819,$u=37820,Zu=37821,Sl=36492,Ju=36494,Qu=36495,Pm=36283,eh=36284,th=36285,nh=36286,ya=2300,Ma=2301,gc=2302,Ff=2400,Of=2401,Bf=2402,C0=2500,P0=0,Dm=1,ih=2,D0=3200,L0=3201,Lm=0,I0=1,vr="",Ft="srgb",Mn="srgb-linear",Vl="linear",St="srgb",Ms=7680,kf=519,N0=512,U0=513,F0=514,Im=515,O0=516,B0=517,k0=518,z0=519,rh=35044,zf="300 es",ir=2e3,Gl=2001;class So{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hf=1234567;const Qo=Math.PI/180,_o=180/Math.PI;function Di(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[s&255]+dn[s>>8&255]+dn[s>>16&255]+dn[s>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function rt(s,e,t){return Math.max(e,Math.min(t,s))}function qh(s,e){return(s%e+e)%e}function H0(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function V0(s,e,t){return s!==e?(t-s)/(e-s):0}function ea(s,e,t){return(1-t)*s+t*e}function G0(s,e,t,n){return ea(s,e,1-Math.exp(-t*n))}function W0(s,e=1){return e-Math.abs(qh(s,e*2)-e)}function X0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Y0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function q0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function K0(s,e){return s+Math.random()*(e-s)}function j0(s){return s*(.5-Math.random())}function $0(s){s!==void 0&&(Hf=s);let e=Hf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Z0(s){return s*Qo}function J0(s){return s*_o}function Q0(s){return(s&s-1)===0&&s!==0}function ex(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function tx(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function nx(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*h,l*f,a*c);break;case"YZY":s.set(l*f,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*f,a*u,a*c);break;case"XZX":s.set(a*u,l*_,l*d,a*c);break;case"YXY":s.set(l*d,a*u,l*_,a*c);break;case"ZYZ":s.set(l*_,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ri(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function yt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Nm={DEG2RAD:Qo,RAD2DEG:_o,generateUUID:Di,clamp:rt,euclideanModulo:qh,mapLinear:H0,inverseLerp:V0,lerp:ea,damp:G0,pingpong:W0,smoothstep:X0,smootherstep:Y0,randInt:q0,randFloat:K0,randFloatSpread:j0,seededRandom:$0,degToRad:Z0,radToDeg:J0,isPowerOfTwo:Q0,ceilPowerOfTwo:ex,floorPowerOfTwo:tx,setQuaternionFromProperEuler:nx,normalize:yt,denormalize:Ri};class ct{constructor(e=0,t=0){ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,t,n,i,r,o,a,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],_=n[8],g=i[0],m=i[3],p=i[6],M=i[1],S=i[4],x=i[7],w=i[2],A=i[5],T=i[8];return r[0]=o*g+a*M+l*w,r[3]=o*m+a*S+l*A,r[6]=o*p+a*x+l*T,r[1]=c*g+u*M+h*w,r[4]=c*m+u*S+h*A,r[7]=c*p+u*x+h*T,r[2]=f*g+d*M+_*w,r[5]=f*m+d*S+_*A,r[8]=f*p+d*x+_*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,d=c*r-o*l,_=t*h+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(i*c-u*n)*g,e[2]=(a*n-i*o)*g,e[3]=f*g,e[4]=(u*t-i*l)*g,e[5]=(i*r-a*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(xc.makeScale(e,t)),this}rotate(e){return this.premultiply(xc.makeRotation(-e)),this}translate(e,t){return this.premultiply(xc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xc=new Ke;function Um(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Sa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ix(){const s=Sa("canvas");return s.style.display="block",s}const Vf={};function zs(s){s in Vf||(Vf[s]=!0,console.warn(s))}function rx(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function sx(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ox(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Gf=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wf=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ax(){const s={enabled:!0,workingColorSpace:Mn,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===St&&(i.r=sr(i.r),i.g=sr(i.g),i.b=sr(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===St&&(i.r=Js(i.r),i.g=Js(i.g),i.b=Js(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===vr?Vl:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Mn]:{primaries:e,whitePoint:n,transfer:Vl,toXYZ:Gf,fromXYZ:Wf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:e,whitePoint:n,transfer:St,toXYZ:Gf,fromXYZ:Wf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}}),s}const at=ax();function sr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Js(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ss;class lx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ss===void 0&&(Ss=Sa("canvas")),Ss.width=e.width,Ss.height=e.height;const n=Ss.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ss}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Sa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=sr(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(sr(t[n]/255)*255):t[n]=sr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let cx=0;class Fm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cx++}),this.uuid=Di(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(vc(i[o].image)):r.push(vc(i[o]))}else r=vc(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function vc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?lx.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ux=0;class tn extends So{constructor(e=tn.DEFAULT_IMAGE,t=tn.DEFAULT_MAPPING,n=Tr,i=Tr,r=ri,o=nr,a=yi,l=ur,c=tn.DEFAULT_ANISOTROPY,u=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=Di(),this.name="",this.source=new Fm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ym)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fo:e.x=e.x-Math.floor(e.x);break;case Tr:e.x=e.x<0?0:1;break;case Hl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fo:e.y=e.y-Math.floor(e.y);break;case Tr:e.y=e.y<0?0:1;break;case Hl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=ym;tn.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,n=0,i=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,x=(d+1)/2,w=(p+1)/2,A=(u+f)/4,T=(h+g)/4,R=(_+m)/4;return S>x&&S>w?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=A/n,r=T/n):x>w?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=A/i,r=R/i):w<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(w),n=T/r,i=R/r),this.set(n,i,r,t),this}let M=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(m-_)/M,this.y=(h-g)/M,this.z=(f-u)/M,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this.w=rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this.w=rt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hx extends So{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new tn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Fm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ds extends hx{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Om extends tn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Un,this.minFilter=Un,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class fx extends tn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Un,this.minFilter=Un,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[o+0],d=r[o+1],_=r[o+2],g=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==f||c!==d||u!==_){let m=1-a;const p=l*f+c*d+u*_+h*g,M=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const w=Math.sqrt(S),A=Math.atan2(w,p*M);m=Math.sin(m*A)/w,a=Math.sin(a*A)/w}const x=a*M;if(l=l*m+f*x,c=c*m+d*x,u=u*m+_*x,h=h*m+g*x,m===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],f=r[o+1],d=r[o+2],_=r[o+3];return e[t]=a*_+u*h+l*d-c*f,e[t+1]=l*_+u*f+c*h-a*d,e[t+2]=c*_+u*d+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),f=l(n/2),d=l(i/2),_=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h+f*d*_;break;case"YZX":this._x=f*u*h+c*d*_,this._y=c*d*h+f*u*_,this._z=c*u*_-f*d*h,this._w=c*u*h-f*d*_;break;case"XZY":this._x=f*u*h-c*d*_,this._y=c*d*h-f*u*_,this._z=c*u*_+f*d*h,this._w=c*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(r-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,n=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=rt(this.x,e.x,t.x),this.y=rt(this.y,e.y,t.y),this.z=rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=rt(this.x,e,t),this.y=rt(this.y,e,t),this.z=rt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(rt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return yc.copy(this).projectOnVector(e),this.sub(yc)}reflect(e){return this.sub(yc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yc=new k,Xf=new kr;class Mi{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ei):Ei.fromBufferAttribute(r,o),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ca.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ca.copy(n.boundingBox)),Ca.applyMatrix4(e.matrixWorld),this.union(Ca)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Po),Pa.subVectors(this.max,Po),Ts.subVectors(e.a,Po),Es.subVectors(e.b,Po),bs.subVectors(e.c,Po),hr.subVectors(Es,Ts),fr.subVectors(bs,Es),Gr.subVectors(Ts,bs);let t=[0,-hr.z,hr.y,0,-fr.z,fr.y,0,-Gr.z,Gr.y,hr.z,0,-hr.x,fr.z,0,-fr.x,Gr.z,0,-Gr.x,-hr.y,hr.x,0,-fr.y,fr.x,0,-Gr.y,Gr.x,0];return!Mc(t,Ts,Es,bs,Pa)||(t=[1,0,0,0,1,0,0,0,1],!Mc(t,Ts,Es,bs,Pa))?!1:(Da.crossVectors(hr,fr),t=[Da.x,Da.y,Da.z],Mc(t,Ts,Es,bs,Pa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Wi=[new k,new k,new k,new k,new k,new k,new k,new k],Ei=new k,Ca=new Mi,Ts=new k,Es=new k,bs=new k,hr=new k,fr=new k,Gr=new k,Po=new k,Pa=new k,Da=new k,Wr=new k;function Mc(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Wr.fromArray(s,r);const a=i.x*Math.abs(Wr.x)+i.y*Math.abs(Wr.y)+i.z*Math.abs(Wr.z),l=e.dot(Wr),c=t.dot(Wr),u=n.dot(Wr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const dx=new Mi,Do=new k,Sc=new k;class Vi{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):dx.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Do.subVectors(e,this.center);const t=Do.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Do,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Do.copy(e.center).add(Sc)),this.expandByPoint(Do.copy(e.center).sub(Sc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xi=new k,Tc=new k,La=new k,dr=new k,Ec=new k,Ia=new k,bc=new k;class nc{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xi.copy(this.origin).addScaledVector(this.direction,t),Xi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Tc.copy(e).add(t).multiplyScalar(.5),La.copy(t).sub(e).normalize(),dr.copy(this.origin).sub(Tc);const r=e.distanceTo(t)*.5,o=-this.direction.dot(La),a=dr.dot(this.direction),l=-dr.dot(La),c=dr.lengthSq(),u=Math.abs(1-o*o);let h,f,d,_;if(u>0)if(h=o*l-a,f=o*a-l,_=r*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),d=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Tc).addScaledVector(La,f),d}intersectSphere(e,t){Xi.subVectors(e.center,this.origin);const n=Xi.dot(this.direction),i=Xi.dot(Xi)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Xi)!==null}intersectTriangle(e,t,n,i,r){Ec.subVectors(t,e),Ia.subVectors(n,e),bc.crossVectors(Ec,Ia);let o=this.direction.dot(bc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;dr.subVectors(this.origin,e);const l=a*this.direction.dot(Ia.crossVectors(dr,Ia));if(l<0)return null;const c=a*this.direction.dot(Ec.cross(dr));if(c<0||l+c>o)return null;const u=-a*dr.dot(bc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class We{constructor(e,t,n,i,r,o,a,l,c,u,h,f,d,_,g,m){We.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,h,f,d,_,g,m)}set(e,t,n,i,r,o,a,l,c,u,h,f,d,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new We().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/As.setFromMatrixColumn(e,0).length(),r=1/As.setFromMatrixColumn(e,1).length(),o=1/As.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,d=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+_*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=_+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f+g*a,t[4]=_*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-_,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,_=c*u,g=c*h;t[0]=f-g*a,t[4]=-o*h,t[8]=_+d*a,t[1]=d+_*a,t[5]=o*u,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=_*c-d,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=d*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-f*h,t[8]=_*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+_,t[10]=f-g*h}else if(e.order==="XZY"){const f=o*l,d=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+g,t[5]=o*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=a*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(px,e,mx)}lookAt(e,t,n){const i=this.elements;return jn.subVectors(e,t),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),pr.crossVectors(n,jn),pr.lengthSq()===0&&(Math.abs(n.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),pr.crossVectors(n,jn)),pr.normalize(),Na.crossVectors(jn,pr),i[0]=pr.x,i[4]=Na.x,i[8]=jn.x,i[1]=pr.y,i[5]=Na.y,i[9]=jn.y,i[2]=pr.z,i[6]=Na.z,i[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],_=n[2],g=n[6],m=n[10],p=n[14],M=n[3],S=n[7],x=n[11],w=n[15],A=i[0],T=i[4],R=i[8],v=i[12],y=i[1],P=i[5],U=i[9],O=i[13],W=i[2],Y=i[6],q=i[10],z=i[14],N=i[3],$=i[7],D=i[11],ae=i[15];return r[0]=o*A+a*y+l*W+c*N,r[4]=o*T+a*P+l*Y+c*$,r[8]=o*R+a*U+l*q+c*D,r[12]=o*v+a*O+l*z+c*ae,r[1]=u*A+h*y+f*W+d*N,r[5]=u*T+h*P+f*Y+d*$,r[9]=u*R+h*U+f*q+d*D,r[13]=u*v+h*O+f*z+d*ae,r[2]=_*A+g*y+m*W+p*N,r[6]=_*T+g*P+m*Y+p*$,r[10]=_*R+g*U+m*q+p*D,r[14]=_*v+g*O+m*z+p*ae,r[3]=M*A+S*y+x*W+w*N,r[7]=M*T+S*P+x*Y+w*$,r[11]=M*R+S*U+x*q+w*D,r[15]=M*v+S*O+x*z+w*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+r*l*h-i*c*h-r*a*f+n*c*f+i*a*d-n*l*d)+g*(+t*l*d-t*c*f+r*o*f-i*o*d+i*c*u-r*l*u)+m*(+t*c*h-t*a*d-r*o*h+n*o*d+r*a*u-n*c*u)+p*(-i*a*u-t*l*h+t*a*f+i*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],g=e[13],m=e[14],p=e[15],M=h*m*c-g*f*c+g*l*d-a*m*d-h*l*p+a*f*p,S=_*f*c-u*m*c-_*l*d+o*m*d+u*l*p-o*f*p,x=u*g*c-_*h*c+_*a*d-o*g*d-u*a*p+o*h*p,w=_*h*l-u*g*l-_*a*f+o*g*f+u*a*m-o*h*m,A=t*M+n*S+i*x+r*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=M*T,e[1]=(g*f*r-h*m*r-g*i*d+n*m*d+h*i*p-n*f*p)*T,e[2]=(a*m*r-g*l*r+g*i*c-n*m*c-a*i*p+n*l*p)*T,e[3]=(h*l*r-a*f*r-h*i*c+n*f*c+a*i*d-n*l*d)*T,e[4]=S*T,e[5]=(u*m*r-_*f*r+_*i*d-t*m*d-u*i*p+t*f*p)*T,e[6]=(_*l*r-o*m*r-_*i*c+t*m*c+o*i*p-t*l*p)*T,e[7]=(o*f*r-u*l*r+u*i*c-t*f*c-o*i*d+t*l*d)*T,e[8]=x*T,e[9]=(_*h*r-u*g*r-_*n*d+t*g*d+u*n*p-t*h*p)*T,e[10]=(o*g*r-_*a*r+_*n*c-t*g*c-o*n*p+t*a*p)*T,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*d-t*a*d)*T,e[12]=w*T,e[13]=(u*g*i-_*h*i+_*n*f-t*g*f-u*n*m+t*h*m)*T,e[14]=(_*a*i-o*g*i-_*n*l+t*g*l+o*n*m-t*a*m)*T,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*f+t*a*f)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,d=r*u,_=r*h,g=o*u,m=o*h,p=a*h,M=l*c,S=l*u,x=l*h,w=n.x,A=n.y,T=n.z;return i[0]=(1-(g+p))*w,i[1]=(d+x)*w,i[2]=(_-S)*w,i[3]=0,i[4]=(d-x)*A,i[5]=(1-(f+p))*A,i[6]=(m+M)*A,i[7]=0,i[8]=(_+S)*T,i[9]=(m-M)*T,i[10]=(1-(f+g))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=As.set(i[0],i[1],i[2]).length();const o=As.set(i[4],i[5],i[6]).length(),a=As.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],bi.copy(this);const c=1/r,u=1/o,h=1/a;return bi.elements[0]*=c,bi.elements[1]*=c,bi.elements[2]*=c,bi.elements[4]*=u,bi.elements[5]*=u,bi.elements[6]*=u,bi.elements[8]*=h,bi.elements[9]*=h,bi.elements[10]*=h,t.setFromRotationMatrix(bi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=ir){const l=this.elements,c=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let d,_;if(a===ir)d=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Gl)d=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=ir){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-r),f=(t+e)*c,d=(n+i)*u;let _,g;if(a===ir)_=(o+r)*h,g=-2*h;else if(a===Gl)_=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const As=new k,bi=new We,px=new k(0,0,0),mx=new k(1,1,1),pr=new k,Na=new k,jn=new k,Yf=new We,qf=new kr;class Hi{constructor(e=0,t=0,n=0,i=Hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qf.setFromEuler(this),this.setFromQuaternion(qf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hi.DEFAULT_ORDER="XYZ";class Bm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _x=0;const Kf=new k,ws=new kr,Yi=new We,Ua=new k,Lo=new k,gx=new k,xx=new kr,jf=new k(1,0,0),$f=new k(0,1,0),Zf=new k(0,0,1),Jf={type:"added"},vx={type:"removed"},Rs={type:"childadded",child:null},Ac={type:"childremoved",child:null};class It extends So{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_x++}),this.uuid=Di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new k,t=new Hi,n=new kr,i=new k(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new We},normalMatrix:{value:new Ke}}),this.matrix=new We,this.matrixWorld=new We,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.multiply(ws),this}rotateOnWorldAxis(e,t){return ws.setFromAxisAngle(e,t),this.quaternion.premultiply(ws),this}rotateX(e){return this.rotateOnAxis(jf,e)}rotateY(e){return this.rotateOnAxis($f,e)}rotateZ(e){return this.rotateOnAxis(Zf,e)}translateOnAxis(e,t){return Kf.copy(e).applyQuaternion(this.quaternion),this.position.add(Kf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jf,e)}translateY(e){return this.translateOnAxis($f,e)}translateZ(e){return this.translateOnAxis(Zf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ua.copy(e):Ua.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Lo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(Lo,Ua,this.up):Yi.lookAt(Ua,Lo,this.up),this.quaternion.setFromRotationMatrix(Yi),i&&(Yi.extractRotation(i.matrixWorld),ws.setFromRotationMatrix(Yi),this.quaternion.premultiply(ws.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jf),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vx),Ac.child=e,this.dispatchEvent(Ac),Ac.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jf),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,e,gx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lo,xx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}It.DEFAULT_UP=new k(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ai=new k,qi=new k,wc=new k,Ki=new k,Cs=new k,Ps=new k,Qf=new k,Rc=new k,Cc=new k,Pc=new k,Dc=new pt,Lc=new pt,Ic=new pt;class Ci{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ai.subVectors(e,t),i.cross(Ai);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Ai.subVectors(i,t),qi.subVectors(n,t),wc.subVectors(e,t);const o=Ai.dot(Ai),a=Ai.dot(qi),l=Ai.dot(wc),c=qi.dot(qi),u=qi.dot(wc),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*l-a*u)*f,_=(o*u-a*l)*f;return r.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ki)===null?!1:Ki.x>=0&&Ki.y>=0&&Ki.x+Ki.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ki.x),l.addScaledVector(o,Ki.y),l.addScaledVector(a,Ki.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return Dc.setScalar(0),Lc.setScalar(0),Ic.setScalar(0),Dc.fromBufferAttribute(e,t),Lc.fromBufferAttribute(e,n),Ic.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Dc,r.x),o.addScaledVector(Lc,r.y),o.addScaledVector(Ic,r.z),o}static isFrontFacing(e,t,n,i){return Ai.subVectors(n,t),qi.subVectors(e,t),Ai.cross(qi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ai.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),Ai.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ci.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Ci.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Cs.subVectors(i,n),Ps.subVectors(r,n),Rc.subVectors(e,n);const l=Cs.dot(Rc),c=Ps.dot(Rc);if(l<=0&&c<=0)return t.copy(n);Cc.subVectors(e,i);const u=Cs.dot(Cc),h=Ps.dot(Cc);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Cs,o);Pc.subVectors(e,r);const d=Cs.dot(Pc),_=Ps.dot(Pc);if(_>=0&&d<=_)return t.copy(r);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(Ps,a);const m=u*_-d*h;if(m<=0&&h-u>=0&&d-_>=0)return Qf.subVectors(r,i),a=(h-u)/(h-u+(d-_)),t.copy(i).addScaledVector(Qf,a);const p=1/(m+g+f);return o=g*p,a=f*p,t.copy(n).addScaledVector(Cs,o).addScaledVector(Ps,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const km={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mr={h:0,s:0,l:0},Fa={h:0,s:0,l:0};function Nc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=at.workingColorSpace){if(e=qh(e,1),t=rt(t,0,1),n=rt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Nc(o,r,e+1/3),this.g=Nc(o,r,e),this.b=Nc(o,r,e-1/3)}return at.toWorkingColorSpace(this,i),this}setStyle(e,t=Ft){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){const n=km[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}copyLinearToSRGB(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return at.fromWorkingColorSpace(pn.copy(this),e),Math.round(rt(pn.r*255,0,255))*65536+Math.round(rt(pn.g*255,0,255))*256+Math.round(rt(pn.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.fromWorkingColorSpace(pn.copy(this),t);const n=pn.r,i=pn.g,r=pn.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=at.workingColorSpace){return at.fromWorkingColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=Ft){at.fromWorkingColorSpace(pn.copy(this),e);const t=pn.r,n=pn.g,i=pn.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(mr),this.setHSL(mr.h+e,mr.s+t,mr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(mr),e.getHSL(Fa);const n=ea(mr.h,Fa.h,t),i=ea(mr.s,Fa.s,t),r=ea(mr.l,Fa.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new Ge;Ge.NAMES=km;let yx=0;class Bi extends So{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yx++}),this.uuid=Di(),this.name="",this.type="Material",this.blending=$s,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yu,this.blendDst=Mu,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ms,this.stencilZFail=Ms,this.stencilZPass=Ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$s&&(n.blending=this.blending),this.side!==cr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==yu&&(n.blendSrc=this.blendSrc),this.blendDst!==Mu&&(n.blendDst=this.blendDst),this.blendEquation!==ts&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==co&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ms&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ms&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ms&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class si extends Bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=xm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qt=new k,Oa=new ct;class Xt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=rh,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Oa.fromBufferAttribute(this,t),Oa.applyMatrix3(e),this.setXY(t,Oa.x,Oa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ri(t,this.array)),t}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ri(t,this.array)),t}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ri(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ri(t,this.array)),t}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array),r=yt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rh&&(e.usage=this.usage),e}}class zm extends Xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Hm extends Xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Fn extends Xt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Mx=0;const fi=new We,Uc=new It,Ds=new k,$n=new Mi,Io=new Mi,sn=new k;class On extends So{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mx++}),this.uuid=Di(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Um(e)?Hm:zm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,t,n){return fi.makeTranslation(e,t,n),this.applyMatrix4(fi),this}scale(e,t,n){return fi.makeScale(e,t,n),this.applyMatrix4(fi),this}lookAt(e){return Uc.lookAt(e),Uc.updateMatrix(),this.applyMatrix4(Uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Fn(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const r=e[i];t.setXYZ(i,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];$n.setFromBufferAttribute(r),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if($n.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Io.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors($n.min,Io.min),$n.expandByPoint(sn),sn.addVectors($n.max,Io.max),$n.expandByPoint(sn)):($n.expandByPoint(Io.min),$n.expandByPoint(Io.max))}$n.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)sn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(sn));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)sn.fromBufferAttribute(a,c),l&&(Ds.fromBufferAttribute(e,c),sn.add(Ds)),i=Math.max(i,n.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new k,l[R]=new k;const c=new k,u=new k,h=new k,f=new ct,d=new ct,_=new ct,g=new k,m=new k;function p(R,v,y){c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,v),h.fromBufferAttribute(n,y),f.fromBufferAttribute(r,R),d.fromBufferAttribute(r,v),_.fromBufferAttribute(r,y),u.sub(c),h.sub(c),d.sub(f),_.sub(f);const P=1/(d.x*_.y-_.x*d.y);isFinite(P)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(P),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(P),a[R].add(g),a[v].add(g),a[y].add(g),l[R].add(m),l[v].add(m),l[y].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let R=0,v=M.length;R<v;++R){const y=M[R],P=y.start,U=y.count;for(let O=P,W=P+U;O<W;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const S=new k,x=new k,w=new k,A=new k;function T(R){w.fromBufferAttribute(i,R),A.copy(w);const v=a[R];S.copy(v),S.sub(w.multiplyScalar(w.dot(v))).normalize(),x.crossVectors(A,v);const P=x.dot(l[R])<0?-1:1;o.setXYZW(R,S.x,S.y,S.z,P)}for(let R=0,v=M.length;R<v;++R){const y=M[R],P=y.start,U=y.count;for(let O=P,W=P+U;O<W;O+=3)T(e.getX(O+0)),T(e.getX(O+1)),T(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new k,r=new k,o=new k,a=new k,l=new k,c=new k,u=new k,h=new k;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let p=0;p<u;p++)f[_++]=c[d++]}return new Xt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new On,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ed=new We,Xr=new nc,Ba=new Vi,td=new k,ka=new k,za=new k,Ha=new k,Fc=new k,Va=new k,nd=new k,Ga=new k;class dt extends It{constructor(e=new On,t=new si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Va.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(Fc.fromBufferAttribute(h,e),o?Va.addScaledVector(Fc,u):Va.addScaledVector(Fc.sub(t),u))}t.add(Va)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ba.copy(n.boundingSphere),Ba.applyMatrix4(r),Xr.copy(e.ray).recast(e.near),!(Ba.containsPoint(Xr.origin)===!1&&(Xr.intersectSphere(Ba,td)===null||Xr.origin.distanceToSquared(td)>(e.far-e.near)**2))&&(ed.copy(r).invert(),Xr.copy(e.ray).applyMatrix4(ed),!(n.boundingBox!==null&&Xr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Xr)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=o[m.materialIndex],M=Math.max(m.start,d.start),S=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=M,w=S;x<w;x+=3){const A=a.getX(x),T=a.getX(x+1),R=a.getX(x+2);i=Wa(this,p,e,n,c,u,h,A,T,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const M=a.getX(m),S=a.getX(m+1),x=a.getX(m+2);i=Wa(this,o,e,n,c,u,h,M,S,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const m=f[_],p=o[m.materialIndex],M=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=M,w=S;x<w;x+=3){const A=x,T=x+1,R=x+2;i=Wa(this,p,e,n,c,u,h,A,T,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=_,p=g;m<p;m+=3){const M=m,S=m+1,x=m+2;i=Wa(this,o,e,n,c,u,h,M,S,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Sx(s,e,t,n,i,r,o,a){let l;if(e.side===yn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===cr,a),l===null)return null;Ga.copy(a),Ga.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Ga);return c<t.near||c>t.far?null:{distance:c,point:Ga.clone(),object:s}}function Wa(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,ka),s.getVertexPosition(l,za),s.getVertexPosition(c,Ha);const u=Sx(s,e,t,n,ka,za,Ha,nd);if(u){const h=new k;Ci.getBarycoord(nd,ka,za,Ha,h),i&&(u.uv=Ci.getInterpolatedAttribute(i,a,l,c,h,new ct)),r&&(u.uv1=Ci.getInterpolatedAttribute(r,a,l,c,h,new ct)),o&&(u.normal=Ci.getInterpolatedAttribute(o,a,l,c,h,new k),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new k,materialIndex:0};Ci.getNormal(ka,za,Ha,f.normal),u.face=f,u.barycoord=h}return u}class To extends On{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Fn(c,3)),this.setAttribute("normal",new Fn(u,3)),this.setAttribute("uv",new Fn(h,2));function _(g,m,p,M,S,x,w,A,T,R,v){const y=x/T,P=w/R,U=x/2,O=w/2,W=A/2,Y=T+1,q=R+1;let z=0,N=0;const $=new k;for(let D=0;D<q;D++){const ae=D*P-O;for(let Ce=0;Ce<Y;Ce++){const Qe=Ce*y-U;$[g]=Qe*M,$[m]=ae*S,$[p]=W,c.push($.x,$.y,$.z),$[g]=0,$[m]=0,$[p]=A>0?1:-1,u.push($.x,$.y,$.z),h.push(Ce/T),h.push(1-D/R),z+=1}}for(let D=0;D<R;D++)for(let ae=0;ae<T;ae++){const Ce=f+ae+Y*D,Qe=f+ae+Y*(D+1),j=f+(ae+1)+Y*(D+1),ne=f+(ae+1)+Y*D;l.push(Ce,Qe,ne),l.push(Qe,j,ne),N+=6}a.addGroup(d,N,v),d+=N,f+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new To(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function go(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function wn(s){const e={};for(let t=0;t<s.length;t++){const n=go(s[t]);for(const i in n)e[i]=n[i]}return e}function Tx(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Vm(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const Ex={clone:go,merge:wn};var bx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ax=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fr extends Bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bx,this.fragmentShader=Ax,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=go(e.uniforms),this.uniformsGroups=Tx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Gm extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new We,this.projectionMatrix=new We,this.projectionMatrixInverse=new We,this.coordinateSystem=ir}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _r=new k,id=new ct,rd=new ct;class Dn extends Gm{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_o*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _o*2*Math.atan(Math.tan(Qo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){_r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_r.x,_r.y).multiplyScalar(-e/_r.z),_r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_r.x,_r.y).multiplyScalar(-e/_r.z)}getViewSize(e,t){return this.getViewBounds(e,id,rd),t.subVectors(rd,id)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ls=-90,Is=1;class wx extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Dn(Ls,Is,e,t);i.layers=this.layers,this.add(i);const r=new Dn(Ls,Is,e,t);r.layers=this.layers,this.add(r);const o=new Dn(Ls,Is,e,t);o.layers=this.layers,this.add(o);const a=new Dn(Ls,Is,e,t);a.layers=this.layers,this.add(a);const l=new Dn(Ls,Is,e,t);l.layers=this.layers,this.add(l);const c=new Dn(Ls,Is,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===ir)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Gl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Wm extends tn{constructor(e,t,n,i,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:uo,super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Rx extends ds{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Wm(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ri}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new To(5,5,5),r=new Fr({name:"CubemapFromEquirect",uniforms:go(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yn,blending:Cr});r.uniforms.tEquirect.value=t;const o=new dt(i,r),a=t.minFilter;return t.minFilter===nr&&(t.minFilter=ri),new wx(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}class Kh extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Cx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=rh,this.updateRanges=[],this.version=0,this.uuid=Di()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const En=new k;class jh{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyMatrix4(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyNormalMatrix(e),this.setXYZ(t,En.x,En.y,En.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.transformDirection(e),this.setXYZ(t,En.x,En.y,En.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ri(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=yt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=yt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ri(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ri(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ri(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ri(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=yt(t,this.array),n=yt(n,this.array),i=yt(i,this.array),r=yt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new jh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const sd=new k,od=new pt,ad=new pt,Px=new k,ld=new We,Xa=new k,Oc=new Vi,cd=new We,Bc=new nc;class Dx extends dt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Uf,this.bindMatrix=new We,this.bindMatrixInverse=new We,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Mi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Xa),this.boundingBox.expandByPoint(Xa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Vi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Xa),this.boundingSphere.expandByPoint(Xa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Oc.copy(this.boundingSphere),Oc.applyMatrix4(i),e.ray.intersectsSphere(Oc)!==!1&&(cd.copy(i).invert(),Bc.copy(e.ray).applyMatrix4(cd),!(this.boundingBox!==null&&Bc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Bc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new pt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Uf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===R0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;od.fromBufferAttribute(i.attributes.skinIndex,e),ad.fromBufferAttribute(i.attributes.skinWeight,e),sd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=ad.getComponent(r);if(o!==0){const a=od.getComponent(r);ld.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Px.copy(sd).applyMatrix4(ld),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Xm extends It{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ym extends tn{constructor(e=null,t=1,n=1,i,r,o,a,l,c=Un,u=Un,h,f){super(null,o,a,l,c,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ud=new We,Lx=new We;class $h{constructor(e=[],t=[]){this.uuid=Di(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new We)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new We;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Lx;ud.multiplyMatrices(a,t[r]),ud.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new $h(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ym(t,e,e,yi,Pi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Xm),this.bones.push(o),this.boneInverses.push(new We().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class sh extends Xt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ns=new We,hd=new We,Ya=[],fd=new Mi,Ix=new We,No=new dt,Uo=new Vi;class Nx extends dt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new sh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Ix)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Mi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ns),fd.copy(e.boundingBox).applyMatrix4(Ns),this.boundingBox.union(fd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ns),Uo.copy(e.boundingSphere).applyMatrix4(Ns),this.boundingSphere.union(Uo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(No.geometry=this.geometry,No.material=this.material,No.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Uo.copy(this.boundingSphere),Uo.applyMatrix4(n),e.ray.intersectsSphere(Uo)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ns),hd.multiplyMatrices(n,Ns),No.matrixWorld=hd,No.raycast(e,Ya);for(let o=0,a=Ya.length;o<a;o++){const l=Ya[o];l.instanceId=r,l.object=this,t.push(l)}Ya.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new sh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ym(new Float32Array(i*this.count),i,this.count,Gh,Pi));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const kc=new k,Ux=new k,Fx=new Ke;class Zr{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=kc.subVectors(n,t).cross(Ux.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(kc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Fx.getNormalMatrix(e),i=this.coplanarPoint(kc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yr=new Vi,qa=new k;class Zh{constructor(e=new Zr,t=new Zr,n=new Zr,i=new Zr,r=new Zr,o=new Zr){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ir){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],f=i[7],d=i[8],_=i[9],g=i[10],m=i[11],p=i[12],M=i[13],S=i[14],x=i[15];if(n[0].setComponents(l-r,f-c,m-d,x-p).normalize(),n[1].setComponents(l+r,f+c,m+d,x+p).normalize(),n[2].setComponents(l+o,f+u,m+_,x+M).normalize(),n[3].setComponents(l-o,f-u,m-_,x-M).normalize(),n[4].setComponents(l-a,f-h,m-g,x-S).normalize(),t===ir)n[5].setComponents(l+a,f+h,m+g,x+S).normalize();else if(t===Gl)n[5].setComponents(a,h,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yr)}intersectsSprite(e){return Yr.center.set(0,0,0),Yr.radius=.7071067811865476,Yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(qa.x=i.normal.x>0?e.max.x:e.min.x,qa.y=i.normal.y>0?e.max.y:e.min.y,qa.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(qa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qm extends Bi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Wl=new k,Xl=new k,dd=new We,Fo=new nc,Ka=new Vi,zc=new k,pd=new k;class Jh extends It{constructor(e=new On,t=new qm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Wl.fromBufferAttribute(t,i-1),Xl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Wl.distanceTo(Xl);e.setAttribute("lineDistance",new Fn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ka.copy(n.boundingSphere),Ka.applyMatrix4(i),Ka.radius+=r,e.ray.intersectsSphere(Ka)===!1)return;dd.copy(i).invert(),Fo.copy(e.ray).applyMatrix4(dd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let g=d,m=_-1;g<m;g+=c){const p=u.getX(g),M=u.getX(g+1),S=ja(this,e,Fo,l,p,M);S&&t.push(S)}if(this.isLineLoop){const g=u.getX(_-1),m=u.getX(d),p=ja(this,e,Fo,l,g,m);p&&t.push(p)}}else{const d=Math.max(0,o.start),_=Math.min(f.count,o.start+o.count);for(let g=d,m=_-1;g<m;g+=c){const p=ja(this,e,Fo,l,g,g+1);p&&t.push(p)}if(this.isLineLoop){const g=ja(this,e,Fo,l,_-1,d);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ja(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(Wl.fromBufferAttribute(o,i),Xl.fromBufferAttribute(o,r),t.distanceSqToSegment(Wl,Xl,zc,pd)>n)return;zc.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(zc);if(!(l<e.near||l>e.far))return{distance:l,point:pd.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const md=new k,_d=new k;class Ox extends Jh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)md.fromBufferAttribute(t,i),_d.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+md.distanceTo(_d);e.setAttribute("lineDistance",new Fn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Bx extends Jh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ic extends Bi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const gd=new We,oh=new nc,$a=new Vi,Za=new k;class Qh extends It{constructor(e=new On,t=new ic){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$a.copy(n.boundingSphere),$a.applyMatrix4(i),$a.radius+=r,e.ray.intersectsSphere($a)===!1)return;gd.copy(i).invert(),oh.copy(e.ray).applyMatrix4(gd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let _=f,g=d;_<g;_++){const m=c.getX(_);Za.fromBufferAttribute(h,m),xd(Za,m,l,i,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let _=f,g=d;_<g;_++)Za.fromBufferAttribute(h,_),xd(Za,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function xd(s,e,t,n,i,r,o){const a=oh.distanceSqToPoint(s);if(a<t){const l=new k;oh.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class In extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}class kx extends tn{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Km extends tn{constructor(e,t,n,i,r,o,a,l,c,u=Zs){if(u!==Zs&&u!==mo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Zs&&(n=fs),n===void 0&&u===mo&&(n=po),super(null,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Un,this.minFilter=l!==void 0?l:Un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Eo extends On{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,f=t/l,d=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const M=p*f-o;for(let S=0;S<c;S++){const x=S*h-r;_.push(x,-M,0),g.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const S=M+c*p,x=M+c*(p+1),w=M+1+c*(p+1),A=M+1+c*p;d.push(S,x,A),d.push(x,w,A)}this.setIndex(d),this.setAttribute("position",new Fn(_,3)),this.setAttribute("normal",new Fn(g,3)),this.setAttribute("uv",new Fn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eo(e.width,e.height,e.widthSegments,e.heightSegments)}}class ef extends On{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],u=[];let h=e;const f=(t-e)/i,d=new k,_=new ct;for(let g=0;g<=i;g++){for(let m=0;m<=n;m++){const p=r+m/n*o;d.x=h*Math.cos(p),d.y=h*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),_.x=(d.x/t+1)/2,_.y=(d.y/t+1)/2,u.push(_.x,_.y)}h+=f}for(let g=0;g<i;g++){const m=g*(n+1);for(let p=0;p<n;p++){const M=p+m,S=M,x=M+n+1,w=M+n+2,A=M+1;a.push(S,x,A),a.push(x,w,A)}}this.setIndex(a),this.setAttribute("position",new Fn(l,3)),this.setAttribute("normal",new Fn(c,3)),this.setAttribute("uv",new Fn(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ef(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class rc extends On{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new k,f=new k,d=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){const M=[],S=p/n;let x=0;p===0&&o===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let w=0;w<=t;w++){const A=w/t;h.x=-e*Math.cos(i+A*r)*Math.sin(o+S*a),h.y=e*Math.cos(o+S*a),h.z=e*Math.sin(i+A*r)*Math.sin(o+S*a),_.push(h.x,h.y,h.z),f.copy(h).normalize(),g.push(f.x,f.y,f.z),m.push(A+x,1-S),M.push(c++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){const S=u[p][M+1],x=u[p][M],w=u[p+1][M],A=u[p+1][M+1];(p!==0||o>0)&&d.push(S,x,A),(p!==n-1||l<Math.PI)&&d.push(x,w,A)}this.setIndex(d),this.setAttribute("position",new Fn(_,3)),this.setAttribute("normal",new Fn(g,3)),this.setAttribute("uv",new Fn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class mi extends Bi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lm,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zt extends mi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ct(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class zx extends Bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=D0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hx extends Bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ja(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Vx(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Gx(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function vd(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function jm(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class wa{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Wx extends wa{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ff,endingEnd:Ff}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Of:r=e,a=2*t-n;break;case Bf:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Of:o=e,l=2*n-t;break;case Bf:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,_=(n-t)/(i-t),g=_*_,m=g*_,p=-f*m+2*f*g-f*_,M=(1+f)*m+(-1.5-2*f)*g+(-.5+f)*_+1,S=(-1-d)*m+(1.5+d)*g+.5*_,x=d*m-d*g;for(let w=0;w!==a;++w)r[w]=p*o[u+w]+M*o[c+w]+S*o[l+w]+x*o[h+w];return r}}class Xx extends wa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}}class Yx extends wa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Gi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ja(t,this.TimeBufferType),this.values=Ja(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ja(e.times,Array),values:Ja(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Yx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Xx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Wx(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ya:t=this.InterpolantFactoryMethodDiscrete;break;case Ma:t=this.InterpolantFactoryMethodLinear;break;case gc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ya;case this.InterpolantFactoryMethodLinear:return Ma;case this.InterpolantFactoryMethodSmooth:return gc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Vx(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===gc,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let _=0;_!==n;++_){const g=t[h+_];if(g!==t[f+_]||g!==t[d+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Gi.prototype.TimeBufferType=Float32Array;Gi.prototype.ValueBufferType=Float32Array;Gi.prototype.DefaultInterpolation=Ma;class bo extends Gi{constructor(e,t,n){super(e,t,n)}}bo.prototype.ValueTypeName="bool";bo.prototype.ValueBufferType=Array;bo.prototype.DefaultInterpolation=ya;bo.prototype.InterpolantFactoryMethodLinear=void 0;bo.prototype.InterpolantFactoryMethodSmooth=void 0;class $m extends Gi{}$m.prototype.ValueTypeName="color";class xo extends Gi{}xo.prototype.ValueTypeName="number";class qx extends wa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)kr.slerpFlat(r,0,o,c-a,o,c,l);return r}}class vo extends Gi{InterpolantFactoryMethodLinear(e){return new qx(this.times,this.values,this.getValueSize(),e)}}vo.prototype.ValueTypeName="quaternion";vo.prototype.InterpolantFactoryMethodSmooth=void 0;class Ao extends Gi{constructor(e,t,n){super(e,t,n)}}Ao.prototype.ValueTypeName="string";Ao.prototype.ValueBufferType=Array;Ao.prototype.DefaultInterpolation=ya;Ao.prototype.InterpolantFactoryMethodLinear=void 0;Ao.prototype.InterpolantFactoryMethodSmooth=void 0;class yo extends Gi{}yo.prototype.ValueTypeName="vector";class Kx{constructor(e="",t=-1,n=[],i=C0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Di(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push($x(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Gi.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=Gx(l);l=vd(l,1,u),c=vd(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new xo(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,_,g){if(d.length!==0){const m=[],p=[];jm(d,m,p,_),m.length!==0&&g.push(new h(f,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let g=0;g<f[_].morphTargets.length;g++)d[f[_].morphTargets[g]]=-1;for(const g in d){const m=[],p=[];for(let M=0;M!==f[_].morphTargets.length;++M){const S=f[_];m.push(S.time),p.push(S.morphTarget===g?1:0)}i.push(new xo(".morphTargetInfluence["+g+"]",m,p))}l=d.length*o}else{const d=".bones["+t[h].name+"]";n(yo,d+".position",f,"pos",i),n(vo,d+".quaternion",f,"rot",i),n(yo,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function jx(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return xo;case"vector":case"vector2":case"vector3":case"vector4":return yo;case"color":return $m;case"quaternion":return vo;case"bool":case"boolean":return bo;case"string":return Ao}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function $x(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=jx(s.type);if(s.times===void 0){const t=[],n=[];jm(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Er={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Zx{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],_=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const Jx=new Zx;class xs{constructor(e){this.manager=e!==void 0?e:Jx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}xs.DEFAULT_MATERIAL_NAME="__DEFAULT";const ji={};class Qx extends Error{constructor(e,t){super(e),this.response=t}}class Yl extends xs{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Er.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ji[e]!==void 0){ji[e].push({onLoad:t,onProgress:n,onError:i});return}ji[e]=[],ji[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ji[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,_=d!==0;let g=0;const m=new ReadableStream({start(p){M();function M(){h.read().then(({done:S,value:x})=>{if(S)p.close();else{g+=x.byteLength;const w=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:d});for(let A=0,T=u.length;A<T;A++){const R=u[A];R.onProgress&&R.onProgress(w)}p.enqueue(x),M()}},S=>{p.error(S)})}}});return new Response(m)}else throw new Qx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(_=>d.decode(_))}}}).then(c=>{Er.add(e,c);const u=ji[e];delete ji[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=ji[e];if(u===void 0)throw this.manager.itemError(e),c;delete ji[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class ev extends xs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Er.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Sa("img");function l(){u(),Er.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Zm extends xs{constructor(e){super(e)}load(e,t,n,i){const r=new tn,o=new ev(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class sc extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Hc=new We,yd=new k,Md=new k;class tf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new We,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zh,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;yd.setFromMatrixPosition(e.matrixWorld),t.position.copy(yd),Md.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Md),t.updateMatrixWorld(),Hc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Hc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class tv extends tf{constructor(){super(new Dn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=_o*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Jm extends sc{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new tv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Sd=new We,Oo=new k,Vc=new k;class nv extends tf{constructor(){super(new Dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Oo.setFromMatrixPosition(e.matrixWorld),n.position.copy(Oo),Vc.copy(n.position),Vc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Vc),n.updateMatrixWorld(),i.makeTranslation(-Oo.x,-Oo.y,-Oo.z),Sd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sd)}}class Qm extends sc{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new nv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class nf extends Gm{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class iv extends tf{constructor(){super(new nf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ah extends sc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new iv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class rv extends sc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ta{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class sv extends xs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Er.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Er.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Er.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Er.add(e,l),r.manager.itemStart(e)}}class ov extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class av{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Td(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Td();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Td(){return performance.now()}const rf="\\[\\]\\.:\\/",lv=new RegExp("["+rf+"]","g"),sf="[^"+rf+"]",cv="[^"+rf.replace("\\.","")+"]",uv=/((?:WC+[\/:])*)/.source.replace("WC",sf),hv=/(WCOD+)?/.source.replace("WCOD",cv),fv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sf),dv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sf),pv=new RegExp("^"+uv+hv+fv+dv+"$"),mv=["material","materials","bones","map"];class _v{constructor(e,t,n){const i=n||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Mt{constructor(e,t,n){this.path=t,this.parsedPath=n||Mt.parseTrackName(t),this.node=Mt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Mt.Composite(e,t,n):new Mt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(lv,"")}static parseTrackName(e){const t=pv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);mv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Mt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Mt.Composite=_v;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function Ed(s,e,t,n){const i=gv(n);switch(t){case bm:return s*e;case wm:return s*e;case Rm:return s*e*2;case Gh:return s*e/i.components*i.byteLength;case Wh:return s*e/i.components*i.byteLength;case Cm:return s*e*2/i.components*i.byteLength;case Xh:return s*e*2/i.components*i.byteLength;case Am:return s*e*3/i.components*i.byteLength;case yi:return s*e*4/i.components*i.byteLength;case Yh:return s*e*4/i.components*i.byteLength;case xl:case vl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case yl:case Ml:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Lu:case Nu:return Math.max(s,16)*Math.max(e,8)/4;case Du:case Iu:return Math.max(s,8)*Math.max(e,8)/2;case Uu:case Fu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ou:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ku:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case zu:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Hu:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Vu:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Gu:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Wu:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Xu:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Yu:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case qu:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ku:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case ju:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case $u:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Zu:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Sl:case Ju:case Qu:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Pm:case eh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case th:case nh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function gv(s){switch(s){case ur:case Sm:return{byteLength:1,components:1};case va:case Tm:case Aa:return{byteLength:2,components:1};case Hh:case Vh:return{byteLength:2,components:4};case fs:case zh:case Pi:return{byteLength:4,components:1};case Em:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kh);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function e_(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function xv(s){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(s.bindBuffer(c,a),h.length===0)s.bufferSubData(c,0,u);else{h.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<h.length;d++){const _=h[f],g=h[d];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,h[f]=g)}h.length=f+1;for(let d=0,_=h.length;d<_;d++){const g=h[d];s.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var vv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Mv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ev=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Av=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Rv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Lv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Iv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Nv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Uv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ov=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Vv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Gv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Wv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Xv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jv="gl_FragColor = linearToOutputTexel( gl_FragColor );",$v=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Jv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ey=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ty=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ny=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ry=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ay=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ly=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,hy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,fy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,py=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,my=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_y=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,yy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,My=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ty=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ey=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,by=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ay=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ry=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Py=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ly=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Iy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ny=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Uy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Oy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,By=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ky=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Vy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ky=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$y=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,tM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,iM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,oM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,aM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_M=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,gM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,AM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,wM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,RM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,DM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,IM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,OM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,GM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,KM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$M=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ZM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Je={alphahash_fragment:vv,alphahash_pars_fragment:yv,alphamap_fragment:Mv,alphamap_pars_fragment:Sv,alphatest_fragment:Tv,alphatest_pars_fragment:Ev,aomap_fragment:bv,aomap_pars_fragment:Av,batching_pars_vertex:wv,batching_vertex:Rv,begin_vertex:Cv,beginnormal_vertex:Pv,bsdfs:Dv,iridescence_fragment:Lv,bumpmap_pars_fragment:Iv,clipping_planes_fragment:Nv,clipping_planes_pars_fragment:Uv,clipping_planes_pars_vertex:Fv,clipping_planes_vertex:Ov,color_fragment:Bv,color_pars_fragment:kv,color_pars_vertex:zv,color_vertex:Hv,common:Vv,cube_uv_reflection_fragment:Gv,defaultnormal_vertex:Wv,displacementmap_pars_vertex:Xv,displacementmap_vertex:Yv,emissivemap_fragment:qv,emissivemap_pars_fragment:Kv,colorspace_fragment:jv,colorspace_pars_fragment:$v,envmap_fragment:Zv,envmap_common_pars_fragment:Jv,envmap_pars_fragment:Qv,envmap_pars_vertex:ey,envmap_physical_pars_fragment:hy,envmap_vertex:ty,fog_vertex:ny,fog_pars_vertex:iy,fog_fragment:ry,fog_pars_fragment:sy,gradientmap_pars_fragment:oy,lightmap_pars_fragment:ay,lights_lambert_fragment:ly,lights_lambert_pars_fragment:cy,lights_pars_begin:uy,lights_toon_fragment:fy,lights_toon_pars_fragment:dy,lights_phong_fragment:py,lights_phong_pars_fragment:my,lights_physical_fragment:_y,lights_physical_pars_fragment:gy,lights_fragment_begin:xy,lights_fragment_maps:vy,lights_fragment_end:yy,logdepthbuf_fragment:My,logdepthbuf_pars_fragment:Sy,logdepthbuf_pars_vertex:Ty,logdepthbuf_vertex:Ey,map_fragment:by,map_pars_fragment:Ay,map_particle_fragment:wy,map_particle_pars_fragment:Ry,metalnessmap_fragment:Cy,metalnessmap_pars_fragment:Py,morphinstance_vertex:Dy,morphcolor_vertex:Ly,morphnormal_vertex:Iy,morphtarget_pars_vertex:Ny,morphtarget_vertex:Uy,normal_fragment_begin:Fy,normal_fragment_maps:Oy,normal_pars_fragment:By,normal_pars_vertex:ky,normal_vertex:zy,normalmap_pars_fragment:Hy,clearcoat_normal_fragment_begin:Vy,clearcoat_normal_fragment_maps:Gy,clearcoat_pars_fragment:Wy,iridescence_pars_fragment:Xy,opaque_fragment:Yy,packing:qy,premultiplied_alpha_fragment:Ky,project_vertex:jy,dithering_fragment:$y,dithering_pars_fragment:Zy,roughnessmap_fragment:Jy,roughnessmap_pars_fragment:Qy,shadowmap_pars_fragment:eM,shadowmap_pars_vertex:tM,shadowmap_vertex:nM,shadowmask_pars_fragment:iM,skinbase_vertex:rM,skinning_pars_vertex:sM,skinning_vertex:oM,skinnormal_vertex:aM,specularmap_fragment:lM,specularmap_pars_fragment:cM,tonemapping_fragment:uM,tonemapping_pars_fragment:hM,transmission_fragment:fM,transmission_pars_fragment:dM,uv_pars_fragment:pM,uv_pars_vertex:mM,uv_vertex:_M,worldpos_vertex:gM,background_vert:xM,background_frag:vM,backgroundCube_vert:yM,backgroundCube_frag:MM,cube_vert:SM,cube_frag:TM,depth_vert:EM,depth_frag:bM,distanceRGBA_vert:AM,distanceRGBA_frag:wM,equirect_vert:RM,equirect_frag:CM,linedashed_vert:PM,linedashed_frag:DM,meshbasic_vert:LM,meshbasic_frag:IM,meshlambert_vert:NM,meshlambert_frag:UM,meshmatcap_vert:FM,meshmatcap_frag:OM,meshnormal_vert:BM,meshnormal_frag:kM,meshphong_vert:zM,meshphong_frag:HM,meshphysical_vert:VM,meshphysical_frag:GM,meshtoon_vert:WM,meshtoon_frag:XM,points_vert:YM,points_frag:qM,shadow_vert:KM,shadow_frag:jM,sprite_vert:$M,sprite_frag:ZM},_e={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Ni={basic:{uniforms:wn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:wn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:wn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:wn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:wn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:wn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:wn([_e.points,_e.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:wn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:wn([_e.common,_e.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:wn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:wn([_e.sprite,_e.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distanceRGBA:{uniforms:wn([_e.common,_e.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distanceRGBA_vert,fragmentShader:Je.distanceRGBA_frag},shadow:{uniforms:wn([_e.lights,_e.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};Ni.physical={uniforms:wn([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Qa={r:0,b:0,g:0},qr=new Hi,JM=new We;function QM(s,e,t,n,i,r,o){const a=new Ge(0);let l=r===!0?0:1,c,u,h=null,f=0,d=null;function _(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?t:e).get(x)),x}function g(S){let x=!1;const w=_(S);w===null?p(a,l):w&&w.isColor&&(p(w,1),x=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(S,x){const w=_(x);w&&(w.isCubeTexture||w.mapping===tc)?(u===void 0&&(u=new dt(new To(1,1,1),new Fr({name:"BackgroundCubeMaterial",uniforms:go(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),qr.copy(x.backgroundRotation),qr.x*=-1,qr.y*=-1,qr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(JM.makeRotationFromEuler(qr)),u.material.toneMapped=at.getTransfer(w.colorSpace)!==St,(h!==w||f!==w.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=w,f=w.version,d=s.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new dt(new Eo(2,2),new Fr({name:"BackgroundMaterial",uniforms:go(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=at.getTransfer(w.colorSpace)!==St,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||f!==w.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=w,f=w.version,d=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,x){S.getRGB(Qa,Vm(s)),n.buffers.color.setClear(Qa.r,Qa.g,Qa.b,x,o)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(S,x=1){a.set(S),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:g,addToRenderList:m,dispose:M}}function eS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,o=!1;function a(y,P,U,O,W){let Y=!1;const q=h(O,U,P);r!==q&&(r=q,c(r.object)),Y=d(y,O,U,W),Y&&_(y,O,U,W),W!==null&&e.update(W,s.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,x(y,P,U,O),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function u(y){return s.deleteVertexArray(y)}function h(y,P,U){const O=U.wireframe===!0;let W=n[y.id];W===void 0&&(W={},n[y.id]=W);let Y=W[P.id];Y===void 0&&(Y={},W[P.id]=Y);let q=Y[O];return q===void 0&&(q=f(l()),Y[O]=q),q}function f(y){const P=[],U=[],O=[];for(let W=0;W<t;W++)P[W]=0,U[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:O,object:y,attributes:{},index:null}}function d(y,P,U,O){const W=r.attributes,Y=P.attributes;let q=0;const z=U.getAttributes();for(const N in z)if(z[N].location>=0){const D=W[N];let ae=Y[N];if(ae===void 0&&(N==="instanceMatrix"&&y.instanceMatrix&&(ae=y.instanceMatrix),N==="instanceColor"&&y.instanceColor&&(ae=y.instanceColor)),D===void 0||D.attribute!==ae||ae&&D.data!==ae.data)return!0;q++}return r.attributesNum!==q||r.index!==O}function _(y,P,U,O){const W={},Y=P.attributes;let q=0;const z=U.getAttributes();for(const N in z)if(z[N].location>=0){let D=Y[N];D===void 0&&(N==="instanceMatrix"&&y.instanceMatrix&&(D=y.instanceMatrix),N==="instanceColor"&&y.instanceColor&&(D=y.instanceColor));const ae={};ae.attribute=D,D&&D.data&&(ae.data=D.data),W[N]=ae,q++}r.attributes=W,r.attributesNum=q,r.index=O}function g(){const y=r.newAttributes;for(let P=0,U=y.length;P<U;P++)y[P]=0}function m(y){p(y,0)}function p(y,P){const U=r.newAttributes,O=r.enabledAttributes,W=r.attributeDivisors;U[y]=1,O[y]===0&&(s.enableVertexAttribArray(y),O[y]=1),W[y]!==P&&(s.vertexAttribDivisor(y,P),W[y]=P)}function M(){const y=r.newAttributes,P=r.enabledAttributes;for(let U=0,O=P.length;U<O;U++)P[U]!==y[U]&&(s.disableVertexAttribArray(U),P[U]=0)}function S(y,P,U,O,W,Y,q){q===!0?s.vertexAttribIPointer(y,P,U,W,Y):s.vertexAttribPointer(y,P,U,O,W,Y)}function x(y,P,U,O){g();const W=O.attributes,Y=U.getAttributes(),q=P.defaultAttributeValues;for(const z in Y){const N=Y[z];if(N.location>=0){let $=W[z];if($===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&($=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&($=y.instanceColor)),$!==void 0){const D=$.normalized,ae=$.itemSize,Ce=e.get($);if(Ce===void 0)continue;const Qe=Ce.buffer,j=Ce.type,ne=Ce.bytesPerElement,de=j===s.INT||j===s.UNSIGNED_INT||$.gpuType===zh;if($.isInterleavedBufferAttribute){const ie=$.data,Te=ie.stride,be=$.offset;if(ie.isInstancedInterleavedBuffer){for(let He=0;He<N.locationSize;He++)p(N.location+He,ie.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let He=0;He<N.locationSize;He++)m(N.location+He);s.bindBuffer(s.ARRAY_BUFFER,Qe);for(let He=0;He<N.locationSize;He++)S(N.location+He,ae/N.locationSize,j,D,Te*ne,(be+ae/N.locationSize*He)*ne,de)}else{if($.isInstancedBufferAttribute){for(let ie=0;ie<N.locationSize;ie++)p(N.location+ie,$.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ie=0;ie<N.locationSize;ie++)m(N.location+ie);s.bindBuffer(s.ARRAY_BUFFER,Qe);for(let ie=0;ie<N.locationSize;ie++)S(N.location+ie,ae/N.locationSize,j,D,ae*ne,ae/N.locationSize*ie*ne,de)}}else if(q!==void 0){const D=q[z];if(D!==void 0)switch(D.length){case 2:s.vertexAttrib2fv(N.location,D);break;case 3:s.vertexAttrib3fv(N.location,D);break;case 4:s.vertexAttrib4fv(N.location,D);break;default:s.vertexAttrib1fv(N.location,D)}}}}M()}function w(){R();for(const y in n){const P=n[y];for(const U in P){const O=P[U];for(const W in O)u(O[W].object),delete O[W];delete P[U]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const P=n[y.id];for(const U in P){const O=P[U];for(const W in O)u(O[W].object),delete O[W];delete P[U]}delete n[y.id]}function T(y){for(const P in n){const U=n[P];if(U[y.id]===void 0)continue;const O=U[y.id];for(const W in O)u(O[W].object),delete O[W];delete U[y.id]}}function R(){v(),o=!0,r!==i&&(r=i,c(r.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:v,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:m,disableUnusedAttributes:M}}function tS(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];t.update(d,n,1)}function l(c,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<c.length;_++)o(c[_],u[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*f[g];t.update(_,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function nS(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==yi&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const R=T===Aa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==ur&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Pi&&!R)}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=_>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:w,maxSamples:A}}function iS(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Zr,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||_===null||_.length===0||r&&!m)r?u(null):c();else{const M=r?0:n,S=M*4;let x=p.clippingState||null;l.value=x,x=u(_,f,S,d);for(let w=0;w!==S;++w)x[w]=t[w];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=d+g*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,x=d;S!==g;++S,x+=4)o.copy(h[S]).applyMatrix4(M,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function rS(s){let e=new WeakMap;function t(o,a){return a===Cu?o.mapping=uo:a===Pu&&(o.mapping=ho),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Cu||a===Pu)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Rx(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Xs=4,bd=[.125,.215,.35,.446,.526,.582],ns=20,Gc=new nf,Ad=new Ge;let Wc=null,Xc=0,Yc=0,qc=!1;const Jr=(1+Math.sqrt(5))/2,Us=1/Jr,wd=[new k(-Jr,Us,0),new k(Jr,Us,0),new k(-Us,0,Jr),new k(Us,0,Jr),new k(0,Jr,-Us),new k(0,Jr,Us),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class ql{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Wc=this._renderer.getRenderTarget(),Xc=this._renderer.getActiveCubeFace(),Yc=this._renderer.getActiveMipmapLevel(),qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wc,Xc,Yc),this._renderer.xr.enabled=qc,e.scissorTest=!1,el(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===uo||e.mapping===ho?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wc=this._renderer.getRenderTarget(),Xc=this._renderer.getActiveCubeFace(),Yc=this._renderer.getActiveMipmapLevel(),qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ri,minFilter:ri,generateMipmaps:!1,type:Aa,format:yi,colorSpace:Mn,depthBuffer:!1},i=Rd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rd(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=sS(r)),this._blurMaterial=oS(r,e,t)}return i}_compileMaterial(e){const t=new dt(this._lodPlanes[0],e);this._renderer.compile(t,Gc)}_sceneToCubeUV(e,t,n,i){const a=new Dn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Ad),u.toneMapping=Pr,u.autoClear=!1;const d=new si({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),_=new dt(new To,d);let g=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,g=!0):(d.color.copy(Ad),g=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const S=this._cubeSize;el(i,M*S,p>2?S:0,S,S),u.setRenderTarget(i),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===uo||e.mapping===ho;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cd());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new dt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;el(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Gc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=wd[(i-r-1)%wd.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new dt(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ns-1),g=r/_,m=isFinite(r)?1+Math.floor(u*g):ns;m>ns&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ns}`);const p=[];let M=0;for(let T=0;T<ns;++T){const R=T/g,v=Math.exp(-R*R/2);p.push(v),T===0?M+=v:T<m&&(M+=2*v)}for(let T=0;T<p.length;T++)p[T]=p[T]/M;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=_,f.mipInt.value=S-n;const x=this._sizeLods[i],w=3*x*(i>S-Xs?i-S+Xs:0),A=4*(this._cubeSize-x);el(t,w,A,3*x,2*x),l.setRenderTarget(t),l.render(h,Gc)}}function sS(s){const e=[],t=[],n=[];let i=s;const r=s-Xs+1+bd.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Xs?l=bd[o-s+Xs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,g=3,m=2,p=1,M=new Float32Array(g*_*d),S=new Float32Array(m*_*d),x=new Float32Array(p*_*d);for(let A=0;A<d;A++){const T=A%3*2/3-1,R=A>2?0:-1,v=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];M.set(v,g*_*A),S.set(f,m*_*A);const y=[A,A,A,A,A,A];x.set(y,p*_*A)}const w=new On;w.setAttribute("position",new Xt(M,g)),w.setAttribute("uv",new Xt(S,m)),w.setAttribute("faceIndex",new Xt(x,p)),e.push(w),i>Xs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Rd(s,e,t){const n=new ds(s,e,t);return n.texture.mapping=tc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function el(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function oS(s,e,t){const n=new Float32Array(ns),i=new k(0,1,0);return new Fr({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:of(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function Cd(){return new Fr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:of(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function Pd(){return new Fr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:of(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function of(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function aS(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Cu||l===Pu,u=l===uo||l===ho;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new ql(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new ql(s)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function lS(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&zs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function cS(s,e,t,n){const i={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const d in f)e.update(f[d],s.ARRAY_BUFFER)}function c(h){const f=[],d=h.index,_=h.attributes.position;let g=0;if(d!==null){const M=d.array;g=d.version;for(let S=0,x=M.length;S<x;S+=3){const w=M[S+0],A=M[S+1],T=M[S+2];f.push(w,A,A,T,T,w)}}else if(_!==void 0){const M=_.array;g=_.version;for(let S=0,x=M.length/3-1;S<x;S+=3){const w=S+0,A=S+1,T=S+2;f.push(w,A,A,T,T,w)}}else return;const m=new(Um(f)?Hm:zm)(f,1);m.version=g;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function uS(s,e,t){let n;function i(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){s.drawElements(n,d,r,f*o),t.update(d,n,1)}function c(f,d,_){_!==0&&(s.drawElementsInstanced(n,d,r,f*o,_),t.update(d,n,_))}function u(f,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,_);let m=0;for(let p=0;p<_;p++)m+=d[p];t.update(m,n,1)}function h(f,d,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,g,0,_);let p=0;for(let M=0;M<_;M++)p+=d[M]*g[M];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function hS(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function fS(s,e,t){const n=new WeakMap,i=new pt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let y=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var d=y;f!==void 0&&f.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let x=0;_===!0&&(x=1),g===!0&&(x=2),m===!0&&(x=3);let w=a.attributes.position.count*x,A=1;w>e.maxTextureSize&&(A=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const T=new Float32Array(w*A*4*h),R=new Om(T,w,A,h);R.type=Pi,R.needsUpdate=!0;const v=x*4;for(let P=0;P<h;P++){const U=p[P],O=M[P],W=S[P],Y=w*A*4*P;for(let q=0;q<U.count;q++){const z=q*v;_===!0&&(i.fromBufferAttribute(U,q),T[Y+z+0]=i.x,T[Y+z+1]=i.y,T[Y+z+2]=i.z,T[Y+z+3]=0),g===!0&&(i.fromBufferAttribute(O,q),T[Y+z+4]=i.x,T[Y+z+5]=i.y,T[Y+z+6]=i.z,T[Y+z+7]=0),m===!0&&(i.fromBufferAttribute(W,q),T[Y+z+8]=i.x,T[Y+z+9]=i.y,T[Y+z+10]=i.z,T[Y+z+11]=W.itemSize===4?i.w:1)}}f={count:h,texture:R,size:new ct(w,A)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function dS(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const t_=new tn,Dd=new Km(1,1),n_=new Om,i_=new fx,r_=new Wm,Ld=[],Id=[],Nd=new Float32Array(16),Ud=new Float32Array(9),Fd=new Float32Array(4);function wo(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Ld[i];if(r===void 0&&(r=new Float32Array(i),Ld[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function nn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function rn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function oc(s,e){let t=Id[e];t===void 0&&(t=new Int32Array(e),Id[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function pS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function mS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2fv(this.addr,e),rn(t,e)}}function _S(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;s.uniform3fv(this.addr,e),rn(t,e)}}function gS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4fv(this.addr,e),rn(t,e)}}function xS(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,n))return;Fd.set(n),s.uniformMatrix2fv(this.addr,!1,Fd),rn(t,n)}}function vS(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,n))return;Ud.set(n),s.uniformMatrix3fv(this.addr,!1,Ud),rn(t,n)}}function yS(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,n))return;Nd.set(n),s.uniformMatrix4fv(this.addr,!1,Nd),rn(t,n)}}function MS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function SS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2iv(this.addr,e),rn(t,e)}}function TS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;s.uniform3iv(this.addr,e),rn(t,e)}}function ES(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4iv(this.addr,e),rn(t,e)}}function bS(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function AS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2uiv(this.addr,e),rn(t,e)}}function wS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;s.uniform3uiv(this.addr,e),rn(t,e)}}function RS(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4uiv(this.addr,e),rn(t,e)}}function CS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Dd.compareFunction=Im,r=Dd):r=t_,t.setTexture2D(e||r,i)}function PS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||i_,i)}function DS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||r_,i)}function LS(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||n_,i)}function IS(s){switch(s){case 5126:return pS;case 35664:return mS;case 35665:return _S;case 35666:return gS;case 35674:return xS;case 35675:return vS;case 35676:return yS;case 5124:case 35670:return MS;case 35667:case 35671:return SS;case 35668:case 35672:return TS;case 35669:case 35673:return ES;case 5125:return bS;case 36294:return AS;case 36295:return wS;case 36296:return RS;case 35678:case 36198:case 36298:case 36306:case 35682:return CS;case 35679:case 36299:case 36307:return PS;case 35680:case 36300:case 36308:case 36293:return DS;case 36289:case 36303:case 36311:case 36292:return LS}}function NS(s,e){s.uniform1fv(this.addr,e)}function US(s,e){const t=wo(e,this.size,2);s.uniform2fv(this.addr,t)}function FS(s,e){const t=wo(e,this.size,3);s.uniform3fv(this.addr,t)}function OS(s,e){const t=wo(e,this.size,4);s.uniform4fv(this.addr,t)}function BS(s,e){const t=wo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function kS(s,e){const t=wo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function zS(s,e){const t=wo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function HS(s,e){s.uniform1iv(this.addr,e)}function VS(s,e){s.uniform2iv(this.addr,e)}function GS(s,e){s.uniform3iv(this.addr,e)}function WS(s,e){s.uniform4iv(this.addr,e)}function XS(s,e){s.uniform1uiv(this.addr,e)}function YS(s,e){s.uniform2uiv(this.addr,e)}function qS(s,e){s.uniform3uiv(this.addr,e)}function KS(s,e){s.uniform4uiv(this.addr,e)}function jS(s,e,t){const n=this.cache,i=e.length,r=oc(t,i);nn(n,r)||(s.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||t_,r[o])}function $S(s,e,t){const n=this.cache,i=e.length,r=oc(t,i);nn(n,r)||(s.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||i_,r[o])}function ZS(s,e,t){const n=this.cache,i=e.length,r=oc(t,i);nn(n,r)||(s.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||r_,r[o])}function JS(s,e,t){const n=this.cache,i=e.length,r=oc(t,i);nn(n,r)||(s.uniform1iv(this.addr,r),rn(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||n_,r[o])}function QS(s){switch(s){case 5126:return NS;case 35664:return US;case 35665:return FS;case 35666:return OS;case 35674:return BS;case 35675:return kS;case 35676:return zS;case 5124:case 35670:return HS;case 35667:case 35671:return VS;case 35668:case 35672:return GS;case 35669:case 35673:return WS;case 5125:return XS;case 36294:return YS;case 36295:return qS;case 36296:return KS;case 35678:case 36198:case 36298:case 36306:case 35682:return jS;case 35679:case 36299:case 36307:return $S;case 35680:case 36300:case 36308:case 36293:return ZS;case 36289:case 36303:case 36311:case 36292:return JS}}class eT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=IS(t.type)}}class tT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=QS(t.type)}}class nT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Kc=/(\w+)(\])?(\[|\.)?/g;function Od(s,e){s.seq.push(e),s.map[e.id]=e}function iT(s,e,t){const n=s.name,i=n.length;for(Kc.lastIndex=0;;){const r=Kc.exec(n),o=Kc.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Od(t,c===void 0?new eT(a,s,e):new tT(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new nT(a),Od(t,h)),t=h}}}class Tl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);iT(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Bd(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const rT=37297;let sT=0;function oT(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const kd=new Ke;function aT(s){at._getMatrix(kd,at.workingColorSpace,s);const e=`mat3( ${kd.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(s)){case Vl:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function zd(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+oT(s.getShaderSource(e),o)}else return i}function lT(s,e){const t=aT(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function cT(s,e){let t;switch(e){case S0:t="Linear";break;case T0:t="Reinhard";break;case E0:t="Cineon";break;case b0:t="ACESFilmic";break;case w0:t="AgX";break;case vm:t="Neutral";break;case A0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const tl=new k;function uT(){at.getLuminanceCoefficients(tl);const s=tl.x.toFixed(4),e=tl.y.toFixed(4),t=tl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function fT(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function dT(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Wo(s){return s!==""}function Hd(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vd(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pT=/^[ \t]*#include +<([\w\d./]+)>/gm;function lh(s){return s.replace(pT,_T)}const mT=new Map;function _T(s,e){let t=Je[e];if(t===void 0){const n=mT.get(e);if(n!==void 0)t=Je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return lh(t)}const gT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gd(s){return s.replace(gT,xT)}function xT(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Wd(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vT(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===_m?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===gm?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Zi&&(e="SHADOWMAP_TYPE_VSM"),e}function yT(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case uo:case ho:e="ENVMAP_TYPE_CUBE";break;case tc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function MT(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ho:e="ENVMAP_MODE_REFRACTION";break}return e}function ST(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case xm:e="ENVMAP_BLENDING_MULTIPLY";break;case y0:e="ENVMAP_BLENDING_MIX";break;case M0:e="ENVMAP_BLENDING_ADD";break}return e}function TT(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ET(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=vT(t),c=yT(t),u=MT(t),h=ST(t),f=TT(t),d=hT(t),_=fT(r),g=i.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Wo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Wo).join(`
`),p.length>0&&(p+=`
`)):(m=[Wd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),p=[Wd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pr?"#define TONE_MAPPING":"",t.toneMapping!==Pr?Je.tonemapping_pars_fragment:"",t.toneMapping!==Pr?cT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,lT("linearToOutputTexel",t.outputColorSpace),uT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wo).join(`
`)),o=lh(o),o=Hd(o,t),o=Vd(o,t),a=lh(a),a=Hd(a,t),a=Vd(a,t),o=Gd(o),a=Gd(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===zf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=M+m+o,x=M+p+a,w=Bd(i,i.VERTEX_SHADER,S),A=Bd(i,i.FRAGMENT_SHADER,x);i.attachShader(g,w),i.attachShader(g,A),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function T(P){if(s.debug.checkShaderErrors){const U=i.getProgramInfoLog(g).trim(),O=i.getShaderInfoLog(w).trim(),W=i.getShaderInfoLog(A).trim();let Y=!0,q=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,w,A);else{const z=zd(i,w,"vertex"),N=zd(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+z+`
`+N)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(O===""||W==="")&&(q=!1);q&&(P.diagnostics={runnable:Y,programLog:U,vertexShader:{log:O,prefix:m},fragmentShader:{log:W,prefix:p}})}i.deleteShader(w),i.deleteShader(A),R=new Tl(i,g),v=dT(i,g)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let v;this.getAttributes=function(){return v===void 0&&T(this),v};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(g,rT)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sT++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=A,this}let bT=0;class AT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new wT(e),t.set(e,n)),n}}class wT{constructor(e){this.id=bT++,this.code=e,this.usedTimes=0}}function RT(s,e,t,n,i,r,o){const a=new Bm,l=new AT,c=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.vertexTextures;let d=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,y,P,U,O){const W=U.fog,Y=O.geometry,q=v.isMeshStandardMaterial?U.environment:null,z=(v.isMeshStandardMaterial?t:e).get(v.envMap||q),N=z&&z.mapping===tc?z.image.height:null,$=_[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const D=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ae=D!==void 0?D.length:0;let Ce=0;Y.morphAttributes.position!==void 0&&(Ce=1),Y.morphAttributes.normal!==void 0&&(Ce=2),Y.morphAttributes.color!==void 0&&(Ce=3);let Qe,j,ne,de;if($){const ge=Ni[$];Qe=ge.vertexShader,j=ge.fragmentShader}else Qe=v.vertexShader,j=v.fragmentShader,l.update(v),ne=l.getVertexShaderID(v),de=l.getFragmentShaderID(v);const ie=s.getRenderTarget(),Te=s.state.buffers.depth.getReversed(),be=O.isInstancedMesh===!0,He=O.isBatchedMesh===!0,Ze=!!v.map,Fe=!!v.matcap,De=!!z,L=!!v.aoMap,Et=!!v.lightMap,Be=!!v.bumpMap,H=!!v.normalMap,Me=!!v.displacementMap,ot=!!v.emissiveMap,Ee=!!v.metalnessMap,C=!!v.roughnessMap,E=v.anisotropy>0,V=v.clearcoat>0,ee=v.dispersion>0,Q=v.iridescence>0,Z=v.sheen>0,ue=v.transmission>0,oe=E&&!!v.anisotropyMap,fe=V&&!!v.clearcoatMap,Xe=V&&!!v.clearcoatNormalMap,re=V&&!!v.clearcoatRoughnessMap,se=Q&&!!v.iridescenceMap,Ie=Q&&!!v.iridescenceThicknessMap,Le=Z&&!!v.sheenColorMap,xe=Z&&!!v.sheenRoughnessMap,je=!!v.specularMap,Oe=!!v.specularColorMap,ut=!!v.specularIntensityMap,I=ue&&!!v.transmissionMap,ce=ue&&!!v.thicknessMap,K=!!v.gradientMap,J=!!v.alphaMap,le=v.alphaTest>0,he=!!v.alphaHash,ke=!!v.extensions;let ht=Pr;v.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(ht=s.toneMapping);const Bt={shaderID:$,shaderType:v.type,shaderName:v.name,vertexShader:Qe,fragmentShader:j,defines:v.defines,customVertexShaderID:ne,customFragmentShaderID:de,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:He,batchingColor:He&&O._colorsTexture!==null,instancing:be,instancingColor:be&&O.instanceColor!==null,instancingMorph:be&&O.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ie===null?s.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Mn,alphaToCoverage:!!v.alphaToCoverage,map:Ze,matcap:Fe,envMap:De,envMapMode:De&&z.mapping,envMapCubeUVHeight:N,aoMap:L,lightMap:Et,bumpMap:Be,normalMap:H,displacementMap:f&&Me,emissiveMap:ot,normalMapObjectSpace:H&&v.normalMapType===I0,normalMapTangentSpace:H&&v.normalMapType===Lm,metalnessMap:Ee,roughnessMap:C,anisotropy:E,anisotropyMap:oe,clearcoat:V,clearcoatMap:fe,clearcoatNormalMap:Xe,clearcoatRoughnessMap:re,dispersion:ee,iridescence:Q,iridescenceMap:se,iridescenceThicknessMap:Ie,sheen:Z,sheenColorMap:Le,sheenRoughnessMap:xe,specularMap:je,specularColorMap:Oe,specularIntensityMap:ut,transmission:ue,transmissionMap:I,thicknessMap:ce,gradientMap:K,opaque:v.transparent===!1&&v.blending===$s&&v.alphaToCoverage===!1,alphaMap:J,alphaTest:le,alphaHash:he,combine:v.combine,mapUv:Ze&&g(v.map.channel),aoMapUv:L&&g(v.aoMap.channel),lightMapUv:Et&&g(v.lightMap.channel),bumpMapUv:Be&&g(v.bumpMap.channel),normalMapUv:H&&g(v.normalMap.channel),displacementMapUv:Me&&g(v.displacementMap.channel),emissiveMapUv:ot&&g(v.emissiveMap.channel),metalnessMapUv:Ee&&g(v.metalnessMap.channel),roughnessMapUv:C&&g(v.roughnessMap.channel),anisotropyMapUv:oe&&g(v.anisotropyMap.channel),clearcoatMapUv:fe&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:Xe&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:xe&&g(v.sheenRoughnessMap.channel),specularMapUv:je&&g(v.specularMap.channel),specularColorMapUv:Oe&&g(v.specularColorMap.channel),specularIntensityMapUv:ut&&g(v.specularIntensityMap.channel),transmissionMapUv:I&&g(v.transmissionMap.channel),thicknessMapUv:ce&&g(v.thicknessMap.channel),alphaMapUv:J&&g(v.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(H||E),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!Y.attributes.uv&&(Ze||J),fog:!!W,useFog:v.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Te,skinning:O.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:Ce,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:ht,decodeVideoTexture:Ze&&v.map.isVideoTexture===!0&&at.getTransfer(v.map.colorSpace)===St,decodeVideoTextureEmissive:ot&&v.emissiveMap.isVideoTexture===!0&&at.getTransfer(v.emissiveMap.colorSpace)===St,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ln,flipSided:v.side===yn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ke&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&v.extensions.multiDraw===!0||He)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Bt.vertexUv1s=c.has(1),Bt.vertexUv2s=c.has(2),Bt.vertexUv3s=c.has(3),c.clear(),Bt}function p(v){const y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)y.push(P),y.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(M(y,v),S(y,v),y.push(s.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function M(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function S(v,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),v.push(a.mask)}function x(v){const y=_[v.type];let P;if(y){const U=Ni[y];P=Ex.clone(U.uniforms)}else P=v.uniforms;return P}function w(v,y){let P;for(let U=0,O=u.length;U<O;U++){const W=u[U];if(W.cacheKey===y){P=W,++P.usedTimes;break}}return P===void 0&&(P=new ET(s,y,v,r),u.push(P)),P}function A(v){if(--v.usedTimes===0){const y=u.indexOf(v);u[y]=u[u.length-1],u.pop(),v.destroy()}}function T(v){l.remove(v)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:w,releaseProgram:A,releaseShaderCache:T,programs:u,dispose:R}}function CT(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function PT(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Xd(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Yd(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,_,g,m){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},s[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=g,p.group=m),e++,p}function a(h,f,d,_,g,m){const p=o(h,f,d,_,g,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function l(h,f,d,_,g,m){const p=o(h,f,d,_,g,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,f){t.length>1&&t.sort(h||PT),n.length>1&&n.sort(f||Xd),i.length>1&&i.sort(f||Xd)}function u(){for(let h=e,f=s.length;h<f;h++){const d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function DT(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Yd,s.set(n,[o])):i>=r.length?(o=new Yd,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function LT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Ge};break;case"SpotLight":t={position:new k,direction:new k,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new k,halfWidth:new k,halfHeight:new k};break}return s[e.id]=t,t}}}function IT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let NT=0;function UT(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function FT(s){const e=new LT,t=IT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);const i=new k,r=new We,o=new We;function a(c){let u=0,h=0,f=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let d=0,_=0,g=0,m=0,p=0,M=0,S=0,x=0,w=0,A=0,T=0;c.sort(UT);for(let v=0,y=c.length;v<y;v++){const P=c[v],U=P.color,O=P.intensity,W=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=U.r*O,h+=U.g*O,f+=U.b*O;else if(P.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(P.sh.coefficients[q],O);T++}else if(P.isDirectionalLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const z=P.shadow,N=t.get(P);N.shadowIntensity=z.intensity,N.shadowBias=z.bias,N.shadowNormalBias=z.normalBias,N.shadowRadius=z.radius,N.shadowMapSize=z.mapSize,n.directionalShadow[d]=N,n.directionalShadowMap[d]=Y,n.directionalShadowMatrix[d]=P.shadow.matrix,M++}n.directional[d]=q,d++}else if(P.isSpotLight){const q=e.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(U).multiplyScalar(O),q.distance=W,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,n.spot[g]=q;const z=P.shadow;if(P.map&&(n.spotLightMap[w]=P.map,w++,z.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[g]=z.matrix,P.castShadow){const N=t.get(P);N.shadowIntensity=z.intensity,N.shadowBias=z.bias,N.shadowNormalBias=z.normalBias,N.shadowRadius=z.radius,N.shadowMapSize=z.mapSize,n.spotShadow[g]=N,n.spotShadowMap[g]=Y,x++}g++}else if(P.isRectAreaLight){const q=e.get(P);q.color.copy(U).multiplyScalar(O),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=q,m++}else if(P.isPointLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){const z=P.shadow,N=t.get(P);N.shadowIntensity=z.intensity,N.shadowBias=z.bias,N.shadowNormalBias=z.normalBias,N.shadowRadius=z.radius,N.shadowMapSize=z.mapSize,N.shadowCameraNear=z.camera.near,N.shadowCameraFar=z.camera.far,n.pointShadow[_]=N,n.pointShadowMap[_]=Y,n.pointShadowMatrix[_]=P.shadow.matrix,S++}n.point[_]=q,_++}else if(P.isHemisphereLight){const q=e.get(P);q.skyColor.copy(P.color).multiplyScalar(O),q.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[p]=q,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==d||R.pointLength!==_||R.spotLength!==g||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==M||R.numPointShadows!==S||R.numSpotShadows!==x||R.numSpotMaps!==w||R.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=x+w-A,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,R.directionalLength=d,R.pointLength=_,R.spotLength=g,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=M,R.numPointShadows=S,R.numSpotShadows=x,R.numSpotMaps=w,R.numLightProbes=T,n.version=NT++)}function l(c,u){let h=0,f=0,d=0,_=0,g=0;const m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const S=c[p];if(S.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),h++}else if(S.isSpotLight){const x=n.spot[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),d++}else if(S.isRectAreaLight){const x=n.rectArea[_];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(S.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const x=n.hemi[g];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function qd(s){const e=new FT(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function OT(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new qd(s),e.set(i,[a])):r>=o.length?(a=new qd(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const BT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function zT(s,e,t){let n=new Zh;const i=new ct,r=new ct,o=new pt,a=new zx({depthPacking:L0}),l=new Hx,c={},u=t.maxTextureSize,h={[cr]:yn,[yn]:cr,[Ln]:Ln},f=new Fr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:BT,fragmentShader:kT}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new On;_.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new dt(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_m;let p=this.type;this.render=function(A,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const v=s.getRenderTarget(),y=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),U=s.state;U.setBlending(Cr),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const O=p!==Zi&&this.type===Zi,W=p===Zi&&this.type!==Zi;for(let Y=0,q=A.length;Y<q;Y++){const z=A[Y],N=z.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;i.copy(N.mapSize);const $=N.getFrameExtents();if(i.multiply($),r.copy(N.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/$.x),i.x=r.x*$.x,N.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/$.y),i.y=r.y*$.y,N.mapSize.y=r.y)),N.map===null||O===!0||W===!0){const ae=this.type!==Zi?{minFilter:Un,magFilter:Un}:{};N.map!==null&&N.map.dispose(),N.map=new ds(i.x,i.y,ae),N.map.texture.name=z.name+".shadowMap",N.camera.updateProjectionMatrix()}s.setRenderTarget(N.map),s.clear();const D=N.getViewportCount();for(let ae=0;ae<D;ae++){const Ce=N.getViewport(ae);o.set(r.x*Ce.x,r.y*Ce.y,r.x*Ce.z,r.y*Ce.w),U.viewport(o),N.updateMatrices(z,ae),n=N.getFrustum(),x(T,R,N.camera,z,this.type)}N.isPointLightShadow!==!0&&this.type===Zi&&M(N,R),N.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(v,y,P)};function M(A,T){const R=e.update(g);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ds(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(T,null,R,f,g,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(T,null,R,d,g,null)}function S(A,T,R,v){let y=null;const P=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)y=P;else if(y=R.isPointLight===!0?l:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const U=y.uuid,O=T.uuid;let W=c[U];W===void 0&&(W={},c[U]=W);let Y=W[O];Y===void 0&&(Y=y.clone(),W[O]=Y,T.addEventListener("dispose",w)),y=Y}if(y.visible=T.visible,y.wireframe=T.wireframe,v===Zi?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:h[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const U=s.properties.get(y);U.light=R}return y}function x(A,T,R,v,y){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===Zi)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const O=e.update(A),W=A.material;if(Array.isArray(W)){const Y=O.groups;for(let q=0,z=Y.length;q<z;q++){const N=Y[q],$=W[N.materialIndex];if($&&$.visible){const D=S(A,$,v,y);A.onBeforeShadow(s,A,T,R,O,D,N),s.renderBufferDirect(R,null,O,D,A,N),A.onAfterShadow(s,A,T,R,O,D,N)}}}else if(W.visible){const Y=S(A,W,v,y);A.onBeforeShadow(s,A,T,R,O,Y,null),s.renderBufferDirect(R,null,O,Y,A,null),A.onAfterShadow(s,A,T,R,O,Y,null)}}const U=A.children;for(let O=0,W=U.length;O<W;O++)x(U[O],T,R,v,y)}function w(A){A.target.removeEventListener("dispose",w);for(const R in c){const v=c[R],y=A.target.uuid;y in v&&(v[y].dispose(),delete v[y])}}}const HT={[Su]:Tu,[Eu]:wu,[bu]:Ru,[co]:Au,[Tu]:Su,[wu]:Eu,[Ru]:bu,[Au]:co};function VT(s,e){function t(){let I=!1;const ce=new pt;let K=null;const J=new pt(0,0,0,0);return{setMask:function(le){K!==le&&!I&&(s.colorMask(le,le,le,le),K=le)},setLocked:function(le){I=le},setClear:function(le,he,ke,ht,Bt){Bt===!0&&(le*=ht,he*=ht,ke*=ht),ce.set(le,he,ke,ht),J.equals(ce)===!1&&(s.clearColor(le,he,ke,ht),J.copy(ce))},reset:function(){I=!1,K=null,J.set(-1,0,0,0)}}}function n(){let I=!1,ce=!1,K=null,J=null,le=null;return{setReversed:function(he){if(ce!==he){const ke=e.get("EXT_clip_control");ce?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT);const ht=le;le=null,this.setClear(ht)}ce=he},getReversed:function(){return ce},setTest:function(he){he?ie(s.DEPTH_TEST):Te(s.DEPTH_TEST)},setMask:function(he){K!==he&&!I&&(s.depthMask(he),K=he)},setFunc:function(he){if(ce&&(he=HT[he]),J!==he){switch(he){case Su:s.depthFunc(s.NEVER);break;case Tu:s.depthFunc(s.ALWAYS);break;case Eu:s.depthFunc(s.LESS);break;case co:s.depthFunc(s.LEQUAL);break;case bu:s.depthFunc(s.EQUAL);break;case Au:s.depthFunc(s.GEQUAL);break;case wu:s.depthFunc(s.GREATER);break;case Ru:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=he}},setLocked:function(he){I=he},setClear:function(he){le!==he&&(ce&&(he=1-he),s.clearDepth(he),le=he)},reset:function(){I=!1,K=null,J=null,le=null,ce=!1}}}function i(){let I=!1,ce=null,K=null,J=null,le=null,he=null,ke=null,ht=null,Bt=null;return{setTest:function(ge){I||(ge?ie(s.STENCIL_TEST):Te(s.STENCIL_TEST))},setMask:function(ge){ce!==ge&&!I&&(s.stencilMask(ge),ce=ge)},setFunc:function(ge,Ae,$e){(K!==ge||J!==Ae||le!==$e)&&(s.stencilFunc(ge,Ae,$e),K=ge,J=Ae,le=$e)},setOp:function(ge,Ae,$e){(he!==ge||ke!==Ae||ht!==$e)&&(s.stencilOp(ge,Ae,$e),he=ge,ke=Ae,ht=$e)},setLocked:function(ge){I=ge},setClear:function(ge){Bt!==ge&&(s.clearStencil(ge),Bt=ge)},reset:function(){I=!1,ce=null,K=null,J=null,le=null,he=null,ke=null,ht=null,Bt=null}}}const r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],_=null,g=!1,m=null,p=null,M=null,S=null,x=null,w=null,A=null,T=new Ge(0,0,0),R=0,v=!1,y=null,P=null,U=null,O=null,W=null;const Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,z=0;const N=s.getParameter(s.VERSION);N.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(N)[1]),q=z>=1):N.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),q=z>=2);let $=null,D={};const ae=s.getParameter(s.SCISSOR_BOX),Ce=s.getParameter(s.VIEWPORT),Qe=new pt().fromArray(ae),j=new pt().fromArray(Ce);function ne(I,ce,K,J){const le=new Uint8Array(4),he=s.createTexture();s.bindTexture(I,he),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ke=0;ke<K;ke++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(ce,0,s.RGBA,1,1,J,0,s.RGBA,s.UNSIGNED_BYTE,le):s.texImage2D(ce+ke,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,le);return he}const de={};de[s.TEXTURE_2D]=ne(s.TEXTURE_2D,s.TEXTURE_2D,1),de[s.TEXTURE_CUBE_MAP]=ne(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[s.TEXTURE_2D_ARRAY]=ne(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),de[s.TEXTURE_3D]=ne(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(s.DEPTH_TEST),o.setFunc(co),Be(!1),H(If),ie(s.CULL_FACE),L(Cr);function ie(I){u[I]!==!0&&(s.enable(I),u[I]=!0)}function Te(I){u[I]!==!1&&(s.disable(I),u[I]=!1)}function be(I,ce){return h[I]!==ce?(s.bindFramebuffer(I,ce),h[I]=ce,I===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ce),I===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ce),!0):!1}function He(I,ce){let K=d,J=!1;if(I){K=f.get(ce),K===void 0&&(K=[],f.set(ce,K));const le=I.textures;if(K.length!==le.length||K[0]!==s.COLOR_ATTACHMENT0){for(let he=0,ke=le.length;he<ke;he++)K[he]=s.COLOR_ATTACHMENT0+he;K.length=le.length,J=!0}}else K[0]!==s.BACK&&(K[0]=s.BACK,J=!0);J&&s.drawBuffers(K)}function Ze(I){return _!==I?(s.useProgram(I),_=I,!0):!1}const Fe={[ts]:s.FUNC_ADD,[i0]:s.FUNC_SUBTRACT,[r0]:s.FUNC_REVERSE_SUBTRACT};Fe[s0]=s.MIN,Fe[o0]=s.MAX;const De={[a0]:s.ZERO,[l0]:s.ONE,[c0]:s.SRC_COLOR,[yu]:s.SRC_ALPHA,[m0]:s.SRC_ALPHA_SATURATE,[d0]:s.DST_COLOR,[h0]:s.DST_ALPHA,[u0]:s.ONE_MINUS_SRC_COLOR,[Mu]:s.ONE_MINUS_SRC_ALPHA,[p0]:s.ONE_MINUS_DST_COLOR,[f0]:s.ONE_MINUS_DST_ALPHA,[_0]:s.CONSTANT_COLOR,[g0]:s.ONE_MINUS_CONSTANT_COLOR,[x0]:s.CONSTANT_ALPHA,[v0]:s.ONE_MINUS_CONSTANT_ALPHA};function L(I,ce,K,J,le,he,ke,ht,Bt,ge){if(I===Cr){g===!0&&(Te(s.BLEND),g=!1);return}if(g===!1&&(ie(s.BLEND),g=!0),I!==n0){if(I!==m||ge!==v){if((p!==ts||x!==ts)&&(s.blendEquation(s.FUNC_ADD),p=ts,x=ts),ge)switch(I){case $s:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zl:s.blendFunc(s.ONE,s.ONE);break;case Nf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case vu:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case $s:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zl:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Nf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case vu:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}M=null,S=null,w=null,A=null,T.set(0,0,0),R=0,m=I,v=ge}return}le=le||ce,he=he||K,ke=ke||J,(ce!==p||le!==x)&&(s.blendEquationSeparate(Fe[ce],Fe[le]),p=ce,x=le),(K!==M||J!==S||he!==w||ke!==A)&&(s.blendFuncSeparate(De[K],De[J],De[he],De[ke]),M=K,S=J,w=he,A=ke),(ht.equals(T)===!1||Bt!==R)&&(s.blendColor(ht.r,ht.g,ht.b,Bt),T.copy(ht),R=Bt),m=I,v=!1}function Et(I,ce){I.side===Ln?Te(s.CULL_FACE):ie(s.CULL_FACE);let K=I.side===yn;ce&&(K=!K),Be(K),I.blending===$s&&I.transparent===!1?L(Cr):L(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const J=I.stencilWrite;a.setTest(J),J&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ot(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ie(s.SAMPLE_ALPHA_TO_COVERAGE):Te(s.SAMPLE_ALPHA_TO_COVERAGE)}function Be(I){y!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),y=I)}function H(I){I!==e0?(ie(s.CULL_FACE),I!==P&&(I===If?s.cullFace(s.BACK):I===t0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Te(s.CULL_FACE),P=I}function Me(I){I!==U&&(q&&s.lineWidth(I),U=I)}function ot(I,ce,K){I?(ie(s.POLYGON_OFFSET_FILL),(O!==ce||W!==K)&&(s.polygonOffset(ce,K),O=ce,W=K)):Te(s.POLYGON_OFFSET_FILL)}function Ee(I){I?ie(s.SCISSOR_TEST):Te(s.SCISSOR_TEST)}function C(I){I===void 0&&(I=s.TEXTURE0+Y-1),$!==I&&(s.activeTexture(I),$=I)}function E(I,ce,K){K===void 0&&($===null?K=s.TEXTURE0+Y-1:K=$);let J=D[K];J===void 0&&(J={type:void 0,texture:void 0},D[K]=J),(J.type!==I||J.texture!==ce)&&($!==K&&(s.activeTexture(K),$=K),s.bindTexture(I,ce||de[I]),J.type=I,J.texture=ce)}function V(){const I=D[$];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ee(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ue(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Xe(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ie(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Le(I){Qe.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),Qe.copy(I))}function xe(I){j.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),j.copy(I))}function je(I,ce){let K=c.get(ce);K===void 0&&(K=new WeakMap,c.set(ce,K));let J=K.get(I);J===void 0&&(J=s.getUniformBlockIndex(ce,I.name),K.set(I,J))}function Oe(I,ce){const J=c.get(ce).get(I);l.get(ce)!==J&&(s.uniformBlockBinding(ce,J,I.__bindingPointIndex),l.set(ce,J))}function ut(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},$=null,D={},h={},f=new WeakMap,d=[],_=null,g=!1,m=null,p=null,M=null,S=null,x=null,w=null,A=null,T=new Ge(0,0,0),R=0,v=!1,y=null,P=null,U=null,O=null,W=null,Qe.set(0,0,s.canvas.width,s.canvas.height),j.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ie,disable:Te,bindFramebuffer:be,drawBuffers:He,useProgram:Ze,setBlending:L,setMaterial:Et,setFlipSided:Be,setCullFace:H,setLineWidth:Me,setPolygonOffset:ot,setScissorTest:Ee,activeTexture:C,bindTexture:E,unbindTexture:V,compressedTexImage2D:ee,compressedTexImage3D:Q,texImage2D:se,texImage3D:Ie,updateUBOMapping:je,uniformBlockBinding:Oe,texStorage2D:Xe,texStorage3D:re,texSubImage2D:Z,texSubImage3D:ue,compressedTexSubImage2D:oe,compressedTexSubImage3D:fe,scissor:Le,viewport:xe,reset:ut}}function GT(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,E){return d?new OffscreenCanvas(C,E):Sa("canvas")}function g(C,E,V){let ee=1;const Q=Ee(C);if((Q.width>V||Q.height>V)&&(ee=V/Math.max(Q.width,Q.height)),ee<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Z=Math.floor(ee*Q.width),ue=Math.floor(ee*Q.height);h===void 0&&(h=_(Z,ue));const oe=E?_(Z,ue):h;return oe.width=Z,oe.height=ue,oe.getContext("2d").drawImage(C,0,0,Z,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+Z+"x"+ue+")."),oe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){s.generateMipmap(C)}function M(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(C,E,V,ee,Q=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Z=E;if(E===s.RED&&(V===s.FLOAT&&(Z=s.R32F),V===s.HALF_FLOAT&&(Z=s.R16F),V===s.UNSIGNED_BYTE&&(Z=s.R8)),E===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(Z=s.R8UI),V===s.UNSIGNED_SHORT&&(Z=s.R16UI),V===s.UNSIGNED_INT&&(Z=s.R32UI),V===s.BYTE&&(Z=s.R8I),V===s.SHORT&&(Z=s.R16I),V===s.INT&&(Z=s.R32I)),E===s.RG&&(V===s.FLOAT&&(Z=s.RG32F),V===s.HALF_FLOAT&&(Z=s.RG16F),V===s.UNSIGNED_BYTE&&(Z=s.RG8)),E===s.RG_INTEGER&&(V===s.UNSIGNED_BYTE&&(Z=s.RG8UI),V===s.UNSIGNED_SHORT&&(Z=s.RG16UI),V===s.UNSIGNED_INT&&(Z=s.RG32UI),V===s.BYTE&&(Z=s.RG8I),V===s.SHORT&&(Z=s.RG16I),V===s.INT&&(Z=s.RG32I)),E===s.RGB_INTEGER&&(V===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),V===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),V===s.UNSIGNED_INT&&(Z=s.RGB32UI),V===s.BYTE&&(Z=s.RGB8I),V===s.SHORT&&(Z=s.RGB16I),V===s.INT&&(Z=s.RGB32I)),E===s.RGBA_INTEGER&&(V===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),V===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),V===s.UNSIGNED_INT&&(Z=s.RGBA32UI),V===s.BYTE&&(Z=s.RGBA8I),V===s.SHORT&&(Z=s.RGBA16I),V===s.INT&&(Z=s.RGBA32I)),E===s.RGB&&V===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),E===s.RGBA){const ue=Q?Vl:at.getTransfer(ee);V===s.FLOAT&&(Z=s.RGBA32F),V===s.HALF_FLOAT&&(Z=s.RGBA16F),V===s.UNSIGNED_BYTE&&(Z=ue===St?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function x(C,E){let V;return C?E===null||E===fs||E===po?V=s.DEPTH24_STENCIL8:E===Pi?V=s.DEPTH32F_STENCIL8:E===va&&(V=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===fs||E===po?V=s.DEPTH_COMPONENT24:E===Pi?V=s.DEPTH_COMPONENT32F:E===va&&(V=s.DEPTH_COMPONENT16),V}function w(C,E){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Un&&C.minFilter!==ri?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function A(C){const E=C.target;E.removeEventListener("dispose",A),R(E),E.isVideoTexture&&u.delete(E)}function T(C){const E=C.target;E.removeEventListener("dispose",T),y(E)}function R(C){const E=n.get(C);if(E.__webglInit===void 0)return;const V=C.source,ee=f.get(V);if(ee){const Q=ee[E.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&v(C),Object.keys(ee).length===0&&f.delete(V)}n.remove(C)}function v(C){const E=n.get(C);s.deleteTexture(E.__webglTexture);const V=C.source,ee=f.get(V);delete ee[E.__cacheKey],o.memory.textures--}function y(C){const E=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(E.__webglFramebuffer[ee]))for(let Q=0;Q<E.__webglFramebuffer[ee].length;Q++)s.deleteFramebuffer(E.__webglFramebuffer[ee][Q]);else s.deleteFramebuffer(E.__webglFramebuffer[ee]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[ee])}else{if(Array.isArray(E.__webglFramebuffer))for(let ee=0;ee<E.__webglFramebuffer.length;ee++)s.deleteFramebuffer(E.__webglFramebuffer[ee]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ee=0;ee<E.__webglColorRenderbuffer.length;ee++)E.__webglColorRenderbuffer[ee]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[ee]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const V=C.textures;for(let ee=0,Q=V.length;ee<Q;ee++){const Z=n.get(V[ee]);Z.__webglTexture&&(s.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(V[ee])}n.remove(C)}let P=0;function U(){P=0}function O(){const C=P;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),P+=1,C}function W(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function Y(C,E){const V=n.get(C);if(C.isVideoTexture&&Me(C),C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){const ee=C.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(V,C,E);return}}t.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+E)}function q(C,E){const V=n.get(C);if(C.version>0&&V.__version!==C.version){j(V,C,E);return}t.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+E)}function z(C,E){const V=n.get(C);if(C.version>0&&V.__version!==C.version){j(V,C,E);return}t.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+E)}function N(C,E){const V=n.get(C);if(C.version>0&&V.__version!==C.version){ne(V,C,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+E)}const $={[fo]:s.REPEAT,[Tr]:s.CLAMP_TO_EDGE,[Hl]:s.MIRRORED_REPEAT},D={[Un]:s.NEAREST,[Mm]:s.NEAREST_MIPMAP_NEAREST,[Go]:s.NEAREST_MIPMAP_LINEAR,[ri]:s.LINEAR,[gl]:s.LINEAR_MIPMAP_NEAREST,[nr]:s.LINEAR_MIPMAP_LINEAR},ae={[N0]:s.NEVER,[z0]:s.ALWAYS,[U0]:s.LESS,[Im]:s.LEQUAL,[F0]:s.EQUAL,[k0]:s.GEQUAL,[O0]:s.GREATER,[B0]:s.NOTEQUAL};function Ce(C,E){if(E.type===Pi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===ri||E.magFilter===gl||E.magFilter===Go||E.magFilter===nr||E.minFilter===ri||E.minFilter===gl||E.minFilter===Go||E.minFilter===nr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,$[E.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,$[E.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,$[E.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,D[E.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,D[E.minFilter]),E.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,ae[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Un||E.minFilter!==Go&&E.minFilter!==nr||E.type===Pi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Qe(C,E){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",A));const ee=E.source;let Q=f.get(ee);Q===void 0&&(Q={},f.set(ee,Q));const Z=W(E);if(Z!==C.__cacheKey){Q[Z]===void 0&&(Q[Z]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,V=!0),Q[Z].usedTimes++;const ue=Q[C.__cacheKey];ue!==void 0&&(Q[C.__cacheKey].usedTimes--,ue.usedTimes===0&&v(E)),C.__cacheKey=Z,C.__webglTexture=Q[Z].texture}return V}function j(C,E,V){let ee=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ee=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ee=s.TEXTURE_3D);const Q=Qe(C,E),Z=E.source;t.bindTexture(ee,C.__webglTexture,s.TEXTURE0+V);const ue=n.get(Z);if(Z.version!==ue.__version||Q===!0){t.activeTexture(s.TEXTURE0+V);const oe=at.getPrimaries(at.workingColorSpace),fe=E.colorSpace===vr?null:at.getPrimaries(E.colorSpace),Xe=E.colorSpace===vr||oe===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let re=g(E.image,!1,i.maxTextureSize);re=ot(E,re);const se=r.convert(E.format,E.colorSpace),Ie=r.convert(E.type);let Le=S(E.internalFormat,se,Ie,E.colorSpace,E.isVideoTexture);Ce(ee,E);let xe;const je=E.mipmaps,Oe=E.isVideoTexture!==!0,ut=ue.__version===void 0||Q===!0,I=Z.dataReady,ce=w(E,re);if(E.isDepthTexture)Le=x(E.format===mo,E.type),ut&&(Oe?t.texStorage2D(s.TEXTURE_2D,1,Le,re.width,re.height):t.texImage2D(s.TEXTURE_2D,0,Le,re.width,re.height,0,se,Ie,null));else if(E.isDataTexture)if(je.length>0){Oe&&ut&&t.texStorage2D(s.TEXTURE_2D,ce,Le,je[0].width,je[0].height);for(let K=0,J=je.length;K<J;K++)xe=je[K],Oe?I&&t.texSubImage2D(s.TEXTURE_2D,K,0,0,xe.width,xe.height,se,Ie,xe.data):t.texImage2D(s.TEXTURE_2D,K,Le,xe.width,xe.height,0,se,Ie,xe.data);E.generateMipmaps=!1}else Oe?(ut&&t.texStorage2D(s.TEXTURE_2D,ce,Le,re.width,re.height),I&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,re.width,re.height,se,Ie,re.data)):t.texImage2D(s.TEXTURE_2D,0,Le,re.width,re.height,0,se,Ie,re.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Oe&&ut&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ce,Le,je[0].width,je[0].height,re.depth);for(let K=0,J=je.length;K<J;K++)if(xe=je[K],E.format!==yi)if(se!==null)if(Oe){if(I)if(E.layerUpdates.size>0){const le=Ed(xe.width,xe.height,E.format,E.type);for(const he of E.layerUpdates){const ke=xe.data.subarray(he*le/xe.data.BYTES_PER_ELEMENT,(he+1)*le/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,he,xe.width,xe.height,1,se,ke)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,xe.width,xe.height,re.depth,se,xe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,K,Le,xe.width,xe.height,re.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?I&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,xe.width,xe.height,re.depth,se,Ie,xe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,K,Le,xe.width,xe.height,re.depth,0,se,Ie,xe.data)}else{Oe&&ut&&t.texStorage2D(s.TEXTURE_2D,ce,Le,je[0].width,je[0].height);for(let K=0,J=je.length;K<J;K++)xe=je[K],E.format!==yi?se!==null?Oe?I&&t.compressedTexSubImage2D(s.TEXTURE_2D,K,0,0,xe.width,xe.height,se,xe.data):t.compressedTexImage2D(s.TEXTURE_2D,K,Le,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?I&&t.texSubImage2D(s.TEXTURE_2D,K,0,0,xe.width,xe.height,se,Ie,xe.data):t.texImage2D(s.TEXTURE_2D,K,Le,xe.width,xe.height,0,se,Ie,xe.data)}else if(E.isDataArrayTexture)if(Oe){if(ut&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ce,Le,re.width,re.height,re.depth),I)if(E.layerUpdates.size>0){const K=Ed(re.width,re.height,E.format,E.type);for(const J of E.layerUpdates){const le=re.data.subarray(J*K/re.data.BYTES_PER_ELEMENT,(J+1)*K/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,re.width,re.height,1,se,Ie,le)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,se,Ie,re.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Le,re.width,re.height,re.depth,0,se,Ie,re.data);else if(E.isData3DTexture)Oe?(ut&&t.texStorage3D(s.TEXTURE_3D,ce,Le,re.width,re.height,re.depth),I&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,se,Ie,re.data)):t.texImage3D(s.TEXTURE_3D,0,Le,re.width,re.height,re.depth,0,se,Ie,re.data);else if(E.isFramebufferTexture){if(ut)if(Oe)t.texStorage2D(s.TEXTURE_2D,ce,Le,re.width,re.height);else{let K=re.width,J=re.height;for(let le=0;le<ce;le++)t.texImage2D(s.TEXTURE_2D,le,Le,K,J,0,se,Ie,null),K>>=1,J>>=1}}else if(je.length>0){if(Oe&&ut){const K=Ee(je[0]);t.texStorage2D(s.TEXTURE_2D,ce,Le,K.width,K.height)}for(let K=0,J=je.length;K<J;K++)xe=je[K],Oe?I&&t.texSubImage2D(s.TEXTURE_2D,K,0,0,se,Ie,xe):t.texImage2D(s.TEXTURE_2D,K,Le,se,Ie,xe);E.generateMipmaps=!1}else if(Oe){if(ut){const K=Ee(re);t.texStorage2D(s.TEXTURE_2D,ce,Le,K.width,K.height)}I&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,se,Ie,re)}else t.texImage2D(s.TEXTURE_2D,0,Le,se,Ie,re);m(E)&&p(ee),ue.__version=Z.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function ne(C,E,V){if(E.image.length!==6)return;const ee=Qe(C,E),Q=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+V);const Z=n.get(Q);if(Q.version!==Z.__version||ee===!0){t.activeTexture(s.TEXTURE0+V);const ue=at.getPrimaries(at.workingColorSpace),oe=E.colorSpace===vr?null:at.getPrimaries(E.colorSpace),fe=E.colorSpace===vr||ue===oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Xe=E.isCompressedTexture||E.image[0].isCompressedTexture,re=E.image[0]&&E.image[0].isDataTexture,se=[];for(let J=0;J<6;J++)!Xe&&!re?se[J]=g(E.image[J],!0,i.maxCubemapSize):se[J]=re?E.image[J].image:E.image[J],se[J]=ot(E,se[J]);const Ie=se[0],Le=r.convert(E.format,E.colorSpace),xe=r.convert(E.type),je=S(E.internalFormat,Le,xe,E.colorSpace),Oe=E.isVideoTexture!==!0,ut=Z.__version===void 0||ee===!0,I=Q.dataReady;let ce=w(E,Ie);Ce(s.TEXTURE_CUBE_MAP,E);let K;if(Xe){Oe&&ut&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ce,je,Ie.width,Ie.height);for(let J=0;J<6;J++){K=se[J].mipmaps;for(let le=0;le<K.length;le++){const he=K[le];E.format!==yi?Le!==null?Oe?I&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,0,0,he.width,he.height,Le,he.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,je,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,0,0,he.width,he.height,Le,xe,he.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,le,je,he.width,he.height,0,Le,xe,he.data)}}}else{if(K=E.mipmaps,Oe&&ut){K.length>0&&ce++;const J=Ee(se[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ce,je,J.width,J.height)}for(let J=0;J<6;J++)if(re){Oe?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,se[J].width,se[J].height,Le,xe,se[J].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,je,se[J].width,se[J].height,0,Le,xe,se[J].data);for(let le=0;le<K.length;le++){const ke=K[le].image[J].image;Oe?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,0,0,ke.width,ke.height,Le,xe,ke.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,je,ke.width,ke.height,0,Le,xe,ke.data)}}else{Oe?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Le,xe,se[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,je,Le,xe,se[J]);for(let le=0;le<K.length;le++){const he=K[le];Oe?I&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,0,0,Le,xe,he.image[J]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,le+1,je,Le,xe,he.image[J])}}}m(E)&&p(s.TEXTURE_CUBE_MAP),Z.__version=Q.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function de(C,E,V,ee,Q,Z){const ue=r.convert(V.format,V.colorSpace),oe=r.convert(V.type),fe=S(V.internalFormat,ue,oe,V.colorSpace),Xe=n.get(E),re=n.get(V);if(re.__renderTarget=E,!Xe.__hasExternalTextures){const se=Math.max(1,E.width>>Z),Ie=Math.max(1,E.height>>Z);Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?t.texImage3D(Q,Z,fe,se,Ie,E.depth,0,ue,oe,null):t.texImage2D(Q,Z,fe,se,Ie,0,ue,oe,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),H(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ee,Q,re.__webglTexture,0,Be(E)):(Q===s.TEXTURE_2D||Q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ee,Q,re.__webglTexture,Z),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ie(C,E,V){if(s.bindRenderbuffer(s.RENDERBUFFER,C),E.depthBuffer){const ee=E.depthTexture,Q=ee&&ee.isDepthTexture?ee.type:null,Z=x(E.stencilBuffer,Q),ue=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=Be(E);H(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,oe,Z,E.width,E.height):V?s.renderbufferStorageMultisample(s.RENDERBUFFER,oe,Z,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Z,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ue,s.RENDERBUFFER,C)}else{const ee=E.textures;for(let Q=0;Q<ee.length;Q++){const Z=ee[Q],ue=r.convert(Z.format,Z.colorSpace),oe=r.convert(Z.type),fe=S(Z.internalFormat,ue,oe,Z.colorSpace),Xe=Be(E);V&&H(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Xe,fe,E.width,E.height):H(E)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Xe,fe,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,fe,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Te(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=n.get(E.depthTexture);ee.__renderTarget=E,(!ee.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Y(E.depthTexture,0);const Q=ee.__webglTexture,Z=Be(E);if(E.depthTexture.format===Zs)H(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Q,0);else if(E.depthTexture.format===mo)H(E)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function be(C){const E=n.get(C),V=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){const ee=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ee){const Q=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ee.removeEventListener("dispose",Q)};ee.addEventListener("dispose",Q),E.__depthDisposeCallback=Q}E.__boundDepthTexture=ee}if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Te(E.__webglFramebuffer,C)}else if(V){E.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[ee]),E.__webglDepthbuffer[ee]===void 0)E.__webglDepthbuffer[ee]=s.createRenderbuffer(),ie(E.__webglDepthbuffer[ee],C,!1);else{const Q=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=E.__webglDepthbuffer[ee];s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,Q,s.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),ie(E.__webglDepthbuffer,C,!1);else{const ee=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,ee,s.RENDERBUFFER,Q)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function He(C,E,V){const ee=n.get(C);E!==void 0&&de(ee.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&be(C)}function Ze(C){const E=C.texture,V=n.get(C),ee=n.get(E);C.addEventListener("dispose",T);const Q=C.textures,Z=C.isWebGLCubeRenderTarget===!0,ue=Q.length>1;if(ue||(ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture()),ee.__version=E.version,o.memory.textures++),Z){V.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer[oe]=[];for(let fe=0;fe<E.mipmaps.length;fe++)V.__webglFramebuffer[oe][fe]=s.createFramebuffer()}else V.__webglFramebuffer[oe]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer=[];for(let oe=0;oe<E.mipmaps.length;oe++)V.__webglFramebuffer[oe]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(ue)for(let oe=0,fe=Q.length;oe<fe;oe++){const Xe=n.get(Q[oe]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=s.createTexture(),o.memory.textures++)}if(C.samples>0&&H(C)===!1){V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let oe=0;oe<Q.length;oe++){const fe=Q[oe];V.__webglColorRenderbuffer[oe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[oe]);const Xe=r.convert(fe.format,fe.colorSpace),re=r.convert(fe.type),se=S(fe.internalFormat,Xe,re,fe.colorSpace,C.isXRRenderTarget===!0),Ie=Be(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ie,se,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,V.__webglColorRenderbuffer[oe])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),ie(V.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){t.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture),Ce(s.TEXTURE_CUBE_MAP,E);for(let oe=0;oe<6;oe++)if(E.mipmaps&&E.mipmaps.length>0)for(let fe=0;fe<E.mipmaps.length;fe++)de(V.__webglFramebuffer[oe][fe],C,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,fe);else de(V.__webglFramebuffer[oe],C,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(E)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let oe=0,fe=Q.length;oe<fe;oe++){const Xe=Q[oe],re=n.get(Xe);t.bindTexture(s.TEXTURE_2D,re.__webglTexture),Ce(s.TEXTURE_2D,Xe),de(V.__webglFramebuffer,C,Xe,s.COLOR_ATTACHMENT0+oe,s.TEXTURE_2D,0),m(Xe)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let oe=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(oe=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(oe,ee.__webglTexture),Ce(oe,E),E.mipmaps&&E.mipmaps.length>0)for(let fe=0;fe<E.mipmaps.length;fe++)de(V.__webglFramebuffer[fe],C,E,s.COLOR_ATTACHMENT0,oe,fe);else de(V.__webglFramebuffer,C,E,s.COLOR_ATTACHMENT0,oe,0);m(E)&&p(oe),t.unbindTexture()}C.depthBuffer&&be(C)}function Fe(C){const E=C.textures;for(let V=0,ee=E.length;V<ee;V++){const Q=E[V];if(m(Q)){const Z=M(C),ue=n.get(Q).__webglTexture;t.bindTexture(Z,ue),p(Z),t.unbindTexture()}}}const De=[],L=[];function Et(C){if(C.samples>0){if(H(C)===!1){const E=C.textures,V=C.width,ee=C.height;let Q=s.COLOR_BUFFER_BIT;const Z=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=n.get(C),oe=E.length>1;if(oe)for(let fe=0;fe<E.length;fe++)t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let fe=0;fe<E.length;fe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Q|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Q|=s.STENCIL_BUFFER_BIT)),oe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ue.__webglColorRenderbuffer[fe]);const Xe=n.get(E[fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Xe,0)}s.blitFramebuffer(0,0,V,ee,0,0,V,ee,Q,s.NEAREST),l===!0&&(De.length=0,L.length=0,De.push(s.COLOR_ATTACHMENT0+fe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(De.push(Z),L.push(Z),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,L)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,De))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),oe)for(let fe=0;fe<E.length;fe++){t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,ue.__webglColorRenderbuffer[fe]);const Xe=n.get(E[fe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,Xe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const E=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Be(C){return Math.min(i.maxSamples,C.samples)}function H(C){const E=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Me(C){const E=o.render.frame;u.get(C)!==E&&(u.set(C,E),C.update())}function ot(C,E){const V=C.colorSpace,ee=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==Mn&&V!==vr&&(at.getTransfer(V)===St?(ee!==yi||Q!==ur)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),E}function Ee(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=U,this.setTexture2D=Y,this.setTexture2DArray=q,this.setTexture3D=z,this.setTextureCube=N,this.rebindTextures=He,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=Fe,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=de,this.useMultisampledRTT=H}function WT(s,e){function t(n,i=vr){let r;const o=at.getTransfer(i);if(n===ur)return s.UNSIGNED_BYTE;if(n===Hh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Vh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Em)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Sm)return s.BYTE;if(n===Tm)return s.SHORT;if(n===va)return s.UNSIGNED_SHORT;if(n===zh)return s.INT;if(n===fs)return s.UNSIGNED_INT;if(n===Pi)return s.FLOAT;if(n===Aa)return s.HALF_FLOAT;if(n===bm)return s.ALPHA;if(n===Am)return s.RGB;if(n===yi)return s.RGBA;if(n===wm)return s.LUMINANCE;if(n===Rm)return s.LUMINANCE_ALPHA;if(n===Zs)return s.DEPTH_COMPONENT;if(n===mo)return s.DEPTH_STENCIL;if(n===Gh)return s.RED;if(n===Wh)return s.RED_INTEGER;if(n===Cm)return s.RG;if(n===Xh)return s.RG_INTEGER;if(n===Yh)return s.RGBA_INTEGER;if(n===xl||n===vl||n===yl||n===Ml)if(o===St)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===xl)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===vl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===yl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ml)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===xl)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===vl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===yl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ml)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Du||n===Lu||n===Iu||n===Nu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Du)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Lu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Iu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Nu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Uu||n===Fu||n===Ou)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Uu||n===Fu)return o===St?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ou)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Bu||n===ku||n===zu||n===Hu||n===Vu||n===Gu||n===Wu||n===Xu||n===Yu||n===qu||n===Ku||n===ju||n===$u||n===Zu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Bu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ku)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Hu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Gu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ku)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ju)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$u)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Zu)return o===St?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Sl||n===Ju||n===Qu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Sl)return o===St?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ju)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pm||n===eh||n===th||n===nh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Sl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===eh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===th)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===po?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}const XT={type:"move"};class jc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new In,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new In,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new In,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;c.inputState.pinching&&f>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(XT)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new In;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const YT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class KT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new tn,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Fr({vertexShader:YT,fragmentShader:qT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dt(new Eo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jT extends So{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,_=null;const g=new KT,m=t.getContextAttributes();let p=null,M=null;const S=[],x=[],w=new ct;let A=null;const T=new Dn;T.viewport=new pt;const R=new Dn;R.viewport=new pt;const v=[T,R],y=new ov;let P=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ne=S[j];return ne===void 0&&(ne=new jc,S[j]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(j){let ne=S[j];return ne===void 0&&(ne=new jc,S[j]=ne),ne.getGripSpace()},this.getHand=function(j){let ne=S[j];return ne===void 0&&(ne=new jc,S[j]=ne),ne.getHandSpace()};function O(j){const ne=x.indexOf(j.inputSource);if(ne===-1)return;const de=S[ne];de!==void 0&&(de.update(j.inputSource,j.frame,c||o),de.dispatchEvent({type:j.type,data:j.inputSource}))}function W(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",Y);for(let j=0;j<S.length;j++){const ne=x[j];ne!==null&&(x[j]=null,S[j].disconnect(ne))}P=null,U=null,g.reset(),e.setRenderTarget(p),d=null,f=null,h=null,i=null,M=null,Qe.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",W),i.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(w),i.enabledFeatures!==void 0&&i.enabledFeatures.includes("layers")){let de=null,ie=null,Te=null;m.depth&&(Te=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=m.stencil?mo:Zs,ie=m.stencil?po:fs);const be={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:r};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(be),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),M=new ds(f.textureWidth,f.textureHeight,{format:yi,type:ur,depthTexture:new Km(f.textureWidth,f.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const de={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,de),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new ds(d.framebufferWidth,d.framebufferHeight,{format:yi,type:ur,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Qe.setContext(i),Qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Y(j){for(let ne=0;ne<j.removed.length;ne++){const de=j.removed[ne],ie=x.indexOf(de);ie>=0&&(x[ie]=null,S[ie].disconnect(de))}for(let ne=0;ne<j.added.length;ne++){const de=j.added[ne];let ie=x.indexOf(de);if(ie===-1){for(let be=0;be<S.length;be++)if(be>=x.length){x.push(de),ie=be;break}else if(x[be]===null){x[be]=de,ie=be;break}if(ie===-1)break}const Te=S[ie];Te&&Te.connect(de)}}const q=new k,z=new k;function N(j,ne,de){q.setFromMatrixPosition(ne.matrixWorld),z.setFromMatrixPosition(de.matrixWorld);const ie=q.distanceTo(z),Te=ne.projectionMatrix.elements,be=de.projectionMatrix.elements,He=Te[14]/(Te[10]-1),Ze=Te[14]/(Te[10]+1),Fe=(Te[9]+1)/Te[5],De=(Te[9]-1)/Te[5],L=(Te[8]-1)/Te[0],Et=(be[8]+1)/be[0],Be=He*L,H=He*Et,Me=ie/(-L+Et),ot=Me*-L;if(ne.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ot),j.translateZ(Me),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Te[10]===-1)j.projectionMatrix.copy(ne.projectionMatrix),j.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const Ee=He+Me,C=Ze+Me,E=Be-ot,V=H+(ie-ot),ee=Fe*Ze/C*Ee,Q=De*Ze/C*Ee;j.projectionMatrix.makePerspective(E,V,ee,Q,Ee,C),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function $(j,ne){ne===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ne.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let ne=j.near,de=j.far;g.texture!==null&&(g.depthNear>0&&(ne=g.depthNear),g.depthFar>0&&(de=g.depthFar)),y.near=R.near=T.near=ne,y.far=R.far=T.far=de,(P!==y.near||U!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,U=y.far),T.layers.mask=j.layers.mask|2,R.layers.mask=j.layers.mask|4,y.layers.mask=T.layers.mask|R.layers.mask;const ie=j.parent,Te=y.cameras;$(y,ie);for(let be=0;be<Te.length;be++)$(Te[be],ie);Te.length===2?N(y,T,R):y.projectionMatrix.copy(T.projectionMatrix),D(j,y,ie)};function D(j,ne,de){de===null?j.matrix.copy(ne.matrixWorld):(j.matrix.copy(de.matrixWorld),j.matrix.invert(),j.matrix.multiply(ne.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ne.projectionMatrix),j.projectionMatrixInverse.copy(ne.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=_o*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let ae=null;function Ce(j,ne){if(u=ne.getViewerPose(c||o),_=ne,u!==null){const de=u.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let ie=!1;de.length!==y.cameras.length&&(y.cameras.length=0,ie=!0);for(let be=0;be<de.length;be++){const He=de[be];let Ze=null;if(d!==null)Ze=d.getViewport(He);else{const De=h.getViewSubImage(f,He);Ze=De.viewport,be===0&&(e.setRenderTargetTextures(M,De.colorTexture,f.ignoreDepthValues?void 0:De.depthStencilTexture),e.setRenderTarget(M))}let Fe=v[be];Fe===void 0&&(Fe=new Dn,Fe.layers.enable(be),Fe.viewport=new pt,v[be]=Fe),Fe.matrix.fromArray(He.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(He.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),be===0&&(y.matrix.copy(Fe.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ie===!0&&y.cameras.push(Fe)}const Te=i.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const be=h.getDepthInformation(de[0]);be&&be.isValid&&be.texture&&g.init(e,be,i.renderState)}}for(let de=0;de<S.length;de++){const ie=x[de],Te=S[de];ie!==null&&Te!==void 0&&Te.update(ie,ne,c||o)}ae&&ae(j,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),_=null}const Qe=new e_;Qe.setAnimationLoop(Ce),this.setAnimationLoop=function(j){ae=j},this.dispose=function(){}}}const Kr=new Hi,$T=new We;function ZT(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Vm(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,S,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===yn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===yn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),S=M.envMap,x=M.envMapRotation;S&&(m.envMap.value=S,Kr.copy(x),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),m.envMapRotation.value.setFromMatrix4($T.makeRotationFromEuler(Kr)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===yn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function JT(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,S){const x=S.program;n.uniformBlockBinding(M,x)}function c(M,S){let x=i[M.id];x===void 0&&(_(M),x=u(M),i[M.id]=x,M.addEventListener("dispose",m));const w=S.program;n.updateUBOMapping(M,w);const A=e.render.frame;r[M.id]!==A&&(f(M),r[M.id]=A)}function u(M){const S=h();M.__bindingPointIndex=S;const x=s.createBuffer(),w=M.__size,A=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,w,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,x),x}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const S=i[M.id],x=M.uniforms,w=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let A=0,T=x.length;A<T;A++){const R=Array.isArray(x[A])?x[A]:[x[A]];for(let v=0,y=R.length;v<y;v++){const P=R[v];if(d(P,A,v,w)===!0){const U=P.__offset,O=Array.isArray(P.value)?P.value:[P.value];let W=0;for(let Y=0;Y<O.length;Y++){const q=O[Y],z=g(q);typeof q=="number"||typeof q=="boolean"?(P.__data[0]=q,s.bufferSubData(s.UNIFORM_BUFFER,U+W,P.__data)):q.isMatrix3?(P.__data[0]=q.elements[0],P.__data[1]=q.elements[1],P.__data[2]=q.elements[2],P.__data[3]=0,P.__data[4]=q.elements[3],P.__data[5]=q.elements[4],P.__data[6]=q.elements[5],P.__data[7]=0,P.__data[8]=q.elements[6],P.__data[9]=q.elements[7],P.__data[10]=q.elements[8],P.__data[11]=0):(q.toArray(P.__data,W),W+=z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,U,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(M,S,x,w){const A=M.value,T=S+"_"+x;if(w[T]===void 0)return typeof A=="number"||typeof A=="boolean"?w[T]=A:w[T]=A.clone(),!0;{const R=w[T];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return w[T]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function _(M){const S=M.uniforms;let x=0;const w=16;for(let T=0,R=S.length;T<R;T++){const v=Array.isArray(S[T])?S[T]:[S[T]];for(let y=0,P=v.length;y<P;y++){const U=v[y],O=Array.isArray(U.value)?U.value:[U.value];for(let W=0,Y=O.length;W<Y;W++){const q=O[W],z=g(q),N=x%w,$=N%z.boundary,D=N+$;x+=$,D!==0&&w-D<z.storage&&(x+=w-D),U.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=x,x+=z.storage}}}const A=x%w;return A>0&&(x+=w-A),M.__size=x,M.__cache={},this}function g(M){const S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),S}function m(M){const S=M.target;S.removeEventListener("dispose",m);const x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function p(){for(const M in i)s.deleteBuffer(i[M]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}class QT{constructor(e={}){const{canvas:t=ix(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const M=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ft,this.toneMapping=Pr,this.toneMappingExposure=1;const x=this;let w=!1,A=0,T=0,R=null,v=-1,y=null;const P=new pt,U=new pt;let O=null;const W=new Ge(0);let Y=0,q=t.width,z=t.height,N=1,$=null,D=null;const ae=new pt(0,0,q,z),Ce=new pt(0,0,q,z);let Qe=!1;const j=new Zh;let ne=!1,de=!1;this.transmissionResolutionScale=1;const ie=new We,Te=new We,be=new k,He=new pt,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function De(){return R===null?N:1}let L=n;function Et(b,B){return t.getContext(b,B)}try{const b={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${kh}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",he,!1),L===null){const B="webgl2";if(L=Et(B,b),L===null)throw Et(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Be,H,Me,ot,Ee,C,E,V,ee,Q,Z,ue,oe,fe,Xe,re,se,Ie,Le,xe,je,Oe,ut,I;function ce(){Be=new lS(L),Be.init(),Oe=new WT(L,Be),H=new nS(L,Be,e,Oe),Me=new VT(L,Be),H.reverseDepthBuffer&&f&&Me.buffers.depth.setReversed(!0),ot=new hS(L),Ee=new CT,C=new GT(L,Be,Me,Ee,H,Oe,ot),E=new rS(x),V=new aS(x),ee=new xv(L),ut=new eS(L,ee),Q=new cS(L,ee,ot,ut),Z=new dS(L,Q,ee,ot),Le=new fS(L,H,C),re=new iS(Ee),ue=new RT(x,E,V,Be,H,ut,re),oe=new ZT(x,Ee),fe=new DT,Xe=new OT(Be),Ie=new QM(x,E,V,Me,Z,d,l),se=new zT(x,Z,H),I=new JT(L,ot,H,Me),xe=new tS(L,Be,ot),je=new uS(L,Be,ot),ot.programs=ue.programs,x.capabilities=H,x.extensions=Be,x.properties=Ee,x.renderLists=fe,x.shadowMap=se,x.state=Me,x.info=ot}ce();const K=new jT(x,L);this.xr=K,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=Be.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Be.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(b){b!==void 0&&(N=b,this.setSize(q,z,!1))},this.getSize=function(b){return b.set(q,z)},this.setSize=function(b,B,X=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=b,z=B,t.width=Math.floor(b*N),t.height=Math.floor(B*N),X===!0&&(t.style.width=b+"px",t.style.height=B+"px"),this.setViewport(0,0,b,B)},this.getDrawingBufferSize=function(b){return b.set(q*N,z*N).floor()},this.setDrawingBufferSize=function(b,B,X){q=b,z=B,N=X,t.width=Math.floor(b*X),t.height=Math.floor(B*X),this.setViewport(0,0,b,B)},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(ae)},this.setViewport=function(b,B,X,G){b.isVector4?ae.set(b.x,b.y,b.z,b.w):ae.set(b,B,X,G),Me.viewport(P.copy(ae).multiplyScalar(N).round())},this.getScissor=function(b){return b.copy(Ce)},this.setScissor=function(b,B,X,G){b.isVector4?Ce.set(b.x,b.y,b.z,b.w):Ce.set(b,B,X,G),Me.scissor(U.copy(Ce).multiplyScalar(N).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(b){Me.setScissorTest(Qe=b)},this.setOpaqueSort=function(b){$=b},this.setTransparentSort=function(b){D=b},this.getClearColor=function(b){return b.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(b=!0,B=!0,X=!0){let G=0;if(b){let F=!1;if(R!==null){const te=R.texture.format;F=te===Yh||te===Xh||te===Wh}if(F){const te=R.texture.type,me=te===ur||te===fs||te===va||te===po||te===Hh||te===Vh,ye=Ie.getClearColor(),ve=Ie.getClearAlpha(),Pe=ye.r,Ue=ye.g,Re=ye.b;me?(_[0]=Pe,_[1]=Ue,_[2]=Re,_[3]=ve,L.clearBufferuiv(L.COLOR,0,_)):(g[0]=Pe,g[1]=Ue,g[2]=Re,g[3]=ve,L.clearBufferiv(L.COLOR,0,g))}else G|=L.COLOR_BUFFER_BIT}B&&(G|=L.DEPTH_BUFFER_BIT),X&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",he,!1),Ie.dispose(),fe.dispose(),Xe.dispose(),Ee.dispose(),E.dispose(),V.dispose(),Z.dispose(),ut.dispose(),I.dispose(),ue.dispose(),K.dispose(),K.removeEventListener("sessionstart",pe),K.removeEventListener("sessionend",Ve),we.stop()};function J(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const b=ot.autoReset,B=se.enabled,X=se.autoUpdate,G=se.needsUpdate,F=se.type;ce(),ot.autoReset=b,se.enabled=B,se.autoUpdate=X,se.needsUpdate=G,se.type=F}function he(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ke(b){const B=b.target;B.removeEventListener("dispose",ke),ht(B)}function ht(b){Bt(b),Ee.remove(b)}function Bt(b){const B=Ee.get(b).programs;B!==void 0&&(B.forEach(function(X){ue.releaseProgram(X)}),b.isShaderMaterial&&ue.releaseShaderCache(b))}this.renderBufferDirect=function(b,B,X,G,F,te){B===null&&(B=Ze);const me=F.isMesh&&F.matrixWorld.determinant()<0,ye=qn(b,B,X,G,F);Me.setMaterial(G,me);let ve=X.index,Pe=1;if(G.wireframe===!0){if(ve=Q.getWireframeAttribute(X),ve===void 0)return;Pe=2}const Ue=X.drawRange,Re=X.attributes.position;let qe=Ue.start*Pe,_t=(Ue.start+Ue.count)*Pe;te!==null&&(qe=Math.max(qe,te.start*Pe),_t=Math.min(_t,(te.start+te.count)*Pe)),ve!==null?(qe=Math.max(qe,0),_t=Math.min(_t,ve.count)):Re!=null&&(qe=Math.max(qe,0),_t=Math.min(_t,Re.count));const Yt=_t-qe;if(Yt<0||Yt===1/0)return;ut.setup(F,G,ye,X,ve);let kt,ft=xe;if(ve!==null&&(kt=ee.get(ve),ft=je,ft.setIndex(kt)),F.isMesh)G.wireframe===!0?(Me.setLineWidth(G.wireframeLinewidth*De()),ft.setMode(L.LINES)):ft.setMode(L.TRIANGLES);else if(F.isLine){let Ne=G.linewidth;Ne===void 0&&(Ne=1),Me.setLineWidth(Ne*De()),F.isLineSegments?ft.setMode(L.LINES):F.isLineLoop?ft.setMode(L.LINE_LOOP):ft.setMode(L.LINE_STRIP)}else F.isPoints?ft.setMode(L.POINTS):F.isSprite&&ft.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)ft.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))ft.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ne=F._multiDrawStarts,un=F._multiDrawCounts,gt=F._multiDrawCount,Ti=ve?ee.get(ve).bytesPerElement:1,vs=Ee.get(G).currentProgram.getUniforms();for(let Kn=0;Kn<gt;Kn++)vs.setValue(L,"_gl_DrawID",Kn),ft.render(Ne[Kn]/Ti,un[Kn])}else if(F.isInstancedMesh)ft.renderInstances(qe,Yt,F.count);else if(X.isInstancedBufferGeometry){const Ne=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,un=Math.min(X.instanceCount,Ne);ft.renderInstances(qe,Yt,un)}else ft.render(qe,Yt)};function ge(b,B,X){b.transparent===!0&&b.side===Ln&&b.forceSinglePass===!1?(b.side=yn,b.needsUpdate=!0,bt(b,B,X),b.side=cr,b.needsUpdate=!0,bt(b,B,X),b.side=Ln):bt(b,B,X)}this.compile=function(b,B,X=null){X===null&&(X=b),p=Xe.get(X),p.init(B),S.push(p),X.traverseVisible(function(F){F.isLight&&F.layers.test(B.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),b!==X&&b.traverseVisible(function(F){F.isLight&&F.layers.test(B.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();const G=new Set;return b.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const te=F.material;if(te)if(Array.isArray(te))for(let me=0;me<te.length;me++){const ye=te[me];ge(ye,X,F),G.add(ye)}else ge(te,X,F),G.add(te)}),S.pop(),p=null,G},this.compileAsync=function(b,B,X=null){const G=this.compile(b,B,X);return new Promise(F=>{function te(){if(G.forEach(function(me){Ee.get(me).currentProgram.isReady()&&G.delete(me)}),G.size===0){F(b);return}setTimeout(te,10)}Be.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let Ae=null;function $e(b){Ae&&Ae(b)}function pe(){we.stop()}function Ve(){we.start()}const we=new e_;we.setAnimationLoop($e),typeof self<"u"&&we.setContext(self),this.setAnimationLoop=function(b){Ae=b,K.setAnimationLoop(b),b===null?we.stop():we.start()},K.addEventListener("sessionstart",pe),K.addEventListener("sessionend",Ve),this.render=function(b,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(B),B=K.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,B,R),p=Xe.get(b,S.length),p.init(B),S.push(p),Te.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),j.setFromProjectionMatrix(Te),de=this.localClippingEnabled,ne=re.init(this.clippingPlanes,de),m=fe.get(b,M.length),m.init(),M.push(m),K.enabled===!0&&K.isPresenting===!0){const te=x.xr.getDepthSensingMesh();te!==null&&ze(te,B,-1/0,x.sortObjects)}ze(b,B,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort($,D),Fe=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Fe&&Ie.addToRenderList(m,b),this.info.render.frame++,ne===!0&&re.beginShadows();const X=p.state.shadowsArray;se.render(X,b,B),ne===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,F=m.transmissive;if(p.setupLights(),B.isArrayCamera){const te=B.cameras;if(F.length>0)for(let me=0,ye=te.length;me<ye;me++){const ve=te[me];it(G,F,b,ve)}Fe&&Ie.render(b);for(let me=0,ye=te.length;me<ye;me++){const ve=te[me];Vt(m,b,ve,ve.viewport)}}else F.length>0&&it(G,F,b,B),Fe&&Ie.render(b),Vt(m,b,B);R!==null&&T===0&&(C.updateMultisampleRenderTarget(R),C.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(x,b,B),ut.resetDefaultState(),v=-1,y=null,S.pop(),S.length>0?(p=S[S.length-1],ne===!0&&re.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function ze(b,B,X,G){if(b.visible===!1)return;if(b.layers.test(B.layers)){if(b.isGroup)X=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(B);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||j.intersectsSprite(b)){G&&He.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Te);const me=Z.update(b),ye=b.material;ye.visible&&m.push(b,me,ye,X,He.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||j.intersectsObject(b))){const me=Z.update(b),ye=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),He.copy(b.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),He.copy(me.boundingSphere.center)),He.applyMatrix4(b.matrixWorld).applyMatrix4(Te)),Array.isArray(ye)){const ve=me.groups;for(let Pe=0,Ue=ve.length;Pe<Ue;Pe++){const Re=ve[Pe],qe=ye[Re.materialIndex];qe&&qe.visible&&m.push(b,me,qe,X,He.z,Re)}}else ye.visible&&m.push(b,me,ye,X,He.z,null)}}const te=b.children;for(let me=0,ye=te.length;me<ye;me++)ze(te[me],B,X,G)}function Vt(b,B,X,G){const F=b.opaque,te=b.transmissive,me=b.transparent;p.setupLightsView(X),ne===!0&&re.setGlobalState(x.clippingPlanes,X),G&&Me.viewport(P.copy(G)),F.length>0&&Rt(F,B,X),te.length>0&&Rt(te,B,X),me.length>0&&Rt(me,B,X),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function it(b,B,X,G){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new ds(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?Aa:ur,minFilter:nr,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));const te=p.state.transmissionRenderTarget[G.id],me=G.viewport||P;te.setSize(me.z*x.transmissionResolutionScale,me.w*x.transmissionResolutionScale);const ye=x.getRenderTarget();x.setRenderTarget(te),x.getClearColor(W),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),x.clear(),Fe&&Ie.render(X);const ve=x.toneMapping;x.toneMapping=Pr;const Pe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),ne===!0&&re.setGlobalState(x.clippingPlanes,G),Rt(b,X,G),C.updateMultisampleRenderTarget(te),C.updateRenderTargetMipmap(te),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let Re=0,qe=B.length;Re<qe;Re++){const _t=B[Re],Yt=_t.object,kt=_t.geometry,ft=_t.material,Ne=_t.group;if(ft.side===Ln&&Yt.layers.test(G.layers)){const un=ft.side;ft.side=yn,ft.needsUpdate=!0,$t(Yt,X,G,kt,ft,Ne),ft.side=un,ft.needsUpdate=!0,Ue=!0}}Ue===!0&&(C.updateMultisampleRenderTarget(te),C.updateRenderTargetMipmap(te))}x.setRenderTarget(ye),x.setClearColor(W,Y),Pe!==void 0&&(G.viewport=Pe),x.toneMapping=ve}function Rt(b,B,X){const G=B.isScene===!0?B.overrideMaterial:null;for(let F=0,te=b.length;F<te;F++){const me=b[F],ye=me.object,ve=me.geometry,Pe=G===null?me.material:G,Ue=me.group;ye.layers.test(X.layers)&&$t(ye,B,X,ve,Pe,Ue)}}function $t(b,B,X,G,F,te){b.onBeforeRender(x,B,X,G,F,te),b.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),F.onBeforeRender(x,B,X,G,b,te),F.transparent===!0&&F.side===Ln&&F.forceSinglePass===!1?(F.side=yn,F.needsUpdate=!0,x.renderBufferDirect(X,B,G,F,b,te),F.side=cr,F.needsUpdate=!0,x.renderBufferDirect(X,B,G,F,b,te),F.side=Ln):x.renderBufferDirect(X,B,G,F,b,te),b.onAfterRender(x,B,X,G,F,te)}function bt(b,B,X){B.isScene!==!0&&(B=Ze);const G=Ee.get(b),F=p.state.lights,te=p.state.shadowsArray,me=F.state.version,ye=ue.getParameters(b,F.state,te,B,X),ve=ue.getProgramCacheKey(ye);let Pe=G.programs;G.environment=b.isMeshStandardMaterial?B.environment:null,G.fog=B.fog,G.envMap=(b.isMeshStandardMaterial?V:E).get(b.envMap||G.environment),G.envMapRotation=G.environment!==null&&b.envMap===null?B.environmentRotation:b.envMapRotation,Pe===void 0&&(b.addEventListener("dispose",ke),Pe=new Map,G.programs=Pe);let Ue=Pe.get(ve);if(Ue!==void 0){if(G.currentProgram===Ue&&G.lightsStateVersion===me)return mt(b,ye),Ue}else ye.uniforms=ue.getUniforms(b),b.onBeforeCompile(ye,x),Ue=ue.acquireProgram(ye,ve),Pe.set(ve,Ue),G.uniforms=ye.uniforms;const Re=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Re.clippingPlanes=re.uniform),mt(b,ye),G.needsLights=Sn(b),G.lightsStateVersion=me,G.needsLights&&(Re.ambientLightColor.value=F.state.ambient,Re.lightProbe.value=F.state.probe,Re.directionalLights.value=F.state.directional,Re.directionalLightShadows.value=F.state.directionalShadow,Re.spotLights.value=F.state.spot,Re.spotLightShadows.value=F.state.spotShadow,Re.rectAreaLights.value=F.state.rectArea,Re.ltc_1.value=F.state.rectAreaLTC1,Re.ltc_2.value=F.state.rectAreaLTC2,Re.pointLights.value=F.state.point,Re.pointLightShadows.value=F.state.pointShadow,Re.hemisphereLights.value=F.state.hemi,Re.directionalShadowMap.value=F.state.directionalShadowMap,Re.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Re.spotShadowMap.value=F.state.spotShadowMap,Re.spotLightMatrix.value=F.state.spotLightMatrix,Re.spotLightMap.value=F.state.spotLightMap,Re.pointShadowMap.value=F.state.pointShadowMap,Re.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=Ue,G.uniformsList=null,Ue}function At(b){if(b.uniformsList===null){const B=b.currentProgram.getUniforms();b.uniformsList=Tl.seqWithValue(B.seq,b.uniforms)}return b.uniformsList}function mt(b,B){const X=Ee.get(b);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.batchingColor=B.batchingColor,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.instancingMorph=B.instancingMorph,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function qn(b,B,X,G,F){B.isScene!==!0&&(B=Ze),C.resetTextureUnits();const te=B.fog,me=G.isMeshStandardMaterial?B.environment:null,ye=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Mn,ve=(G.isMeshStandardMaterial?V:E).get(G.envMap||me),Pe=G.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ue=!!X.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Re=!!X.morphAttributes.position,qe=!!X.morphAttributes.normal,_t=!!X.morphAttributes.color;let Yt=Pr;G.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Yt=x.toneMapping);const kt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ft=kt!==void 0?kt.length:0,Ne=Ee.get(G),un=p.state.lights;if(ne===!0&&(de===!0||b!==y)){const Tn=b===y&&G.id===v;re.setState(G,b,Tn)}let gt=!1;G.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==un.state.version||Ne.outputColorSpace!==ye||F.isBatchedMesh&&Ne.batching===!1||!F.isBatchedMesh&&Ne.batching===!0||F.isBatchedMesh&&Ne.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ne.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ne.instancing===!1||!F.isInstancedMesh&&Ne.instancing===!0||F.isSkinnedMesh&&Ne.skinning===!1||!F.isSkinnedMesh&&Ne.skinning===!0||F.isInstancedMesh&&Ne.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ne.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ne.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ne.instancingMorph===!1&&F.morphTexture!==null||Ne.envMap!==ve||G.fog===!0&&Ne.fog!==te||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==re.numPlanes||Ne.numIntersection!==re.numIntersection)||Ne.vertexAlphas!==Pe||Ne.vertexTangents!==Ue||Ne.morphTargets!==Re||Ne.morphNormals!==qe||Ne.morphColors!==_t||Ne.toneMapping!==Yt||Ne.morphTargetsCount!==ft)&&(gt=!0):(gt=!0,Ne.__version=G.version);let Ti=Ne.currentProgram;gt===!0&&(Ti=bt(G,B,F));let vs=!1,Kn=!1,Ro=!1;const Dt=Ti.getUniforms(),ui=Ne.uniforms;if(Me.useProgram(Ti.program)&&(vs=!0,Kn=!0,Ro=!0),G.id!==v&&(v=G.id,Kn=!0),vs||y!==b){Me.buffers.depth.getReversed()?(ie.copy(b.projectionMatrix),sx(ie),ox(ie),Dt.setValue(L,"projectionMatrix",ie)):Dt.setValue(L,"projectionMatrix",b.projectionMatrix),Dt.setValue(L,"viewMatrix",b.matrixWorldInverse);const Bn=Dt.map.cameraPosition;Bn!==void 0&&Bn.setValue(L,be.setFromMatrixPosition(b.matrixWorld)),H.logarithmicDepthBuffer&&Dt.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Dt.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,Kn=!0,Ro=!0)}if(F.isSkinnedMesh){Dt.setOptional(L,F,"bindMatrix"),Dt.setOptional(L,F,"bindMatrixInverse");const Tn=F.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),Dt.setValue(L,"boneTexture",Tn.boneTexture,C))}F.isBatchedMesh&&(Dt.setOptional(L,F,"batchingTexture"),Dt.setValue(L,"batchingTexture",F._matricesTexture,C),Dt.setOptional(L,F,"batchingIdTexture"),Dt.setValue(L,"batchingIdTexture",F._indirectTexture,C),Dt.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&Dt.setValue(L,"batchingColorTexture",F._colorsTexture,C));const hi=X.morphAttributes;if((hi.position!==void 0||hi.normal!==void 0||hi.color!==void 0)&&Le.update(F,X,Ti),(Kn||Ne.receiveShadow!==F.receiveShadow)&&(Ne.receiveShadow=F.receiveShadow,Dt.setValue(L,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(ui.envMap.value=ve,ui.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&B.environment!==null&&(ui.envMapIntensity.value=B.environmentIntensity),Kn&&(Dt.setValue(L,"toneMappingExposure",x.toneMappingExposure),Ne.needsLights&&Ct(ui,Ro),te&&G.fog===!0&&oe.refreshFogUniforms(ui,te),oe.refreshMaterialUniforms(ui,G,N,z,p.state.transmissionRenderTarget[b.id]),Tl.upload(L,At(Ne),ui,C)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Tl.upload(L,At(Ne),ui,C),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Dt.setValue(L,"center",F.center),Dt.setValue(L,"modelViewMatrix",F.modelViewMatrix),Dt.setValue(L,"normalMatrix",F.normalMatrix),Dt.setValue(L,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Tn=G.uniformsGroups;for(let Bn=0,lc=Tn.length;Bn<lc;Bn++){const zr=Tn[Bn];I.update(zr,Ti),I.bind(zr,Ti)}}return Ti}function Ct(b,B){b.ambientLightColor.needsUpdate=B,b.lightProbe.needsUpdate=B,b.directionalLights.needsUpdate=B,b.directionalLightShadows.needsUpdate=B,b.pointLights.needsUpdate=B,b.pointLightShadows.needsUpdate=B,b.spotLights.needsUpdate=B,b.spotLightShadows.needsUpdate=B,b.rectAreaLights.needsUpdate=B,b.hemisphereLights.needsUpdate=B}function Sn(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,B,X){Ee.get(b.texture).__webglTexture=B,Ee.get(b.depthTexture).__webglTexture=X;const G=Ee.get(b);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=X===void 0,G.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,B){const X=Ee.get(b);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0};const ci=L.createFramebuffer();this.setRenderTarget=function(b,B=0,X=0){R=b,A=B,T=X;let G=!0,F=null,te=!1,me=!1;if(b){const ve=Ee.get(b);if(ve.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(L.FRAMEBUFFER,null),G=!1;else if(ve.__webglFramebuffer===void 0)C.setupRenderTarget(b);else if(ve.__hasExternalTextures)C.rebindTextures(b,Ee.get(b.texture).__webglTexture,Ee.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Re=b.depthTexture;if(ve.__boundDepthTexture!==Re){if(Re!==null&&Ee.has(Re)&&(b.width!==Re.image.width||b.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(b)}}const Pe=b.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(me=!0);const Ue=Ee.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ue[B])?F=Ue[B][X]:F=Ue[B],te=!0):b.samples>0&&C.useMultisampledRTT(b)===!1?F=Ee.get(b).__webglMultisampledFramebuffer:Array.isArray(Ue)?F=Ue[X]:F=Ue,P.copy(b.viewport),U.copy(b.scissor),O=b.scissorTest}else P.copy(ae).multiplyScalar(N).floor(),U.copy(Ce).multiplyScalar(N).floor(),O=Qe;if(X!==0&&(F=ci),Me.bindFramebuffer(L.FRAMEBUFFER,F)&&G&&Me.drawBuffers(b,F),Me.viewport(P),Me.scissor(U),Me.setScissorTest(O),te){const ve=Ee.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+B,ve.__webglTexture,X)}else if(me){const ve=Ee.get(b.texture),Pe=B;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,ve.__webglTexture,X,Pe)}else if(b!==null&&X!==0){const ve=Ee.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ve.__webglTexture,X)}v=-1},this.readRenderTargetPixels=function(b,B,X,G,F,te,me){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Ee.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&me!==void 0&&(ye=ye[me]),ye){Me.bindFramebuffer(L.FRAMEBUFFER,ye);try{const ve=b.texture,Pe=ve.format,Ue=ve.type;if(!H.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!H.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=b.width-G&&X>=0&&X<=b.height-F&&L.readPixels(B,X,G,F,Oe.convert(Pe),Oe.convert(Ue),te)}finally{const ve=R!==null?Ee.get(R).__webglFramebuffer:null;Me.bindFramebuffer(L.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=async function(b,B,X,G,F,te,me){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Ee.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&me!==void 0&&(ye=ye[me]),ye){const ve=b.texture,Pe=ve.format,Ue=ve.type;if(!H.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!H.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=b.width-G&&X>=0&&X<=b.height-F){Me.bindFramebuffer(L.FRAMEBUFFER,ye);const Re=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Re),L.bufferData(L.PIXEL_PACK_BUFFER,te.byteLength,L.STREAM_READ),L.readPixels(B,X,G,F,Oe.convert(Pe),Oe.convert(Ue),0);const qe=R!==null?Ee.get(R).__webglFramebuffer:null;Me.bindFramebuffer(L.FRAMEBUFFER,qe);const _t=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await rx(L,_t,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Re),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,te),L.deleteBuffer(Re),L.deleteSync(_t),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,B=null,X=0){b.isTexture!==!0&&(zs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,b=arguments[1]);const G=Math.pow(2,-X),F=Math.floor(b.image.width*G),te=Math.floor(b.image.height*G),me=B!==null?B.x:0,ye=B!==null?B.y:0;C.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,me,ye,F,te),Me.unbindTexture()};const Zt=L.createFramebuffer(),Jt=L.createFramebuffer();this.copyTextureToTexture=function(b,B,X=null,G=null,F=0,te=null){b.isTexture!==!0&&(zs("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,b=arguments[1],B=arguments[2],te=arguments[3]||0,X=null),te===null&&(F!==0?(zs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),te=F,F=0):te=0);let me,ye,ve,Pe,Ue,Re,qe,_t,Yt;const kt=b.isCompressedTexture?b.mipmaps[te]:b.image;if(X!==null)me=X.max.x-X.min.x,ye=X.max.y-X.min.y,ve=X.isBox3?X.max.z-X.min.z:1,Pe=X.min.x,Ue=X.min.y,Re=X.isBox3?X.min.z:0;else{const hi=Math.pow(2,-F);me=Math.floor(kt.width*hi),ye=Math.floor(kt.height*hi),b.isDataArrayTexture?ve=kt.depth:b.isData3DTexture?ve=Math.floor(kt.depth*hi):ve=1,Pe=0,Ue=0,Re=0}G!==null?(qe=G.x,_t=G.y,Yt=G.z):(qe=0,_t=0,Yt=0);const ft=Oe.convert(B.format),Ne=Oe.convert(B.type);let un;B.isData3DTexture?(C.setTexture3D(B,0),un=L.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(C.setTexture2DArray(B,0),un=L.TEXTURE_2D_ARRAY):(C.setTexture2D(B,0),un=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,B.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,B.unpackAlignment);const gt=L.getParameter(L.UNPACK_ROW_LENGTH),Ti=L.getParameter(L.UNPACK_IMAGE_HEIGHT),vs=L.getParameter(L.UNPACK_SKIP_PIXELS),Kn=L.getParameter(L.UNPACK_SKIP_ROWS),Ro=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,kt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,kt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Pe),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ue),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Re);const Dt=b.isDataArrayTexture||b.isData3DTexture,ui=B.isDataArrayTexture||B.isData3DTexture;if(b.isDepthTexture){const hi=Ee.get(b),Tn=Ee.get(B),Bn=Ee.get(hi.__renderTarget),lc=Ee.get(Tn.__renderTarget);Me.bindFramebuffer(L.READ_FRAMEBUFFER,Bn.__webglFramebuffer),Me.bindFramebuffer(L.DRAW_FRAMEBUFFER,lc.__webglFramebuffer);for(let zr=0;zr<ve;zr++)Dt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ee.get(b).__webglTexture,F,Re+zr),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ee.get(B).__webglTexture,te,Yt+zr)),L.blitFramebuffer(Pe,Ue,me,ye,qe,_t,me,ye,L.DEPTH_BUFFER_BIT,L.NEAREST);Me.bindFramebuffer(L.READ_FRAMEBUFFER,null),Me.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(F!==0||b.isRenderTargetTexture||Ee.has(b)){const hi=Ee.get(b),Tn=Ee.get(B);Me.bindFramebuffer(L.READ_FRAMEBUFFER,Zt),Me.bindFramebuffer(L.DRAW_FRAMEBUFFER,Jt);for(let Bn=0;Bn<ve;Bn++)Dt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,hi.__webglTexture,F,Re+Bn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,hi.__webglTexture,F),ui?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Tn.__webglTexture,te,Yt+Bn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Tn.__webglTexture,te),F!==0?L.blitFramebuffer(Pe,Ue,me,ye,qe,_t,me,ye,L.COLOR_BUFFER_BIT,L.NEAREST):ui?L.copyTexSubImage3D(un,te,qe,_t,Yt+Bn,Pe,Ue,me,ye):L.copyTexSubImage2D(un,te,qe,_t,Pe,Ue,me,ye);Me.bindFramebuffer(L.READ_FRAMEBUFFER,null),Me.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ui?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(un,te,qe,_t,Yt,me,ye,ve,ft,Ne,kt.data):B.isCompressedArrayTexture?L.compressedTexSubImage3D(un,te,qe,_t,Yt,me,ye,ve,ft,kt.data):L.texSubImage3D(un,te,qe,_t,Yt,me,ye,ve,ft,Ne,kt):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,te,qe,_t,me,ye,ft,Ne,kt.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,te,qe,_t,kt.width,kt.height,ft,kt.data):L.texSubImage2D(L.TEXTURE_2D,te,qe,_t,me,ye,ft,Ne,kt);L.pixelStorei(L.UNPACK_ROW_LENGTH,gt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ti),L.pixelStorei(L.UNPACK_SKIP_PIXELS,vs),L.pixelStorei(L.UNPACK_SKIP_ROWS,Kn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ro),te===0&&B.generateMipmaps&&L.generateMipmap(un),Me.unbindTexture()},this.copyTextureToTexture3D=function(b,B,X=null,G=null,F=0){return b.isTexture!==!0&&(zs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,G=arguments[1]||null,b=arguments[2],B=arguments[3],F=arguments[4]||0),zs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,B,X,G,F)},this.initRenderTarget=function(b){Ee.get(b).__webglFramebuffer===void 0&&C.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?C.setTextureCube(b,0):b.isData3DTexture?C.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?C.setTexture2DArray(b,0):C.setTexture2D(b,0),Me.unbindTexture()},this.resetState=function(){A=0,T=0,R=null,Me.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ir}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}}function Kd(s,e){if(e===P0)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===ih||e===Dm){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===ih)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class s_ extends xs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new rE(t)}),this.register(function(t){return new sE(t)}),this.register(function(t){return new pE(t)}),this.register(function(t){return new mE(t)}),this.register(function(t){return new _E(t)}),this.register(function(t){return new aE(t)}),this.register(function(t){return new lE(t)}),this.register(function(t){return new cE(t)}),this.register(function(t){return new uE(t)}),this.register(function(t){return new iE(t)}),this.register(function(t){return new hE(t)}),this.register(function(t){return new oE(t)}),this.register(function(t){return new dE(t)}),this.register(function(t){return new fE(t)}),this.register(function(t){return new tE(t)}),this.register(function(t){return new gE(t)}),this.register(function(t){return new xE(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=ta.extractUrlBase(e);o=ta.resolveURL(c,this.path)}else o=ta.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Yl(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===o_){try{o[st.KHR_BINARY_GLTF]=new vE(e)}catch(h){i&&i(h);return}r=JSON.parse(o[st.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new LE(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case st.KHR_MATERIALS_UNLIT:o[h]=new nE;break;case st.KHR_DRACO_MESH_COMPRESSION:o[h]=new yE(r,this.dracoLoader);break;case st.KHR_TEXTURE_TRANSFORM:o[h]=new ME;break;case st.KHR_MESH_QUANTIZATION:o[h]=new SE;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function eE(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const st={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class tE{constructor(e){this.parser=e,this.name=st.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ge(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Mn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new ah(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Qm(u),c.distance=h;break;case"spot":c=new Jm(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Qi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class nE{constructor(){this.name=st.KHR_MATERIALS_UNLIT}getMaterialType(){return si}extendParams(e,t,n){const i=[];e.color=new Ge(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Mn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ft))}return Promise.all(i)}}class iE{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class rE{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ct(a,a)}return Promise.all(r)}}class sE{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class oE{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class aE{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ge(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Mn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ft)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class lE{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class cE{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Ge().setRGB(a[0],a[1],a[2],Mn),Promise.all(r)}}class uE{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class hE{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Ge().setRGB(a[0],a[1],a[2],Mn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ft)),Promise.all(r)}}class fE{constructor(e){this.parser=e,this.name=st.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class dE{constructor(e){this.parser=e,this.name=st.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zt}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class pE{constructor(e){this.parser=e,this.name=st.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class mE{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class _E{constructor(e){this.parser=e,this.name=st.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class gE{constructor(e){this.name=st.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class xE{constructor(e){this.name=st.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==pi.TRIANGLES&&c.mode!==pi.TRIANGLE_STRIP&&c.mode!==pi.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,d=[];for(const _ of h){const g=new We,m=new k,p=new kr,M=new k(1,1,1),S=new Nx(_.geometry,_.material,f);for(let x=0;x<f;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,x),l.SCALE&&M.fromBufferAttribute(l.SCALE,x),S.setMatrixAt(x,g.compose(m,p,M));for(const x in l)if(x==="_COLOR_0"){const w=l[x];S.instanceColor=new sh(w.array,w.itemSize,w.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&_.geometry.setAttribute(x,l[x]);It.prototype.copy.call(S,_),this.parser.assignFinalMaterial(S),d.push(S)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const o_="glTF",Bo=12,jd={JSON:1313821514,BIN:5130562};class vE{constructor(e){this.name=st.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Bo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==o_)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Bo,r=new DataView(e,Bo);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===jd.JSON){const c=new Uint8Array(e,Bo+o,a);this.content=n.decode(c)}else if(l===jd.BIN){const c=Bo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class yE{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=st.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=ch[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=ch[u]||u.toLowerCase();if(o[u]!==void 0){const f=n.accessors[e.attributes[u]],d=Qs[f.componentType];c[h]=d.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(const _ in d.attributes){const g=d.attributes[_],m=l[_];m!==void 0&&(g.normalized=m)}h(d)},a,c,Mn,f)})})}}class ME{constructor(){this.name=st.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class SE{constructor(){this.name=st.KHR_MESH_QUANTIZATION}}class a_ extends wa{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,_=e*c,g=_-c,m=-2*d+3*f,p=d-f,M=1-m,S=p-f+h;for(let x=0;x!==a;x++){const w=o[g+x+a],A=o[g+x+l]*u,T=o[_+x+a],R=o[_+x]*u;r[x]=M*w+S*A+m*T+p*R}return r}}const TE=new kr;class EE extends a_{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return TE.fromArray(r).normalize().toArray(r),r}}const pi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Qs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},$d={9728:Un,9729:ri,9984:Mm,9985:gl,9986:Go,9987:nr},Zd={33071:Tr,33648:Hl,10497:fo},$c={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ch={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},gr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},bE={CUBICSPLINE:void 0,LINEAR:Ma,STEP:ya},Zc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function AE(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new mi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:cr})),s.DefaultMaterial}function jr(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Qi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function wE(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function RE(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function CE(s){let e;const t=s.extensions&&s.extensions[st.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Jc(t.attributes):e=s.indices+":"+Jc(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Jc(s.targets[n]);return e}function Jc(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function uh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function PE(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const DE=new We;class LE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new eE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new Zm(this.options.manager):this.textureLoader=new sv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Yl(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return jr(r,a,i),Qi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[st.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(ta.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=$c[i.type],a=Qs[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Xt(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=$c[i.type],c=Qs[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let g,m;if(d&&d!==h){const p=Math.floor(f/d),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let S=t.cache.get(M);S||(g=new c(a,p*d,i.count*d/u),S=new Cx(g,d/u),t.cache.add(M,S)),m=new jh(S,l,f%d/u,_)}else a===null?g=new c(i.count*l):g=new c(a,f,i.count*l),m=new Xt(g,l,_);if(i.sparse!==void 0){const p=$c.SCALAR,M=Qs[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,w=new M(o[1],S,i.sparse.count*p),A=new c(o[2],x,i.sparse.count*l);a!==null&&(m=new Xt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let T=0,R=w.length;T<R;T++){const v=w[T];if(m.setX(v,A[T*l]),l>=2&&m.setY(v,A[T*l+1]),l>=3&&m.setZ(v,A[T*l+2]),l>=4&&m.setW(v,A[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=$d[f.magFilter]||ri,u.minFilter=$d[f.minFilter]||nr,u.wrapS=Zd[f.wrapS]||fo,u.wrapT=Zd[f.wrapT]||fo,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Un&&u.minFilter!==ri,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,d){let _=f;t.isImageBitmapLoader===!0&&(_=function(g){const m=new tn(g);m.needsUpdate=!0,f(m)}),t.load(ta.resolveURL(h,r.path),_,void 0,d)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),Qi(h,o),h.userData.mimeType=o.mimeType||PE(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[st.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[st.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[st.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new ic,Bi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new qm,Bi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return mi}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[st.KHR_MATERIALS_UNLIT]){const h=i[st.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Ge(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],Mn),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Ft)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Ln);const u=r.alphaMode||Zc.OPAQUE;if(u===Zc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Zc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==si&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ct(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==si&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==si){const h=r.emissiveFactor;a.emissive=new Ge().setRGB(h[0],h[1],h[2],Mn)}return r.emissiveTexture!==void 0&&o!==si&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ft)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),Qi(h,r),t.associations.set(h,{materials:e}),r.extensions&&jr(i,h,r),h})}createUniqueName(e){const t=Mt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[st.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Jd(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=CE(c),h=i[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[st.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Jd(new On,c,t),i[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?AE(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let d=0,_=u.length;d<_;d++){const g=u[d],m=o[d];let p;const M=c[d];if(m.mode===pi.TRIANGLES||m.mode===pi.TRIANGLE_STRIP||m.mode===pi.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Dx(g,M):new dt(g,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===pi.TRIANGLE_STRIP?p.geometry=Kd(p.geometry,Dm):m.mode===pi.TRIANGLE_FAN&&(p.geometry=Kd(p.geometry,ih));else if(m.mode===pi.LINES)p=new Ox(g,M);else if(m.mode===pi.LINE_STRIP)p=new Jh(g,M);else if(m.mode===pi.LINE_LOOP)p=new Bx(g,M);else if(m.mode===pi.POINTS)p=new Qh(g,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&RE(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Qi(p,r),m.extensions&&jr(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,_=h.length;d<_;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&jr(i,h[0],r),h[0];const f=new In;r.extensions&&jr(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,_=h.length;d<_;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Dn(Nm.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new nf(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Qi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new We;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new $h(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],_=i.samplers[d.sampler],g=d.target,m=g.node,p=i.parameters!==void 0?i.parameters[_.input]:_.input,M=i.parameters!==void 0?i.parameters[_.output]:_.output;g.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",M)),c.push(_),u.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],_=h[2],g=h[3],m=h[4],p=[];for(let M=0,S=f.length;M<S;M++){const x=f[M],w=d[M],A=_[M],T=g[M],R=m[M];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const v=n._createAnimationTracks(x,w,A,T,R);if(v)for(let y=0;y<v.length;y++)p.push(v[y])}return new Kx(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,DE)});for(let d=0,_=h.length;d<_;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Xm:c.length>1?u=new In:c.length===1?u=c[0]:u=new It,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Qi(u,r),r.extensions&&jr(n,u,r),r.matrix!==void 0){const h=new We;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new In;n.name&&(r.name=i.createUniqueName(n.name)),Qi(r,n),n.extensions&&jr(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof Bi||f instanceof tn)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];gr[r.path]===gr.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(gr[r.path]){case gr.weights:c=xo;break;case gr.rotation:c=vo;break;case gr.position:case gr.scale:c=yo;break;default:switch(n.itemSize){case 1:c=xo;break;case 2:case 3:default:c=yo;break}break}const u=i.interpolation!==void 0?bE[i.interpolation]:Ma,h=this._getArrayFromAccessor(n);for(let f=0,d=l.length;f<d;f++){const _=new c(l[f]+"."+gr[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=uh(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof vo?EE:a_;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function IE(s,e,t){const n=e.attributes,i=new Mi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new k(l[0],l[1],l[2]),new k(c[0],c[1],c[2])),a.normalized){const u=uh(Qs[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new k,l=new k;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,_=f.max;if(d!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(_[2]))),f.normalized){const g=uh(Qs[f.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Vi;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Jd(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=ch[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return at.workingColorSpace!==Mn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${at.workingColorSpace}" not supported.`),Qi(s,e),IE(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?wE(s,e.targets,t):s})}const Qc=new WeakMap;class NE extends xs{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new Yl(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,Ft,n).catch(n)}decodeDracoFile(e,t,n,i,r=Mn,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(Qc.has(e)){const l=Qc.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(l=>(i=l,new Promise((c,u)=>{i._callbacks[r]={resolve:c,reject:u},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),Qc.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new On;e.index&&t.setIndex(new Xt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],r=i.name,o=i.array,a=i.itemSize,l=new Xt(o,a);r==="color"&&(this._assignVertexColorSpace(l,i.vertexColorSpace),l.normalized=!(o instanceof Float32Array)),t.setAttribute(r,l)}return t}_assignVertexColorSpace(e,t){if(t!==Ft)return;const n=new Ge;for(let i=0,r=e.count;i<r;i++)n.fromBufferAttribute(e,i),at.toWorkingColorSpace(n,Ft),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new Yl(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=UE.toString(),o=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const o=r.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function UE(){let s,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":s=a.decoderConfig,e=new Promise(function(u){s.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(s)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(u=>{const h=u.draco,f=new h.Decoder;try{const d=t(h,f,new Int8Array(l),c),_=d.attributes.map(g=>g.array.buffer);d.index&&_.push(d.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:d},_)}catch(d){console.error(d),self.postMessage({type:"error",id:a.id,error:d.message})}finally{h.destroy(f)}});break}};function t(o,a,l,c){const u=c.attributeIDs,h=c.attributeTypes;let f,d;const _=a.GetEncodedGeometryType(l);if(_===o.TRIANGULAR_MESH)f=new o.Mesh,d=a.DecodeArrayToMesh(l,l.byteLength,f);else if(_===o.POINT_CLOUD)f=new o.PointCloud,d=a.DecodeArrayToPointCloud(l,l.byteLength,f);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!d.ok()||f.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+d.error_msg());const g={index:null,attributes:[]};for(const m in u){const p=self[h[m]];let M,S;if(c.useUniqueIDs)S=u[m],M=a.GetAttributeByUniqueId(f,S);else{if(S=a.GetAttributeId(f,o[u[m]]),S===-1)continue;M=a.GetAttribute(f,S)}const x=i(o,a,f,m,p,M);m==="color"&&(x.vertexColorSpace=c.vertexColorSpace),g.attributes.push(x)}return _===o.TRIANGULAR_MESH&&(g.index=n(o,a,f)),o.destroy(f),g}function n(o,a,l){const u=l.num_faces()*3,h=u*4,f=o._malloc(h);a.GetTrianglesUInt32Array(l,h,f);const d=new Uint32Array(o.HEAPF32.buffer,f,u).slice();return o._free(f),{array:d,itemSize:1}}function i(o,a,l,c,u,h){const f=h.num_components(),_=l.num_points()*f,g=_*u.BYTES_PER_ELEMENT,m=r(o,u),p=o._malloc(g);a.GetAttributeDataArrayForAllPoints(l,h,m,g,p);const M=new u(o.HEAPF32.buffer,p,_).slice();return o._free(p),{name:c,array:M,itemSize:f}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}const FE={value:0};function l_(s){s.updateMatrixWorld(!0);const e=new We().copy(s.matrixWorld).invert(),t=new We,n=new Ke,i=new k,r=new Set;s.traverse(o=>{if(!o.isMesh)return;r.has(o.geometry)&&(o.geometry=o.geometry.clone()),r.add(o.geometry);const a=o.geometry;a.attributes.normal||a.computeVertexNormals();const l=a.attributes.position,c=a.attributes.normal,u=new Float32Array(l.count*3),h=new Float32Array(l.count*3);t.multiplyMatrices(e,o.matrixWorld),n.getNormalMatrix(t);for(let f=0;f<l.count;f++)i.fromBufferAttribute(l,f).applyMatrix4(t),u[f*3]=i.x,u[f*3+1]=i.y,u[f*3+2]=i.z,i.fromBufferAttribute(c,f).applyMatrix3(n).normalize(),h[f*3]=i.x,h[f*3+1]=i.y,h[f*3+2]=i.z;a.setAttribute("aSurfPos",new Xt(u,3)),a.setAttribute("aSurfNrm",new Xt(h,3))})}const OE=`
varying vec3 vSurfPos;
varying vec3 vSurfNrm;
uniform float uRoughScale;
uniform float uRoughVar;
uniform float uBumpScale;
uniform float uBump;
uniform float uPeelScale;
uniform float uPeel;
uniform float uFlakeScale;
uniform float uFlake;
uniform float uWet;
uniform float uDropScale;
uniform float uDrops;
uniform float uFilm;
uniform float uDarken;
uniform mat4 uRootMatrix;

float sHash(vec3 p) {
  p = fract(p * 0.3183099 + 0.1);
  p *= 17.0;
  return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
}
float sNoise(vec3 x) {
  vec3 i = floor(x);
  vec3 f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(mix(sHash(i), sHash(i + vec3(1, 0, 0)), f.x),
        mix(sHash(i + vec3(0, 1, 0)), sHash(i + vec3(1, 1, 0)), f.x), f.y),
    mix(mix(sHash(i + vec3(0, 0, 1)), sHash(i + vec3(1, 0, 1)), f.x),
        mix(sHash(i + vec3(0, 1, 1)), sHash(i + vec3(1, 1, 1)), f.x), f.y),
    f.z);
}
float sFbm(vec3 p) {
  float a = 0.5;
  float s = 0.0;
  for (int i = 0; i < 4; i++) {
    s += a * sNoise(p);
    p = p * 2.03 + 17.1;
    a *= 0.5;
  }
  return s;
}
// Screen-space derivative bump (same maths as three's perturbNormalArb).
vec3 sBump(vec3 n, float h, float amp) {
  vec3 dpx = dFdx(-vViewPosition);
  vec3 dpy = dFdy(-vViewPosition);
  float dhx = dFdx(h) * amp;
  float dhy = dFdy(h) * amp;
  vec3 r1 = cross(dpy, n);
  vec3 r2 = cross(n, dpx);
  float det = dot(dpx, r1);
  vec3 grad = sign(det) * (dhx * r1 + dhy * r2);
  return normalize(abs(det) * n - grad);
}

// One layer of water beads. Cells are squashed along gravity on vertical faces
// so drops become runs. Returns xyz = tangential slope (root space), w = coverage.
vec4 sDropLayer(vec3 p, vec3 n, float density) {
  float vertical = 1.0 - abs(n.y);
  vec3 stretch = vec3(1.0, mix(1.0, 0.3, vertical), 1.0);
  vec3 q = p * stretch;
  vec3 ip = floor(q);
  vec3 fp = fract(q);
  vec4 best = vec4(0.0);
  float bestH = 0.0;
  for (int z = -1; z <= 1; z++)
  for (int y = -1; y <= 1; y++)
  for (int x = -1; x <= 1; x++) {
    vec3 g = vec3(float(x), float(y), float(z));
    vec3 cell = ip + g;
    if (sHash(cell + 31.7) > density) continue;
    vec3 o = vec3(sHash(cell + 1.7), sHash(cell + 9.2), sHash(cell + 4.4));
    float r = mix(0.16, 0.42, sHash(cell + 13.1));
    vec3 d = (g + o - fp) / r;
    d -= n * dot(d, n);              // distance across the surface only
    float dist2 = dot(d, d);
    if (dist2 < 1.0) {
      float h = sqrt(1.0 - dist2);
      if (h > bestH) {
        bestH = h;
        // slope of a spherical cap points away from the drop centre
        best = vec4(-d / max(h, 0.18), 1.0);
      }
    }
  }
  return best;
}
`,BE={roughScale:4,roughVar:0,bumpScale:40,bump:0,peelScale:60,peel:0,flakeScale:900,flake:0,dropScale:40,drops:0,film:0,darken:1};function on(s,e={},t=null){const n={...BE,...e},i={uRoughScale:{value:n.roughScale},uRoughVar:{value:n.roughVar},uBumpScale:{value:n.bumpScale},uBump:{value:n.bump},uPeelScale:{value:n.peelScale},uPeel:{value:n.peel},uFlakeScale:{value:n.flakeScale},uFlake:{value:n.flake},uWet:FE,uDropScale:{value:n.dropScale},uDrops:{value:n.drops},uFilm:{value:n.film},uDarken:{value:n.darken},uRootMatrix:{value:t?t.matrixWorld:new We}};return s.userData.surface=i,s.onBeforeCompile=r=>{Object.assign(r.uniforms,i),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 aSurfPos;
attribute vec3 aSurfNrm;
varying vec3 vSurfPos;
varying vec3 vSurfNrm;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vSurfPos = aSurfPos;
vSurfNrm = aSurfNrm;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
${OE}`).replace("#include <color_fragment>",`#include <color_fragment>
        vec3 wN = normalize(vSurfNrm);
        float wFilm = 0.0;
        vec4 wDrop = vec4(0.0);
        if (uWet > 0.0) {
          float facingUp = smoothstep(-0.3, 0.7, wN.y);
          float patches = smoothstep(0.32, 0.62, sFbm(vSurfPos * 3.0));
          wFilm = uFilm * uWet * mix(0.55, 1.0, facingUp) * mix(0.6, 1.0, patches);
          if (uDrops > 0.0) {
            float dens = uDrops * uWet * mix(0.3, 1.0, facingUp);
            wDrop = sDropLayer(vSurfPos * uDropScale, wN, dens);
            if (wDrop.w < 0.5) wDrop = sDropLayer(vSurfPos * uDropScale * 2.2 + 5.3, wN, dens * 0.45);
          }
          // Soaked porous surfaces get darker (light is trapped in the water layer)
          diffuseColor.rgb *= mix(1.0, uDarken, max(wFilm, wDrop.w * 0.6));
        }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        if (uRoughVar > 0.0) {
          roughnessFactor = clamp(roughnessFactor + (sFbm(vSurfPos * uRoughScale) - 0.5) * uRoughVar, 0.03, 1.0);
        }
        roughnessFactor = mix(roughnessFactor, 0.12, wFilm * 0.85);
        roughnessFactor = mix(roughnessFactor, 0.03, wDrop.w);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
        if (uBump > 0.0) {
          // water fills the micro-texture, so it flattens as the surface gets wet
          normal = sBump(normal, sFbm(vSurfPos * uBumpScale), uBump * (1.0 - 0.7 * wFilm));
        }
        if (uFlake > 0.0) {
          vec3 fc = floor(vSurfPos * uFlakeScale);
          vec3 fr = vec3(sHash(fc), sHash(fc + 7.13), sHash(fc + 3.71)) * 2.0 - 1.0;
          normal = normalize(normal + fr * uFlake);
        }
        vec3 wDropView = vec3(0.0);
        if (wDrop.w > 0.5) {
          // root matrix may carry scale (scroll rigs), so keep only its rotation
          vec3 dv = (viewMatrix * uRootMatrix * vec4(wDrop.xyz, 0.0)).xyz;
          wDropView = length(dv) > 1e-5 ? normalize(dv) * length(wDrop.xyz) : vec3(0.0);
          normal = normalize(normal + wDropView * 0.7);
        }`),r.fragmentShader=r.fragmentShader.replace("#include <clearcoat_normal_fragment_maps>",`#include <clearcoat_normal_fragment_maps>
      #ifdef USE_CLEARCOAT
        if (uPeel > 0.0) {
          clearcoatNormal = sBump(clearcoatNormal, sNoise(vSurfPos * uPeelScale), uPeel);
        }
        if (wDrop.w > 0.5) {
          clearcoatNormal = normalize(clearcoatNormal + wDropView * 0.7);
        }
      #endif`)},s.customProgramCacheKey=()=>"surface-v2",s}const $i={rosso:{color:"#C80006",metalness:0,roughness:.38,clearcoat:1,clearcoatRoughness:.035,envMapIntensity:1.5,flake:0},bianco:{color:"#ECEDEF",metalness:0,roughness:.42,clearcoat:1,clearcoatRoughness:.035,envMapIntensity:1.3,flake:0},nero:{color:"#0B0C0F",metalness:.55,roughness:.42,clearcoat:1,clearcoatRoughness:.03,envMapIntensity:1.6,flake:.06},giallo:{color:"#E8A800",metalness:0,roughness:.38,clearcoat:1,clearcoatRoughness:.035,envMapIntensity:1.4,flake:0}};function kE(){return new Promise((s,e)=>{const t=new In,n=on(new zt({color:new Ge($i.rosso.color),metalness:$i.rosso.metalness,roughness:$i.rosso.roughness,clearcoat:$i.rosso.clearcoat,clearcoatRoughness:$i.rosso.clearcoatRoughness,ior:1.5,envMapIntensity:$i.rosso.envMapIntensity}),{peelScale:28,peel:.0012,roughScale:3,roughVar:.04,flakeScale:260,flake:$i.rosso.flake,dropScale:19,drops:.3}),i=on(new zt({color:13225169,metalness:1,roughness:.24,clearcoat:.6,clearcoatRoughness:.08,envMapIntensity:1.6}),{roughScale:14,roughVar:.1,dropScale:28,drops:.23,film:.5}),r=on(new mi({color:1315862,metalness:0,roughness:.86,envMapIntensity:.7}),{roughScale:18,roughVar:.16,bumpScale:260,bump:4e-4,dropScale:28,drops:.15,film:.85,darken:.55}),o=on(new zt({color:11534344,metalness:0,roughness:.35,clearcoat:1,clearcoatRoughness:.06,envMapIntensity:1.3}),{dropScale:30,drops:.23}),a=on(new mi({color:9343382,metalness:1,roughness:.42,envMapIntensity:1.2}),{roughScale:30,roughVar:.2,bumpScale:200,bump:3e-4,film:.7,darken:.7}),l=on(new zt({color:16777215,metalness:0,roughness:.03,transmission:1,thickness:.05,ior:1.58,envMapIntensity:1.6}),{dropScale:22,drops:.3}),c=new mi({color:16777215,emissive:15922943,emissiveIntensity:2.2,roughness:.2}),u=on(new zt({color:11796490,emissive:3801088,emissiveIntensity:.8,metalness:0,roughness:.05,transmission:.6,thickness:.1,ior:1.49,envMapIntensity:1.5}),{dropScale:22,drops:.3}),h=on(new zt({color:2764597,metalness:0,roughness:.02,transmission:.75,thickness:.01,ior:1.52,envMapIntensity:1.6}),{dropScale:21,drops:.35}),f=on(new zt({color:15909376,metalness:0,roughness:.35,clearcoat:1,clearcoatRoughness:.05,envMapIntensity:1.2}),{dropScale:30,drops:.2}),d=on(new mi({color:16053751,metalness:1,roughness:.06,envMapIntensity:1.8}),{dropScale:30,drops:.2}),_=on(new zt({color:1118741,metalness:.3,roughness:.45,clearcoat:1,clearcoatRoughness:.05,envMapIntensity:1.2}),{roughScale:120,roughVar:.35,dropScale:22,drops:.28,film:.4}),g=on(new mi({color:921104,metalness:0,roughness:.75,envMapIntensity:.8}),{bumpScale:300,bump:3e-4,dropScale:28,drops:.17,film:.7,darken:.7}),m=on(new zt({color:1841689,metalness:0,roughness:.62,sheen:.4,sheenRoughness:.6,sheenColor:new Ge(3814964),envMapIntensity:.9}),{roughScale:40,roughVar:.18,bumpScale:380,bump:4e-4}),p=on(new mi({color:1184533,metalness:0,roughness:.88,envMapIntensity:.6}),{bumpScale:400,bump:3e-4}),M=on(new mi({color:1381912,metalness:0,roughness:.55,envMapIntensity:1}),{dropScale:25,drops:.23,film:.6,darken:.75}),S="/cavallino-3d/",x=new NE;x.setDecoderPath(`${S}draco/gltf/`);const w=new s_;w.setDRACOLoader(x),w.load(`${S}models/ferrari.glb`,A=>{const T=A.scene;T.traverse(z=>{if(!z.isMesh)return;z.castShadow=!0,z.receiveShadow=!0;const N=z.name.toLowerCase();N==="body"?z.material=n:N.startsWith("rim_")||N==="wheel"?z.material=i:N==="tire"?z.material=r:N==="brakes"?z.material=o:N==="brake"||N==="metal"||N==="nuts"?z.material=a:N==="centre"||N==="yellow_trim"||N==="steering_centre"?z.material=f:N==="lights"?z.material=l:N==="leds"||N==="steering_red_lights"?z.material=c:N==="lights_red"?z.material=u:N==="glass"?z.material=h:N==="chrome"||N==="steering_metal"?z.material=d:N.includes("carbon")?z.material=_:N==="grills"?z.material=g:N.includes("leather")?z.material=m:N.includes("interior")||N==="carpet"||N==="plastic_gray"||N==="steering_column"?z.material=p:(N==="trim"||N==="wipers"||N==="steering_trim")&&(z.material=M)}),l_(T),T.traverse(z=>{const N=z.isMesh&&z.material.userData.surface;N&&(N.uRootMatrix.value=T.matrixWorld)});const R=[],v=T.getObjectByName("wheel_fl"),y=T.getObjectByName("wheel_fr"),P=T.getObjectByName("wheel_rl"),U=T.getObjectByName("wheel_rr");v&&R.push(v),y&&R.push(y),P&&R.push(P),U&&R.push(U);const O=new Zm().load(`${S}models/ferrari_ao.png`);O.colorSpace=Ft;const W=new dt(new Eo(.655*4.3,1.3*4.3),new si({map:O,blending:vu,toneMapped:!1,transparent:!0,opacity:.92,depthWrite:!1}));W.rotation.x=-Math.PI/2,W.position.y=.005,W.renderOrder=2,T.add(W);const Y=new It;Y.position.set(0,.42,2.15),T.add(Y),t.add(T);function q(z){const N=$i[z]||$i.rosso;n.color.set(N.color),n.metalness=N.metalness,n.roughness=N.roughness,n.clearcoat=N.clearcoat,n.clearcoatRoughness=N.clearcoatRoughness,n.envMapIntensity=N.envMapIntensity,n.userData.surface.uFlake.value=N.flake}s({group:t,carModel:T,bodyMaterial:n,rimMaterial:i,trimMaterial:M,glassMaterial:h,exhaustAnchor:Y,wheels:R,setLivery:q,update(z){for(const N of R)N.rotation.x+=z*8}})},void 0,A=>{console.error("Error loading realistic Ferrari model:",A),e(A)})})}class zE extends Kh{constructor(){super();const e=new To;e.deleteAttribute("uv");const t=new mi({side:yn}),n=new mi,i=new Qm(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new dt(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new dt(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new dt(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new dt(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new dt(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const u=new dt(e,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const h=new dt(e,n);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);const f=new dt(e,Fs(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const d=new dt(e,Fs(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);const _=new dt(e,Fs(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);const g=new dt(e,Fs(43));g.position.set(-.462,8.89,14.52),g.scale.set(4.38,5.441,.088),this.add(g);const m=new dt(e,Fs(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const p=new dt(e,Fs(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Fs(s){const e=new si;return e.color.setScalar(s),e}const Qd={redCovers:new Set([67,10,11]),exhaust:new Set([0,8,9])};async function HE(s){let e=null;if(s){const A=new ql(s);e=A.fromScene(new zE,.03).texture,A.dispose()}const t={dropScale:34,drops:.16,film:.5},n=on(new zt({color:9306120,metalness:0,roughness:.6,clearcoat:.3,clearcoatRoughness:.4,side:Ln}),{...t,bumpScale:140,bump:.0016,roughScale:70,roughVar:.22,darken:.8}),i=on(new zt({color:10128248,metalness:1,roughness:.34,iridescence:.35,iridescenceIOR:1.5,iridescenceThicknessRange:[120,320],side:Ln}),{...t,roughScale:25,roughVar:.18}),a=(await new s_().loadAsync("/cavallino-3d/models/v8_engine.glb")).scene;let l=null;const c=[];let u=0;a.traverse(A=>{if(!A.isMesh)return;const T=u++;if(A.castShadow=!0,A.receiveShadow=!0,!l){const R=A.material;l=on(new zt({map:R.map,color:9408916,normalMap:R.normalMap,roughnessMap:R.roughnessMap,metalnessMap:R.metalnessMap,roughness:1,metalness:1,side:Ln}),{...t,darken:.75}),R.dispose()}Qd.redCovers.has(T)?(A.material=n,T===67&&c.push(A)):Qd.exhaust.has(T)?A.material=i:A.material=l});const h=[l,n,i];for(const A of h)e&&(A.envMap=e),A.envMapIntensity=.55;l_(a);for(const A of h)A.userData.surface.uRootMatrix.value=a.matrixWorld;const f=new Mi().setFromObject(a).getSize(new k),d=Math.max(f.x,f.y,f.z);d>0&&a.scale.multiplyScalar(2.7/d),a.updateMatrixWorld(!0);const _=new Mi().setFromObject(a),g=_.getCenter(new k);a.position.sub(g),a.updateMatrixWorld(!0),_.translate(g.clone().negate());const m=_.getSize(new k),p=(A,T,R)=>new k(_.min.x+m.x*A,_.min.y+m.y*T,_.min.z+m.z*R),S=[c.length?new Mi().setFromObject(c[0]).getCenter(new k).add(new k(0,.08,0)):p(.5,1,.5),p(.5,.25,1.02),p(1.02,.55,.5),p(-.02,.55,.5)],x=new In,w=new In;return S.forEach(A=>{const T=new dt(new rc(.045,16,16),new si({color:13893638}));T.position.copy(A);const R=new dt(new ef(.07,.09,32),new si({color:13893638,side:Ln,transparent:!0,opacity:.75}));R.position.copy(A),w.add(T,R)}),x.add(a),x.add(w),{group:x,engineModel:a,covers:c,update(A,T){x.position.y=-.05+Math.sin(T*1.5)*.025,w.children.forEach((R,v)=>{if(R.geometry&&R.geometry.type==="RingGeometry"){const y=1+Math.sin(T*3+v)*.22;R.scale.set(y,y,y)}})}}}function c_(){const e=document.createElement("canvas");e.width=e.height=64;const t=e.getContext("2d"),n=t.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255, 255, 255, 1)"),n.addColorStop(.2,"rgba(255, 180, 80, 0.9)"),n.addColorStop(.6,"rgba(255, 60, 20, 0.4)"),n.addColorStop(1,"rgba(255, 0, 0, 0)"),t.fillStyle=n,t.beginPath(),t.arc(64/2,64/2,64/2,0,Math.PI*2),t.fill();const i=new kx(e);return i.colorSpace=Ft,i}function VE(s=200){const e=new Float32Array(s*3),t=new Float32Array(s),n={x:12,y:7,zMin:-7,zMax:4};for(let c=0;c<s;c++)e[c*3]=(Math.random()*2-1)*n.x,e[c*3+1]=(Math.random()*2-1)*n.y,e[c*3+2]=n.zMin+Math.random()*(n.zMax-n.zMin),t[c]=1.2+Math.random()*3.5;const i=new On;i.setAttribute("position",new Xt(e,3));const r=new ic({size:.16,map:c_(),transparent:!0,depthWrite:!1,opacity:.65,sizeAttenuation:!0,blending:zl}),o=new Qh(i,r),a={speed:1};function l(c,u){const h=i.attributes.position.array;for(let f=0;f<s;f++)h[f*3]+=t[f]*c*a.speed*2.5,h[f*3+1]+=Math.sin(u*2+f)*c*.1,h[f*3]>n.x&&(h[f*3]=-12,h[f*3+1]=(Math.random()*2-1)*n.y);i.attributes.position.needsUpdate=!0}return{points:o,material:r,state:a,update:l}}function GE(s=140){const e=new Float32Array(s*3),t=new Float32Array(s*3),n=new Float32Array(s).fill(-1),i=new On;i.setAttribute("position",new Xt(e,3));const r=new ic({size:.22,map:c_(),transparent:!0,depthWrite:!1,opacity:0,sizeAttenuation:!0,blending:zl}),o=new Qh(i,r);function a(c){r.opacity=1;for(let u=0;u<s;u++){const h=u*3;e[h]=c.x+(Math.random()-.5)*.1,e[h+1]=c.y+(Math.random()-.5)*.1,e[h+2]=c.z+(Math.random()-.5)*.6;const f=(Math.random()-.5)*.8,d=4+Math.random()*7;t[h]=Math.cos(f)*d,t[h+1]=Math.sin(f)*1.5+(Math.random()-.5)*1.5,t[h+2]=(Math.random()-.5)*2,n[u]=1}i.attributes.position.needsUpdate=!0}function l(c){let u=0;const h=i.attributes.position.array;for(let f=0;f<s;f++){if(n[f]<=0)continue;u++,n[f]-=c*2.8;const d=f*3;h[d]+=t[d]*c,h[d+1]+=t[d+1]*c,h[d+2]+=t[d+2]*c}u>0?i.attributes.position.needsUpdate=!0:r.opacity=0}return{points:o,material:r,fire:a,update:l}}function WE(s){const e=new Kh;e.add(new dt(new rc(30,32,16),new si({color:197380,side:yn})));const t=(r,o,a,l,c,u=[0,0,0])=>{const h=new si({color:l,side:Ln});h.color.multiplyScalar(a);const f=new dt(new Eo(r,o),h);f.position.set(...c),f.lookAt(...u),e.add(f)};t(18,.9,9,16774892,[0,9,-2.5]),t(18,1.2,12,16777215,[0,10,.5]),t(18,.9,9,16774892,[0,9,3.5]),t(1.2,10,5,16777215,[-9,2,2]),t(1.2,10,4,16772832,[9,2,-2]),t(20,4,1.4,13631498,[0,-3,-10]);const n=new ql(s),i=n.fromScene(e,.015).texture;return n.dispose(),i}async function XE(s,{reducedMotion:e=!1}={}){const t=new QT({canvas:s,antialias:!0,alpha:!0});t.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.setSize(window.innerWidth,window.innerHeight),t.outputColorSpace=Ft,t.toneMapping=vm,t.toneMappingExposure=1,t.shadowMap.enabled=!0,t.shadowMap.type=gm;const n=new Kh;n.environment=WE(t),n.environmentIntensity=1;const i=new Dn(35,window.innerWidth/window.innerHeight,.1,100);i.position.set(0,0,11);const r={light:1},o=new Jm(16774378,260,40,Math.PI/6,.75,1.6);o.position.set(2.5,11,6),o.target.position.set(0,0,0),o.castShadow=!0,o.shadow.mapSize.set(2048,2048),o.shadow.bias=-2e-4,o.shadow.normalBias=.02,o.shadow.radius=5,n.add(o,o.target);const a=new ah(16722463,2.6);a.position.set(-5,3.5,-8),n.add(a);const l=new ah(13227775,.7);l.position.set(7,2,-5),n.add(l);const c=new rv(16777215,.12);n.add(c);const u=[[o,o.intensity],[a,a.intensity],[l,l.intensity],[c,c.intensity]],h=n.environmentIntensity;function f(){for(const[$,D]of u)$.intensity=D*r.light;n.environmentIntensity=h*(.08+.92*r.light)}const d=new In,_=new In,g=new In;_.add(g),d.add(_),n.add(d);let m=null;try{m=await kE(),g.add(m.group),console.log("✓ Ferrari 458 Italia 3D model loaded successfully")}catch($){console.error("Failed to load Ferrari 458 model:",$)}const p=new In;p.position.set(20,0,0),p.scale.setScalar(.001),n.add(p);let M=null;try{M=await HE(t),p.add(M.group),console.log("✓ V8 Engine 3D model loaded successfully")}catch($){console.error("Failed to load V8 Engine model:",$)}const S=VE(e?0:180);n.add(S.points);const x=GE();n.add(x.points);const w={x:0,y:0,rotY:0,rotZ:0,scale:1,spin:0},A={x:1.5,y:0,rotY:-.4,scale:0,spin:0},T={y:0,spin:0,scale:1},R={x:0,y:0,tx:0,ty:0};function v(){const $=2*i.position.z*Math.tan(Nm.degToRad(i.fov/2));return{w:$*i.aspect,h:$}}function y(){const{w:$}=v();return Math.min(1.2,$/5.2)}window.addEventListener("pointermove",$=>{R.tx=$.clientX/window.innerWidth*2-1,R.ty=$.clientY/window.innerHeight*2-1});function P(){i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)}window.addEventListener("resize",P);const U=new av;let O=0;function W(){const $=Math.min(U.getDelta(),.05),D=U.elapsedTime,{w:ae,h:Ce}=v();R.x+=(R.tx-R.x)*.06,R.y+=(R.ty-R.y)*.06,d.position.set(w.x*ae/2,w.y*Ce/2+T.y,0),d.rotation.set(0,w.rotY,w.rotZ),d.scale.setScalar(w.scale*T.scale*y()),e||(O+=$*.22,_.position.y=Math.sin(D*1.3)*.05,_.rotation.x=R.y*.16+Math.sin(D*.9)*.02,_.rotation.z=-R.x*.1),g.rotation.y=O+w.spin+T.spin+R.x*.28,p.position.set(A.x*ae/2,A.y*Ce/2,0),p.rotation.set(.12,A.rotY+R.x*.4+D*.15,-.05),p.scale.setScalar(A.scale*y()*1.25),m&&m.update&&m.update(e?0:$),M&&M.update&&M.update($,D),S.update($,D),x.update($),f(),t.render(n,i)}function Y(){U.getDelta(),t.setAnimationLoop(W)}function q(){t.setAnimationLoop(null)}document.addEventListener("visibilitychange",()=>document.hidden?q():Y());function z(){const $=new k;return m&&m.exhaustAnchor&&m.exhaustAnchor.getWorldPosition($),$}const N=m||{group:new In,setLivery:()=>{},update:()=>{},exhaustAnchor:null};return{renderer:t,scene:n,camera:i,car:N,engine:M,streaks:S,burst:x,carState:w,engineState:A,intro:T,stage:r,start:Y,exhaustWorldPosition:z}}function YE(s){const e=s.textContent;s.textContent="";for(const t of e){const n=document.createElement("span");n.className="char",n.textContent=t===" "?" ":t,n.setAttribute("aria-hidden","true"),s.appendChild(n)}}function qE(s,{reducedMotion:e=!1}={}){if(document.querySelectorAll("[data-split]").forEach(YE),e)return Pt.timeline();const t=Pt.timeline({defaults:{ease:"expo.out"}});return Pt.set(s.stage,{light:0}),Pt.set(s.intro,{spin:-Math.PI*.6,scale:.92}),t.to(s.stage,{light:1,duration:2.6,ease:"power2.inOut"},.2).to(s.intro,{spin:0,duration:3.2,ease:"power3.out"},0).to(s.intro,{scale:1,duration:3.2,ease:"power3.out"},0),t.from(".hero__line .char",{yPercent:110,duration:1.4,stagger:.02},.6),t.from(".nav, .hero__meta, .hero__specs",{opacity:0,y:12,duration:1.2,stagger:.12},1.4),t}function KE(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function jE(s,e,t){return e&&KE(s.prototype,e),s}/*!
 * Observer 3.15.1
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var hn,El,Hn,br,Ar,eo,u_,Qr,to,h_,rr,wi,f_,d_=function(){return hn||typeof window<"u"&&(hn=window.gsap)&&hn.registerPlugin&&hn},p_=1,Ys=[],nt=[],ki=[],na=Date.now,hh=function(e,t){return t},$E=function(){var e=to.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,nt),i.push.apply(i,ki),nt=n,ki=i,hh=function(o,a){return t[o](a)}},Dr=function(e,t){return~ki.indexOf(e)&&ki[ki.indexOf(e)+1][t]},ia=function(e){return!!~h_.indexOf(e)},An=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:i!==!1,capture:!!r})},bn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},nl="scrollLeft",il="scrollTop",fh=function(){return rr&&rr.isPressed||nt.cache++},Kl=function(e,t){var n=function i(r){if(r||r===0){p_&&Hn.history.scrollRestoration!=="manual"&&(Hn.history.scrollRestoration="manual");var o=rr&&rr.isPressed;r=i.v=Math.round(r)||(rr&&rr.iOS?1:0),e(r),i.cacheID=nt.cache,o&&hh("ss",r)}else(t||nt.cache!==i.cacheID||hh("ref"))&&(i.cacheID=nt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Nn={s:nl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Kl(function(s){return arguments.length?Hn.scrollTo(s,en.sc()):Hn.pageXOffset||br[nl]||Ar[nl]||eo[nl]||0})},en={s:il,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Nn,sc:Kl(function(s){return arguments.length?Hn.scrollTo(Nn.sc(),s):Hn.pageYOffset||br[il]||Ar[il]||eo[il]||0})},kn=function(e,t){return(t&&t._ctx&&t._ctx.selector||hn.utils.toArray)(e)[0]||(typeof e=="string"&&hn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},ZE=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Or=function(e,t){var n=t.s,i=t.sc;ia(e)&&(e=br.scrollingElement||Ar);var r=nt.indexOf(e),o=i===en.sc?1:2;!~r&&(r=nt.push(e)-1),nt[r+o]||An(e,"scroll",fh);var a=nt[r+o],l=a||(nt[r+o]=Kl(Dr(e,n),!0)||(ia(e)?i:Kl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=hn.getProperty(e,"scrollBehavior")==="smooth"),l},dh=function(e,t,n){var i=e,r=e,o=na(),a=o,l=t||50,c=Math.max(500,l*3),u=function(_,g){var m=na();g||m-o>l?(r=i,i=_,a=o,o=m):n?i+=_:i=r+(_-r)/(m-a)*(o-a)},h=function(){r=i=n?0:i,a=o=0},f=function(_){var g=a,m=r,p=na();return(_||_===0)&&_!==i&&u(_),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-g)*1e3};return{update:u,reset:h,getVelocity:f}},ko=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},ep=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},m_=function(){to=hn.core.globals().ScrollTrigger,to&&to.core&&$E()},__=function(e){return hn=e||d_(),!El&&hn&&typeof document<"u"&&document.body&&(Hn=window,br=document,Ar=br.documentElement,eo=br.body,h_=[Hn,br,Ar,eo],hn.utils.clamp,f_=hn.core.context||function(){},Qr="onpointerenter"in eo?"pointer":"mouse",u_=Wt.isTouch=Hn.matchMedia&&Hn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Hn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,wi=Wt.eventTypes=("ontouchstart"in Ar?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ar?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return p_=0},500),El=1),to||m_(),El};Nn.op=en;nt.cache=0;var Wt=(function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(n){El||__(hn)||console.warn("Please gsap.registerPlugin(Observer)"),to||m_();var i=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,g=n.event,m=n.onDragStart,p=n.onDragEnd,M=n.onDrag,S=n.onPress,x=n.onRelease,w=n.onRight,A=n.onLeft,T=n.onUp,R=n.onDown,v=n.onChangeX,y=n.onChangeY,P=n.onChange,U=n.onToggleX,O=n.onToggleY,W=n.onHover,Y=n.onHoverEnd,q=n.onMove,z=n.ignoreCheck,N=n.isNormalizer,$=n.onGestureStart,D=n.onGestureEnd,ae=n.onWheel,Ce=n.onEnable,Qe=n.onDisable,j=n.onClick,ne=n.scrollSpeed,de=n.capture,ie=n.allowClicks,Te=n.lockAxis,be=n.onLockAxis;this.target=a=kn(a)||Ar,this.vars=n,d&&(d=hn.utils.toArray(d)),i=i||1e-9,r=r||0,_=_||1,ne=ne||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Hn.getComputedStyle(eo).lineHeight)||22);var He,Ze,Fe,De,L,Et,Be,H=this,Me=0,ot=0,Ee=n.passive||!u&&n.passive!==!1,C=Or(a,Nn),E=Or(a,en),V=C(),ee=E(),Q=~o.indexOf("touch")&&!~o.indexOf("pointer")&&wi[0]==="pointerdown",Z=ia(a),ue=a.ownerDocument||br,oe=[0,0,0],fe=[0,0,0],Xe=0,re=function(){return Xe=na()},se=function(Ae,$e){return(H.event=Ae)&&d&&ZE(Ae.target,d)||$e&&Q&&Ae.pointerType!=="touch"||z&&z(Ae,$e)},Ie=function(){H._vx.reset(),H._vy.reset(),Ze.pause(),h&&h(H)},Le=function(){var Ae=H.deltaX=ep(oe),$e=H.deltaY=ep(fe),pe=Math.abs(Ae)>=i,Ve=Math.abs($e)>=i;P&&(pe||Ve)&&P(H,Ae,$e,oe,fe),pe&&(w&&H.deltaX>0&&w(H),A&&H.deltaX<0&&A(H),v&&v(H),U&&H.deltaX<0!=Me<0&&U(H),Me=H.deltaX,oe[0]=oe[1]=oe[2]=0),Ve&&(R&&H.deltaY>0&&R(H),T&&H.deltaY<0&&T(H),y&&y(H),O&&H.deltaY<0!=ot<0&&O(H),ot=H.deltaY,fe[0]=fe[1]=fe[2]=0),(De||Fe)&&(q&&q(H),Fe&&(m&&Fe===1&&m(H),M&&M(H),Fe=0),De=!1),Et&&!(Et=!1)&&be&&be(H),L&&(ae(H),L=!1),He=0},xe=function(Ae,$e,pe){oe[pe]+=Ae,fe[pe]+=$e,H._vx.update(Ae),H._vy.update($e),c?He||(He=requestAnimationFrame(Le)):Le()},je=function(Ae,$e){Te&&!Be&&(H.axis=Be=Math.abs(Ae)>Math.abs($e)?"x":"y",Et=!0),Be!=="y"&&(oe[2]+=Ae,H._vx.update(Ae,!0)),Be!=="x"&&(fe[2]+=$e,H._vy.update($e,!0)),c?He||(He=requestAnimationFrame(Le)):Le()},Oe=function(Ae){if(!se(Ae,1)){Ae=ko(Ae,u);var $e=Ae.clientX,pe=Ae.clientY,Ve=$e-H.x,we=pe-H.y,ze=H.isDragging;H.x=$e,H.y=pe,(ze||(Ve||we)&&(Math.abs(H.startX-$e)>=r||Math.abs(H.startY-pe)>=r))&&(Fe||(Fe=ze?2:1),ze||(H.isDragging=!0),je(Ve,we))}},ut=H.onPress=function(ge){se(ge,1)||ge&&ge.button||(H.axis=Be=null,Ze.pause(),H.isPressed=!0,ge=ko(ge),Me=ot=0,H.startX=H.x=ge.clientX,H.startY=H.y=ge.clientY,H._vx.reset(),H._vy.reset(),An(N?a:ue,wi[1],Oe,Ee,!0),H.deltaX=H.deltaY=0,S&&S(H))},I=H.onRelease=function(ge){if(!se(ge,1)){bn(N?a:ue,wi[1],Oe,!0);var Ae=!isNaN(H.y-H.startY),$e=H.isDragging,pe=$e&&(Math.abs(H.x-H.startX)>3||Math.abs(H.y-H.startY)>3),Ve=ko(ge);!pe&&Ae&&(H._vx.reset(),H._vy.reset(),u&&ie&&hn.delayedCall(.08,function(){if(na()-Xe>300&&!ge.defaultPrevented){if(ge.target.click)ge.target.click();else if(ue.createEvent){var we=ue.createEvent("MouseEvents");we.initMouseEvent("click",!0,!0,Hn,1,Ve.screenX,Ve.screenY,Ve.clientX,Ve.clientY,!1,!1,!1,!1,0,null),ge.target.dispatchEvent(we)}}})),H.isDragging=H.isGesturing=H.isPressed=!1,h&&$e&&!N&&Ze.restart(!0),Fe&&Le(),p&&$e&&p(H),x&&x(H,pe)}},ce=function(Ae){return Ae.touches&&Ae.touches.length>1&&(H.isGesturing=!0)&&$(Ae,H.isDragging)},K=function(){return(H.isGesturing=!1)||D(H)},J=function(Ae){if(!se(Ae)){var $e=C(),pe=E();xe(($e-V)*ne,(pe-ee)*ne,1),V=$e,ee=pe,h&&Ze.restart(!0)}},le=function(Ae){if(!se(Ae)){Ae=ko(Ae,u),ae&&(L=!0);var $e=(Ae.deltaMode===1?l:Ae.deltaMode===2?Hn.innerHeight:1)*_;xe(Ae.deltaX*$e,Ae.deltaY*$e,0),h&&!N&&Ze.restart(!0)}},he=function(Ae){if(!se(Ae)){var $e=Ae.clientX,pe=Ae.clientY,Ve=$e-H.x,we=pe-H.y;H.x=$e,H.y=pe,De=!0,h&&Ze.restart(!0),(Ve||we)&&je(Ve,we)}},ke=function(Ae){H.event=Ae,W(H)},ht=function(Ae){H.event=Ae,Y(H)},Bt=function(Ae){return se(Ae)||ko(Ae,u)&&j(H)};Ze=H._dc=hn.delayedCall(f||.25,Ie).pause(),H.deltaX=H.deltaY=0,H._vx=dh(0,50,!0),H._vy=dh(0,50,!0),H.scrollX=C,H.scrollY=E,H.isDragging=H.isGesturing=H.isPressed=!1,f_(this),H.enable=function(ge){return H.isEnabled||(An(Z?ue:a,"scroll",fh),o.indexOf("scroll")>=0&&An(Z?ue:a,"scroll",J,Ee,de),o.indexOf("wheel")>=0&&An(a,"wheel",le,Ee,de),(o.indexOf("touch")>=0&&u_||o.indexOf("pointer")>=0)&&(An(a,wi[0],ut,Ee,de),An(ue,wi[2],I),An(ue,wi[3],I),ie&&An(a,"click",re,!0,!0),j&&An(a,"click",Bt),$&&An(ue,"gesturestart",ce),D&&An(ue,"gestureend",K),W&&An(a,Qr+"enter",ke),Y&&An(a,Qr+"leave",ht),q&&An(a,Qr+"move",he)),H.isEnabled=!0,H.isDragging=H.isGesturing=H.isPressed=De=Fe=!1,H._vx.reset(),H._vy.reset(),V=C(),ee=E(),ge&&ge.type&&ut(ge),Ce&&Ce(H)),H},H.disable=function(){H.isEnabled&&(Ys.filter(function(ge){return ge!==H&&ia(ge.target)}).length||bn(Z?ue:a,"scroll",fh),H.isPressed&&(H._vx.reset(),H._vy.reset(),bn(N?a:ue,wi[1],Oe,!0)),bn(Z?ue:a,"scroll",J,de),bn(a,"wheel",le,de),bn(a,wi[0],ut,de),bn(ue,wi[2],I),bn(ue,wi[3],I),bn(a,"click",re,!0),bn(a,"click",Bt),bn(ue,"gesturestart",ce),bn(ue,"gestureend",K),bn(a,Qr+"enter",ke),bn(a,Qr+"leave",ht),bn(a,Qr+"move",he),H.isEnabled=H.isPressed=H.isDragging=!1,Qe&&Qe(H))},H.kill=H.revert=function(){H.disable();var ge=Ys.indexOf(H);ge>=0&&Ys.splice(ge,1),rr===H&&(rr=0)},Ys.push(H),N&&ia(a)&&(rr=H),H.enable(g)},jE(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();Wt.version="3.15.1";Wt.create=function(s){return new Wt(s)};Wt.register=__;Wt.getAll=function(){return Ys.slice()};Wt.getById=function(s){return Ys.filter(function(e){return e.vars.id===s})[0]};d_()&&hn.registerPlugin(Wt);/*!
 * ScrollTrigger 3.15.1
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Se,Hs,tt,vt,ei,xt,af,jl,Ta,ra,Xo,rl,mn,ac,ph,Cn,tp,np,Vs,g_,eu,x_,Rn,mh,v_,y_,xr,_h,lf,no,cf,Lr,gh,tu,sl=1,_n=Date.now,nu=_n(),Si=0,Yo=0,ip=function(e,t,n){var i=Jn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},rp=function(e,t){return t&&(!Jn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},JE=function s(){return Yo&&requestAnimationFrame(s)},sp=function(){return ac=1},op=function(){return ac=0},Ii=function(e){return e},qo=function(e){return Math.round(e*1e5)/1e5||0},M_=function(){return typeof window<"u"},S_=function(){return Se||M_()&&(Se=window.gsap)&&Se.registerPlugin&&Se},ps=function(e){return!!~af.indexOf(e)},T_=function(e){return(e==="Height"?cf:tt["inner"+e])||ei["client"+e]||xt["client"+e]},E_=function(e){return Dr(e,"getBoundingClientRect")||(ps(e)?function(){return Cl.width=tt.innerWidth,Cl.height=cf,Cl}:function(){return tr(e)})},QE=function(e,t,n){var i=n.d,r=n.d2,o=n.a;return(o=Dr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?T_(r):e["client"+r])||0}},eb=function(e,t){return!t||~ki.indexOf(e)?E_(e):function(){return Cl}},Oi=function(e,t){var n=t.s,i=t.d2,r=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Dr(e,n))?o()-E_(e)()[r]:ps(e)?(ei[n]||xt[n])-T_(i):e[n]-e["offset"+i])},ol=function(e,t){for(var n=0;n<Vs.length;n+=3)(!t||~t.indexOf(Vs[n+1]))&&e(Vs[n],Vs[n+1],Vs[n+2])},Jn=function(e){return typeof e=="string"},xn=function(e){return typeof e=="function"},Ko=function(e){return typeof e=="number"},es=function(e){return typeof e=="object"},zo=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Os=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},Bs=Math.abs,b_="left",A_="top",uf="right",hf="bottom",cs="width",us="height",sa="Right",oa="Left",aa="Top",la="Bottom",Kt="padding",_i="margin",Mo="Width",ff="Height",Qt="px",gi=function(e){return tt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},tb=function(e){var t=gi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},ap=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},tr=function(e,t){var n=t&&gi(e)[ph]!=="matrix(1, 0, 0, 1, 0, 0)"&&Se.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},$l=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},w_=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},nb=function(e){return function(t){return Se.utils.snap(w_(e),t)}},df=function(e){var t=Se.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var a;if(!r)return t(i);if(r>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var a=t(i);return!r||Math.abs(a-i)<o||a-i<0==r<0?a:t(r<0?i-e:i+e)}},ib=function(e){return function(t,n){return df(w_(e))(t,n.direction)}},al=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},ln=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},an=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ll=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},lp={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},cl={toggleActions:"play",anticipatePin:0},Zl={top:0,left:0,center:.5,bottom:1,right:1},bl=function(e,t){if(Jn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Zl?Zl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},ul=function(e,t,n,i,r,o,a,l){var c=r.startColor,u=r.endColor,h=r.fontSize,f=r.indent,d=r.fontWeight,_=vt.createElement("div"),g=ps(n)||Dr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=g?xt:n.tagName==="IFRAME"?n.contentDocument.body:n,M=e.indexOf("start")!==-1,S=M?c:u,x="border-color:"+S+";font-size:"+h+";color:"+S+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(x+=(i===en?uf:hf)+":"+(o+parseFloat(f))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=M,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=x,_.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+i.op.d2],Al(_,0,i,M),_},Al=function(e,t,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+Mo]=1,r["border"+a+Mo]=0,r[n.p]=t+"px",Se.set(e,r)},et=[],xh={},Ea,cp=function(){return _n()-Si>34&&(Ea||(Ea=requestAnimationFrame(or)))},ks=function(){(!Rn||!Rn.isPressed||Rn.startX>xt.clientWidth)&&(nt.cache++,Rn?Ea||(Ea=requestAnimationFrame(or)):or(),Si||_s("scrollStart"),Si=_n())},iu=function(){y_=tt.innerWidth,v_=tt.innerHeight},jo=function(e){nt.cache++,(e===!0||!mn&&!x_&&!vt.fullscreenElement&&!vt.webkitFullscreenElement&&(!mh||y_!==tt.innerWidth||Math.abs(tt.innerHeight-v_)>tt.innerHeight*.25))&&jl.restart(!0)},ms={},rb=[],R_=function s(){return an(Ye,"scrollEnd",s)||rs(!0)},_s=function(e){return ms[e]&&ms[e].map(function(t){return t()})||rb},Zn=[],C_=function(e){for(var t=0;t<Zn.length;t+=5)(!e||Zn[t+4]&&Zn[t+4].query===e)&&(Zn[t].style.cssText=Zn[t+1],Zn[t].getBBox&&Zn[t].setAttribute("transform",Zn[t+2]||""),Zn[t+3].uncache=1)},P_=function(){nt.cache++,nt.forEach(function(e){return xn(e)&&(e.rec=e())})},pf=function(e,t){var n;for(Cn=0;Cn<et.length;Cn++)n=et[Cn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Lr=!0,t&&C_(t),t||_s("revert")},D_=function(e,t){nt.cache++,(t||!Pn)&&nt.forEach(function(n){return xn(n)&&n.cacheID++&&(n.rec=0)}),Jn(e)&&(lf=e,tt.history.scrollRestoration!==e&&(tt.history.scrollRestoration=e))},Pn,hs=0,up,sb=function(){if(up!==hs){var e=up=hs;requestAnimationFrame(function(){return e===hs&&rs(!0)})}},L_=function(){xt.appendChild(no),cf=!Rn&&no.offsetHeight||tt.innerHeight,xt.removeChild(no)},hp=function(e){return Ta(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},rs=function(e,t){if(ei=vt.documentElement,xt=vt.body,af=[tt,vt,ei,xt],Si&&!e&&!Lr){ln(Ye,"scrollEnd",R_);return}L_(),Pn=Ye.isRefreshing=!0,Lr||P_();var n=_s("refreshInit");g_&&Ye.sort(),t||pf(),nt.forEach(function(i){xn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),et.slice(0).forEach(function(i){return i.refresh()}),Lr=!1,et.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-o),i.refresh()}}),gh=1,hp(!0),et.forEach(function(i){var r=Oi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>r,a=i._startClamp&&i.start>=r;(o||a)&&i.setPositions(a?r-1:i.start,o?Math.max(a?r:i.start+1,r):i.end,!0)}),hp(!1),gh=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),nt.forEach(function(i){xn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),D_(lf,1),jl.pause(),hs++,Pn=2,or(2),et.forEach(function(i){return xn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Pn=Ye.isRefreshing=!1,_s("refresh")},vh=0,wl=1,ca,or=function(e){if(e===2||!Pn&&!Lr){Ye.isUpdating=!0,ca&&ca.update(0);var t=et.length,n=_n(),i=n-nu>=50,r=t&&et[0].scroll();if(wl=vh>r?-1:1,Pn||(vh=r),i&&(Si&&!ac&&n-Si>200&&(Si=0,_s("scrollEnd")),Xo=nu,nu=n),wl<0){for(Cn=t;Cn-- >0;)et[Cn]&&et[Cn].update(0,i);wl=1}else for(Cn=0;Cn<t;Cn++)et[Cn]&&et[Cn].update(0,i);Ye.isUpdating=!1}Ea=0},yh=[b_,A_,hf,uf,_i+la,_i+sa,_i+aa,_i+oa,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Rl=yh.concat([cs,us,"boxSizing","max"+Mo,"max"+ff,"position",_i,Kt,Kt+aa,Kt+sa,Kt+la,Kt+oa]),ob=function(e,t,n){io(n);var i=e._gsap;if(i.spacerIsNative)io(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},ru=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=yh.length,o=t.style,a=e.style,l;r--;)l=yh[r],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[hf]=a[uf]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[cs]=$l(e,Nn)+Qt,o[us]=$l(e,en)+Qt,o[Kt]=a[_i]=a[A_]=a[b_]="0",io(i),a[cs]=a["max"+Mo]=n[cs],a[us]=a["max"+ff]=n[us],a[Kt]=n[Kt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},ab=/([A-Z])/g,io=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,o;for((e.t._gsap||Se.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],r=e[i],o?t[r]=o:t[r]&&t.removeProperty(r.replace(ab,"-$1").toLowerCase())}},hl=function(e){for(var t=Rl.length,n=e.style,i=[],r=0;r<t;r++)i.push(Rl[r],n[Rl[r]]);return i.t=e,i},lb=function(e,t,n){for(var i=[],r=e.length,o=n?8:0,a;o<r;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Cl={left:0,top:0},fp=function(e,t,n,i,r,o,a,l,c,u,h,f,d,_){xn(e)&&(e=e(l)),Jn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?bl("0"+e.substr(3),n):0));var g=d?d.time():0,m,p,M;if(d&&d.seek(0),isNaN(e)||(e=+e),Ko(e))d&&(e=Se.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&Al(a,n,i,!0);else{xn(t)&&(t=t(l));var S=(e||"0").split(" "),x,w,A,T;M=kn(t,l)||xt,x=tr(M)||{},(!x||!x.left&&!x.top)&&gi(M).display==="none"&&(T=M.style.display,M.style.display="block",x=tr(M),T?M.style.display=T:M.style.removeProperty("display")),w=bl(S[0],x[i.d]),A=bl(S[1]||"0",n),e=x[i.p]-c[i.p]-u+w+r-A,a&&Al(a,A,i,n-A<20||a._isStart&&A>20),n-=n-A}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var R=e+n,v=o._isStart;m="scroll"+i.d2,Al(o,R,i,v&&R>20||!v&&(h?Math.max(xt[m],ei[m]):o.parentNode[m])<=R+1),h&&(c=tr(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Qt))}return d&&M&&(m=tr(M),d.seek(f),p=tr(M),d._caScrollDist=m[i.p]-p[i.p],e=e/d._caScrollDist*f),d&&d.seek(g),d?e:Math.round(e)},cb=/(webkit|moz|length|cssText|inset)/i,dp=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,o,a;if(t===xt){e._stOrig=r.cssText,a=gi(e);for(o in a)!+o&&!cb.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=i}else r.cssText=e._stOrig;Se.core.getCache(e).uncache=1,t.appendChild(e)}},I_=function(e,t,n){var i=t,r=i;return function(o){var a=Math.round(e());return a!==i&&a!==r&&Math.abs(a-i)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=i,i=Math.round(o),i}},fl=function(e,t,n){var i={};i[t.p]="+="+n,Se.set(e,i)},pp=function(e,t){var n=Or(e,t),i="_scroll"+t.p2,r=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,_={};c=c||n();var g=I_(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){nt.cache++,o.tween&&or()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Se.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},ln(e,"wheel",n.wheelHandler),Ye.isTouch&&ln(e,"touchmove",n.wheelHandler),r},Ye=(function(){function s(t,n){Hs||s.register(Se)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),_h(this),this.init(t,n)}var e=s.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Yo){this.update=this.refresh=this.kill=Ii;return}n=ap(Jn(n)||Ko(n)||n.nodeType?{trigger:n}:n,cl);var r=n,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,u=r.onRefresh,h=r.scrub,f=r.trigger,d=r.pin,_=r.pinSpacing,g=r.invalidateOnRefresh,m=r.anticipatePin,p=r.onScrubComplete,M=r.onSnapComplete,S=r.once,x=r.snap,w=r.pinReparent,A=r.pinSpacer,T=r.containerAnimation,R=r.fastScrollEnd,v=r.preventOverlaps,y=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Nn:en,P=!h&&h!==0,U=kn(n.scroller||tt),O=Se.core.getCache(U),W=ps(U),Y=("pinType"in n?n.pinType:Dr(U,"pinType")||W&&"fixed")==="fixed",q=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],z=P&&n.toggleActions.split(" "),N="markers"in n?n.markers:cl.markers,$=W?0:parseFloat(gi(U)["border"+y.p2+Mo])||0,D=this,ae=n.onRefreshInit&&function(){return n.onRefreshInit(D)},Ce=QE(U,W,y),Qe=eb(U,W),j=0,ne=0,de=0,ie=Or(U,y),Te,be,He,Ze,Fe,De,L,Et,Be,H,Me,ot,Ee,C,E,V,ee,Q,Z,ue,oe,fe,Xe,re,se,Ie,Le,xe,je,Oe,ut,I,ce,K,J,le,he,ke,ht;if(D._startClamp=D._endClamp=!1,D._dir=y,m*=45,D.scroller=U,D.scroll=T?T.time.bind(T):ie,Ze=ie(),Lr&&ie.rec==null&&(ie.rec=Ze),D.vars=n,i=i||n.animation,"refreshPriority"in n&&(g_=1,n.refreshPriority===-9999&&(ca=D)),O.tweenScroll=O.tweenScroll||{top:pp(U,en),left:pp(U,Nn)},D.tweenTo=Te=O.tweenScroll[y.p],D.scrubDuration=function(pe){ce=Ko(pe)&&pe,ce?I?I.duration(pe):I=Se.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ce,paused:!0,onComplete:function(){return p&&p(D)}}):(I&&I.progress(1).kill(),I=0)},i&&(i.vars.lazy=!1,i._initted&&!D.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),D.animation=i.pause(),i.scrollTrigger=D,D.scrubDuration(h),Oe=0,l||(l=i.vars.id)),x&&((!es(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in xt.style&&Se.set(W?[xt,ei]:U,{scrollBehavior:"auto"}),nt.forEach(function(pe){return xn(pe)&&pe.target===(W?vt.scrollingElement||ei:U)&&(pe.smooth=!1)}),He=xn(x.snapTo)?x.snapTo:x.snapTo==="labels"?nb(i):x.snapTo==="labelsDirectional"?ib(i):x.directional!==!1?function(pe,Ve){return df(x.snapTo)(pe,_n()-ne<500?0:Ve.direction)}:Se.utils.snap(x.snapTo),K=x.duration||{min:.1,max:2},K=es(K)?ra(K.min,K.max):ra(K,K),J=Se.delayedCall(x.delay||ce/2||.1,function(){var pe=ie(),Ve=_n()-ne<500,we=Te.tween;if((Ve||Math.abs(D.getVelocity())<10)&&!we&&!ac&&j!==pe){var ze=(pe-De)/C,Vt=i&&!P?i.totalProgress():ze,it=Ve?0:(Vt-ut)/(_n()-Xo)*1e3||0,Rt=Se.utils.clamp(-ze,1-ze,Bs(it/2)*it/.185),$t=ze+(x.inertia===!1?0:Rt),bt,At,mt=x,qn=mt.onStart,Ct=mt.onInterrupt,Sn=mt.onComplete;if(bt=He($t,D),Ko(bt)||(bt=$t),At=Math.max(0,Math.round(De+bt*C)),pe<=L&&pe>=De&&At!==pe){if(we&&!we._initted&&we.data<=Bs(At-pe))return;x.inertia===!1&&(Rt=bt-ze),Te(At,{duration:K(Bs(Math.max(Bs($t-Vt),Bs(bt-Vt))*.185/it/.05||0)),ease:x.ease||"power3",data:Bs(At-pe),onInterrupt:function(){return J.restart(!0)&&Ct&&Os(D,Ct)},onComplete:function(){D.update(),j=ie(),i&&!P&&(I?I.resetTo("totalProgress",bt,i._tTime/i._tDur):i.progress(bt)),Oe=ut=i&&!P?i.totalProgress():D.progress,M&&M(D),Sn&&Os(D,Sn)}},pe,Rt*C,At-pe-Rt*C),qn&&Os(D,qn,Te.tween)}}else D.isActive&&j!==pe&&J.restart(!0)}).pause()),l&&(xh[l]=D),f=D.trigger=kn(f||d!==!0&&d),ht=f&&f._gsap&&f._gsap.stRevert,ht&&(ht=ht(D)),d=d===!0?f:kn(d),Jn(a)&&(a={targets:f,className:a}),d&&(_===!1||_===_i||(_=!_&&d.parentNode&&d.parentNode.style&&gi(d.parentNode).display==="flex"?!1:Kt),D.pin=d,be=Se.core.getCache(d),be.spacer?E=be.pinState:(A&&(A=kn(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),be.spacerIsNative=!!A,A&&(be.spacerState=hl(A))),be.spacer=Q=A||vt.createElement("div"),Q.classList.add("pin-spacer"),l&&Q.classList.add("pin-spacer-"+l),be.pinState=E=hl(d)),n.force3D!==!1&&Se.set(d,{force3D:!0}),D.spacer=Q=be.spacer,je=gi(d),re=je[_+y.os2],ue=Se.getProperty(d),oe=Se.quickSetter(d,y.a,Qt),ru(d,Q,je),ee=hl(d)),N){ot=es(N)?ap(N,lp):lp,H=ul("scroller-start",l,U,y,ot,0),Me=ul("scroller-end",l,U,y,ot,0,H),Z=H["offset"+y.op.d2];var Bt=kn(Dr(U,"content")||U);Et=this.markerStart=ul("start",l,Bt,y,ot,Z,0,T),Be=this.markerEnd=ul("end",l,Bt,y,ot,Z,0,T),T&&(ke=Se.quickSetter([Et,Be],y.a,Qt)),!Y&&!(ki.length&&Dr(U,"fixedMarkers")===!0)&&(tb(W?xt:U),Se.set([H,Me],{force3D:!0}),Ie=Se.quickSetter(H,y.a,Qt),xe=Se.quickSetter(Me,y.a,Qt))}if(T){var ge=T.vars.onUpdate,Ae=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){D.update(0,0,1),ge&&ge.apply(T,Ae||[])})}if(D.previous=function(){return et[et.indexOf(D)-1]},D.next=function(){return et[et.indexOf(D)+1]},D.revert=function(pe,Ve){if(!Ve)return D.kill(!0);var we=pe!==!1||!D.enabled,ze=mn;we!==D.isReverted&&(we&&(le=Math.max(ie(),D.scroll.rec||0),de=D.progress,he=i&&i.progress()),Et&&[Et,Be,H,Me].forEach(function(Vt){return Vt.style.display=we?"none":"block"}),we&&(mn=D,D.update(we)),d&&(!w||!D.isActive)&&(we?ob(d,Q,E):ru(d,Q,gi(d),se)),we||D.update(we),mn=ze,D.isReverted=we)},D.refresh=function(pe,Ve,we,ze){if(!((mn||!D.enabled)&&!Ve)){if(d&&pe&&Si){ln(s,"scrollEnd",R_);return}!Pn&&ae&&ae(D),mn=D,Te.tween&&!we&&(Te.tween.kill(),Te.tween=0),I&&I.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(qe){return qe.vars.immediateRender&&qe.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var Vt=Ce(),it=Qe(),Rt=T?T.duration():Oi(U,y),$t=C<=.01||!C,bt=0,At=ze||0,mt=es(we)?we.end:n.end,qn=n.endTrigger||f,Ct=es(we)?we.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),Sn=D.pinnedContainer=n.pinnedContainer&&kn(n.pinnedContainer,D),ci=f&&Math.max(0,et.indexOf(D))||0,Zt=ci,Jt,b,B,X,G,F,te,me,ye,ve,Pe,Ue,Re;for(N&&es(we)&&(Ue=Se.getProperty(H,y.p),Re=Se.getProperty(Me,y.p));Zt-- >0;)F=et[Zt],F.end||F.refresh(0,1)||(mn=D),te=F.pin,te&&(te===f||te===d||te===Sn)&&!F.isReverted&&(ve||(ve=[]),ve.unshift(F),F.revert(!0,!0)),F!==et[Zt]&&(ci--,Zt--);for(xn(Ct)&&(Ct=Ct(D)),Ct=ip(Ct,"start",D),De=fp(Ct,f,Vt,y,ie(),Et,H,D,it,$,Y,Rt,T,D._startClamp&&"_startClamp")||(d?-.001:0),xn(mt)&&(mt=mt(D)),Jn(mt)&&!mt.indexOf("+=")&&(~mt.indexOf(" ")?mt=(Jn(Ct)?Ct.split(" ")[0]:"")+mt:(bt=bl(mt.substr(2),Vt),mt=Jn(Ct)?Ct:(T?Se.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,De):De)+bt,qn=f)),mt=ip(mt,"end",D),L=Math.max(De,fp(mt||(qn?"100% 0":Rt),qn,Vt,y,ie()+bt,Be,Me,D,it,$,Y,Rt,T,D._endClamp&&"_endClamp"))||-.001,bt=0,Zt=ci;Zt--;)F=et[Zt]||{},te=F.pin,te&&F.start-F._pinPush<=De&&!T&&F.end>0&&(Jt=F.end-(D._startClamp?Math.max(0,F.start):F.start),(te===f&&F.start-F._pinPush<De||te===Sn)&&isNaN(Ct)&&(bt+=Jt*(1-F.progress)),te===d&&(At+=Jt));if(De+=bt,L+=bt,D._startClamp&&(D._startClamp+=bt),D._endClamp&&!Pn&&(D._endClamp=L||-.001,L=Math.min(L,Oi(U,y))),C=L-De||(De-=.01)&&.001,$t&&(de=Se.utils.clamp(0,1,Se.utils.normalize(De,L,le))),D._pinPush=At,Et&&bt&&(Jt={},Jt[y.a]="+="+bt,Sn&&(Jt[y.p]="-="+ie()),Se.set([Et,Be],Jt)),d&&!(gh&&D.end>=Oi(U,y)))Jt=gi(d),X=y===en,B=ie(),fe=parseFloat(ue(y.a))+At,!Rt&&L>1&&(Pe=(W?vt.scrollingElement||ei:U).style,Pe={style:Pe,value:Pe["overflow"+y.a.toUpperCase()]},W&&gi(xt)["overflow"+y.a.toUpperCase()]!=="scroll"&&(Pe.style["overflow"+y.a.toUpperCase()]="scroll")),ru(d,Q,Jt),ee=hl(d),b=tr(d,!0),me=Y&&Or(U,X?Nn:en)(),_?(se=[_+y.os2,C+At+Qt],se.t=Q,Zt=_===Kt?$l(d,y)+C+At:0,Zt&&(se.push(y.d,Zt+Qt),Q.style.flexBasis!=="auto"&&(Q.style.flexBasis=Zt+Qt)),io(se),Sn&&et.forEach(function(qe){qe.pin===Sn&&qe.vars.pinSpacing!==!1&&(qe._subPinOffset=!0)}),Y&&ie(le)):(Zt=$l(d,y),Zt&&Q.style.flexBasis!=="auto"&&(Q.style.flexBasis=Zt+Qt)),Y&&(G={top:b.top+(X?B-De:me)+Qt,left:b.left+(X?me:B-De)+Qt,boxSizing:"border-box",position:"fixed"},G[cs]=G["max"+Mo]=Math.ceil(b.width)+Qt,G[us]=G["max"+ff]=Math.ceil(b.height)+Qt,G[_i]=G[_i+aa]=G[_i+sa]=G[_i+la]=G[_i+oa]="0",G[Kt]=Jt[Kt],G[Kt+aa]=Jt[Kt+aa],G[Kt+sa]=Jt[Kt+sa],G[Kt+la]=Jt[Kt+la],G[Kt+oa]=Jt[Kt+oa],V=lb(E,G,w),Pn&&ie(0)),i?(ye=i._initted,eu(1),i.render(i.duration(),!0,!0),Xe=ue(y.a)-fe+C+At,Le=Math.abs(C-Xe)>1,Y&&Le&&V.splice(V.length-2,2),i.render(0,!0,!0),ye||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),eu(0)):Xe=C,Pe&&(Pe.value?Pe.style["overflow"+y.a.toUpperCase()]=Pe.value:Pe.style.removeProperty("overflow-"+y.a));else if(f&&ie()&&!T)for(b=f.parentNode;b&&b!==xt;)b._pinOffset&&(De-=b._pinOffset,L-=b._pinOffset),b=b.parentNode;ve&&ve.forEach(function(qe){return qe.revert(!1,!0)}),D.start=De,D.end=L,Ze=Fe=Pn?le:ie(),!T&&!Pn&&!Lr&&(Ze<le&&ie(le),D.scroll.rec=0),D.revert(!1,!0),ne=_n(),J&&(j=-1,J.restart(!0)),mn=0,i&&P&&(i._initted||he)&&i.progress()!==he&&i.progress(he||0,!0).render(i.time(),!0,!0),($t||de!==D.progress||T||g||i&&!i._initted)&&(i&&!P&&(i._initted||de||i.vars.immediateRender!==!1)&&i.totalProgress(T&&De<-.001&&!de?Se.utils.normalize(De,L,0):de,!0),D.progress=$t||(Ze-De)/C===de?0:de),d&&_&&(Q._pinOffset=Math.round(D.progress*Xe)),I&&I.invalidate(),isNaN(Ue)||(Ue-=Se.getProperty(H,y.p),Re-=Se.getProperty(Me,y.p),fl(H,y,Ue),fl(Et,y,Ue-(ze||0)),fl(Me,y,Re),fl(Be,y,Re-(ze||0))),$t&&!Pn&&D.update(),u&&!Pn&&!Ee&&(Ee=!0,u(D),Ee=!1)}},D.getVelocity=function(){return(ie()-Fe)/(_n()-Xo)*1e3||0},D.endAnimation=function(){zo(D.callbackAnimation),i&&(I?I.progress(1):i.paused()?P||zo(i,D.direction<0,1):zo(i,i.reversed()))},D.labelToScroll=function(pe){return i&&i.labels&&(De||D.refresh()||De)+i.labels[pe]/i.duration()*C||0},D.getTrailing=function(pe){var Ve=et.indexOf(D),we=D.direction>0?et.slice(0,Ve).reverse():et.slice(Ve+1);return(Jn(pe)?we.filter(function(ze){return ze.vars.preventOverlaps===pe}):we).filter(function(ze){return D.direction>0?ze.end<=De:ze.start>=L})},D.update=function(pe,Ve,we){if(!(T&&!we&&!pe)){var ze=Pn===!0?le:D.scroll(),Vt=pe?0:(ze-De)/C,it=Vt<0?0:Vt>1?1:Vt||0,Rt=D.progress,$t,bt,At,mt,qn,Ct,Sn,ci;if(Ve&&(Fe=Ze,Ze=T?ie():ze,x&&(ut=Oe,Oe=i&&!P?i.totalProgress():it)),m&&d&&!mn&&!sl&&Si&&(!it&&De<ze+(ze-Fe)/(_n()-Xo)*m?it=1e-4:it===1&&L>ze+(ze-Fe)/(_n()-Xo)*m&&(it=.9999)),it!==Rt&&D.enabled){if($t=D.isActive=!!it&&it<1,bt=!!Rt&&Rt<1,Ct=$t!==bt,qn=Ct||!!it!=!!Rt,D.direction=it>Rt?1:-1,D.progress=it,qn&&!mn&&(At=it&&!Rt?0:it===1?1:Rt===1?2:3,P&&(mt=!Ct&&z[At+1]!=="none"&&z[At+1]||z[At],ci=i&&(mt==="complete"||mt==="reset"||mt in i))),v&&(Ct||ci)&&(ci||h||!i)&&(xn(v)?v(D):D.getTrailing(v).forEach(function(B){return B.endAnimation()})),P||(I&&!mn&&!sl?(I._dp._time-I._start!==I._time&&I.render(I._dp._time-I._start),I.resetTo?I.resetTo("totalProgress",it,i._tTime/i._tDur):(I.vars.totalProgress=it,I.invalidate().restart())):i&&i.totalProgress(it,!!(mn&&(ne||pe)))),d){if(pe&&_&&(Q.style[_+y.os2]=re),!Y)oe(qo(fe+Xe*it));else if(qn){if(Sn=!pe&&it>Rt&&L+1>ze&&ze+1>=Oi(U,y),w)if(!pe&&($t||Sn)){var Zt=tr(d,!0),Jt=ze-De;dp(d,xt,Zt.top+(y===en?Jt:0)+Qt,Zt.left+(y===en?0:Jt)+Qt)}else dp(d,Q);io($t||Sn?V:ee),Le&&it<1&&$t||oe(fe+(it===1&&!Sn?Xe:0))}}x&&!Te.tween&&!mn&&!sl&&J.restart(!0),a&&(Ct||S&&it&&(it<1||!tu))&&Ta(a.targets).forEach(function(B){return B.classList[$t||S?"add":"remove"](a.className)}),o&&!P&&!pe&&o(D),qn&&!mn?(P&&(ci&&(mt==="complete"?i.pause().totalProgress(1):mt==="reset"?i.restart(!0).pause():mt==="restart"?i.restart(!0):i[mt]()),o&&o(D)),(Ct||!tu)&&(c&&Ct&&Os(D,c),q[At]&&Os(D,q[At]),S&&(it===1?D.kill(!1,1):q[At]=0),Ct||(At=it===1?1:3,q[At]&&Os(D,q[At]))),R&&!$t&&Math.abs(D.getVelocity())>(Ko(R)?R:2500)&&(zo(D.callbackAnimation),I?I.progress(1):zo(i,mt==="reverse"?1:!it,1))):P&&o&&!mn&&o(D)}if(xe){var b=T?ze/T.duration()*(T._caScrollDist||0):ze;Ie(b+(H._isFlipped?1:0)),xe(b)}ke&&ke(-ze/T.duration()*(T._caScrollDist||0))}},D.enable=function(pe,Ve){D.enabled||(D.enabled=!0,ln(U,"resize",jo),W||ln(U,"scroll",ks),ae&&ln(s,"refreshInit",ae),pe!==!1&&(D.progress=de=0,Ze=Fe=j=ie()),Ve!==!1&&D.refresh())},D.getTween=function(pe){return pe&&Te?Te.tween:I},D.setPositions=function(pe,Ve,we,ze){if(T){var Vt=T.scrollTrigger,it=T.duration(),Rt=Vt.end-Vt.start;pe=Vt.start+Rt*pe/it,Ve=Vt.start+Rt*Ve/it}D.refresh(!1,!1,{start:rp(pe,we&&!!D._startClamp),end:rp(Ve,we&&!!D._endClamp)},ze),D.update()},D.adjustPinSpacing=function(pe){if(se&&pe){var Ve=se.indexOf(y.d)+1;se[Ve]=parseFloat(se[Ve])+pe+Qt,se[1]=parseFloat(se[1])+pe+Qt,io(se)}},D.disable=function(pe,Ve){if(pe!==!1&&D.revert(!0,!0),D.enabled&&(D.enabled=D.isActive=!1,Ve||I&&I.pause(),le=0,be&&(be.uncache=1),ae&&an(s,"refreshInit",ae),J&&(J.pause(),Te.tween&&Te.tween.kill()&&(Te.tween=0)),!W)){for(var we=et.length;we--;)if(et[we].scroller===U&&et[we]!==D)return;an(U,"resize",jo),W||an(U,"scroll",ks)}},D.kill=function(pe,Ve){D.disable(pe,Ve),I&&!Ve&&I.kill(),l&&delete xh[l];var we=et.indexOf(D);we>=0&&et.splice(we,1),we===Cn&&wl>0&&Cn--,we=0,et.forEach(function(ze){return ze.scroller===D.scroller&&(we=1)}),we||Pn||Lr||(D.scroll.rec=0),i&&(i.scrollTrigger=null,pe&&i.revert({kill:!1}),Ve||i.kill()),Et&&[Et,Be,H,Me].forEach(function(ze){return ze.parentNode&&ze.parentNode.removeChild(ze)}),ca===D&&(ca=0),d&&(be&&(be.uncache=1),we=0,et.forEach(function(ze){return ze.pin===d&&we++}),we||(be.spacer=0)),n.onKill&&n.onKill(D)},et.push(D),D.enable(!1,!1),ht&&ht(D),i&&i.add&&!C){var $e=D.update;D.update=function(){D.update=$e,nt.cache++,De||L||D.refresh()},Se.delayedCall(.01,D.update),C=.01,De=L=0}else D.refresh();d&&sb()},s.register=function(n){return Hs||(Se=n||S_(),M_()&&window.document&&s.enable(),Hs=Yo),Hs},s.defaults=function(n){if(n)for(var i in n)cl[i]=n[i];return cl},s.disable=function(n,i){Yo=0,et.forEach(function(o){return o[i?"kill":"disable"](n)}),an(tt,"wheel",ks),an(vt,"scroll",ks),clearInterval(rl),an(vt,"touchcancel",Ii),an(xt,"touchstart",Ii),al(an,vt,"pointerdown,touchstart,mousedown",sp),al(an,vt,"pointerup,touchend,mouseup",op),jl.kill(),ol(an);for(var r=0;r<nt.length;r+=3)ll(an,nt[r],nt[r+1]),ll(an,nt[r],nt[r+2])},s.enable=function(){if(tt=window,vt=document,ei=vt.documentElement,xt=vt.body,Se){if(Ta=Se.utils.toArray,ra=Se.utils.clamp,_h=Se.core.context||Ii,eu=Se.core.suppressOverwrites||Ii,lf=tt.history.scrollRestoration||"auto",vh=tt.pageYOffset||0,Se.core.globals("ScrollTrigger",s),xt){Yo=1,no=document.createElement("div"),no.style.height="100vh",no.style.position="absolute",L_(),JE(),Wt.register(Se),s.isTouch=Wt.isTouch,xr=Wt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),mh=Wt.isTouch===1,ln(tt,"wheel",ks),af=[tt,vt,ei,xt],Se.matchMedia?(s.matchMedia=function(u){var h=Se.matchMedia(),f;for(f in u)h.add(f,u[f]);return h},Se.addEventListener("matchMediaInit",function(){P_(),pf()}),Se.addEventListener("matchMediaRevert",function(){return C_()}),Se.addEventListener("matchMedia",function(){rs(0,1),_s("matchMedia")}),Se.matchMedia().add("(orientation: portrait)",function(){return iu(),iu})):console.warn("Requires GSAP 3.11.0 or later"),iu(),ln(vt,"scroll",ks);var n=xt.hasAttribute("style"),i=xt.style,r=i.borderTopStyle,o=Se.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=tr(xt),en.m=Math.round(a.top+en.sc())||0,Nn.m=Math.round(a.left+Nn.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),n||(xt.setAttribute("style",""),xt.removeAttribute("style")),rl=setInterval(cp,250),Se.delayedCall(.5,function(){return sl=0}),ln(vt,"touchcancel",Ii),ln(xt,"touchstart",Ii),al(ln,vt,"pointerdown,touchstart,mousedown",sp),al(ln,vt,"pointerup,touchend,mouseup",op),ph=Se.utils.checkPrefix("transform"),Rl.push(ph),Hs=_n(),jl=Se.delayedCall(.2,rs).pause(),Vs=[vt,"visibilitychange",function(){var u=tt.innerWidth,h=tt.innerHeight;vt.hidden?(tp=u,np=h):(tp!==u||np!==h)&&jo()},vt,"DOMContentLoaded",rs,tt,"load",rs,tt,"resize",jo],ol(ln),et.forEach(function(u){return u.enable(0,1)}),l=0;l<nt.length;l+=3)ll(an,nt[l],nt[l+1]),ll(an,nt[l],nt[l+2])}else if(vt){var c=function u(){s.enable(),vt.removeEventListener("DOMContentLoaded",u)};vt.addEventListener("DOMContentLoaded",c)}}},s.config=function(n){"limitCallbacks"in n&&(tu=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(rl)||(rl=i)&&setInterval(cp,i),"ignoreMobileResize"in n&&(mh=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(ol(an)||ol(ln,n.autoRefreshEvents||"none"),x_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=kn(n),o=nt.indexOf(r),a=ps(r);~o&&nt.splice(o,a?6:2),i&&(a?ki.unshift(tt,i,xt,i,ei,i):ki.unshift(r,i))},s.clearMatchMedia=function(n){et.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var o=(Jn(n)?kn(n):n).getBoundingClientRect(),a=o[r?cs:us]*i||0;return r?o.right-a>0&&o.left+a<tt.innerWidth:o.bottom-a>0&&o.top+a<tt.innerHeight},s.positionInViewport=function(n,i,r){Jn(n)&&(n=kn(n));var o=n.getBoundingClientRect(),a=o[r?cs:us],l=i==null?a/2:i in Zl?Zl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(o.left+l)/tt.innerWidth:(o.top+l)/tt.innerHeight},s.killAll=function(n){if(et.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=ms.killAll||[];ms={},i.forEach(function(r){return r()})}},s})();Ye.version="3.15.1";Ye.saveStyles=function(s){return s?Ta(s).forEach(function(e){if(e&&e.style){var t=Zn.indexOf(e);t>=0&&Zn.splice(t,5),Zn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Se.core.getCache(e),_h())}}):Zn};Ye.revert=function(s,e){return pf(!s,e)};Ye.create=function(s,e){return new Ye(s,e)};Ye.refresh=function(s){return s?jo(!0):(Hs||Ye.register())&&rs(!0)};Ye.update=function(s){return++nt.cache&&or(s===!0?2:0)};Ye.clearScrollMemory=D_;Ye.maxScroll=function(s,e){return Oi(s,e?Nn:en)};Ye.getScrollFunc=function(s,e){return Or(kn(s),e?Nn:en)};Ye.getById=function(s){return xh[s]};Ye.getAll=function(){return et.filter(function(s){return s.vars.id!=="ScrollSmoother"})};Ye.isScrolling=function(){return!!Si};Ye.snapDirectional=df;Ye.addEventListener=function(s,e){var t=ms[s]||(ms[s]=[]);~t.indexOf(e)||t.push(e)};Ye.removeEventListener=function(s,e){var t=ms[s],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Ye.batch=function(s,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,o=function(c,u){var h=[],f=[],d=Se.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(_){h.length||d.restart(!0),h.push(_.trigger),f.push(_),r<=h.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&xn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return xn(r)&&(r=r(),ln(Ye,"refresh",function(){return r=e.batchMax()})),Ta(s).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(Ye.create(c))}),t};var mp=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},su=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Wt.isTouch?" pinch-zoom":""):"none",e===ei&&s(xt,t)},dl={auto:1,scroll:1},ub=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,o=r._gsap||Se.core.getCache(r),a=_n(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==xt&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(dl[(l=gi(r)).overflowY]||dl[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!ps(r)&&(dl[(l=gi(r)).overflowY]||dl[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},N_=function(e,t,n,i){return Wt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&ub,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&ln(vt,Wt.eventTypes[0],gp,!1,!0)},onDisable:function(){return an(vt,Wt.eventTypes[0],gp,!0)}})},hb=/(input|label|select|textarea)/i,_p,gp=function(e){var t=hb.test(e.target.tagName);(t||_p)&&(e._gsapAllow=!0,_p=t)},fb=function(e){es(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,o=t.onRelease,a,l,c=kn(e.target)||ei,u=Se.core.globals().ScrollSmoother,h=u&&u.get(),f=xr&&(e.content&&kn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=Or(c,en),_=Or(c,Nn),g=1,m=(Wt.isTouch&&tt.visualViewport?tt.visualViewport.scale*tt.visualViewport.width:tt.outerWidth)/tt.innerWidth,p=0,M=xn(i)?function(){return i(a)}:function(){return i||2.8},S,x,w=N_(c,e.type,!0,r),A=function(){return x=!1},T=Ii,R=Ii,v=function(){l=Oi(c,en),R=ra(xr?1:0,l),n&&(T=ra(0,Oi(c,Nn))),S=hs},y=function(){f._gsap.y=qo(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},P=function(){if(x){requestAnimationFrame(A);var N=qo(a.deltaY/2),$=R(d.v-N);if(f&&$!==d.v+d.offset){d.offset=$-d.v;var D=qo((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",f._gsap.y=D+"px",d.cacheID=nt.cache,or()}return!0}d.offset&&y(),x=!0},U,O,W,Y,q=function(){v(),U.isActive()&&U.vars.scrollY>l&&(d()>l?U.progress(1)&&d(l):U.resetTo("scrollY",l))};return f&&Se.set(f,{y:"+=0"}),e.ignoreCheck=function(z){return xr&&z.type==="touchmove"&&P()||g>1.05&&z.type!=="touchstart"||a.isGesturing||z.touches&&z.touches.length>1},e.onPress=function(){x=!1;var z=g;g=qo((tt.visualViewport&&tt.visualViewport.scale||1)/m),U.pause(),z!==g&&su(c,g>1.01?!0:n?!1:"x"),O=_(),W=d(),v(),S=hs},e.onRelease=e.onGestureStart=function(z,N){if(d.offset&&y(),!N)Y.restart(!0);else{nt.cache++;var $=M(),D,ae;n&&(D=_(),ae=D+$*.05*-z.velocityX/.227,$*=mp(_,D,ae,Oi(c,Nn)),U.vars.scrollX=T(ae)),D=d(),ae=D+$*.05*-z.velocityY/.227,$*=mp(d,D,ae,Oi(c,en)),U.vars.scrollY=R(ae),U.invalidate().duration($).play(.01),(xr&&U.vars.scrollY>=l||D>=l-1)&&Se.to({},{onUpdate:q,duration:$})}o&&o(z)},e.onWheel=function(){U._ts&&U.pause(),_n()-p>1e3&&(S=0,p=_n())},e.onChange=function(z,N,$,D,ae){if(hs!==S&&v(),N&&n&&_(T(D[2]===N?O+(z.startX-z.x):_()+N-D[1])),$){d.offset&&y();var Ce=ae[2]===$,Qe=Ce?W+z.startY-z.y:d()+$-ae[1],j=R(Qe);Ce&&Qe!==j&&(W+=j-Qe),d(j)}($||N)&&or()},e.onEnable=function(){su(c,n?!1:"x"),Ye.addEventListener("refresh",q),ln(tt,"resize",q),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),w.enable()},e.onDisable=function(){su(c,!0),an(tt,"resize",q),Ye.removeEventListener("refresh",q),w.kill()},e.lockAxis=e.lockAxis!==!1,a=new Wt(e),a.iOS=xr,xr&&!d()&&d(1),xr&&Se.ticker.add(Ii),Y=a._dc,U=Se.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:I_(d,d(),function(){return U.pause()})},onUpdate:or,onComplete:Y.vars.onComplete}),a};Ye.sort=function(s){if(xn(s))return et.sort(s);var e=tt.pageYOffset||0;return Ye.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+tt.innerHeight}),et.sort(s||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Ye.observe=function(s){return new Wt(s)};Ye.normalizeScroll=function(s){if(typeof s>"u")return Rn;if(s===!0&&Rn)return Rn.enable();if(s===!1){Rn&&Rn.kill(),Rn=s;return}var e=s instanceof Wt?s:fb(s);return Rn&&Rn.target===e.target&&Rn.kill(),ps(e.target)&&(Rn=e),e};Ye.core={_getVelocityProp:dh,_inputObserver:N_,_scrollers:nt,_proxies:ki,bridge:{ss:function(){Si||_s("scrollStart"),Si=_n()},ref:function(){return mn}}};S_()&&Se.registerPlugin(Ye);Pt.registerPlugin(Ye);const xp={desktop:{hero:{x:0,y:-.2,rotY:Math.PI*.78,rotZ:.02,scale:1.05},aero:{x:-.42,y:-.04,rotY:Math.PI*.38,rotZ:-.12,scale:1.05},engine:{x:-1.8,y:-.2,rotY:Math.PI*.2,rotZ:0,scale:0},atelier:{x:.44,y:0,rotY:Math.PI*1.8,rotZ:.08,scale:1.1},heritage:{x:.58,y:-.04,rotY:Math.PI*2.78,rotZ:.16,scale:.88},launch:{x:.42,y:-.02,rotY:Math.PI*3.15,rotZ:-.06,scale:1.25}},mobile:{hero:{x:0,y:-.22,rotY:Math.PI*.78,rotZ:.04,scale:1},aero:{x:0,y:.4,rotY:Math.PI*.38,rotZ:-.12,scale:.85},engine:{x:0,y:-1.6,rotY:Math.PI*.2,rotZ:0,scale:0},atelier:{x:0,y:.38,rotY:Math.PI*1.8,rotZ:.08,scale:.9},heritage:{x:.6,y:.66,rotY:Math.PI*2.78,rotZ:.16,scale:.5},launch:{x:0,y:.42,rotY:Math.PI*3.15,rotZ:-.06,scale:.95}}},vp={desktop:{hidden:{x:1.6,y:0,rotY:-.4,scale:0},visible:{x:.42,y:.05,rotY:.5,scale:1.08}},mobile:{hidden:{x:0,y:1.6,rotY:-.4,scale:0},visible:{x:0,y:.38,rotY:.5,scale:.82}}},yp=["rosso","bianco","nero","giallo"];function ou(s){Pt.to(document.body,{backgroundColor:s,duration:.8,ease:"power2.out",overwrite:"auto"})}function db(s,{reducedMotion:e=!1}={}){const{carState:t,engineState:n,streaks:i,car:r}=s,o=e?!0:1.2,a=()=>window.innerWidth<=760;Pt.to(".hero__title",{yPercent:-25,opacity:.15,ease:"none",scrollTrigger:{trigger:"#hero",start:"top top",end:"bottom top",scrub:!0}});const l=document.querySelector(".flavors__track"),c=()=>l.scrollWidth-window.innerWidth,u=Pt.utils.toArray(".flavor");let h=0;const f=v=>{h=v,r.setLivery(yp[v]),ou(u[v].dataset.bg);const y=document.querySelector(".nav");u[v].dataset.livery==="bianco"?y.classList.remove("is-light"):y.classList.add("is-light"),e||Pt.fromTo(s.intro,{scale:.9},{scale:1,duration:.85,ease:"elastic.out(1, 0.5)",overwrite:!0})};Pt.to(l,{x:()=>-c(),ease:"none",scrollTrigger:{trigger:"#atelier",start:"top top",end:()=>"+="+c(),pin:!0,scrub:o,invalidateOnRefresh:!0,onToggle:v=>{v.isActive&&f(Math.round(v.progress*(u.length-1)))},onUpdate:v=>{const y=Math.round(v.progress*(u.length-1));v.isActive&&y!==h&&f(y),_(v.progress)},onLeaveBack:()=>r.setLivery("rosso")}});const d=u.map(v=>v.querySelectorAll(".flavor__name, .lead"));function _(v){const y=v*(u.length-1);d.forEach((P,U)=>{if(U===0||e)return;const O=Pt.utils.clamp(0,1,(y-(U-.6))/.5);Pt.to(P,{opacity:O,y:(1-O)*60,duration:.5,ease:"power3.out",overwrite:"auto"})})}_(0),Ye.create({trigger:"#heritage",start:"top 60%",end:"bottom bottom",onToggle:v=>{v.isActive&&(r.setLivery("rosso"),ou(document.getElementById("heritage").dataset.bg),document.querySelector(".nav").classList.remove("is-light"))},onLeaveBack:()=>r.setLivery(yp[h])}),document.querySelectorAll("section[data-bg]").forEach(v=>{Ye.create({trigger:v,start:"top 55%",end:"bottom 55%",onToggle:y=>{if(y.isActive){ou(v.dataset.bg);const P=document.querySelector(".nav");v.id==="aero"?P.classList.add("is-light"):P.classList.remove("is-light")}}})});const g=v=>(a()?xp.mobile:xp.desktop)[v],m=v=>(a()?vp.mobile:vp.desktop)[v],p=()=>({...g("hero"),spin:0,streaks:.6}),M=[{trigger:"#aero",start:"top bottom",end:"top 20%",to:()=>g("aero")},{trigger:"#engine",start:"top bottom",end:"top 30%",to:()=>g("engine")},{trigger:"#atelier",start:"top bottom",end:"top top",to:()=>g("atelier")},{trigger:"#atelier",start:"top top",end:()=>"+="+c(),linear:!0,to:()=>({spin:Math.PI*2*(u.length-1)})},{trigger:"#heritage",start:"top bottom",end:"top 25%",to:()=>g("heritage")},{trigger:"#heritage",start:"top 70%",end:"top 30%",to:()=>({streaks:0})},{trigger:"#launch",start:"top bottom",end:"top 15%",to:()=>g("launch")},{trigger:"#launch",start:"top 70%",end:"top 15%",to:()=>({streaks:.85})}],S=M.map(v=>Ye.create({trigger:v.trigger,start:v.start,end:v.end,invalidateOnRefresh:!0})),x=Ye.create({trigger:"#engine",start:"top 80%",end:"bottom 20%"}),w=v=>v*v*(3-2*v),A={};function T(){const v=p();Object.assign(A,v),M.forEach((y,P)=>{const U=y.to(),O=S[P].progress,W=y.linear?O:w(O);for(const Y in U)O>0&&(A[Y]=v[Y]+(U[Y]-v[Y])*W),v[Y]=U[Y]})}let R=!0;if(Pt.ticker.add((v,y)=>{T();const P=R||e?1:1-Math.pow(.9,y/16.67||1);R=!1;for(const O of["x","y","rotY","rotZ","scale","spin"])t[O]+=(A[O]-t[O])*P;const U=x.isActive?m("visible"):m("hidden");for(const O of["x","y","rotY","scale"])n[O]+=(U[O]-n[O])*P;i&&i.material&&(i.material.opacity+=(A.streaks-i.material.opacity)*P)}),e){document.querySelectorAll("[data-count]").forEach(v=>v.textContent=v.dataset.count);return}Pt.set(".reveal",{opacity:0,y:50}),Ye.batch(".reveal",{start:"top 88%",once:!0,onEnter:v=>Pt.to(v,{opacity:1,y:0,duration:1.1,stagger:.12,ease:"expo.out"})}),document.querySelectorAll("[data-count]").forEach(v=>{const y=Number(v.dataset.count),P={v:0};Ye.create({trigger:v,start:"top 85%",once:!0,onEnter:()=>Pt.to(P,{v:y,duration:1.6,ease:"power3.out",onUpdate:()=>v.textContent=Math.round(P.v)})})}),Pt.utils.toArray(".timeline__item").forEach(v=>{Pt.from(v,{opacity:0,x:-60,duration:1,ease:"expo.out",scrollTrigger:{trigger:v,start:"top 85%",once:!0}}),Pt.fromTo(v.querySelector(".timeline__year"),{yPercent:40},{yPercent:-40,ease:"none",scrollTrigger:{trigger:v,start:"top bottom",end:"bottom top",scrub:!0}})})}const Pl=window.matchMedia("(prefers-reduced-motion: reduce)").matches;async function pb(){if(!document.fonts)return;const s=Promise.all([document.fonts.load("500 56px Cormorant"),document.fonts.load("400 16px Montserrat")]);await Promise.race([s,new Promise(e=>setTimeout(e,2e3))])}function mb(s){const e=document.getElementById("popBtn");if(!e)return;const t=e.querySelector("span");let n=!1;e.addEventListener("click",()=>{const i=Pt.timeline();n||(n=!0,t.textContent="V8 awake"),i.call(()=>s.burst.fire(s.exhaustWorldPosition()),null,.12),i.to(s.intro,{y:.35,duration:.18,ease:"power2.out"},.08).to(s.intro,{y:0,duration:.9,ease:"bounce.out"}),Pt.fromTo(s.streaks.state,{speed:8},{speed:1,duration:2.5,ease:"power2.out"})})}function _b(){const s=document.querySelector(".spotlight");if(!s||Pl)return;const e={x:50,y:52},t=Pt.quickTo(e,"x",{duration:1.2,ease:"power3.out"}),n=Pt.quickTo(e,"y",{duration:1.2,ease:"power3.out"});window.addEventListener("pointermove",i=>{t(35+i.clientX/window.innerWidth*30),n(40+i.clientY/window.innerHeight*24)}),Pt.ticker.add(()=>{s.style.setProperty("--spot-x",`${e.x}%`),s.style.setProperty("--spot-y",`${e.y}%`)})}async function gb(){document.body.classList.add("is-loading"),await pb();try{const s=await XE(document.getElementById("webgl"),{reducedMotion:Pl});s.start(),db(s,{reducedMotion:Pl}),mb(s),_b(),document.querySelector(".loader").classList.add("is-done"),document.body.classList.remove("is-loading"),qE(s,{reducedMotion:Pl})}catch(s){console.error("Initialization failed:",s),document.querySelector(".loader").classList.add("is-done"),document.body.classList.remove("is-loading")}}gb();
