const newApp = Vue.createApp({
    data: function(){
        return{
            courseAGoal: 'Finish the course and learn Vue',
            courseBGoal: 'Finish the course and master Vue',
            vueLink: 'https://v3.vuejs.org/guide/installation.html#vue-devtools',
            counter: 10,
            name: '',
            lastname: '',
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false
        }
    },
    watch:{
        counter: function(value){
            if(value === 50){
                this.counter = 0
            }
        }
    },
    computed: {
        fullname(){
            if(!this.name.length 
                || !this.lastname.length){
                return ''
            }
            return this.name + " " + this.lastname
        }
    },
    methods: {
        outputGoal: function(){
            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                return this.courseAGoal
            }
            return this.courseBGoal
        },
        increment: function(num){
            this.counter += num
        },
        decrement: function(num){
            this.counter -= num
        },
        submitForm: function(){
            alert('submitted')
        },
        outputFullName: function(){
            if(!this.name.length){
                return ''
            }
            return this.name + " " + "Emini"
        },
        resetName: function(){
            this.name = ''
            this.lastname = ''
        },
        boxSelected: function(box){
            if(box === 'A'){
                this.boxASelected = !this.boxASelected;
            }else if(box === 'B'){
                this.boxBSelected = !this.boxBSelected;
            }else if(box === 'C'){
                this.boxCSelected = !this.boxCSelected;
            }
        }
    }
});



newApp.mount('#app')