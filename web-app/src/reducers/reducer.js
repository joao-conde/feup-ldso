import { combineReducers } from 'redux';

import facultyReducer from './modules/facultyReducer';
import statsReducer from './modules/statsReducer';
import projectsReducer from './modules/projectsReducer';
import prospectsReducer from './modules/prospectsReducer';
import videosReducer from './modules/videosReducer';

const rootReducer =  combineReducers({
    faculty: facultyReducer,
    stats: statsReducer,
    socialProjects: projectsReducer,
    prospects: prospectsReducer,
    videos: videosReducer
});

export default rootReducer;
