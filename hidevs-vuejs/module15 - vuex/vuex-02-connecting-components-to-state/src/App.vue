<template>
  <base-container title="Vuex" v-if="isAuth">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <button @click="addOne">Add 5</button>
    <change-counter></change-counter>
  </base-container>
  <base-container title="User Auth"> 
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import TheCounter from './components/TheCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue'
import UserAuth from './components/UserAuth.vue'
export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth
  },
  methods: {
    addOne() {
      //this.$store.commit('increase' ,{value: 5})
      this.$store.dispatch({
        type: 'numbers/increase',
        value: 5
      })
    },
  },
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>