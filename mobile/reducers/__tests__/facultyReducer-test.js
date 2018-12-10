import { setFaculty, clearFaculty, getStats, getSocialProjects, getSocialProjectDetails, getFutureProspects, getVideos, getResearchCentres, getResearchCentreDetails} from '../modules/facultyReducer';
import {
    GET_STATS_FAIL,
    GET_VIDEOS_SUCCESS,
    GET_FUTURE_PROSPECTS_SUCCESS,
    GET_RESEARCH_CENTRE_BY_ID_SUCCESS,
    GET_RESEARCH_CENTRES_SUCCESS,
    GET_SOCIAL_PROJECT_BY_ID_SUCCESS,
    GET_SOCIAL_PROJECTS_SUCCESS,
    GET_STATS_SUCCESS,
    GET_STATS
} from '../modules/facultyReducer';
import reducer from '../modules/facultyReducer';

describe('Testing faculty actions', () => {

    it('creates a SET_FACULTY Action', () => {
        expect(setFaculty('feup')).toMatchSnapshot();
    });

    it('creates a CLEAR_FACULTY Action', () => {
        expect(clearFaculty()).toMatchSnapshot();
    });

    it('creates a GET_STATS Action', () => {
        expect(getStats('en', 'feup')).toMatchSnapshot();
    });

    it('creates a GET_SOCIAL_PROJECTS Action', () => {
        expect(getSocialProjects('en', 'feup')).toMatchSnapshot();
    });

    it('creates a GET_SOCIAL_PROJECT_BY_ID Action', () => {
        expect(getSocialProjectDetails('en', 'feup', 'id')).toMatchSnapshot();
    });

    it('creates a GET_RESEARCH_CENTRES Action', () => {
        expect(getResearchCentres()).toMatchSnapshot();
    });

    it('creates a GET_RESEARCH_CENTRE_BY_ID Action', () => {
        expect(getResearchCentreDetails('en', 'feup')).toMatchSnapshot();
    });

    it('creates a GET_FUTURE_PROSPECTS Action', () => {
        expect(getFutureProspects('en', 'feup')).toMatchSnapshot();
    });

    it('creates a GET_VIDEOS Action', () => {
        expect(getVideos('feup')).toMatchSnapshot();
    });

});

describe('Testing if faculty reducer', () => {

    it('changes faculty to feup', () => {

        const initialState = {
            name: 'faup'
        };

        expect(reducer(initialState, setFaculty('feup'))).toMatchSnapshot();
    });

    it('clears store state', () => {

        const initialState = {
            loading: false,
            name: '',
            stats: {},
            socialProjects: [],
            currSocialProjectId: -1,
            futureProspects: {},
            videos: []
        };

        expect(reducer(initialState, clearFaculty())).toMatchSnapshot();
    });

    it('tries to get statistics', () => {
        const getStatsState = {
            type: GET_STATS,
        };

        expect(reducer({}, getStatsState)).toMatchSnapshot();
    });

    it('gets statistics successfully', () => {
        const getStatsState = {
            type: GET_STATS_SUCCESS,
            payload: {data: ['50%', '20% - Teachers and Researchers']}
        };

        expect(reducer({}, getStatsState)).toMatchSnapshot();
    });


    it('gets projects successfully', () => {
        const getProjectsState = {
            type: GET_SOCIAL_PROJECTS_SUCCESS,
            payload: {data: ['This is the best project', 'This is another project']}
        };

        expect(reducer({}, getProjectsState)).toMatchSnapshot();
    });

    it('gets projects by id successfully', () => {
        const getProjectState = {
            type: GET_SOCIAL_PROJECT_BY_ID_SUCCESS,
            payload: {data: ['This is the best project', 'This will not be rendered']}
        };

        expect(reducer({}, getProjectState)).toMatchSnapshot();
    });


    it('gets research centres successfully', () => {
        const getResearchCentresState = {
            type: GET_RESEARCH_CENTRES_SUCCESS,
            payload: {data: ['This research center is the best place to work according to some magazines', 'This is another research centres']}
        };

        expect(reducer({}, getResearchCentresState)).toMatchSnapshot();
    });

    it('gets research centres by id successfully', () => {
        const getResearchCentreState = {
            type: GET_RESEARCH_CENTRE_BY_ID_SUCCESS,
            payload: {data: ['This research center is the best place to work according to some magazines', 'This will not be rendered']}
        };

        expect(reducer({}, getResearchCentreState)).toMatchSnapshot();
    });

    it('gets future prospects successfully', () => {
        const getFutureState = {
            type: GET_FUTURE_PROSPECTS_SUCCESS,
            payload: {data: {future_prospects: 'this is a message from the future'}}
        };

        expect(reducer({}, getFutureState)).toMatchSnapshot();
    });

    it('gets videos successfully', () =>{

        const getVideosState = {
            type: GET_VIDEOS_SUCCESS,
            payload: {data: {videos: ['video1', 'video2']}}
        };

        expect(reducer({}, getVideosState)).toMatchSnapshot();
    }); 

    it('fails', () => {

        const getStatsFailState = {
            type: GET_STATS_FAIL
        };
        expect(reducer({}, getStatsFailState)).toMatchSnapshot();
    });
    
    it('receives a not valid case', () =>{
        
        const invalidState = {
            type: 'NOT_VALID'
        };
        expect(reducer({}, invalidState)).toMatchSnapshot();
    });

});

