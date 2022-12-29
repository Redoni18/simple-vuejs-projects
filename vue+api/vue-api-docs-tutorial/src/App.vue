<template>
  <div id="app">
    <h1>Bitcoin Price Index</h1>
    <section v-if="errored">
      <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>

  <section v-else>
    <h2 v-if="loading">Loading...</h2>
    <div
      v-for="currency in info"
      class="currency"
      :key="currency.id"
    >
      {{ currency.description }}:
      <span class="lighten">
        <span v-html="currency.symbol"></span>{{ currency.rate_float }}
      </span>
    </div>
  </section>
</div>
</template>


<script>
import axios from 'axios'
export default{
  data(){
    return{
      info: null,
      loading: true,
      errored: false
    }
  },
  mounted(){
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response.data.bpi))
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)

      
  },
  // computed: {
  //   currencydecimal(value){
  //     return value.toFixed(2)
  //   }
  // }
  // filters: {
  //   currencydecimal(value){
  //     return value.toFixed(2)
  //   }
  // }
}
</script>
