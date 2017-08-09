import os from 'os'

const ifaces = os.networkInterfaces()
let host = null

Object.keys(ifaces).some(dev => {
  return ifaces[dev].some(details => {
    if (details.family === 'IPv4' && !details.internal) {
      const address = details.address
      if (address.split('.').pop() !== '1') {
        host = address
        return true
      }
    }
  })
})

export default host || '127.0.0.1'
