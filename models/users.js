'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    age: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  users.associate = function(models) {
    // associations can be defined here
    users.belongsTo(models.companies, {
      foreignKey : {
        allowNull : false,
      }
    })
  };
  return users;
};