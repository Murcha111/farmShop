'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Quantities', [
      {
        quantity_title: "кг",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quantity_title: "тонн",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        quantity_title: "литр",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      
      
      {
        quantity_title: "штук",
        createdAt: new Date(),
        updatedAt: new Date(),
      }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
