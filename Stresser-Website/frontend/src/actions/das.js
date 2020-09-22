import axios from 'axios';
import { returnErrors } from './messages';

import {
    SCORE_FAIL,
    SCORE_SUCCESS
} from './types';

//SAVE GENERATED SCORE
export const savescore = (user_id, Dscore, Ascore, Sscore) => (dispatch) => {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    // Request Body
    const body = JSON.stringify({user_id, Dscore, Ascore, Sscore});
    console.log(body);
    axios
      .put('/api/dasscore/', body, config)
      .then((res) => {
        dispatch({
          type: SCORE_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
          type: SCORE_FAIL,
        });
      });
  };
  
