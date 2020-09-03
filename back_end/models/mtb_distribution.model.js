/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('mtb_distribution', {
        mtbDistributionId: {
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
            type: DataTypes.STRING(50),
            allowNull: true
        },
        contactExt: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        deposit: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        billing: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        statements: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        finance: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        numberMtbComp: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        note: {
            type: DataTypes.STRING(500),
            allowNull: true
        },
    }, {
        tableName: 'mtb_distribution',
        timestamps: false,
        freezeTableName: true
    });
};
