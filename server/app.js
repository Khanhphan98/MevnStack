const express    = require('express')
const morgan     = require('morgan')
const path       = require('path')
const appConfig  = require('./config/app')
const bodyParser = require("body-parser")
const cors       = require('cors')
const cookieParser = require('cookie-parser')
var session = require('express-session')

const app = express()

require('./lib/mongodb/mongodb')

const api = require('./router/api')

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cookieParser())

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(api)

app.listen(appConfig.port);