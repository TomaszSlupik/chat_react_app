const express = require('express')
const app = express()
const config = require('./config')
const bodyParser = require('body-parser')
const cors = require('cors')

require('./database/mongoose')

app.use(bodyParser.json())

app.use(cors())

const apiRouter = require('./routes/api')
app.use('/api', apiRouter)

app.listen(config, function () {
    console.log('Serwer słucha ...')
})