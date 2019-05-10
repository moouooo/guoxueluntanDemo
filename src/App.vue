<template>
  <div id="app">
    <mt-header  title="测试">
      <mt-button @click="publish" icon="more" slot="right">new</mt-button>
    </mt-header>
    <router-view />
<footer-div></footer-div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
<script>
 import { Header } from 'mint-ui';
 import {button} from 'mint-ui';
  import axios from "axios";

  import FooterDiv from "./components/footer.vue";
  export default {
    name: "app",
    components: {
      FooterDiv
    },
    mounted(){
      axios.get(
        'http://localhost:3000/test',
        {Header:{"Content-Type":""}}).then(function(res){
          console.log(res.date)
        })
    },
    methods:{
      publish(){
        this.$router.push('/new')
      }
    }
    
  }
</script>
