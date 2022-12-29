<template>
    <li>
        <h2>{{name}} {{isFavorite ? '(Favorite)' : ''}}</h2>
        <button @click="toggleDetails">Show Details</button>
        <button @click="toggleFavorite">Is Favorite</button>
        <ul v-if="detailsAreVisible">
            <li>
                <strong>Phone: </strong>
                {{phoneNumber}}
            </li>
            <li>
                <strong>Email: </strong>
                {{emailAddress}}
            </li>
        </ul>
        <button @click="toggleDelete">Remove Friend</button>
    </li>
</template>

<script>
export default {
    emits: ['toggle-favorite'],
    props: {
        id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        emailAddress: {
            type: String,
            required: true
        },
        isFavorite: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    data(){
        return{
            detailsAreVisible: false,
        }
    },
    methods: {
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible
        },
        toggleFavorite(){
            this.$emit('toggle-favorite', this.id)
        },
        toggleDelete(){
            this.$emit('toggle-delete', this.id)
        }
    }
}
</script>