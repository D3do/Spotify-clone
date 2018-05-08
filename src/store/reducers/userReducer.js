import * as actionTypes from '../actions/actionTypes';

const reducer = (state = {}, action) => {
  switch(action.type) {
    case actionTypes.FETCH_USER_START:
      return {
        ...state,
        fetchUserStart: true
      };

    case actionTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        fetchUserStart: false,
        fetchUserError: false,
        user: action.user
      };

    case actionTypes.FETCH_USER_ERROR:
      return {
        ...state,
        fetchUserStart: false,
        fetchUserError: true
      };

    default:
      return state;
  }
};

export default reducer;
