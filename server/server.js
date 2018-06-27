const express = require('express')

const hatRoutes = require('./routes/hatRoutes')
const server = express()
server.use(hatRoutes)

module.exports = server