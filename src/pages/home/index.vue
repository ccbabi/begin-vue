<template>
  <div>{{status}}</div>
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

<style lang="less">
p {
  color: green;
  display: flex;
}
</style>
