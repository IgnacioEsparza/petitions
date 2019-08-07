
import React, { Component } from 'react';
import { StyleSheet, View, Animated, TouchableOpacity, ScrollView, Text, ToastAndroid, FlatList } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import IncidenciaData from '../../Data/Propuestas';
import PropuestasTipo from '../../Data/Categorias';

import Colores from '../../Data/Global_Colors'

var grayColor = Colores.grayColor;
var blueColor = Colores.blueColor;
var whiteColor = Colores.whiteColor;
var lineHeight = 1;

class Votaciones_Main extends Component {

    static navigationOptions = {
        title: 'Mis Votaciones',
        headerStyle: {
            backgroundColor: whiteColor,
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
            fullList: IncidenciaData,
            listType: PropuestasTipo,
            showDetail: false,
            proposalType: 'Filtrar Categoría',
        }
    }

    // ingresarIncidenciaBtn = () => {
    //   this.props.navigation.navigate('Ing')
    // };

    search(txt) { // metodo de busqueda por categoría, verifica la existencia de propuestas por categoría
        var cont = 0;
        if (txt == 'Todos') {
            this.setState({ list: this.state.list = this.state.fullList })
            this.setState({ empty: this.state.empty = false })
        } else {
            let filterTracks = this.state.fullList.filter(item => {
                if (item.categoria.toLowerCase().match(txt.toLowerCase())) {
                    cont++
                    this.setState({ empty: this.state.empty = false })
                    return item
                }
                if (cont == 0) {
                    this.setState({ empty: this.state.empty = true })
                }
            })
            this.setState({ list: this.state.list = filterTracks })
        }
    }

    ShowDetail = () => {
        this.setState({ showDetail: !this.state.showDetail });
    };

    parseData() {
        if (this.state.list && !this.state.empty) {
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
                            {/* <View style={styles.listStyleRowAdd}>
                                <Text style={styles.addInfoTextStyle}>{data.direccion}</Text>
                            </View> */}

                            <View style={styles.listStyleRowAdd}>
                                <Text style={styles.addInfoTextStyle}>
                                    <IconMaterial name='account-multiple' color={whiteColor} size={15} />
                                    &nbsp;&nbsp;&nbsp;Votos: 99</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Vot', { data: data }) }}
                            style={styles.buttonListStyles}>
                        </TouchableOpacity >
                    </View >

                )
            })
        } else {
            return (
                <View style={styles.textContainer}>
                    <Text style={styles.labelStyle}>No existen propuestas en esta categoría actualmente</Text>
                    <View style={styles.imagenContainer}>
                        {/* <Image source={require('../../Assets/Images/cat.png')} style={styles.imagenStyle} resizeMode="contain" /> */}
                    </View>
                </View>)
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
                            <View style={{ height: lineHeight, width: "100%", backgroundColor: whiteColor, marginTop: 15, marginBottom: 10, elevation: 1 }} />
                            <FlatList data={this.state.listType} renderItem={({ item, index }) => {
                                return (
                                    <View item={item} index={index} parentFlatList={this} style={styles.containerFlat}>
                                        <IconMaterial name={item.icon} color={grayColor} size={30} style={{ bottom: 2 }} />
                                        < View style={{ flex: 1, flexDirection: 'column', marginLeft: 12, justifyContent: 'center', }} >
                                            <Text style={{ fontSize: 15, color: grayColor, marginBottom: 5 }}> {item.category}</Text>
                                        </View >
                                        <TouchableOpacity onPress={() => {
                                            this.setState({ proposalType: this.state.proposalType = item.category });
                                            this.search(this.state.proposalType);
                                            this.ShowDetail()
                                        }}
                                            style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}>
                                        </TouchableOpacity >
                                    </View >);
                            }} keyExtractor={item => item.id.toString()} />
                        </View>
                    </View>) : null}
                <View style={{ height: lineHeight, width: "100%", backgroundColor: whiteColor, marginTop: 15, marginBottom: 10, elevation: 0.5 }} />
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={styles.MainContainer}>
                <View style={styles.FragmentStyle}>
                    <ScrollView>
                        {this.selectType()}
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
        // backgroundColor: whiteColor,
    },
    // Estilos de Lista
    listContainer: {
        flex: 1,
        // flexDirection: 'row',
        padding: 10,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 8,
        marginBottom: 8,
        // borderRadius: 5,
        backgroundColor: whiteColor,
        // borderColor: blueColor,
        // borderWidth: 2,
        elevation: 2,
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
        color: whiteColor,
        elevation: 0.2,
        padding: 7,
        borderRadius: 5,
        borderColor: blueColor,
        backgroundColor: blueColor
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
        alignItems: 'flex-end',
        marginRight: 15,
        marginLeft: 20
    },
    typeRowStyle: {
        flex: 1,
        marginLeft: 12,
        flexDirection: 'row',
        marginBottom: 5,
        justifyContent: 'center',
        elevation: 2,
    },
    RowContainer: {
        flex: 1,
        marginLeft: 12,
        flexDirection: 'row',
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
        backgroundColor: whiteColor,
        borderColor: blueColor,
        borderWidth: 1,
    },
    //Estilos lista vacia
    textContainer: {
        flex: 1,
        backgroundColor: whiteColor,
        marginBottom: 20,
        marginTop: 30
    },
    labelStyle: {
        fontSize: 12,
        color: grayColor,
    },
    //Estilo de imagen de lista vacía
    imagenContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

import misVotaciones from './Mis_Votaciones';

const AppNavigator = createStackNavigator({
    Inicio: { screen: Votaciones_Main },
    Vot: { screen: misVotaciones },
});

export default createAppContainer(AppNavigator);
