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
        <li>
          <span class="passicon"></span>
          <span v-if="eyeshow" class="eyespass">
            <input type="text" v-model="password" placeholder="请输入密码">
            <van-icon name="eye-o" />
          </span>
          <span v-else class="eyespass">
            <input type="password" v-model="password" placeholder="请输入密码">
            <van-icon name="closed-eye" />
          </span>
        </li>
      </ul>
      <div class="passbottom" @click="registerclick">
        <span>注册</span>
      </div>
      <div class="passbottom1">
        <span>微信登录</span>
      </div>
      <span class="bottomtitle">已有账号？</span>
      <div class="bottomtit">
        <span class="foottit">注册代表您已阅读并同意</span><span class="footspan" @click="seefree">《免责声明》</span>
      </div>
      <van-overlay :show="diagflag" @click="diagflag = false">
        <div class="wrapper" @click.stop>
          <div class="wrap">
            <h3>免责声明</h3>
            <div style="text-align: left">
              <h4>1、关于数据：</h4>
              <p>a.	平台提供的数据服务及其源数据均来自于第三方，具有相对的稳定性、准确性，但不排除小概率情况下存在数据源质量问题，甲方应当认知、审慎对待，并认可将相关数据作为业务参考使用。</p>
              <p>b.	正常情况下，报告在30分钟内生成，非工作时间下单可能于次日收到报告，对于24小时未能收到报告，系统将自动退回账户；</p>
              <p>c.	部分车型因数据源或管制的原因无法查询，请予以谅解；</p>
              <p>d.	每个车辆品牌，因不同时期，查询费用会有所调整，请及时了解价格变化情况，并予以认可。</p>
              <h4>2、关于隐私</h4>
              <p>a.	您作为平台用户，我们将在您注册、登录等情形时通过微信授权、cookie、信息填写等方式，获取您的个人信息及资料，对于此您予以知晓、认可、理解；</p>
              <p>b.	您保证向平台请求乘用车维保数据服务与相关车辆存在利害关系并已获得利害关系人的授权，不存在侵犯任何第三方权益，不改变该信息的使用用途，由于您单方面擅自改变信息用途及侵害第三方权益所产生的法律责任全部由您承担。</p>
              <p style="padding-bottom: 1rem;text-indent: .2rem;">本免责申明规定了本平台在特定情形下不承担责任的内容，与用户权益息息相关，用户应仔细、逐项阅读。若用户不同意本免责申明的内容，应停止注册或停止使用平台服务并注销账户。用户完成注册程序并使用平台的服务，视为用户已经完全知悉、理解本免责申明对其权利、义务、责任的特别约定，并同意接受该等约定，豁免平台的相应责任。</p>
            </div>
          </div>
          <div class="iknow" @click="knowclick">我知道了</div>
        </div>
      </van-overlay>
    </div>
  </div>
</template>

<script>
  import $ from "jquery";
  import {Toast} from 'vant'
  import BaseURL from '../assets/js/baseurl.js'
  export default {
    name: 'register',
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
            url:BaseURL.baseurl+'yxuser/sms/registCode/'+self.phone,
            type:'POST',
            success:function(data){
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
      seefree:function(){
        var self=this
        self.diagflag=true
      },
      knowclick:function(){
        var self=this
        self.diagflag=false
      },
      registerclick:function(){
        var self=this
        var reg=/^\d{11}$/
        if(!self.phone){
          Toast({message:'请输入手机号',duration: '1500'});
        }else if(!reg.test(self.phone)){
          Toast({message:'请输入正确的手机号',duration: '1500'});
        }else {
          $.ajax({
            url:BaseURL.baseurl+'yxuser/login/register',
            type:'POST',
            datatype: "json",
            contentType: "application/json;charset=utf-8",
            data:JSON.stringify({mobile:self.phone,password:self.password,identityUrl:self.yzm}),
            success:function(data){
              console.log(data)
              if(data.code=='0'){
                self.$router.push({path: "/uploadIdcard"})
              }else{
                Toast({message:data.msg,duration:'1500'});
              }
            }
          })
        }
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
