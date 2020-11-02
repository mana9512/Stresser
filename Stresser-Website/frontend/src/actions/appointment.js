import axios from 'axios';
import { setAlert } from './alert';
import { returnErrors } from './messages';


import {
    BOOKED_FAIL,
    BOOKED_SUCCESS,
    SET_ALERT
} from './types';

//SAVE GENERATED SCORE
export const checkavailability = (user, slot, date, specialist,history) => (dispatch) => {
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
        console.log(res);
        // console.log(typeofres.data[0])
        if(res['status']===200){
          // dispatch({
          //   type:SET_ALERT,
          //   payload:res.data[0]
          // })
          return dispatch(setAlert(res.data[0],"danger"));
        }
        dispatch({
          type: BOOKED_SUCCESS,
          payload: res.data,
        });
        history.replace('/bookedsuccess')
      })
      .catch((err) => {
        console.log(err);
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
          type: BOOKED_FAIL,
        });
      });
  };
  