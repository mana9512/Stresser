import axios from 'axios';
import { setAlert } from './alert';
import { returnErrors } from './messages';

import {
    PERSCORE_FAIL,
    PERSCORE_SUCCESS
} from './types';


export const personalityscore = (
  Agr1, Agr10, Agr2, Agr3, Agr4, Agr5, Agr6, Agr7, Agr8, Agr9,
  Csn1, Csn10, Csn2, Csn3, Csn4, Csn5, Csn6, Csn7, Csn8, Csn9,
  Est1, Est10, Est2, Est3, Est4, Est5, Est6, Est7, Est8, Est9,
  Ext1, Ext10, Ext2, Ext3, Ext4, Ext5, Ext6, Ext7, Ext8, Ext9,
  Opn1, Opn10, Opn2, Opn3, Opn4, Opn5, Opn6, Opn7, Opn8, Opn9,history) => (dispatch) => {
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    // Request Body
    const body = JSON.stringify({Agr1, Agr10, Agr2, Agr3, Agr4, Agr5, Agr6,Agr7,Agr8,Agr9,
      Csn1,Csn10,Csn2,Csn3,Csn4,Csn5,Csn6,Csn7,Csn8,Csn9,
      Est1,Est10,Est2,Est3,Est4,Est5,Est6,Est7,Est8,Est9,
      Ext1,Ext10,Ext2,Ext3,Ext4,Ext5,Ext6,Ext7,Ext8,Ext9,
      Opn1,Opn10,Opn2,Opn3,Opn4,Opn5,Opn6,Opn7,Opn8,Opn9});

      console.log(body);
   
    axios
      .post('/api/calculate_score/', body, config)
      .then((res) => {
        console.log(res.data[0]);
        dispatch({
          type: PERSCORE_SUCCESS,
          payload: res.data[0],
        });
        history.replace("/predictedpersonality");
      })
      .catch((err) => {
        console.log(err);
        if(err.response.status==500){
          dispatch(setAlert("You are required to attempt all questions","danger"))
        }
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
          type: PERSCORE_FAIL,
        });
      });
  };
  

