import * as actionTypes from './actionTypes';

export const changeHeaderTitle = (headerTitle) => {
  return {
    type: actionTypes.CHANGE_HEADER_TITLE,
    headerTitle: headerTitle
  };
};
