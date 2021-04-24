<template>
  <div class="mine_extension">
    <NavBar title="我的推广" :isTrueArrow="true" rtTtit="搜索上级" rtPath="searchup"/>

    <van-field v-model="minPhone" placeholder="精准搜索我推广的手机号" />

    <van-tabs v-model="active" background="#f0f0f0" color="transparent" title-active-color="#1092cd" title-inactive-color="#202020">
      <van-tab title="一级">
        <div class="item_box">
          <div class="item">手机号</div>
          <div class="item">受邀人数</div>
          <div class="item">注册时间</div>
        </div>

        <div class="item_box">
          <div class="item">15068164155</div>
          <div class="item">59</div>
          <div class="item sma">2020-01-02 22:59:27</div>
        </div>
      </van-tab>
      <van-tab title="二级">
        <div class="item_box">
          <div class="item">手机号</div>
          <div class="item">受邀人数</div>
          <div class="item">注册时间</div>
        </div>
      </van-tab>
    </van-tabs>

  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue';

export default {
  name: 'MineExtension',
  components: {
    NavBar
  },
  data(){
    return{
      minPhone:'',
      active:0
    }
  }
}
</script>

<style lang="less" scoped>

   .mine_extension{
      width: 100%;
      min-height: 100vh;
      background-color: #f0f0f0;

      .tp_inp{
        margin-top: 5px;
      }

      .item_box{
        width: 100%;
        background-color: #fff;
        display: flex;
        .item{
          flex: 1;
          padding: 7px 5px;
          flex-shrink: 0;
          text-align: center;
          line-height: 25px;
          font-size: 14px;
          color: #202020;
        }

        .sma{
          line-height: 20px;
        }
      }
   }

</style>
