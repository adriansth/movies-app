const { DataTypes } = require("sequelize");
const { sequelize } = require("../util/database");

const User = sequelize.define("user", {
    id: {
        primaryKey: true,
        autoIncrement: true, 
        type: DataTypes.INTEGER,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
    },
    status: {
        type: DataTypes.STRING(10),
        allowNull: false,
        defaultValue: 'active'
    },
    role: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 'guest' // guest | admin
    }
});

module.exports = { User };