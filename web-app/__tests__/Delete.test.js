import React from 'react';
import renderer from 'react-test-renderer';
import Delete from '../src/components/Delete';
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

describe('Delete Test Suite', () => {
    it('Deletes a project correctly', () => {

        mockAxios.onDelete('http://localhost:3000/faculties/en/faup/social-projects?where[id]=').reply(200, {
            id: 1
        });

        const mockupCall = jest.fn();
        const component = renderer.create(
            <Delete
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
            <Delete
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
