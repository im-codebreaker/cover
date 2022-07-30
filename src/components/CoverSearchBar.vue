<template>
  <div class="result__topbar">
    <div class="result__topbar-search">
      <input
        type="text"
        placeholder="Search for an Artist"
        :value="inputSearch"
        @input="(event) => (inputSearch = event.target.value)"
      />
      <CoverButtonIcon @click="fetchArtist(inputSearch)" icon="search-2"
        >Search</CoverButtonIcon
      >
    </div>

    <div class="result__topbar-filter">
      <CoverButtonIcon @click="filterByFollower" icon="user" type="fill">
        Most Followed
      </CoverButtonIcon>
      <CoverButtonIcon
        @click="filterByPopularity"
        icon="star"
        className="yolo"
        type="fill"
      >
        Most Popular
      </CoverButtonIcon>
    </div>
  </div>
</template>

<script>
import CoverButtonIcon from './ui/CoverButtonIcon.vue';
export default {
  name: 'CoverSearchBar',
  components: {
    CoverButtonIcon,
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

<style>
.result__topbar,
.result__topbar-search,
.result__topbar-filter {
  display: flex;
}
.result__topbar {
  flex-direction: column;
  gap: 1rem;
}
.result__topbar-search,
.result__topbar-filter {
  justify-content: space-between;
}
</style>
