<template>
  <div id="app">
    <app-header></app-header>
    <!-- <div class="container mt-5">
    <div class="search-bar d-flex justify-content-center">
      <div class="px-2"><i class="fa fa-search"></i></div>
      <div class="px-2">
        <input class="search-input" v-model="userNameInput" />
      </div>
      <div>
        <button class="search-button" v-on:click="findRepo()">Find
        </button>
      </div>
    </div>
    </div> -->
    <github-explorer user="Redoni18"></github-explorer>
  </div>
</template>

<script>
import appHeader from './components/appHeader.vue'
import GithubExplorer from './components/GithubExplorer.vue'
export default{
  components: {
    'github-explorer': GithubExplorer,
    'app-header': appHeader
  },
  data(){
    return{
      userNameInput: '',
      userName: ''
    }
  },
  methods: {
    findRepo(){
      this.userName = this.userNameInput
    }
  }
}
</script>

<style lang="less">
//@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//@import '../node_modules/@fortawesome/fontawesomefree/css/all.min.css';

#app{
  background: #eeeeee;
  min-height: 100vh;
}
</style>
