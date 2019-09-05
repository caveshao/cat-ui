import Vue from 'vue'
import App from './App.vue'

import ColorPicker from './../packages/index'

Vue.use(ColorPicker)

//设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
