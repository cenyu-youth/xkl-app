<template>
  <div class="task_list">
    <NavBar title="任务列表" :isTrueArrow="true"/>

   <!-- <div class="tab_box">
      <div class="tab_item" @click="changeTab(i)" :class="i == active ? 'tab_item_active' : ''" v-for="(v,i) in tabData" :key="i">{{ v.txt }}({{ v.num }})</div>
    </div> -->

    <van-tabs v-model="active" color="#1676db" title-active-color="#1676db" @change="changeTab">
      <van-tab v-for="(v,i) in tabData" :key="i" :title="v.txt"></van-tab>
    </van-tabs>

    <div class="task_box">
      <div class="task_item" v-for="(v,i) in listData" :key="i">
        <div class="task_tp">
          <div>订单编号：{{v.order_unique}}</div>
          <div>{{v.status_desc}}</div>
        </div>

        <div class="task_ct">
          <div class="img_box">
            <img :src="v.default_picture" alt="">
            <img class="layer" src="../assets/help/下载.png" alt="">
          </div>
          <div class="ct_box">
            <div class="ct_tp">
              <div class="store">{{v.shop_name}}</div>
              <div class="yj">佣金：{{v.user_commission}}</div>
            </div>
            <div class="ct_tp">
              <div class="store">{{v.account_name}}</div>
              <div class="yj">垫付：{{v.pay_amount}}</div>
            </div>
            <div class="date">{{v.receive_time}}</div>
          </div>
        </div>

        <div class="task_footer">
          <div class="ft_lt">
            <div class="obj">{{v.shop_type_name}}</div>
            <div class="jianxi">|</div>
            <div class="type">{{v.keyword_mame}}</div>
          </div>
          <van-button type="info" class="btn" @click="goState({name: 'taskdetail', query:{id:v.sign}})">详情</van-button>
        </div>
      </div>
    </div>

    <div class="noList" v-if="listData.length < 1">没有更多数据了</div>
  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue';

import qs from 'qs'

import { mapState, mapMutations } from 'vuex'
export default {
  name: 'TaskList',
  components: {
    NavBar
  },
  computed: mapState([
      'userInfo',
      'user'
  ]),
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
          txt:'待追评',

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
      active:0,
      page:1,
      listData:[],
      reqType:[
        0 ,
        2 , 3, 10, 4 ,5 ,6 ,30 ,40
      ]
    }
  },
  created(){
    this.active = this.$route.query.idx ? this.$route.query.idx : 0

    this.reqInit(this.active)


  },
  methods: {

    ...mapMutations(['changeUserInfo','changeUser']),

    goState(o){
      this.$router.push(o)
    },

    changeTab(idx){
      this.active = idx;
      this.page = 1;
      console.info(this.active)
      this.reqInit(this.active)

    },

    reqInit(type){
      this.axios({
        headers:{
          "user-id": this.userInfo.user_id,
          "user-token": this.userInfo.user_token
        },
        method: 'POST',
        url: 'http://106.12.220.193/Webapp/Order/getOrderList',
        data: qs.stringify({
          Status: this.reqType[type],
          page: this.page,
          PageSize: 10
        })
      }).then(result => {

         let res = result.data

        console.info('请求任务列表的信息=====>',res.data)
        if(res.code == 0){
          this.listData = res.data.DataList;

          if(res.data.HasNextPage){
            this.page += 1;
          }
        }else if(res.code == 9999){
          this.$router.push({name:'login'})
        }
      }).catch(err => {
        console.info(err)
      })
    }
  }
}
</script>

<style lang="less" scoped>

   .task_list{
      width: 100%;
      min-height: 100vh;
      background-color: #f0f0f0;

      // .tab_box{
      //   width: 100%;
      //   display: flex;
      //   flex-wrap: wrap;

      //   .tab_item{
      //     padding: 0 10px;
      //     line-height: 35px;
      //     -webkit-box-sizing: border-box;
      //     box-sizing: border-box;
      //     height: 35px;
      //   }
      //   .tab_item_active{
      //     border-bottom: 2px solid #1092cd;
      //     color: #1092cd;
      //   }
      // }

      .task_box{
        width: 100%;

        .task_item{
          width: 100%;
          color: #303133;
          font-size: 14px;
          // box-shadow: 0 0 16px 0 rgb(0 0 0 / 6%);
          border-radius: 20px;
          margin-top: 14px;
          border-bottom: 1px solid #f0eff5;
          background: #ffffff;
          overflow: hidden;
          .task_tp{
            display: flex;
            justify-content: space-between;
            background-color: #F9F9F9;
            padding: 18px 20px;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            font-size: 12px;
          }

          .task_ct{
            display: flex;
            align-items: center;
            padding: 10px;
            border-top: 1px solid #eee;
            border-bottom: 1px dashed #eee;
            .img_box{
                width: 80px;
                height: 80px;
                overflow: hidden;
                margin-right: 5px;
                position: relative;
              >img{
                width: 80px;
                height: 80px;
              }

              .layer{
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
              }
            }
            .ct_box{
                width: calc(100% - 25px);
                line-height: 27px;
                color: #303133;
                font-size: 14px;

                .ct_tp{
                  display: flex;
                  justify-content: space-between;

                  .yj{
                        color: rgb(245, 108, 108);
                  }
                }
            }

          }

          .task_footer{
            padding: 10px;
            text-align: right;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .ft_lt{
              display: flex;
              color: #e6a23c;
              .jianxi{
                color: #eee;
                margin: 0 4px;
              }
              .type{
                    color: #67c23a;
              }
            }

            .btn{
                height: 30px;
                background: #409EFF;
                border-color: #409EFF;
                color: #FFF;
                padding: 7px 20px;
                font-size: 12px;
                border-radius: 3px;
            }
          }

        }
      }

      .noList{
        color: #999;
        line-height: 50px;
        font-size: 15px;
        text-align: center;
      }

   }






</style>
