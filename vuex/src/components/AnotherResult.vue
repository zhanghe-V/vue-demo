<template>
    <div>
        <!-- getters模式 -->
        <!-- <p>Another Counter is: {{ counter }}</p> 
        <p>Number of Clicks: {{ clicks }}</p> -->

        <!-- mapGetters模式 -->
         <p>Counter is: {{ doubleCounter }}</p>
        <p>Number of Clicks: {{ stringCounter }}</p> 

       
    </div>
    
</template>

<script>
    import {mapGetters} from 'vuex';
    /* export default {
       computed:{
       	counter(){
          // 与Result一样
       		return this.$store.getters.doubleCounter;
            },
        clicks(){
        	return this.$store.getters.stringCounter;
            },
       }
    } */

    //想要用spread参数传递方式，需要安装npm i -D babel-preset-stage-2的支持，
	// 并且需要在.babelrc文件中加入stage-2
    export default{
        computed:{
	    		...mapGetters([
				'doubleCounter',
				'stringCounter'
            ])                      
        },        
    }
</script>