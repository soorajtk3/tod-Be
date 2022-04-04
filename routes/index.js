var express = require('express');

const models = require('../models');
const router = express.Router({ mergeParams: true });

// const { where } = require('sequelize');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/GET', async (req, res) => {
  var todo = await models.Todo.findAll({});
  return res.status(200).json(todo);
});

router.post('/test', (req, res) => {
  console.log(req.body);
});

// Todo.create({ task: taskName, status: 'active' });
// console.log('Connection has been established successfully.');

// return res.send({ title: 'Testing' });

// router.post('/', async (req, res) => {
//   const { title, description } = req.body;
// });

module.exports = router;
