const User   = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt    = require('jsonwebtoken')
const config = require('../config/app.js')
const JWT_SECRET = config.JWT_SECRET;

module.exports = {
    register: async (req, res) => {
        const { username, email, password: plainTextPassword } = req.body

        if(!username || typeof username !== 'string') {
            return res.json({ status: false, error: 'Invalid username' }, 422)
        }

        if(!plainTextPassword || typeof plainTextPassword !== 'string') {
            return res.json({ status: false, error: 'Invalid password' }, 422)
        }
        
        if(plainTextPassword.length < 5) {
            return res.json({ status: false, error: 'Password too small. Should be atleast 6 characters'}, 422)
        }

        const password = await bcrypt.hash(plainTextPassword, 10)

        try {
            const result = await User.create({
                username, email, password
            })
            return res.json({ status: true, message: 'Create user successfully' }, 200)
        } catch (e) {
            return res.json({ status: false, error: e }, 422)
        }

    },
    login: async (req, res) => {
        const { username, password } = req.body

        const user = await User.findOne({ username }).lean()

        if (!user) {
            return res.json({ status: false, error: 'Invalid username/password' }, 422)
        } 

        try {
            if (await bcrypt.compare(password, user.password)) {
                const token = jwt.sign(
                    {
                        id: user._id,
                        username: user.username
                    },
                    JWT_SECRET,
                    { expiresIn: '1h' }
                )
                return res.json({ status: true, token: token }, 200)
            }    
            return res.json({ status: false, error: 'Invalid username/password' }, 422)
        } catch(e) {
            return res.json({ status: false, error: e }, 422)
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

        if (String(token) !== undefined) {
            try {
                const userInfo  = await jwt.verify(token, JWT_SECRET)
                const user      = await User.findById(userInfo.id)
                return res.status(200).json({ status: true,data: user });
            } catch (e) {
                return res.json({ status: false, error: e }, 422);
            }
            
        } else {
            return res.json({ status: false }, 422)
        }
    }
}