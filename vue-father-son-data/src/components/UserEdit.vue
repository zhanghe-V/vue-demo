<template>
	<div class="component">
		<h3>你可以在此编辑用户</h3>
		<p>修改资料</p>
        <p>用户姓名: {{ myName }}</p>
		<p>用户姓名: {{ userAge }}</p>
        <p>用户姓名: {{ switchName() }}</p>
        <button @click="changeAgeThoughEditPage">修改年龄</button>
        <button @click="BusChangeAge">Bus改年龄</button>
	</div>
</template>

<script>
    import { eventBus } from "@/main";
	export default {
		props: {
            myName:{
                type:String,
                required:true,
                dafault:'DefaultName'
            },          
            userAge:{
                type:Number,
            }
        },
        methods: {
            changeAgeThoughEditPage:function(){
                this.userAge= 23;
                //子传父：父先传一个函数过来子接收，调用函数，通过函数参数的形式返回父
                //this.childrenRequest(this.myName);     
                //子传父 利用订阅发布模式 $emit 向父发射事件 子事件监听，再通过$event返回数据
                this.$emit('ageWasChanged',this.userAge);
            },
            switchName:function(){
                return this.myName.split('').reverse().join('');
            },
            BusChangeAge:function(){
                this.userAge= 25;
                //向 eventBus对象发射事件，通过公交总线转达给接收者
                //eventBus.$emit('ageWasChanged',this.userAge);

                //也可以在eventBus中定义方法， 此处调用来传数据过去
                eventBus.ChangeAge(this.userAge);
            } 
        }
	}
</script>

<style scoped>
	div {
		border: 1px solid darkgreen;
        padding: 10px;
        margin: 10px;
	}
</style>