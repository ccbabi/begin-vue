<template lang="pug">
  p {{status}}
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      status: 'vue is works!'
    }
  }
}
</script>

<style scoped lang="stylus">
p
  color: green
</style>
