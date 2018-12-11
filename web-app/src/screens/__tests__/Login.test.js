import React from 'react';
import Login from '../Login';
import Enzyme, { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const middlewares = []; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);

const initialState = {
    auth: {
        authenticated: false,
        loading: false
    },
    login: jest.fn()
};

function setup() {
    const wrapper = shallow(<Login />, {
        context: { store: mockStore(initialState) },
        disableLifecycleMethods: true
    });

    return wrapper;
}


describe('Login screen ', () => {

    it('renders login screen', () => {
        const wrapper = setup();
        expect(wrapper).toMatchSnapshot();
    });

    it('successfully handles submit', () => {

        const wrapper = shallow(
            <Login />, {
                context: { store: mockStore(initialState) },
                disableLifecycleMethods: true
            }
        );


        expect(wrapper).toMatchSnapshot();

        const loginBtn = wrapper.dive().find('Button').first();
        loginBtn.simulate('click');

        expect(wrapper).toMatchSnapshot();
    });
});