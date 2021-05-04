<template>
  <div class="ti_jaio_pj">
    <NavBar title="提交评价" :isTrueArrow="true"/>

    <div class="tips_box">

      <div class="tip_item">
        <div class="tp_lt">目标店铺</div>
        <div class="tp_rt"><span>{{taskData.shop_name_encry}}</span></div>
      </div>

      <div class="tip_item" style="border-top: none;">
        <div class="tp_lt">目标商品</div>
        <div class="tp_rt"></div>
      </div>
    </div>


    <div class="task_item" >

      <div class="task_ct">
        <div class="img_box">
          <img :src="taskData.default_picture" alt="">
          <img class="layer" src="../assets/help/下载.png" alt="">
        </div>
        <div class="ct_box">
          <div class="ct_tp">
            <div class="store">购买店铺：<span>{{taskData.shop_name_encry}}</span></div>
            <!-- <div class="yj">佣金：{{v.user_commission}}</div> -->
          </div>
          <div class="ct_tp">
            <div class="store">购买数量：<span>{{taskData.product_num}}</span> 件</div>
            <!-- <div class="yj">垫付：{{v.pay_amount}}</div> -->
          </div>
          <div class="ct_tp">
            <div class="store">商品价格：<span>{{taskData.real_price}}</span> 元</div>
            <!-- <div class="yj">垫付：{{v.pay_amount}}</div> -->
          </div>
          <div class="ct_tp">
            <div class="store">任务佣金：<span>{{taskData.commission}}</span> 元</div>
            <!-- <div class="yj">垫付：{{v.pay_amount}}</div> -->
          </div>
          <!-- <div class="date">{{v.receive_time}}</div> -->
        </div>
      </div>



    </div>

    <div class="tit_box">
      <van-icon name="star" />
      任务要点
    </div>

    <div class="tips_box">
      <div class="tip_tp">请按照任务要求认真评价和截图</div>
      <div class="tip_item">
        <div class="tp_lt">订单编号</div>
        <div class="tp_rt">{{taskData.order_unique}}</div>
      </div>

      <div class="tip_item">
        <div class="tp_lt">任务类型</div>
        <div class="tp_rt"><span>{{taskData.task_type_name}}</span></div>
      </div>

      <div class="tip_item">
        <div class="tp_lt">平台订单标号</div>
        <div class="tp_rt">{{taskData.task_unique}}</div>
      </div>
    </div>

    <div class="tit_box">
      <van-icon name="star" />
      注意事项
    </div>
    <div class="zhuyi_box">
      <div class="tit">评价内容中不能出现“任务，做单，种菜”等词汇</div>
      <div class="ct">1：五星+15字左右文字好评</div>
      <div class="ct">2：根据任务类型，按照商家要求评价</div>
      <div class="ct">3：提交前和提交后截图</div>
    </div>

    <div class="tit_box">
      <van-icon name="star" />
      评价步骤
    </div>

    <div class="setp_task">
      <div style="padding: 0 18px;">
        <div class="tit">第一步：确认收货</div>

        <div class="ct">
          <i></i>
          请确认使用的账户为<span>{{taskData.account_name}}</span>账号登录
        </div>

        <div class="ct">
          <i></i>找到订单，确认收货
        </div>

        <div class="tit">第二步：订单评价</div>
        <div class="ct">
          <i></i>普通好评任务,请您随意发挥
        </div>

        <div class="copy_box">
          <div class="cts" ><van-icon name="eye-o"/>文字评价内容</div>
          <div
            class="btns"
            v-clipboard:copy="taskData.evaluate"
            v-clipboard:success="onCopy">点击复制</div>
        </div>

        <input style="min-height: 60px;" type="text" v-model="taskData.evaluate" class="tkl_box" readonly="true">

        <div class="img_box_box">
          <img @touchstart.prevent="down(v)" @touchend.prevent="up" @click="saveFile(v)" v-for="(v,i) in taskData.image_list" :src="v" :key="i" alt="">
        </div>

        <div class="cts" ><van-icon name="eye-o"/>长按保存图片 图片下载失败,联系在线客服获取</div>



        <div class="tit">第三步：截图上传</div>
        <div class="ct">
          <i></i>将评价过程的截图上传
        </div>

        <div class="cts" ><van-icon name="eye-o"/>评价截图（至少上传一张）</div>

      </div>

      <div class="upp_box">
        <div class="let_box">
          <van-uploader v-model="uploadArr.fileLista" upload-text="评价截图1" preview-size="148" multiple :max-count="1" />
          <van-uploader v-model="uploadArr.fileListb" upload-text="评价截图2" preview-size="148" multiple :max-count="1" />
        </div>
        <div class="let_box">
          <van-uploader v-model="uploadArr.fileListc" upload-text="评价截图3" preview-size="148" multiple :max-count="1" />
          <van-uploader v-model="uploadArr.fileListd" upload-text="评价截图4" preview-size="148" multiple :max-count="1" />
        </div>
        <div class="let_box">
          <van-uploader v-model="uploadArr.fileListe" upload-text="评价截图5" preview-size="148" multiple :max-count="1" />
          <van-uploader v-model="uploadArr.fileListf" upload-text="评价截图6" preview-size="148" multiple :max-count="1" />
        </div>
        <div class="let_box">
          <van-uploader v-model="uploadArr.fileListg" upload-text="评价截图7" preview-size="148" multiple :max-count="1" />
        </div>
      </div>

      <van-button class="btns" @click="submit" style="margin-top: 20px;" type="primary" size="large">提交任务评价</van-button>



    </div>


    <div class="noList" v-if="!taskData">没有更多数据了</div>
  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue';

