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
        <div :class="{imgAnimation:isImgMove}" class="zp-df" style="width:300%;overflow:hidden;" :style="{transform:'translateX('+imgX+'px)'}">
          <img :src="'/static/img/'+img+'.jpg'"  v-for="(img,imgIndex) in imgs" :key="imgIndex" class="zp-f1" style="background-size:contain;"/>
        </div>
      </article>
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

  data () {
    return {
      inputValue:'',
      cityName:'杭州',
      imgs:['index1','index2','index3'],
      imgX:0,
      imgStartX:0,
      imgSwitchSpeend:2000,  //ms
      isImgMove:false,       //是否移动
      imgInterval:'',        
      colors:['red','green','blue'],
    }
  },

  methods: {
    
  },

  created () {
    this.imgX = -this.$getSysWidth
    this.imgInterval = setInterval(() => {
      this.isImgMove = true
      this.imgX = 2*-this.$getSysWidth
      setTimeout(() => {
        this.imgGo(true)
        this.isImgMove = false
        this.imgX = -this.$getSysWidth
      }, 1200);
    }, this.imgSwitchSpeend)
  },

  mounted(){
    wx.setNavigationBarTitle({
      title: '首页呦'
    })
  },

  methods:{
    touchStartImg(e){
      clearInterval(this.imgInterval)
      this.isImgMove = false
      this.imgStartX = e.touches[0].clientX
      console.log(e.touches[0].clientX)
    },

    touchMoveImg(e){
      this.imgX = -this.$getSysWidth + e.touches[0].clientX - this.imgStartX
      console.log('move:'+e.touches[0].clientX)
    },

    touchEndImg(e){
      let endx = e.mp.changedTouches[0].clientX
      this.isImgMove = true 
      let goNext = true
      if((endx - this.imgStartX) < 0){
        this.imgX = 2*-this.$getSysWidth
      }else{
        goNext = false
        this.imgX = 0
      }
      setTimeout(() => {
        this.isImgMove = false
        this.imgGo(goNext)
        this.imgX = -this.$getSysWidth
      }, this.imgSwitchSpeend);
     
      return 
      this.imgInterval = setInterval(() => {
        this.isImgMove = true
        this.imgX = 2*-this.$getSysWidth
        setTimeout(() => {
          this.imgGo(true)
          this.isImgMove = false
          this.imgX = -this.$getSysWidth
        }, this.imgSwitchSpeend-this.imgStopTime);
      }, this.imgSwitchSpeend)
    },

    imgGo(flag){
      let arr = this.imgs.slice(0,this.imgs.length)
      if(flag){
        let t =  arr.shift()
        arr.push(t)
      }else{
        let t = arr.pop()
        arr.unshift(t)
      }
      this.imgs = arr
    }
  }
}
</script>

<style scoped>

  ::-webkit-scrollbar{width:0px}

  .imgAnimation{
    transition:transform 800ms ease-in-out;
  }

</style>
