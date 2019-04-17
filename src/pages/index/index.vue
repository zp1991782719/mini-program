<template>
  <div class="zp-w100 zp-h100" >
    <h1>this is my first mini-app</h1>
    <div style="padding:0 15px;">
      <mp-input placeholder="数据双向绑定" v-model="inputValue"></mp-input>
    </div>
    <div contenteditable="true" style="border:1px solid red;min-height:30px;max-height:100px;">test</div>
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
      title: 'title'
    })
  }
}
</script>

<style scoped>

</style>
