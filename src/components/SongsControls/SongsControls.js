import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import playCircle from '@fortawesome/fontawesome-free-solid/faPlayCircle';
import pauseCircle from '@fortawesome/fontawesome-free-solid/faPauseCircle';

class SongControls extends Component {
  render() {
    return(
      <div>
        <FontAwesomeIcon icon={playCircle} />
        <FontAwesomeIcon icon={pauseCircle} />
      </div>
    );
  }
}

export default SongControls;
