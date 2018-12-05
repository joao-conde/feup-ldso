import React from 'react';
import MenuLink from '../MenuLink';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders correct link', () => {
    const wrapper = shallow(<MenuLink link={'/faculties/FEUP/projects'} title={'Social Impact Projects'} />);

    expect(wrapper).toMatchSnapshot();
});