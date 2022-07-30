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
    fetchArtist(name) {
      if (name === '') {
        alert('Please enter an artist name before submit');
      } else {
        (async () => {
          const data = await searchItems(name);
          this.artistsList = data.artists.items;
        })();
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
    const data = await searchItems(this.$store.state.favoriteArtist);
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
.result__container {
  margin: 120px 0 240px 0;
}
.result__list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}
.list__item-title {
  font-size: 16px;
}
.list__item-image {
  overflow: hidden;
  border-radius: 8px;
}
.list__item-image img {
  transition: transform 500ms ease-out;
}
.list__item-image:hover img {
  transform: scale(1.05);
  transition: transform 500ms ease-out;
}
.result__topbar-search,
.result__topbar-filter {
  display: flex;
  gap: 16px;
}
.result__topbar-search input {
  caret-color: #fff;
  padding-left: 16px;
  border: 1px solid #fff;
  border-radius: 100px;
  color: #fff;
  background-color: transparent;
}
.result__topbar-search input::placeholder {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.685);
}
.result__topbar-search input .result__topbar-filter:first-child {
  margin-right: 16px;
}
.cover {
  border-radius: 8px;
}
@media screen and (min-width: 40em) {
  .result__list {
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (min-width: 57.5em) {
  .result__list {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media screen and (min-width: 64em) {
  .result__list {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
</style>
