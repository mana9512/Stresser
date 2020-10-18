import { SCORE_FAIL,SCORE_SUCCESS } from '../actions/types';

const initialState = {
  score: null,
  success:false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SCORE_SUCCESS:
      return {
        ...state,
        score: action.payload,
        success:true
      };
      case SCORE_FAIL:
        return{
          ...state,
          score:null,
          success:false
        }
    default:
      return state;
  }
}