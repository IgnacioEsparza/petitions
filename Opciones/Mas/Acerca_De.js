import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

var blueColor = '#4b85eb';
var grayColor = '#494949';

export default class Acerca_De extends Component {

    static navigationOptions = {
        title: 'Acerca de',
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
                <View style={styles.textContainer}>
                    <Text style={styles.labelStyle}>Proyecto Propuestas Municipales</Text>
                    <Text style={styles.labelStyle}>Smart Araucanía © 2019</Text>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({

    textContainer: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        marginBottom: 20,
        marginTop: 30
    },

    labelStyle: {
        fontSize: 12,
        color: '#000000',
    },

});