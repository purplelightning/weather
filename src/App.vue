<template>
  <div id="app">
    <mheader></mheader>
    <router-view></router-view>
  </div>
</template>

<script>
  import mheader from 'components/mheader/mheader'

  export default {
    name: 'app',
    components: {
      mheader
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
