<template>
  <li class="track__list-item">
    <img
      class="cover"
      :src="track.album?.images[0].url"
      :alt="track.album?.name"
      loading="lazy"
    />
    <div class="list__item-details">
      <div class="item__details-wrapper">
        <h3>{{ track.name }}</h3>
        <div class="item__details-artists">
          <span v-for="(artist, index) in track.artists" :key="index">
            {{ artist.name }}&nbsp;
          </span>
        </div>
        <div class="item__details-track">
          <span
            ><i class="ri-time-line"></i>
            {{ formatTrackTime(track.duration_ms) }}</span
          >
          <span><i class="ri-album-line"></i> {{ track.album?.name }}</span>
        </div>
      </div>
      <div class="list__item-link">
        <CoverButtonLink
          :href="track.external_urls.spotify"
          icon="spotify"
          className="btn-spotify"
          external
        >
          Play on spotify
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
  components: {
    CoverButtonLink,
  },
  props: {
    track: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatTrackTime: function (duration) {
      return millisecondsToMinutesAndSeconds(duration);
    },
  },
};
</script>
<style>
.track__list-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  background-color: var(--alpha-dark);
}
.item__details-wrapper h3 {
  font-size: 0.875rem;
}
.list__item-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.item__details-artists {
  font-size: 0.75rem;
  font-style: italic;
}
.item__details-track {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  font-size: 0.75rem;
}
.btn-spotify {
  display: block;
  width: 100%;
  text-align: center;
  background-color: var(--spotify-black);
}
@media screen and (min-width: 64em) {
  .track__list-item {
    flex-direction: row;
  }
  .track__list-item img {
    width: 48px;
  }
  .list__item-details {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
