import { combineReducers } from 'redux';

import facultyReducer from './modules/facultyReducer';
import statsReducer from './modules/statsReducer';
import projectsReducer from './modules/projectsReducer';
import prospectsReducer from './modules/prospectsReducer';
import videosReducer from './modules/videosReducer';
import authenticationReducer from './modules/authenticationReducer';

const rootReducer =  combineReducers({
    faculty: facultyReducer,
    stats: statsReducer,
    socialProjects: projectsReducer,
    prospects: prospectsReducer,
    videos: videosReducer,
    auth: authenticationReducer,
});

export default rootReducer;
