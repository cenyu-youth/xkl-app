<template>
  <div class="share">
    <NavBar :isTrueArrow="true" title="分享"/>

    <div class="banner">
      <img class="banner_bg" src="../assets/share/t-06.2c1cf4ac.jpg" alt="">

      <img :src="shareData.logo" alt="" class="logo">
    </div>

    <div class="tit">{{shareData.title}}</div>

    <img :src="shareData.service_qrcode" alt="" class="re_code">

    <van-button type="primary" class="copy_btn" size="large"
    v-clipboard:copy="shareData.download_url"
    v-clipboard:success="onCopy"
    v-clipboard:error="onError">点击这里复制下载链接</van-button>
    <van-button type="primary" class="copy_btn" size="large"
    v-clipboard:copy="user.invitation_code"
    v-clipboard:success="onCopy"
    v-clipboard:error="onError">点击这里复制邀请码</van-button>

  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue';
import { mapState, mapMutations } from 'vuex'

import qs from 'qs'

export default {
  name: 'Share',
  components: {
    NavBar,
  },
  data(){
    return{
      downLink:'',
      inviteCode:'',

      shareData:{}

    }
  },
  computed: mapState([
      'userInfo',
      'user'
  ]),
  created(){
    this.reqInit()
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

    reqInit(){
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

        console.info('报错账号信息=====>',res)
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
