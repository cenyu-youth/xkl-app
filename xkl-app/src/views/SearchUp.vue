<template>
  <div class="search_up">
    <NavBar title="搜索上级" :isTrueArrow="true"/>

    <div class="wrapper">
      <div class="tit">请输入您的邀请人手机查询上级信息</div>

      <van-field v-model="value" placeholder="输入手机号码" />

      <van-button class="search_btn" type="primary" size="large">查询</van-button>
    </div>

  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue';

export default {
  name: 'SearchUp',
  components: {
    NavBar
  }
}
</script>

<style lang="less" scoped>

   .search_up{
      width: 100%;
      min-height: 100vh;
      background-color: #f0f0f0;

      .wrapper{
        padding: 10px;
      }

      .tit{
            font-size: 15px;
            line-height: 40px;
      }

      .search_btn{
        margin-top: 15px;
        color: #fff;
        background-color: #007aff;
        border-radius: 5px;
      }
   }

</style>
