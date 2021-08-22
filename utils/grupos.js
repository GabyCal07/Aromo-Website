const request = require('postman-request');

const getAllGrupos = (callback) => {
//    request('http://localhost:3001/grupos', (error, res, body) => {
    request('https://aromo-api.herokuapp.com/grupos', (error, res, body) => {
 
    if (error) {
        callback(error, undefined);
    }

    if (res){
        if (body){
            return callback(undefined, body);
        }
        callback('No se encontraron grupos', undefined);
        }
            
    });
}


module.exports = {
    getAllGrupos    
};