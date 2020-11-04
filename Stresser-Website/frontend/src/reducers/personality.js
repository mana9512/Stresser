import { PERSCORE_FAIL,PERSCORE_SUCCESS } from '../actions/types';

const initialState = {
  personalitypred: undefined,
  predsuccess:false
};

export default function (state = initialState, action) {
  
  switch (action.type) {
    case PERSCORE_SUCCESS:
      localStorage.setItem('personalitypred',action.payload)
      return {
        ...state,
        predsuccess:true
       
      };
      case PERSCORE_FAIL:
  
        localStorage.removeItem('personalitypred')
        return{
            ...state,
            predsuccess:false
           
        }
    default:

      return state;
  }
}