import React, { Component } from 'react';
import { NotificationContainer } from 'react-notifications';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import rootReducer from './reducers/reducer';
import requestMiddleware from './reducers/middleware';
import AppContainer from './screens/AppContainer';
import Login from './screens/Login';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './styles/App.css';

// Set of icons being used in the project
library.add(faSearch);

const store = createStore(rootReducer, applyMiddleware(requestMiddleware));

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Switch>
                            <Route path="/login" component={Login} />
                            <Route path="/" component={AppContainer} />
                        </Switch>
                        <NotificationContainer />
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;