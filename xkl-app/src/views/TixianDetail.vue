<template>
  <div class="tixian_detail">
    <NavBar title="提现明细" :isTrueArrow="true"/>

    <div class="title_bar">
      <div class="sma">实际到账</div>
      <div class="sma main_bar">状态</div>
      <div class="sma">时间</div>
    </div>

    <div class="title_bar" v-for="v in 6" :key="v">
      <div class="sma">661</div>
      <div class="sma main_bar">已打款</div>
      <div class="sma item_bar">2021-04-10 00:18:04</div>
    </div>

    <div class="bt_tips">没有更多数据了</div>
  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue';

export default {
  name: 'TixianDetail',
  components: {
    NavBar
  }
}
</script>

<style lang="less" scoped>

   .tixian_detail{
      width: 100%;
      min-height: 100vh;
      background-color: #fff;
      .title_bar{
        margin: 0 10px;
        line-height: 30px;
        display: flex;
        font-size: 11px;
        border-bottom: 0.5px solid #ccc;

        .sma{
          width: 100px;
              -webkit-box-flex: 0;
              -webkit-flex-grow: 0;
              flex-grow: 0;
              -webkit-flex-shrink: 0;
              flex-shrink: 0;
              padding: 7px 5px;
              text-align: center;
        }

        .item_bar{
          line-height: 20px;
        }


        .main_bar{
          padding: 6px 4px;
          text-align: center;
          -webkit-box-flex: 1;
          -webkit-flex-grow: 1;
          flex-grow: 1;
        }
      }

      .bt_tips{
        color: #777;
            display: -webkit-box;
            display: -webkit-flex;
            display: flex;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -webkit-flex-direction: row;
            flex-direction: row;
            height: 34px;
            -webkit-box-align: center;
            -webkit-align-items: center;
            align-items: center;
            -webkit-box-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
      }
   }

</style>
