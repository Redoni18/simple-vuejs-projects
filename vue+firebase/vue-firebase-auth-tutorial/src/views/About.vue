<template>
  <div>   
  <form @submit.prevent="register">     
    <h2>Register</h2>     
    <input       
      type="email"       
      placeholder="Email address..."       
      v-model="email"     
    />     
    <input       
      type="password"       
      placeholder="password..."       
      v-model="password"     
    />     
    <button type="submit">
       Register
    </button>   
  </form> 
</div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
// import router from 'vue-router'

export default {
  data(){
    return{
      email: '',
      password: ''
    }
  },
  methods: {
    register() {
      firebase.auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(() => {
          // Signed in 
          alert('Successfully registered')
          this.$router.push('/')
          // ...
        })
        .catch((error) => {
          alert(error.message)
          // ..
        });
    }
  }
}

</script>

