(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(5970)}])},9749:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(6495).Z,n=r(2648).Z,a=r(1598).Z,s=r(7273).Z,o=a(r(7294)),l=n(r(3121)),c=r(2675),d=r(139),u=r(8730);r(7238);var f=n(r(9824));let m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,r,n,a,s,o){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===r&&s(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,a=!1;n.current(i({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>a,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{a=!0,t.stopPropagation()}}))}(null==a?void 0:a.current)&&a.current(e)}})}let x=o.forwardRef((e,t)=>{var{imgAttributes:r,heightInt:n,widthInt:a,qualityInt:l,className:c,imgStyle:d,blurStyle:u,isLazy:f,fill:m,placeholder:h,loading:g,srcString:x,config:v,unoptimized:y,loader:j,onLoadRef:b,onLoadingCompleteRef:w,setBlurComplete:_,setShowAltText:E,onLoad:N,onError:k}=e,S=s(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return g=f?"lazy":g,o.default.createElement(o.default.Fragment,null,o.default.createElement("img",Object.assign({},S,r,{width:a,height:n,decoding:"async","data-nimg":m?"fill":"1",className:c,loading:g,style:i({},d,u),ref:o.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(k&&(e.src=e.src),e.complete&&p(e,x,h,b,w,_,y))},[x,h,b,w,_,k,y,t]),onLoad:e=>{let t=e.currentTarget;p(t,x,h,b,w,_,y)},onError:e=>{E(!0),"blur"===h&&_(!0),k&&k(e)}})))}),v=o.forwardRef((e,t)=>{let r,n;var a,{src:p,sizes:v,unoptimized:y=!1,priority:j=!1,loading:b,className:w,quality:_,width:E,height:N,fill:k,style:S,onLoad:C,onLoadingComplete:z,placeholder:O="empty",blurDataURL:R,layout:P,objectFit:A,objectPosition:I,lazyBoundary:L,lazyRoot:B}=e,M=s(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let T=o.useContext(u.ImageConfigContext),Z=o.useMemo(()=>{let e=m||T||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return i({},e,{allSizes:t,deviceSizes:r})},[T]),G=M,D=G.loader||f.default;delete G.loader;let F="__next_img_default"in D;if(F){if("custom"===Z.loader)throw Error('Image with src "'.concat(p,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=D;D=t=>{let{config:r}=t,i=s(t,["config"]);return e(i)}}if(P){"fill"===P&&(k=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];e&&(S=i({},S,e));let t={responsive:"100vw",fill:"100vw"}[P];t&&!v&&(v=t)}let W="",q=g(E),J=g(N);if("object"==typeof(a=p)&&(h(a)||void 0!==a.src)){let e=h(p)?p.default:p;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(r=e.blurWidth,n=e.blurHeight,R=R||e.blurDataURL,W=e.src,!k){if(q||J){if(q&&!J){let t=q/e.width;J=Math.round(e.height*t)}else if(!q&&J){let t=J/e.height;q=Math.round(e.width*t)}}else q=e.width,J=e.height}}let H=!j&&("lazy"===b||void 0===b);((p="string"==typeof p?p:W).startsWith("data:")||p.startsWith("blob:"))&&(y=!0,H=!1),Z.unoptimized&&(y=!0),F&&p.endsWith(".svg")&&!Z.dangerouslyAllowSVG&&(y=!0);let[U,V]=o.useState(!1),[X,$]=o.useState(!1),K=g(_),Q=Object.assign(k?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:A,objectPosition:I}:{},X?{}:{color:"transparent"},S),Y="blur"===O&&R&&!U?{backgroundSize:Q.objectFit||"cover",backgroundPosition:Q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:q,heightInt:J,blurWidth:r,blurHeight:n,blurDataURL:R}),'")')}:{},ee=function(e){let{config:t,src:r,unoptimized:i,width:n,quality:a,sizes:s,loader:o}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,r){let{deviceSizes:i,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:i,kind:"w"};let a=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:a,kind:"x"}}(t,n,s),d=l.length-1;return{sizes:s||"w"!==c?s:"100vw",srcSet:l.map((e,i)=>"".concat(o({config:t,src:r,quality:a,width:e})," ").concat("w"===c?e:i+1).concat(c)).join(", "),src:o({config:t,src:r,quality:a,width:l[d]})}}({config:Z,src:p,unoptimized:y,width:q,quality:K,sizes:v,loader:D}),et=p,er={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:G.crossOrigin},ei=o.useRef(C);o.useEffect(()=>{ei.current=C},[C]);let en=o.useRef(z);o.useEffect(()=>{en.current=z},[z]);let ea=i({isLazy:H,imgAttributes:ee,heightInt:J,widthInt:q,qualityInt:K,className:w,imgStyle:Q,blurStyle:Y,loading:b,config:Z,fill:k,unoptimized:y,placeholder:O,loader:D,srcString:et,onLoadRef:ei,onLoadingCompleteRef:en,setBlurComplete:V,setShowAltText:$},G);return o.default.createElement(o.default.Fragment,null,o.default.createElement(x,Object.assign({},ea,{ref:t})),j?o.default.createElement(l.default,null,o.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},er))):null)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:n,blurDataURL:a}=e,s=i||t,o=n||r,l=a.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return s&&o?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(s," ").concat(o,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(i&&n?"1":"20","'/%3E").concat(l,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(a,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(a,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function r(e){let{config:t,src:r,width:i,quality:n}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(i,"&q=").concat(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},4881:function(e,t,r){"use strict";r.d(t,{E:function(){return s}});var i=r(5893),n=r(3855),a=r(5313);let s=e=>{let{dateString:t}=e,r=(0,n.Z)(t);return(0,i.jsx)("time",{dateTime:t,children:(0,a.Z)(r,"LLL d, yyyy")})}},7737:function(e,t,r){"use strict";r.d(t,{A:function(){return d},y:function(){return c}});var i=r(5893),n=r(1664),a=r.n(n),s=r(1954);let o=()=>(0,i.jsx)("div",{className:"container px-6 lg:px-12 mx-auto flex items-center",children:(0,i.jsx)("div",{className:"flex mx-auto",children:(0,i.jsxs)("p",{className:"text-sm text-grey",children:["theme forked from\xa0",(0,i.jsxs)("a",{className:"text-grey hover:text-matteBlack",href:"https://github.com/szkkng/kengo-dev",children:[(0,i.jsx)(s.JO,{icon:"akar-icons:github-fill",inline:!0,className:"inline"}),"\xa0szkkng/kengo-dev"]})]})})}),l=()=>(0,i.jsx)("header",{className:"py-5 border-b border-matteBlack sticky top-0 bg-cream bg-opacity-90 z-10",children:(0,i.jsxs)("div",{className:"container px-6 lg:px-12 mx-auto flex items-center",children:[(0,i.jsx)(a(),{href:"/",children:(0,i.jsx)("a",{className:"text-matteBlack text-2xl font-semibold",children:"wheatfox"})}),(0,i.jsx)("div",{className:"flex ml-auto",children:(0,i.jsx)("a",{className:"text-midGrey mr-5 text-2xl hover:text-matteBlack",href:"https://github.com/enkerewpo",children:(0,i.jsx)(s.JO,{icon:"akar-icons:github-fill"})})})]})}),c="wheatfox",d=e=>{let{children:t,home:r}=e;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l,{}),(0,i.jsx)("main",{className:"container m-auto",children:t}),(0,i.jsx)("footer",{className:"h-20",children:!r&&(0,i.jsx)("div",{className:"mt-10 pt-4 text-center",children:(0,i.jsx)(a(),{href:"/",children:(0,i.jsx)("a",{className:"text-cream text-lg",children:"Home"})})})}),(0,i.jsx)(o,{})]})}},887:function(e,t,r){"use strict";var i=r(5893),n=r(9008),a=r.n(n);let s=e=>{let{pageTitle:t,pageImg:r,pageImgWidth:n,pageImgHeight:s}=e,o="wheatfox",l=t||o;return(0,i.jsxs)(a(),{children:[(0,i.jsx)("title",{children:l}),(0,i.jsx)("link",{rel:"icon",href:"favicon.png"}),(0,i.jsx)("meta",{property:"og:title",content:l}),(0,i.jsx)("meta",{property:"og:site_name",content:o}),(0,i.jsx)("meta",{property:"og:image",content:"https://wheatfox.art"+(r||"/images/stranular/stranular.png")}),(0,i.jsx)("meta",{property:"og:image:width",content:n||"1200"}),(0,i.jsx)("meta",{property:"og:image:height",content:s||"630"}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]})};t.Z=s},5970:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return h},default:function(){return g}});var i=r(5893),n=r(5675),a=r.n(n),s=r(1664),o=r.n(s),l=r(8193),c=r(5434),d=r(4881),u=r(7737),f=r(887);let m={textAlign:"center"};var h=!0;function g(e){let{allPostsData:t}=e;return(0,i.jsxs)(u.A,{home:!0,children:[(0,i.jsx)(f.Z,{pageTitle:u.y}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{style:m,children:"this new blog is currently under construction..."}),(0,i.jsx)("div",{className:"w-11/12 m-auto mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-5",children:t.map(e=>{let{id:t,createdDate:r,updatedDate:n,title:s,thumbnail:u}=e;return(0,i.jsx)("div",{className:"flex flex-col border transition delay-75 border-darkGrey hover:border-cyan hover:border-opacity-50",children:(0,i.jsx)(o(),{href:"posts/[id]",as:"/posts/".concat(t),children:(0,i.jsxs)("a",{className:"flex flex-col justify-between bg-cream mt-2 p-5 w-full h-full transition delay-75 hover:text-cyan",children:[(0,i.jsx)(a(),{src:u,width:840,height:540,objectFit:"contain",alt:""}),(0,i.jsx)("div",{className:"text-center text-xl font-bold mt-2",children:s}),(0,i.jsxs)("div",{className:"flex items-center justify-center text-midGrey mt-3 text-sm",children:[(0,i.jsx)(c.ZO5,{className:"mr-1 text-base"}),(0,i.jsx)(d.E,{dateString:n}),(0,i.jsx)(l.xHR,{className:"ml-5 mr-1"}),(0,i.jsx)(d.E,{dateString:r})]})]})})},t)})})]})}},5675:function(e,t,r){e.exports=r(9749)}},function(e){e.O(0,[617,228,409,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);