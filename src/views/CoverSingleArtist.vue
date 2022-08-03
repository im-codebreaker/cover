<template>
  <main>
    <aside class="container">
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

<style>
.section__artist {
  padding-top: 6.25rem;
}
.list__item-title {
  font-weight: 600;
}
.list__item-details {
  font-size: 0.75rem;
}
@media screen and (min-width: 57.5em) {
  .section__artist {
    display: grid;
    grid-template-areas:
      'infos infos'
      'albums tracks';
    gap: 40px;
  }
}
@media screen and (min-width: 90em) {
  .section__artist {
    display: grid;
    grid-template-areas:
      'infos tracks'
      'albums albums';
    gap: 40px;
  }
}
</style>
