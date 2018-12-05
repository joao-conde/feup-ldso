import React from 'react';
import FacultyMenu from '../FacultyMenu';
import Enzyme, { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const middlewares = []; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);

function setup(){
	const initialState = {};

	const props = {
		match: {
			params: {
				faculty: 'feup'
			}
		}
	};

	const wrapper = shallow(<FacultyMenu {...props}/>, {
		context: { store: mockStore(initialState) },
		disableLifecycleMethods: true
	});

	return wrapper;
}


describe('Faculty Menu screen tests', () => {

	it('renders faculty menu screen', () => {
		const wrapper = setup();
		expect(wrapper).toMatchSnapshot();
	});

	it('calls componentDidMount without crashing', () => {
		const wrapper = setup();
		wrapper.dive().instance().componentDidMount();
		expect(wrapper.dive()).toMatchSnapshot();
	});

	it('calls componentDidUpdate without crashing', () => {
		const wrapper = setup();
		wrapper.dive().instance().componentDidUpdate();
		expect(wrapper.dive()).toMatchSnapshot();
	});
});