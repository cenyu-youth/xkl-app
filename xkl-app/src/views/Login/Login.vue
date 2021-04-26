<template>
  <div class="login">
    <NavBar title="登陆" :isTrueArrow="false" />
    <div class="banner">
      <img src="../../assets/login/logo.png" alt="">
    </div>

    <!-- 账号 -->
    <input type="number" placeholder="手机号" v-model="phone" class="inp_box">
    <!-- 密码 -->
    <input type="password" placeholder="密码" v-model="pwd" class="inp_box">

    <van-button class="submit" @click="submit">登  陆</van-button>

    <!-- 底部忘记密码 -->
    <div class="bt-box">
      <span @click="goState({name: 'forget'})">忘记密码</span>
      <span></span>
      <span @click="goState({name: 'register'})">马上注册</span>
    </div>

  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue';

  import Util from '@/assets/utils/utils'

  import qs from 'qs'

  import { mapState, mapMutations } from 'vuex'

  export default {
     name: 'Login',
     components: {
       NavBar
     },
     data(){
       return{
         phone:18159303017,
         pwd:'a123456',
         utils: new Util(this)
       }
     },
     computed: mapState([
         'userInfo',
         'user'
     ]),
     methods: {

       ...mapMutations(['changeUserInfo','changeUser']),

       goState(o){
         this.$router.push(o)
       },

       submit(){

        if(this.phone == ''){
         this.$toast('请输入手机号')
         return;
        }

        if(!(/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(this.phone))){
           this.$toast('请输入正确的手机号')
           return false;
        }

        if(this.pwd == ''){
          this.$toast('请输入密码')
           return;
        }

        if(this.pwd.length < 6){
          this.$toast('请输入六位及以上的密码')
          return;
        }

        this.axios({
          method: 'POST',
          url: 'http://106.12.220.193/Webapp/login/lAct',
          data: qs.stringify({
            UserName: this.phone,
            Password: this.pwd
          })
        }).then(res => {
          if(res.data.code == 0){
            this.$toast.success('登陆成功')

            this.changeUserInfo(res.data.data.user_info)

            let cookieT = JSON.stringify({
              user_id: res.data.data.user_info.user_id,
              user_token: res.data.data.user_info.user_token,
            })

            this.$cookies.set("userData",cookieT,"1m")

            this.reqUserInfo(res.data)


            console.info(res.data)
          }else if(res.data.data.jumpUrl){
            window.location.href = res.data.data.jumpUrl;
          }else{
            this.$toast.fail(res.data.msg)
          }
        });
       },

       reqUserInfo(o){
         this.axios({
           headers:{
             "user-id": o.data.user_info.user_id,
             "user-token": o.data.user_info.user_token
           },
           method: 'GET',
           url: 'http://106.12.220.193/Webapp/home/pushUserInfo',
           params: {}
         }).then(result => {
           console.info('请求个人信息',result.data)
           if(result.data.code == 0){
             this.changeUser(result.data.data);
             this.$router.push({name: 'home'})
           }
         }).catch(err => {
           console.info(err)
         })
       }
     }
   }
</script>

<style lang="less" scoped>
  @import './Login.less';
</style>
