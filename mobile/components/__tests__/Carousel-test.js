
import {View} from 'react-native';
import React from 'react';
import Carousel  from '../Carousel';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


function setup() {
    const views = [<View key={0}/>, <View key={1}/>];
    const wrapper = shallow(<Carousel videos={views} name='feup'/>);
    return wrapper;

}
describe('Rendering ', () => {
    it('renders carousel with content received', () => {
        const wrapper = setup();
        expect(wrapper.dive()).toMatchSnapshot();
    });
    it('renders carousel without content', () => {
        const views = [];
        const wrapper = shallow(<Carousel videos={views} name='feup'/>,
            {
                disableLifecycleMethods: true
            });
        expect(wrapper.type()).toEqual(null);
    });

});