<template>
  <div class="task_detail">
    <NavBar title="任务详情" :isTrueArrow="true"/>

    <div class="shop_card">
      <div class="card_top">
        <div class="card_top_lt">
          <img class="metp" src="../assets/help/1.png" alt="">
          <div class="card_top_tit">{{taskData.task_type_map}}</div>
        </div>
        <div class="card_top_rt">{{taskData.status_map}}</div>
      </div>

      <div v-if="taskData.status == 2" class="card_top" style="justify-content: flex-end; color: #ff4163;">{{downTimeeee}}</div>

      <div class="card_ct">
        <div class="ct_lt">
          <img :src="taskData.product_picture" alt="" class="bg">
          <img src="../assets/help/下载.png" alt="" class="layer">
        </div>
        <div class="ct_rt">
          <div class="ct_rt_ct">店铺名称：<span>{{taskData.shop_name_encry}}</span></div>
          <div class="ct_rt_ct">商品单价：<span>{{taskData.real_price}}</span> 元</div>
          <div class="ct_rt_ct">购买数量：<span>{{taskData.product_num}}</span> 件</div>
          <div class="ct_rt_ct">任务佣金：<span>{{taskData.commission}}</span> 元</div>
        </div>
      </div>

    </div>

    <div class="btns_box">
      <!-- 操作任务 status == 2 -->
      <van-button class="btn blue" v-if="taskData.status == 2" type="primary" @click="goState({name:'taskcaozuo',query:{id:taskData.order_unique}})">操作任务</van-button>

      <!-- 提交评价 status == 4 -->
      <van-button v-if="taskData.status == 4 && taskData.allow_common_time == ''" class="btn blue"  type="primary" @click="goState({name:'tijiaopj',query:{id:taskData.order_unique}})">提交评价</van-button>

      <!-- 提交追价 status>4 且 add_keywrod_type != 0 且 add_user_evaluate_img == ‘’ -->
      <van-button v-if="taskData.status > 4 && taskData.add_keywrod_type != 0  && taskData.add_user_evaluate_img == ''" class="btn blue"  type="primary" @click="goState({name:'tijiaozp',query:{id:taskData.order_unique}})">提交追评</van-button>


      <!-- 申诉任务 status == 2/3/4/5/6/10 -->
      <van-button class="btn" v-if="taskData.status == 2 || taskData.status == 3 || taskData.status == 4 || taskData.status == 5 || taskData.status == 6 || taskData.status == 10" type="primary" @click="shenSu">申诉任务</van-button>

      <!-- 取消任务 2 -->
      <van-button class="btn sky_blue" v-if="taskData.status == 2" type="primary" @click="show = true">取消任务</van-button>

      <!-- <van-button class="btn" v-if="taskData.status == 3 || taskData.status == 10" type="primary" @click="shenSu">回复信息</van-button> -->

      <!-- 支付信息 3/10 -->
      <van-button class="btn sky_blue" v-if="taskData.status == 4 || taskData.status == 10" type="primary" @click="goState({name:'zhifushenq',query:{id:ddbh}})">支付信息</van-button>

      <van-button v-if="taskData.status == 4 && taskData.allow_common_time" class="btn" type="primary">
        <div>未到时间</div>
        <div>{{taskData.allow_common_time}}</div>
      </van-button>
    </div>

    <div class="tag_card">
      <div class="card_top">
        <div class="card_top_lt">
          <div class="card_top_tit">任务状态：<span>{{taskData.status_map}}</span></div>
        </div>
        <div class="card_top_rt"></div>
      </div>

      <div class="tags">
        <van-tag class="tag" v-for="(v,i) in taskData.keywords" :key="i" plain type="primary">{{v}}</van-tag>
      </div>

      <div class="text_tips" v-if="taskData.status == 2">
        <div>提示：请在规定时间内操作订单，提交后等待商家确认</div>
        <div>提示：请在40分钟内核对店铺过,超时将自动取消任务</div>
      </div>
    </div>


    <div class="step_box">
      <div class="step">
        <div class="step_lt">
          <div class="lt_tp">1</div>
          <div class="lt_colunm"></div>
        </div>
        <div class="step_rt">
          <div class="rt_tp">
            <div>接受任务</div>
            <div></div>
          </div>
          <div class="rt_ct">
            <div class="rt_ct_colum">{{taskData.shop_type_map}}</div>
          </div>
        </div>
      </div>

      <div class="step">
        <div class="step_lt">
          <div class="lt_tp">2</div>
          <div class="lt_colunm"></div>
        </div>
        <div class="step_rt">
          <div class="rt_tp">
            <div>接受任务</div>
            <div>{{taskData.add_time}}</div>
          </div>
          <div class="rt_ct">
            <div class="ct_clo">
              <div class="ct_clo_lt">订单编号</div>
              <div class="ct_clo_rt">{{taskData.task_unique}}</div>
            </div>
            <div class="ct_clo">
              <div class="ct_clo_lt"><span>买号</span></div>
              <div class="ct_clo_rt"><span>{{taskData.account_name}}</span></div>
            </div>
            <div class="ct_clo">
              <div class="ct_clo_lt">总额</div>
              <div class="ct_clo_rt">¥ {{taskData.real_price}}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="step gary">
        <div class="step_lt">
          <div class="lt_tp">3</div>
          <div class="lt_colunm"></div>
        </div>
        <div class="step_rt">
          <div class="rt_tp">
            <div>商家确认返款</div>
            <div></div>
          </div>
          <div class="rt_ct">
            <div class="ct_clo">
              <div class="ct_clo_lt"></div>
              <div class="ct_clo_rt"><span>商家一般24小时确认返款订单</span></div>
            </div>
            <div class="ct_clo">
              <div class="ct_clo_lt">返款方式</div>
              <div class="ct_clo_rt">平台</div>
            </div>
            <div class="ct_clo">
              <div class="ct_clo_lt">返款金额</div>
              <div class="ct_clo_rt">¥ {{taskData.real_price}}</div>
            </div>
            <div class="ct_clo">
              <div class="ct_clo_lt"></div>
              <div class="ct_clo_rt"><span>平台规定商家24小时内返款</span></div>
            </div>
          </div>
        </div>
      </div>

      <div class="step gary">
        <div class="step_lt">
          <div class="lt_tp">4</div>
          <div class="lt_colunm"></div>
        </div>
        <div class="step_rt">
          <div class="rt_tp">
            <div>签收好评</div>
            <div></div>
          </div>
          <div class="rt_ct">
            <div class="ct_clo">
              <div class="ct_clo_lt">物流签收好评</div>
              <div class="ct_clo_rt"></div>
            </div>
            <div class="ct_clo">
              <div class="ct_clo_lt"></div>
              <div class="ct_clo_rt"><span>此单为{{taskData.keyword_map}}</span></div>
            </div>
          </div>
        </div>
      </div>

      <div class="step gary">
        <div class="step_lt">
          <div class="lt_tp">5</div>
          <div class="lt_colunm"></div>
        </div>
        <div class="step_rt">
          <div class="rt_tp">
            <div>商家确认</div>
            <div></div>
          </div>
          <div class="rt_ct">
            <div class="ct_clo">
              <div class="ct_clo_lt"></div>
              <div class="ct_clo_rt"><span>商家一般24小时确认评价</span></div>
            </div>
          </div>
        </div>
      </div>

      <div class="step gary">
        <div class="step_lt">
          <div class="lt_tp">6</div>
        </div>
        <div class="step_rt">
          <div class="rt_tp">
            <div>任务完成</div>
            <div></div>
          </div>
          <div class="rt_ct">
            <div class="ct_clo">
              <div class="ct_clo_lt">获得佣金</div>
              <div class="ct_clo_rt">{{taskData.commission}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <van-popup v-model="show" :round="true">
      <div class="pop_warapper">
        <div class="pop_item" v-for="(v,i) in taskData.cancel_desc_map" :key="i" @click="jujue(i)">
          {{v}}
        </div>
      </div>
    </van-popup>


  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue';

import qs from 'qs'

import { mapState, mapMutations } from 'vuex'
export default {
  name: 'TaskDetail',
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
      ddbh:'',
      downTimeeee:'00:00:00',
      show:false
    }
  },
  created(){

    this.reqInit()

    this.ddbh = this.$route.query.id
  },
  methods: {

    ...mapMutations(['changeUserInfo','changeUser']),

    downTimeFn(endTime){
      //endTime: 结束日期, type: string
      var end = new Date(endTime).getTime();

      var start = new Date().getTime();

      var time = (end - start) / 1000;

      //活动时间结束
      if (time < 0) {
        this.downTimeeee = '活动超时'

        clearInterval(this.settttt);
      }

      let h = Math.floor(time / 60 / 60 % 24);
      let mon = Math.floor(time / 60 % 60)
      let se = Math.floor(time % 60)

      this.downTimeeee = (h < 10 ? '0' + h : h) + ':' + (mon < 10 ? '0' + mon : mon) + ':' + (se < 10 ? '0' + se : se)

    },

    goState(o){
      this.$router.push(o)
    },


    jujue(idx){

      console.info(idx);

      this.axios({
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded',
          "user-id": this.userInfo.user_id,
          "user-token": this.userInfo.user_token
        },
        method: 'POST',
        url: 'http://106.12.220.193/Webapp/order/cancelApply',
        data: qs.stringify({
          task_unique: this.taskData.task_unique,
          reason: idx
        })
      }).then(result => {

         let res = result.data

        console.info('请求账号列表=====>',res)
        if(res.code == 0){
          this.$toast(res.msg)

          this.show = false;

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


    shenSu(){

      if(this.taskData.appeal_url == 2){
        this.$router.push({name:'appeal', query:{id:this.$route.query.id}})
      }else if(this.taskData.appeal_url == 1){
        this.$router.push({name: 'appealdetail', query:{id: this.taskData.order_unique}})
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
        url: 'http://106.12.220.193/Webapp/Order/getOrderInfo',
        data: qs.stringify({
          order_unique:this.$route.query.id
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

   .task_detail{
      width: 100%;
      min-height: 100vh;
      background-color: #f0f0f0;

      .shop_card{
        margin-top: 10px;
        background-color: #fff;
        border-radius: 20px;

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

          .ct_lt{
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
            justify-content: space-around;
            font-size: 15px;
            color: #333;
            .ct_rt_ct{
              >span{
                color: #ff4163;
              }

            }
          }
        }
      }

      .btns_box{
        margin-top: 10px;
        padding: 10px 12px;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        background-color: #fff;

        .btn{
          flex:1;
          height: 50px;
          font-size: 14px;
          color: #454545;
          background-color: #e2e2e2;
          outline: none;
          border: none;
          margin: 0 2px;
          border-radius: 6px;
        }

        .blue{
          background-color: #1676db;
          color: #fff;
        }

        .sky_blue{
          color: #fff;
          background-color: #1ab9f4;
        }
      }

      .tag_card{
        padding: 10px 12px;
        background-color: #fff;
        border-radius: 20px;
        margin: 10px 0 4px;
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
            span{
              color: #ff4163;
            }
          }
        }

        .text_tips{
          color: #ff4163;
          text-indent: 2em;
          font-size: 15px;
          border-top: 1px dashed #eee;
        }


        .tags{
          padding: 10px 0;
          .tag{
            margin: 4px;
          }
        }

      }

      .step_box{
        padding: 4px;
        border-radius: 20px;
        background-color: #fff;

        .step{
          display: flex;

          .step_lt{
            font-size: 15px;
            color: #fff;
            width: 25px;

            .lt_tp{
                width: 25px;
                height: 25px;
                line-height: 25px;
                border-top-left-radius: 6px;
                border-bottom-left-radius: 6px;
                background-color: #0094ff;
                text-align: center;
            }
            .lt_colunm{
              width: 3px;
              height: 100%;
              margin: 0 auto;
              background-color: #0094ff;
            }
          }

          .step_rt{
            width: calc(100% - 36px);
            margin-left: 2px;
            font-size: 15px;
            color: #fff;
              padding-bottom: 10px;

            .rt_tp{
              height: 25px;
              line-height: 25px;
              background-color: #0094ff;
              border-top-right-radius: 6px;
              border-bottom-right-radius: 6px;
              text-indent: 4px;
              font-size: 15px;
              display: flex;
              justify-content: space-between;
              padding: 0 4px;
            }

            .rt_ct{

              padding-left: 4px;
              border-bottom: 1px solid #eee;

              .ct_clo{
                width: 100%;
                height: 50px;
                line-height: 50px;
                display: flex;
                justify-content: space-between;
                color: #333;
                border-bottom: 1px solid #eee;
                .ct_clo_lt{
                  font-size: 15px;
                }
                .ct_clo_rt{
                  font-size: 13px;
                }
                span{
                  color: #ff4163;
                };
              }

              .rt_ct_colum{
                    font-size: 25px;
                    line-height: 50px;
                    color: #ff4163;
              }
            }
          }
        }

        .gary{
          .step_lt{
            .lt_tp{
              background-color: #9f9f9f;
            }
            .lt_colunm{
              background-color: #9f9f9f;
            }
          }

          .step_rt{
            .rt_tp{
              background-color: #9f9f9f;
            }
          }
        }
      }

      .pop_warapper{
        width: 300px;
        background-color: #fff;
        padding: 20px 12px;

        .pop_item{
          height: 30px;
          line-height: 30px;
          border-radius: 6px;
          background-color: #1092cd;
          padding: 6px 0;
          color: #fff;
          font-size: 15px;
          margin: 6px auto;
          text-align: center;
        }
      }
   }






</style>
