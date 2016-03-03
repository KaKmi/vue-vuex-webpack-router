import Vue from 'vue'
import VueRouter from 'vue-router'
import routerConfig  from './route/routerCfg'
import App from './App.vue'


Vue.use(VueRouter);
Vue.config.debug = true;
var router = new VueRouter({
  history:true,
  saveScrollPosition:false
})

routerConfig(router);

router.start(App,'#app');
