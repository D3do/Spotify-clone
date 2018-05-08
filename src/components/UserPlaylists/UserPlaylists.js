import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from '../../store/actions/index';
import styles from './UserPlaylists.scss';

class UserPlaylists extends Component {
  state = {
    accessToken: [],
    playlists: []
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(prevState.accessToken !== nextProps.accessToken) {
      return {
        accessToken: nextProps.accessToken,
        playlists: nextProps.fetchPlaylists(nextProps.accessToken)
      };
    }
    return null
  };

  setPlaylists = () => {
    return this.props.playlists.map(playlist => {
      const getPlaylistTracks = () => {
        this.props.changeHeaderTitle(playlist.name);
        this.props.fetchPlaylistTracks(playlist.owner.id, playlist.id, this.props.accessToken);
      }

      return (
        <li key={playlist.name}
            onClick={getPlaylistTracks}>
          <NavLink
            to={`/playlist/${playlist.name}`}
            activeClassName={styles.active}>
              {playlist.name}
            </NavLink>
        </li>
      );
    });
  };

  render() {
    return (
      <div className={styles.UserPlaylists}>
        <p>Your Library</p>
        <ul>
          {this.props.playlists && this.setPlaylists()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    accessToken: state.setTokenReducer ? state.setTokenReducer.accessToken : '',
    playlists: state.userPlaylistsReducer.playlists ? state.userPlaylistsReducer.playlists : null,
    userId: state.userReducer.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylists: (accessToken) => dispatch(actions.fetchPlaylists(accessToken)),
    fetchPlaylistTracks: (userId, playlistId, accessToken) => dispatch(actions.fetchPlaylistTracks(userId, playlistId, accessToken)),
    changeHeaderTitle: (headerTitle) => dispatch(actions.changeHeaderTitle(headerTitle))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPlaylists);
