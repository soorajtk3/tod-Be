var express = require('express');
const app = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
app.use(cors());
router.post('/test', (req, res) => {
  console.log(req.body);
  return res.send({ title: 'Testing' });
});

module.exports = router;
