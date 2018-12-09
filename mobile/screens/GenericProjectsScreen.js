import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import ActivityIndicatorView from '../components/ActivityIndicatorView';
import GenericProject from '../components/GenericProject';
import SideBar from '../components/SideBar';
import { connect } from 'react-redux';

class GenericProjectsScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentProjectIndex: 0,
            screenHeight: Dimensions.get('window').height,      
            screenWidth: Dimensions.get('window').width,
        };
    }

    componentDidMount() {
        const { language, name } = this.props;

        this.props.getAll(language, name);
    }

    componentDidUpdate(prevProps) {
        const { language, name } = this.props;

        if (prevProps.language != language)
            this.props.getAll(language, name);
    }

    scrollToBottom = () => {
        let scrollYPos = this.state.screenHeight * 1;
        this.scroller.scrollTo({x: 0, y: scrollYPos});
    };
 
    scrollToTop = () => {
        this.scroller.scrollTo({x: 0, y: 0});
    };

    render() {
        const { projects, getOne, single } = this.props;

        if (projects.length == 0) 
            return ( <ActivityIndicatorView></ActivityIndicatorView> );

        return (
            <View style={styles.container}>
                <View style={styles.containerLeft}>
                    <SideBar 
                        projects={projects}
                        onProjectSelect={this.handleSelectProject}
                        styles={styles.sidebar} 
                        closeDrawer={this.closeSideBar} />
                </View>
                <View style={styles.containerRight}>
                    <ScrollView scrollEnabled={false} ref={(scroller) => {this.scroller = scroller;}} >
                        <GenericProject id={projects[this.state.currentProjectIndex].id} getOne={getOne} project={single} navActionDown={this.scrollToBottom} navActionUp={this.scrollToTop} />
                    </ScrollView>
                </View>
            </View>
        );
    }

  handleSelectProject = (index) => {
      this.setState(() => ({
          currentProjectIndex: index
      }));
  } ;

}

GenericProjectsScreen.propTypes = {
    name: PropTypes.string,
    language: PropTypes.string,
    projects: PropTypes.array,
    single: PropTypes.object,
    getAll: PropTypes.func,
    getOne: PropTypes.func
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'nowrap' 
    },
    containerLeft: {
        flex: 1,
    },
    containerRight: {
        flex: 9
    },
    sidebar: {
        backgroundColor: 'black'
    }

});

const mapStateToProps = ({ faculty, language }) => ({
    name: faculty.name,
    loading: faculty.loading,
    language: language.selection,
});

export default connect(mapStateToProps, null)(GenericProjectsScreen);
