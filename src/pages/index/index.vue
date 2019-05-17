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
        <div class="zp-df" style="width:600%;overflow:hidden;" :style="{transform:'translateX('+currentX+'px)',transition:isOpenAnimation?'transform 1s':'transform 0s'}">
          <img :src="'http://129.204.192.142/img/mini_'+img+'.jpg'"  v-for="(img,imgIndex) in imgs" :key="imgIndex" class="zp-f1" style="background-size:contain;"/>
        </div>
      </article>
      <section class="zp-df zp-jcsb zp-pr" style="top:-20px;width:80px;margin:0 auto;">
        <div v-for="(imgo,imgFlagIndex) in imgs.length/2" 
          :key="imgFlagIndex"  
          :style="{'background-color':imgFlagIndex===(currentX/-clientWidth)%3?'#409EFF':'white'}" 
          style="width:10px;height:10px;border-radius:50%;"
          @click="chooseImg(imgFlagIndex)"
        >
        </div>
      </section>
      <article>
        <section style="display:grid;grid-template-columns: 1fr 1fr 1fr 1fr 1fr">
          <div v-for="i in 6" :key="i">{{ i }}</div>
        </section>
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

  computed:{
   
  },

  data () {
    return {
      inputValue:'',
      cityName:'杭州',
      clientWidth:this.$getSysWidth,  //这是屏幕宽度
      imgs:['index1','index2','index3','index1','index2','index3'],   // 3张图片   但是有手势滑动  需6张
      currentX:0,       //当前的图片位置
      isOpenAnimation:false,  //是否开启动画效果
      imgRepeatTime:3000,   //ms
      imgInterval:0,
      touchStartX:0,      //手势与屏幕距离
      touchStartImgX:0,   //触屏时图片的位置
      isAutoWork:true,     //手势移动后图片不用进行操作
      navs:[
        {url:'',img:'index1',name:'美食'},
        {url:'',img:'index1',name:'猫眼电影'},
        {url:'',img:'index1',name:'酒店住宿'},
        {url:'',img:'index1',name:'休闲娱乐'},
        {url:'',img:'index1',name:'外卖'},
        {url:'',img:'index1',name:'KTV'},
        {url:'',img:'index1',name:'丽人'},
        {url:'',img:'index1',name:'景点门票'},
        {url:'',img:'index1',name:'火车票'},
        {url:'',img:'index1',name:'明宿'}
      ]
    }
  },

  methods: {
    
  },

  created () {
    this.currentX = -3*this.clientWidth
    this.initNavImg()
  },

  mounted(){
    wx.setNavigationBarTitle({
      title: '首页呦'
    })
  },

  methods:{
    initNavImg(){
      this.imgInterval = setInterval(()=> {
        if(!this.isAutoWork){ 
          this.isAutoWork = true
          return
        }
        this.isOpenAnimation = false
        if(this.currentX <= -5*this.clientWidth){
          this.currentX = -2*this.clientWidth
        }
        setTimeout(() => {
          this.isOpenAnimation = true
          this.currentX -= this.clientWidth
        }, 1000);
      },this.imgRepeatTime)
    },

    chooseImg(index){
      clearInterval(this.imgInterval)
      this.isOpenAnimation = true
      this.currentX = (-3 - index) * this.clientWidth
      this.isAutoWork = false
      this.initNavImg()
    },

    touchStartImg(e){
      if(this.isOpenAnimation) return
      clearInterval(this.imgInterval)
      this.isOpenAnimation = false
      this.touchStartX = e.touches[0].clientX
      this.touchStartImgX = this.currentX
    },

    touchMoveImg(e){
      this.currentX = this.touchStartImgX + e.touches[0].clientX - this.touchStartX
    },

    touchEndImg(e){
      let touchEndX = e.mp.changedTouches[0].clientX
      let touchMovePlace = touchEndX-this.touchStartX
      this.isOpenAnimation = true
      if(touchMovePlace>0){
        this.currentX = this.touchStartImgX + this.clientWidth
        setTimeout(() => {
          this.isOpenAnimation = false
          if(this.currentX>=0){
            this.currentX = -3*this.clientWidth
          }
          this.isAutoWork = false
          this.initNavImg()
        }, 1000);
      }else if(touchMovePlace<0){
        this.currentX = this.touchStartImgX - this.clientWidth
        setTimeout(() => {
          this.isOpenAnimation = false
          if(this.currentX<=-5*this.clientWidth){
            this.currentX = -2*this.clientWidth
          }
          this.isAutoWork = false
          this.initNavImg()
        }, 1000);
      }else{
        this.isAutoWork = false
        this.isOpenAnimation = false
        this.initNavImg()
      }
    },
  }
}
</script>

<style scoped>

  ::-webkit-scrollbar{width:0px}

</style>
