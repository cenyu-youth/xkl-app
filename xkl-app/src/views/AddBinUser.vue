<template>
  <div class="add_bin_user">
    <NavBar title="绑定账号" :isTrueArrow="true"/>


    <div class="type_box_box">
      <div v-if="userStatus == 3" style="border-bottom: 1px solid #ddd;" class="tips"><van-icon name="warning-o" />{{userRemark}}</div>
      <div v-if="isCheck" class="title_box" style="background-color: #fff;border-bottom: 1px solid #ddd;">{{typeName}}</div>
    </div>


    <van-radio-group v-if="!isCheck" style="background-color: #fff;" class="raido" v-model="radio"  direction="horizontal" checked-color="#4CD864">
      <van-radio @click="typeChange(i)"  v-for="(v,i) in userTypeList" :key="i" :name="i">{{v.name}}({{v.use_num + '/' +v.num}})</van-radio>
    </van-radio-group>

    <van-field
      v-model="userName"
      label="平台会员名"
      :placeholder="showStatus[radio - 1].nameTip"
      input-align="right"
      style="border-bottom: 1px solid #ddd;"
    />

    <van-field
      v-if="radio == 1"
      v-model="taoNum"
      label="淘气值"
      placeholder="请填写淘气值"
      input-align="right"
      style="border-bottom: 1px solid #ddd;"
    />

    <van-cell
      v-if="radio == 1"
      style="border-bottom: 1px solid #ddd;color: #646566;" title="账号等级" is-link @click="showPicker = true"><div id="acc" style="height:100%;display: flex;align-items: center;justify-content: flex-end;" ref="titleCell">{{xinyuLevel.text}}</div></van-cell>
    <van-popup v-model="showPicker" round position="bottom">
      <van-picker
        show-toolbar
        title="买家信誉等级"
        :columns="bankColumns"
        @cancel="showPicker = false"
        @confirm="confirm"
      />
    </van-popup>


    <van-cell v-if="radio == 1" style="border-bottom: 1px solid #ddd;color: #646566;" title="是否开通花呗">
      <van-radio-group v-model="isHuaBei"  style="display: flex;justify-content: flex-end;" direction="horizontal"  checked-color="#4CD864">
        <van-radio name="0">否</van-radio>
        <van-radio name="1">是</van-radio>
      </van-radio-group>
    </van-cell>

    <van-cell style="border-bottom: 1px solid #ddd;color: #646566;" title="性别">
      <van-radio-group v-model="sex" style="display: flex;justify-content: flex-end;" direction="horizontal"  checked-color="#4CD864">
        <van-radio name="1">男</van-radio>
        <van-radio name="2">女</van-radio>
      </van-radio-group>
    </van-cell>

    <van-field
      style="border-bottom: 1px solid #ddd;"
      v-model="age"
      label="年龄"
      placeholder="请填写年龄"
      input-align="right"
      type="number"
    />

    <van-field
      v-if="radio == 1"
      type="number"
      style="border-bottom: 1px solid #ddd;"
      v-model="shopSheet"
      placeholder="请复制该淘宝会员任意一个订单号"
    />

    <div
      v-if="radio == 1"
      style="border-bottom: 1px solid #ddd;" class="tips"><van-icon name="warning-o" />注意：请认真填写订单编号！否则会引起做单和返款失败。</div>

    <van-cell style="border-bottom: 1px solid #ddd;color: #646566;" title="地址" is-link @click="showArea = true">{{localValue.length > 1 ? localValue[0].name + ' ' + localValue[1].name+ ' ' + localValue[2].name : '详细地址'}}</van-cell>

    <van-popup v-model="showArea" round position="bottom">
      <van-area
        @cancel="showArea = false"
        @confirm="onLoaclConfirm" title="收货地址" :area-list="areaList" :columns-num="3" />
    </van-popup>

    <van-field
      v-model="detailAddress"
      placeholder="详细地址"
      input-align="right"
      style="border-bottom: 1px solid #ddd;"
    />

    <!-- 淘宝 -->
    <template v-if="radio == 1">
      <div class="title_box">支付宝个人信息</div>

      <div class="img_box">
        <van-uploader :max-count="1" v-model="fileList" multiple :after-read="afterRead" preview-size="148px"/>
        <!-- <img v-if="isCheck" class="tip_img" :src="fileList[0] ? fileList[0].content : '' " alt=""> -->
        <img @click="yulan(showStatus[radio - 1].img1)"  class="tip_img" :src="showStatus[radio - 1].img1" alt="">
      </div>

      <div class="title_box">淘气值截图</div>

      <div class="img_box">
        <van-uploader :max-count="1" v-model="fileTQList" multiple :after-read="afterRead" preview-size="148px"/>
        <!-- <img v-if="isCheck" class="tip_img" :src="fileTQList[0] ? fileTQList[0].content : ''" alt=""> -->
        <img @click="yulan(showStatus[radio - 1].img2)" class="tip_img" :src="showStatus[radio - 1].img2" alt="">
      </div>
    </template>

    <!-- 京东 -->
    <template v-if="radio == 2">
      <div class="title_box">个人中心截图</div>

      <div class="img_box">
        <van-uploader :max-count="1" v-model="fileGRList" multiple :after-read="afterRead" preview-size="148px"/>
        <img @click="yulan(showStatus[radio - 1].img1)" class="tip_img" :src="showStatus[radio - 1].img1" alt="">
      </div>

      <div class="title_box">订单中心截图</div>

      <div class="img_box">
        <van-uploader  :max-count="1" v-model="fileDDList" multiple :after-read="afterRead" preview-size="148px"/>
        <img @click="yulan(showStatus[radio - 1].img2)" class="tip_img" :src="showStatus[radio - 1].img2" alt="">
      </div>

      <div class="title_box">会员名截图</div>

      <div class="img_box">
        <van-uploader  :max-count="1" v-model="fileMemberList" multiple :after-read="afterRead" preview-size="148px"/>
        <img @click="yulan(showStatus[radio - 1].img3)" class="tip_img" :src="showStatus[radio - 1].img3" alt="">
      </div>
    </template>

    <!-- 拼夕夕 -->
    <template v-if="radio == 3">
      <div class="title_box">个人中心截图</div>

      <div class="img_box">
        <van-uploader :max-count="1" v-model="fileGRList" multiple :after-read="afterRead" preview-size="148px"/>
        <img @click="yulan(showStatus[radio - 1].img1)" class="tip_img" :src="showStatus[radio - 1].img1" alt="">
      </div>

      <div class="title_box">订单中心截图</div>

      <div class="img_box">
        <van-uploader :max-count="1" v-model="fileDDList" multiple :after-read="afterRead" preview-size="148px"/>
        <img  @click="yulan(showStatus[radio - 1].img2)" class="tip_img" :src="showStatus[radio - 1].img2" alt="">
      </div>

      <div class="title_box">微信号截图</div>

      <div class="img_box">
        <van-uploader :max-count="1" v-model="fileWXList" multiple :after-read="afterRead" preview-size="148px"/>
        <img  @click="yulan(showStatus[radio - 1].img3)" class="tip_img" :src="showStatus[radio - 1].img3" alt="">
      </div>
    </template>

    <!-- 拼夕夕 -->
    <template v-if="radio == 4">
      <div class="title_box">个人中心截图</div>

      <div class="img_box">
        <van-uploader :max-count="1" v-model="fileGRList" multiple :after-read="afterRead" preview-size="148px"/>
        <img @click="yulan(showStatus[radio - 1].img1)" class="tip_img" :src="showStatus[radio - 1].img1" alt="">
      </div>
    </template>


    <van-button v-if="!isCheck " class="submit" type="primary" size="large" @click="submit">保存</van-button>

    <van-button v-if="isCheck && userStatus == 3" class="submit" type="primary" size="large" @click="submit">保存</van-button>

    <van-button v-if="isCheck && userStatus == 3" class="submit" style="background-color: #e4393c;" type="primary" size="large" @click="delUser">删除</van-button>
  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue';
