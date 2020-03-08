<template>
  <div class="aaa">{{aaa}}</div>
</template>

<script>
export default {
  data(){
    return {
      aaa: '你？'
    }
  },
  mounted(){
    console.log('======');
    
  }
}
</script>
<style lang="scss" scoped>
  .aaa{
    background: red;
  }
</style>