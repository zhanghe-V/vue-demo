<template>
    <div>
        <h3>Some User Details</h3>
        <p>User loaded has ID: {{ $route.params.id }}</p>
      <!-- 在路由中设置name属性后可以利用router-link来设置:to参数，
        以便跳转到指定的组件模块，并且可以将params以及query等参数传递过去  -->
         <router-link
	    tag="button"
	    :to="link"
		  class="btn btn-primary"
	    >Edit User</router-link>
    </div>

</template>

<script>
    export default{
        data:function(){
            return {
                link:{
                    name:'userEdit',
					params:{ 
						id: this.$route.params.id
					},
					query:{
						locale:'en',
						q:100
                    },
                    //scrollBehavior以及savedPosition等hash参数以及滚动到
                    //指定位置的操作，在main.js的router进行操作
                    hash:'#data'
                }
            }
        },
        beforeRouteEnter (to, from, next) {
            if(true){
                //next参数中false与true之间的区别效果，false的话detail页面将无法查看
                //Route中钩子函数的三个位置及用法
                //1.在组件中 beforeRouteEnter、beforeRouteLeave
                //2.在路由中 beforeEnter、beforeLeave
                //3.在main.js中  beforeEach
                next();
            }else{
                next(false);
            }
            
        }
    }
</script>