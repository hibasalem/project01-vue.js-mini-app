<template>
  <the-header></the-header>
  <ul>
    <the-rss></the-rss>
  </ul>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import TheRss from './components/TheRss.vue';

export default {
  components: { TheHeader, TheRss },
  data() {
    return {};
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
