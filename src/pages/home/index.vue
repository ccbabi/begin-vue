<template>
  <div>
    <p>{{status}}</p>
    <img src="./timg.jpg" />
    <div id='test'></div>
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
#test {
  border: 1px solid red;
  width: 200px;
  height: 200px;
  background-image: url('./timg.jpg')
}
</style>
