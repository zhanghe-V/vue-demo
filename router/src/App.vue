<template>
  <div class="container">
    <div class="row">
       <div class="col-xs-12 col-sm-8 col-sm-offset-2 
            col-md-6 col-md-offset-3">
                <h1>App.vue首页</h1>
                <p>子组件：appHeader routerView</p>
                <hr>                
                <router-view name="header-top"></router-view>
                <transition name="slide" mode="out-in">
                  <router-view></router-view>
                </transition>
                
                <router-view name="header-bottom"></router-view>
        </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  data () {
    return {
    }
  },
  components: {
    appHeader:Header,
  }
}
</script>

<style>
  .slide-enter{
    opacity: 0;
  }

  .slide-enter-active{
    animation:slide-in .5s forwards;
    transition:opacity 10ms;
  }

  .slide-leave{

  }

  .slide-leave-active{
    animation:slide-out .5s ease-out forwards;
    transition:opacity 10ms;
    opacity: 0;
  }

  @keyframes slide-in{
    from{
      transform:translateY(20px);
    }
    to{
      transform:translateY(0);
    }
  }

  @keyframes slide-out{
    from{
      transform:translateY(0);
    }
    to{
      transform:translateY(20px);
    }
  }
</style>
