import React from 'react';
import FacultyMenu from '../FacultyMenu';
import Enzyme, { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const middlewares = []; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);



it('renders faculty menu screen', () => {
	const initialState = {};

	const wrapper = shallow(<FacultyMenu />, 
		{
			context: { store: mockStore(initialState) },
			disableLifecycleMethods: true
		});
	expect(wrapper).toMatchSnapshot();
});