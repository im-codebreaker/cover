const CLIENTID = process.env.VUE_APP_CLIENT_ID;
const CLIENTSECRET = process.env.VUE_APP_CLIENT_SECRET;

export default async function getAccessToken() {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    body:
      'grant_type=client_credentials&client_id=' +
      CLIENTID +
      '&client_secret=' +
      CLIENTSECRET,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  return await response.json();
}
