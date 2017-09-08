<template>
  <div>{{ greeter }}</div>
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

<style lang="less" src="./index.less"></style>
