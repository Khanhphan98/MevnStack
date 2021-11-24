const express   = require('express')
const morgan    = require('morgan')
const path      = require('path')
const appConfig = require('./config/app.json')
const cors      = require('cors')
const app         = express()
const bodyParser  = require("body-parser")

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req,res) => {
  res.send(`<h1>API Running on the port ${appConfig.port}</h1>`);
});

app.get('/posts', (req, res) => {
    res.send([
        {
            title: 'Hello World',
            description: `I'm K.P`,
        }
    ])
})

app.listen(appConfig.port);