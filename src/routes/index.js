// Importo el módul express debido a que requiero la función routes para crear las rutas del sitio web.
const express = require('express');
const router = express.Router();

// Importo el archio index de la carpeta controllers debido a que será el manejador de la ruta home respecto a la iteración de las imagenes.
const home = require('../controllers/home');
const image = require('../controllers/image');


module.exports = app => {
    router.get('/', home.index);
    router.get('/image/:image_id', image.index);
    router.post('/image', image.upload);
    router.post('/image/:image_id/like', image.like);
    router.post('/image/:image_id/comment', image.comment);
    router.delete('/image/:image_id', image.remove);

    app.use(router);
};