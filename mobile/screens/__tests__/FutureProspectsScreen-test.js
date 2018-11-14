import 'react-native';
import React from 'react';
import FutureProspectsScreen from '../FutureProspectsScreen';
import Enzyme, { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const middlewares = []; // you can mock any middlewares here if necessary
const mockStore = configureStore(middlewares);

function setup(loading = false) {

    const initialState = { 
        faculty: {
            loading: loading,
            futureProspects: {
                'content': '[EN] Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sem eros, elementum sed dui et, tincidunt hendrerit mauris. Nunc vestibulum massa eget condimentum aliquam. Sed in convallis nulla. Duis aliquam lorem tempor arcu dapibus, non laoreet nisi bibendum. Nulla nec libero augue. Pellentesque scelerisque lectus non diam molestie fringilla. Vestibulum a eros justo. Sed tincidunt quam eu dui auctor, sit amet fringilla tellus ultricies. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sit amet varius lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed tortor justo, ornare a vulputate in, mattis id mi. Donec varius, dui venenatis pharetra ultricies, ligula nulla ornare ex, quis mattis libero quam a tellus. Quisque quis est id nulla ornare semper at a nisi. Integer tincidunt egestas ornare. Nullam congue tellus arcu, eu ultricies mi pellentesque eget. Pellentesque massa sapien, suscipit sit amet lacus vel, faucibus faucibus elit. Cras in metus viverra, luctus magna ac, tristique leo. Aenean ultrices dui eget velit cursus, vitae suscipit purus varius. Aliquam erat volutpat. In porta metus et velit aliquet porta. Sed tempor dolor bibendum pretium euismod. Etiam eros mi, feugiat aliquet mattis non, elementum nec sem. Aliquam eget erat porta, porta risus nec, placerat orci. Integer nec enim tempor orci mollis luctus non at nisi. Maecenas fermentum magna tempor nisl rutrum tempor. Quisque in rutrum velit, ut finibus risus. Morbi pharetra placerat neque efficitur efficitur.',
                'banner': 'http://www.construir.pt/wp-content/uploads/2017/10/feup-1024x624.jpg'
            },
        },
        language: {
            selection: 'en'
        }
    };

    const wrapper = shallow(<FutureProspectsScreen />,
        {
            context: { store: mockStore(initialState) },
            disableLifecycleMethods: true
        });

    return wrapper;
}

it('renders loading screen', () => {
    const wrapper = setup(true);

    expect(wrapper.dive()).toMatchSnapshot();
});
    
it('renders screen with future prospect content', () => {
    const wrapper = setup();

    expect(wrapper.dive()).toMatchSnapshot();
});