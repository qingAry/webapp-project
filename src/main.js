import Vue from 'vue'
import 'lib-flexible' //引入适配方案的库
import './assets/iconfont/iconfont.styl'
import 'swiper/css/swiper.css'
import App from './App.vue'
import router from './router/index'
import store  from './store'

Vue.config.productionTip = false

new Vue({
  el:"#app",
  render: h => h(App),
  router,
  store
})