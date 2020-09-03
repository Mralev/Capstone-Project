/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('clinic_notes', {
        clinicNotesId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        clinicId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        clientContact: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        mtmi: {
            type: DataTypes.STRING(500),
            allowNull: true
        },
        treatmentNotes: {
            type: DataTypes.STRING(500),
            allowNull: true
        },
        isDeleted: {
            type: DataTypes.INTEGER(1),
            allowNull: true
        },
    }, {
        tableName: 'clinic_notes',
        timestamps: false,
        freezeTableName: true
    });
};
