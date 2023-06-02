const {DataTypes} = require('sequelize')
const {sequelize} = require("../util/database")

module.exports = {
    Country: sequelize.define('country', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: DataTypes.STRING,
        code: DataTypes.STRING
    })
}