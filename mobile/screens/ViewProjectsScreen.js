import React from 'react';
import Drawer from 'react-native-drawer';
import {MainFrame} from '../components/MainFrame';
import SideBar from '../components/SideBar';

export default class ViewProjectsScreen extends React.Component {
  static navigationOptions = {
    title: 'View Projects',
  };

  closeSideBar = () => {
    this._drawer.close()
  };
  openSideBar = () => {
    this._drawer.open()
  };

  render() {

    return (

      <Drawer
        ref={(ref) => this._drawer = ref}
        type="static"
        content={
          <SideBar
            styles={{
              backgroundColor: '#000000'
            }}
            closeDrawer={this.closeSideBar} />
        }
        acceptDoubleTap
        styles={{main: {backgroundColor: '#fff', shadowColor: '#000000', shadowOpacity: 0.3, shadowRadius: 15}}}
        onOpen={() => {
          console.log('onopen')
          this.setState({drawerOpen: true})
        }}
        onClose={() => {
          console.log('onclose')
          this.setState({drawerOpen: false})
        }}
        captureGestures={false}
        tweenDuration={100}
        panThreshold={0.08}
        openDrawerOffset={(viewport) => {
          var threshold = 400, portraitLimitWidthPortion = 0.5, landscapeLimitWidthPortion = 0.2;
          return viewport.width > threshold ? viewport.width * landscapeLimitWidthPortion : viewport.width * portraitLimitWidthPortion;
        }}
        closedDrawerOffset={() => 75}
        panOpenMask={0.2}
        negotiatePan
        >
        <MainFrame />
      </Drawer>

    );
  }
}