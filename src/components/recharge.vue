<template>
    <div class="content">
      <div class="rechargecontent">
        <span class="rechargetitle">充值金额</span>
        <div class="pricerechage">
          <span>￥</span>
          <span class="rechargeinput"><input type="text" v-model="price" placeholder="请输入金额"></span>
        </div>
        <div class="rechargebottom">
          <span>充值</span>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'recharge',
    data(){
      return{
        price:''
      }
    },
    methods:{

    }
  }
</script>

<style lang="scss">
.content{
  width: 100%;
  height: 100%;
}
  .rechargecontent{
    width: 100%;
    height: 100%;
    background: #fff;
    .rechargetitle{
      color: #262626;
      padding-top: .4rem;
      width: 90%;
      margin: 0 auto;
      display: inline-block;
      text-align: left;
    }
    .pricerechage{
      font-size: .5rem;
      width: 90%;
      margin: 0 auto;
      display: flex;
      padding: .3rem 0;
      border-bottom: 1px solid #EFEFEF;
      .rechargeinput{
        margin-left: .2rem;
      }
    }
    .rechargebottom{
      width: 90%;
      margin: 0 auto;
      span{
        width: 100%;
        display: inline-block;
        padding: .25rem 0;
        text-align: center;
        background: #FB5A4A;
        color: #fff;
        -webkit-border-radius: .1rem;
        -moz-border-radius: .1rem;
        border-radius: .1rem;
        margin-top: .5rem;
        letter-spacing:.03rem;
      }
    }
  }
</style>
