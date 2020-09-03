/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    const WebsiteLogins = sequelize.define('website_logins', {
        websiteLoginsId: {
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
            allowNull: false
        },
        websiteAddress: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        userName: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        admin: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        security: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        note: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        isActive: {
            type: DataTypes.INTEGER(1),
            allowNull: true
        },
    }, {
        tableName: 'website_logins',
        timestamps: false,
        freezeTableName: true
    });

    return WebsiteLogins;
};
