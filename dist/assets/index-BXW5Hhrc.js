import{i as ot,e as lt,g as z,d as me,f as $t,m as W,h as Oe,p as Dt,u as G,a as s,j as R,k as Ve,l as Ie,n as x,S as st,q as Te,s as ct,t as ut,v as dt,x as Be,y as ge,z as j,A as F,B,C as qt,D as ye,E as ft,F as se,G as Le,H as ce,I as U,J as p,K as vt,M as te,L as ne,N as Ne,O as Ut,P as ae,Q as Re,R as mt,T as Me,U as gt,W as yt,X as Gt,Y as ue,Z as de,_ as ht,$ as Kt,a0 as Yt,a1 as Xt,a2 as Jt,a3 as Zt,a4 as Qt,a5 as en,a6 as tn,a7 as nn,a8 as an,a9 as rn,aa as on,ab as ln,ac as sn,ad as bt,ae as he,af as Z,ag as Fe,ah as q,ai as cn,aj as Ue,ak as be,al as Se,am as Ge,an as Ke,ao as Ye,ap as pe,aq as St,ar as un,as as kt,at as Xe,au as dn,av as fn,aw as vn,ax as wt,ay as mn,az as gn,aA as yn,aB as hn,aC as bn,aD as Sn,aE as kn,aF as wn,aG as Cn,o as Ct,c as xt,w as D,aH as je,aI as xn}from"./index-VALbMky0.js";class J{constructor(n){let{x:t,y:a,width:r,height:i}=n;this.x=t,this.y=a,this.width=r,this.height=i}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function Je(e,n){return{x:{before:Math.max(0,n.left-e.left),after:Math.max(0,e.right-n.right)},y:{before:Math.max(0,n.top-e.top),after:Math.max(0,e.bottom-n.bottom)}}}function _n(e){return Array.isArray(e)?new J({x:e[0],y:e[1],width:0,height:0}):e.getBoundingClientRect()}function En(e){const n=e.getBoundingClientRect(),t=getComputedStyle(e),a=t.transform;if(a){let r,i,l,o,v;if(a.startsWith("matrix3d("))r=a.slice(9,-1).split(/, /),i=+r[0],l=+r[5],o=+r[12],v=+r[13];else if(a.startsWith("matrix("))r=a.slice(7,-1).split(/, /),i=+r[0],l=+r[3],o=+r[4],v=+r[5];else return new J(n);const c=t.transformOrigin,d=n.x-o-(1-i)*parseFloat(c),b=n.y-v-(1-l)*parseFloat(c.slice(c.indexOf(" ")+1)),w=i?n.width/i:e.offsetWidth+1,S=l?n.height/l:e.offsetHeight+1;return new J({x:d,y:b,width:w,height:S})}else return new J(n)}function Pn(e,n,t){if(typeof e.animate>"u")return{finished:Promise.resolve()};let a;try{a=e.animate(n,t)}catch{return{finished:Promise.resolve()}}return typeof a.finished>"u"&&(a.finished=new Promise(r=>{a.onfinish=()=>{r(a)}})),a}const oe=new WeakMap;function An(e,n){Object.keys(n).forEach(t=>{if(ot(t)){const a=lt(t),r=oe.get(e);if(n[t]==null)r==null||r.forEach(i=>{const[l,o]=i;l===a&&(e.removeEventListener(a,o),r.delete(i))});else if(!r||![...r].some(i=>i[0]===a&&i[1]===n[t])){e.addEventListener(a,n[t]);const i=r||new Set;i.add([a,n[t]]),oe.has(e)||oe.set(e,i)}}else n[t]==null?e.removeAttribute(t):e.setAttribute(t,n[t])})}function On(e,n){Object.keys(n).forEach(t=>{if(ot(t)){const a=lt(t),r=oe.get(e);r==null||r.forEach(i=>{const[l,o]=i;l===a&&(e.removeEventListener(a,o),r.delete(i))})}else e.removeAttribute(t)})}function ze(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",t=arguments.length>2?arguments[2]:void 0;return z()({name:t??me($t(e.replace(/__/g,"-"))),props:{tag:{type:String,default:n},...W()},setup(a,r){let{slots:i}=r;return()=>{var l;return Oe(a.tag,{class:[e,a.class],style:a.style},(l=i.default)==null?void 0:l.call(i))}}})}function _t(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}const Vn="cubic-bezier(0.4, 0, 0.2, 1)";function In(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(n?Tn(e):We(e))return e;e=e.parentElement}return document.scrollingElement}function fe(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(We(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function We(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function Tn(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return["scroll","auto"].includes(n.overflowY)}function Bn(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const Ln="/assets/logo-CErUs13B.png",Nn=z()({name:"VCardActions",props:W(),setup(e,n){let{slots:t}=n;return Dt({VBtn:{slim:!0,variant:"text"}}),G(()=>{var a;return s("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Rn=ze("v-card-subtitle"),Mn=ze("v-card-title");function Fn(e){return{aspectStyles:x(()=>{const n=Number(e.aspectRatio);return n?{paddingBottom:String(1/n*100)+"%"}:void 0})}}const Et=R({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...W(),...Ve()},"VResponsive"),Ee=z()({name:"VResponsive",props:Et(),setup(e,n){let{slots:t}=n;const{aspectStyles:a}=Fn(e),{dimensionStyles:r}=Ie(e);return G(()=>{var i;return s("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[r.value,e.style]},[s("div",{class:"v-responsive__sizer",style:a.value},null),(i=t.additional)==null?void 0:i.call(t),t.default&&s("div",{class:["v-responsive__content",e.contentClass]},[t.default()])])}),{}}});function pn(e,n){if(!st)return;const t=n.modifiers||{},a=n.value,{handler:r,options:i}=typeof a=="object"?a:{handler:a,options:{}},l=new IntersectionObserver(function(){var b;let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],v=arguments.length>1?arguments[1]:void 0;const c=(b=e._observe)==null?void 0:b[n.instance.$.uid];if(!c)return;const d=o.some(w=>w.isIntersecting);r&&(!t.quiet||c.init)&&(!t.once||d||c.init)&&r(d,o,v),d&&t.once?Pt(e,n):c.init=!0},i);e._observe=Object(e._observe),e._observe[n.instance.$.uid]={init:!1,observer:l},l.observe(e)}function Pt(e,n){var a;const t=(a=e._observe)==null?void 0:a[n.instance.$.uid];t&&(t.observer.unobserve(e),delete e._observe[n.instance.$.uid])}const jn={mounted:pn,unmounted:Pt},zn=jn,Wn=R({alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...Et(),...W(),...Te(),...ct()},"VImg"),He=z()({name:"VImg",directives:{intersect:zn},props:Wn(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,n){let{emit:t,slots:a}=n;const{backgroundColorClasses:r,backgroundColorStyles:i}=ut(dt(e,"color")),{roundedClasses:l}=Be(e),o=ge("VImg"),v=j(""),c=F(),d=j(e.eager?"loading":"idle"),b=j(),w=j(),S=x(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),g=x(()=>S.value.aspect||b.value/w.value||0);B(()=>e.src,()=>{h(d.value!=="idle")}),B(g,(f,m)=>{!f&&m&&c.value&&V(c.value)}),qt(()=>h());function h(f){if(!(e.eager&&f)&&!(st&&!f&&!e.eager)){if(d.value="loading",S.value.lazySrc){const m=new Image;m.src=S.value.lazySrc,V(m,null)}S.value.src&&ye(()=>{var m;t("loadstart",((m=c.value)==null?void 0:m.currentSrc)||S.value.src),setTimeout(()=>{var y;if(!o.isUnmounted)if((y=c.value)!=null&&y.complete){if(c.value.naturalWidth||O(),d.value==="error")return;g.value||V(c.value,null),d.value==="loading"&&E()}else g.value||V(c.value),C()})})}}function E(){var f;o.isUnmounted||(C(),V(c.value),d.value="loaded",t("load",((f=c.value)==null?void 0:f.currentSrc)||S.value.src))}function O(){var f;o.isUnmounted||(d.value="error",t("error",((f=c.value)==null?void 0:f.currentSrc)||S.value.src))}function C(){const f=c.value;f&&(v.value=f.currentSrc||f.src)}let k=-1;ft(()=>{clearTimeout(k)});function V(f){let m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const y=()=>{if(clearTimeout(k),o.isUnmounted)return;const{naturalHeight:M,naturalWidth:L}=f;M||L?(b.value=L,w.value=M):!f.complete&&d.value==="loading"&&m!=null?k=window.setTimeout(y,m):(f.currentSrc.endsWith(".svg")||f.currentSrc.startsWith("data:image/svg+xml"))&&(b.value=1,w.value=1)};y()}const T=x(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),A=()=>{var y;if(!S.value.src||d.value==="idle")return null;const f=s("img",{class:["v-img__img",T.value],style:{objectPosition:e.position},src:S.value.src,srcset:S.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:c,onLoad:E,onError:O},null),m=(y=a.sources)==null?void 0:y.call(a);return s(te,{transition:e.transition,appear:!0},{default:()=>[se(m?s("picture",{class:"v-img__picture"},[m,f]):f,[[vt,d.value==="loaded"]])]})},u=()=>s(te,{transition:e.transition},{default:()=>[S.value.lazySrc&&d.value!=="loaded"&&s("img",{class:["v-img__img","v-img__img--preload",T.value],style:{objectPosition:e.position},src:S.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),I=()=>a.placeholder?s(te,{transition:e.transition,appear:!0},{default:()=>[(d.value==="loading"||d.value==="error"&&!a.error)&&s("div",{class:"v-img__placeholder"},[a.placeholder()])]}):null,K=()=>a.error?s(te,{transition:e.transition,appear:!0},{default:()=>[d.value==="error"&&s("div",{class:"v-img__error"},[a.error()])]}):null,Y=()=>e.gradient?s("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,_=j(!1);{const f=B(g,m=>{m&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{_.value=!0})}),f())})}return G(()=>{const f=Ee.filterProps(e);return se(s(Ee,U({class:["v-img",{"v-img--booting":!_.value},r.value,l.value,e.class],style:[{width:p(e.width==="auto"?b.value:e.width)},i.value,e.style]},f,{aspectRatio:g.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>s(ce,null,[s(A,null,null),s(u,null,null),s(Y,null,null),s(I,null,null),s(K,null,null)]),default:a.default}),[[Le("intersect"),{handler:h,options:e.options},null,{once:!0}]])}),{currentSrc:v,image:c,state:d,naturalWidth:b,naturalHeight:w}}}),Hn=R({start:Boolean,end:Boolean,icon:ne,image:String,text:String,...W(),...Ne(),...Te(),...Ut(),...ae(),...Re(),...mt({variant:"flat"})},"VAvatar"),Ze=z()({name:"VAvatar",props:Hn(),setup(e,n){let{slots:t}=n;const{themeClasses:a}=Me(e),{colorClasses:r,colorStyles:i,variantClasses:l}=gt(e),{densityClasses:o}=yt(e),{roundedClasses:v}=Be(e),{sizeClasses:c,sizeStyles:d}=Gt(e);return G(()=>s(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,r.value,o.value,v.value,c.value,l.value,e.class],style:[i.value,d.value,e.style]},{default:()=>[t.default?s(de,{key:"content-defaults",defaults:{VImg:{cover:!0,image:e.image},VIcon:{icon:e.icon}}},{default:()=>[t.default()]}):e.image?s(He,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?s(ue,{key:"icon",icon:e.icon},null):e.text,ht(!1,"v-avatar")]})),{}}}),$n=R({appendAvatar:String,appendIcon:ne,prependAvatar:String,prependIcon:ne,subtitle:[String,Number],title:[String,Number],...W(),...Ne()},"VCardItem"),Dn=z()({name:"VCardItem",props:$n(),setup(e,n){let{slots:t}=n;return G(()=>{var c;const a=!!(e.prependAvatar||e.prependIcon),r=!!(a||t.prepend),i=!!(e.appendAvatar||e.appendIcon),l=!!(i||t.append),o=!!(e.title!=null||t.title),v=!!(e.subtitle!=null||t.subtitle);return s("div",{class:["v-card-item",e.class],style:e.style},[r&&s("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?s(de,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):s(ce,null,[e.prependAvatar&&s(Ze,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&s(ue,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),s("div",{class:"v-card-item__content"},[o&&s(Mn,{key:"title"},{default:()=>{var d;return[((d=t.title)==null?void 0:d.call(t))??e.title]}}),v&&s(Rn,{key:"subtitle"},{default:()=>{var d;return[((d=t.subtitle)==null?void 0:d.call(t))??e.subtitle]}}),(c=t.default)==null?void 0:c.call(t)]),l&&s("div",{key:"append",class:"v-card-item__append"},[t.append?s(de,{key:"append-defaults",disabled:!i,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):s(ce,null,[e.appendIcon&&s(ue,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&s(Ze,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),qn=ze("v-card-text"),Un=R({appendAvatar:String,appendIcon:ne,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:ne,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...Kt(),...W(),...Ne(),...Ve(),...Yt(),...Xt(),...Jt(),...Zt(),...Te(),...Qt(),...ae(),...Re(),...mt({variant:"elevated"})},"VCard"),ke=z()({name:"VCard",directives:{Ripple:en},props:Un(),setup(e,n){let{attrs:t,slots:a}=n;const{themeClasses:r}=Me(e),{borderClasses:i}=tn(e),{colorClasses:l,colorStyles:o,variantClasses:v}=gt(e),{densityClasses:c}=yt(e),{dimensionStyles:d}=Ie(e),{elevationClasses:b}=nn(e),{loaderClasses:w}=an(e),{locationStyles:S}=rn(e),{positionClasses:g}=on(e),{roundedClasses:h}=Be(e),E=ln(e,t),O=x(()=>e.link!==!1&&E.isLink.value),C=x(()=>!e.disabled&&e.link!==!1&&(e.link||E.isClickable.value));return G(()=>{const k=O.value?"a":e.tag,V=!!(a.title||e.title!=null),T=!!(a.subtitle||e.subtitle!=null),A=V||T,u=!!(a.append||e.appendAvatar||e.appendIcon),I=!!(a.prepend||e.prependAvatar||e.prependIcon),K=!!(a.image||e.image),Y=A||I||u,_=!!(a.text||e.text!=null);return se(s(k,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":C.value},r.value,i.value,l.value,c.value,b.value,w.value,g.value,h.value,v.value,e.class],style:[o.value,d.value,S.value,e.style],href:E.href.value,onClick:C.value&&E.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var f;return[K&&s("div",{key:"image",class:"v-card__image"},[a.image?s(de,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):s(He,{key:"image-img",cover:!0,src:e.image},null)]),s(sn,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),Y&&s(Dn,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),_&&s(qn,{key:"text"},{default:()=>{var m;return[((m=a.text)==null?void 0:m.call(a))??e.text]}}),(f=a.default)==null?void 0:f.call(a),a.actions&&s(Nn,null,{default:a.actions}),ht(C.value,"v-card")]}}),[[Le("ripple"),C.value&&e.ripple]])}),{}}}),Gn=R({fluid:{type:Boolean,default:!1},...W(),...ae()},"VContainer"),Kn=z()({name:"VContainer",props:Gn(),setup(e,n){let{slots:t}=n;const{rtlClasses:a}=bt();return G(()=>s(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},a.value,e.class],style:e.style},t)),{}}}),At=he.reduce((e,n)=>(e[n]={type:[Boolean,String,Number],default:!1},e),{}),Ot=he.reduce((e,n)=>{const t="offset"+me(n);return e[t]={type:[String,Number],default:null},e},{}),Vt=he.reduce((e,n)=>{const t="order"+me(n);return e[t]={type:[String,Number],default:null},e},{}),Qe={col:Object.keys(At),offset:Object.keys(Ot),order:Object.keys(Vt)};function Yn(e,n,t){let a=e;if(!(t==null||t===!1)){if(n){const r=n.replace(e,"");a+=`-${r}`}return e==="col"&&(a="v-"+a),e==="col"&&(t===""||t===!0)||(a+=`-${t}`),a.toLowerCase()}}const Xn=["auto","start","end","center","baseline","stretch"],Jn=R({cols:{type:[Boolean,String,Number],default:!1},...At,offset:{type:[String,Number],default:null},...Ot,order:{type:[String,Number],default:null},...Vt,alignSelf:{type:String,default:null,validator:e=>Xn.includes(e)},...W(),...ae()},"VCol"),we=z()({name:"VCol",props:Jn(),setup(e,n){let{slots:t}=n;const a=x(()=>{const r=[];let i;for(i in Qe)Qe[i].forEach(o=>{const v=e[o],c=Yn(i,o,v);c&&r.push(c)});const l=r.some(o=>o.startsWith("v-col-"));return r.push({"v-col":!l||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),r});return()=>{var r;return Oe(e.tag,{class:[a.value,e.class],style:e.style},(r=t.default)==null?void 0:r.call(t))}}}),$e=["start","end","center"],It=["space-between","space-around","space-evenly"];function De(e,n){return he.reduce((t,a)=>{const r=e+me(a);return t[r]=n(),t},{})}const Zn=[...$e,"baseline","stretch"],Tt=e=>Zn.includes(e),Bt=De("align",()=>({type:String,default:null,validator:Tt})),Qn=[...$e,...It],Lt=e=>Qn.includes(e),Nt=De("justify",()=>({type:String,default:null,validator:Lt})),ea=[...$e,...It,"stretch"],Rt=e=>ea.includes(e),Mt=De("alignContent",()=>({type:String,default:null,validator:Rt})),et={align:Object.keys(Bt),justify:Object.keys(Nt),alignContent:Object.keys(Mt)},ta={align:"align",justify:"justify",alignContent:"align-content"};function na(e,n,t){let a=ta[e];if(t!=null){if(n){const r=n.replace(e,"");a+=`-${r}`}return a+=`-${t}`,a.toLowerCase()}}const aa=R({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:Tt},...Bt,justify:{type:String,default:null,validator:Lt},...Nt,alignContent:{type:String,default:null,validator:Rt},...Mt,...W(),...ae()},"VRow"),ra=z()({name:"VRow",props:aa(),setup(e,n){let{slots:t}=n;const a=x(()=>{const r=[];let i;for(i in et)et[i].forEach(l=>{const o=e[l],v=na(i,l,o);v&&r.push(v)});return r.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),r});return()=>{var r;return Oe(e.tag,{class:["v-row",a.value,e.class],style:e.style},(r=t.default)==null?void 0:r.call(t))}}});function Ce(e,n){return{x:e.x+n.x,y:e.y+n.y}}function ia(e,n){return{x:e.x-n.x,y:e.y-n.y}}function tt(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:a}=e,r=a==="left"?0:a==="center"?n.width/2:a==="right"?n.width:a,i=t==="top"?0:t==="bottom"?n.height:t;return Ce({x:r,y:i},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:a}=e,r=t==="left"?0:t==="right"?n.width:t,i=a==="top"?0:a==="center"?n.height/2:a==="bottom"?n.height:a;return Ce({x:r,y:i},n)}return Ce({x:n.width/2,y:n.height/2},n)}const Ft={static:sa,connected:ua},oa=R({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in Ft},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function la(e,n){const t=F({}),a=F();Z&&Fe(()=>!!(n.isActive.value&&e.locationStrategy),i=>{var l,o;B(()=>e.locationStrategy,i),q(()=>{window.removeEventListener("resize",r),a.value=void 0}),window.addEventListener("resize",r,{passive:!0}),typeof e.locationStrategy=="function"?a.value=(l=e.locationStrategy(n,e,t))==null?void 0:l.updateLocation:a.value=(o=Ft[e.locationStrategy](n,e,t))==null?void 0:o.updateLocation});function r(i){var l;(l=a.value)==null||l.call(a,i)}return{contentStyles:t,updateLocation:a}}function sa(){}function ca(e,n){n?e.style.removeProperty("left"):e.style.removeProperty("right");const t=En(e);return n?t.x+=parseFloat(e.style.right||0):t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function ua(e,n,t){(Array.isArray(e.target.value)||Bn(e.target.value))&&Object.assign(t.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:r,preferredOrigin:i}=cn(()=>{const g=Ue(n.location,e.isRtl.value),h=n.origin==="overlap"?g:n.origin==="auto"?be(g):Ue(n.origin,e.isRtl.value);return g.side===h.side&&g.align===Se(h).align?{preferredAnchor:Ge(g),preferredOrigin:Ge(h)}:{preferredAnchor:g,preferredOrigin:h}}),[l,o,v,c]=["minWidth","minHeight","maxWidth","maxHeight"].map(g=>x(()=>{const h=parseFloat(n[g]);return isNaN(h)?1/0:h})),d=x(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const g=n.offset.split(" ").map(parseFloat);return g.length<2&&g.push(0),g}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let b=!1;const w=new ResizeObserver(()=>{b&&S()});B([e.target,e.contentEl],(g,h)=>{let[E,O]=g,[C,k]=h;C&&!Array.isArray(C)&&w.unobserve(C),E&&!Array.isArray(E)&&w.observe(E),k&&w.unobserve(k),O&&w.observe(O)},{immediate:!0}),q(()=>{w.disconnect()});function S(){if(b=!1,requestAnimationFrame(()=>b=!0),!e.target.value||!e.contentEl.value)return;const g=_n(e.target.value),h=ca(e.contentEl.value,e.isRtl.value),E=fe(e.contentEl.value),O=12;E.length||(E.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(h.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),h.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const C=E.reduce((_,f)=>{const m=f.getBoundingClientRect(),y=new J({x:f===document.documentElement?0:m.x,y:f===document.documentElement?0:m.y,width:f.clientWidth,height:f.clientHeight});return _?new J({x:Math.max(_.left,y.left),y:Math.max(_.top,y.top),width:Math.min(_.right,y.right)-Math.max(_.left,y.left),height:Math.min(_.bottom,y.bottom)-Math.max(_.top,y.top)}):y},void 0);C.x+=O,C.y+=O,C.width-=O*2,C.height-=O*2;let k={anchor:r.value,origin:i.value};function V(_){const f=new J(h),m=tt(_.anchor,g),y=tt(_.origin,f);let{x:M,y:L}=ia(m,y);switch(_.anchor.side){case"top":L-=d.value[0];break;case"bottom":L+=d.value[0];break;case"left":M-=d.value[0];break;case"right":M+=d.value[0];break}switch(_.anchor.align){case"top":L-=d.value[1];break;case"bottom":L+=d.value[1];break;case"left":M-=d.value[1];break;case"right":M+=d.value[1];break}return f.x+=M,f.y+=L,f.width=Math.min(f.width,v.value),f.height=Math.min(f.height,c.value),{overflows:Je(f,C),x:M,y:L}}let T=0,A=0;const u={x:0,y:0},I={x:!1,y:!1};let K=-1;for(;!(K++>10);){const{x:_,y:f,overflows:m}=V(k);T+=_,A+=f,h.x+=_,h.y+=f;{const y=Ke(k.anchor),M=m.x.before||m.x.after,L=m.y.before||m.y.after;let Q=!1;if(["x","y"].forEach(N=>{if(N==="x"&&M&&!I.x||N==="y"&&L&&!I.y){const H={anchor:{...k.anchor},origin:{...k.origin}},re=N==="x"?y==="y"?Se:be:y==="y"?be:Se;H.anchor=re(H.anchor),H.origin=re(H.origin);const{overflows:X}=V(H);(X[N].before<=m[N].before&&X[N].after<=m[N].after||X[N].before+X[N].after<(m[N].before+m[N].after)/2)&&(k=H,Q=I[N]=!0)}}),Q)continue}m.x.before&&(T+=m.x.before,h.x+=m.x.before),m.x.after&&(T-=m.x.after,h.x-=m.x.after),m.y.before&&(A+=m.y.before,h.y+=m.y.before),m.y.after&&(A-=m.y.after,h.y-=m.y.after);{const y=Je(h,C);u.x=C.width-y.x.before-y.x.after,u.y=C.height-y.y.before-y.y.after,T+=y.x.before,h.x+=y.x.before,A+=y.y.before,h.y+=y.y.before}break}const Y=Ke(k.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${k.anchor.side} ${k.anchor.align}`,transformOrigin:`${k.origin.side} ${k.origin.align}`,top:p(xe(A)),left:e.isRtl.value?void 0:p(xe(T)),right:e.isRtl.value?p(xe(-T)):void 0,minWidth:p(Y==="y"?Math.min(l.value,g.width):l.value),maxWidth:p(nt(Ye(u.x,l.value===1/0?0:l.value,v.value))),maxHeight:p(nt(Ye(u.y,o.value===1/0?0:o.value,c.value)))}),{available:u,contentBox:h}}return B(()=>[r.value,i.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>S()),ye(()=>{const g=S();if(!g)return;const{available:h,contentBox:E}=g;E.height>h.y&&requestAnimationFrame(()=>{S(),requestAnimationFrame(()=>{S()})})}),{updateLocation:S}}function xe(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function nt(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let Pe=!0;const ve=[];function da(e){!Pe||ve.length?(ve.push(e),Ae()):(Pe=!1,e(),Ae())}let at=-1;function Ae(){cancelAnimationFrame(at),at=requestAnimationFrame(()=>{const e=ve.shift();e&&e(),ve.length?Ae():Pe=!0})}const le={none:null,close:ma,block:ga,reposition:ya},fa=R({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in le}},"VOverlay-scroll-strategies");function va(e,n){if(!Z)return;let t;pe(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=St(),await new Promise(a=>setTimeout(a)),t.active&&t.run(()=>{var a;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(a=le[e.scrollStrategy])==null||a.call(le,n,e,t)}))}),q(()=>{t==null||t.stop()})}function ma(e){function n(t){e.isActive.value=!1}pt(e.targetEl.value??e.contentEl.value,n)}function ga(e,n){var l;const t=(l=e.root.value)==null?void 0:l.offsetParent,a=[...new Set([...fe(e.targetEl.value,n.contained?t:void 0),...fe(e.contentEl.value,n.contained?t:void 0)])].filter(o=>!o.classList.contains("v-overlay-scroll-blocked")),r=window.innerWidth-document.documentElement.offsetWidth,i=(o=>We(o)&&o)(t||document.documentElement);i&&e.root.value.classList.add("v-overlay--scroll-blocked"),a.forEach((o,v)=>{o.style.setProperty("--v-body-scroll-x",p(-o.scrollLeft)),o.style.setProperty("--v-body-scroll-y",p(-o.scrollTop)),o!==document.documentElement&&o.style.setProperty("--v-scrollbar-offset",p(r)),o.classList.add("v-overlay-scroll-blocked")}),q(()=>{a.forEach((o,v)=>{const c=parseFloat(o.style.getPropertyValue("--v-body-scroll-x")),d=parseFloat(o.style.getPropertyValue("--v-body-scroll-y")),b=o.style.scrollBehavior;o.style.scrollBehavior="auto",o.style.removeProperty("--v-body-scroll-x"),o.style.removeProperty("--v-body-scroll-y"),o.style.removeProperty("--v-scrollbar-offset"),o.classList.remove("v-overlay-scroll-blocked"),o.scrollLeft=-c,o.scrollTop=-d,o.style.scrollBehavior=b}),i&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function ya(e,n,t){let a=!1,r=-1,i=-1;function l(o){da(()=>{var d,b;const v=performance.now();(b=(d=e.updateLocation).value)==null||b.call(d,o),a=(performance.now()-v)/(1e3/60)>2})}i=(typeof requestIdleCallback>"u"?o=>o():requestIdleCallback)(()=>{t.run(()=>{pt(e.targetEl.value??e.contentEl.value,o=>{a?(cancelAnimationFrame(r),r=requestAnimationFrame(()=>{r=requestAnimationFrame(()=>{l(o)})})):l(o)})})}),q(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(i),cancelAnimationFrame(r)})}function pt(e,n){const t=[document,...fe(e)];t.forEach(a=>{a.addEventListener("scroll",n,{passive:!0})}),q(()=>{t.forEach(a=>{a.removeEventListener("scroll",n)})})}const ha=Symbol.for("vuetify:v-menu"),ba=R({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function Sa(e,n){let t=()=>{};function a(l){t==null||t();const o=Number(l?e.openDelay:e.closeDelay);return new Promise(v=>{t=un(o,()=>{n==null||n(l),v(l)})})}function r(){return a(!0)}function i(){return a(!1)}return{clearDelay:t,runOpenDelay:r,runCloseDelay:i}}const ka=R({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...ba()},"VOverlay-activator");function wa(e,n){let{isActive:t,isTop:a}=n;const r=ge("useActivator"),i=F();let l=!1,o=!1,v=!0;const c=x(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),d=x(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!c.value),{runOpenDelay:b,runCloseDelay:w}=Sa(e,u=>{u===(e.openOnHover&&l||c.value&&o)&&!(e.openOnHover&&t.value&&!a.value)&&(t.value!==u&&(v=!0),t.value=u)}),S=F(),g={onClick:u=>{u.stopPropagation(),i.value=u.currentTarget||u.target,t.value||(S.value=[u.clientX,u.clientY]),t.value=!t.value},onMouseenter:u=>{var I;(I=u.sourceCapabilities)!=null&&I.firesTouchEvents||(l=!0,i.value=u.currentTarget||u.target,b())},onMouseleave:u=>{l=!1,w()},onFocus:u=>{dn(u.target,":focus-visible")!==!1&&(o=!0,u.stopPropagation(),i.value=u.currentTarget||u.target,b())},onBlur:u=>{o=!1,u.stopPropagation(),w()}},h=x(()=>{const u={};return d.value&&(u.onClick=g.onClick),e.openOnHover&&(u.onMouseenter=g.onMouseenter,u.onMouseleave=g.onMouseleave),c.value&&(u.onFocus=g.onFocus,u.onBlur=g.onBlur),u}),E=x(()=>{const u={};if(e.openOnHover&&(u.onMouseenter=()=>{l=!0,b()},u.onMouseleave=()=>{l=!1,w()}),c.value&&(u.onFocusin=()=>{o=!0,b()},u.onFocusout=()=>{o=!1,w()}),e.closeOnContentClick){const I=kt(ha,null);u.onClick=()=>{t.value=!1,I==null||I.closeParents()}}return u}),O=x(()=>{const u={};return e.openOnHover&&(u.onMouseenter=()=>{v&&(l=!0,v=!1,b())},u.onMouseleave=()=>{l=!1,w()}),u});B(a,u=>{u&&(e.openOnHover&&!l&&(!c.value||!o)||c.value&&!o&&(!e.openOnHover||!l))&&(t.value=!1)}),B(t,u=>{u||setTimeout(()=>{S.value=void 0})},{flush:"post"});const C=F();pe(()=>{C.value&&ye(()=>{i.value=Xe(C.value)})});const k=F(),V=x(()=>e.target==="cursor"&&S.value?S.value:k.value?Xe(k.value):jt(e.target,r)||i.value),T=x(()=>Array.isArray(V.value)?void 0:V.value);let A;return B(()=>!!e.activator,u=>{u&&Z?(A=St(),A.run(()=>{Ca(e,r,{activatorEl:i,activatorEvents:h})})):A&&A.stop()},{flush:"post",immediate:!0}),q(()=>{A==null||A.stop()}),{activatorEl:i,activatorRef:C,target:V,targetEl:T,targetRef:k,activatorEvents:h,contentEvents:E,scrimEvents:O}}function Ca(e,n,t){let{activatorEl:a,activatorEvents:r}=t;B(()=>e.activator,(v,c)=>{if(c&&v!==c){const d=o(c);d&&l(d)}v&&ye(()=>i())},{immediate:!0}),B(()=>e.activatorProps,()=>{i()}),q(()=>{l()});function i(){let v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:o(),c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;v&&An(v,U(r.value,c))}function l(){let v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:o(),c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;v&&On(v,U(r.value,c))}function o(){let v=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator;const c=jt(v,n);return a.value=(c==null?void 0:c.nodeType)===Node.ELEMENT_NODE?c:void 0,a.value}}function jt(e,n){var a,r;if(!e)return;let t;if(e==="parent"){let i=(r=(a=n==null?void 0:n.proxy)==null?void 0:a.$el)==null?void 0:r.parentNode;for(;i!=null&&i.hasAttribute("data-no-activator");)i=i.parentNode;t=i}else typeof e=="string"?t=document.querySelector(e):"$el"in e?t=e.$el:t=e;return t}function xa(){if(!Z)return j(!1);const{ssr:e}=fn();if(e){const n=j(!1);return vn(()=>{n.value=!0}),n}else return j(!0)}const _a=R({eager:Boolean},"lazy");function Ea(e,n){const t=j(!1),a=x(()=>t.value||e.eager||n.value);B(n,()=>t.value=!0);function r(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:a,onAfterLeave:r}}function Pa(){const n=ge("useScopeId").vnode.scopeId;return{scopeId:n?{[n]:""}:void 0}}const rt=Symbol.for("vuetify:stack"),ee=wt([]);function Aa(e,n,t){const a=ge("useStack"),r=!t,i=kt(rt,void 0),l=wt({activeChildren:new Set});mn(rt,l);const o=j(+n.value);Fe(e,()=>{var b;const d=(b=ee.at(-1))==null?void 0:b[1];o.value=d?d+10:+n.value,r&&ee.push([a.uid,o.value]),i==null||i.activeChildren.add(a.uid),q(()=>{if(r){const w=gn(ee).findIndex(S=>S[0]===a.uid);ee.splice(w,1)}i==null||i.activeChildren.delete(a.uid)})});const v=j(!0);r&&pe(()=>{var b;const d=((b=ee.at(-1))==null?void 0:b[0])===a.uid;setTimeout(()=>v.value=d)});const c=x(()=>!l.activeChildren.size);return{globalTop:yn(v),localTop:c,stackStyles:x(()=>({zIndex:o.value}))}}function Oa(e){return{teleportTarget:x(()=>{const t=e.value;if(t===!0||!Z)return;const a=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(a==null)return;let r=a.querySelector(":scope > .v-overlay-container");return r||(r=document.createElement("div"),r.className="v-overlay-container",a.appendChild(r)),r})}}function Va(){return!0}function zt(e,n,t){if(!e||Wt(e,t)===!1)return!1;const a=_t(n);if(typeof ShadowRoot<"u"&&a instanceof ShadowRoot&&a.host===e.target)return!1;const r=(typeof t.value=="object"&&t.value.include||(()=>[]))();return r.push(n),!r.some(i=>i==null?void 0:i.contains(e.target))}function Wt(e,n){return(typeof n.value=="object"&&n.value.closeConditional||Va)(e)}function Ia(e,n,t){const a=typeof t.value=="function"?t.value:t.value.handler;n._clickOutside.lastMousedownWasOutside&&zt(e,n,t)&&setTimeout(()=>{Wt(e,t)&&a&&a(e)},0)}function it(e,n){const t=_t(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const Ta={mounted(e,n){const t=r=>Ia(r,e,n),a=r=>{e._clickOutside.lastMousedownWasOutside=zt(r,e,n)};it(e,r=>{r.addEventListener("click",t,!0),r.addEventListener("mousedown",a,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:a}},unmounted(e,n){e._clickOutside&&(it(e,t=>{var i;if(!t||!((i=e._clickOutside)!=null&&i[n.instance.$.uid]))return;const{onClick:a,onMousedown:r}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",a,!0),t.removeEventListener("mousedown",r,!0)}),delete e._clickOutside[n.instance.$.uid])}};function Ba(e){const{modelValue:n,color:t,...a}=e;return s(kn,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&s("div",U({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},a),null)]})}const La=R({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,opacity:[Number,String],noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...ka(),...W(),...Ve(),..._a(),...oa(),...fa(),...Re(),...ct()},"VOverlay"),_e=z()({name:"VOverlay",directives:{ClickOutside:Ta},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...La()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:a,emit:r}=n;const i=hn(e,"modelValue"),l=x({get:()=>i.value,set:P=>{P&&e.disabled||(i.value=P)}}),{teleportTarget:o}=Oa(x(()=>e.attach||e.contained)),{themeClasses:v}=Me(e),{rtlClasses:c,isRtl:d}=bt(),{hasContent:b,onAfterLeave:w}=Ea(e,l),S=ut(x(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:g,localTop:h,stackStyles:E}=Aa(l,dt(e,"zIndex"),e._disableGlobalStack),{activatorEl:O,activatorRef:C,target:k,targetEl:V,targetRef:T,activatorEvents:A,contentEvents:u,scrimEvents:I}=wa(e,{isActive:l,isTop:h}),{dimensionStyles:K}=Ie(e),Y=xa(),{scopeId:_}=Pa();B(()=>e.disabled,P=>{P&&(l.value=!1)});const f=F(),m=F(),y=F(),{contentStyles:M,updateLocation:L}=la(e,{isRtl:d,contentEl:y,target:k,isActive:l});va(e,{root:f,contentEl:y,targetEl:V,isActive:l,updateLocation:L});function Q(P){r("click:outside",P),e.persistent?ie():l.value=!1}function N(P){return l.value&&g.value&&(!e.scrim||P.target===m.value)}Z&&B(l,P=>{P?window.addEventListener("keydown",H):window.removeEventListener("keydown",H)},{immediate:!0}),ft(()=>{Z&&window.removeEventListener("keydown",H)});function H(P){var $,qe;P.key==="Escape"&&g.value&&(e.persistent?ie():(l.value=!1,($=y.value)!=null&&$.contains(document.activeElement)&&((qe=O.value)==null||qe.focus())))}const re=bn();Fe(()=>e.closeOnBack,()=>{wn(re,P=>{g.value&&l.value?(P(!1),e.persistent?ie():l.value=!1):P()})});const X=F();B(()=>l.value&&(e.absolute||e.contained)&&o.value==null,P=>{if(P){const $=In(f.value);$&&$!==document.scrollingElement&&(X.value=$.scrollTop)}});function ie(){e.noClickAnimation||y.value&&Pn(y.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:Vn})}function Ht(){w(),r("afterLeave")}return G(()=>{var P;return s(ce,null,[(P=t.activator)==null?void 0:P.call(t,{isActive:l.value,props:U({ref:C,targetRef:T},A.value,e.activatorProps)}),Y.value&&b.value&&s(Sn,{disabled:!o.value,to:o.value},{default:()=>[s("div",U({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":l.value,"v-overlay--contained":e.contained},v.value,c.value,e.class],style:[E.value,{"--v-overlay-opacity":e.opacity,top:p(X.value)},e.style],ref:f},_,a),[s(Ba,U({color:S,modelValue:l.value&&!!e.scrim,ref:m},I.value),null),s(te,{appear:!0,persisted:!0,transition:e.transition,target:k.value,onAfterLeave:Ht},{default:()=>{var $;return[se(s("div",U({ref:y,class:["v-overlay__content",e.contentClass],style:[K.value,M.value]},u.value,e.contentProps),[($=t.default)==null?void 0:$.call(t,{isActive:l})]),[[vt,l.value],[Le("click-outside"),{handler:Q,closeConditional:N,include:()=>[O.value]}]])]}})])]})])}),{activatorEl:O,scrimEl:m,target:k,animateClick:ie,contentEl:y,globalTop:g,localTop:h,updateLocation:L}}}),Na=je("span",{class:"d-flex justify-center text-h4 text-bold"},"Sistem Terpadu Arthaya",-1),Ra={class:"d-flex justify-center align-center"},Ma=je("div",{class:"py-4"},null,-1),Fa={__name:"HelloWorld",setup(e){const n=Cn();F("mdi-theme-light-dark");function t(){n.global.name.value=n.global.current.value.dark?"light":"dark",F(n.global.current.value.dark?"mdi-theme-light-dark":"mdi-theme-dark-light")}return(a,r)=>(Ct(),xt(Kn,{class:"fill-height"},{default:D(()=>[s(Ee,{class:"align-center fill-height mx-auto","max-width":"900"},{default:D(()=>[s(He,{class:"mb-4",height:"70",src:Ln}),Na,je("div",Ra,[s(ue,{icon:xn(n).global.current.value.dark?"mdi-weather-sunny":"mdi-weather-night",onClick:t},null,8,["icon"])]),Ma,s(ra,null,{default:D(()=>[s(we,{cols:"4"},{default:D(()=>[s(ke,{"append-icon":"mdi-open-in-new",class:"py-4",color:"surface-variant",href:"https://bankarthaya.com/wp-admin","prepend-icon":"mdi-wordpress",rel:"noopener noreferrer",rounded:"lg",subtitle:"Masuk Untuk melakukan konfigurasi website utama",target:"_blank",title:"Website Utama",variant:"text"},{default:D(()=>[s(_e,{opacity:".06",scrim:"primary",contained:"","model-value":"",persistent:""})]),_:1})]),_:1}),s(we,{cols:"4"},{default:D(()=>[s(ke,{"append-icon":"mdi-open-in-new",class:"py-4",color:"surface-variant",href:"https://timers.bankarthaya.com/","prepend-icon":"mdi-laravel",rel:"noopener noreferrer",rounded:"lg",subtitle:"Dashboard admin Timers",target:"_blank",title:"Website Timers (Cepat Catat)",variant:"text"},{default:D(()=>[s(_e,{opacity:".06",scrim:"primary",contained:"","model-value":"",persistent:""})]),_:1})]),_:1}),s(we,{cols:"4"},{default:D(()=>[s(ke,{"append-icon":"mdi-open-in-new",class:"py-4",color:"surface-variant",href:"https://kma.bankarthaya.com/","prepend-icon":"mdi-laravel",rel:"noopener noreferrer",rounded:"lg",subtitle:"Dashboard admin KMA",target:"_blank",title:"Website KMA",variant:"text"},{default:D(()=>[s(_e,{opacity:".06",scrim:"primary",contained:"","model-value":"",persistent:""})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},ja={__name:"index",setup(e){return(n,t)=>{const a=Fa;return Ct(),xt(a)}}};export{ja as default};
