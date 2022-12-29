<template>
    <div>
            <base-card>
                <base-button @click="setSelectedTab('stored-resources')" :mode="storedResourcesButtonMode">Stored Resources</base-button>
                <base-button @click="setSelectedTab('add-resource')" :mode="addResourcesButtonMode">Add Resources</base-button>
            </base-card>
        <keep-alive>
            <component :is="selectedTab"></component>
        </keep-alive>
    </div>
</template>

<script>
import StoredResources from './StoredResources.vue'
import AddResource from './AddResource.vue'
export default{
    components: {
        'stored-resources': StoredResources,
        'add-resource': AddResource,
    },
    data(){
        return{
            selectedTab: 'stored-resources',
            storedResources: []
        }
    },
    provide() {
        return{
            resources: this.storedResources,
            addResource: this.addResource,
            deleteResource: this.removeResource
        }
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab
        },
        addResource(title,description, url) {
            const newResource = {
                id: new Date().toISOString,
                title: title,
                description: description,
                link: url
            }

            this.storedResources.unshift(newResource);
            this.selectedTab = 'stored-resources'
        },
        removeResource(resId){
            const resIndex = this.storedResources.findIndex(resource => resource.id === resId)
            this.storedResources.splice(resIndex, 1)
        }
    },
    computed: {
        storedResourcesButtonMode(){
            return this.selectedTab === 'stored-resources' ? null : 'flat'
        },
        addResourcesButtonMode(){
            return this.selectedTab === 'add-resource' ? null : 'flat'
        }
    }
}
</script>