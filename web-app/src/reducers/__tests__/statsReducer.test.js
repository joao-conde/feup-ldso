import expect from 'expect';
import reducer from '../modules/statsReducer';

import {
    GET_STATS,
    EDIT_STATS,
    GET_STATS_SUCCESS,
    EDIT_STATS_SUCCESS,
    GET_STATS_FAIL,
    EDIT_STATS_FAIL
} from '../../actions/statsActions';


describe('Stats reducer', () => {

    it('should return the initial state', () => {

        const initialState = {
            stats: null
        };

        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle GET_STATS', () => {

        const getStatsAction = {
            type: GET_STATS
		};
		
		const initialState = {
			loading: false
		}

        const expectedState = {
            loading: true,
        };

        expect(reducer(initialState, getStatsAction)).toEqual(expectedState);
	});
	
	it('should handle EDIT_STATS', () => {

        const editStatsAction = {
            type: EDIT_STATS
		};
		
		const initialState = {
			loading: false
		}

        const expectedState = {
            loading: true,
        };

        expect(reducer(initialState, editStatsAction)).toEqual(expectedState);
	});
	
	it('should handle GET_STATS_SUCCESS', () => {

        const getStatsSuccessAction = {
			type: GET_STATS_SUCCESS,
			payload:{
				data: {
					msc: 5,
					bsc: 10
				}
			}
		};
		
		const initialState = {
			loading: true,
			stats: {}
		}

        const expectedState = {
			loading: false,
			stats: {
				msc: 5,
				bsc: 10
			}
        };

        expect(reducer(initialState, getStatsSuccessAction)).toEqual(expectedState);
	});
	
	it('should handle EDIT_STATS_SUCCESS', () => {

        const editStatsSuccessAction = {
			type: EDIT_STATS_SUCCESS,
			payload:{
				data: {
					msc: 5,
					bsc: 10
				}
			}
		};
		
		const initialState = {
			loading: true,
			stats: {}
		}

        const expectedState = {
			loading: false,
			stats: {
				msc: 5,
				bsc: 10
			}
        };

        expect(reducer(initialState, editStatsSuccessAction)).toEqual(expectedState);
	});
	

	it('should handle GET_STATS_FAIL', () => {

        const getStatsFailAction = {
			type: GET_STATS_FAIL,
			payload:{
				data: {
					msc: 5,
					bsc: 10
				}
			}
		};
		
		const initialState = {
			loading: true,
		}

        const expectedState = {
			loading: false,
			error: 'Error while fetching projects data'
        };

        expect(reducer(initialState, getStatsFailAction)).toEqual(expectedState);
	});
	
	it('should handle EDIT_STATS_FAIL', () => {

        const editStatsFailAction = {
			type: EDIT_STATS_FAIL,
			payload:{
				data: {
					msc: 5,
					bsc: 10
				}
			}
		};
		
		const initialState = {
			loading: true,
		}

        const expectedState = {
			loading: false,
			error: 'Error while fetching projects data'
        };

        expect(reducer(initialState, editStatsFailAction)).toEqual(expectedState);
    });


   
});
