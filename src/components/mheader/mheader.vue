<template>
<div id="mheader">
  <router-link to="/home" class="tab">主页</router-link>
  <router-link to="/weather" class="tab">天气预报</router-link>
  <router-link to="/fun" class="tab">Fun</router-link>
</div>

</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
#mheader
  display: flex
  width: 100%
  height:60px
  box-sizing:border-box
  background: #eee
  border-top:1px solid red
  border-left:1px solid red
  border-right:1px solid red
  .tab
    flex:1
    line-height:60px
    text-align: center
    font-size:18px
    color:red
    &.active
      background: #3ffff3;

</style>
