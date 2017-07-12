<template lang="pug">
  div
    p {{status}}
    img(src="../../assets/images/logo.png", alt="")
    Demo
</template>

<script>
import Demo from 'components/demo'
export default {
  name: 'home',
  data () {
    return {
      status: 'vue is works!'
    }
  },
  components: {
    Demo
  }
}
</script>

<style scoped lang="stylus">
p
  color: green
</style>
