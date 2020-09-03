/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    const InsuranceCompany = sequelize.define('insurance_company', {
        insuranceCompId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        fax: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        note: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        isActive: {
            type: DataTypes.INTEGER(1),
            allowNull: false
        }
    }, {
        tableName: 'insurance_company',
        timestamps: false,
        freezeTableName: true
    });

    return InsuranceCompany;
};
