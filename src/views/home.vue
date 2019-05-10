<template>
    <div>
     首页
     <mt-swipe :auto="4000">
  <mt-swipe-item class="swi">1</mt-swipe-item>
  <mt-swipe-item>2</mt-swipe-item>
  <mt-swipe-item>3</mt-swipe-item>
</mt-swipe>
     <button ><router-link to='/login'>登录</router-link></button>
     <button data-router="/login">111</button>
    </div>
</template>

<script>
export default {
    name:'home'
}
</script>

<style lang="less" scoped>

</style>
