var tt=Object.defineProperty,nt=Object.defineProperties;var st=Object.getOwnPropertyDescriptors;var he=Object.getOwnPropertySymbols;var ot=Object.prototype.hasOwnProperty,at=Object.prototype.propertyIsEnumerable;var _e=(e,t,n)=>t in e?tt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,E=(e,t)=>{for(var n in t||(t={}))ot.call(t,n)&&_e(e,n,t[n]);if(he)for(var n of he(t))at.call(t,n)&&_e(e,n,t[n]);return e},T=(e,t)=>nt(e,st(t));import{r as oe,m as fe,a as Re,n as rt,i as Ue,d as $,h as z,_ as b,o as u,c as h,b as l,e as _,u as d,t as H,f as N,g as S,w as P,j as y,k as F,v as V,l as L,p as f,q as M,s as ae,x as W,y as Q,z as it,A as k,B as re,C as De,D as ze,E as ie,F as O,G as Z,H as ct,I as Me,J as lt,K as ut,L as dt,M as pt,N as ve,O as ht}from"./plugin-vue_export-helper.567ade92.js";import{l as _t}from"./loading.4fa8fbe5.js";import"./plugin-vue_export-helper.183ad821.js";const ft="modulepreload",me={},vt="/wzw/",Oe=function(t,n){return!n||n.length===0?t():Promise.all(n.map(s=>{if(s=`${vt}${s}`,s in me)return;me[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${a}`))return;const r=document.createElement("link");if(r.rel=o?"stylesheet":ft,o||(r.as="script",r.crossOrigin=""),r.href=s,document.head.appendChild(r),o)return new Promise((c,i)=>{r.addEventListener("load",c),r.addEventListener("error",()=>i(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())},I=typeof window!="undefined";function He(e,t){return`${e}${t}`.replace(/\/+/g,"/")}function We(e){let t=e.replace(/\.html$/,"");if(t.endsWith("/")&&(t+="index"),I){const n="/wzw/";t=t.slice(n.length).replace(/\//g,"_")+".md";const s=__VP_HASH_MAP__[t.toLowerCase()];t=`${n}assets/${t}.${s}.js`}else t=`./${t.slice(1).replace(/\//g,"_")}.md.js`;return t}const je=Symbol(),ge="http://a.com",mt=()=>({path:"/",component:null,data:null});function gt(e,t){const n=oe(mt()),s=typeof window!="undefined";function o(c=s?location.href:"/"){const i=new URL(c,ge);return!i.pathname.endsWith("/")&&!i.pathname.endsWith(".html")&&(i.pathname+=".html",c=i.pathname+i.search+i.hash),s&&(history.replaceState({scrollPosition:window.scrollY},document.title),history.pushState(null,"",c)),r(c)}let a=null;async function r(c,i=0){const p=new URL(c,ge),v=a=p.pathname;try{let m=e(v);if("then"in m&&typeof m.then=="function"&&(m=await m),a===v){a=null;const{default:x,__pageData:w}=m;if(!x)throw new Error(`Invalid route component: ${x}`);n.path=v,n.component=fe(x),n.data=Re(JSON.parse(w)),s&&rt(()=>{if(p.hash&&!i){const C=document.querySelector(decodeURIComponent(p.hash));if(C){$e(C,p.hash);return}}window.scrollTo(0,i)})}}catch(m){m.message.match(/fetch/)||console.error(m),a===v&&(a=null,n.path=v,n.component=t?fe(t):null)}}return s&&(window.addEventListener("click",c=>{const i=c.target.closest("a");if(i){const{href:p,protocol:v,hostname:m,pathname:x,hash:w,target:C}=i,R=window.location,U=x.match(/\.\w+$/);!c.ctrlKey&&!c.shiftKey&&!c.altKey&&!c.metaKey&&C!=="_blank"&&v===R.protocol&&m===R.hostname&&!(U&&U[0]!==".html")&&(c.preventDefault(),x===R.pathname?w&&w!==R.hash&&(history.pushState(null,"",w),$e(i,w,i.classList.contains("header-anchor"))):o(p))}},{capture:!0}),window.addEventListener("popstate",c=>{r(location.href,c.state&&c.state.scrollPosition||0)}),window.addEventListener("hashchange",c=>{c.preventDefault()})),{route:n,go:o}}function $t(){const e=Ue(je);if(!e)throw new Error("useRouter() is called without provider.");return e}function B(){return $t().route}function $e(e,t,n=!1){const s=document.querySelector(".nav-bar").offsetHeight,o=e.classList.contains(".header-anchor")?e:document.querySelector(decodeURIComponent(t));if(o){const a=o.offsetTop-s-15;!n||Math.abs(a-window.scrollY)>window.innerHeight?window.scrollTo(0,a):window.scrollTo({left:0,top:a,behavior:"smooth"})}}const bt=$({name:"VitePressContent",setup(){const e=B();return()=>e.component?z(e.component):null}});const wt={setup(){return{}}},kt={t:"1596458734865",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4898","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"16",height:"16"},yt=l("path",{d:"M68.608 962.56V206.848h740.864V962.56H68.608zM746.496 271.36H131.584v629.248h614.912V271.36zM131.584 262.144","p-id":"4899",fill:"#666"},null,-1),xt=l("path",{d:"M219.136 65.024v116.224h62.976V129.536h614.912v629.248h-60.416v61.952h123.392V65.024z","p-id":"4900",fill:"#666"},null,-1),St=[yt,xt];function Lt(e,t,n,s,o,a){return u(),h("svg",kt,St)}var Ct=b(wt,[["render",Lt]]);const Bt={setup(){return{}}},Et={t:"1596458647160",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2840","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"22",height:"22"},Pt=l("path",{d:"M311.1 739c-6.1 0-12.2-2.3-16.8-7L69.7 507.4l224.6-224.6c9.3-9.3 24.3-9.3 33.6 0s9.3 24.3 0 33.6l-191 191 191 191c9.3 9.3 9.3 24.3 0 33.6-4.6 4.7-10.7 7-16.8 7zM711.5 739c-6.1 0-12.2-2.3-16.8-7-9.3-9.3-9.3-24.3 0-33.6l191-191-191-191c-9.3-9.3-9.3-24.3 0-33.6s24.3-9.3 33.6 0L953 507.4 728.3 732c-4.6 4.7-10.7 7-16.8 7zM418.5 814.7c-2.4 0-4.8-0.4-7.2-1.1-12.5-4-19.4-17.3-15.5-29.8l179.6-567.1c4-12.5 17.3-19.4 29.8-15.5 12.5 4 19.4 17.3 15.5 29.8L441.1 798.1a23.73 23.73 0 0 1-22.6 16.6z",fill:"#666","p-id":"2841"},null,-1),It=[Pt];function At(e,t,n,s,o,a){return u(),h("svg",Et,It)}var Tt=b(Bt,[["render",At]]);const Nt=["href"],Rt=l("div",{style:{width:"16px","margin-left":"6px"}},[l("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 1024 1024","xml:space":"preserve"},[l("g",null,[l("path",{d:"M1004.57 319.408l-468-312c-15.974-9.83-33.022-9.92-49.142 0l-468 312C7.428 327.406 0 341.694 0 355.978v311.998c0 14.286 7.428 28.572 19.43 36.572l468 312.044c15.974 9.83 33.022 9.92 49.142 0l468-312.044c12-7.998 19.43-22.286 19.43-36.572V355.978c-0.002-14.284-7.43-28.572-19.432-36.57zM556 126.262l344.572 229.716-153.714 102.858L556 331.406V126.262z m-88 0v205.144l-190.858 127.43-153.714-102.858L468 126.262zM88 438.264l110.286 73.714L88 585.692v-147.428z m380 459.43L123.428 667.978l153.714-102.858L468 692.55v205.144z m44-281.716l-155.43-104 155.43-104 155.43 104-155.43 104z m44 281.716V692.55l190.858-127.43 153.714 102.858L556 897.694z m380-312.002l-110.286-73.714L936 438.264v147.428z","p-id":"2793",fill:"#555"})])])],-1),Ut=[Rt],Dt=$({name:"OnlineEdit",props:{content:null,importMap:null},setup(e){const t=e,n="https://sfc.vuejs.org/",s=_(()=>{const o={"App.vue":t.content};if(t.importMap)try{o["import-map.json"]=JSON.stringify({imports:JSON.parse(decodeURIComponent(t.importMap))})}catch{}return`${n}#${btoa(unescape(encodeURIComponent(JSON.stringify(o))))}`});return(o,a)=>(u(),h("a",{href:d(s),style:{display:"flex","align-items":"center"},target:"_blank"},Ut,8,Nt))}});function zt(e){const t=oe({showTip:!1});function n(){navigator.clipboard.writeText(e),t.showTip=!0,setTimeout(()=>{t.showTip=!1},5*1e3)}return T(E({},H(t)),{copyCode:n})}const be=/<script.*>([\s\S]+)<\/script>/,we=/<style>([\s\S]+)<\/style>/,ke=/<template>([\s\S]+)<\/template>/,te=e=>t=>{const n=t.match(e);return n&&n[1].trim()},ye=e=>JSON.parse(decodeURIComponent(e));function Mt(e,t,n){const s=oe({expand:!1}),o=()=>s.expand=!s.expand,a=_(()=>{const r=te(be)(e)||"",c=te(we)(e)||"",i=te(ke)(e)||e.replace(be,"").replace(we,"").replace(ke,"").trim(),p=ye(t),v=ye(n);return{js:r,css:c,html:i,jsLibs:p,cssLibs:v}});return T(E({},H(s)),{toggleExpand:o,parsedCode:a})}const Ot={props:{componentName:String,htmlStr:String,codeStr:String,importMap:String,language:{default:"vue",type:String},platforms:{default:()=>["codepen"],type:Array},jsLibsStr:{type:String,default:"[]"},cssLibsStr:{type:String,default:"[]"},title:{type:String,default:""},desc:{type:String,default:""}},components:{copySvg:Ct,codeSvg:Tt,OnlineEdit:Dt},setup(e){const t=_(()=>{var i;return decodeURIComponent((i=e.htmlStr)!=null?i:"")}),n=_(()=>{var i;return decodeURIComponent((i=e.codeStr)!=null?i:"")}),{showTip:s,copyCode:o}=zt(n.value),{expand:a,toggleExpand:r,parsedCode:c}=Mt(n.value,e.jsLibsStr,e.cssLibsStr);return{expand:a,toggleExpand:r,decodedHtmlStr:t,parsedCode:c,showTip:s,copyCode:o,decodedCodeStr:n}}},Ht={class:"demo-slot"},Wt={class:"demo-title-desc"},jt={class:"demo-title"},Ft={class:"demo-desc"},Vt={class:"demo-actions"},qt={class:"demo-platforms"},Gt={class:"demo-buttons"},Jt={class:"demo-actions-copy"},Kt={class:"demo-actions-tip"},Yt=["innerHTML"];function Xt(e,t,n,s,o,a){const r=N("OnlineEdit"),c=N("copySvg"),i=N("codeSvg"),p=N("ClientOnly");return u(),S(p,null,{default:P(()=>[l("article",ae(e.$attrs,{class:"demo"}),[l("div",Ht,[y(e.$slots,"default")]),F(l("div",Wt,[l("span",jt,L(n.title),1),l("span",Ft,L(n.desc),1)],512),[[V,n.title||n.desc]]),l("div",Vt,[l("div",qt,[f(r,{content:s.decodedCodeStr,importMap:n.importMap},null,8,["content","importMap"])]),l("div",Gt,[l("div",Jt,[F(l("span",Kt,"\u590D\u5236\u6210\u529F!",512),[[V,s.showTip]]),F(f(c,{onClick:s.copyCode,title:"\u590D\u5236"},null,8,["onClick"]),[[V,!s.showTip]])]),f(i,{class:"demo-actions-expand",onClick:t[0]||(t[0]=v=>s.toggleExpand()),title:"\u5C55\u5F00"})])]),F(l("div",{innerHTML:s.decodedHtmlStr,class:M(`language-${n.language} extra-class`)},null,10,Yt),[[V,s.expand]])],16)]),_:3})}var Qt=b(Ot,[["render",Xt]]);const Zt=$({setup(e,{slots:t}){const n=W(!1);return Q(()=>{n.value=!0}),()=>n.value&&t.default?t.default():null}});function en(e,t,n,s){Object.defineProperties(e.config.globalProperties,{$site:{get(){return t.value}},$siteByRoute:{get(){return n.value}},$themeConfig:{get(){return n.value.themeConfig}},$page:{get(){return s.value}},$frontmatter:{get(){return s.value.frontmatter}},$lang:{get(){return n.value.lang}},$localePath:{get(){const{locales:o}=t.value,{lang:a}=n.value,r=Object.keys(o).find(c=>o[c].lang===a);return o&&r||"/"}},$title:{get(){return s.value.title?s.value.title+" | "+n.value.title:n.value.title}},$description:{get(){return s.value.description||n.value.description}},$withBase:{value(o){return He(t.value.base,o)}}})}function tn(e){e.component("Content",bt),e.component("ClientOnly",Zt),e.component("Demo",Qt),e.component("Debug",()=>null)}var nn='{"lang":"en-US","title":"WUI","description":"WUI","base":"/wzw/","head":[],"themeConfig":{"nav":[{"text":"demo","link":"/math"}],"lang":"zh-CN","locales":{"/":{"lang":"zh-CN","title":"WUI","description":"WUI","label":"\u4E2D\u6587","selectText":"\u8BED\u8A00","nav":[{"text":"\u6307\u5357","link":"/"}],"sidebar":[{"text":"Basic \u57FA\u7840\u7EC4\u4EF6","children":[{"text":"Button","link":"/components/button/"},{"text":"Icon","link":"/components/icon/"}]}]},"/en/":{"lang":"en-US","title":"WUI","description":"WUI","label":"English","selectText":"Languages","nav":[{"text":"Guide","link":"/"}],"sidebar":[{"text":"Getting Started","link":"/en/"},{"text":"Button","link":"/en/components/button/"},{"text":"Icon","link":"/components/icon/"}]}},"prevLink":true,"nextLink":true},"locales":{},"customData":{}}';const J=W(sn(nn));function ee(){return J}function sn(e){return Re(JSON.parse(e))}const on=typeof window!="undefined";function an(e,t){t.sort((n,s)=>{const o=s.split("/").length-n.split("/").length;return o!==0?o:s.length-n.length});for(const n of t)if(e.startsWith(n))return n}function xe(e,t){const n=an(t,Object.keys(e));return n?e[n]:void 0}function rn(e,t){t=cn(e,t);const n=xe(e.locales||{},t)||{},s=xe(e.themeConfig&&e.themeConfig.locales||{},t)||{};return T(E(E({},e),n),{themeConfig:T(E(E({},e.themeConfig),s),{locales:{}}),locales:{}})}function cn(e,t){if(!on)return t;const n=e.base,s=n.endsWith("/")?n.slice(0,-1):n;return t.slice(s.length)}function A(e){const t=e||B();return _(()=>rn(J.value,t.path))}function j(e){const t=e||B();return _(()=>t.data)}function ln(e,t){const n=Array.from(document.querySelectorAll("meta"));let s=!0;const o=a=>{if(s){s=!1;return}n.forEach(r=>document.head.removeChild(r)),n.length=0,a&&a.length&&a.forEach(r=>{const c=un(r);document.head.appendChild(c),n.push(c)})};it(()=>{const a=e.data,r=t.value,c=a&&a.title,i=a&&a.description,p=a&&a.frontmatter.head;document.title=(c?c+" | ":"")+r.title,o([["meta",{charset:"utf-8"}],["meta",{name:"viewport",content:"width=device-width,initial-scale=1"}],["meta",{name:"description",content:i||r.description}],...r.head,...p&&pn(p)||[]])})}function un([e,t,n]){const s=document.createElement(e);for(const o in t)s.setAttribute(o,t[o]);return n&&(s.innerHTML=n),s}function dn(e){return e[0]==="meta"&&e[1]&&e[1].name==="description"}function pn(e){return e.filter(t=>!dn(t))}const hn=/#.*$/,_n=/(index)?\.(md|html)$/,K=/\/$/,fn=/^[a-z]+:/i;function vn(e){return e==null}function ce(e){return Array.isArray(e)}function le(e){return fn.test(e)}function mn(e,t){if(t===void 0)return!1;const n=Se(`/${e.data.relativePath}`),s=Se(t);return n===s}function Se(e){return decodeURI(e).replace(hn,"").replace(_n,"")}function gn(e,t){const n=e.endsWith("/"),s=t.startsWith("/");return n&&s?e.slice(0,-1)+t:!n&&!s?`${e}/${t}`:e+t}function se(e){return/^\//.test(e)?e:`/${e}`}function Fe(e){return e.replace(/(index)?(\.(md|html))?$/,"")||"/"}function $n(e){return e===!1||e==="auto"||ce(e)}function bn(e){return e.children!==void 0}function wn(e){return ce(e)?e.length===0:!e}function ue(e,t){if($n(e))return e;t=se(t);for(const n in e)if(t.startsWith(se(n)))return e[n];return"auto"}function Ve(e){return e.reduce((t,n)=>(n.link&&t.push({text:n.text,link:Fe(n.link)}),bn(n)&&(t=[...t,...Ve(n.children)]),t),[])}const kn={},yn=["href","aria-label"],xn=["src"];function Sn(e,t){return u(),h("a",{class:"nav-bar-title",href:e.$withBase(e.$localePath),"aria-label":`${e.$siteByRoute.title}, back to home`},[e.$themeConfig.logo?(u(),h("img",{key:0,class:"logo",src:e.$withBase(e.$themeConfig.logo),alt:"Logo"},null,8,xn)):k("",!0),re(" "+L(e.$site.title),1)],8,yn)}var Ln=b(kn,[["render",Sn],["__scopeId","data-v-1b41c078"]]);function Cn(){const e=B(),t=ee();return _(()=>{const s=t.value.themeConfig.locales;if(!s)return null;const o=Object.keys(s);if(o.length<=1)return null;const a=I?t.value.base:"/",r=a.endsWith("/")?a.slice(0,-1):a,c=e.path.slice(r.length),i=o.find(w=>w==="/"?!1:c.startsWith(w)),p=i?c.substring(i.length-1):c,v=o.map(w=>{const C=w.endsWith("/")?w.slice(0,-1):w;return{text:s[w].label,link:`${C}${p}`}}),m=i||"/";return{text:s[m].selectText?s[m].selectText:"Languages",items:v}})}const Bn=["GitHub","GitLab","Bitbucket"].map(e=>[e,new RegExp(e,"i")]);function En(){const e=A();return _(()=>{const t=e.value.themeConfig,n=t.docsRepo||t.repo;if(!n)return null;const s=Pn(n);return{text:In(s,t.repoLabel),link:s}})}function Pn(e){return/^https?:/.test(e)?e:`https://github.com/${e}`}function In(e,t){if(t)return t;const n=e.match(/^https?:\/\/[^/]+/);if(!n)return"Source";const s=Bn.find(([o,a])=>a.test(n[0]));return s&&s[0]?s[0]:"Source"}function An(){const e=ee();function t(n){return He(e.value.base,n)}return{withBase:t}}function qe(e){const t=B(),{withBase:n}=An(),s=le(e.value.link);return{props:_(()=>{const a=Le(`/${t.data.relativePath}`);let r=!1;if(e.value.activeMatch)r=new RegExp(e.value.activeMatch).test(a);else{const c=Le(n(e.value.link));r=c==="/"?c===a:a.startsWith(c)}return{class:{active:r,isExternal:s},href:s?e.value.link:n(e.value.link),target:e.value.target||s?"_blank":null,rel:e.value.rel||s?"noopener noreferrer":null,"aria-label":e.value.ariaLabel}}),isExternal:s}}function Le(e){return e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\.(html|md)$/,"").replace(/\/index$/,"/")}const Tn={},Nn={class:"icon outbound",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},Rn=l("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"},null,-1),Un=l("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"},null,-1),Dn=[Rn,Un];function zn(e,t){return u(),h("svg",Nn,Dn)}var de=b(Tn,[["render",zn]]);const Mn={class:"nav-link"},On=$({name:"NavLink",props:{item:null},setup(e){const n=H(e),{props:s,isExternal:o}=qe(n.item);return(a,r)=>(u(),h("div",Mn,[l("a",ae({class:"item"},d(s)),[re(L(e.item.text)+" ",1),d(o)?(u(),S(de,{key:0})):k("",!0)],16)]))}});var Ce=b(On,[["__scopeId","data-v-1f9ff7fe"]]);const Hn=e=>(De("data-v-4bc78d6c"),e=e(),ze(),e),Wn={class:"nav-dropdown-link-item"},jn=Hn(()=>l("span",{class:"arrow"},null,-1)),Fn={class:"text"},Vn={class:"icon"},qn=$({name:"NavDropdownLinkItem",props:{item:null},setup(e){const n=H(e),{props:s,isExternal:o}=qe(n.item);return(a,r)=>(u(),h("div",Wn,[l("a",ae({class:"item"},d(s)),[jn,l("span",Fn,L(e.item.text),1),l("span",Vn,[d(o)?(u(),S(de,{key:0})):k("",!0)])],16)]))}});var Gn=b(qn,[["__scopeId","data-v-4bc78d6c"]]);const Jn=["aria-label"],Kn={class:"button-text"},Yn={class:"dialog"},Xn=$({name:"NavDropdownLink",props:{item:null},setup(e){const t=B(),n=W(!1);ie(()=>t.path,()=>{n.value=!1});function s(){n.value=!n.value}return(o,a)=>(u(),h("div",{class:M(["nav-dropdown-link",{open:n.value}])},[l("button",{class:"button","aria-label":e.item.ariaLabel,onClick:s},[l("span",Kn,L(e.item.text),1),l("span",{class:M(["button-arrow",n.value?"down":"right"])},null,2)],8,Jn),l("ul",Yn,[(u(!0),h(O,null,Z(e.item.items,r=>(u(),h("li",{key:r.text,class:"dialog-item"},[f(Gn,{item:r},null,8,["item"])]))),128))])],2))}});var Be=b(Xn,[["__scopeId","data-v-187d37a9"]]);const Qn={key:0,class:"nav-links"},Zn={key:1,class:"item"},es={key:2,class:"item"},ts=$({name:"NavLinks",setup(e){const t=A(),n=Cn(),s=En(),o=_(()=>a.value||s.value),a=_(()=>t.value.themeConfig.nav);return(r,c)=>d(o)?(u(),h("nav",Qn,[d(a)?(u(!0),h(O,{key:0},Z(d(a),i=>(u(),h("div",{key:i.text,class:"item"},[i.items?(u(),S(Be,{key:0,item:i},null,8,["item"])):(u(),S(Ce,{key:1,item:i},null,8,["item"]))]))),128)):k("",!0),d(n)?(u(),h("div",Zn,[f(Be,{item:d(n)},null,8,["item"])])):k("",!0),d(s)?(u(),h("div",es,[f(Ce,{item:d(s)},null,8,["item"])])):k("",!0)])):k("",!0)}});var Ge=b(ts,[["__scopeId","data-v-3aa21775"]]);const ns={emits:["toggle"]},ss=l("svg",{class:"icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"},[l("path",{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z",class:""})],-1),os=[ss];function as(e,t,n,s,o,a){return u(),h("div",{class:"sidebar-button",onClick:t[0]||(t[0]=r=>e.$emit("toggle"))},os)}var rs=b(ns,[["render",as]]);const is=e=>(De("data-v-a9edc5f2"),e=e(),ze(),e),cs={class:"nav-bar"},ls=is(()=>l("div",{class:"flex-grow"},null,-1)),us={class:"nav"},ds=$({name:"NavBar",emits:["toggle"],setup(e){return(t,n)=>(u(),h("header",cs,[f(rs,{onToggle:n[0]||(n[0]=s=>t.$emit("toggle"))}),f(Ln),ls,l("div",us,[f(Ge)]),y(t.$slots,"search",{},void 0,!0)]))}});var ps=b(ds,[["__scopeId","data-v-a9edc5f2"]]);function hs(){let e=null,t=null;const n=gs(s,300);function s(){const r=_s(),c=fs(r);for(let i=0;i<c.length;i++){const p=c[i],v=c[i+1],[m,x]=ms(i,p,v);if(m){history.replaceState(null,document.title,x||" "),o(x);return}}}function o(r){if(a(t),a(e),t=document.querySelector(`.sidebar a[href="${r}"]`),!t)return;t.classList.add("active");const c=t.closest(".sidebar-links > ul > li");c&&c!==t.parentElement?(e=c.querySelector("a"),e&&e.classList.add("active")):e=null}function a(r){r&&r.classList.remove("active")}Q(()=>{s(),window.addEventListener("scroll",n)}),ct(()=>{o(decodeURIComponent(location.hash))}),Me(()=>{window.removeEventListener("scroll",n)})}function _s(){return[].slice.call(document.querySelectorAll(".sidebar a.sidebar-link-item"))}function fs(e){return[].slice.call(document.querySelectorAll(".header-anchor")).filter(t=>e.some(n=>n.hash===t.hash))}function vs(){return document.querySelector(".nav-bar").offsetHeight}function Ee(e){const t=vs();return e.parentElement.offsetTop-t-15}function ms(e,t,n){const s=window.scrollY;return e===0&&s===0?[!0,null]:s<Ee(t)?[!1,null]:!n||s<Ee(n)?[!0,decodeURIComponent(t.hash)]:[!1,null]}function gs(e,t){let n,s=!1;return()=>{n&&clearTimeout(n),s?n=setTimeout(e,t):(e(),s=!0,setTimeout(()=>{s=!1},t))}}function $s(){const e=B(),t=A();return hs(),_(()=>{const n=e.data.headers,s=e.data.frontmatter.sidebar,o=e.data.frontmatter.sidebarDepth;if(s===!1)return[];if(s==="auto")return Pe(n,o);const a=ue(t.value.themeConfig.sidebar,e.data.relativePath);return a===!1?[]:a==="auto"?Pe(n,o):a})}function Pe(e,t){const n=[];if(e===void 0)return[];let s;return e.forEach(({level:o,title:a,slug:r})=>{if(o-1>t)return;const c={text:a,link:`#${r}`};o===2?(s=c,n.push(c)):s&&(s.children||(s.children=[])).push(c)}),n}const Je=e=>{const t=B(),n=ee();t.data.headers;const s=e.item.text,o=bs(n.value.base,e.item.link),a=e.item.children,r=mn(t,e.item.link),c=ws(r,a);return z("li",{class:"sidebar-link"},[z(o?"a":"p",{class:{"sidebar-link-item":!0,active:r},href:o},s),c])};function bs(e,t){return t===void 0||t.startsWith("#")?t:gn(e,t)}function ws(e,t,n){return t&&t.length>0?z("ul",{class:"sidebar-links"},t.map(s=>z(Je,{item:s}))):null}const ks={key:0,class:"sidebar-links"},ys=$({name:"SideBarLinks",setup(e){const t=$s();return(n,s)=>d(t).length>0?(u(),h("ul",ks,[(u(!0),h(O,null,Z(d(t),o=>(u(),S(d(Je),{key:o.text,item:o},null,8,["item"]))),128))])):k("",!0)}});const xs={setup(){const e=B();return{slugs:_(()=>{var o;const n=((o=e.data.headers)!=null?o:[]).filter(a=>a.level>1);let s=10;for(const{level:a}of n)s>a&&(s=a);return n.filter(a=>a.level<s+2).map(a=>T(E({},a),{link:`#${a.slug}`,level:a.level===s?1:2}))})}}},Ss={class:"right-slug"},Ls=["href"];function Cs(e,t,n,s,o,a){return u(),h("ul",Ss,[(u(!0),h(O,null,Z(s.slugs,({level:r,link:c,title:i})=>(u(),h("li",{class:M(`slug-item level-${r}`),key:c},[l("a",{href:c,class:"link"},L(i),9,Ls)],2))),128))])}var Bs=b(xs,[["render",Cs],["__scopeId","data-v-0b0f9f60"]]);const Es=$({name:"SideBar",props:{open:{type:Boolean,required:!0}},setup(e){return(t,n)=>(u(),h(O,null,[l("aside",{class:M(["sidebar hover-scrollbar",{open:e.open}])},[f(Ge,{class:"nav"}),y(t.$slots,"sidebar-top",{},void 0,!0),f(ys),y(t.$slots,"sidebar-bottom",{},void 0,!0)],2),f(Bs)],64))}});var Ps=b(Es,[["__scopeId","data-v-8ae47126"]]);const Is=/bitbucket.org/;function As(){const e=A(),t=j(),n=_(()=>{const o=vn(t.value.frontmatter.editLink)?e.value.themeConfig.editLinks:t.value.frontmatter.editLink,{repo:a,docsDir:r="",docsBranch:c="master",docsRepo:i=a}=e.value.themeConfig,{relativePath:p}=t.value;return!o||!p||!a?null:Ts(a,i,r,c,p)}),s=_(()=>e.value.themeConfig.editLinkText||"Edit this page");return{url:n,text:s}}function Ts(e,t,n,s,o){return Is.test(e)?Rs(e,t,n,s,o):Ns(e,t,n,s,o)}function Ns(e,t,n,s,o){return(le(t)?t:`https://github.com/${t}`).replace(K,"")+`/edit/${s}/`+(n?n.replace(K,"")+"/":"")+o}function Rs(e,t,n,s,o){return(le(t)?t:e).replace(K,"")+`/src/${s}/`+(n?n.replace(K,"")+"/":"")+o+`?mode=edit&spa=0&at=${s}&fileviewer=file-view-default`}const Us={class:"edit-link"},Ds=["href"],zs=$({name:"EditLink",setup(e){const{url:t,text:n}=As();return(s,o)=>(u(),h("div",Us,[d(t)?(u(),h("a",{key:0,class:"link",href:d(t),target:"_blank",rel:"noopener noreferrer"},[re(L(d(n))+" ",1),f(de,{class:"icon"})],8,Ds)):k("",!0)]))}});var Ms=b(zs,[["__scopeId","data-v-45c7bd43"]]);const Os={key:0,class:"last-updated"},Hs={class:"prefix"},Ws={class:"datetime"},js=$({name:"LastUpdated",setup(e){const t=A(),n=j(),s=_(()=>{const r=t.value.themeConfig.lastUpdated;return r!==void 0&&r!==!1}),o=_(()=>{const r=t.value.themeConfig.lastUpdated;return r===!0?"Last Updated":r}),a=W("");return Q(()=>{a.value=new Date(n.value.lastUpdated).toLocaleString("en-US")}),(r,c)=>d(s)?(u(),h("p",Os,[l("span",Hs,L(d(o))+":",1),l("span",Ws,L(a.value),1)])):k("",!0)}});var Fs=b(js,[["__scopeId","data-v-bfa9194c"]]);const Vs={class:"page-footer"},qs={class:"edit"},Gs={class:"updated"},Js=$({name:"PageFooter",setup(e){return(t,n)=>(u(),h("footer",Vs,[l("div",qs,[f(Ms)]),l("div",Gs,[f(Fs)])]))}});var Ks=b(Js,[["__scopeId","data-v-4e7d7f0d"]]);function Ys(){const e=A(),t=j(),n=_(()=>Fe(se(t.value.relativePath))),s=_(()=>{const i=ue(e.value.themeConfig.sidebar,n.value);return ce(i)?Ve(i):[]}),o=_(()=>s.value.findIndex(i=>i.link===n.value)),a=_(()=>{if(e.value.themeConfig.nextLinks!==!1&&o.value>-1&&o.value<s.value.length-1)return s.value[o.value+1]}),r=_(()=>{if(e.value.themeConfig.prevLinks!==!1&&o.value>0)return s.value[o.value-1]}),c=_(()=>!!a.value||!!r.value);return{next:a,prev:r,hasLinks:c}}const Xs={},Qs={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Zs=l("path",{d:"M19,11H7.4l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0l-7,7c-0.1,0.1-0.2,0.2-0.2,0.3c-0.1,0.2-0.1,0.5,0,0.8c0.1,0.1,0.1,0.2,0.2,0.3l7,7c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L7.4,13H19c0.6,0,1-0.4,1-1S19.6,11,19,11z"},null,-1),eo=[Zs];function to(e,t){return u(),h("svg",Qs,eo)}var no=b(Xs,[["render",to]]);const so={},oo={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},ao=l("path",{d:"M19.9,12.4c0.1-0.2,0.1-0.5,0-0.8c-0.1-0.1-0.1-0.2-0.2-0.3l-7-7c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l5.3,5.3H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h11.6l-5.3,5.3c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l7-7C19.8,12.6,19.9,12.5,19.9,12.4z"},null,-1),ro=[ao];function io(e,t){return u(),h("svg",oo,ro)}var co=b(so,[["render",io]]);const lo={key:0,class:"next-and-prev-link"},uo={class:"container"},po={class:"prev"},ho=["href"],_o={class:"text"},fo={class:"next"},vo=["href"],mo={class:"text"},go=$({name:"NextAndPrevLinks",setup(e){const{hasLinks:t,prev:n,next:s}=Ys();return(o,a)=>d(t)?(u(),h("div",lo,[l("div",uo,[l("div",po,[d(n)?(u(),h("a",{key:0,class:"link",href:o.$withBase(d(n).link)},[f(no,{class:"icon icon-prev"}),l("span",_o,L(d(n).text),1)],8,ho)):k("",!0)]),l("div",fo,[d(s)?(u(),h("a",{key:0,class:"link",href:o.$withBase(d(s).link)},[l("span",mo,L(d(s).text),1),f(co,{class:"icon icon-next"})],8,vo)):k("",!0)])])])):k("",!0)}});var $o=b(go,[["__scopeId","data-v-9cf85ac0"]]);const bo={class:"page"},wo={class:"container hover-scrollbar"},ko={class:"content"},yo=$({name:"Page",setup(e){return(t,n)=>{const s=N("Content");return u(),h("main",bo,[l("div",wo,[y(t.$slots,"top",{},void 0,!0),l("div",ko,[f(s)]),f(Ks),f($o),y(t.$slots,"bottom",{},void 0,!0)])])}}});var xo=b(yo,[["__scopeId","data-v-07bae5a0"]]);const So={key:0,id:"ads-container"},Lo=$({name:"Layout",setup(e){const t=lt(()=>Oe(()=>import("./Home.f69e4f8a.js"),["assets/Home.f69e4f8a.js","assets/plugin-vue_export-helper.567ade92.js","assets/loading.4fa8fbe5.js","assets/plugin-vue_export-helper.183ad821.js"])),n=()=>null,s=n,o=n,a=n,r=B(),c=ee(),i=A(),p=_(()=>c.value.themeConfig),v=j(),m=_(()=>!!r.data.frontmatter.customLayout),x=_(()=>!!r.data.frontmatter.home),w=_(()=>{const{themeConfig:g}=i.value,{frontmatter:D}=r.data;return D.navbar===!1||g.navbar===!1?!1:c.value.title||g.logo||g.repo||g.nav}),C=W(!1),R=_(()=>{const{frontmatter:g}=r.data;if(g.home||g.sidebar===!1)return!1;const{themeConfig:D}=i.value;return!wn(ue(D.sidebar,r.data.relativePath))}),U=g=>{C.value=typeof g=="boolean"?g:!C.value},Xe=U.bind(null,!1);ie(r,Xe);const Qe=_(()=>[{"no-navbar":!w.value,"sidebar-open":C.value,"no-sidebar":!R.value}]);return(g,D)=>{const Ze=N("Content"),et=N("Debug");return u(),h(O,null,[l("div",{class:M(["theme",d(Qe)])},[d(w)?(u(),S(ps,{key:0,onToggle:U},{search:P(()=>[y(g.$slots,"navbar-search",{},()=>[d(p).algolia?(u(),S(d(a),{key:0,options:d(p).algolia},null,8,["options"])):k("",!0)])]),_:3})):k("",!0),f(Ps,{open:C.value},{"sidebar-top":P(()=>[y(g.$slots,"sidebar-top")]),"sidebar-bottom":P(()=>[y(g.$slots,"sidebar-bottom")]),_:3},8,["open"]),l("div",{class:"sidebar-mask",onClick:D[0]||(D[0]=ea=>U(!1))}),d(m)?(u(),S(Ze,{key:1})):d(x)?(u(),S(d(t),{key:2},{hero:P(()=>[y(g.$slots,"home-hero")]),features:P(()=>[y(g.$slots,"home-features")]),footer:P(()=>[y(g.$slots,"home-footer")]),_:3})):(u(),S(xo,{key:3},{top:P(()=>[y(g.$slots,"page-top-ads",{},()=>[d(p).carbonAds&&d(p).carbonAds.carbon?(u(),h("div",So,[(u(),S(d(s),{key:"carbon"+d(v).relativePath,code:d(p).carbonAds.carbon,placement:d(p).carbonAds.placement},null,8,["code","placement"]))])):k("",!0)]),y(g.$slots,"page-top")]),bottom:P(()=>[y(g.$slots,"page-bottom"),y(g.$slots,"page-bottom-ads",{},()=>[d(p).carbonAds&&d(p).carbonAds.custom?(u(),S(d(o),{key:"custom"+d(v).relativePath,code:d(p).carbonAds.custom,placement:d(p).carbonAds.placement},null,8,["code","placement"])):k("",!0)])]),_:3}))],2),f(et)],64)}}}),Co={class:"theme"},Bo=l("h1",null,"404",-1),Eo=["href"],Po=$({name:"NotFound",setup(e){const t=["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."];function n(){return t[Math.floor(Math.random()*t.length)]}return(s,o)=>(u(),h("div",Co,[Bo,l("blockquote",null,L(n()),1),l("a",{href:s.$site.base,"aria-label":"go to home"},"Take me home.",8,Eo)]))}}),Io={Layout:Lo,NotFound:Po},Ao={type:{type:String,default:""},plain:Boolean,round:Boolean,circle:Boolean,disabled:Boolean,link:Boolean,text:Boolean,bg:Boolean,color:String,loading:Boolean,loadingIcon:{type:Object,default:()=>_t},nativeType:{type:String,default:"button"},icon:{type:Object},size:{type:String,default:""}},To={size:{type:String,default:""},type:{type:String,default:""}},Ke=Symbol("w-button-group");function q(e,t,n){let s=e;return t&&(s+=`__${t}`),n&&(s+=`--${n}`),s}function pe(e,t=!1){const n=t?`.w-${e}`:`w-${e}`;return{b:()=>q(n),e:i=>i?q(n,i):"",m:i=>i?q(n,"",i):"",em:(i,p)=>i&&p?q(n,i,p):"",is:i=>i||""}}function No(e,t){const n=pe("button"),s=Ue(Ke,null),o=_(()=>(s==null?void 0:s.size.value)||e.size),a=_(()=>(s==null?void 0:s.type.value)||e.type),r=_(()=>({[n.b()]:!0,[n.m(o.value)]:o.value,[n.m(a.value)]:a.value,[n.is("is-plain")]:e.plain,[n.is("is-round")]:e.round,[n.is("is-circle")]:e.circle,[n.is("is-disabled")]:e.disabled,[n.is("is-link")]:e.link,[n.is("is-text")]:e.text,[n.is("is-has-bg")]:e.bg,[n.is("is-loading")]:e.loading})),c=_(()=>({[n.is("is-loading")]:e.loading}));return{classes:r,iconClass:c}}const Ro={color:{type:String,default:""},size:{type:[Number,String],default:""}};function Uo(e,t){const n=pe("icon");return{classes:_(()=>({[n.b()]:!0}))}}var Ie;const Do=typeof window!="undefined",zo=e=>typeof e=="number";Do&&((Ie=window==null?void 0:window.navigator)==null?void 0:Ie.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Mo(e,t="px"){if(!e)return"";if(ut(e))return e;if(zo(e))return`${e}${t}`;console.warn("\u7ED1\u5B9A\u503C\u5FC5\u987B\u662F\u5B57\u7B26\u4E32\u6216\u6570\u5B57")}const Oo=e=>e===void 0;var Y=$({name:"WIcon",props:Ro,setup(e,t){const{classes:n}=Uo(),s=_(()=>({fontSize:Oo(e.size)?void 0:Mo(e.size),"--color":e.color}));return()=>{var o,a;return f("i",{class:[n.value],style:s.value},[(a=(o=t.slots).default)==null?void 0:a.call(o)])}}}),Ho={install(e){e.component(Y.name,Y)}};function Ae(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!dt(e)}var Te=$({name:"WButton",props:Ao,setup(e,t){const{classes:n,iconClass:s}=No(e),{icon:o,disabled:a,loading:r,nativeType:c,loadingIcon:i}=H(e),p=()=>{console.log(e)};return()=>{let v,m;return f("button",{type:c.value,disabled:a.value||r.value,"aria-disabled":a.value||r.value,class:n.value,onClick:p},[t.slots.loading&&t.slots.loading(),!t.slots.loading&&r.value&&i.value&&f(Y,{class:s.value},Ae(v=i.value.render())?v:{default:()=>[v]}),(o==null?void 0:o.value)&&f(Y,null,Ae(m=o.value.render())?m:{default:()=>[m]}),t.slots.default&&f("span",{class:"button-content"},[t.slots.default()])])}}});var Ne=$({name:"WButtonGroup",props:To,setup(e,{slots:t}){const n=pe("button-group");return pt(Ke,{size:ve(e,"size"),type:ve(e,"type")}),()=>f("div",{class:n.b()},[t.default&&t.default()])}}),Wo={install(e){e.component(Te.name,Te),e.component(Ne.name,Ne)}};const jo=[Wo,Ho];var Fo={version:"1.0.0-rc.0",install(e){jo.forEach(t=>e.use(t))}};var X=T(E({},Io),{enhanceApp({app:e,router:t,siteData:n}){e.use(Fo)}});const ne=new Set,Ye=()=>document.createElement("link"),Vo=e=>{const t=Ye();t.rel="prefetch",t.href=e,document.head.appendChild(t)},qo=e=>{const t=new XMLHttpRequest;t.open("GET",e,t.withCredentials=!0),t.send()};let G;const Go=I&&(G=Ye())&&G.relList&&G.relList.supports&&G.relList.supports("prefetch")?Vo:qo;function Jo(){if(!I||!window.IntersectionObserver)return;let e;if((e=navigator.connection)&&(e.saveData||/2g/.test(e.effectiveType)))return;const t=window.requestIdleCallback||setTimeout;let n=null;const s=()=>{n&&n.disconnect(),n=new IntersectionObserver(a=>{a.forEach(r=>{if(r.isIntersecting){const c=r.target;n.unobserve(c);const{pathname:i}=c;if(!ne.has(i)){ne.add(i);const p=We(i);Go(p)}}})}),t(()=>{document.querySelectorAll("#app a").forEach(a=>{const{target:r,hostname:c,pathname:i}=a,p=i.match(/\.\w+$/);p&&p[0]!==".html"||r!=="_blank"&&c===location.hostname&&(i!==location.pathname?n.observe(a):ne.add(i))})})};Q(s);const o=B();ie(()=>o.path,s),Me(()=>{n&&n.disconnect()})}const Ko=X.NotFound||(()=>"404 Not Found"),Yo={name:"VitePressApp",setup(){return Jo(),()=>z(X.Layout)}};function Xo(){const e=Zo(),t=Qo();t.provide(je,e);const n=A(e.route),s=j(e.route);return I&&ln(e.route,n),en(t,J,n,s),tn(t),X.enhanceApp&&X.enhanceApp({app:t,router:e,siteData:J}),{app:t,router:e}}function Qo(){return ht(Yo)}function Zo(){let e=I,t;return gt(n=>{let s=We(n);return e&&(t=s),(e||t===s)&&(s=s.replace(/\.js$/,".lean.js")),I?(e=!1,Oe(()=>import(s),[])):require(s)},Ko)}if(I){const{app:e,router:t}=Xo();t.go().then(()=>{e.mount("#app")})}export{Ce as N,A as a,Xo as createApp,j as u};
