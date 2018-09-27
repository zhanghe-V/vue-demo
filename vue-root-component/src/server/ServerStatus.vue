<template>
    <div>
         <h1>Server Status {{status}} <button @click='changeStatus'>Click to Change Status</button></h1>
         <p>Father give name is {{Sonname}} </p>
    </div> 
</template>

<script>
export default {
    
    data:function(){
        return {
            status: 'Critical'
        }
    },
    props:['Sonname'],
    methods: {
        changeStatus:function(){
            this.status='Normal Now!'
        }
    }
}
</script>

<style scoped>
div{
    border: 1px solid lightblue;
    margin: 10px;
}

</style>
