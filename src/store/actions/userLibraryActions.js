import * as actionTypes from './actionTypes';

export const fetchUserTracksStart = () => {
  return {
    type: actionTypes.FETCH_USER_TRACKS_START
  };
};

export const fetchUserTracksSuccess = userSavedTracks => {
  return {
    type: actionTypes.FETCH_USER_TRACKS_SUCCESS,
    userSavedTracks: userSavedTracks
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

export const fetchRecentlyPlayedSuccess = recentlyPlayed => {
  return {
    type: actionTypes.FETCH_RECENTLY_PLAYED_SUCCESS,
    recentlyPlayed: recentlyPlayed
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

export const fetchUserAlbumsSuccess = userAlbums => {
  return {
    type: actionTypes.FETCH_USER_ALBUMS_SUCCESS,
    userAlbums: userAlbums
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
