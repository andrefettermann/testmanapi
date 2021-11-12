// associar as dependências instaladas
const express = require('express');// inicializar app express
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const request = require('request');

const app = express();
let port = 5000;// servidor á escuta no porto 5000

// 'process.env.port': caso usemos Heroku
app.listen(process.env.port || port, () => {
    console.log('Servidor em execução na porta: ' + port);
});

/**
 * Middlewares
 */

 app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// este middleware deve estar acima das routes-handlers!
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true}));

// todo o url começado por ‘/api’ chama as rotas em ‘./routes/api’
const routes = require('./routes/api');
app.use('/api', routes);

// ‘END POINT INVÁLIDO!’
app.get('/', function (req, res) {
    res.send('END POINT INVÁLIDO!');
});

// error handling middleware
app.use(function (err, req, res, next) {
    console.log(err);
    // ‘res.status(422)’->muda o status
    res.status(422).send({ error: err.message });
});

/**
 * Conexao a base de dados
 */

// Ligar á B.D.: 'test'->user da BD, ´nnn´->pass
mongoose.connect('mongodb+srv://afett:admin@cluster0.gurgx.mongodb.net/testman?retryWrites=true&w=majority');

// Confirma ligação na consola
mongoose.connection.on('connected', function () {
    console.log('Connected to Database ' + 'testman');
});

// Mensagem de Erro
mongoose.connection.on('error', (err) => {
    console.log('Database error ' + err);
});
