<template>
  <div id="nav">
    <the-navigation></the-navigation>
    <transition name="fade">
      <router-view :key="$route.params.slug"/>
    </transition>
  </div>
</template>

<script>
import TheNavigation from "./components/TheNavigation.vue"

export default{
  components: {
    'the-navigation' : TheNavigation
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.input {
  border: 1px solid green;
  padding: 10px;
  margin-bottom: 20px;
}
.btn {
  background-color: green;
  color: white;
  padding: 10px;
}


</style>
