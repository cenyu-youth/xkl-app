<template>
  <div class="bin_user">
    <NavBar title="账号绑定" :isTrueArrow="true" rtTtit="添加" rtPath="addbinuser"/>

    <div class="item" v-for="(v,i) in list" :key="i" @click="goState({name: 'addbinuser', query:{id:v.account_id}})">
      <div class="lt">
        <img :src="accountType[v.account_type].url" alt="">

        <div class="ct">
          <div class="title">{{v.account_name}}({{v.status_map}})</div>
          <div class="subtitle">{{v.remark}}</div>
        </div>
      </div>

      <div class="rt"><van-icon name="arrow" /></div>
    </div>


  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue';
import qs from 'qs'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'BinUser',
  components: {
    NavBar
  },
  computed: mapState([
      'userInfo',
      'user'
  ]),
  data(){
    return{
      list:[],
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
    this.reqInit()
  },
  methods:{

    ...mapMutations(['changeUserInfo','changeUser']),

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

   .bin_user{
      width: 100%;
      min-height: 100vh;
      background-color: #f0f0f0;

      .item{
        padding: 10px 12px;
        background-color: #fff;
        border-bottom: 1px solid #ddd;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 18px;

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
            flex-shrink: 0;
            flex-basis: 0;
            width: 45px;
            height: 45px;
            display: block;
            border-radius: 50%;
            margin-right: 10px;
          }
        }
      }

    }

</style>
