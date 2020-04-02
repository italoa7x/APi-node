const express = require('express');
const UsuarioController = require('./controller/UsuarioController')

const routes = express.Router();
routes.post('/usuario', UsuarioController.cadastrar_usuario)
routes.get('/usuario', UsuarioController.listar_usuarios)

module.exports = routes;