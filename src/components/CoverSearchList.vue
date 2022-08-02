<template>
  <ul class="result__list">
    <li
      class="result__list-item"
      v-for="(artists, index) in artistsList"
      :key="artists.id"
    >
      <h2 v-if="index === 0" class="list__item-title"
        >{{ artists.name }}
        <CoverTags icon="star" type="fill">Best match</CoverTags></h2
      >
      <h2 v-else class="list__item-title">{{ artists.name }} </h2>
      <router-link :to="artists.id">
        <figure class="list__item-image">
          <img
            v-if="artists?.images[0]?.url === undefined"
            class="cover"
            src="../assets/no_cover.jpg"
            :alt="artists.name"
          />
          <img
            v-else
            class="cover"
            :src="artists?.images[0]?.url"
            :alt="artists.name"
          />
        </figure>
      </router-link>
    </li>
  </ul>
</template>

<script>
import CoverTags from './ui/CoverTags.vue';
export default {
  name: 'CoverSearchList',
  props: {
    artistsList: {
      type: Array,
    },
  },
  components: { CoverTags },
};
</script>
<style>
.result__list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  margin-block: 6.25rem;
}
.list__item-title {
  font-size: 0.875rem;
  margin-bottom: 1rem;
}
.list__item-image {
  border-radius: var(--border-radius);
  overflow: hidden;
}
.list__item-image .cover {
  aspect-ratio: 1 / 1;
  object-fit: cover;
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
@media screen and (min-width: 40em) {
  .result__list {
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (min-width: 57.5em) {
  .result__list {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media screen and (min-width: 64em) {
  .result__list {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
</style>
