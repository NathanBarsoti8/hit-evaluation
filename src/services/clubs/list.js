const repository = {
    Clubs: require('../../repositories/clubs')
}

module.exports = async (req, res) => {
    try {
        const clubs = await repository.Clubs.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
            include: [
                {
                    association: 'players',
                    attributes: {
                        exclude: ['createdAt', 'updatedAt']
                    },
                    required: false
                }
            ]
        })

        if (!clubs || clubs.length === 0) {
            return res.status(204).json([])
        }

        return res.status(200).json(clubs)
    }
    catch (err) {
        return res.status(500).json({
            message: err.message,
            stack: err.stack
        })
    }
}