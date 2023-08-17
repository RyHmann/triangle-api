const express = require('express')
const app = express()
const cors = require('cors')
const middleware = require('./utils/middleware')


const triangleRouter = require('./controllers/triangles')

app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/triangle', triangleRouter)

app.use(middleware.unknownEndpoint)

module.exports = app