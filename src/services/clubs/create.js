const { checkIfHasMandatoryKeys } = require('../../utils/functions/checkHasMandatoryKeys')
const moment = require('moment')
const { Op: op } = require('sequelize')
const repository = {
    Clubs: require('../../repositories/clubs'),
    Players: require('../../repositories/players')
}

const MANDATORY_KEYS = ['name', 'openingDate', 'state']
const DATE_FORMAT = "YYYY-MM-DD"

module.exports = async (req, res) => {
    const { body } = req
    const missingKeys = checkIfHasMandatoryKeys(body, MANDATORY_KEYS)

    if (missingKeys) {
        return res.status(400).json({
            message: 'there are mandatory keys missing from request',
            missingKeys: missingKeys
        })
    }

    try {
        const openingDate = moment(body.openingDate, DATE_FORMAT)

        if (!openingDate.isValid()) {
            return res.status(400).json({ message: "Invalid opening date" })
        }

        const club = await repository.Clubs.create({
            "name": body.name.toUpperCase(),
            "openingDate": openingDate,
            "state": body.state
        })

        if (body.players && body.players.length > 0) {
            const playersIds = body.players.map(player => player.id).filter(player => player)

            await repository.Players.update({
                "clubId": club.id
            }, {
                where: {
                    "id": { [op.in]: playersIds }
                }
            })
        }

        return res.status(201).json(club)
    }
    catch (err) {
        return res.status(500).json({
            message: err.message,
            stack: err.stack
        })
    }
}