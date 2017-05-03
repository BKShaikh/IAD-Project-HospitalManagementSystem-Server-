var express = require('express');
var router = express.Router();
var db = require('../models/index');
var verify = require('../middleware');


router.get('/',verify.rou ,function (req, res, next) {

  db.staffdata.findAll({}).then(
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
  let staff = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    address: req.body.address,
    city: req.body.city,
    cnicno: req.body.cnicno,
    post: req.body.post,
    country: req.body.country,
    phoneNo: req.body.phoneNo
  };
  console.log(req.body);
  db.staffdata.create(staff).then(
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
  db.staffdata.destroy({
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


router.patch('/update/:id',verify.rou, function (req, res, next) {
  const updates = req.body.updates;
  db.staffdata.findOne({
    where: {
      id: req.params.id
    }
  })

    .then(staff => {
      return staff.updateAttributes(updates)
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
    .then(updatedStaff => {
      if (updatedStaff == null) {
        // console.log("idher aya")
        res.statusCode = 404;
        var resBody = {
          suucess: false,
        }
        res.send(resBody);
      }
      else
        res.send(updatedStaff);
    },
    function (err) {

      res.statusCode = 500;
      var resBody = {
        error: err.errors,
        suucess: false,
        message: err.message,
      }
      res.send(resBody);
    }
    );
});


module.exports = router;