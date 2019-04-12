<template>
  <div>
    <h1>this is my first mini-app</h1>
    <ZP />
  </div>
</template>

<script>

import ZP from '@/components/zp.vue'

export default {
  components: { 
    ZP 
  },

  data () {
    return {
      
    }
  },

  methods: {
    
  },

  created () {
    // let app = getApp()
    wx.showToast({
      title: ZP.name,
      icon: 'success',
      duration: 2000
    })
  },
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all{
  width:7.5rem;
  height:1rem;
  background-color:blue;
}
.all:after{
  display:block;
  content:'';
  clear:both;
}
.left{
  float:left;
  width:3rem;
  height:1rem;
  background-color:red;
}

.right{
  float:left;
  width:4.5rem;
  height:1rem;
  background-color:green;
}
</style>
