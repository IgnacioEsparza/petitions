import React, { Component } from 'react';
import { View } from 'react-native';
import { YellowBox } from 'react-native';

import Navigator from './Navigator';
import Conexion from './Api/Conexion';

YellowBox.ignoreWarnings(['ViewPagerAndroid']);

export default class App extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Navigator></Navigator>
        {/* <Conexion></Conexion> */}
      </View>
    );
  }
}