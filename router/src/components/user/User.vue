<template>
    <div>
        <h1>The User Page</h1>
        <p>Loaded ID: {{id}}</p>
        <button @click="navigateToHome" class="btn btn-primary">
			Go to home
		</button>
		<br>
		<router-view></router-view>
    </div>
</template>

<script>
	export default{
		data(){
			return {
				//带参数的路由以及多个参数的路由。
				//接收参数可以利用this.$route.params.id来获取
				
				id: this.$route.params.id
			}
		},
		//但是在参数改变之后，这个参数将无法再次获取到，
		//只有通过watch来实现对$route对象的监控
		 watch:{
			'$route'(to,from){
				this.id = to.params.id;
			}
		}, 
		methods:{
			navigateToHome(){
				//this.$router.push({path:‘/’}); 来实现按钮链接的跳转操作
				this.$router.push({path:'/'});
			}
		}
	}
</script>