<template>
  <div class="tixian_apply">
    <NavBar title="提现申请" :isTrueArrow="true" rtTtit="" rtPath="tixiandetail"/>

    <!-- <div class="tp_ct">
      <div class="tp_title">提现说明</div>
      <div class="tp_txt">1、推广费不可提现，可核实无误，手动确认合并到保证金再申请提现</div>
      <div class="tp_txt">2、保证金可随时提现，上笔提现完成后才可继续提现</div>
      <div class="tp_txt">3、申请提现后，相应金币进入冻结不可用状态</div>
      <div class="tp_txt">4、提现免手续费，有任何问题请联系平台客服</div>
      <div class="tp_txt">5、每日可操作性合并一次，可到资金明细查询</div>
      <div class="tp_txt">6、每日保证金可提现1次</div>
    </div>

    <div class="user_box">
      <div class="user_item">开户人：刘梦蝶</div>
      <div class="user_item">开户银行：刘梦蝶</div>
      <div class="user_item">银行卡号：刘梦蝶</div>
      <div class="user_item">支付宝姓名：刘梦蝶</div>
      <div class="user_item">支付宝账号：刘梦蝶</div>
    </div>

    <div class="money_tab">
      <div class="ta_tp">
        <div class="ta_tp_item" :class="active == 0 ? 'ta_tp_item_active' : ''" @click="changeActive(0)">推广费合并</div>
        <div class="ta_tp_item" :class="active == 1 ? 'ta_tp_item_active' : ''" @click="changeActive(1)">本金提现</div>
      </div>

      <div class="ta_txt_box" v-show="active == 0">
        <div class="ta_txt">可合并金额：684.418</div>
        <div class="ta_txt">实际到账金额：642.418（免手续费）</div>
      </div>


      <div class="ta_txt_box" v-show="active == 1">
        <div class="ta_txt">可合并金额：684.418</div>
        <div class="ta_txt">实际到账金额：{{ money ? money : 0 }}（免手续费）</div>
      </div>



      <input v-show="active == 1" type="number" class="ta_inp no_bor" v-model="money" placeholder="请输入金额(整数)">

      <input type="password" v-model="txPwd" class="ta_inp" placeholder="请输入提现密码">
    </div>

    <van-button type="primary" size="large" class="submit_btn">提交合并</van-button>

 -->

    <van-cell is-link @click="goState({name:'collectionuser'})">{{xinxi.info.bank_name ? xinxi.info.bank_name : ''}} {{xinxi.info.bank_card_name ? xinxi.info.bank_card_name : ''}} (尾号{{xinxi.info.bank_last_num}})</van-cell>

    <div class="inp_box">
      <input v-model="tixain" type="text" class="money_box" placeholder="请输入提现金币">
      <div class="tip">可提现{{xinxi.draw_config ? xinxi.draw_config.amount : 0.00}}金</div>
    </div>

    <div class="inp_box ax">
      <div class="tip">1金=1元, {{xinxi.draw_config ? xinxi.draw_config.min : 0}}金起提, 一天只能申请1次</div>
    </div>

    <van-button type="primary" class="submit_btnss" size="large" @click="submit">提现申请</van-button>


  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue';
