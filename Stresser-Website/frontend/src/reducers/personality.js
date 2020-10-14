import { PERSCORE_FAIL,PERSCORE_SUCCESS } from '../actions/types';

const initialState = {
  personalitypred: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case PERSCORE_SUCCESS:
      return {
        personalitypred: action.payload,
      };
      case PERSCORE_FAIL:
        return{
            personalitypred: ""
        }
    default:
      return state;
  }
}