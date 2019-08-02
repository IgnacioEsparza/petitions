import React, { Component } from 'react';
import { View, FlatList, Text, RefreshControl } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class Conexion extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //carga de api
            loading: false,
            propuesta: [],
            url: 'http://172.23.144.149:3000/api/propuesta',

            refreshing: false
        }
    }

    componentDidMount() {
        this.getDatos();
    }

    getDatos = () => {
        this.setState({ loading: true });
        fetch(this.state.url)
            .then(res => res.json())
            .then(res => {

                this.setState({
                    propuesta: res.propuestas,
                    loading: false
                })

            })
    }

    _onRefresh = () => {
        this.setState({ refreshing: true });
        fetch(this.state.url)
            .then(res => res.json())
            .then(res => {

                this.setState({
                    propuesta: res.propuestas,
                    loading: false,
                    refreshing: false
                })

            })
    }

    render() {

        if (this.state.loading) {
            return (
                <View style={{ flex: 1 }}>
                    <Text>Cargando Propuestas</Text>
                </View>
            );
        }

        return (
            <View style={{ flex: 1 }}>
                <ScrollView
                    refreshControl={<RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh} />}
                >
                    <FlatList
                        data={this.state.propuesta}
                        renderItem={
                            ({ item }) => <Text>{item.title}</Text>
                        }

                        keyExtractor={(item, index) => index.toString()}
                    />

                </ScrollView>

            </View>
        );


    }
}