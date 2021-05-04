<template>
  <div class="register">
    <NavBar title="更改密码" :isTrueArrow="true" />

    <van-field
      v-model="oldPwd"
      label="旧密码"
      type="password"
      placeholder="请输入旧密码"
      input-align="right"
    />

    <van-field
      v-model="pwd"
      label="新密码"
      type="password"
      placeholder="请输入新密码"
      input-align="right"
    />

    <van-field
      v-model="rePwd"
      label="确认新密码"
      type="password"
      placeholder="请输入确认新密码"
      input-align="right"
    />


    <van-button class="submit" @click="submit">提交</van-button>

  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue';
  import qs from 'qs'
  import { mapState, mapMutations } from 'vuex'

  export default {
     name: 'ChangePwd',
     components: {
       NavBar
     },
     data(){
       return{
         oldPwd:'',
         pwd: '',
         rePwd: ''
       }
     },
    computed: mapState([
        'userInfo',
        'user'
    ]),
     methods: {


       submit(){

        if(this.oldPwd == ''){
          this.$toast('请输入旧密码')
           return;
        }

        if(this.oldPwd.length < 6){
          this.$toast('请输入六位及以上的旧密码')
          return;
        }

        if(this.pwd == ''){
          this.$toast('请输入新密码')
           return;
        }

        if(this.pwd.length < 6){
          this.$toast('请输入六位及以上的新密码')
          return;
        }

        if(this.rePwd == ''){
          this.$toast('请输入确认新密码')
           return;
        }

        if(this.rePwd !== this.pwd){
          this.$toast('两次密码输入不一致')
           return;
        }

        this.axios({
          headers:{
            'Content-Type': 'application/x-www-form-urlencoded',
            "user-id": this.userInfo.user_id,
            "user-token": this.userInfo.user_token
          },
          method: 'POST',
          url: 'http://106.12.220.193/Webapp/Login/resetPassword',
          data: qs.stringify({
            old_pwd: this.oldPwd,
            new_pwd: this.pwd
          }),
        }).then(result => {

           let res = result.data

          // console.info('请求账号列表=====>',res)
          if(res.code == 0){


            this.$toast.success('密码更改成功')

            this.delUser();
            this.$cookies.remove('userData')

            this.$router.replace({name:'login'})



          }else if(res.code == 9999){
            this.$router.push({name:'login'})
          }else{

            this.$toast(res.msg)
          }
        }).catch(err => {
          console.info(err)
        })

       }
     }
   }
</script>

<style lang="less" scoped>
  @import './Forget.less';
</style>
