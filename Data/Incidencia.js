import Incidente from './Incidentes';

var rechazado = '#ff0000'; //rojo
var aceptado = '#008f39'; //verde
var enviado = '#00b3ff'; //azul
var proceso = '#ffb300'; //naranja
var finalizado = '#8c8c8c'; //gris

var incidencia = [
    {
        id: 0,
        incidente: 'Micro Basural',
        direccion: 'Diego Portales 806',
        estado: aceptado,
        imagen: 'basural.jpg',
        icon: 'delete-sweep',
        fecha: '26 de Enero 2056'
    },
    {
        id: 1,
        incidente: 'Mobiliario Urbano en Mal Estado',
        direccion: 'Arturo Prat 725',
        estado: proceso,
        imagen: '',
        icon: 'seat',
        fecha: '25 de Julio 2056'
    },
    {
        id: 2,
        incidente: 'Mobiliario Urbano en Mal Estado',
        direccion: 'Plaza Anibal Pinto',
        estado: rechazado,
        imagen: '',
        icon: 'seat',
        fecha: '30 de Octubre 2056'
    }
];

module.exports = incidencia;