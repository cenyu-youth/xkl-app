<template>
  <div class="home">
    <NavBar :title="shareData.title" :isShowMsg="true"/>

    <div class="banner">
      <div class="item bor" @click="goState({name: 'capitaldetails'})">
        <div class="txt">总佣金</div>
        <div class="money">{{pageData.commission}}</div>
      </div>
      <div class="item"  @click="goState({name: 'capitaldetails'})">
        <div class="txt">账户余额</div>
        <div class="money">{{pageData.amount}}</div>
      </div>
    </div>

    <div class="subBanner">
      <div class="lt">
        <img class="lt_icon" src="../assets/option/index-qq.png" alt="">
        <div class="txt">客服QQ:{{pageData.kefu_info ? pageData.kefu_info.qq : ''}}</div>
      </div>
      <div class="rt">客服工作时间:{{pageData.kefu_info ? pageData.kefu_info.work_time : ''}}</div>
    </div>

    <div class="msg_box">
      <div class="msg_item" v-for="(v,i) in pageData.notice_list" :key="i">
        <img src="../assets/help/index-notice.svg" alt="" class="msg_icon">
        <span>公告</span>
        <div class="msg_title">{{v.title}}</div>
      </div>
    </div>

    <div class="task_box" @click="goState({name: 'extension'})">
      <div class="task_title">活动任务</div>

      <div class="task_wrap">
        <img src="../assets/help/index-active-image.png" alt="" class="task_icon">

        <div class="task_ct">
          <div class="task_txt">
            仙客来买手群：
            <span>{{pageData.maishou_role_qq}}</span>
          </div>
          <div class="task_txt">
            仙客来买手群：
            <span>{{pageData.maishou_role_qq}}</span>
          </div>
          <div class="task_txt task_bz">邀请好友受邀人每次接受任务赚取推广费，可得到受邀人每次推广费的{{pageData.commission_rate}}作为额外奖励。</div>
        </div>
      </div>
    </div>

    <div class="share_box" v-if="user.share_status == 1">
      <div class="share_title">分享-赚收益</div>

      <div class="share_wrapper">
        <div class="share_card" @click="goState({name: 'share'})">
          <div class="share_txt">分享海报</div>
          <div class="share_txt">越分享越赚钱</div>
          <img src="../assets/help/index-qrCode.png" alt="" class="share_icon">
        </div>

        <div class="share_card bg_color" @click="goState({name: 'extension'})">
          <div class="share_txt">分享链接</div>
          <div class="share_txt">越分享越赚钱</div>
          <img src="../assets/help/index-link.png" alt="" class="share_icon">
        </div>
      </div>
    </div>


    <van-overlay :show="showOver" @click="showOver = false" z-index="99999"/>
    <div v-show="showOver" class="dialog_box">
      <div class="dialog_title">{{pageData.top_notice_info ? pageData.top_notice_info.title : ''}}</div>
      <pre class="dialog_ct" ref="wrapper"></pre>

      <div class="btns">
        <van-button class="btn" type="primary" @click="showOver = false">确定</van-button>
        <van-button class="btn" type="danger" @click="todyNo">今日不再提醒</van-button>
      </div>
    </div>

    <TabBar :active="0"/>
  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue';
import TabBar from '@/components/TabBar.vue';

