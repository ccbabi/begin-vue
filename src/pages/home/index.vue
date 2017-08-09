<template>
  <div>
    <p>{{status}}</p>
    <img src="./logo.png" />
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      status: 'vue is works!123'
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
