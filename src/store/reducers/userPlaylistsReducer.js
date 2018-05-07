import * as actionTypes from '../actions/actionTypes';

const initialState = {
  fetchPlaylistsStart: false,
  fetchPlaylistsError: false,
  playlists: null
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
        playlists: action.playlists
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
