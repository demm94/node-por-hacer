// opciones de cada comando
const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const opCrear = {
    descripcion
};

const opActualizar = {
    descripcion,
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea'
    }
};

const opBorrar = {
    descripcion
};

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', opCrear)
    .command('actualizar', 'Actualiza el estado completado de una tarea', opActualizar)
    .command('listar', 'Lista todas las tareas')
    .command('borrar', 'Borrar un tarea', opBorrar)
    .help()
    .argv;

module.exports = {
    argv
}