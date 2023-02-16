import{aX as N,aY as k,r as P,aR as $,s as z,v as r,x as f,y as s,aZ as u,E as V,a_ as h,aP as _,d as e,z as l,Q as n,F as v,H as j,C as q,aN as x,aO as E,D as Q,M as A}from"./index.32e86c97.js";import{Q as F,d as I,c as D}from"./QTable.ac05c9e3.js";import{Q as w,a as y}from"./QTd.3b6e21c6.js";import{Q as i}from"./QCardSection.6414492d.js";import{Q as Y,a as R,b as L}from"./QTime.f1692a7d.js";import{Q as b}from"./QInput.18c0e410.js";import{Q as O}from"./QCardActions.45868718.js";import{Q as X}from"./QCard.416feacd.js";import{C}from"./ClosePopup.5ba4374b.js";import"./use-key-composition.83f6cb12.js";import"./QCheckbox.13b6b603.js";import"./use-cache.b0833c75.js";const Z=s("h4",{class:"text-center"},"\u6D88\u606F\u7BA1\u7406",-1),G={key:1},J={class:"q-pa-md"},K={class:"text-left"},W={class:"text-center q-pa-xl"},ee=s("div",{class:"text-h6"},"\u65E5\u671F",-1),te={class:"row items-center justify-end"},le={class:"row items-center justify-end"},ae=s("div",{class:"text-h6"},"\u6A19\u984C",-1),oe=s("div",{class:"text-h6"},"\u5167\u5BB9",-1),ve={__name:"ArticleAdmin",setup(se){const{articles:U,loading:T,error:g}=N(k()),m=P(!1),S=$(),o=z({date:"2022-01-01 00:00",title:"",inside:""}),p=k();p.getArticles();const B=()=>{p.deleteArticle()},H=()=>{p.createArticle(o),S.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:"\u65B0\u589E\u6210\u529F"}),m.value=!1,o.date="",o.title="",o.inside=""},M=[{name:"date",required:!0,label:"\u6642\u9593",align:"left",field:c=>c.date,sortable:!0},{name:"title",align:"left",label:"\u6A19\u984C",field:"title",sortable:!0},{name:"id",align:"right",label:"id",field:"_id",sortable:!0}];return(c,a)=>(r(),f(v,null,[s("section",null,[Z,u(T)?(r(),V(j,{key:0,color:"primary",size:"500px"})):h("",!0),u(g)?(r(),f("p",G,_(u(g).message),1)):h("",!0),s("div",J,[e(F,{rows:u(U),columns:M,"row-key":"id",expanded:c.expanded,"onUpdate:expanded":a[2]||(a[2]=t=>c.expanded=t)},{header:l(t=>[e(w,{props:t},{default:l(()=>[e(D,{"auto-width":""}),(r(!0),f(v,null,q(t.cols,d=>(r(),V(D,{key:d.name,props:t},{default:l(()=>[Q(_(d.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),body:l(t=>[e(w,{props:t},{default:l(()=>[e(y,{"auto-width":""},{default:l(()=>[e(n,{size:"md",color:"accent",round:"",dense:"",onClick:d=>t.row.expand=!t.row.expand,icon:t.row.expand?"remove":"add"},null,8,["onClick","icon"])]),_:2},1024),(r(!0),f(v,null,q(t.cols,d=>(r(),V(y,{key:d.name,props:t},{default:l(()=>[Q(_(d.value),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"]),x(e(w,{props:t},{default:l(()=>[e(y,{colspan:"100%",modelValue:o.inside,"onUpdate:modelValue":a[1]||(a[1]=d=>o.inside=d)},{default:l(()=>[Q(_(t.row.inside)+" ",1),s("div",K,[e(n,{label:"\u522A\u9664",onClick:a[0]||(a[0]=d=>u(p).deleteArticle())})])]),_:2},1032,["modelValue"])]),_:2},1032,["props"]),[[E,t.row.expand]])]),_:1},8,["rows","expanded"])]),s("div",W,[e(n,{icon:"add",color:"primary",onClick:a[3]||(a[3]=t=>m.value=!0),class:"q-mx-lg",label:"\u65B0\u589E\u6D88\u606F"}),e(n,{onClick:B,type:"submit",color:"teal",icon:"delete",label:"\u522A\u9664\u6700\u820A",class:"q-mx-lg"})])]),e(I,{modelValue:m.value,"onUpdate:modelValue":a[9]||(a[9]=t=>m.value=t),persistent:""},{default:l(()=>[e(X,{style:{"min-width":"400px"}},{default:l(()=>[e(i,null,{default:l(()=>[ee]),_:1}),e(i,{class:"q-pt-none"},{default:l(()=>[e(b,{filled:"",modelValue:o.date,"onUpdate:modelValue":a[6]||(a[6]=t=>o.date=t)},{prepend:l(()=>[e(A,{name:"event",class:"cursor-pointer"},{default:l(()=>[e(Y,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:l(()=>[e(R,{modelValue:o.date,"onUpdate:modelValue":a[4]||(a[4]=t=>o.date=t),mask:"YYYY-MM-DD HH:mm"},{default:l(()=>[s("div",te,[x(e(n,{label:"Close",color:"primary",flat:""},null,512),[[C]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),append:l(()=>[e(A,{name:"access_time",class:"cursor-pointer"},{default:l(()=>[e(Y,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:l(()=>[e(L,{modelValue:o.date,"onUpdate:modelValue":a[5]||(a[5]=t=>o.date=t),mask:"YYYY-MM-DD HH:mm",format24h:"","now-btn":""},{default:l(()=>[s("div",le,[x(e(n,{label:"Close",color:"primary",flat:""},null,512),[[C]])])]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(i,null,{default:l(()=>[ae]),_:1}),e(i,{class:"q-pt-none"},{default:l(()=>[e(b,{modelValue:o.title,"onUpdate:modelValue":a[7]||(a[7]=t=>o.title=t),outline:"",type:"text",hint:"\u6A19\u984C"},null,8,["modelValue"])]),_:1}),e(i,null,{default:l(()=>[oe]),_:1}),e(i,{class:"q-pt-none"},{default:l(()=>[e(b,{modelValue:o.inside,"onUpdate:modelValue":a[8]||(a[8]=t=>o.inside=t),outline:"",hint:"\u5167\u5BB9",type:"textarea"},null,8,["modelValue"])]),_:1}),e(O,{align:"right",class:"text-white"},{default:l(()=>[x(e(n,{flat:"",color:"secondary",label:"\u53D6\u6D88"},null,512),[[C]]),e(n,{color:"teal",label:"\u65B0\u589E",onClick:H})]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}};export{ve as default};