<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-12">
        <h1>Bitcoin Dashboard</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <coin-price></coin-price>
      </div>
      <div class="col-sm-6">
        <percent-change></percent-change>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">
            Bitcoin Pricing History
          </div>
          <ul class="list-group list-group-flush">
            <price-item v-for="price in prices" :key="price.timestamp" :price="price"></price-item>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import CoinPrice from './components/CoinPrice.vue'
import PercentChange from './components/PercentChange.vue'
import PriceItem from './components/PriceItem.vue'
import store from './store/index.js'
import actions from './actions.js'

export default{
  name: 'app',
  components: {
    'coin-price': CoinPrice,
    'percent-change': PercentChange,
    'price-item': PriceItem
  },
  store,
  computed: {
    prices(){
      return store.state.prices;
    }
  },
  created() {
    setInterval(this.triggerNewPrice, 3000)
  },
  methods: {
    triggerNewPrice(){
      const diff = (Math.random() - Math.random())*10;
      const randomNewPrice = store.getters.currentPrice.amount + diff
      store.commit(actions.UPDATE_PRICE, {
          amount: randomNewPrice,
          timestamp: Date.now()
      });
      
    }
  }
}
</script>


<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  } 
</style>