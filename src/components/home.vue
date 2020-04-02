<template>
    <div>
      {{name}}
      <!--<iframe :src="url" frameborder="0" width="100%" height="100%"></iframe>-->
    </div>
</template>

<script>
  export default {
    name: 'home',
    data () {
      return {
        name: '第一页',
        url:'D:/wbhtml/html/wbcheck.html'
      }
    }
  }
</script>

<style scoped>

</style>
