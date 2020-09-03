/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('clinic_network', {
        networkId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        clinicId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        insuranceCompId: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        inNetwork: {
            type: DataTypes.STRING(500),
            allowNull: true
        },
        inNetworkDate: {
            type: DataTypes.DATE,
            allowNull: true
        },
        fileClaimTo: {
            type: DataTypes.STRING(500),
            allowNull: true
        },
        note: {
            type: DataTypes.STRING(500),
            allowNull: true
        },
    }, {
        tableName: 'in_networks',
        timestamps: false,
        freezeTableName: true
    });
};
