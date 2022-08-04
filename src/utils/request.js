async function searchItems(name, accessToken) {
  const response = await fetch(
    `https://api.spotify.com/v1/search?q=${name}&type=artist`,
    {
      headers: {
        Authorization: 'Bearer ' + accessToken,
        'Content-Type': 'application/json',
      },
    }
  );
  return await response.json();
}

async function getArtist(id, accessToken) {
  const response = await fetch(`https://api.spotify.com/v1/artists/${id}`, {
    headers: {
      Authorization: 'Bearer ' + accessToken,
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
}

async function getAlbums(id, accessToken) {
  const response = await fetch(
    `https://api.spotify.com/v1/artists/${id}/albums`,
    {
      headers: {
        Authorization: 'Bearer ' + accessToken,
        'Content-Type': 'application/json',
      },
    }
  );
  return await response.json();
}

async function getTopTracks(id, accessToken) {
  const response = await fetch(
    `https://api.spotify.com/v1/artists/${id}/top-tracks?country=FR`,
    {
      headers: {
        Authorization: 'Bearer ' + accessToken,
        'Content-Type': 'application/json',
      },
    }
  );
  return await response.json();
}

export { searchItems, getArtist, getAlbums, getTopTracks };
