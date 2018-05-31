import * as actionTypes from './actionTypes';

export const fetchPlaylistsStart = () => {
  return {
    type: actionTypes.FETCH_PLAYLISTS_START
  };
};

export const fetchPlaylistsSuccess = playlists => {
  return {
    type: actionTypes.FETCH_PLAYLISTS_SUCCESS,
    playlists: playlists
  };
};

export const fetchPlaylistsError = () => {
  return {
    type: actionTypes.FETCH_PLAYLISTS_ERROR
  };
};

export const fetchPlaylists = accessToken => {
  return dispatch => {
    const request = new Request('https://api.spotify.com/v1/me/playlists', {
      headers: new Headers({
        'Authorization': 'Bearer ' + accessToken
      })
    });

    dispatch(fetchPlaylistsStart());

    fetch(request).then(response => {
      return response.json();
    }).then(data => {
      dispatch(fetchPlaylistsSuccess(data.items));
    }).catch(error => {
      dispatch(fetchPlaylistsError(error));
    });
  };
};

export const fetchPlaylistTracksStart = () => {
  return {
    type: actionTypes.FETCH_PLAYLIST_TRACKS_START
  };
};

export const fetchPlaylistTracksSuccess = songs => {
  return {
    type: actionTypes.FETCH_PLAYLIST_TRACKS_SUCCESS,
    songs: songs
  };
};

export const fetchPlaylistTracksError = () => {
  return {
    type: actionTypes.FETCH_PLAYLIST_TRACKS_ERROR,
  };
};

export const fetchPlaylistTracks = (userId, playlistId, accessToken) => {
  return dispatch => {
    const request = new Request(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
      headers: new Headers({
        'Authorization': 'Bearer ' + accessToken
      })
    });

    dispatch(fetchPlaylistTracksStart());

    fetch(request).then(response => {
      return response.json();
    }).then(data => {
      dispatch(fetchPlaylistTracksSuccess(data.items));
    }).catch(error => {
      console.log(error)
      dispatch(fetchPlaylistTracksError(error));
    });
  };
};

export const fetchUserTracksStart = () => {
  return {
    type: actionTypes.FETCH_USER_TRACKS_START
  };
};

export const fetchUserTracksSuccess = songs => {
  return {
    type: actionTypes.FETCH_USER_TRACKS_SUCCESS,
    songs: songs
  };
};

export const fetchUserTracksError = () => {
  return {
    type: actionTypes.FETCH_USER_TRACKS_ERROR
  };
};

export const fetchUserTracks = (accessToken) => {
  return dispatch => {
    const request = new Request('https://api.spotify.com/v1/me/tracks?limit=50', {
      headers: new Headers({
        'Authorization': 'Bearer ' + accessToken
      })
    });

    dispatch(fetchUserTracksStart());

    fetch(request).then(response => {
      return response.json()
    }).then(data => {
      dispatch(fetchUserTracksSuccess(data.items));
    }).catch(error => {
      dispatch(fetchUserTracksError(error));
    });
  };
};

export const fetchRecentlyPlayedStart = () => {
  return {
    type: actionTypes.FETCH_RECENTLY_PLAYED_START
  };
};

export const fetchRecentlyPlayedSuccess = albums => {
  return {
    type: actionTypes.FETCH_RECENTLY_PLAYED_SUCCESS,
    albums: albums
  };
};

export const fetchRecentlyPlayedError = () => {
  return {
    type: actionTypes.FETCH_RECENTLY_PLAYED_ERROR
  };
};

export const fetchRecentlyPlayed = (accessToken) => {
  return dispatch => {
    const request = new Request('https://api.spotify.com/v1/me/player/recently-played', {
      headers: new Headers({
        'Authorization': 'Bearer ' + accessToken
      })
    });

    dispatch(fetchRecentlyPlayedStart());

    fetch(request).then(response => {
      return response.json()
    }).then(data => {
      dispatch(fetchRecentlyPlayedSuccess(data.items));
    }).catch(error => {
      dispatch(fetchRecentlyPlayedError(error));
    });
  };
};

export const fetchUserAlbumsStart = () => {
  return {
    type: actionTypes.FETCH_USER_ALBUMS_START
  };
};

export const fetchUserAlbumsSuccess = albums => {
  return {
    type: actionTypes.FETCH_USER_ALBUMS_SUCCESS,
    albums: albums
  };
};

export const fetchUserAlbumsError = () => {
  return {
    type: actionTypes.FETCH_USER_ALBUMS_ERROR
  };
};

export const fetchUserAlbums = (accessToken) => {
  return dispatch => {
    const request = new Request('https://api.spotify.com/v1/me/albums', {
      headers: new Headers({
        'Authorization': 'Bearer ' + accessToken
      })
    });

    dispatch(fetchUserAlbumsStart());

    fetch(request).then(response => {
      return response.json()
    }).then(data => {
      dispatch(fetchUserAlbumsSuccess(data.items));
    }).catch(error => {
      dispatch(fetchUserAlbumsError(error));
    });
  };
};

export const fetchAlbumTracksStart = () => {
  return {
    type: actionTypes.FETCH_ALBUM_TRACKS_START
  };
};

export const fetchAlbumTracksSuccess = songs => {
  return {
    type: actionTypes.FETCH_ALBUM_TRACKS_SUCCESS,
    songs: songs
  };
};

export const fetchAlbumTracksError = () => {
  return {
    type: actionTypes.FETCH_ALBUM_TRACKS_ERROR
  };
};

export const fetchAlbumTracks = (accessToken, albumId) => {
  return dispatch => {
    const request = new Request(`https://api.spotify.com/v1/albums/${albumId}/tracks`, {
      headers: new Headers({
        'Authorization': 'Bearer ' + accessToken
      })
    });

    dispatch(fetchAlbumTracksStart());

    fetch(request).then(response => {
      return response.json()
    }).then(data => {
      dispatch(fetchAlbumTracksSuccess(data.items));
    }).catch(error => {
      dispatch(fetchAlbumTracksError(error));
    });
  };
};
