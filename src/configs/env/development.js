const bodyParser = require('body-parser')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')

module.exports = (app) => {
    const port = process.env.PORT || 4444

    app.set('port', port)
    app.use(bodyParser.json())
    app.use(bodyParser.text())
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json({ type: 'application/json' }))
    app.use(cors())

    //swagger
    const swaggerFile = require('../../../swagger_output.json')

    app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile))
}