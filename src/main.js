import Vue from 'vue'
import Home from '@/views/home'
import router from '@/router'
import '@/assets/styles'

const app = new Vue({
  router,
  render: h => h(Home)
})

app.$mount('#app')
