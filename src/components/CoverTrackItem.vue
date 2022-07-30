<template>
  <li
    class="track__list-item"
    v-for="(track, index) in artistTopTracks?.tracks"
    :key="index"
  >
    <img :src="track.album?.images[1].url" :alt="track.album?.name" />
    <div class="list__item-details">
      <h3>{{ track.name }}</h3>
      <div class="item__details-artists">
        <span v-for="(artist, index) in track.artists" :key="index">
          {{ artist.name }}
        </span>
      </div>
      <div class="item__details-track">
        <span
          ><i class="ri-time-line"></i>
          {{ formatTrackTime(track.duration_ms) }}</span
        >
        <span><i class="ri-album-line"></i> {{ track.album?.name }}</span>
      </div>
      <div class="item__details-link">
        <CoverButtonLink
          :href="track.external_urls.spotify"
          icon="spotify"
          className="btn-spotify"
          external
        >
          Listen on spotify
        </CoverButtonLink>
      </div>
    </div>
  </li>
</template>
<script>
import { millisecondsToMinutesAndSeconds } from '@/utils';
import CoverButtonLink from './ui/CoverButtonLink.vue';

export default {
  name: 'CoverTrackItem',
  props: ['artistTopTracks'],
  methods: {
    formatTrackTime: function (duration) {
      return millisecondsToMinutesAndSeconds(duration);
    },
  },
  components: { CoverButtonLink },
};
</script>
<style>
.track__list-item {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.25);
  border-radius: 8px;
}
.track__list-item img {
  flex: 1;
  border-radius: 50%;
}
.list__item-details {
  gap: 1rem;
}
.list__item-details h2 {
  font-size: 1rem;
}
.item__details-artists {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 0.5rem;
  font-style: italic;
}
.item__details-artists,
.item__details-track {
  font-size: 0.875rem;
}
.item__details-track {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.btn-spotify {
  display: block;
  text-align: center;
  padding: 1rem 0;
  border-radius: 100px;
  color: var(--spotify-white);
  background-color: var(--spotify-black);
}
.btn-spotify:hover {
  border: 1px solid var(--spotify-green);
}
</style>
