<template lang="pug">
  div
    p {{status}}
    img(src="../../assets/images/logo.png", alt="")
    demo
</template>

<script>
import demo from 'components/demo'
// import './style.css'
export default {
  name: 'home',
  data () {
    return {
      status: 'vue is works!'
    }
  },
  components: {
    demo
  }
}
</script>

<style lang="stylus">
p
  color: green
</style>
