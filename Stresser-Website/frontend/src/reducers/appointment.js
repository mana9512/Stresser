import { BOOKED_FAIL, BOOKED_SUCCESS } from '../actions/types';

const initialState = {
  availability: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case BOOKED_SUCCESS:
      return {
        availability: action.payload,
      };
      case BOOKED_FAIL:
        return{
            availability:null
        }
    default:
      return state;
  }
}