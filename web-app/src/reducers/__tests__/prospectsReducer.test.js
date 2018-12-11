import expect from 'expect';
import reducer from '../modules/prospectsReducer';

import{
    GET_PROSPECTS_EN,
    GET_PROSPECTS_EN_SUCCESS,
    GET_PROSPECTS_EN_FAIL,
    GET_PROSPECTS_PT,
    GET_PROSPECTS_PT_SUCCESS,
    GET_PROSPECTS_PT_FAIL,
    EDIT_PROSPECTS,
    EDIT_PROSPECTS_SUCCESS,
    EDIT_PROSPECTS_FAIL
} from '../../actions/prospectsActions';


describe('Prospects reducer', () => {

    it('should return the initial state', () => {

        const initialState = {
            loading: false,
            loadingAction: false,
            contentEN: '',
            contentPT: '',
            banner: ''
        };

        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle GET_PROSPECTS_EN', () => {

        const getEnProspectsAction = {
            type: GET_PROSPECTS_EN,
        };

        const expectedState = {
            loading: true,
        };

        expect(reducer({}, getEnProspectsAction)).toEqual(expectedState);
    });

    it('should handle GET_PROSPECTS_PT', () => {

        const getPtProspectsAction = {
            type: GET_PROSPECTS_PT,
        };

        const expectedState = {
            loading: true,
        };

        expect(reducer({}, getPtProspectsAction)).toEqual(expectedState);
    });


    it('should handle EDIT_PROSPECTS', () => {

        const editProspectAction = {
            type: EDIT_PROSPECTS
        };

        const expectedState = {
            loadingAction: true,
        };

        expect(reducer({}, editProspectAction)).toEqual(expectedState);
    });


    it('should handle GET_PROSPECTS_EN_SUCCESS', () => {

        const prospectEN = {
            content: '[EN] Future prospects',
            banner: 'banner'
        };

        const getProspectsEnSuccessAction = {
            type: GET_PROSPECTS_EN_SUCCESS,
            payload:{
                data: {
                    future_prospects: prospectEN
                }
            }
        };

        const expectedState = {
            loading: false,
            contentEN: prospectEN.content,
            banner: prospectEN.banner
        };

        expect(reducer({}, getProspectsEnSuccessAction)).toEqual(expectedState);
    });


    it('should handle GET_PROSPECTS_PT_SUCCESS', () => {

        const prospectPT = {
            content: '[PT] Planos futuros',
            banner: 'banner'
        };

        const getProspectsPtSuccessAction = {
            type: GET_PROSPECTS_PT_SUCCESS,
            payload:{
                data: {
                    future_prospects: prospectPT
                }
            }
        };

        const expectedState = {
            loading: false,
            contentPT: prospectPT.content,
            banner: prospectPT.banner
        };

        expect(reducer({}, getProspectsPtSuccessAction)).toEqual(expectedState);
    });


    it('should handle EDIT_PROSPECTS_SUCCESS', () => {

        const nonEditedProspectPT = {
            content: '[PT] Planos futuros',
            banner: 'banner',
            language: 'pt'
        };
		
        const nonEditedProspectEN = {
            content: '[EN] Future prospects',
            banner: 'banner',
            language: 'en'
        };
		
        const editedProspectPT = {
            content: '[PT] Planos futuros editados',
            banner: 'banner-editado',
            language: 'pt'
        };
		
        const editedProspectEN = {
            content: '[EN] Edited future prospects',
            banner: 'banner-edited',
            language: 'en'
        };

       
        const editProspectENSuccessAction = {
            type: EDIT_PROSPECTS_SUCCESS,
            payload:{
                data: {
                    language: 'en',
                    future_prospects: editedProspectEN
                }
            }
        };
		
        const editProspectPTSuccessAction = {
            type: EDIT_PROSPECTS_SUCCESS,
            payload:{
                data: {
                    language: 'pt',
                    future_prospects: editedProspectPT
                }
            }
        };

        const previousStateEN = {
            loadingAction: true,
            contentEN: nonEditedProspectEN.content,
            banner: nonEditedProspectEN.banner
        };
		
        const previousStatePT = {
            loadingAction: true,
            contentPT: nonEditedProspectPT.content,
            banner: nonEditedProspectEN.banner
        };

        const expectedStateEnEdit = {
            loadingAction: false,
            contentEN: editedProspectEN.content,
            banner: editedProspectEN.banner
        };
		
        const expectedStatePtEdit = {
            loadingAction: false,
            contentPT: editedProspectPT.content,
            banner: editedProspectPT.banner
        };

        expect(reducer(previousStateEN, editProspectENSuccessAction)).toEqual(expectedStateEnEdit);
        expect(reducer(previousStatePT, editProspectPTSuccessAction)).toEqual(expectedStatePtEdit);
    });


    it('should handle GET_PROSPECTS_EN_FAIL', () => {

        const getProspectsEnFailAction = {
            type: GET_PROSPECTS_EN_FAIL
        };

        const expectedState = {
            loading: false,
            error: 'Error while fetching prospects data'
        };

        expect(reducer({}, getProspectsEnFailAction)).toEqual(expectedState);
    });


    it('should handle GET_PROSPECTS_PT_FAIL', () => {

        const getProspectsPtFailAction = {
            type: GET_PROSPECTS_PT_FAIL
        };

        const expectedState = {
            loading: false,
            error: 'Error while fetching prospects data'
        };

        expect(reducer({}, getProspectsPtFailAction)).toEqual(expectedState);
    });


    it('should handle EDIT_PROSPECTS_FAIL', () => {

        const editProspectsFailAction = {
            type: EDIT_PROSPECTS_FAIL
        };

        const expectedState = {
            loadingAction: false,
            error: 'Error while executing action on prospect'
        };

        expect(reducer({}, editProspectsFailAction)).toEqual(expectedState);
    });

});
