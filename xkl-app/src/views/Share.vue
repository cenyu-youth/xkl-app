<template>
  <div class="share">
    <NavBar :isTrueArrow="true" title="分享"/>

    <div class="banner">
      <img class="banner_bg" src="../assets/share/t-06.2c1cf4ac.jpg" alt="">

      <img src="../assets/login/logo.png" alt="" class="logo">
    </div>

    <div class="tit">仙客来</div>

    <img src="../assets/share/qcode.png" alt="" class="re_code">

    <van-button type="primary" class="copy_btn" size="large"
    v-clipboard:copy="downLink"
    v-clipboard:success="onCopy"
    v-clipboard:error="onError">点击这里复制下载链接</van-button>
    <van-button type="primary" class="copy_btn" size="large"
    v-clipboard:copy="inviteCode"
    v-clipboard:success="onCopy"
    v-clipboard:error="onError">点击这里复制邀请码</van-button>

  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue';

export default {
  name: 'Share',
  components: {
    NavBar,
  },
  data(){
    return{
      downLink:'123',
      inviteCode:'321'
    }
  },
  methods:{
    // 复制成功
    onCopy(e){
      this.$toast.success('复制成功')
    },
    // 复制失败
    onError(e){
      // alert("失败");
    },
  }
}
</script>

<style lang="less" scoped>

   .share{
      width: 100%;
      min-height: 100vh;
      background-color: #fff;


      .banner{
        width: 100%;
        height: 130px;
        position: relative;
        margin-bottom: 130px;

        .banner_bg{
          width: 100%;
          height: 130px;
        }
      }

      .logo{
        width: 120px;
        padding: 15px;
        background-color: #fff;
        border-radius: 12%;
        position: absolute;
        bottom: -100px;
        left: 50%;
        transform: translateX(-50%);
      }

      .tit{
            font-size: 18px;
            font-weight: 700;
            color: #000;
            text-align: center;
      }

      .re_code{
        width: 180px;
        display: block;
        margin: 20px auto;
      }

      .copy_btn{
        border-radius: 10px;
        margin: 1px 0;
      }

   }

</style>
