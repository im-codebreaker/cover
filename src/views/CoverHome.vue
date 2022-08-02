<template>
  <main class="main">
    <section class="section__result container">
      <div class="hello">
        <h1>Welcome on _Cover</h1>
        <p
          >Try _Cover to search and discover many music Artists, try the search
          engine to display Albums and Top Tracks</p
        >
      </div>
      <div class="result__container">
        <CoverSearchBar
          :fetch-artist="fetchArtist"
          :filter-by-follower="filterByFollower"
          :filter-by-popularity="filterByPopularity"
        />
        <CoverSearchList :artists-list="artistsList" />
      </div>
    </section>
  </main>
</template>

<script>
import { searchItems } from '@/utils';
import CoverSearchBar from '@/components/CoverSearchBar.vue';
import CoverSearchList from '@/components/CoverSearchList.vue';

export default {
  name: 'CoverHome',
  components: { CoverSearchBar, CoverSearchList },
  data() {
    return {
      artistsList: [],
    };
  },
  methods: {
    async fetchArtist(name) {
      if (name === '') {
        alert('Please enter an artist name before submit');
      } else {
        const data = await searchItems(name);
        this.artistsList = data.artists.items;
        this.$store.dispatch('setCurrentSearch', name);
      }
    },
    filterByFollower() {
      this.artistsList = this.artistsList.sort(function (a, b) {
        return b.followers.total - a.followers.total;
      });
    },
    filterByPopularity() {
      this.artistsList = this.artistsList.sort(function (a, b) {
        return b.popularity - a.popularity;
      });
    },
  },
  async mounted() {
    const currentSearch = this.$store.getters.getCurrentSearch;
    const data = await searchItems(currentSearch);
    this.artistsList = data.artists.items;
  },
};
</script>

<style>
.container {
  width: 90%;
  margin: auto;
  max-width: 1320px;
}
.main {
  margin-top: 120px;
}
.hello {
  padding: 40px;
  background-color: #12121228;
  border-radius: 8px;
}
</style>
