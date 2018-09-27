<template>
  <div class="container">
    <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
    <app-new-quote @quoteAdded="newQuote"></app-new-quote>
  	<app-quote-grid :quotes="quotes" @quoteDeleted='deleteQuote'></app-quote-grid>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import QuoteGrid from '@/components/QuoteGrid.vue';
import NewQuote from '@/components/NewQuote.vue';


export default {
  data:function(){
    return {
      quotes:[
        'Just a Quote to see something'
      ],
      maxQuotes:10
    }
  },
  methods: {
    newQuote:function(quote){
       if(this.quotes.length >= this.maxQuotes){
        return alert('Please delete Quotes first!');
      }
      this.quotes.push(quote);
    },
    deleteQuote:function(index){
      this.quotes.splice(index,1);
    }
  },
  components:{
    appQuoteGrid:QuoteGrid,
    appNewQuote:NewQuote,
    appHeader:Header
  }
}
</script>

<style>

</style>
