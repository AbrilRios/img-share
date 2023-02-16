// Express es un módulo de NPM el cual permite realizar aplicaciones web's de manera flexible y minimalista. Enfocado a la parte del backend.
// Importo el modulo de express.
const express = require('express');
// Importo el archivo config.js que esta en la carpeta server. Solo por prolijidad.
const config = require('./server/config');
// Esta importación de archivo no hace falta almacenarlo en una constante ya que se carga automaticamente en el server local.
require('./server/database');
// Creo una variable la cual se almacena la función de config enviando express como el valor del argumento.
const app = config(express());

app.listen(app.get('port'), () =>
{
    console.info(`Ya esta activo en; http://localhost:${app.get('port')}`)
});