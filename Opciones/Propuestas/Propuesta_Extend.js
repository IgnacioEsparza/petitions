import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Colores from '../../Data/Global_Colors'

import Icon from 'react-native-vector-icons/Ionicons';

var grayColor = Colores.grayColor;
var blueColor = Colores.blueColor;
var whiteColor = Colores.whiteColor;
var redColor = Colores.redColor;

var marginLeftGlobal = 20;

export default class Propuesta_Extend extends Component {

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

    constructor() {
        super()
        this.state = {
            vote: true,
            pressUp: false,
            pressDown: false,
        };
    }

    votingUp = () => {
        this.setState({ vote: !this.state.vote, pressUp: !this.state.pressUp });

        if (this.state.pressDown) {
            this.setState({ vote: !this.state.vote, pressDown: !this.state.pressDown });
        }
    }

    votingDown = () => {
        this.setState({ vote: !this.state.vote, pressDown: !this.state.pressDown });

        if (this.state.pressUp) {
            this.setState({ vote: !this.state.vote, pressUp: !this.state.pressUp });
        }
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
                            <Image source={{ uri: proposal.imagen }} style={styles.imagenStyle} />
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

                    {/* <TouchableOpacity style={styles.upVoteStyle} onPress={this.votingDown.bind(this)} >
                        <Text><Icon name='md-arrow-dropdown-circle' color={!this.state.pressDown ? grayColor : 'red'} size={40}></Icon></Text>
                    </TouchableOpacity> */}

                    <TouchableOpacity style={styles.upVoteStyleBtn} onPress={this.votingUp.bind(this)}>
                        <View style={{flexDirection:'row', alignItems:'center' }}>
                        <Text style={styles.textBtnStyle}>Apoya esta propuesta</Text>
                        <Icon name='ios-heart' color={!this.state.pressUp ? whiteColor : redColor} size={25} style={{margin:3}}></Icon>
                        </View>
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
        color: '#000',
        paddingLeft: marginLeftGlobal,
        textAlign: 'justify'
    },

    textStyle: {
        fontSize: 16,
        color: '#000',
        paddingLeft: marginLeftGlobal,
        textAlign: 'justify'
    },

    textDateStyle: {
        fontSize: 9,
        color: '#000',
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
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
        marginLeft: 20
    },

    upVoteStyleBtn: {
        marginRight: 5,
        marginLeft: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: blueColor,
        borderRadius: 12,
    },


    textBtnStyle: {
        color: whiteColor,
        fontSize: 16,
        textAlign: 'center',
        margin: 8
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