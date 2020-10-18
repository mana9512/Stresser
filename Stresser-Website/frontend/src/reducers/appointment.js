import { BOOKED_FAIL, BOOKED_SUCCESS } from '../actions/types';

const initialState = {
  availability: null,
  booked:false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case BOOKED_SUCCESS:
      return {
        ...state,
        availability: action.payload,
        booked:true
      };
      case BOOKED_FAIL:
        return{
            ...state,
            availability:null
        }
    default:
      return state;
  }
}