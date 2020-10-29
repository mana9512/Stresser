import { PERSCORE_FAIL,PERSCORE_SUCCESS } from '../actions/types';

const initialState = {
  personalitypred: undefined,
};

export default function (state = initialState, action) {
  
  switch (action.type) {
    case PERSCORE_SUCCESS:
      localStorage.setItem('personalitypred',action.payload)
      return {
        ...state,

       
      };
      case PERSCORE_FAIL:
  
        localStorage.removeItem('personalitypred',action.payload)
        return{
            ...state,
            personalitypred: undefined
        }
    default:

      return state;
  }
}