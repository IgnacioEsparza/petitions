import React, { Component } from 'react';
import { View } from 'react-native';

import {createAppContainer, createMaterialTopTabNavigator } from 'react-navigation';

import Propuestas_Main from './Opciones/Propuestas/Propuestas_Main'
import Menu_Main from './Opciones/Mas/Mas_Main';
import Votaciones_Main from './Opciones/Votaciones/Votaciones_Main';

import Icon from 'react-native-vector-icons/FontAwesome5';

var menuIcon = 'list';
var proposalIcon = 'compass';
var voteIcon= 'vote-yea';

const TabNavigator = createMaterialTopTabNavigator({
  Menu: {
    screen: Menu_Main,
    navigationOptions: {
      tabBarLabel: 'Menú',
      tabBarIcon: ({ tintColor }) => (
        <Icon name={menuIcon} color={tintColor} size={21} />
      ),
    }
  },
  Propuestas: {
    screen: Propuestas_Main,
    navigationOptions: {
      tabBarLabel: 'Propuestas',
      tabBarIcon: ({ tintColor }) => (
        <Icon name={proposalIcon} color={tintColor} size={24} />
      ),
    }
  },
  Votaciones: {
    screen: Votaciones_Main,
    navigationOptions: {
      tabBarLabel: 'Votaciones',
      tabBarIcon: ({ tintColor }) => (
        <Icon name={voteIcon} color={tintColor} size={24} />
      ),
    }
  }
}, {
    initialRouteName: 'Propuestas',
    order: ['Menu', 'Propuestas', 'Votaciones'],
    navigationOptions: {
      tabBarVisible: true
    },
    tabBarOptions: {
      activeTintColor: '#ffffff',
      inactiveTintColor: '#ececec',
      pressColor: '#ffffff',
      showIcon: true,
      showLabel: false,
      style: {
        backgroundColor: '#4b85eb',
      },
      indicatorStyle: {
        backgroundColor: '#ffffff',
      }
    }
  });

export default createAppContainer(TabNavigator);