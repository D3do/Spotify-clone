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
            to={`/playlists/${playlist.name}`}
            className={this.props.headerTitle === playlist.name ? styles.active : null}>
              {playlist.name}
            </NavLink>
        </li>
      );
    });
  };

  renderLibrary = () => {
    const library = [
      {
        name: 'Recently Played',
        action: (name) => {
          this.props.changeHeaderTitle(name);
          this.props.fetchRecentlyPlayed(this.props.accessToken);
        }
      },
      {
        name: 'Songs',
        action: (name) => {
          this.props.changeHeaderTitle(name);
          this.props.fetchUserTracks(this.props.accessToken);
        }
      },
      {
        name: 'Albums',
        action: (name) => {
          this.props.changeHeaderTitle(name);
          this.props.fetchUserAlbums(this.props.accessToken);
        }
      },
    ];

    return (
      library.map(item => {
        return (
          <li
            key={item.name}
            onClick={() => item.action(item.name)}>
              <NavLink
                to={`/library/${item.name}`}
                className={this.props.headerTitle === item.name ? styles.active : null}
                >
                {item.name}
              </NavLink>
          </li>
        )
      })
    );
  }

  render() {
    return (
      <div className={styles.UserPlaylists}>
        <p>YOUR LIBRARY</p>
        <ul>
          {this.renderLibrary()}
        </ul>
        <p>PLAYLISTS</p>
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
    playlists: state.fetchSongsReducer.playlists ? state.fetchSongsReducer.playlists : null,
    userId: state.userReducer.user,
    headerTitle: state.changeHeaderReducer.headerTitle
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylists: (accessToken) => dispatch(actions.fetchPlaylists(accessToken)),
    fetchPlaylistTracks: (userId, playlistId, accessToken) => dispatch(actions.fetchPlaylistTracks(userId, playlistId, accessToken)),
    changeHeaderTitle: (headerTitle) => dispatch(actions.changeHeaderTitle(headerTitle)),
    fetchUserTracks: (accessToken) => dispatch(actions.fetchUserTracks(accessToken)),
    fetchRecentlyPlayed: (accessToken) => dispatch(actions.fetchRecentlyPlayed(accessToken)),
    fetchUserAlbums: (accessToken) => dispatch(actions.fetchUserAlbums(accessToken))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPlaylists);
