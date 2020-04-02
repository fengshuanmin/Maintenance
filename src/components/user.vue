<template>
    <div class="content">
      <div class="contebody">
        <div class="userheader">
          <span class="headericon"></span>
          <span class="headerright">
          <span class="headername">{{userInfo.username}}<span v-if="recommender==true" class="reicon"></span></span>
          <span class="headerphone">{{userInfo.mobile}}</span>
        </span>
        </div>
        <div class="usertop">
        <span class="topdiv" @click="gowallet">
          <span class="toptit">钱包</span>
          <span>￥{{userInfo.balance}}</span>
        </span>
        </div>
        <div class="userbody">
          <ul>
            <li @click="gouserInfo">
              <span class="bodyleft">用户信息</span>
              <van-icon name="arrow" color="#CFCFCF" />
            </li>
            <li v-if="recommender==false" @click="recomclick">
              <span class="bodyleft">我要推荐</span>
              <van-icon name="arrow"  color="#CFCFCF" />
            </li>
            <li v-else>
              <span class="bodyleft">我要分享</span>
              <van-icon name="arrow"  color="#CFCFCF" />
            </li>
            <li @click="updatepass">
              <span class="bodyleft">修改密码</span>
              <van-icon name="arrow"  color="#CFCFCF" />
            </li>
            <li>
              <span class="bodyleft">退出登录</span>
              <!--<van-icon name="arrow"  color="#CFCFCF" />-->
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
  import {Toast} from 'vant'
  import $ from 'jquery'
  import BaseURL from '../assets/js/baseurl.js'
  export default {
    name: 'user',
    data(){
      return{
        msg:'我的',
        money:56000,
        recommender:false,
        token:'',
        userInfo:{},
        userId:''
      }
    },
    created:function(){
      var self=this
      if(localStorage.getItem('token')){
        self.token=localStorage.getItem('token')
      }
      if(localStorage.getItem('userId')){
        self.userId=localStorage.getItem('userId')
      }
      self.userlogin()
    },
    methods:{
      userlogin:function(){
        var self=this
        self.token=localStorage.getItem('token')
        $.ajax({
          url:BaseURL.baseurl+'yxuser/user/info/'+self.userId,
          type:'POST',
          datatype: "json",
          headers:{'token':self.token},
          contentType: "application/json;charset=utf-8",
          success:function(data){
            if(data.code=="0"){
console.log(data)
              self.userInfo=data.user
            }else{
              Toast({message:data.msg,duration:'1500'});
            }
          }
        })
      },
      gouserInfo:function(){
        var self=this
        self.$router.push({path: "/userInfo"})
      },
      recomclick:function(){
        var self=this
        self.recommender=true
      },
      gowallet:function(){
        var self=this
        self.$router.push({path: "/wallet"})
      },
      updatepass:function(){
        var self=this
        self.$router.push({path: "/updatepass"})
      }
    }
  }
</script>

<style lang="scss">
  .content{
    width: 100%;
    height: 100%;
    text-align: center;
  }
  .contebody{
    width: 100%;
    height: 100%;
    text-align: center;
    background: #fff;
  }
  .userheader{
    display: flex;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    padding: .3rem;
    .headericon{
      width: 1.5rem;
      height: 1.5rem;
      display: inline-block;
      background:url("../assets/images/headericon.png") no-repeat;
      background-size: contain;
      margin-right: .3rem;
    }
    .headerright{
      text-align: left;
      .headername{
        font-size: .34rem;
        margin-bottom: .1rem;
        display: flex;
        align-items: center;
        .reicon{
          width: .4rem;
          height: .4rem;
          display: inline-block;
          background: url("../assets/images/reicon.png") no-repeat;
          background-size: contain;
        }
      }
      .headerphone{
        display: block;
        color: #A7A7A7;
      }
    }
  }
.usertop{
  width: 90%;
  margin: .2rem auto;
  .topdiv{
    display: inline-block;
    width: 100%;
    padding: .5rem 0;
    background: #FB5A4A;
    -webkit-border-radius: .1rem;
    -moz-border-radius: .1rem;
    border-radius: .1rem;
    color: #fff;
  }
  .toptit{
    margin-right: .3rem;
  }
}
  .userbody{
      width: 90%;
      margin: 0 auto;
      ul{
        width: 100%;
        li{
          display: flex;
          align-items: center;
          border-bottom: 1px solid #F4F4F4;
          padding: .3rem 0;
          .bodyleft{
            flex: 1;
            text-align: left;
          }
        }
        li:nth-last-child(1){
          border-bottom: 0;
        }
      }
  }
</style>
