import React from 'react';
import Home from '../Loading';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders loading icon', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper).toMatchSnapshot();
});
