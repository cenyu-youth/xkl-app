<template>
  <div class="home">
    <NavBar title="仙客来" :isShowMsg="true"/>

    <div class="banner">
      <div class="item bor">
        <div class="txt">推广费收益</div>
        <div class="money">628.592</div>
      </div>
      <div class="item">
        <div class="txt">保证金总计</div>
        <div class="money">628.592</div>
      </div>
    </div>

    <div class="subBanner">
      <div class="lt">
        <img class="lt_icon" src="../assets/option/index-qq.png" alt="">
        <div class="txt">客服QQ:3008217938</div>
      </div>
      <div class="rt">客服工作时间:09:00~20:00</div>
    </div>

    <div class="msg_box">
      <div class="msg_item">
        <img src="../assets/help/index-notice.svg" alt="" class="msg_icon">
        <span>公告</span>
        <div class="msg_title">原金牛座现修改成（仙客来）</div>
      </div>

      <div class="msg_item">
        <img src="../assets/help/index-notice.svg" alt="" class="msg_icon">
        <span>公告</span>
        <div class="msg_title">原金牛座现修改成（仙客来）</div>
      </div>

      <div class="msg_item">
        <img src="../assets/help/index-notice.svg" alt="" class="msg_icon">
        <span>公告</span>
        <div class="msg_title">原金牛座现修改成（仙客来）</div>
      </div>
    </div>

    <div class="task_box">
      <div class="task_title">活动任务</div>

      <div class="task_wrap">
        <img src="../assets/help/index-active-image.png" alt="" class="task_icon">

        <div class="task_ct">
          <div class="task_txt">
            仙客来买手群：
            <span>677848860</span>
          </div>
          <div class="task_txt">
            仙客来买手群：
            <span>677848860</span>
          </div>
          <div class="task_txt task_bz">邀请好友受邀人每次接受任务赚取推广费，可得到受邀人每次推广费的10%作为额外奖励。</div>
        </div>
      </div>
    </div>

    <div class="share_box">
      <div class="share_title">分享-赚收益</div>

      <div class="share_wrapper">
        <div class="share_card">
          <div class="share_txt">分享海报</div>
          <div class="share_txt">越分享越赚钱</div>
          <img src="../assets/help/index-qrCode.png" alt="" class="share_icon">
        </div>

        <div class="share_card bg_color">
          <div class="share_txt">分享链接</div>
          <div class="share_txt">越分享越赚钱</div>
          <img src="../assets/help/index-link.png" alt="" class="share_icon">
        </div>
      </div>
    </div>

    <TabBar :active="0"/>
  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue';
import TabBar from '@/components/TabBar.vue';

export default {
  name: 'Home',
  components: {
    NavBar,
    TabBar
  }
}
</script>

<style lang="less" scoped>

   .home{
      width: 100%;
      min-height: calc(100vh - 60px);
      padding-bottom: 60px;
      background-color: #f0f0f0;

      .banner{
        height: 88px;
        background-color: #1092cd;
        display: flex;
        justify-content: space-around;
        align-items: center;

        .bor{
          border-right: 1px solid #fff;
        }
        .item{
          width: 50%;
          height: 65%;
          text-align: center;
          color: #fff;

          .txt{
            font-size: 17px;
          }
          .money{
            font-size: 22px;
            font-weight: 700;
          }
        }
      }

      .subBanner{
            background: #0d75a4;
            height: 36px;
            line-height: 36px;
            position: relative;
            font-size: 14px;
            color: #fff;
            display: flex;
            -webkit-justify-content: space-around;
            justify-content: space-around;

            .lt{
              display: flex;
              align-items: center;
              .lt_icon{
                width: 24px;
                height: 24px;
                flex-shrink: 0;
              }
            }
      }

      .msg_box{
        background-color: #fff;
        padding: 10px;

        .msg_item{
          display: flex;
          align-items: center;
          color: #202020;
          font-size: 14px;
          line-height: 30px;

          .msg_icon{
            width: 17px;
          }

          span{
            margin: 0 5px;
          }
        }
      }

      .task_box{
        margin-top: 10px;
        padding: 0 10px 10px;
        background-color: #fff;

        .task_title{
          color: #333;
          font-size: 16px;
          font-weight: 500;
          line-height: 40px;
        }

        .task_wrap{
          width: 100%;
          display: flex;
          align-items: center;

          .task_icon{
            width: 45px;
            margin-right: 5px;
          }

          .task_txt{
            margin-bottom: 5px;
            font-size: 14px;
            color: #202020;
            span{
              color: red;
            }
          }
          .task_bz{
            color: #666;
          }
        }
      }

      .share_box{
        margin-top: 10px;
        padding: 0 10px 10px;
        background-color: #fff;

        .share_title{
          color: #333;
          font-size: 16px;
          font-weight: 500;
          line-height: 40px;
        }

        .share_wrapper{
          display: flex;
          justify-content: space-between;


          .share_card{
            width: 172px;
            height: 95px;
            background: -webkit-linear-gradient(left top,#23afef,#0074a9);
            -webkit-border-radius: 7px;
            border-radius: 7px;
            padding: 10px;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;

            position: relative;
            .share_txt{
              font-size: 14px;
              color: #fff;
            }
            .share_icon{
              width: 50px;
              position: absolute;
              bottom: 7px;
              right: 5px;
            }
          }
          
          .bg_color{
                background: -webkit-linear-gradient(left top,#72a3ec,#3c73c4);
          }
        }
      }

   }

</style>
