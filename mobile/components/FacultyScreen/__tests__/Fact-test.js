import React from 'react';
import {Fact}  from '../Fact';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

function setup() {
    const wrapper = shallow(<Fact name='feup' info="240 protocolos estágio com empresas"/>,
        {
            disableLifecycleMethods: true
        });
    return wrapper;

}

describe('Rendering ', () => {
    it('renders fact with content received', () => {
        const wrapper = setup();
        expect(wrapper.dive()).toMatchSnapshot();
    });

});