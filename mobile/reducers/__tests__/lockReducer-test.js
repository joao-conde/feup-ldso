import { toggleScreen } from '../modules/lockReducer';
import reducer from '../modules/lockReducer';

describe('Testing lock actions', () => {

    it('creates a TOGGLE_LOCK Action', () => {
        expect(toggleScreen()).toMatchSnapshot();
    });

});

describe('Testing if lock reducer', () => {

    it('changes locked state to true', () => {

        const initialState = {
            locked: false
        };

        expect(reducer(initialState, toggleScreen())).toMatchSnapshot();
    });

    it('changes locked state to false', () => {

        const initialState = {
            locked: true
        };

        expect(reducer(initialState, toggleScreen())).toMatchSnapshot();
    });

});

