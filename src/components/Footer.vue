<template>
    <div>
      <van-tabbar v-model="active" @change="onChange">
        <van-tabbar-item name="home"  to="/home">
          <img v-if="props.active"
               slot="icon"
               slot-scope="props"
               src="../assets/images/search.png"
          >
          <img v-else
               slot="icon"
               slot-scope="props"
               src="../assets/images/search-grey.png"
          >
        </van-tabbar-item>
        <van-tabbar-item name="resultList" to="/resultList">
          <img v-if="props.active"
               slot="icon"
               slot-scope="props"
               src="../assets/images/record.png"
          >
          <img v-else
               slot="icon"
               slot-scope="props"
               src="../assets/images/record-grey.png"
          >
        </van-tabbar-item>
        <van-tabbar-item name="user" to="/user">
          <img v-if="props.active"
               slot="icon"
               slot-scope="props"
               src="../assets/images/user.png"
          >
          <img v-else
               slot="icon"
               slot-scope="props"
               src="../assets/images/user-grey.png"
          >
        </van-tabbar-item>
      </van-tabbar>
    </div>
</template>

<script>
  export default {
    name: 'Footer',
    data(){
      return{
        active:'home'
      }
    },
    watch: {
      '$route': {
        deep: true,
        immediate: true,
        handler () {
          var name=this.$route.path.split('/')
          this.active=name[1]
        }
      }
    },
    created:function(){
      console.log(this.active)
    },
    methods:{
      onChange:function(event){
        console.log(event)
      }
    }
  }
</script>

<style lang="scss">
  .van-tabbar{
    height: 60px;
  }
.van-tabbar-item__icon{
  font-size: 26px;
  img{
    height: 26px;
  }
}
</style>
