import React, { Component } from 'react';
import { Input, Button, Col, Row } from 'reactstrap';
import PropTypes from 'prop-types';

import '../styles/GenericProject.css';

class PromotionalVideo extends Component {
    constructor(props){
        super(props);

        this.state = {
            videosEN: '',
            videosPT: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidUpdate(prevProps) {
        const { videosEN, videosPT } = this.props;

        if (videosEN != null && videosPT != null && (prevProps.videosEN !== videosEN || prevProps.videosPT !== videosPT)) {
            this.setState({
                videosEN: videosEN.videos !== undefined && videosEN.videos.length !== 0? videosEN.videos.reduce((acc, val) => `${acc}\n${val}`) : '',
                videosPT: videosPT.videos !== undefined && videosPT.videos.length !== 0? videosPT.videos.reduce((acc, val) => `${acc}\n${val}`) : '',
            });
        }
    }

    onSubmit() {
        const { faculty, mainAction } = this.props;

        let regex = RegExp('(?:https?:\\/\\/)?(?:www.)?(?:youtube.com\\/watch\\?v=|youtu.be\\/|youtube-nocookie.com\\/embed\\/)(.{11,}?)');

        let videosArrayEN = this.state.videosEN.split('\n');
        let videos_filtered_EN = videosArrayEN.filter(video => regex.test(video));
        videosArrayEN = videos_filtered_EN.map(video => 'https://www.youtube-nocookie.com/embed/' + video.match(regex)[1]);

        let videosArrayPT = this.state.videosPT.split('\n');
        let videos_filtered_PT = videosArrayPT.filter(video => regex.test(video));
        videosArrayPT = videos_filtered_PT.map(video => 'https://www.youtube-nocookie.com/embed/' + video.match(regex)[1]);

        mainAction(faculty, 'en', {
            videos: videosArrayEN,
        });
        mainAction(faculty, 'pt', {
            videos: videosArrayPT,
        });
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        const { loadingAction } = this.props;

        return (
            <div className="holderParent">
                <div className="projectHolder">
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
                            <h4>Videos</h4>
                        </Col>
                        <Col xs="6" className="center-text">
                            <h4>Vídeos</h4>
                        </Col>
                    </Row>
                    <Row className="row-style">
                        <Col xs="6" className="center-text">
                            <Input type="textarea" name="videosEN"
                                value={this.state.videosEN}
                                onChange={this.handleInputChange}
                            />
                        </Col>
                        <Col xs="6" className="center-text">
                            <Input type="textarea" name="videosPT"
                                value={this.state.videosPT}
                                onChange={this.handleInputChange}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="center-text">
                            <Button id="buttonOnSubmit" className={`${loadingAction ? 'm-progress' : ''} mainActionBtn`} onClick={this.onSubmit}>
                                Edit Videos
                            </Button>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

PromotionalVideo.propTypes = {
    loadingAction: PropTypes.bool,
    faculty: PropTypes.string,
    videosEN: PropTypes.object,
    videosPT: PropTypes.object,
    mainAction: PropTypes.func
};

export default PromotionalVideo;
