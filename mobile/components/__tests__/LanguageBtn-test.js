import 'react-native';
import React from 'react';
import LanguageBtn from '../LanguageBtn';
import Enzyme, { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const middlewares = []; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);

function setup(invertedMode, language = 'en') {
    const initialState = { 
        language: {
            selection: language
        }
    };

    const wrapper = shallow(<LanguageBtn invertedMode={invertedMode} />,
        { context: { store: mockStore(initialState) } });

    return wrapper;
}

it('renders with black text', () => {
    const wrapper = setup(false);

    expect(wrapper.dive()).toMatchSnapshot();
});

it('renders with white text', () => {
    const wrapper = setup(true);

    expect(wrapper.dive()).toMatchSnapshot();
});

it('renders text correctly', () => {
    let wrapper = setup(true, 'en');

    let render = wrapper.dive();
    expect(render.find('Styled(Text)').contains('EN')).toEqual(true);

    wrapper = setup(true, 'pt');

    render = wrapper.dive();
    expect(render.find('Styled(Text)').contains('PT')).toEqual(true);
});
