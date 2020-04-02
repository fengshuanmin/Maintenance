<template>
    <div class="content">
      <ul class="resultbody">
        <li v-for="item in list" class="resultli">
          <span class="iconclass" :style="{'backgroundImage':'url('+item.icon+')'}"></span>
          <span class="resultflex">
            <span class="resultname">{{item.brand}}</span>
            <span class="resultplate">{{item.plate_no}}</span>
            <span class="resultlist">
              <span v-if="item.resultlist.length>0" >
                   <span class="resulttitle" v-for="it in item.resultlist">
                      {{it}}
                   </span>
              </span>
              <span v-else-if="item.resultlist.length==0" class="resulttit">
                <span class="resulticon"></span>
                <span>一切正常</span>
              </span>
            </span>
          </span>
        </li>
      </ul>
    </div>
</template>

<script>
  import {Toast} from 'vant'
  import $ from 'jquery'
  import BaseURL from '../assets/js/baseurl.js'
  export default {
    name: 'resultList',
    data(){
      return{
        msg:'查询记录',
        list:[{icon:'../assets/images/xtl.png',name:'雪铁龙',plateNo:'沪A12345',resultlist:['保险杠','车灯','空调系统','变速箱']},
          {icon:'../assets/images/xtl.png',name:'雪铁龙',plateNo:'沪A12345',resultlist:[]},
          {icon:'../assets/images/xtl.png',name:'雪铁龙',plateNo:'沪A12345',resultlist:['保险杠','车灯','空调系统','变速箱']},
          {icon:'../assets/images/xtl.png',name:'雪铁龙',plateNo:'沪A12345',resultlist:['保险杠','车灯','空调系统','变速箱']},
          {icon:'../assets/images/xtl.png',name:'雪铁龙',plateNo:'沪A12345',resultlist:[]},
          {icon:'../assets/images/xtl.png',name:'雪铁龙',plateNo:'沪A12345',resultlist:['保险杠','车灯','空调系统','变速箱']},
          {icon:'../assets/images/xtl.png',name:'雪铁龙',plateNo:'沪A12345',resultlist:['保险杠','车灯','空调系统','变速箱']},
          {icon:'../assets/images/xtl.png',name:'雪铁龙',plateNo:'沪A12345',resultlist:[]},
          {icon:'../assets/images/xtl.png',name:'雪铁龙',plateNo:'沪A12345',resultlist:['保险杠','车灯','空调系统','变速箱']},
          {icon:'../assets/images/xtl.png',name:'雪铁龙',plateNo:'沪A12345',resultlist:['保险杠','车灯','空调系统','变速箱']},
          {icon:'../assets/images/xtl.png',name:'雪铁龙',plateNo:'沪A12345',resultlist:[]},
          {icon:'../assets/images/xtl.png',name:'雪铁龙',plateNo:'沪A12345',resultlist:['保险杠','车灯','空调系统','变速箱']}

        ]
        // list:[]
      }
    },
    created(){
      var self=this
      if(localStorage.getItem('token')){
        self.token=localStorage.getItem('token')
      }
      if(localStorage.getItem('userId')){
        self.createUser=localStorage.getItem('userId')
      }
      self.firstlogin()
    },
    methods:{
      firstlogin(){
        var self=this
        $.ajax({
          url:BaseURL.baseurl1+'carreport/queryUserOrderList?token='+self.token,
          type:'POST',
          datatype: "json",
          contentType: "application/json;charset=utf-8",
          data:JSON.stringify({createUser:self.createUser}),
          success:function(data){
            if(data.code=="0"){
              console.log(data)
              self.list=data.page.list
              console.log(self.list)
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
  .resultbody{
    width: 100%;
    height: 100%;
    .resultli{
      margin: .2rem;
      background: #fff;
      display: flex;
      padding: .25rem;
      border-radius: .1rem;
      .iconclass{
        width: 1.2rem;
        height: .8rem;
        display: inline-block;
        background-repeat: no-repeat;
        background-size: cover;
        margin-right: .2rem;
      }
      .resultflex{
        flex: 1;
        text-align: left;
        .resultname{
          display: block;
          font-weight: 600;
          margin-bottom:.1rem;
        }
        .resultplate{
          display: block;
          margin-bottom:.1rem;
          color: #515151;
        }
        .resultlist{
          display: block;
          .resulttitle{
            display: inline-block;
            background: #FB5A4A;
            color: #fff;
            margin: .1rem;
            margin-left: 0;
            padding: .05rem .1rem;
            border-radius: .1rem;
          }
          .resulttit{
            display: flex;
            align-items: center;
            width: 100%;
            .resulticon{
              display: inline-block;
              width: .3rem;
              height: .3rem;
              background: url("../assets/images/success.png") no-repeat;
              -webkit-background-size: contain;
              background-size: contain;
              margin-right: .2rem;
            }
          }
        }
      }
    }
    .resultli:nth-last-child(1){
      margin-bottom: 1.3rem;
    }
  }
</style>
