const { checkIfHasMandatoryKeys } = require('../../utils/functions/checkHasMandatoryKeys')
const repository = {
    Clubs: require('../../repositories/clubs'),
    Players: require('../../repositories/players')
}

const MANDATORY_KEYS = ['clubId']

module.exports = async (req, res) => {
    const { params, body } = req
    const missingKeys = checkIfHasMandatoryKeys(body, MANDATORY_KEYS)

    if (missingKeys) {
        return res.status(400).json({
            message: 'there are mandatory keys missing from request',
            missingKeys: missingKeys
        })
    }

    try {
        let clubId = null

        if (body.clubId) {
            const existClub = await repository.Clubs.findById(body.clubId)

            if (existClub) {
                clubId = existClub.id
            }
            else {
                return res.status(404).json({ message: `Was not found a club with id ${body.clubId}` })
            }
        }

        await repository.Players.update({
            "clubId": clubId
        }, {
            where: {
                "id": params.id
            }
        })

        return res.status(200).json({ message: "Player successfully updated" })
    }
    catch (err) {
        return res.status(500).json({
            message: err.message,
            stack: err.stack
        })
    }
}