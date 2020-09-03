/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('clinic_deposit_entry', {
        depositEntryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        clinicId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        depositName: {
            type: DataTypes.STRING(200),
            allowNull: true
        },
        depositPr: {
            type: DataTypes.STRING(200),
            allowNull: true
        },
        depositStatus: {
            type: DataTypes.STRING(200),
            allowNull: true
        },
        writeOff: {
            type: DataTypes.STRING(500),
            allowNull: true
        },
        note: {
            type: DataTypes.STRING(500),
            allowNull: true
        },
    }, {
        tableName: 'deposit_entry',
        timestamps: false,
        freezeTableName: true
    });
};
