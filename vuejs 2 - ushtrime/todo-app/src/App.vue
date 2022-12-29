<template>
  <div>
    <todo-list :todos="todos"></todo-list>
    <create-todo @add-todo="addTodo"></create-todo>
  </div>
</template>

<script>
import sweetalert from 'sweetalert';
import CreateTodo from './components/CreateTodo.vue'
import TodoList from './components/TodoList.vue'
export default{
  components:{
    'todo-list': TodoList,
    'create-todo': CreateTodo,
  },
  data(){
    return{
      todos: []
    }
  },
  methods: {
    addTodo(newTodo){
      
      this.todos.push(newTodo)
      sweetalert('Success!', 'To-Do created!', 'success');
    }
  }
  //firebase
  // methods: {
  //   getData(){
  //     fetch('https://vue-todo-app-83d9a-default-rtdb.firebaseio.com/todos.json')
  //     .then((response) => {
  //       if(response.ok){
  //         return response.json()
  //       }
  //     })
  //     .then((data) => {
  //       for(const i in data){
  //         this.todos.push({
  //           title: data[i].title,
  //           project: data[i].project,
  //           done: data[i].done
  //         })
  //       }
  //     })
  //     console.log(this.todos)
  //   }
  // },
  // mounted() {
  //   this.getData()
  // }
}
</script>
