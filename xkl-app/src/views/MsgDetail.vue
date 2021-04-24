<template>
  <div class="msg_detail">
    <NavBar title="消息详情" :isTrueArrow="true"/>

    <div class="wrapper">
      <div class="title">你有订单撤销</div>
      <div class="date">2021-04-24 16:12:16</div>
      <div class="ct">订单 - 188660879888064513 因未在30分钟内完成链接验证已被系统自动撤单</div>
    </div>

  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue';

export default {
  name: 'MsgDetail',
  components: {
    NavBar
  }
}
</script>

<style lang="less" scoped>

   .msg_detail{
      width: 100%;
      min-height: 100vh;
      background-color: #fff;

      .wrapper{
        padding: 10px;

        .title{
              font-size: 16px;
              margin-bottom: 5px;
              font-weight: 600;
              color: #111;
        }

        .date{
          font-size: 12px;
          color: #666;
          height: 30px;
          line-height: 30px;
          margin-bottom: 5px;
        }

        .ct{
              margin: 0;
              font-size: 14px!important;
              color: #202020!important;
              line-height: 1.5!important;
              word-break: break-all;
        }
      }
   }

</style>
