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


router.get('byid/:id', function (req, res, next) {

  db.doctordata.findOne({
    where: {
      id: req.params.id
    }
  }).then(
    function (response) {
      if (response == null ) {
        // console.log("idher che"  );
        // function (err) {


            res.statusCode = 404;
            var resBody = {
                // error: err.errors,
                suucess: false,
                // message: err.message,
            }
            res.send(resBody);
        // }
        // res.send("entered ID is not been set yet");
      }
      else {
        // console.log("nhi idher che", response);
        res.send(response);

      }
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



router.get('byname/:name', function (req, res, next) {
var name = req.params.name;
  db.doctordata.findOne({
    where: {
      firstname: name
    }
  }).then(
    function (response) {
      if (response == null ) {
        // console.log("idher che"  );
        // function (err) {


            res.statusCode = 404;
            var resBody = {
                // error: err.errors,
                suucess: false,
                // message: err.message,
            }
            res.send(resBody);
        // }
        // res.send("entered ID is not been set yet");
      }
      else {
        // console.log("nhi idher che", response);
        res.send(response);

      }
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

router.patch('/update/:id', function (req, res, next) {
  const updates = req.body.updates;
  db.doctordata.findOne({
    where: {
      id: req.params.id
    }
  })

    .then(doctor => {
      return doctor.updateAttributes(updates)
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
    .then(updatedDoctor => {
      if (updatedDoctor == null) {
        // console.log("idher aya")
        res.statusCode = 404;
        var resBody = {
          suucess: false,
        }
        res.send(resBody);
      }
      else
        res.send(updatedDoctor);
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
