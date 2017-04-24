var express = require('express');
var router = express.Router();
var db = require('../models/index');



router.get('/', function (req, res, next) {

  db.emergencyData.findAll({}).then(
    function (response) {
      res.send(response);
    },
    function (err) {


      res.statusCode = 500;
      var resBody = {
        error: err.errors,
        suucess: false,
        message: err.message,
      }
      res.send(resBody);
    })


});




module.exports = router;