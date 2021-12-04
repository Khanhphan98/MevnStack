const express = require('express')
const api     = express.Router();

const userCtrl = require('../controller/userCtrl')
const postCtrl = require('../controller/postsCtrl')

//user
api.post('/register', userCtrl.register); // register
api.post('/login', userCtrl.login); // login
api.get('/user', userCtrl.getUser); // get user

//posts
api.post('/posts', postCtrl.getPosts); // get posts
api.post('/insert-post', postCtrl.insertPost); // insert post
api.put('/update-post/:id', postCtrl.updatePost); // update post
api.delete('/remove-post/:id', postCtrl.removePost); // delete post

module.exports = api;