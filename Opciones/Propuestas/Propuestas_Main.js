
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  Text,
  ToastAndroid
} from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import Icon from 'react-native-vector-icons/FontAwesome5';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import IncidenciaData from '../../Data/Incidencia';

var blueColor = '#4b85eb';
var grayColor = '#494949';

export default class Propuestas_Main extends Component {

  static navigationOptions = {
    title: 'Estado de Incidencias',
    headerStyle: {
      backgroundColor: '#648a64',
    },
    headerTitleStyle: {
      color: '#FFFFFF'
    }
  }

  constructor() {
    super()
    this.state = {
      list: IncidenciaData
    }
  }

  state = {
    animation: new Animated.Value(0)
  }

  // ingresarIncidenciaBtn = () => {
  //   this.props.navigation.navigate('Ing')
  // };



  parseData() {

    var lineHeight = 1;

    if (this.state.list) {
      return this.state.list.map((data, i) => {
        return (
          <View key={i} style={styles.listContainer}>

            < View style={styles.listStyleRow} >
              <IconMaterial name={data.icon} color={grayColor} size={20} />
              <Text style={styles.typePetitionStyle}>{data.incidente}</Text>
            </View>

            <View style={styles.listStyle} >
              <View style={{ height: lineHeight, width: "100%", backgroundColor: blueColor }} />
              <Text style={styles.titleTextStyle}>Recuperen la Facultad de Medicina UdeC</Text>
              <View style={{ height: lineHeight, width: "60%", backgroundColor: blueColor }} />
              <Text style={styles.infoTextStyle}>{data.descripcion}</Text>
              <View style={{ height: lineHeight, width: "100%", backgroundColor: blueColor }} />
            </View>

            < View style={styles.RowContainer} >
              <View style={styles.listStyleRowAdd}>
                <Text style={styles.addInfoTextStyle}>{data.direccion}</Text>
              </View>
              <View style={styles.listStyleRowAdd}>
                <Text style={styles.addInfoTextStyle}>Votos: 99</Text>
              </View>

            </View>

            {/* <TouchableOpacity onPress={() => { ToastAndroid.show(data.incidente, ToastAndroid.SHORT); }}
              style={styles.buttonListStyles}>
            </TouchableOpacity > */}

            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Seg', { data: data }) }}
              style={styles.buttonListStyles}>
            </TouchableOpacity >

          </View >
        )
      })
    }
  }

  render() {
    return (

      <View style={styles.MainContainer}>

        <View style={styles.FragmentStyle}>

          <ScrollView>
            <View>
              {this.parseData()}
            </View>
          </ScrollView>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },

  FragmentStyle: {
    flex: 18,
    backgroundColor: '#FFFFFF',
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

  button: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#333',
    shadowOpacity: .1,
    shadowOffset: { x: 2, y: 0 },
    shadowRadius: 2,
    borderRadius: 30,
    position: 'absolute',
    bottom: 20,
    right: 20,
  },

  // Estilos de Lista

  listContainer: {
    flex: 1,
    // flexDirection: 'row',
    padding: 10,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 5,
    backgroundColor: '#FFF',
    borderColor: '#4b85eb',
    borderWidth: 2,
    // elevation: 2,
  },

  titleTextStyle:{
    fontSize: 20,
    fontStyle: 'normal',
    marginTop: 5,
    marginBottom: 10,
    color: grayColor

  },

  infoTextStyle: {
    fontSize: 18,
    fontStyle: 'normal',
    marginTop: 5,
    marginBottom: 10,
    color: grayColor
  },

  typePetitionStyle: {
    fontSize: 18,
    color: grayColor,
    marginBottom: 5,
    marginLeft: 20,
  },

  addInfoTextStyle: {
    fontSize: 11,
    fontStyle: 'italic',
    marginTop: 5,
    color: grayColor,
  },

  listStyle: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 12,
    justifyContent: 'center',
  },

  listStyleRow: {
    flex: 1,
    marginLeft: 12,
    flexDirection: 'row',
  },

  listStyleRowAdd: {
    flex:1,
    alignItems:'center'
  },

  RowContainer: {
    flex: 1,
    marginLeft: 12,
    flexDirection: 'row',
  },

  stateStyle: {
    height: 10,
    width: "100%",
    marginTop: 10,
    borderColor: '#8c8c8c',
    borderWidth: 1,
    borderRadius: 2
  },

  buttonListStyles: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },

});


// import Ingresar from './Ingresar_nav';
// import EstadoSeguimiento from './Seg_estado';
// import IngresarCam from './Ingresar_cam';
// import Informacion from '../configuracion/Informacion';

// const AppNavigator = createStackNavigator({
//   Inicio: { screen: Seguimiento_nav },
//   Ing: { screen: Ingresar },
//   Seg: { screen: EstadoSeguimiento },
//   Cam: { screen: IngresarCam },
//   Inf: { screen: Informacion},
// });

// export default createAppContainer(AppNavigator);