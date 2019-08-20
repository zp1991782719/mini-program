<template>
  <div class="zp-w100 zp-h100" >
    order page is to know
  </div>
</template>

<script>


export default {
  components: { 
  },

  data () {
    return {
      inputValue:'',
      isFresh:false,
      isLoading:false,
      isEnd:false,
      list:[],
      page:1,
      rows:20
    }
  },

  onPullDownRefresh: function() {
    // 触发下拉刷新时执行
    console.log('fresh');
  },

  created () {
    let Random = this.$getRandom

  },

  mounted(){
    wx.setNavigationBarTitle({
      title: '订单'
    })
  },

  methods: {
    initData(){
      this.list = false
      this.isEnd = false
    }
  },
}
</script>

<style scoped>

</style>
