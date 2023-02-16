// Importo el módulo path debido a que requiere el uso de __dirname para que la "PC" busque por sí solo su posición actual desde este mismo archivo.
// Usaría la función join del path así poder usar el __dirname.
const path = require('path');
// Importa el módulo express handlebars ya que necesito el uso de los manejadores para la configuración del motor del express.
const { engine } = require('express-handlebars');
// Importo express porque requiero el uso de dos middlewares que trae. El urlencoded para que no se refresque la página cada vez que haya una subida
// de imagen & express.json ya que los datos en cara a la base de datos se manejara con json debido a que se usara MongoDB, este maneja los datos con JSON.
const express = require('express');
// Importo morgan que es un middleware para el registro de las solicitudes de HTTP.
const morgan = require('morgan');
// Importo multer que es un middleware que permite interaccionar los archivos subidos del cliente al server.
const multer = require('multer');
// Importo el módulo errorHandler para el manejo de posibles error de los handlers.
const errorHandler = require('errorhandler');
// Importo el archivo index.js de la carpeta routes así manejar las diferentes rutas y poner lo deseado en ellas.
const routes = require('../routes/index');


module.exports = app => {
    // Settings.
    app.set('port', process.env.PORT ||3000);
    app.set('views', path.join(__dirname, '../views'));
    app.engine('.handlebars', engine(
        {
            // defaultLayout me permite seleccionar qué archivo de vista será por defecto.
            defaultLayout: 'main',
            // partialsDir me permite mostrar aquellos archivos de código pequeño que se utilizará en diferentes secciones del sitio web.
            partials: path.join(__dirname, app.get('views'), 'partials'),
            layouts: path.join(__dirname, app.get('views'), 'layouts'),
            extname: '.handlebars',
            helpers: { bars() {require('../helpers')}}
        }
    ));
    app.set('view engine', '.handlebars');

    // Middlewares.
    app.use(morgan('dev'));
    app.use(multer({dest: path.join(__dirname, '../public/upload/temp')}).single('image'));
    app.use(express.urlencoded({extended: false}));
    app.use(express.json());

    // Routes.
    routes(app);

    // Static files.
    app.use(express.static(path.join(__dirname, '../public')));

    // ErrorHandlers.
    if ('development' === app.get('env')) {
        app.use(errorHandler);
    };

    return app;
};