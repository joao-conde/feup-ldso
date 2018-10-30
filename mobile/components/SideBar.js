import React from 'react';
import { View, Text, Content } from 'native-base';
import { FlatList, StyleSheet, Image } from 'react-native';

import { FAKE_API_ENDPOINT } from 'react-native-dotenv';

export default class SideBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isLoading: true };
    }

    componentDidMount() {
        return fetch(FAKE_API_ENDPOINT + ':3005/en')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson['feup']['social-projects'],
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {

        return (
            <View>
                <Text>
          Projects
                </Text>

                <FlatList
                    data={this.state.dataSource}
                    renderItem={({ item }) =>
                        <Content contentContainerStyle={styles.content}>
                            <Image style={styles.image} source={require('../assets/images/robot-prod.png')} />
                            <Text style={styles.text}> {item.title} </Text>
                        </Content>
                    }
                    keyExtractor={(item) => 'feup' + 'sidebar' + item.id}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        alignItems: 'flex-start'
    },

    title: {
        alignItems: 'flex-start'
    },

    image: {
        width: 50,
        height: 50,
        alignItems: 'center'
    }
});