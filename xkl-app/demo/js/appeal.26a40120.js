(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["appeal"],{"0124":function(t,e,n){"use strict";n("7ff6")},"0cb2":function(t,e,n){var a=n("7b0b"),r=Math.floor,i="".replace,o=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,s=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,n,c,u,l){var d=n+t.length,p=c.length,f=s;return void 0!==u&&(u=a(u),f=o),i.call(l,f,(function(a,i){var o;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(d);case"<":o=u[i.slice(1,-1)];break;default:var s=+i;if(0===s)return a;if(s>p){var l=r(s/10);return 0===l?a:l<=p?void 0===c[l-1]?i.charAt(1):c[l-1]+i.charAt(1):a}o=c[s-1]}return void 0===o?"":o}))}},"14c3":function(t,e,n){var a=n("c6b6"),r=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var i=n.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==a(t))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},"3c27":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"appeal"},[a("NavBar",{attrs:{title:"订单申诉",isTrueArrow:!0}}),a("div",{staticClass:"shop_card"},[a("div",{staticClass:"card_top"},[a("div",{staticClass:"card_top_lt"},[a("img",{staticClass:"metp",attrs:{src:n("f7e2"),alt:""}}),a("div",{staticClass:"card_top_tit"},[t._v(t._s(t.taskData.task_type_map))])]),a("div",{staticClass:"card_top_rt"},[t._v(t._s(t.taskData.status_map))])]),a("div",{staticClass:"card_ct"},[a("div",{staticClass:"ct_lt"},[a("img",{staticClass:"bg",attrs:{src:t.taskData.product_picture,alt:""}})]),a("div",{staticClass:"ct_rt"},[a("div",{staticClass:"ct_rt_ct van-ellipsis"},[t._v("订单编号："+t._s(t.taskData.order_unique))]),a("div",{staticClass:"ct_rt_ct van-ellipsis"},[t._v("类型："+t._s(t.taskData.keyword_map))])])])]),a("van-cell",{attrs:{"is-link":""},on:{click:function(e){t.showPicker=!0}}},[t._v(t._s(t.value.text))]),a("van-popup",{attrs:{round:"",position:"bottom"},model:{value:t.showPicker,callback:function(e){t.showPicker=e},expression:"showPicker"}},[a("van-picker",{attrs:{"show-toolbar":"",title:"申诉原因",columns:t.columns},on:{cancel:function(e){t.showPicker=!1},confirm:t.onConfirm}})],1),a("div",{staticClass:"inp_shensu"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.shenSutext,expression:"shenSutext"}],attrs:{row:"10",placeholder:"请输入您的申诉说明"},domProps:{value:t.shenSutext},on:{input:function(e){e.target.composing||(t.shenSutext=e.target.value)}}})]),a("div",{staticClass:"upload"},[a("van-uploader",{attrs:{multiple:"","max-count":2,"after-read":t.upLoad,"before-delete":t.deleteImg},model:{value:t.fileList,callback:function(e){t.fileList=e},expression:"fileList"}})],1),a("van-button",{staticClass:"shen_su_btn",attrs:{type:"primary",size:"large"},on:{click:t.shenSu}},[t._v("申诉")])],1)},r=[],i=n("5530"),o=(n("d81d"),n("a434"),n("a15b"),n("ac1f"),n("5319"),n("d000")),s=n("4328"),c=n.n(s),u=n("2f62"),l={name:"Appeal",components:{NavBar:o["a"]},computed:Object(u["c"])(["userInfo","user"]),data:function(){return{taskData:"",value:{text:"请选择申诉原因"},showPicker:!1,columns:["任务问题","商品找不到","超时未返款","金额填写错误","快递问题","撤销订单","淘宝客","好评问题","未下单/未付款/拍错店","其他问题"],fileList:[],endImg:[],tagImg:[],shenSutext:""}},created:function(){this.reqInit(),this.resShenYuan()},methods:Object(i["a"])(Object(i["a"])({},Object(u["b"])(["changeUserInfo","changeUser"])),{},{onConfirm:function(t){this.value=t,this.showPicker=!1},deleteImg:function(t){var e=this.tagImg,n=this.endImg;return e.map((function(a,r){a.content==t.content&&(e.splice(r,1),n.splice(r,1))})),this.tagImg=e,this.endImg=n,!0},resShenYuan:function(){var t=this;this.axios({headers:{"Content-Type":"application/x-www-form-urlencoded","user-id":this.userInfo.user_id,"user-token":this.userInfo.user_token},method:"POST",url:" http://106.12.220.193/Webapp/Appeal/getTypeMap",data:c.a.stringify({})}).then((function(e){var n=e.data;if(console.info("提交申诉原因=====>",n),0==n.code){var a=[];for(var r in n.data)a.push({text:n.data[r],type:r});t.columns=a}else 9999==n.code?t.$router.push({name:"login"}):t.$toast(n.msg)})).catch((function(t){console.info(t)}))},shenSu:function(){var t=this;"请选择申诉原因"!=this.value.text?this.axios({headers:{"Content-Type":"application/x-www-form-urlencoded","user-id":this.userInfo.user_id,"user-token":this.userInfo.user_token},method:"POST",url:"http://106.12.220.193/Webapp/Appeal/saveOrderAppeal",data:c.a.stringify({OrderID:this.taskData.order_unique,ComplaintType:this.value.type,ComplaintNote:this.shenSutext,appeal_img:this.endImg.join(";")})}).then((function(e){var n=e.data;console.info("提交申诉=====>",n),0==n.code?(t.$toast(n.msg),setTimeout((function(){t.$router.replace({name:"appealcenter"})}),300)):9999==n.code?t.$router.push({name:"login"}):t.$toast(n.msg)})).catch((function(t){console.info(t)})):this.$toast("请选择申诉原因")},upLoad:function(t){var e=this;this.axios({headers:{"Content-Type":"application/x-www-form-urlencoded","user-id":this.userInfo.user_id,"user-token":this.userInfo.user_token},method:"POST",url:"http://106.12.220.193/Webapp/Upload/uploadFileImagesBase64",data:c.a.stringify({base64img:t.content})}).then((function(n){var a=n.data;if(console.info("上传图片=====>",a),0==a.code){var r=e.endImg,i=e.tagImg;i.push(t),e.tagImg=i,r.push(a.data),e.endImg=r,e.$toast("图片上传成功")}else 9999==a.code&&e.$router.push({name:"login"})})).catch((function(t){console.info(t)}))},reqInit:function(){var t=this;this.axios({headers:{"Content-Type":"application/x-www-form-urlencoded","user-id":this.userInfo.user_id,"user-token":this.userInfo.user_token},method:"POST",url:"http://106.12.220.193/Webapp/Order/getOrderInfo",data:c.a.stringify({order_unique:this.$route.query.id})}).then((function(e){var n=e.data;console.info("请求任务详情=====>",e),0==n.code?t.taskData=n.data:9999==n.code&&t.$router.push({name:"login"})})).catch((function(t){console.info(t)}))}})},d=l,p=(n("0124"),n("2877")),f=Object(p["a"])(d,a,r,!1,null,"e057da70",null);e["default"]=f.exports},5319:function(t,e,n){"use strict";var a=n("d784"),r=n("825a"),i=n("50c4"),o=n("a691"),s=n("1d80"),c=n("8aa5"),u=n("0cb2"),l=n("14c3"),d=Math.max,p=Math.min,f=function(t){return void 0===t?t:String(t)};a("replace",2,(function(t,e,n,a){var h=a.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,v=a.REPLACE_KEEPS_$0,g=h?"$":"$0";return[function(n,a){var r=s(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,r,a):e.call(String(r),n,a)},function(t,a){if(!h&&v||"string"===typeof a&&-1===a.indexOf(g)){var s=n(e,t,this,a);if(s.done)return s.value}var m=r(t),x=String(this),I="function"===typeof a;I||(a=String(a));var E=m.global;if(E){var b=m.unicode;m.lastIndex=0}var A=[];while(1){var R=l(m,x);if(null===R)break;if(A.push(R),!E)break;var S=String(R[0]);""===S&&(m.lastIndex=c(x,i(m.lastIndex),b))}for(var y="",w=0,C=0;C<A.length;C++){R=A[C];for(var k=String(R[0]),N=d(p(o(R.index),x.length),0),_=[],O=1;O<R.length;O++)_.push(f(R[O]));var j=R.groups;if(I){var D=[k].concat(_,N,x);void 0!==j&&D.push(j);var T=String(a.apply(void 0,D))}else T=u(k,x,N,_,j,a);N>=w&&(y+=x.slice(w,N)+T,w=N+k.length)}return y+x.slice(w)}]}))},"7ff6":function(t,e,n){},"8aa5":function(t,e,n){"use strict";var a=n("6547").charAt;t.exports=function(t,e,n){return e+(n?a(t,e).length:1)}},9263:function(t,e,n){"use strict";var a=n("ad6d"),r=n("9f7f"),i=n("5692"),o=RegExp.prototype.exec,s=i("native-string-replace",String.prototype.replace),c=o,u=function(){var t=/a/,e=/b*/g;return o.call(t,"a"),o.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=r.UNSUPPORTED_Y||r.BROKEN_CARET,d=void 0!==/()??/.exec("")[1],p=u||d||l;p&&(c=function(t){var e,n,r,i,c=this,p=l&&c.sticky,f=a.call(c),h=c.source,v=0,g=t;return p&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),g=String(t).slice(c.lastIndex),c.lastIndex>0&&(!c.multiline||c.multiline&&"\n"!==t[c.lastIndex-1])&&(h="(?: "+h+")",g=" "+g,v++),n=new RegExp("^(?:"+h+")",f)),d&&(n=new RegExp("^"+h+"$(?!\\s)",f)),u&&(e=c.lastIndex),r=o.call(p?n:c,g),p?r?(r.input=r.input.slice(v),r[0]=r[0].slice(v),r.index=c.lastIndex,c.lastIndex+=r[0].length):c.lastIndex=0:u&&r&&(c.lastIndex=c.global?r.index+r[0].length:e),d&&r&&r.length>1&&s.call(r[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0)})),r}),t.exports=c},"9f7f":function(t,e,n){"use strict";var a=n("d039");function r(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=a((function(){var t=r("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=a((function(){var t=r("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a15b:function(t,e,n){"use strict";var a=n("23e7"),r=n("44ad"),i=n("fc6a"),o=n("a640"),s=[].join,c=r!=Object,u=o("join",",");a({target:"Array",proto:!0,forced:c||!u},{join:function(t){return s.call(i(this),void 0===t?",":t)}})},a434:function(t,e,n){"use strict";var a=n("23e7"),r=n("23cb"),i=n("a691"),o=n("50c4"),s=n("7b0b"),c=n("65f0"),u=n("8418"),l=n("1dde"),d=l("splice"),p=Math.max,f=Math.min,h=9007199254740991,v="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!d},{splice:function(t,e){var n,a,l,d,g,m,x=s(this),I=o(x.length),E=r(t,I),b=arguments.length;if(0===b?n=a=0:1===b?(n=0,a=I-E):(n=b-2,a=f(p(i(e),0),I-E)),I+n-a>h)throw TypeError(v);for(l=c(x,a),d=0;d<a;d++)g=E+d,g in x&&u(l,d,x[g]);if(l.length=a,n<a){for(d=E;d<I-a;d++)g=d+a,m=d+n,g in x?x[m]=x[g]:delete x[m];for(d=I;d>I-a+n;d--)delete x[d-1]}else if(n>a)for(d=I-a;d>E;d--)g=d+a-1,m=d+n-1,g in x?x[m]=x[g]:delete x[m];for(d=0;d<n;d++)x[d+E]=arguments[d+2];return x.length=I-a+n,l}})},ac1f:function(t,e,n){"use strict";var a=n("23e7"),r=n("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(t,e,n){"use strict";var a=n("825a");t.exports=function(){var t=a(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},d784:function(t,e,n){"use strict";n("ac1f");var a=n("6eeb"),r=n("d039"),i=n("b622"),o=n("9112"),s=i("species"),c=!r((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),l=i("replace"),d=function(){return!!/./[l]&&""===/./[l]("a","$0")}(),p=!r((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,l){var f=i(t),h=!r((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),v=h&&!r((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[f]=/./[f]),n.exec=function(){return e=!0,null},n[f](""),!e}));if(!h||!v||"replace"===t&&(!c||!u||d)||"split"===t&&!p){var g=/./[f],m=n(f,""[t],(function(t,e,n,a,r){return e.exec===RegExp.prototype.exec?h&&!r?{done:!0,value:g.call(e,n,a)}:{done:!0,value:t.call(n,e,a)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),x=m[0],I=m[1];a(String.prototype,t,x),a(RegExp.prototype,f,2==e?function(t,e){return I.call(t,this,e)}:function(t){return I.call(t,this)})}l&&o(RegExp.prototype[f],"sham",!0)}},d81d:function(t,e,n){"use strict";var a=n("23e7"),r=n("b727").map,i=n("1dde"),o=i("map");a({target:"Array",proto:!0,forced:!o},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},f7e2:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAIAAADZrBkAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYyQjlBN0VFOEIwNjExRTZCRENGODQyODNENDVENEIxIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjYyQjlBN0VGOEIwNjExRTZCRENGODQyODNENDVENEIxIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjJCOUE3RUM4QjA2MTFFNkJEQ0Y4NDI4M0Q0NUQ0QjEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjJCOUE3RUQ4QjA2MTFFNkJEQ0Y4NDI4M0Q0NUQ0QjEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4hXLH2AAACrUlEQVR42pRTT0gUURx+7828mdld3XVXV2NlW6lEKqmTGwVRVHQoQ0EQukRKRZEduhVWl27ZIaEOoQQeFCI6JBTRNSIvUVFQW6umrrvSuuq6O7M7M+9Pb9ZdyRCqdxneb77ve+/3ve8H0+ej4P+XvGkVbtzyv9IgZ6UPBJz/ocJFsSL4G40xlpwCWEXBRjr7HWou1BAGZpHbppCAiip+OSyHDNA6RyDkAx3y3sM8u4RPnZN2tpEv71nRQMGQtCVC81kmtAhZu3H5NJ6cQa3RwI1HBIDl3migb8BKJ43tQ/jQSagbUPO43VXG2F36+hmqD3NFLtEog9U1ZPrr6vgwKBQ8VwZEDQdDuL0nd60TLiToctp752ng+lCmWKRvn6OmZueSzCa2vqqdOGN/mjAeD8qR1uWxB04XCzMydrm7L7u6L5gvRwVSO9pNzEK5N2ibsFDgCAf6hz0Xb6e7WuRqb358RG1sqht+w1Qft1XkrXWQWIYyLtMQB7g+bD68tdR3TDvYqbTuAcwi+Sxw+0T/lOgsFYeUOu1gWSp5UXJSPBWSkCSRxCRN/cChZjuTZPMxQCm0LZjT0fEuahEHSSggvEzjGNOf83bR9A++IqkpUQj03rQ/v2OJOMAKUjze9h4caRFwSAkzzcoDIM4l7H8SUyLN2f4ulssRxutGJjjg1koauF350fvS/iPCJDsxyS27QnO5kKcKUFv/9oFPx7iqZc62abujZC5uLybUjktA1pRd+8y5SWPsntRQ73hTngDLtKfi3B/EIi5Y4YtJljdEIFCgRjl9FYd3kNhH48UILOrythYgS3B9cLiu81QSVPl4JcQQScJHlpplFoASkGr9qHEr0NQNUYYeDwhH2ErWyeeaEHXcg6GIMB3KMvR5gYI3GRyoKlJD8F/G9JcAAwCQRy0hKyi4eAAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=appeal.26a40120.js.map