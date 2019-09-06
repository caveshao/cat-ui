import Vue from 'vue'
import App from './App.vue'
import catUi from '@caveshao/cat-ui'

Vue.use(catUi)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
