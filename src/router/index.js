import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'passwordlogin',
      meta: { title: '密码登录' },
      component: resolve => require(['@/components/passwordlogin'], resolve)
    },
    {
      path: '/home',
      name: 'home',
      meta: { title: '首页' },
      component: resolve => require(['@/components/home'], resolve)
    },
    {
      path: '/resultList',
      name: 'resultList',
      meta: { title: '查询记录' },
      component: resolve => require(['@/components/resultList'], resolve)
    },
    {
      path: '/user',
      name: 'user',
      meta: { title: '个人中心' },
      component: resolve => require(['@/components/user'], resolve)
    },
    {
      path: '/userInfo',
      name: 'userInfo',
      meta: { title: '用户信息' },
      component: resolve => require(['@/components/userInfo'], resolve)
    },
    {
      path: '/wallet',
      name: 'wallet',
      meta: { title: '钱包' },
      component: resolve => require(['@/components/wallet'], resolve)
    },
    {
      path: '/paymentDetail',
      name: 'paymentDetail',
      meta: { title: '收支明细' },
      component: resolve => require(['@/components/paymentDetails'], resolve)
    },
    {
      path: '/recharge',
      name: 'recharge',
      meta: { title: '充值' },
      component: resolve => require(['@/components/recharge'], resolve)
    },
    {
      path: '/updatepass',
      name: 'updatepass',
      meta: { title: '修改密码' },
      component: resolve => require(['@/components/updatepassword'], resolve)
    },
    {
      path: '/captcha',
      name: 'captcha',
      meta: { title: '验证码登录' },
      component: resolve => require(['@/components/captcha'], resolve)
    },
    {
      path: '/register',
      name: 'register',
      meta: { title: '注册' },
      component: resolve => require(['@/components/register'], resolve)
    },
    {
      path:'/uploadIdcard',
      name:'uploadIdcard',
      meta:{title:'上传身份证'},
      component: resolve => require(['@/components/uploadIdcard'], resolve)
    }
  ]
})
