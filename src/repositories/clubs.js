const { Clubs } = require('../schemas')

class ClubsRepository {
    findAll(options = {}) {
        return Clubs.findAll(options)
    }

    findOne(options) {
        return Clubs.findOne(options)
    }

    findById(id) {
        return Clubs.findByPk(id)
    }

    create(data) {
        return Clubs.create(data)
    }

    update(data, options) {
        return Clubs.update(data, options)
    }

    delete(options) {
        return Clubs.destroy(options)
    }
}

module.exports = new ClubsRepository()