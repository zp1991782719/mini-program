import Vue from 'vue'
import App from './App'

import './assets/css/iconfont.css'
import 'mpvue-weui/src/style/weui.css'
import './assets/css/mycss.css'

import "./plugins/mock/index.js"


Vue.config.productionTip = false
App.mpType = 'app'

// 主要色调 #409EFF

const app = new Vue(App)


wx.getSystemInfo({
  success:(res) => {
    Vue.prototype.$getSysWidth = res.screenWidth
    Vue.prototype.$getSysHeight= res.screenHeight
  },

  fail:(res) => {
    Vue.prototype.$getSysInfo = res
  }
})

app.$mount()


