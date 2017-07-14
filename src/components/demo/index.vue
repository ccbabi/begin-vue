<template lang="pug">
  div(:class="$style.demo")
    button(v-on:click="sw") 切换
    div
      p(v-if="current===1")
        span 1
      p(v-if="current===2")
        span 2
      p(v-if="current===3")
        span 3
</template>
<script>
export default {
  name: 'Tab',
  data () {
    return {
      current: 1
    }
  },
  methods: {
    sw () {
      this.current = (this.current + 1) % 4 || 1
    }
  }
}
</script>

<style lang="less" module>
.demo {
  background: yellow
}
</style>
