module.exports = (sequelize, DataTypes) => {
    const Clubs = sequelize.define('Clubs', {
        name: DataTypes.STRING,
        openingDate: DataTypes.DATEONLY,
        state: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    }, {
        timestamps: true,
        freezeTableName: true,
        tableName: 'Clubs'
    })

    Clubs.associate = function (models) {
        Clubs.hasMany(models.Players, {
            foreignKey: 'clubId',
            as: 'players'
        })
    }

    return Clubs
}