<template>
  <div class="option">
    <NavBar title="设置" :isTrueArrow="true"/>

    <div class="bar_box" @click="goState({name:'changepwd'})">
      <div class="lt_box">
        <img class="icon" src="../assets/option/setting-changePwd.png" alt="">
        <div class="txt">修改密码</div>
      </div>

      <van-icon color="#ccc" size="30px" name="arrow" />
    </div>

    <div class="bar_box" @click="goState({name: 'changepay'})">
      <div class="lt_box">
        <img class="icon" src="../assets/option/setting-changePwd.png" alt="">
        <div class="txt">修改提现密码</div>
      </div>

      <van-icon color="#ccc" size="30px" name="arrow" />
    </div>

    <div class="bar_box">
      <div class="lt_box">
        <img class="icon" src="../assets/option/setting-voice.png" alt="">
        <div class="txt">接单声音提示</div>
      </div>

      <van-switch v-model="checked" />
    </div>

    <div class="bar_box" @click="backUser">
      <div class="lt_box">
        <img class="icon" src="../assets/option/setting-cache.png" alt="">
        <div class="txt">退出账号</div>
      </div>

      <van-icon color="#ccc" size="30px" name="arrow" />
    </div>

  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue';

import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Option',
  components: {
    NavBar
  },
  data(){
    return{
      checked:true
    }
  },
  computed: mapState([
      'userInfo',
      'user'
  ]),
  methods:{
    ...mapMutations(['changeUserInfo','changeUser', 'delUser']),

    goState(o){
      this.$router.push(o)
    },

    backUser(){
      this.$dialog.confirm({
        title: '提示',
        message: '确定退出登陆',
      })
        .then(() => {
          try{
            this.delUser();
            this.$cookies.remove('userData') 


            this.$toast('退出成功')

            this.$router.push({name:'login'})
          }catch(err){
            console.info(err)
          }
        })
        .catch(() => {
          // on cancel
        });
    }
  }
 }
</script>

<style lang="less" scoped>

   .option{
      width: 100%;
      min-height: 100vh;
      background-color: #fff;

      .bar_box{
        padding: 10px;
        display: flex;
        justify-content: space-between;
        background-color: #fff;
        border-bottom: 1px solid #ccc;

        .lt_box{
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #222;
          font-size: 14px;
          .icon{
            width: 30px;
            margin-right: 6px;
          }
        }
      }

      .bar_box:active{
        background-color: #ddd;
      }
   }

</style>
