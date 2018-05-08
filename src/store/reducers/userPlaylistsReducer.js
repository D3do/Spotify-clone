import * as actionTypes from '../actions/actionTypes';

const initialState = {
  fetchPlaylistsStart: false,
  fetchPlaylistsError: false,
  playlists: null,
  fetchPlaylistTracksStart: false,
  fetchPlaylistTracksError: false,
  playlistTracks: null
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

    case actionTypes.FETCH_PLAYLIST_TRACKS_START:
      return {
        ...state,
        fetchPlaylistTracksStart: true
      }

    case actionTypes.FETCH_PLAYLIST_TRACKS_SUCCESS:
      return {
        ...state,
        fetchPlaylistTracksStart: false,
        fetchPlaylistTracksError: false,
        playlistTracks: action.playlistTracks
      }

    case actionTypes.FETCH_PLAYLIST_TRACKS_ERROR:
      return {
        ...state,
        fetchPlaylistTracksStart: false,
        fetchPlaylistTracksError: true,
      }

    default:
      return state;
  }
}

export default reducer;
