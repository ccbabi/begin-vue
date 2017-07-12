import Vue from 'vue'
import mount from './common/js/mount'
import Home from './pages/home'

new Vue({ // eslint-disable-line no-new
  el: mount(),
  render: h => h(Home)
})
