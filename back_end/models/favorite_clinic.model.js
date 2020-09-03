/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    const FavoriteClinic = sequelize.define('favorite_clinic', {
        favoriteClinicId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        clinicId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        isActive: {
            type: DataTypes.INTEGER(1),
            allowNull: false
        }
    }, {
        tableName: 'favorite_clinic',
        timestamps: false,
        freezeTableName: true
    });

    FavoriteClinic.associate = function (models) {
        models.favorite_clinic.hasMany(models.clinics, {foreignKey: 'clinicId', sourceKey: 'clinicId'});
    };
    return FavoriteClinic;
};
