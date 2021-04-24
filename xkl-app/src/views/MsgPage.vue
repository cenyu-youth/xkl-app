<template>
  <div class="msg">
    <NavBar title="消息" :isTrueArrow="true"/>

    <div class="wrapper">
      <div class="item" @click="goState({name: 'msgdetail'})">
        <div class="txt">你有订单撤销</div>
        <div class="date">2021-04-24 16:12:16</div>
      </div>

      <div class="item">
        <div class="txt">你有订单撤销</div>
        <div class="date">2021-04-24 16:12:16</div>
      </div>

      <div class="item">
        <div class="txt">你有订单撤销</div>
        <div class="date">2021-04-24 16:12:16</div>
      </div>
    </div>

    <div class="bt">没有更多数据了</div>

  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue';

export default {
  name: 'MsgPage',
  components: {
    NavBar
  },
  methods:{
    goState(o){
      this.$router.push(o)
    }
  }
}
</script>

<style lang="less" scoped>

   .msg{
      width: 100%;
      min-height: 100vh;
      background-color: #fff;

      .wrapper{
        padding: 10px;

        .item{
          width: 100%;
          border-bottom: 0.5px solid #ccc;
          padding-top: 5px;


          .txt{
            font-size: 16px;
            color: #111;
          }

          .date{
            font-size: 12px;
            color: #666;
            height: 30px;
            line-height: 30px;
          }
        }
      }

      .bt{
        line-height: 40px;
        color: #777;
        font-size: 14px;
        text-align: center;
      }
   }

</style>
