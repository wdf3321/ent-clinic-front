import{v as n,x as m,y as i,z as u,A as l,f as s,B as d,aY as b,P as f}from"./index.738b47e8.js";import{Q as p}from"./QTable.fb4f1674.js";import{h as a}from"./moment.9709ab41.js";import"./use-key-composition.c88f08c3.js";import"./QCheckbox.afa17b8d.js";const h=l("h4",{class:"text-center"},"\u9810\u7D04\u67E5\u8A62",-1),_={class:"q-pa-md-xl text-center"},Y={__name:"SeePage",setup(g){const o=n();(async()=>{try{const{data:e}=await b.get("/users");let t=0;for(t=0;t<e.result.reserve.length;t++)a(e.result.reserve[t].date).isBefore(a().format("YYYY/MM/DD"))||(r.push({date:e.result.reserve[t].date,time:e.result.reserve[t].time,name:e.result.reserve[t].name,member:e.result.reserve[t].member,success:"\u6210\u529F"}),o.notify({color:"green-4",textColor:"white",icon:"cloud_done",message:"\u53D6\u5F97\u6210\u529F"}))}catch(e){console.log(e)}})();const c=[{name:"name",align:"left",label:"\u59D3\u540D",field:"name",sortable:!0},{name:"date",required:!0,label:"\u65E5\u671F",align:"center",field:"date",sortable:!0},{name:"time",align:"center",label:"\u6642\u9593",field:"time",sortable:!0},{name:"member",align:"center",label:"\u4EBA\u6578",field:"member",sortable:!0},{name:"success",align:"center",label:"\u6210\u529F",field:"success",sortable:!0}],r=m([]);return(e,t)=>(i(),u("section",null,[h,l("div",_,[s(p,{class:"my-sticky-header-table",title:"",rows:r,columns:c,"row-key":"name",flat:"",bordered:"","no-data-label":"\u54ED\u963F\uFF0C\u4F60\u5C1A\u672A\u9810\u7D04\u4EFB\u4F55\u6642\u9593"},{"body-cell-success":d(()=>[s(f,{name:"check",size:"40px",color:"primary"})]),_:1},8,["rows"])])]))}};export{Y as default};
