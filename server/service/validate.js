const { check } = require('express-validator')

let validatePost = () => {
    return [
        check('posts.title', 'post title does not empty').not().isEmpty(),
        check('posts.content', 'post content does not empty').not().isEmpty(),
        check('posts.author', 'post author does not empty').not().isEmpty(),
        check('posts.status', 'post status does not empty').not().isEmpty(),
    ]
}

let validate = {
    validatePost: validatePost
}

module.exports = { validate }