<template>
    <form @submit.prevent="addNewFriend">
        <div>
            <label for="name">Name: </label>
            <input type = 'text' v-model= "friendName"/>
        </div>
        <div>
            <label for="phone">Phone: </label>
            <input type = 'tel' v-model= "friendPhone"/>
        </div>
        <div>
            <label for="email">Email: </label>
            <input type = 'email' v-model= "friendEmail"/>
        </div>
        <div>
            <button>Add New Friend</button>
        </div>
    </form>
</template>


<script>
export default {
    emits: ['add-contact'],
    data(){
        return{
            friendName: '',
            friendPhone: '',
            friendEmail: ''
        }
    },
    methods: {
        addNewFriend(){
            if(this.friendName !== '' && 
                this.friendPhone !== '' && 
                this.friendEmail !== ''){
                this.$emit('add-contact', 
                this.friendName,
                this.friendPhone,
                this.friendEmail)


                this.friendName = ''
                this.friendPhone = ''
                this.friendEmail = ''
            }else{
                alert("Shkruji kejt mos prito")
            }
        }
    }
    
}
</script>