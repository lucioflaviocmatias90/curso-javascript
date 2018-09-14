// buscando os arquivos
const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(expressValidator());

/* 
	o consign vai incluir todas as rotas
	da pasta routes e arquivos da pastas
	utils, e vai inserir na variavel app 
*/
consign().include('routes').include('utils').into(app);

app.listen(3000, '127.0.0.1', ()=>{
	console.log('servidor rodando!');
});