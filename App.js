import React, { Component } from 'react';
import { View } from 'react-native';
import { YellowBox } from 'react-native';

import Navigator from './Navigator';
import Conexion from './Api/Conexion';
import Perfil from './Opciones/Mas/User/Perfil'

YellowBox.ignoreWarnings(['ViewPagerAndroid']);

export default class App extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Perfil></Perfil>
        {/* <Navigator></Navigator> */}
        {/* <Conexion></Conexion> */}
      </View>
    );
  }
}