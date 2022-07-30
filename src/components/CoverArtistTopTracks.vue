<template>
  <ul class="track__list">
    <CoverListHeader className="tracks">
      <h2><i class="ri-music-2-line"></i> Top Tracks </h2>
    </CoverListHeader>
    <CoverTrackItem :artist-top-tracks="artistTopTracks" />
  </ul>
</template>

<script>
import CoverTrackItem from './CoverTrackItem.vue';
import CoverListHeader from './ui/CoverListHeader.vue';

export default {
  name: 'CoverArtistTopTracks',
  props: ['artistTopTracks'],
  components: { CoverTrackItem, CoverListHeader },
};
</script>

<style>
.list__header.tracks {
  background-image: url('https://images.unsplash.com/photo-1594623930572-300a3011d9ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
}
</style>
