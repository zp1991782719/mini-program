<template>
  <div>
    <section class="zp-df zp-aic" style="margin:10px">
      <i class="iconfont iconsousuo" style="margin-right:10px;"></i> 
      <input placeholder-style="color:#dddddd" placeholder="城市/拼音" />
    </section>
    <section class="zp-fwb" style="padding-left:10px;">
      当前位置:&nbsp;{{ currentPlace }}
    </section>
  </div>
</template>

<script>

  import bmap from '../../lib/bmap-wx.min.js'

  export default {
    mixins: [
    ],

    components: {

    },

    props: {

    },

    data() {
      return {
        currentPlace:'',
      }
    },

    computed: {

    },

    watch: {

    },

    created() {
      
    },

    mounted() {
      var BMap = new bmap.BMapWX({
        ak: '335Tyss9G8GlZclywPq9MP18nn8a1vto'
      });
      
      let vm = this
      //BMapWX
      vm.$title('选择城市')
      wx.getLocation({
        type: 'wgs84',
        success (res) {
          const latitude = res.latitude
          const longitude = res.longitude
          const wxMarkerData = {
            latitude:latitude,
            longitude:longitude
          }
          // 发起regeocoding检索请求 
          BMap.regeocoding({ 
            success: res => {
              let addressComponent = res.originalData.result.addressComponent
              vm.currentPlace = addressComponent.province + addressComponent.city
            }
          }); 

        }
      })
    },

    destroyed() {

    },

    methods: {

    }
  }
</script>

<style scoped>

 
</style>
