const app = Vue.createApp({
    data(){
        return{
            friends: [
                {
                    id: 'manuel', 
                    name: 'Manuel Lorenz', 
                    phone: '32427342332', 
                    email: 'something@email.com'
                },
                {
                    id: 'julie', 
                    name: 'Julie Ramadani', 
                    phone: '98395483', 
                    email: 'somethingsomething@email.com'
                }
            ],
            
        }
    }
})

app.component('friend-contact', {
    template: `
        <header>
            FriendList
        </header>
        <section>
            <ul>
                <li>
                    <h2>{{friend.name}}</h2>
                    <button @click="toggleDetails">Show Details</button>
                    <ul v-if="detailsAreVisible">
                        <li><strong>Phone: </strong>{{friend.phone}}</li>
                        <li><strong>Email: </strong>{{friend.email}}</li>
                    </ul>
                </li>
            </ul>
        </section>
    `,
    data() {
        return{
            detailsAreVisible: false,
            friend: {
                id: 'manuel', 
                name: 'Manuel Lorenz', 
                phone: '32427342332', 
                email: 'something@email.com'
            }
        }
    },
    methods:{
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible
        }
    }

});

app.mount('#app');