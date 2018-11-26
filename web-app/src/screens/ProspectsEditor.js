import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Col, Row, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { setFaculty } from '../actions/facultyActions';
import { getProspects, editProspects } from '../actions/prospectsActions';

import '../styles/GenericProject.css';

class ProspectsEditor extends Component {

    constructor(props) {
        super(props);

        const { contentEN, contentPT, banner } = this.props;

        this.state = {
            contentEN: contentEN,
            contentPT: contentPT,
            banner: banner
        };
    }

    componentDidMount() {
        this.updateProspects();
    }

    componentDidUpdate(prevProps) {
        const { faculty, contentEN, contentPT, banner } = this.props;

        if (prevProps.faculty !== faculty)
            this.updateProspects();

        if (contentEN !== null && contentPT !== null) {
            if (contentEN !== prevProps.contentEN || contentPT !== prevProps.contentPT) {
                this.setState({
                    contentEN: contentEN,
                    contentPT: contentPT,
                    banner: banner
                });
            }
        }
    }

    updateProspects = () => {
        const { match, faculty, getProspects, setFaculty } = this.props;

        setFaculty(match.params.faculty);
        getProspects(faculty, 'en');
        getProspects(faculty, 'pt');
    }

    onSubmit = () => {
        const { faculty, editProspects } = this.props;

        const enData = {
            future_prospects: {
                content: this.state.contentEN,
                banner:  this.state.banner
            }
        };
        const ptData = {
            future_prospects: {
                content: this.state.contentPT,
                banner: this.state.banner
            }
        };

        editProspects(faculty, 'en', enData);
        editProspects(faculty, 'pt', ptData);
        this.updateProspects();
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        const { loading, loadingAction } = this.props;

        if (loading) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <div className="prospectsParent">
                        <div className="projectHolder">
                            <Row className="row-style">
                                <Col className="center-text">
                                    <h1>Planning the future</h1>
                                </Col>
                            </Row>
                            <Row className="versions row-style">
                                <Col xs="6" className="center-text">
                                    <h3>English Version</h3>
                                </Col>
                                <Col xs="6" className="center-text">
                                    <h3>Versão Portuguesa</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="6" className="center-text">
                                    <h4>Content</h4>
                                </Col>
                                <Col xs="6" className="center-text">
                                    <h4>Conteúdo</h4>
                                </Col>
                            </Row>
                            <Row className="row-style">
                                <Col xs="6" className="center-text">
                                    <Input type="textarea" name="contentEN"
                                        className="contentEditor"
                                        value={this.state.contentEN}
                                        onChange={this.handleInputChange} />
                                </Col>
                                <Col xs="6" className="center-text">
                                    <Input type="textarea" name="contentPT"
                                        className="contentEditor"
                                        value={this.state.contentPT}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </Row>
                            <Row>
                                <Col className="center-text">
                                    <h4>Associated image / Imagem associada</h4>
                                </Col>
                            </Row>
                            <Row className="row-style">
                                <Col className="center-text">
                                    <Input name="banner"
                                        value={this.state.banner}
                                        onChange={this.handleInputChange} />
                                </Col>
                            </Row>
                            <Row>
                                <Col className="center-text">
                                    <Button className={`${loadingAction ? 'm-progress' : ''} mainActionBtn editProspectsBtn`}
                                        onClick={this.onSubmit}>
                                        Edit Future Plans
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            );
        }
    }
}


ProspectsEditor.propTypes = {
    match: PropTypes.object.isRequired,
    faculty: PropTypes.string,
    loading: PropTypes.bool,
    loadingAction: PropTypes.bool,
    contentEN: PropTypes.string,
    contentPT: PropTypes.string,
    banner: PropTypes.string,
    setFaculty: PropTypes.func,
    getProspects: PropTypes.func,
    editProspects: PropTypes.func
};

const mapStateToProps = ({ faculty, prospects }) => ({
    faculty: faculty.name,
    loading: prospects.loading,
    contentEN: prospects.contentEN,
    contentPT: prospects.contentPT,
    banner: prospects.banner
});

const mapDispatchToProps = {
    setFaculty,
    getProspects,
    editProspects
};

export default connect(mapStateToProps, mapDispatchToProps)(ProspectsEditor);