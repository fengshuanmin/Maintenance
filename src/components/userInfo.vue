<template>
    <div class="content">
      <div class="userInfocontent">
        <ul class="userInfoul">
          <li class="userInfoli">
            <span>姓名</span>
            <input type="text" v-model="userInfo.username">
          </li>
          <li class="userInfoli">
            <span>手机号</span>
            <input type="text" style="color: #A7A7A7;" disabled v-model="userInfo.mobile">
          </li>
        </ul>
        <div class="userInfobottom" @click="sure">
          <span>确认</span>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'userInfo',
    data(){
      return{
        userInfo:{
          username:'张先生',
          mobile:'17834448563'
        }
      }
    },
    methods:{
      sure:function(){

      }
    }
  }
</script>

<style lang="scss">
  .content{
    width: 100%;
    height: 100%;
  }
.userInfocontent{
  width: 100%;
  height: 100%;
  background: #fff;
  .userInfoul{
    padding: .5rem;
    width: 90%;
    margin: 0 auto;
    .userInfoli{
      padding: .1rem;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #F0F0F0;
      span{
        width: 1rem;
        margin-right: .2rem;
        text-align: left;
      }
      input{
        background: #fff;
        padding: .2rem 0;
        text-align: right;
        flex: 1;
      }
    }
  }
  .userInfobottom{
    width: 90%;
    margin: 0 auto;
    margin-top: .4rem;
    background: #FB594A;
    color: #fff;
    border-radius: .4rem;
    span{
      display: inline-block;
      padding: .2rem 0;
      font-size: .32rem;
      letter-spacing: .05rem;
    }
  }
}
</style>
