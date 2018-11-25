import React from 'react';
import GenericProject from '../src/components/GenericProject';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders correct project', () => {
    const wrapper = shallow(<GenericProject add={false} loading={false} faculty='feup'
        projEN='' projPT='' mainAction={() => {}} delAction={() => {}} />);

    expect(wrapper).toMatchSnapshot();
});