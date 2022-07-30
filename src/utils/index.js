function formatTimeDisplay(time) {
  return time < 10 ? `0${time}` : time;
}

function millisecondsToMinutesAndSeconds(milliseconds) {
  const minutes = Math.floor(milliseconds / 60000);
  const seconds = Math.floor((milliseconds % 60000) / 1000);

  return formatTimeDisplay(minutes) + ':' + formatTimeDisplay(seconds);
}

async function searchItems(name) {
  const token = sessionStorage.getItem('accessToken');
  const response = await fetch(
    `https://api.spotify.com/v1/search?q=${name}&type=artist`,
    {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    }
  );

  return await response.json();
}

async function getArtist(id) {
  const token = sessionStorage.getItem('accessToken');
  const response = await fetch(`https://api.spotify.com/v1/artists/${id}`, {
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
}

async function getAlbums(id) {
  const token = sessionStorage.getItem('accessToken');
  const response = await fetch(
    `https://api.spotify.com/v1/artists/${id}/albums`,
    {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    }
  );
  return await response.json();
}

async function getTopTracks(id) {
  const token = sessionStorage.getItem('accessToken');
  const response = await fetch(
    `https://api.spotify.com/v1/artists/${id}/top-tracks?country=FR`,
    {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    }
  );
  return await response.json();
}

export {
  millisecondsToMinutesAndSeconds,
  searchItems,
  getArtist,
  getAlbums,
  getTopTracks,
};
