import axios from 'axios';
import { returnErrors } from './messages';

import {
    SCORE_FAIL,
    SCORE_SUCCESS
} from './types';

//SAVE GENERATED SCORE
export const savescore = (id, dscore, ascore, sscore) => (dispatch) => {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    // Request Body
    const body = JSON.stringify({ id, dscore, ascore, sscore });
    console.log(body);
    axios
      .post('/api/dasscore', body, config)
      .then((res) => {
        dispatch({
          type: SCORE_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
          type: SCORE_FAIL,
        });
      });
  };
  
