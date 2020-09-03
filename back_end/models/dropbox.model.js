/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('drop_box', {
        dropBoxId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        clinicId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        user: {
            type: DataTypes.STRING(45),
            allowNull: true
        },
        password: {
            type: DataTypes.STRING(45),
            allowNull: true
        },
        email: {
            type: DataTypes.STRING(500),
            allowNull: true
        },
        aprovInfo: {
            type: DataTypes.STRING(45),
            allowNull: true
        },
        note: {
            type: DataTypes.STRING(500),
            allowNull: true
        },
    }, {
        tableName: 'remits',
        timestamps: false,
        freezeTableName: true
    });
};
