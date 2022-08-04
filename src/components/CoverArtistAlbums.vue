<template>
  <div class="artist__albums">
    <CoverListHeader className="albums">
      <h2>Albums</h2>
    </CoverListHeader>
    <ul class="albums__list">
      <li
        class="albums__list-item"
        v-for="(albums, index) in artistAlbums?.items"
        :key="index"
      >
        <CoverAlbumItem :albums="albums" />
      </li>
    </ul>
  </div>
</template>

<script>
import CoverListHeader from './ui/CoverListHeader.vue';
import CoverAlbumItem from './CoverAlbumItem.vue';

export default {
  name: 'ArtistAlbums',
  components: { CoverListHeader, CoverAlbumItem },
  props: {
    artistAlbums: Object,
  },
};
</script>

<style>
.albums__list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.list__header.albums {
  background-image: url('https://images.unsplash.com/photo-1504904126298-3fde501c9b31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80');
}
@media screen and (min-width: 36em) {
  .albums__list {
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (min-width: 45em) {
  .albums__list {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media screen and (min-width: 64em) {
  .artist__albums {
    grid-area: albums;
  }
  .albums__list {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
@media screen and (min-width: 90em) {
  .albums__list {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
}
</style>
