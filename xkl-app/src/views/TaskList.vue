<template>
  <div class="task_list">
    <NavBar title="任务列表" :isTrueArrow="true"/>

    <div class="tab_box">
      <div class="tab_item" @click="changeTab(i)" :class="i == active ? 'tab_item_active' : ''" v-for="(v,i) in tabData" :key="i">{{ v.txt }}({{ v.num }})</div>
    </div>

  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue';

export default {
  name: 'TaskList',
  components: {
    NavBar
  },
  data(){
    return{
      tabData:[
        {
          txt:'待审核',
          num:0
        },
        {
          txt:'待操作',
          num:0
        },
        {
          txt:'待返款发货',
          num:0
        },
        {
          txt:'待评价',
          num:0
        },
        {
          txt:'待确认',
          num:0
        },
        {
          txt:'有追评',
          num:0
        },
        {
          txt:'已完成',
          num:0
        },
        {
          txt:'退款单',
          num:0
        },
        {
          txt:'撤销管理',
          num:0
        },
      ],
      active:0
    }
  },
  created(){
    this.active = this.$route.query.idx ? this.$route.query.idx : 0
  },
  methods: {
    changeTab(idx){
      this.active = idx
    }
  }
}
</script>

<style lang="less" scoped>

   .task_list{
      width: 100%;
      min-height: 100vh;
      background-color: #fff;

      .tab_box{
        width: 100%;
        display: flex;
        flex-wrap: wrap;

        .tab_item{
          padding: 0 10px;
          line-height: 35px;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          height: 35px;
        }
        .tab_item_active{
          border-bottom: 2px solid #1092cd;
          color: #1092cd;
        }
      }
   }

</style>
