<template>
  <ul class="result__list">
    <li
      class="result__list-item"
      v-for="(artists, index) in artistsList"
      :key="artists.id"
    >
      <router-link :to="artists.id">
        <CoverArtistItem
          v-if="index === 0"
          :artist-name="artists.name"
          :cover="artists?.images[0]?.url"
          match
        />
        <CoverArtistItem
          v-else
          :artist-name="artists.name"
          :cover="artists?.images[0]?.url"
        />
      </router-link>
    </li>
  </ul>
</template>

<script>
import CoverArtistItem from './CoverArtistItem.vue';
export default {
  name: 'CoverSearchList',
  components: { CoverArtistItem },
  props: {
    artistsList: {
      type: Object,
      required: true,
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
