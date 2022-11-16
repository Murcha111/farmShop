'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      image:{
        type: Sequelize.STRING
      },
      about: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      gallery_id:{
        type: Sequelize.INTEGER,
        references: {
          model: {
              tableName: 'Galleries',
          },
      key: 'id',
      },


      },
      category_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
              tableName: 'Categories',
          },
      key: 'id',
      },
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
              tableName: 'Users',
          },
      key: 'id',
      },
      },
      contacts: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      quantity_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
              tableName: 'Quantities',
          },
      key: 'id',
      },
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Cards');
  }
};
