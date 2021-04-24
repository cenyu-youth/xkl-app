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
     methods: {

       ...mapMutations(['changeUserInfo']),

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

            console.info(res.data)

            this.changeUserInfo(res.data.data.user_info)

            this.$router.push({name: 'home'})
          }else if(res.data.data.jumpUrl){
            window.location.href = res.data.data.jumpUrl;
          }else{
            this.$toast.fail(res.data.msg)
          }
        });
       }
     }
   }
</script>

<style lang="less" scoped>
  @import './Login.less';
</style>
