import axios from 'axios'
import jsonp from 'jsonp'
import qs from 'qs'

const timeout = 3000
const jsonpConfig = {
  timeout
}
const axiosConfig = {
  timeout,
  withCredentials: true,
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
}

export default (method, url, option = {}) => {
  let isPost = true
  const config = option.config || {}
  delete option.config

  method = (method || '').toUpperCase()

  if (['GET', 'DELETE', 'HEAD', 'JSONP'].indexOf(method) > -1) {
    const query = qs.stringify(option, {
      addQueryPrefix: true
    })
    isPost = false

    if (url.indexOf('?') > -1) {
      url += query.replace('?', '&')
    } else {
      url += query
    }
  }

  if (method === 'JSONP') {
    return new Promise((resolve, reject) => {
      jsonp(url, {...jsonpConfig, ...config}, (err, data) => {
        if (err) return reject(err)
        resolve(data)
      })
    })
  }

  const makeConfig = {method, url}
  if (isPost) {
    makeConfig.data = option
  }

  return axios({
    ...axiosConfig,
    ...makeConfig,
    ...config
  }).then(ret => ret.data)
}
