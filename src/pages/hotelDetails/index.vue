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
          <div><span class="zp-fs20" style="color:#91CDC3">￥{{ params.price }}</span><span class="zp-fs14" style="color:#dddddd;margin-left:5px">门市价:￥{{ params.price*2 }}</span></div>
          <div class="zp-fs0" style="padding:10px 20px;background-color:#FF9C08;color:white;">立即抢购</div>
        </div>

        <div class="zp-df zp-aic zp-jcsb">
          <div>\</div>
          <div></div>
        </div>
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
        params:null
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
