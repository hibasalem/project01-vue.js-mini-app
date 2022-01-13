<template>
  <card>
    <base-button
      @click="setSelectedTab('stored-rss')"
      :mode="slectedTab === 'stored-rss' ? null : 'flat'"
    >
      View Resources
    </base-button>
    <base-button
      @click="setSelectedTab('add-rss')"
      :mode="slectedTab === 'add-rss' ? null : 'flat'"
      >Add Resources</base-button
    >
  </card>
  <keep-alive> <component :is="slectedTab"></component> </keep-alive>
</template>

<script>
import StoredRss from './StoredRss.vue';
import AddRss from './AddRss.vue';

export default {
  components: {
    StoredRss,
    AddRss,
  },
  data() {
    return {
      slectedTab: 'stored-rss',
      myRss: [
        {
          id: 1,
          title: 'ress 1',
          description: 'some description 1',
          link: 'https://github.com/hibasalem?tab=repositories',
        },
        {
          id: 2,
          title: 'ress 2 ',
          description: 'some description 2',
          link: 'https://github.com/hibasalem?tab=repositories',
        },
      ],
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.slectedTab = tab;
    },
    addResource(title, description, link) {
      const newRss = {
        id: new Date().toISOString(),
        title,
        description,
        link,
      };
      this.myRss.unshift(newRss);
    },
    removeRss(id) {
      const resIdx = this.myRss.findIndex((res) => res.id === id);
      this.myRss.splice(resIdx, 1);
    },
  },
  provide() {
    return {
      rss: this.myRss,
      addResource: this.addResource,
      removeRss: this.removeRss,
    };
  },
};
</script>
