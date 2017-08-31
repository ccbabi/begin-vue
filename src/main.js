import Vue from 'vue'
import router from '@/router'
import store from '@/store'
import layout from '@/view/layout'
import '@/asset/less'

// 移动端引入
// import '@/common/flexible'

const app = new Vue({
  router,
  store,
  render: h => h(layout)
})

app.$mount('#app')
