<template>
  <div class="zp-w100 zp-h100">
    <header class="zp-df zp-aic" style="padding:5px 10px;border-bottom:1px solid #f8f8f8;">
      <section class="zp-df zp-aic">
        <div style="margin-right:10px;">{{ cityName }}</div>  
        <i class="iconfont iconarrowdown"></i>
      </section>
      <section class="zp-df zp-aic zp-f1 zp-jcc">
        <i class="iconfont iconsousuo" style="margin-right:5px;"></i>
        <mp-input placeholder="请输入商家名、品类或商圈..." v-model="inputValue" @focus="inputFocus"></mp-input>
      </section>
    </header>
    <div v-for="(i,key) in 100" :key="key"> 
      {{ i }}
    </div>
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
      cityName:'杭州'
    }
  },

  methods: {
    
  },

  created () {
    // let app = getApp()
    let random = Mock.Random
    console.log(Mock)
    
  },

  mounted(){
    wx.setNavigationBarTitle({
      title: '首页呦'
    })
  }
}
</script>

<style scoped>

</style>
