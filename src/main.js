import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import VueLazyload from 'vue-lazyload'
import FastClick from 'fastclick'
FastClick.attach(document.body);
// import VueBus from 'vue-bus'
Vue.config.productionTip = false
Vue.prototype.$bus =new Vue()
Vue.use(VueLazyload)
// Vue.use(VueBus);
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
