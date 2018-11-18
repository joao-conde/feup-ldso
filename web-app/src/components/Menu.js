import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import PropTypes from 'prop-types';

class Menu extends Component{

    render(){
        return(
            <div className="menu">
                <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Manage Social Impact Projects</CardTitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk the cards content</CardText>
                        <NavLink to={'/faculties/' + this.props.match.params.faculty.toLowerCase() + '/socialProjects'}>
                            <Button>Go</Button>
                        </NavLink>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Manage Promotional Videos</CardTitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk the cards content</CardText>
                        <NavLink to={'/faculties/' + this.props.match.params.faculty.toLowerCase() + '/promotionalVideos'}>
                            <Button>Go</Button>
                        </NavLink>
                    </CardBody>
                </Card>
                <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Manage Future Prospects</CardTitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk the cards content</CardText>
                        <NavLink to={'/faculties/' + this.props.match.params.faculty.toLowerCase() + '/futureProspects'}>
                            <Button>Go</Button>
                        </NavLink>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

Menu.propTypes = {
    match: PropTypes.object.isRequired
};

export default Menu;
