/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    const Clinic = sequelize.define('clinics', {
        clinicId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        displayName: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        clinicName: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        streetAddress: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        streetAddressTwo: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        city: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        state: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        zipCode: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        clinicEmail: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        clinicPhone: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        clinicFax: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        taxId: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        mtbCode: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        mtbStartDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        chiroAssociation: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        chiroTouch: {
            type: DataTypes.INTEGER(1),
            allowNull: false
        },
        infinediCode: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        grpNpi: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        remoteAccess: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        remoteUserName: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        remotePassword: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        isActive: {
            type: DataTypes.INTEGER(1),
            allowNull: true
        },
        dateCreated: {
            type: DataTypes.DATE,
            allowNull: true
        },
    }, {
        tableName: 'clinics',
        timestamps: false,
        freezeTableName: true
    });

    Clinic.associate = function (models) {
        models.clinics.hasOne(models.clinic_billing, {foreignKey: 'clinicId', sourceKey: 'clinicId'});
        models.clinics.hasMany(models.clinic_notes, {foreignKey: 'clinicId', sourceKey: 'clinicId'});
        models.clinics.hasOne(models.clinic_aging, {foreignKey: 'clinicId', sourceKey: 'clinicId'});
        models.clinics.hasOne(models.clinic_deposit_entry, {foreignKey: 'clinicId', sourceKey: 'clinicId'});
        models.clinics.hasOne(models.clinic_patient_statement, {foreignKey: 'clinicId', sourceKey: 'clinicId'});
        models.clinics.hasOne(models.clinic_month_end, {foreignKey: 'clinicId', sourceKey: 'clinicId'});
        models.clinics.hasOne(models.clinic_remits, {foreignKey: 'clinicId', sourceKey: 'clinicId'});
        models.clinics.hasOne(models.clinic_network, {foreignKey: 'clinicId', sourceKey: 'clinicId'});
        models.clinics.hasMany(models.website_logins, {foreignKey: 'clinicId', sourceKey: 'clinicId'});
        models.clinics.hasMany(models.clinic_office_hours, {foreignKey: 'clinicId', sourceKey: 'clinicId'});
        models.clinics.hasMany(models.clinic_contact, {foreignKey: 'clinicId', sourceKey: 'clinicId'});
    };
    return Clinic;
};

