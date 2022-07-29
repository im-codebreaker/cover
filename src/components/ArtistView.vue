<template>
  <main class="main">
    <section class="section__artist container">
      <div>
        <CoverButtonLink href="/" icon="arrow-go-back" text="Go back" />
      </div>
      <ArtistInfos :artist-infos="artistInfos" />
      <ArtistAlbums :artist-albums="artistAlbums" />
      <ArtistTopTracks :artist-top-tracks="artistTopTracks.tracks" />
    </section>
  </main>
</template>

<script>
import { getArtist, getAlbums, getTopTracks } from '@/utils';

import ArtistTopTracks from './ArtistTopTracks.vue';
import ArtistInfos from './ArtistInfos.vue';
import ArtistAlbums from './ArtistAlbums.vue';
import CoverButtonLink from './ui/CoverButtonLink.vue';

export default {
  name: 'ArtistView',
  components: {
    ArtistTopTracks,
    ArtistInfos,
    ArtistAlbums,
    CoverButtonLink,
  },
  data() {
    return {
      artistInfos: [],
      artistAlbums: [],
      artistTopTracks: [],
    };
  },
  mounted() {
    (async () => {
      const infos = await getArtist(this.$route.params.id);
      const albums = await getAlbums(this.$route.params.id);
      const topTracks = await getTopTracks(this.$route.params.id);

      this.artistInfos = infos;
      this.artistAlbums = albums;
      this.artistTopTracks = topTracks;
    })();
  },
};
</script>
