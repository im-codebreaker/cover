<template>
  <div class="artist__albums">
    <CoverListHeader className="albums">
      <h2><i class="ri-album-fill"></i> Albums</h2>
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
  data() {
    return {
      settings: {
        dots: true,
        dotsClass: 'slick-dots custom-dot-class',
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    };
  },
  props: {
    artistAlbums: Object,
  },
};
</script>

<style>
.albums__list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
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
  background-image: url('https://images.unsplash.com/photo-1539375665275-f9de415ef9ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fG11c2ljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60');
}
@media screen and (min-width: 57.5em) {
  .artist__albums {
    grid-area: albums;
  }
  .albums__list {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
