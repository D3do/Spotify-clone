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
      return (
        <li key={playlist.name}>
          <NavLink
            to={`/${playlist.name}`}
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
    playlists: state.userPlaylistsReducer.playlists ? state.userPlaylistsReducer.playlists : null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylists: (accessToken) => dispatch(actions.fetchPlaylists(accessToken))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPlaylists);
