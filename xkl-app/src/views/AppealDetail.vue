<template>
  <div class="appeal_detail">
    <NavBar title="订单申诉" :isTrueArrow="true"/>

    <div class="tp">
      <img class="metu" src="../assets/help/1.png" alt="">
      {{shenSuData.order_info ? shenSuData.order_info.task_type_name : ''}}
    </div>

    <div class="dingan">
      <div class="text">订单编号：{{shenSuData.order_info ? shenSuData.order_info.order_unique : ''}}</div>
      <div class="btn">{{shenSuData.order_info ? shenSuData.order_info.status_desc : ''}}</div>
    </div>

    <div class="dingan">
      <div class="text">类型：{{shenSuData.appeal_list ? shenSuData.appeal_list[0].data.task_type_map : ''}}</div>
    </div>

    <div class="dingan">
      <div class="text">{{shenSuData.appeal_list ? shenSuData.appeal_list[0].data.user_type_map : ''}}：{{shenSuData.appeal_list ? shenSuData.appeal_list[0].data.explain : ''}}</div>
    </div>

    <div class="dingan" v-if="shenSuData.appeal_list[0].data.img_1">
      <img :src="shenSuData.appeal_list[0].data.img_1" alt="">
      <img :src="shenSuData.appeal_list[0].data.img_2" alt="">
    </div>

    <div class="dingan" v-for="(v,i) in shenSuData.appeal_list[0].return_list" :key="i">
      <div class="text">时间：{{v.add_time}}</div>
      <div class="text">{{v.user_type_map}} : {{v.explain}}</div>

      <img v-if="v.img_1" :src="v.img_1" alt="">
      <img v-if="v.img_2" :src="v.img_2" alt="">
    </div>


    <div class="inp_shensu">
      <textarea v-model="shenSutext" row="10" placeholder="请输入您的申诉说明"></textarea>
    </div>

    <div class="upload">
      <van-uploader v-model="fileList" multiple :max-count="2" />

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
  name: 'AppealDetail',
  components: {
    NavBar
  },
  computed: mapState([
      'userInfo',
      'user'
  ]),
  data(){
    return{
      active: 0,
      page:1,

      shenSutext:'',

      fileList:[],

      shenSuData:{
        "order_info":{
                    "shop_type":"1", // 任务店铺类型 1淘宝; 2京东; 3拼多多; 4抖音; 5淘宝特价版;
                    "task_type_name":"关键词搜索", // 任务描述
                    "order_unique":"TMU202104071432421797600", // 订单编号
                    "status_desc":"已完成" // 订单状态
                },
                "appeal_list":[
                    {
                        "data":{
                            "task_type_map":"商品找不到", // 申诉类型
                            "user_type_map":"商家", // 申诉者类型 【商家/买家】
                            "explain":"wewwww", // 申诉说明文案
                            "img_1":"", // 申诉图片1
                            "img_2":"" // 申诉图片2
                        },
                        "return_list":[
                             {
                                "id":"1",
                                "user_id":"1",
                                "type":"1",
                                "appeal_id":"1",
                                "explain":"yyy", // 回复内容
                                "img_1":"", // 回复图片1
                                "img_2":"", // 回复图片2
                                "add_time":"2021-04-11 15:06:30", // 回复时间
                                "update_time":null,
                                "user_type_map":"商家" // 回复者 【商家/买家/系统】
                            },
                        ]
                    }
                ]
      }
    }
  },
  created(){

    this.reqInit()


  },
  methods: {

    ...mapMutations(['changeUserInfo','changeUser']),

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

    async shenSu(){
      let arr = []
      if(this.fileList.length > 0){

        for(let i in this.fileList){
          let res = await this.upload(this.fileList[i])

          arr.push(res.data.data)
        }
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
          OrderID:this.shenSuData.order_info.order_unique,
          ComplaintNote: this.shenSutext,
          appeal_img:arr.length > 0 ? arr.join(';') : '',
        })
      }).then(result => {

         let res = result.data

        console.info('提交申诉详情=====>',res)
        if(res.code == 0){

          this.$toast(res.msg)
          
          this.reqInit()

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
        url: 'http://106.12.220.193/Webapp/Appeal/getDetail',
        data: qs.stringify({
          order_unique:this.$route.query.id
        })
      }).then(result => {

         let res = result.data

        console.info('请求申诉详情=====>',res)
        if(res.code == 0){

          this.shenSuData = res.data

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

   .appeal_detail{
      width: 100%;
      min-height: 100vh;
      background-color: #fff;

      .tp{
        padding: 10px 12px;
        display: flex;
        color: #333;
        font-size: 15px;
        border-bottom: 1px solid #eee;
        .metu{
          width: 20px;
          border-radius: 50%;
          margin-right: 5px;
        }
      }

      .dingan{
        padding: 10px 12px;
        border-bottom: 1px solid #eee;
        font-size: 15px;
        color: #333;

        >img{
          width: 148px;
          height: 118px;
          margin: 0 4px;
        }

        .text{
          padding: 4px 0;
        }

        .btn{
          padding: 6px 10px;
          display: inline-block;
          color: #fff;
          border-radius: 6px;
          background-color: #2baedc;
          margin-top: 10px;
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
