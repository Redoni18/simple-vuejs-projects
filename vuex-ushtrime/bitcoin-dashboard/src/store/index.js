import { createStore } from 'vuex'
import prices from './prices.js'
//import actions from '../actions.js'

const store = createStore({
  state() {
    return{
        prices: prices
    }
  },
  getters: {
      currentPrice(state){
          return state.prices[0]
      },
      previousPrice(state){
          return state.prices[1]
      },
      percentageIncrease(state, getters){
          const currentAmount = getters.currentPrice.amount
          const previousAmount = getters.previousPrice.amount
          return(((currentAmount - previousAmount) / previousAmount) * 100).toFixed(2)    
      },
      difference(state, getters){
          const currentAmount = getters.currentPrice.amount;
          const previousAmount = getters.previousPrice.amount;
          return (currentAmount - previousAmount).toFixed(2);
      }
  },
  mutations: {
      UPDATE_PRICE(state, newPricing){
          state.prices.pop();

          state.prices = [newPricing,...state.prices]
      }
  }
})


export default store;