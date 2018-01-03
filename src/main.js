import Vue from 'vue'
import router from '@/router'
import store from '@/store'
import http from '@/http'
import constant from '@/constant'
import Layout from '@/components/layout'
import '@/stylesheet'

// 移动端引入
// import '@/common/flexible'

Vue.use(http)
Vue.use(constant)

const app = new Vue({
  router,
  store,
  render: h => <Layout />
})

app.$mount('#app')
