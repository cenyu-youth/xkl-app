(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["certification"],{4723:function(t,e,a){},"6cbe":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"certification"},[a("NavBar",{attrs:{title:"资金明细",isTrueArrow:!0,rtTtit:"",rtPath:"tixiandetail"}})],1)},r=[],n=(a("99af"),a("d000")),o=(a("4328"),a("2f62")),c={name:"Certification",components:{NavBar:n["a"]},data:function(){return{tab_a_active:0,tab_b_active:0,page:1,pageSize:10,listData:{},list:[],isTrue:!1}},computed:Object(o["c"])(["userInfo","user"]),created:function(){},methods:{reqData:function(t,e){var a=this;console.info(t,e),this.axios({headers:{"user-id":this.userInfo.user_id,"user-token":this.userInfo.user_token},method:"POST",url:"http://106.12.220.193/Webapp/Bill/getBillList",data:{page:e?this.page:1,pageSize:this.pageSize,DataType:t}}).then((function(t){var i=t.data;if(console.info("请求资金详情页数据===>",i),0==i.code){if(a.listData=i.data,e){var r=a.list;a.list=r.concat(i.data.DataList)}else a.list=i.data.DataList;i.data.HasNextPage&&(a.page+=1)}else 9999==i.code&&a.$router.push({name:"login"})})).catch((function(t){console.log("err ==> ",t)}))}}},s=c,u=(a("a8ac"),a("2877")),f=Object(u["a"])(s,i,r,!1,null,"6e7e8305",null);e["default"]=f.exports},"99af":function(t,e,a){"use strict";var i=a("23e7"),r=a("d039"),n=a("e8b5"),o=a("861d"),c=a("7b0b"),s=a("50c4"),u=a("8418"),f=a("65f0"),l=a("1dde"),d=a("b622"),p=a("2d00"),h=d("isConcatSpreadable"),g=9007199254740991,v="Maximum allowed index exceeded",b=p>=51||!r((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),w=l("concat"),m=function(t){if(!o(t))return!1;var e=t[h];return void 0!==e?!!e:n(t)},_=!b||!w;i({target:"Array",proto:!0,forced:_},{concat:function(t){var e,a,i,r,n,o=c(this),l=f(o,0),d=0;for(e=-1,i=arguments.length;e<i;e++)if(n=-1===e?o:arguments[e],m(n)){if(r=s(n.length),d+r>g)throw TypeError(v);for(a=0;a<r;a++,d++)a in n&&u(l,d,n[a])}else{if(d>=g)throw TypeError(v);u(l,d++,n)}return l.length=d,l}})},a8ac:function(t,e,a){"use strict";a("4723")}}]);
//# sourceMappingURL=certification.d7594a60.js.map