import React, { Component } from 'react';
import { NotificationContainer } from 'react-notifications';
import MainContainer from './components/MainContainer';
import logo from './assets/images/impactup.png';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/reducer';
import requestMiddleware from './reducers/middleware';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import './styles/App.css';

// Set of icons being used in the project
library.add(faSearch);

const store = createStore(rootReducer, applyMiddleware(requestMiddleware));

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <div className="intro">
                        <img src={logo} alt="application logo" width="140"/>
                        {/* TODO: Add button for Sign Out here later */}
                    </div>
                    <MainContainer />
                    <NotificationContainer />
                </div>
            </Provider>
        );
    }
}

export default App;
