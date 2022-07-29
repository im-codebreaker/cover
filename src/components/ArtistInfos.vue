<template>
  <div>
    <h1>{{ artistInfos.name }}</h1>
    <ul v-if="artistInfos.genres">
      <li v-for="(genre, index) in artistInfos.genres" :key="index">
        {{ genre }}
      </li>
    </ul>
    <p
      ><i class="ri-user-fill"></i
      >{{ artistInfos.followers?.total }} followers</p
    >
    <div v-if="artistInfos.images">
      <img :src="artistInfos?.images[0]?.url" :alt="artistInfos.name" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AristInfos',
  props: ['artistInfos'],
};
</script>
