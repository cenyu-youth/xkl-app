<template>
  <div class="end_task">
    <NavBar title="已接任务" :isTrueArrow="true"/>

    <div class="title">垫付任务</div>

    <div class="grid_box">
      <div class="item_box">
        <div class="tb_tit">未完成<span>(0)</span></div>
        <img class="tb_img" src="../assets/endtask/all-unfinished.png" alt="">
      </div>
      <div class="item_box">
        <div class="tb_tit">已完成<span>(0)</span></div>
        <img class="tb_img" src="../assets/endtask/all-finsished.png" alt="">
      </div>
      <div class="item_box">
        <div class="tb_tit">已撤销<span>(0)</span></div>
        <img class="tb_img" src="../assets/endtask/all-revoked.png" alt="">
      </div>
    </div>

    <div class="grid_box bt_box">
      <div class="item_box">
        <div class="tb_tit">申诉中心</div>
        <img class="tb_img" src="../assets/endtask/all-appeal.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue';

export default {
  name: 'Endtask',
  components: {
    NavBar
  }
}
</script>

<style lang="less" scoped>

   .end_task{
      width: 100%;
      min-height: 100vh;
      background-color: #fff;

      .title{
        margin: 0 10px;
        line-height: 40px;
            font-size: 16px;
      }

      .grid_box{
        width: calc(100% - 20px);
        margin: 0 10px;
        padding: 20px 0;
        display: flex;
        border-bottom: 1px solid #ccc;

        .item_box{
          width: 33%;
          border-right: 0.5px solid #ccc;
          text-align: center;
          font-size: 14px;
          img{
            width: 50px;
            margin-top: 5px;
          }
          span{
            color: red;
          }
        }

        .item_box:last-child{
          border: none;
        }
      }

      .bt_box{
        border: none;
      }
   }

</style>
