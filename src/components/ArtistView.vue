<template>
  <h1
    ><div>Artist ID : {{ $route.params.id }}</div></h1
  >
  <router-link to="/">Back</router-link>
</template>

<script>
export default {
  name: 'ArtistView',
};
</script>
