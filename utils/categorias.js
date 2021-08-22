const request = require('postman-request');

const getAllCategorias = (callback) => {
//    request('http://localhost:3001/categorias', (error, res, body) => {
    request('https://aromo-api.herokuapp.com/categorias', (error, res, body) => {
 
    if (error) {
        callback(error, undefined);
    }

    if (res){
        if (body){
            return callback(undefined, body);
        }
        callback('No se encontraron categorias', undefined);
        }
            
    });
}

const getCategoriasByGrupo = (grupo, callback) => {
//    request(`http://localhost:3001/categorias/${grupo}`, (error, res, body) => {
    request(`https://aromo-api.herokuapp.com/categorias/${grupo}`, (error, res, body) => {
 
    if (error) {
        callback(error, undefined);
    }

    if (res){
        if (body){
            return callback(undefined, body);
        }
        callback('No se encontraron categorias', undefined);
        }
            
    });
}

//module.exports = cards
module.exports = {
    getAllCategorias,
    getCategoriasByGrupo
};