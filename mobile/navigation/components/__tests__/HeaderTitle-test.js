import 'react-native';
import React from 'react';
import HeaderTitle from '../HeaderTitle';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders logo', () => {
    const wrapper = shallow(<HeaderTitle invertedMode={false} />);

    expect(wrapper).toMatchSnapshot();
});

