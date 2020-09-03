/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('clinic_billing', {
        billingId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        clinicId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        billBackDays: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        BillCaseTypePro: {
            type: DataTypes.STRING(500),
            allowNull: true
        },
        BillingNotes: {
            type: DataTypes.STRING(500),
            allowNull: true
        },
    }, {
        tableName: 'billing',
        timestamps: false,
        freezeTableName: true
    });
};
