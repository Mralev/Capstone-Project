/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('clinic_contact', {
        contactId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        clinicId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        lastName: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        prefix: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        sufix: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        phone: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        fax: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        email: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        indNpi: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        isPrimary: {
            type: DataTypes.INTEGER(1),
            allowNull: true
        },
        isContact: {
            type: DataTypes.INTEGER(1),
            allowNull: true
        },
        isActive: {
            type: DataTypes.INTEGER(1),
            allowNull: true
        },
        note: {
            type: DataTypes.STRING(500),
            allowNull: true
        },
    }, {
        tableName: 'contact',
        timestamps: false,
        freezeTableName: true
    });
};
