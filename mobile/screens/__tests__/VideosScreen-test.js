import 'react-native';
import React from 'react';
import VideosScreen from '../VideosScreen';
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
            videos: [
                'https://youtube.com/1',
                'https://youtube.com/2',
                'https://youtube.com/3',
            ] 
        },
        language: {
            selection: 'en'
        }
    };

    const wrapper = shallow(<VideosScreen />,
        {
            context: { store: mockStore(initialState) },
            disableLifecycleMethods: false
        });

    return wrapper;
}

it('renders loading screen', () => {
    const wrapper = setup(true);

    expect(wrapper.dive()).toMatchSnapshot();
});
    
it('renders screen with video content', () => {
    const wrapper = setup();
    jest.unmock('ScrollView');
    expect(wrapper.dive()).toMatchSnapshot();
});