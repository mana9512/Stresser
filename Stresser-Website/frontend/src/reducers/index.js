import { combineReducers } from 'redux';
import errors from './errors';
import messages from './messages';
import auth from './auth';
import alert from './alert';


export default combineReducers({
  errors,
  messages,
  auth,
alert
});