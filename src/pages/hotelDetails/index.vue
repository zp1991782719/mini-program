<template>
  <div>
    <section v-if="params">
      <div class="zp-pr" style="height:150px;background-size:contain;" :style="{'background-image':'url(http://129.204.192.142/img/'+params.img+'.jpg)'}">
        <div class="zp-pa" style="bottom:10px;left:10px;color:white;">
          <div>{{ params.name }}</div>
          <div>{{ params.type }}</div>
        </div>
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
