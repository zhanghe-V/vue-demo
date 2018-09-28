<template>
	<div class="row">
		<form>
			<div class="col-sm-8 col-sm-offset-2 
			col-xs-12 col-md-6 col-md-offset-3">
				<label>Quote</label>
				<textarea class="form-control" rows="3" v-model="quote">
				</textarea>
			</div>
			<div class="col-sm-8 col-sm-offset-2 
			col-xs-12 col-md-6 col-md-offset-3">
				<button class="btn btn-primary" 
				@click.prevent="createNew">Add Quote</button>
                <!-- ??为什么 -->

                <!-- 阻止单击事件冒泡 
                <a v-on:click.stop="doThis"></a>
                提交事件不再重载页面 
                <form v-on:submit.prevent="onSubmit"></form>
                修饰符可以串联 
                <a v-on:click.stop.prevent="doThat">
                只有修饰符 
                <form v-on:submit.prevent></form> -->


			</div>
		</form>
	</div>
</template>

<script>
	import Quote from './Quote.vue';

	export default{
		data:function(){
			return {
				quote:''
			};
		},
		methods:{
			createNew(){
				this.$emit('quoteAdded',this.quote);
				this.quote = '';
			}
		}
	}
</script>

<style>
	.row{
		padding:20px;
	}
</style>