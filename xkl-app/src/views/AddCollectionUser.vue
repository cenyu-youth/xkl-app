<template>
  <div class="add_collection_user">
    <NavBar title="收款账号" :isTrueArrow="true"/>

    <van-cell is-link @click="showPicker = true">{{typeValue.text}}</van-cell>
    <van-popup v-model="showPicker" round position="bottom">
      <van-picker
        show-toolbar
        title="收款方式"
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>

    <van-cell is-link @click="showBankPicker = true">{{bankValue.text}}</van-cell>
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

    <van-field v-model="kaihuhang" placeholder="开户行(非必填)" />
    <van-field v-model="chikaren" placeholder="持卡人姓名" />

    <div class="tips"><van-icon name="warning-o" />注意：该姓名必须与身份证设置的姓名一样！否则会引起提现失败。</div>

    <van-field type="number" v-model="bankId" placeholder="银行卡号" />

    <div class="box">
      <div class="lt">设为默认</div>
      <van-switch v-model="checked" />
    </div>

    <van-button class="submit" type="primary" @click="submit" size="large">保存</van-button>

   </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue';

import qs from 'qs'

import { areaList } from '@vant/area-data';

import { mapState, mapMutations } from 'vuex'
export default {
  name: 'AddCollectionUser',
  components: {
    NavBar
  },
  computed: mapState([
      'userInfo',
      'user'
  ]),
  data(){
    return{
      isAdd:false,
      list:[],
      showPicker:false,
      typeValue:{text:'银行卡'},
      columns: ['银行卡'],
      showBankPicker:false,
      bankValue:{text: '选择银行'},
      areaList,
      showArea:false,
      localValue: [],
      kaihuhang:'',
      chikaren:'',
      bankId:'',
      checked:false,
      bankColumns:[]
    }
  },
  created(){

    this.reqList()

    if(this.$route.query.id){
      this.isAdd = true;

      this.reqInit()
    }
  },
  methods: {

    ...mapMutations(['changeUserInfo','changeUser']),

    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },

    onLoaclConfirm(e){
      console.info(e)
      this.localValue = e
      this.showArea = false
    },

    onBankConfirm(value){
      this.bankValue = value;
      this.showBankPicker = false
    },



    reqList(){
        this.axios({
          headers:{
            'Content-Type': 'application/x-www-form-urlencoded',
            "user-id": this.userInfo.user_id,
            "user-token": this.userInfo.user_token
          },
          method: 'POST',
          url: 'http://106.12.220.193/webapp/bank/getInfo',
          data: qs.stringify({})
        }).then(result => {

           let res = result.data

          console.info('请求收款账号列表=====>',res)
          if(res.code == 0){
            let arr = [];

            for(let i in res.data.bank_list){
              arr.push({
                text:res.data.bank_list[i].name,
                code:res.data.bank_list[i].code,
                key: i
              })
            }

            console.info(arr)

            this.bankColumns = arr

          }else if(res.code == 9999){
            this.$router.push({name:'login'})
          }
        }).catch(err => {
          console.info(err)
        })
    },

    submit(){

      if(this.localValue.length < 2){
        this.$toast('请选择地址');
        return;
      }

      if(this.chikaren == ''){
        this.$toast('请输入持卡人姓名');
        return;
      }

      if(this.bankId == ''){
        this.$toast('请输入银行卡号');
        return;
      }

      if(!this.bankValue.key){
        this.$toast('请选择开户行');
        return;
      }


      this.axios({
          headers:{
            'Content-Type': 'application/x-www-form-urlencoded',
            "user-id": this.userInfo.user_id,
            "user-token": this.userInfo.user_token
          },
          method: 'POST',
          url: 'http://106.12.220.193/webapp/bank/saveAct',
          data: qs.stringify({
            IsDefault: this.checked ? 1 : 0,
            sign: this.$route.query.id,
            Province: this.localValue[0].name,
            City: this.localValue[1].name,
            OpenBank: this.kaihuhang,
            BankCardName: this.chikaren,
            BankCardNo: this.bankId,
            BankType: this.bankValue.key
          })
        }).then(result => {

           let res = result.data

          console.info('添加新卡=====>',res)
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

    shenSu(){
      if(this.taskData.appeal_url == 2){
        this.$router.push({name:'appeal', query:{id:this.$route.query.id}})
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
        url: 'http://106.12.220.193/webapp/bank/getInfo',
        data: qs.stringify({
          sign: this.$route.query.id
        })
      }).then(result => {

         let res = result.data

        console.info('请求收款账号列表=====>',res)


        if(res.code == 0){
          // this.list = res.data;

          this.bankId = res.data.info.bank_card_no;
          this.chikaren = res.data.info.bank_card_name

          this.localValue = [{name:res.data.info.province}, {name:res.data.info.city}]
          this.kaihuhang = res.data.info.open_bank_address

          this.bankValue = res.data.info.bank_name ? {text:res.data.info.bank_name,key:res.data.info.bank_type} : {text: '选择银行'}
          this.checked = res.data.info.default == 1 ? true : false

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

   .add_collection_user{
      width: 100%;
      min-height: 100vh;
      background-color: #f0f0f0;


      .tips{
        padding: 10px 12px;
        font-size: 15px;
        color: #ff4163;
        background-color: #fff;
      }

      .box{
        display: flex;
        justify-content: space-between;
        align-items: center;

        font-size: 15px;
        color: #000;
        background-color: #fff;
        padding: 10px 12px;
      }

      .submit{
        margin-top: 25px;
        background-color: #1676db;
        border: none;
        border-radius: 4px;
      }

   }






</style>
