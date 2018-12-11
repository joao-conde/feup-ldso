import React from 'react';
import ProspectsEditor from '../ProspectsEditor';
import Enzyme, { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const middlewares = []; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);

function setup(){
    const initialState = {
        faculty: {
            name: 'feup'
        },
        prospects: {
            loading: false,
            contentEN: 'mockContentEN',
            contentPT: 'mockContentPT',
            banner: 'mockBannerImagePath'
        }
    };

    const props = {
        match: {
            params:{
                faculty: 'feup'
            }
        }
    };

    const wrapper = shallow(<ProspectsEditor {...props}/>, {
        context: { store: mockStore(initialState) }
    });
    return wrapper;
}


describe('Prospects Editor Screen tests', () => {

    it('renders loading screen', () => {
        const wrapper = setup();
        expect(wrapper.dive()).toMatchSnapshot();
    });
	
    it('calls componentDidMount without crashing', () => {
        const wrapper = setup();
        wrapper.dive().instance().componentDidMount();
        expect(wrapper.dive()).toMatchSnapshot();
    });
	
	
    it('calls componentDidUpdate without crashing', () => {
        const wrapper = setup();
		
        const prevProps = {
            faculty: 'feup',
            contentEN: 'Test EN content',
            contentPT: 'Conteudo de teste PT'
        };

        wrapper.dive().instance().componentDidUpdate(prevProps);
        expect(wrapper.dive()).toMatchSnapshot();
    });
	
    it('calls updateProspects without crashing', () => {
        const wrapper = setup();
        wrapper.dive().instance().updateProspects();
        expect(wrapper.dive()).toMatchSnapshot();
    });
	
    it('calls handleInputChange without crashing', () => {
        const wrapper = setup();
        const fakeEvent = {
            target:{
                name: 'contentEN',
                value: 'mockup content english data'
            }
        };
        wrapper.dive().instance().handleInputChange(fakeEvent);
        expect(wrapper.dive()).toMatchSnapshot();
    });
	
    it('calls onSubmit without crashing', () => {
        const wrapper = setup();
        wrapper.dive().instance().onSubmit();
        expect(wrapper.dive()).toMatchSnapshot();
    });

});