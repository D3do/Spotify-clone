import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import styles from './UserPlaylists.scss';

class UserPlaylists extends Component {
  state = {
    accessToken: ['dupa'],
    albums: []
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(prevState.accessToken !== nextProps.accessToken) {
      return {
        accessToken: nextProps.accessToken,
        albums: nextProps.fetchPlaylists(nextProps.accessToken)
      }
    }
    return null
  }

  render() {
    return(
      <div className={styles.UserPlaylists}>
        <h3 className='user-library-header'>Your Library</h3>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    accessToken: state.setTokenReducer ? state.setTokenReducer.accessToken : '',
    playlists: state.userPlaylistsReducer.albums ? state.userPlaylistsReducer.albums : null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPlaylists: (accessToken) => dispatch(actions.fetchPlaylists(accessToken))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPlaylists);
