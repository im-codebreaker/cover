<template>
  <div class="artist__tracks">
    <CoverListHeader className="tracks">
      <h2><i class="ri-music-2-line"></i> Top Tracks </h2>
    </CoverListHeader>
    <ul class="tracks__list">
      <CoverTrackItem
        v-for="(track, index) in artistTopTracks?.tracks"
        :key="index"
        :track="track"
      />
    </ul>
  </div>
</template>

<script>
import CoverTrackItem from './CoverTrackItem.vue';
import CoverListHeader from './ui/CoverListHeader.vue';

export default {
  name: 'CoverArtistTopTracks',
  props: {
    artistTopTracks: Object,
  },
  components: { CoverTrackItem, CoverListHeader },
};
</script>

<style>
.tracks__list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}
.list__header.tracks {
  background-image: url('https://images.unsplash.com/photo-1594623930572-300a3011d9ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
}
@media screen and (min-width: 36em) {
  .tracks__list {
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (min-width: 45em) {
  .tracks__list {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media screen and (min-width: 64em) {
  .artist__tracks {
    grid-area: tracks;
  }
  .tracks__list {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
}
</style>
