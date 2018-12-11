import 'react-native';
import React from 'react';
import LocationScreen from '../LocationScreen';
import Enzyme, { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import { Image, Text } from 'react-native';

Enzyme.configure({ adapter: new Adapter() });

const middlewares = []; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);

function setup(lang) {

    const initialState = { 
        faculty: {
            name: 'feup',
        },
        language: {
            selection: lang,
        }
    };

    const wrapper = shallow(<LocationScreen />,
        {
            context: { store: mockStore(initialState) },
            disableLifecycleMethods: true
        });

    return wrapper;
}

it('renders correct number of elements', () => {
    const wrapper = setup('en');

    expect(wrapper.dive().children().length).toEqual(3);
    expect(wrapper.dive().childAt(0).childAt(0).find(Image).exists()).toEqual(true);
    expect(wrapper.dive().childAt(1).childAt(0).children().length).toEqual(2);
    expect(wrapper.dive().childAt(2).childAt(0).find(Text).exists()).toEqual(true);
});

it('renders expected text', () => {
    const wrapper = setup('en');
    const text = 'Scan me with a QR code reader and wait for the camera to detect automatically';
    
    expect(wrapper.dive().childAt(1).childAt(0).childAt(1).shallow().text()).toEqual(text);
});

it('renders screen placeholder content', () => {
    const wrapper = setup('en');

    expect(wrapper.dive()).toMatchSnapshot();
});

it('renders in other language', () => {
    const wrapper = setup('pt');

    expect(wrapper.dive()).toMatchSnapshot();
});