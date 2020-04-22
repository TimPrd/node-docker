var express = require('express');
var router = express.Router();
const models = require("../database/models");

// On déclare la route root (/)
router.get('/', async (req, res, next) => {
  try {
    //On essaie de récupérer les todos via sequelize
    const todos = await models.Todo.findAll({});
    // Si on les a alors on les rends via pug 
    res.render('todos/index', { todos });
  } catch (error) {
    // Sinon on renvoie l'erreur
    return res.status(500).send(error.message);
  }
});


module.exports = router;
