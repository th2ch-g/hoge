(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[690],{3740:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return y}});let n=r(8754),i=r(1757),s=i._(r(7294)),a=n._(r(2636)),o=r(7757),l=r(3735),u=r(3341);r(4210);let c=n._(r(7746)),d={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function f(e){return void 0!==e.default}function m(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function p(e,t,r,n,i,s,a){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let o="decode"in e?e.decode():Promise.resolve();o.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===r&&s(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;n.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}})}function g(e){let[t,r]=s.version.split("."),n=parseInt(t,10),i=parseInt(r,10);return n>18||18===n&&i>=3?{fetchPriority:e}:{fetchpriority:e}}let h=(0,s.forwardRef)((e,t)=>{let{imgAttributes:r,heightInt:n,widthInt:i,qualityInt:a,className:o,imgStyle:l,blurStyle:u,isLazy:c,fetchPriority:d,fill:f,placeholder:m,loading:h,srcString:v,config:y,unoptimized:_,loader:b,onLoadRef:w,onLoadingCompleteRef:x,setBlurComplete:j,setShowAltText:S,onLoad:C,onError:E,...k}=e;return h=c?"lazy":h,s.default.createElement("img",{...k,...g(d),loading:h,width:i,height:n,decoding:"async","data-nimg":f?"fill":"1",className:o,style:{...l,...u},...r,ref:(0,s.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(E&&(e.src=e.src),e.complete&&p(e,v,m,w,x,j,_))},[v,m,w,x,j,E,_,t]),onLoad:e=>{let t=e.currentTarget;p(t,v,m,w,x,j,_)},onError:e=>{S(!0),"blur"===m&&j(!0),E&&E(e)}})}),v=(0,s.forwardRef)((e,t)=>{var r;let n,i,{src:p,sizes:v,unoptimized:y=!1,priority:_=!1,loading:b,className:w,quality:x,width:j,height:S,fill:C,style:E,onLoad:k,onLoadingComplete:N,placeholder:z="empty",blurDataURL:P,fetchPriority:I,layout:L,objectFit:M,objectPosition:O,lazyBoundary:G,lazyRoot:R,...A}=e,W=(0,s.useContext)(u.ImageConfigContext),D=(0,s.useMemo)(()=>{let e=d||W||l.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[W]),F=A.loader||c.default;delete A.loader;let V="__next_img_default"in F;if(V){if("custom"===D.loader)throw Error('Image with src "'+p+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=F;F=t=>{let{config:r,...n}=t;return e(n)}}if(L){"fill"===L&&(C=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[L];e&&(E={...E,...e});let t={responsive:"100vw",fill:"100vw"}[L];t&&!v&&(v=t)}let T="",B=m(j),J=m(S);if("object"==typeof(r=p)&&(f(r)||void 0!==r.src)){let e=f(p)?p.default:p;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(n=e.blurWidth,i=e.blurHeight,P=P||e.blurDataURL,T=e.src,!C){if(B||J){if(B&&!J){let t=B/e.width;J=Math.round(e.height*t)}else if(!B&&J){let t=J/e.height;B=Math.round(e.width*t)}}else B=e.width,J=e.height}}let Y=!_&&("lazy"===b||void 0===b);(!(p="string"==typeof p?p:T)||p.startsWith("data:")||p.startsWith("blob:"))&&(y=!0,Y=!1),D.unoptimized&&(y=!0),V&&p.endsWith(".svg")&&!D.dangerouslyAllowSVG&&(y=!0),_&&(I="high");let[q,H]=(0,s.useState)(!1),[U,Z]=(0,s.useState)(!1),X=m(x),$=Object.assign(C?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:M,objectPosition:O}:{},U?{}:{color:"transparent"},E),K="blur"===z&&P&&!q?{backgroundSize:$.objectFit||"cover",backgroundPosition:$.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,o.getImageBlurSvg)({widthInt:B,heightInt:J,blurWidth:n,blurHeight:i,blurDataURL:P,objectFit:$.objectFit})+'")'}:{},Q=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:s,sizes:a,loader:o}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:u}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let s=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:s,kind:"x"}}(t,i,a),c=l.length-1;return{sizes:a||"w"!==u?a:"100vw",srcSet:l.map((e,n)=>o({config:t,src:r,quality:s,width:e})+" "+("w"===u?e:n+1)+u).join(", "),src:o({config:t,src:r,quality:s,width:l[c]})}}({config:D,src:p,unoptimized:y,width:B,quality:X,sizes:v,loader:F}),ee=p,et=(0,s.useRef)(k);(0,s.useEffect)(()=>{et.current=k},[k]);let er=(0,s.useRef)(N);(0,s.useEffect)(()=>{er.current=N},[N]);let en={isLazy:Y,imgAttributes:Q,heightInt:J,widthInt:B,qualityInt:X,className:w,imgStyle:$,blurStyle:K,loading:b,config:D,fetchPriority:I,fill:C,unoptimized:y,placeholder:z,loader:F,srcString:ee,onLoadRef:et,onLoadingCompleteRef:er,setBlurComplete:H,setShowAltText:Z,...A};return s.default.createElement(s.default.Fragment,null,s.default.createElement(h,{...en,ref:t}),_?s.default.createElement(a.default,null,s.default.createElement("link",{key:"__nimg-"+Q.src+Q.srcSet+Q.sizes,rel:"preload",as:"image",href:Q.srcSet?void 0:Q.src,imageSrcSet:Q.srcSet,imageSizes:Q.sizes,crossOrigin:A.crossOrigin,...g(I)})):null)}),y=v;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:s,objectFit:a}=e,o=n||t,l=i||r,u=s.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return o&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+o+" "+l+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(n&&i?"1":"20")+"'/%3E"+u+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+s+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+s+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},7746:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:i}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},5716:function(e){e.exports={style:{fontFamily:"'__Noto_Sans_JP_338855', '__Noto_Sans_JP_Fallback_338855'",fontStyle:"normal"},className:"__className_338855"}},9008:function(e,t,r){e.exports=r(2636)},5675:function(e,t,r){e.exports=r(3740)},6653:function(e,t,r){"use strict";r.d(t,{S7Z:function(){return i}});var n=r(8357);function i(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 25 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M4.7 8.73h2.45v4.02c-.55.27-1.64.34-2.53.34-2.56 0-3.47-2.2-3.47-5.05 0-2.85.91-5.06 3.48-5.06 1.28 0 2.06.23 3.28.73V2.66C7.27 2.33 6.25 2 4.63 2 1.13 2 0 4.69 0 8.03c0 3.34 1.11 6.03 4.63 6.03 1.64 0 2.81-.27 3.59-.64V7.73H4.7v1zm6.39 3.72V6.06h-1.05v6.28c0 1.25.58 1.72 1.72 1.72v-.89c-.48 0-.67-.16-.67-.7v-.02zm.25-8.72c0-.44-.33-.78-.78-.78s-.77.34-.77.78.33.78.77.78.78-.34.78-.78zm4.34 5.69c-1.5-.13-1.78-.48-1.78-1.17 0-.77.33-1.34 1.88-1.34 1.05 0 1.66.16 2.27.36v-.94c-.69-.3-1.52-.39-2.25-.39-2.2 0-2.92 1.2-2.92 2.31 0 1.08.47 1.88 2.73 2.08 1.55.13 1.77.63 1.77 1.34 0 .73-.44 1.42-2.06 1.42-1.11 0-1.86-.19-2.33-.36v.94c.5.2 1.58.39 2.33.39 2.38 0 3.14-1.2 3.14-2.41 0-1.28-.53-2.03-2.75-2.23h-.03zm8.58-2.47v-.86h-2.42v-2.5l-1.08.31v2.11l-1.56.44v.48h1.56v5c0 1.53 1.19 2.13 2.5 2.13.19 0 .52-.02.69-.05v-.89c-.19.03-.41.03-.61.03-.97 0-1.5-.39-1.5-1.34V6.94h2.42v.02-.01z"}}]})(e)}},5942:function(e,t,r){"use strict";r.d(t,{Y:function(){return n},v:function(){return i}});var[n,i]=(0,r(6452).eC)("Card")},5902:function(e,t,r){"use strict";r.d(t,{e:function(){return l}});var n=r(5942),i=r(5432),s=r(5059),a=r(1337),o=r(5893),l=(0,s.G)(function(e,t){let{className:r,...s}=e,l=(0,n.v)();return(0,o.jsx)(a.m.div,{ref:t,className:(0,i.cx)("chakra-card__body",r),__css:l.body,...s})})},9379:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(5942),i=r(5432),s=r(5059),a=r(3179),o=r(4662),l=r(1337),u=r(5893),c=(0,s.G)(function(e,t){let{className:r,children:s,direction:c="column",justify:d,align:f,...m}=(0,a.Lr)(e),p=(0,o.jC)("Card",e);return(0,u.jsx)(l.m.div,{ref:t,className:(0,i.cx)("chakra-card",r),__css:{display:"flex",flexDirection:c,justifyContent:d,alignItems:f,position:"relative",minWidth:0,wordWrap:"break-word",...p.container},...m,children:(0,u.jsx)(n.Y,{value:p,children:s})})})},4857:function(e,t,r){"use strict";r.d(t,{O:function(){return l}});var n=r(5942),i=r(5432),s=r(5059),a=r(1337),o=r(5893),l=(0,s.G)(function(e,t){let{className:r,...s}=e,l=(0,n.v)();return(0,o.jsx)(a.m.div,{ref:t,className:(0,i.cx)("chakra-card__header",r),__css:l.header,...s})})},7754:function(e,t,r){"use strict";r.d(t,{M:function(){return a}});var n=r(1337),i=r(5059),s=r(5893),a=(0,n.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});a.displayName="Center";var o={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}};(0,i.G)(function(e,t){let{axis:r="both",...i}=e;return(0,s.jsx)(n.m.div,{ref:t,__css:o[r],...i,position:"absolute"})})},3838:function(e,t,r){"use strict";r.d(t,{r:function(){return u}});var n=r(5059),i=r(4662),s=r(3179),a=r(1337),o=r(5432),l=r(5893),u=(0,n.G)(function(e,t){let r=(0,i.mq)("Link",e),{className:n,isExternal:u,...c}=(0,s.Lr)(e);return(0,l.jsx)(a.m.a,{target:u?"_blank":void 0,rel:u?"noopener":void 0,ref:t,className:(0,o.cx)("chakra-link",n),...c,__css:r})});u.displayName="Link"},5197:function(e,t,r){"use strict";r.d(t,{DE:function(){return g},HC:function(){return p},aV:function(){return m}});var n=r(6877),i=r(5227),s=r(2495),a=r(5059),o=r(4662),l=r(3179),u=r(1337),c=r(5893),[d,f]=(0,i.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),m=(0,a.G)(function(e,t){let r=(0,o.jC)("List",e),{children:n,styleType:i="none",stylePosition:a,spacing:f,...m}=(0,l.Lr)(e),p=(0,s.W)(n);return(0,c.jsx)(d,{value:r,children:(0,c.jsx)(u.m.ul,{ref:t,listStyleType:i,listStylePosition:a,role:"list",__css:{...r.container,...f?{"& > *:not(style) ~ *:not(style)":{mt:f}}:{}},...m,children:p})})});m.displayName="List",(0,a.G)((e,t)=>{let{as:r,...n}=e;return(0,c.jsx)(m,{ref:t,as:"ol",styleType:"decimal",marginStart:"1em",...n})}).displayName="OrderedList",(0,a.G)(function(e,t){let{as:r,...n}=e;return(0,c.jsx)(m,{ref:t,as:"ul",styleType:"initial",marginStart:"1em",...n})}).displayName="UnorderedList";var p=(0,a.G)(function(e,t){let r=f();return(0,c.jsx)(u.m.li,{ref:t,...e,__css:r.item})});p.displayName="ListItem";var g=(0,a.G)(function(e,t){let r=f();return(0,c.jsx)(n.J,{ref:t,role:"presentation",...e,__css:r.icon})});g.displayName="ListIcon"}}]);