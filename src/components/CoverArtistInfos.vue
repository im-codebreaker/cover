<template>
  <div class="artist__infos">
    <CoverListHeader className="infos">
      <h1>{{ artistInfos.name }}</h1>
    </CoverListHeader>
    <div class="artist__infos-metas">
      <CoverTags icon="disc">
        {{ artistInfos.type }}
      </CoverTags>
      <CoverTags icon="heart-3" type="fill">
        {{ artistInfos.followers?.total }} followers
      </CoverTags>
    </div>
    <div class="artist__infos-image" v-if="artistInfos.images">
      <img
        class="cover"
        :src="artistInfos?.images[0]?.url"
        :alt="artistInfos.name"
      />
    </div>
    <ul class="artist__infos-genre" v-if="artistInfos.genres">
      <li v-for="(genre, index) in artistInfos.genres" :key="index">
        <CoverTags icon="music" type="fill">
          {{ genre }}
        </CoverTags>
      </li>
    </ul>
  </div>
</template>

<script>
import CoverTags from './ui/CoverTags.vue';
import CoverListHeader from './ui/CoverListHeader.vue';

export default {
  name: 'CoverAristInfos',
  components: { CoverTags, CoverListHeader },
  props: {
    artistInfos: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.artist__infos-image {
  position: relative;
  margin: 2rem 0;
}
.artist__infos-image::before {
  content: '';
  position: absolute;
  width: 90%;
  height: 90%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px dashed rgba(255, 255, 255, 0.555);
  border-radius: var(--border-radius);
}
.artist__infos-image .cover {
  width: 100%;
}
.list__header.infos {
  background-image: url('https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
}
.artist__infos-metas,
.artist__infos-genre {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}
.artist__infos-metas {
  justify-content: space-between;
}
.artist__infos-genre {
  flex-wrap: wrap;
  margin: 1rem 0;
}
.followers {
  font-size: 12px;
}
@media screen and (min-width: 64em) {
  .artist__infos {
    grid-area: infos;
  }
}
</style>
