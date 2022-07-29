<template>
  <ul>
    <li v-for="(track, index) in artistTopTracks" :key="index">
      {{ track.name }} - {{ track.duration_ms }} ms
      {{ track.album?.name }}
      <div v-for="(artist, index) in track.artists" :key="index">
        {{ artist.name }}
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ArtistTopTracks',
  props: ['artistTracks'],
};
</script>

<style></style>
