import Vue from 'vue'
import App from './App.vue'
//优化页面
import 'default-passive-events'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router';
import router from './router/index.js';
import "./api/mock"
import store from './store'

//关闭生产提示
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueRouter);



new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')