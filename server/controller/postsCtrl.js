const Posts = require('../models/Posts.js')
const { check } = require('express-validator')

module.exports = {
    getPosts: async (req, res) => {
        const posts = await Posts.find({});
        return res.json({ post: posts }, 200)
    },
    insertPost: async (req, res) => {
        const { title, content, author, status } = req.body
        try {
            const result = await Posts.create({
                title, content, author, status
            })
            return res.json({ status: true, posts: result }, 200)
        } catch (e) {
            return res.json({ error: e }, 422)
        }
    },
    updatePost: async (req, res) => {
        const { title, content, author, status } = req.body
        const _id = req.params.id
        const post  = await Posts.findById({_id})
        
        if (post === null) {
            return res.json({ error: 'Post is not found'}, 422)
        }
        try {
            const result = await Posts.findByIdAndUpdate({_id},{
                title: title, content: content, author: author, status: status
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
            await Posts.findByIdAndRemove({_id}, (err, success) => {
                if (err) { return res.json({ error: err }, 422) }
            });
            return res.json({ status: true }, 200)
        } catch (e) {
            return res.json({ error: e }, 422)
        }
    }
} 