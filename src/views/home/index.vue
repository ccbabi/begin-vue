<template lang="pug">
  div {{ greeter }}
    img(src="../banner.jpg")
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      greeter: 'Hello, Vue!'
    }
  }
}
</script>

<style lang="stylus" src="./index.styl"></style>
