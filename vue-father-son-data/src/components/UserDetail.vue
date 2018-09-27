<template>
	<div class="component">
		<h3>你可以在此查看用户详情</h3>
		<p>用户详情</p>
		<p>用户姓名: {{ myName }}</p>
		<p>用户姓名: {{ userAge }}</p>
        <p>用户姓名: {{ switchName() }}</p>
        <button @click="changeNameThoughDetailPage">修改我的姓名</button>
	</div>
</template>

<script>
    import { eventBus } from "@/main";
    export default{
        // props: ['myName'],
        props: {
            myName:{
                type:String,// 可以设置属性的类型，比如String或者[String,Array]等类型
                required:true,// 还可以设置属性值是否为必须传递操作required
                dafault:'DefaultName'// 并且可以设置属性值的默认值
            },
             childrenRequest:{
                type:Function,
            } ,
            userAge:{
                type:Number,
            }
        },
        methods: {
            changeNameThoughDetailPage:function(){
                this.myName= 'Changed!';
                //子传父：父先传一个函数过来子接收，调用函数，通过函数参数的形式返回父
                //this.childrenRequest(this.myName);     
                //子传父 利用订阅发布模式 $emit 向父发射事件 子事件监听，再通过$event返回数据
                this.$emit('nameWasChanged',this.myName);
            },
            switchName:function(){
                return this.myName.split('').reverse().join('');
            }
        },
        //非父子之间传值，通过一个相当于公交总线的vue实例来进行传值
        //在main中定义好vue 总线实例，然后传值者组件调用，$emit方法发射事件
        //接受者组件 在 created ()函数中对事件进行监听。
        //也可以将emit方法直接写在总线实例中，在传值组件中调用方法
        created () {
            eventBus.$on('ageWasChanged',(age)=>{
                this.userAge = age;
            })
        }
    }
</script>

<style scoped>
	div {
		border: 1px solid darkcyan;
        padding: 10px;
        margin: 10px;
	}
</style>