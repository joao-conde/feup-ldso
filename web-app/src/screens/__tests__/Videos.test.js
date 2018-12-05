import React from 'react';
import Videos from '../Videos';
import Enzyme, { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const middlewares = []; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);

function setup(videos) {

    const initialState = {
        faculty: {
            name: 'faup'
        },
        videos: {
            loading: false,
            loadingAction: false,
            videosEN: videos,
            videosPT: videos,
        }
    };

    const props = {
        match: {
            params: {
                faculty: 'faup',
            }
        },
        setFaculty: jest.fn(),
        editVideo: jest.fn(),
        getVideos: jest.fn(),
    };

    const wrapper = shallow(<Videos {...props} />,
        {
            context: { store: mockStore(initialState) },
            disableLifecycleMethods: true
        });

    return wrapper;
}


describe('Videos Screen tests', () => {

    it('renders loading screen', () => {
        const videos = [];
        const wrapper = setup(videos);
        expect(wrapper.dive()).toMatchSnapshot();
    });

    it('calls componentDidMount without crashing', () => {
        const projects = [];
        const wrapper = setup(projects);
        wrapper.dive().instance().componentDidMount();
        expect(wrapper.dive()).toMatchSnapshot();
    });

    it('calls componentDidUpdate without crashing', () => {
        const projects = [];
        const wrapper = setup(projects);

        const prevProps = {
            faculty: 'feup'
        };

        wrapper.dive().instance().componentDidUpdate(prevProps);
        expect(wrapper.dive()).toMatchSnapshot();
    });
    
});
    