import VueRouter from 'vue-router';
import User from '../pages/User';
import Home from '../pages/Home';
import Main from '../pages/Main';
import Mall from '../pages/Mall';
import Other1 from '../pages/Other1';
import Other2 from '../pages/Other2';



export default new VueRouter({
    routes: [{
        name: 'main',
        path: '/',
        component: Main,
        redirect: '/home',
        children: [{
                name: 'user', //用户管理
                path: 'user',
                component: User
            }, {
                name: 'home', //首页
                path: 'home',
                component: Home
            }, {
                name: 'mall', //商品管理
                path: 'mall',
                component: Mall
            }, {
                name: 'other1', //其他页面1
                path: 'other1',
                component: Other1,
            }, {
                name: 'other2', //其他页面2
                path: 'other2',
                component: Other2
            }

        ]
    }]
})