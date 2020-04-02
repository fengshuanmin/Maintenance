<template>
    <div class="content">
      <div class="walletcontent">
        <div class="walletheader">
          <span class="wallettop">
             <span class="title">当前余额</span>
             <span class="price">￥1200</span>
          </span>
        </div>
        <div class="walletbody">
          <ul>
            <li>
              <span class="walleticon"></span>
              <span class="walletright" @click="gorecharge">
                 <span class="walletleft">充值</span>
                 <van-icon name="arrow"  color="#CFCFCF" />
              </span>
            </li>
            <li>
              <span class="payicon"></span>
              <span class="walletright" @click="gopayment">
                 <span class="walletleft">收支明细</span>
                 <van-icon name="arrow"  color="#CFCFCF" />
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'wallet',
    data(){
      return{

      }
    },
    methods:{
      gorecharge:function(){
        var self=this
        self.$router.push({path: "/recharge"})
      },
      gopayment:function(){
        var self=this
        self.$router.push({path: "/paymentDetail"})
      }
    }
  }
</script>

<style lang="scss">
  .content{
    width: 100%;
    height: 100%;
  }
  .walletcontent{
    width: 100%;
    height: 100%;
    background: #fff;
    .walletheader{
      width: 90%;
      margin: 0 auto;
      .wallettop{
        display: inline-block;
        width: 100%;
        margin-top: .5rem;
        background: linear-gradient(to right, #FB914A, #FB5F4A);
        color: #fff;
        padding: .5rem 0;
        -webkit-border-radius: .2rem;
        -moz-border-radius: .2rem;
        border-radius: .2rem;
        .title{
          display: block;
        }
        .price{
          font-size: .5rem;
        }
      }
    }
    .walletbody{
      width: 90%;
      margin: 0 auto;
      margin-top: .5rem;
      ul{
        width: 100%;
        li{
          display: flex;
          align-items: center;
          .walleticon{
            width: .6rem;
            height: .4rem;
            display: inline-block;
            background: url("../assets/images/wallet.png") no-repeat;
            -webkit-background-size: contain;
            background-size: contain;
          }
          .payicon{
            width: .6rem;
            height: .4rem;
            display: inline-block;
            background: url("../assets/images/payments.png") no-repeat;
            -webkit-background-size: contain;
            background-size: contain;
          }
          .walletright{
            flex: 1;
            display: flex;
            align-items: center;
            border-bottom: 1px solid #F4F4F4;
            padding: .3rem 0;
            margin-left: .2rem;
            .walletleft{
              flex: 1;
              text-align: left;
            }
          }
        }
      }
    }
  }

</style>
