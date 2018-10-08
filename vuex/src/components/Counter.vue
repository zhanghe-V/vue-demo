<template>
    <div>
        <!-- <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button> -->

        <button class="btn btn-primary" 
        @click="increment(2)">
        Increment</button>
        <button class="btn btn-primary" 
        @click="decrement(2)">
        Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    /* export default {
        methods: {
            increment() {
                //this.$emit('updated', 1); //1.直接传值

                //2.利用store传值；
                //this.$store.state.counter++;

                //3.利用mutations
                this.$store.commit('increment');
            },
            decrement() {
                //this.$emit('updated', -1);

                //this.$store.state.counter--;

                this.$store.commit('decrement');
            }
        }
    } */

    /*
   利用spread及mapActions方式进行对象传递与引用
    */
   export default {
        methods:{
            ...mapActions([
                'increment',
                'decrement'
            ])
            /*
            increment(by){
                this.$store.dispatch('increment',by);//派发任务
            }
            */
        }
   }
</script>