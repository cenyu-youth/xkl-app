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
  {
    path: '/taskdetail',
    name: 'taskdetail',
    component: () => import(/* webpackChunkName: "taskdetail" */ '../views/TaskDetail.vue')
  },
  {
    path: '/appeal',
    name: 'appeal',
    component: () => import(/* webpackChunkName: "appeal" */ '../views/Appeal.vue')
  },
  {
    path: '/appealcenter',
    name: 'appealcenter',
    component: () => import(/* webpackChunkName: "appealcenter" */ '../views/AppealCenter.vue')
  },
  {
    path: '/appealdetail',
    name: 'appealdetail',
    component: () => import(/* webpackChunkName: "appealdetail" */ '../views/AppealDetail.vue')
  },
  {
    path: '/collectionuser',
    name: 'collectionuser',
    component: () => import(/* webpackChunkName: "collectionuser" */ '../views/CollectionUser.vue')
  },
  {
    path: '/addcollectionuser',
    name: 'addcollectionuser',
    component: () => import(/* webpackChunkName: "addcollectionuser" */ '../views/AddCollectionUser.vue')
  },
  {
    path: '/certification',
    name: 'certification',
    component: () => import(/* webpackChunkName: "certification" */ '../views/Certification.vue')
  },
  {
    path: '/binuser',
    name: 'binuser',
    component: () => import(/* webpackChunkName: "binuser" */ '../views/BinUser.vue')
  },
  {
    path: '/addbinuser',
    name: 'addbinuser',
    component: () => import(/* webpackChunkName: "addbinuser" */ '../views/AddBinUser.vue')
  },
  {
    path: '/authentication',
    name: 'authentication',
    component: () => import(/* webpackChunkName: "authentication" */ '../views/Authentication.vue')
  },
  {
    path: '/receivingorders',
    name: 'receivingorders',
    component: () => import(/* webpackChunkName: "receivingorders" */ '../views/ReceivingOrders.vue')
  },
  {
    path: '/zhifushenq',
    name: 'zhifushenq',
    component: () => import(/* webpackChunkName: "zhifushenq" */ '../views/ZhiFuShenQ.vue')
  },
  {
    path: '/taskcaozuo',
    name: 'taskcaozuo',
    component: () => import(/* webpackChunkName: "taskcaozuo" */ '../views/TaskCaozuo.vue')
  },
  {
    path: '/tijiaopj',
    name: 'tijiaopj',
    component: () => import(/* webpackChunkName: "tijiaopj" */ '../views/TijiaoPJ.vue')
  },
  {
    path: '/tijiaozp',
    name: 'tijiaozp',
    component: () => import(/* webpackChunkName: "tijiaozp" */ '../views/TijiaoZP.vue')
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
