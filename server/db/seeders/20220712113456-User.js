'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: "Elena",
        email: "elena@mail.ru",
        password:"123",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Ramiz",
        email: "ramiz@crazyboy.ru",
        password:"444",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Asan",
        email: "asan@niceboy.ru",
        password:"777",
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
