<template>
  <div class="receiving_orders">
    <NavBar title="接单" :isTrueArrow="true" rtTtit="绑定账号" rtPath="binuser"/>

    <van-radio-group v-model="radio">
      <div class="item" v-for="(v,i) in list" :key="i" @click="radio = i">
        <div class="lt">
          <img :src="accountType[v.account_type].url" alt="">

          <div class="ct">
            <div class="title">{{v.account_name}}({{v.status_map}})</div>
            <div class="subtitle">
              今日已接单({{v.day_use_order_total ? v.day_use_order_total : 0}}/{{v.day_order_total ? v.day_order_total : 0}}), 30天可接单({{v.month_use_order_total ? v.month_use_order_total : 0}} / {{v.month_order_total ? v.month_order_total : 0}})
            </div>
          </div>
        </div>

        <div class="rt"><van-radio :name="i" checked-color="#4CD864"></van-radio></div>
      </div>
    </van-radio-group>

    <div class="noList" v-if="list && list.length < 1">请先完成账号绑定</div>


    <div class="bt">
      <div class="title">每日接单上限由系统风控自动判定</div>

      <div class="btn" :class="flag ? 'gray' : ''" @click="jiedan">
        <div class="btns">{{timer}}</div>
      </div>
    </div>

    <van-popup v-model="show" :close-on-click-overlay="false">
      <div class="pop_warapper">
        <div class="box_item">
          <div class="lt">账户类型</div>
          <div class="rt">{{jiedanData.ShopTypeDesc}}</div>
        </div>

        <div class="box_item">
          <div class="lt">店铺名称</div>
          <div class="rt">{{jiedanData.SellerShopName}}</div>
        </div>

        <div class="box_item">
          <div class="lt">任务类型</div>
          <div class="rt">{{jiedanData.TaskTypeName}}</div>
        </div>

        <div class="box_item">
          <div class="lt">垫付本金</div>
          <div class="rt">{{jiedanData.PrincipalFeeTxt}}</div>
        </div>

        <div class="box_item">
          <div class="lt">任务佣金</div>
          <div class="rt">{{jiedanData.CommissionFee}}</div>
        </div>

        <div class="box_item">
          <div class="lt"></div>
          <div class="rt">{{popDownTime}}秒后自动关闭</div>
        </div>

        <div class="btnss">
          <div class="btn bgs" @click="jujue">拒绝</div>
          <div class="btn" @click="todyJujue">今日不再接此店铺</div>
          <div class="btn" style="background-color: #1092cd;" @click="jieshou">接受</div>
        </div>
      </div>
    </van-popup>

    <van-overlay :show="showOver" @click="showOver = false" z-index="999" :lock-scroll="true" />
    <div v-show="showOver" class="dialog_box">
      <div class="dialog_title">接单提醒</div>
      <div class="ct_box_box">
        <div class="ct">
          您当前发货中有<span>{{popData.evaluate_total}}</span>笔为指定评语任务，请必须先查看订单评语要求后再确认收货评价!
        </div>
        <div class="ct">您当前有<span>{{popData.add_evaluate_status}}</span>笔为要求追评，请进入追评任务里进行操作!</div>
        <div class="ct">您当前有<span>{{popData.pre_sale_total}}</span>笔为预售任务，请控制好付款时间!</div>
        <div class="ct">本平台所有任务不可以直接在淘宝收货评价，必须等相应订单物流显示签收后，先返回平台查看是否有指定好评，再去淘宝根据商家要求好评内容进行相应的好评操作并截图，最后返回平台确认好评!</div>

      </div>

      <div class="btns">
        <van-button class="btn" type="primary" @click="showOver = false">确定</van-button>
        <van-button class="btn" type="danger" @click="todyNo">今日不再提醒</van-button>
      </div>
    </div>


  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue';
