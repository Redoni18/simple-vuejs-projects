<template>
    <div>
        <h1>User</h1>
        <button @click="logout" class="btn">Logout</button>
    </div>
</template>

<script>
import store from "@/store.js"
export default {
    methods: {
        logout(){
            store.user = null
            this.$router.push('/')
        }
    }
}
</script>