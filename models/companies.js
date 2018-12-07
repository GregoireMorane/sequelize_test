'use strict';
module.exports = (sequelize, DataTypes) => {
  const companies = sequelize.define('companies', {
    name: DataTypes.STRING,
    isSexy: DataTypes.BOOLEAN
  }, {});
  companies.associate = function(models) {
    companies.hasMany(models.users, {
      foreignKey: {
        allowNull : false
      }
    })
  };
  return companies;
};