// const buttonElement = document.querySelector('button');
// const inputElement = document.querySelector('input');
// const listElement = document.querySelector('ul');

// function addGoal(){
//     const enteredValue = inputElement.value;
//     const listItemElement = document.createElement('li');
//     listItemElement.textContent = enteredValue;
//     listElement.append(listItemElement);
//     inputElement.value = ""
// }

// buttonElement.addEventListener('click', addGoal);


const app = Vue.createApp({
    data: function(){
        return{
            goals: [],
            enteredValue: ""
        }
    },
    methods:{
        addGoal: function(){
            this.goals.push(this.enteredValue)
            this.enteredValue = ""
        }
    }
})

app.mount('#app')
