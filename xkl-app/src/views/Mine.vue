<template>
  <div class="mine">

    <NavBar :isShowOpa="true" :isShowMsg="true"/>


    <!-- 个人信息 -->

    <div class="mine_info">

       <img src="../assets/mine/default.png" alt="" class="avatar">

       <div class="txt_box">
         <div class="user_box">{{user.username}}</div>
         <div class="user_box">{{user.share_status == 1 ? '邀请码' + user.invitation_code : '暂无邀请权限'}}
           <span
            v-if="user.share_status == 1"
            v-clipboard:copy="user.invitation_code"
            v-clipboard:success="onCopy"
            v-clipboard:error="onError">
            复制
          </span>
        </div>
       </div>

       <img v-if="user.share_status == 1" @click="goState({name: 'share'})" src="../assets/mine/home-qrCode.svg" alt="" class="qe_code">

    </div>

    <!-- 分栏 1 -->
     <div class="bar_lan">
       <div class="bar_item" @click="goLinkYz({name: 'capitaldetails'})">
         <div class="num">{{userData.user_info.amount}}</div>
         <div>推广费余额</div>
       </div>
       <div class="bar_item" @click="goLinkYz({name: 'capitaldetails'})">
         <div class="num">{{userData.user_info.commission}}</div>
         <div>累计收益</div>
       </div>
       <div class="bar_item" @click="goLinkYz({name: 'capitaldetails'})">
         <div class="num">{{userData.forcash_count ? userData.forcash_count : 0}}</div>
         <div>提现中</div>
       </div>
       <div class="bar_item line" @click="goLinkYz({name: 'tasklist', query:{idx:0}})">
         <div class="num">{{userData.order_count_list["6"] ? userData.order_count_list["6"].count : 0}}</div>
         <div>总结单量</div>
       </div>
       <div class="bar_item bar_icon" @click="goLinkYz(({name: 'tixianapply'}))">
         <div><img src="../assets/mine/home-coin.svg" alt=""></div>
         <div>我要提现</div>
       </div>
     </div>

    <!-- 分栏 2 -->
     <div class="bar_lan">
       <div class="bar_item" @click="goLinkYz({name: 'tasklist', query:{idx: 1}})">
         <div class="num">{{userData.order_count_list["2"] ? userData.order_count_list["2"].count : 0}}</div>
         <div>待操作</div>
       </div>
       <div class="bar_item" @click="goLinkYz({name: 'tasklist', query:{idx: 2}})">
         <div class="num">{{userData.order_count_list["3"] ? userData.order_count_list["3"].count : 0}}</div>
         <div>待返款</div>
       </div>
       <div class="bar_item"  @click="goLinkYz({name: 'tasklist', query:{idx: 4}})">
         <div class="num">{{userData.order_count_list["4"] ? userData.order_count_list["4"].count : 0}}</div>
         <div>待评价</div>
       </div>
       <div class="bar_item line" @click="goLinkYz({name: 'tasklist', query:{idx: 3}})">
         <div class="num">{{userData.order_count_list["10"] ? userData.order_count_list["10"].count : 0}}</div>
         <div>待追评</div>
       </div>
       <div class="bar_item bar_icon" @click="goLinkYz({name: 'tasklist', query:{idx: 0}})">
         <div><img src="../assets/mine/home-all-task.png" alt=""></div>
         <div>全部任务</div>
       </div>
     </div>

      <!-- 格子 -->
     <van-grid style="background-color: #fff;" :column-num="4" icon-size="25px" :border="false">
       <van-grid-item v-show="(v.txt == '我的推广' || v.txt == '推广赚金') ? user.share_status == 1 : true" @click="goState({name: v.name})" v-for="(v,i) in gridData" :key="i" :icon="v.url" :text="v.txt" />
     </van-grid>


    <!-- 由下角人工客服 -->
    <img @click="goState({name:'help'})" class="rg_kefu" src="../assets/tabbar/home-customer-service.png" alt="">

    <van-overlay :show="showOver" @click="showOver = false" z-index="99999"/>
    <div v-show="showOver" class="dialog_box">
      <div class="dialog_title">{{userData.top_notice_info ? userData.top_notice_info.title : ''}}</div>
      <pre class="dialog_ct" ref="wrapper">{{userData.top_notice_info.content}}</pre>

      <div class="btns">
        <van-button class="btn" type="primary" @click="showOver = false">确定</van-button>
        <van-button class="btn" type="danger" @click="todyNo">今日不再提醒</van-button>
      </div>
    </div>

    <!-- 底部导航栏 -->
    <TabBar :active="1" />
  </div>
</template>

<script>

import TabBar from '@/components/TabBar.vue';
import NavBar from '@/components/NavBar.vue';
import Utils from '@/assets/utils/utils.js';

import qs from 'qs'

