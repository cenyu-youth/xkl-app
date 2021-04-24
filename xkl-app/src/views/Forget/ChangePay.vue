<template>
  <div class="register">
    <NavBar title="修改提现密码" :isTrueArrow="true" />

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
      placeholder="请输入提现密码"
      input-align="right"
    />

    <van-field
      v-model="rePwd"
      label="确认密码"
      type="password"
      placeholder="请确认提现密码"
      input-align="right"
    />


    <van-button class="submit" @click="submit">提交</van-button>

  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue';

  export default {
     name: 'Forget',
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

         openBtn: false,
         timer: 60
       }
     },
     methods: {

       //发送验证码按钮
       sendCaptcha(){
         this.openBtn = true;

         let times = setInterval(() => {
           this.timer = (this.timer - 1) < 10 ? '0' + (this.timer -= 1) : (this.timer -= 1);

           if(this.timer <= 0){
             this.openBtn = false;

             this.timer = 60;

             clearInterval(times)
           }
         },1000)

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

        if(this.captcha == ''){
         this.$toast('请输入验证码')
         return;
        }

        if(this.pwd == ''){
          this.$toast('请输入提现密码')
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

        this.$toast.success('提现密码更改成功')

       }
     }
   }
</script>

<style lang="less" scoped>
  @import './Forget.less';
</style>
