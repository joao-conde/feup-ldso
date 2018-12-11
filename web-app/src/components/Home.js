import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div style={container}>
                <h1>Choose a faculty to start editing!</h1>
            </div>
        );
    }
}

const container = {
    marginTop: '8em',
    textAlign: 'center'
};

export default Home;
