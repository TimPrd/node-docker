'use strict';
module.exports = {
  //Fichier de migration pour déclarer le type de nos todos 
  up: (queryInterface, Sequelize) => {
    // On créer la table todos avec ces attributs
    return queryInterface.createTable('Todos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      is_done: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },
      { //j'ajoute une contrainte d'unicité pour éviter les doublons 
        uniqueKeys: {
          Items_unique: {
            fields: ['title']
          }
        }
      });
  },
  // En cas de roll back on suppr la table
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Todos');
  }
};