import Vue from 'vue'
import mount from 'common/models/mount'
import Home from 'pages/home'
import 'common/styles'

new Vue({ // eslint-disable-line no-new
  el: mount(),
  render: h => h(Home)
})
