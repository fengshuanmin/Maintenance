<template>
<div class="content">
  <div class="uploadcontent">
    <div class="uploadheader">
      请上传清晰完整的二代身份证照片
    </div>
    <div class="uploadbody">
      <div class="idbgclass"></div>
      <input type="file" class="uploadinput" @change="fileinput">
      <img v-if="fileList" :src="fileList" class="uploadimg" alt="">
      <!--<van-uploader :file-list="fileList" max-count="1" :after-read="afterRead" />-->
    </div>
    <div class="uploadfoot" @click="uploadId">
      <span>上传身份证照片</span>
    </div>
  </div>
</div>
</template>

<script>
  import {Toast} from 'vant'
  import $ from 'jquery'
  import BaseURL from '../assets/js/baseurl.js'
  export default {
    name: 'uploadIdcard',
    data(){
      return{
        fileList:'',
        file:''
      }
    },
    methods:{
      fileinput:function(event){
        var self=this
        var files = event.target.files[0] || event.dataTransfer.files[0];
        console.log(files)
        self.file=files
        const fileReader = new FileReader()
        fileReader.readAsDataURL(files) //读取图片
        fileReader.addEventListener('load', function() {
          // 读取完成
          let res = fileReader.result
          // res是base64格式的图片
          self.fileList = res
        })
        // var URL = window.URL || window.webkitURL;
        // console.log(window.URL)
        // // 通过 file 生成目标 url
        // var imgURL = URL.createObjectURL(files);
        // $('.uploadbody').append($('<img/>').attr('src', imgURL));
      },
      uploadId:function(){
        var self=this
        if(self.file){
          var datas = new FormData()
          datas.append('file',self.file);
          $.ajax({
            url:BaseURL.baseurl+'yxuser/fileupload/uploadIdentity',
            type:'POST',
            data:datas,
            processData:false,
            contentType:false,
            success:function(data){
              if(data.code=="0"){
                self.$router.push({path: "/home"})
              }else{
                Toast({message:data.msg,duration:'1500'});
              }
            }
          })
        }else{
          Toast({message:'请先选择身份证照片',duration:'1500'})
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
  .uploadcontent{
    width: 100%;
    height: 100%;
    background: #fff;
  }
.uploadheader{
  width: 90%;
  padding: .5rem 0 .3rem;
  margin: 0 auto;
}
.uploadbody{
  width: 80%;
  height: 4.5rem;
  margin: .6rem auto;
  position: relative;
  .idbgclass{
    width: 100%;
    height: 100%;
    background: url("../assets/images/idCardbg.png") no-repeat;
    -webkit-background-size: contain;
    background-size: contain;
  }
  .uploadinput{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
  .uploadimg{
    position: absolute;
    top: 5%;
    left: 5%;
    width: 90%;
    height: 84%;
  }
  .van-uploader{
    height: 100%;
    width: 100%;
    .van-uploader__wrapper{
      height: 100%;
      width: 100%;
      .van-uploader__upload{
        width: 100%;
        height: 100%;
      }
    }
  }
}
  .uploadfoot{
    width: 90%;
    margin: 0 auto;
    padding: .2rem 0;
    margin-top: .8rem;
    background: #FB5A4A;
    color: #fff;
    border-radius: .1rem;
  }
</style>
