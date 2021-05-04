<template>
  <div class="authentication">
    <NavBar title="身份信息" :isTrueArrow="true" rtTtit="" rtPath="addbinuser"/>

    <div class="tp">
      <div>根据国家网信办规定，平台进行实名安全工作，当您的账户出现风险时，在必要时系统会要求您进行更高级别的认证。</div>
      <div>我们承诺保障您的资金安全，且不会泄露您的个人隐私，请您积极配合。</div>
    </div>

    <div class="title">填写身份信息({{info.id_status_desc}})</div>

    <div class="info">
      <van-field v-model="real_name" :readonly="isCheck" placeholder="姓名" />

      <div class="tips"><van-icon name="warning-o" />注意：该姓名必须与提现设置的户名一样！否则会引起提现失败。</div>

      <van-field v-model="id_number" :readonly="isCheck" placeholder="身份证号" />

      <!-- <van-field v-model="sex_desc" :readonly="isCheck" placeholder="性别"/> -->

      <van-cell is-link @click="!isCheck ? showSexPop = true : ''">{{sex_desc}}</van-cell>
      <van-popup v-model="showSexPop" round position="bottom">
        <van-picker
          show-toolbar
          title="选择性别"
          :columns="['男','女']"
          @cancel="showSexPop = false"
          @confirm="onSexConfirm"
        />
      </van-popup>

    </div>

    <div class="title">手持身份证(要求：做手势动作5)</div>

    <div class="img_box">
      <van-uploader v-model="hand" preview-size="148" :disabled="isCheck" :max-count="1"  />
      <!-- <img v-if="isCheck" class="img_tip" :src="hand[0].content" alt=""> -->
      <img @click="yulan(require('../assets/gif/info/a-01.jpeg'))"  class="img_tip" src="../assets/gif/info/a-01.jpeg" alt="">
    </div>

    <div class="title">身份证正面</div>
    <div class="img_box">
      <van-uploader v-model="id_front_photo" preview-size="148" :disabled="isCheck" :max-count="1"  />
      <!-- <img v-if="isCheck" class="img_tip" :src="id_front_photo[0].content" alt=""> -->
      <img @click="yulan(require('../assets/gif/info/a-02.jpeg'))"  class="img_tip" src="../assets/gif/info/a-02.jpeg" alt="">
    </div>

    <div class="title">身份证反面</div>
    <div class="img_box">
      <van-uploader v-model="id_other_photo" preview-size="148" :disabled="isCheck" :max-count="1"  />
      <!-- <img v-if="isCheck" class="img_tip" :src="id_other_photo[0].content" alt=""> -->
      <img @click="yulan(require('../assets/gif/info/a-03.jpeg'))" class="img_tip" src="../assets/gif/info/a-03.jpeg" alt="">
    </div>

    <!-- <div class="title">本人开户银行（用于验证）</div>
    <div class="info">

      <van-cell is-link @click="!isCheck ? showBankPicker = true : ''">{{bankValue.text}}</van-cell>
      <van-popup v-model="showBankPicker" round position="bottom">
        <van-picker
          show-toolbar
          title="选择银行"
          :columns="bankColumns"
          @cancel="showBankPicker = false"
          @confirm="onBankConfirm"
        />
      </van-popup>


      <van-cell is-link @click="showArea = true">{{localValue.length > 1 ? localValue[0].name + ' ' + localValue[1].name : '开户地 省 市'}}</van-cell>

      <van-popup v-model="showArea" round position="bottom">
        <van-area
          @cancel="showArea = false"
          @confirm="onLoaclConfirm" title="银行卡开户地" :area-list="areaList" :columns-num="2" />
      </van-popup>


      <van-field type="number" v-model="bank_card_no" :readonly="isCheck" placeholder="银行卡号"/>

    </div> -->

    <div class="title">本人支付宝账号（用于验证）</div>
    <div class="info">
      <van-field v-model="alipay" :readonly="isCheck" placeholder="支付宝账号"/>

    </div>

    <van-button v-if="!isCheck" class="submit" type="primary" @click="submit" size="large">提交</van-button>
    <!-- <van-button class="submit" type="primary" @click="submit" size="large">提交</van-button> -->

  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue';
import qs from 'qs'
import { mapState, mapMutations } from 'vuex'
import { areaList } from '@vant/area-data';

