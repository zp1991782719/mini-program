import Vue from 'vue'
import App from './App'

import './assets/css/mycss.css'
import 'mpvue-weui/src/style/weui.css'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
