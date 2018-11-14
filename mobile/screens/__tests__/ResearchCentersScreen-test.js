import 'react-native';
import React from 'react';
import ResearchCentresScreen from '../ResearchCentresScreen';
import Enzyme, { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const middlewares = []; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);

function setup(projects) {

    const initialState = { 
        faculty: {
            loading: false,
            name: 'faup'
        },
        language: {
            selection: 'en'
        }
    };

    const props = {
        projects: projects,
        single: {
            'title': 'EN LIAAC at FAUP',
            'full_name': 'Stuff laboratory',
            'content': '[EN] Aliquam sit amet varius lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed tortor justo, ornare a vulputate in, mattis id mi. Donec varius, dui venenatis pharetra ultricies, ligula nulla ornare ex, quis mattis libero quam a tellus. Quisque quis est id nulla ornare semper at a nisi. Integer tincidunt egestas ornare. Nullam congue tellus arcu, eu ultricies mi pellentesque eget. Pellentesque massa sapien, suscipit sit amet lacus vel, faucibus faucibus elit. Cras in metus viverra, luctus magna ac, tristique leo. Aenean ultrices dui eget velit cursus, vitae suscipit purus varius. Aliquam erat volutpat. In porta metus et velit aliquet porta.',
            'images': [
                'https://dummyimage.com/600x400/000/fff',
                'https://dummyimage.com/600x400/000/fff'
            ],  
            'faculty': 'faup',
            'language': 'en'
        },
        getAll: jest.fn(),
        getOne: jest.fn()
    };

    const wrapper = shallow(<ResearchCentresScreen {...props} />,
        {
            context: { store: mockStore(initialState) },
            disableLifecycleMethods: true
        });

    return wrapper;
}

it('renders loading screen', () => {

    const projects = [];

    const wrapper = setup(projects);

    expect(wrapper.dive()).toMatchSnapshot();
});

it('renders research centers component', () => {

    const projects = [
        {
            'title': 'EN LIAAC at FAUP',
            'full_name': 'Stuff laboratory',
            'content': '[EN] Aliquam sit amet varius lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed tortor justo, ornare a vulputate in, mattis id mi. Donec varius, dui venenatis pharetra ultricies, ligula nulla ornare ex, quis mattis libero quam a tellus. Quisque quis est id nulla ornare semper at a nisi. Integer tincidunt egestas ornare. Nullam congue tellus arcu, eu ultricies mi pellentesque eget. Pellentesque massa sapien, suscipit sit amet lacus vel, faucibus faucibus elit. Cras in metus viverra, luctus magna ac, tristique leo. Aenean ultrices dui eget velit cursus, vitae suscipit purus varius. Aliquam erat volutpat. In porta metus et velit aliquet porta.',
            'images': [
                'https://dummyimage.com/600x400/000/fff',
                'https://dummyimage.com/600x400/000/fff'
            ],  
            'faculty': 'faup',
            'language': 'en'
        },
        {
            'title': 'EN LIAAC Third',
            'full_name': 'Stuff laboratory',
            'content': '[EN] Aliquam sit amet varius lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed tortor justo, ornare a vulputate in, mattis id mi. Donec varius, dui venenatis pharetra ultricies, ligula nulla ornare ex, quis mattis libero quam a tellus. Quisque quis est id nulla ornare semper at a nisi. Integer tincidunt egestas ornare. Nullam congue tellus arcu, eu ultricies mi pellentesque eget. Pellentesque massa sapien, suscipit sit amet lacus vel, faucibus faucibus elit. Cras in metus viverra, luctus magna ac, tristique leo. Aenean ultrices dui eget velit cursus, vitae suscipit purus varius. Aliquam erat volutpat. In porta metus et velit aliquet porta.',
            'images': [
                'https://dummyimage.com/600x400/000/fff',
                'https://dummyimage.com/600x400/000/fff'
            ],  
            'faculty': 'faup',
            'language': 'en'
        }];

    const wrapper = setup(projects);

    expect(wrapper.dive()).toMatchSnapshot();
});

