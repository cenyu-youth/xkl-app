(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mine"],{"0765":function(t,e,a){t.exports=a.p+"img/default.2c90b657.png"},"0a4e":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mine"},[i("NavBar",{attrs:{isShowOpa:!0,isShowMsg:!0}}),i("div",{staticClass:"mine_info"},[i("img",{staticClass:"avatar",attrs:{src:a("0765"),alt:""}}),i("div",{staticClass:"txt_box"},[i("div",{staticClass:"user_box"},[t._v(t._s(t.user.username))]),i("div",{staticClass:"user_box"},[t._v(t._s(1==t.user.share_status?"邀请码"+t.user.invitation_code:"暂无邀请权限")+" "),1==t.user.share_status?i("span",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.user.invitation_code,expression:"user.invitation_code",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"}]},[t._v(" 复制 ")]):t._e()])]),1==t.user.share_status?i("img",{staticClass:"qe_code",attrs:{src:a("172a"),alt:""},on:{click:function(e){return t.goState({name:"share"})}}}):t._e()]),i("div",{staticClass:"bar_lan"},[i("div",{staticClass:"bar_item",on:{click:function(e){return t.goLinkYz({name:"capitaldetails"})}}},[i("div",{staticClass:"num"},[t._v(t._s(t.userData.user_info.amount))]),i("div",[t._v("推广费余额")])]),i("div",{staticClass:"bar_item",on:{click:function(e){return t.goLinkYz({name:"capitaldetails"})}}},[i("div",{staticClass:"num"},[t._v(t._s(t.userData.user_info.commission))]),i("div",[t._v("累计收益")])]),i("div",{staticClass:"bar_item",on:{click:function(e){return t.goLinkYz({name:"capitaldetails"})}}},[i("div",{staticClass:"num"},[t._v(t._s(t.userData.forcash_count?t.userData.forcash_count:0))]),i("div",[t._v("提现中")])]),i("div",{staticClass:"bar_item line",on:{click:function(e){return t.goLinkYz({name:"tasklist",query:{idx:0}})}}},[i("div",{staticClass:"num"},[t._v(t._s(t.userData.order_count_list["6"]?t.userData.order_count_list["6"].count:0))]),i("div",[t._v("总结单量")])]),i("div",{staticClass:"bar_item bar_icon",on:{click:function(e){t.goLinkYz({name:"tixianapply"})}}},[t._m(0),i("div",[t._v("我要提现")])])]),i("div",{staticClass:"bar_lan"},[i("div",{staticClass:"bar_item",on:{click:function(e){return t.goLinkYz({name:"tasklist",query:{idx:1}})}}},[i("div",{staticClass:"num"},[t._v(t._s(t.userData.order_count_list["2"]?t.userData.order_count_list["2"].count:0))]),i("div",[t._v("待操作")])]),i("div",{staticClass:"bar_item",on:{click:function(e){return t.goLinkYz({name:"tasklist",query:{idx:2}})}}},[i("div",{staticClass:"num"},[t._v(t._s(t.userData.order_count_list["3"]?t.userData.order_count_list["3"].count:0))]),i("div",[t._v("待返款")])]),i("div",{staticClass:"bar_item",on:{click:function(e){return t.goLinkYz({name:"tasklist",query:{idx:4}})}}},[i("div",{staticClass:"num"},[t._v(t._s(t.userData.order_count_list["4"]?t.userData.order_count_list["4"].count:0))]),i("div",[t._v("待评价")])]),i("div",{staticClass:"bar_item line",on:{click:function(e){return t.goLinkYz({name:"tasklist",query:{idx:3}})}}},[i("div",{staticClass:"num"},[t._v(t._s(t.userData.order_count_list["10"]?t.userData.order_count_list["10"].count:0))]),i("div",[t._v("待追评")])]),i("div",{staticClass:"bar_item bar_icon",on:{click:function(e){return t.goLinkYz({name:"tasklist",query:{idx:0}})}}},[t._m(1),i("div",[t._v("全部任务")])])]),i("van-grid",{staticStyle:{"background-color":"#fff"},attrs:{"column-num":4,"icon-size":"25px",border:!1}},t._l(t.gridData,(function(e,a){return i("van-grid-item",{directives:[{name:"show",rawName:"v-show",value:"我的推广"!=e.txt&&"推广赚金"!=e.txt||1==t.user.share_status,expression:"(v.txt == '我的推广' || v.txt == '推广赚金') ? user.share_status == 1 : true"}],key:a,attrs:{icon:e.url,text:e.txt},on:{click:function(a){return t.goState({name:e.name})}}})})),1),i("img",{staticClass:"rg_kefu",attrs:{src:a("edc0"),alt:""},on:{click:function(e){return t.goState({name:"help"})}}}),i("van-overlay",{attrs:{show:t.showOver,"z-index":"99999"},on:{click:function(e){t.showOver=!1}}}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showOver,expression:"showOver"}],staticClass:"dialog_box"},[i("div",{staticClass:"dialog_title"},[t._v(t._s(t.userData.top_notice_info?t.userData.top_notice_info.title:""))]),i("pre",{ref:"wrapper",staticClass:"dialog_ct"},[t._v(t._s(t.userData.top_notice_info.content))]),i("div",{staticClass:"btns"},[i("van-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:function(e){t.showOver=!1}}},[t._v("确定")]),i("van-button",{staticClass:"btn",attrs:{type:"danger"},on:{click:t.todyNo}},[t._v("今日不再提醒")])],1)]),i("TabBar",{attrs:{active:1}})],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("img",{attrs:{src:a("6a4a"),alt:""}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("img",{attrs:{src:a("76cc"),alt:""}})])}],s=a("5530"),o=a("0311"),c=a("d000"),r=a("c3fb"),u=(a("4328"),a("2f62")),l={name:"Mine",components:{TabBar:o["a"],NavBar:c["a"]},data:function(){return{utils:new r["a"](this),sysAppIds:"",gridData:[{url:a("cc2b"),txt:"账号绑定",name:"binuser"},{url:a("dede"),txt:"身份验证",name:"authentication"},{url:a("f1c8"),txt:"推广赚金",name:"extension"},{url:a("0d30"),txt:"我的推广",name:"mineextension"},{url:a("dede"),txt:"帮助与客服",name:"help"},{url:a("96b2"),txt:"账号完成率",name:"taskrule"},{url:a("540f"),txt:"申诉中心",name:"appealcenter"},{url:a("996f"),txt:"收款账号",name:"collectionuser"}],userData:{user_info:{user_id:"",level:"",username:"",real_name:"",sex:"",invitation_code:"",invitation_code_end_time:"",status:"",id_status:"",id_remark:"",share_status:"",amount:"",frozen_amount:"",commission:"",id_hold_photo:"",id_front_photo:"",id_other_photo:"",id_status_desc:""},order_count_list:{},forcash_count:0,top_notice_info:{title:"",content:""}},showOver:!1}},computed:Object(u["c"])(["userInfo","user"]),created:function(){var t=this;this.$toast.loading({message:"数据加载中...",forbidClick:!0,duration:0}),this.axios({headers:{"Content-Type":"application/x-www-form-urlencoded","user-id":this.userInfo.user_id,"user-token":this.userInfo.user_token},method:"POST",url:"http://106.12.220.193/webapp/home/myInfo",params:{}}).then((function(e){t.$toast.clear();var a=e.data;console.info("请求个人页的信息=====>",a.data),0==a.code?(t.changeUser(a.data.user_info),t.userData=a.data,setTimeout((function(){a.data.top_notice_info.content&&t.todayShowPop(),t.$refs.wrapper.innerHTML=a.data.top_notice_info.content}),200)):9999==a.code&&t.$router.push({name:"login"})})).catch((function(e){t.$toast.clear(),console.info(e)}))},methods:Object(s["a"])(Object(s["a"])({},Object(u["b"])(["changeUserInfo","changeUser"])),{},{goLinkYz:function(t){console.info(this.user),0==this.user.id_status?this.$router.push({name:"authentication"}):this.$router.push(t)},todayShowPop:function(){var t=JSON.parse(localStorage.getItem("minePop")),e=new Date,a=e.getFullYear(),i=e.getMonth()+1,n=e.getDate();if(t){var s=new Date(t),o=s.getFullYear(),c=s.getMonth()+1,r=s.getDate();this.showOver=a>=o&&i>=c&&n>r}else this.showOver=!0},todyNo:function(){this.showOver=!1,localStorage.setItem("minePop",JSON.stringify((new Date).getTime()))},onCopy:function(t){this.$toast.success("复制成功")},onError:function(t){},goState:function(t){this.$router.push(t)}})},d=l,m=(a("f3195"),a("2877")),v=Object(m["a"])(d,i,n,!1,null,"7170dbde",null);e["default"]=v.exports},"0d30":function(t,e,a){t.exports=a.p+"img/home-qrCode-2.fc52a984.svg"},"0e08":function(t,e,a){},"172a":function(t,e,a){t.exports=a.p+"img/home-qrCode.12afa36f.svg"},"540f":function(t,e,a){t.exports=a.p+"img/home-appeal.9f079660.png"},"6a4a":function(t,e,a){t.exports=a.p+"img/home-coin.cb9b04d1.svg"},"76cc":function(t,e,a){t.exports=a.p+"img/home-all-task.87ae746a.png"},"96b2":function(t,e,a){t.exports=a.p+"img/home-finish.e7e8a144.png"},"996f":function(t,e,a){t.exports=a.p+"img/home-version.585830c7.png"},cc2b:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF0WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTA0LTE2VDA5OjQwOjI0KzA4OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDE5LTA0LTE2VDA5OjQwOjI0KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0wNC0xNlQwOTo0MDoyNCswODowMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpmOGFlYTg3Ny1kNjgwLWZlNGYtOGVlMy1iYTEyOWJkODAwMzQiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo3MTRlNDg1OC0wOGUzLTc4NDUtOTU4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"},dede:function(t,e,a){t.exports=a.p+"img/home-feedback.d5ff0e5e.png"},edc0:function(t,e,a){t.exports=a.p+"img/home-customer-service.7391e075.png"},f1c8:function(t,e,a){t.exports=a.p+"img/index-active-image.faa8bf30.png"},f3195:function(t,e,a){"use strict";a("0e08")}}]);
//# sourceMappingURL=mine.6b88e313.js.map