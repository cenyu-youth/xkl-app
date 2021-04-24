import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'


import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

Vue.use(VueAxios, axios)

import {
  Button,
  Toast,
  Icon,
  Field,
  Grid,
  GridItem,
  Tab,
  Tabs,
  RadioGroup,
  Radio,
  Uploader,
  Switch,
  Dialog,
  Collapse,
  CollapseItem
 } from 'vant';
Vue
  .use(Button)
  .use(Toast)
  .use(Icon)
  .use(Field)
  .use(Grid)
  .use(GridItem)
  .use(Tab)
  .use(Tabs)
  .use(RadioGroup)
  .use(Radio)
  .use(Uploader)
  .use(Switch)
  .use(Dialog)
  .use(Collapse)
  .use(CollapseItem)

import 'lib-flexible/flexible'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
