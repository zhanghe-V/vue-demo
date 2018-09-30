<template>
	<ul class="nav nav-pills">
		<!-- 1)普通模式 -->
		<!-- <li role="presentation"><router-link to="/">Home</router-link></li>
		<li role="presentation"><router-link to="/user">User</router-link></li> -->

		<!-- 2)激活样式模式，需要注意exact参数，（exactlly：确切的） 如果首页不加exact排除属性，那么将会一直有激活样式，
		因为首页是/地址，所有地址里都包含该地址 -->
		<!-- <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
		<router-link to="/user" tag="li" active-class="active"><a>User</a></router-link> -->

		<!-- 3)带参数的路由 -->
		<!-- <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
		<router-link to="/user/10" tag="li" active-class="active"><a>User</a></router-link> -->

	  	<!-- 4)多个带参数的路由 -->

         <!--  在路由中设置name属性后可以利用router-link来设置:to参数，
          以便跳转到指定的组件模块，并且可以将params以及query等参数传递过去； -->
		<router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
		<router-link to="/user/1" tag="li" active-class="active"><a>User 1</a></router-link>
		<router-link to="/user/2" tag="li" active-class="active"><a>User 2</a></router-link>

	</ul>
</template>