import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Animated, Dimensions, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import Colores from '../../Data/Global_Colors'

var grayColor = Colores.grayColor;
var blueColor = Colores.blueColor;
var whiteColor = Colores.whiteColor;
var blackColor = Colores.blackColor;
var marginLeftGlobal = 20;

export default class Mis_Votaciones extends Component {

    static navigationOptions = {
        title: 'Más Información',
        headerStyle: {
            backgroundColor: whiteColor,
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
        var proposal = this.props.navigation.state.params.data;
        return (
            <View style={styles.MainContainer}>
                <View style={{ flex: 90 }}>
                    
                    <ScrollView>

                        <View style={styles.titleContainer}>
                            <Text style={styles.titleTextStyle}>{proposal.title}</Text>
                        </View>

                        {/* Ubicacion y fecha */}

                        <View style={styles.titleContainerFecha}>
                            <Text style={styles.textDateStyle}>{proposal.fecha}</Text>
                        </View>

                        <View style={styles.imagenContainer}>
                            <Image source={require('../../Assets/Images/a1.jpg')} style={styles.imagenStyle} />
                        </View>

                        <View style={styles.lineContainer}>
                            <View style={styles.lineaOptionStyle} />
                        </View>

                        <View style={styles.plotContainer}>
                            <Text style={styles.textStyle}>{proposal.descripcion}</Text>
                        </View>

                    </ScrollView>

                </View>

                <View style={styles.btnContainer}>

                    <View style={styles.upVoteStyle}>
                        <Text>156 / 2000 Votos </Text>
                    </View>

                    <TouchableOpacity style={styles.upVoteStyle}>
                        <Text><Icon name='md-arrow-dropdown-circle' color='red' size={40}></Icon></Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.upVoteStyle}>
                        <Text><Icon name='md-arrow-dropup-circle' color={blueColor} size={40}></Icon></Text>
                    </TouchableOpacity>

                </View>

            </View>
        );
    }
}

const tam = 1.2;
const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        backgroundColor: whiteColor,
        flexDirection: 'column'
    },

    titleTextStyle: {
        fontSize: 20,
        color: blackColor,
        paddingLeft: marginLeftGlobal,
        textAlign: 'justify'
    },

    textStyle: {
        fontSize: 16,
        color: blackColor,
        paddingLeft: marginLeftGlobal,
        textAlign: 'justify'
    },

    textDateStyle: {
        fontSize: 9,
        color: blackColor,
        textAlign: 'right',
        paddingRight: 20,
        fontStyle: 'italic'
    },

    iconStyle: {
        position: 'absolute',
        left: 15,
        top: -3
    },

    lineaOptionStyle: {
        height: 0.9,
        width: "85%",
        backgroundColor: blueColor
    },

    lineContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
    },

    plotContainer: {
        marginBottom: 10,
        marginTop: 10,
        marginEnd: 20,
    },

    titleContainer: {
        marginTop: 10,
        marginEnd: 20,
        //alignItems: 'center'
    },

    titleContainerFecha: {
        marginTop: 5,
        marginEnd: 10
        //alignItems: 'center'
    },

    imagenStyle: {
        marginTop: 15,
        width: (240 * tam),
        height: (152 * tam),
        borderColor: grayColor,
        borderWidth: 2,
        borderRadius: 5
    },

    imagenContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    upVoteStyle: {
        // width: 60,
        // height: 30,
        // borderRadius: 5,
        // backgroundColor: blueColor,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
        marginLeft: 20
    },

    textBtnStyle: {
        color: whiteColor,
        fontSize: 16,
        textAlign: 'center',
    },

    btnContainer: {
        flex: 10,
        backgroundColor: whiteColor,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
        flexDirection: 'row',

    },

});