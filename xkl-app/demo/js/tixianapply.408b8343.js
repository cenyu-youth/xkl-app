(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tixianapply"],{e388:function(t,i,n){"use strict";n.r(i);var a=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"tixian_apply"},[n("NavBar",{attrs:{title:"提现申请",isTrueArrow:!0,rtTtit:"",rtPath:"tixiandetail"}}),n("van-cell",{attrs:{"is-link":""},on:{click:function(i){return t.goState({name:"collectionuser"})}}},[t._v(t._s(t.xinxi.info.bank_name?t.xinxi.info.bank_name:"")+" "+t._s(t.xinxi.info.bank_card_name?t.xinxi.info.bank_card_name:"")+" (尾号"+t._s(t.xinxi.info.bank_last_num)+")")]),n("div",{staticClass:"inp_box"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.tixain,expression:"tixain"}],staticClass:"money_box",attrs:{type:"text",placeholder:"请输入提现金币"},domProps:{value:t.tixain},on:{input:function(i){i.target.composing||(t.tixain=i.target.value)}}}),n("div",{staticClass:"tip"},[t._v("可提现"+t._s(t.xinxi.draw_config?t.xinxi.draw_config.amount:0)+"金")])]),n("div",{staticClass:"inp_box ax"},[n("div",{staticClass:"tip"},[t._v("1金=1元, "+t._s(t.xinxi.draw_config?t.xinxi.draw_config.min:0)+"金起提, 一天只能申请1次")])]),n("van-button",{staticClass:"submit_btnss",attrs:{type:"primary",size:"large"},on:{click:t.submit}},[t._v("提现申请")])],1)},e=[],s=n("5530"),o=n("d000"),r=n("4328"),c=n.n(r),u=n("2f62"),d={name:"TixianApply",components:{NavBar:o["a"]},computed:Object(u["c"])(["userInfo","user"]),data:function(){return{active:0,txPwd:"",money:"",info:"asda",xinxi:{info:{bank_name:""}},tixain:""}},created:function(){this.$route.query.id?this.reqInfo(this.$route.query.id):this.reqInit()},methods:Object(s["a"])(Object(s["a"])({},Object(u["b"])(["changeUserInfo","changeUser"])),{},{goState:function(t){this.$router.push(t)},submit:function(){var t=this;if(""!=this.tixain){var i=this.xinxi.draw_config;i.num<=0?this.$toast("今日可提款次数不足"):parseFloat(i.amount)<this.tixain?this.$toast("提现金额超出可提现金额"):this.tixain<i.min?this.$toast("提现金额".concat(i.min,"金起提")):this.axios({headers:{"Content-Type":"application/x-www-form-urlencoded","user-id":this.userInfo.user_id,"user-token":this.userInfo.user_token},method:"POST",url:"http://106.12.220.193/webapp/bill/SaveWithdrawals",data:c.a.stringify({cashMoney:this.tixain,BankId:this.xinxi.info.sign})}).then((function(i){var n=i.data;console.info("请求收款账号列表=====>",n),0==n.code?(t.$toast(n.msg),t.$router.push({name:"capitaldetails"})):9999==n.code?t.$router.push({name:"login"}):t.$toast(n.msg)})).catch((function(t){console.info(t)}))}else this.$toast("请输入提现金额")},reqInit:function(){var t=this;this.axios({headers:{"Content-Type":"application/x-www-form-urlencoded","user-id":this.userInfo.user_id,"user-token":this.userInfo.user_token},method:"POST",url:"http://106.12.220.193/webapp/bank/getList",data:c.a.stringify({})}).then((function(i){var n=i.data;console.info("请求收款账号列表=====>",n),0==n.code?t.reqInfo(n.data[0].sign):9999==n.code&&t.$router.push({name:"login"})})).catch((function(t){console.info(t)}))},reqInfo:function(t){var i=this;this.axios({headers:{"Content-Type":"application/x-www-form-urlencoded","user-id":this.userInfo.user_id,"user-token":this.userInfo.user_token},method:"POST",url:"http://106.12.220.193/webapp/bank/getInfo",data:c.a.stringify({sign:t})}).then((function(t){var n=t.data;console.info("请求收款账号列表=====>",n),0==n.code?i.xinxi=n.data:9999==n.code&&i.$router.push({name:"login"})})).catch((function(t){console.info(t)}))},changeActive:function(t){this.active=t,this.money="",this.txPwd=""}})},f=d,h=(n("f02b"),n("2877")),l=Object(h["a"])(f,a,e,!1,null,"68ec5508",null);i["default"]=l.exports},e540:function(t,i,n){},f02b:function(t,i,n){"use strict";n("e540")}}]);
//# sourceMappingURL=tixianapply.408b8343.js.map