<template>
  <div class="zhi_fu_shen_q">
    <NavBar title="支付信息" :isTrueArrow="true"  rtTtit="" rtPath="addcollectionuser"/>

    <div class="tp">
      <van-icon name="star" />订单编号：{{ddbh}}
    </div>

    <div class="tip">填写平台订单编号</div>

    <div class="inp_box">
      <input type="number" class="inp" v-model="bh">
    </div>

    <div class="tip">支付截图</div>

    <div class="img_box">
      <van-uploader upload-text="支付截图" preview-size="148" v-model="fileList" multiple :max-count="1" />

      <img class="img" src="../assets/gif/info/ddd392b5-7a5d-4009-9b01-2e3f169ffd57.png" alt="">
    </div>


    <van-button @click="sumbit()" class="btn" type="primary" size="large">提交支付信息</van-button>

   </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue';

import qs from 'qs'

import { mapState, mapMutations } from 'vuex'
export default {
  name: 'ZhiFuShenQ',
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
      bh:'',
      fileList:[],
      ddbh:'',
      order_unique: '',
      task_unique: '',
      pay_img:[]
    }
  },
  created(){

    this.reqInit()
    this.reqInitAAAA()

    this.ddbh = this.$route.query.id

  },
  mounted(){
    this.changeReSize()
  },
  methods: {

    ...mapMutations(['changeUserInfo','changeUser']),

    goState(o){
      this.$router.push(o)
    },

    shenSu(){
      if(this.taskData.appeal_url == 2){
        this.$router.push({name:'appeal', query:{id:this.$route.query.id}})
      }else if(this.taskData.appeal_url == 1){
        this.$router.push({name:'appealdetail', query:{id:this.$route.query.id}})
      }
    },

    changeReSize(){
      let arr = document.querySelectorAll('.van-uploader__upload')

      for(let i = 0; i<arr.length; i++){
        arr[i].style.height = '228px'
      }
    },

    async upload(e){
      let res = await this.axios({
          headers:{
            'Content-Type': 'application/x-www-form-urlencoded',
            "user-id": this.userInfo.user_id,
            "user-token": this.userInfo.user_token
          },
          method: 'POST',
          url: 'http://106.12.220.193/Webapp/Upload/uploadFileImagesBase64',
          data: qs.stringify({
            base64img: e.content
          })
        })

        return res
    },

    async sumbit(){

      if(this.bh == ''){
        this.$toast('请输入平台订单编号');

        return
      }
      let img = ''
      if(this.fileList.length > 0 && this.fileList[0].url){
        img = this.fileList[0].url
      }else{
        img = this.fileList.length > 0 ? await this.upload(this.fileList[0]) : ''

        img = this.fileList.length > 0  ? img.data.data : ''
      }



      this.axios({
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded',
          "user-id": this.userInfo.user_id,
          "user-token": this.userInfo.user_token
        },
        method: 'POST',
        url: 'http://106.12.220.193/Webapp/order/saveConfirmedOrderInfo',
        data: qs.stringify({
          order_unique:this.ddbh,
          platform_id: this.bh,
          pay_img: img
        })
      }).then(result => {

         let res = result.data

        console.info('请求收款账号列表=====>',res)
        if(res.code == 0){
          this.$toast(res.msg)

          this.$router.replace({name:'tasklist', query:{idx:2}})

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
          this.list = res.data;

        }else if(res.code == 9999){
          this.$router.push({name:'login'})
        }
      }).catch(err => {
        console.info(err)
      })
    },


    reqInitAAAA(){
      this.axios({
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded',
          "user-id": this.userInfo.user_id,
          "user-token": this.userInfo.user_token
        },
        method: 'POST',
        url: 'http://106.12.220.193/Webapp/Order/getOrderInfo',
        data: qs.stringify({
          order_unique:this.$route.query.id
        })
      }).then(result => {

         let res = result.data

        console.info('请求收款账号列表=====>',res)
        if(res.code == 0){
          this.ddbh = res.data.order_unique;
          this.bh = res.data.platform_order_unique
          this.fileList = res.data.pay_img ? [{url:res.data.pay_img}] : []

        }else if(res.code == 9999){
          this.$router.push({name:'login'})
        }else{
          this.$toast(res.msg)
        }
      }).catch(err => {
        console.info(err)
      })
    }
  }
}
</script>

<style lang="less" scoped>

   .zhi_fu_shen_q{
      width: 100%;
      min-height: 100vh;
      background-color: #fff;

      .tp{
        padding: 10px 12px;
        background-color: #d4d4d4;
        color: #393939;
        display: flex;
        align-items: center;
        font-size: 15px;
        margin-top: 10px;
      }

      .tip{
        padding: 20px 12px 10px;
        font-size: 15px;
        color: #ff4163;
      }

      .inp_box{
        width: calc(100% - 40px);
        height: 30px;
        line-height: 30px;
        padding: 10px 12px;
        margin: 0 auto;
        border:1px solid #ccc;
        border-radius: 5px;
      }
      .inp{
        width: 100%;
        border: none;
        color: #555;
        font-size: 15px;
      }

      .img_box{
        padding: 10px 12px;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        display: flex;
        justify-content: space-between;

        .img{
          width: 148px;
          height: 228px;
          border: 1px solid #ccc;
          border-radius: 6px;
        }
      }

      .btn{
        color: #fff;
        font-size: 15px;
        background-color: #1676db;
        border: none;
        margin-top: 25px;
      }
   }






</style>
