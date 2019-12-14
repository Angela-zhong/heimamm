// 导入
import Vue from "vue"
// 导入 login 组件
import login from '../views/login/login.vue'
// 导包
import vueRouter from "vue-router"
//use下注册
Vue.use(vueRouter) 

// 规则
const routes=[
     // login
  {
      path:'/login',
      component:login
  }
];
// 创建路由对象
const router = new vueRouter({
    routes
});
// 暴露出去
export default router