import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router' //引用模块
import { routes } from './routes' //引用路由表


Vue.use(VueRouter); //试用模块

const router = new VueRouter({
    routes: routes, // 可以直接写成routes
    mode: 'hash', // mode设置成history，那么地址就可以请求http://localhost:8080/user
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }

        if (to.hash) {
            return { selector: to.hash };
        }

        return { x: 0, y: 0 };
        //return { x: 0, y: 1700 };
    }

});

// 路由生命周期中的钩子函数
router.beforeEach((to, from, next) => {
    console.log('global beforeEach');
    next()
});

new Vue({
    el: '#app',
    router, // router:router
    render: h => h(App)
})