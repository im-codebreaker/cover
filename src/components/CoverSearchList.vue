<template>
  <ul class="result__list">
    <li
      class="result__list-item"
      v-for="artists in artistsList"
      :key="artists.id"
    >
      <h2 class="list__item-title">{{ artists.name }} </h2>
      <router-link :to="artists.id">
        <figure class="list__item-image">
          <img
            v-if="artists?.images[0]?.url === undefined"
            class="cover"
            src="https://via.placeholder.com/320"
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
export default {
  name: 'CoverSearchList',
  props: {
    artistsList: {
      type: Array,
    },
  },
};
</script>
<style></style>
