import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import SingleAlbum from '../SingleAlbum/SingleAlbum';
import styles from './AlbumsList.scss';

class AlbumsList extends Component {
  setAlbums = () => {
      if (this.props.albums) {
        return (
          this.props.albums.map((album, i) => {
            console.log(album);
            return (
              <SingleAlbum
                key={i}
                path={`/playlists/${album.album.name}`}
                image={album.album.images[1].url}
                name={album.album.name}
                setSongs={() => this.props.fetchAlbumTracks(this.props.accessToken, album.album.id)} />
            );
          })
        );
      } else {
        console.log('test');
      }

  };

  render() {
    return(
      <div>
        <h1>{this.props.albums && this.setAlbums()}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    albums: state.fetchSongsReducer.albums,
    accessToken: state.setTokenReducer.accessToken
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAlbumTracks: (accessToken, albumId) => dispatch(actions.fetchAlbumTracks(accessToken, albumId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsList);
