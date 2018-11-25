import {
    //actions
    setFaculty,
    //types
    SET_FACULTY
} from '../src/actions/facultyActions';


describe('Faculty actions', () => {

    it('should create an action to set current faculty', () =>{
        const expectedAction = {
            type: SET_FACULTY,
            name: 'feup'
        };
        expect(setFaculty('feup')).toEqual(expectedAction);
    });

});