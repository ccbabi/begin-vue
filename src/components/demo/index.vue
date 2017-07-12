<template lang="pug">
  div.demo
    button(v-on:click="sw") 切换
    div
      p(v-if="current===1") 1
      p(v-if="current===2") 2
      p(v-if="current===3") 3
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
    sw() {
      this.current = (this.current + 1) % 4 || 1
    }
  }
}
</script>

<style lang="less">
.demo {
  background: yellow;
}
</style>


