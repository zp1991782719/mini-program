<template>
  <div style="width:100%;height:100%;">
    <div>
      <h1>the pig is hited {{nums}} times</h1>
    </div>
    <div style="padding:10px;" @click="hitPig">click me hit the pig</div>
  </div>
</template>

<script>
export default {
  name:'ZP',

  data() {
    return {
      nums: 0
    }
  },

  methods: {
    hitPig(){
      this.nums++
    }
  }
};
</script>

<style>

</style>