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
        <div class="list__item-title">
          <span>{{ albums.name }}</span>
        </div>
        <div class="list__item-details">
          <p>
            {{ albums.release_date.slice(0, 4) }} •
            <span v-for="(artists, index) in albums.artists" :key="index">
              {{ artists.name }}
            </span></p
          >
        </div>
        <div>
          <img class="cover" :src="albums.images[0].url" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import CoverListHeader from './ui/CoverListHeader.vue';

export default {
  name: 'ArtistAlbums',
  components: { CoverListHeader },
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
.albums__list-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: var(--border-radius);
  background-color: rgba(0, 0, 0, 0.25);
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
