<template>
  <div>
    <p>{{status}}</p>
  </div>
</template>

<script>
import { getApiXxx, postApiXxx, testJsonp } from '@/utils/client'
export default {
  name: 'home',
  data () {
    return {
      status: 'vue is works!'
    }
  },
  mounted () {
    /*
    // test get
    getApiXxx({a: 1, b: 2})
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })

    // test post
    postApiXxx({a: 1, b: 2})
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
    */
  }
}
</script>

<style lang="less">
p {
  color: green;
  display: flex;
}
</style>
