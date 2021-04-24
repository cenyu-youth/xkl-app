<template>
  <div class="sub_opinion">
    <NavBar title="提交意见" :isTrueArrow="true"/>

    <div class="inp_box">
      <input v-model="phone" type="number" maxlength="11" class="inp" placeholder="联系电话">
    </div>

    <div class="inp_area_box">
      <van-field
        v-model="message"
        rows="4"
        type="textarea"
        maxlength="140"
        placeholder="反馈内容"
      />


      <div class="up">
        <van-uploader v-model="uploader" multiple />
      </div>
    </div>

    <van-button class="submit_btn" type="primary" size="large">提交</van-button>

  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue';

export default {
  name: 'SubOpinion',
  components: {
    NavBar
  },
  data(){
    return{
      message:'',
      phone: '',
      uploader:[],
    }
  }
}
</script>

<style lang="less" scoped>

   .sub_opinion{
      width: 100%;
      min-height: calc(100vh - 60px);
      padding-bottom: 60px;
      background-color: #f0f0f0;
   }

   .inp_box{
     background: #fff;
     font-size: 15px;
     padding-left: 10px;
     height: 50px;
     margin-bottom: 10px;

     .inp{
       position: relative;
           display: block;
           height: 100%;
           background: none;
           color: inherit;
           opacity: 1;
           font: inherit;
           line-height: inherit;
           letter-spacing: inherit;
           text-align: inherit;
           text-indent: inherit;
           text-transform: inherit;
           text-shadow: inherit;
           border: none;
           outline: none;
     }
   }

  .inp_area_box{
    background-color: #fff;
    .up{
          padding: 10px;
    }
  }
  .submit_btn{
    color: #fff;
    background-color: #007aff;
    border-radius: 5px;
    margin-top: 10px;
  }
</style>
