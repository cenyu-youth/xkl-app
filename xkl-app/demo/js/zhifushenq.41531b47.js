(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["zhifushenq"],{"0cb2":function(e,t,n){var r=n("7b0b"),a=Math.floor,i="".replace,o=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,s=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,u,c,l){var d=n+e.length,f=u.length,p=s;return void 0!==c&&(c=r(c),p=o),i.call(l,p,(function(r,i){var o;switch(i.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,n);case"'":return t.slice(d);case"<":o=c[i.slice(1,-1)];break;default:var s=+i;if(0===s)return r;if(s>f){var l=a(s/10);return 0===l?r:l<=f?void 0===u[l-1]?i.charAt(1):u[l-1]+i.charAt(1):r}o=u[s-1]}return void 0===o?"":o}))}},"14c3":function(e,t,n){var r=n("c6b6"),a=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var i=n.call(e,t);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},5319:function(e,t,n){"use strict";var r=n("d784"),a=n("825a"),i=n("50c4"),o=n("a691"),s=n("1d80"),u=n("8aa5"),c=n("0cb2"),l=n("14c3"),d=Math.max,f=Math.min,p=function(e){return void 0===e?e:String(e)};r("replace",2,(function(e,t,n,r){var h=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,v=r.REPLACE_KEEPS_$0,g=h?"$":"$0";return[function(n,r){var a=s(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,a,r):t.call(String(a),n,r)},function(e,r){if(!h&&v||"string"===typeof r&&-1===r.indexOf(g)){var s=n(t,e,this,r);if(s.done)return s.value}var x=a(e),b=String(this),m="function"===typeof r;m||(r=String(r));var _=x.global;if(_){var y=x.unicode;x.lastIndex=0}var E=[];while(1){var I=l(x,b);if(null===I)break;if(E.push(I),!_)break;var w=String(I[0]);""===w&&(x.lastIndex=u(b,i(x.lastIndex),y))}for(var R="",$=0,S=0;S<E.length;S++){I=E[S];for(var k=String(I[0]),T=d(f(o(I.index),b.length),0),A=[],C=1;C<I.length;C++)A.push(p(I[C]));var O=I.groups;if(m){var q=[k].concat(A,T,b);void 0!==O&&q.push(O);var P=String(r.apply(void 0,q))}else P=c(k,b,T,A,O,r);T>=$&&(R+=b.slice($,T)+P,$=T+k.length)}return R+b.slice($)}]}))},"648f":function(e,t,n){},"7bb0":function(e,t,n){"use strict";n("648f")},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},9263:function(e,t,n){"use strict";var r=n("ad6d"),a=n("9f7f"),i=n("5692"),o=RegExp.prototype.exec,s=i("native-string-replace",String.prototype.replace),u=o,c=function(){var e=/a/,t=/b*/g;return o.call(e,"a"),o.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),l=a.UNSUPPORTED_Y||a.BROKEN_CARET,d=void 0!==/()??/.exec("")[1],f=c||d||l;f&&(u=function(e){var t,n,a,i,u=this,f=l&&u.sticky,p=r.call(u),h=u.source,v=0,g=e;return f&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),g=String(e).slice(u.lastIndex),u.lastIndex>0&&(!u.multiline||u.multiline&&"\n"!==e[u.lastIndex-1])&&(h="(?: "+h+")",g=" "+g,v++),n=new RegExp("^(?:"+h+")",p)),d&&(n=new RegExp("^"+h+"$(?!\\s)",p)),c&&(t=u.lastIndex),a=o.call(f?n:u,g),f?a?(a.input=a.input.slice(v),a[0]=a[0].slice(v),a.index=u.lastIndex,u.lastIndex+=a[0].length):u.lastIndex=0:c&&a&&(u.lastIndex=u.global?a.index+a[0].length:t),d&&a&&a.length>1&&s.call(a[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(a[i]=void 0)})),a}),e.exports=u},9445:function(e,t,n){e.exports=n.p+"img/ddd392b5-7a5d-4009-9b01-2e3f169ffd57.e4d4b4a5.png"},"9f7f":function(e,t,n){"use strict";var r=n("d039");function a(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a64b:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"zhi_fu_shen_q"},[r("NavBar",{attrs:{title:"支付信息",isTrueArrow:!0,rtTtit:"",rtPath:"addcollectionuser"}}),r("div",{staticClass:"tp"},[r("van-icon",{attrs:{name:"star"}}),e._v("订单编号："+e._s(e.ddbh)+" ")],1),r("div",{staticClass:"tip"},[e._v("填写平台订单编号")]),r("div",{staticClass:"inp_box"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.bh,expression:"bh"}],staticClass:"inp",attrs:{type:"number"},domProps:{value:e.bh},on:{input:function(t){t.target.composing||(e.bh=t.target.value)}}})]),r("div",{staticClass:"tip"},[e._v("支付截图")]),r("div",{staticClass:"img_box"},[r("van-uploader",{attrs:{"upload-text":"支付截图","preview-size":"148",multiple:"","max-count":1},model:{value:e.fileList,callback:function(t){e.fileList=t},expression:"fileList"}}),r("img",{staticClass:"img",attrs:{src:n("9445"),alt:""}})],1),r("van-button",{staticClass:"btn",attrs:{type:"primary",size:"large"},on:{click:function(t){return e.sumbit()}}},[e._v("提交支付信息")])],1)},a=[],i=n("1da1"),o=n("5530"),s=(n("ac1f"),n("5319"),n("96cf"),n("d000")),u=n("4328"),c=n.n(u),l=n("2f62"),d={name:"ZhiFuShenQ",components:{NavBar:s["a"]},computed:Object(l["c"])(["userInfo","user"]),data:function(){return{list:[],bh:"",fileList:[],ddbh:"",order_unique:"",task_unique:"",pay_img:[]}},created:function(){this.reqInit(),this.reqInitAAAA(),this.ddbh=this.$route.query.id},mounted:function(){this.changeReSize()},methods:Object(o["a"])(Object(o["a"])({},Object(l["b"])(["changeUserInfo","changeUser"])),{},{goState:function(e){this.$router.push(e)},shenSu:function(){2==this.taskData.appeal_url?this.$router.push({name:"appeal",query:{id:this.$route.query.id}}):1==this.taskData.appeal_url&&this.$router.push({name:"appealdetail",query:{id:this.$route.query.id}})},changeReSize:function(){for(var e=document.querySelectorAll(".van-uploader__upload"),t=0;t<e.length;t++)e[t].style.height="228px"},upload:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.axios({headers:{"Content-Type":"application/x-www-form-urlencoded","user-id":t.userInfo.user_id,"user-token":t.userInfo.user_token},method:"POST",url:"http://106.12.220.193/Webapp/Upload/uploadFileImagesBase64",data:c.a.stringify({base64img:e.content})});case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})))()},sumbit:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""!=e.bh){t.next=3;break}return e.$toast("请输入平台订单编号"),t.abrupt("return");case 3:if(n="",!(e.fileList.length>0&&e.fileList[0].url)){t.next=8;break}n=e.fileList[0].url,t.next=17;break;case 8:if(!(e.fileList.length>0)){t.next=14;break}return t.next=11,e.upload(e.fileList[0]);case 11:t.t0=t.sent,t.next=15;break;case 14:t.t0="";case 15:n=t.t0,n=e.fileList.length>0?n.data.data:"";case 17:e.axios({headers:{"Content-Type":"application/x-www-form-urlencoded","user-id":e.userInfo.user_id,"user-token":e.userInfo.user_token},method:"POST",url:"http://106.12.220.193/Webapp/order/saveConfirmedOrderInfo",data:c.a.stringify({order_unique:e.ddbh,platform_id:e.bh,pay_img:n})}).then((function(t){var n=t.data;console.info("请求收款账号列表=====>",n),0==n.code?(e.$toast(n.msg),e.$router.replace({name:"tasklist",query:{idx:2}})):9999==n.code?e.$router.push({name:"login"}):e.$toast(n.msg)})).catch((function(e){console.info(e)}));case 18:case"end":return t.stop()}}),t)})))()},reqInit:function(){var e=this;this.axios({headers:{"Content-Type":"application/x-www-form-urlencoded","user-id":this.userInfo.user_id,"user-token":this.userInfo.user_token},method:"POST",url:"http://106.12.220.193/webapp/bank/getList",data:c.a.stringify({})}).then((function(t){var n=t.data;console.info("请求收款账号列表=====>",n),0==n.code?e.list=n.data:9999==n.code&&e.$router.push({name:"login"})})).catch((function(e){console.info(e)}))},reqInitAAAA:function(){var e=this;this.axios({headers:{"Content-Type":"application/x-www-form-urlencoded","user-id":this.userInfo.user_id,"user-token":this.userInfo.user_token},method:"POST",url:"http://106.12.220.193/Webapp/Order/getOrderInfo",data:c.a.stringify({order_unique:this.$route.query.id})}).then((function(t){var n=t.data;console.info("请求收款账号列表=====>",n),0==n.code?(e.ddbh=n.data.order_unique,e.bh=n.data.platform_order_unique,e.fileList=n.data.pay_img?[{url:n.data.pay_img}]:[]):9999==n.code?e.$router.push({name:"login"}):e.$toast(n.msg)})).catch((function(e){console.info(e)}))}})},f=d,p=(n("7bb0"),n("2877")),h=Object(p["a"])(f,r,a,!1,null,"fee51286",null);t["default"]=h.exports},ac1f:function(e,t,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d784:function(e,t,n){"use strict";n("ac1f");var r=n("6eeb"),a=n("d039"),i=n("b622"),o=n("9112"),s=i("species"),u=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),c=function(){return"$0"==="a".replace(/./,"$0")}(),l=i("replace"),d=function(){return!!/./[l]&&""===/./[l]("a","$0")}(),f=!a((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,l){var p=i(e),h=!a((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),v=h&&!a((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return t=!0,null},n[p](""),!t}));if(!h||!v||"replace"===e&&(!u||!c||d)||"split"===e&&!f){var g=/./[p],x=n(p,""[e],(function(e,t,n,r,a){return t.exec===RegExp.prototype.exec?h&&!a?{done:!0,value:g.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:c,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),b=x[0],m=x[1];r(String.prototype,e,b),r(RegExp.prototype,p,2==t?function(e,t){return m.call(e,this,t)}:function(e){return m.call(e,this)})}l&&o(RegExp.prototype[p],"sham",!0)}}}]);
//# sourceMappingURL=zhifushenq.41531b47.js.map