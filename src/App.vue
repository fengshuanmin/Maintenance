<template>
  <div id="app">
    <!--<my-header/>-->
    <!--<img src="./assets/logo.png">-->
    <div class="main">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="!$route.meta.keepAlive"/>
    </div>
    <Footer v-if="footerflag"/>
    <!--<router-view/>-->
  </div>
</template>

<script>
  import MyHeader from './components/Header'
  import Footer from './components/Footer'
  export default {
    name: 'App',
    components: { MyHeader ,Footer },
    data () {
      return {
        footerflag:true
      }
    },
    watch: {
      '$route': {
        deep: true,
        immediate: true,
        handler () {
          const tabBarList = ['/home', '/resultList', '/user']
          this.footerflag = tabBarList.includes(this.$route.path)
        }
      }
    }
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
}
.main {
  overflow-y: auto;
  /*-webkit-overflow-scrolling:touch;*/
  // padding-top: .96rem;
  flex: 1;
  /*margin-top:.96rem;*/
  position: relative;
  // .main-container {
  // }
  // > div {
  //   -webkit-overflow-scrolling: touch;
  //   overflow: auto;
  // }
}

</style>
