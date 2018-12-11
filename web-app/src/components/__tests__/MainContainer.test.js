import React from 'react';
import MainContainer from '../MainContainer';
import Enzyme, { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const middlewares = []; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);

const initialState = {
    faculty: {
        name: 'feup'
    }
};

const props = {};

function setup() {
    const wrapper = shallow(<MainContainer  {...props} />, {
        context: { store: mockStore(initialState) },
        disableLifecycleMethods: true
    });

    return wrapper;
}


describe('MainContainer screen ', () => {

    it('renders login screen', () => {
        const wrapper = setup();
        expect(wrapper).toMatchSnapshot();
    });
});