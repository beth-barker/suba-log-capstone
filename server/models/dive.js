const {DataTypes} = require('sequelize')
const {sequelize} = require("../util/database")

module.exports = {
    Dive: sequelize.define('dives', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        diveSite: DataTypes.STRING,
        date: DataTypes.DATEONLY,
        durtaion: DataTypes.INTEGER,
        maxDepth: DataTypes.INTEGER,
        visibility: DataTypes.INTEGER,
        img: DataTypes.STRING,
        notes: DataTypes.TEXT
    })
}