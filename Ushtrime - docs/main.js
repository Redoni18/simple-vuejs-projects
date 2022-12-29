
const Counter = Vue.createApp({})

Counter.component('learning',{
    template: `
        <div>
            Counter: {{counter}}
            

                <span :title="message">
                    <p>
                        Hover your mouse over me
                    </p>
                </span>
                <p>{{differentMessage}}</p>
                <button @click="reverseMessage">Reverse Message</button>
    
                <br><br>
                <input v-model="text" />
                <p>{{text}}</p>
    
                <span>
                    <p v-if="seen">Now you see me</p>
                    <p v-else>Now you dont</p>
                </span>
                <todo-items v-for="item in groceryList" :todo="item"></todo-items>

        </div>
    `,
    data: function(){
        return{
            counter: 0,
            message: 'you loaded this page on ' + new Date().toLocaleString(),
            differentMessage: "Hello World",
            text: "Hello Vue",
            seen: false,
        }
    },
    mounted(){
        setInterval(() => {
            this.counter++;
        }, 1000);
    },
    methods: {
        reverseMessage: function(){
            this.differentMessage = this.differentMessage.split('').reverse().join('')
        }
    }
})


Counter.mount('#app')