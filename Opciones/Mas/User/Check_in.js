import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator, Dimensions, TouchableOpacity, Text, ScrollView, ToastAndroid } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconAwesome from 'react-native-vector-icons/FontAwesome'

import Colores from '../../../Data/Global_Colors';
import ApiSignUp from '../../../Data/Api'

var grayColor = Colores.grayColor;
var blueColor = Colores.blueColor;
var whiteColor = Colores.whiteColor;
var blackColor = Colores.blackColor;
var input = Colores.textInputColor;

const { width: WIDTH } = Dimensions.get('window');

export default class Check_in extends Component {

    static navigationOptions = {
        title: 'Registrarse',
        headerStyle: {
            backgroundColor: whiteColor,
            elevation: 1,
            shadowOpacity: 0,
            height: 40
        },
        headerTitleStyle: {
            color: grayColor,
            fontSize: 16
        }
    }

    constructor() {
        super()
        this.state = {
            showPass: true,
            press: false,

            //Carga de datos de la api
            url: ApiSignUp.api + 'signup',
        }
    }

    showPass = () => {
        this.setState({ showPass: !this.state.showPass, press: !this.state.press });
    }

    registrarBtn = () => {

        console.log('Obteniendo datos')
        fetch(this.state.url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: 'n.parra04@ufromail.cl',
                displayName: 'Nicolas Parroquia',
                password: 'copito'
            })
        })
            .then(res => res.json())
            .then(res => {
                ToastAndroid.show(res.token.toString(), ToastAndroid.SHORT);
            })
            .catch(err => {
                ToastAndroid.show("Error "+err.toString(), ToastAndroid.SHORT);
            })
            
    }

    render() {
        if (this.state.loading) {
            return (
                <View style={[styles.containerIndicator, styles.horizontalIndicator]}>
                    <ActivityIndicator size={80} color={blueColor} />
                </View>
            );
        }
        return (
            <View style={styles.MainContainer}>
                <ScrollView>
                    <View style={styles.inputTextContainer}>
                        <View style={styles.logoContainer}>
                            {/* <Image source={logo} style={styles.logoStyle} /> */}
                            <Text style={{ fontSize: 20, color: blackColor, }}>Proyecto Propuestas Municipales</Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.inputStyle}
                                placeholder={'Nombre'}
                                placeholderTextColor={whiteColor}
                                underlineColorAndroid='transparent' />
                            <IconAwesome name='drivers-license-o' color={whiteColor} size={20} style={styles.inputIconStyle} />
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.inputStyle}
                                placeholder={'Apellido'}
                                placeholderTextColor={whiteColor}
                                underlineColorAndroid='transparent' />
                            <IconAwesome name='drivers-license' color={whiteColor} size={20} style={styles.inputIconStyle} />
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.inputStyle}
                                placeholder={'Número Telefónico'}
                                placeholderTextColor={whiteColor}
                                underlineColorAndroid='transparent' />
                            <IconEntypo name='phone' color={whiteColor} size={20} style={styles.inputIconStyle} />
                        </View>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.inputStyle}
                                placeholder={'Contraseña'}
                                secureTextEntry={this.state.showPass}
                                placeholderTextColor={whiteColor}
                                underlineColorAndroid='transparent' />
                            <IconEntypo name='lock-open' color={whiteColor} size={20} style={styles.inputIconStyle} />
                            <TouchableOpacity style={styles.eyeBtnStyle} onPress={this.showPass.bind(this)}>
                                <IconEntypo name={this.state.press == false ? 'eye' : 'eye-with-line'} color={whiteColor} size={20} />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.loginBtnStyle} onPress={this.registrarBtn}>
                            <Text style={styles.textBtnStyle}>Registrarse</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputIconStyle: {
        position: 'absolute',
        top: 12,
        left: 34,
    },
    eyeBtnStyle: {
        position: 'absolute',
        top: 12,
        right: 34,
    },
    logoStyle: {
        width: 120,
        height: 76,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    inputStyle: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 5,
        fontSize: 16,
        paddingLeft: 45,
        backgroundColor: input,
        color: whiteColor,
        marginHorizontal: 25,
    },
    inputContainer: {
        marginTop: 10,
    },
    inputTextContainer: {
        flex: 13,
        backgroundColor: whiteColor,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
    },
    loginBtnStyle: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 5,
        backgroundColor: blueColor,
        justifyContent: 'center',
        marginTop: 20,
    },
    textBtnStyle: {
        color: whiteColor,
        fontSize: 16,
        textAlign: 'center',
    },
});