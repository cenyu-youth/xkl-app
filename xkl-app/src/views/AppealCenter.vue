<template>
  <div class="appeal_center">
    <NavBar title="申诉中心" :isTrueArrow="true"/>

    <van-tabs @change="change" v-model="active" background="#f0f0f0" style="border-bottom: 1px solid #ddd;">
      <van-tab title="待处理"></van-tab>
      <van-tab title="申诉中"></van-tab>
      <van-tab title="申诉结束"></van-tab>
    </van-tabs>

    <div class="item" v-for="(v,i) in list" :key="i" @click="shenSuDetail(v.order_unique)">
      <div class="item_tp">
        <div class="lt">订单编号：{{v.order_unique}}</div>
        <div class="rt">{{v.status_desc}}</div>
      </div>
      <div class="date">{{v.add_time}}</div>
      <div class="shensu">{{v.type_name}}</div>
    </div>


  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue';

import qs from 'qs'

import { mapState, mapMutations } from 'vuex'
export default {
  name: 'AppealCenter',
  components: {
    NavBar
  },
  computed: mapState([
      'userInfo',
      'user'
  ]),
  data(){
    return{
      list:[
      ],
      active: 0,
      page:1
    }
  },
  created(){

    this.reqInit(1)


  },
  methods: {

    ...mapMutations(['changeUserInfo','changeUser']),

    change(e){
      this.page = 1;
      this.reqInit(e + 1)

      console.info(e + 1)
    },

    shenSuDetail(id){
      this.$router.push({name:'appealdetail', query:{id:id}})
    },
    reqInit(type){
      this.axios({
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded',
          "user-id": this.userInfo.user_id,
          "user-token": this.userInfo.user_token
        },
        method: 'POST',
        url: 'http://106.12.220.193/Webapp/Appeal/getAppealList',
        data: qs.stringify({
          PageSize: 10,
          Page: this.page,
          Status: type
        })
      }).then(result => {

         let res = result.data

        console.info('请求申诉列表=====>',res)
        if(res.code == 0){
          if(res.data.HasNextPage){
            this.page += 1;
          }

          this.list = res.data.DataList

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

   .appeal_center{
      width: 100%;
      min-height: 100vh;
      background-color: #f0f0f0;

      .item{
        padding: 7.5px 5px;
        background-color: #fff;
        border-bottom: 1px solid #ddd;

        .item_tp{
          height: 35px;
          line-height: 35px;
          display: flex;
          justify-content: space-between;
            font-size: 15px;

          .rt{
            width: 65px;
            height: 30px;
            text-align: center;
            line-height: 30px;
            background-color: #419cff;
            color: #fff;
            border-radius: 10px;
          }
        }

        .date{
          color: #ff4163;
          font-size: 15px;
          height: 30px;
          line-height: 30px;
        }

        .shensu{
          color: #808080;
          font-size: 13px;
          height: 30px;
          line-height: 30px;
        }
      }
   }






</style>
