(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79f005aa"],{"4c55":function(t,e,a){"use strict";a("b69e")},"724a":function(t,e,a){"use strict";a.r(e);var s=a("7a23");const c=t=>(Object(s["z"])("data-v-07356d67"),t=t(),Object(s["x"])(),t),i={class:"container"},l=c(()=>Object(s["h"])("h1",null,"News",-1)),n={id:"teams",class:"section teams"},o={class:"news-wrap"},b={class:"person news-item"},g={class:"news-pic"},r=["src"],h={class:"person-content"},p={class:"role"};function O(t,e,a,c,O,j){const u=Object(s["F"])("router-link"),d=Object(s["F"])("Pagination");return Object(s["w"])(),Object(s["g"])("div",i,[l,Object(s["h"])("section",n,[Object(s["h"])("div",o,[(Object(s["w"])(!0),Object(s["g"])(s["a"],null,Object(s["D"])(O.list.articles,(t,e)=>(Object(s["w"])(),Object(s["g"])("div",{class:"",key:e},[Object(s["h"])("div",b,[Object(s["k"])(u,{to:{name:"OneNews",params:{title:t.title}}},{default:Object(s["O"])(()=>[Object(s["h"])("div",g,[Object(s["h"])("img",{src:t.urlToImage,alt:"",class:"img-responsive"},null,8,r)])]),_:2},1032,["to"]),Object(s["h"])("div",h,[Object(s["h"])("h4",null,[Object(s["k"])(u,{to:{name:"OneNews",params:{title:t.title}}},{default:Object(s["O"])(()=>[Object(s["j"])(Object(s["I"])(t.title),1)]),_:2},1032,["to"])]),Object(s["h"])("h5",p,Object(s["I"])(t.publishedAt),1),Object(s["h"])("p",null,Object(s["I"])(t.description),1)])])]))),128))]),Object(s["k"])(d,{page:O.page,total:j.totalPages,onToPage:j.goToPage},null,8,["page","total","onToPage"])])])}var j=a("bc3a"),u=a.n(j);const d=t=>(Object(s["z"])("data-v-950a2b60"),t=t(),Object(s["x"])(),t),f={key:0,class:"pagination-wrap"},w={class:"pagination justify-content-center"},m={class:"page-item","aria-current":"page"},k=d(()=>Object(s["h"])("li",{class:"page-item","aria-current":"page"},[Object(s["h"])("span",null,"...")],-1)),v=["onClick"],P=d(()=>Object(s["h"])("li",{class:"page-item","aria-current":"page"},[Object(s["h"])("span",null,"...")],-1)),y={class:"page-item","aria-current":"page"};function T(t,e,a,c,i,l){return 0!==a.total?(Object(s["w"])(),Object(s["g"])("nav",f,[Object(s["h"])("ul",w,[Object(s["h"])("li",{class:Object(s["q"])(["page-item",{disabled:l.isDisableFirst}])},[Object(s["h"])("a",{class:"page-link",href:"#",tabindex:"-1","aria-disabled":"true",onClick:e[0]||(e[0]=t=>l.goToPage(a.page-1))},"Previous")],2),l.showFirst?(Object(s["w"])(),Object(s["g"])(s["a"],{key:0},[Object(s["h"])("li",m,[Object(s["h"])("a",{class:"page-link",href:"#",onClick:e[1]||(e[1]=t=>l.goToPage(1))},"1")]),k],64)):Object(s["f"])("",!0),(Object(s["w"])(!0),Object(s["g"])(s["a"],null,Object(s["D"])(l.pagesRange,t=>(Object(s["w"])(),Object(s["g"])("li",{key:t,class:Object(s["q"])(["page-item",{active:t===a.page}]),"aria-current":"page"},[Object(s["h"])("a",{class:"page-link",href:"#",onClick:e=>l.goToPage(t)},Object(s["I"])(t),9,v)],2))),128)),l.showLast?(Object(s["w"])(),Object(s["g"])(s["a"],{key:1},[P,Object(s["h"])("li",y,[Object(s["h"])("a",{class:"page-link",href:"#",onClick:e[2]||(e[2]=t=>l.goToPage(a.total))},Object(s["I"])(a.total),1)])],64)):Object(s["f"])("",!0),Object(s["h"])("li",{class:Object(s["q"])(["page-item",{disabled:l.isDisableLast}])},[Object(s["h"])("a",{class:"page-link",href:"#",onClick:e[3]||(e[3]=t=>l.goToPage(a.page+1))},"Next")],2)])])):Object(s["f"])("",!0)}var D={props:{page:{type:Number,default:1,required:!0},total:{type:Number,default:0,required:!0}},computed:{isDisableFirst(){return 1===this.page},isDisableLast(){return this.page===this.total},showFirst(){return this.page>4&&this.total>6},showLast(){return this.page<this.total-3&&this.total>6},pagesRange(){let t=this.page-2,e=this.page+2;return this.page<5&&(t=1,e=5),this.page>this.total-4&&(t=this.total-4,e=this.total),t<1&&(t=1),e>this.total&&(e=this.total),6===this.total&&(t=1),Array(e-t+1).fill().map((e,a)=>t+a)}},methods:{goToPage(t){this.$emit("toPage",t)}}},I=(a("d70f"),a("6b0d")),z=a.n(I);const N=z()(D,[["render",T],["__scopeId","data-v-950a2b60"]]);var q=N,C={name:"NewsList",components:{Pagination:q},data(){return{list:{},pageSize:20,page:1}},computed:{totalPages(){const t=Math.ceil(this.list.totalResults/this.pageSize),e=Math.ceil(100/this.pageSize);return this.list.totalResults<100?t:e}},created(){this.fetchData()},methods:{fetchData(){let t="https://newsapi.org/v2/everything?q=building&apiKey=e23c4f3c33e34a7ab9e2bfab2dcfe29f";t+="&language=en",t+="&sortBy=publishedAt",t+="&pageSize="+this.pageSize,t+="&page="+this.page,u.a.get(t).then(t=>{this.list=t.data})},goToPage(t){this.page=t,this.fetchData()}}};a("4c55");const F=z()(C,[["render",O],["__scopeId","data-v-07356d67"]]);e["default"]=F},acbd:function(t,e,a){},b69e:function(t,e,a){},d70f:function(t,e,a){"use strict";a("acbd")}}]);
//# sourceMappingURL=chunk-79f005aa.4f07a3d4.js.map