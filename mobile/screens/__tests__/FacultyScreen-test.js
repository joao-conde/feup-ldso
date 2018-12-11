import React from 'react';
import FacultyScreen from '../FacultyScreen';
import Enzyme, { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const middlewares = []; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);

const props = { navigation: {navigate: jest.fn(), name:'feup', getParam: jest.fn() } };

jest.mock('ScrollView', () => {
    const RealComponent = require.requireActual('ScrollView');
    const React = require('React');
    class ScrollView extends React.Component {
        constructor(props){
            super(props);
        }
        scrollTo = () => {

        }
  
        render() {
            return React.createElement('ScrollView', this.props, this.props.children);
        }
    }
    ScrollView.propTypes = RealComponent.propTypes;
    return ScrollView;
});


function setup(loading = false, facts = 5) {
    let otherFacts;
    if(facts == 2) {
        otherFacts = ['240 protocolos estágio com empresas', '30 contratos projetos prestação de serviços'];
    } else {
        otherFacts = [
            '240 protocolos estágio com empresas',
            '30 contratos projetos prestação de serviços',
            '17 protocolos com escolas de ensino básico e secundário',
            '30 trabalhos de tradução e revisão jurídica',
            '8 campanhas de angariação de bens',
        ];
    }
    const initialState = { 
        faculty: {
            loading: loading,
            name: 'feup',
            stats: {
                'bsc_students': 2221,
                'faculty': 'feup',
                'foreign_student_perc': 0.06,
                'msc_students': 961,
                'nr_bsc': 13,
                'nr_msc': 28,
                'nr_phd': 8,
                'nr_training_course': 125,
                'other_facts': otherFacts,
                'phd_students': 280,
                'research_perc': 0.9,
                'training_course_graduate': 111,
                'training_programs_perc': 0.18,
            }
        },
        language: {
            selection: 'en'
        }
    };

    const wrapper = shallow(<FacultyScreen {...props}/>,
        {
            context: { store: mockStore(initialState) },
            disableLifecycleMethods: false,
            lifecycleExperimental: true
        });

    return wrapper;
}

describe('Rendering', () => {
    it('renders loading screen', () => {
        const wrapper = setup(true);

        expect(wrapper.dive()).toMatchSnapshot();
    });

    it('renders screen with many facts', () => {
        const wrapper = setup();
        expect(wrapper.dive()).toMatchSnapshot();
    });

    it('renders screen with 2 facts', () => {
        const wrapper = setup(false, 2);
        expect(wrapper.dive()).toMatchSnapshot();
    });
});


