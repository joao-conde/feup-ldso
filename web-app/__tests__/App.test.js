import React from 'react';
import App from '../src/App';
import renderer from 'react-test-renderer';

describe('App snapshot', () => {

    it('renders without crashing', () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree).toMatchSnapshot();
    });

});
