<template>
  <div class="zp-w100 zp-h100" >
    <section class="zp-df zp-aic zp-bsbb zp-jcsb" style="padding:20px;border-bottom:10px solid #f8f8f8;">
      <div class="zp-df">
        <img :src="userInfo.url" style="width:50px;height:50px;background-color:#f8f8f8;border-radius:50%;margin-right:10px;" />
        <div v-if="isLogin">
          <div>{{ userInfo.nickName }}</div>
          <div>{{ userInfo.province }} {{ userInfo.city }}&nbsp;&nbsp;&nbsp;&nbsp;{{ userInfo.gender==1?'男':'女' }}</div>
        </div>
      </div>
      <div @click="toLogin"  style="border-radius:4px;"><button open-type="getUserInfo" :style="{'color':isLogin?'#23B9A6':'white','background-color':isLogin?'':'#F8551A',border:isLogin?'1px solid #23B9A6':''}">{{ isLogin?'退出':'登录'}}</button></div>
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
      userInfo:{},
      inputValue:'',
      isLogin:false,
      wxSetting:{},
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

    wx.login({
      success (res) {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: "http://192.168.1.66:8888/hello",
            data: {
              code: res.code
            },
          })
        } else {
          this.$toast('登录失败！' + res.errMsg)
        }
      }
    })
  },

  methods:{
    toLogin(){
      let vm = this
      wx.getSetting({
        success (res) {
          vm.wxSetting = res
          if(!res.authSetting['scope.userInfo']){
            wx.authorize({
              scope:'scope.userInfo',
              success (res2){
                vm.getUserInfo()
              }
            })
          }else{
            vm.getUserInfo()
          }
        }
      })
    },

    getUserInfo(){
      let vm = this
      if(!vm.isLogin){
        wx.getUserInfo({
          lang:'zh_CN',
          success(res){
            vm.isLogin = true
            vm.userInfo.nickName = res.userInfo.nickName
            vm.userInfo.province = res.userInfo.province
            vm.userInfo.city = res.userInfo.city
            vm.userInfo.gender = res.userInfo.gender
            vm.userInfo.url = res.userInfo.avatarUrl
          }
       }) 
      }else{
        vm.isLogin = false
        vm.userInfo = {}
      }
    }
  }
}
</script>

<style scoped>

</style>
