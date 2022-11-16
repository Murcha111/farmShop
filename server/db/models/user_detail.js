'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_detail extends Model {
    static associate(models) {
      this.belongsTo(models.Avatar, {
        foreignKey: 'avatar_id',
     });
    }
  }
  User_detail.init({
    user_id: DataTypes.INTEGER,
    avatar_id: DataTypes.INTEGER,
    location: DataTypes.STRING,
    contacts: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User_detail',
  });
  return User_detail;
};
