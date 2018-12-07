import React from 'react';
import StatsNumbers  from '../StatsNumbers';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
    const course = [10, 'Masters'];
    const students = [500, 'Students'];
    const wrapper = shallow(<StatsNumbers course={course} students={students}/>,
        {
            disableLifecycleMethods: true
        });
    return wrapper;
}

describe('Rendering', () => {
    it('Render component', () => {
        const wrapper = setup();
        expect(wrapper.dive()).toMatchSnapshot();
    });
});
