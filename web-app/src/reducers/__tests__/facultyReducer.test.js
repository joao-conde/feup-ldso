import expect from 'expect';
import reducer from '../modules/facultyReducer';

import {
    SET_FACULTY
} from '../../actions/facultyActions';


describe('Faculty reducer', () => {

    it('should return the initial state', () => {

        const initialState = {
            name: null
        };

        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle SET_FACULTY', () => {
	
        const setFacultyAction = {
            type: SET_FACULTY,
            name: 'feup'
        };
	
        const expectedState = {
            name: 'feup'
        };

        expect(reducer({}, setFacultyAction)).toEqual(expectedState);
    });

 
});