// librería FileSystem
const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {

    // transforma un array a formato JSON
    let data = JSON.stringify(listadoPorHacer);
    const fileName = 'db/data.json';

    fs.writeFile(fileName, data, (err) => {
        if (err) throw new Error('Error al grabar', err);
    });
}

const cargarDB = () => {

    try {
        // leemos el archivo data.json
        listadoPorHacer = require('../db/data.json');
    } catch {
        listadoPorHacer = [];
    }

};

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    //guardo en la BD
    guardarDB();

    return porHacer;
}

const getListado = () => {

    cargarDB();
    return listadoPorHacer;

}

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    // buscamos la tarea en la BD
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    console.log(`Index: ${index}`);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {

    cargarDB();

    // buscamos la tarea en la BD
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    console.log(`Index: ${index}`);

    if (index >= 0) {
        if (listadoPorHacer.splice(index, 1).length == 0) return false;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}