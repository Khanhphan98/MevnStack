const User   = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt    = require('jsonwebtoken')
const JWT_SECRET = 'sdjkfh8923yhjdksbfma@#*(&@*!^#&@bhjb2qiuhesdbhjdsfg839ujkdhfjk'

module.exports = {
    register: async (req, res) => {
        const { username, email, password: plainTextPassword } = req.body

        if(!username || typeof username !== 'string') {
            return res.json({ status: false, error: 'Invalid username' })
        }

        if(!plainTextPassword || typeof plainTextPassword !== 'string'){
            return res.json({ status: false, error: 'Invalid password' })
        }
        
        if(plainTextPassword.length < 5) {
            return res.json({ status: false, error: 'Password too small. Should be atleast 6 characters'})
        }

        const password = await bcrypt.hash(plainTextPassword, 10)

        try {
            const result = await User.create({
                username, email, password
            })
            return res.json({ status: true, message: 'Create user successfully' })
        } catch (e) {
            throw e
            return res.json({ status: false, error: e })
        }

    },
    login: async (req, res) => {
        const { username, password } = req.body

        const user = await User.findOne({ username }).lean()

        if (!user) {
            return res.json({ status: false, error: 'Invalid username/password' })
        } 

        try {
            if (await bcrypt.compare(password, user.password)) {
                const token = jwt.sign(
                    {
                        id: user._id,
                        username: user.username
                    },
                    JWT_SECRET
                )
                return res.json({ status: true, token: token })
            }    
            return res.json({ status: false, error: 'Invalid username/password' })
        } catch(e) {
            throw e
            return res.json({ status: false, error: e })
        }
    },
    logout: async (req, res) => {
        const { token } = req.body
        try {
            const user =  await jwt.verify(token, JWT_SECRET)
            return res.json({ data: user })
        } catch (e) {
            throw e
        }
    },
    getUser: async (req, res) => {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
        try {
            const userInfo  = await jwt.verify(token, JWT_SECRET)
            const user      = await User.findById(userInfo.id)
            return res.json({ data: user })
        } catch (e) {
            throw e
        }
    }
}