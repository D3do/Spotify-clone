import React, { Component } from 'react';
import { connect } from 'react-redux';
// import * as actions from '../../store/actions/index';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCalendar from '@fortawesome/fontawesome-free-solid/faCalendarAlt';
import faClock from '@fortawesome/fontawesome-free-solid/faClock';
import playCircle from '@fortawesome/fontawesome-free-solid/faPlayCircle';
// import pauseCircle from '@fortawesome/fontawesome-free-solid/faPauseCircle';
import styles from './SongsList.scss';

class SongsList extends Component {
  setSongs = () => {
    return (
      this.props.songs.map((song, i) => {
        return (
          <React.Fragment key={i}>
              <FontAwesomeIcon icon={playCircle} />
              <p className={styles.Title}>{song.track.name}</p>
              <p>{song.track.artists[0].name}</p>
              <p>{song.track.album.name}</p>
              <p>{song.added_at}</p>
              <p>{this.msToMinutesAndSeconds(song.track.duration_ms)}</p>
          </React.Fragment>
        )
      })
    )
  };

  msToMinutesAndSeconds(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

  render() {
    return(
      <div className={styles.Layout}>
        <div className={styles.Header}>
          <p className={styles.Title}>TITLE</p>
          <p className={styles.Artist}>ARTIST</p>
          <p className={styles.Album}>ALBUM</p>
          <FontAwesomeIcon icon={faCalendar} className={styles.Calendar} />
          <FontAwesomeIcon icon={faClock} className={styles.Clock} />
        </div>
        <div className={styles.SongsList}>
          {this.props.songs && this.setSongs()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    songs: state.fetchSongsReducer.songs
  };
};

export default connect(mapStateToProps)(SongsList);
