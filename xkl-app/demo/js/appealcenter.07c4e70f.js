(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["appealcenter"],{"22cf":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"appeal_center"},[a("NavBar",{attrs:{title:"申诉中心",isTrueArrow:!0}}),a("van-tabs",{staticStyle:{"border-bottom":"1px solid #ddd"},attrs:{background:"#f0f0f0"},on:{change:t.change},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[a("van-tab",{attrs:{title:"待处理"}}),a("van-tab",{attrs:{title:"申诉中"}}),a("van-tab",{attrs:{title:"申诉结束"}})],1),t._l(t.list,(function(e,n){return a("div",{key:n,staticClass:"item",on:{click:function(a){return t.shenSuDetail(e.order_unique)}}},[a("div",{staticClass:"item_tp"},[a("div",{staticClass:"lt"},[t._v("订单编号："+t._s(e.order_unique))]),a("div",{staticClass:"rt"},[t._v(t._s(e.status_desc))])]),a("div",{staticClass:"date"},[t._v(t._s(e.add_time))]),a("div",{staticClass:"shensu"},[t._v(t._s(e.type_name))])])}))],2)},s=[],i=a("5530"),c=a("d000"),r=a("4328"),o=a.n(r),u=a("2f62"),d={name:"AppealCenter",components:{NavBar:c["a"]},computed:Object(u["c"])(["userInfo","user"]),data:function(){return{list:[],active:0,page:1}},created:function(){this.reqInit(1)},methods:Object(i["a"])(Object(i["a"])({},Object(u["b"])(["changeUserInfo","changeUser"])),{},{change:function(t){this.page=1,this.reqInit(t+1),console.info(t+1)},shenSuDetail:function(t){this.$router.push({name:"appealdetail",query:{id:t}})},reqInit:function(t){var e=this;this.axios({headers:{"Content-Type":"application/x-www-form-urlencoded","user-id":this.userInfo.user_id,"user-token":this.userInfo.user_token},method:"POST",url:"http://106.12.220.193/Webapp/Appeal/getAppealList",data:o.a.stringify({PageSize:10,Page:this.page,Status:t})}).then((function(t){var a=t.data;console.info("请求申诉列表=====>",a),0==a.code?(a.data.HasNextPage&&(e.page+=1),e.list=a.data.DataList):9999==a.code&&e.$router.push({name:"login"})})).catch((function(t){console.info(t)}))}})},l=d,p=(a("cf3d"),a("2877")),f=Object(p["a"])(l,n,s,!1,null,"6974d60d",null);e["default"]=f.exports},ba2f:function(t,e,a){},cf3d:function(t,e,a){"use strict";a("ba2f")}}]);
//# sourceMappingURL=appealcenter.07c4e70f.js.map