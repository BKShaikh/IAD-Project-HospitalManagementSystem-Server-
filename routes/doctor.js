var express = require('express');
var router = express.Router();
var db = require('../models/index');

/* GET users listing. */
router.get('/', function (req, res, next) {

  db.doctordata.findAll({}).then(
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
  let doctor = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    address: req.body.address,
    city: req.body.city,
    cnicno: req.body.cnicno,
    department: req.body.department,
    specialization: req.body.specialization,
    emergencyschedule: req.body.emergencyschedule,
    opdtiming: req.body.opdtiming,
    post: req.body.post
  };
  console.log(req.body);
  db.doctordata.create(doctor).then(
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
