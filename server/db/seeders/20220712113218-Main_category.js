'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Main_categories', [
      {
        title: "Продукты",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Техника",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Услуги",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
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

