import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

//设置全局变量
Vue.http.options.root = 'http://localhost:3000/posts';
//设置拦截器，如果请求方式为POST的话，那么就把请求方式修改为PUT
//拦截器分为request拦截器，还有response拦截器
Vue.http.interceptors.push((request, next) => {
    // console.log(request);
    /* if (request.method == 'POST') {
        request.method = 'PUT';
    } */
    // 通过返回的拦截器对可以数据进行处理，然后再做应用
    next(response => {
        response.json = () => {
            var data = response.body;
            var newData = [];

            for (var i = 0; i < data.length - 1; i++) {
                newData.push(data[i]);
            };

            return newData;
        };
    });
});


new Vue({
    el: '#app',
    render: h => h(App)
})