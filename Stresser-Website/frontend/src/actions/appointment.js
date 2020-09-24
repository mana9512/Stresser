import axios from 'axios';
import { returnErrors } from './messages';

import {
    BOOKED_FAIL,
    BOOKED_SUCCESS
} from './types';

//SAVE GENERATED SCORE
export const checkavailability = (user, slot, date, specialist) => (dispatch) => {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    // Request Body
    const body = JSON.stringify({user, slot, date, specialist});
    console.log(body);
    axios
      .post('/api/checkavailability/', body, config)
      .then((res) => {
        dispatch({
          type: BOOKED_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
          type: BOOKED_FAIL,
        });
      });
  };
  