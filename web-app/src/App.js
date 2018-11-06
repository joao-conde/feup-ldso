import React, { Component } from 'react';
import Nav from './components/Nav';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';


import './styles/App.css';
library.add(faPlusCircle);

class App extends Component {
    render() {
        return (
            <div>
                <Nav />
            </div>
        );
    }
}


export default App;
