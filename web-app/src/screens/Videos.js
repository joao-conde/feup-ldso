import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Videos extends Component {

    // componentDidMount() {
    //     this.props.setFaculty(this.props.match.params.faculty);
    // }

    // componentDidUpdate() {
    //     this.props.setFaculty(this.props.match.params.faculty);
    // }

    render() {
        return (
            <div>
                <p>Videos</p>
            </div>
        );
    }
}

// Videos.propTypes = {

// };

const mapStateToProps = () => ({

});


const mapDispatchToProps = {
    
};

export default connect(mapStateToProps, mapDispatchToProps)(Videos);
