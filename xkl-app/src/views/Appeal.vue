<template>
  <div class="appeal">
    <NavBar title="订单申诉" :isTrueArrow="true"/>

    <div class="shop_card">
      <div class="card_top">
        <div class="card_top_lt">
          <img class="metp" src="../assets/help/1.png" alt="">
          <div class="card_top_tit">{{taskData.task_type_map}}</div>
        </div>
        <div class="card_top_rt">{{taskData.status_map}}</div>
      </div>

      <div class="card_ct">
        <div class="ct_lt">
          <img :src="taskData.product_picture" alt="" class="bg">
          <!-- <img src="../assets/help/下载.png" alt="" class="layer"> -->
        </div>
        <div class="ct_rt">
          <div class="ct_rt_ct van-ellipsis">订单编号：{{taskData.order_unique}}</div>
          <div class="ct_rt_ct van-ellipsis">类型：{{taskData.keyword_map}}</div>
        </div>
      </div>

    </div>


    <van-cell is-link @click="showPicker = true">{{value.text}}</van-cell>
    <van-popup v-model="showPicker" round position="bottom">
      <van-picker
        show-toolbar
        title="申诉原因"
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>

    <div class="inp_shensu">
      <textarea v-model="shenSutext" row="10" placeholder="请输入您的申诉说明"></textarea>
    </div>

    <div class="upload">
      <van-uploader v-model="fileList" multiple :max-count="2" :after-read="upLoad" :before-delete="deleteImg" />

      <!-- <input type="file" @change="upLoad" multiple accept="image/png,image/jpeg,image/gif,image/jpg" ref="inputer"> -->
    </div>

    <van-button type="primary" size="large" class="shen_su_btn" @click="shenSu">申诉</van-button>

  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue';

import qs from 'qs'

import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Appeal',
  components: {
    NavBar
  },
  computed: mapState([
      'userInfo',
      'user'
  ]),
  data(){
    return{
      taskData:'',
      value:{text:'请选择申诉原因'},
      showPicker: false,
      columns: ['任务问题', '商品找不到', '超时未返款', '金额填写错误', '快递问题', '撤销订单', '淘宝客', '好评问题','未下单/未付款/拍错店','其他问题'],
      fileList: [],

      endImg:[],

      tagImg:[],

      shenSutext:'',
    }
  },
  created(){

    this.reqInit()

    this.resShenYuan()

  },
  methods: {

    ...mapMutations(['changeUserInfo','changeUser']),

    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },

    deleteImg(e){
      let imgArr = this.tagImg;
      let arr = this.endImg;

      imgArr.map((v,i) => {
        if(v.content == e.content){
          imgArr.splice(i,1);
          arr.splice(i,1);
        }
      })

      this.tagImg = imgArr;
      this.endImg = arr;

      return true
    },

    resShenYuan(){

      this.axios({
          headers:{
            'Content-Type': 'application/x-www-form-urlencoded',
            "user-id": this.userInfo.user_id,
            "user-token": this.userInfo.user_token
          },
          method: 'POST',
          url: ' http://106.12.220.193/Webapp/Appeal/getTypeMap',
          data: qs.stringify({
          })
        }).then(result => {

           let res = result.data

          console.info('提交申诉原因=====>',res)

          if(res.code == 0){
            let arr = [];

            for(let i in res.data){
              arr.push({
                text:res.data[i],
                type: i
              })
            }

            this.columns = arr
          }else if(res.code == 9999){
            this.$router.push({name:'login'})
          }else{
            this.$toast(res.msg)
          }
        }).catch(err => {
          console.info(err)
        })
    },

    //申诉按钮
    shenSu(){


      if(this.value.text == '请选择申诉原因'){
        this.$toast('请选择申诉原因')

        return
      }

      this.axios({
          headers:{
            'Content-Type': 'application/x-www-form-urlencoded',
            "user-id": this.userInfo.user_id,
            "user-token": this.userInfo.user_token
          },
          method: 'POST',
          url: 'http://106.12.220.193/Webapp/Appeal/saveOrderAppeal',
          data: qs.stringify({
            OrderID: this.taskData.order_unique,
            ComplaintType: this.value.type,
            ComplaintNote: this.shenSutext,
            appeal_img: this.endImg.join(';')
          })
        }).then(result => {

           let res = result.data

          console.info('提交申诉=====>',res)
          if(res.code == 0){
            this.$toast(res.msg)

            setTimeout(() => {
              this.$router.replace({name: 'appealcenter'})
            },300)
          }else if(res.code == 9999){
            this.$router.push({name:'login'})
          }else{
            this.$toast(res.msg)
          }
        }).catch(err => {
          console.info(err)
        })
    },

    upLoad(e){

      this.axios({
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
        }).then(result => {

           let res = result.data

          console.info('上传图片=====>',res)
          if(res.code == 0){
            // this.taskData = res.data;

            let arr = this.endImg;

            let imgArr = this.tagImg;

            imgArr.push(e)

            this.tagImg = imgArr;

            arr.push(res.data)

            this.endImg = arr

            this.$toast('图片上传成功')

          }else if(res.code == 9999){
            this.$router.push({name:'login'})
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
        url: 'http://106.12.220.193/Webapp/Order/getOrderInfo',
        data: qs.stringify({
          order_unique:this.$route.query.id
        })
      }).then(result => {

         let res = result.data

        console.info('请求任务详情=====>',result)
        if(res.code == 0){
          this.taskData = res.data;

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

   .appeal{
      width: 100%;
      min-height: 100vh;
      background-color: #fff;

      .shop_card{
        background-color: #fff;
        // border-radius: 20px;

        .card_top{
          padding: 10px 12px;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #eee;
          font-size: 15px;
          color: #333;

          .card_top_lt{
            display: flex;
            align-items: center;
            .metp{
              width: 20px;
              display: block;
              border-radius: 50%;
              margin-right: 5px;
            }
          }

          .card_top_rt{
            color: #ff4163;
          }
        }


        .card_ct{
          padding: 10px 12px;
          display: flex;
          overflow: hidden;

          .ct_lt{
            flex-shrink: 0;
            width: 95px;
            height: 95px;
            position: relative;
            overflow: hidden;
            margin-right: 12px;

            .bg{
              width: 100%;
              display: block;
            }

            .layer{
              width: 100%;
              position: absolute;
              top:0;
              left: 0;
            }
          }

          .ct_rt{
            display: flex;
            flex-direction: column;
            font-size: 15px;
            color: #333;
            .ct_rt_ct{
              width: calc(100% - 40px);
              margin-bottom: 5px;
              >span{
                color: #ff4163;
              }

            }
          }
        }
      }

      .inp_shensu{
        padding: 20px 5px 10px;
        border-bottom: 1px solid #eee;
        textarea{
          width: calc(100% - 10px);
          border: none;
          height: 175px;
        }
      }

      .upload{
        padding: 10px;
      }

      .shen_su_btn{
            background-color: #1676db;
            margin-top: 20px;
            border: none;
      }
   }






</style>
