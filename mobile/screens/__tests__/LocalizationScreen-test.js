import 'react-native';
import React from 'react';
import LocalizationScreen from '../LocalizationScreen';
import Enzyme, { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const middlewares = []; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);

function setup(loading = false) {

    const initialState = { 
        faculty: {
            name: 'feup',
            loading: loading,
            localization: 'test'
        },
        language: {
            selection: 'en'
        }
    };

    const wrapper = shallow(<LocalizationScreen />,
        {
            context: { store: mockStore(initialState) },
            disableLifecycleMethods: true
        });

    return wrapper;
}

it('renders loading screen', () => {
    const wrapper = setup(true);

    expect(wrapper.dive()).toMatchSnapshot();
});
    
it('renders screen placeholder content', () => {
    const wrapper = setup();

    expect(wrapper.dive()).toMatchSnapshot();
});

