import { SCORE_FAIL,SCORE_SUCCESS } from '../actions/types';

const initialState = {
  score: null,
  success:false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SCORE_SUCCESS:
      localStorage.setItem('score',JSON.stringify(action.payload))
      return {
        ...state,
        success:true
      };
      case SCORE_FAIL:
        localStorage.removeItem('score')
        return{
          ...state,
          success:false
        }
    default:
      return state;
  }
}