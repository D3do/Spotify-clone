import * as actionTypes from './actionTypes';

export const fetchUserStart = () => {
  return {
    type: actionTypes.FETCH_USER_START
  };
};

export const fetchUserSuccess = (user) => {
  return {
    type: actionTypes.FETCH_USER_SUCCESS,
    user: user
  };
};

export const fetchUserError = () => {
  return {
    type: actionTypes.FETCH_USER_ERROR
  };
};

export const fetchUser = (accessToken) => {
  return dispatch => {
    const request = new Request('https://api.spotify.com/v1/me', {
      headers: new Headers({
        'Authorization': 'Bearer ' + accessToken
      })
    });

    dispatch(fetchUserStart());

    fetch(request).then(response => {
      return response.json();
    }).then(data => {
      dispatch(fetchUserSuccess(data));
    }).catch(error => {
      console.log(error)
      dispatch(fetchUserError(error));
    });
  };
};
