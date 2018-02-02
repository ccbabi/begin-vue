<template>
  <div class="greeter"> {{ greeter }} </div>
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

<style lang="less" src="./index.less"></style>
