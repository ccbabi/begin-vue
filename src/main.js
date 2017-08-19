import Vue from 'vue'
import Home from '@/views/home'
import '@/assets/styles'

new Vue({ // eslint-disable-line no-new
  el: '#mount',
  render: h => h(Home)
})
