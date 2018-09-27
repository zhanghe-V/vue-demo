import Vue from 'vue'
import App from './App.vue'

//建立一个总线
//export const eventBus = new Vue();
export const eventBus = new Vue({
    methods: {
        ChangeAge(age) {
            this.$emit('ageWasChanged', age)
        }
    }
});

new Vue({
    el: '#app',
    render: h => h(App)
})