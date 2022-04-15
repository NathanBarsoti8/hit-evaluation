const express = require('express')
const path = require('path')
const routes = require('./src/routes/index')

const app = express()

const env = process.env.NODE_ENV || "development"
const envDir = path.join(__dirname, `./src/configs/env/${env}`)
require(envDir)(app)

//swagger
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile))

routes(app)

app.listen(app.get('port'), () => {
    console.log(`API LISTENING ON PORT ${app.get('port')} `)
})

module.exports = { app }