<template>
  <div class="list__item-infos">
    <div class="item__infos-details">
      <span>{{ albums.name }}</span>
      <p>
        {{ albums.release_date.slice(0, 4) }} •
        <span v-for="(artists, index) in albums.artists" :key="index">
          {{ artists.name }}
        </span></p
      >
    </div>
    <div class="list__item-image">
      <img class="cover" :src="albums.images[0].url" loading="lazy" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'CoverAlbumItem',
  props: {
    albums: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style>
.list__item-infos {
  display: flex;
  flex-direction: column-reverse;
  gap: 0.5rem;
}
.item__infos-details p {
  font-size: 0.75rem;
  text-align: right;
}
</style>
