(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["tijiaopj"],{"0cb2":function(t,e,a){var i=a("7b0b"),s=Math.floor,n="".replace,r=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,o=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,a,c,l,u){var d=a+t.length,p=c.length,v=o;return void 0!==l&&(l=i(l),v=r),n.call(u,v,(function(i,n){var r;switch(n.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,a);case"'":return e.slice(d);case"<":r=l[n.slice(1,-1)];break;default:var o=+n;if(0===o)return i;if(o>p){var u=s(o/10);return 0===u?i:u<=p?void 0===c[u-1]?n.charAt(1):c[u-1]+n.charAt(1):i}r=c[o-1]}return void 0===r?"":r}))}},"14c3":function(t,e,a){var i=a("c6b6"),s=a("9263");t.exports=function(t,e){var a=t.exec;if("function"===typeof a){var n=a.call(t,e);if("object"!==typeof n)throw TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==i(t))throw TypeError("RegExp#exec called on incompatible receiver");return s.call(t,e)}},4417:function(t,e,a){},5319:function(t,e,a){"use strict";var i=a("d784"),s=a("825a"),n=a("50c4"),r=a("a691"),o=a("1d80"),c=a("8aa5"),l=a("0cb2"),u=a("14c3"),d=Math.max,p=Math.min,v=function(t){return void 0===t?t:String(t)};i("replace",2,(function(t,e,a,i){var f=i.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,_=i.REPLACE_KEEPS_$0,h=f?"$":"$0";return[function(a,i){var s=o(this),n=void 0==a?void 0:a[t];return void 0!==n?n.call(a,s,i):e.call(String(s),a,i)},function(t,i){if(!f&&_||"string"===typeof i&&-1===i.indexOf(h)){var o=a(e,t,this,i);if(o.done)return o.value}var m=s(t),x=String(this),g="function"===typeof i;g||(i=String(i));var b=m.global;if(b){var C=m.unicode;m.lastIndex=0}var k=[];while(1){var w=u(m,x);if(null===w)break;if(k.push(w),!b)break;var y=String(w[0]);""===y&&(m.lastIndex=c(x,n(m.lastIndex),C))}for(var E="",$=0,A=0;A<k.length;A++){w=k[A];for(var I=String(w[0]),T=d(p(r(w.index),x.length),0),S=[],D=1;D<w.length;D++)S.push(v(w[D]));var R=w.groups;if(g){var L=[I].concat(S,T,x);void 0!==R&&L.push(R);var j=String(i.apply(void 0,L))}else j=l(I,x,T,S,R,i);T>=$&&(E+=x.slice($,T)+j,$=T+I.length)}return E+x.slice($)}]}))},"8aa5":function(t,e,a){"use strict";var i=a("6547").charAt;t.exports=function(t,e,a){return e+(a?i(t,e).length:1)}},9263:function(t,e,a){"use strict";var i=a("ad6d"),s=a("9f7f"),n=a("5692"),r=RegExp.prototype.exec,o=n("native-string-replace",String.prototype.replace),c=r,l=function(){var t=/a/,e=/b*/g;return r.call(t,"a"),r.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=s.UNSUPPORTED_Y||s.BROKEN_CARET,d=void 0!==/()??/.exec("")[1],p=l||d||u;p&&(c=function(t){var e,a,s,n,c=this,p=u&&c.sticky,v=i.call(c),f=c.source,_=0,h=t;return p&&(v=v.replace("y",""),-1===v.indexOf("g")&&(v+="g"),h=String(t).slice(c.lastIndex),c.lastIndex>0&&(!c.multiline||c.multiline&&"\n"!==t[c.lastIndex-1])&&(f="(?: "+f+")",h=" "+h,_++),a=new RegExp("^(?:"+f+")",v)),d&&(a=new RegExp("^"+f+"$(?!\\s)",v)),l&&(e=c.lastIndex),s=r.call(p?a:c,h),p?s?(s.input=s.input.slice(_),s[0]=s[0].slice(_),s.index=c.lastIndex,c.lastIndex+=s[0].length):c.lastIndex=0:l&&s&&(c.lastIndex=c.global?s.index+s[0].length:e),d&&s&&s.length>1&&o.call(s[0],a,(function(){for(n=1;n<arguments.length-2;n++)void 0===arguments[n]&&(s[n]=void 0)})),s}),t.exports=c},"97eb":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"ti_jaio_pj"},[i("NavBar",{attrs:{title:"提交评价",isTrueArrow:!0}}),i("div",{staticClass:"tips_box"},[i("div",{staticClass:"tip_item"},[i("div",{staticClass:"tp_lt"},[t._v("目标店铺")]),i("div",{staticClass:"tp_rt"},[i("span",[t._v(t._s(t.taskData.shop_name_encry))])])]),t._m(0)]),i("div",{staticClass:"task_item"},[i("div",{staticClass:"task_ct"},[i("div",{staticClass:"img_box"},[i("img",{attrs:{src:t.taskData.default_picture,alt:""}}),i("img",{staticClass:"layer",attrs:{src:a("af21"),alt:""}})]),i("div",{staticClass:"ct_box"},[i("div",{staticClass:"ct_tp"},[i("div",{staticClass:"store"},[t._v("购买店铺："),i("span",[t._v(t._s(t.taskData.shop_name_encry))])])]),i("div",{staticClass:"ct_tp"},[i("div",{staticClass:"store"},[t._v("购买数量："),i("span",[t._v(t._s(t.taskData.product_num))]),t._v(" 件")])]),i("div",{staticClass:"ct_tp"},[i("div",{staticClass:"store"},[t._v("商品价格："),i("span",[t._v(t._s(t.taskData.real_price))]),t._v(" 元")])]),i("div",{staticClass:"ct_tp"},[i("div",{staticClass:"store"},[t._v("任务佣金："),i("span",[t._v(t._s(t.taskData.commission))]),t._v(" 元")])])])])]),i("div",{staticClass:"tit_box"},[i("van-icon",{attrs:{name:"star"}}),t._v(" 任务要点 ")],1),i("div",{staticClass:"tips_box"},[i("div",{staticClass:"tip_tp"},[t._v("请按照任务要求认真评价和截图")]),i("div",{staticClass:"tip_item"},[i("div",{staticClass:"tp_lt"},[t._v("订单编号")]),i("div",{staticClass:"tp_rt"},[t._v(t._s(t.taskData.order_unique))])]),i("div",{staticClass:"tip_item"},[i("div",{staticClass:"tp_lt"},[t._v("任务类型")]),i("div",{staticClass:"tp_rt"},[i("span",[t._v(t._s(t.taskData.task_type_name))])])]),i("div",{staticClass:"tip_item"},[i("div",{staticClass:"tp_lt"},[t._v("平台订单标号")]),i("div",{staticClass:"tp_rt"},[t._v(t._s(t.taskData.task_unique))])])]),i("div",{staticClass:"tit_box"},[i("van-icon",{attrs:{name:"star"}}),t._v(" 注意事项 ")],1),t._m(1),i("div",{staticClass:"tit_box"},[i("van-icon",{attrs:{name:"star"}}),t._v(" 评价步骤 ")],1),i("div",{staticClass:"setp_task"},[i("div",{staticStyle:{padding:"0 18px"}},[i("div",{staticClass:"tit"},[t._v("第一步：确认收货")]),i("div",{staticClass:"ct"},[i("i"),t._v(" 请确认使用的账户为"),i("span",[t._v(t._s(t.taskData.account_name))]),t._v("账号登录 ")]),t._m(2),i("div",{staticClass:"tit"},[t._v("第二步：订单评价")]),t._m(3),i("div",{staticClass:"copy_box"},[i("div",{staticClass:"cts"},[i("van-icon",{attrs:{name:"eye-o"}}),t._v("文字评价内容")],1),i("div",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.taskData.evaluate,expression:"taskData.evaluate",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"}],staticClass:"btns"},[t._v("点击复制")])]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.taskData.evaluate,expression:"taskData.evaluate"}],staticClass:"tkl_box",staticStyle:{"min-height":"60px"},attrs:{type:"text",readonly:"true"},domProps:{value:t.taskData.evaluate},on:{input:function(e){e.target.composing||t.$set(t.taskData,"evaluate",e.target.value)}}}),i("div",{staticClass:"img_box_box"},t._l(t.taskData.image_list,(function(e,a){return i("img",{key:a,attrs:{src:e,alt:""},on:{touchstart:function(a){return a.preventDefault(),t.down(e)},touchend:function(e){return e.preventDefault(),t.up(e)},click:function(a){return t.saveFile(e)}}})})),0),i("div",{staticClass:"cts"},[i("van-icon",{attrs:{name:"eye-o"}}),t._v("长按保存图片 图片下载失败,联系在线客服获取")],1),i("div",{staticClass:"tit"},[t._v("第三步：截图上传")]),t._m(4),i("div",{staticClass:"cts"},[i("van-icon",{attrs:{name:"eye-o"}}),t._v("评价截图（至少上传一张）")],1)]),i("div",{staticClass:"upp_box"},[i("div",{staticClass:"let_box"},[i("van-uploader",{attrs:{"upload-text":"评价截图1","preview-size":"148",multiple:"","max-count":1},model:{value:t.uploadArr.fileLista,callback:function(e){t.$set(t.uploadArr,"fileLista",e)},expression:"uploadArr.fileLista"}}),i("van-uploader",{attrs:{"upload-text":"评价截图2","preview-size":"148",multiple:"","max-count":1},model:{value:t.uploadArr.fileListb,callback:function(e){t.$set(t.uploadArr,"fileListb",e)},expression:"uploadArr.fileListb"}})],1),i("div",{staticClass:"let_box"},[i("van-uploader",{attrs:{"upload-text":"评价截图3","preview-size":"148",multiple:"","max-count":1},model:{value:t.uploadArr.fileListc,callback:function(e){t.$set(t.uploadArr,"fileListc",e)},expression:"uploadArr.fileListc"}}),i("van-uploader",{attrs:{"upload-text":"评价截图4","preview-size":"148",multiple:"","max-count":1},model:{value:t.uploadArr.fileListd,callback:function(e){t.$set(t.uploadArr,"fileListd",e)},expression:"uploadArr.fileListd"}})],1),i("div",{staticClass:"let_box"},[i("van-uploader",{attrs:{"upload-text":"评价截图5","preview-size":"148",multiple:"","max-count":1},model:{value:t.uploadArr.fileListe,callback:function(e){t.$set(t.uploadArr,"fileListe",e)},expression:"uploadArr.fileListe"}}),i("van-uploader",{attrs:{"upload-text":"评价截图6","preview-size":"148",multiple:"","max-count":1},model:{value:t.uploadArr.fileListf,callback:function(e){t.$set(t.uploadArr,"fileListf",e)},expression:"uploadArr.fileListf"}})],1),i("div",{staticClass:"let_box"},[i("van-uploader",{attrs:{"upload-text":"评价截图7","preview-size":"148",multiple:"","max-count":1},model:{value:t.uploadArr.fileListg,callback:function(e){t.$set(t.uploadArr,"fileListg",e)},expression:"uploadArr.fileListg"}})],1)]),i("van-button",{staticClass:"btns",staticStyle:{"margin-top":"20px"},attrs:{type:"primary",size:"large"},on:{click:t.submit}},[t._v("提交任务评价")])],1),t.taskData?t._e():i("div",{staticClass:"noList"},[t._v("没有更多数据了")])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tip_item",staticStyle:{"border-top":"none"}},[a("div",{staticClass:"tp_lt"},[t._v("目标商品")]),a("div",{staticClass:"tp_rt"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"zhuyi_box"},[a("div",{staticClass:"tit"},[t._v("评价内容中不能出现“任务，做单，种菜”等词汇")]),a("div",{staticClass:"ct"},[t._v("1：五星+15字左右文字好评")]),a("div",{staticClass:"ct"},[t._v("2：根据任务类型，按照商家要求评价")]),a("div",{staticClass:"ct"},[t._v("3：提交前和提交后截图")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ct"},[a("i"),t._v("找到订单，确认收货 ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ct"},[a("i"),t._v("普通好评任务,请您随意发挥 ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ct"},[a("i"),t._v("将评价过程的截图上传 ")])}],n=a("1da1"),r=(a("4662"),a("28a2")),o=a("5530"),c=(a("b64b"),a("a15b"),a("ac1f"),a("5319"),a("d3b7"),a("ddb0"),a("96cf"),a("d000")),l=a("4328"),u=a.n(l),d=a("2f62"),p={name:"TijiaoPJ",components:{NavBar:c["a"]},computed:Object(d["c"])(["userInfo","user"]),data:function(){return{taskData:[],downTimeeee:30,tkl:"",zhifu:[],dfje:"",ptbh:"",objName:["filea","fileb","filec","filed","filee","filef","fileg"],uploadArr:[],isShowBt:!1}},created:function(){this.reqInit()},mounted:function(){this.changeReSize()},methods:Object(o["a"])(Object(o["a"])({},Object(d["b"])(["changeUserInfo","changeUser"])),{},{down:function(t){var e=this;clearTimeout(this.setIt),this.setIt=setTimeout((function(){e.saveFile(t)}),300)},up:function(){clearTimeout(this.setIt)},saveFile:function(t){var e=document.createElementNS("http://www.w3.org/1999/xhtml","a");e.href=t,e.download=(new Date).toLocaleString();var a=document.createEvent("MouseEvents");a.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),e.dispatchEvent(a)},onCopy:function(){this.$toast.success("复制成功")},yulan:function(t){Object(r["a"])([t])},goState:function(t){this.$router.push(t)},changeReSize:function(){for(var t=document.querySelectorAll(".van-uploader__upload"),e=0;e<t.length;e++)t[e].style.height="228px"},upload:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.axios({headers:{"Content-Type":"application/x-www-form-urlencoded","user-id":e.userInfo.user_id,"user-token":e.userInfo.user_token},method:"POST",url:"http://106.12.220.193/Webapp/Upload/uploadFileImagesBase64",data:u.a.stringify({base64img:t.content})});case 2:return i=a.sent,a.abrupt("return",i);case 4:case"end":return a.stop()}}),a)})))()},submit:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,i,s,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.zhifu.length>0)){e.next=6;break}return e.next=3,t.upload(t.zhifu[0]);case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0="";case 7:if(a=e.t0,a=t.zhifu.length>0?a.data.data:"",i=[],!(Object.keys(t.uploadArr).length>0)){e.next=20;break}e.t1=regeneratorRuntime.keys(t.uploadArr);case 12:if((e.t2=e.t1()).done){e.next=20;break}return s=e.t2.value,e.next=16,t.upload(t.uploadArr[s][0]);case 16:n=e.sent,i.push(n.data.data),e.next=12;break;case 20:t.axios({headers:{"Content-Type":"application/x-www-form-urlencoded","user-id":t.userInfo.user_id,"user-token":t.userInfo.user_token},method:"POST",url:"http://106.12.220.193/Webapp/order/evaluateOrderInfo",data:u.a.stringify({order_unique:t.taskData.order_unique,content:i.join(";")})}).then((function(e){var a=e.data;console.info("请求任务详情=====>",a),0==a.code?(t.$toast(a.msg),t.$router.replace({name:"tasklist"})):9999==a.code?t.$router.push({name:"login"}):t.$toast(a.msg)})).catch((function(t){console.info(t)}));case 21:case"end":return e.stop()}}),e)})))()},cheackTKL:function(){var t=this;""!=this.tkl?this.axios({headers:{"Content-Type":"application/x-www-form-urlencoded","user-id":this.userInfo.user_id,"user-token":this.userInfo.user_token},method:"POST",url:"http://106.12.220.193/Webapp/order/checkOrderUrlPath",data:u.a.stringify({order_unique:this.$route.query.id,url:this.tkl,shop_type:this.taskData.shop_type})}).then((function(e){var a=e.data;console.info("请求任务详情=====>",a),0==a.code?(t.$toast(a.msg),t.isShowBt=!0,setTimeout((function(){t.changeReSize()}),200)):9999==a.code?t.$router.push({name:"login"}):t.$toast(a.msg)})).catch((function(t){console.info(t)})):this.$toast("请输入淘口令")},downTimeFn:function(t){var e=new Date(t).getTime(),a=(new Date).getTime(),i=(e-a)/1e3;i<0&&(this.downTimeeee="活动超时",clearInterval(this.settttt));var s=Math.floor(i/60/60%24),n=Math.floor(i/60%60),r=Math.floor(i%60);this.downTimeeee=(s<10?"0"+s:s)+":"+(n<10?"0"+n:n)+":"+(r<10?"0"+r:r)},reqInit:function(){var t=this;this.axios({headers:{"Content-Type":"application/x-www-form-urlencoded","user-id":this.userInfo.user_id,"user-token":this.userInfo.user_token},method:"GET",url:"http://106.12.220.193/webapp/order/getTasKOrderInfo?order_unique=".concat(this.$route.query.id),data:u.a.stringify({})}).then((function(e){var a=e.data;console.info("请求任务详情=====>",a),0==a.code?(t.taskData=a.data,2==a.data.status&&(t.settttt=setInterval((function(){t.downTimeFn(a.data.over_time)}),1e3)),t.downTimeFn(a.data.over_time)):9999==a.code&&t.$router.push({name:"login"})})).catch((function(t){console.info(t)}))}})},v=p,f=(a("bdba"),a("2877")),_=Object(f["a"])(v,i,s,!1,null,"4c0aeb3a",null);e["default"]=_.exports},"9f7f":function(t,e,a){"use strict";var i=a("d039");function s(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=i((function(){var t=s("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=i((function(){var t=s("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a15b:function(t,e,a){"use strict";var i=a("23e7"),s=a("44ad"),n=a("fc6a"),r=a("a640"),o=[].join,c=s!=Object,l=r("join",",");i({target:"Array",proto:!0,forced:c||!l},{join:function(t){return o.call(n(this),void 0===t?",":t)}})},ac1f:function(t,e,a){"use strict";var i=a("23e7"),s=a("9263");i({target:"RegExp",proto:!0,forced:/./.exec!==s},{exec:s})},ad6d:function(t,e,a){"use strict";var i=a("825a");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},af21:function(t,e,a){t.exports=a.p+"img/下载.70a9328b.png"},bdba:function(t,e,a){"use strict";a("4417")},d784:function(t,e,a){"use strict";a("ac1f");var i=a("6eeb"),s=a("d039"),n=a("b622"),r=a("9112"),o=n("species"),c=!s((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),u=n("replace"),d=function(){return!!/./[u]&&""===/./[u]("a","$0")}(),p=!s((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));t.exports=function(t,e,a,u){var v=n(t),f=!s((function(){var e={};return e[v]=function(){return 7},7!=""[t](e)})),_=f&&!s((function(){var e=!1,a=/a/;return"split"===t&&(a={},a.constructor={},a.constructor[o]=function(){return a},a.flags="",a[v]=/./[v]),a.exec=function(){return e=!0,null},a[v](""),!e}));if(!f||!_||"replace"===t&&(!c||!l||d)||"split"===t&&!p){var h=/./[v],m=a(v,""[t],(function(t,e,a,i,s){return e.exec===RegExp.prototype.exec?f&&!s?{done:!0,value:h.call(e,a,i)}:{done:!0,value:t.call(a,e,i)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),x=m[0],g=m[1];i(String.prototype,t,x),i(RegExp.prototype,v,2==e?function(t,e){return g.call(t,this,e)}:function(t){return g.call(t,this)})}u&&r(RegExp.prototype[v],"sham",!0)}}}]);
//# sourceMappingURL=tijiaopj.a861f7da.js.map