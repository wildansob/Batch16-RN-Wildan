import {combineReducers} from 'redux';
import LoginReducer from '../Screen/Login/redux/reducer';
import RegisterReducer from '../Screen/Register/redux/reducer';
import globalReducer from './globalReducer';

export const allReducers = combineReducers({
  Global: globalReducer,
  Register: RegisterReducer,
  Login: LoginReducer,
});
