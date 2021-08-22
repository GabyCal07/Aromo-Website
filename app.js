const express = require('express');
const path = require('path');
const grupos = require('./utils/grupos');
const categorias = require('./utils/categorias');
const proveedores = require('./utils/proveedores');

const port = process.env.PORT || 3000;
const title = 'Aromo-vecinos';
const template = 'proveedores';

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('', (req, res)=>{
    grupos.getAllGrupos((error, data) => {
        
        if (error) {            
            return res.send(error);
        }
        const JSONBody = JSON.parse(data);        
        return res.render('index', {
            title,
            page: 'inicio',
            JSONBody
        });
    });
});



// app.get('/mantenimiento', (req, res) => {
//     categorias.getAllCategorias((error, data) => {
        
//         if (error) {            
//             return res.send(error);
//         }
//         const JSONBody = JSON.parse(data);        
//         res.render('pages/mantenimiento',{
//             title: `${title} | Mantenimiento`,                        
//             page: 'mantenimiento',
//             JSONBody
//         });
//     });
// });

//app.get('/mantenimiento/:grupo', (req, res) => {
app.get('/mantenimiento', (req, res) => {
    //const grupo = req.params.grupo;
    const grupo = "mantenimiento";
    categorias.getCategoriasByGrupo(grupo, (error, data) => {
        
        if (error) {            
            return res.send(error);
        }
        const JSONBody = JSON.parse(data);        
        // res.render('pages/mantenimiento',{
        res.render('pages/categorias',{
            title: `${title} | Mantenimiento`,                        
            page: grupo,
            template,
            JSONBody
        });
    });
});


app.get('/salud', (req, res) => {
    const grupo = "salud";
    categorias.getCategoriasByGrupo(grupo, (error, data) => {
        
        if (error) {            
            return res.send(error);
        }
        const JSONBody = JSON.parse(data);        
        res.render('pages/categorias',{
        // res.render('pages/salud',{
            title: `${title} | Salud`,                        
            page: grupo,
            template,
            JSONBody
        });
    });
});

app.get('/mascotas', (req, res) => {
    const grupo = "mascotas";
    categorias.getCategoriasByGrupo(grupo, (error, data) => {
        
        if (error) {            
            return res.send(error);
        }
        const JSONBody = JSON.parse(data);        
        res.render('pages/categorias',{        
            title: `${title} | Mascotas`,                        
            page: grupo,
            template,
            JSONBody
        });
    });
});

app.get('/alimentos', (req, res) => {
    const grupo = "alimentos";
    categorias.getCategoriasByGrupo(grupo, (error, data) => {
        
        if (error) {            
            return res.send(error);
        }
        const JSONBody = JSON.parse(data);        
        res.render('pages/categorias',{        
            title: `${title} | Alimentos`,                        
            page: grupo,
            template,
            JSONBody
        });
    });
});

// app.get('/salud/:categoria', (req, res) => {
//     const cat = req.params.categoria;
//     proveedores.getProvByCategory(cat, (error, data) => {
        
//         if (error) {            
//             return res.send(error);
//         }
//         const JSONBody = JSON.parse(data);          
//         res.render('pages/proveedores',{
//             title: `${title} | Proveedores`,                        
//             page: '',
//             JSONBody
//         });
//     });
// });

app.get('/proveedores/:categoria', (req, res) => {
    const category = req.params.categoria;
    proveedores.getProvByCategory(category, (error, data) => {
        
        if (error) {            
            return res.send(error);
        }
        const JSONBody = JSON.parse(data);  
        res.render('pages/proveedores',{
            title: `${title} | Proveedores`,                        
            page: '',            
            category,
            JSONBody
        });
    });
});

app.listen(port, ()=>{
    console.log(`Funcionando en el puerto ${port}`);
});
