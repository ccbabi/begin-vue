import Vue from 'vue'
import mount from 'utils/mount'
import getBasePath from 'utils/getBasePath'
import Home from 'pages/home'
import 'assets/styles'

__webpack_public_path__ = getBasePath()  // eslint-disable-line

new Vue({ // eslint-disable-line no-new
  el: mount,
  render: h => h(Home)
})
