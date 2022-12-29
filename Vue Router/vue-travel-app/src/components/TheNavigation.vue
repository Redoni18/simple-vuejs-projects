<template>
    <div id="nav">
        <p class="logo">
            <router-link to="/">
                Travel App
            </router-link>
        </p>
        <ul class="nav-links">
            <li class="links">
                <router-link to="/">
                    Home
                </router-link>
            </li>
            <li v-for="destination in destinations"
                :key="destination.name"
                class="links">
                <router-link :to="{name: 'DestinationDetails', params: {slug: destination.slug}}">
                    {{destination.name}}
                </router-link>

            </li>
            <li class="links">
                <router-link to="/user">Dashboard</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import store from '@/store.js'
export default {
    data(){
        return {
            destinations: store.destinations
        }
    }
}
</script>

<style scoped>
#nav {
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: white;
  border-bottom: 1px solid grey;
  z-index: 1;
}

#nav a {
  text-decoration: none;
  color: #2c3e50;
  font-weight: bold;
}

#nav a.router-link-exact-active {
  color: #ab26ab;
}

.logo{
    font-size: 20px;
    color: purple;
    font-weight: bold;
}

.nav-links {
  display: flex;
}
.links {
  padding-right: 20px;
  list-style: none;
}
.links:hover {
  text-decoration: underline;
}

</style>