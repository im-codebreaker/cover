<template>
  <ul class="result__list">
    <li
      class="result__list-item"
      v-for="(artists, index) in artistsList"
      :key="artists.id"
    >
      <router-link :to="artists.id">
        <CoverAlbumItem
          v-if="index === 0"
          :artist-name="artists.name"
          :cover="artists?.images[0]?.url"
          match
        />
        <CoverAlbumItem
          v-else
          :artist-name="artists.name"
          :cover="artists?.images[0]?.url"
        />
      </router-link>
    </li>
  </ul>
</template>

<script>
import CoverAlbumItem from './CoverAlbumItem.vue';
export default {
  name: 'CoverSearchList',
  components: { CoverAlbumItem },
  props: {
    artistsList: {
      type: Array,
    },
  },
};
</script>
<style>
.result__list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
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
