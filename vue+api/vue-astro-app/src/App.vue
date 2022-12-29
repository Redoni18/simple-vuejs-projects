<template>
  <div class="container mt-4">
    <http-axios></http-axios>
    <http-fetch></http-fetch>
  </div>
</template>

<script>
import HttpAxios from './components/HttpAxios.vue'
import HttpFetch from './components/HttpFetch.vue'

export default{
  components: {
    'http-axios': HttpAxios,
    'http-fetch': HttpFetch
  }
}

</script>


<style>
.container {
  max-width: 500px;
}
</style>
