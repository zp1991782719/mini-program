<template>
  <div class="zp-w100 zp-h100" >
    this is my page
  </div>
</template>

<script>


export default {
  components: { 
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
