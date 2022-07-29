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
      <div class="result__container">
        <div class="result__topbar">
          <div class="result__topbar-search">
            <input
              type="text"
              placeholder="Search for an Artist"
              :value="inputSearch"
              @input="(event) => (inputSearch = event.target.value)"
            />
            <button class="btn" @click="fetchArtist"
              ><i class="ri-search-2-line"></i> Search</button
            >
          </div>

          <div class="result__topbar-filter">
            <button class="btn" @click="filterByFollower"
              ><i class="ri-user-fill"></i>Most followed</button
            >
            <button class="btn" @click="filterByPopularity">
              <i class="ri-star-fill"></i> Most Popular</button
            >
          </div>
        </div>

        <ul class="result__list">
          <li
            class="result__list-item"
            v-for="artists in artistsList"
            :key="artists.id"
          >
            <h2 class="list__item-title">{{ artists.name }} </h2>
            <router-link :to="artists.id">
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
            </router-link>
          </li>
        </ul>
      </div>
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
      inputSearch: '',
    };
  },
  methods: {
    fetchArtist() {
      if (this.inputSearch === '') {
        alert('Please enter an artist name before submit');
      } else {
        (async () => {
          const data = await searchItems(this.inputSearch);
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
.result__topbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
.btn {
  cursor: pointer;
  padding: 4px 16px;
  border-radius: 100px;
  color: #f4f4f6;
  border: 1px solid #f4f4f6bb;
  outline-color: #f4f4f6;
  background-color: #f4f4f681;
}
.btn:hover {
  background-color: #f4f4f6a8;
}
.btn i {
  margin-right: 8px;
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
