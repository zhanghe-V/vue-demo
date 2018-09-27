<template>
	<div>
		<!-- <p>{{quote}}</p> -->

		<!--只需要利用slot就可以将父组件中组件标签中的内容进行显示-->

		<div class="title">
			<slot name="title"></slot>
		</div>
		<div class="content">
			<slot name="content"></slot>
		</div>
		<div class="titleFromData">
			<slot name="titleFromData">titleFromData</slot>
		</div>
		
		<!-- 如果父组件中没有定义slot的内容，那么在没有定义slot对象的时候，
			如果在写slot内容以后将显示自己的slot内容，这是slot的默认值
				要将 默认的slot对象与 slot的默认值加以区分
			 -->

		<span style="color:#ccc;">
			<slot name="subtitle">The Subtitle</slot>
		</span>
		<slot></slot>
		
	</div>
</template>

<script>
	export default{
		// props:['quote']
	}
</script>

<style scoped>
	div {
		border:1px solid #ccc;
		box-shadow: 1px 1px 2px black;
		padding: 30px;
		margin:30px auto;
		text-align: center;
	}
</style>