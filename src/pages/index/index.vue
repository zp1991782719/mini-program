<template>
  <div class="zp-df zp-fdc zp-w100 zp-h100">
    <header class="zp-df zp-aic" style="top:0;padding:5px 10px;border-bottom:1px solid #f8f8f8;">
      <section class="zp-df zp-aic" @click="toCityPage">
        <div style="margin-right:4px;">{{ cityName }}</div>  
        <i class="iconfont iconarrowdown"></i>
      </section>
      <section class="zp-df zp-aic zp-f1 zp-jcc" @click="toSearchPage" style="padding:10px 0;">
        <i class="iconfont iconsousuo" style="margin-right:5px;"></i>
        <div style="color:#dddddd;">请输入商家名、品类或商圈...</div>
      </section>
    </header>
    <section class="zp-w100 zp-f1 zp-scrolly">
      <!-- @touchstart="touchStartImg" @touchmove="touchMoveImg" @touchend="touchEndImg" -->
      <article class="zp-w100" >
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
      <article style="padding-bottom:10px;border-bottom:10px solid #F0EFED;">
        <section style="display:grid;grid-template-columns: 1fr 1fr 1fr 1fr 1fr">
          <article v-for="(nav,i) in navs" :key="i" style="margin-top:10px;">
            <img :src="'http://129.204.192.142/img/mini_index_nav'+nav.img+'.jpg'" alt="加载失败" class="zp-tac" style="display:block;width:35px;height:35px;border-radius:50%;margin:0 auto;"/>
            <div style="margin:0 auto;text-align:center;font-size:14px;">{{ nav.name }}</div>
          </article>
        </section>
      </article>
      <article style="padding:10px 0;">
        <section class="zp-df zp-jcsa zp-tac zp-w100">
          <div v-for="(recommend,recommendIndex) in recommends" :key="recommend.title+recommendIndex" class="zp-f1">
            <div style="font-size:16px;" :style="{color:recommend.color}">{{ recommend.title }}</div>
            <div style="font-size:14px;color:#C8C6C8">{{ recommend.content }}</div>
            <img :src="'http://129.204.192.142/img/'+recommend.img+'.jpg'" alt="" style="display:block;width:50px;height:50px;border-radius:50%;margin:10px auto;"/>
          </div>
        </section>
      </article>


      <article  style="border-top:10px solid #F0EFED;padding-top:10px;">
        <div style="color:#C8C6C8;font-size:16px;" class="zp-tac">----&nbsp;&nbsp;&nbsp;猜你喜欢&nbsp;&nbsp;&nbsp;----</div>
        <div class="zp-df" v-for="favourite in favourites" :key="favourite.price" style="padding:10px 15px;" @click="toHotelPage(favourite)">
          <img class="zp-fs0 zp-dbib" :src="'http://129.204.192.142/img/'+favourite.img+'.jpg'"  style="width:80px;height:100px;"/>
          <div class="ub-f1 zp-w100" style="margin-left:15px;padding-top:10px;">
            <section class="zp-df zp-aic zp-jcsb" style="line-height:1;">
              <div class="zp-line1">{{ favourite.name }}</div>
              <div style="font-size:14px;color:#C8C6C8">{{ favourite.distance }}</div>
            </section>
            <div style="margin-top:10px;color:#C8C6C8;font-size:16px;">{{ favourite.type }}</div>
            <section class="zp-df zp-aic zp-jcsb" style="line-height:1;margin-top:10px;">
              <div style="font-size:16px;color:#5CD5BB">{{ favourite.price }}</div>
              <div style="font-size:14px;color:#C8C6C8">已售:{{ favourite.num }}</div>
            </section>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script>

import bmap from "../../lib/bmap-wx.min.js"

