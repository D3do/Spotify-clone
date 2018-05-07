import * as actionTypes from './actionTypes';

export const setToken = accessToken => {
  console.log(accessToken)
  return {
    type: actionTypes.SET_TOKEN,
    accessToken: accessToken,
  };
};
