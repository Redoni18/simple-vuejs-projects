<template>
    <ul v-if="resources.length">
        <learning-resource v-for="resource in resources" 
                :key="resource.id"
                :id="resource.id"
                :title="resource.title"
                :description="resource.description"
                :link="resource.link">
        </learning-resource>
    </ul>
    <header v-else>
        <h3>
            Add a few learning resources
        </h3>
    </header>
</template>

<script>
import LearningResource from './LearningResource.vue'
export default {
    components: {
        'learning-resource': LearningResource
    },
    inject: ['resources']
}
</script>

<style scoped>
    ul{
        list-style: none;
        margin: 0;
        padding: 0;
        margin: auto;
        max-width: 40rem;
    }
</style>