<template>
    <div>
        <ul class="list-group" v-for="post in BLOG" :key="post.id">
            <li class="list-group-item list-group-item-action mb-3">
                <h3>{{post.title}}</h3>
                {{post.body}}
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default{
    data(){
        return{
            BLOG: []
        }
    },
    mounted(){
        axios.get("http://localhost:5555/posts")
        .then(response => {
            this.BLOG = response.data;
            console.log(this.BLOG)
        })
        .catch(error => {
            alert(error)
        })
    }
}
</script>
