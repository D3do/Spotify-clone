import * as actionTypes from '../actions/actionTypes';

const initialState = {
  accessToken: null,
};

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_TOKEN:
      return {
        ...state,
        accessToken: action.accessToken
      }

    default:
      return state;
  }
}

export default reducer;