import { ImagePreview } from 'vant';
export default {
  name: 'Authentication',
  components: {
    NavBar
  },
  computed: mapState([
      'userInfo',
      'user'
  ]),
  data(){
    return{
      info:[],
      //不可以编辑
      isCheck:false,
      areaList,
      real_name:'',
      id_number:'',
      sex_desc:'男',

      showSexPop:false,

      hand:[],
      id_front_photo:[],
      id_other_photo: [],
      bank_name:'',
      bank_card_no: '',
      showArea:false,
      localValue:'',
      alipay:'',

      showBankPicker:false,

      bankColumns:[],
      bankValue:{text:''}
    }
  },
  created(){
    this.reqInit()
  },
  mounted(){
    this.changeReSize()
  },
  methods:{

    ...mapMutations(['changeUserInfo','changeUser']),

    changeReSize(){
      let arr = document.querySelectorAll('.van-uploader__upload')

      console.info(arr)

      for(let i = 0; i<arr.length; i++){
        arr[i].style.height = '228px'
      }

      // let arrs = document.querySelectorAll('.van-image__img')

      // for(let i = 0; i<arrs.length; i++){
      //   arrs[i].style.height = '228px'
      // }
    },

    onBankConfirm(value){
      this.bankValue = value;
      this.showBankPicker = false
    },
    onSexConfirm(value){
      this.sex_desc = value

      // console.info(value)
      this.showSexPop = false
    },

    onLoaclConfirm(e){
      console.info(e)
      this.localValue = e
      this.showArea = false
    },

    yulan(obj){
      ImagePreview([obj]);
    },

    goState(o){
      this.$router.push(o)
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

      // if(!(this.bank_card_no && this.bank_card_no.length > 6)){
      //   this.$toast('请输入正确的银行卡号')
      //   return
      // }

      let img1 = ''

      if(this.hand.length > 0 && this.hand[0].url){
        img1 = this.hand[0].url
      }else{
        img1 = this.hand.length > 0 ? await this.upload(this.hand[0]) : '';
        img1 = img1 ?  img1.data.data : '';
      }

      let img2 = ''

      if(this.id_front_photo.length > 0 && this.id_front_photo[0].url){
        img2 = this.id_front_photo[0].url
      }else{
        img2 =this.id_front_photo.length > 0 ? await this.upload(this.id_front_photo[0]) : '';
        img2 = img2 ? img2.data.data : '';
      }

      let img3 = ''

      if(this.id_other_photo.length > 0 && this.id_other_photo[0].url){
        img3 = this.id_other_photo[0].url
      }else{
        img3 =this.id_other_photo.length > 0 ? await this.upload(this.id_other_photo[0]) : '';
        img3 = img3 ? img3.data.data : '';
      }







      this.axios({
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded',
          "user-id": this.userInfo.user_id,
          "user-token": this.userInfo.user_token
        },
        method: 'POST',
        url: 'http://106.12.220.193/webapp/home/saveCertificationAct',
        data: qs.stringify({
          RealName: this.real_name,
          Identity: this.id_number,
          Sex: this.sex_desc == '男' ? 1 : 2,
          id_hold_photo: img1,
          id_front_photo: img2,
          id_other_photo: img3,
          // Province: this.localValue[0].name,
          // City: this.localValue[1].name,
          // BankCardNo: this.bank_card_no,
          alipay: this.alipay,
          // BankType: this.bankValue.key,
          // BankName: this.bankValue.text
        })
      }).then(result => {

         let res = result.data

        console.info('请求账号列表=====>',res)
        if(res.code == 0){
          this.$toast(res.msg)

          this.$router.back()
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
        url: 'http://106.12.220.193/webapp/home/getCertificationInfo',
        data: qs.stringify({})
      }).then(result => {

         let res = result.data

        console.info('请求账号列表=====>',res)
        if(res.code == 0){
          this.info = res.data

          this.real_name = res.data.real_name;
          this.id_number = res.data.id_number;
          this.sex_desc = res.data.sex_desc;
          this.bank_name = res.data.bank_name;
          this.bank_card_no = res.data.bank_card_no;
          this.alipay = res.data.alipay;
          this.hand = res.data.id_hold_photo ? [{url: res.data.id_hold_photo}] : []
          this.id_front_photo = res.data.id_front_photo ? [{url: res.data.id_front_photo}] : []
          this.id_other_photo = res.data.id_other_photo ? [{url: res.data.id_other_photo}] : []

          this.localValue = [{name:(res.data.province ? res.data.province : '请选择省')},{name:(res.data.city ? res.data.city : '市')}]

          this.changeReSize()

          // console.info(this.hand)

          let arr = [];

          for(let i in res.data.bank_list){
            arr.push({
              text:res.data.bank_list[i].name,
              code:res.data.bank_list[i].code,
              key: i
            })
          }

          // console.info(arr)

          this.bankColumns = arr

          this.bankValue.text = res.data.bank_name

          if(res.data.id_status == 2){
            this.isCheck = true
          }
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

   .authentication{
      width: 100%;
      min-height: 100vh;
      background-color: #f0f0f0;

      .tp{
        padding: 10px 12px;
        font-size: 15px;
        color: #1676db;
        background-color: #fff;
        border-bottom: 1px solid #eee;
        div{
          text-indent: 2em;
        }
      }
      .title{
        padding: 10px 12px;
        height: 30px;
        line-height: 30px;
        color: #888;
        font-size: 15px;
      }

      .info{
        background-color: #fff;
        padding: 10px 12px;

        .name{
          height: 50px;
          line-height: 50px;
          font-size: ;
        }
      }

      .tips{
        padding: 10px 12px;
        font-size: 15px;
        color: #ff4163 ;
        >i{
          margin-top: 4px;
          margin-right: 4px;
        }
      }


      .img_box{
        padding: 10px 12px;
        display: flex;
        justify-content: space-between;
        background-color: #fff;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;

        .img_tip{
          width: 148px;
          height: 228px;
          border: 1px solid #eee;
          border-radius: 4px;
        }
      }

      .submit{
        margin-top: 25px;
        background-color: #1676db;
        border: none;
        border-radius: 4px;
      }
    }

</style>
