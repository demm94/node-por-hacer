// importamos yargs
//const argv = require('yargs').argv;
const { argv } = require('./config/yargs');

const porHacer = require('./por-hacer/por-hacer');

// librería de colores en consola
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('Crear');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        console.log('Listar');
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('============== Por Hacer =============='.green);
            console.log(tarea.descripcion.yellow);
            console.log(`Estado: ${tarea.completado}`.blue);
            console.log('======================================='.green);
        }
        break;
    case 'actualizar':
        console.log('Actualizar', argv.descripcion);
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no encontrado');
        break;
}

//console.log(argv);