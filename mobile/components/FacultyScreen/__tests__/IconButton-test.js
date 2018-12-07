import React from 'react';
import IconButton  from '../IconButton';
import {Card, View, Button} from 'native-base';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const navigation = { navigate: jest.fn()};

function setup(name = true) {
    let wrapper;

    if(name == false) {
        wrapper = shallow(<IconButton icon='videos' label='Videos' action={() => navigation.navigate('Video', {name:'feup'})}/>,
            {
                disableLifecycleMethods: true
            });
    } else {
        wrapper = shallow(<IconButton name='feup' icon='videos' label='Videos' action={() => navigation.navigate('Video', {name:'feup'})}/>,
            {
                disableLifecycleMethods: true
            });
    }
    return wrapper;

}

describe('Rendering ', () => {
    it('renders fact with content received', () => {
        const wrapper = setup();
        expect(wrapper.dive()).toMatchSnapshot();
    });
    it('do not render', () => {
        const wrapper = setup(false);
        expect(wrapper.type()).toEqual(null);
    });

});

describe('Click', () => {
    it('check button click', () => {
        const wrapper = setup();
        const spy = jest.spyOn(navigation, 'navigate');
        wrapper.find(Card).dive().find(View).at(0).dive().find(Button).simulate('click');
        expect(spy).toBeCalledWith('Video', {name: 'feup'});

    });
});