<template>
    <div>
        <h1>Home Vue Pag {{name}} <button @click='changeName'>Button</button></h1>
        <statusComponent v-for="server in 3" :key='server' :Sonname='name'></statusComponent>
        <statusComponent :SonName='name'></statusComponent>
    </div> 
</template>
<script>
import StatusServer from "@/server/ServerStatus.vue";
//Vue.component('statusComponent',StatusServer);

export default {
    data:function(){
        return {
            name: 'Home Page'
        }
    },
    methods: {
        changeName:function(){
            this.name='Changed!'
        }
    },
    components: {
        'statusComponent':StatusServer,
    }
}
</script>

<style scoped>
    div{
        border: 1px solid lightcoral;
        margin: 10px;
    }
</style>
