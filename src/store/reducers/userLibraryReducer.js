import * as actionTypes from '../actions/actionTypes';

const initialState = {
  fetchUserTracksStart: false,
  fetchUserTracksError: false,
  userSavedTracks: null,
  fetchRecentlyPlayedStart: false,
  fetchRecentlyPlayedError: false,
  recentlyPlayed: null,
  fetchUserAlbumsStart: false,
  fetchUserAlbumsError: false,
  userAlbums: null
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.FETCH_USER_TRACKS_START:
      return {
        fetchUserTracksStart: true,
      };

    case actionTypes.FETCH_USER_TRACKS_SUCCESS:
      return {
        fetchUserTracksStart: false,
        userSavedTracks: action.userSavedTracks
      };

    case actionTypes.FETCH_USER_TRACKS_ERROR:
      return {
        fetchUserTracksStart: false,
        fetchUserTracksError: true
      };

    case actionTypes.FETCH_RECENTLY_PLAYED_START:
      return {
        fetchRecentlyPlayedStart: true
      };

    case actionTypes.FETCH_RECENTLY_PLAYED_SUCCESS:
      return {
        fetchRecentlyPlayedStart: false,
        recentlyPlayed: action.recentlyPlayed
      };

    case actionTypes.FETCH_RECENTLY_PLAYED_ERROR:
      return {
        fetchRecentlyPlayedStart: false,
        fetchRecentlyPlayedError: true
      };

    case actionTypes.FETCH_USER_ALBUMS_START:
      return {
        fetchUserAlbumsStart: true
      };

    case actionTypes.FETCH_USER_ALBUMS_SUCCESS:
      return {
        fetchUserAlbumsStart: false,
        userAlbums: action.userAlbums
      };

    case actionTypes.FETCH_USER_ALBUMS_ERROR:
      return {
        fetchUserAlbumsStart: false,
        fetchUserAlbumsError: true
      };

    default:
      return state;
  }
};

export default reducer;