import qs from 'qs'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'TixianApply',
  components: {
    NavBar
  },
  computed: mapState([
      'userInfo',
      'user'
  ]),
  data(){
    return{
      active:0,
      txPwd:'',
      money: '',
      info:'asda',
      xinxi:{
        info:{
          bank_name:''
        }
      },
      tixain:''

    }
  },
  created(){
    if(this.$route.query.id){
      this.reqInfo(this.$route.query.id);
    }else{
      this.reqInit()
    }
  },
  methods:{

    ...mapMutations(['changeUserInfo','changeUser']),
    
    goState(o){
      this.$router.push(o)
    },

    submit(){

      if(this.tixain == ''){
        this.$toast('请输入提现金额');

        return
      }

      let config = this.xinxi.draw_config;
      if(config.num <= 0){
        this.$toast('今日可提款次数不足')
        return
      }

      if(parseFloat(config.amount) < this.tixain){
        this.$toast('提现金额超出可提现金额')
        return
      }

      if(this.tixain < config.min){
        this.$toast(`提现金额${config.min}金起提`)
        return
      }

      this.axios({
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded',
          "user-id": this.userInfo.user_id,
          "user-token": this.userInfo.user_token
        },
        method: 'POST',
        url: 'http://106.12.220.193/webapp/bill/SaveWithdrawals',
        data: qs.stringify({
          cashMoney:this.tixain,
          BankId: this.xinxi.info.sign
        })
      }).then(result => {

         let res = result.data

        console.info('请求收款账号列表=====>',res)
        if(res.code == 0){
          this.$toast(res.msg)
          
          this.$router.push({name: 'capitaldetails'})

        }else if(res.code == 9999){
          this.$router.push({name:'login'})
        }else{
          this.$toast(res.msg)
        }
      }).catch(err => {
        console.info(err)
      })
    },

    reqInit(){
      this.axios({
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded',
          "user-id": this.userInfo.user_id,
          "user-token": this.userInfo.user_token
        },
        method: 'POST',
        url: 'http://106.12.220.193/webapp/bank/getList',
        data: qs.stringify({})
      }).then(result => {

         let res = result.data

        console.info('请求收款账号列表=====>',res)
        if(res.code == 0){
          this.reqInfo(res.data[0].sign);

        }else if(res.code == 9999){
          this.$router.push({name:'login'})
        }
      }).catch(err => {
        console.info(err)
      })
    },

    reqInfo(id){
      this.axios({
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded',
          "user-id": this.userInfo.user_id,
          "user-token": this.userInfo.user_token
        },
        method: 'POST',
        url: 'http://106.12.220.193/webapp/bank/getInfo',
        data: qs.stringify({
          sign: id
        })
      }).then(result => {

         let res = result.data

        console.info('请求收款账号列表=====>',res)
        if(res.code == 0){
          this.xinxi = res.data

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

   .tixian_apply{
      width: 100%;
      min-height: 100vh;
      background-color: #f0f0f0;

      .inp_box{
        padding: 10px 12px;
        height: 30px;
        line-height: 30px;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
        position: relative;
        font-size: 13px;
        background-color: #fff;
        color: #525252;

        .money_box{
          width: 70%;
          border: none;
        }

        .tip{
          position: absolute;
          right: 10px;
          top: 50%;
          transform: translateY(-50%);
        }
      }

      .ax{
        border-top: none;
        color: #525252;
        font-size: 13px;
      }

      .submit_btnss{
        border: none;
        background-color: #1676db;
        border-radius: 4px;
        margin-top: 20px;
      }

      .tp_ct{
        padding: 10px;
        .tp_title{
          font-weight: 700;
          color: #222;
          font-size: 16px;
          line-height: 30px;
        }

        .tp_txt{
          line-height: 25px;
          font-size: 14px;
          color: #666;
        }
      }

      .user_item{
        height: 40px;
        padding: 7px 10px;
        border-top: 0.5px solid #ccc;
        font-size: 14px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        line-height: 25px;
      }

      .user_item:last-child{
        border-bottom: 0.5px solid #ccc;
      }

      .money_tab{
        width: 100%;
        margin-top: 15px;

        .ta_tp{
          width: 100%;
          display: flex;
          justify-content: space-between;

          .ta_tp_item{
            width: 50%;
            margin: 0 20px;
            -webkit-border-radius: 7px;
            border-radius: 7px;
            border: 0.5px solid #fff;
            padding: 7px 0;
            text-align: center;
            font-size: 16px;
          }

          .ta_tp_item_active{
                border: 1px solid #00abef;
                color: #00abef;
          }
        }

        .ta_txt_box{
          padding: 10px;
          font-size: 14px;
          line-height: 20px;
        }

        .ta_inp{
          width: 100%;
          outline: none;
          border: none;
          height: 40px;
          padding: 7px 10px;
          border-top: 0.5px solid #ccc;
          border-bottom: 0.5px solid #ccc;
          font-size: 14px;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          line-height: 25px;
        }
        .no_bor{
          border-bottom: none;
        }
      }

      .submit_btn{
        width: calc(100% - 20px);
        margin: 15px 10px;
        background-color: #007aff;
        border-radius: 5px;
      }
    }

</style>
