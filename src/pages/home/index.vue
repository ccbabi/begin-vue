<template>
  <div>
    <p>{{status}}</p>
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
