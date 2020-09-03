/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('clinic_remits', {
        remitsId: {
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
        whereToFind: {
            type: DataTypes.STRING(500),
            allowNull: true
        },
        whenToPost: {
            type: DataTypes.STRING(500),
            allowNull: true
        },
        note: {
            type: DataTypes.STRING(500),
            allowNull: true
        },
    }, {
        tableName: 'remits',
        timestamps: false,
        freezeTableName: true
    });
};
