import axios from 'axios';
import { returnErrors } from './messages';

import { setAlert } from './alert';
import {
    SCORE_FAIL,
    SCORE_SUCCESS
} from './types';

//SAVE GENERATED SCORE
export const savescore = (user, Dscore, Ascore, Sscore, history) => (dispatch) => {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    // Request Body
    const body = JSON.stringify({user, Dscore, Ascore, Sscore});
    axios
      .post('/api/dasscore/', body, config)
      .then((res) => {
        dispatch({
          type: SCORE_SUCCESS,
          payload: res.data,
        });
        history.replace("/scoredisplay");
      })
      .catch((err) => {
   
        if(err.response.status==500){
          dispatch(setAlert("You are required to attempt all questions","danger"))
        }
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
          type: SCORE_FAIL,
        });
      });
  };
  
  