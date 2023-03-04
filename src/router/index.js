import VueRouter from 'vue-router';
import User from '../pages/User';
import Home from '../pages/Home';
import Main from '../pages/Main';


export default new VueRouter({
    routes: [{
        name: 'main',
        path: '/',
        component: Main,
        children: [{
                name: 'user',
                path: 'user',
                component: User
            }, {
                name: 'home',
                path: 'home',
                component: Home
            },

        ]
    }]
})