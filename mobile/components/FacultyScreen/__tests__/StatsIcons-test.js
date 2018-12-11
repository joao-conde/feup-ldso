import React from 'react';
import StatsIcons  from '../StatsIcons';
import {Icon} from 'native-base';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
    const wrapper = shallow(<StatsIcons icon='flask' iconsNmb={12} percentage={50} text="Teachers and Researchers"/>,
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
    it('check number of icons', () =>{
        const wrapper = setup();
        expect(wrapper.find(Icon)).toHaveLength(12);
    });
    it('check black icons', () => {
        const wrapper = setup();
        expect(wrapper.find('.black')).toHaveLength(6);
    });
});
