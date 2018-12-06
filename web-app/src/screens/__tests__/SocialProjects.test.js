import React from 'react';
import SocialProjects from '../SocialProjects';
import Enzyme, { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const middlewares = []; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);

function setup(projects) {

    const initialState = {
        faculty: {
            name: 'faup'
        },
        socialProjects: {
            loading: false,
            loadingAction: false,
            projectsEN: projects,
            projectsPT: projects,
            idsMap: {
                'idEn': 'idPt'
            },
            currProjEN: {
                'title': '[EN] Social project at FAUP',
                'short_description': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam neque. Aliquam erat volutpat. Suspendisse sagittis ultrices augue. Pellentesque ipsum.',
                'content': '[EN] Aliquam sit amet varius lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed tortor justo, ornare a vulputate in, mattis id mi. Donec varius, dui venenatis pharetra ultricies, ligula nulla ornare ex, quis mattis libero quam a tellus. Quisque quis est id nulla ornare semper at a nisi. Integer tincidunt egestas ornare. Nullam congue tellus arcu, eu ultricies mi pellentesque eget. Pellentesque massa sapien, suscipit sit amet lacus vel, faucibus faucibus elit. Cras in metus viverra, luctus magna ac, tristique leo. Aenean ultrices dui eget velit cursus, vitae suscipit purus varius. Aliquam erat volutpat. In porta metus et velit aliquet porta.',
                'start_date': '2017-01-01',
                'images': [
                    'https://picsum.photos/200/300/?random',
                    'https://picsum.photos/112/200/?random'
                ],
                'facultyId': 1
            },
            currProjPT: {
                'title': '[PT] Social project at FAUP',
                'short_description': 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam neque. Aliquam erat volutpat. Suspendisse sagittis ultrices augue. Pellentesque ipsum.',
                'content': '[EN] Aliquam sit amet varius lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed tortor justo, ornare a vulputate in, mattis id mi. Donec varius, dui venenatis pharetra ultricies, ligula nulla ornare ex, quis mattis libero quam a tellus. Quisque quis est id nulla ornare semper at a nisi. Integer tincidunt egestas ornare. Nullam congue tellus arcu, eu ultricies mi pellentesque eget. Pellentesque massa sapien, suscipit sit amet lacus vel, faucibus faucibus elit. Cras in metus viverra, luctus magna ac, tristique leo. Aenean ultrices dui eget velit cursus, vitae suscipit purus varius. Aliquam erat volutpat. In porta metus et velit aliquet porta.',
                'start_date': '2017-01-01',
                'images': [
                    'https://picsum.photos/200/300/?random',
                    'https://picsum.photos/112/200/?random'
                ],
                'facultyId': 1
            }
        }
    };

    const props = {
        match: {
            params: {
                faculty: 'faup',
            }
        },
        getProjects: jest.fn(),
        getProjectDetails: jest.fn(),
        editProject: jest.fn(),
        addProject: jest.fn(),
        deleteProject: jest.fn(),
        setFaculty: jest.fn()
    };

    const wrapper = shallow(<SocialProjects {...props} />,
        {
            context: { store: mockStore(initialState) },
            disableLifecycleMethods: true
        });

    return wrapper;
}

describe('Social Projects Screen tests', () => {

    it('renders loading screen', () => {
        const projects = [];
        const wrapper = setup(projects);
        expect(wrapper.dive()).toMatchSnapshot();
    });
    
    it('calls updateQuery without crashing', () => {
        const projects = [];
        const wrapper = setup(projects);
        expect(wrapper.dive().instance().state.query).toBe('');
        wrapper.dive().instance().updateQuery('projectName');
        expect(wrapper.dive()).toMatchSnapshot();
    });  

    it('calls updateFaculty without crashing', () => {
        const projects = [];
        const wrapper = setup(projects);
        wrapper.dive().instance().updateFaculty();
        expect(wrapper.dive()).toMatchSnapshot();
    });  

    it('calls componentDidMount without crashing', () => {
        const projects = [];
        const wrapper = setup(projects);
        wrapper.dive().instance().componentDidMount();
        expect(wrapper.dive()).toMatchSnapshot();
    });

    it('calls componentDidUpdate without crashing', () => {
        const projects = [];

        const prevProps = {
            faculty: 'feup',
            currProjEN: {
                id: '69',
                content: 'mockup project'
            },
            mapIds: {}
        };

        const prevState = {
            query: 'mockup query'
        };

        const wrapper = setup(projects);
        wrapper.dive().instance().componentDidUpdate(prevProps, prevState);
        expect(wrapper.dive()).toMatchSnapshot();
    }); 
});