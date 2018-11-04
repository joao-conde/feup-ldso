import React from 'react';
import Drawer from 'react-native-drawer';
import { StyleSheet } from 'react-native';
// import ProjectView from '../components/ProjectView';
import SideBar from '../components/SideBar';

export default class SocialProjectsScreen extends React.Component {

  closeSideBar = () => {
      this._drawer.close();
  };
  openSideBar = () => {
      this._drawer.open();
  };

  render() {
      return (
          <Drawer
              ref={(ref) => this._drawer = ref}
              type="static"
              content={
                  <SideBar styles={styles.sidebar} closeDrawer={this.closeSideBar} />
              }
              acceptDoubleTap
              /* Styling has to be done this way because of Drawer and what a styleSheet represents */
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
                  let threshold = 400, portraitLimitWidthPortion = 0.5, landscapeLimitWidthPortion = 0.2;
                  return viewport.width > threshold ? viewport.width * landscapeLimitWidthPortion : viewport.width * portraitLimitWidthPortion;
              }}
              closedDrawerOffset={() => 75}
              panOpenMask={0.2}
              negotiatePan
          >
              {//<ProjectView id={'5bddbf4ef5593c1c3e6b2035'}/>
              }
          </Drawer>
      );
  }

}

const drawer = {
    backgroundColor: '#fff',
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius: 15
};

const styles = StyleSheet.create({
    sidebar: {
        backgroundColor: '#000000'
    }
});
