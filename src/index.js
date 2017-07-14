import Vue from 'vue'
import mount from 'common/mount'
import Home from 'pages/home'
import 'assets/styles'

new Vue({ // eslint-disable-line no-new
  el: mount,
  render: h => h(Home)
})
