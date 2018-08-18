const localHost = 'http://localhost:3000/'
const {
  REACT_APP_SPOTIFY_CLIENT_ID,
  REACT_APP_DOMAIN = localHost,
} = process.env;
const clientId = REACT_APP_SPOTIFY_CLIENT_ID;
const redirectUri = REACT_APP_DOMAIN;
const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}`
                  + `&response_type=token&scope=playlist-modify-public`
                  + `&redirect_uri=${redirectUri}`;

let accessToken;
const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    const matchAccessToken = window.location.href.match(/access_token=([^&]*)/);
    const matchExpiration = window.location.href.match(/expires_in=([^&]*)/);

    if (matchAccessToken && matchExpiration) {
      accessToken = matchAccessToken[1];
      const expiresIn = matchExpiration[1];
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      return accessToken;
    }
    window.location = accessUrl;
  },

  async search(term) {
    this.getAccessToken();
    const headers = { headers: { 'Authorization': `Bearer ${accessToken}` } };
    try {
      let response = await fetch(
        `https://api.spotify.com/v1/search?type=track&q=${term}`, headers
      );

      if (response.ok) {
        let jsonResponse = await response.json();
        if (!jsonResponse.tracks) {
          return jsonResponse.tracks = [];
        }
        const tracksList = jsonResponse.tracks.items.map(track => {
          return {
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            uri: track.uri
          };
        });
        return tracksList;
      }
      throw new Error('Request failed!');
    } catch (error) {
      console.log(error);
    }
  },

  savePlaylist(playlistName, trackURIs) {
    if (playlistName && trackURIs) {
      this.getAccessToken();
      const headers = {
        'Authorization': `Bearer ${accessToken}`,
        'Content-type': 'application/json'
      };
      let userId;
      let playlistId;

      const getUserId = async() => {
        try {
          let response = await fetch(
            `https://api.spotify.com/v1/me`, { headers: headers }
          );
          if (response.ok) {
            let jsonResponse = await response.json();
            userId = jsonResponse.id;
            return userId;
          }
          throw new Error('Request failed!');
        } catch (error) {
          console.log(error);
        }
      };

      const getPlaylisId = async(userId) => {
        try {
          let response = await fetch(
            `https://api.spotify.com/v1/users/${userId}/playlists`,
            {
              method: 'POST',
              body: JSON.stringify({ name: playlistName }),
              headers: headers
            }
          );
          if (response.ok) {
            let jsonResponse = await response.json();
            playlistId = jsonResponse.id;
            return [userId, playlistId];
          }
          throw new Error('Request failed!');
        } catch (error) {
          console.log(error);
        }
      };

      const addToPlaylist = async(userId, playlistId) => {
        try {
          let response = await fetch(
            `https://api.spotify.com/v1/users/${userId}/`
            + `playlists/${playlistId}/tracks`,
            {
              method: 'POST',
              body: JSON.stringify({ uris: trackURIs }),
              headers: headers
            }
          );
          if (response.ok) {
            let jsonResponse = await response.json();
            return jsonResponse;
          }
          throw new Error('Request failed!');
        } catch (error) {
          console.log(error);
        }
      };

      getUserId().then(userId => {
        getPlaylisId(userId).then(value => {
          addToPlaylist(value[0], value[1]);
        });
      });
    }
    return;
  }
};

export default Spotify;
