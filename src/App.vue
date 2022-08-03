<template>
  <CoverHeader />
  <router-view></router-view>
  <CoverFooter />
</template>

<script>
import CoverHeader from './components/CoverHeader.vue';
import CoverFooter from './components/CoverFooter.vue';
import getAccessToken from './authorization';

export default {
  name: 'App',
  components: {
    CoverHeader,
    CoverFooter,
  },
  async created() {
    if (sessionStorage.getItem('accessToken') === null) {
      const token = await getAccessToken();
      sessionStorage.setItem('accessToken', token.access_token);
    }
  },
};
</script>

<style>
:root {
  --border-radius: 8px;
  --border-rounded: 100px;
  --spotify-green: #1db954;
  --spotify-white: #fff;
  --spotify-black: #191414;
  --cubic-bezier: cubic-bezier(0.53, 0.45, 0.26, 1.02);
}
::-webkit-scrollbar {
  width: 8px;
  background-color: #282030;
}
::-webkit-scrollbar-thumb {
  background: #6f4599;
}
body {
  font-family: 'Open Sans', sans-serif;
  color: #f4f4f6;
  background: #282030 url(./assets/background.png) center center fixed no-repeat;
}
ul,
ol {
  list-style: none;
}
a {
  cursor: pointer;
  text-decoration: none;
}
.container {
  width: 90%;
  margin: auto;
  max-width: 1320px;
}
.cover {
  border-radius: var(--border-radius);
}
</style>
