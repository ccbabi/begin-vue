<template lang="pug">
  div {{ greeter }}
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      greeter: 'hello, Vue.'
    }
  }
}
</script>

<style lang="less" src='./index.less'></style>
