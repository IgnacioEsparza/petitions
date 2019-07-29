import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

var grayColor = '#494949';

class Mas_Main extends Component {

  static navigationOptions = {
    title: 'Más',
    headerStyle: {
      backgroundColor: '#FFF',
      elevation: 1,
      shadowOpacity: 0,
      height: 40
    },
    headerTitleStyle: {
      color: grayColor,
      fontSize: 16
    }
  }

  render() {

    var iconSize = 20;
    var iconColor = '#4b85eb'

    return (
      <View style={styles.MainContainer}>
        <View >
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Account') }}>
            <Text style={styles.textStyleMain}>Cuenta</Text>
            <Icon name='md-contact' size={30} color={grayColor} style={styles.iconStyle}></Icon>
          </TouchableOpacity>
        </View>
        <View style={styles.lineContainer}>
          <View style={styles.lineaOptionStyle} />
        </View>
        <View >
          <TouchableOpacity>
            <Text style={styles.textStyle}>Notificaciones</Text>
            <Icon name='ios-notifications' size={iconSize} color={grayColor} style={styles.iconStyle}></Icon>
          </TouchableOpacity>
        </View>
        <View style={styles.lineContainer}>
          <View style={styles.lineaOptionStyle} />
        </View>
        <View >
          <TouchableOpacity>
            <Text style={styles.textStyle}>Acerca de</Text>
            <Icon name='ios-help-circle' size={iconSize} color={grayColor} style={styles.iconStyle}></Icon>
          </TouchableOpacity>
        </View>
        <View style={styles.lineContainer}>
          <View style={styles.lineaOptionStyle} />
        </View>
        <View >
          <TouchableOpacity >
            <Text style={styles.textStyle}>Información</Text>
            <Icon name='md-information-circle' size={iconSize} color={grayColor} style={styles.iconStyle}></Icon>
          </TouchableOpacity>
        </View>
        <View style={styles.lineContainer}>
          <View style={styles.lineaOptionStyle} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 20
  },
  optionsContainer: {
    flex: 1
  },
  lineaOptionStyle: {
    height: 0.5,
    width: "80%",
    backgroundColor: '#4b85eb'
  },
  lineContainer: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  textStyle: {
    fontSize: 15,
    color: grayColor,
    paddingLeft: 50,
  },
  textStyleMain: {
    fontSize: 18,
    color: grayColor,
    paddingLeft: 50,
  },
  iconStyle: {
    position: 'absolute',
    left: 12,
    top: -3,
  },
});

import Account_nav from './User/Account_nav';
import Log_in from './User/Log_in';
import Check_in from './User/Check_in';

const AppNavigator = createStackNavigator({
  Inicio: { screen: Mas_Main  },
  Account: { screen: Account_nav },
  Login: { screen: Log_in },
  Checkin: { screen: Check_in },
});

export default createAppContainer(AppNavigator);