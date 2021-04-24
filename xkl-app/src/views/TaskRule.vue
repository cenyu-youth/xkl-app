<template>
  <div class="task_rule">
    <NavBar title="接单规则" :isTrueArrow="true"/>

    <div class="box">
      <img class="tit_img" src="../assets/taskrule/index-OrderRules.png" alt="">

      <div class="ct_box">平台采用拍单机制，用户打开APP, 登录平台后，需开启接单模式，选择愿意接单的任务类型等条件，等待系统派单，系统有订单时，会根据如下几个规则综合后选择用于拍单:</div>
      <div class="ct_box">1、 开启接单模式的用户</div>
      <div class="ct_box">2、符合商家对账号的要求</div>
      <div class="ct_box">3、符合平台对时间间隔和订单数量的要求</div>
      <div class="ct_box">4、优先给完成率高、被投诉率低、接单少量的用户</div>

      <img class="tit_img" src="../assets/taskrule/index-acceptRate.png" alt="">

      <div class="ct_box">完成率是指你最近30天内所有完成的订单数占所有系统派送给你的订单总数百分比。</div>
      <div class="ct_box">1、系统派单之后不去操作，造成超时系统自动取消订单</div>
      <div class="ct_box">2、用户要求商家取消订单(或商家要求用户取消订单)</div>
      <div class="ct_box">3、用户自行取消订单</div>
      <div class="ct_box">4、管理员撤销的订单</div>
      <div class="ct_box">维持高完成率可以保持平台对商家和用户的可靠性，也会增加系统派送订单给你的优先级。</div>
    </div>


  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue';

export default {
  name: 'Taskrule',
  components: {
    NavBar
  }
}
</script>

<style lang="less" scoped>

   .task_rule{
      width: 100%;
      min-height: 100vh;
      background-color: #fff;

      .box{
        padding: 10px;
      }
      .tit_img{
        width: 100%;
      }

      .ct_box{
        line-height: 25px;
        font-size: 12px;
        color: #202020;
      }
   }

</style>
