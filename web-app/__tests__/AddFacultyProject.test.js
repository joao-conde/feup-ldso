import React from 'react';
import renderer from 'react-test-renderer';
import AddFacultyProject from '../src/components/AddFacultyProject';
import 'isomorphic-fetch'; //components use fetch() on mount
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { shallow } from 'enzyme';

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

describe('AddFacultyProject Snapshots', () => {
    it('AddFacultyProject.handleSubmit()', () => {

        mockAxios.onPost('http://localhost:3000/faculties/en/faup/social-projects').reply(200, {
            title: '[EN] Test title',
            content: '[EN] Place holder text, just a test.',
        });

        const mockupCall = jest.fn();
        const component = renderer.create(
            <AddFacultyProject
                {...props}
                onChildSetRefresh={mockupCall}
            />
        );

        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Test click handle submit event', () => {

        const mockCallBack = jest.fn();

        const button = shallow((
            <AddFacultyProject
                {...props}
                onChildSetRefresh={mockCallBack}
            />));
        button.find('Button').simulate('click',
            {
                preventDefault: () => { }
            });
        expect(mockCallBack.mock.calls.length).toEqual(1);

    });
});
