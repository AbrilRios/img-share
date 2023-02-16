// Mongoose es un módulo de NPM que permite conectar un servidor local del MongoDB.
// Se importa el módulo para utilizarlo en el archivo database.js.
const mongoose = require('mongoose');

// Se realiza una destructuración de objeto del archivo keys.js así substraer la URI.
// Esta URI vendría a ser como el "url" del servidor local donde estará el intercambio de datos, como las imágenes, likes, comentarios, entre otros.
const { database } = require('./keys');


// Se utiliza la promesa connect de mongoose para conectar el servidor local del MongoDB.
// .then se encarga de representar lo que se solicita en el caso que haya salido todo correcto.
// .catch en el caso que salga algún error.
mongoose.connect(database.URI, { autoIndex: false })
        .then(db => console.info('Todo esta bien.'))
        .catch(err => console.error(`Hubo un problemita cual es: ${err}`));