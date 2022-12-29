const shoppingListApp = Vue.createApp({
    data(){
        return{
            header: "Shopping list app",
            editing: false,
            newItem: '',
            newItemHighPriority: false,
            items: [
                // {id: 1, label: 'item 1', purchased: true, highPriority: true},
                // {id: 2, label: 'item 2', purchased: true, highPriority: true},
                // {id: 3, label: 'item 3', purchased: false, highPriority: false}
            ]
        }
    },
    computed: {
        reversedItems: function(){
            return [...this.items].reverse();
        }
    },
    methods: {
        addItem: function(){
            if(this.newItem.length > 0){
                this.items.push({
                    id:this.items.length+1, 
                    label: this.newItem,
                    highPriority: this.newItemHighPriority
                })
                console.log(this.items)
                this.newItem = ""
                this.newItemHighPriority = false
            }
        },
        doEdit(editing){
            this.editing = editing;
            this.newItem = ""
            this.newItemHighPriority = false
        },
        togglePurchased(item){
            item.purchased = !item.purchased
        }
    }
}).mount('#shopping-list')
