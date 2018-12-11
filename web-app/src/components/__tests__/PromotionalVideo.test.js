import React from 'react';
import PromotionalVideo from '../PromotionalVideo';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('PromotionalVideo', () => {
    it('renders the promotional videos', () => {
        const wrapper = shallow(<PromotionalVideo />);

        expect(wrapper).toMatchSnapshot();
    });

    it('renders the promotional videos', () => {
        const videos = 'https://www.youtube.com/test';

        const mockFunction = jest.fn();

        const wrapper = shallow(
            <PromotionalVideo loadingAction={false} faculty='feup'
                videosEN={videos} videosPT={videos} mainAction={mockFunction} />
        );

        wrapper.find('#buttonOnSubmit').simulate('click');

        expect(mockFunction.mock.calls.length).toBe(2);

    });
});
