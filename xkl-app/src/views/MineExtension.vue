<template>
  <div class="mine_extension">
    <NavBar title="我的推广" :isTrueArrow="true" rtTtit="" rtPath="searchup"/>

    <!-- <van-field v-model="minPhone" placeholder="精准搜索我推广的手机号" /> -->

    <van-tabs @change="change" v-model="active" background="#f0f0f0" color="transparent" title-active-color="#1092cd" title-inactive-color="#202020">
      <van-tab title="徒子">
        <div class="item_box">
          <div class="item">手机号</div>
          <div class="item">受邀人数</div>
          <div class="item">注册时间</div>
        </div>

        <div class="item_box" v-for="(v,i) in list" :key="i">
          <div class="item">{{v.username}}</div>
          <div class="item">{{v.count}}</div>
          <div class="item sma">{{v.add_time}}</div>
        </div>
      </van-tab>
      <van-tab title="徒孙">
        <div class="item_box">
          <div class="item">手机号</div>
          <div class="item">受邀人数</div>
          <div class="item">注册时间</div>
        </div>

        <div class="item_box" v-for="(v,i) in list" :key="i">
          <div class="item">{{v.username}}</div>
          <div class="item">{{v.count}}</div>
          <div class="item sma">{{v.add_time}}</div>
        </div>
      </van-tab>
    </van-tabs>



    <div v-if="!list || list.length < 1" class="more_tip">没有更多数据</div>

  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue';
import qs from 'qs'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'MineExtension',
  components: {
    NavBar
  },
  computed: mapState([
      'userInfo',
      'user'
  ]),
  data(){
    return{
      minPhone:'',
      active:0,
      list:''
    }
  },
  created(){
    this.reqInit(1)
  },
  methods:{

    change(e){
      this.reqInit(e + 1)
    },

    ...mapMutations(['changeUserInfo','changeUser']),

    reqInit(level){
      this.axios({
          headers:{
            'Content-Type': 'application/x-www-form-urlencoded',
            "user-id": this.userInfo.user_id,
            "user-token": this.userInfo.user_token
          },
          method: 'POST',
          url: 'http://106.12.220.193/webapp/home/getExtension',
          data: qs.stringify({
            level:level
          })
        }).then(result => {

           let res = result.data

          // console.info('提交申诉=====>',res)
          if(res.code == 0){
            this.list = res.data
          }else if(res.code == 9999){
            this.$router.push({name:'login'})
          }else{
            this.$toast(res.msg)
          }
        }).catch(err => {
          console.info(err)
        })
    },

  }
}
</script>

<style lang="less" scoped>

   .mine_extension{
      width: 100%;
      min-height: 100vh;
      background-color: #f0f0f0;

      .tp_inp{
        margin-top: 5px;
      }

      .item_box{
        width: 100%;
        background-color: #fff;
        display: flex;
        .item{
          flex: 1;
          padding: 7px 5px;
          flex-shrink: 0;
          text-align: center;
          line-height: 25px;
          font-size: 14px;
          color: #202020;
        }

        .sma{
          line-height: 20px;
        }
      }

      .more_tip{
        line-height: 50px;
        color: #999;
        font-size: 15px;
        text-align: center;
      }
   }

</style>
