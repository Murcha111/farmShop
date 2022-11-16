'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        title: "Овощи",
        main_category_id: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Запчасти ",
        main_category_id: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Колеса ",
        main_category_id: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Спецтехника",
        main_category_id: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Продукты пчеловодства",
        main_category_id: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Сыры ",
        main_category_id: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Мясная продукция",
        main_category_id: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Вино",
        main_category_id: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Молочная продукция",
        main_category_id: "1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Оборудование",
        main_category_id: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Вывоз мусора",
        main_category_id: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Услуги ветеринаров",
        main_category_id: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Услуги по доставке",
        main_category_id: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Обработка земли",
        main_category_id: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Техническое обслуживание",
        main_category_id: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Новости ",
        main_category_id: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Масла",
        main_category_id: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Полезная информация",
        main_category_id: "2",
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
