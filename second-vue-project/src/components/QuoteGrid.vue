<template>
	<div class="row">
		<app-quote v-for="(quote,index) in quotes" :key="index"
        @click.native="deleteQuote(index)">{{quote}}</app-quote>
       <!--  ?????? 给vue组件绑定事件时候，必须加上native ，
       不然不会生效（监听根元素的原生事件，使用 .native 修饰符）-->
	</div>
</template>

<script>
	import Quote from '@/components/Quote.vue';

	export default{
		props:['quotes'],
		components:{
			appQuote:Quote
        },
        methods:{
			deleteQuote(index){
				this.$emit('quoteDeleted',index);
			}
		}
	}
</script>

<style>
	
</style>