import axios from 'axios'
import jsonp from 'jsonp'
import qs from 'qs'

const timeout = 3000
const jsonpConfig = {
  timeout
}
const axiosConfig = {
  timeout,
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
}

export default (method, url, option = {}) => {
  const config = option.config || {}
  delete option.config

  method = (method || '').toUpperCase()

  if (['GET', 'DELETE', 'HEAD', 'JSONP'].indexOf(method) > -1) {
    const query = qs.stringify(option, {
      addQueryPrefix: true
    })

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

  return axios({
    ...axiosConfig,
    ...{
      method,
      url,
      data: option
    },
    ...config
  }).then(ret => ret.data)
}
