<template>
    <div class="content">
      <div class="conpassword">
        <ul>
          <li>
            <span class="phoneicon"></span>
            <span class="inputmodel"><input type="text" v-model="phone" placeholder="请输入手机号"></span>
          </li>
          <li>
            <span class="yzmicon"></span>
            <span class="yzminput"><input type="text" v-model="yzm" placeholder="请输入验证码"></span>
            <span class="yzmdiv">
              <span v-if="yzmflag==false" @click="yzmclick">获取验证码</span>
              <span v-else>{{yzmtime}}s</span>
            </span>
          </li>
          <li>
            <span class="passicon"></span>
            <span class="inputmodel"><input type="text" v-model="password" placeholder="请输入新密码"></span>
          </li>
        </ul>
        <div class="passbottom" @click="surepassword">
          <span>确认</span>
        </div>
      </div>
    </div>
</template>

<script>
  import $ from "jquery";
  import {Toast} from 'vant'
  import BaseURL from '../assets/js/baseurl.js'
  export default {
    name: 'updatepassword',
    data(){
      return{
        phone:'',
        yzm:'',
        password:'',
        yzmflag:false,
        yzmtime:59,
        token:''
      }
    },
    created(){
      var self=this
      if(localStorage.getItem('token')){
        self.token=localStorage.getItem('token')
      }
    },
    methods:{
      yzmclick:function(){
        console.log('123')
        var self=this
        var reg=/^\d{11}$/
        if(!self.phone){
          Toast({message:'请输入手机号',duration: '1500'});
        }else if(!reg.test(self.phone)){
          Toast({message:'请输入正确的手机号',duration: '1500'});
        }else{
          $.ajax({
            url:BaseURL.baseurl+'yxuser/sms/pwCode/'+self.phone,
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
      surepassword:function(){
        var self=this
        var token=localStorage.getItem('token')
        $.ajax({
          url:BaseURL.baseurl+'yxuser/user/password',
          type:'POST',
          datatype: "json",
          headers:{'token':token},
          contentType: "application/json;charset=utf-8",
          data:JSON.stringify({newPassWord:self.password}),
          success:function(data){
            console.log(data)
            if(data.code=="0"){
              window.history.back(-1)
            }else{
              Toast({message:data.msg,duration:'1500'});
            }
          }
        })
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
        .inputmodel{
          flex: 1;
          input{
            width: 100%;
          }
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
</style>
