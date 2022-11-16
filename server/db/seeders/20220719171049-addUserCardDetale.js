'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('User_details', [{
      user_id: 1,
      avatar_id: 1,
      location: "Россия, Москва, Красная Площадь",
      status: 'Предприниматель буизнес',
      contacts: '8(800)553-55-55',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 2,
      avatar_id: 2,
      location: "Россия, Краснодарский край, г.Анапа, ул.Пушкина, д.Колотушкина",
      status: 'Владелец 10ти полей с арбузами',
      contacts: '8(999)937-99-92',
      createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      user_id: 3,
      avatar_id: 3,
      location: "Россия, Москва",
      status: 'Компания Магнит.Купим все!!!!',
      contacts: '8(800)552-55-55',
      createdAt: new Date(),
      updatedAt: new Date(),
     }], {});
    
  },

  async down (queryInterface, Sequelize) {
  }
};
