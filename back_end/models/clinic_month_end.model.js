/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('clinic_month_end', {
        monthEndId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        clinicId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        monthCaseTypePro: {
            type: DataTypes.STRING(500),
            allowNull: true
        },
        ctCashCodes: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        clinicInvoiceEmail: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        statsGraph: {
            type: DataTypes.STRING(500),
            allowNull: true
        },
        statsGraphToClinic: {
            type: DataTypes.STRING(500),
            allowNull: true
        },
        note: {
            type: DataTypes.STRING(500),
            allowNull: true
        },
    }, {
        tableName: 'month_end',
        timestamps: false,
        freezeTableName: true
    });
};
