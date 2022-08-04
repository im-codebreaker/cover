<template>
  <main class="container">
    <section class="section__home container">
      <div class="section__home-hero">
        <h1>Welcome on _Cover</h1>
        <p
          >With _Cover you can search for your favorite music artist, display
          discography and top tracks. <span class="bold">Try it now!</span></p
        >
      </div>
      <div class="section__home-result">
        <CoverSearchBar :fetch-artist="fetchArtist" :filter-by="filterBy" />
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
    filterBy(event) {
      switch (event.target.value) {
        case 'Followers':
          this.artistsList = this.artistsList.sort(function (a, b) {
            return b.followers.total - a.followers.total;
          });
          break;
        case 'Popularity':
          this.artistsList = this.artistsList.sort(function (a, b) {
            return b.popularity - a.popularity;
          });
          break;
        default:
          return;
      }
    },
  },
  async mounted() {
    const currentSearch = this.$store.getters.getCurrentSearch;
    const token = sessionStorage.getItem('accessToken');
    const data = await searchItems(currentSearch, token);
    this.artistsList = data.artists.items;
  },
};
</script>

<style>
.section__home {
  padding-top: 6.25rem;
}
.section__home-hero {
  padding: 2.5rem;
  background-color: var(--alpha-dark);
  border-radius: var(--border-radius);
}
.section__home-hero h1 {
  font-family: 'Play', sans-serif;
  font-size: clamp(1rem, 3vw + 0.5rem, 3rem);
}
.section__home-hero p {
  max-width: 60ch;
}
.section__home-result {
  margin-block: 6.25rem;
}
@media screen and (min-width: 57.5em) {
  .section__home-hero {
    position: relative;
    overflow: hidden;
  }
  .section__home-hero::before {
    content: '';
    position: absolute;
    width: 400px;
    height: 400px;
    top: -100px;
    right: 0;
    background: transparent url(../assets/headphones.png) center center
      no-repeat;
  }
}
@media screen and (min-width: 64em) {
  .section__home-hero p {
    font-size: 1rem;
  }
}
</style>
