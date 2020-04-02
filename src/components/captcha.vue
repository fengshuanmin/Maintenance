<template>
    <div class="content">
      <div class="conpassword">
        <ul>
          <li>
            <span class="phoneicon"></span>
            <span><input type="text" v-model="phone" placeholder="请输入手机号"></span>
          </li>
          <li>
            <span class="yzmicon"></span>
            <span class="yzminput"><input type="text" v-model="yzm" placeholder="请输入验证码"></span>
            <span class="yzmdiv">
              <span v-if="yzmflag==false" @click="yzmclick">获取验证码</span>
              <span v-else>{{yzmtime}}s</span>
            </span>
          </li>
        </ul>
        <div class="passbottom" @click="captlogin">
          <span style="margin-top: .3rem;">登录</span>
        </div>
        <div class="passbottom1">
          <span>微信登录</span>
        </div>
        <span class="bottomtitle">
            <span style="padding-right: .15rem;" @click="goregister">注册</span>|
            <span style="padding-left: .15rem;" @click="gopasslogin">密码登录</span>
        </span>
      </div>
    </div>
</template>

<script>
  import $ from "jquery";
  import {Toast} from 'vant'
  import BaseURL from '../assets/js/baseurl.js'
  export default {
    name: 'captcha',
    data(){
      return{
        phone:'',
        yzm:'',
        password:'',
        yzmflag:false,
        yzmtime:59
      }
    },
    methods:{
      yzmclick:function(){
        var self=this
        var reg=/^\d{11}$/
        if(!self.phone){
          Toast({message:'请输入手机号',duration: '1500'});
        }else if(!reg.test(self.phone)){
          Toast({message:'请输入正确的手机号',duration: '1500'});
        }else{
          $.ajax({
            url:BaseURL.baseurl+'yxuser/sms/code/'+self.phone,
            type:'POST',
            success:function(data){
              console.log(data)
              if(data.code=="0"){
                self.yzmflag=true
                var n = setInterval(()=>{
                  var j = self.yzmtime
                  self.yzmtime=j
                  self.yzmtime--
                  if (self.yzmtime <= 0) {
                    clearInterval(n);
                    self.yzmflag=false
                  }
                }, 1000);
              }else{
                Toast({message:data.msg,duration:'1500'});
              }
            }
          })
        }
      },
      captlogin:function(){
        var self=this
        if(!self.phone){
          Toast({message:'请输入手机号',duration: '1500'});
        }else if(!self.yzm){
          Toast({message:'请输入验证码',duration: '1500'});
        }else {
          let instance = Toast({ message: '登录中', position: 'bottom', duration: -1 })
          $.ajax({
            url:BaseURL.baseurl+'yxuser/login/sysLogin',
            type:'POST',
            datatype: "json",
            contentType: "application/json;charset=utf-8",
            data:JSON.stringify({username:self.phone,password:self.password,loginType:'2'}),
            success:function(data){
              console.log(data)
              instance.close()
              if(data.code=='0'){
                localStorage.setItem('token',data.token)
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
      gopasslogin:function(){
        var self=this
        self.$router.push({path: "/passwordlogin"})
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

      }
    }
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
</style>
