
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

    if (this.state.list) {
      return this.state.list.map((data, i) => {
        return (
          <View key={i} style={styles.listContainer}>

            <IconMaterial name={data.icon} color='#000' size={40} style={{ top: 10 }} />

            < View style={styles.listStyle} >
              <Text style={{ fontSize: 16, color: '#000', marginBottom: 5 }}>{data.incidente}</Text>
              <View style={{ height: 0.7, width: "100%", backgroundColor: '#648a64' }} />
              <Text style={{ fontSize: 11, fontStyle: 'italic', marginTop: 5 }}>{data.direccion}</Text>
              <View style={[styles.stateStyle, { backgroundColor: data.estado }]} />
            </View>

            {/* <TouchableOpacity onPress={() => { ToastAndroid.show(data.incidente, ToastAndroid.SHORT); }}
              style={styles.buttonListStyles}>
            </TouchableOpacity > */}

            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Seg', { data: data }) }}
              style={styles.buttonListStyles}>
            </TouchableOpacity >

          </View>
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

  buttonInfo: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#333',
    shadowOpacity: .1,
    shadowOffset: { x: 2, y: 0 },
    shadowRadius: 2,
    borderRadius: 30,
    position: 'absolute',
    bottom: 100,
    right: 35,
    backgroundColor: '#006064'
  },

  insertar: {
    backgroundColor: '#8c8c8c'
  },

  textoInsertar: {
    backgroundColor: '#ffffff',
    fontSize: 15,
  },

  // Estilos de Lista

  listContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 5,
    backgroundColor: '#FFF',
    elevation: 2,
  },

  listStyle: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 12,
    justifyContent: 'center',
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
  }

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