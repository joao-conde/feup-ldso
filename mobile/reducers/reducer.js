import { combineReducers } from 'redux';

import facultyReducer from './modules/facultyReducer';
import languageReducer from './modules/languageReducer';
import lockReducer from './modules/lockReducer';

const rootReducer =  combineReducers({
  faculty: facultyReducer,
  language: languageReducer,
  lock: lockReducer
});

export default rootReducer;
