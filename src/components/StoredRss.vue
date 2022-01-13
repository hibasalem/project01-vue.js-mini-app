<template>
  <ul>
    <learinig-rss
      v-for="item in rss"
      :key="item.id"
      :title="item.title"
      :description="item.description"
      :link="item.link"
    ></learinig-rss>
  </ul>
</template>

<script>
import LearinigRss from './LearinigRss.vue';

export default {
  components: { LearinigRss },
  inject: ['rss'],
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
