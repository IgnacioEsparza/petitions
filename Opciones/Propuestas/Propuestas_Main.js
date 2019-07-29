
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  TouchableOpacity,
  ScrollView,
  Text,
  ToastAndroid,
  FlatList
} from 'react-native';

import { createStackNavigator, createAppContainer } from 'react-navigation';

import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import IncidenciaData from '../../Data/Propuestas';
import PropuestasTipo from '../../Data/Categorias';

var blueColor = '#4b85eb';
var grayColor = '#494949';
var lineHeight = 1;

class Propuestas_Main extends Component {

  static navigationOptions = {
    title: 'Propuestas',
    headerStyle: {
      backgroundColor: '#ffffff',
      elevation: 1,
      shadowOpacity: 0,
      height: 40
    },
    headerTitleStyle: {
      color: grayColor,
      fontSize: 16
    },
    // header: null
  }

  constructor() {
    super()
    this.state = {
      list: IncidenciaData,
      listType: PropuestasTipo,
      showDetail: false,
      proposalType: 'Filtrar Categoría',
    }
  }

  state = {
    animation: new Animated.Value(0)
  }

  // ingresarIncidenciaBtn = () => {
  //   this.props.navigation.navigate('Ing')
  // };

  ShowDetail = () => {
    this.setState({ showDetail: !this.state.showDetail });
  };

  parseData() {

    if (this.state.list) {
      return this.state.list.map((data, i) => {
        return (
          <View key={i} style={styles.listContainer}>

            < View style={styles.listStyleRow} >
              <IconMaterial name={data.icon} color={grayColor} size={20} />
              <Text style={styles.typePetitionStyle}>{data.categoria}</Text>
            </View>

            <View style={styles.listStyle} >
              <View style={{ height: lineHeight, width: "100%", backgroundColor: blueColor }} />
              <Text style={styles.titleTextStyle}>{data.title}</Text>
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

            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Ext', { data: data }) }}
              style={styles.buttonListStyles}>
            </TouchableOpacity >

          </View >
        )
      })
    }
  }

  selectType() {
    return (
      <TouchableOpacity onPress={() => this.ShowDetail()}>

        < View style={styles.typeRowStyle} >
          <Text style={styles.typeSelectorStyle}>{this.state.proposalType}</Text>
          <IconMaterial name='menu-down' color={grayColor} size={30} style={{ top: 8 }} />
        </View>

        {this.state.showDetail ? (
          <View style={styles.MainContainer}>
            <View style={styles.FragmentStyle}>

              <View style={{ height: lineHeight, width: "100%", backgroundColor: blueColor, marginTop: 15, marginBottom: 10 }} />

              <FlatList data={this.state.listType}
                renderItem={({ item, index }) => {

                  return (

                    <View item={item} index={index} parentFlatList={this} style={styles.containerFlat}>

                      <IconMaterial name={item.icon} color={grayColor} size={30} style={{ bottom: 2 }} />

                      < View style={{ flex: 1, flexDirection: 'column', marginLeft: 12, justifyContent: 'center', }} >
                        <Text style={{ fontSize: 15, color: grayColor, marginBottom: 5 }}> {item.category}</Text>
                      </View >

                      <TouchableOpacity onPress={() => {
                        this.setState({ proposalType: this.state.proposalType = item.category });
                        this.ShowDetail()
                      }}
                        style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
                      </TouchableOpacity >

                    </View >);

                }}
                keyExtractor={item => item.id}
              />

            </View>
          </View>) : null}

        <View style={{ height: lineHeight, width: "100%", backgroundColor: blueColor, marginTop: 15, marginBottom: 10 }} />

      </TouchableOpacity>

    );
  }

  render() {
    return (

      <View style={styles.MainContainer}>

        <ScrollView>
          {this.selectType()}
          <View>
            {this.parseData()}
          </View>
        </ScrollView>

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

  titleTextStyle: {
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
    color: grayColor,
    textAlign: 'justify',
  },

  typePetitionStyle: {
    fontSize: 18,
    color: grayColor,
    marginBottom: 5,
    marginLeft: 10,
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
    marginEnd: 10,
    justifyContent: 'center',
  },

  listStyleRow: {
    flex: 1,
    marginLeft: 12,
    flexDirection: 'row',
    marginBottom: 5,
  },

  listStyleRowAdd: {
    flex: 1,
    alignItems: 'center'
  },

  typeRowStyle: {
    flex: 1,
    marginLeft: 12,
    flexDirection: 'row',
    marginBottom: 5,
    justifyContent: 'center',
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

  typeSelectorStyle: {
    alignContent: 'center',
    alignSelf: 'center',
    color: grayColor,
    fontSize: 15,
    marginTop: 15
  },

  containerFlat: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 2,
    marginBottom: 2,
    borderRadius: 5,
    backgroundColor: '#FFF',
    elevation: 0,
    borderColor: blueColor,
    borderWidth: 1,
  },

});


import pExtendida from './Propuesta_Extend';

const AppNavigator = createStackNavigator({
  Inicio: { screen: Propuestas_Main },
  Ext: { screen: pExtendida },
});

export default createAppContainer(AppNavigator);