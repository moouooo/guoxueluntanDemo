import Vue from "vue";
import axios from "axios";
import VueAxios from 'vue-axios';
import App from "./App.vue";
import $ from "jquery";
import router from "./router";
import store from "./store";

import Mint from "mint-ui";

import "mint-ui/lib/style.css";
import "./assets/iconfont/iconfont.css";
// 引入自定义样式
import "../src/styles/myui.css"
import { Header } from "mint-ui";
import { Button } from 'mint-ui';
import { Picker } from 'mint-ui';

// import mui from 'mui/source/js/mui.js';
// Vue.prototype.$mui=mui;
// mui无法通过vscode使用
Vue.component(Picker.name, Picker);
Vue.component(Button.name, Button);
Vue.component(Header.name, Header);
Vue.use(VueAxios,axios);
Vue.prototype.$axios=axios;
Vue.use($);
Vue.use(Mint);

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
