<template>
  <div class="capital_details">
    <NavBar title="资金明细" :isTrueArrow="true" rtTtit="" rtPath="tixiandetail"/>

    <van-tabs v-model="tab_a_active" title-active-color="#646566" color="transparent">
      <van-tab title="可用金币"></van-tab>
      <van-tab title="提现中"></van-tab>
    </van-tabs>

    <van-tabs v-model="tab_b_active" @change="change" title-active-color="#1092cd" color="transparent" background="#ddd">
      <van-tab title="全部"></van-tab>
      <van-tab title="本金"></van-tab>
      <van-tab title="佣金"></van-tab>
      <van-tab title="推荐"></van-tab>
    </van-tabs>

    <!-- <div class="item_box">
      <div class="item" v-for="(v,i) in list" :key="i">
        <div class="tp_box">
          <div class="date_box">{{v.add_time}}</div>
          <div class="detail_box">
            <div class="money">0.271</div>
            <div class="e_money">余额：5078</div>
          </div>
        </div>
        <div class="ct">下下级买手订单，确认完成返推广费，订单号：187972550783770624</div>
      </div>
    </div> -->

    <div class="m_box">
      <div class="m_item" v-for="(v,i) in list" :key="i">
        <div class="m_lt">
          <div class="m_tp">
            <div class="m_date">{{v.add_time}}</div>
            <div class="m_status">{{v.status == 1 ? '待审核' : v.status == 2 ? '已发放' : '已拒绝'}}</div>
          </div>
          <div class="m_ct">
            订单编号{{v.order_unique}},
            {{v.remark}}
          </div>
        </div>
        <div class="m_rt">+{{v.order_amount}}</div>
      </div>
    </div>

    <div class="noList" v-if="list.length < 1">没有更多数据了</div>

  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue';

import qs from 'qs';

import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CapitalDetails',
  components: {
    NavBar
  },
  data(){
    return{
      tab_a_active:0,
      tab_b_active:0,
      page:1,
      pageSize:10,
      listData:{},
      list:[],
      isTrue:false
    }
  },
  computed:mapState([
      'userInfo',
      'user'
  ]),
  created(){
    this.reqData(0,true)
  },
  methods:{
    change(e){
      this.listData = []
      this.reqData(e == 0 ? 0 : e + 1, false)
    },
    reqData(type,isBt){
      console.info(type,isBt)
      this.axios({
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded',
          "user-id": this.userInfo.user_id,
          "user-token": this.userInfo.user_token
        },
        method: 'POST',
        url: 'http://106.12.220.193/Webapp/Bill/getBillList',
        data: qs.stringify({
          page:isBt ? this.page : 1,
          pageSize:this.pageSize,
          DataType:parseInt(type)
        })
      }).then(result => {

        let res = result.data

        console.info('请求资金详情页数据===>',res)

        if(res.code == 0){
          this.listData = res.data;

          if(isBt){
            let arr = this.list;

            this.list = arr.concat(res.data.DataList)
          }else{
            this.list = res.data.DataList
          }


          if(res.data.HasNextPage){
            this.page += 1
          }


        }else if(res.code == 9999){
          this.$router.push({name:'login'})
        }
      }).catch(err => {
        console.log('err ==> ', err);
      })
    }
  }
}
</script>

<style lang="less" scoped>

   .capital_details{
      width: 100%;
      min-height: 100vh;
      background-color: #fff;

      .item_box{
        padding: 0 10px;
        background-color: #fff;

        .item{
          width: 100%;
          padding: 10px 0;
          border-bottom: 1px solid #ccc;
          .tp_box{
            height: 30px;
            line-height: 30px;
            display: flex;
            justify-content: space-between;
            margin-bottom: 5px;

            .date_box{
              color: #8f8f94;
              font-size: 14px;
            }

            .detail_box{
              font-size: 16px;
              display: flex;
              justify-content: space-between;

              .money{
                color: #00abef;
                margin-right: 8px;
              }
              .e_money{
                font-size: 14px;
                color: #333;
              }
            }
          }
          .ct{
            color: #8f8f94;
            font-size: 18px;
            font-weight: 700;
            line-height: 25px;
          }
        }
      }

      .m_box{
        width: 100%;
        .m_item{
          padding: 5px;
          display: flex;align-items: center;
          justify-content: space-between;

          .m_tp{
            display: flex;
            align-items: center;
            font-size: 15px;
            color: #bbb;


            .m_status{
                  display: inline-block;
                  padding: 0 0.1rem;
                  border-radius: 3px;
                  color: #fff !important;
                  background-color: #808080 !important;
                  margin-left: 5px;
                  color: #fff !important;
                  background-color: #ff4163 !important;
            }
          }

          .m_ct{
            font-style: 15px;
            color: #808080;
          }

          .m_rt{
                color: #419cff;
                font-size: 20px;
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
