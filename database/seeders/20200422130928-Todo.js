'use strict';

module.exports = {
  //création des seeds pour avoir des data direct
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Todos',
      [
        {
          title: 'Todo1',
          is_done: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Todo2',
          is_done: true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Todos', null, {});
  }
};
