<template>
  <main class="main">
    <router-link to="/">Back</router-link>
    <section>
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
      <div>
        <ul>
          <li v-for="(albums, index) in artistAlbums.items" :key="index">
            {{ albums.name }} - {{ albums.release_date }} -
            {{ albums.total_tracks }}
            <ul>
              <li v-for="(artists, index) in albums.artists" :key="index">
                {{ artists.name }}
              </li>
            </ul>
            <img :src="albums?.images[2]?.url" />
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li v-for="(track, index) in artistTopTracks.tracks" :key="index">
            {{ track.name }} - {{ track.duration_ms }} ms
            {{ track.album?.name }}
            <div v-for="(artist, index) in track.artists" :key="index">
              {{ artist.name }}
            </div>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>
import { getArtist, getAlbums, getTopTracks } from '@/utils';

export default {
  name: 'ArtistView',
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
      console.log(this.artistTopTracks.tracks);
    })();
  },
};
</script>
