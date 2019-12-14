import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import ElementUI from 'element-ui';    
// 导入 Element-ui的样式
import 'element-ui/lib/theme-chalk/index.css';
import './style/base.css';
// 注册 Element-ui
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
