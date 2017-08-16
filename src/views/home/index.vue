<template>
  <div>
    <p>{{status}}</p>
  </div>
</template>

<script>
import { getApiXxx, testJsonp } from '@/utils/client'
export default {
  name: 'home',
  data () {
    return {
      status: 'vue is works!123'
    }
  },
  mounted () {
    // test get
    getApiXxx()
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })

    // test jsonp
    testJsonp({
      cityid: 1
    })
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }
}
</script>

<style lang="less">
p {
  color: green;
  display: flex;
}
</style>
