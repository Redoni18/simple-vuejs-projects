import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
  state: {
    posts: []
  },
  getters: {
    posts(state){
      return state.posts
    }
  },
  mutations: {
    setItems(state, payload){
      state.posts = posts
    }
  },
  actions: {
    async loadPosts({context, payload}){
      try{
        const response = await this.$http.get('http://jsonplaceholder.typicode.com/posts')
        context.commit('setItems', response)
      }catch(error){
        console.log(error)
      }
    }
  },
  modules: {
  }
})
