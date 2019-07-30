import React, { Component } from 'react';
import { View, Text } from 'react-native';

var blueColor = '#4b85eb';
var grayColor = '#494949';

export default class Informacion extends Component {

    static navigationOptions = {
        title: 'Información',
        headerStyle: {
            backgroundColor: '#ffffff',
            elevation: 1,
            shadowOpacity: 0,
            height: 40
        },
        headerTitleStyle: {
            color: grayColor,
            fontSize: 16
        },
        // header: null
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>Información</Text>
            </View>
        );
    }

}