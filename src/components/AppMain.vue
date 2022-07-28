<template>
  <main class="main">
    <section class="container">
      <div class="hello">
        <h1>Welcome on _Cover</h1>
        <p
          >Try _Cover to search and discover many music Artists, try the search
          engine to display Albums and Top Tracks</p
        >
      </div>
      <button @click="filterByFollower">Most followed</button>
      <button @click="filterByPopularity">Most Popular</button>
      <ul class="search__list">
        <li
          class="search__list-item"
          v-for="artists in artistsList"
          :key="artists.id"
        >
          <h2 class="list__item-title">{{ artists.name }} </h2>
          <figure class="list__item-image">
            <img
              v-if="artists?.images[0]?.url === undefined"
              class="cover"
              src="https://via.placeholder.com/320"
              :alt="artists.name"
            />
            <img
              v-else
              class="cover"
              :src="artists?.images[0]?.url"
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
  mounted() {
    (async () => {
      const data = await searchItems(this.$store.state.favoriteArtist);
      this.artistsList = data.artists.items;
    })();
  },
};
</script>

<style>
.container {
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
.search__list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin: 120px 0 240px 0;
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
.cover {
  width: 240px;
  height: 240px;
  border-radius: 8px;
}
@media screen and (min-width: 64em) {
  .search__list {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  .cover {
    width: 320px;
    height: 320px;
  }
}
</style>
