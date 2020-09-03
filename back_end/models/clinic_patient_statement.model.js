/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('clinic_patient_statement', {
        patientStatementId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        clinicId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        patCaseTypePro: {
            type: DataTypes.STRING(500),
            allowNull: true
        },
        patGlobWriteOff: {
            type: DataTypes.STRING(500),
            allowNull: true
        },
        note: {
            type: DataTypes.STRING(500),
            allowNull: true
        },
    }, {
        tableName: 'patient_statement',
        timestamps: false,
        freezeTableName: true
    });
};
