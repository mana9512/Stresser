import { SCORE_FAIL,SCORE_SUCCESS } from '../actions/types';

const initialState = {
  score: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SCORE_SUCCESS:
      return {
        score: action.payload,
      };
      case SCORE_FAIL:
        return{
          score:null
        }
    default:
      return state;
  }
}