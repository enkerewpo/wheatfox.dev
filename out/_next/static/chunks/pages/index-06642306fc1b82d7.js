(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(5970)}])},3762:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){let t;var i,{src:a,sizes:r,unoptimized:m=!1,priority:f=!1,loading:x,lazyRoot:w=null,lazyBoundary:A,className:S,quality:N,width:z,height:E,style:_,objectFit:O,objectPosition:R,onLoadingComplete:I,placeholder:L="empty",blurDataURL:C}=e,B=o(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]);let P=l.useContext(u.ImageConfigContext),Z=l.useMemo(()=>{let e=g||P||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:i})},[P]),W=B,q=r?"responsive":"intrinsic";"layout"in W&&(W.layout&&(q=W.layout),delete W.layout);let G=v;if("loader"in W){if(W.loader){let e=W.loader;G=t=>{let{config:i}=t,n=o(t,["config"]);return e(n)}}delete W.loader}let M="";if("object"==typeof(i=a)&&(b(i)||void 0!==i.src)){let e=b(a)?a.default:a;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(C=C||e.blurDataURL,M=e.src,(!q||"fill"!==q)&&(E=E||e.height,z=z||e.width,!e.height||!e.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)))}let T=!f&&("lazy"===x||void 0===x);((a="string"==typeof a?a:M).startsWith("data:")||a.startsWith("blob:"))&&(m=!0,T=!1),h.has(a)&&(T=!1),Z.unoptimized&&(m=!0);let[D,F]=l.useState(!1),[H,U,J]=d.useIntersection({rootRef:w,rootMargin:A||"200px",disabled:!T}),V=!T||U,X={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},Q={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},K=!1,Y=j(z),$=j(E),ee=j(N),et=Object.assign({},_,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:O,objectPosition:R}),ei="blur"!==L||D?{}:{backgroundSize:O||"cover",backgroundPosition:R||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(C,'")')};if("fill"===q)X.display="block",X.position="absolute",X.top=0,X.left=0,X.bottom=0,X.right=0;else if(void 0!==Y&&void 0!==$){let e=$/Y,i=isNaN(e)?"100%":"".concat(100*e,"%");"responsive"===q?(X.display="block",X.position="relative",K=!0,Q.paddingTop=i):"intrinsic"===q?(X.display="inline-block",X.position="relative",X.maxWidth="100%",K=!0,Q.maxWidth="100%",t="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(Y,"%27%20height=%27").concat($,"%27/%3e")):"fixed"===q&&(X.display="inline-block",X.position="relative",X.width=Y,X.height=$)}let en={src:p,srcSet:void 0,sizes:void 0};V&&(en=y({config:Z,src:a,unoptimized:m,layout:q,width:Y,quality:ee,sizes:r,loader:G}));let ea=a,er={imageSrcSet:en.srcSet,imageSizes:en.sizes,crossOrigin:W.crossOrigin},eo=l.default.useLayoutEffect,el=l.useRef(I),es=l.useRef(a);l.useEffect(()=>{el.current=I},[I]),eo(()=>{es.current!==a&&(J(),es.current=a)},[J,a]);let ec=n({isLazy:T,imgAttributes:en,heightInt:$,widthInt:Y,qualityInt:ee,layout:q,className:S,imgStyle:et,blurStyle:ei,loading:x,config:Z,unoptimized:m,placeholder:L,loader:G,srcString:ea,onLoadingCompleteRef:el,setBlurComplete:F,setIntersection:H,isVisible:V,noscriptSizes:r},W);return l.default.createElement(l.default.Fragment,null,l.default.createElement("span",{style:X},K?l.default.createElement("span",{style:Q},t?l.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:t}):null):null,l.default.createElement(k,Object.assign({},ec))),f?l.default.createElement(s.default,null,l.default.createElement("link",Object.assign({key:"__nimg-"+en.src+en.srcSet+en.sizes,rel:"preload",as:"image",href:en.srcSet?void 0:en.src},er))):null)};var n=i(6495).Z,a=i(2648).Z,r=i(1598).Z,o=i(7273).Z,l=r(i(7294)),s=a(i(3121)),c=i(139),d=i(9246),u=i(8730);i(7238);var m=i(2700);function f(e){return"/"===e[0]?e.slice(1):e}let g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!1},h=new Set,p="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",x=new Map([["default",function(e){let{config:t,src:i,width:n,quality:a}=e;return i.endsWith(".svg")&&!t.dangerouslyAllowSVG?i:"".concat(m.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(a||75)}],["imgix",function(e){let{config:t,src:i,width:n,quality:a}=e,r=new URL("".concat(t.path).concat(f(i))),o=r.searchParams;return o.set("auto",o.getAll("auto").join(",")||"format"),o.set("fit",o.get("fit")||"max"),o.set("w",o.get("w")||n.toString()),a&&o.set("q",a.toString()),r.href}],["cloudinary",function(e){let{config:t,src:i,width:n,quality:a}=e,r=["f_auto","c_limit","w_"+n,"q_"+(a||"auto")].join(",")+"/";return"".concat(t.path).concat(r).concat(f(i))}],["akamai",function(e){let{config:t,src:i,width:n}=e;return"".concat(t.path).concat(f(i),"?imwidth=").concat(n)}],["custom",function(e){let{src:t}=e;throw Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function b(e){return void 0!==e.default}function y(e){let{config:t,src:i,unoptimized:n,layout:a,width:r,quality:o,sizes:l,loader:s}=e;if(n)return{src:i,srcSet:void 0,sizes:void 0};let{widths:c,kind:d}=function(e,t,i,n){let{deviceSizes:a,allSizes:r}=e;if(n&&("fill"===i||"responsive"===i)){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(n);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:r.filter(t=>t>=a[0]*e),kind:"w"}}return{widths:r,kind:"w"}}if("number"!=typeof t||"fill"===i||"responsive"===i)return{widths:a,kind:"w"};let o=[...new Set([t,2*t].map(e=>r.find(t=>t>=e)||r[r.length-1]))];return{widths:o,kind:"x"}}(t,r,a,l),u=c.length-1;return{sizes:l||"w"!==d?l:"100vw",srcSet:c.map((e,n)=>"".concat(s({config:t,src:i,quality:o,width:e})," ").concat("w"===d?e:n+1).concat(d)).join(", "),src:s({config:t,src:i,quality:o,width:c[u]})}}function j(e){return"number"==typeof e?e:"string"==typeof e?parseInt(e,10):void 0}function v(e){var t;let i=(null==(t=e.config)?void 0:t.loader)||"default",n=x.get(i);if(n)return n(e);throw Error('Unknown "loader" found in "next.config.js". Expected: '.concat(c.VALID_LOADERS.join(", "),". Received: ").concat(i))}function w(e,t,i,n,a,r){if(!e||e.src===p||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let o="decode"in e?e.decode():Promise.resolve();o.catch(()=>{}).then(()=>{if(e.parentNode&&(h.add(t),"blur"===n&&r(!0),null==a?void 0:a.current)){let{naturalWidth:t,naturalHeight:i}=e;a.current({naturalWidth:t,naturalHeight:i})}})}let k=e=>{var{imgAttributes:t,heightInt:i,widthInt:a,qualityInt:r,layout:s,className:c,imgStyle:d,blurStyle:u,isLazy:m,placeholder:f,loading:g,srcString:h,config:p,unoptimized:x,loader:b,onLoadingCompleteRef:j,setBlurComplete:v,setIntersection:k,onLoad:A,onError:S,isVisible:N,noscriptSizes:z}=e,E=o(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return g=m?"lazy":g,l.default.createElement(l.default.Fragment,null,l.default.createElement("img",Object.assign({},E,t,{decoding:"async","data-nimg":s,className:c,style:n({},d,u),ref:l.useCallback(e=>{k(e),(null==e?void 0:e.complete)&&w(e,h,s,f,j,v)},[k,h,s,f,j,v]),onLoad:e=>{let t=e.currentTarget;w(t,h,s,f,j,v),A&&A(e)},onError:e=>{"blur"===f&&v(!0),S&&S(e)}})),(m||"blur"===f)&&l.default.createElement("noscript",null,l.default.createElement("img",Object.assign({},E,y({config:p,src:h,unoptimized:x,layout:s,width:a,quality:r,sizes:z,loader:b}),{decoding:"async","data-nimg":s,style:d,className:c,loading:g}))))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4881:function(e,t,i){"use strict";i.d(t,{E:function(){return o}});var n=i(5893),a=i(3855),r=i(5313);let o=e=>{let{dateString:t}=e,i=(0,a.Z)(t);return(0,n.jsx)("time",{dateTime:t,children:(0,r.Z)(i,"LLL d, yyyy")})}},7737:function(e,t,i){"use strict";i.d(t,{A:function(){return d},y:function(){return c}});var n=i(5893),a=i(1664),r=i.n(a),o=i(1954);let l=()=>(0,n.jsx)("div",{className:"container px-6 lg:px-12 mx-auto flex items-center",children:(0,n.jsx)("div",{className:"flex mx-auto",children:(0,n.jsxs)("p",{className:"text-sm text-grey",children:["theme forked from\xa0",(0,n.jsxs)("a",{className:"text-grey hover:text-matteBlack",href:"https://github.com/szkkng/kengo-dev",children:[(0,n.jsx)(o.JO,{icon:"akar-icons:github-fill",inline:!0,className:"inline"}),"\xa0szkkng/kengo-dev"]})]})})}),s=()=>(0,n.jsx)("header",{className:"py-5 border-b border-matteBlack sticky top-0 bg-cream bg-opacity-90 z-10",children:(0,n.jsxs)("div",{className:"container px-6 lg:px-12 mx-auto flex items-center",children:[(0,n.jsx)(r(),{href:"/",children:(0,n.jsx)("a",{className:"text-matteBlack text-2xl font-semibold",children:"wheatfox"})}),(0,n.jsx)("div",{className:"flex ml-auto",children:(0,n.jsx)("a",{className:"text-midGrey mr-5 text-2xl hover:text-matteBlack",href:"https://github.com/enkerewpo",children:(0,n.jsx)(o.JO,{icon:"akar-icons:github-fill"})})})]})}),c="wheatfox",d=e=>{let{children:t,home:i}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s,{}),(0,n.jsx)("main",{className:"container m-auto",children:t}),(0,n.jsx)("footer",{className:"h-20",children:!i&&(0,n.jsx)("div",{className:"mt-10 pt-4 text-center",children:(0,n.jsx)(r(),{href:"/",children:(0,n.jsx)("a",{className:"text-cream text-lg",children:"Home"})})})}),(0,n.jsx)(l,{})]})}},887:function(e,t,i){"use strict";var n=i(5893),a=i(9008),r=i.n(a);let o=e=>{let{pageTitle:t,pageImg:i,pageImgWidth:a,pageImgHeight:o}=e,l="wheatfox",s=t||l;return(0,n.jsxs)(r(),{children:[(0,n.jsx)("title",{children:s}),(0,n.jsx)("link",{rel:"icon",href:"favicon.png"}),(0,n.jsx)("meta",{property:"og:title",content:s}),(0,n.jsx)("meta",{property:"og:site_name",content:l}),(0,n.jsx)("meta",{property:"og:image",content:"https://wheatfox.art"+(i||"/images/stranular/stranular.png")}),(0,n.jsx)("meta",{property:"og:image:width",content:a||"1200"}),(0,n.jsx)("meta",{property:"og:image:height",content:o||"630"}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]})};t.Z=o},5970:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return g},default:function(){return h}});var n=i(5893),a=i(9755),r=i.n(a),o=i(1664),l=i.n(o),s=i(8193),c=i(5434),d=i(4881),u=i(7737),m=i(887);let f={textAlign:"center"};var g=!0;function h(e){let{allPostsData:t}=e;return(0,n.jsxs)(u.A,{home:!0,children:[(0,n.jsx)(m.Z,{pageTitle:u.y}),(0,n.jsx)("br",{}),(0,n.jsx)("p",{style:f,children:"this new blog is currently under construction..."}),(0,n.jsx)("div",{className:"w-11/12 m-auto mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-5",children:t.map(e=>{let{id:t,createdDate:i,updatedDate:a,title:o,thumbnail:u}=e;return(0,n.jsx)("div",{className:"flex flex-col border transition delay-75 border-darkGrey hover:border-cyan hover:border-opacity-50",children:(0,n.jsx)(l(),{href:"posts/[id]",as:"/posts/".concat(t),children:(0,n.jsxs)("a",{className:"flex flex-col justify-between bg-cream mt-2 p-5 w-full h-full transition delay-75 hover:text-cyan",children:[(0,n.jsx)(r(),{src:u,width:840,height:540,objectFit:"contain",alt:""}),(0,n.jsx)("div",{className:"text-center text-xl font-bold mt-2",children:o}),(0,n.jsxs)("div",{className:"flex items-center justify-center text-midGrey mt-3 text-sm",children:[(0,n.jsx)(c.ZO5,{className:"mr-1 text-base"}),(0,n.jsx)(d.E,{dateString:a}),(0,n.jsx)(s.xHR,{className:"ml-5 mr-1"}),(0,n.jsx)(d.E,{dateString:i})]})]})})},t)})})]})}},9755:function(e,t,i){e.exports=i(3762)}},function(e){e.O(0,[617,228,409,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);