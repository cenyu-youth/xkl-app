<template>
  <div class="help">
    <NavBar title="帮助中心" :isTrueArrow="true"/>

    <div class="banner">
      <img src="../assets/option/server-bgImage.png" alt="" class="banner_bg">

      <div class="posi_wrap">
        <div class="title">您好，请问遇到什么问题？</div>
        <div class="subtitle">其他业务问题，点击联系在线客服</div>
        <div class="help_user">
          <img src="../assets/option/index-qq.png" class="user_icon" alt="">
          <!-- <div class="user" @click="jump">客服QQ：{{kefu_qq}}</div> -->
          <a :href="jupmUrl">客服QQ：{{kefu_qq}}</a>
        </div>
        <div class="help_user">
          <a :href="`tel:+${kefu_mobile}`">手机号码：{{kefu_mobile}}</a>
        </div>
      </div>
    </div>


    <div class="bar_title">常见问题</div>

    <div class="tab_box">
      <div class="tab_on">
        <div class="tab_item" @click="changeHelp(0)">
          <img src="../assets/help/index-taskOrder.png" alt="" class="tab_icon">
          <div class="txt">任务订单问题</div>
        </div>
        <div class="tab_item bor" @click="changeHelp(1)">
          <img src="../assets/help/index-Account.png" alt="" class="tab_icon">
          <div class="txt">平台账号问题</div>
        </div>
      </div>

      <div class="tab_on">
        <div class="tab_item" @click="changeHelp(2)">
          <img src="../assets/help/index-AccountMoney.png" alt="" class="tab_icon">
          <div class="txt">账户资金问题</div>
        </div>
        <div class="tab_item bor" @click="changeHelp(3)">
          <img src="../assets/help/index-otherProblem.png" alt="" class="tab_icon">
          <div class="txt">其他常见问题</div>
        </div>
      </div>
    </div>

    <div class="bar_title mr_top">猜你所问</div>

    <div class="ct_box" v-if="helpActive == 0">
      <van-collapse v-model="activeName" accordion>
        <van-collapse-item v-show="v.type == 1" v-for="(v,i) in list" :key="i" :title="(i + 1) + '、'+v.title" :name="i">{{v.answer}}</van-collapse-item>
      </van-collapse>
    </div>

    <div class="ct_box" v-if="helpActive == 1">
      <van-collapse v-model="activeName" accordion>
        <van-collapse-item v-show="v.type == 2" v-for="(v,i) in list" :key="i" :title="(i - 14) + '、'+v.title"  :name="i">{{v.answer}}</van-collapse-item>
      </van-collapse>
    </div>

    <div class="ct_box" v-if="helpActive == 2">
      <van-collapse v-model="activeName" accordion>
        <van-collapse-item v-show="v.type == 3" v-for="(v,i) in list" :key="i" :title="(i - 18) + '、'+v.title"  :name="i">{{v.answer}}</van-collapse-item>
      </van-collapse>
    </div>

    <div class="ct_box" v-if="helpActive == 3">
      <van-collapse v-model="activeName" accordion>
        <van-collapse-item v-show="v.type == 4" v-for="(v,i) in list" :key="i" :title="(i - 22) + '、'+v.title"  :name="i">{{v.answer}}</van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue';


import qs from 'qs'

import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Help',
  components: {
    NavBar
  },
  computed: mapState([
      'userInfo',
      'user'
  ]),
  data(){
    return{
      activeName:0,
      helpActive:0,
      kefu_qq:'',
      list:[],
      jupmUrl:'',
      kefu_mobile: ''
    }
  },
  created(){
    this.axios({
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded',
          "user-id": this.userInfo.user_id,
          "user-token": this.userInfo.user_token
        },
        method: 'POST',
        url: 'http://106.12.220.193/webapp/QA/getList',
        data: qs.stringify({})
      }).then(result => {

         let res = result.data

        console.info('提交申诉=====>',res)
        if(res.code == 0){
          this.kefu_qq = res.data.kefu_qq;

          this.list = res.data.qa_list

          this.jupmUrl = res.data.qq_jumpUrl

          this.kefu_mobile = res.data.kefu_mobile


        }else if(res.code == 9999){
          this.$router.push({name:'login'})
        }else{
          this.$toast(res.msg)
        }
      }).catch(err => {
        console.info(err)
      })
  },
  methods:{

    ...mapMutations(['changeUserInfo','changeUser']),

    jump(){
      window.location.href = this.jupmUrl
    },

    changeHelp(idx){
      this.helpActive = idx
    }
  }
}
</script>

<style lang="less" scoped>

   .help{
      width: 100%;
      min-height: 100vh;
      background-color: #fff;

      .banner{
        width: 100%;
        position: relative;

        .banner_bg{
          width: 100%;
        }

        .posi_wrap{
          position: absolute;
          top: 35px;
          left: 20px;
           color: #fff;
          .title{
            font-size: 20px;
            margin-bottom: 5px;
          }
          .subtitle{
            font-size: 14px;
            margin-bottom: 10px;
          }

          .help_user{
            display: flex;
            font-size: 18px;
            line-height: 25px;
            a{
              color: #fff;
            }
            .user_icon{
              width: 25px;
            }
          }

        }
      }

      .bar_title{
        padding-left: 10px;
        line-height: 40px;
        border-bottom: 0.5px solid #ccc;
        font-size: 15px;
        color: #202020;
      }
      .mr_top{
        margin-top: 10px;
      }
      .tab_box{
        width: 100%;

        .tab_on{
          display: flex;

          .bor{
            border-left: 1px solid #ccc;
          }

          .tab_item{
            width: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            line-height: 50px;
            height: 50px;
            border-bottom: 0.5px solid #ccc;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            font-size: 15px;
            color: #202020;
            .tab_icon{
              width: 25px;
              height: 25px;
              display: block;
              flex-shrink: 0;
              margin-right: 4px;
            }
          }
        }
      }
   }

</style>
