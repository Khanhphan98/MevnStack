const express = require('express')
const api     = express.Router();

const userCtrl = require('../controller/userCtrl')

//user
api.post('/register', userCtrl.register); // register
api.post('/login', userCtrl.login); // login

module.exports = api;