import qs from 'qs'

import { ImagePreview } from 'vant';
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'TijiaoPJ',
  components: {
    NavBar
  },
  computed: mapState([
      'userInfo',
      'user'
  ]),
  data(){
    return{
      taskData:[],
      downTimeeee:30,
      tkl:'',
      zhifu:[],
      dfje: '',
      ptbh: '',

      objName:[
        'filea',
        'fileb',
        'filec',
        'filed',
        'filee',
        'filef',
        'fileg'

      ],

      uploadArr:[],

      isShowBt:false
    }
  },
  created(){


    this.reqInit()


  },
  mounted(){
    this.changeReSize()
  },
  methods: {

    ...mapMutations(['changeUserInfo','changeUser']),

    down(data){

      clearTimeout(this.setIt)

      this.setIt = setTimeout(() => {
        this.saveFile(data)
      },300)
    },
    up(){
      clearTimeout(this.setIt)
    },

    saveFile(data) {
      const save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
      save_link.href = data;
      save_link.download = new Date().toLocaleString();

      const event = document.createEvent('MouseEvents');
      event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      save_link.dispatchEvent(event);
    },

    onCopy(){
      this.$toast.success('复制成功')
    },

    yulan(obj){
      ImagePreview([obj]);
    },

    goState(o){
      this.$router.push(o)
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

    async submit(){

      let img1 = this.zhifu.length > 0 ?  await this.upload(this.zhifu[0]) : ''
      img1 = this.zhifu.length > 0 ? img1.data.data : ''

      let arr2 = []
      if(Object.keys(this.uploadArr).length > 0){

        for(let i in this.uploadArr){
          let ilin = await this.upload(this.uploadArr[i][0])

          arr2.push(ilin.data.data)

        }

      }

      this.axios({
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded',
          "user-id": this.userInfo.user_id,
          "user-token": this.userInfo.user_token
        },
        method: 'POST',
        url: 'http://106.12.220.193/Webapp/order/evaluateOrderInfo',
        data: qs.stringify({
          order_unique:this.taskData.order_unique,
          content: arr2.join(';')
        })
      }).then(result => {

         let res = result.data

        console.info('请求任务详情=====>',res)
        if(res.code == 0){

          this.$toast(res.msg)

          this.$router.replace({name:'tasklist'})

        }else if(res.code == 9999){
          this.$router.push({name:'login'})
        }else{
          this.$toast(res.msg)
        }
      }).catch(err => {
        console.info(err)
      })
    },

    cheackTKL(){
      if(this.tkl == ''){
        this.$toast('请输入淘口令')
        return
      }


      this.axios({
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded',
          "user-id": this.userInfo.user_id,
          "user-token": this.userInfo.user_token
        },
        method: 'POST',
        url: 'http://106.12.220.193/Webapp/order/checkOrderUrlPath',
        data: qs.stringify({
          order_unique:this.$route.query.id,
          url:this.tkl,
          shop_type:this.taskData.shop_type
        })
      }).then(result => {

         let res = result.data

        console.info('请求任务详情=====>',res)
        if(res.code == 0){

          this.$toast(res.msg)

          this.isShowBt = true

          setTimeout(() => {
            this.changeReSize()
          },200)

        }else if(res.code == 9999){
          this.$router.push({name:'login'})
        }else{
          this.$toast(res.msg)
        }
      }).catch(err => {
        console.info(err)
      })
    },

    downTimeFn(endTime){
      //endTime: 结束日期, type: string
      var end = new Date(endTime).getTime();

      var start = new Date().getTime();

      var time = (end - start) / 1000;

      //活动时间结束
      if (time < 0) {
        this.downTimeeee = '活动超时',

        clearInterval(this.settttt);
      }

      let h = Math.floor(time / 60 / 60 % 24);
      let mon = Math.floor(time / 60 % 60)
      let se = Math.floor(time % 60)

      this.downTimeeee = (h < 10 ? '0' + h : h) + ':' + (mon < 10 ? '0' + mon : mon) + ':' + (se < 10 ? '0' + se : se)

    },

    reqInit(){
      this.axios({
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded',
          "user-id": this.userInfo.user_id,
          "user-token": this.userInfo.user_token
        },
        method: 'GET',
        url: `http://106.12.220.193/webapp/order/getTasKOrderInfo?order_unique=${this.$route.query.id}`,
        data: qs.stringify({

        })
      }).then(result => {

         let res = result.data

        console.info('请求任务详情=====>',res)
        if(res.code == 0){
          this.taskData = res.data;

          if(res.data.status == 2){
            this.settttt = setInterval(() => {this.downTimeFn(res.data.over_time) },1000)
          }


          this.downTimeFn(res.data.over_time)

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

   .ti_jaio_pj{
      width: 100%;
      min-height: 100vh;
      background-color: #f0f0f0;

      .copy_box{
        display: flex;
        align-items: center;
        justify-content: space-between;

        .btns{
          padding: 6px 12px;
          color: #fff;
        }
      }

      .img_box_box{
        padding: 10px 12px;
        overflow-x: auto;
        display: flex;

        >img{
          width: 100;
          height: 100px;
          margin-right: 10px;
        }
      }


      .upp_box{
        padding: 10px 12px;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
        .let_box{
          width: 100%;
          display: flex;
          justify-content: space-between;
        }
      }

      .tp_box{
        padding: 10px 12px;
        background-color: #ff4163;
        color: #fff;
        font-size: 15px;
        height: 30x;
        line-height: 30px;
        display: flex;
        align-items: center;

        >i{
          margin-top: 2px;
        }
      }

      .task_item{
        width: 100%;
        color: #303133;
        font-size: 14px;
        // box-shadow: 0 0 16px 0 rgb(0 0 0 / 6%);
        // border-radius: 20px;
        // margin-top: 14px;
        border-bottom: 1px solid #f0eff5;
        background: #ffffff;
        overflow: hidden;
        .task_tp{
          display: flex;
          justify-content: space-between;
          background-color: #F9F9F9;
          padding: 18px 20px;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          font-size: 12px;
        }

        .task_ct{
          display: flex;
          align-items: center;
          padding: 10px;
          font-size: 15px;
          color: #808080;

          span{
            color: #ff4163;
            font-size: 20px;
          }

          .img_box{
            flex-shrink: 0;
              width: 95px;
              height: 95px;
              overflow: hidden;
              margin-right: 5px;
              position: relative;
            >img{
              width: 95px;
              height: 95px;
            }

            .layer{
              width: 100%;
              height: 100%;
              position: absolute;
              top: 0;
              left: 0;
            }
          }
          .ct_box{
              width: calc(100% - 25px);
              line-height: 27px;
              color: #303133;
              font-size: 14px;

              .ct_tp{
                display: flex;
                justify-content: space-between;

                .yj{
                      color: rgb(245, 108, 108);
                }
              }
          }

        }

        .task_footer{
          padding: 10px;
          text-align: right;
          display: flex;
          align-items: center;
          justify-content: space-between;

          .ft_lt{
            display: flex;
            color: #e6a23c;
            .jianxi{
              color: #eee;
              margin: 0 4px;
            }
            .type{
                  color: #67c23a;
            }
          }

          .btn{
              height: 30px;
              background: #409EFF;
              border-color: #409EFF;
              color: #FFF;
              padding: 7px 20px;
              font-size: 12px;
              border-radius: 3px;
          }
        }

      }

      .status_box{
        padding: 10px 12px;
        background-color: #fff;
        font-size: 15px;
        color: #808080;
        .hdu_box{
          padding: 10px 0;
          display: flex;
          justify-content: space-between;
          border-top: 1px solid #eee;
          border-bottom: 1px solid #eee;
          font-size: 15px;

          .st_rt{
            font-size: 20px;
            color: #ff4163;
          }
        }
      }

      .cts{
        padding: 10px 0;
        background-color: #fff;
        font-size: 15px;
        color: #ff4163;
        display: flex;
        align-items: center;
        i{
          margin-right: 4px;
        }
      }

      .tit_box{
          background-color: #d4d4d4;
          font-size: 15px;
          line-height: 30px;
          padding: 10px 12px;
          color: #393939;
          display: flex;
          align-items: center;
      }

      .tips_box{
        padding: 10px 0;
        background-color: #fff;

        .tip_tp{
          color: #ff4163;
          font-size: 15px;
          padding: 0 12px 10px;
        }

        .tip_item{
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 12px;
          font-size: 15px;
          color: #333;
          border-top: 1px solid #eee;
          border-bottom: 1px solid #eee;
          span{
            color: #ff4163;
          }
          .tp_rt{
            color: #525252;
            font-size: 13px;

          }
        }
      }

      .shop_type{
        padding: 10px 12px 18px;
        background-color: #fff;
        font-size: 15px;
        color: #808080;
        .shop{
          font-size: 25px;
          color: red;
          margin-bottom: 15px;
        }
      }

      .img_box{
        background-color: #fff;
        .img_tit{
          font-size: 15px;
          color: #ff4163;
          padding: 10px 12px;
          height: 30px;
          line-height: 30px;
          border-bottom: 1px solid #eee;
        }
        .img{
          padding: 10px;
          display: flex;
          overflow-x: auto;
          >img{
            width: 148px;
            border-radius: 6px;
            margin-right: 10px;
          }
        }
      }

      .zhuyi_box{
        padding: 10px 12px 18px;
        background-color: #fff;
        font-size: 15px;

        .tit{
          color: #525252;
          margin-bottom: 5px;
        }
        .ct{
          color: #ff4163;
        }
      }

      .setp_task{
        padding: 10px 0;
        background-color: #fff;

        .tit{
          font-size: 22px;
          color: #2baedc;
          line-height: 30px;
          padding: 10px 0
        }

        .ct{
          font-size: 15px;
          color: #404040;
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          i{
            width: 10px;
            height: 10px;
            background-color: #ccc;
            border-radius: 50%;
            margin-right: 4px;
            flex-shrink: 0;
          }
          span{
            padding: 4px;
            border-radius: 4px;
            color: #fff;
            background-color: #ff4163;
          }
        }

        .sm_tip{
          font-size: 15px;
          color: #ff4163;
        }

        .tkl_box{
          width: calc(100% - 24px);
          border-radius: 6px;
          border: 1px solid #ccc;
          padding: 10px 12px;
          font-size: 15px;
          color: #333;
          margin-top: 10px;
        }

        .btns{
          background-color: #1676db;
          border: none;
          margin-top: 10px;
          border-radius: 6px;
          margin-bottom: 10px;
        }

      }

      .task_item_gz{
        border: 1px solid #eee;
        border-radius: 0;
        position: relative;

        .lt_tp{
          width: 16px;
          height: 20px;
          color: #fff;
          font-size: 15px;
          position: absolute;
          top: 0;
          left: 0;
          background-color: #2baedc;
          text-align: center;
          line-height: 20px;
        }
        span{
          font-size: 15px !important;
        }
      }

      .up_img_box{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #eee;
        padding: 10px 0;


        >img{
          width: 148px;
          height: 228px;
        }

        .upupupup{
          width: 148px;
        }
      }

      .inb_box{
        display: flex;
        padding: 6px 0 16px;
        .img_box{
          flex-shrink: 0;
          width: 100px;
          height: 100px;
          overflow: hidden;
          margin-right: 5px;
          position: relative;
          >img{
            width: 95px;
            height: 95px;
          }

          .rt_tp{
            position: absolute;
            right: 0;
            top: 0;
            text-align: right;
            display: block;
            z-index: 2;
            background-color: #ff4163;
            color: #fff;
            padding: 0 0.1rem;
            opacity: 0.8;
            border-radius: 0 0 0 8px;
          }

          .layer{
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
          }
        }
      }

      .noList{
        color: #999;
        line-height: 50px;
        font-size: 15px;
        text-align: center;
      }

   }






</style>
