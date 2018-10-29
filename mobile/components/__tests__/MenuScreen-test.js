import 'react-native';
import React from 'react';
import MenuScreen from '../../screens/MenuScreen';
import Enzyme, { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import AppNavigator from '../../navigation/AppNavigator';
import { FlatList } from 'react-native';

Enzyme.configure({ adapter: new Adapter() });

const middlewares = []; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);

const initialState = { };

function setup() {
    const navigation = shallow(<AppNavigator />);

    const props = {
        navigation: navigation
    };

    const menuWrapper = shallow(<MenuScreen {...props} />,
        {
            context: { store: mockStore(initialState) },
            disableLifecycleMethods: true
        });

    return {
        props,
        menuWrapper
    };
}

it('renders logo list', () => {
    const { menuWrapper } = setup();

    expect(menuWrapper.dive().find(FlatList).exists()).toEqual(true);
});

it('renders as expected', () => {
    const { menuWrapper } = setup();

    expect(menuWrapper.dive()).toMatchSnapshot();
});
