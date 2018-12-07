import React from 'react';
import PromotionalVideo from '../PromotionalVideo';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


it('renders the promotional videos', () => {
    const wrapper = shallow(<PromotionalVideo />);

    expect(wrapper).toMatchSnapshot();
});