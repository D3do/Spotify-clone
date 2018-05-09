import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import setTokenReducer from './store/reducers/setTokenReducer';
import userPlaylistsReducer from './store/reducers/userPlaylistsReducer';
import changeHeaderReducer from './store/reducers/changeHeaderReducer';
import userReducer from './store/reducers/userReducer';
import userLibraryReducer from './store/reducers/userLibraryReducer';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
  setTokenReducer: setTokenReducer,
  userPlaylistsReducer: userPlaylistsReducer,
  changeHeaderReducer: changeHeaderReducer,
  userReducer: userReducer,
  userLibraryReducer: userLibraryReducer
});

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
