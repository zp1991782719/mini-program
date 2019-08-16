<template>
  <div>
    <section class="zp-df zp-aic" style="padding:10px 15px">
      <i class="iconfont iconsousuo"></i>
      <input class="zp-f1"  placeholder="巧克力的打打个大西瓜" style="margin:0 5px;" v-model="searchKey" @input="search"/>
      <div @click="toBack" style="color:#9FCEC8;">取消</div>
    </section>

    <section v-if="!isShowResult" style="padding:10px 15px;">
      <div style="color:#AFB0B1;">猜你喜欢</div>
      <div class="zp-df zp-fww zp-fs14" style="padding:0 10px;">
        <div v-for="(gue,key) in guess" :key="gue+key" style="margin-right:10px;margin-top:20px;">{{ gue }}</div>
      </div>

      <div class="zp-df zp-jcsb zp-aic" style="color:#AFB0B1;margin-top:20px;">
        <div>历史搜索</div>
        <div><i class="iconfont iconshanchu"></i></div>
      </div>
      <div class="zp-df zp-fww zp-fs14" style="padding:0 10px;">
        <div v-for="(his,key) in hisSearch" :key="his+'-'+key" style="margin-right:10px;margin-top:20px;">{{ his }}</div>
      </div>
    </section>

    <section v-else style="margin-top:15px;">
      <div class="zp-df zp-aic" style="padding:10px 20px;" v-for="(res,key) in searchResult" :key="res+'|'+key">
        <i class="iconfont iconsousuo"></i>
        <div class="zp-f1 zp-fs14" style="margin-left:10px;">{{ res.text }}</div>
        <div class="zp-fs14" style="color:#dddddd;">约{{ res.num }}个结果</div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    mixins: [
    ],

    components: {

    },

    props: {

    },

    data() {
      return {
        searchKey:'',
        isShowResult:false,
        guess:['北京欢乐谷','故宫博物馆','北京野生动物园','古北水镇','八达岭长城','北京海洋馆'],
        hisSearch:['北京欢乐谷','故宫博物馆'],
        searchResult:[],
        result:[
          {text:'我的上帝',value:1,num:4},
          {text:'我的鸡腿',value:2,num:10},
          {text:'我的鸭脖子',value:3,num:1},
          {text:'我的饼干',value:4,num:8},
          {text:'我的辣条',value:5,num:6},
          {text:'我的奶茶',value:6,num:3},
          {text:'我的优乐美',value:7,num:7}
        ]
      }
    },

    computed: {

    },

    watch: {

    },

    created() {

    },

    mounted() {
      this.$title('搜索')
    },

    destroyed() {

    },

    methods: {
      search(e){
        let value = e.target.value
        this.isShowResult = !!value
        if(this.isShowResult){
          this.searchResult = []
          this.result.forEach(element => {
            if(element.text.indexOf(value)!=-1){
              this.searchResult.push(element)
            }
          })
        }
      },

      toBack(){
        wx.navigateBack({
          url:'/pages/index/main',
          delta: 1
        })
      }
    }
  }
</script>

<style scoped>

 
</style>