import qs from 'qs'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'ReceivingOrders',
  components: {
    NavBar
  },
  computed: mapState([
      'userInfo',
      'user'
  ]),
  data(){
    return{

      showOver:false,
      popData:{
        add_evaluate_status: 0,
        evaluate_total: 0,
        pre_sale_total: 0
      },


      list:[],
      radio:0,
      flag:false,
      timer: '接单',
      downTime: 30,
      show: false,
      popDownTime:30,
      jiedanData:[],
      accountType:{
        1: {
          url:require('../assets/gif/tb.jpeg')
        },
        2: {
          url:require('../assets/gif/jd.jpeg')
        },
        3: {
          url:require('../assets/gif/pdd.jpeg')
        },
        4: {
          url:require('../assets/gif/dy.jpeg')
        },
      }
    }
  },
  created(){
    this.reqInit();
    this.reqInitPopData()
  },
  methods:{

    ...mapMutations(['changeUserInfo','changeUser']),

    reqInitPopData(){
      this.axios({
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded',
          "user-id": this.userInfo.user_id,
          "user-token": this.userInfo.user_token
        },
        method: 'POST',
        url: 'http://106.12.220.193/Webapp/order/getOrderRemind',
        data: qs.stringify({
          taskid: this.jiedanData.TaskId,
          id: this.jiedanData.Id
        })
      }).then(result => {

         let res = result.data;

        console.info('请求弹窗接口=====>',res)
        if(res.code == 0){
          this.popData = res.data

         this.todayShowPop()
        }else if(res.code == 9999){
          this.$router.push({name:'login'})
        }else{
          this.$toast(res.msg)
          this.show = false;
        }
      }).catch(err => {
        console.info(err)
      })
    },

    //今日不再提醒
    todyNo(){
      this.showOver = false
      localStorage.setItem('jiedanPop',JSON.stringify(new Date().getTime()))

    },
    //判断今天是否还需要显示弹窗
    todayShowPop(){
      let local = JSON.parse(localStorage.getItem('jiedanPop'))

      let date = new Date()
      let year = date.getFullYear();
      let mon = date.getMonth() + 1;
      let day = date.getDate();

      if(local){
        let localDate = new Date(local)
        let localYear = localDate.getFullYear();
        let localmon = localDate.getMonth() + 1;
        let localday = localDate.getDate();
        if((year >= localYear) && (mon >= localmon) && (day > localday)){
          this.showOver = true
        }else{
          this.showOver = false
        }

      }else{
        this.showOver = true
      }
    },


    jujue(){
      clearInterval(this.timeeee)
      this.axios({
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded',
          "user-id": this.userInfo.user_id,
          "user-token": this.userInfo.user_token
        },
        method: 'POST',
        url: 'http://106.12.220.193/Webapp/receiptTask/refuseOrder',
        data: qs.stringify({
          taskid: this.jiedanData.TaskId,
          id: this.jiedanData.Id
        })
      }).then(result => {

         let res = result.data

        console.info('请求账号列表=====>',res)
        if(res.code == 0){
          this.show = false;
        }else if(res.code == 9999){
          this.$router.push({name:'login'})
        }else{
          this.$toast(res.msg)
          this.show = false;
        }
      }).catch(err => {
        console.info(err)
      })
    },

    jieshou(){
      clearInterval(this.timeeee)
      this.axios({
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded',
          "user-id": this.userInfo.user_id,
          "user-token": this.userInfo.user_token
        },
        method: 'POST',
        url: 'http://106.12.220.193/Webapp/receiptTask/saveReceiptOrder',
        data: qs.stringify({
          taskid: this.jiedanData.TaskId,
          id: this.jiedanData.Id
        })
      }).then(result => {

         let res = result.data

        console.info('请求账号列表=====>',res)
        if(res.code == 0){
          this.show = false;



          this.$router.push({name:'tasklist',query:{idx: 1}})
        }else if(res.code == 9999){
          this.$router.push({name:'login'})
        }else{
          this.$toast(res.msg)
          this.show = false;
        }
      }).catch(err => {
        console.info(err)
      })
    },

    todyJujue(){
      clearInterval(this.timeeee)
      this.axios({
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded',
          "user-id": this.userInfo.user_id,
          "user-token": this.userInfo.user_token
        },
        method: 'POST',
        url: 'http://106.12.220.193/Webapp/receiptTask/refuseshop',
        data: qs.stringify({
          shopId:this.jiedanData.SellerShopId
        })
      }).then(result => {

         let res = result.data

        console.info('请求账号列表=====>',res)
        if(res.code == 0){
          this.show = false;
        }else if(res.code == 9999){
          this.$router.push({name:'login'})
        }else{
          this.$toast(res.msg)
          this.show = false;
        }
      }).catch(err => {
        console.info(err)
      })
    },

    popDownTimeFn(type){

      this.popDownTime = type

      this.timeeee = setInterval(() => {

        this.popDownTime = this.popDownTime - 1 < 10 ? '0' + this.popDownTime - 1 : this.popDownTime - 1

        if(this.popDownTime < 0){
          this.popDownTime = 30;
          this.show = false;
          this.jujue()
          clearInterval(this.timeeee)
        }
      },1000)
    },

    jiedan(){
      if(this.flag) return;

      this.flag = true;

      this.timer = "--"

      this.jiedanReq()


      let timer = setInterval(() => {

        this.downTime = this.downTime - 1;
        this.timer = this.downTime < 10 ? '0' + this.downTime : this.downTime;

        if(this.downTime < 0){
          this.downTime = 30;
          this.timer = '接单'
          this.flag = false;
          clearInterval(timer);
        }
      }, 1000)
    },

    jiedanReq(){

      // console.info(this.list[this.radio].account_id)

      this.axios({
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded',
          "user-id": this.userInfo.user_id,
          "user-token": this.userInfo.user_token
        },
        method: 'POST',
        url: 'http://106.12.220.193/Webapp/receiptTask/getReceiptOrder',
        data: qs.stringify({
          accountId: this.list[this.radio].account_id
        })
      }).then(result => {

         let res = result.data

        console.info('请求账号列表=====>',res)
        if(res.code == 0){
          this.popDownTimeFn(res.data.AcceptTimeOut)
          this.show = true;
          this.jiedanData = res.data;



        }else if(res.code == 9999){
          this.$router.push({name:'login'})
        }else{

            this.$toast(res.msg)
        }
      }).catch(err => {
        console.info(err)
      })
    },

    goState(o){
      this.$router.push(o)
    },

    reqInit(){
      this.axios({
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded',
          "user-id": this.userInfo.user_id,
          "user-token": this.userInfo.user_token
        },
        method: 'GET',
        url: 'http://106.12.220.193/Webapp/account/getList',
        data: qs.stringify({})
      }).then(result => {

         let res = result.data

        console.info('请求账号列表=====>',res)
        if(res.code == 0){
          this.list = res.data.DataList
        }else if(res.code == 9999){
          this.$router.push({name:'login'})
        }
      }).catch(err => {
        console.info(err)
      })
    },


    changeActive(idx){
      this.active = idx;
      this.money = '';
      this.txPwd = ''
    }
  }
}
</script>

