const express = require('express');
const hbs = require('express-handlebars');
const app = express();



app.use(express.static('public'));

app.engine('handlebars', hbs());

app.set('view engine', 'handlebars');


var bodyParser = require('body-parser');

app.use( bodyParser.json() );     
app.use(bodyParser.urlencoded({     
  extended: true
}));

app.use(express.json());

app.get('/',function(req , res){
    res.render('titulo');
});

app.get('/titulo',function(req , res){
    res.render('descripcion');
});

app.get('/titulo',function(req , res){
    res.render('enlaces');
});




app.listen(3000);