const Posts = require('../models/Posts.js')
const { check } = require('express-validator')
const jwt    = require('jsonwebtoken')
const config = require('../config/app.js')
const JWT_SECRET = config.JWT_SECRET;
const getToken = require('../lib/getToken')
const Token = new getToken()

module.exports = {
    getPosts: async (req, res) => {
        const token = Token.getToken(req)

        if (token !== undefined) {
            try {
                const userInfo  = await jwt.verify(token, JWT_SECRET)
                const posts = await Posts.find({ author: userInfo.id });
                return res.status(200).json({ post: posts })
            } catch (e) {
                return res.json({ status: false, error: e }, 422);
            }
            
        } else {
            return res.json({ status: false }, 422)
        }
    },
    insertPost: async (req, res) => {
        const { title, content, status } = req.body
        const token = Token.getToken(req)
        if (token !== undefined) { 
            try {
                const userInfo  = await jwt.verify(token, JWT_SECRET);
                const author = userInfo.id;
                const result = await Posts.create({
                    title, content, author, status
                })
                return res.status(200).json({ status: true, posts: result })
            } catch (e) {
                return res.json({ error: e }, 422)
            }
        }
        
    },
    updatePost: async (req, res) => {
        const { title, content, status } = req.body
        const _id = req.params.id
        const post  = await Posts.findById({_id})
        
        if (post === null) {
            return res.json({ error: 'Post is not found'}, 422)
        }
        try {
            const result = await Posts.findByIdAndUpdate({_id},{
                title: title, content: content, status: status
            });
            return res.json({ status: true, posts: result }, 200)
        } catch (e) {
            return res.json({ error: e }, 422)
        }
    },
    removePost: async (req, res) => {
        const _id   = req.params.id
        const post  = await Posts.findById({_id})
        

        if (post === null) {
            return res.json({ error: 'Post is not found'}, 422)
        }

        try {
            await Posts.findByIdAndRemove({_id});
            return res.json({ status: true }, 200)
        } catch (e) {
            return res.json({ error: e }, 422)
        }
    }
} 