import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';

//tests included here will be run by all child components (every component)
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});