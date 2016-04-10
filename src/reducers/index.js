import { combineReducers } from 'redux-immutable';
import folders from './folders';

const rootReducer = combineReducers({
  folders
})

export default rootReducer