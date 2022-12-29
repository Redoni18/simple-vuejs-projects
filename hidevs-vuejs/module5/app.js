const app = Vue.createApp({
    data() {
        return {
          currentUserInput: '',
          message: 'Vue is great!',
        };
    },
    methods: {
        saveInput(event) {
          this.currentUserInput = event.target.value;
        },
        setText() {
          this.message = this.currentUserInput;
        },
    },
    //lifecycle hooks
    beforeCreate(){
        console.log('beforecreate')
    },
    created(){
        console.log('created')
    },
    beforeMount(){
        console.log("before mount")
    },
    mounted(){
        console.log('mounted')
    },
    beforeUpdate(){
        console.log('before update')
    },
    updated() {
        console.log('updated')
    },
    beforeUnmount(){
        console.log('beforeUnmount')
    },
    unmounted() {
        console.log('unmounted')
    }
})

app.mount('#app')
setTimeout(function() {
    app.unmount();
}, 3000)
