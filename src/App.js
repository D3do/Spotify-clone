import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';

import * as actions from './store/actions/index';
import UserPlaylists from './components/UserPlaylists/UserPlaylists';
import Header from './components/Header/Header';
import SongsList from './components/SongsList/SongsList';
import AlbumsList from './components/AlbumsList/AlbumsList';
import Footer from './components/Footer/Footer';
import styles from './App.scss';

class App extends Component {
  componentDidMount() {
      // eslint-disable-next-line
      let accessToken =  window.location.href.match(/\#(?:access_token)\=([\S\s]*?)\&/);

    if (accessToken) {
      this.props.setToken(accessToken[1]);
      this.props.fetchUser(accessToken[1]);
      this.props.fetchUserTracks(accessToken[1]);
    } else {
      window.location.href = 'https://accounts.spotify.com/authorize?client_id=d6264d0c6a234fabadb681e990433d49&scope=playlist-read-private%20playlist-read-collaborative%20playlist-modify-public%20user-read-recently-played%20playlist-modify-private%20ugc-image-upload%20user-follow-modify%20user-follow-read%20user-library-read%20user-library-modify%20user-read-private%20user-read-email%20user-top-read%20user-read-playback-state&response_type=token&redirect_uri=http://localhost:3000/callback';
    }
  };

  render() {
    let spotify = <h1>Loading...</h1>;
    let routes = (
      <Switch>
        <Route path="/library" component={SongsList} />
        <Route path="/playlists" component={SongsList} />
        <Route path="/callback" component={SongsList} />
        <Route path="/albums" component={AlbumsList} />
      </Switch>
    )

    if(this.props.accessToken) {
      spotify = (
        <React.Fragment>
          <Header />
          {routes}
          <UserPlaylists />
          <Footer />
        </React.Fragment>
      )
    }
    return (
      <div className={styles.App}>
        {spotify}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    accessToken: state.setTokenReducer.accessToken
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setToken: (accessToken) => dispatch(actions.setToken(accessToken)),
    fetchUser: (accessToken) => dispatch(actions.fetchUser(accessToken)),
    fetchUserTracks: (accessToken) => dispatch(actions.fetchUserTracks(accessToken))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
