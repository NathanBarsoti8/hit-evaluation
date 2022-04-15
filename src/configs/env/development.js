const bodyParser = require('body-parser')
const cors = require('cors')

module.exports = (app) => {
    const port = process.env.PORT || 4444

    app.set('port', port)
    app.use(bodyParser.json())
    app.use(bodyParser.text())
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(bodyParser.json({ type: 'application/json' }))
    app.use(cors())
}