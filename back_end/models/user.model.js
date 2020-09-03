/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('users', {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        userName: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        password: {
            type: DataTypes.STRING(1000),
            allowNull: true
        },
        isActive: {
            type: DataTypes.INTEGER(1),
            allowNull: true
        },
        isAdmin: {
            type: DataTypes.INTEGER(1),
            allowNull: true
        },
    }, {
        tableName: 'users',
        timestamps: false,
        freezeTableName: true
    });
};
