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
      <label for="filter-select"
        ><i class="ri-filter-3-line"></i> Filter by</label
      >
      <CoverSelect
        id="filter-select"
        v-model="selected"
        @change="filterBy($event)"
        :options="['Followers', 'Popularity']"
      />
    </div>
  </div>
</template>

<script>
import CoverButtonIcon from './ui/CoverButtonIcon.vue';
import CoverInput from './ui/CoverInput.vue';
import CoverSelect from './ui/CoverSelect.vue';
export default {
  name: 'CoverSearchBar',
  components: {
    CoverButtonIcon,
    CoverInput,
    CoverSelect,
  },
  props: {
    fetchArtist: {
      type: Function,
    },
    filterBy: {
      type: Function,
    },
  },
  data() {
    return {
      inputSearch: '',
      selected: '',
    };
  },
};
</script>

<style>
.result__topbar {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}
.result__topbar-search,
.result__topbar-filter {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}
.result__topbar-filter {
  justify-content: flex-end;
}
@media screen and (min-width: 45em) {
  .result__topbar {
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
