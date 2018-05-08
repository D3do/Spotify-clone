import * as actionTypes from '../actions/actionTypes';

const initialState = {
  headerTitle: 'Songs'
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.CHANGE_HEADER_TITLE:
      return {
        ...state,
        headerTitle: action.headerTitle
      };

    default:
      return state;
  }
};

export default reducer;
