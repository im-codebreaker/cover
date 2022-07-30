<template>
  <main class="main">
    <aside>
      <CoverButtonLink href="/" icon="arrow-go-back" size="small"
        >Go back</CoverButtonLink
      >
    </aside>
    <section class="section__artist container">
      <CoverArtistInfos :artist-infos="artistInfos" />
      <CoverArtistAlbums :artist-albums="artistAlbums" />
      <CoverArtistTopTracks :artist-top-tracks="artistTopTracks" />
    </section>
  </main>
</template>

<script>
import { getArtist, getAlbums, getTopTracks } from '@/utils';
import CoverArtistInfos from '@/components/CoverArtistInfos.vue';
import CoverArtistAlbums from '@/components/CoverArtistAlbums.vue';
import CoverArtistTopTracks from '@/components/CoverArtistTopTracks.vue';
import CoverButtonLink from '@/components/ui/CoverButtonLink.vue';

export default {
  name: 'CoverSingleArtist',
  components: {
    CoverArtistInfos,
    CoverArtistAlbums,
    CoverButtonLink,
    CoverArtistTopTracks,
  },
  data() {
    return {
      artistInfos: [],
      artistAlbums: [],
      artistTopTracks: [],
    };
  },
  async created() {
    this.artistInfos = await getArtist(this.$route.params.id);
    this.artistAlbums = await getAlbums(this.$route.params.id);
    this.artistTopTracks = await getTopTracks(this.$route.params.id);
  },
};
</script>
