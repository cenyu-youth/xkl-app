<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>

  import Util from '@/assets/utils/utils'

  import qs from 'qs'

  import { mapState, mapMutations } from 'vuex'

  export default {
     name: 'Login',
     components: {
     },
     data(){
       return{
         phone:18159303017,
         pwd:'a123456',
         utils: new Util(this)
       }
     },
     computed: mapState([
         'userInfo',
         'user'
     ]),
     created(){

       if(!this.$cookies.isKey('userData')){
         this.$router.push({name: 'login'})
       }else{
          let user = this.$cookies.get('userData');


          this.changeUserInfo(user)

          this.reqUserInfo(user);

       }


     },
     methods: {
       ...mapMutations(['changeUserInfo','changeUser']),
       reqUserInfo(o){
         this.axios({
           headers:{
             "user-id": o.user_id,
             "user-token": o.user_token
           },
           method: 'GET',
           url: 'http://106.12.220.193/Webapp/home/pushUserInfo',
           params: {}
         }).then(result => {
           // console.info('请求个人信息1231322',result.data)

           let res = result.data

           if(res.code == 0){
             this.changeUser(res.data);
           }else if(res.code == 9999){
             this.$cookies.remove('userData')
             this.$router.push({name: 'login'})
           }
         }).catch(err => {
           console.info(err)
         })
       }
     },
  }
 </script>
<style lang="less">
#app {
  width: 100%;
  height: 100%;
}
</style>
