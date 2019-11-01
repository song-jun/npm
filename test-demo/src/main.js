import Vue from 'vue'
import App from './App.vue'
import sumFunction1 from '@mrsong/my_test_project'
import mrsongSwiper from 'mrsong-swiper';
import mrsongCountdown from 'mrsong-countdown'
// console.log(mrsongSwiper)
Vue.use(sumFunction1)
Vue.component('sumFunction',sumFunction1)
Vue.component('mrsongSwiper',mrsongSwiper)
Vue.component('mrsongCountdown',mrsongCountdown)
new Vue({
  el: '#app',
  render: h => h(App)
})
