import React from 'react';
import renderer from 'react-test-renderer';
import Editor from '../src/components/Editor';
import 'isomorphic-fetch'; //components use fetch() on mount
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
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

describe('Editor Test Suite', () => {
    it('Edit Snapshot', () => {

        mockAxios.onPatch('http://localhost:3000/faculties/en/faup/social-projects?where[id]=').reply(200, {
            id: 1,
            title: 'Project title',
            content: 'project content',
        });

        const mockupCall = jest.fn();
        const component = renderer.create(
            <Editor
                {...props}
                onChildSetRefresh={mockupCall}
            />
        );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Submit handler called', () => {
        const mockupCall = jest.fn();
        const wrapper = shallow(<Editor
            {...props}
            onChildSetRefresh={mockupCall}
        />);

        wrapper.setState({
            error: null,
            isLoaded: true,
            project: [{id: 1, title: 'projectToEdit', value: 'valueToEdit'}],
            title: 'TestTitle',
            content: 'This is a mockup test content'
        });

        expect(mockupCall.mock.calls.length).toEqual(0);
        wrapper.find('#submitBtn').simulate('click', {
            preventDefault: () => { }
        });

        expect(mockupCall.mock.calls.length).toEqual(1);
    });

    //TODO: a test to check if project is actually edited
});
