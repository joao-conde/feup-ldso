import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GenericProject } from '../GenericProject';
import { mount, shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('GenericProject', () => {

    it('Check Inputs', async () => {

        const projectEN = {
            title: '[EN] Social project at FAUP',
            short_description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam neque. Aliquam erat volutpat. Suspendisse sagittis ultrices augue. Pellentesque ipsum.',
            content: '[EN] Aliquam sit amet varius lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed tortor justo, ornare a vulputate in, mattis id mi. Donec varius, dui venenatis pharetra ultricies, ligula nulla ornare ex, quis mattis libero quam a tellus. Quisque quis est id nulla ornare semper at a nisi. Integer tincidunt egestas ornare. Nullam congue tellus arcu, eu ultricies mi pellentesque eget. Pellentesque massa sapien, suscipit sit amet lacus vel, faucibus faucibus elit. Cras in metus viverra, luctus magna ac, tristique leo. Aenean ultrices dui eget velit cursus, vitae suscipit purus varius. Aliquam erat volutpat. In porta metus et velit aliquet porta.',
            start_date: '2017-01-01',
            images: [
                'https://picsum.photos/200/300/?random',
                'https://picsum.photos/112/200/?random'
            ]
        };

        const projectPT = {
            title: '[PT] Social project at FAUP',
            short_description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam neque. Aliquam erat volutpat. Suspendisse sagittis ultrices augue. Pellentesque ipsum.',
            content: '[PT] Aliquam sit amet varius lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed tortor justo, ornare a vulputate in, mattis id mi. Donec varius, dui venenatis pharetra ultricies, ligula nulla ornare ex, quis mattis libero quam a tellus. Quisque quis est id nulla ornare semper at a nisi. Integer tincidunt egestas ornare. Nullam congue tellus arcu, eu ultricies mi pellentesque eget. Pellentesque massa sapien, suscipit sit amet lacus vel, faucibus faucibus elit. Cras in metus viverra, luctus magna ac, tristique leo. Aenean ultrices dui eget velit cursus, vitae suscipit purus varius. Aliquam erat volutpat. In porta metus et velit aliquet porta.',
            start_date: '2017-01-01',
            images: [
                'https://picsum.photos/200/300/?random',
                'https://picsum.photos/112/200/?random'
            ]
        };

        const wrapper = mount(
            <Router>
                <GenericProject add={true} loading={false} loadingAction={false} faculty='feup'
                    projEN={projectEN} projPT={projectPT} mainAction={() => { }} delAction={() => { }} />
            </Router>
        );

        expect(wrapper.find('Input').length).toEqual(9);

    });

    it('Check state on title input change', async () => {

        const projectEN = {
            title: '[EN] Social project at FAUP',
            short_description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam neque. Aliquam erat volutpat. Suspendisse sagittis ultrices augue. Pellentesque ipsum.',
            content: '[EN] Aliquam sit amet varius lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed tortor justo, ornare a vulputate in, mattis id mi. Donec varius, dui venenatis pharetra ultricies, ligula nulla ornare ex, quis mattis libero quam a tellus. Quisque quis est id nulla ornare semper at a nisi. Integer tincidunt egestas ornare. Nullam congue tellus arcu, eu ultricies mi pellentesque eget. Pellentesque massa sapien, suscipit sit amet lacus vel, faucibus faucibus elit. Cras in metus viverra, luctus magna ac, tristique leo. Aenean ultrices dui eget velit cursus, vitae suscipit purus varius. Aliquam erat volutpat. In porta metus et velit aliquet porta.',
            start_date: '2017-01-01',
            images: [
                'https://picsum.photos/200/300/?random',
                'https://picsum.photos/112/200/?random'
            ]
        };

        const projectPT = {
            title: '[PT] Social project at FAUP',
            short_description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam neque. Aliquam erat volutpat. Suspendisse sagittis ultrices augue. Pellentesque ipsum.',
            content: '[PT] Aliquam sit amet varius lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed tortor justo, ornare a vulputate in, mattis id mi. Donec varius, dui venenatis pharetra ultricies, ligula nulla ornare ex, quis mattis libero quam a tellus. Quisque quis est id nulla ornare semper at a nisi. Integer tincidunt egestas ornare. Nullam congue tellus arcu, eu ultricies mi pellentesque eget. Pellentesque massa sapien, suscipit sit amet lacus vel, faucibus faucibus elit. Cras in metus viverra, luctus magna ac, tristique leo. Aenean ultrices dui eget velit cursus, vitae suscipit purus varius. Aliquam erat volutpat. In porta metus et velit aliquet porta.',
            start_date: '2017-01-01',
            images: [
                'https://picsum.photos/200/300/?random',
                'https://picsum.photos/112/200/?random'
            ]
        };

        // Because of no withRouter - the way GenericProject is being imported is important
        const wrapper = mount(
            <GenericProject add={true} loading={false} loadingAction={false} faculty='feup'
                projEN={projectEN} projPT={projectPT} mainAction={() => { }} delAction={() => { }} />
        );
        const push = jest.fn();
        wrapper.setProps({history: { push }});

        const input = wrapper.find('Input').first();

        input.simulate('change', {
            target: {
                name: 'titleEN',
                value: 'Title'
            }
        });

        expect(
            wrapper.state('titleEN')
        ).toEqual('Title');
    });

    it('Check onSubmit', async () => {

        const projectEN = {
            title: '[EN] Social project at FAUP',
            short_description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam neque. Aliquam erat volutpat. Suspendisse sagittis ultrices augue. Pellentesque ipsum.',
            content: '[EN] Aliquam sit amet varius lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed tortor justo, ornare a vulputate in, mattis id mi. Donec varius, dui venenatis pharetra ultricies, ligula nulla ornare ex, quis mattis libero quam a tellus. Quisque quis est id nulla ornare semper at a nisi. Integer tincidunt egestas ornare. Nullam congue tellus arcu, eu ultricies mi pellentesque eget. Pellentesque massa sapien, suscipit sit amet lacus vel, faucibus faucibus elit. Cras in metus viverra, luctus magna ac, tristique leo. Aenean ultrices dui eget velit cursus, vitae suscipit purus varius. Aliquam erat volutpat. In porta metus et velit aliquet porta.',
            start_date: '2017-01-01',
            images: [
                'https://picsum.photos/200/300/?random',
                'https://picsum.photos/112/200/?random'
            ]
        };

        const projectPT = {
            title: '[PT] Social project at FAUP',
            short_description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam neque. Aliquam erat volutpat. Suspendisse sagittis ultrices augue. Pellentesque ipsum.',
            content: '[PT] Aliquam sit amet varius lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed tortor justo, ornare a vulputate in, mattis id mi. Donec varius, dui venenatis pharetra ultricies, ligula nulla ornare ex, quis mattis libero quam a tellus. Quisque quis est id nulla ornare semper at a nisi. Integer tincidunt egestas ornare. Nullam congue tellus arcu, eu ultricies mi pellentesque eget. Pellentesque massa sapien, suscipit sit amet lacus vel, faucibus faucibus elit. Cras in metus viverra, luctus magna ac, tristique leo. Aenean ultrices dui eget velit cursus, vitae suscipit purus varius. Aliquam erat volutpat. In porta metus et velit aliquet porta.',
            start_date: '2017-01-01',
            images: [
                'https://picsum.photos/200/300/?random',
                'https://picsum.photos/112/200/?random'
            ]
        };
        const mockFunction = jest.fn();

        // Because of no withRouter - the way GenericProject is being imported is important
        const wrapper = shallow(
            <GenericProject add={true} loading={false} loadingAction={false} faculty='feup'
                projEN={projectEN} projPT={projectPT} mainAction={mockFunction} delAction={() => { }} />
        );
        const push = jest.fn();
        wrapper.setProps({history: { push }});

        wrapper.find('#buttonOnSubmit').simulate('click');

        expect(mockFunction.mock.calls.length).toBe(1);

        const mockFunctionAddFalse = jest.fn();

        const wrapperAddFalse = shallow(
            <GenericProject add={false} loading={false} loadingAction={false} faculty='feup'
                projEN={projectEN} projPT={projectPT} mainAction={mockFunctionAddFalse} delAction={() => { }} />
        );

        wrapperAddFalse.setProps({history: { push }});

        wrapperAddFalse.find('#buttonOnSubmit').simulate('click');

        expect(mockFunctionAddFalse.mock.calls.length).toBe(2);

    });

});
