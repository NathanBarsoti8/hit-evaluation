module.exports = (sequelize, DataTypes) => {
    const Players = sequelize.define('Players', {
        name: DataTypes.STRING,
        position: DataTypes.STRING,
        height: DataTypes.DOUBLE,
        weight: DataTypes.DOUBLE,
        clubId: DataTypes.BIGINT,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {
        timestamps: true,
        freezeTableName: true,
        tableName: 'Players'
    })

    Players.associate = function (models) {
        Players.belongsTo(models.Clubs, {
            foreignKey: 'clubId',
            as: 'club'
        })
    }

    return Players
}