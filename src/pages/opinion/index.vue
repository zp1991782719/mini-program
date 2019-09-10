<template>
  <div>
    <div class="zp-df zp-aic zp-jcsa" style="padding:7px 2px;">
      <div v-for="(tab,key) in tabs" :key="key" @click="changeTab(tab,key)">
        <div class="zp-dib" style="padding:4px;" :style="{'color':key==tabIndex?'#48BBA8':'','border-bottom':key==tabIndex?'3px solid #48BBA8':'3px solid white'}">{{ tab.name }}({{ tab.nums || 0 }})</div>
      </div>
    </div>

    <div v-for="(j,key) in tabs[tabIndex].nums" :key="j+key" style="margin-top:20px;padding:10px 20px;">
      <div class="zp-df zp-jcsb">
        <img
          class="zp-fs0"
          src="http://129.204.192.142/img/1.jpg"
          style="width:40px;height:40px;border-radius:50%;"
        />
        <div class="ub-f1">
          <div class="zp-df zp-jcsb">
            <div style="padding:0 10px;" class="zp-bsbb">
              <div>编号pc12138</div>
              <div class="zp-df">
                <div v-for="(i,index) in 5" :key="i+index">
                  <i class="iconfont iconxingxing" :style="{color:i<4?'orange':'#999'}"></i>
                </div>
              </div>
            </div>
            <div>2019-01-02</div>
          </div>
          <div
            class="zp-fs13"
            style="padding-left:10px;padding-top:5px;"
          >味道真的不错，朋友都喜欢吃。今天还是比较幸运的，去了没有排队，坐下之后人瞬间好多。不过感觉涮菜吃的时候有点咸了，不过量绝对是够的。</div>
        </div>
      </div>
    </div>
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
        tabIndex:0,
        tabs:[
          {id:'all',name:'全部',nums:6},
          {id:'seeimg',name:'晒图',nums:3},
          {id:'lowwer',name:'低分',nums:2},
          {id:'new',name:'最新',nums:1}
        ],
        list:[]
      } 
    },

    computed: {

    },

    watch: {

    },

    created() {
      
    },

    mounted() {
      this.$title('用户评价!');
    },

    destroyed() {

    },

    methods: {
      changeTab(tab,key){
        this.tabIndex = key
      }
    }
  }
</script>

<style scoped>

 
</style>
