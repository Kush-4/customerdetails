require('./models/db');
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const customerController= require('./controllers/customerController');
var app = express();
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs',exphbs({extname:'hbs',defaultlayout: 'main', layoutsDir : __dirname + '/views/layouts/'}));
app.set('view engine', 'hbs');
app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});

app.use('/customer',customerController);
