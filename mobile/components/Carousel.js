import React from 'react';
import { Animated, View, ScrollView, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import PropTypes from 'prop-types';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import facultyStyles from '../constants/SpecificStyles';

const { width } = Dimensions.get('window');
const FIXED_BAR_WIDTH = 280;
const BAR_SPACE = 10;


class Carousel extends React.Component {

    numItems = this.props.videos.length
    itemWidth = (FIXED_BAR_WIDTH / this.numItems) - ((this.numItems - 1) * BAR_SPACE)
    animVal = new Animated.Value(0)


    scrollToPreviousPage = () => {
        this.scroller.scrollTo({x: -width, y: 0});
    };

    scrollToNextPage = () => {
        this.scroller.scrollTo({x: width, y: 0});
    };

    trackDynamicStyle = function(itemWidth, i) {
        return {
            width: itemWidth,
            marginLeft: i === 0 ? 0 : BAR_SPACE
        };
    }

    animatedViewDynamicStyle = function(itemWidth, scrollBarVal) {
        return{
            width: itemWidth,
            transform: [
                { translateX: scrollBarVal },
            ],
        };
    }

    render() {
        const { videos, name } = this.props;

        let barArray = [];
        for(let i=0; i<this.numItems; i++) {
            const scrollBarVal = this.animVal.interpolate({
                inputRange: [width * (i - 1), width * (i + 1)],
                outputRange: [-this.itemWidth, this.itemWidth],
                extrapolate: 'clamp',
            });
            
            const thisBar = (
                <View
                    key={`bar${i}`}
                    style={[ styles.track,this.trackDynamicStyle(this.itemWidth, i)]}
                >
                    <Animated.View
                        style={[styles.bar, facultyStyles[name].carouselBar,this.animatedViewDynamicStyle(this.itemWidth, scrollBarVal)]}
                    />
                </View>
            );
            barArray.push(thisBar);
        }

        if (videos && videos.length) {
            return (
                <View>
                    <View style={styles.scrollContainer}>
                        <ScrollView
                            horizontal
                            pagingEnabled
                            showsHorizontalScrollIndicator={false}
                            scrollEventThrottle={10}
                            onScroll={
                                Animated.event(
                                    [{ nativeEvent: { contentOffset: { x: this.animVal } } }]
                                )
                            }
                            ref={(scroller) => {this.scroller = scroller;}}
                        >
                            {videos}
                        </ScrollView>
                        <View style={styles.barContainer}>
                            {barArray}
                        </View>
                    </View>
                    <View style={[styles.leftArrow]}>
                        <TouchableOpacity onPress={this.scrollToPreviousPage}>
                            <Icon style={[styles.leftArrowIcon, facultyStyles[name].videoArrow]} type="FontAwesome" name="angle-left" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rightArrow}>
                        <TouchableOpacity onPress={this.scrollToNextPage}>
                            <Icon style={[styles.rightArrowIcon, facultyStyles[name].videoArrow]} type="FontAwesome" name="angle-right" />
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }
        return null;
    }
}

Carousel.propTypes = {
    name: PropTypes.string,
    videos: PropTypes.array
};

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        height: hp('100%'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    barContainer: {
        zIndex: 2,
        position: 'absolute',
        top: hp('87.5%'),
        justifyContent: 'center',
        flexDirection: 'row'
    },
    track: {
        backgroundColor: '#d3d3d3',
        overflow: 'hidden',
        height: 2
    },
    bar: {
        height: 2,
        position: 'absolute',
        left: 0,
        top: 0,
    },
    leftArrow: {
        zIndex: 2,
        position: 'absolute',
        top: hp('40%'),
        left: wp('1%')
    },
    leftArrowIcon: {
        fontSize: wp('7%')
    },
    rightArrow: {
        zIndex: 2,
        position: 'absolute',
        top: hp('40%'),
        left: wp('97%'),
    },
    rightArrowIcon: {
        fontSize: wp('7%')
    },


});

export default Carousel;