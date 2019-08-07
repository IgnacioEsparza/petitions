import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Switch } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Colores from '../../Data/Global_Colors';

var grayColor = Colores.grayColor;
var blueColor = Colores.blueColor;
var whiteColor = Colores.whiteColor;
var softGray = Colores.softGrayColor;

class Mas_Main extends Component {

  static navigationOptions = {
    title: 'Más',
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
    super();
    this.state = {
      switchValue: false,
    }
  }

  render() {

    var iconSize = 20;

    return (
      <View style={styles.MainContainer}>

        <View >
          <TouchableOpacity onPress={() => { this.props.navigation.navigate('Account') }}>
            <Text style={styles.textStyleMain}>Cuenta</Text>
            <Icon name='md-contact' size={30} color={blueColor} style={styles.iconStyleCuenta}></Icon>
          </TouchableOpacity>
        </View>

        <View style={styles.lineContainer}>
          <View style={styles.lineaOptionStyle} />
        </View>

        <View style={{ flexDirection: 'row' }}>

          <View style={{ flex: 1 }}>
            <Text style={styles.textStyle}>{this.state.switchValue ? 'Notificaciones on' : 'Notificaciones off'}</Text>
            <Icon name='ios-notifications' size={iconSize} color={blueColor} style={styles.iconStyle}></Icon>
          </View>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Switch
              value={this.state.switchValue}
              onValueChange={(switchValue) => this.setState({ switchValue })}
              trackColor={{ true: blueColor, false: null }}
              thumbColor={blueColor}
              top={-3}
              left={35}
            />
          </View>

        </View>

        <View style={styles.lineContainerVariante}>
          <View style={styles.lineaOptionStyle} />
        </View>

        <View >
          <TouchableOpacity  onPress={() => { this.props.navigation.navigate('Acerca') }}>
            <Text style={styles.textStyle}>Acerca de</Text>
            <Icon name='ios-help-circle' size={iconSize} color={blueColor} style={styles.iconStyle}></Icon>
          </TouchableOpacity>
        </View>

        <View style={styles.lineContainer}>
          <View style={styles.lineaOptionStyle} />
        </View>

        <View >
          <TouchableOpacity  onPress={() => { this.props.navigation.navigate('Info') }}>
            <Text style={styles.textStyle}>Información</Text>
            <Icon name='md-information-circle' size={iconSize} color={blueColor} style={styles.iconStyle}></Icon>
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
    height: 0.7,
    width: "90%",
    backgroundColor: softGray
  },

  lineContainerVariante: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 20
  },

  lineContainer: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  textStyle: {
    fontSize: 18,
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
    top: 0,
  },

  iconStyleCuenta: {
    position: 'absolute',
    left: 12,
    top: -4,
  },
});

import Account_nav from './User/Account_nav';
import Log_in from './User/Log_in';
import Check_in from './User/Check_in';
import Acerca_de from './Acerca_De';
import Informacion from './Informacion';

const AppNavigator = createStackNavigator({
  Inicio: { screen: Mas_Main },
  Account: { screen: Account_nav },
  Login: { screen: Log_in },
  Checkin: { screen: Check_in },
  Acerca: { screen: Acerca_de },
  Info: { screen: Informacion },
});

export default createAppContainer(AppNavigator);