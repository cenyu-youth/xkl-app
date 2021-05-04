<template>
  <div class="nav_bar">
    <van-icon @click='back' v-if="isTrueArrow" name="arrow-left" class="arrow" color="#fff" size="18px" />
    <div class="title">{{title}}</div>

    <div class="rt-boxs">
      <img class="bans" v-if="isShowOpa" src="../assets/tabbar/bans.png"  @click="goState({name: 'option'})">
      <!-- <van-icon size="24px" v-if="isShowMsg" name="chat-o" @click="goState({name: 'msgpage'})"/> -->
    </div>

    <div class="ct_tit" v-if="rtTtit" @click="goState({name: rtPath})">{{rtTtit}}</div>
  </div>
</template>

<script>
export default {
  name: 'navBar',
  props: ["title","isTrueArrow","isShowOpa","isShowMsg","rtTtit","rtPath"],
  data(){
    return{
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
  .nav_bar{
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    padding: 7px 0;
    background-color: ;
    position: sticky;
    top: 0;
    z-index: 9;
    background-color: rgb(16, 146, 205);
    color: rgb(255, 255, 255);

    .arrow{
      position: absolute;
      left: 7px;
      top: 50%;
      transform: translateY(-50%);
    }

    .rt-boxs{
      position: absolute;
      right: 7px;
      top: 50%;
      transform: translateY(-50%);

      display: flex;
      justify-content: space-between;
      align-items: center;


      .bans{
        width: 24px;
        margin-right: 6px;
      }
    }

    .ct_tit{
      position: absolute;
      right: 7px;
      top: 50%;
      transform: translateY(-50%);
      color: rgb(255, 255, 255);
      font-size: 14px;
      font-weight: normal;
    }
  }
</style>
