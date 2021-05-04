<template>
  <div class="task_list">
    <NavBar title="操作任务" :isTrueArrow="true"/>

    <div class="tp_box"><van-icon name="fail" />请注意核对店铺名</div>

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

    <div class="status_box">
      <div class="st_tp">待操作</div>
      <div class="hdu_box">
        <div class="st_lt">核对店名（40分钟)</div>
        <div class="st_rt">{{downTimeeee}}</div>
      </div>
    </div>

    <div class="tit_box">
      <van-icon name="star" />
      店铺类型
    </div>

    <div class="shop_type">
      <div class="shop">{{taskData.shop_type_map}}</div>
      <div class="sub_shop">请下载{{taskData.shop_type_map}},操作任务</div>
    </div>

    <div class="tit_box">
      <van-icon name="star" />
      任务要点
    </div>

    <div class="tips_box">
      <div class="tip_tp">使用淘宝客、返利网等方式下单，否则一律永久封号并冻结资金！</div>

      <div class="tip_item">
        <div class="tp_lt">店铺类型</div>
        <div class="tp_rt">{{taskData.shop_type_map}}</div>
      </div>

      <div class="tip_item">
        <div class="tp_lt">订单编号</div>
        <div class="tp_rt"
        v-clipboard:copy="taskData.order_unique"
        v-clipboard:success="onCopy"
        >{{taskData.order_unique}}</div>
      </div>

      <div class="tip_item">
        <div class="tp_lt">任务类型</div>
        <div class="tp_rt"><span>{{taskData.task_type_name}}</span></div>
      </div>

      <div class="tip_item">
        <div class="tp_lt">领券链接</div>
        <div class="tp_rt"></div>
      </div>

      <div class="tip_item">
        <div class="tp_lt">搜索关键字</div>
        <div class="tp_rt"><span>{{taskData.keyword}}</span></div>
      </div>

      <div class="tip_item">
        <div class="tp_lt">搜索类型</div>
        <div class="tp_rt"><span style="color: #1676db;">综合</span></div>
      </div>

      <div class="tip_item" v-for="(v,i) in taskData.add_conditions" :key="i">
        <div class="tp_lt"><span>{{v.title}}</span></div>
        <div class="tp_rt"></div>
      </div>
    </div>

    <div class="tit_box">
      <van-icon name="star" />
      商家要求
    </div>

    <div class="img_box">
      <div class="img_tit">{{taskData.seller_memo ? taskData.seller_memo : '无特殊要求'}}</div>
      <div class="img">
        <img @click="yulan(v)" v-for="(v,i) in taskData.seller_img" :key="i" :src="v" alt="">
      </div>
    </div>

    <div class="tit_box">
      <van-icon name="star" />
      注意事项
    </div>
    <div class="zhuyi_box">
      <div class="tit">与商家聊天过程中切记不要出现“任务，做单，种菜”等词汇，按照正常购物流程和语气进行操作。</div>
      <div class="ct">1：商家全程不需要截图</div>
      <div class="ct">2：但是必须一样按照全程操作，平台会随机抽查，查到没有按照流程的封号处理。</div>
    </div>

    <div class="tit_box">
      <van-icon name="star" />
      任务步骤
    </div>

    <div class="setp_task">
      <div style="padding: 0 18px;">
        <div class="tit">第一步：目标商品 货比多家</div>

        <div class="ct">
          <i></i>
          请确认使用的账户为<span>{{taskData.account_name}}</span>账号登录
        </div>

        <div class="ct">
          <i></i>点击搜索框输入指定的关键词
        </div>

        <div class="ct">
          <i></i>按要求设置筛选价格区间、所在地、类目等搜索条件缩小查询范围
        </div>

        <div class="ct">
          <i></i>任意点开多个非目标商品，慢慢浏览至底部
        </div>

        <div class="ct">
          <i></i>找到目标商品图，填写目标商品得淘口令
        </div>

        <div class="sm_tip">请填写商品链接得淘口令</div>
        <div class="sm_tip">商品详情页 分享->复制链接（即可获取淘口令）</div>

        <input type="text" v-model="tkl" class="tkl_box" placeholder="淘口令">

        <van-button class="btns" @click="cheackTKL" type="primary" size="large">点击查看店铺名是否正确</van-button>
        <div class="sm_tip">由于部分店铺名称相似，请仔细核对，确保下单的店铺名称和要求的完全一致才能操作。</div>
        <div class="sm_tip">拍错店铺需自行承担损失。</div>
        <div class="sm_tip">旗舰店 ≠ 专卖店 ≠ 专营店 ≠ XX店</div>
      </div>

      <template v-if="isShowBt">
      <div style="padding: 0 18px;">
        <div class="tit">第二步：浏览目标商品图和浏览副商品</div>
        <div class="ct">
          <i></i>根据商品主图、价格、名称等找到目标商品，点击“进入店铺”按钮
        </div>
        <div class="ct">
          <i></i>进入目标商品详情页，从头至尾慢慢浏览，停留至少三分钟
        </div>
      </div>

      <div style="background-color: #d4d4d4;" v-if="taskData.huobi_list && taskData.huobi_list.length > 0">
        <div class="tit_box">
          <van-icon name="star" />
          货比链接
        </div>
        <div style="padding:0 12px;color: red;font-size: 12px;">请按要求预览货币链接并关注店铺，不按要求，将拒绝返佣</div>
      </div>

      <div
            v-clipboard:copy="v"
            v-clipboard:success="onCopy" style="padding: 10px 12px;border-radius: 12px;font-size: 14px;color: #333;border: 1px solid #eee;margin: 4px 0;" v-for="(v,i) in taskData.huobi_list" :key="i">
        {{v}}
      </div>

      <div class="tit_box">
        <van-icon name="star" />
        操作要求
      </div>
      <div style="padding: 0 18px;">
        <div class="layer_box_box" v-for="(v,i) in taskData.add_conditions" :key="i" >
          <div class="cts" ><van-icon name="eye-o"/>{{v.title}}</div>
          <van-uploader v-if="v.is_img == 1 && taskData.is_jietu == 1" v-model="uploadArr[i]" :upload-text="v.title + '截图'" preview-size="148" :max-count="1" />
        </div>

      </div>

      <div class="tit_box">
        <van-icon name="star" />
        再次确认下商家要求
      </div>

      <div style="padding: 0 18px;">
        <div class="cts">{{taskData.seller_memo}}</div>
        <div class="tit">下一步：主宝贝加入购物车</div>
        <div class="ct">
          <i></i>数量：<span style="background-color: #fff; color: #ff4163;">{{taskData.product_num}}</span>
        </div>
        <div class="ct">
          <i></i>单价：<span style="background-color: #fff; color: #ff4163;">{{taskData.real_price}}</span>
        </div>
        <div class="ct">
          <i></i>颜色尺码：<span style="background-color: #fff; color: #ff4163;">{{taskData.sku_name}}</span>
        </div>
        <div class="ct">
          <i style="flex-shrink: 0;"></i>把商品加入购物车，确认件数，颜色尺码，先不付款，进入店铺寻找副宝贝
        </div>

        <template v-if="taskData.add_product_list && taskData.add_product_list.length > 0">
        <div class="tit">下一步：副宝贝加入购物车</div>


        <div class="cts">
          要求浏览副宝贝，停留至少三分钟，然后将副宝贝加入购物车，请注意颜色尺码要求
        </div>

        <div class="task_item task_item_gz" v-for="(v,i) in taskData.add_product_list" :key="i">

          <div class="lt_tp">{{i + 1}}</div>

          <div class="task_ct">
            <div class="img_box">
              <img :src="v.img" alt="">
              <img class="layer" src="../assets/help/下载.png" alt="">
            </div>
            <div class="ct_box">
              <div class="ct_tp">
                <div class="store">关键词：<span
                v-clipboard:copy="v.title"
                v-clipboard:success="onCopy">{{v.title}}</span></div>
              </div>
              <div class="ct_tp">
                <div class="store">颜色尺码：<span>{{v.sku}}</span></div>
              </div>
              <div class="ct_tp">
                <div class="store">数量：<span>{{v.num}}</span> 件</div>
                <!-- <div class="yj">垫付：{{v.pay_amount}}</div> -->
              </div>
              <div class="ct_tp">
                <div class="store">单价：<span>{{v.price}}</span> 元</div>
                <!-- <div class="yj">垫付：{{v.pay_amount}}</div> -->
              </div>
            </div>
          </div>


        </div>

        </template>


        <div class="tit">下一步：下单支付</div>
        <div class="ct">
          <i style="flex-shrink: 0;"></i>核对拍下的宝贝：
        </div>

        <div class="inb_box">
          <div class="img_box">
            <img :src="taskData.default_picture" alt="">
            <img class="layer" src="../assets/help/下载.png" alt="">

            <div class="rt_tp">x{{taskData.product_num}}</div>
          </div>
          <div class="img_box" v-for="(v,i) in taskData.add_product_list" :key="i">
            <img :src="v.img" alt="">
            <img class="layer" src="../assets/help/下载.png" alt="">

            <div class="rt_tp">x{{v.num}}</div>
          </div>
        </div>

        <div class="ct">
          <i></i>把商品加入购物车，确认件数，颜色尺码和留言要求，下单付款
        </div>

        <div class="ct">
          <i></i>实付总金额: <span style="background-color: #fff; color: #ff4163;">{{taskData.task_fee}}</span>
        </div>

        <div class="ct">
          <i></i>颜色尺码: <span style="background-color: #fff; color: #ff4163;">{{taskData.sku_name}}</span>
        </div>

        <div class="ct">
          <i></i>付款完成后，进入<span style="background-color: #fff; color: #ff4163;">订单详情</span>，付款详情页截图
        </div>

        <div class="cts"><van-icon name="eye-o"/>支付截图(如上传失败,可直接提交然后在支付信息页面进行提交)</div>

        <div class="up_img_box">
          <van-uploader upload-text="支付截图" preview-size="148" v-model="zhifu" multiple :max-count="1" />
          <img class="upupupup" @click="yulan(require('../assets/gif/info/ddd392b5-7a5d-4009-9b01-2e3f169ffd57.png'))" src="../assets/gif/info/ddd392b5-7a5d-4009-9b01-2e3f169ffd57.png" alt="">
        </div>


        <div class="tit">第四步：填写实付金额</div>

        <div class="ct">
          <i></i>应垫付金参考：<span style="background-color: #fff; color: #ff4163;">{{taskData.task_fee}}</span>
        </div>

        <div class="ct">
          <i></i><span style="background-color: #fff; color: #ff4163;">1：若实际支付金额低于商家垫付金额，请务必按照实际支付金额填写，否则商家申述会封号处理！</span>
        </div>

        <div class="ct">
          <i></i><span style="background-color: #fff; color: #ff4163;">2：若实际付款金额高于商家垫付金额，请务必按照实际支付金额填写，任务正常进行，商家在24小时内会审核补差价！</span>
        </div>

        <div class="ct">
          <i></i><span style="background-color: #fff; color: #ff4163;">3.金额异常也是24小时返款，没有拍错 订单照常进行！</span>
        </div>

        <div class="ct">
          <span style="background-color: #fff; color: #ff4163;">填写平台订单编号</span>
        </div>

        <input type="number" v-model="dfje" class="tkl_box" placeholder="输入垫付金额(订单实付金额)">

        <div class="tit">第五步：填写订单号</div>

        <input type="number" v-model="ptbh" class="tkl_box" placeholder="平台订单编号">

        <van-button class="btns" @click="submit" style="margin-top: 20px;" type="primary" size="large">提交任务操作</van-button>

      </div>

      </template>




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
  name: 'TaskList',
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

    onCopy(){
      this.$toast('复制成功')
    },

    ...mapMutations(['changeUserInfo','changeUser']),

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

          arr2.push({
            [i]:ilin.data.data
          })

        }

      }


      this.axios({
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded',
          "user-id": this.userInfo.user_id,
          "user-token": this.userInfo.user_token
        },
        method: 'POST',
        url: 'http://106.12.220.193/Webapp/order/saveOrderInfo',
        data: qs.stringify({
          order_unique:this.taskData.order_unique,
          pay_img: img1,
          order_amount:this.dfje,
          order_no:this.ptbh,
          add_screenshot: arr2
        })
      }).then(result => {

         let res = result.data

        console.info('请求任务详情=====>',res)
        if(res.code == 0){

          this.$toast(res.msg);

          this.$router.replace({name:'tasklist', query:{idx: 5}})

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

   .task_list{
      width: 100%;
      min-height: 100vh;
      background-color: #f0f0f0;

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
        border-radius: 20px;
        margin-top: 14px;
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
