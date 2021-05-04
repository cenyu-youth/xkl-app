<template>
  <div class="tab_bar">
   <div class="icno_box" v-for="(v,i) in tabData" :key="i" @click="goState({name: v.name})">
     <img :src="active == i ? v.ac : v.mo" alt="">
     <div class="txt">{{ v.txt }}</div>
   </div>

   <!-- 中间的球状物 -->
   <div class="ball_btn" @click="goState({name:'receivingorders'})">接单</div>
  </div>
</template>

<script>
export default {
  name: 'tabBar',
  props: ["active"],
  data(){
    return{
      tabData:[
        {
          ac: require('../assets/tabbar/index-home-on.png'),
          mo: require('../assets/tabbar/index-home.png'),
          txt: '首页',
          name: 'home'
        },
        {
          ac: require('../assets/tabbar/home-icon-on.png'),
          mo: require('../assets/tabbar/home-icon.png'),
          txt: '我的',
          name: 'mine'
        }
      ]
    }
  },
  methods: {
    back(){
      this.$router.back()
    },

    goState(o){
      this.$router.push(o)
    }
  },
}
</script>


<style scoped lang="less">
  .tab_bar{
    width: 100%;
    border-top: 1px solid #dfdede;
    position: fixed;
    bottom: 0;
    z-index: 99;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    .icno_box{
      padding: 4px;
      width: 143px;
      text-align: center;
      >img{
        width: 26px;
      }
    }

    .icno_box:active{
      background-color: #eee;
    }

    .ball_btn{
      width: 60px;
      height: 60px;
      background: #1092cd;
      -webkit-border-radius: 50%;
      border-radius: 50%;
      color: #fff;
      line-height: 60px;
      margin: 5px auto;
      font-size: 17px;
      text-align: center;
      position: absolute;
      top: -66%;
      left: 50%;
      transform: translateX(-50%);
      border: 3px solid rgba(255,255,255,1);
    }
  }
</style>
