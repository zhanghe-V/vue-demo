/* import Home from './components/Home.vue'; //引入组件
import Header from './components/Header.vue'; */

//路由懒加载：实现js模块的懒加载操作，即：用到哪个模块的时候加载哪个模块的js代码，
//以便提高单个模块的加载速度 resolve、require.ensure以及require操作
const Home = resolve => {
    require.ensure(['./components/Home.vue'], () => {
        resolve(require('./components/Home.vue'));
    });
};
const Header = resolve => {
    require.ensure(['./components/Header.vue'], () => {
        resolve(require('./components/Header.vue'));
    });
};
const User = resolve => {
    require.ensure(['./components/user/User.vue'], () => {
        resolve(require('./components/user/User.vue'));
    });
};
const UserStart = resolve => {
    require.ensure(['./components/user/UserStart.vue'], () => {
        resolve(require('./components/user/UserStart.vue'));
    });
};
const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], () => {
        resolve(require('./components/user/UserEdit.vue'));
    });
};
const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], () => {
        resolve(require('./components/user/UserDetail.vue'));
    });
};

//设置路由
export const routes = [
    /* 在路由中设置name属性后可以利用router-link来设置:to参数，
    以便跳转到指定的组件模块，并且可以将params以及query等参数传递过去 */
    {
        path: '',
        components: { //需要注意的是原来的component变成了components，复数
            default: Home,
            'header-top': Header,
            //'header-bottom':Header //如果加上header-bottom，那就上下都会有显示头部
            // 内容了，所以router-view部分是有定义则显示，没定义则不显示的原则
        },
        name: 'home'
    },
    {
        path: '/user',
        components: {
            default: User,
            //'header-bottom': Header
        }, //路由的嵌套用children包含实现，在子组件中仍旧利用<router-view></router-view> 来实现子组件模块嵌套的占位渲染；
        children: [
            { path: '', component: UserStart },
            { path: ':id', component: UserDetail },
            { path: ':id/edit', component: UserEdit, name: 'userEdit' }
        ]
    },
    //可以设置redirect进行重定向，可以设置指定地址的重定向以及所有没找到路由地址的重定向
    { path: '/redirect-me', redirect: '/user' },
    { path: '/redirect-you', redirect: { name: 'home' } },
    { path: '*', redirect: '/' } //所有不符合地址规范的都将转到/地址下

];