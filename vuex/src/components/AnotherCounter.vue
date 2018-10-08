<template>
    <div>
        <!-- <button class="btn btn-primary" @click="increment">
        Increment</button>
        <button class="btn btn-primary" @click="decrement">
        Decrement</button> -->

         <!-- action模式 -->
        <button class="btn btn-primary" 
        @click="asyncIncrement({by:1,duration:500})">
        Increment</button>
        <button class="btn btn-primary" 
        @click="asyncDecrement({by:1,duration:1000})">
        Decrement</button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';
    import { mapActions } from 'vuex';
   /*
   利用spread及mapMutations方式进行对象传递与引用
    */
   export default {
        methods:{
            /* ...mapMutations([
                'increment',
                'decrement'
            ]) */
            /*
            利用spread及mapActions方式进行对象传递与引用
                */
             ...mapActions([
                'asyncIncrement',
                'asyncDecrement'
            ])  
        }
   }
</script>