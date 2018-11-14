import React from 'react';
import rendered from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from '../src/components/Sidebar';
import Delete from '../src/components/Delete';
import Editor from '../src/components/Editor';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

import 'isomorphic-fetch'; //components use fetch() on mount

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

var mockAxios = new MockAdapter(axios);

var props = {
    match: {
        params: {
            faculty: 'faup',
            project: '1'
        }
    }
};

it('renders elements', () => {

    mockAxios.onGet('http://localhost:3000/faculties/en/faup/social-projects').reply(200, {
        title: '[EN] Sed in convallis nulla',
        short_description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam neque. Aliquam erat volutpat. Suspendisse sagittis ultrices augue. Pellentesque ipsum.',
        content: '[EN] Aliquam sit amet varius lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed tortor justo, ornare a vulputate in, mattis id mi. Donec varius, dui venenatis pharetra ultricies, ligula nulla ornare ex, quis mattis libero quam a tellus. Quisque quis est id nulla ornare semper at a nisi. Integer tincidunt egestas ornare. Nullam congue tellus arcu, eu ultricies mi pellentesque eget. Pellentesque massa sapien, suscipit sit amet lacus vel, faucibus faucibus elit. Cras in metus viverra, luctus magna ac, tristique leo. Aenean ultrices dui eget velit cursus, vitae suscipit purus varius. Aliquam erat volutpat. In porta metus et velit aliquet porta.',
        start_date: '2017-01-01',
        images: [
            'https://picsum.photos/200/300/?random',
            'https://picsum.photos/112/200/?random'
        ],
        facultyId: 1
    });
    const mockupCall = jest.fn();

    const sidebarComponent = rendered.create(
        <BrowserRouter>
            <Sidebar
                {...props}
                OnChildSetRefresh={mockupCall}
                onGetRefresh={mockupCall}
                onChildUnsetRefresh={mockupCall}
            />
        </BrowserRouter>);
    let tree = sidebarComponent.toJSON();
    expect(tree).toMatchSnapshot();

    const editorComponent = rendered.create(
        <BrowserRouter>
            <Editor
                {...props}
                onChildSetRefresh={mockupCall}
            />
        </BrowserRouter>
    );
    let treeList = editorComponent.toJSON();
    expect(treeList).toMatchSnapshot();

    const deleteComponent = rendered.create(
        <BrowserRouter>
            <Delete
                {...props}
                onChildSetRefresh={mockupCall}
            />
        </BrowserRouter>
    );
    let treeForm = deleteComponent.toJSON();
    expect(treeForm).toMatchSnapshot();
});
