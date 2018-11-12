import React from 'react';
import PropTypes from 'prop-types';
import Drawer from 'react-native-drawer';
import { StyleSheet, Dimensions, View, ScrollView, ActivityIndicator } from 'react-native';
import SocialProject from '../components/SocialProject';
import SideBar from '../components/SideBar';
import { connect } from 'react-redux';
import { getSocialProjects } from '../reducers/modules/facultyReducer';

class SocialProjectsScreen extends React.Component {

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

        this.props.getSocialProjects(language, name);
    }

    componentDidUpdate(prevProps) {
        const { language, name } = this.props;

        if (prevProps.language != language)
            this.props.getSocialProjects(language, name);
    }

    closeSideBar = () => {
        this._drawer.close();
    };
    openSideBar = () => {
        this._drawer.open();
    };

    scrollToBottom = () => {
        let scrollYPos = this.state.screenHeight * 1;
        this.scroller.scrollTo({x: 0, y: scrollYPos});
    };
 
    scrollToTop = () => {
        this.scroller.scrollTo({x: 0, y: 0});
    };

    onScroll = (event) => {
        let currentOffset = event.nativeEvent.contentOffset.y;
        let direction = currentOffset > this.offset ? 'down' : 'up';
        this.offset = currentOffset;

        if(direction == 'down')
            this.scrollToBottom();
        else
            this.scrollToTop();
    };

    render() {
        const { socialProjects } = this.props;

        if (socialProjects.length == 0) {
            return (
                <View>
                    <ActivityIndicator></ActivityIndicator>
                </View>
            );
        } 
        return (
            <Drawer
                ref={(ref) => this._drawer = ref}
                type="static"
                content={
                    <SideBar 
                        projects={socialProjects}
                        onProjectSelect={this.handleSelectProject}
                        styles={styles.sidebar} 
                        closeDrawer={this.closeSideBar} />
                }
                acceptDoubleTap
                styles={{main: drawer}}
                onOpen={() => {
                    this.setState({ drawerOpen: true });
                }}
                onClose={() => {
                    this.setState({ drawerOpen: false });
                }}
                captureGestures={false}
                tweenDuration={100}
                panThreshold={0.08}
                openDrawerOffset={(viewport) => {
                    let threshold = 400, portraitLimitWidthPortion = 0.5, landscapeLimitWidthPortion = 0.8;
                    return viewport.width > threshold ? viewport.width * landscapeLimitWidthPortion : viewport.width * portraitLimitWidthPortion;
                }}
                closedDrawerOffset={() => 100}
                panOpenMask={0.2}
                negotiatePan
            >
                <ScrollView ref={(scroller) => {this.scroller = scroller;}} onMomentumScrollBegin={null} onScrollEndDrag={this.onScroll}>
                    <SocialProject id={socialProjects[this.state.currentProjectIndex].id} navActionDown={this.scrollToBottom} navActionUp={this.scrollToTop} />
                </ScrollView>
            </Drawer>
        );
    }

  handleSelectProject = (index) => {
      this.setState(() => ({
          currentProjectIndex: index
      }));
  } ;

}

SocialProjectsScreen.propTypes = {
    name: PropTypes.string,
    language: PropTypes.string,
    socialProjects: PropTypes.array,
    getSocialProjects: PropTypes.func
};

const drawer = {
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 15
};

const styles = StyleSheet.create({
    sidebar: {
        backgroundColor: 'black'
    }
});

const mapStateToProps = ({ faculty, language }) => ({
    name: faculty.name,
    loading: faculty.loading,
    socialProjects: faculty.socialProjects,
    language: language.selection,
});

const mapDispatchToProps = {
    getSocialProjects
};

export default connect(mapStateToProps, mapDispatchToProps)(SocialProjectsScreen);