export default {
  components: { 
  },

  computed:{
   cityName(){
     return this.$store.state.city
   }
  },

  data () {
    return {
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
        {url:'',img:'1',name:'美食'},
        {url:'',img:'2',name:'猫眼电影'},
        {url:'',img:'3',name:'酒店住宿'},
        {url:'',img:'4',name:'休闲娱乐'},
        {url:'',img:'5',name:'外卖'},
        {url:'',img:'6',name:'KTV'},
        {url:'',img:'7',name:'丽人'},
        {url:'',img:'8',name:'景点门票'},
        {url:'',img:'9',name:'火车票'},
        {url:'',img:'10',name:'明宿'}
      ],

      recommends:[
        {title:'我们约吧',content:'恋人家人好朋友',url:'',img:'lianren',color:'green'},
        {title:'低价超值',content:'十元惠生活',url:'',img:'hanbao',color:'red'},
        {title:'午后时光',content:'懒懒下午茶',url:'',img:'xiawutiandian',color:'pink'}
      ],

      favourites:[]
    }
  },

  methods: {
    
  },

  created () {
    let Random = this.$getRandom
    
    for(let i=0;i<Random.natural(30, 60);i++){
      this.favourites.push({
        img:'favourite',
        name:Random.region()+Random.county()+'假日大酒店',
        distance:Random.float(1, 5, 0, 3)+'km',
        type:'单人自助晚餐',
        price:Random.float(200, 10000, 0, 2),
        num:Random.natural(6000, 100000)
      })    
    }
    this.currentX = -3*this.clientWidth
    this.initNavImg()
    
  },

  mounted(){
    wx.setNavigationBarTitle({
      title: '首页'
    })

    var BMap = new bmap.BMapWX({
      ak: "335Tyss9G8GlZclywPq9MP18nn8a1vto"
    });

    let vm = this;
    wx.getLocation({
      type: "wgs84",
      success(res) {
        const latitude = res.latitude;
        const longitude = res.longitude;
        const wxMarkerData = {
          latitude: latitude,
          longitude: longitude
        };
        // 发起regeocoding检索请求
        BMap.regeocoding({
          success: res => {
            let addressComponent = res.originalData.result.addressComponent;
            //vm.cityName = addressComponent.city;
            let city = addressComponent.city
            vm.$store.commit('setCity',city)
          }
        });
      }
    });
  },

  methods:{
    initNavImg(){
      this.imgInterval = setInterval(()=> {
        if(!this.isAutoWork){ 
          this.isAutoWork = true
          return
        }
        this.isOpenAnimation = true
        this.currentX -= this.clientWidth
        setTimeout(() => {
          if(this.currentX <= -5*this.clientWidth){
            this.currentX = -2*this.clientWidth
          }
          this.isOpenAnimation = false
        }, 1000)
      },this.imgRepeatTime)
    },

    chooseImg(index){
      clearInterval(this.imgInterval)
      this.isOpenAnimation = true
      this.currentX = (-3 - index) * this.clientWidth
      if(this.currentX <= -5*this.clientWidth){
        this.currentX = -2*this.clientWidth
      }
      this.isAutoWork = false
      this.initNavImg()
    },

    touchStartImg(e){
      if(this.isOpenAnimation) return
      clearInterval(this.imgInterval)
      this.isOpenAnimation = false
      if(this.currentX<=-5*this.clientWidth){
        this.currentX = -2*this.clientWidth
      }else if(this.currentX>=0){
        this.currentX = -3*this.clientWidth
      }
      this.touchStartX = e.touches[0].clientX
      this.touchStartImgX = this.currentX
    },

    touchMoveImg(e){
      if(this.isOpenAnimation) return
      this.currentX = this.touchStartImgX + e.touches[0].clientX - this.touchStartX
    },

    touchEndImg(e){
      if(this.isOpenAnimation) return
      if(this.imgInterval){
        clearInterval(this.imgInterval)
      }
      let touchEndX = e.mp.changedTouches[0].clientX
      let touchMovePlace = touchEndX - this.touchStartX
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

    toCityPage(){
      wx.navigateTo({
        url: '/pages/city/main',
      })
    },

    toSearchPage(){
      wx.navigateTo({
        url: '/pages/search/main',
      })
    },

    toHotelPage(favourite){
      let o = favourite
      wx.navigateTo({
        url: '/pages/hotelDetails/main?params='+JSON.stringify(o),
      })
    }
  }
}
</script>

<style scoped>

.zp{
    width:100px;
    height:100px;
    overflow:hidden;
  }

  ::-webkit-scrollbar{width:0px}

  

</style>
