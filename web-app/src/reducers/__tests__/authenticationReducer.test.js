import expect from 'expect';
import reducer from '../modules/authenticationReducer';

import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from '../../actions/authenticationActions';
import { EDIT_PROSPECTS_FAIL } from '../../actions/prospectsActions';


describe('Authentication reducer', () => {

    it('should return the initial state', () => {

        const initialState = {
            loading: false,
            authenticated: localStorage.getItem('iupToken') !== null
        };

        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it('should handle LOGIN', () => {
        const loginAction = {
            type: LOGIN
        };
        expect(reducer({ loading: false }, loginAction)).toEqual({ loading: true });
    });

    it('should handle LOGIN_SUCCESS', () => {

        const prevState = {
            loading: true,
            authenticated: false
        };

        const expectedState = {
            loading: false,
            authenticated: true
        };

        const loginSuccessAction = {
            type: LOGIN_SUCCESS,
            payload: {
                data: {
                    token: 'token',
                    error: ''
                }
            }
        };
        expect(reducer(prevState, loginSuccessAction)).toEqual(expectedState);
    });


    it('should handle LOGIN_SUCCESS invalid token', () => {

        const prevState = {
            loading: true,
            authenticated: false
        };

        const expectedState = {
            loading: false,
            authenticated: false
        };

        const loginSuccessAction = {
            type: LOGIN_SUCCESS,
            payload: {
                data: {
                    token: null,
                    error: 'PERMISSION DENIED'
                }
            }
        };
        expect(reducer(prevState, loginSuccessAction)).toEqual(expectedState);
    });

    it('should handle LOGIN_FAIL', () => {

        const errorMsg = 'Better luck next time';

        const prevState = {
            loading: true,
            error: ''
        };

        const expectedState = {
            loading: false,
            error: errorMsg
        };

        const loginFailAction = {
            type: LOGIN_FAIL,
            payload: {
                data: {
                    error: errorMsg
                }
            }
        };
        expect(reducer(prevState, loginFailAction)).toEqual(expectedState);
    });

    it('should handle LOGOUT', () => {

        const prevState = {
            authenticated: true
        };

        const expectedState = {
            authenticated: false
        };

        const logoutAction = {
            type: LOGOUT
        };
        expect(reducer(prevState, logoutAction)).toEqual(expectedState);
    });

    it('should handle EDIT_PROSPECTS_FAIL', () => {
        const action = {
            type: EDIT_PROSPECTS_FAIL,
            payload: {
                error: {
                    status: 401
                }
            }
        };

        const prevState = {
            authenticated: true
        };

        const finalState = {
            authenticated: false
        };

        expect(reducer(prevState, action)).toEqual(finalState);
    });
});