import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Mine',
  components: {
    TabBar,
    NavBar
  },
  data(){
    return{
      utils: new Utils(this),

      sysAppIds:'',

      gridData:[
        {
          url: require('../assets/mine/home-bind.png'),
          txt: '账号绑定',
          name: 'binuser'
        },
        {
          url: require('../assets/mine/home-feedback.png'),
          txt: '身份验证',
          name: 'authentication'
        },
        {
          url: require('../assets/mine/index-active-image.png'),
          txt: '推广赚金',
          name: 'extension'
        },
        {
          url: require('../assets/mine/home-qrCode-2.svg'),
          txt: '我的推广',
          name: 'mineextension'
        },
        {
          url: require('../assets/mine/home-feedback.png'),
          txt: '帮助与客服',
          name: 'help'
        },
        {
          url: require('../assets/mine/home-finish.png'),
          txt: '账号完成率',
          name: 'taskrule'
        },
        {
          url: require('../assets/mine/home-appeal.png'),
          txt: '申诉中心',
          name: 'appealcenter'
        },
        {
          url: require('../assets/mine/home-version.png'),
          txt: '收款账号',
          name: 'collectionuser'
        },

      ],

      userData:{
        "user_info":{
            "user_id":"", // 用户ID
            "level":"",
            "username":"", // 用户名
            "real_name":"",
            "sex":"",
            "invitation_code":"", // 邀请码
            "invitation_code_end_time":"",
            "status":"",
            "id_status":"",
            "id_remark":"",
            "share_status":"",
            "amount":"", // 账户余额
            "frozen_amount":"", //
            "commission":"", //  累计收益
            "id_hold_photo":"",
            "id_front_photo":"",
            "id_other_photo":"",
            "id_status_desc":"" // 身份证
        },
         "order_count_list":{},
        "forcash_count":0, // 提现中
        "top_notice_info":{   // 公告弹框内容 （注：没有内容的时候不需要弹出）
            "title":"",
            "content":""
        }
      },
      showOver: false
    }
  },
  computed: mapState([
      'userInfo',
      'user'
  ]),
  created(){

    this.$toast.loading({
      message: '数据加载中...',
      forbidClick: true,
      duration:0
    });

    this.axios({
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded',
        "user-id": this.userInfo.user_id,
        "user-token": this.userInfo.user_token
      },
      method: 'POST',
      url: 'http://106.12.220.193/webapp/home/myInfo',
      params: {}
    }).then(result => {

      this.$toast.clear()

       let res = result.data

      console.info('请求个人页的信息=====>',res.data)
      if(res.code == 0){
        this.changeUser(res.data.user_info)

        this.userData = res.data

        setTimeout(() => {
          if(res.data.top_notice_info.content){
            this.todayShowPop()
          }

          this.$refs.wrapper.innerHTML = res.data.top_notice_info.content
        },200)
      }else if(res.code == 9999){
        this.$router.push({name:'login'})
      }
    }).catch(err => {
      this.$toast.clear()
      console.info(err)
    })
  },
  methods: {

       ...mapMutations(['changeUserInfo','changeUser']),

       goLinkYz(o){

         console.info(this.user)

         if(this.user.id_status == 0){
           this.$router.push({name:'authentication'})
         }else{
           this.$router.push(o)
         }

       },

       //判断今天是否还需要显示弹窗
       todayShowPop(){
         let local = JSON.parse(localStorage.getItem('minePop'))

         let date = new Date()
         let year = date.getFullYear();
         let mon = date.getMonth() + 1;
         let day = date.getDate();

         if(local){
           let localDate = new Date(local)
           let localYear = localDate.getFullYear();
           let localmon = localDate.getMonth() + 1;
           let localday = localDate.getDate();
           if((year >= localYear) && (mon >= localmon) && (day > localday)){
             this.showOver = true
           }else{
             this.showOver = false
           }

         }else{
           this.showOver = true
         }
       },

       //今日不再提醒
       todyNo(){
         this.showOver = false
         localStorage.setItem('minePop',JSON.stringify(new Date().getTime()))

       },

        // 复制成功
        onCopy(e){
          this.$toast.success('复制成功')
        },
        // 复制失败
        onError(e){
          // alert("失败");
        },

    goState(o){
      this.$router.push(o)
    }
}
}
</script>

<style lang="less" scoped>
  .mine{
    width: 100%;
    min-height: calc(100vh - 60px);
    padding-bottom: 60px;
    background-color: #f0f0f0;
    position: relative;

    .mine_info{
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 10px 15px;
      height: 80px;
      background: #1092cd;
      color: #fff;
      font-size: 18px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;

      .avatar{
        width: 62px;
        height: 62px;
        overflow: hidden;
        border-radius: 50%;
      }

      .txt_box{
        width: 233px;
        font-size: 18px;
        color: #fff;

        .user_box{
          height: 25px;
          line-height: 25px;
        }
      }

      .qe_code{
        width: 40px;
      }
    }

    .bar_lan{
      width: 100%;
      display: flex;
      font-size: 14px;
      padding: 10px 0;
      margin-bottom: 10px;
      background: #fff;
      text-align: center;

      .bar_item{
            display: -webkit-box;
            display: -webkit-flex;
            display: flex;
            flex: 1;
            -webkit-flex: 1;
            -webkit-box-flex: 1;
            -ms-flex: 1;
            -webkit-box-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            -webkit-align-content: center;
            align-content: center;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -webkit-flex-direction: column;
            flex-direction: column;
            justify-content: space-between;
            .num{
              margin-bottom: 5px;
            }
      }
      .line{
        border-right: 0.5px solid #ddd;
      }

      .bar_icon{
        color: #1092cd;
        img{
          width: 20px;
        }
      }
    }

    .grid_icon{
      width: 25px;
    }

    .rg_kefu{
      width: 118px;
      display: block;
      position: absolute;
      bottom: 54px;
      right: 0;
    }

    .dialog_box{
      padding: 10px;
      width: 300px;
      overflow: hidden;
      background: #fff;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-border-radius: 10px;
      border-radius: 10px;

      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 99999;

      .dialog_title{
        text-align: center;
        font-weight: 700;
        font-size: 16px;
        color: #333;
        line-height: 35px;
        border-bottom: 0.5px solid #ccc;
      }
      .dialog_ct{
        height: 300px;
        overflow-y: auto;
        overflow-x: hidden;
        padding: 10px;
        font-size: 15px;
        color: #333;
        white-space:pre-wrap !important;
        word-wrap : break-word  !important;

      }
      .btns{
        width: 100%;

        display: flex;
        justify-content: space-between;

        .btn{
          min-width: 120px;
          border-radius: 6px;
        }
      }
    }
  }
</style>
