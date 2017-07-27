import * as ActionTypes from './ActionTypes';

export function setRatingValue(value) {
  return {
    type: ActionTypes.SET_RATING_VALUE,
    payload: {
      value,
    },
  };
}
