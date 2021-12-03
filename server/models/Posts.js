const mongoose = require('mongoose')

const PostsSchema = new mongoose.Schema(
    {
        title   : { type: String, required: true, unique: true },
        content : { type: String, required: true },
        author  : { type: String, required: true },
        status  : { type: String, required: true }
    },
    { collection: 'posts' }
)

const model = mongoose.model('PostsSchema', PostsSchema);
module.exports = model;