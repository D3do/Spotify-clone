import * as actionTypes from '../actions/actionTypes';

const initialState = {
  fetchPlaylistsStart: false,
  fetchPlaylistsError: false,
  albums: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PLAYLISTS_START:
      return {
        ...state,
        fetchPlaylistsStart: true
      }

    case actionTypes.FETCH_PLAYLISTS_SUCCESS:
      return {
        ...state,
        fetchPlaylistsStart: false,
        fetchPlaylistsError: false,
        albums: action.albums
      }

    case actionTypes.FETCH_PLAYLISTS_ERROR:
      return {
        ...state,
        fetchPlaylistsStart: false,
        fetchPlaylistsError: true
      }

    default:
      return state;
  }
}

export default reducer;
