<template>
  <div class="panel-body">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books" :key="book.title">
          <td>
            <a :href="book.url">{{book.title}}</a>
          </td>
          <td>{{book.author}}</td>
          <td>
            <span class="glyphicon glyphicon-trash" aria-hidden="true" @click="removeBook(book)"></span>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">Add New Books</h3>
      </div>
      <div class="panel-body">
        <form id="form" class="form-inline" @submit.prevent="addBook">
        <div class="form-group">
          <label for="bookTitle">Title: </label>
          <input type="text" id="bookTitle" v-model="newBook.title">
        </div>
        <div class="form-group">
            <label for="bookAuthor">Author:</label>
            <input type="text" id="bookAuthor" class="form-control" v-model="newBook.author">
        </div>
        <div class="form-group">
            <label for="bookUrl">Url:</label>
            <input type="text" id="bookUrl" class="form-control" v-model="newBook.url">
          </div>
          <input type="submit" class="btn btn-primary" value="Add Book">
      </form>

      </div>

    </div>
  </div>
</template>

<script>
import Firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyDsoElWAZFHfd8gdu9uh2h4y_HmDI57xnc",
  authDomain: "vuejs-firebase-dc173.firebaseapp.com",
  databaseURL: "https://vuejs-firebase-dc173-default-rtdb.firebaseio.com",
  projectId: "vuejs-firebase-dc173",
  storageBucket: "vuejs-firebase-dc173.appspot.com",
  messagingSenderId: "957937775982",
  appId: "1:957937775982:web:29572454bd1b7c53e07d7f",
  firebase: {
    books: booksRef
  },
};

// Initialize Firebase
const app = Firebase.initializeApp(firebaseConfig);
const db = app.database()
const booksRef = db.ref('vuejs-firebase-dc173-default-rtdb')

export default{
  data(){
    return{
      newBook: {
        title: '',
        author: '',
        url: "https://"
      }
    }
  },
  methods: {
    addBook(){
      booksRef.push(this.newBook)
      this.newBook.title = ''
      this.newBook.author = ''
      this.newBook.url = 'https://'
    },
    removeBook(book){
      booksRef.child(book['.key']).remove()
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
