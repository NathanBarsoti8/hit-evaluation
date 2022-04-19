const repository = {
    Players: require('../../repositories/players')
}

module.exports = async (req, res) => {
    try {
        const players = await repository.Clubs.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
            include: [
                {
                    association: 'club',
                    attributes: {
                        exclude: ['createdAt', 'updatedAt']
                    },
                    required: false
                }
            ]
        })

        if (!players || players.length === 0) {
            return res.status(204).json([])
        }

        return res.status(200).json(players)
    }
    catch (err) {
        return res.status(500).json({
            message: err.message,
            stack: err.stack
        })
    }
}