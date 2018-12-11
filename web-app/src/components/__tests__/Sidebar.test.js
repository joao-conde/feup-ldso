import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from '../Sidebar';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Sidebar', () => {

    it('Check NavLink and simulate click', async() => {

        const projectEN = [{
            title: '[EN] Social project at FAUP',
            short_description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam neque. Aliquam erat volutpat. Suspendisse sagittis ultrices augue. Pellentesque ipsum.',
            content: '[EN] Aliquam sit amet varius lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed tortor justo, ornare a vulputate in, mattis id mi. Donec varius, dui venenatis pharetra ultricies, ligula nulla ornare ex, quis mattis libero quam a tellus. Quisque quis est id nulla ornare semper at a nisi. Integer tincidunt egestas ornare. Nullam congue tellus arcu, eu ultricies mi pellentesque eget. Pellentesque massa sapien, suscipit sit amet lacus vel, faucibus faucibus elit. Cras in metus viverra, luctus magna ac, tristique leo. Aenean ultrices dui eget velit cursus, vitae suscipit purus varius. Aliquam erat volutpat. In porta metus et velit aliquet porta.',
            start_date: '2017-01-01',
            images: [
                'https://picsum.photos/200/300/?random',
                'https://picsum.photos/112/200/?random'
            ],
            facultyId: 1
        }];

        const projectPT = [{
            title: '[PT] Social project at FAUP',
            short_description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam neque. Aliquam erat volutpat. Suspendisse sagittis ultrices augue. Pellentesque ipsum.',
            content: '[PT] Aliquam sit amet varius lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed tortor justo, ornare a vulputate in, mattis id mi. Donec varius, dui venenatis pharetra ultricies, ligula nulla ornare ex, quis mattis libero quam a tellus. Quisque quis est id nulla ornare semper at a nisi. Integer tincidunt egestas ornare. Nullam congue tellus arcu, eu ultricies mi pellentesque eget. Pellentesque massa sapien, suscipit sit amet lacus vel, faucibus faucibus elit. Cras in metus viverra, luctus magna ac, tristique leo. Aenean ultrices dui eget velit cursus, vitae suscipit purus varius. Aliquam erat volutpat. In porta metus et velit aliquet porta.',
            start_date: '2017-01-01',
            images: [
                'https://picsum.photos/200/300/?random',
                'https://picsum.photos/112/200/?random'
            ],
            facultyId: 1
        }];


        const wrapper = mount(
            <Router>
                <Sidebar loading={false}  faculty='feup'
                    projectsEN={projectEN} projectsPT={projectPT} idProjEn='123' action={() => {}}/>
            </Router>);

        expect(wrapper.find('NavLink').length).toEqual(1);
        wrapper.find('img#projSidebar').simulate('click');

    });
});
