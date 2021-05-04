<template>
  <div class="certification">
    <NavBar title="资金明细" :isTrueArrow="true" rtTtit="" rtPath="tixiandetail"/>





  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue';

import qs from 'qs';

import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Certification',
  components: {
    NavBar
  },
  data(){
    return{
      tab_a_active:0,
      tab_b_active:0,
      page:1,
      pageSize:10,
      listData:{},
      list:[],
      isTrue:false
    }
  },
  computed:mapState([
      'userInfo',
      'user'
  ]),
  created(){
    
  },
  methods:{
    reqData(type,isBt){
      console.info(type,isBt)
      this.axios({
        headers:{
          "user-id": this.userInfo.user_id,
          "user-token": this.userInfo.user_token
        },
        method: 'POST',
        url: 'http://106.12.220.193/Webapp/Bill/getBillList',
        data: {
          page:isBt ? this.page : 1,
          pageSize:this.pageSize,
          DataType:type
        }
      }).then(result => {

        let res = result.data

        console.info('请求资金详情页数据===>',res)

        if(res.code == 0){
          this.listData = res.data;

          if(isBt){
            let arr = this.list;

            this.list = arr.concat(res.data.DataList)
          }else{
            this.list = res.data.DataList
          }


          if(res.data.HasNextPage){
            this.page += 1
          }


        }else if(res.code == 9999){
          this.$router.push({name:'login'})
        }
      }).catch(err => {
        console.log('err ==> ', err);
      })
    }
  }
}
</script>

<style lang="less" scoped>

   .certification{
      width: 100%;
      min-height: 100vh;
      background-color: #fff;


   }

</style>
