<template>
  <div class="collection_user">
    <NavBar title="收款账号" :isTrueArrow="true"  rtTtit="添加" rtPath="addcollectionuser"/>

    <div class="item" v-for="(v,i) in list" :key="i">
      <div class="lt">
        <div class="bank">{{v.bank_name}}</div>
        <div class="ct">卡号：{{v.bank_card_no}}</div>
        <div class="ct">持卡人：{{v.bank_card_name}}</div>
        <div class="ct">开户地：{{v.province}}{{v.city}}</div>
      </div>
      <div class="rt">
        <van-button class="btns ac" type="primary" @click="goState({name:'addcollectionuser', query:{id: v.sign}})">修改信息</van-button>
        <van-button class="btns gc" type="primary" @click="goState({name:'tixianapply', query:{id: v.sign}})">快速提现</van-button>
      </div>
    </div>

   </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue';

import qs from 'qs'

import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CollectionUser',
  components: {
    NavBar
  },
  computed: mapState([
      'userInfo',
      'user'
  ]),
  data(){
    return{
      list:[]
    }
  },
  created(){

    this.reqInit()


  },
  methods: {

    ...mapMutations(['changeUserInfo','changeUser']),

    goState(o){
      this.$router.push(o)
    },

    shenSu(){
      if(this.taskData.appeal_url == 2){
        this.$router.push({name:'appeal', query:{id:this.$route.query.id}})
      }
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
          this.list = res.data;

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

   .collection_user{
      width: 100%;
      min-height: 100vh;
      background-color: #f0f0f0;

      .item{
        padding: 10px 12px;
        border-bottom: 1px solid #eee;
        background-color: #fff;

        display: flex;
        justify-content: space-between;
        line-height: 22px;

        .lt{
          font-size: 15px;
          color: #333;
          .bank{
            font-weight: bold;
            color: #1676db;
          }
        }

        .rt{
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          .btns{
            padding: 0 10px;
            font-size: 15px;
            color: #fff;
            height: 35px;
            line-height: 35px;
            border-radius: 4px;
            border: none;
            margin: 4px 0;
          }
          .ac{
            background-color: #1ab9f4;
          }
          .gc{
            background-color: #1676db;
          }
        }
      }

   }






</style>
