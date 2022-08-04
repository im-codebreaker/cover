<template>
  <figure v-if="match" class="list__item-image match" :class="className">
    <img
      v-if="cover === undefined"
      src="../assets/no_cover.jpg"
      class="cover"
      alt="A no cover placeholder"
    />
    <img
      v-else
      :src="cover"
      :alt="`Picture of the artist ${artistName}`"
      class="cover"
    />
    <figcaption class="legend">{{ artistName }} </figcaption>
  </figure>
  <figure v-else class="list__item-image" :class="className">
    <img
      v-if="cover === undefined"
      src="../assets/no_cover.jpg"
      class="cover"
      alt="A no cover placeholder"
    />
    <img
      v-else
      :src="cover"
      :alt="`Picture of the artist ${artistName}`"
      class="cover"
    />
    <figcaption class="legend">{{ artistName }} </figcaption>
  </figure>
</template>
<script>
export default {
  name: 'CoverArtisttem',
  props: {
    artistName: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      required: false,
      default: '',
    },
    cover: {
      type: String,
      required: true,
    },
    match: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
<style>
.list__item-image {
  position: relative;
  border-radius: var(--border-radius);
  overflow: hidden;
}
.list__item-image.match::before {
  content: 'best match';
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 4px 12px;
  font-size: 12px;
  font-style: italic;
  color: #fff;
  background-color: rgba(230, 6, 181, 0.25);
  border-radius: var(--border-rounded);
  z-index: 999;
}
.list__item-image .cover {
  aspect-ratio: 1 / 1;
  object-fit: cover;
}
.list__item-image .legend {
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 600;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20%;
  background: rgba(0, 0, 0, 0.33);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.4px);
  -webkit-backdrop-filter: blur(5.4px);
}
@media (hover: hover) {
  .list__item-image .cover {
    transition: transform 500ms var(--cubic-bezier);
  }
  .list__item-image .cover:hover {
    transform: scale(1.08);
    transition: transform 500ms var(--cubic-bezier);
  }
}
</style>
