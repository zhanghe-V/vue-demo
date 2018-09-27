<template>
  <div class="container">
  	<div class="row">
  		<div class="col-xs-12">
  			<!--
  			一种不是非常好的解决办法是将quote当成一个属性传递到子组件中去
  			子组件利用props进行接收并且显示，但是如果多行文本，格式文件等内容的存在，
				这样操作就会变得十分的麻烦，所以这种模式的解决方案并非十分的理想
  			-->

  			<!-- <app-quote quote="A wonderful quote!"></app-quote> -->

        <!-- slots的内容也可以引入data的变量内容 -->

        <!-- 通过指定slot的名称，可以对应的操作slot显示的对象，
        这样就可以将slot对象给拆分开来进行显示了 
            如果去除p标签的slot属性，那么子组件中未命名的slot
        也就成为了模认的slot对象-->
  			<!-- <app-quote>
  			<h2 slot="title">The Quote</h2>
  			<h2 slot="titleFromData">{{quoteTitle}}</h2>
  			<p slot="content">A wonderful quote!</p>
  			<p> Not set slot name is default.111</p>
  			<p> Not set slot name is default.222</p>
  			</app-quote> -->

        <button @click="selectedComponent = 'appQuote'">Quote</button>
        <button @click="selectedComponent = 'appAuthor'">Author</button>
        <button @click="selectedComponent = 'appNew'">New</button>
        <hr>
        <p>{{ selectedComponent }}</p>

        <keep-alive>
          <!-- 如果没有<keep-alive></keep-alive>进行激活状态的保持的话，
          那么组件在切换的时候就会执行销毁操作 -->
          <component :is="selectedComponent">
            <p>Default Content</p>
          </component>
        </keep-alive>
        

  		</div>
  	</div>
  </div>
</template>

<script>
import Quote from '@/components/Quote.vue';
import Auther from '@/components/Auther.vue';
import New from '@/components/New.vue';

export default {
  data:function(){
    return {
      quoteTitle:'The Quote',
      selectedComponent:'appQuote'
    }
   },
   components:{
       appQuote:Quote,
       appAuther:Auther,
       appNew:New
   }
}
</script>

<style>

</style>
