import React from 'react';
import Home from '../Home';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders correct project', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper).toMatchSnapshot();
});
