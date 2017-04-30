var express = require('express');
var router = express.Router();
var db = require('../models/index');


router.get('/', function (req, res, next) {

  db.opdData.findAll({}).then(
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

router.post('/', function (req, res, next) {

  let opde = {
    timingofODs: req.body.timingofODs,
    doctorId: req.body.doctorId,
    assignedToDr: req.body.assignedToDr,
    roomId: req.body.roomId
  }

  console.log(req.body);
  db.opdData.create(opde).then(
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



router.get('/getopddetail', function (req, res, next) {
 
  db.opdData.findAll({
    include: [{ module : db.patiendata }]
    
  })
    .then(
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
      console.log("abcdefg")


});


module.exports = router;