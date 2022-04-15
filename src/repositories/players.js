const { Players } = require('../schemas')

class PlayersRepository {
    findAll(options = {}) {
        return Players.findAll(options)
    }

    findOne(options) {
        return Players.findOne(options)
    }

    findById(id) {
        return Players.findByPk(id)
    }

    create(data) {
        return Players.create(data)
    }

    update(data, options) {
        return Players.update(data, options)
    }

    delete(options) {
        return Players.destroy(options)
    }
}

module.exports = new PlayersRepository()