import qs from 'qs'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Home',
  components: {
    NavBar,
    TabBar
  },
  created(){
    this.init();
    this.reqShareInit();

  },
  data(){
    return{
      pageData:{
        top_notice_info:{
          title:'',
          content:''
        },
        txt:''
      },
      showOver: false,
      shareData:''
    }
  },
  computed:mapState([
      'userInfo',
      'user'
  ]),
  mounted(){
      // this.$refs.wrapper.innerHTML = this.txt
  },
  methods:{
    goState(o){
      this.$router.push(o)
    },

    reqShareInit(){
      this.axios({
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded',
          "user-id": this.userInfo.user_id,
          "user-token": this.userInfo.user_token
        },
        method: 'GET',
        url: 'http://106.12.220.193/Webapp/home/getWebConfig',
        data: qs.stringify({})
      }).then(result => {

         let res = result.data

        console.info('报错账号信息=====>',result)
        if(res.code == 0){
          this.shareData = res.data
        }else if(res.code == 9999){
          this.$router.push({name:'login'})
        }else{
          this.$toast(res.msg)
        }
      }).catch(err => {
        console.info(err)
      })
    },

    //判断今天是否还需要显示弹窗
    todayShowPop(){
      let local = JSON.parse(localStorage.getItem('homePop'))

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
      localStorage.setItem('homePop',JSON.stringify(new Date().getTime()))

    },

    init(){
      this.axios({
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded',
          "user-id": this.userInfo.user_id,
          "user-token": this.userInfo.user_token
        },
        method: 'POST',
        url: ' http://106.12.220.193/Webapp/home/index',
        data: {}
      }).then(result => {

        console.info(result)

        let res = result.data

        if(res.code == 0){
          this.pageData = res.data;

          this.txt = res.data.top_notice_info.content;

          setTimeout(() => {
            if(res.data.top_notice_info.content){
              this.todayShowPop()
            }

            this.$refs.wrapper.innerHTML = this.txt
          },200)

        }else if(res.code == 9999){
          this.$router.push({name:'login'})
        }

        console.log('res ==> ', res);
      }).catch(err => {
        console.log('err ==> ', err);
      })
    }
  }
}
</script>

<style lang="less" scoped>

   .home{
      width: 100%;
      min-height: calc(100vh - 60px);
      padding-bottom: 60px;
      background-color: #f0f0f0;
      position: relative;

      .banner{
        height: 88px;
        background-color: #1092cd;
        display: flex;
        justify-content: space-around;
        align-items: center;

        .bor{
          border-right: 1px solid #fff;
        }
        .item{
          width: 50%;
          height: 65%;
          text-align: center;
          color: #fff;

          .txt{
            font-size: 17px;
          }
          .money{
            font-size: 22px;
            font-weight: 700;
          }
        }
      }

      .subBanner{
            background: #0d75a4;
            height: 36px;
            line-height: 36px;
            position: relative;
            font-size: 14px;
            color: #fff;
            display: flex;
            -webkit-justify-content: space-around;
            justify-content: space-around;

            .lt{
              display: flex;
              align-items: center;
              .lt_icon{
                width: 24px;
                height: 24px;
                flex-shrink: 0;
              }
            }
      }

      .msg_box{
        background-color: #fff;
        padding: 10px;

        .msg_item{
          display: flex;
          align-items: center;
          color: #202020;
          font-size: 14px;
          line-height: 30px;

          .msg_icon{
            width: 17px;
          }

          span{
            margin: 0 5px;
          }
        }
      }

      .task_box{
        margin-top: 10px;
        padding: 0 10px 10px;
        background-color: #fff;

        .task_title{
          color: #333;
          font-size: 16px;
          font-weight: 500;
          line-height: 40px;
        }

        .task_wrap{
          width: 100%;
          display: flex;
          align-items: center;

          .task_icon{
            width: 45px;
            margin-right: 5px;
          }

          .task_txt{
            margin-bottom: 5px;
            font-size: 14px;
            color: #202020;
            span{
              color: red;
            }
          }
          .task_bz{
            color: #666;
          }
        }
      }

      .share_box{
        margin-top: 10px;
        padding: 0 10px 10px;
        background-color: #fff;

        .share_title{
          color: #333;
          font-size: 16px;
          font-weight: 500;
          line-height: 40px;
        }

        .share_wrapper{
          display: flex;
          justify-content: space-between;


          .share_card{
            width: 172px;
            height: 95px;
            background: -webkit-linear-gradient(left top,#23afef,#0074a9);
            -webkit-border-radius: 7px;
            border-radius: 7px;
            padding: 10px;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;

            position: relative;
            .share_txt{
              font-size: 14px;
              color: #fff;
            }
            .share_icon{
              width: 50px;
              position: absolute;
              bottom: 7px;
              right: 5px;
            }
          }

          .bg_color{
                background: -webkit-linear-gradient(left top,#72a3ec,#3c73c4);
          }
        }
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
          width: 100%;
          height: 300px;
          overflow-y: auto;
          white-space:pre-wrap !important;
          word-wrap : break-word  !important;
          padding: 10px;
          font-size: 15px;
          color: #333;

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
