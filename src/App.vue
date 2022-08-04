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
  async mounted() {
    if (sessionStorage.getItem('accessToken') === null) {
      const token = await getAccessToken();
      sessionStorage.setItem('accessToken', token.access_token);
    }
  },
};
</script>

<style>
:root {
  --primary: #473956;
  --primary-lighter: #6f5a87;
  --primary-darker: #282030;
  --light: #f4f4f6;
  --alpha-dark: rgba(0, 0, 0, 0.25);
  --spotify-green: #1db954;
  --spotify-white: #fff;
  --spotify-black: #191414;
  --border-radius: 8px;
  --border-rounded: 100px;
  --cubic-bezier: cubic-bezier(0.53, 0.45, 0.26, 1.02);
}
::-webkit-scrollbar {
  width: 8px;
  background-color: var(--primary-darker);
}
::-webkit-scrollbar-thumb {
  background: var(--primary-lighter);
}
body {
  font-family: 'Open Sans', sans-serif;
  color: var(--light);
  background: var(--primary-darker) url(./assets/background.png) center center
    fixed no-repeat;
}
main {
  padding-block: 4rem;
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
.bold {
  font-weight: 600;
}
</style>
