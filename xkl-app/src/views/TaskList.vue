<template>
  <div class="task_list">
    <NavBar title="任务列表" :isTrueArrow="true"/>

   <!-- <div class="tab_box">
      <div class="tab_item" @click="changeTab(i)" :class="i == active ? 'tab_item_active' : ''" v-for="(v,i) in tabData" :key="i">{{ v.txt }}({{ v.num }})</div>
    </div> -->

    <van-tabs v-model="active" color="#1676db" title-active-color="#1676db">
      <van-tab v-for="(v,i) in tabData" :key="i" :title="v.txt"></van-tab>
    </van-tabs>

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
          txt:'全部',
          num:0,
          type:0
        },
        {
          txt:'待操作',

          type:2
        },
        {
          txt:'返款中',

          type:3
        },
        {
          txt:'金额异常',

          type:10
        },
        {
          txt:'待评价',

          type:4
        },
        {
          txt:'待确认',

          type:5
        },
        {
          txt:'已完成',

          type:6
        },
        {
          txt:'催评中',

          type:30
        },
        {
          txt:'已取消',

          type:40
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
