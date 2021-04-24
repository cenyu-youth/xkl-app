<template>
  <div class="register">
    <NavBar title="账号注册" :isTrueArrow="true" />

    <van-field
      v-model="phone"
      label="账号"
      type="number"
      placeholder="请输入手机号码"
      input-align="right"
    />

    <van-field
      v-model="captcha"
      center
      clearable
      type="number"
      label="验证码"
      placeholder="请输入验证码"
      input-align="right"
    >
      <template #button>
        <van-button size="small" type="primary" :disabled="openBtn" @click="sendCaptcha">{{openBtn ? `${timer}秒` : '发送验证码'}}</van-button>
      </template>
    </van-field>

    <van-field
      v-model="pwd"
      label="密码"
      type="password"
      placeholder="请输入密码"
      input-align="right"
    />

    <van-field
      v-model="rePwd"
      label="确认密码"
      type="password"
      placeholder="请输入确认密码"
      input-align="right"
    />

    <van-field
      v-model="wx"
      label="微信号"
      type="text"
      placeholder="请输入微信号"
      input-align="right"
    />

    <van-field
      v-model="qq"
      label="QQ号"
      type="text"
      placeholder="请输入QQ号"
      input-align="right"
    />

    <van-field name="radio" label="性别"
      input-align="right">
      <template #input>
        <van-radio-group v-model="sex" direction="horizontal">
          <van-radio name="1">男</van-radio>
          <van-radio name="2">女</van-radio>
        </van-radio-group>
      </template>
    </van-field>

    <van-field
      v-model="invite"
      label="邀请码"
      placeholder="请输入邀请码"
      input-align="right"
    />


    <van-button class="submit" @click="submit">立即注册</van-button>

    <!-- 底部忘记密码 -->
    <div class="bt-box">
      <span>我已满16周岁并同意</span>
      <span>注册协议</span>
    </div>

  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue';

  import qs from 'qs'

  export default {
     name: 'Register',
     components: {
       NavBar
     },
     data(){
       return{
         phone: '',
         captcha: '',
         pwd: '',
         rePwd: '',
         invite: '',
         qq: '',
         wx: '',
         sex: "1",

         openBtn: false,
         timer: 60
       }
     },
     methods: {

       //发送验证码按钮
       sendCaptcha(){

        if(this.phone == ''){

          this.$toast('请输入手机号码')
          return;
        }

        this.axios({
           method: 'POST',
           url: 'http://106.12.220.193/Webapp/Sms/getSmsCode',
           data: qs.stringify({UserName: this.phone})
         }).then(result => {
           console.log('result ==> ', result);

           if(result.data.code == 0){
             this.$toast('手机验证码已发送')

             this.openBtn = true;

             let times = setInterval(() => {
               this.timer = (this.timer - 1) < 10 ? '0' + (this.timer -= 1) : (this.timer -= 1);

               if(this.timer <= 0){
                 this.openBtn = false;

                 this.timer = 60;

                 clearInterval(times)
               }
              },1000)
           }


         }).catch(err => {
           console.log('err ==> ', err);
         })




       },

       //提交按钮
       submit(){
        if(this.phone == ''){
         this.$toast('请输入手机号')
         return;
        }

        if(!(/^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(this.phone))){
           this.$toast('请输入正确的手机号')
           return false;
        }

        if(this.captcha == ''){
         this.$toast('请输入验证码')
         return;
        }

        if(this.pwd == ''){
          this.$toast('请输入密码')
           return;
        }

        if(this.pwd.length < 6){
          this.$toast('请输入六位及以上的密码')
          return;
        }

        if(this.rePwd == ''){
          this.$toast('请输入确认密码')
           return;
        }

        if(this.rePwd !== this.pwd){
          this.$toast('两次密码输入不一致')
           return;
        }

        if(this.wx == ''){
          this.$toast('请输入微信号')
           return;
        }

        if(this.qq == ''){
          this.$toast('请输入QQ号')
           return;
        }

        if(this.invite == ''){
          this.$toast('请输入邀请码')
           return;
        }

        this.axios({
          method: 'POST',
          url: 'http://106.12.220.193/Webapp/login/registerAct',
          data: qs.stringify({
            UserName: this.phone,
            Code: this.captcha,
            Password: this.pwd,
            WXAccount: this.wx,
            QQAccount: this.qq,
            Sex: this.sex,
            InvitationCode: this.invite
          })
        }).then(result => {
          let res = result.data;

          if(res.code == 0){
            this.$toast.success('注册成功');

            this.$router.replace({name: 'login'})
          }else{

            this.$toast.fail(res.msg)

          }
        }).catch(err => {
          console.log('err ==> ', err);
        })

       }
     }
   }
</script>

<style lang="less" scoped>
  @import './Register.less';
</style>
