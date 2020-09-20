import { SCORE_FAIL,SCORE_SUCCESS } from '../actions/types';

const initialState = {
  score: {},
  status: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SCORE_SUCCESS:
      return {
        msg: action.payload.msg,
        status: action.payload.status,
      };
    default:
      return state;
  }
}