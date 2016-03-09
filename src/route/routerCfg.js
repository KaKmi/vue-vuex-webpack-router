/**
 * Created by Jared on 16/3/3.
 */
const RouterConfig = function(router){
  router.map({
    '/home':{
      name:'home',
      component:require('../pages/home.vue')
    },
    '/': {
      name:'home',
      component:require('../pages/home.vue')
    },
     '/resolve':{
       name:'resolve',
       component:require('../pages/resolve.vue')
     },
    '/reject':{
      name:'reject',
      component:require('../pages/home.vue')
    }
  });

};

module.exports = RouterConfig;
