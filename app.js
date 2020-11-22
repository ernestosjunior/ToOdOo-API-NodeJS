//importações de pacotes
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//configurações do body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

//conecta ao banco de dados
mongoose.connect('mongodb+srv://toodoo:312728el@toodoo-api.glt6w.mongodb.net/ToOdOo-API?retryWrites=true&w=majority');

//carregar as rotas
const indexRoute = require('./routes/indexRoute');
const userRoute = require('./routes/userRoute');


app.use('/', indexRoute);
app.use('/user', userRoute)


module.exports = app;