/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('clinic_office_hours', {
        officeHourId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        clinicId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        monday: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        tuesday: {
            type: DataTypes.INTEGER(1),
            allowNull: true
        },
        wednesday: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        thursday: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        friday: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        saturday: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        sunday: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        note: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
    }, {
        tableName: 'office_hours',
        timestamps: false,
        freezeTableName: true
    });
};
