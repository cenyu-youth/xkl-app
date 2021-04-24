<template>
  <div class="tixian_apply">
    <NavBar title="提现申请" :isTrueArrow="true" rtTtit="查看明细" rtPath="tixiandetail"/>

    <div class="tp_ct">
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


  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue';

export default {
  name: 'TixianApply',
  components: {
    NavBar
  },
  data(){
    return{
      active:0,
      txPwd:'',
      money: ''
    }
  },
  methods:{
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
      background-color: #fff;

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
