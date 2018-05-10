import * as actionTypes from '../actions/actionTypes';

const initialState = {
  songs: null,
  fetchPlaylistsStart: false,
  fetchPlaylistsError: false,
  playlists: null,
  fetchPlaylistTracksStart: false,
  fetchPlaylistTracksError: false,
  fetchUserTracksStart: false,
  fetchUserTracksError: false,
  fetchRecentlyPlayedStart: false,
  fetchRecentlyPlayedError: false,
  recentlyPlayed: null,
  fetchUserAlbumsStart: false,
  fetchUserAlbumsError: false,
  userAlbums: null
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
      songs: action.songs
    }

    case actionTypes.FETCH_PLAYLIST_TRACKS_ERROR:
    return {
      ...state,
      fetchPlaylistTracksStart: false,
      fetchPlaylistTracksError: true,
    }

    case actionTypes.FETCH_USER_TRACKS_START:
    return {
      ...state,
      fetchUserTracksStart: true
    };

    case actionTypes.FETCH_USER_TRACKS_SUCCESS:
    return {
      ...state,
      fetchUserTracksStart: false,
      songs: action.songs
    };

    case actionTypes.FETCH_USER_TRACKS_ERROR:
    return {
      ...state,
      fetchUserTracksStart: false,
      fetchUserTracksError: true
    };

    case actionTypes.FETCH_RECENTLY_PLAYED_START:
    return {
      ...state,
      fetchRecentlyPlayedStart: true
    };

    case actionTypes.FETCH_RECENTLY_PLAYED_SUCCESS:
    return {
      ...state,
      fetchRecentlyPlayedStart: false,
      recentlyPlayed: action.recentlyPlayed
    };

    case actionTypes.FETCH_RECENTLY_PLAYED_ERROR:
    return {
      ...state,
      fetchRecentlyPlayedStart: false,
      fetchRecentlyPlayedError: true
    };

    case actionTypes.FETCH_USER_ALBUMS_START:
    return {
      ...state,
      fetchUserAlbumsStart: true
    };

    case actionTypes.FETCH_USER_ALBUMS_SUCCESS:
    return {
      ...state,
      fetchUserAlbumsStart: false,
      userAlbums: action.userAlbums
    };

    case actionTypes.FETCH_USER_ALBUMS_ERROR:
    return {
      ...state,
      fetchUserAlbumsStart: false,
      fetchUserAlbumsError: true
    };

    default:
    return state;
  }
}

export default reducer;
