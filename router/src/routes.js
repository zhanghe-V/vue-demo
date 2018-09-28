import User from './components/user/User.vue';
import Home from './components/Home.vue'; //引入组件
import UserStart from './components/user/UserStart.vue';
import UserEdit from './components/user/UserEdit.vue';
import UserDetail from './components/user/UserDetail.vue';
//设置路由
export const routes = [
    { path: '/', component: Home },
    {
        path: '/user',
        component: User,
        children: [
            { path: '', component: UserStart },
            { path: ':id', component: UserDetail },
            { path: ':id/edit', component: UserEdit }
        ]
    }
];