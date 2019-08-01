import React, { Component } from 'react';
import { View } from 'react-native';
import Navigator from './Navigator';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['ViewPagerAndroid']);

export default class App extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Navigator></Navigator>
      </View>
    );
  }
}