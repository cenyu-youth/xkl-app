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
          <div class="user">客服QQ：3008217938</div>
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
        <van-collapse-item title="标题1" name="1">内容</van-collapse-item>
      </van-collapse>
    </div>

    <div class="ct_box" v-if="helpActive == 1">
      <van-collapse v-model="activeName" accordion>
        <van-collapse-item title="标题1" name="1">内容</van-collapse-item>
        <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
      </van-collapse>
    </div>

    <div class="ct_box" v-if="helpActive == 2">
      <van-collapse v-model="activeName" accordion>
        <van-collapse-item title="标题1" name="1">内容</van-collapse-item>
        <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
        <van-collapse-item title="标题3" name="3">内容</van-collapse-item>
        <van-collapse-item title="标题3" name="3">内容</van-collapse-item>
        <van-collapse-item title="标题3" name="3">内容</van-collapse-item>
      </van-collapse>
    </div>

    <div class="ct_box" v-if="helpActive == 3">
      <van-collapse v-model="activeName" accordion>
        <van-collapse-item title="标题1" name="1">内容</van-collapse-item>
        <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
        <van-collapse-item title="标题3" name="3">内容</van-collapse-item>
        <van-collapse-item title="标题3" name="3">内容</van-collapse-item>
        <van-collapse-item title="标题3" name="3">内容</van-collapse-item>
        <van-collapse-item title="标题3" name="3">内容</van-collapse-item>
        <van-collapse-item title="标题3" name="3">内容</van-collapse-item>
        <van-collapse-item title="标题3" name="3">内容</van-collapse-item>
        <van-collapse-item title="标题3" name="3">内容</van-collapse-item>
      </van-collapse>
    </div>
  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue';

export default {
  name: 'Help',
  components: {
    NavBar
  },
  data(){
    return{
      activeName:0,
      helpActive:0
    }
  },
  methods:{
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
