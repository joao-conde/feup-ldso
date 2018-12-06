import React, { Component } from 'react';
import { Input, Col, Row, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import withRouter from 'react-router-dom/withRouter';
import PropTypes from 'prop-types';

import '../styles/GenericProject.css';

class GenericProject extends Component {
    constructor(props) {
        super(props);

        this.state = {
            titleEN: '',
            titlePT: '',
            contentEN: '',
            contentPT: '',
            descriptionEN: '',
            descriptionPT: '',
            images: '',
            startDate: '',
            endDate: '',
            modal: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.toggle = this.toggle.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    componentDidUpdate(prevProps) {
        const { projEN, projPT, loadingAction } = this.props;

        if (projEN != null && projPT != null && (prevProps.projEN != projEN || prevProps.projPT != projPT)) {
            this.setState({
                titleEN: projEN.title,
                titlePT: projPT.title,
                contentEN: projEN.content,
                contentPT: projPT.content,
                descriptionEN: projEN.short_description,
                descriptionPT: projPT.short_description,
                images: projEN.images != undefined? projEN.images.reduce((acc, val) => `${acc}\n${val}`) : '',
                startDate: projEN.start_date,
                endDate: projEN.end_date
            });
        }

        if (prevProps.loadingAction !== loadingAction && this.state.modal)
            this.toggle();
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    onSubmit() {
        const { add, faculty, projEN, projPT, mainAction, history } = this.props;
        let imagesArray = this.state.images.split('\n');
        imagesArray = imagesArray.map(el => el.trim());

        if (add) {
            mainAction(faculty, {
                ...this.state,
                images: imagesArray
            });
            history.push(`/faculties/${faculty}/projects`);
        } else {
            mainAction(faculty, 'en', projEN.id, {
                title: this.state.titleEN,
                content: this.state.contentEN,
                short_description: this.state.descriptionEN,
                images: imagesArray,
                start_date: this.state.startDate,
                end_date: this.state.end_date
            });
            mainAction(faculty, 'pt', projPT.id, {
                title: this.state.titlePT,
                content: this.state.contentPT,
                short_description: this.state.descriptionPT,
                images: imagesArray,
                start_date: this.state.startDate,
                end_date: this.state.end_date
            });
        }
    }

    onDelete() {
        const { delAction, projEN, projPT } = this.props;

        delAction(projEN.id);
        delAction(projPT.id);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        const { loading, loadingAction, add, projEN, projPT, delAction } = this.props;

        const deleteHtml = delAction != null ? <Button outline color="danger" onClick={this.toggle}>Delete</Button> : '';

        if (loading) {
            return <div>Loading...</div>;
        } else if (projEN == null || projPT == null) {
            return <div></div>;
        } else {
            return (
                <div className="holderParent">
                    <div className="projectHolder">
                        <Row className="row-style">
                            <Col className="center-text">
                                <h2>{add ? 'New' : 'Edit'} Social Impact Project{delAction != null? ' | ' : ''}{deleteHtml}</h2>
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
                                <h4>Title</h4>
                            </Col>
                            <Col xs="6" className="center-text">
                                <h4>Título</h4>
                            </Col>
                        </Row>
                        <Row className="row-style">
                            <Col xs="6" className="center-text">
                                <Input name="titleEN"
                                    value={this.state.titleEN}
                                    onChange={this.handleInputChange} />
                            </Col>
                            <Col xs="6" className="center-text">
                                <Input name="titlePT"
                                    value={this.state.titlePT}
                                    onChange={this.handleInputChange} />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="6" className="center-text">
                                <h4>Short Description</h4>
                            </Col>
                            <Col xs="6" className="center-text">
                                <h4>Pequena Descrição</h4>
                            </Col>
                        </Row>
                        <Row className="row-style">
                            <Col xs="6" className="center-text">
                                <Input name="descriptionEN"
                                    value={this.state.descriptionEN}
                                    onChange={this.handleInputChange} />
                            </Col>
                            <Col xs="6" className="center-text">
                                <Input name="descriptionPT"
                                    value={this.state.descriptionPT}
                                    onChange={this.handleInputChange} />
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
                                    value={this.state.contentEN}
                                    onChange={this.handleInputChange} />
                            </Col>
                            <Col xs="6" className="center-text">
                                <Input type="textarea" name="contentPT"
                                    value={this.state.contentPT}
                                    onChange={this.handleInputChange} />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="center-text">
                                <h4>Images / Imagens</h4>
                            </Col>
                        </Row>
                        <Row className="row-style">
                            <Col className="center-text">
                                <Input type="textarea" name="images"
                                    value={this.state.images}
                                    onChange={this.handleInputChange} />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="6" className="center-text">
                                <h4>Begin Date / Data de Início</h4>
                            </Col>
                            <Col xs="6" className="center-text">
                                <h4>End date / Data de Fim</h4>
                            </Col>
                        </Row>
                        <Row className="row-style">
                            <Col xs="6" className="center-text">
                                <Input type="date" className="dateInput"
                                    name="startDate"
                                    value={this.state.startDate === undefined? '' : this.state.startDate}
                                    onChange={this.handleInputChange} />
                            </Col>
                            <Col xs="6" className="center-text">
                                <Input type="date" className="dateInput"
                                    name="endDate"
                                    value={this.state.endDate === undefined? '' : this.state.endDate}
                                    onChange={this.handleInputChange} />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="center-text">
                                <Button className={`${loadingAction ? 'm-progress' : ''} mainActionBtn`}
                                    onClick={this.onSubmit}>
                                    {add ? 'Create' : 'Save'} Project
                                </Button>
                            </Col>
                        </Row>
                    </div>
                    <Modal isOpen={this.state.modal} toggle={this.toggle}>
                        <ModalHeader toggle={this.toggle}>Delete Project</ModalHeader>
                        <ModalBody>
                            This action is irreversible. Are you sure you want to proceed?
                        </ModalBody>
                        <ModalFooter>
                            <Button outline color="danger" className={loadingAction ? 'm-progress' : ''} onClick={this.onDelete}>Delete</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            );
        }
    }
}

GenericProject.propTypes = {
    history: PropTypes.object,
    add: PropTypes.bool,
    loading: PropTypes.bool,
    loadingAction: PropTypes.bool,
    faculty: PropTypes.string,
    projEN: PropTypes.object,
    projPT: PropTypes.object,
    mainAction: PropTypes.func,
    delAction: PropTypes.func
};

export default withRouter(GenericProject);
