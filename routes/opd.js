var express = require('express');
var router = express.Router();
var db = require('../models/index');
var verify = require('../middleware');

router.get('/', verify.rou ,function (req, res, next) {

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


router.get('/detailbyday/:dayofOpds',verify.rou , function (req, res, next) {
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


router.post('/', verify.rou ,function (req, res, next) {

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



router.delete('/del/:id', verify.rou ,function (req, res, next) {
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



router.get('/getopddetail/:id', verify.rou ,function (req, res, next) {
 
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

router.patch('/update/:id',verify.rou , function (req, res, next) {
  const updates = req.body.updates;
  db.opdData.findOne({
    where: {
      id: req.params.id
    }
  })

    .then(opde => {
      return opde.updateAttributes(updates)
    })
    // .then(function (response) {
    //   if (response == null) {
    //     res.statusCode = 404;
    //     var resBody = {
    //       suucess: false,
    //     }
    //     res.send(resBody);
    //   }
    // })
    .then(updatedOpde => {
      if (updatedOpde == null) {
        console.log("idher aya")
        res.statusCode = 404;
        var resBody = {
          suucess: false,
        }
        res.send(resBody);
      }
      else
        res.send(updatedOpde);
    },
    function (err) {

      res.statusCode = 500;
      var resBody = {
        error: err.errors,
        suucess: false,
        message: err.message+" "+"maybe you're entering unvalid Patient ID ",
      }
      res.send(resBody);
    }
    );

});

module.exports = router;