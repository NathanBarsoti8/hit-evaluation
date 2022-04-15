const { checkIfHasMandatoryKeys } = require('../../utils/functions/checkHasMandatoryKeys')
const moment = require('moment')
const repository = {
    Clubs: require('../../repositories/clubs')
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

        return res.status(201).json(club)
    }
    catch (err) {
        return res.status(500).json({
            message: err.message,
            stack: err.stack
        })
    }
}