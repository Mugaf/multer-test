var express = require('express');
var router = express.Router();
var filesRoute = require("./files");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use("/files", filesRoute);

module.exports = router;
