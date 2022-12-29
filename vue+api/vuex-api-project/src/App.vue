<template>
  <div>
    <div v-for="post in posts" :key = "post.id">
      <h2>{{ post.title}}</h2>
      <p>{{post.body}}</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    posts(){
      return this.$store.getters.posts
    }
  },
  created(){
    this.$store.dispatch('loadPosts')
  }
}
</script>