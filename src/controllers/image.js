const path = require('path');
const fs = require('fs');
const { randomNumber } = require('../helpers/libs.js');


const controller = {
    index: (req, res) => {},
    upload: (req, res) => {
        console.info(req.file);
        // const imageUrlTemp = req.body.url;
        // const ext = path.extname(req.file.originalname).toLowerCase();
        // const imageName = randomNumber();
        // const imageUrl = path.resolve(`src/public/upload/${imageName}${ext}`);

        // if(ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif' || ext === '.svg' || ext === '.tif') {
        //     fs.rename(imageUrlTemp, imageUrl);
        // };

        res.send('Se subio correctamente.');
    },
    like: (req, res) => {},
    comment: (req, res) => {},
    remove: (req, res) => {}
};


module.exports = controller;