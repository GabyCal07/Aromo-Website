const request = require('postman-request');

const getAllProveedores = (callback) => {
//    request('http://localhost:3001/proveedores', (error, res, body) => {
    request('https://aromo-api.herokuapp.com/proveedores', (error, res, body) => {
 
    if (error) {
        callback(error, undefined);
    }

    if (res){
        if (body){
            return callback(undefined, body);
        }
        callback('No se encontraron proveedores', undefined);
        }
            
    });
};

const getProvByCategory = (categoria, callback) => {
//    request(`http://localhost:3001/proveedores/${categoria}`, (error, res, body) => {
    request(`https://aromo-api.herokuapp.com/proveedores/${categoria}`, (error, res, body) => {
 
    if (error) {
        callback(error, undefined);
    }

    if (res){
        if (body){
            return callback(undefined, body);
        }
        callback('No se encontraron proveedores', undefined);
        }
            
    });
}

module.exports = {
    getAllProveedores,
    getProvByCategory
};