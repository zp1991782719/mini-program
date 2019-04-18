<template>
  <div class="zp-w100 zp-h100" >
    this is my page
  </div>
</template>

<script>

import mpInput from 'mpvue-weui/src/input'

export default {
  components: { 
    mpInput
  },

  data () {
    return {
      inputValue:''
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
  }
}
</script>

<style scoped>

</style>
