import Vue from 'vue'
import App from './App'

import './assets/css/iconfont.css'
import 'mpvue-weui/src/style/weui.css'
import './assets/css/mycss.css'

import Mock from 'mockjs'



Vue.config.productionTip = false
App.mpType = 'app'

// 主要色调 #409EFF

const app = new Vue(App)

Vue.prototype.$getRandom = Mock.Random
wx.getSystemInfo({
  success:(res) => {
    Vue.prototype.$getSysWidth = res.screenWidth
    Vue.prototype.$getSysHeight= res.screenHeight
  },

  fail:(res) => {
    Vue.prototype.$getSysInfo = res
  }
})
Vue.prototype.$toast = (title,icon='none') => {
  wx.showToast({
    title:title+'',
    icon:icon
  })
}
Vue.prototype.$title = (title) => {
  wx.setNavigationBarTitle({
    title: title+''
  })
}




app.$mount()


