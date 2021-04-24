<template>
  <div class="feedback">
    <NavBar  title="意见反馈" :isTrueArrow="true" rtTtit="提交意见" rtPath="subopinion"/>

    <div class="no_data">暂无数据</div>

  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue';

export default {
  name: 'Feedback',
  components: {
    NavBar
  }
}
</script>

<style lang="less" scoped>

   .feedback{
      width: 100%;
      min-height: 100vh;
      background-color: #f0f0f0;

      .no_data{
            margin-top: 80px;
            font-size: 15px;
            text-align: center;
            color: #333;
      }
   }

</style>
