import Vue from 'vue'
import VueRouter from 'vue-router'
import routerConfig  from './route/routerCfg'
import ajaxplugin from 'vue-resource'
import App from './App.vue'


Vue.use(VueRouter);
Vue.use(ajaxplugin);
Vue.config.debug = true;
var router = new VueRouter({
  history:true,
  saveScrollPosition:false,
})

routerConfig(router);

router.start(App,'#app');
