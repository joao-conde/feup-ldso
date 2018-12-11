import React, { Component } from 'react';

import '../styles/Loading.css';

class Loading extends Component {
    /**
     * Animation obtained from here: https://loading.io/css/
     */
    render() {
        // All the divs are needed for the animation
        return (
            <div className="containerLoading">
                <div className="lds-roller">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    }
}

export default Loading;
