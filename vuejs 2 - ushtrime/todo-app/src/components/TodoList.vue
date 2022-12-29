<template>
    <div>
        <p>Completed Tasks: {{todos.filter(todo => {return todo.done === true}).length}}</p>
        <p>Pending Tasks: {{todos.filter(todo => {return todo.done === false}).length}}</p>
        <todo @complete-todo="completeTodo" @delete-todo="deleteTodo" v-for="todo in todos" :todo="todo" :key="todo.name" ></todo>
    </div>
</template>

<script>
import sweetalert from 'sweetalert';
import Todo from './Todo.vue'
export default{
    props: ['todos'],
    components: {
        'todo': Todo
    },
    methods:{
        deleteTodo(todo){
            const todoIndex = this.todos.indexOf(todo)
            this.todos.splice(todoIndex, 1)
        },
        completeTodo(todo){
            const completeTodoIndex = this.todos.indexOf(todo)
            this.todos[completeTodoIndex].done = true
            sweetalert('Finished!', 'To-Do completed!', 'success');
        }
    }
}
</script>
