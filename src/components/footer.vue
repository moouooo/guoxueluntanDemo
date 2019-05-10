<template>
    <div class="footer">
 <mt-tabbar v-model="selected" :fixed="fixed">
            <mt-tab-item id="home" data-router="/home" @click.native="toggle">
            <img slot="icon" :src="icons.home">
            首页
            </mt-tab-item>

            <mt-tab-item id="classify" data-router="/classify" @click.native="toggle">
            <img slot="icon" :src="icons.classify">
            分类
            </mt-tab-item>
           <img src="plus" alt="">
          <!-- <router-link to="/new">
          <i src="./src/assets/footer/plus.svg"/>
          </router-link> -->
            <mt-tab-item id="message" data-router="/message" @click.native="toggle">
            <img slot="icon" :src="icons.message">
            信息
            </mt-tab-item>

            <mt-tab-item id="mine" data-router="/mine" @click.native="toggle">
            <img slot="icon" :src="icons.mine">
            我的
            </mt-tab-item>
    </mt-tabbar>
</div>   
</template>

<script>
export default {
  name:'FooterDiv', 
  data(){
    return {
      plus:'./src/assets/footer/plus.svg',
      selected:"home",
      fixed:true,
      icons:{
          home:require("../assets/footer/home-1.svg"),
          classify:require("../assets/footer/classify-0.svg"),
          message:require("../assets/footer/message-0.svg"),
          mine:require("../assets/footer/mine-0.svg"),
      }
    }
  },
  methods:{
      toggle(){
          var target=event.target;
          if(target.tagName=='DIV'){
              target=target.parentNode;
          }
          if(target.tagName=='IMG'){
              target=target.parentNode.parentNode;
          }
          var router=target.dataset.router;
          this.$router.push(router)
      }
  },

  watch: {
    selected(newValue, oldValue){
      this.icons[oldValue] = require(`../assets/footer/${oldValue}-0.svg`);
      this.icons[newValue] = require(`../assets/footer/${newValue}-1.svg`);
      this.$router.push(newValue)
    
    }
  }
};
</script>

<style scoped>
.footer{
  font-size: 16px;
  color: #6A6A6A;
}
.mt-tab-item.is-selected{
  color: red !important;
}
</style>

