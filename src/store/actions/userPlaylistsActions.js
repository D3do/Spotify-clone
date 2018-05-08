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

export const fetchPlaylistTracksSuccess = (playlistTracks) => {
  return {
    type: actionTypes.FETCH_PLAYLIST_TRACKS_SUCCESS,
    playlistTracks: playlistTracks
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
