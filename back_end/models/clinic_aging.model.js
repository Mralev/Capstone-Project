/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('clinic_aging', {
        agingId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        clinicId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        agingCaseTypePro: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        oldAgeDates: {
            type: DataTypes.DATE,
            allowNull: true
        },
        currentAgeDates: {
            type: DataTypes.DATE,
            allowNull: true
        },
        compAgeDates: {
            type: DataTypes.DATE,
            allowNull: true
        },
        agingNotes: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
    }, {
        tableName: 'aging',
        timestamps: false,
        freezeTableName: true
    });
};
