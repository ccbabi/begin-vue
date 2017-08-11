var a = 5

module.exports = function (req) {
  return {
    'code': a,
    'data': {
      'method': 'get',
      'list|1-10': [{
        'id|+1': 1
      }]
    },
    'msg': ''
  }
}
