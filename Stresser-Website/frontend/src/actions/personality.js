import axios from 'axios';
import { returnErrors } from './messages';

import {
    PERSCORE_FAIL,
    PERSCORE_SUCCESS
} from './types';


export const personalityscore = (gender, age, openness, conscientiousness, agreeableness, extraversion, neuroticism) => (dispatch) => {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    // Request Body
    const body = JSON.stringify({gender, age, openness, conscientiousness, agreeableness, extraversion, neuroticism});
    console.log(body);
    axios
      .post('/api/personalityscore/', body, config)
      .then((res) => {
        console.log(res);
        dispatch({
          type: PERSCORE_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
          type: PERSCORE_FAIL,
        });
      });
  };
  

