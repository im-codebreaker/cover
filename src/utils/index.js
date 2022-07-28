async function searchItems(name) {
  const token = localStorage.getItem('accessToken');
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
  const token = localStorage.getItem('accessToken');
  const response = await fetch(`https://api.spotify.com/v1/artists/${id}`, {
    headers: {
      Authorization: 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
}

async function getAlbums(id) {
  const token = localStorage.getItem('accessToken');
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
  const token = localStorage.getItem('accessToken');
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

export { searchItems, getArtist, getAlbums, getTopTracks };
