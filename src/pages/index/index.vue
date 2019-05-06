<template>
  <div class="zp-df zp-fdc zp-w100 zp-h100">
    <header class="zp-df zp-aic" style="top:0;padding:5px 10px;border-bottom:1px solid #f8f8f8;">
      <section class="zp-df zp-aic">
        <div style="margin-right:10px;">{{ cityName }}</div>  
        <i class="iconfont iconarrowdown"></i>
      </section>
      <section class="zp-df zp-aic zp-f1 zp-jcc">
        <i class="iconfont iconsousuo" style="margin-right:5px;"></i>
        <mp-input placeholder="请输入商家名、品类或商圈..." v-model="inputValue" @focus="inputFocus"></mp-input>
      </section>
    </header>
    <section class="zp-w100 zp-f1 zp-scrolly">
      <article class="zp-w100" @touchstart="touchStartImg" @touchmove="touchMoveImg" @touchend="touchEndImg">
        <div :class="{imgAnimation:isImgMove}" class="zp-df" style="width:600%;overflow:hidden;" :style="{transform:'translateX('+imgX+'px)'}">
          <img :src="'/static/img/'+img+'.jpg'"  v-for="(img,imgIndex) in imgs" :key="imgIndex" class="zp-f1" style="background-size:contain;"/>
        </div>
      </article>
      <section class="zp-df zp-jcsb zp-pr" style="top:-20px;width:80px;margin:0 auto;">
        <div v-for="(imgo,imgFlagIndex) in imgs.length/2" :key="imgFlagIndex"  :style="{'background-color':imgFlagIndex===(imgX/-clientWidth)||imgFlagIndex===(imgX/-clientWidth)?'#409EFF':'white'}" style="width:10px;height:10px;border-radius:50%;"></div>
      </section>
    </section>
  </div>
</template>

<script>

import mpInput from 'mpvue-weui/src/input'
import Mock from 'mockjs'

export default {
  components: { 
    mpInput
  },

  computed:{
   
  },

  data () {
    return {
      inputValue:'',
      cityName:'杭州',
      imgs:['index1','index2','index3','index1','index2','index3'],
      initImgX:0,            //移动开始时图片位置
      imgX:0,                // 图片位置
      imgStartX:0,           // 移动开始位置
      imgSwitchSpeend:4000,  //ms
      imgMoveSpeed:1000,  //ms
      isImgMove:true,       //是否移动
      imgInterval:'',        
      colors:['red','green','blue'],
      clientWidth:this.$getSysWidth,
      isAutoWork:true,
    }
  },

  methods: {
    
  },

  created () {
    this.initNavImg()

    wx.request({
      url: 'http://localhost:8888/wxbce355e246bcac2c/0/api/user/userList', // 仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json' // 默认值
      },
      data: {
        x: '1',
        y: '2',
      },

      success(res) {
        console.log(res)
      }
    })
  },

  mounted(){
    wx.setNavigationBarTitle({
      title: '首页呦'
    })
  },

  methods:{
    initNavImg(){
      this.imgInterval = setInterval(() => {
        this.isAutoWork = true
        this.isImgMove = true
        if(this.imgX === -2*this.clientWidth){
          this.imgX = 0
        }else{
          this.imgX -= this.clientWidth
        }
        setTimeout(() => {
          this.isImgMove = false
        }, 1000)
      }, this.imgSwitchSpeend)
    },

    touchStartImg(e){
      if(!this.isAutoWork&&this.isImgMove) return
      this.isImgMove = false
      this.isAutoWork = false
      clearInterval(this.imgInterval)
      this.imgInterval = null
      if(this.imgX === 0){
        this.imgX = -3*this.clientWidth
      }
      this.initImgX = this.imgX
      this.imgStartX = e.touches[0].clientX
      console.log(this.initImgX,e.touches[0].clientX)
    },

    touchMoveImg(e){
      if(!this.isAutoWork&&this.isImgMove) return
      this.imgX = this.initImgX + e.touches[0].clientX - this.imgStartX
      console.log('move:'+e.touches[0].clientX)
    },

    touchEndImg(e){
      if(!this.isAutoWork&&this.isImgMove) return
      let place = e.mp.changedTouches[0].clientX - this.imgStartX
      this.isImgMove = true 
      if(place < 0){
        this.imgX = (this.initImgX - this.clientWidth)
      }else{
        this.imgX = (this.initImgX + this.clientWidth)
      }
      setTimeout(() => {
        this.isImgMove = false
        this.imgX = this.initImgX = this.imgX/this.clientWidth%3*this.clientWidth
        setTimeout(() => {
          this.initNavImg()
        }, 1000);
      },1000)
    },
  }
}
</script>

<style scoped>

  ::-webkit-scrollbar{width:0px}

  .imgAnimation{
    transition:transform 1s;
  }

</style>
