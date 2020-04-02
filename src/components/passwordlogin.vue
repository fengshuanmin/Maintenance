<template>
  <div class="content">
    <div class="conpassword">
      <ul>
        <li>
          <span class="phoneicon"></span>
          <span style="flex: 1;"><input type="text" style="width: 100%;" v-model="phone" placeholder="请输入手机号"></span>
        </li>
        <li>
          <span class="passicon"></span>
          <span v-if="eyeshow" class="eyespass">
            <input type="text" v-model="password" placeholder="请输入密码">
            <van-icon name="eye-o" @click="oeyes"/>
          </span>
          <span v-else class="eyespass">
            <input type="password" v-model="password" placeholder="请输入密码">
            <van-icon name="closed-eye" @click="ceyes" />
          </span>
        </li>
      </ul>
      <div class="loginpass">
        <span @click="goupdatepass">忘记密码</span>
      </div>
      <div class="passbottom" @click="gologin">
        <span style="margin-top: .3rem;">登录</span>
      </div>
      <div class="passbottom1">
        <span>微信登录</span>
      </div>
      <span class="bottomtitle">
        <span style="padding-right: .15rem;" @click="goregister">注册</span>|
        <span style="padding-left: .15rem;" @click="goyzmlogin">验证码登录</span>
      </span>
    </div>
  </div>
</template>

<script>
  import $ from "jquery";
  import {Toast} from 'vant'
  import BaseURL from '../assets/js/baseurl.js'
  export default {
    name: 'passwordlogin',
    data(){
      return{
        phone:'',
        yzm:'',
        password:'',
        yzmflag:false,
        yzmtime:59,
        eyeshow:false,
        diagflag:false
      }
    },
    methods:{
      goupdatepass:function(){
        var self=this
        self.$router.push({path: "/updatepass"})
      },
      oeyes:function(){
        var self=this
        self.eyeshow=false
      },
      ceyes:function(){
        var self=this
        self.eyeshow=true
      },
      gologin:function(){
        var self=this
        if(!self.phone){
          Toast({message:'请输入手机号',duration: '1500'});
        }else if(!self.password){
          Toast({message:'请输入密码',duration: '1500'});
        }else {
          let instance = Toast({ message: '登录中', position: 'bottom', duration: -1 })
          $.ajax({
            url:BaseURL.baseurl+'yxuser/login/sysLogin',
            type:'POST',
            datatype: "json",
            contentType: "application/json;charset=utf-8",
            data:JSON.stringify({username:self.phone,password:self.password,loginType:'1'}),
            success:function(data){
              console.log(data)
              instance.close()
              if(data.code=='0'){
                localStorage.setItem('token',data.token)
                localStorage.setItem('userId',data.userId)
                self.$router.push({path: "/home"})
              }else{
                Toast({message:data.msg,duration:'1500'});
              }
            }
          })
        }
      },
      goregister:function(){
        var self=this
        self.$router.push({path: "/register"})
      },
      goyzmlogin:function(){
        var self=this
        self.$router.push({path: "/captcha"})
      }
    }
  }
</script>

<style lang="scss">
  .content{
    width: 100%;
    height: 100%;
  }
  .conpassword{
    width: 100%;
    height: 100%;
    background: #fff;
    ul{
      width: 90%;
      margin: 0 auto;
      padding-top: .5rem;
      li{
        display: flex;
        align-items:center;
        padding: .3rem 0;
        border-bottom: 1px solid #EBEBEB;
        .phoneicon{
          width: .4rem ;
          height: .4rem;
          display: inline-block;
          background: url("../assets/images/phoneicon.png") no-repeat;
          background-size: contain;
          margin-right: .2rem;
        }
        .yzmicon{
          width: .4rem ;
          height: .4rem;
          display: inline-block;
          background: url("../assets/images/keyicon.png") no-repeat;
          background-size: contain;
          margin-right: .2rem;
        }
        .passicon{
          width: .4rem ;
          height: .4rem;
          display: inline-block;
          background: url("../assets/images/safeicon.png") no-repeat;
          background-size: contain;
          margin-right: .2rem;
        }
        .yzminput{
          flex: 1;
          text-align: left;
        }
        .yzmdiv{
          width: 2rem;
          height: .6rem;
          line-height: .6rem;
          background: #EEEEEE;
          color: #F68175;
          -webkit-border-radius: .35rem;
          -moz-border-radius: .35rem;
          border-radius: .35rem;
        }
        .eyespass{
          flex: 1;
          text-align: left;
          display: flex;
          margin-right: .5rem;
          align-items: center;
          input{
            flex: 1;
          }
        }
        .eyeshowicon{
          width: .4rem;
          height: .4rem;
          display: inline-block;
        }
        .eyehideicon{
          width: .4rem;
          height: .4rem;
          display: inline-block;
        }
      }
    }
  }
  .loginpass{
    width: 90%;
    margin: 0 auto;
    padding-top: .15rem;
    text-align: right;
    color: #B3B3B3;
  }
  .passbottom{
    width: 90%;
    margin: 0 auto;
    span{
      width: 100%;
      display: inline-block;
      padding: .25rem 0;
      text-align: center;
      background: #FB5A4A;
      color: #fff;
      -webkit-border-radius: .5rem;
      -moz-border-radius: .5rem;
      border-radius: .5rem;
      margin-top: .5rem;
      letter-spacing:.03rem;
    }
  }
  .passbottom1{
    width: 90%;
    margin: 0 auto;
    span{
      width: 100%;
      display: inline-block;
      padding: .25rem 0;
      text-align: center;
      background: #06C25F;
      color: #fff;
      -webkit-border-radius: .5rem;
      -moz-border-radius: .5rem;
      border-radius: .5rem;
      margin-top: .3rem;
      letter-spacing:.03rem;
    }
  }
  .bottomtitle{
    display: inline-block;
    color: #7D7D7D;
    width: 90%;
    margin: 0 auto;
    margin-top: .2rem;
  }
  .bottomtit{
    position: fixed;
    bottom: .5rem;
    text-align: center;
    width: 90%;
    margin: 0 auto;
    .foottit{
      color: #797979;
    }
    .footspan{
      color: #3D8CEB;
    }
  }
  .wrapper{
    width: 86%;
    height: 90%;
    background: #fff;
    margin: auto;
    overflow: auto;
    position: fixed;
    top: 5%;
    left: 7%;
    border-radius: 1%;
    .wrap{
      padding: .2rem;
      height: 100%;
      overflow: auto;
    }
    .iknow{
      position: fixed;
      bottom: 5%;
      width: 86%;
      height: 1rem;
      line-height: 1rem;
      background: #fff;
      color:#F95D4D;
    }
  }
</style>
