<template>
  <div class="result__topbar">
    <div class="result__topbar-search">
      <CoverInput
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
import CoverInput from './ui/CoverInput.vue';
export default {
  name: 'CoverSearchBar',
  components: {
    CoverButtonIcon,
    CoverInput,
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
@media screen and (min-width: 28.75em) {
  .result__topbar-search {
    gap: 1rem;
    justify-content: flex-start;
  }

  .result__topbar-filter {
    gap: 1rem;
    justify-content: flex-end;
  }
}
@media screen and (min-width: 45em) {
  .result__topbar {
    flex-direction: row;
  }
  .result__topbar-search,
  .result__topbar-filter {
    flex: 1;
  }
}
</style>
