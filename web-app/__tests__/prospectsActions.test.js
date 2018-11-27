import {
    //actions
    getProspects,
    editProspects,
    //types
    GET_PROSPECTS_EN,
    GET_PROSPECTS_PT,
    EDIT_PROSPECTS
} from '../src/actions/prospectsActions';


describe('Prospects actions', () => {

    it('should create an action to get prospects', () => {
		
        const expectedActionEN = {
            type: GET_PROSPECTS_EN,
            payload: {
                request: {
                    type: 'GET',
                    url: '/faculties/en/feup/future'
                }
            }
        };

        const expectedActionPT = {
            type: GET_PROSPECTS_PT,
            payload: {
                request: {
                    type: 'GET',
                    url: '/faculties/pt/feup/future'
                }	
            }
        };
		
        expect(getProspects('feup', 'en')).toEqual(expectedActionEN);
        expect(getProspects('feup', 'pt')).toEqual(expectedActionPT);
    });


    it('should create an action to edit prospects', () =>{

        const editedProspectsEN = {
            content: '[EN] Edited prospects.',
            banner: 'http://www.porto.pt/assets/misc/img/Press%20ReleaseP/2016/%23fib_faculdade_engenharia.jpg'
        };

        const editedProspectsPT = {
            content: '[PT] Planeamento futuro.',
            banner: 'http://www.porto.pt/assets/misc/img/Press%20ReleaseP/2016/%23fib_faculdade_engenharia.jpg'
        };

        const expectedActionEN = {
            type: EDIT_PROSPECTS,
            payload:{
                request: {
                    type: 'PATCH',
                    url: '/faculties/en/feup/future-prospects',
                    data: editedProspectsEN
                }
            }
        };

        const expectedActionPT = {
            type: EDIT_PROSPECTS,
            payload:{
                request: {
                    type: 'PATCH',
                    url: '/faculties/pt/feup/future-prospects',
                    data: editedProspectsPT
                }
            }
        };

        expect(editProspects('feup', 'en', editedProspectsEN)).toEqual(expectedActionEN);
        expect(editProspects('feup', 'pt', editedProspectsPT)).toEqual(expectedActionPT);
    });

});