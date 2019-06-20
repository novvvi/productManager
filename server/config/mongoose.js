var path = require('path');

var fs = require('fs'); // able to use all the files

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/productManager', {}, (err) => {
    if (err) {
        console.log("ERROR", err);
    }
    else {
        console.log("CONNECTED");
    }
});

var models_path = path.join(__dirname, './../models');

// iterate through the models folder and searches for all model files!!!
fs.readdirSync(models_path).forEach(function(file){
    if(file.indexOf('.js')>=0){
        require(models_path + '/' + file);
    };
});