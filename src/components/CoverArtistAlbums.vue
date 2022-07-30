<template>
  <ul class="albums__list">
    <CoverListHeader className="albums">
      <h2><i class="ri-album-fill"></i> Albums</h2>
    </CoverListHeader>
    <li v-for="(albums, index) in artistAlbums?.items" :key="index">
      {{ albums.name }} - {{ albums.release_date }} -
      {{ albums.total_tracks }}
      <ul>
        <li v-for="(artists, index) in albums.artists" :key="index">
          {{ artists.name }}
        </li>
        <img :src="albums.images[1].url" />
      </ul>
    </li> </ul
></template>

<script>
import CoverListHeader from './ui/CoverListHeader.vue';
export default {
  name: 'ArtistAlbums',
  props: ['artistAlbums'],
  data() {
    return {
      uniqueArtistAlbums: [],
    };
  },
  methods: {},
  components: { CoverListHeader },
};
</script>

<style>
.list__header.albums {
  background-image: url('https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60');
}
</style>
