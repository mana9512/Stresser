import { BOOKED_FAIL, BOOKED_SUCCESS } from '../actions/types';

const initialState = {
  availability: null,
};

export default function (state = initialState, action) {
  switch (action.type) {

    case BOOKED_SUCCESS:
      localStorage.setItem('availability',JSON.stringify(action.payload))
      return {
        ...state,
      };
      case BOOKED_FAIL:
        localStorage.removeItem('availability')
        return{
            ...state,
        }
    default:
      return state;
  }
}