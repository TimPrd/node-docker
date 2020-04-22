'use strict';
module.exports = (sequelize, DataTypes) => {
  // déscription du model avec sequelize
  const Todo = sequelize.define('Todo', {
    title: {
      type: DataTypes.STRING,
      unique: 'uniqueTag',
    },
    is_done: DataTypes.BOOLEAN
  }, {});
  Todo.associate = function (models) {
    // associations can be defined here
  };
  return Todo;
};