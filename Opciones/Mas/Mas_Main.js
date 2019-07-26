import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Icon from 'react-native-vector-icons/Ionicons';



export default class Mas_Main extends Component {

  static navigationOptions = {
    title: 'Más',
    headerStyle: {
      backgroundColor: '#648a64',
    },
    headerTitleStyle: {
      color: '#FFFFFF'
    }
  }

  render() {

    var iconSize = 30;
    var iconColor ='#4b85eb'

    return (
      <View style={styles.MainContainer}>

        <View >
          <TouchableOpacity>
            <Text style={styles.textStyle}>CUENTA</Text>
            <Icon name='ios-archive' size={iconSize} color={iconColor} style={styles.iconStyle}></Icon>
          </TouchableOpacity>
        </View>

        <View style={styles.lineContainer}>
          <View style={styles.lineaOptionStyle} />
        </View>

        <View >
          <TouchableOpacity>
            <Text style={styles.textStyle}>NOTIFICACIONES</Text>
            <Icon name='ios-notifications' size={iconSize} color={iconColor} style={styles.iconStyle}></Icon>
          </TouchableOpacity>
        </View>

        <View style={styles.lineContainer}>
          <View style={styles.lineaOptionStyle} />
        </View>

        <View >
          <TouchableOpacity>
            <Text style={styles.textStyle}>ACERCA DE</Text>
            <Icon name='ios-help-circle' size={iconSize} color={iconColor} style={styles.iconStyle}></Icon>
          </TouchableOpacity>
        </View>

        <View style={styles.lineContainer}>
          <View style={styles.lineaOptionStyle} />
        </View>

        <View >
          <TouchableOpacity >
            <Text style={styles.textStyle}>INFORMACIÓN</Text>
            <Icon name='md-information-circle' size={iconSize} color={iconColor} style={styles.iconStyle}></Icon>
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
    height: 0.9,
    width: "90%",
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
    fontSize: 20,
    color: '#4b85eb',
    paddingLeft: 50,
  },

  iconStyle: {
    position: 'absolute',
    left: 12,
    top: -3,
  },

});

// import Informacion from './Informacion';

// const AppNavigator = createStackNavigator({
//   Inicio: { screen: Configuracion_nav },
//   Inf: { screen: Informacion},
// });

// export default createAppContainer(AppNavigator);