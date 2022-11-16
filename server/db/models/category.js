'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Card, {
        foreignKey: 'category_id',
     });
     this.hasMany(models.Main_category, {
      foreignKey: 'main_category_id',
    });
    }
  }
  Category.init({
    title: DataTypes.STRING,
    main_category_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};
