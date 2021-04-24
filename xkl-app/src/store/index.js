import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: '',
    user: ''
  },
  mutations: {
    changeUserInfo(state, value){
      state.userInfo = value;
    },

    changeUser(state,value){
      state.user = value;
    },

    delUser(state,value){
      state.user = '';
      state.userInfo = '';
    }
  },
  actions: {
  },
  modules: {
  }
})