<style lang="less" scoped>

   .receiving_orders{
      width: 100%;
      min-height: calc(100vh - 140px);
      background-color: #f0f0f0;
      padding-bottom: 140px;

      .item{
        padding: 10px 12px;
        background-color: #fff;
        border-bottom: 1px solid #ddd;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .lt{
          display: flex;

          .ct{
            font-size: 15px;
            color: #333;

            .subtitle{
              font-size: 12px;
              color: #808080;
            }
          }

          >img{
            width: 45px;
            border-radius: 50%;
            margin-right: 10px;
          }
        }
      }


      .bt{
        width: 100%;
        height: 120px;
        position: fixed;
        bottom: 0;
        z-index: 100;
        padding: 5px 3px;
        background-color: rgba(255, 255, 255, 0.96);
        border-top: 1px solid #eee;


        .title{
          font-size: 12px;
          color: #808080;
          height: 30px;
          line-height: 30px;
          text-align: center;
        }

        .btn{
          width: 80px;
          height: 80px;
          border-radius: 50%;
          border: 1px solid #1676db;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;

          .btns{
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background-color: #1676db;
            color: #fff;
            text-align: center;
            line-height: 60px;
            background-color: #1676db;
            box-shadow:  1px 1px 20px 1px #1676db;
            animation: ani 2s linear infinite alternate;
            font-size: 20px;
          }

          @keyframes ani{
            0%{
              box-shadow:  1px 1px 20px 1px #fff;
            }
            100%{
              box-shadow:  1px 1px 20px 1px #1676db;
            }
          }
        }

        .gray{
          border-color: #808080;
          .btns{
            background-color: #808080;
            box-shadow:  1px 1px 20px 1px #808080;
            animation: ani2 2s linear infinite alternate;
            border-color: #808080;
          }

          @keyframes ani2{
            0%{
              box-shadow:  1px 1px 20px 1px #fff;
            }
            100%{
              box-shadow:  1px 1px 20px 1px #808080;
            }
          }
        }
      }

      .pop_warapper{
        width: 300px;
        padding: 10px 12px;
        background-color: #fff;
      }
      .box_item{
        width: 90%;
        margin: 0 auto;
        height: 30px;
        line-height: 30px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
        color: #999;
      }

      .btnss{
        width: 90%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 10px;

        >.btn{
          padding: 0 10px;
          flex: 1;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          background-color: #f4b840;
          text-align: center;
          border-radius: 4px;
        }
        >.btn:nth-child(2){
          margin: 0 8px;
        }

        .bgs{
          background-color: #eb5267;
        }
      }

      .noList{
        color: #999;
        line-height: 50px;
        font-size: 15px;
        text-align: center;
      }



        .dialog_box{
          padding: 10px;
          width: 300px;
          overflow: hidden;
          background: #fff;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          -webkit-border-radius: 10px;
          border-radius: 10px;

          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 9999;
          font-size: 15px;
          color: #333;

          .dialog_title{
            text-align: center;
            font-weight: 700;
            font-size: 16px;
            color: #333;
            line-height: 35px;
            border-bottom: 0.5px solid #ccc;
          }
          .dialog_ct{
            height: 300px;
            overflow-y: auto;
            overflow-x: hidden;
            padding: 10px;
            font-size: 15px;
            color: #333;
            white-space:pre-wrap !important;
            word-wrap : break-word  !important;

          }

          .ct_box_box{
            padding: 10px 0;
            span{
              color: red;
              padding: 0 4px;
            }
          }
          .ct{
            margin-bottom: 10px;
          }
          .btns{
            width: 100%;

            display: flex;
            justify-content: space-between;

            .btn{
              min-width: 120px;
              border-radius: 6px;
            }
          }
        }

    }

</style>
