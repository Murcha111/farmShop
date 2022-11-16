'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Avatars', [
      {
        image: "https://zoomwiki.ru/wp-content/uploads/2020/12/avatarki-dlya-zuma4.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        image: "https://android-obzor.com/wp-content/uploads/2022/03/30-2.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        image: "https://klike.net/uploads/posts/2019-03/1551511875_45.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        image: "https://ustanovkaos.ru/wp-content/uploads/2022/02/06-psevdo-pustaya-ava.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
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

