<template>
  <div class="result__topbar">
    <div class="result__topbar-search">
      <input
        type="text"
        placeholder="Search for an Artist"
        :value="inputSearch"
        @input="(event) => (inputSearch = event.target.value)"
      />
      <CoverButton
        @click="fetchArtist(inputSearch)"
        icon="search-2"
        text="Search"
      />
    </div>

    <div class="result__topbar-filter">
      <CoverButton @click="filterByFollower" icon="user" text="Most Followed" />
      <CoverButton
        @click="filterByPopularity"
        icon="star"
        text="Most Popular"
      />
    </div>
  </div>
</template>

<script>
import CoverButton from './ui/CoverButton.vue';
export default {
  name: 'CoverSearchBar',
  components: {
    CoverButton,
  },
  data() {
    return {
      inputSearch: '',
    };
  },
  props: {
    fetchArtist: {
      type: Function,
    },
    filterByFollower: {
      type: Function,
    },
    filterByPopularity: {
      type: Function,
    },
  },
};
</script>

<style></style>
