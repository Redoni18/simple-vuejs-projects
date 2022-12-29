const app = Vue.createApp({
    data: function(){
        return{
            enteredGoal: '',
            goals: [],
            // infos:{
            //     name: 'Max', 
            //     age: 31
            // },
        }
    },
    methods: {
        addGoal: function(){
            this.goals.push(this.enteredGoal);
            this.enteredGoal = '';
        },
        removeGoal: function(id){
            this.goals.splice(id, 1)
        }
    }
})

app.mount('#app')