<template>
	<div class="component">
		<h1>用户组件</h1>
		<p>我是一个用户</p>
        <p>姓名是：{{ name }}</p>
        <p>年龄是：{{ age }}</p>
		<button @click="changeName">修改我的姓名</button>
		<hr>
		<div class="row">
			<div class="col-xs-12 col-sm-6">
				<app-user-detail :myName="name" :userAge="age" :childrenRequest='letParentResponse' @nameWasChanged='name=$event'>
				</app-user-detail>
			</div>
			<div class="col-xs-12 col-sm-6">
				<app-user-edit :myName="name" :userAge="age" @ageWasChanged='age=$event'></app-user-edit>
			</div>
		</div>		
	</div>
</template>

<script>
	import UserDetail from '@/components/UserDetail.vue';
	import UserEdit from '@/components/UserEdit.vue';

	export default {
		data: function(){
			return {
                name: 'Vane',
                age:37
			}
		},
		methods:{
			changeName(){
				this.name = 'ZhangeHe';
            },
             letParentResponse(request){
                 console.log(request);
				this.name = request;
            } 
		},
		components: {
			appUserDetail: UserDetail,
			appUserEdit: UserEdit
		}
	}
</script>