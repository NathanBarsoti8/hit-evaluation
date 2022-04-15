module.exports = (app) => {
    const basev1 = '/api/v1'

    app.use(`${basev1}/clubs`, require('./clubs'))
    app.use(`${basev1}/players`, require('./players'))
}