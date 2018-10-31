import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'

Vue.prototype.$http = Axios

Vue.config.productionTip = false


/*
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
*/



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
