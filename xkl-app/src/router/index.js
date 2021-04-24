import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },,
  {
    path: '/mine',
    name: 'mine',
    component: () => import(/* webpackChunkName: "mine" */ '../views/Mine.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register/Register.vue')
  },
  {
    path: '/forget',
    name: 'forget',
    component: () => import(/* webpackChunkName: "forget" */ '../views/Forget/Forget.vue')
  },
  {
    path: '/tixiandetail',
    name: 'tixiandetail',
    component: () => import(/* webpackChunkName: "tixiandetail" */ '../views/TixianDetail.vue')
  },
  {
    path: '/endtask',
    name: 'endtask',
    component: () => import(/* webpackChunkName: "endtask" */ '../views/EndTask.vue')
  },
  {
    path: '/capitaldetails',
    name: 'capitaldetails',
    component: () => import(/* webpackChunkName: "capitaldetails" */ '../views/CapitalDetails.vue')
  },
  {
    path: '/tasklist',
    name: 'tasklist',
    component: () => import(/* webpackChunkName: "tasklist" */ '../views/TaskList.vue')
  },
  {
    path: '/share',
    name: 'share',
    component: () => import(/* webpackChunkName: "share" */ '../views/Share.vue')
  },
  {
    path: '/taskrule',
    name: 'taskrule',
    component: () => import(/* webpackChunkName: "taskrule" */ '../views/TaskRule.vue')
  },
  {
    path: '/feedback',
    name: 'feedback',
    component: () => import(/* webpackChunkName: "feedback" */ '../views/Feedback.vue')
  },
  {
    path: '/subopinion',
    name: 'subopinion',
    component: () => import(/* webpackChunkName: "subopinion" */ '../views/SubOpinion.vue')
  },
  {
    path: '/extension',
    name: 'extension',
    component: () => import(/* webpackChunkName: "extension" */ '../views/Extension.vue')
  },
  {
    path: '/mineextension',
    name: 'mineextension',
    component: () => import(/* webpackChunkName: "mineextension" */ '../views/MineExtension.vue')
  },
  {
    path: '/searchup',
    name: 'searchup',
    component: () => import(/* webpackChunkName: "searchup" */ '../views/SearchUp.vue')
  },
  {
    path: '/option',
    name: 'option',
    component: () => import(/* webpackChunkName: "option" */ '../views/Option.vue')
  },
  {
    path: '/changepwd',
    name: 'changepwd',
    component: () => import(/* webpackChunkName: "changepwd" */ '../views/Forget/ChangePwd.vue')
  },
  {
    path: '/changepay',
    name: 'changepay',
    component: () => import(/* webpackChunkName: "changepay" */ '../views/Forget/ChangePay.vue')
  },
  {
    path: '/msgpage',
    name: 'msgpage',
    component: () => import(/* webpackChunkName: "msgpage" */ '../views/MsgPage.vue')
  },
  {
    path: '/msgdetail',
    name: 'msgdetail',
    component: () => import(/* webpackChunkName: "msgdetail" */ '../views/MsgDetail.vue')
  },
  {
    path: '/help',
    name: 'help',
    component: () => import(/* webpackChunkName: "help" */ '../views/Help.vue')
  },
  {
    path: '/tixianapply',
    name: 'tixianapply',
    component: () => import(/* webpackChunkName: "tixianapply" */ '../views/TixianApply.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
