import axios from 'axios';
import { returnErrors } from './messages';

import {
    SCORE_FAIL,
    SCORE_SUCCESS
} from './types';

//SAVE GENERATED SCORE
export const savescore = (user, Dscore, Ascore, Sscore) => (dispatch) => {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    // Request Body
    const body = JSON.stringify({user, Dscore, Ascore, Sscore});
    console.log(body);
    axios
      .post('/api/dasscore/', body, config)
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
  
  export const personalityscore = (gender, age, user, openness, conscientiousness, agreeableness, extraversion, neuroticism) => (dispatch) => {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    // Request Body
    const body = JSON.stringify({gender, age, user, openness, conscientiousness, agreeableness, extraversion, neuroticism});
    console.log(body);
    axios
      .post('/api/personalityscore/', body, config)
      .then((res) => {
        console.log(res);
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
  

