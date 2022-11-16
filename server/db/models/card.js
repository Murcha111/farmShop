'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'user_id', 
     })
     this.belongsTo(models.Quantity, {
      foreignKey: 'quantity_id',
    });
    this.belongsTo(models.Category, {
      foreignKey: 'category_id',
    });
    this.hasMany(models.Gallery, {
      foreignKey: 'gallery_id',
    });
    this.hasMany(models.Favourite, {
      foreignKey: 'card_id',
    });
    }
  }
  Card.init({
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    about: DataTypes.STRING,
    price: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    gallery_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    contacts: DataTypes.STRING,
    location: DataTypes.STRING,
    quantity_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};
