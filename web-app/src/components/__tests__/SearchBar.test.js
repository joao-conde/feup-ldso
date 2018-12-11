import React from 'react';
import SearchBar from '../SearchBar';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


it('renders sidebar correctly', () => {
    const wrapper = shallow(<SearchBar />);

    expect(wrapper).toMatchSnapshot();
});