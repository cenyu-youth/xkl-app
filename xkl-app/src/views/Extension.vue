<template>
  <div class="extension">
    <NavBar title="推广赚金" :isTrueArrow="true" rtTtit="我的推广" rtPath="mineextension"/>

    <div class="wrapper">
      <img src="../assets/mine/index-share.png" alt="" class="banner">

      <div class="txt">受邀人是用户<span>10%推广费奖励</span></div>

      <div class="gift_box">
        <img src="../assets/mine/index-share-gift.png" alt="" class="gift">
        <div class="gift_txt">邀请好友受邀人每次接受任务赚取推广费，可得到受邀人每次推广费的10%作为额外奖励。</div>
      </div>

      <van-button @click="goState({name: 'share'})" type="primary" class="share_btn" size="large">分享给好友</van-button>
    </div>

  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue';

export default {
  name: 'Extension',
  components: {
    NavBar
  },
  methods:{
    goState(o){
      this.$router.push(o)
    }
  }
}
</script>

<style lang="less" scoped>

   .extension{
      width: 100%;
      min-height: 100vh;
      background-color: #fff;

      .wrapper{
        padding: 10px;

        .banner{
          width: 100%;
        }

        .txt{
          font-size: 15px;
          line-height: 30px;
          span{
            color: red;
          }
        }

        .gift_box{
          width: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;

          .gift{
            width: 50px;
            margin-right: 5px;
          }

          .gift_txt{
            font-size: 14px;
            color: #666;
            line-height: 25px;
          }
        }

        .share_btn{
          width: 100%;
          margin-top: 50px;
          background: #007aff;
          border-radius: 5px;
          border:none
        }

      }
   }

</style>
