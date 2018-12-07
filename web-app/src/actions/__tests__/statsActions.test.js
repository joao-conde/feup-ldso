import {
    //actions
    getStats,
    editProject,
    //types
    GET_STATS,
    EDIT_STATS
} from '../statsActions';


describe('Stats actions', () => {

    it('should create an action to get faculty statistics', () =>{
        const expectedAction = {
            type: GET_STATS,
            payload: {
                request: {
                    type: 'GET',
                    url: '/faculties/en/feup/statistics'
                }
            }
        };
        expect(getStats('feup')).toEqual(expectedAction);
    });

    it('should create an action to edit faculty statistics', () =>{
		
        const stats = {
            id: '69',
            nr_bsc: 0,
            bsc_students: 0,
            nr_msc: 9,
            msc_students: 700,
            nr_phd: 15,
            phd_students: 230,
            nr_training_course: 15,
            training_course_graduate: 20,
            research_perc: 0,
            foreign_student_perc: 230,
            training_programs_perc: 0,
            other_facts: ['Very interesting UCs'],
            faculty: 'feup',
            language: 'en'
        };

        const expectedAction = {
            type: EDIT_STATS,
            payload: {
                request: {
                    type: 'PATCH',
                    url: '/faculties/en/feup/statistics',
                    data: stats
                }
            }
        };
        expect(editProject('feup', stats)).toEqual(expectedAction);
    });
	
});