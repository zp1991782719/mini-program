<template>
  <div class="zp-w100 zp-h100" >
    <section class="zp-df zp-aic zp-bsbb zp-jcsb" style="padding:20px;border-bottom:10px solid #f8f8f8;">
      <div class="ub ub-ac">
        <div style="width:50px;height:50px;background-color:#f8f8f8;border-radius:50%;margin-right:10px;"></div>
        <div v-if="isLogin">
          <div>姓名</div>
          <div>地址性别</div>
        </div>
      </div>
      
      <div :style="{'color':isLogin?'#23B9A6':'white','background-color':isLogin?'':'#F8551A',border:isLogin?'1px solid #23B9A6':''}" style="padding:8px 15px;border-radius:4px;">登录</div>
    </section>
    
    <section>
      <div class="zp-df zp-aic zp-jcsb" v-for="(sec,key) in sections" :key="sec+key" style="padding:10px 20px;border-bottom:1px solid #f8f8f8;color:#7A787A;">
        <div class="zp-df zp-aic">
          <i class="iconfont" :class="[sec.icon]" style="font-size:18px;margin-right:3px;color:#23B9A6;"></i>
          <div>{{ sec.text }}</div>
        </div>
        <i class="iconfont iconarrow" style="font-size:18px;"></i>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  components: { 
  },

  data () {
    return {
      inputValue:'',
      isLogin:false,
      sections:[
        {text:'我的订单',value:'',icon:'icondingdan'},
        {text:'我的卷包',value:'',icon:'iconicon-test'},
        {text:'我的抽奖',value:'',icon:'iconjinqian'},
        {text:'客服电话: 17764563832',value:'',icon:'icondianhua'}
      ]
    }
  },

  methods: {
    
  },

  created () {
    // let app = getApp()
  },

  mounted(){
    wx.setNavigationBarTitle({
      title: '我的'
    })

    wx.request({
        url: 'http://192.168.1.66:8888/hello',
        data: {
          code: 123
        }
    })
  }
}
</script>

<style scoped>

</style>
