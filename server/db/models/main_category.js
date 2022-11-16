'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Main_category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Category, {
        foreignKey: 'main_category_id',
     });
    }
  }
  Main_category.init({
    title: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Main_category',
  });
  return Main_category;
};
