<template>
  <div>
    <section v-if="params">
      <div class="zp-pr" style="height:150px;background-size:contain;" :style="{'background-image':'url(http://129.204.192.142/img/'+params.img+'.jpg)'}">
        <div class="zp-pa" style="bottom:10px;left:10px;color:white;">
          <div>{{ params.name }}</div>
          <div>{{ params.type }}</div>
        </div>
      </div>

      <section style="padding:10px;">
        <div class="zp-df zp-aic zp-jcsb">
          <div><span class="zp-fs20" style="color:#91CDC3">￥{{ params.price }}</span><span class="zp-fs14" style="color:#999;margin-left:5px">门市价:￥{{ params.price*2 }}</span></div>
          <div class="zp-fs0" style="padding:10px 20px;background-color:#FF9C08;color:white;">立即抢购</div>
        </div>

        <div class="zp-df zp-aic zp-jcsb" style="margin-top:10px;color:#999;">
          <div class="zp-df zp-aic">
            <i class="iconfont iconyanjing"></i>
            <div class="zp-fz14">过期自动退</div>
          </div>
          <div class="zp-df zp-aic">
            <i class="iconfont iconhuabanfuben"></i>
            <div>已售{{ params.num }}</div>
          </div>
        </div>
      </section>

      <section style="padding:10px;color:#999;">
        <div class="zp-df zp-aic zp-jcsb">
          <div class="zp-df zp-aic">
            <div v-for="i in 5" :key="i">
              <i class="iconfont iconxingxing" :style="{color:i<4?'orange':'#999'}"></i>
            </div>
          </div>
          <div class="zp-df zp-aic"><div>6条评论</div><i class="iconfont iconarrow"></i></div>
        </div>
        <div class="zp-df zp-fs0 zp-fww zp-fs16">
          <div v-for="(opinion,key) in opinions" 
              :key="opinion.text" 
              :style="{color:key<4?'orange':'',border:key<4?'1px solid orange':''}" 
              style="padding:5px 10px;margin-top:5px;margin-right:5px;">
            {{ opinion.text }}{{ opinion.value }}
          </div>
        </div>
      </section>

      <section style="border-top:10px solid #f8f8f8;padding:10px;">
          <div class="zp-fs16" style="color:#999;">商家信息</div>
          <div class="zp-df zp-aic zp-jcsb">
            <div>
              <div style="margin:10px 0 5px 0;">{{ params.name }}</div>
              <div>江西省宜春市高安市龙潭镇龙潭街111号</div>
            </div>
            <i class="zp-fs0 iconfont icondianhua1 zp-fs28" style="color:green;"></i>
          </div>
      </section>

      <section style="border-top:10px solid #f8f8f8;padding:10px;">
        <div class="zp-fs16" style="color:#999;">套餐</div>
        <div class="zp-df zp-aic zp-jcsb">
          <div style="margin:10px 0 5px 0;">{{ params.type }}</div>
          <div>一位${{ params.price }}</div>
        </div>
      </section>

      <section style="border-top:3px solid #f8f8f8;padding:10px;" class="zp-fs16">
        <div class="zp-tac" style="color:#999;">备注</div>
        <div style="margin-top:3px;">单人自助晚餐: 周一至周四18:00-21:00</div>
        <div style="margin-top:3px;">餐厅预定入口:http://129.204.192.142</div>
        <div style="margin-top:3px;">锦厨国际餐厅位于昆明索菲特大酒店49喽，能够360度鸟看春城美景</div>
        <div>英国洲际酒店集团是一家全球领先的酒店管理公司，拥有众多闻名遐迩的酒店品牌，其中包括洲际®酒店及度假村、金普顿®酒店及餐厅、英迪格酒店®、逸衡®酒店、华邑®酒店及度假村、皇冠假日®酒店及度假村、假日®酒店、假日度假酒店®以及智选假日酒店®等。<br/>洲际酒店集团旗下特许经营、租赁、委托管理和拥有的酒店超过5,000多家，遍布全球近100个国家和地区。</div>
      </section>

      <section style="border-top:3px solid #f8f8f8;padding:10px;">
        <div></div>
      </section>

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
        params:null,
        opinions:[
          {text:'海鲜棒',value:202},
          {text:'回头客',value:91},
          {text:'干净卫生',value:40},
          {text:'上菜快',value:22},
          {text:'不推荐',value:29},
          {text:'家庭聚餐',value:13},
          {text:'朋友聚餐',value:9},
          {text:'闺蜜聚会',value:5},
          {text:'现做现卖',value:4},
          {text:'请客',value:4}
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
      this.params = JSON.parse(this.$root.$mp.query.params)
      this.$title(this.params.name)
    },

    destroyed() {

    },

    methods: {

    }
  }
</script>

<style scoped>

 
</style>
