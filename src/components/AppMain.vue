<template>
  <main class="container">
    <h1>Search for your artist</h1>
    <section>
      <ul class="search__list">
        <li
          class="search__list-item"
          v-for="artists in artistsList"
          :key="artists.id"
        >
          {{ artists.name }} - {{ artists.type }}
          <figure v-for="(image, index) in artists.images" :key="index">
            <img
              class="cover"
              v-if="index === 1"
              :src="image.url"
              :alt="artists.name"
            />
          </figure>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
import { searchItems } from '@/utils';
export default {
  name: 'AppMain',
  data() {
    return {
      artistsList: [],
    };
  },
  methods: {
    getGenre: function (arr) {
      return arr[1];
    },
  },
  mounted() {
    (async () => {
      const data = await searchItems(this.$store.state.favoriteArtist);
      this.artistsList = data.artists.items;
      console.log(data.artists.items[0]);
    })();
  },
};
</script>

<style>
.container {
  margin: auto;
  max-width: 1320px;
}
.search__list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}
.cover {
  width: 240px;
  height: 240px;
  border-radius: 8px;
}
@media screen and (min-width: 64em) {
  .search__list {
    grid-template-columns: 320px 320px 320px 320px;
  }
  .cover {
    width: 320px;
    height: 320px;
  }
}
</style>
