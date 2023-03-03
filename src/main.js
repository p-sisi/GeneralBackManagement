import Vue from 'vue'
import App from './App.vue'
import { Button, Row } from 'element-ui';
// import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//关闭生产提示
Vue.config.productionTip = false
    // Vue.use(ElementUI);

Vue.use(Button);
Vue.use(Row);



new Vue({
    render: h => h(App),

}).$mount('#app')