import qs from 'qs'
import { mapState, mapMutations } from 'vuex'
import { areaList } from '@vant/area-data';

import { ImagePreview } from 'vant';
export default {
  name: 'AddBinUser',
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
      radio:"1",
      userName:'',
      taoNum:'',
      showPicker:false,
      bankColumns:['无'],
      xinyuLevel:{text:'无'},
      imgA:require('../assets/gif/A.gif'),
      imgB:require('../assets/gif/B.gif'),
      imgC:require('../assets/gif/C.gif'),
      imgD:require('../assets/gif/D.gif'),

      isHuaBei:"1",
      sex:"1",
      age:'',
      shopSheet:'',
      areaList,
      localValue:[],
      showArea: false,
      detailAddress:'',
      fileList:[],
      fileSSList:[],
      fileWXList:[],
      fileMemberList: [],
      fileGRList: [],
      fileDDList: [],
      fileTQList:[],

      showStatus:[
        {
          nameTip:'淘宝/天猫会员名',
          img1:require('../assets/gif/tips/tb-04.jpeg'),
          img2:require('../assets/gif/tips/tb-05.jpeg'),
        },
        {
          nameTip:'京东会员名',
          img1:require('../assets/gif/tips/jd-01.jpeg'),
          img2:require('../assets/gif/tips/jd-02.jpeg'),
          img3:require('../assets/gif/tips/jd-03.jpeg'),
        },
        {
          nameTip:'拼多多',
          img1:require('../assets/gif/tips/pdd-01.jpeg'),
          img2:require('../assets/gif/tips/pdd-02.jpeg'),
          img3:require('../assets/gif/tips/pdd-03.jpeg'),
        },
        {
          nameTip:'淘宝特价版',
          img1:require('../assets/gif/tips/dy-01.jpeg')
        }
      ],

      imgList:[],

      isCheck: false,

      typeName: '',

      userTypeList:[],

      userStatus: 0,

      userRemark:'',

      userAccountId:'',

      AccountsId:''


    }
  },
  created(){
    let arr = this.bankColumns;

    arr.push({text:`<img style="width:16px;margin:0 2px" src='${this.imgA}' />`,code:4})
    arr.push({text:`<img style="width:16px;margin:0 2px" src='${this.imgA}' /><img style="width:16px;margin:0 2px" src='${this.imgA}' />`,code:11})
    arr.push({text:`<img style="width:16px;margin:0 2px" src='${this.imgA}' /><img style="width:16px;margin:0 2px" src='${this.imgA}' /><img style="width:16px;margin:0 2px" src='${this.imgA}' />`,code:41})
    arr.push({text:`<img style="width:16px;margin:0 2px" src='${this.imgA}' /><img style="width:16px;margin:0 2px" src='${this.imgA}' /><img style="width:16px;margin:0 2px" src='${this.imgA}' /><img style="width:16px;margin:0 2px" src='${this.imgA}' />`,code:91})
    arr.push({text:`<img style="width:16px;margin:0 2px" src='${this.imgA}' /><img style="width:16px;margin:0 2px" src='${this.imgA}' /><img style="width:16px;margin:0 2px" src='${this.imgA}' /><img style="width:16px;margin:0 2px" src='${this.imgA}' /><img style="width:16px;margin:0 2px" src='${this.imgA}' />`,code:151})

    arr.push({text:`<img style="width:16px;margin:0 2px" src='${this.imgB}' />`,code:251})
    arr.push({text:`<img style="width:16px;margin:0 2px" src='${this.imgB}' /><img style="width:16px;margin:0 2px" src='${this.imgB}' />`,code:501})
    arr.push({text:`<img style="width:16px;margin:0 2px" src='${this.imgB}' /><img style="width:16px;margin:0 2px" src='${this.imgB}' /><img style="width:16px;margin:0 2px" src='${this.imgB}' />`,code:1001})
    arr.push({text:`<img style="width:16px;margin:0 2px" src='${this.imgB}' /><img style="width:16px;margin:0 2px" src='${this.imgB}' /><img style="width:16px;margin:0 2px" src='${this.imgB}' /><img style="width:16px;margin:0 2px" src='${this.imgB}' />`,code:2001})
    arr.push({text:`<img style="width:16px;margin:0 2px" src='${this.imgB}' /><img style="width:16px;margin:0 2px" src='${this.imgB}' /><img style="width:16px;margin:0 2px" src='${this.imgB}' /><img style="width:16px;margin:0 2px" src='${this.imgB}' /><img style="width:16px;margin:0 2px" src='${this.imgB}' />`,code:5001})


    arr.push({text:`<img style="width:16px;margin:0 2px" src='${this.imgC}' />`,code:10001})
    arr.push({text:`<img style="width:16px;margin:0 2px" src='${this.imgC}' /><img style="width:16px;margin:0 2px" src='${this.imgC}' />`,code:20001})
    arr.push({text:`<img style="width:16px;margin:0 2px" src='${this.imgC}' /><img style="width:16px;margin:0 2px" src='${this.imgC}' /><img style="width:16px;margin:0 2px" src='${this.imgC}' />`,code:50001})
    arr.push({text:`<img style="width:16px;margin:0 2px" src='${this.imgC}' /><img style="width:16px;margin:0 2px" src='${this.imgC}' /><img style="width:16px;margin:0 2px" src='${this.imgC}' /><img style="width:16px;margin:0 2px" src='${this.imgC}' />`,code:100001})
    arr.push({text:`<img style="width:16px;margin:0 2px" src='${this.imgC}' /><img style="width:16px;margin:0 2px" src='${this.imgC}' /><img style="width:16px;margin:0 2px" src='${this.imgC}' /><img style="width:16px;margin:0 2px" src='${this.imgC}' /><img style="width:16px;margin:0 2px" src='${this.imgC}' />`,code:200001})


    arr.push({text:`<img style="width:16px;margin:0 2px" src='${this.imgD}' />`,code:500001})
    arr.push({text:`<img style="width:16px;margin:0 2px" src='${this.imgD}' /><img style="width:16px;margin:0 2px" src='${this.imgD}' />`,code:1000001})
    arr.push({text:`<img style="width:16px;margin:0 2px" src='${this.imgD}' /><img style="width:16px;margin:0 2px" src='${this.imgD}' /><img style="width:16px;margin:0 2px" src='${this.imgD}' />`,code:2000001})
    arr.push({text:`<img style="width:16px;margin:0 2px" src='${this.imgD}' /><img style="width:16px;margin:0 2px" src='${this.imgD}' /><img style="width:16px;margin:0 2px" src='${this.imgD}' /><img style="width:16px;margin:0 2px" src='${this.imgD}' />`,code:5000001})
    arr.push({text:`<img style="width:16px;margin:0 2px" src='${this.imgD}' /><img style="width:16px;margin:0 2px" src='${this.imgD}' /><img style="width:16px;margin:0 2px" src='${this.imgD}' /><img style="width:16px;margin:0 2px" src='${this.imgD}' /><img style="width:16px;margin:0 2px" src='${this.imgD}' />`,code:10000001})


    this.bankColumns = arr;

    this.reqTypeList()

    if(this.$route.query.id){
      this.isCheck = true;

      this.reqInit()

    }else{
      this.isCheck = false
    }
  },
  mounted(){
    this.changeReSize()
  },
  methods:{

    ...mapMutations(['changeUserInfo','changeUser']),

    changeReSize(){
      let arr = document.querySelectorAll('.van-uploader__upload')

      for(let i = 0; i<arr.length; i++){
        arr[i].style.height = '228px'
      }

      let arrs = document.querySelectorAll('.van-image__img')

      for(let i = 0; i<arrs.length; i++){
        arrs[i].style.height = '228px'
      }
    },

    afterRead(e){
      console.info(e)
    },

    typeChange(i){
      // console.info(this.userTypeList[i].use_num - this.userTypeList[i].num)

      this.changeReSize()
      if(this.userTypeList[i].num - this.userTypeList[i].use_num <= 0){
        this.$toast('已到达该类型账号绑定上限')
      }
    },

    yulan(obj){
      console.info(1)
      ImagePreview([obj]);
    },


    reqTypeList(){
      this.axios({
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded',
          "user-id": this.userInfo.user_id,
          "user-token": this.userInfo.user_token
        },
        method: 'GET',
        url: 'http://106.12.220.193/webapp/account/getAccountTypeList',
        data: qs.stringify({}),
      }).then(result => {

         let res = result.data

        console.info('获取账号类型列表=====>',res)
        if(res.code == 0){

          this.userTypeList = res.data.DataList

        }else if(res.code == 9999){
          this.$router.push({name:'login'})
        }
      }).catch(err => {
        console.info(err)
      })
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

      if(this.userName == ''){

        this.$toast('请输入用户名')

        return;
      }

      if(this.age == ''){

        this.$toast('请输入年龄')

        return;
      }

      if(this.userTypeList[this.radio] && this.userTypeList[this.radio].name == '淘宝' && (this.shopSheet.length < 9 || this.shopSheet.length > 12)){

        this.$toast('订单编号是9-12位数字')

        return;
      }

      if(this.localValue.length < 1){

        this.$toast('请选择地址')

        return;
      }


      let img1 = ''
      if(this.fileList.length > 0 && this.fileList[0].url){
        img1 = this.fileList[0].url
      }else{
        img1 =this.fileList.length > 0 ? await this.upload(this.fileList[0]) : '';
        img1 =this.fileList.length > 0 ? img1.data.data : ''
      }

      let img2 = ''
      if(this.fileSSList.length > 0 && this.fileSSList[0].url){
        img2 = this.fileSSList[0].url
      }else{
        img2 =this.fileSSList.length > 0 ? await this.upload(this.fileSSList[0]) : '';
        img2 =this.fileSSList.length > 0 ? img2.data.data : ''
      }

      let img3 = ''
      if(this.fileWXList.length > 0 && this.fileWXList[0].url){
        img3 = this.fileWXList[0].url
      }else{
        img3 =this.fileWXList.length > 0 ? await this.upload(this.fileWXList[0]) : '';
        img3 =this.fileWXList.length > 0 ? img3.data.data : ''
      }

      let img4 = ''
      if(this.fileTQList.length > 0 && this.fileTQList[0].url){
        img4 = this.fileTQList[0].url
      }else{
        img4 =this.fileTQList.length > 0 ? await this.upload(this.fileTQList[0]) : '';
        img4 =this.fileTQList.length > 0 ? img4.data.data : ''
      }

      let img5 = ''
      if(this.fileMemberList.length > 0 && this.fileMemberList[0].url){
        img5 = this.fileMemberList[0].url
      }else{
        img5 =this.fileMemberList.length > 0 ? await this.upload(this.fileMemberList[0]) : '';
        img5 =this.fileMemberList.length > 0 ? img5.data.data : ''
      }

      let img6 = ''
      if(this.fileDDList.length > 0 && this.fileDDList[0].url){
        img6 = this.fileDDList[0].url
      }else{
        img6 =this.fileDDList.length > 0 ? await this.upload(this.fileDDList[0]) : '';
        img6 =this.fileDDList.length > 0 ? img6.data.data : ''
      }

      let img7 = ''
      if(this.fileGRList.length > 0 && this.fileGRList[0].url){
        img7 = this.fileGRList[0].url;
      }else{
        img7 =this.fileGRList.length > 0 ? await this.upload(this.fileGRList[0]) : '';
        img7 =this.fileGRList.length > 0 ? img7.data.data : ''
      }


      // let img1 =this.fileList.length > 0 ? this.fileList[0].url ?   : '' : '';
      // img1 = this.fileList.length > 0 ? img1.data.data : ''

      // let img2 =this.fileSSList.length > 0 ? await this.upload(this.fileSSList[0]) : '';
      // img2 = this.fileSSList.length > 0 ? img2.data.data : ''

      // let img3 =this.fileWXList.length > 0 ? await this.upload(this.fileWXList[0]) : '';
      // img3 =this.fileWXList.length > 0 ? img3.data.data : ''

      // let img4 =this.fileTQList.length > 0 ? await this.upload(this.fileTQList[0]) : '';
      // img4 =this.fileTQList.length > 0 ? img4.data.data : ''

      // let img5 =this.fileMemberList.length > 0 ? await this.upload(this.fileMemberList[0]) : '';
      // img5 =this.fileMemberList.length > 0 ? img5.data.data : ''

      // let img6 =this.fileDDList.length > 0 ? await this.upload(this.fileDDList[0]) : '';
      // img6 =this.fileDDList.length > 0 ? img6.data.data : ''

      // let img7 =this.fileGRList.length > 0 ? await this.upload(this.fileGRList[0]) : '';
      // img7 =this.fileGRList.length > 0 ? img7.data.data : ''

      // fileList:[],
      // fileSSList:[],
      // fileWXList:[],
      // fileMemberList: [],
      // fileGRList: [],
      // fileDDList: [],
      // fileTQList:[],





      this.axios({
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded',
          "user-id": this.userInfo.user_id,
          "user-token": this.userInfo.user_token
        },
        method: 'POST',
        url: 'http://106.12.220.193/Webapp/account/saveAct',
        data: qs.stringify({
          AccountsId:this.AccountsId,
          Platform:this.radio,
          AccountsNick:this.userName,
          Sex: this.sex,
          Age: this.age,
          IsHuabei: this.isHuaBei,
          OrderNo: this.shopSheet,
          NaughtyValue: this.taoNum,
          AccountsLevel: this.xinyuLevel.code,
          Province: this.localValue[0].name,
          City: this.localValue[1].name,
          Area: this.localValue[2].name,
          Address: this.detailAddress,
          person_center_photo: img7,
          order_center_photo: img6,
          member_name_photo: img5,
          wechat_photo: img3,
          naughty_value_photo: img4,
          alipay_info_photo: img1

        })
      }).then(result => {

         let res = result.data

        console.info('报错账号信息=====>',res)
        if(res.code == 0){
          this.$toast(res.msg)

          this.$router.push({name:'binuser'})
        }else if(res.code == 9999){
          this.$router.push({name:'login'})
        }else{
          this.$toast(res.msg)
        }
      }).catch(err => {
        console.info(err)
      })
    },

    delUser(){
      this.axios({
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded',
          "user-id": this.userInfo.user_id,
          "user-token": this.userInfo.user_token
        },
        method: 'POST',
        url: 'http://106.12.220.193/Webapp/Account/delAct',
        data: qs.stringify({
          accountId: this.userAccountId
        }),
      }).then(result => {

         let res = result.data

        console.info('获取账号类型列表=====>',res)
        if(res.code == 0){
          this.$toast(res.msg)
          this.$router.replace({name: 'binuser'})

        }else if(res.code == 9999){
          this.$router.push({name:'login'})
        }else{
          this.$toast(res.msg)
        }
      }).catch(err => {
        console.info(err)
      })
    },

    confirm(e){
      console.info(e)

      this.showPicker = false;

      this.xinyuLevel = e

      this.$refs.titleCell.innerHTML = e.text
    },

    onLoaclConfirm(e){
      this.localValue = e
      this.showArea = false
    },

    reqInit(){
      this.axios({
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded',
          "user-id": this.userInfo.user_id,
          "user-token": this.userInfo.user_token
        },
        method: 'GET',
        url: `http://106.12.220.193/Webapp/account/getInfoByAccountId?accountId=${this.$route.query.id}`,
        data: qs.stringify({}),
      }).then(result => {

         let res = result.data

        console.info('请求账号列表=====>',res)
        if(res.code == 0){
          this.typeName = res.data.account_type_name;
          this.age = res.data.age

          this.localValue = [{name:res.data.province},{name:res.data.city},{name:res.data.area}]

          this.radio = res.data.account_type

          this.isHuaBei = res.data.is_huabei
          this.detailAddress = res.data.address
          this.userName = res.data.account_name

          // this.fileList = [{content: }]
          // this.fileSSList = [{content: }]
          this.fileWXList = res.data.wechat_photo ? [{url: res.data.wechat_photo}] : []
          this.fileMemberList = res.data.member_name_photo ? [{url: res.data.member_name_photo}] : []
          this.fileGRList = res.data.person_center_photo ? [{url: res.data.person_center_photo}] : []
          this.fileDDList = res.data.order_center_photo ? [{url: res.data.order_center_photo}] : []
          this.fileTQList = res.data.naughty_value_photo ? [{url: res.data.naughty_value_photo}] : []
          this.fileList = res.data.alipay_info_photo ? [{url: res.data.alipay_info_photo}] : []

          this.userStatus = res.data.status
          this.userRemark = res.data.remark
          this.userAccountId = res.data.account_id_sign

          this.taoNum = res.data.naughty_value;

          this.shopSheet = res.data.order_no

          this.AccountsId = res.data.account_id

          this.sex = res.data.sex

          console.info(this.bankColumns)
          if(res.data.account_level == 0){
            this.xinyuLevel = {text:'无',code:0}
          }else{
            for(let i in this.bankColumns){
              if(this.bankColumns[i].code == res.data.account_level){
                this.xinyuLevel = this.bankColumns[i]

                // console.info(document.querySelectorAll('#acc')[0])

                // document.querySelectorAll('#acc')[0].innerHTML = this.bankColumns[i].text

                this.$refs.titleCell.innerHTML = this.bankColumns[i].text
              }
            }
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

   .add_bin_user{
      width: 100%;
      min-height: calc(100vh - 20px);
      padding-bottom: 20px;
      background-color: #f0f0f0;

      .raido{
        padding: 10px 12px;
        border-bottom: 1px solid #eee;

        >.van-radio{
          margin: 10px 4px;
        }
      }

      .tips{
        background-color: #fff;
        >i{
          margin-top: 3px;
          margin-right: 4px;
        }
        font-size: 15px;
        color: #ff4163;
        padding: 10px 12px;
        display: flex;
      }

      .title_box{
        padding: 10px 12px;
        height: 30px;
        line-height: 30px;
        background-color: #f0f0f0;
        font-size: 15px;
      }

      .img_box{
        padding: 10px 12px;
        display: flex;
        justify-content: space-around;
        border-top: 1px solid #eee;
        background-color: #fff;

        .tip_img{
          width: 148px;
          height: 228px;
          border: 1px solid #ddd;
          border-radius: 6px;
          position: relative;
        }
      }

      .submit{
        background-color: #1676db;
        margin-top: 25px;
        font-size: 15px;
        color: #fff;
        border: none;
      }
    }
</style>
