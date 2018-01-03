<template lang="pug">
  div {{ greeter }}
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
