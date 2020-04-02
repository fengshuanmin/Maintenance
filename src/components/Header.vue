<template>
  <div class="header">
    <span @click="back" class="back">
      <img src="../assets/images/back.png" alt="">
    </span>
    <div>{{title}}</div>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data () {
      return {
        title: ''
      }
    },
    created () {
      this.title = this.$route.meta.title
      console.log(this.$route)
    },
    watch: {
      '$route': {
        deep: true,
        immediate: true,
        handler () {
          this.title = this.$route.meta.title
        }
      }
    },
    methods : {
      back () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style rel='stylesheet/scss' lang='scss'>
.header{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  /*position: relative;*/
  display: block;
  z-index: 101;
  background: #5398fc;
  height: .96rem;
}
</style>
