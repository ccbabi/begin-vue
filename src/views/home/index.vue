<template>
  <div>
    <router-link to='/demo1'>Go to Demo1</router-link>
    <router-link to='/demo2'>Go to Demo2</router-link>
    <section>{{header}}</section>
    <router-view></router-view>
    <section>{{footer}}</section>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      header: 'header',
      footer: 'footer'
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
