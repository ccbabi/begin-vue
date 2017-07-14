<template lang="pug">
  div
    p {{status}}
    img(src="../../assets/imgs/logo.png", alt="")
    demo
</template>

<script>
import demo from 'components/demo'
export default {
  name: 'home',
  data () {
    return
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
  color green
  display flex
</style>
