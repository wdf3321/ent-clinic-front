import{Q as x,c as h}from"./QTable.94d92d8b.js";import{j as b,c as g,h as k,k as y,s as Q,t as n,v as u,x as d,f as s,y as a,B,F as f,C as v,Q as C,aN as T,aO as N,aP as m,D as w,z as q}from"./index.bfe40a6e.js";import{Q as _}from"./QTd.c1336208.js";import"./use-key-composition.2dee7ca3.js";import"./QCheckbox.bd56174a.js";var p=b({name:"QTr",props:{props:Object,noHover:Boolean},setup(l,{slots:i}){const c=g(()=>"q-tr"+(l.props===void 0||l.props.header===!0?"":" "+l.props.__trClass)+(l.noHover===!0?" q-tr--no-hover":""));return()=>k("tr",{class:c.value},y(i.default))}});const j={"data-aos":"fade-down",id:"indexsection"},D=d("h3",null,"\u6700\u65B0\u6D88\u606F",-1),S={class:"row items-center justify-center"},V={id:"table1",class:"q-ma-md-xl"},z={class:"inside"},A={class:"text-left inside"},L={__name:"NewsPage",setup(l){const i=Q([]),c=[{name:"time",required:!0,label:"\u6642\u9593",align:"left",field:t=>t.time,format:t=>`${t}`,sortable:!0},{name:"title",align:"center",label:"\u6A19\u984C",field:"title",sortable:!0}];return(async()=>{const t=await B.get("/articles");let r=0;for(r=0;r<t.data.result.length;r++)i.push({title:t.data.result[r].title,time:t.data.result[r].date,inside:t.data.result[r].inside});i.reverse()})(),(t,r)=>(n(),u("section",j,[D,d("div",S,[d("div",V,[s(x,{rows:i,columns:c,"row-key":"name","virtual-scroll":"","hide-header":""},{header:a(e=>[s(p,{props:e},{default:a(()=>[s(h,{"auto-width":""}),(n(!0),u(f,null,v(e.cols,o=>(n(),w(h,{key:o.name,props:e},{default:a(()=>[q(m(o.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),body:a(e=>[s(p,{props:e},{default:a(()=>[s(_,{"auto-width":""},{default:a(()=>[s(C,{size:"md",color:"primary",round:"",dense:"",onClick:o=>e.row.expand=!e.row.expand,icon:e.row.expand?"remove":"add"},null,8,["onClick","icon"])]),_:2},1024),(n(!0),u(f,null,v(e.cols,o=>(n(),w(_,{key:o.name,props:e},{default:a(()=>[d("div",z,m(o.value),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"]),T(s(p,{props:e},{default:a(()=>[s(_,{"auto-width":"true",colspan:"100%"},{default:a(()=>[d("div",A,m(e.row.inside),1)]),_:2},1024)]),_:2},1032,["props"]),[[N,e.row.expand]])]),_:1},8,["rows"])])])]))}};export{L as default};
