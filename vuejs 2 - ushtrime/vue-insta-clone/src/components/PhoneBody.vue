<template>
  <div class="phone-body">
    <div v-if="step === 1" class="feed" v-dragscroll.y>
      <vuegram-post v-for="post in posts"
        :post="post"
        :key="posts.indexOf(post)">
      </vuegram-post>
    </div>
    <div v-else-if="step === 2">
        <div class="selected-image" :style="{width: '100%'}">
            <img :src="image" alt="" class="image" :class="selectedFilter">
        </div>
        <div class="filter-container" v-dragscroll.x>
            <filter-type v-for="(filter,index) in filters"
                :filter="filter"
                :image="image"
                :key="index">
            </filter-type>
        </div>
    </div>
    <div v-else>
        <div class="selected-image" :style="{width: '100%'}">
            <img :src="image" alt="" class="image" :class="selectedFilter">
        </div>
        <div class="caption-container">
          <textarea class="caption-input"
            placeholder="Write a caption..."
            text="text"
            :value="value"
            @input="$emit('input',$event.target.value)">
          </textarea>
        </div>
    </div>
  </div>
</template>

<script>
import FilterType from './FilterType.vue';
import VuegramPost from "./VuegramPost";
export default {
  name: "PhoneBody",
  props: {
    step: Number,
    posts: Array,
    filters: Array,
    image: String,
    selectedFilter: String,
    value: String
  },
  components: {
    "vuegram-post": VuegramPost,
    'filter-type': FilterType
  }
};
</script>

<style lang="scss" src="../styles/phone-body.scss">
// Styles from stylesheet
</style>