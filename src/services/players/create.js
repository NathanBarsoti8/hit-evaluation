const { checkIfHasMandatoryKeys } = require('../../utils/functions/checkHasMandatoryKeys')
const { POSITION_PLAYERS } = require('../../utils/enum/index')
const repository = {
    Clubs: require('../../repositories/clubs'),
    Players: require('../../repositories/players')
}

const VALID_POSITIONS = Object.values(POSITION_PLAYERS)
const MANDATORY_KEYS = ['name', 'position', 'height', 'weight']

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
        if (!VALID_POSITIONS.includes(body.position.toUpperCase())) {
            return res.status(400).json({
                message: "Invalid position for a player",
                validPositions: VALID_POSITIONS
            })
        }

        let clubId = null
        if (body.clubId) {
            const existClub = await repository.Clubs.findById(body.clubId)

            if (existClub) {
                clubId = existClub.id
            }
        }

        const { isValid, errMessage, heightConverted } = convertToCm(body.height)

        if (!isValid) {
            return res.status(400).json({ message: errMessage })
        }

        const player = await repository.Players.create({
            "name": body.name,
            "position": body.position.toUpperCase(),
            "height": heightConverted,
            "weight": body.weight,
            "clubId": clubId
        })

        return res.status(201).json({
            message: "Player successfully created",
            data: player
        })
    }
    catch (err) {
        return res.status(500).json({
            message: err.message,
            stack: err.stack
        })
    }
}

function convertToCm(height) {
    const response = {
        "isValid": true,
        "errMessage": null,
        "heightConverted": height
    }

    if (typeof height === "string") {
        response.heightConverted = heightString.replaceAll(",", "").replaceAll(".", "")
    }
    else if (typeof height === "number") {
        const isInteger = Number.isInteger(height)

        if (!isInteger) {
            response.heightConverted = height * 100
        }
    }
    else {
        response.isValid = false
        response.errMessage = "Invalid type of height. Must be number or string"
    }

    return response
}