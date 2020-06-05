import { combineReducers } from 'redux';
import { builderReducer } from './builder';

export const rootReducers = combineReducers({
  builder: builderReducer
});