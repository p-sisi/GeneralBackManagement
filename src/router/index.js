import VueRouter from 'vue-router';
import User from '../pages/User';
import Home from '../pages/Home';
import Main from '../pages/Main';
import Mall from '../pages/Mall';
import Other1 from '../pages/Other1';
import Other2 from '../pages/Other2';
import Login from '../pages/Login'


// 获取原型对象push函数
const originalPush = VueRouter.prototype.push

// 获取原型对象replace函数
const originalReplace = VueRouter.prototype.replace

// 修改原型对象中的push函数
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

// 修改原型对象中的replace函数
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err)
}


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
        },
        {
            name: 'login',
            path: '/login',
            component: Login
        }
    ]
})