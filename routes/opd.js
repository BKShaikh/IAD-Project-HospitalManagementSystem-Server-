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


router.get('/detailbyday/:dayofOpds', function (req, res, next) {
var day = req.params.dayofOpds;
// console.log(req.params.dayofOpds);
// console.log(day);
  db.opdData.findOne({
    where: { dayofOpds: day }

  }).then(
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
    dayofOpds: req.body.dayofOpds,
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



router.delete('/del/:id', function (req, res, next) {
  db.opdData.destroy({
    where: {
      id: req.params.id
    }
  })
    // .then(deletedPatient=> {
    //     res.json(deletedPatient);
    //     // res.send(response);

    // });

    // })
    .then(
    function (response) {
      res.send(String(response));
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



router.get('/getopddetail/:id', function (req, res, next) {
 
  // db.opdData.findAll({
  //   include: [{ model : db.patientdata }]
    
  // })
  //   .then(
  //   function (response) {
  //     res.send(response);
  //   },
     db.opdData.find({
    where: { id: req.params.id }

  })
    .then(

    function (opd) {
      db.patientdata.find({where : {opdId : opd.id }}).then(function (data) {
        res.send(data);
      })

    }
    ,function (err) {


      res.statusCode = 500;
      var resBody = {
        error: err.errors,
        suucess: false,
        message: err.message,
        
      }
      res.send(resBody);
    })
      // console.log("abcdefg")


});


module.exports = router;