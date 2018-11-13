import { toggleLanguage } from '../modules/languageReducer';
import reducer from '../modules/languageReducer';

describe('Testing language actions', () => {

    it('creates a TOGGLE_LANGUAGE Action', () => {
        expect(toggleLanguage()).toMatchSnapshot();
    });

});

describe('Testing if language reducer', () => {

    it('changes language to pt', () => {

        const initialState = {
            selection: 'en'
        };

        expect(reducer(initialState, toggleLanguage())).toMatchSnapshot();
    });

    it('changes language to en', () => {

        const initialState = {
            selection: 'pt'
        };

        expect(reducer(initialState, toggleLanguage())).toMatchSnapshot();
    });
});

