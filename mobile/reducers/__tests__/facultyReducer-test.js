import { setFaculty, clearFaculty, getStats, getSocialProjects, getSocialProjectDetails, getFutureProspects, getLocalization, getVideos } from '../modules/facultyReducer';
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

    it('creates a GET_FUTURE_PROSPECTS Action', () => {
        expect(getFutureProspects('en', 'feup')).toMatchSnapshot();
    });

    it('creates a GET_LOCALIZATION Action', () => {
        expect(getLocalization('feup')).toMatchSnapshot();
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
            localization: {},
            videos: []
        };

        expect(reducer(initialState, clearFaculty())).toMatchSnapshot();
    });
});

