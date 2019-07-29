import Categorias from './Categorias';

var rechazado = '#ff0000'; //rojo
var aceptado = '#008f39'; //verde
var enviado = '#00b3ff'; //azul
var proceso = '#ffb300'; //naranja
var finalizado = '#8c8c8c'; //gris

var list = Categorias;

var incidencia = [
    {
        id: 0,
        title:'Recuperen la Facultad de Medicina UdeC',
        categoria: list[4].category,
        direccion: 'Diego Portales 806',
        descripcion: 'La Facultad de Medicina fue tomada el día jueves 04 de Julio de 2019, por tercera vez en cuatro años, por un grupo de 133 estudiantes autodenominado "Asamblea de Facultad..La Facultad de Medicina fue tomada el día jueves 04 de Julio de 2019, por tercera vez en cuatro años, por un grupo de 133 estudiantes autodenominado "Asamblea de Facultad..La Facultad de Medicina fue tomada el día jueves 04 de Julio de 2019, por tercera vez en cuatro años, por un grupo de 133 estudiantes autodenominado "Asamblea de Facultad..',
        estado: aceptado,
        imagen: 'basural.jpg',
        icon: list[4].icon,
        fecha: '26 de Enero 2056'
    },
    {
        id: 1,
        title:'Fuera Comando Jungla de la Región de la Araucanía, Región del Bio Bio y Región de Los Ríos',
        categoria: list[5].category,
        direccion: 'Arturo Prat 725',
        descripcion:'Las comunidades, asociaciones, organizaciones de la sociedad civil, ciudadanos conscientes, exigimos la salida inmediata del Comando Jungla de la Región de La Araucanía...',
        estado: proceso,
        imagen: '',
        icon: list[5].icon,
        fecha: '25 de Julio 2056'
    },
    {
        id: 2,
        title:'EXIJIMOS la Zona QUINTERO, PUCHUNCAVI y alrededores, LIBRE DE CONTAMINACION AHORA! BASTA!',
        categoria: list[2].category,
        direccion: 'Plaza Anibal Pinto',
        descripcion:'Por casi 60 años esta zona ha sido inescrupulosamente contaminada con diferentes elementos tóxicos que emanan de la veintena de industrias situadas en la bahía de Quintero...',
        estado: rechazado,
        imagen: '',
        icon: list[2].icon,
        fecha: '30 de Octubre 2056'
    },
];

module.exports = incidencia;