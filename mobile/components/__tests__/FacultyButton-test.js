import 'react-native';
import React from 'react';
import { FacultyButton } from '../FacultyButton';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders correct logo', () => {
    const mockFunction = jest.fn();
    
    const wrapper = shallow(<FacultyButton name={'feup'} onPress={mockFunction} />);

    expect(wrapper).toMatchSnapshot();
});

it('calls onPress function', () => {
    const mockFunction = jest.fn();
    
    const wrapper = shallow(<FacultyButton name={'feup'} onPress={mockFunction} />);

    wrapper.find('TouchableOpacity').props().onPress();

    expect(mockFunction.mock.calls.length).toBe(1);
});