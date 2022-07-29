<template>
  <ul>
    <li v-for="(albums, index) in artistAlbums.items" :key="index">
      {{ albums.name }} - {{ albums.release_date }} -
      {{ albums.total_tracks }}
      <ul>
        <li v-for="(artists, index) in albums.artists" :key="index">
          {{ artists.name }}
        </li>
      </ul>
      <img :src="albums?.images[2]?.url" />
    </li> </ul
></template>

<script>
export default {
  name: 'ArtistAlbums',
  props: ['artistAlbums'],
};
</script>

<style></style>
