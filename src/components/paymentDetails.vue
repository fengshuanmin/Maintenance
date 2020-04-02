<template>
    <div class="content">
      <div class="paycontent">
        <div class="paydetail">
          <ul>
            <li v-for="item in paydatalist">
              <span v-if="item.type=='1'" class="paydetailicon"></span>
              <span v-else class="paydetailicon1"></span>
              <span class="paydetailright">
                 <span class="paydetailtop">
                   <span class="paydetailtopleft">{{item.name}}</span>
                   <span v-if="item.type=='1'" class="paydetailtopright1">{{item.price}}</span>
                   <span v-else class="paydetailtopright">{{item.price}}</span>
                 </span>
                <span class="paydetailbottom">
                  {{item.dataTime}}
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'paymentDetails',
    data(){
      return{
        paydatalist:[{name:'充值',price:'+120',dataTime:'2020-02-12 13:13',type:'1'},
          {name:'违章查询-比亚迪-沪A12345',price:'-120',dataTime:'2020-02-12 13:13',type:'2'},
          {name:'充值',price:'+120',dataTime:'2020-02-12 13:13',type:'1'},
          {name:'违章查询-比亚迪-沪A12345',price:'-120',dataTime:'2020-02-12 13:13',type:'2'},
          {name:'充值',price:'+120',dataTime:'2020-02-12 13:13',type:'1'}]
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
  .paycontent{
    width: 100%;
    height: 100%;
    background: #fff;
    text-align: left;
    .paydetail{
      width: 90%;
      margin: 0 auto;
      ul{
        width: 100%;
        li{
          display: flex;
          padding-top: .3rem;
          .paydetailicon{
            width: .6rem;
            height: .4rem;
            display: inline-block;
            background: url("../assets/images/wallet.png") no-repeat;
            -webkit-background-size: contain;
            background-size: contain;
          }
          .paydetailicon1{
            width: .6rem;
            height: .4rem;
            display: inline-block;
            background: url("../assets/images/selecticon.png") no-repeat;
            -webkit-background-size: contain;
            background-size: contain;
          }
          .paydetailright{
            flex: 1;
            display: flex;
            align-items: center;
            border-bottom: 1px solid #F4F4F4;
            margin-left: .2rem;
            flex-direction: column;
            .paydetailtop{
              text-align: left;
              display: flex;
              width: 100%;
              padding: .1rem 0;
              .paydetailtopleft{
                flex: 1;
                text-align: left;
              }
              .paydetailtopright{
                color: #000;
                text-align: right;
              }
              .paydetailtopright1{
                color: #FB5A4A;
                text-align: right;
              }
            }
            .paydetailbottom{
              font-size: .24rem;
              color: #9D9D9D;
              text-align: left;
              width: 100%;
              padding-bottom: .3rem;
            }
          }
        }
      }
    }
  }
</style>
