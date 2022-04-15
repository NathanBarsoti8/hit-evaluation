'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Players', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            position: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            height: {
                allowNull: false,
                type: Sequelize.DOUBLE,
            },
            weight: {
                allowNull: false,
                type: Sequelize.DOUBLE,
            },
            clubId: {
                type: Sequelize.BIGINT,
                references: {
                    model: 'Clubs',
                    key: 'id'
                }
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        })
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Players')
    }
}