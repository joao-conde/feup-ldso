import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

export default class ActivityIndicatorView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <ActivityIndicator size={75}></ActivityIndicator>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});